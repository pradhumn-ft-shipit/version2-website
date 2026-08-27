import type { MetaDescriptor } from 'react-router';
import ClientDataConsent from '../../../src/pages/legal/ClientDataConsent';
import { seoMeta, type SeoConfig } from '../../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Client Data Consent & Acknowledgment | FastTrackr AI',
  description:
    'A short, plain-language consent document covering how your information is handled on the FastTrackr platform during an account transition.',
  canonical: '/client-data-consent-acknowledgment',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default ClientDataConsent;
