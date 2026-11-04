import type { MetaDescriptor } from 'react-router';
import Home from '../../src/pages/Home';
import { SITE_ORIGIN, seoMeta, type SeoConfig } from '../../src/lib/seo';

// Reference implementation of the route-meta SEO pattern (see seoMeta in
// src/lib/seo.ts). Tickets 003/004/005 copy this shape: build a SeoConfig for
// the route, then `return seoMeta(config)` from the module's `meta` export.
//
// Values mirror the homepage <head> that index.html shipped pre-migration: the
// meta description, canonical "/", and the site's Organization + WebSite JSON-LD.
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
  // PR3-06 (2026-11-04): Organization + WebSite in one @graph. sameAs are the
  // footer's social links (LinkedIn, YouTube, X; no Crunchbase). /about points
  // at #organization. The homepage FAQPage JSON-LD stays a separate block.
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_ORIGIN}/#organization`,
        name: 'FastTrackr AI',
        url: `${SITE_ORIGIN}/`,
        logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/logo.png` },
        description:
          "FastTrackr AI is software for advisor transitions. It works out which custodian and firm forms a move needs, then fills them from the advisor's data and sends them out.",
        founder: { '@type': 'Person', name: 'Vineet Mohan', jobTitle: 'Founder and CEO' },
        sameAs: [
          'https://www.linkedin.com/company/fasttrackr-ai/',
          'https://www.youtube.com/channel/UCnzPn4iuHJwjTj9bM_1FcbA',
          'https://x.com/Fasttrackr_AI',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_ORIGIN}/#website`,
        name: 'FastTrackr AI',
        url: `${SITE_ORIGIN}/`,
        publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      },
    ],
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Home;
