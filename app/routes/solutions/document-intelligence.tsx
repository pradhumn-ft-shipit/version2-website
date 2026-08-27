import type { MetaDescriptor } from 'react-router';
import SolDocumentIntelligence from '../../../src/pages/solutions/SolDocumentIntelligence';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Document Intelligence | FastTrackr AI',
  description:
    'From piles of client paperwork to instant insights. Brokerage statements, tax documents, equity comp, and bank docs extracted and organized in minutes.',
  canonical: '/solutions/document-intelligence',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default SolDocumentIntelligence;
