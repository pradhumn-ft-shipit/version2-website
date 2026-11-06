import type { MetaDescriptor } from 'react-router';
import CaseStudyIndex from '../../src/pages/CaseStudyIndex';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Case Studies: Advisor Transitions on FastTrackr AI | FastTrackr AI',
  description:
    'Real advisor transitions run on FastTrackr — a solo breakaway, a two-week $100M move, and a $400M broker-dealer to RIA conversion, with zero NIGOs from repapering error.',
  canonical: '/case-study',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default CaseStudyIndex;
