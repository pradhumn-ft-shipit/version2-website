import { readBlogIndex } from './blogData.server';
import { readNewsIndex } from './newsData.server';
import { readPodcastIndex } from './podcastData.server';
import { glossarySlugs as glossaryTermSlugs } from '../../src/lib/glossary';
import { categorySlugs as blogCategorySlugs } from '../../src/lib/blogCategories';
import { authorSlugs as siteAuthorSlugs } from '../../src/lib/authors';

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
  /** Podcast episode slugs → become `/resources/podcasts/<slug>`. */
  podcastSlugs?: string[];
  /** Glossary term slugs → become `/glossary/<slug>` (W3). */
  glossarySlugs?: string[];
  /** Blog category slugs → become `/blog/category/<slug>` (W4). */
  categorySlugs?: string[];
  /** Author slugs → become `/authors/<slug>` (W5). */
  authorSlugs?: string[];
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
  podcastSlugs = [],
  glossarySlugs = [],
  categorySlugs = [],
  authorSlugs = [],
}: PrerenderInput): string[] {
  const paths = [
    ...staticPaths,
    ...blogSlugs.map((slug) => `/blog/${slug}`),
    ...newsSlugs.map((slug) => `/resources/news/${slug}`),
    ...podcastSlugs.map((slug) => `/resources/podcasts/${slug}`),
    ...glossarySlugs.map((slug) => `/glossary/${slug}`),
    ...categorySlugs.map((slug) => `/blog/category/${slug}`),
    ...authorSlugs.map((slug) => `/authors/${slug}`),
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

/** Read every podcast slug from the committed index (`public/podcast-data/`). */
export function readPodcastSlugs(): string[] {
  return readPodcastIndex().items.map((item) => item.slug);
}

/** Read every glossary term slug from the curated data module (W3). */
export function readGlossarySlugs(): string[] {
  return glossaryTermSlugs;
}

/** Read every blog category slug from the canonical category list (W4). */
export function readCategorySlugs(): string[] {
  return blogCategorySlugs;
}

/** Read every author slug from the canonical author roster (W5). */
export function readAuthorSlugs(): string[] {
  return siteAuthorSlugs;
}
