import type { MetaDescriptor } from 'react-router';
import Resources from '../../src/pages/Resources';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

// The Resources page reads the blog index via a client-side fetch (useEffect), so
// at build time it prerenders full page chrome with the category listing hydrating
// in on the client. That thin-stub behavior is intentional: it keeps this route
// independent of ticket 004's blog index loader (lower-risk path). If/when 004
// lands a build-time index loader, this route can adopt it for a fully-static list.
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

export default Resources;
