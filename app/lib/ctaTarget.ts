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
// mapped; everything else falls through to DEFAULT_CTA_TARGET.
const TOPIC_TO_TARGET: Record<string, CtaTarget> = {
  'advisor-transitions-and-repapering': {
    href: '/solutions/advisor-transitions',
    label: 'See how our advisor transition platform works',
  },
  'document-processing-and-back-office-automation': {
    href: '/solutions/document-intelligence',
    label: 'See how FastTrackr automates document processing',
  },
  'ai-in-client-communication-and-notetaking': {
    href: '/solutions/meeting-assistant',
    label: 'See how our AI meeting assistant works',
  },
};

export function ctaTargetForTopic(topic: string | null | undefined): CtaTarget {
  const id = resolveCategoryId(topic);
  return TOPIC_TO_TARGET[id] ?? DEFAULT_CTA_TARGET;
}
