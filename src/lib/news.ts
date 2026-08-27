// Pure, isomorphic news types + shaping helpers. This module is safe to import
// from client components AND from build-time loaders — it does NO I/O (no
// `fetch`, no `node:fs`). The data actually comes from framework `loader`s that
// read the committed JSON off disk at build time (see app/lib/newsData.server.ts);
// those loaders serialize the result into the prerendered HTML, so the full
// press-release body ships in the raw markup for non-JS crawlers.

export type CoverageLink = {
  outlet: string;
  url: string;
};

export type NewsIndexEntry = {
  slug: string;
  title: string;
  label: string;
  image: string | null;
  imageAlt: string;
  date: string | null;
  excerpt: string;
};

export type NewsArticle = NewsIndexEntry & {
  /** <title> for the article page; falls back to `title` when unset. */
  seoTitle: string | null;
  description: string;
  /** Original FastTrackr framing shown above the syndicated release text. */
  intro: string;
  author: string;
  coverage: CoverageLink[];
  content: string;
};

export type NewsIndexFile = { count: number; items: NewsIndexEntry[] };

/**
 * Same display format as the blog, but pinned to UTC: news dates are the
 * official release date, and must not slide a day in western timezones.
 */
export function formatNewsDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** YYYY-MM-DD for a <time datetime="…"> attribute. */
export function dateAttr(iso: string | null): string | undefined {
  if (!iso) return undefined;
  return iso.slice(0, 10);
}
