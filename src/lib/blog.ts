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
    indexCache = fetch('/api/blog-index').then((res) => {
      if (!res.ok) throw new Error(`Blog index fetch failed: ${res.status}`);
      return res.json() as Promise<IndexFile>;
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
