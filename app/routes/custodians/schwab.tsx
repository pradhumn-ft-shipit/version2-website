import type { MetaDescriptor } from 'react-router';
import SchwabCustodian from '../../../src/pages/custodians/Schwab';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Move Your Book to Charles Schwab | FastTrackr AI',
  description:
    'Repaper an advisor book onto Charles Schwab in days. How a move works, the LPOA when you stay at Schwab, and the NIGO pitfalls to avoid.',
  canonical: '/custodians/schwab',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to Charles Schwab',
    serviceType: 'Advisor transition and repapering',
    description:
      'Repapering and advisor transition support for moving a book of business onto Charles Schwab, including ACATS transfers, new-account paperwork, and the LPOA when an advisor changes firms but stays at Schwab.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/schwab'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default SchwabCustodian;
