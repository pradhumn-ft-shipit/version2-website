import type { MetaDescriptor } from 'react-router';
import Home from '../../src/pages/Home';
import { SITE_ORIGIN, seoMeta, type SeoConfig } from '../../src/lib/seo';

// Reference implementation of the route-meta SEO pattern (see seoMeta in
// src/lib/seo.ts). Tickets 003/004/005 copy this shape: build a SeoConfig for
// the route, then `return seoMeta(config)` from the module's `meta` export.
//
// Values mirror the homepage <head> that index.html shipped pre-migration: the
// full meta description, the shorter OG/Twitter hook, canonical "/", and the
// site's Organization JSON-LD (from scripts/prerender.mjs's organization()).
const seo: SeoConfig = {
  title: 'FastTrackr AI | Advisor transitions, finally built right.',
  description:
    'FastTrackr AI is the AI transition engine for wealth management. Move advisor books in weeks, not months. Purpose-built for advisor transitions and shaped by consultants, operators, and RIA founders who move billions in client assets every year.',
  ogDescription:
    'Move advisor books in weeks, not months. Purpose-built for advisor transitions.',
  canonical: '/',
  ogType: 'website',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FastTrackr AI',
    url: SITE_ORIGIN,
    logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/logo.png` },
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Home;
