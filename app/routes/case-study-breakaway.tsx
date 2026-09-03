import type { MetaDescriptor } from 'react-router';
import CaseStudyBreakaway from '../../src/pages/CaseStudyBreakaway';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Case Study: 411 Accounts Repapered Before Noon | FastTrackr AI',
  description:
    'How a solo advisor going independent sent every client envelope before noon on day one — 411 accounts, roughly $100M, and 95% of clients moved by Monday.',
  canonical: '/case-study/independent-breakaway-setup',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default CaseStudyBreakaway;
