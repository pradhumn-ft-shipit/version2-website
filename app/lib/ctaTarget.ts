// W2 — map a post's topic to the primary commercial ("money") page it should
// funnel to. Gives every blog post and podcast episode one contextual internal
// link to a /solutions or /who-we-serve page, instead of only /contact.
//
// Pure + isomorphic: keyed off the canonical category id (via resolveCategoryId),
// so it stays in lockstep with the Resources taxonomy and W4 re-tagging.

import { resolveCategoryId } from '../../src/lib/blogCategories';

export type CtaTarget = {
  href: string;
  /** Anchor text — reads as an in-context link, not a nav label. */
  label: string;
};

// Default for unknown / null / untagged topics: the flagship transition page.
export const DEFAULT_CTA_TARGET: CtaTarget = {
  href: '/solutions/advisor-transitions',
  label: 'See how our advisor transition platform works',
};

// category id → money page. Only categories with a clear commercial home are
// mapped; everything else falls through to DEFAULT_CTA_TARGET. (PR1-06: the
// document-processing and notetaking categories used to point at the retired
// module pages; they now fall through to the advisor-transitions default.)
const TOPIC_TO_TARGET: Record<string, CtaTarget> = {
  'advisor-transitions-and-repapering': {
    href: '/solutions/advisor-transitions',
    label: 'See how our advisor transition platform works',
  },
};

export function ctaTargetForTopic(topic: string | null | undefined): CtaTarget {
  const id = resolveCategoryId(topic);
  return TOPIC_TO_TARGET[id] ?? DEFAULT_CTA_TARGET;
}
