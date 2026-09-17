import { Link } from 'react-router-dom';
import { m } from '../lib/motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import { formatBlogDate, type BlogIndexEntry } from '../lib/blog';
import type { BlogCategory } from '../lib/blogCategories';
import { resolveAuthor } from '../lib/authors';

// W4 — blog category hub (`/blog/category/<slug>`). Turns the previous soft-404
// shell (HTTP 200, empty body) into a real topical middle-layer page: an
// editorial intro, an answer capsule (unique, citable definition of the topic),
// and the full crawlable list of every post in the category. Posts + category
// arrive from the route loader (build-time disk read) via useLoaderData in
// app/routes/blog-category.tsx — no client fetch; the whole list ships in the
// prerendered HTML.
export default function BlogCategory({
  category,
  posts,
}: {
  category: BlogCategory;
  posts: BlogIndexEntry[];
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="p-6">
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm text-textTertiary" aria-label="Breadcrumb">
                <Link to="/resources/blog" className="hover:text-brandDeep transition-colors">
                  Blog
                </Link>
                <span className="mx-2">/</span>
                <span className="text-textSecondary">{category.title}</span>
              </nav>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">
                  Category
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight mb-5">
                  {category.title}
                </h1>
                {category.intro && (
                  <p className="text-xl text-textSecondary leading-relaxed max-w-3xl">
                    {category.intro}
                  </p>
                )}
              </m.div>

              {/* Answer capsule — the unique, citable summary that makes this hub
                  more than a bare list (AEO). */}
              {category.capsule && (
                <div className="mt-8 bg-bgTint border border-brandMint/20 rounded-2xl p-6 max-w-3xl">
                  <div className="text-xs font-semibold text-brandDeep uppercase tracking-wider mb-2">
                    In short
                  </div>
                  <p className="text-textPrimary leading-relaxed">{category.capsule}</p>
                </div>
              )}

              <div className="mt-6 text-sm text-textTertiary">
                {posts.length} {posts.length === 1 ? 'article' : 'articles'} ·{' '}
                <Link
                  to="/resources-for-financial-advisors"
                  className="text-brandDeep font-semibold hover:text-brandMint transition-colors"
                >
                  Browse all topics →
                </Link>
              </div>
          </div>
        </section>

        {/* Post grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          {posts.length === 0 ? (
            <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-12 text-center">
              <p className="text-textSecondary">
                No articles in this category yet.{' '}
                <Link
                  to="/resources/blog"
                  className="text-brandDeep font-semibold hover:text-brandMint transition-colors"
                >
                  Browse the full blog →
                </Link>
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <m.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
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
                        <div
                          aria-hidden
                          className="w-full h-full bg-gradient-to-br from-bgCanvas via-bgTint to-brandMint/20"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h2 className="font-display font-bold text-xl text-textPrimary leading-snug mb-3 group-hover:text-brandDeep transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-textSecondary leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-textTertiary">
                        <span>{resolveAuthor(post).name}</span>
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
                </m.div>
              ))}
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brandDeep text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to automate your practice?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                FastTrackr AI helps financial advisors and transition teams automate the
                document-heavy work of moving and onboarding a book — from a single secure platform
                built for wealth professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/contact">
                  <Button size="lg">Book a Demo</Button>
                </Link>
                <Link
                  to="/solutions/advisor-transitions"
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  See advisor transitions →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
