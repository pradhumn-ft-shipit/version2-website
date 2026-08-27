// Pure, isomorphic blog types + shaping helpers. This module is safe to import
// from client components AND from build-time loaders — it does NO I/O (no
// `fetch`, no `node:fs`). The data actually comes from framework `loader`s that
// read the committed JSON off disk at build time (see app/lib/blogData.server.ts);
// those loaders serialize the result into the prerendered HTML, so the full
// article body ships in the raw markup for non-JS crawlers.

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

export type BlogIndexFile = { count: number; posts: BlogIndexEntry[] };

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
