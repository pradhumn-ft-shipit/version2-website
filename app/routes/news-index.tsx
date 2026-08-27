import type { MetaDescriptor } from 'react-router';
import { useLoaderData } from 'react-router';
import News from '../../src/pages/News';
import { seoMeta, SITE_ORIGIN, type SeoConfig } from '../../src/lib/seo';
import { readNewsIndex } from '../lib/newsData.server';

// /resources/news — build-time loader reads the committed index off disk, so the
// full list of releases (reverse-chronological) ships in the prerendered <body>.
// Replaces the old client fetch('/news-data/index.json') on the render path.
export function loader() {
  const { items } = readNewsIndex();
  return { items };
}

const seo: SeoConfig = {
  title: 'News & Press | FastTrackr AI',
  description:
    'Company news, press releases, and announcements from FastTrackr AI, the AI-native platform built to run advisor transitions end to end.',
  canonical: `${SITE_ORIGIN}/resources/news`,
  ogType: 'website',
  ogImage: `${SITE_ORIGIN}/logomark.png`,
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default function NewsIndexRoute() {
  const { items } = useLoaderData<typeof loader>();
  return <News items={items} />;
}
