import { readBlogIndex } from './blogData.server';
import { readNewsIndex } from './newsData.server';

// Zero-touch prerender enumeration (ticket 006).
//
// The `prerender` config in react-router.config.ts is a FUNCTION, not a static
// array, so the full site surface is derived at build time from two sources that
// already exist and update themselves:
//
//   1. `getStaticPaths()` — every fully-static path in the route tree (ticket
//      003): marketing / ICP / solutions / legal routes + every redirect. Dynamic
//      (`:slug`) and splat (`*`) routes are excluded by the framework. This is the
//      SINGLE canonical source for static routes — it can never drift from
//      app/routes.ts, so there is no per-deploy list to hand-edit.
//   2. Every blog + news slug read straight from the JSON indexes that
//      `scripts/build-blog-data.mjs` regenerates first in `npm run build`.
//
// Net effect: a new blog/news post is prerendered automatically the next build,
// with no edit to route or prerender config, ever.

export interface PrerenderInput {
  /** Fully-static route paths from the framework (`getStaticPaths()`). */
  staticPaths: string[];
  /** Blog post slugs → become `/blog/<slug>`. */
  blogSlugs: string[];
  /** News article slugs → become `/resources/news/<slug>`. */
  newsSlugs: string[];
}

/**
 * Combine the static route surface with every blog + news slug into the full,
 * de-duplicated list of paths to prerender. Pure: no disk access, so the tests
 * can drive it off fixture inputs and assert the zero-touch behaviour.
 */
export function buildPrerenderPaths({
  staticPaths,
  blogSlugs,
  newsSlugs,
}: PrerenderInput): string[] {
  const paths = [
    ...staticPaths,
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...newsSlugs.map((slug) => `/resources/news/${slug}`),
  ];
  // De-duplicate, preserving first-seen order.
  return Array.from(new Set(paths));
}

/** Read every blog slug from the committed blog index (`public/blog-data/`). */
export function readBlogSlugs(): string[] {
  return readBlogIndex().posts.map((post) => post.slug);
}

/** Read every news slug from the committed news index (`public/news-data/`). */
export function readNewsSlugs(): string[] {
  return readNewsIndex().items.map((item) => item.slug);
}
