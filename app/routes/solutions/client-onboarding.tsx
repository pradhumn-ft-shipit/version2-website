import type { MetaDescriptor } from 'react-router';
import SolClientOnboarding from '../../../src/pages/solutions/SolClientOnboarding';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Client Onboarding | FastTrackr AI',
  description:
    'Onboard new clients in days, not weeks. The same technology built to handle thousands of account openings during advisor transitions, applied to day-to-day onboarding.',
  canonical: '/solutions/client-onboarding',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default SolClientOnboarding;
