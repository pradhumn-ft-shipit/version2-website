import type { MetaDescriptor } from 'react-router';
import GoldmanSachsCustodian from '../../../src/pages/custodians/GoldmanSachs';
import { seoMeta, type SeoConfig, absoluteUrl } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Moving a Book to Goldman Sachs | FastTrackr AI',
  description:
    'Move an advisor book to Goldman Sachs faster. FastTrackr collects and structures every household and hands the data back in Goldman’s own format, ready to upload.',
  canonical: '/custodians/goldman-sachs',
  ogImage: '/logomark.png',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Advisor transitions to Goldman Sachs',
    serviceType: 'Advisor transition data preparation',
    description:
      'Advisor transition support for moving a book of business to Goldman Sachs: FastTrackr collects and structures household and account data and returns it in Goldman’s required format for upload into Goldman’s onboarding workflow.',
    provider: { '@type': 'Organization', name: 'FastTrackr AI', url: absoluteUrl('/') },
    areaServed: 'US',
    url: absoluteUrl('/custodians/goldman-sachs'),
  },
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default GoldmanSachsCustodian;
