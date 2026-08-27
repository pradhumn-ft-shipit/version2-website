import type { MetaDescriptor } from 'react-router';
import Contact from '../../src/pages/Contact';
import { seoMeta, type SeoConfig } from '../../src/lib/seo';

const seo: SeoConfig = {
  title: 'Contact | FastTrackr AI',
  description:
    "Let's talk about your transition process. Whether you want to cut your timeline in half or just see how the engine works, book a 20-minute walkthrough.",
  canonical: '/contact',
  ogImage: '/logomark.png',
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default Contact;
