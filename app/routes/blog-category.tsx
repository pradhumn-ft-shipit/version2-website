import type {
  ClientLoaderFunctionArgs,
  LoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
} from 'react-router';
import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router';
import BlogCategory from '../../src/pages/BlogCategory';
import NotFound from '../../src/pages/NotFound';
import { seoMeta, SITE_ORIGIN, type SeoConfig } from '../../src/lib/seo';
import { getCategoryBySlug, type BlogCategory as BlogCategoryType } from '../../src/lib/blogCategories';
import { readBlogIndex } from '../lib/blogData.server';
import { postsInCategory } from '../lib/categoryPosts';

// /blog/category/:slug — build-time loader resolves the category from the canonical
// list and filters the blog index to that topic, so the full post list ships in
// the prerendered <body>. Replaces the soft-404 shell these URLs used to serve
// (HTTP 200 with an empty body). An unknown slug throws a 404 Response, caught by
// ErrorBoundary → NotFound. Mirrors blog-post.tsx / glossary/term.tsx.
export function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug ?? '';
  const category = getCategoryBySlug(slug);
  if (!category) {
    throw new Response('Not Found', { status: 404 });
  }
  const posts = postsInCategory(readBlogIndex().posts, category.id);
  return { category, posts };
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  try {
    return (await serverLoader()) as ReturnType<typeof loader>;
  } catch {
    throw new Response('Not Found', { status: 404 });
  }
}

export function meta({ data }: MetaArgs<typeof loader>): MetaDescriptor[] {
  const category = (data as { category: BlogCategoryType } | undefined)?.category;
  if (!category) {
    return [{ title: 'Page Not Found | FastTrackr AI' }, { name: 'robots', content: 'noindex' }];
  }
  const url = `${SITE_ORIGIN}/blog/category/${category.id}`;
  const description = (category.capsule || category.blurb).slice(0, 155);

  const config: SeoConfig = {
    title: `${category.title} — Articles | FastTrackr AI`,
    description,
    canonical: url,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': url,
      url,
      name: category.title,
      description,
      isPartOf: {
        '@type': 'Blog',
        '@id': `${SITE_ORIGIN}/resources/blog`,
        name: 'FastTrackr AI Blog',
        url: `${SITE_ORIGIN}/resources/blog`,
      },
    },
  };
  return seoMeta(config);
}

export default function BlogCategoryRoute() {
  const { category, posts } = useLoaderData<typeof loader>();
  return <BlogCategory category={category} posts={posts} />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }
  throw error;
}
