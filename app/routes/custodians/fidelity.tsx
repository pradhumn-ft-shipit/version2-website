import type { MetaDescriptor } from 'react-router';
import FidelityCustodian from '../../../src/pages/custodians/Fidelity';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Move Your Book to Fidelity | FastTrackr AI',
  description:
    'Repaper an advisor book onto Fidelity in days. How the transfer of assets works, why "in good order" matters, and how FastTrackr prepares the paperwork.',
  canonical: '/custodians/fidelity',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to Fidelity',
    serviceType: 'Advisor transition and repapering',
    description:
      'Repapering and advisor transition support for moving a book of business onto Fidelity, including transfer of assets and new-account paperwork.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/fidelity'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default FidelityCustodian;
