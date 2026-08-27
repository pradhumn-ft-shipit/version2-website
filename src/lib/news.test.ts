import { describe, it, expect } from 'vitest';
import { readNewsIndex, readNewsArticle } from '../../app/lib/newsData.server';

// These lock the build-time news loaders (ticket 005). They read the committed
// JSON that `npm run blog:build` writes into public/news-data/ (run automatically
// via the `pretest` script), i.e. the exact data the framework `loader`s serve.

describe('readNewsIndex', () => {
  it('returns { count, items[] } with count === items.length', () => {
    const index = readNewsIndex();
    expect(Array.isArray(index.items)).toBe(true);
    expect(index.items.length).toBeGreaterThan(0);
    expect(index.count).toBe(index.items.length);
  });

  it('returns articles in reverse-chronological order (newest first)', () => {
    const { items } = readNewsIndex();
    const times = items.map((i) => (i.date ? new Date(i.date).getTime() : 0));
    for (let n = 1; n < times.length; n++) {
      expect(times[n - 1]).toBeGreaterThanOrEqual(times[n]);
    }
  });
});

describe('readNewsArticle', () => {
  it('returns the parsed article (title + intro + body) for a known on-disk slug', () => {
    const { items } = readNewsIndex();
    const slug = items[0].slug;

    const article = readNewsArticle(slug);
    expect(article).not.toBeNull();
    expect(article!.slug).toBe(slug);
    expect(article!.title).toBeTruthy();
    expect(typeof article!.intro).toBe('string');
    expect(typeof article!.content).toBe('string');
    expect(article!.content.length).toBeGreaterThan(0);
  });

  it('resolves an unknown slug to null (404 path), not a thrown error', () => {
    expect(() => readNewsArticle('this-slug-does-not-exist-xyz')).not.toThrow();
    expect(readNewsArticle('this-slug-does-not-exist-xyz')).toBeNull();
  });

  it('reads a URL-sensitive / path-escaping slug safely (no path escape)', () => {
    expect(readNewsArticle('../../package')).toBeNull();
    expect(readNewsArticle('../../../etc/passwd')).toBeNull();
    expect(readNewsArticle('foo/bar')).toBeNull();
    expect(readNewsArticle('')).toBeNull();
  });
});
