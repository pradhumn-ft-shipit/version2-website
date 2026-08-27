import type {
  ClientLoaderFunctionArgs,
  LoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
} from 'react-router';
import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router';
import BlogPost from '../../src/pages/BlogPost';
import NotFound from '../../src/pages/NotFound';
import { seoMeta, absoluteUrl, clampText, SITE_ORIGIN, type SeoConfig } from '../../src/lib/seo';
import type { BlogPost as BlogPostType } from '../../src/lib/blog';
import { readBlogIndex, readBlogPost } from '../lib/blogData.server';

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
  const related = readBlogIndex()
    .posts.filter((p) => p.slug !== post.slug)
    .slice(0, 3);
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
      '@type': 'BlogPosting',
      headline: post.title,
      description,
      datePublished: post.date,
      ...(post.image ? { image: [image] } : {}),
      author: { '@type': 'Organization', name: post.author || 'FastTrackr AI', url: SITE_ORIGIN },
      publisher: {
        '@type': 'Organization',
        name: 'FastTrackr AI',
        url: SITE_ORIGIN,
        logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/logo.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
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
