import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import {
  fetchBlogIndex,
  fetchBlogPost,
  formatBlogDate,
  type BlogIndexEntry,
  type BlogPost as BlogPostType,
} from '../lib/blog';
import NotFound from './NotFound';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null | undefined>(undefined);
  const [index, setIndex] = useState<BlogIndexEntry[]>([]);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      return;
    }
    let cancelled = false;
    setPost(undefined);
    fetchBlogPost(slug)
      .then((p) => {
        if (!cancelled) setPost(p);
      })
      .catch(() => {
        if (!cancelled) setPost(null);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    let cancelled = false;
    fetchBlogIndex()
      .then((data) => {
        if (!cancelled) setIndex(data.posts);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const related = useMemo(() => {
    if (!post || index.length === 0) return [];
    return index.filter((p) => p.slug !== post.slug).slice(0, 3);
  }, [post, index]);

  if (post === undefined) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-4">
              <div className="h-4 bg-gray-100 rounded w-1/4" />
              <div className="h-12 bg-gray-100 rounded w-5/6" />
              <div className="h-6 bg-gray-100 rounded w-1/3" />
              <div className="aspect-video bg-gray-100 rounded-2xl mt-8" />
              <div className="h-4 bg-gray-100 rounded w-full mt-8" />
              <div className="h-4 bg-gray-100 rounded w-11/12" />
              <div className="h-4 bg-gray-100 rounded w-10/12" />
            </div>
          </div>
        </main>
        <Footer hideCTA />
      </div>
    );
  }

  if (post === null) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
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
          </motion.div>
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
                      <div className="w-full h-full flex items-center justify-center text-textTertiary text-sm">
                        No image
                      </div>
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
