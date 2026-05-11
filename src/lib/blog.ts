export type BlogIndexEntry = {
  slug: string;
  title: string;
  image: string | null;
  imageAlt: string;
  date: string | null;
  author: string;
  excerpt: string;
  topic: string | null;
  persona: string | null;
  readingTime: number | null;
};

export type BlogPost = BlogIndexEntry & {
  description: string;
  content: string;
};

type IndexFile = { count: number; posts: BlogIndexEntry[] };

let indexCache: Promise<IndexFile> | null = null;
const postCache = new Map<string, Promise<BlogPost | null>>();

export function fetchBlogIndex(): Promise<IndexFile> {
  if (!indexCache) {
    // Primary: posts-list.json (renamed 2026-05-11 from index.json to
    // sidestep a Cloudflare Pages asset state that 500s on the old path).
    // Fallback to legacy index.json so a stale cached client during the
    // transition still works.
    indexCache = fetch('/blog-data/posts-list.json')
      .then((res) => {
        if (res.ok) return res.json() as Promise<IndexFile>;
        if (res.status === 404) {
          return fetch('/blog-data/index.json').then((legacy) => {
            if (!legacy.ok) throw new Error(`Blog index fetch failed: ${legacy.status}`);
            return legacy.json() as Promise<IndexFile>;
          });
        }
        throw new Error(`Blog index fetch failed: ${res.status}`);
      });
  }
  return indexCache;
}

export function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  if (!postCache.has(slug)) {
    postCache.set(
      slug,
      fetch(`/blog-data/posts/${encodeURIComponent(slug)}.json`).then((res) => {
        if (res.status === 404) return null;
        if (!res.ok) throw new Error(`Blog post fetch failed: ${res.status}`);
        return res.json() as Promise<BlogPost>;
      })
    );
  }
  return postCache.get(slug)!;
}

export function formatBlogDate(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
