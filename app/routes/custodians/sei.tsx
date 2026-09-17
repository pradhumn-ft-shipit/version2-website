import type { MetaDescriptor } from 'react-router';
import SEICustodian from '../../../src/pages/custodians/SEI';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Move Your Book to SEI | FastTrackr AI',
  description:
    'Repaper an advisor book onto SEI in days. How the ACATS transfer works, the NIGO pitfalls to avoid, and how FastTrackr prepares the paperwork.',
  canonical: '/custodians/sei',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to SEI',
    serviceType: 'Advisor transition and repapering',
    description:
      'Repapering and advisor transition support for moving a book of business onto SEI, including ACATS transfers and new-account paperwork.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/sei'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default SEICustodian;
