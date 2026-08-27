import type { MetaDescriptor } from 'react-router';
import ICPBreakawayAdvisors from '../../../src/pages/icp/ICPBreakawayAdvisors';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'For Breakaway Advisors | FastTrackr AI',
  description:
    'Bring your book with you without breaking your team. Repapering, client data collection, and custodian paperwork run for you, so your move lands in weeks.',
  canonical: '/who-we-serve/breakaway-advisors',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ICPBreakawayAdvisors;
