import { Link } from 'react-router-dom';
import { m } from '../lib/motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import type { BlogIndexEntry } from '../lib/blog';
import type { Author } from '../lib/authors';

// /authors/:slug — author archive (W5, E-E-A-T). `author` + `posts` come from the
// route loader (build-time). Name and headshot are confirmed; bio, job title and
// LinkedIn are real facts about a real person and are rendered only once leadership
// supplies them — never invented (YMYL).
export default function AuthorPage({
  author,
  posts,
}: {
  author: Author;
  posts: BlogIndexEntry[];
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/resources/blog"
              className="text-sm font-semibold text-brandMint uppercase tracking-wider hover:text-brandDeep transition-colors"
            >
              ← Blog
            </Link>
          </div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 items-start p-8"
          >
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-full bg-bgCanvas flex items-center justify-center overflow-hidden">
                {author.photo ? (
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-display font-bold text-brandDeep">
                    {author.name.charAt(0)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-textPrimary tracking-tight mb-2">
                {author.name}
              </h1>
              {author.title && (
                <p className="text-brandDeep font-semibold mb-4">{author.title}</p>
              )}
              {author.bio && (
                <p className="text-textSecondary leading-relaxed max-w-2xl">{author.bio}</p>
              )}
              {author.linkedIn && (
                <div className="mt-4 text-sm">
                  <a
                    href={author.linkedIn}
                    className="text-brandMint font-semibold underline underline-offset-4 hover:text-brandDeep transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LinkedIn →
                  </a>
                </div>
              )}
            </div>
          </m.div>

          <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary mt-16 mb-8 tracking-tight">
            Articles by {author.name}
          </h2>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((r) => (
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
                    <p className="text-sm text-textSecondary leading-relaxed line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-textSecondary">No articles yet.</p>
          )}
        </div>
      </main>

      <Footer hideCTA />
    </div>
  );
}
