import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchBlogIndex, formatBlogDate, type BlogIndexEntry } from '../lib/blog';

const PAGE_SIZE = 18;

export default function Blog() {
  const [posts, setPosts] = useState<BlogIndexEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetchBlogIndex()
      .then((data) => {
        if (!cancelled) setPosts(data.posts);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message ?? 'Failed to load posts');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    if (!posts) return [];
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) => {
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    });
  }, [posts, query]);

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  const featured = posts?.[0];
  const restOfShown = featured && !query ? shown.filter((p) => p.slug !== featured.slug) : shown;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">Blog</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
              Field notes from the operators reshaping wealth management.
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-3xl mx-auto">
              Articles, deep dives, and conversations on advisor transitions, AI in wealth, compliance, and the work behind the work.
            </p>
          </motion.div>
        </section>

        {/* Search */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search articles by title, topic, or author…"
            className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all text-base"
          />
        </section>

        {/* Loading state */}
        {!posts && !error && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-bgCanvas rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                  <div className="aspect-video bg-gray-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-100 rounded w-1/3" />
                    <div className="h-6 bg-gray-100 rounded w-5/6" />
                    <div className="h-4 bg-gray-100 rounded w-full" />
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-8 text-center">
              <p className="text-textSecondary">We couldn't load articles right now. Please refresh, or come back in a moment.</p>
            </div>
          </div>
        )}

        {/* Featured */}
        {posts && featured && !query && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <Link
              to={`/blog/${featured.slug}`}
              className="group block bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-glass transition-all"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto md:h-full bg-bgCanvas overflow-hidden">
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-textTertiary text-sm">
                      No image
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-3">Latest</div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-textPrimary leading-tight mb-4 group-hover:text-brandDeep transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-textSecondary leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm text-textTertiary">
                    <span>{featured.author}</span>
                    {featured.date && <span>•</span>}
                    {featured.date && <span>{formatBlogDate(featured.date)}</span>}
                    {featured.readingTime && (
                      <>
                        <span>•</span>
                        <span>{featured.readingTime} min read</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Grid */}
        {posts && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            {filtered.length === 0 ? (
              <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-12 text-center">
                <p className="text-textSecondary">No articles match &ldquo;{query}&rdquo;. Try a different search.</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restOfShown.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(i, 6) * 0.04 }}
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group block h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brandMint hover:shadow-glass transition-all"
                      >
                        <div className="aspect-video bg-bgCanvas overflow-hidden">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt={post.imageAlt}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-textTertiary text-sm">
                              No image
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-display font-bold text-xl text-textPrimary leading-snug mb-3 group-hover:text-brandDeep transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-textSecondary leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="flex items-center gap-2 text-xs text-textTertiary">
                            <span>{post.author}</span>
                            {post.date && <span>•</span>}
                            {post.date && <span>{formatBlogDate(post.date)}</span>}
                            {post.readingTime && (
                              <>
                                <span>•</span>
                                <span>{post.readingTime} min</span>
                              </>
                            )}
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {hasMore && (
                  <div className="text-center mt-12">
                    <button
                      type="button"
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      className="bg-brandDeep text-white hover:bg-brandMint hover:text-brandDeep px-8 py-3 rounded-full font-bold text-sm transition-colors"
                    >
                      Show more articles
                    </button>
                  </div>
                )}

                <div className="text-center mt-8 text-sm text-textTertiary">
                  Showing {Math.min(visible, filtered.length)} of {filtered.length}
                  {query ? ' matches' : ' articles'}
                </div>
              </>
            )}
          </section>
        )}

        {/* Newsletter */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bgCanvas border border-gray-100 rounded-3xl p-10"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary mb-2">
                Stay in the loop.
              </h2>
              <p className="text-textSecondary">Occasional updates on advisor transitions, the industry, and what we're shipping.</p>
            </div>
            {submitted ? (
              <div className="text-center py-2">
                <div className="font-display font-bold text-2xl text-brandDeep mb-2">You're in.</div>
                <p className="text-textSecondary">We'll only email you when we have something worth saying.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourfirm.com"
                  className="flex-grow px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                />
                <button
                  type="submit"
                  className="bg-brandDeep text-white hover:bg-brandMint hover:text-brandDeep px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
