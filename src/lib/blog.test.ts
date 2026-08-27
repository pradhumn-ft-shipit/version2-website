import { describe, it, expect } from 'vitest';
import { readBlogIndex, readBlogPost } from '../../app/lib/blogData.server';

// These lock the build-time blog loaders (ticket 004). They read the committed
// JSON that `npm run blog:build` writes into public/blog-data/ (run automatically
// via the `pretest` script), i.e. the exact data the framework `loader`s serve.

describe('readBlogIndex', () => {
  it('returns { count, posts[] } with count === posts.length', () => {
    const index = readBlogIndex();
    expect(Array.isArray(index.posts)).toBe(true);
    expect(index.posts.length).toBeGreaterThan(0);
    expect(index.count).toBe(index.posts.length);
  });
});

describe('readBlogPost', () => {
  it('returns the parsed post object for a known on-disk slug', () => {
    const { posts } = readBlogIndex();
    const slug = posts[0].slug;

    const post = readBlogPost(slug);
    expect(post).not.toBeNull();
    expect(post!.slug).toBe(slug);
    expect(post!.title).toBeTruthy();
    expect(typeof post!.content).toBe('string');
    expect(post!.content.length).toBeGreaterThan(0);
  });

  it('resolves an unknown slug to null (404 path), not a thrown error', () => {
    expect(() => readBlogPost('this-slug-does-not-exist-xyz')).not.toThrow();
    expect(readBlogPost('this-slug-does-not-exist-xyz')).toBeNull();
  });

  it('reads a URL-sensitive / path-escaping slug safely (no path escape)', () => {
    // A traversal attempt must not read a file outside the posts directory.
    expect(readBlogPost('../../package')).toBeNull();
    expect(readBlogPost('../../../etc/passwd')).toBeNull();
    expect(readBlogPost('foo/bar')).toBeNull();
    expect(readBlogPost('')).toBeNull();
  });
});
