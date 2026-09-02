import type { MetaDescriptor } from 'react-router';
import CaseStudyBdToRia from '../../src/pages/CaseStudyBdToRia';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Case Study: $400M from BD to RIA in Nine Days | FastTrackr AI',
  description:
    'How a team of four advisors moved $400M and 1,000+ accounts from a broker-dealer to their own RIA in nine days — entities, trusts, and employer plans included, with no NIGOs from repapering error.',
  canonical: '/case-study/bd-to-ria-400m-transition',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default CaseStudyBdToRia;
