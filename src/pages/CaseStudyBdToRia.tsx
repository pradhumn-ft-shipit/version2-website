import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCTA from '../components/PageCTA';
import SectionLabel from '../components/CaseStudySectionLabel';
import { m } from '../lib/motion';
import {
  Users,
  Building2,
  BarChart3,
  ShieldCheck,
  Search,
  Table,
  Flame,
  Check,
  User,
  Landmark,
  Scale,
  Briefcase,
  Layers,
  Database,
  UserCheck,
  Plane,
  PartyPopper,
} from 'lucide-react';

// Case Study — BD → RIA transition ($400M, nine days).
// Copy + structure from guideline-copy/case study/fasttrackr-case-study-wea-transition-v2.md.
// NOTE: the closing quote is a PLACEHOLDER (attributed "Moving Team") — swap for
// the real, approved quote before go-live. See §7 of the source brief.

const context = [
  {
    icon: Users,
    label: 'The team moving shop',
    value: '4 advisors + 3 support',
    note: 'broker-dealer → RIA',
  },
  {
    icon: Building2,
    label: 'Scope of the transition',
    value: '300+ households',
    note: '1,000+ accounts',
  },
  {
    icon: BarChart3,
    label: 'Assets in motion',
    value: '~$400M',
    note: 'to Fidelity, single custodian',
  },
];

const accountTypes = [
  { icon: User, label: 'Individual & joint' },
  { icon: Landmark, label: 'Entity' },
  { icon: Scale, label: 'Trust' },
  { icon: Briefcase, label: 'Employer plans' },
];

const zeros = [
  {
    icon: ShieldCheck,
    title: 'NIGOs from repapering error',
    desc: 'Validation ran against every document before it reached a client, across every account type in the book.',
  },
  {
    icon: Search,
    title: 'Data digging',
    desc: 'Broker-dealer exports in, signature-ready documents out. No hunting through folders, nothing re-keyed by hand.',
  },
  {
    icon: Table,
    title: 'Spreadsheet nightmares',
    desc: 'One source of truth. Structured data and unstructured PDFs reconciled automatically, not tracked cell by cell.',
  },
  {
    icon: Flame,
    title: 'Fire drills',
    desc: 'No re-dos, no escalations, no scrambling. The work simply completed.',
  },
];

const experiences = [
  {
    icon: Layers,
    title: 'Complexity stopped mattering',
    desc: 'Trusts, entities, and employer plans moved on the same timeline as individual accounts.',
  },
  {
    icon: Database,
    title: 'A single source of truth',
    desc: 'One spreadsheet export from the broker-dealer, plus the client documents the team already held. FastTrackr made sense of the unstructured PDFs alongside the structured data and worked from both as one source.',
  },
  {
    icon: UserCheck,
    title: 'Advisors stayed advisors',
    desc: 'The only work left for the team was the work only they could do: talking to clients.',
  },
  {
    icon: Plane,
    title: "Life didn't stop",
    desc: 'Week one of the transition and a major personal milestone happened in the same week, and neither one suffered.',
  },
];

