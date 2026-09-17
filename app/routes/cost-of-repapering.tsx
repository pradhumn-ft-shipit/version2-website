import type { MetaDescriptor } from 'react-router';
import CostOfRepapering from '../../src/pages/CostOfRepapering';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Cost of Repapering Your Book | FastTrackr AI',
  description:
    'Free, no-email calculator: estimate the labor, NIGO rework, and cost of delay in a manual advisor-transition repaper — and what you could get back.',
  canonical: '/cost-of-repapering',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default CostOfRepapering;
