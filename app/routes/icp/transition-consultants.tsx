import type { MetaDescriptor } from 'react-router';
import ICPTransitionConsultants from '../../../src/pages/icp/ICPTransitionConsultants';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'For Transition Consultants | FastTrackr AI',
  description:
    'More deals per consultant, without more admin slog. FastTrackr handles data collection, form-filling, and project management so your team takes on more transitions.',
  canonical: '/who-we-serve/transition-consultants',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ICPTransitionConsultants;
