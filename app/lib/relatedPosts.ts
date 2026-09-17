// W2 — pure, isomorphic selectors for the internal-linking engine.
//
// No I/O here (no fs, no fetch): the loaders in app/routes/* read the blog index
// off disk and hand the post list to these functions, so the selection logic is
// unit-testable in a plain Node environment. Category resolution reuses the same
// `resolveCategoryId` the Resources page uses, so "same topic" here means the
// same canonical category a reader sees on /resources-for-financial-advisors.

import type { BlogIndexEntry } from '../../src/lib/blog';
import { resolveCategoryId } from '../../src/lib/blogCategories';
import type { Cornerstone } from './cornerstones';

export type RelatedOptions = {
  /**
   * W4 — pillar posts to surface FIRST in the related list when the current post
   * shares the cornerstone's category. This is how the $19B repapering pillar
   * earns inbound internal links from every advisor-transition post. A cornerstone
   * only appears if it exists in `all` and is not the current post.
   */
  cornerstones?: Cornerstone[];
};

/**
 * Related posts for a given article: surface any category cornerstone first (W4),
 * then prefer posts in the SAME canonical category, then backfill by recency to
 * reach `limit`. The input list is already sorted recency-desc (see
 * scripts/build-blog-data.mjs), so pool order == recency.
 *
 * Guarantees: never returns the current slug, never duplicates a slug, returns
 * at most `limit`.
 */
export function selectRelatedPosts(
  current: Pick<BlogIndexEntry, 'slug' | 'topic'>,
  all: BlogIndexEntry[],
  limit = 3,
  options: RelatedOptions = {},
): BlogIndexEntry[] {
  const pool = all.filter((p) => p.slug !== current.slug);
  const currentCategory = resolveCategoryId(current.topic);

  const chosen: BlogIndexEntry[] = [];
  const seen = new Set<string>();

  const take = (candidates: BlogIndexEntry[]) => {
    for (const p of candidates) {
      if (chosen.length >= limit) break;
      if (seen.has(p.slug)) continue;
      chosen.push(p);
      seen.add(p.slug);
    }
  };

  // 0) cornerstone pillar(s) for this category — pulled from `pool` so a missing
  //    or self-referential cornerstone silently drops out (no broken link).
  const cornerstoneSlugs = new Set(
    (options.cornerstones ?? [])
      .filter((c) => c.topicId === currentCategory)
      .map((c) => c.slug),
  );
  if (cornerstoneSlugs.size) {
    take(pool.filter((p) => cornerstoneSlugs.has(p.slug)));
  }
  // 1) same-category posts (recency order preserved from `pool`)
  take(pool.filter((p) => resolveCategoryId(p.topic) === currentCategory));
  // 2) recency backfill from everything else
  take(pool);

  return chosen;
}
