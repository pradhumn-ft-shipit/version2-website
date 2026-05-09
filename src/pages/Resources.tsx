import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';

type Article = {
  title: string;
  description?: string;
  href: string;
};

type Category = {
  id: string;
  title: string;
  blurb?: string;
  articles: Article[];
};

const categories: Category[] = [
  {
    id: 'ai-in-client-communication-and-notetaking',
    title: 'Client Communication & Notetaking',
    blurb: 'How AI is changing meeting capture, follow-ups, and CRM hygiene.',
    articles: [
      {
        title: 'AI Note-Taking for Financial Advisors: From Meeting Chaos to Clean CRM',
        description: 'Advisors lose 10–11 hours a week to note-taking, follow-ups, and manual CRM updates. A better way: AI-powered meeting capture with auto-summaries, tasks, and compliant logs pushed straight into your CRM.',
        href: '/blog/ai-notetaking-for-financial-advisors',
      },
      {
        title: 'Automating Content and Communication For Financial Advisors',
        description: 'How to scale the service experience without compromising the personal attention that built the business.',
        href: '/blog/automating-content-and-communitcation-for-financial-advisors',
      },
    ],
  },
  {
    id: 'document-processing-and-back-office-automation',
    title: 'Document Processing & Back-Office',
    blurb: 'Where automation pays off first: onboarding, compliance, and dynamic billing.',
    articles: [
      {
        title: 'How Back-Office Automation Is Transforming Financial Advisory Firms',
        description: 'A deep dive that quantifies the cost of non-revenue work and lays out where automation pays off first.',
        href: '/blog/how-back-office-automation-is-transforming-financial-advisory-firms',
      },
      {
        title: 'How AI Document Processing is Transforming Wealth Management',
        description: 'Every relationship begins with documents. AI turns unstructured PDFs and scans into structured data in minutes.',
        href: '/blog/how-ai-document-processing-is-transforming-wealth-management',
      },
      {
        title: 'How Financial Advisors Are Using AI for Document Processing',
        description: 'A practical guide to how RIAs deploy AI for extraction, intelligent categorization, enrichment, and client-ready reports.',
        href: '/blog/how-financial-advisor-are-using-ai-for-document-processing',
      },
    ],
  },
  {
    id: 'ai-for-client-prospecting-and-growth',
    title: 'Prospecting & Growth',
    blurb: 'Real-time signals, predictive lead scoring, and retention frameworks.',
    articles: [
      {
        title: 'Marketing & Client Prospecting Using AI: A Blueprint for Scalable Growth',
        description: 'Real-time signals, predictive lead scoring, and automated outreach that attracts ideal clients.',
        href: '/blog/marketing-and-client-prospecting-using-ai',
      },
      {
        title: 'AI Powered Client Acquisition For RIAs',
        description: 'Practical AI applications for client acquisition and onboarding.',
        href: '/blog/ai-powered-client-acquisition-for-rias',
      },
      {
        title: 'Using Agentic AI to Reclaim Time and Transform Client Relationships',
        description: 'How agentic AI helps advisors focus on relationship building and strategic planning.',
        href: '/blog/using-agentic-ai-to-reclaim-time-and-transform-client-relationships',
      },
      {
        title: 'The Five Pillars of Client Retention Using AI',
        description: 'A framework for improving long-term client retention using AI.',
        href: '/blog/the-five-pillars-of-client-retention-using-ai',
      },
    ],
  },
  {
    id: 'ai-for-compliance-security-and-data-management',
    title: 'Compliance, Security & Data',
    blurb: 'Vendor evaluation, time savings, and the modern data stack.',
    articles: [
      {
        title: 'Download the Compliance Checklist to Evaluate AI Tools and Vendors',
        description: 'A detailed 8-point checklist for evaluating AI vendors.',
        href: '/contact',
      },
      {
        title: 'AI Automation, Compliance and the RIA Time Trap',
        description: 'How advisory firms can reclaim two days a week without breaking compliance.',
        href: '/blog/ai-automation-compliance-and-the-ria-time-trap',
      },
      {
        title: 'Data and Compliance for RIAs',
        description: 'A reality check on data management and compliance for modern advisory firms.',
        href: '/blog/how-smart-wealth-management-firms-are-using-data-to-win-clients-stay-compliant-and-scale-profitably',
      },
    ],
  },
  {
    id: 'the-role-of-ai-in-wealth-management-strategy',
    title: 'AI in Wealth Management Strategy',
    blurb: 'The strategic case for AI across the modern advisory practice.',
    articles: [
      { title: 'AI in Wealth Management: Delivering Superior Client Experiences', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'AI for Financial Advisors: Using AI To Automate, Optimize, and Elevate', href: '/blog/ai-for-financial-advisors-using-ai-to-automate-optimize-and-elevate' },
      { title: 'Financial Planning for the Next Generation', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'Tech and the Transformation of Wealth Planning', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'Why Financial Advice Is More Than Just Money Management', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'Wealth Management Opportunity, Challenges and Top Use Cases', href: '/blog/wealth-management-opportunity-challenges-and-top-use-cases' },
      { title: "AI For RIA's And Financial Advisors", href: '/blog/wealth-management-opportunity-challenges-and-top-use-cases' },
      { title: 'Beyond the Usual: How RIA Firms Are Reimagining Their Tech Stack', href: '/blog/beyond-the-usual-how-ria-firms-are-reimagining-their-tech-stack-for-efficiency-and-growth' },
      { title: 'Three Big Opportunities for Wealth Advisors (and How AI Helps You Capture Them)', href: '/blog/three-big-opportunities-for-wealth-advisors' },
      { title: 'AI And Technology Guide For The New RIAs: How To Build Your Perfect Tech Stack', href: '/blog/ai-and-technology-guide-for-the-new-rias-how-to-build-your-perfect-tech-stack' },
    ],
  },
  {
    id: 'advisor-trends-behavior-and-industry-commentary',
    title: 'Advisor Trends & Industry',
    blurb: 'Conversations with advisors, founders, and operators reshaping the industry.',
    articles: [
      { title: '41 Must-Watch Podcasts for Financial Advisors (and How to Make Them Actionable)', href: '/blog/list-of-must-watch-podcasts-for-financial-advisors' },
      { title: 'Advisory 3.0: Tech, Trust, and Tailored Financial Planning', href: '/blog/advisory-3-0-tech-trust-and-tailored-financial-planning' },
      { title: 'Systematizing CRMs to Power Lean Tech for Scalable Growth', href: '/blog/systematizing-crms-to-power-lean-tech-for-scalable-growth' },
      { title: 'Democratizing Financial Advice: How AI Levels the Playing Field', href: '/blog/democratizing-financial-advice-ethan-jung-vineet-mohan-advisor-ally-podcast-10' },
      { title: "A Standout Young Advisor's Journey: Lessons for the Next Generation", href: '/blog/a-standout-young-advisor-s-journey-brittany-brinckerhoff-vineet-mohan-advisor-ally-podcast-08' },
      { title: 'Building an $800M Advisory Firm', href: '/blog/building-a-800m-advisory-firm' },
      { title: 'The Journalist Every Financial Advisor Reads', href: '/blog/the-journalist-every-financial-advisor-reads-oisin-breen-vineet-mohan-advisor-ally-podcast-09' },
      { title: 'The Data Gap In Wealth Management', href: '/blog/the-data-gap-in-wealth-management' },
      { title: 'How 15 Years of Bull Market Euphoria Has Created a Generation of Overconfident Investors', href: '/blog/how-15-years-of-bull-market-euphoria-has-created-a-generation-of-overconfident-investors' },
      { title: 'From Gold Mines To Wealth Management', href: '/blog/from-gold-mines-to-wealth-management' },
      { title: 'From IIT Bombay To Wall Street To Starting an RIA', href: '/blog/from-iit-bombay-to-wall-street-to-starting-an-ria' },
      { title: 'The Evolving Role Of Financial Advisors In The Age Of AI', href: '/blog/the-evolving-role-of-financial-advisors-in-the-age-of-ai' },
      { title: 'Transforming Wealth Management Through Vertical AI: The Story Behind FastTrackr AI', href: '/blog/transforming-wealth-management-through-vertical-ai-fasttrackr-ai-on-gai-ventures-podcast' },
    ],
  },
  {
    id: 'fasttrackr-ai-in-action',
    title: 'FastTrackr AI in Action',
    blurb: 'Milestones, certifications, and where the team has shown up.',
    articles: [
      { title: 'FastTrackr AI Achieves SOC 2 Type II Certification: A Major Milestone in Security & Trust', href: '/blog/fasttrackr-ai-achieves-soc-2-type-ii-certification-a-milestone-in-security-and-trust' },
      { title: 'FastTrackr AI At Wealth Management Edge', href: '/blog/fasttrackr-ai-at-wealth-management-edge' },
    ],
  },
];

