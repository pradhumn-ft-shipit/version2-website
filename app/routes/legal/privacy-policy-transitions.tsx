import type { MetaDescriptor } from 'react-router';
import PrivacyTransitions from '../../../src/pages/legal/PrivacyTransitions';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Transitions Privacy Policy | FastTrackr AI',
  description:
    'How FastTrackr collects, uses, stores, shares, and protects information processed through the FastTrackr Advisor Transition Platform.',
  canonical: '/privacy-policy-transitions',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default PrivacyTransitions;
