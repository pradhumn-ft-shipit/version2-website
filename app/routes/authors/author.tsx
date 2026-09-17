import type {
  ClientLoaderFunctionArgs,
  LoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
} from 'react-router';
import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router';
import AuthorPage from '../../../src/pages/AuthorPage';
import NotFound from '../../../src/pages/NotFound';
import {
  seoMeta,
  blogCrumbs,
  SITE_ORIGIN,
  type SeoConfig,
} from '../../../src/lib/seo';
import { getAuthorBySlug, postsByAuthor, type Author } from '../../../src/lib/authors';
import type { BlogIndexEntry } from '../../../src/lib/blog';
import { readBlogIndex } from '../../lib/blogData.server';

// /authors/:slug — build-time loader resolves the author from the roster and
// collects the posts that resolve to them (see src/lib/authors.ts), so the full
// profile + article list ships in the prerendered <body>. An unknown slug throws
// a 404 Response, caught by ErrorBoundary → NotFound. Mirrors blog-post.tsx.
export function loader({ params }: LoaderFunctionArgs) {
  const author = getAuthorBySlug(params.slug ?? '');
  if (!author) {
    throw new Response('Not Found', { status: 404 });
  }
  const posts = postsByAuthor(readBlogIndex().posts, author.slug);
  return { author, posts };
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  try {
    return (await serverLoader()) as ReturnType<typeof loader>;
  } catch {
    throw new Response('Not Found', { status: 404 });
  }
}

export function meta({ data }: MetaArgs<typeof loader>): MetaDescriptor[] {
  const author = (data as { author: Author } | undefined)?.author;
  if (!author) {
    return [{ title: 'Page Not Found | FastTrackr AI' }, { name: 'robots', content: 'noindex' }];
  }
  const url = `${SITE_ORIGIN}/authors/${author.slug}`;
  const description = author.bio ?? `Articles by ${author.name}, FastTrackr AI.`;

  // Person schema (E-E-A-T). Only assert fields we actually have — jobTitle and
  // sameAs (LinkedIn) are omitted until leadership supplies them, never invented.
  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': url,
    name: author.name,
    url,
    ...(author.title ? { jobTitle: author.title } : {}),
    ...(author.linkedIn ? { sameAs: [author.linkedIn] } : {}),
    ...(author.photo ? { image: `${SITE_ORIGIN}${author.photo}` } : {}),
    worksFor: { '@type': 'Organization', name: 'FastTrackr AI', url: SITE_ORIGIN },
  };

  const config: SeoConfig = {
    title: `${author.name} | FastTrackr AI`,
    description,
    canonical: url,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        person,
        blogCrumbs([{ name: author.name, path: `/authors/${author.slug}` }]),
      ],
    },
  };
  return seoMeta(config);
}

export default function AuthorRoute() {
  const { author, posts } = useLoaderData<typeof loader>() as {
    author: Author;
    posts: BlogIndexEntry[];
  };
  return <AuthorPage author={author} posts={posts} />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }
  throw error;
}
