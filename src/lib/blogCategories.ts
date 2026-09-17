// Canonical Topic values for the Resources page.
// To add a post to a category, set the `Topic` column in the CSV to one of
// the `title` strings below (exact match). Unknown / blank topics fall into
// the "More resources" bucket at the bottom of the page.

export type BlogCategory = {
  id: string;
  title: string;
  blurb: string;
  // W4 — category hub (`/blog/category/<id>`) editorial copy. `intro` is the hero
  // sub-headline; `capsule` is the answer-capsule paragraph (a direct, citable
  // definition of the topic) that gives the hub page unique indexable content
  // instead of a bare post list. Optional so older tooling that only needs
  // id/title/blurb keeps compiling.
  intro?: string;
  capsule?: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'ai-in-client-communication-and-notetaking',
    title: 'Client Communication & Notetaking',
    blurb: 'How AI is changing meeting capture, follow-ups, and CRM hygiene.',
    intro: 'Meeting capture, follow-ups, and CRM hygiene — automated.',
    capsule:
      'AI notetaking for financial advisors records client meetings, drafts the follow-up, and updates the CRM automatically, so advisors leave a conversation with the summary and next steps already written. These articles cover how meeting-assistant tools work, what to look for, and where they save the most time.',
  },
  {
    id: 'document-processing-and-back-office-automation',
    title: 'Document Processing & Back-Office',
    blurb: 'Where automation pays off first: onboarding, compliance, and dynamic billing.',
    intro: 'Where automation pays off first: onboarding, forms, and billing.',
    capsule:
      'Back-office automation in wealth management applies AI to the document-heavy work behind an advisory practice — reading and completing forms, onboarding new clients, and running billing — cutting hours of manual data entry per client and the errors that come with it. These articles cover where firms start and what actually pays off.',
  },
  {
    id: 'ai-for-client-prospecting-and-growth',
    title: 'Prospecting & Growth',
    blurb: 'Real-time signals, predictive lead scoring, and retention frameworks.',
    intro: 'Signals, lead scoring, and retention frameworks that compound.',
    capsule:
      'AI for advisor prospecting and growth turns activity and market signals into prioritized outreach, predictive lead scoring, and retention plays — helping a practice grow AUM without adding headcount. These articles cover the acquisition and retention frameworks advisors are actually using.',
  },
  {
    id: 'ai-for-compliance-security-and-data-management',
    title: 'Compliance, Security & Data',
    blurb: 'Vendor evaluation, audit trails, and protecting client data.',
    intro: 'Audit trails, SOC 2, FINRA, and protecting client data.',
    capsule:
      'Compliance and security in wealth-management technology cover the controls that keep client data safe and examinations clean — SOC 2, FINRA and SEC requirements, automated audit trails, and how to evaluate a vendor before you trust it with client PII. These articles cover what regulators look for and how to stay ahead of it.',
  },
  {
    id: 'the-role-of-ai-in-wealth-management-strategy',
    title: 'AI in Wealth Management Strategy',
    blurb: 'The strategic case for AI across the modern advisory practice.',
    intro: 'The strategic case for AI across a modern advisory practice.',
    capsule:
      'AI in wealth management is the use of purpose-built automation across an advisory practice — from client meetings to back-office operations — to serve more clients with the same team. These articles make the strategic case: where AI helps today, where the hype outruns reality, and how to build the tech stack around it.',
  },
  {
    id: 'advisor-transitions-and-repapering',
    title: 'Advisor Transitions & Repapering',
    blurb: 'ACATS, NIGO rates, and the operations of moving a book.',
    intro: 'ACATS, NIGO rates, and the operations of moving a book.',
    capsule:
      'Advisor transition repapering is the process of re-executing the account paperwork required to move a book of business from one firm or custodian to another — the ACATS transfers, new-account forms, and NIGO (not-in-good-order) rework that decide how fast, and how completely, client assets follow an advisor. These articles cover the operations, technology, and timelines behind moving a book without losing accounts.',
  },
  {
    id: 'advisor-trends-behavior-and-industry-commentary',
    title: 'Advisor Trends & Industry',
    blurb: 'Conversations with advisors, founders, and operators reshaping the industry.',
    intro: 'Conversations with the operators reshaping wealth management.',
    capsule:
      'Industry commentary and advisor conversations on where wealth management is heading — consolidation, the generational wealth transfer, the rise of independent and advice-only models, and the operators driving the change. These articles and podcast conversations track the trends behind the tooling.',
  },
  {
    id: 'fasttrackr-ai-in-action',
    title: 'FastTrackr AI in Action',
    blurb: 'Milestones, certifications, and where the team has shown up.',
    intro: 'Milestones, certifications, and where the team has shown up.',
    capsule:
      'A record of FastTrackr AI milestones — product news, security certifications like SOC 2 Type II, and the events and conversations where the team has shown up. These articles cover what we have shipped and where we have been.',
  },
];

export const UNCATEGORIZED_CATEGORY: BlogCategory = {
  id: 'more-resources',
  title: 'More resources',
  blurb: 'Other articles from the FastTrackr AI team.',
  intro: 'More field notes from the FastTrackr AI team.',
  capsule:
    'Additional articles from the FastTrackr AI team that span more than one topic. Browse the full library, or pick a focused category above.',
};

/** Every category that has a hub page at `/blog/category/<id>` (W4), including
 *  the "more resources" catch-all. Order matters: the eight canonical topics
 *  first, then the catch-all last. */
export const ALL_CATEGORIES: BlogCategory[] = [...BLOG_CATEGORIES, UNCATEGORIZED_CATEGORY];

/** Slugs for prerender enumeration + route validation (W4). */
export const categorySlugs: string[] = ALL_CATEGORIES.map((c) => c.id);

const CATEGORY_BY_SLUG = new Map(ALL_CATEGORIES.map((c) => [c.id, c]));

/** Resolve a hub slug to its category, or `undefined` for an unknown slug (→ 404). */
export function getCategoryBySlug(slug: string | null | undefined): BlogCategory | undefined {
  if (!slug) return undefined;
  return CATEGORY_BY_SLUG.get(slug.trim().toLowerCase());
}

const TITLE_LOOKUP = new Map(BLOG_CATEGORIES.map((c) => [c.title.toLowerCase(), c.id]));
const ID_LOOKUP = new Map(BLOG_CATEGORIES.map((c) => [c.id, c.id]));

// Map a post's `topic` string (set in the CSV) to a category id.
// Accepts either the exact title or the id, case-insensitive.
export function resolveCategoryId(topic: string | null | undefined): string {
  if (!topic) return UNCATEGORIZED_CATEGORY.id;
  const key = topic.trim().toLowerCase();
  return TITLE_LOOKUP.get(key) ?? ID_LOOKUP.get(key) ?? UNCATEGORIZED_CATEGORY.id;
}
