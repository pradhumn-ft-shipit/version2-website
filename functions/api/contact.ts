export interface ContactEnv {
  SLACK_WEBHOOK_URL: string;
  LOOPS_API_KEY?: string;
}

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  companyType?: string;
  interest?: string;
  message?: string;
  source?: string;
  // Honeypot field. Bots fill this; real users never see it.
  website?: string;
}

const INTEREST_LABELS: Record<string, string> = {
  'advisor-transitions': 'Advisor Transitions',
  'client-onboarding': 'Client Onboarding',
  'document-intelligence': 'Document Intelligence',
  'meeting-assistant': 'Meeting Assistant',
};

const LOOPS_TRANSACTIONAL_ID = 'cmp3m4caa045e0iytakc81lkx';
const LEAD_NOTIFICATION_EMAILS = ['pradhumn@fasttrackr.ai', 'vineet@fasttrackr.ai'];

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const escapeMrkdwn = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const formatTimestamp = () =>
  new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    dateStyle: 'medium',
    timeStyle: 'short',
  }) + ' PT';

export async function handleContact(request: Request, env: ContactEnv): Promise<Response> {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  // Honeypot trip → pretend success, drop silently.
  if (payload.website && payload.website.trim() !== '') {
    return json({ ok: true });
  }

  const required = ['firstName', 'lastName', 'email', 'message'] as const;
  for (const f of required) {
    if (!payload[f] || String(payload[f]).trim() === '') {
      return json({ error: `Missing field: ${f}` }, 400);
    }
  }

  if (!env.SLACK_WEBHOOK_URL) {
    return json({ error: 'Server not configured' }, 500);
  }

  const interestLabel =
    (payload.interest && INTEREST_LABELS[payload.interest]) ||
    INTEREST_LABELS['advisor-transitions'];

  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const email = payload.email!;
  const messageText = payload.message!.trim();
  const companyType = payload.companyType || 'Not provided';
  const source = payload.source || '';

  // Render the freeform message as a Slack quote block (each line prefixed with `>`).
  const quotedMessage = escapeMrkdwn(messageText)
    .split('\n')
    .map((line) => `> ${line}`)
    .join('\n');

  const slackBody = {
    text: `New demo request: ${interestLabel} (${fullName})`, // notification fallback
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `🚀 New demo request: ${interestLabel}`,
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Name*\n${escapeMrkdwn(fullName)}` },
          { type: 'mrkdwn', text: `*Email*\n<mailto:${email}|${escapeMrkdwn(email)}>` },
          { type: 'mrkdwn', text: `*Company type*\n${escapeMrkdwn(companyType)}` },
          { type: 'mrkdwn', text: `*Interested in*\n${interestLabel}` },
        ],
      },
      { type: 'divider' },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Message*\n${quotedMessage}` },
      },
      { type: 'divider' },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: source
              ? `🔗 <${source}|Source page>  ·  🕐 ${formatTimestamp()}`
              : `🕐 ${formatTimestamp()}`,
          },
        ],
      },
    ],
  };

  const submittedAt = formatTimestamp();

  const loopsDataVariables = {
    fullName,
    email,
    companyType,
    interestLabel,
    message: messageText,
    source: source || 'Direct',
    submittedAt,
  };

  const slackPromise = fetch(env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(slackBody),
  });

  const loopsPromises = env.LOOPS_API_KEY
    ? LEAD_NOTIFICATION_EMAILS.map((to) =>
        fetch('https://app.loops.so/api/v1/transactional', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${env.LOOPS_API_KEY}`,
          },
          body: JSON.stringify({
            transactionalId: LOOPS_TRANSACTIONAL_ID,
            email: to,
            dataVariables: loopsDataVariables,
          }),
        }),
      )
    : [];

  const [slackResult, ...loopsResults] = await Promise.allSettled([
    slackPromise,
    ...loopsPromises,
  ]);

  // Slack is the primary channel — fail loudly if it doesn't deliver.
  if (slackResult.status === 'rejected') {
    return json({ error: 'Slack delivery failed', detail: String(slackResult.reason) }, 502);
  }
  if (!slackResult.value.ok) {
    const text = await slackResult.value.text();
    return json({ error: 'Slack delivery failed', detail: text }, 502);
  }

  // Loops is best-effort — log failures but don't fail the form submission.
  await Promise.all(
    loopsResults.map(async (result, i) => {
      const to = LEAD_NOTIFICATION_EMAILS[i];
      if (result.status === 'rejected') {
        console.error(`Loops send to ${to} threw:`, result.reason);
        return;
      }
      if (!result.value.ok) {
        const text = await result.value.text().catch(() => '<no body>');
        console.error(`Loops send to ${to} failed (${result.value.status}):`, text);
      }
    }),
  );

  return json({ ok: true });
}

export const onRequestPost: PagesFunction<ContactEnv> = ({ request, env }) =>
  handleContact(request, env);

