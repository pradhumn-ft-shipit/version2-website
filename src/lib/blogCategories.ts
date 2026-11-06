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
    id: 'advisor-transitions-and-repapering',
    title: 'Advisor Transitions & Repapering',
    blurb: 'ACATS, NIGO rates, and the operations of moving a book.',
    intro: 'ACATS, NIGO rates, and the operations of moving a book.',
    capsule:
      'Advisor transition repapering is the process of re-executing the account paperwork required to move a book of business from one firm or custodian to another — the ACATS transfers, new-account forms, and NIGO (not-in-good-order) rework that decide how fast, and how completely, client assets follow an advisor. These articles cover the operations, technology, and timelines behind moving a book without losing accounts.',
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
 *  the "more resources" catch-all. Order matters: the canonical topics
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
