import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageFAQ from '../components/PageFAQ';
import { m } from '../lib/motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
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

const faqs = [
  {
    q: 'Do you offer enterprise contracts?',
    a: 'Yes. For BDs, custodians, and large RIAs, we structure enterprise agreements tied to advisor and household volume.',
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
              We don't sell seats by the dozen and hope you fit. Advisor transition software pricing flexes to what you're using FastTrackr for, and what it gives back to your firm.
            </p>
          </m.div>
        </section>

        {/* Advisor Transitions, full-width hero card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
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

        <PageFAQ faqs={faqs} />
      </main>

      <Footer />
    </div>
  );
}
