import type { MetaDescriptor } from 'react-router';
import Security from '../../src/pages/Security';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

// PR3-01 (2026-11-04). The FAQPage JSON-LD comes from PageFAQ on the page,
// built from the same array as the visible FAQ, so the two can't drift.

const seo: SeoConfig = {
  title: 'Security | FastTrackr AI',
  description:
    "FastTrackr AI is SOC 2 Type II compliant. Data is encrypted in transit and at rest, you and your clients own it, and we don't train models on it.",
  canonical: '/security',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Security;
