import type { MetaDescriptor } from 'react-router';
import FPA from '../../src/pages/FPA';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'FPA Member Discount | FastTrackr AI',
  description:
    "An exclusive discount on FastTrackr's AI Meeting Assistant for FPA members: automatic notes, summaries, and follow-ups built for financial advisors.",
  canonical: '/fpa',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default FPA;
