import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCTA from '../components/PageCTA';
import SectionLabel from '../components/CaseStudySectionLabel';
import { m } from '../lib/motion';
import {
  Users,
  Building2,
  Landmark,
  Clock,
  Database,
  Send,
  ShieldCheck,
  FileCheck2,
  UserCheck,
  CalendarClock,
  LifeBuoy,
  Handshake,
  Layers,
  TrendingUp,
} from 'lucide-react';

// Case Study — Breakaway Advisor (Schwab → Schwab, one day).
// Copy + structure from guideline-copy/case study/fasttrackr-case-study-breakaway.md.
// Mirrors src/pages/CaseStudy.tsx treatments (context strip, dark-green callout,
// Zero grid, single quote, 2×2 experience grid).

const context = [
  {
    icon: Users,
    label: 'The advisor moving shop',
    value: 'Solo advisor',
    note: 'no transition team, no back office',
  },
  {
    icon: Building2,
    label: 'Scope of the transition',
    value: '143 households',
    note: '411 accounts',
  },
  {
    icon: Landmark,
    label: 'Assets in motion',
    value: '~$100M',
    note: 'independent setup, built from scratch',
  },
];

// Day-one vertical timeline (left card in Section 01).
const timeline = [
  {
    chip: 'Minutes',
    label: 'Minutes, not days',
    caption: 'Client data in, every document built and pushed to DocuSign',
    bar: null,
  },
  {
    chip: 'Before noon',
    label: 'Every envelope sent',
    caption: 'Exactly as promised',
    bar: null,
  },
  {
    chip: 'End of day 1',
    label: '60%',
    caption: 'of client signatures completed on day one',
    bar: 60,
  },
  {
    chip: 'By Monday',
    label: '95%',
    caption: 'of clients fully moved',
    bar: 95,
  },
];

const zeros = [
  {
    icon: FileCheck2,
    title: 'Manual data entry',
    desc: 'FastTrackr made sense of the client data he already had and built every document from it. Nothing was re-keyed.',
  },
  {
    icon: ShieldCheck,
    title: 'NIGOs from data',
    desc: '2 NIGOs across 411 accounts, neither caused by FastTrackr. Validation ran before anything reached a client, not after a rejection came back.',
  },
  {
    icon: UserCheck,
    title: 'Clients missed',
    desc: 'Every household that chose to move was accounted for. Nobody fell through a spreadsheet.',
  },
  {
    icon: CalendarClock,
    title: 'Late nights',
    desc: 'No weekend of forms. No 2 a.m. re-keying. He spent day one on the phone with clients.',
  },
];

const experiences = [
  {
    icon: LifeBuoy,
    title: "A transition team he didn't have",
    desc: "Solo advisors don't get a project manager, a back office, or a paperwork desk. FastTrackr filled that gap.",
  },
  {
    icon: Handshake,
    title: 'A promise he could keep',
    desc: 'He told his clients noon. Hitting it set the tone for every conversation that followed.',
  },
  {
    icon: Layers,
    title: 'No document assembly',
    desc: 'Firm and custodian documents built and routed to DocuSign in bulk, not one household at a time.',
  },
  {
    icon: TrendingUp,
    title: 'No revenue lag',
    desc: '95% of clients moved by Monday. The book started earning at the new shop almost immediately.',
  },
];

