import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchNewsIndex, formatNewsDate, dateAttr, type NewsIndexEntry } from '../lib/news';
import { useSeo, SITE_ORIGIN } from '../lib/seo';

export default function News() {
  const [items, setItems] = useState<NewsIndexEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useSeo({
    title: 'News & Press | FastTrackr AI',
    description:
      'Company news, press releases, and announcements from FastTrackr AI, the AI-native platform built to run advisor transitions end to end.',
    canonical: `${SITE_ORIGIN}/resources/news`,
    ogType: 'website',
    ogImage: `${SITE_ORIGIN}/logomark.png`,
  });

  useEffect(() => {
    let cancelled = false;
    fetchNewsIndex()
      .then((data) => {
        if (!cancelled) setItems(data.items);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message ?? 'Failed to load news');
      });
    return () => {
      cancelled = true;
    };
  }, []);

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
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">News</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight tracking-tight">
              Press releases, product announcements, and company milestones from FastTrackr AI.
            </h1>
          </m.div>
        </section>

        {/* Loading state */}
        {!items && !error && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-bgCanvas rounded-2xl overflow-hidden border border-gray-100 animate-pulse grid md:grid-cols-[minmax(0,18rem)_1fr]"
              >
                <div className="aspect-video bg-gray-100" />
                <div className="p-6 space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-1/3" />
                  <div className="h-6 bg-gray-100 rounded w-5/6" />
                  <div className="h-4 bg-gray-100 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-8 text-center">
              <p className="text-textSecondary">
                We couldn't load news right now. Please refresh, or come back in a moment.
              </p>
            </div>
          </div>
        )}

        {/* List — reverse-chronological, same layout at 1 item or 50 */}
        {items && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {items.length === 0 ? (
              <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-12 text-center">
                <p className="text-textSecondary">No announcements yet. Check back soon.</p>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item, i) => (
                  <m.li
                    key={item.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(i, 6) * 0.04 }}
                  >
                    <Link
                      to={`/resources/news/${item.slug}`}
                      className="group grid md:grid-cols-[minmax(0,18rem)_1fr] bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brandMint hover:shadow-glass transition-all"
                    >
                      <div className="aspect-video md:aspect-auto md:h-full bg-bgCanvas overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div
                            aria-hidden
                            className="w-full h-full bg-gradient-to-br from-bgCanvas via-bgTint to-brandMint/20"
                          />
                        )}
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-textTertiary mb-3">
                          <span className="font-semibold text-brandMint uppercase tracking-wider">
                            {item.label}
                          </span>
                          {item.date && (
                            <>
                              <span aria-hidden>•</span>
                              <time dateTime={dateAttr(item.date)}>{formatNewsDate(item.date)}</time>
                            </>
                          )}
                        </div>
                        <h2 className="font-display font-bold text-xl md:text-2xl text-textPrimary leading-snug mb-3 group-hover:text-brandDeep transition-colors">
                          {item.title}
                        </h2>
                        <p className="text-sm md:text-base text-textSecondary leading-relaxed line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>
                    </Link>
                  </m.li>
                ))}
              </ul>
            )}
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
