import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import {
  formatBlogDate,
  type BlogIndexEntry,
  type BlogPost as BlogPostType,
} from '../lib/blog';

// `post` + `related` come from the route `loader` (build-time disk read) via
// useLoaderData in app/routes/blog-post.tsx — no client fetch. A missing slug is
// handled by the loader (throws 404 → route ErrorBoundary renders NotFound), so
// this component always has a real post and just renders it.
export default function BlogPost({
  post,
  related,
}: {
  post: BlogPostType;
  related: BlogIndexEntry[];
}) {
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
                to="/resources/blog"
                className="text-sm font-semibold text-brandMint uppercase tracking-wider hover:text-brandDeep transition-colors"
              >
                ← Blog
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight mb-6 tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-textTertiary mb-10">
              <span className="font-medium text-textSecondary">{post.author}</span>
              {post.date && <span>•</span>}
              {post.date && <span>{formatBlogDate(post.date)}</span>}
              {post.readingTime && (
                <>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </>
              )}
            </div>

            {post.image && (
              <div className="aspect-video rounded-3xl overflow-hidden mb-12 bg-bgCanvas">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div
              className="blog-prose"
              // Content is FastTrackr's own migrated CMS HTML — trusted source.
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </m.div>
        </article>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-brandDeep text-white rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                See how FastTrackr fits your transition.
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                A 20-minute walkthrough is enough to show you whether this works for your book.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/contact"><Button size="lg">Book a Demo</Button></Link>
                <Link to="/resources/blog" className="text-white/80 hover:text-white font-medium transition-colors">
                  More articles →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary mb-8 tracking-tight">
              More from the blog
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-brandMint hover:shadow-glass transition-all"
                >
                  <div className="aspect-video bg-bgCanvas overflow-hidden">
                    {r.image ? (
                      <img
                        src={r.image}
                        alt={r.imageAlt}
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
                    <h3 className="font-display font-bold text-lg text-textPrimary leading-snug mb-2 group-hover:text-brandDeep transition-colors line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-textSecondary leading-relaxed line-clamp-2">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer hideCTA />
    </div>
  );
}
