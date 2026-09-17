// W4 — cornerstone (pillar) posts for the internal-linking engine.
//
// A cornerstone is a canonical pillar article that every post in its category
// should link INTO, so link equity concentrates on the URL we want to rank
// instead of scattering. The $19B repapering explainer is the ACATS/repapering
// pillar: before W4 it had zero inbound internal links. Surfacing it as the
// first "related" link on every advisor-transition post gives it crawlable
// inbound links across the corpus, in the prerendered HTML, without hand-editing
// hundreds of legacy post bodies. See selectRelatedPosts (app/lib/relatedPosts.ts).

export type Cornerstone = {
  /** Blog slug of the pillar post (must exist in the blog index to render). */
  slug: string;
  /** Category id (from blogCategories) whose posts should link to this pillar. */
  topicId: string;
};

export const CORNERSTONES: Cornerstone[] = [
  {
    slug: 'what-is-advisor-transition-repapering-19b-problem',
    topicId: 'advisor-transitions-and-repapering',
  },
];
