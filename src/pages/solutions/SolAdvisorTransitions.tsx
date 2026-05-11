import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Clock, FileWarning, Smile, Database, LayoutList, FileText } from 'lucide-react';

export default function SolAdvisorTransitions() {
  const faqs = [
    {
      q: "Can FastTrackr handle our firm's custom forms?",
      a: "Yes. Custom forms are mapped during onboarding and from then on are filled, validated, and routed automatically."
    },
    {
      q: "What happens when the custodian rejects a submission?",
      a: "The system flags it, surfaces the cause, and guides the correction. Most NIGO patterns are caught before submission in the first place."
    },
    {
      q: "Do clients fill anything out manually?",
      a: "As little as possible. Where we can pre-populate, we do. Where we need confirmation, clients see what we already have and confirm, they don't retype it."
    },
    {
      q: "How is FastTrackr different from generic AI tools?",
      a: "Generic AI tools added a transition feature. We built the company around the problem. The system understands household structures, custodian-specific quirks, and form variations, because it was built with people who do this for a living."
    },
    {
      q: "How does pricing work?",
      a: "For Advisor Transitions, we price based on the time saved and the additional revenue we help capture. Talk to us, we'll work through what fits your situation."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="text-center max-w-4xl mx-auto">
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-textPrimary leading-tight mb-6">
                The AI transition engine for wealth management.
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-10 max-w-3xl mx-auto">
                Move advisor books in weeks, not months. Purpose-built for advisor transitions and shaped by the consultants, operators, and RIA founders who do this work every day.
              </p>
              <Link to="/contact?interest=advisor-transitions">
                <button className="bg-brandDeep text-brandMint hover:bg-brandDeepHover px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-xl">
                  Book a Demo
                </button>
              </Link>
            </m.div>
          </div>
        </section>

        {/* The Pain */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display font-bold text-textPrimary mb-8"
            >
              Why advisor transitions are broken
            </m.h2>
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-textSecondary space-y-6 leading-relaxed"
            >
              <p>
                Repapering hasn't been redesigned in decades.
              </p>
              <p>
                A typical transition takes 90 days. Some take longer. Each household generates dozens of forms, account applications, transfer-of-asset forms, feature forms, multiplied across every account in the book. Tracked in spreadsheets. Chased across email threads. One missing field sends a form back, and the cycle resets.
              </p>
              <p>
                For the advisor, it's months of operational work that has nothing to do with why they got into the business. For the team, it's overtime season. For clients, it's a stretch of silence that some don't wait through.
              </p>
              <p className="font-semibold text-brandDeep text-2xl">
                The industry loses an estimated $19B in client assets every year to transitions that didn't go smoothly enough.
              </p>
            </m.div>
          </div>
        </section>

        {/* What FastTrackr Does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">What FastTrackr does</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Data Collection', icon: <Database />, desc: 'AI extracts client and account data from documents, transcripts, and conversations. Pre-populated household records, ready for review, without another intake form.' },
                { title: 'Documentation', icon: <FileText />, desc: 'Smart mapping across custodians and firms. The right forms identified, pre-filled, and ready for signature. Push to the custodian via API where supported, or generate signature-ready documents.' },
                { title: 'Project Management', icon: <LayoutList />, desc: 'Hundreds of households, every form, every status, in one place. Replaces the Excel war room. Visible to you, your team, and your clients.' }
              ].map((feature, i) => (
                <m.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-glass text-center"
                >
                  <div className="w-16 h-16 bg-bgCanvas rounded-2xl flex items-center justify-center text-brandMint mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-4">{feature.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{feature.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Custodian Coverage */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display font-bold text-textPrimary mb-12">Custodian Coverage</h2>
            <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm text-left">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-brandDeep mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brandMint" /> Live today</h3>
                  <ul className="space-y-2 text-lg text-textSecondary mb-4">
                    <li>Fidelity</li>
                    <li>Charles Schwab</li>
                  </ul>
                  <p className="text-sm text-textTertiary italic">Together these cover roughly 70% of the market.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400" /> In active development</h3>
                  <p className="text-textSecondary">
                    We're adding new custodian mappings on a rolling basis, prioritized by customer roadmaps. If yours isn't listed, talk to us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-24 bg-brandDeep text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-white mb-4">The Outcomes</h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <Clock className="w-6 h-6 text-brandMint mx-auto mb-4" />
                <div className="font-bold mb-2">75% faster</div>
                <div className="text-white/80 text-sm">more books moved</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-6 h-6 text-brandMint mx-auto mb-4" />
                <div className="font-bold mb-2">Months → weeks</div>
                <div className="text-white/80 text-sm">timelines compress</div>
              </div>
              <div className="text-center">
                <FileWarning className="w-6 h-6 text-brandMint mx-auto mb-4" />
                <div className="font-bold mb-2">Fewer NIGOs</div>
                <div className="text-white/80 text-sm">pre-validated forms</div>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-6 h-6 text-brandMint mx-auto mb-4" />
                <div className="font-bold mb-2">Retained AUM</div>
                <div className="text-white/80 text-sm">less attrition</div>
              </div>
              <div className="text-center">
                <Smile className="w-6 h-6 text-brandMint mx-auto mb-4" />
                <div className="font-bold mb-2">Calmer clients</div>
                <div className="text-white/80 text-sm">invisible to numbers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-8">"</span>
            <p className="text-2xl md:text-3xl font-display font-semibold text-textPrimary leading-snug relative z-10 mb-8">
              This is the smoothest transition anyone in our circle has seen or heard about. It aligned with our workflow, and it just worked. We had planned for a month, we finished in two weeks.
            </p>
            <div className="font-bold text-textPrimary text-lg">Nico DeMaio</div>
            <div className="text-textSecondary">President and Co-founder, Cana Wealth Advisors</div>
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline="Book a 20-minute walkthrough. We'll show you exactly how a transition would run for your book." link="/contact?interest=advisor-transitions" />

      </main>
      
      <Footer />
    </div>
  );
}
