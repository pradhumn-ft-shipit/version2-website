import type { MetaDescriptor } from 'react-router';
import Fidelity100MReport from '../../../src/pages/research/Fidelity100MReport';
import { PUBLISHED_ISO } from '../../../src/pages/research/fidelity100m/data';
import { seoMeta, type SeoConfig, absoluteUrl, breadcrumbList } from '../../../src/lib/seo';

const CANONICAL = '/research/fidelity-100m-custody-minimum';
const OG_IMAGE = '/research-images/fidelity-100m-line-og.png';

const TITLE = 'The $100M Line: Fidelity’s Custody Minimum | FastTrackr';
const DESCRIPTION =
  'FastTrackr Research: 1,087 RIAs hold under $100M at Fidelity ($40.5B). Who is affected, where ~$33–39B goes, and how to move before June 30, 2027.';

// Report + Dataset in one @graph so answer engines can cite the headline figures
// with their provenance (SEC Form ADV) and publisher. The FAQPage schema is
// emitted by PageFAQ on the page itself.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Report',
      '@id': `${absoluteUrl(CANONICAL)}#report`,
      headline: 'The $100M Line',
      alternativeHeadline:
        'What Fidelity’s custody minimum means for 1,087 advisors, and how the next nine months play out',
      description: DESCRIPTION,
      url: absoluteUrl(CANONICAL),
      image: absoluteUrl(OG_IMAGE),
      datePublished: PUBLISHED_ISO,
      inLanguage: 'en-US',
      author: { '@type': 'Organization', name: 'FastTrackr Research', url: absoluteUrl('/') },
      publisher: {
        '@type': 'Organization',
        name: 'FastTrackr AI',
        url: absoluteUrl('/'),
        logo: { '@type': 'ImageObject', url: absoluteUrl('/logomark.png') },
      },
      about: [
        { '@type': 'Thing', name: 'Fidelity $100M RIA custody minimum' },
        { '@type': 'Thing', name: 'RIA custodian transition' },
        { '@type': 'Thing', name: 'Advisor repapering' },
      ],
      isBasedOn: {
        '@type': 'Dataset',
        name: 'SEC Form ADV (SEC monthly roster 2026-09-01; IAPD state feed 2026-10-01)',
        creator: { '@type': 'GovernmentOrganization', name: 'U.S. Securities and Exchange Commission' },
      },
    },
    breadcrumbList([
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources-for-financial-advisors' },
      { name: 'The $100M Line', path: CANONICAL },
    ]),
  ],
};

const seo: SeoConfig = {
  title: TITLE,
  description: DESCRIPTION,
  ogDescription:
    '1,087 firms and $40.5B sit below Fidelity’s new $100M custody line. Here is where the money goes, and what the move takes.',
  canonical: CANONICAL,
  ogType: 'article',
  ogImage: OG_IMAGE,
  ogImageAlt: 'The $100M Line — 1,087 firms, $40.5B below the line',
  publishedTime: `${PUBLISHED_ISO}T00:00:00Z`,
  jsonLd,
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Fidelity100MReport;
