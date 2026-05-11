export interface ContactEnv {
  SLACK_WEBHOOK_URL: string;
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

  const slackRes = await fetch(env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(slackBody),
  });

  if (!slackRes.ok) {
    const text = await slackRes.text();
    return json({ error: 'Slack delivery failed', detail: text }, 502);
  }

  return json({ ok: true });
}

export const onRequestPost: PagesFunction<ContactEnv> = ({ request, env }) =>
  handleContact(request, env);

