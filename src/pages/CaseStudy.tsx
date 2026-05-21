import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCTA from '../components/PageCTA';
import { m } from 'framer-motion';
import {
  Users,
  Building2,
  Clock,
  ShieldCheck,
  FileCheck2,
  CalendarCheck,
  Inbox,
  HeartHandshake,
  Eye,
  ArrowRight,
} from 'lucide-react';

const weeks = [
  { label: 'Week 1', value: 43.8, caption: 'signed & moved in the first week' },
  { label: 'Week 2', value: 70, caption: 'signed & moved by the end of week two' },
];

const zeros = [
  {
    icon: ShieldCheck,
    title: 'NIGO from repapering',
    desc: '100% straight-through processing',
  },
  {
    icon: FileCheck2,
    title: 'Manual forms',
    desc: 'Custodian and firm docs generated for signature automatically',
  },
  {
    icon: Clock,
    title: 'Delay from tracking',
    desc: 'End-to-end project management, in real time',
  },
];

const experiences = [
  {
    icon: CalendarCheck,
    title: 'No weekend anxiety',
    desc: 'Clients self-served on their own schedule. The team returned Monday to progress, not a backlog of chasing.',
  },
  {
    icon: Inbox,
    title: 'Zero email threads',
    desc: 'Every request and status update lived in one place: FastTrackr.',
  },
  {
    icon: HeartHandshake,
    title: 'Time on clients, not paperwork',
    desc: 'Advisors stayed in front of clients through the most fragile retention window.',
  },
  {
    icon: Eye,
    title: 'Real-time visibility',
    desc: 'Leadership always knew where every household stood, with no status calls.',
  },
];

function SectionLabel({
  number,
  title,
  onDark = false,
}: {
  number: string;
  title: string;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="text-5xl md:text-6xl font-display font-bold leading-none text-brandMint">
        {number}
      </span>
      <span className="hidden sm:block h-px flex-shrink-0 w-8 bg-current opacity-20" />
      <h2
        className={`text-3xl md:text-4xl font-display font-bold tracking-tight ${
          onDark ? 'text-white' : 'text-textPrimary'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export default function CaseStudy() {
  useEffect(() => {
    document.title = 'FastTrackr AI — Advisor Transition Case Study';
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
                  Advisor Transition · 2026
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-[1.05] mb-6">
                $100M in assets moved in{' '}
                <span className="relative inline-block text-brandMint">
                  two weeks
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-brandMint/30 rounded-full" />
                </span>
                .
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed">
                Starting from zero data and zero paperwork. One advisor team
                repapered the majority of their book before most advisors finish
                talking to clients.
              </p>
            </m.div>

            {/* Visual — assets moved */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex items-center justify-center p-8"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandMint/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandDeep/5 rounded-full blur-[80px]" />

              <div className="relative z-10 w-full max-w-sm">
                {/* From / To */}
                <div className="flex items-end justify-between mb-5">
                  <div>
                    <div className="text-xs font-semibold text-textTertiary uppercase tracking-wider mb-1">
                      Start
                    </div>
                    <div className="text-3xl font-display font-bold text-gray-300">
                      $0
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-brandMint mb-2" />
                  <div className="text-right">
                    <div className="text-xs font-semibold text-textTertiary uppercase tracking-wider mb-1">
                      Moved
                    </div>
                    <div className="text-4xl font-display font-bold text-brandDeep">
                      $100M
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

                {/* Timeline axis */}
                <div className="grid grid-cols-3">
                  {[
                    { label: 'Day 0', wrap: 'items-start' },
                    { label: 'Week 1', wrap: 'items-center' },
                    { label: 'Week 2', wrap: 'items-end' },
                  ].map((tick) => (
                    <div
                      key={tick.label}
                      className={`flex flex-col ${tick.wrap}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brandMint mb-2" />
                      <span className="text-sm font-bold text-textPrimary">
                        {tick.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* Context Strip */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                label: 'The team moving shop',
                value: '2 advisors + 2 support',
                note: 'plus a transition consultant',
              },
              {
                icon: Building2,
                label: 'Scope of the transition',
                value: '~150 households',
                note: null,
              },
            ].map((item, i) => (
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

        {/* Section 01 — Households signed & moved */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brandMint/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel number="01" title="Households signed & moved" />
            </m.div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Progress bars */}
              <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 flex flex-col justify-center gap-10">
                {weeks.map((week, i) => (
                  <m.div
                    key={week.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-base font-bold text-textPrimary uppercase tracking-wide">
                        {week.label}
                      </span>
                      <span className="text-4xl md:text-5xl font-display font-bold text-brandDeep">
                        {week.value}%
                      </span>
                    </div>
                    <div className="h-4 w-full rounded-full bg-gray-100 overflow-hidden">
                      <m.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${week.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-brandMint to-brandDeep"
                      />
                    </div>
                    <div className="text-textSecondary mt-3">{week.caption}</div>
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
                  <div className="text-6xl md:text-7xl font-display font-bold mb-3">
                    3.2 <span className="text-3xl md:text-4xl text-white/70">days</span>
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    Average, first call to repapering
                  </div>
                  <div className="text-white/70">Almost no manual entry.</div>
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

            <div className="grid md:grid-cols-3 gap-8">
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

        {/* Consultant Quote */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-6">
              “
            </span>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-display font-semibold text-textPrimary leading-snug mb-8"
            >
              The most seamless transition we've ever run.{' '}
              <strong className="font-bold">
                No manual overload
              </strong>
              , and for the{' '}
              <strong className="font-bold">
                first time neither we nor the advisor team were burning through
                our weekends.
              </strong>{' '}
              <strong className="font-bold">
                Work that would normally take 30+ days, with far more manual
                effort and errors, we completed in two weeks.
              </strong>
            </m.p>
            <div className="font-bold text-textPrimary text-lg">
              Transition Consultant
            </div>
          </div>
        </section>

        {/* Section 03 — What the team actually experienced */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-textPrimary"
            >
              <SectionLabel
                number="03"
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
          headline="Ready to run your next transition?"
          link="/contact?interest=advisor-transitions&company=case-study"
        />
      </main>

      <Footer hideCTA />
    </div>
  );
}
