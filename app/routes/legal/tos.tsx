import type { MetaDescriptor } from 'react-router';
import Terms from '../../../src/pages/Terms';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Terms of Service | FastTrackr AI',
  description: 'The terms governing your use of the FastTrackr AI service.',
  canonical: '/tos',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Terms;