const totalArticles = categories.reduce((acc, c) => acc + c.articles.length, 0);

function matches(article: Article, q: string) {
  if (!q) return true;
  const haystack = (article.title + ' ' + (article.description ?? '')).toLowerCase();
  return haystack.includes(q);
}

export default function Resources() {
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState<string>(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((c) => ({ ...c, articles: c.articles.filter((a) => matches(a, q)) }))
      .filter((c) => c.articles.length > 0);
  }, [query]);

  const totalFiltered = filteredCategories.reduce((acc, c) => acc + c.articles.length, 0);

  // Scroll-spy: track which section is currently in view
  useEffect(() => {
    if (query) return; // skip scroll-spy while filtering
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
  }, [query]);

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">Resources</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6 tracking-tight">
              The AI playbook for modern advisors.
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-3xl mx-auto">
              {totalArticles} articles, deep dives, and field notes for advisors, RIAs, and wealth firms putting AI to work — without the buzzwords.
            </p>
          </motion.div>
        </section>

        {/* Mobile chip nav (lg- only) */}
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
              {filteredCategories.length === 0 ? (
                <div className="bg-bgCanvas border border-gray-100 rounded-2xl p-12 text-center">
                  <p className="text-textSecondary">
                    No articles match &ldquo;{query}&rdquo;.{' '}
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      className="text-brandDeep font-semibold hover:text-brandMint transition-colors underline"
                    >
                      Clear search
                    </button>
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
                          <motion.div
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
                          </motion.div>
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
