import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import type { NewsArticle, NewsIndexFile } from '../../src/lib/news';

// Server-only (`.server`) news data source. React Router keeps `.server` modules
// out of the client bundle, so it is safe to touch `node:fs` here. These are the
// functions the framework `loader`s call at build time — they read the committed
// JSON that `scripts/build-blog-data.mjs` writes into `public/news-data/`.
//
// `public/news-data/` is git-ignored build output; it is always present after
// `npm run blog:build` (which runs first in `npm run build`). Mirror of
// app/lib/blogData.server.ts (ticket 004).

const NEWS_DATA_DIR = resolve(process.cwd(), 'public', 'news-data');
const POSTS_DIR = join(NEWS_DATA_DIR, 'posts');

/** Read the full news index (`{ count, items[] }`), reverse-chronological. */
export function readNewsIndex(): NewsIndexFile {
  const raw = readFileSync(join(NEWS_DATA_DIR, 'index.json'), 'utf8');
  return JSON.parse(raw) as NewsIndexFile;
}

/**
 * Read a single article's JSON by slug, or `null` if it doesn't exist.
 *
 * Path-safety: the slug becomes a filename, so reject anything with path
 * separators or `..`, then belt-and-braces verify the resolved path stays inside
 * POSTS_DIR. A slug that would escape the directory returns `null` (→ 404),
 * never a read outside the posts folder.
 */
export function readNewsArticle(slug: string): NewsArticle | null {
  if (!isSafeSlug(slug)) return null;

  const file = join(POSTS_DIR, `${slug}.json`);
  const resolved = resolve(file);
  if (resolved !== file || !resolved.startsWith(POSTS_DIR + sep)) return null;
  if (!existsSync(resolved)) return null;

  const raw = readFileSync(resolved, 'utf8');
  return JSON.parse(raw) as NewsArticle;
}

function isSafeSlug(slug: string): boolean {
  if (!slug) return false;
  if (slug.includes('/') || slug.includes('\\') || slug.includes('..')) return false;
  if (slug.includes('\0')) return false;
  return true;
}