export default function CaseStudyBreakaway() {
  useEffect(() => {
    document.title = 'FastTrackr AI — Breakaway Advisor Case Study';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-brandMint/10 text-brandDeep font-semibold text-sm border border-brandMint/20">
                  Case Study
                </span>
                <span className="text-sm font-medium text-textTertiary uppercase tracking-wider">
                  Breakaway Advisor · 2026
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-[1.05] mb-6">
                He told his clients the paperwork would be there by noon.{' '}
                <span className="relative inline-block text-brandMint">
                  It was.
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-brandMint/30 rounded-full" />
                </span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed">
                A solo advisor going independent — 143 households, 411 accounts,
                roughly $100M. No transition team. No big firm behind him. Every
                document built, validated, and in DocuSign before lunch on day
                one.
              </p>
            </m.div>

            {/* Visual — morning timeline */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex items-center justify-center p-8"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandMint/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandDeep/5 rounded-full blur-[80px]" />

              <div className="relative z-10 w-full max-w-sm">
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <div className="text-xs font-semibold text-textTertiary uppercase tracking-wider mb-1">
                      Day 1 · 9:00 AM
                    </div>
                    <div className="text-2xl font-display font-bold text-gray-300">
                      Data in
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-textTertiary uppercase tracking-wider mb-1">
                      12:00 PM
                    </div>
                    <div className="text-3xl font-display font-bold text-brandDeep">
                      Sent
                    </div>
                  </div>
                </div>

                {/* Fill bar */}
                <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden mb-3">
                  <m.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full bg-brandMint"
                  />
                </div>

                {/* Milestone axis */}
                <div className="grid grid-cols-3 mb-8">
                  {[
                    { icon: Database, label: 'Data in', wrap: 'items-start' },
                    { icon: FileCheck2, label: 'Docs built', wrap: 'items-center' },
                    { icon: Send, label: 'Envelopes sent', wrap: 'items-end' },
                  ].map((tick) => (
                    <div key={tick.label} className={`flex flex-col ${tick.wrap}`}>
                      <div className="w-7 h-7 rounded-lg bg-brandMint/15 text-brandDeep flex items-center justify-center mb-2">
                        <tick.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-textPrimary text-center">
                        {tick.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Headline number */}
                <div className="text-center border-t border-gray-100 pt-6">
                  <div className="text-5xl font-display font-bold text-brandDeep leading-none mb-2">
                    411 accounts
                  </div>
                  <div className="text-textTertiary">all sent before noon</div>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Context Strip */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid md:grid-cols-3 gap-6">
            {context.map((item, i) => (
              <m.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brandMint" />
                <div className="w-12 h-12 rounded-xl bg-brandMint/10 text-brandDeep flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold text-textTertiary uppercase tracking-wider mb-2">
                  {item.label}
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-textPrimary">
                  {item.value}
                </div>
                {item.note && (
                  <div className="text-textSecondary mt-2">{item.note}</div>
                )}
              </m.div>
            ))}
          </div>
        </section>

        {/* Section 01 — Day one, before lunch */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brandMint/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel number="01" title="Day one, before lunch" />
            </m.div>

            <div className="max-w-3xl mb-12 space-y-5 text-lg text-textSecondary leading-relaxed">
              <p>
                Going independent alone means there's no team to absorb the
                paperwork. There's no firm transition desk running the project in
                the background. It's the advisor, their client list, and a very
                short window in which every household needs a document in front of
                them.
              </p>
              <p>
                He'd made a promise to his clients: paperwork by noon on day one.
                Everything before that day was preparation — mapping every piece
                of client data he already owned against everything the new firm
                and custodians would need. When the day came, FastTrackr read that
                data, worked out what belonged where, generated every document, and
                pushed all 411 accounts into DocuSign in bulk.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Vertical timeline */}
              <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col justify-center gap-8">
                {timeline.map((row, i) => (
                  <m.div
                    key={row.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="flex gap-5 items-start"
                  >
                    <span className="flex-shrink-0 mt-1 inline-flex items-center px-3 py-1 rounded-full bg-brandMint/10 text-brandDeep text-[11px] font-bold uppercase tracking-wide w-24 text-center justify-center">
                      {row.chip}
                    </span>
                    <div className="flex-grow min-w-0">
                      <div className="text-2xl md:text-3xl font-display font-bold text-brandDeep leading-tight">
                        {row.label}
                      </div>
                      <div className="text-textSecondary mt-1">{row.caption}</div>
                      {row.bar !== null && (
                        <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden mt-3">
                          <m.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${row.bar}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: 0.2 + i * 0.12,
                              ease: 'easeOut',
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-brandMint to-brandDeep"
                          />
                        </div>
                      )}
                    </div>
                  </m.div>
                ))}
              </div>

              {/* Callout stat */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-brandDeep text-white rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-brandMint/15 rounded-full blur-[70px]" />
                <div className="relative z-10">
                  <Clock className="w-8 h-8 text-brandMint mb-5" />
                  <div className="text-5xl md:text-6xl font-display font-bold mb-3">
                    3 hours
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    All paperwork out
                  </div>
                  <div className="text-white/70">
                    Raw client data to signature-ready envelopes across 411
                    accounts. No manual entry.
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Section 02 — What FastTrackr brought about */}
        <section className="py-24 bg-brandDeep text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandMint/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel
                number="02"
                title="What FastTrackr brought about"
                onDark
              />
            </m.div>

            <div className="grid md:grid-cols-2 gap-8">
              {zeros.map((item, i) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-brandMint/15 text-brandMint flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-6xl font-display font-bold text-brandMint leading-none mb-4">
                    Zero
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </m.div>
              ))}
            </div>

            <p className="text-sm text-white/50 mt-8">
              NIGO = “Not In Good Order”.
            </p>
          </div>
        </section>

        {/* Quote block — single quote, no carousel */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-6">
              “
            </span>
            <p className="text-2xl md:text-3xl font-display font-semibold text-textPrimary leading-snug mb-8">
              FastTrackr saved me a tremendous amount of time and frustration
              throughout this process. Out of 411 accounts, we only had two NIGOs
              (neither due to FastTrackr), which is remarkable given the volume and
              complexity of the project.
              <br />
              <br />
              Their team is brilliant and the platform did an excellent job
              organizing and managing a significant amount of data. The efficiency,
              accuracy, and time savings were extremely valuable to me.
            </p>
            <div className="font-bold text-textPrimary text-lg">
              Douglas Vowels
            </div>
            <div className="text-textSecondary">Intentional Wealth Planning</div>
          </div>
        </section>

        {/* Section 03 — What it actually took off his plate */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel number="03" title="What it actually took off his plate" />
            </m.div>

            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((item, i) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brandMint/10 text-brandDeep flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-textPrimary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-textSecondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          headline="Going independent on your own?"
          link="/contact?interest=advisor-transitions&company=case-study-breakaway"
        />
      </main>

      <Footer hideCTA />
    </div>
  );
}
