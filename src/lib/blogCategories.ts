// Canonical Topic values for the Resources page.
// To add a post to a category, set the `Topic` column in the CSV to one of
// the `title` strings below (exact match). Unknown / blank topics fall into
// the "More resources" bucket at the bottom of the page.

export type BlogCategory = {
  id: string;
  title: string;
  blurb: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'ai-in-client-communication-and-notetaking',
    title: 'Client Communication & Notetaking',
    blurb: 'How AI is changing meeting capture, follow-ups, and CRM hygiene.',
  },
  {
    id: 'document-processing-and-back-office-automation',
    title: 'Document Processing & Back-Office',
    blurb: 'Where automation pays off first: onboarding, compliance, and dynamic billing.',
  },
  {
    id: 'ai-for-client-prospecting-and-growth',
    title: 'Prospecting & Growth',
    blurb: 'Real-time signals, predictive lead scoring, and retention frameworks.',
  },
  {
    id: 'ai-for-compliance-security-and-data-management',
    title: 'Compliance, Security & Data',
    blurb: 'Vendor evaluation, time savings, and the modern data stack.',
  },
  {
    id: 'the-role-of-ai-in-wealth-management-strategy',
    title: 'AI in Wealth Management Strategy',
    blurb: 'The strategic case for AI across the modern advisory practice.',
  },
  {
    id: 'advisor-transitions-and-repapering',
    title: 'Advisor Transitions & Repapering',
    blurb: 'ACATs, NIGO rates, and the operations of moving a book.',
  },
  {
    id: 'advisor-trends-behavior-and-industry-commentary',
    title: 'Advisor Trends & Industry',
    blurb: 'Conversations with advisors, founders, and operators reshaping the industry.',
  },
  {
    id: 'fasttrackr-ai-in-action',
    title: 'FastTrackr AI in Action',
    blurb: 'Milestones, certifications, and where the team has shown up.',
  },
];

export const UNCATEGORIZED_CATEGORY: BlogCategory = {
  id: 'more-resources',
  title: 'More resources',
  blurb: 'Other articles from the FastTrackr AI team.',
};

const TITLE_LOOKUP = new Map(BLOG_CATEGORIES.map((c) => [c.title.toLowerCase(), c.id]));
const ID_LOOKUP = new Map(BLOG_CATEGORIES.map((c) => [c.id, c.id]));

// Map a post's `topic` string (set in the CSV) to a category id.
// Accepts either the exact title or the id, case-insensitive.
export function resolveCategoryId(topic: string | null | undefined): string {
  if (!topic) return UNCATEGORIZED_CATEGORY.id;
  const key = topic.trim().toLowerCase();
  return TITLE_LOOKUP.get(key) ?? ID_LOOKUP.get(key) ?? UNCATEGORIZED_CATEGORY.id;
}
