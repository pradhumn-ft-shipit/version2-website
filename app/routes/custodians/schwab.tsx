import type { MetaDescriptor } from 'react-router';
import SchwabCustodian from '../../../src/pages/custodians/Schwab';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Move Your Book to Charles Schwab | FastTrackr AI',
  description:
    'Repaper an advisor book onto Charles Schwab in days. How the ACATS transfer works, the NIGO pitfalls to avoid, and how FastTrackr prepares the paperwork.',
  canonical: '/custodians/schwab',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to Charles Schwab',
    serviceType: 'Advisor transition and repapering',
    description:
      'Repapering and advisor transition support for moving a book of business onto Charles Schwab, including ACATS transfers and new-account paperwork.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/schwab'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default SchwabCustodian;
