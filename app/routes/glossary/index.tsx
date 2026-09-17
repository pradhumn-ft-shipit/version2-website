import type { MetaDescriptor } from 'react-router';
import Glossary from '../../../src/pages/Glossary';
import { seoMeta, SITE_ORIGIN, type SeoConfig } from '../../../src/lib/seo';
import { glossaryTerms, displayName, GLOSSARY_SET_NAME } from '../../../src/lib/glossary';

// /glossary — the definitional hub. DefinedTermSet JSON-LD lists every term so
// the whole set is one citable structure (the AEO asset W3 exists to create); it
// bakes into the static <head> at build time via seoMeta.
export function meta(): MetaDescriptor[] {
  const config: SeoConfig = {
    title: 'Advisor Transition Glossary | FastTrackr AI',
    description:
      'Plain-language definitions of advisor-transition and wealth-management terms — NIGO, ACATS, repapering, Broker Protocol, Reg BI, TOA, and more.',
    canonical: '/glossary',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${SITE_ORIGIN}/glossary`,
      name: GLOSSARY_SET_NAME,
      url: `${SITE_ORIGIN}/glossary`,
      hasDefinedTerm: glossaryTerms.map((t) => ({
        '@type': 'DefinedTerm',
        '@id': `${SITE_ORIGIN}/glossary/${t.slug}`,
        name: displayName(t),
        url: `${SITE_ORIGIN}/glossary/${t.slug}`,
        description: t.short,
      })),
    },
  };
  return seoMeta(config);
}

export default Glossary;
