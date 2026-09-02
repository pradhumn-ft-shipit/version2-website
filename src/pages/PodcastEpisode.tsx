import { Link } from 'react-router-dom';
import { m } from '../lib/motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import {
  formatPodcastDate,
  formatDuration,
  dateAttr,
  youtubeEmbedUrl,
  youtubeWatchUrl,
  type PodcastEpisode as PodcastEpisodeType,
} from '../lib/podcasts';

// `episode` comes from the route `loader` (build-time disk read) via useLoaderData
// in app/routes/podcast-episode.tsx — no client fetch. A missing slug is handled
// by the loader (throws 404 → route ErrorBoundary renders NotFound), so this
// component always has a real episode. SEO/JSON-LD live in the route's `meta`.
export default function PodcastEpisode({ episode }: { episode: PodcastEpisodeType }) {
  const eyebrow =
    episode.kind === 'hosted' && episode.episode
      ? `${episode.show} · Episode ${episode.episode}`
      : episode.show;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Link
                to="/resources/podcasts"
                className="text-sm font-semibold text-brandMint uppercase tracking-wider hover:text-brandDeep transition-colors"
              >
                ← Podcast
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-textTertiary mb-4">
              <span className="font-semibold text-brandMint uppercase tracking-wider">{eyebrow}</span>
              {episode.date && (
                <>
                  <span aria-hidden>•</span>
                  <time dateTime={dateAttr(episode.date)}>{formatPodcastDate(episode.date)}</time>
                </>
              )}
              {episode.durationSeconds ? (
                <>
                  <span aria-hidden>•</span>
                  <span>{formatDuration(episode.durationSeconds)}</span>
                </>
              ) : null}
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-textPrimary leading-tight mb-4 tracking-tight">
              {episode.title}
            </h1>

            {episode.guest && (
              <p className="text-lg text-textSecondary mb-8">
                With <span className="text-textPrimary font-semibold">{episode.guest}</span>
                {episode.guestTitle ? `, ${episode.guestTitle}` : ''}
                {episode.host ? ` · Hosted by ${episode.host}` : ''}
              </p>
            )}

            {/* YouTube embed — the episode lives on YouTube; the unique summary
                below is what makes this page worth indexing. */}
            <div className="aspect-video rounded-2xl overflow-hidden mb-10 bg-black shadow-glass">
              <iframe
                src={youtubeEmbedUrl(episode.youtubeId)}
                title={episode.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Key takeaways — skimmable answer box for readers and AI crawlers. */}
            {episode.takeaways.length > 0 && (
              <section className="bg-bgCanvas border border-gray-100 rounded-2xl p-6 md:p-8 mb-10">
                <h2 className="text-lg font-display font-bold text-textPrimary mb-4">Key takeaways</h2>
                <ul className="space-y-3">
                  {episode.takeaways.map((point, i) => (
                    <li key={i} className="flex gap-3 text-textSecondary leading-relaxed">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brandMint shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Chapters — deep-link into the video at each timestamp. */}
            {episode.chapters.length > 0 && (
              <section className="mb-12">
                <h2 className="text-lg font-display font-bold text-textPrimary mb-4">In this episode</h2>
                <ul className="divide-y divide-gray-100 border-y border-gray-100">
                  {episode.chapters.map((ch, i) => (
                    <li key={i}>
                      <a
                        href={youtubeWatchUrl(episode.youtubeId, ch.seconds)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-4 py-3 items-baseline hover:bg-bgCanvas -mx-3 px-3 rounded-lg transition-colors"
                      >
                        <span className="font-mono text-sm text-brandDeep tabular-nums shrink-0 w-14">
                          {ch.time}
                        </span>
                        <span className="text-textSecondary group-hover:text-textPrimary transition-colors">
                          {ch.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Long editorial summary — the unique, indexable content. */}
            <div
              className="blog-prose"
              // Summary rendered from FastTrackr's own markdown — trusted source.
              dangerouslySetInnerHTML={{ __html: episode.content }}
            />
          </m.div>
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-brandDeep text-white rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-white">
                See how FastTrackr fits your transition.
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                A 20-minute walkthrough is enough to show you whether this works for your book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/contact"><Button size="lg">Book a Demo</Button></Link>
                <Link
                  to="/resources/podcasts"
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  More episodes →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
}
