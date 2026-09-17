import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { m } from '../../lib/motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Clock, FileWarning, Smile, Database, LayoutList, FileText, X } from 'lucide-react';

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
              <h1 className="text-5xl md:text-7xl font-display font-bold text-textPrimary leading-tight mb-4">
                AI-driven Advisor Transitions, from months to days.
              </h1>
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-brandDeep mb-6">
                The AI transition engine for wealth management.
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed mb-10 max-w-3xl mx-auto">
                FastTrackr is the repapering platform purpose-built for advisor transitions, moving advisor books in days, not months. Shaped by the operators who do repapering and book movement every day.
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
              <div className="grid sm:grid-cols-2 gap-6 mt-2">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-glass text-center">
                    <div className="w-14 h-14 bg-bgCanvas rounded-2xl flex items-center justify-center text-brandMint mx-auto mb-5">
                      <FileWarning className="w-6 h-6" />
                    </div>
                    <div className="text-5xl font-display font-bold text-brandDeep mb-2">30–50%</div>
                    <p className="text-textSecondary leading-relaxed">
                      Industry estimate for the not-in-good-order (NIGO) rate on transition paperwork. Every rejection sends forms back and resets the clock.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-glass text-center">
                    <div className="w-14 h-14 bg-bgCanvas rounded-2xl flex items-center justify-center text-brandMint mx-auto mb-5">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div className="text-5xl font-display font-bold text-brandDeep mb-2">~$40K<span className="text-2xl font-bold">/week</span></div>
                    <p className="text-textSecondary leading-relaxed">
                      What every week a transition drags costs on a $200M book, at a ~1% advisory fee, before any client attrition.
                    </p>
                  </div>
                </div>
            </m.div>
          </div>
        </section>

        {/* What FastTrackr Does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">How FastTrackr does the repapering</h2>
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

        {/* Requirements known up front */}
        <section className="pb-8 -mt-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brandDeep/[0.04] border border-brandDeep/10 rounded-3xl p-8 text-center">
              <p className="text-lg md:text-xl text-textPrimary leading-relaxed">
                FastTrackr understands the paperwork requirements from your custodian and firm
                setup, so <span className="font-semibold text-brandDeep">every form and every required field is known before data collection even begins</span>.
                Gaps surface early, not at the signing table, and there's no scramble at the end.
              </p>
            </div>
          </div>
        </section>

        {/* How a transition runs, in four steps */}
          <section className="py-24 bg-bgCanvas border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">How an advisor transition runs with FastTrackr, in four steps</h2>
                <p className="text-lg text-textSecondary max-w-2xl mx-auto">Same engine, every book. The first move is the slowest; every one after is faster.</p>
              </div>
              <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* connecting line behind the badges on desktop */}
                <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brandMint/40 via-brandMint/40 to-brandMint/40" aria-hidden="true" />
                {[
                  { n: '1', title: 'Collect', desc: 'AI pulls client and account data from your existing systems, documents, and conversations, so nobody retypes a household from scratch.' },
                  { n: '2', title: 'Prepare', desc: 'The right custodian and firm forms are identified, mapped, and pre-filled, then validated to catch NIGO issues before they reach the custodian.' },
                  { n: '3', title: 'Sign & submit', desc: 'Clients confirm and sign what we already have. Documents push to the custodian via API where supported, or generate signature-ready.' },
                  { n: '4', title: 'Track to done', desc: 'Every household, form, and status in one place, visible to you, your team, and your clients, until the last account lands.' },
                ].map((step, i) => (
                  <div key={i} className="relative bg-white p-8 pt-10 rounded-3xl border border-gray-100 shadow-glass text-center">
                    <div className="relative z-10 -mt-16 mb-6 mx-auto w-16 h-16 rounded-full bg-brandDeep text-brandMint flex items-center justify-center font-display font-bold text-2xl shadow-lg ring-8 ring-bgCanvas">
                      {step.n}
                    </div>
                    <h3 className="text-xl font-bold text-textPrimary mb-2">{step.title}</h3>
                    <p className="text-textSecondary leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        {/* How the paperwork reaches the custodian */}
          <section className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">Delivered the way each custodian wants it</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-textPrimary mb-3">Three ways out</h3>
                  <p className="text-textSecondary leading-relaxed">
                    One-click push to DocuSign for signature, filled PDFs you can download where a
                    wet signature is still required, or the household data mapped straight into a
                    custodian's or broker-dealer's own template when they'd rather do the filling.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-textPrimary mb-3">Custodian quirks, handled</h3>
                  <p className="text-textSecondary leading-relaxed">
                    Every custodian has its own rules — a carbon copy here, an SMS verification there.
                    FastTrackr knows them per custodian and builds them into the submission, so nothing
                    bounces on a technicality.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-textPrimary mb-3">Nothing slips</h3>
                  <p className="text-textSecondary leading-relaxed">
                    A single view tracks what's still outstanding across every household, so you can
                    see completion at a glance and close the gaps before submission.
                  </p>
                </div>
              </div>
            </div>
          </section>

        {/* Without / With FastTrackr comparison */}
          <section className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">The same transition, with and without FastTrackr</h2>
              </div>
              <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-glass bg-white">
                <div className="grid grid-cols-2">
                  <div className="p-5 bg-gray-50 text-center font-bold text-gray-500 flex items-center justify-center gap-2">
                    <X className="w-5 h-5 text-red-400" /> Without FastTrackr
                  </div>
                  <div className="p-5 bg-brandDeep text-center font-bold text-white flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brandMint" /> With FastTrackr
                  </div>
                </div>
                {[
                  { without: 'Data re-keyed from scratch for every household', with: 'Household data collected once, then reused automatically' },
                  { without: 'Forms hunted down and filled by hand across custodians', with: 'Right forms mapped and pre-filled automatically' },
                  { without: 'NIGO rejections caught only after the custodian sends them back', with: 'Most NIGO patterns caught before submission' },
                  { without: 'Status tracked in spreadsheets and email threads', with: 'Every household and status in one shared view' },
                  { without: 'Timelines measured in months', with: 'Timelines measured in days' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-2 border-t border-gray-100">
                    <div className="p-5 flex gap-3 items-start text-textSecondary">
                      <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /><span>{row.without}</span>
                    </div>
                    <div className="p-5 flex gap-3 items-start bg-brandMint/[0.05] text-textPrimary">
                      <CheckCircle2 className="w-5 h-5 text-brandMint shrink-0 mt-0.5" /><span className="font-medium">{row.with}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        {/* Transition types we handle (protocol / non-protocol / tuck-in / same-custodian) */}
          <section className="py-24 bg-bgCanvas border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">Built for every kind of transition</h2>
                <p className="text-lg text-textSecondary max-w-2xl mx-auto">Protocol move, non-protocol resignation, tuck-in acquisition, or a same-custodian switch, the operational work is the same shape. FastTrackr handles the variations on either side.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Protocol transitions', desc: 'Advisors moving between firms in the Broker Protocol take a defined set of client information. FastTrackr organizes that data, flags the gaps, and speeds up collection with an AI-driven flow, then repapers the book at the new custodian, firm paperwork included.' },
                  { title: 'Non-protocol transitions', desc: 'When the departing or receiving firm is outside the Protocol, the move is more constrained. The system adapts to what can and can\'t travel, and keeps the audit trail clean.' },
                  { title: 'Tuck-in acquisitions', desc: 'A practice folding into a larger RIA or platform runs through the same engine, so the acquirer\'s ops team absorbs the volume without growing headcount.' },
                  { title: 'Same-custodian moves', desc: 'When only the firm or affiliation changes and the custodian stays the same, the assets don\'t move — often just a change-of-advisor form on the custodian side. FastTrackr handles that lighter custodian lift and still prepares the full firm paperwork — advisory agreement, fee schedule, and disclosures — so nothing on the firm side is missed.' },
                ].map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-textPrimary mb-3">{t.title}</h3>
                    <p className="text-textSecondary leading-relaxed">{t.desc}</p>
                  </div>
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
                  <ul className="space-y-2 text-lg text-textSecondary">
                    <li>Fidelity</li>
                    <li>Charles Schwab</li>
                    <li>Goldman Sachs</li>
                    <li>SEI</li>
                    <li className="text-textSecondary/70">…and more</li>
                  </ul>
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
                <div className="font-bold mb-2">Months → days</div>
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
                <div className="text-white/80 text-sm">harder to measure, easy to feel</div>
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
            <div className="text-textSecondary">President and Co-founder, AdvizorStack</div>
          </div>
        </section>

        {/* Grier Rubeling reciprocal block (links back to the podcast page;
            the episode body links here). */}
          <section className="py-24 bg-bgCanvas border-y border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-3">
                  Listen
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-textPrimary mb-3">
                  Grier Rubeling, founder of Advisor Transition Services
                </h2>
                <p className="text-lg text-textSecondary max-w-3xl mx-auto">
                  Nearly two decades moving books of business — why better technology hasn't made
                  transitions simpler, the AUM trap, and what advisors get wrong when they move.
                </p>
              </div>
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3 aspect-video rounded-2xl overflow-hidden bg-black shadow-glass">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/hQbdlf51hOA"
                    title="The Absolute Truth About Advisor Transitions — Grier Rubeling on Advisor Ally"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <p className="text-textSecondary leading-relaxed mb-6">
                    Grier Rubeling founded Advisor Transition Services in 2018 and has become one of
                    the names advisors turn to when they start researching how a book of business
                    actually moves. Her conversation with our team on <em>Advisor Ally</em> is the
                    clearest primer we know on the operational reality of a transition.
                  </p>
                  <Link
                    to="/resources/podcasts/advisor-ally-ep22-grier-rubeling"
                    className="inline-block bg-brandDeep text-brandMint hover:bg-brandDeepHover px-6 py-3 rounded-full font-bold transition-colors"
                  >
                    Watch the full episode →
                  </Link>
                </div>
              </div>
            </div>
          </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline="Book a 20-minute walkthrough. We'll show you exactly how a transition would run for your book." link="/contact?interest=advisor-transitions" />

      </main>
      
      <Footer />
    </div>
  );
}
