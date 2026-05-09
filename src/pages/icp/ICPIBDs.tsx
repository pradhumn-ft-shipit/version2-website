import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Target, Rocket } from 'lucide-react';

export default function ICPIBDs() {
  const faqs = [
    {
      q: "Can we white-label this for advisors joining our firm?",
      a: "Yes. The experience can be branded as part of your firm's onboarding."
    },
    {
      q: "How does this integrate with our home office systems?",
      a: "We integrate with common CRMs, e-signature platforms, and the custodial relationships you already have. Setup is a matter of configuration, not platform replacement."
    },
    {
      q: "What about advisors with complex book structures?",
      a: "Built for it. Multi-custodian, mixed registered/non-registered, equity comp, etc. The system was designed by people who've moved exactly these books."
    },
    {
      q: "How does pricing work for BDs?",
      a: "Enterprise pricing tied to advisor volume and transition outcomes. Talk to us about your roadmap and we'll work it through."
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
                Independent Broker-Dealers
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                Win the advisors. <br/>Win their books. <br/><span className="text-gray-400">Win them faster.</span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                Your transition experience is part of your recruiting pitch. Make it the part that closes the deal.
              </p>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex items-center justify-center p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brandMint/10 to-brandDeep/5" />
              <div className="relative z-10 w-full max-w-sm">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-sm font-bold text-textSecondary mb-4 uppercase tracking-wider">Recruiting Pitch</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      <span className="line-through">90-day transition timeline</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                      <span className="line-through">Manual form filling</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-brandMint/10 rounded-xl border border-brandMint/30">
                      <div className="w-6 h-6 rounded-full bg-brandMint flex items-center justify-center text-white font-bold text-xs">✓</div>
                      <span className="font-bold text-brandDeep">2-week AI-powered move</span>
                    </div>
                  </div>
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
                  Then they ask the question that decides it:<br/>what does the move look like?
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
                    The top advisors you're recruiting are talking to three other firms. Comp packages are close. Platform stories are close. Tech stacks are close.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400" />
                  <p className="text-lg text-textSecondary leading-relaxed">
                    Today, the transition is where most BDs lose. Repapering takes months. Forms come back NIGO. Advisors get pulled into operational work that has nothing to do with what they signed up for. Their teams burn out before they're even fully on your platform. Some take less money to go somewhere the move feels easier.
                  </p>
                  <strong className="text-textPrimary block mt-4 text-xl">The transition experience isn't a back-office concern. It's a recruiting weapon.</strong>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What FastTrackr Does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">We make your transition the easiest in the industry.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'A purpose-built onboarding workflow', desc: 'Pre-filled forms. Validated submissions. End-to-end visibility for incoming advisors.' },
                { title: 'Faster path to advisor productivity', desc: 'Less time on operational work means more time generating revenue at your firm.' },
                { title: 'Differentiation in the pitch', desc: '"Here\'s how the move actually looks" becomes a slide you want to show, not one you skip.' },
                { title: 'Lower load on your transition team', desc: 'Your in-house transition staff handles judgment work, not data entry.' }
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
                <Target className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Better recruiting outcomes</div>
                <div className="text-white/80">close more against rivals</div>
              </div>
              <div className="text-center">
                <Rocket className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Faster ramp</div>
                <div className="text-white/80">advisors generate revenue sooner</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Less recruiter time</div>
                <div className="text-white/80">on logistics</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Higher satisfaction</div>
                <div className="text-white/80">the experience starts well</div>
              </div>
            </div>
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline="Make your transition experience the reason advisors say yes." link="/contact?interest=advisor-transitions&company=broker-dealer" />

      </main>
      
      <Footer hideCTA />
    </div>
  );
}
