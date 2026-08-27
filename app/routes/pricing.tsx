import type { MetaDescriptor } from 'react-router';
import Pricing from '../../src/pages/Pricing';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Pricing | FastTrackr AI',
  description:
    "Pricing built around the value you get. It flexes to what you're using FastTrackr for and what it gives back to your firm, rather than selling seats by the dozen.",
  canonical: '/pricing',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Pricing;
