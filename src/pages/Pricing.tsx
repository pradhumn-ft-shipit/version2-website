import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageFAQ from '../components/PageFAQ';
import { m } from 'framer-motion';
import { CheckCircle2, ArrowRight, Mic, FileSearch, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const transitionScopeBlocks = [
  'Advisor Transitions',
  'Acquisitions / M&A Integration',
  'Broker-Dealer Recruiting',
];

const scopingSteps = [
  {
    label: '01. Discovery',
    description: 'We map your current transition timeline and identify bottlenecks.',
  },
  {
    label: '02. Modeling',
    description: 'We build an ROI model based on projected time-savings and retained AUM.',
  },
  {
    label: '03. Pilot',
    description: 'We run a pilot on the first transition to prove the model before scaling.',
  },
];

const moduleCards = [
  {
    icon: <Mic className="w-6 h-6 text-brandDeep" />,
    title: 'Meeting Assistant',
    description: 'Per-seat, free tier to start. For advisors and teams who want meeting prep, notes, and follow-ups handled. Start free, scale up as your team grows.',
    href: '/solutions/meeting-assistant',
    interest: 'meeting-assistant',
  },
  {
    icon: <FileSearch className="w-6 h-6 text-brandDeep" />,
    title: 'Document Intelligence',
    description: 'Per-seat, pay for what you use. For advisors and teams turning brokerage statements, tax docs, and equity comp into clean, structured data. Free tier to start.',
    href: '/solutions/document-intelligence',
    interest: 'document-intelligence',
  },
  {
    icon: <UserPlus className="w-6 h-6 text-brandDeep" />,
    title: 'Client Onboarding',
    description: 'Per-seat for advisors. Custom for firms. For advisors onboarding new clients faster, and firms running onboarding at volume. Pricing flexes to either.',
    href: '/solutions/client-onboarding',
    interest: 'client-onboarding',
  },
];

const faqs = [
  {
    q: 'Can we start with one module and add others?',
    a: 'Yes. Most firms do.',
  },
  {
    q: 'Do you offer enterprise contracts?',
    a: 'Yes. For BDs, custodians, and large RIAs, we structure enterprise agreements tied to advisor and household volume.',
  },
  {
    q: 'Is there a free trial?',
    a: 'The Meeting Assistant and Document Intelligence modules have free tiers. Advisor Transitions starts with a paid pilot.',
  },
];

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
              Pricing built around the <span className="text-brandMint">value you get.</span>
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed">
              We don't sell seats by the dozen and hope you fit. Pricing flexes to what you're using FastTrackr for, and what it gives back to your firm.
            </p>
          </m.div>
        </section>

        {/* Advisor Transitions, full-width hero card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brandDeep text-white rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandMint/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Priced to your scope, not a seat count.
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Every firm's transition requirements and volume is different. We work with you to understand where FastTrackr can best support your transition, and to reflect scope and usage so you don't pay for anything you don't use.
                </p>
                <ul className="space-y-4 mb-8">
                  {transitionScopeBlocks.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-brandMint shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact?interest=advisor-transitions">
                  <button className="bg-brandMint text-brandDeep hover:bg-white px-8 py-4 rounded-full font-bold transition-colors duration-300 inline-flex items-center gap-2">
                    Book an Exploratory Call
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>

              <div className="bg-white/[0.07] border border-white/15 rounded-2xl p-8 backdrop-blur-md">
                <div className="text-xs font-semibold text-brandMint uppercase tracking-wider mb-6">How we scope</div>
                <div className="space-y-6">
                  {scopingSteps.map((step) => (
                    <div key={step.label}>
                      <div className="text-sm text-brandMint font-bold mb-1">{step.label}</div>
                      <div className="text-white/70 text-sm leading-relaxed">{step.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </m.div>
        </section>

        {/* Other modules row */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-textPrimary mb-3">
              Industry-best pricing on every module. Talk to us separately.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {moduleCards.map((card, i) => (
              <m.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-bgCanvas flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-textPrimary mb-4">{card.title}</h3>
                <p className="text-textSecondary leading-relaxed mb-8 flex-grow">{card.description}</p>
                <Link to={`/contact?interest=${card.interest}`}>
                  <button className="w-full bg-brandDeep text-white hover:bg-brandMint hover:text-brandDeep px-6 py-3 rounded-xl font-bold transition-colors">
                    Talk to Us
                  </button>
                </Link>
              </m.div>
            ))}
          </div>
        </section>

        <PageFAQ faqs={faqs} />
      </main>

      <Footer />
    </div>
  );
}
