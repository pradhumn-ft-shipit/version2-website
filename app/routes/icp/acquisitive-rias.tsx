import type { MetaDescriptor } from 'react-router';
import ICPAcquisitiveRIAs from '../../../src/pages/icp/ICPAcquisitiveRIAs';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'For Acquisitive RIAs | FastTrackr AI',
  description:
    'Every acquisition is a repapering project. Stop letting the integration timeline drag your AUM down, and make a fast, clean repaper your competitive edge.',
  canonical: '/who-we-serve/acquisitive-rias',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ICPAcquisitiveRIAs;