export default function CaseStudyBdToRia() {
  useEffect(() => {
    document.title = 'FastTrackr AI — BD to RIA Transition Case Study';
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
                  BD → RIA Transition · 2026
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-[1.05] mb-6">
                The hardest kind of move. And it got{' '}
                <span className="relative inline-block text-brandMint">
                  boring.
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-brandMint/30 rounded-full" />
                </span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed">
                A broker-dealer to RIA transition is the most complex move in
                wealth management — new regulatory regime, new custodian, new
                paperwork, and a book full of entities, trusts, and employer
                plans. This one ran so cleanly the advisor team spent week one
                celebrating a milestone in Vegas.
              </p>
            </m.div>

            {/* Visual — nine-day arc */}
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
                      Day 0
                    </div>
                    <div className="text-2xl font-display font-bold text-gray-300">
                      Start
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-textTertiary uppercase tracking-wider mb-1">
                      Day 3
                    </div>
                    <div className="text-3xl font-display font-bold text-brandDeep">
                      70%
                    </div>
                  </div>
                </div>

                {/* Fill bar */}
                <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden mb-3">
                  <m.div
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
                    className="h-full rounded-full bg-brandMint"
                  />
                </div>

                <div className="text-sm font-semibold text-textPrimary mb-8">
                  Day 3 · 70% of revenue-account paperwork sent out
                </div>

                {/* Headline number */}
                <div className="text-center border-t border-gray-100 pt-6">
                  <div className="text-5xl font-display font-bold text-brandDeep leading-none mb-2">
                    $400M
                  </div>
                  <div className="text-textTertiary">
                    1,000+ accounts · 300+ households
                  </div>
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

        {/* Section 01 — Why BD to RIA is the hard one */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brandMint/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel number="01" title="Why BD to RIA is the hard one" />
            </m.div>

            <div className="max-w-3xl mb-12 space-y-5 text-lg text-textSecondary leading-relaxed">
              <p>
                Moving from one broker-dealer to another is a change of address.
                Moving from a broker-dealer to an RIA is a change of identity. The
                regulatory framework changes, the custodian changes, the paperwork
                changes, and the firm's own compliance obligations change alongside
                all of it.
              </p>
              <p>
                Then there's the book. This one wasn't a clean list of individual
                brokerage accounts. It carried entity accounts, trusts, and
                employer-sponsored plans — each with its own document set, its own
                signatory rules, and its own ways to go Not In Good Order. Multiply
                that across 1,000+ accounts and the manual version of this project
                is measured in months.
              </p>
              <p>
                Everything FastTrackr worked from was already in the team's hands:
                their own broker-dealer exports and the account opening forms they
                already held. There was no new data collection, no client
                questionnaires, no discovery phase. The only information clients
                were ever asked for was a current phone number or email address
                where the one on file had gone stale.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Account-complexity card */}
              <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
                  {accountTypes.map((t, i) => (
                    <m.div
                      key={t.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-brandMint/10 text-brandDeep flex items-center justify-center mb-3">
                        <t.icon className="w-7 h-7" />
                      </div>
                      <span className="text-sm font-bold text-textPrimary">
                        {t.label}
                      </span>
                    </m.div>
                  ))}
                </div>
                <p className="text-textSecondary text-center border-t border-gray-100 pt-6">
                  Every account type generated from the same source data, each with
                  its own document set.
                </p>
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
                  <ShieldCheck className="w-8 h-8 text-brandMint mb-5" />
                  <div className="text-6xl md:text-7xl font-display font-bold mb-3">
                    Zero
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    NIGOs from repapering error
                  </div>
                  <div className="text-white/70 mb-6">
                    Across 1,000+ accounts, entities, trusts, and plans.
                  </div>
                  <div className="border-t border-white/10 pt-5 space-y-3">
                    <div className="text-xs font-semibold text-brandMint uppercase tracking-widest mb-1">
                      Validated before every send
                    </div>
                    {accountTypes.map((t) => (
                      <div key={t.label} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brandMint/15 text-brandMint flex items-center justify-center">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-sm text-white/80">{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Section 02 — The nine days */}
        <section className="py-24 bg-bgPrimary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel number="02" title="The nine days" />
            </m.div>

            {/* Block A — Day 3 */}
            <div className="max-w-2xl mx-auto mb-16">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-base font-bold text-textPrimary uppercase tracking-wide">
                    Day 3
                  </span>
                  <span className="text-5xl md:text-6xl font-display font-bold text-brandDeep">
                    70%
                  </span>
                </div>
                <div className="h-4 w-full rounded-full bg-gray-100 overflow-hidden">
                  <m.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '70%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-brandMint to-brandDeep"
                  />
                </div>
                <div className="text-textSecondary mt-3">
                  of revenue-producing clients out for signature
                </div>
              </m.div>
              <p className="text-lg text-textSecondary leading-relaxed mt-8">
                Three days in, the clients responsible for the majority of the
                firm's revenue already had their paperwork in hand. The revenue
                base of the practice was secured before most transitions have
                finished assembling their first documents.
              </p>
            </div>

            {/* Block B — Day 9, full-width dark band */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brandDeep text-white rounded-[32px] px-8 py-12 md:px-16 md:py-14 relative overflow-hidden flex flex-col md:flex-row md:items-center md:gap-12"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/15 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandMint/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 flex-shrink-0 md:border-r md:border-white/10 md:pr-12 mb-6 md:mb-0">
                <div className="text-xs font-semibold text-brandMint uppercase tracking-widest mb-3">
                  Day 9
                </div>
                <div className="text-6xl md:text-7xl font-display font-bold leading-none">
                  80%
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-2xl md:text-3xl font-display font-semibold mb-2">
                  of all accounts fully executed by day 9
                </div>
                <div className="text-white/70">
                  1,000+ accounts. Entities, trusts, and employer plans included.
                </div>
              </div>
            </m.div>

            <div className="max-w-3xl mx-auto mt-8 space-y-5 text-lg text-textSecondary leading-relaxed">
              <p>
                Nine days in, four out of five accounts across the entire book were
                done — not sent, not pending, executed. The only thing left
                standing between the team and a finished transition was the one
                thing that should be: conversations with clients.
              </p>
              <p className="text-base text-textTertiary">
                The remaining accounts were the laggards every transition has —
                clients who simply need several touchpoints before they get to it.
                They're being worked through the same way, and to date the team has
                not filled out a single form by hand.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03 — What FastTrackr brought about */}
        <section className="py-24 bg-brandDeep text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandMint/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SectionLabel
                number="03"
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

        {/* Section 04 — The part nobody expects */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel number="04" title="The part nobody expects" />
            </m.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
              <div className="space-y-5 text-lg text-textSecondary leading-relaxed">
                <p>
                  Transitions are famous for what they cost people personally.
                  Cancelled plans, missed events, weekends that disappear into a
                  stack of forms.
                </p>
                <p>
                  In week one — the week that normally consumes everything — the
                  advisor team was in Vegas, celebrating a major personal
                  milestone. The work was already done. What was left was talking
                  to clients, and that could happen from anywhere.
                </p>
                <p>
                  The advisor's own summary of the experience: it had gotten
                  boring. Nothing was breaking. Nothing needed chasing. Everything
                  finished the moment it was asked for.
                </p>
              </div>

              {/* Right visual — the same week, two things at once */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
                <div className="text-xs font-semibold text-textTertiary uppercase tracking-widest mb-6">
                  The same week
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-5 rounded-2xl bg-bgCanvas border border-gray-100">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brandMint/10 text-brandDeep flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-textPrimary">
                        The transition
                      </div>
                      <div className="text-textSecondary text-sm">
                        Most of the book already in motion, hands-free
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 rounded-2xl bg-bgCanvas border border-gray-100">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brandMint/10 text-brandDeep flex items-center justify-center">
                      <PartyPopper className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-textPrimary">
                        The milestone
                      </div>
                      <div className="text-textSecondary text-sm">
                        Celebrated in Vegas, no laptop required
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-textTertiary text-sm mt-6 pt-6 border-t border-gray-100">
                  Neither one suffered for the other.
                </p>
              </div>
            </div>

            {/* Pull-quote */}
            <m.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-textPrimary leading-tight">
                “It got boring. Nothing broke, and everything was done instantly.”
              </p>
            </m.blockquote>
          </div>
        </section>

        {/* Quote block — PLACEHOLDER (swap for approved quote before go-live) */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-6">
              “
            </span>
            <p className="text-2xl md:text-3xl font-display font-semibold text-textPrimary leading-snug mb-8">
              A move like this normally comes with a constant low-level anxiety —
              what's been missed, what's going to come back, what's waiting for you
              Monday morning. We never had it. Entities, trusts, employer plans —
              FastTrackr handled the whole book, and it was accurate. We could put
              our attention where it actually mattered: our clients.
            </p>
            <div className="font-bold text-textPrimary text-lg">Moving Team</div>
            <div className="text-textSecondary">
              Founding Partners | Independent RIA
            </div>
          </div>
        </section>

        {/* Section 05 — What the team actually experienced */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel
                number="05"
                title="What the team actually experienced"
              />
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
          headline="Planning a BD to RIA move?"
          link="/contact?interest=advisor-transitions&company=case-study-bd-to-ria"
        />
      </main>

      <Footer hideCTA />
    </div>
  );
}
