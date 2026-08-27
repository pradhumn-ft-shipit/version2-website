import { describe, it, expect } from 'vitest';
import {
  buildPrerenderPaths,
  readBlogSlugs,
  readNewsSlugs,
} from './prerenderPaths';
import { readBlogIndex } from './blogData.server';
import { readNewsIndex } from './newsData.server';

// These lock the zero-touch prerender enumerator (ticket 006). They read the
// committed JSON that `npm run blog:build` writes into public/blog-data/ and
// public/news-data/ (run automatically via the `pretest` script) — the exact
// data react-router.config.ts feeds to `buildPrerenderPaths` at build time.

describe('buildPrerenderPaths — full slug coverage from the indexes', () => {
  it('emits one /blog/<slug> per blog-index post and one /resources/news/<slug> per news item', () => {
    const blogSlugs = readBlogSlugs();
    const newsSlugs = readNewsSlugs();
    const paths = buildPrerenderPaths({
      staticPaths: ['/', '/pricing'],
      blogSlugs,
      newsSlugs,
    });

    const blogPaths = paths.filter((p) => p.startsWith('/blog/'));
    const newsPaths = paths.filter((p) => p.startsWith('/resources/news/'));

    // Count of /blog/* === blog index count; /resources/news/* === news count.
    expect(blogPaths.length).toBe(readBlogIndex().count);
    expect(newsPaths.length).toBe(readNewsIndex().count);

    // Every slug on disk has a corresponding enumerated path.
    for (const slug of blogSlugs) expect(paths).toContain(`/blog/${slug}`);
    for (const slug of newsSlugs) expect(paths).toContain(`/resources/news/${slug}`);
  });
});

describe('buildPrerenderPaths — zero-touch (driven off a fixture index)', () => {
  it('a new post added to the index appears as a path with no code/config change', () => {
    const before = buildPrerenderPaths({
      staticPaths: ['/'],
      blogSlugs: ['existing-post'],
      newsSlugs: [],
    });
    expect(before).not.toContain('/blog/brand-new-post');

    // Simulate build-blog-data adding a post to the index — same function, no edit.
    const after = buildPrerenderPaths({
      staticPaths: ['/'],
      blogSlugs: ['existing-post', 'brand-new-post'],
      newsSlugs: [],
    });
    expect(after).toContain('/blog/brand-new-post');
    expect(after.length).toBe(before.length + 1);
  });

  it('the same applies to a newly-added news item', () => {
    const paths = buildPrerenderPaths({
      staticPaths: ['/'],
      blogSlugs: [],
      newsSlugs: ['fresh-release'],
    });
    expect(paths).toContain('/resources/news/fresh-release');
  });
});

describe('buildPrerenderPaths — static routes present and de-duplicated', () => {
  it('preserves the static route surface passed in', () => {
    const staticPaths = ['/', '/pricing', '/resources/blog', '/resources/news'];
    const paths = buildPrerenderPaths({ staticPaths, blogSlugs: [], newsSlugs: [] });
    for (const p of staticPaths) expect(paths).toContain(p);
  });

  it('emits no path twice, even with duplicate inputs', () => {
    const paths = buildPrerenderPaths({
      staticPaths: ['/', '/', '/pricing'],
      blogSlugs: ['dupe', 'dupe', 'unique'],
      newsSlugs: [],
    });
    expect(paths.length).toBe(new Set(paths).size);
    expect(paths.filter((p) => p === '/').length).toBe(1);
    expect(paths.filter((p) => p === '/blog/dupe').length).toBe(1);
  });

  it('the real enumeration (static + all slugs) contains no duplicates', () => {
    const paths = buildPrerenderPaths({
      staticPaths: ['/', '/pricing', '/resources/blog', '/resources/news'],
      blogSlugs: readBlogSlugs(),
      newsSlugs: readNewsSlugs(),
    });
    expect(paths.length).toBe(new Set(paths).size);
  });
});
