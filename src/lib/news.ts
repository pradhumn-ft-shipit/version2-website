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

type IndexFile = { count: number; items: NewsIndexEntry[] };

let indexCache: Promise<IndexFile> | null = null;
const articleCache = new Map<string, Promise<NewsArticle | null>>();

export function fetchNewsIndex(): Promise<IndexFile> {
  if (!indexCache) {
    indexCache = fetch('/news-data/index.json').then((res) => {
      if (!res.ok) throw new Error(`News index fetch failed: ${res.status}`);
      return res.json() as Promise<IndexFile>;
    });
  }
  return indexCache;
}

export function fetchNewsArticle(slug: string): Promise<NewsArticle | null> {
  if (!articleCache.has(slug)) {
    articleCache.set(
      slug,
      fetch(`/news-data/posts/${encodeURIComponent(slug)}.json`).then((res) => {
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`News article fetch failed: ${res.status}`);
        return res.json() as Promise<NewsArticle>;
      })
    );
  }
  return articleCache.get(slug)!;
}

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
