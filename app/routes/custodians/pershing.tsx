import type { MetaDescriptor } from 'react-router';
import PershingCustodian from '../../../src/pages/custodians/Pershing';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Move Your Book to BNY Pershing | FastTrackr AI',
  description:
    'Repaper an advisor book onto BNY Pershing in days. How NetX360+ onboarding and ACATS work, the NIGO rework to avoid, and how FastTrackr prepares the forms.',
  canonical: '/custodians/pershing',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to BNY Pershing',
    serviceType: 'Advisor transition and repapering',
    description:
      'Repapering and advisor transition support for moving a book of business onto BNY Pershing, including NetX360+ onboarding and ACATS transfers.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/pershing'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default PershingCustodian;
