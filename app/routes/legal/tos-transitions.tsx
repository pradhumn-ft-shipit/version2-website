import type { MetaDescriptor } from 'react-router';
import TermsTransitions from '../../../src/pages/legal/TermsTransitions';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Transitions Terms of Service | FastTrackr AI',
  description: 'The terms governing use of the FastTrackr Advisor Transition Platform.',
  canonical: '/tos-transitions',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default TermsTransitions;
