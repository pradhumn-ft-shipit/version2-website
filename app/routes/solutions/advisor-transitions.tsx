import type { MetaDescriptor } from 'react-router';
import SolAdvisorTransitions from '../../../src/pages/solutions/SolAdvisorTransitions';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  // PR3-05 (2026-11-04): sitelink snippet matches the homepage and the live
  // custodians. Pershing ("Coming soon") stays on the page, not in the snippet.
  title: 'Advisor Transitions Platform | FastTrackr AI',
  description:
    'Move advisor books in days, not months. Every form worked out up front, filled from your data and checked. Live for Fidelity, Schwab, SEI and Goldman Sachs.',
  canonical: '/solutions/advisor-transitions',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

// Note: per the W2 scope decision, suggested/related articles live on /blog
// only — no solution or ICP page carries a "Further reading" module, so this
// route has no supporting-posts loader.
export default SolAdvisorTransitions;
