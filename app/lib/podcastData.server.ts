import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import type { PodcastEpisode, PodcastIndexFile } from '../../src/lib/podcasts';

// Server-only (`.server`) podcast data source. React Router keeps `.server`
// modules out of the client bundle, so it is safe to touch `node:fs` here. These
// are the functions the framework `loader`s call at build time — they read the
// committed JSON that `scripts/build-blog-data.mjs` writes into
// `public/podcast-data/`.
//
// `public/podcast-data/` is git-ignored build output; it is always present after
// `npm run blog:build` (which runs first in `npm run build`). Mirror of
// app/lib/newsData.server.ts.

const PODCAST_DATA_DIR = resolve(process.cwd(), 'public', 'podcast-data');
const POSTS_DIR = join(PODCAST_DATA_DIR, 'posts');

/** Read the full podcast index (`{ count, items[] }`), reverse-chronological. */
export function readPodcastIndex(): PodcastIndexFile {
  const raw = readFileSync(join(PODCAST_DATA_DIR, 'index.json'), 'utf8');
  return JSON.parse(raw) as PodcastIndexFile;
}

/**
 * Read a single episode's JSON by slug, or `null` if it doesn't exist.
 *
 * Path-safety: the slug becomes a filename, so reject anything with path
 * separators or `..`, then belt-and-braces verify the resolved path stays inside
 * POSTS_DIR. A slug that would escape the directory returns `null` (→ 404),
 * never a read outside the posts folder. Mirror of readNewsArticle.
 */
export function readPodcastEpisode(slug: string): PodcastEpisode | null {
  if (!isSafeSlug(slug)) return null;

  const file = join(POSTS_DIR, `${slug}.json`);
  const resolved = resolve(file);
  if (resolved !== file || !resolved.startsWith(POSTS_DIR + sep)) return null;
  if (!existsSync(resolved)) return null;

  const raw = readFileSync(resolved, 'utf8');
  return JSON.parse(raw) as PodcastEpisode;
}

function isSafeSlug(slug: string): boolean {
  if (!slug) return false;
  if (slug.includes('/') || slug.includes('\\') || slug.includes('..')) return false;
  if (slug.includes('\0')) return false;
  return true;
}
