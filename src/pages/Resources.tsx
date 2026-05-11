import { useEffect, useMemo, useRef, useState } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import { fetchBlogIndex, type BlogIndexEntry } from '../lib/blog';
import {
  BLOG_CATEGORIES,
  UNCATEGORIZED_CATEGORY,
  resolveCategoryId,
  type BlogCategory,
} from '../lib/blogCategories';

type Article = {
  title: string;
  description?: string;
  href: string;
};

type ResolvedCategory = BlogCategory & { articles: Article[] };

function postToArticle(post: BlogIndexEntry): Article {
  return {
    title: post.title,
    description: post.excerpt || undefined,
    href: `/blog/${post.slug}`,
  };
}

function buildCategories(posts: BlogIndexEntry[]): ResolvedCategory[] {
  const buckets = new Map<string, Article[]>();
  for (const c of BLOG_CATEGORIES) buckets.set(c.id, []);
  buckets.set(UNCATEGORIZED_CATEGORY.id, []);

  for (const post of posts) {
    const id = resolveCategoryId(post.topic);
    buckets.get(id)!.push(postToArticle(post));
  }

  const ordered: ResolvedCategory[] = BLOG_CATEGORIES.map((c) => ({
    ...c,
    articles: buckets.get(c.id) ?? [],
  })).filter((c) => c.articles.length > 0);

  const leftovers = buckets.get(UNCATEGORIZED_CATEGORY.id) ?? [];
  if (leftovers.length > 0) {
    ordered.push({ ...UNCATEGORIZED_CATEGORY, articles: leftovers });
  }

  return ordered;
}

function matches(article: Article, q: string) {
  if (!q) return true;
  const haystack = (article.title + ' ' + (article.description ?? '')).toLowerCase();
  return haystack.includes(q);
}

