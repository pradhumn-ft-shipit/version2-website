import type { MetaDescriptor } from 'react-router';
import { useLoaderData } from 'react-router';
import Podcasts from '../../src/pages/Podcasts';
import { seoMeta, SITE_ORIGIN, type SeoConfig } from '../../src/lib/seo';
import { readPodcastIndex } from '../lib/podcastData.server';

// /resources/podcasts — build-time loader reads the committed index off disk, so
// the full list of episodes (reverse-chronological) ships in the prerendered
// <body>. Mirror of app/routes/news-index.tsx.
export function loader() {
  const { items } = readPodcastIndex();
  return { items };
}

const seo: SeoConfig = {
  title: 'Advisor Ally Podcast | FastTrackr AI',
  description:
    'Advisor Ally: candid conversations on advisor transitions, independence, and growing an RIA — full YouTube episodes with detailed written recaps.',
  canonical: `${SITE_ORIGIN}/resources/podcasts`,
  ogType: 'website',
  ogImage: `${SITE_ORIGIN}/logomark.png`,
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default function PodcastIndexRoute() {
  const { items } = useLoaderData<typeof loader>();
  return <Podcasts items={items} />;
}
