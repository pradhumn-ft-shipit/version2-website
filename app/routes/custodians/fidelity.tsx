import type { MetaDescriptor } from 'react-router';
import FidelityCustodian from '../../../src/pages/custodians/Fidelity';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Move Your Book to Fidelity | FastTrackr AI',
  description:
    'Repaper an advisor book onto Fidelity in days. How a move works, the Advisor Change form when you stay at Fidelity, and why "in good order" matters.',
  canonical: '/custodians/fidelity',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to Fidelity',
    serviceType: 'Advisor transition and repapering',
    description:
      'Repapering and advisor transition support for moving a book of business onto Fidelity, including transfer of assets, new-account paperwork, and the Advisor Change form when an advisor changes firms but stays at Fidelity.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/fidelity'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default FidelityCustodian;
