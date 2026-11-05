import type { MetaDescriptor } from 'react-router';
import CustodiansHub from '../../../src/pages/custodians/CustodiansHub';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Custodian Transitions | FastTrackr AI',
  description:
    'Move your book in days, whether you change custodian or only change firms. Guides for Fidelity, Charles Schwab, Goldman Sachs and SEI. BNY Pershing coming soon.',
  canonical: '/custodians',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Custodian Transitions',
    description:
      'Move your book in days, whether you change custodian or only change firms. Guides for Fidelity, Charles Schwab, Goldman Sachs and SEI. BNY Pershing coming soon.',
    url: absoluteUrl('/custodians'),
    hasPart: [
      { '@type': 'WebPage', name: 'Move your book to Charles Schwab', url: absoluteUrl('/custodians/schwab') },
      { '@type': 'WebPage', name: 'Move your book to Fidelity', url: absoluteUrl('/custodians/fidelity') },
      { '@type': 'WebPage', name: 'Move your book to SEI', url: absoluteUrl('/custodians/sei') },
      { '@type': 'WebPage', name: 'Goldman Sachs: data in Goldman\'s own format', url: absoluteUrl('/custodians/goldman-sachs') },
      { '@type': 'WebPage', name: 'BNY Pershing (coming soon)', url: absoluteUrl('/custodians/pershing') },
    ],
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default CustodiansHub;
