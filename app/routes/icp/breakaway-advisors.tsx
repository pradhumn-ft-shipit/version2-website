import type { MetaDescriptor } from 'react-router';
import ICPBreakawayAdvisors from '../../../src/pages/icp/ICPBreakawayAdvisors';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'For Breakaway Advisors | FastTrackr AI',
  description:
    'Bring your book with you without breaking your team. FastTrackr handles client data collection, repapering and custodian paperwork, so your move lands in days, not months.',
  canonical: '/who-we-serve/breakaway-advisors',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ICPBreakawayAdvisors;
