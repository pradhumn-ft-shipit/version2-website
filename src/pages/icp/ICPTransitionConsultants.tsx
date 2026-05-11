import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { m } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Zap, Clock } from 'lucide-react';

export default function ICPTransitionConsultants() {
  const faqs = [
    {
      q: "Can we white-label the experience for our advisors?",
      a: "We support co-branded and white-label experiences depending on the engagement. Talk to us about what fits your firm."
    },
    {
      q: "Do you work across multiple custodians?",
      a: "Yes. We work with the major custodians and can support your transition end to end. If you'd like to walk through your specific custodian setup, book a quick 30-minute call and we'll cover it."
    },
    {
      q: "What about our existing tooling, do we replace it?",
      a: "No. FastTrackr sits alongside what you have today and pulls it together. We integrate with common CRMs, e-signature platforms, and custodial portals."
    },
    {
      q: "How do you price for consultants?",
      a: "Value-based, usually tied to the deals we help you move and the time we save you. We'll talk through the structure on a call."
    }
  ];

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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandMint/10 text-brandDeep font-medium text-sm mb-6 border border-brandMint/20">
                Transition Consultants
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                More deals per consultant. <br/><span className="text-gray-400">Without more admin slog.</span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                Take on more transitions with the team you already have. FastTrackr handles the data collection, form-filling, and project management, so your consultants spend their time on the parts only humans can do.
              </p>
            </m.div>
            
            {/* Visual */}
            <m.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex items-center justify-center p-8"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandMint/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandDeep/5 rounded-full blur-[80px]" />
              <div className="relative z-10 w-full space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brandMint/10 flex items-center justify-center text-brandDeep font-bold">D{i}</div>
                      <div>
                        <div className="h-3 w-24 bg-gray-200 rounded mb-2" />
                        <div className="h-2 w-16 bg-gray-100 rounded" />
                      </div>
                    </div>
                    <div className="text-xs font-bold text-brandMint px-2 py-1 bg-brandMint/10 rounded">ON TRACK</div>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </section>

        {/* The Pain */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <m.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="font-bold text-xl">!</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-textPrimary leading-tight mb-6">
                  Every deal looks different on paper.<br/>In practice, every deal grinds the same way.
                </h2>
              </m.div>
              
              <m.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid gap-6"
              >
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brandDeep" />
                  <p className="text-lg text-textSecondary leading-relaxed">
                    The same data collection from the same client households. The same custodian-form hunt. The same Excel sheet to track which form is where. The same scramble when one comes back NIGO.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400" />
                  <p className="text-lg text-textSecondary leading-relaxed">
                    Multiply that by every advisor on your roster, and the ceiling on your business stops being demand. It's capacity. <strong className="text-textPrimary block mt-2">You hire more ops people. The work scales. Your margin doesn't.</strong>
                  </p>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* What FastTrackr Does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">We become the operating layer underneath every deal.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Data collection runs in the background', desc: 'AI pulls client and account data from documents, transcripts, and conversations. Your team reviews, they don\'t transcribe.' },
                { title: 'Forms are pre-filled, mapped, and validated', desc: 'Across Fidelity, Schwab, and the firms you work with most. NIGOs drop. Rework drops with them.' },
                { title: 'Every household visible in one place', desc: 'Replaces the Excel war room. Your consultants and the advisors they\'re moving all see the same status, in real time.' },
                { title: 'It learns your playbook', desc: 'The way your firm handles transitions gets encoded. New consultants ramp faster. Senior consultants take on more.' }
              ].map((feature, i) => (
                <m.div 
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
                </m.div>
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
                <div className="text-4xl font-bold font-display mb-2">75%</div>
                <div className="text-white/80">less admin per deal</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-4xl font-bold font-display mb-2">Higher CSAT</div>
                <div className="text-white/80">from moving advisors</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-4xl font-bold font-display mb-2">Faster</div>
                <div className="text-white/80">custodial empanelment</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-4xl font-bold font-display mb-2">More deals</div>
                <div className="text-white/80">per consultant</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-8">"</span>
            <p className="text-2xl md:text-3xl font-display font-semibold text-textPrimary leading-snug relative z-10 mb-8">
              This is the smoothest transition anyone in our circle has seen or heard about. It aligned with our workflow, and it just worked. We had planned for a month, we finished in two weeks. Amazing tool, very intuitive to use.
            </p>
            <div className="font-bold text-textPrimary text-lg">Nico DeMaio</div>
            <div className="text-textSecondary">President and Co-founder, AdvizorStack</div>
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline="Let's see how many more deals your team could take on." link="/contact?interest=advisor-transitions&company=transition-consultant" />

      </main>
      
      <Footer hideCTA />
    </div>
  );
}
