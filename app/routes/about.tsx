import type { MetaDescriptor } from 'react-router';
import About from '../../src/pages/About';
import { SITE_ORIGIN, absoluteUrl, seoMeta, type SeoConfig } from '../../src/lib/seo';

// PR3-07 (2026-11-04). AboutPage points at the Organization node the homepage
// publishes (PR3-06) by its @id, so there is one Organization for the site.
const seo: SeoConfig = {
  title: 'About FastTrackr AI',
  description:
    'FastTrackr AI is the purpose-built platform for advisor transitions: the custodian and firm paperwork a move needs, worked out up front and filled from your data.',
  canonical: '/about',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${absoluteUrl('/about')}#webpage`,
    name: 'About FastTrackr AI',
    url: absoluteUrl('/about'),
    about: { '@id': `${SITE_ORIGIN}/#organization` },
    isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default About;
