import type {
  ClientLoaderFunctionArgs,
  LoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
} from 'react-router';
import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router';
import BlogPost from '../../src/pages/BlogPost';
import NotFound from '../../src/pages/NotFound';
import {
  seoMeta,
  absoluteUrl,
  clampText,
  blogCrumbs,
  SITE_ORIGIN,
  type SeoConfig,
} from '../../src/lib/seo';
import type { BlogPost as BlogPostType } from '../../src/lib/blog';
import { resolveAuthor } from '../../src/lib/authors';
import { readBlogIndex, readBlogPost } from '../lib/blogData.server';
import { selectRelatedPosts } from '../lib/relatedPosts';
import { CORNERSTONES } from '../lib/cornerstones';

// /blog/:slug — build-time loader reads posts/<slug>.json off disk, so the full
// rendered article HTML ships in the prerendered <body>. An unknown slug throws a
// 404 Response, caught by ErrorBoundary below which renders the NotFound page
// (never a 500 / build crash). Replaces the old client fetch (ticket 004).
export function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug ?? '';
  const post = readBlogPost(slug);
  if (!post) {
    throw new Response('Not Found', { status: 404 });
  }
  // W2: topic-based related posts (same canonical category first, recency
  // backfill) instead of the old topic-agnostic first-3-in-index, so every post
  // links to genuinely related reading.
  // W4: category cornerstones surface the pillar (e.g. the $19B repapering
  // explainer) first for its category, so every advisor-transition post links
  // into it — the pillar's inbound internal links, baked into the prerendered HTML.
  const related = selectRelatedPosts(post, readBlogIndex().posts, 3, {
    cornerstones: CORNERSTONES,
  });
  return { post, related };
}

// clientLoader lets a client-side navigation (SPA fallback for a slug that isn't
// prerendered) resolve through the prerendered `.data`. A prerendered slug loads
// its baked data; anything else (no `.data`) surfaces a real 404 → ErrorBoundary
// → NotFound. It never refetches /blog-data.
export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  try {
    return (await serverLoader()) as ReturnType<typeof loader>;
  } catch {
    throw new Response('Not Found', { status: 404 });
  }
}

export function meta({ data }: MetaArgs<typeof loader>): MetaDescriptor[] {
  const post = (data as { post: BlogPostType } | undefined)?.post;
  if (!post) {
    return [{ title: 'Page Not Found | FastTrackr AI' }, { name: 'robots', content: 'noindex' }];
  }
  const url = `${SITE_ORIGIN}/blog/${post.slug}`;
  const description = clampText(post.description || post.excerpt || post.title, 155);
  const image = post.image ? absoluteUrl(post.image) : `${SITE_ORIGIN}/logomark.png`;

  // W5: named human author → Person schema (E-E-A-T), linked to the author page.
  const author = resolveAuthor(post);
  // W5: no per-post edit history is tracked, so dateModified == the publish date
  // (an honest "not revised since publish"). Surfaced so answer engines that
  // weight recency have the field to read.
  const dateModified = post.date ?? undefined;

  const blogPosting: Record<string, unknown> = {
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    datePublished: post.date,
    ...(dateModified ? { dateModified } : {}),
    ...(post.image ? { image: [image] } : {}),
    author: {
      '@type': 'Person',
      // @id matches the author page's Person node so crawlers fold the byline and
      // the /authors/<slug> profile into one entity — the graph link this ticket
      // exists to create.
      '@id': `${SITE_ORIGIN}/authors/${author.slug}`,
      name: author.name,
      url: `${SITE_ORIGIN}/authors/${author.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FastTrackr AI',
      url: SITE_ORIGIN,
      logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const config: SeoConfig = {
    title: `${post.title} | FastTrackr AI`,
    description,
    canonical: url,
    ogType: 'article',
    ogImage: image,
    ogImageAlt: post.image ? post.imageAlt : undefined,
    publishedTime: post.date ?? undefined,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        blogPosting,
        blogCrumbs([{ name: post.title, path: `/blog/${post.slug}` }]),
      ],
    },
  };
  return seoMeta(config);
}

export default function BlogPostRoute() {
  const { post, related } = useLoaderData<typeof loader>();
  return <BlogPost post={post} related={related} />;
}

// A 404 from the loader (unknown slug) lands here — render the real NotFound page
// instead of the default error screen. Anything else rethrows.
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }
  throw error;
}