export default function Resources() {
  const [posts, setPosts] = useState<BlogIndexEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState<string>('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    let cancelled = false;
    fetchBlogIndex()
      .then((data) => {
        if (!cancelled) setPosts(data.posts);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message ?? 'Failed to load articles');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => (posts ? buildCategories(posts) : []), [posts]);
  const totalArticles = useMemo(
    () => categories.reduce((acc, c) => acc + c.articles.length, 0),
    [categories]
  );

  useEffect(() => {
    if (!activeId && categories[0]) setActiveId(categories[0].id);
  }, [categories, activeId]);

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((c) => ({ ...c, articles: c.articles.filter((a) => matches(a, q)) }))
      .filter((c) => c.articles.length > 0);
  }, [query, categories]);

  const totalFiltered = filteredCategories.reduce((acc, c) => acc + c.articles.length, 0);

  useEffect(() => {
    if (query) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [query, categories]);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveId(id);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-12 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">Resources</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6 tracking-tight">
              The AI playbook for modern advisors.
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-3xl mx-auto">
              {totalArticles > 0 ? `${totalArticles} articles, ` : ''}deep dives and field notes for advisors, RIAs, and wealth firms putting AI to work — without the buzzwords.
            </p>
          </m.div>
        </section>

        {/* Mobile chip nav (lg- only) */}
        {categories.length > 0 && (
          <section className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => scrollToSection(c.id)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    activeId === c.id
                      ? 'bg-brandDeep text-white border-brandDeep'
                      : 'bg-white text-textSecondary border-gray-200 hover:border-brandMint hover:text-brandDeep'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Two-column body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                {/* Search */}
                <div className="relative mb-6">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-textTertiary" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search articles…"
                    className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/40 focus:border-brandMint text-sm transition-all"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-textTertiary hover:text-textPrimary"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                {/* Category list */}
                <nav>
                  <div className="text-xs font-semibold text-textTertiary uppercase tracking-wider mb-3">
                    {query ? `${totalFiltered} ${totalFiltered === 1 ? 'match' : 'matches'}` : 'Browse by topic'}
                  </div>
                  <ul className="space-y-1">
                    {categories.map((c) => {
                      const visibleCount =
                        filteredCategories.find((fc) => fc.id === c.id)?.articles.length ?? 0;
                      const dimmed = query && visibleCount === 0;
                      const isActive = activeId === c.id && !query;
                      return (
                        <li key={c.id}>
                          <button
                            type="button"
                            onClick={() => scrollToSection(c.id)}
                            disabled={!!dimmed}
                            className={`w-full text-left flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive
                                ? 'bg-bgTint text-brandDeep font-semibold'
                                : dimmed
                                ? 'text-textTertiary/60 cursor-default'
                                : 'text-textSecondary hover:bg-bgCanvas hover:text-textPrimary'
                            }`}
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              <span
                                className={`w-1 h-5 rounded-full transition-colors ${
                                  isActive ? 'bg-brandMint' : 'bg-transparent'
                                }`}
                              />
                              <span className="truncate">{c.title}</span>
                            </span>
                            <span className="text-xs text-textTertiary tabular-nums shrink-0">
                              {query ? visibleCount : c.articles.length}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Sidebar CTA */}
                <div className="mt-8 bg-bgTint border border-brandMint/20 rounded-2xl p-5">
                  <div className="text-sm font-semibold text-textPrimary mb-1">Need something specific?</div>
                  <p className="text-xs text-textSecondary leading-relaxed mb-3">
                    Tell us your workflow and we'll point you to the right read.
                  </p>
                  <Link
                    to="/contact"
                    className="text-sm font-semibold text-brandDeep hover:text-brandMint transition-colors"
                  >
                    Talk to our team →
                  </Link>
                </div>
              </div>
            </aside>

            {/* Mobile search */}
            <div className="lg:hidden mb-8">
              <div className="relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-textTertiary" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  className="w-full pl-11 pr-10 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/40 focus:border-brandMint text-sm transition-all"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-textTertiary hover:text-textPrimary"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Main content */}
            <div className="min-w-0">
              {error ? (
                <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-12 text-center">
                  <p className="text-textSecondary">
                    We couldn't load articles right now. Please refresh, or come back in a moment.
                  </p>
                </div>
              ) : posts === null ? (
                <div className="space-y-12">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-8 bg-gray-100 rounded w-1/3 mb-4" />
                      <div className="grid sm:grid-cols-2 gap-4">
                        {Array.from({ length: 4 }).map((__, j) => (
                          <div key={j} className="bg-bgCanvas border border-gray-100 rounded-2xl p-6 space-y-3">
                            <div className="h-5 bg-gray-100 rounded w-5/6" />
                            <div className="h-4 bg-gray-100 rounded w-full" />
                            <div className="h-4 bg-gray-100 rounded w-3/4" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredCategories.length === 0 ? (
                <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-12 text-center">
                  <p className="text-textSecondary">
                    {query ? (
                      <>
                        No articles match &ldquo;{query}&rdquo;.{' '}
                        <button
                          type="button"
                          onClick={() => setQuery('')}
                          className="text-brandDeep font-semibold hover:text-brandMint transition-colors underline"
                        >
                          Clear search
                        </button>
                      </>
                    ) : (
                      'No articles yet. Check back soon.'
                    )}
                  </p>
                </div>
              ) : (
                <div className="space-y-20">
                  {filteredCategories.map((cat) => (
                    <section
                      key={cat.id}
                      id={cat.id}
                      ref={(el) => {
                        sectionRefs.current[cat.id] = el;
                      }}
                      className="scroll-mt-32"
                    >
                      <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary tracking-tight mb-2">
                          {cat.title}
                        </h2>
                        {cat.blurb && (
                          <p className="text-textSecondary text-base">{cat.blurb}</p>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {cat.articles.map((article, i) => (
                          <m.div
                            key={`${cat.id}-${i}`}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: Math.min(i, 4) * 0.04 }}
                          >
                            <Link
                              to={article.href}
                              className="group block h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-brandMint hover:shadow-glass transition-all"
                            >
                              <h3 className="font-display font-bold text-base lg:text-lg text-textPrimary leading-snug mb-3 group-hover:text-brandDeep transition-colors">
                                <Highlight text={article.title} query={query} />
                              </h3>
                              {article.description && (
                                <p className="text-sm text-textSecondary leading-relaxed mb-4 line-clamp-3">
                                  <Highlight text={article.description} query={query} />
                                </p>
                              )}
                              <div className="text-xs font-semibold text-brandMint uppercase tracking-wider group-hover:text-brandDeep transition-colors">
                                Read article →
                              </div>
                            </Link>
                          </m.div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-brandDeep text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to automate your practice?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                FastTrackr AI helps financial advisors automate meeting notes, document processing, CRM updates, and compliance — from a single secure platform built for wealth professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/contact"><Button size="lg">Book a Demo</Button></Link>
                <a
                  href="https://console.fasttrackr.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  Try FastTrackr AI for free →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const lower = text.toLowerCase();
  const needle = q.toLowerCase();
  const parts: Array<{ s: string; hit: boolean }> = [];
  let i = 0;
  while (i < text.length) {
    const idx = lower.indexOf(needle, i);
    if (idx === -1) {
      parts.push({ s: text.slice(i), hit: false });
      break;
    }
    if (idx > i) parts.push({ s: text.slice(i, idx), hit: false });
    parts.push({ s: text.slice(idx, idx + needle.length), hit: true });
    i = idx + needle.length;
  }
  return (
    <>
      {parts.map((p, idx) =>
        p.hit ? (
          <mark key={idx} className="bg-brandMint/30 text-textPrimary rounded px-0.5">
            {p.s}
          </mark>
        ) : (
          <span key={idx}>{p.s}</span>
        )
      )}
    </>
  );
}
