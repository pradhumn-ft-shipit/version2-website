import { Link } from 'react-router-dom';
import { m } from '../lib/motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  formatPodcastDate,
  formatDuration,
  dateAttr,
  youtubeThumb,
  type PodcastIndexEntry,
} from '../lib/podcasts';

// Items arrive from the route `loader` (build-time disk read) via `useLoaderData`
// in app/routes/podcast-index.tsx — no client fetch. SEO lives in that route's
// `meta` export. Pure presentation over the passed-in list, split into our own
// show (Advisor Ally) and Vineet's guest appearances elsewhere.
function EpisodeCard({ item, index }: { item: PodcastIndexEntry; index: number }) {
  return (
    <m.li
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index, 6) * 0.04 }}
    >
      <Link
        to={`/resources/podcasts/${item.slug}`}
        className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brandMint hover:shadow-glass transition-all"
      >
        <div className="relative aspect-video bg-bgCanvas overflow-hidden">
          <img
            src={youtubeThumb(item.youtubeId)}
            alt={`${item.title} — ${item.guest || item.show}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="w-14 h-14 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center group-hover:bg-brandDeep/85 transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 translate-x-0.5 fill-white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
          {item.durationSeconds ? (
            <span className="absolute bottom-2 right-2 text-[11px] font-medium text-white bg-black/70 rounded px-1.5 py-0.5">
              {formatDuration(item.durationSeconds)}
            </span>
          ) : null}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex flex-wrap items-center gap-2 text-xs text-textTertiary mb-2">
            <span className="font-semibold text-brandMint uppercase tracking-wider">
              {item.kind === 'hosted' && item.episode ? `${item.show} · Ep ${item.episode}` : item.show}
            </span>
            {item.date && (
              <>
                <span aria-hidden>•</span>
                <time dateTime={dateAttr(item.date)}>{formatPodcastDate(item.date)}</time>
              </>
            )}
          </div>
          <h3 className="font-display font-bold text-lg text-textPrimary leading-snug mb-2 group-hover:text-brandDeep transition-colors">
            {item.title}
          </h3>
          {item.guest && (
            <p className="text-sm text-textSecondary mb-2">
              {item.guest}
              {item.guestTitle ? <span className="text-textTertiary">, {item.guestTitle}</span> : null}
            </p>
          )}
          <p className="text-sm text-textSecondary leading-relaxed line-clamp-2 mt-auto">
            {item.excerpt}
          </p>
        </div>
      </Link>
    </m.li>
  );
}

export default function Podcasts({ items }: { items: PodcastIndexEntry[] }) {
  const hosted = items.filter((i) => i.kind === 'hosted');
  const guest = items.filter((i) => i.kind === 'guest');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">
              Podcast
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight tracking-tight">
              Advisor Ally — candid conversations on transitions, independence, and the business of advice.
            </h1>
            <p className="mt-6 text-lg text-textSecondary max-w-2xl mx-auto">
              Full episodes with the operators, consultants, and founders shaping how advisors move
              and grow — each with a detailed written recap you can skim before you press play.
            </p>
          </m.div>
        </section>

        {items.length === 0 ? (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-12 text-center">
              <p className="text-textSecondary">No episodes yet. Check back soon.</p>
            </div>
          </section>
        ) : (
          <>
            {hosted.length > 0 && (
              <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hosted.map((item, i) => (
                    <EpisodeCard key={item.slug} item={item} index={i} />
                  ))}
                </ul>
              </section>
            )}

            {guest.length > 0 && (
              <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary tracking-tight">
                    FastTrackr in Industry Podcasts
                  </h2>
                  <p className="mt-2 text-textSecondary">
                    FastTrackr founder Vineet Mohan as a guest on other industry shows.
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {guest.map((item, i) => (
                    <EpisodeCard key={item.slug} item={item} index={i} />
                  ))}
                </ul>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
