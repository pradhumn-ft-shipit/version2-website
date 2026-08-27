import type { MetaDescriptor } from 'react-router';
import ICPIBDs from '../../../src/pages/icp/ICPIBDs';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'For Independent Broker-Dealers | FastTrackr AI',
  description:
    'Win the advisors, win their books, win them faster. Your transition experience is part of your recruiting pitch — make it the part that closes the deal.',
  canonical: '/who-we-serve/independent-broker-dealers',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ICPIBDs;
