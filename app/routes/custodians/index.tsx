import type { MetaDescriptor } from 'react-router';
import CustodiansHub from '../../../src/pages/custodians/CustodiansHub';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Custodian Transitions | FastTrackr AI',
  description:
    'Repaper your book of business onto a new custodian in days. Custodian-specific transition guides for Schwab, Fidelity, and BNY Pershing.',
  canonical: '/custodians',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Custodian Transitions',
    description:
      'Custodian-specific advisor transition and repapering guides for moving a book of business onto Schwab, Fidelity, and BNY Pershing.',
    url: absoluteUrl('/custodians'),
    hasPart: [
      { '@type': 'WebPage', name: 'Move your book to Charles Schwab', url: absoluteUrl('/custodians/schwab') },
      { '@type': 'WebPage', name: 'Move your book to Fidelity', url: absoluteUrl('/custodians/fidelity') },
      { '@type': 'WebPage', name: 'Move your book to BNY Pershing', url: absoluteUrl('/custodians/pershing') },
    ],
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default CustodiansHub;
