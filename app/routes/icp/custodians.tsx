import type { MetaDescriptor } from 'react-router';
import ICPCustodians from '../../../src/pages/icp/ICPCustodians';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'For Custodians | FastTrackr AI',
  description:
    'Be the on-ramp for every new RIA and advisory practice. FastTrackr puts the advisor onboarding experience back in the hands of the custodian.',
  canonical: '/who-we-serve/custodians',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ICPCustodians;
