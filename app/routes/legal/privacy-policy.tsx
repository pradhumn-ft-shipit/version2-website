import type { MetaDescriptor } from 'react-router';
import Privacy from '../../../src/pages/Privacy';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Privacy Policy | FastTrackr AI',
  description:
    'How FastTrackr Inc. collects, uses, and discloses your information when you use the FastTrackr AI service.',
  canonical: '/privacy-policy',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Privacy;
