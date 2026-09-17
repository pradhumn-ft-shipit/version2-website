import type {
  ClientLoaderFunctionArgs,
  LoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
} from 'react-router';
import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router';
import GlossaryTerm from '../../../src/pages/GlossaryTerm';
import NotFound from '../../../src/pages/NotFound';
import { seoMeta, SITE_ORIGIN, type SeoConfig } from '../../../src/lib/seo';
import {
  getGlossaryTerm,
  displayName,
  GLOSSARY_SET_NAME,
  type GlossaryTerm as GlossaryTermType,
} from '../../../src/lib/glossary';

// /glossary/:term — build-time loader resolves the term from the glossary data
// module, so the full definition ships in the prerendered <body>. An unknown
// slug throws a 404 Response, caught by ErrorBoundary → NotFound (never a 500).
// Mirrors blog-post.tsx.
export function loader({ params }: LoaderFunctionArgs) {
  const term = getGlossaryTerm(params.term ?? '');
  if (!term) {
    throw new Response('Not Found', { status: 404 });
  }
  return { term };
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  try {
    return (await serverLoader()) as ReturnType<typeof loader>;
  } catch {
    throw new Response('Not Found', { status: 404 });
  }
}

export function meta({ data }: MetaArgs<typeof loader>): MetaDescriptor[] {
  const term = (data as { term: GlossaryTermType } | undefined)?.term;
  if (!term) {
    return [{ title: 'Page Not Found | FastTrackr AI' }, { name: 'robots', content: 'noindex' }];
  }
  const url = `${SITE_ORIGIN}/glossary/${term.slug}`;
  const name = displayName(term);

  const config: SeoConfig = {
    title: `${name} — Glossary | FastTrackr AI`,
    description: term.short,
    canonical: url,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'DefinedTerm',
      '@id': url,
      name,
      url,
      description: term.short,
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        '@id': `${SITE_ORIGIN}/glossary`,
        name: GLOSSARY_SET_NAME,
        url: `${SITE_ORIGIN}/glossary`,
      },
    },
  };
  return seoMeta(config);
}

export default function GlossaryTermRoute() {
  const { term } = useLoaderData<typeof loader>();
  return <GlossaryTerm term={term} />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }
  throw error;
}
