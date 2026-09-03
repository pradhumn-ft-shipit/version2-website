import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCTA from '../components/PageCTA';
import { m } from '../lib/motion';
import { ArrowRight, Zap, Layers, Users } from 'lucide-react';

// Case Study index / landing page (/case-study).
// Copy written in-house; the three cards link into each study. No nav/footer
// link yet — reachable by URL. Card order: breakaway, BD→RIA, advisor transition.

const studies = [
  {
    href: '/case-study/independent-breakaway-setup',
    eyebrow: 'Breakaway Advisor · 2026',
    stat: '411 accounts',
    statNote: 'every envelope out before noon',
    title: 'A solo advisor who promised paperwork by noon — and kept it.',
    icon: Zap,
  },
  {
    href: '/case-study/bd-to-ria-400m-transition',
    eyebrow: 'BD → RIA Transition · 2026',
    stat: '$400M',
    statNote: '80% of accounts executed in nine days',
    title: 'The hardest move in wealth management, and it got boring.',
    icon: Layers,
  },
  {
    href: '/case-study/advisor-transition',
    eyebrow: 'Advisor Transition · 2026',
    stat: '$100M',
    statNote: 'moved in two weeks, from zero data',
    title: 'Two advisors, 150 households, most of the book repapered in a fortnight.',
    icon: Users,
  },
];

export default function CaseStudyIndex() {
  useEffect(() => {
    document.title = 'FastTrackr AI — Case Studies';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandMint/10 text-brandDeep font-semibold text-sm border border-brandMint/20 mb-6">
              Case Studies
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-[1.05] mb-5">
              Boring is the whole{' '}
              <span className="relative inline-block text-brandMint">
                product.
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-brandMint/30 rounded-full" />
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-display font-semibold text-textSecondary leading-tight mb-6">
              Transitions that stopped being dramatic.
            </p>
            <p className="text-lg text-textTertiary">Read our case studies.</p>
          </m.div>
        </section>

        {/* Study cards */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {studies.map((study, i) => (
              <m.div
                key={study.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={study.href}
                  className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 transition-all duration-300 hover:shadow-glass hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brandMint/10 text-brandDeep flex items-center justify-center">
                      <study.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium text-textTertiary uppercase tracking-wider">
                      {study.eyebrow}
                    </span>
                  </div>

                  <div className="mb-5">
                    <div className="text-4xl font-display font-bold text-brandDeep leading-none">
                      {study.stat}
                    </div>
                    <div className="text-textSecondary mt-1">{study.statNote}</div>
                  </div>

                  <h2 className="text-xl font-bold text-textPrimary leading-snug mb-6 flex-grow">
                    {study.title}
                  </h2>

                  <span className="inline-flex items-center gap-2 text-brandDeep font-bold border-t border-gray-100 pt-5 w-full">
                    Read the case study
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </m.div>
            ))}
          </div>
        </section>

        <PageCTA
          headline="Ready to run your next transition?"
          link="/contact?interest=advisor-transitions&company=case-study-index"
        />
      </main>

      <Footer hideCTA />
    </div>
  );
}
