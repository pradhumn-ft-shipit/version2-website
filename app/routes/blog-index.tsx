import type { MetaDescriptor } from 'react-router';
import { useLoaderData } from 'react-router';
import Blog from '../../src/pages/Blog';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';
import { readBlogIndex } from '../lib/blogData.server';

// /resources/blog — build-time loader reads the committed index off disk, so the
// full list of post titles/excerpts ships in the prerendered <body>. Replaces the
// old client fetch('/blog-data/index.json') on the render path (ticket 004).
export function loader() {
  const { posts } = readBlogIndex();
  return { posts };
}

const seo: SeoConfig = {
  title: 'Blog | FastTrackr AI',
  description:
    'Field notes from the operators reshaping wealth management: advisor transitions, AI in wealth, compliance, and the work behind the work.',
  canonical: '/resources/blog',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default function BlogIndexRoute() {
  const { posts } = useLoaderData<typeof loader>();
  return <Blog posts={posts} />;
}
