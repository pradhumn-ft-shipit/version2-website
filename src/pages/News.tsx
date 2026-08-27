import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { formatNewsDate, dateAttr, type NewsIndexEntry } from '../lib/news';

// Items arrive from the route `loader` (build-time disk read) via `useLoaderData`
// in app/routes/news-index.tsx — no client fetch. SEO lives in that route's `meta`
// export. This component is pure presentation over the passed-in list.
export default function News({ items }: { items: NewsIndexEntry[] }) {
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

        {/* List — reverse-chronological, same layout at 1 item or 50 */}
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
      </main>

      <Footer />
    </div>
  );
}
