import type { MetaDescriptor } from 'react-router';
import PershingCustodian from '../../../src/pages/custodians/Pershing';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'BNY Pershing (Coming Soon) | FastTrackr AI',
  description:
    'BNY Pershing is coming soon to FastTrackr; we\'re testing it internally. How NetX360+ onboarding and ACATS transfers work, and where Pershing paperwork goes NIGO.',
  canonical: '/custodians/pershing',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to BNY Pershing (coming soon)',
    serviceType: 'Advisor transition and repapering',
    description:
      'Coming soon, not yet live (we\'re testing it internally): repapering and advisor transition support for moving a book of business onto BNY Pershing, including NetX360+ onboarding and ACATS transfers.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/pershing'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default PershingCustodian;
