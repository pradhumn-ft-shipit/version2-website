import type {
  ClientLoaderFunctionArgs,
  LoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
} from 'react-router';
import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router';
import NewsArticle from '../../src/pages/NewsArticle';
import NotFound from '../../src/pages/NotFound';
import { seoMeta, absoluteUrl, SITE_ORIGIN, type SeoConfig } from '../../src/lib/seo';
import type { NewsArticle as NewsArticleType } from '../../src/lib/news';
import { readNewsArticle } from '../lib/newsData.server';

// /resources/news/:slug — build-time loader reads posts/<slug>.json off disk, so
// the full release body (intro framing + syndicated text + coverage) ships in the
// prerendered <body>. An unknown slug throws a 404 Response, caught by
// ErrorBoundary below which renders NotFound (never a 500 / build crash). Replaces
// the old client fetch. Mirror of app/routes/blog-post.tsx (ticket 004).
export function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug ?? '';
  const article = readNewsArticle(slug);
  if (!article) {
    throw new Response('Not Found', { status: 404 });
  }
  return { article };
}

// clientLoader lets a client-side navigation (SPA fallback for a slug that isn't
// prerendered) resolve through the prerendered `.data`. A prerendered slug loads
// its baked data; anything else (no `.data`) surfaces a real 404 → ErrorBoundary
// → NotFound. It never refetches /news-data.
export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  try {
    return (await serverLoader()) as ReturnType<typeof loader>;
  } catch {
    throw new Response('Not Found', { status: 404 });
  }
}

export function meta({ data }: MetaArgs<typeof loader>): MetaDescriptor[] {
  const article = (data as { article: NewsArticleType } | undefined)?.article;
  if (!article) {
    return [{ title: 'Page Not Found | FastTrackr AI' }, { name: 'robots', content: 'noindex' }];
  }
  // Self-referencing: the same release runs on 80+ syndication sites, so this
  // canonical must always point at our own domain, never at a syndicated copy.
  const url = `${SITE_ORIGIN}/resources/news/${article.slug}`;
  const image = article.image ? absoluteUrl(article.image) : `${SITE_ORIGIN}/logomark.png`;

  const config: SeoConfig = {
    title: article.seoTitle ?? article.title,
    description: article.description,
    canonical: url,
    ogType: 'article',
    ogImage: image,
    ogImageAlt: article.image ? article.imageAlt : undefined,
    twitterCard: 'summary_large_image',
    publishedTime: article.date ?? undefined,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      ...(article.image ? { image: [absoluteUrl(article.image)] } : {}),
      author: { '@type': 'Organization', name: article.author, url: SITE_ORIGIN },
      publisher: {
        '@type': 'Organization',
        name: 'FastTrackr AI',
        logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/logo.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
  };
  return seoMeta(config);
}

export default function NewsArticleRoute() {
  const { article } = useLoaderData<typeof loader>();
  return <NewsArticle article={article} />;
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
