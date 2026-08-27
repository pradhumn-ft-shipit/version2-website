import type { MetaDescriptor } from 'react-router';
import SolAdvisorTransitions from '../../../src/pages/solutions/SolAdvisorTransitions';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Advisor Transitions | FastTrackr AI',
  description:
    'The AI transition engine for wealth management. Move advisor books in weeks, not months, with data collection, form-filling, and e-signature handled end to end.',
  canonical: '/solutions/advisor-transitions',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default SolAdvisorTransitions;
