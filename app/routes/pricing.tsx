import type { MetaDescriptor } from 'react-router';
import Pricing from '../../src/pages/Pricing';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Pricing | FastTrackr AI',
  description:
    "Pricing built around the value you get. Transition pricing depends on your volumes and use case. Reach out to us to know more about pricing.",
  canonical: '/pricing',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Pricing;
