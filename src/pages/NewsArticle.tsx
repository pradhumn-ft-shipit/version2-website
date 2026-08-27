import { Link } from 'react-router-dom';
import { m } from '../lib/motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import { formatNewsDate, dateAttr, type NewsArticle as NewsArticleType } from '../lib/news';

// `article` comes from the route `loader` (build-time disk read) via useLoaderData
// in app/routes/news-article.tsx — no client fetch. A missing slug is handled by
// the loader (throws 404 → route ErrorBoundary renders NotFound), so this
// component always has a real article and just renders it. SEO/JSON-LD live in the
// route's `meta` export.
export default function NewsArticle({ article }: { article: NewsArticleType }) {
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
                to="/resources/news"
                className="text-sm font-semibold text-brandMint uppercase tracking-wider hover:text-brandDeep transition-colors"
              >
                ← News
              </Link>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight mb-6 tracking-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-textTertiary mb-10">
              <span className="font-semibold text-brandMint uppercase tracking-wider">
                {article.label}
              </span>
              {article.date && (
                <>
                  <span aria-hidden>•</span>
                  <time dateTime={dateAttr(article.date)}>{formatNewsDate(article.date)}</time>
                </>
              )}
            </div>

            {article.image && (
              <div className="aspect-video rounded-3xl overflow-hidden mb-12 bg-bgCanvas">
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* FastTrackr's own framing — original to this page, not part of the
                syndicated release text below. */}
            {article.intro && (
              <div className="border-l-4 border-brandMint bg-bgCanvas rounded-r-lg px-5 py-4 mb-12">
                <p className="text-base md:text-lg text-textSecondary italic leading-relaxed">
                  {article.intro}
                </p>
              </div>
            )}

            <div
              className="blog-prose"
              // Release copy rendered from FastTrackr's own markdown — trusted source.
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.coverage.length > 0 && (
              <section className="mt-16 pt-10 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary mb-3 tracking-tight">
                  Coverage
                </h2>
                <p className="text-sm text-textTertiary mb-6">
                  This release was distributed over the wire and republished by the{' '}
                  {article.coverage.length === 1 ? 'outlet' : 'outlets'} below.
                </p>
                <ul className="space-y-3">
                  {article.coverage.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brandDeep font-medium underline decoration-brandMint/60 underline-offset-2 hover:decoration-brandMint hover:text-brandMint transition-colors"
                      >
                        {link.outlet}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
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
                  to="/resources/news"
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  More news →
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
