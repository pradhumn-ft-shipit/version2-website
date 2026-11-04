import type { MetaDescriptor } from 'react-router';
import Home from '../../src/pages/Home';
import { SITE_ORIGIN, seoMeta, type SeoConfig } from '../../src/lib/seo';

// Reference implementation of the route-meta SEO pattern (see seoMeta in
// src/lib/seo.ts). Tickets 003/004/005 copy this shape: build a SeoConfig for
// the route, then `return seoMeta(config)` from the module's `meta` export.
//
// Values mirror the homepage <head> that index.html shipped pre-migration: the
// full meta description, the shorter OG/Twitter hook, canonical "/", and the
// site's Organization JSON-LD.
// REVIEW (W0c): "weeks" → "days" in description + ogDescription (was "in weeks, not months").
const seo: SeoConfig = {
  title: 'FastTrackr AI | Advisor transitions, finally built right.',
  // PR3-04 (2026-11-04): ~155-char description (the old 244-char one was cut
  // in Google's snippet). og/twitter descriptions fall back to this same text.
  description:
    'Advisor transitions in days, not months. FastTrackr AI works out every custodian and firm form a move needs, fills it from your data and sends it to DocuSign.',
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
