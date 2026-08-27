import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import type { BlogIndexFile, BlogPost } from '../../src/lib/blog';

// Server-only (`.server`) blog data source. React Router keeps `.server` modules
// out of the client bundle, so it is safe to touch `node:fs` here. These are the
// functions the framework `loader`s call at build time — they read the committed
// JSON that `scripts/build-blog-data.mjs` writes into `public/blog-data/`.
//
// `public/blog-data/` is git-ignored build output; it is always present after
// `npm run blog:build` (which runs first in `npm run build`).

const BLOG_DATA_DIR = resolve(process.cwd(), 'public', 'blog-data');
const POSTS_DIR = join(BLOG_DATA_DIR, 'posts');

/** Read the full blog index (`{ count, posts[] }`). */
export function readBlogIndex(): BlogIndexFile {
  const raw = readFileSync(join(BLOG_DATA_DIR, 'index.json'), 'utf8');
  return JSON.parse(raw) as BlogIndexFile;
}

/**
 * Read a single post's JSON by slug, or `null` if it doesn't exist.
 *
 * Path-safety: the slug becomes a filename, so reject anything with path
 * separators or `..`, then belt-and-braces verify the resolved path stays inside
 * POSTS_DIR. A slug that would escape the directory returns `null` (→ 404),
 * never a read outside the posts folder.
 */
export function readBlogPost(slug: string): BlogPost | null {
  if (!isSafeSlug(slug)) return null;

  const file = join(POSTS_DIR, `${slug}.json`);
  const resolved = resolve(file);
  if (resolved !== file || !resolved.startsWith(POSTS_DIR + sep)) return null;
  if (!existsSync(resolved)) return null;

  const raw = readFileSync(resolved, 'utf8');
  return JSON.parse(raw) as BlogPost;
}

function isSafeSlug(slug: string): boolean {
  if (!slug) return false;
  if (slug.includes('/') || slug.includes('\\') || slug.includes('..')) return false;
  if (slug.includes('\0')) return false;
  return true;
}
