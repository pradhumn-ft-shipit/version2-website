import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Calendar, ShieldCheck } from 'lucide-react';

export default function ICPBreakawayAdvisors() {
  const faqs = [
    {
      q: "Do we need our new firm to bring you in, or can we use FastTrackr directly?",
      a: "Both. Some firms have partnered with us already. If yours hasn't, you can still bring us in directly for your transition, we work with the advisor, the new firm, and the custodian."
    },
    {
      q: "Which custodians do you support?",
      a: "We work with the major custodians and can support your transition end to end. If your destination custodian is non-standard, book a 30-minute call and we'll walk through your specific case."
    },
    {
      q: "What if my Broker Protocol or non-Protocol situation is complex?",
      a: "We support both Protocol and non-Protocol moves. Firms running either type with FastTrackr have seen exponential time savings and material retention gains, our system was built to handle the variations on either side."
    },
    {
      q: "How long until we go live?",
      a: "For most advisors, days. Setup runs in parallel with your transition prep, so by the time you're ready to start contacting clients, the system is ready too."
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
                Breakaway Advisors
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                Bring your book with you. <br/><span className="text-gray-400">Without breaking your team.</span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                You decided to move to build something better. Don't let the repapering be the thing that breaks you on the way there.
              </p>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass p-8 flex flex-col justify-center items-center"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brandMint/10 rounded-full blur-[80px]" />
              <div className="relative z-10 w-full max-w-sm space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                    <span className="font-bold text-textPrimary">Smith Household</span>
                    <span className="text-brandMint font-semibold text-sm">Ready to Sign</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-gray-100 rounded" />
                    <div className="h-2 w-3/4 bg-gray-100 rounded" />
                    <div className="h-2 w-1/2 bg-gray-100 rounded" />
                  </div>
                  <div className="mt-6 flex justify-end">
                    <div className="px-4 py-2 bg-brandDeep text-brandMint rounded-lg text-xs font-bold">SEND DOCS</div>
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
                  The transition isn't the part anyone tells you about.<br/>It's the part that almost makes you reconsider.
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
                    You've built the relationships. You've made the call. You're going independent, or joining a firm that's actually built for you. Then you discover what repapering actually looks like.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400" />
                  <p className="text-lg text-textSecondary leading-relaxed">
                    <strong className="text-textPrimary">Ninety days. Hundreds of forms.</strong> Account applications, transfer-of-asset forms, feature forms, for every household, sometimes for every account. Your assistant is buried. Your weekends are gone. Some clients drift in the silence between "we're moving" and "we're done." A few don't come with you.
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
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">We do the parts that grind. You do the parts that matter.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'The data collection happens once', desc: 'From your existing systems, your documents, your client conversations. Not from each client filling out a fresh intake.' },
                { title: 'Forms get pre-filled across your new custodian', desc: 'Fidelity, Schwab, and others. Validated, mapped, ready for client signature.' },
                { title: 'Clients see a calm, organized move', desc: 'Not seven separate emails asking for the same information. The experience matches the message you\'re selling them.' },
                { title: 'See every household in one place', desc: 'No more chasing your assistant for status. No more mid-night Excel updates.' }
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
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Move in weeks, not months</div>
                <div className="text-white/80">get to revenue faster</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Keep your team intact</div>
                <div className="text-white/80">no transition burnout</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Retain more clients</div>
                <div className="text-white/80">smoother experience</div>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Look professional</div>
                <div className="text-white/80">clients remember the move</div>
              </div>
            </div>
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline="Make this the smoothest move of your career." />

      </main>
      
      <Footer hideCTA />
    </div>
  );
}
