import type {
  ClientLoaderFunctionArgs,
  LoaderFunctionArgs,
  MetaArgs,
  MetaDescriptor,
} from 'react-router';
import { isRouteErrorResponse, useLoaderData, useRouteError } from 'react-router';
import PodcastEpisode from '../../src/pages/PodcastEpisode';
import NotFound from '../../src/pages/NotFound';
import { seoMeta, SITE_ORIGIN, type SeoConfig } from '../../src/lib/seo';
import {
  youtubeThumb,
  youtubeEmbedUrl,
  youtubeWatchUrl,
  isoDuration,
  type PodcastEpisode as PodcastEpisodeType,
} from '../../src/lib/podcasts';
import { readPodcastEpisode } from '../lib/podcastData.server';

// /resources/podcasts/:slug — build-time loader reads posts/<slug>.json off disk,
// so the full editorial summary ships in the prerendered <body>. An unknown slug
// throws a 404 Response, caught by ErrorBoundary → NotFound (never a 500 / build
// crash). Mirror of app/routes/news-article.tsx.
export function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug ?? '';
  const episode = readPodcastEpisode(slug);
  if (!episode) {
    throw new Response('Not Found', { status: 404 });
  }
  return { episode };
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  try {
    return (await serverLoader()) as ReturnType<typeof loader>;
  } catch {
    throw new Response('Not Found', { status: 404 });
  }
}

export function meta({ data }: MetaArgs<typeof loader>): MetaDescriptor[] {
  const episode = (data as { episode: PodcastEpisodeType } | undefined)?.episode;
  if (!episode) {
    return [{ title: 'Page Not Found | FastTrackr AI' }, { name: 'robots', content: 'noindex' }];
  }

  const url = `${SITE_ORIGIN}/resources/podcasts/${episode.slug}`;
  const thumb = youtubeThumb(episode.youtubeId);
  const duration = isoDuration(episode.durationSeconds);

  // VideoObject drives Google's video rich results; PodcastEpisode ties it to the
  // series. Linked in one @graph so both describe the same page.
  const videoNode: Record<string, unknown> = {
    '@type': 'VideoObject',
    name: episode.title,
    description: episode.description,
    thumbnailUrl: [thumb],
    uploadDate: episode.date,
    ...(duration ? { duration } : {}),
    embedUrl: youtubeEmbedUrl(episode.youtubeId),
    contentUrl: youtubeWatchUrl(episode.youtubeId),
    publisher: {
      '@type': 'Organization',
      name: 'FastTrackr AI',
      logo: { '@type': 'ImageObject', url: `${SITE_ORIGIN}/logo.png` },
    },
  };

  const episodeNode: Record<string, unknown> = {
    '@type': 'PodcastEpisode',
    name: episode.title,
    description: episode.description,
    url,
    datePublished: episode.date,
    ...(episode.episode ? { episodeNumber: episode.episode } : {}),
    associatedMedia: videoNode,
    partOfSeries: {
      '@type': 'PodcastSeries',
      name: episode.kind === 'hosted' ? 'Advisor Ally' : episode.show,
      ...(episode.kind === 'hosted' ? { url: `${SITE_ORIGIN}/resources/podcasts` } : {}),
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const config: SeoConfig = {
    title: episode.seoTitle ?? episode.title,
    description: episode.description,
    canonical: url,
    ogType: 'video.other',
    ogImage: thumb,
    ogImageAlt: `${episode.title}${episode.guest ? ` — ${episode.guest}` : ''}`,
    twitterCard: 'summary_large_image',
    publishedTime: episode.date ?? undefined,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [videoNode, episodeNode],
    },
  };
  return seoMeta(config);
}

export default function PodcastEpisodeRoute() {
  const { episode } = useLoaderData<typeof loader>();
  return <PodcastEpisode episode={episode} />;
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
