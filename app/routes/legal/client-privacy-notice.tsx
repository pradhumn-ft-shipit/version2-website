import type { MetaDescriptor } from 'react-router';
import ClientPrivacyNotice from '../../../src/pages/legal/ClientPrivacyNotice';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Client Privacy Notice | FastTrackr AI',
  description:
    'A plain-language notice for clients: what data your advisor collects through FastTrackr during an account transition, how it is used, and your rights.',
  canonical: '/client-privacy-notice',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ClientPrivacyNotice;
