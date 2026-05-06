import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Clock, FileWarning, Layers } from 'lucide-react';

export default function ICPAcquisitiveRIAs() {
  const faqs = [
    {
      q: "Can you handle multi-deal pipelines?",
      a: "Yes. Each acquisition is its own workspace inside FastTrackr. Your team sees them all in one view."
    },
    {
      q: "How does this fit with our internal integration playbook?",
      a: "We don't replace the playbook, we run on top of it. Your sequencing, your communication templates, your client experience standards stay yours. We handle the operational layer underneath."
    },
    {
      q: "What's the ROI math?",
      a: "Usually two-fold: time saved by your ops team plus AUM protected during the transition window. We'll model it for your specific deal flow on a call."
    },
    {
      q: "Do you support sub-acquisition complexity, multi-custodian moves, partial book lifts?",
      a: "Yes. The system was designed for the variations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandMint/10 text-brandDeep font-medium text-sm mb-6 border border-brandMint/20">
                Acquisitive RIAs
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                Every acquisition is a repapering project. <br/><span className="text-gray-400">Make it your edge.</span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                M&A is your growth strategy. Stop letting the integration timeline drag your AUM and your returns down with it.
              </p>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,160,0.1)_0%,transparent_70%)]" />
              <div className="relative z-10 w-full space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-brandMint/30 shadow-lg relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brandMint" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-textPrimary">Project Alpha (Deal 1)</span>
                    <span className="text-xs bg-brandMint/20 text-brandMint font-bold px-2 py-1 rounded">85% INTEGRATED</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-brandMint" /></div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden opacity-80">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-textPrimary">Project Beta (Deal 2)</span>
                    <span className="text-xs bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded">40% INTEGRATED</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[40%] h-full bg-blue-400" /></div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden opacity-60">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400" />
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-textPrimary">Project Gamma (Deal 3)</span>
                    <span className="text-xs bg-gray-100 text-gray-600 font-bold px-2 py-1 rounded">KICKOFF</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[5%] h-full bg-gray-400" /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Pain */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="font-bold text-xl">!</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-textPrimary leading-tight mb-6">
                  You closed the deal.<br/>The hard part was supposed to be over.
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid gap-6"
              >
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brandDeep" />
                  <p className="text-lg text-textSecondary leading-relaxed">
                    Then comes the integration. Months of repapering. Asset attrition during the silence between "we acquired them" and "they're fully on our platform." Your ops team in firefighting mode. Your CFO watching AUM bleed out and asking why the projected synergies aren't showing up yet.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400" />
                  <p className="text-lg text-textSecondary leading-relaxed">
                    By the time the last account is moved, the next acquisition is already in motion. <strong className="text-textPrimary">The team that's burned out from this one is the team that has to do the next one.</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What FastTrackr Does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">We turn integration into a repeatable process.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Each acquisition runs through the same engine', desc: 'Data collection, mapping, form-filling, project management, standardized across deals. The first one is the slowest. Every one after is faster.' },
                { title: 'AUM is protected during the transition window', desc: 'Faster moves mean less time for clients to wonder, drift, or leave.' },
                { title: 'Your ops team scales without growing', desc: 'The system absorbs the volume. They focus on the judgment calls.' },
                { title: 'Multi-deal pipelines stay visible', desc: 'Three acquisitions running at once? You see the status of every household, every account, in one place.' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 className="w-8 h-8 text-brandMint mb-4" />
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{feature.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-24 bg-brandDeep text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Integration cut</div>
                <div className="text-white/80">from months to weeks</div>
              </div>
              <div className="text-center">
                <FileWarning className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Less AUM lost</div>
                <div className="text-white/80">protect what you paid for</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Faster revenue</div>
                <div className="text-white/80">synergies show up sooner</div>
              </div>
              <div className="text-center">
                <Layers className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">More deals per year</div>
                <div className="text-white/80">ops stops being the bottleneck</div>
              </div>
            </div>
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline="Make integration your competitive advantage." />

      </main>
      
      <Footer hideCTA />
    </div>
  );
}
