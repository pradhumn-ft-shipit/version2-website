import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Landmark, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function ICPCustodians() {
  const faqs = [
    {
      q: "How deep does the integration go?",
      a: "As deep as you want. We can run alongside your existing onboarding tooling, embed within it, or extend it. Talk to us about your priorities."
    },
    {
      q: "Can we white-label this for advisors moving to our platform?",
      a: "Yes. The experience can be branded fully."
    },
    {
      q: "Where does data live? Who owns it?",
      a: "You and the advisor own the data. We process it under strict controls and never train models on it. Full security documentation is available on request from your compliance team."
    },
    {
      q: "How does pricing work for custodians?",
      a: "Enterprise structures tied to volume of advisors and practices onboarded. We tailor it to your platform's economics."
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
                Custodians
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                Be the on-ramp for every new RIA and advisory practice.
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                You want to attract more advisors and practices to your platform. Today, the onboarding experience is owned by everyone except you. FastTrackr puts it back in your hands.
              </p>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex flex-col justify-center items-center p-8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,212,160,0.1)_0%,rgba(10,61,46,0.05)_100%)]" />
              <div className="relative z-10 w-full max-w-sm space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brandDeep text-brandMint flex items-center justify-center font-bold text-xl"><Landmark size={24} /></div>
                    <div>
                      <div className="font-bold text-textPrimary">Your Platform</div>
                      <div className="text-sm text-textSecondary">Incoming Pipeline</div>
                    </div>
                  </div>
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-textSecondary">RIA Alpha</span>
                      <span className="text-brandMint font-bold">Onboarding</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-textSecondary">Team Beta</span>
                      <span className="text-brandMint font-bold">Onboarding</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-textSecondary">Practice Gamma</span>
                      <span className="text-gray-400 font-bold">Scheduled</span>
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
                  The platform is ready. The pricing is competitive.<br/>But how does the move feel?
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
                    You're competing for advisor practices. But the actual experience of moving to your platform? That's owned by RIAs, BDs, and transition consultants, and the quality varies wildly.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400" />
                  <p className="text-lg text-textSecondary leading-relaxed">
                    Some practices arrive smoothly. <strong className="text-textPrimary">Others arrive bruised, and they remember.</strong> Word travels fast in advisor circles. A painful move lives longer in conversation than any marketing campaign you'll run this year.
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
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">We help your advisors grow faster, acquire better, and onboard smoothly.</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Embed in custodial onboarding', desc: 'FastTrackr becomes the operational layer for any RIA or practice moving to your platform.' },
                { title: 'Branded experience', desc: 'Co-branded or white-labeled, the move feels like your platform, not a third party.' },
                { title: 'Help your advisors win their own deals', desc: 'Advisors and RIAs on your platform get the same transition tooling for their breakaways and acquisitions. They grow faster. So do you.' },
                { title: 'Visibility into your incoming book', desc: 'See practices in transit, status by household, projected go-live dates, all in one place.' }
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
                <HeartHandshake className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">More practices onboarded</div>
                <div className="text-white/80">easier moves drive word-of-mouth</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Faster asset growth</div>
                <div className="text-white/80">advisors hit productivity sooner</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Better experience</div>
                <div className="text-white/80">for existing advisors to grow</div>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Stronger differentiation</div>
                <div className="text-white/80">operational excellence as a moat</div>
              </div>
            </div>
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline="Let's make your platform the easiest place to land." />

      </main>
      
      <Footer hideCTA />
    </div>
  );
}
