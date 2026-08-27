import type { MetaDescriptor } from 'react-router';
import ZoomHelp from '../../src/pages/ZoomHelp';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Zoom Help Documentation | FastTrackr AI',
  description:
    'How FastTrackr AI connects to Zoom meetings: installation, features, data privacy considerations, and troubleshooting for the AI meeting assistant.',
  canonical: '/zoom-help-documentation',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ZoomHelp;
