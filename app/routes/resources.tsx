import type { MetaDescriptor } from 'react-router';
import { useLoaderData } from 'react-router';
import Resources from '../../src/pages/Resources';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';
import { readBlogIndex } from '../lib/blogData.server';

// /resources-for-financial-advisors — build-time loader reads the committed blog
// index off disk (ticket 004), so the grouped category listing ships fully in the
// prerendered <body>. Previously this route rendered chrome only and hydrated the
// list client-side via fetch('/blog-data/index.json').
export function loader() {
  const { posts } = readBlogIndex();
  return { posts };
}

const seo: SeoConfig = {
  title: 'AI Resources for Financial Advisors | FastTrackr AI',
  description:
    'The AI playbook for modern advisors: deep dives and field notes for advisors, RIAs, and wealth firms putting AI to work — without the buzzwords.',
  canonical: '/resources-for-financial-advisors',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default function ResourcesRoute() {
  const { posts } = useLoaderData<typeof loader>();
  return <Resources posts={posts} />;
}
