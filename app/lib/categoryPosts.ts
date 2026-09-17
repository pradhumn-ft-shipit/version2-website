// W4 — pure selector for the category hub pages (`/blog/category/<slug>`).
//
// No I/O: the route loader reads the blog index off disk and hands the list in,
// so the filtering stays unit-testable in plain Node. "Belongs to a category"
// reuses the same resolveCategoryId the Resources page and related-posts engine
// use, so a hub shows exactly the posts a reader sees grouped under that heading
// on /resources-for-financial-advisors.

import type { BlogIndexEntry } from '../../src/lib/blog';
import { resolveCategoryId } from '../../src/lib/blogCategories';

/**
 * Every post whose canonical category resolves to `categorySlug`, preserving the
 * input order (recency-desc from the index). An unknown slug returns [].
 */
export function postsInCategory(
  posts: BlogIndexEntry[],
  categorySlug: string,
): BlogIndexEntry[] {
  return posts.filter((p) => resolveCategoryId(p.topic) === categorySlug);
}
