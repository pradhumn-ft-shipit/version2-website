import type { MetaDescriptor } from 'react-router';
import CaseStudy from '../../src/pages/CaseStudy';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Case Study: $100M Moved in Two Weeks | FastTrackr AI',
  description:
    'How an advisor team moved $100M across 150 households in two weeks with zero repapering NIGOs, starting from zero client data.',
  canonical: '/case-study/advisor-transition',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default CaseStudy;
