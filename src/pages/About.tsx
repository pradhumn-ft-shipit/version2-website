import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCTA from '../components/PageCTA';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-textPrimary leading-tight mb-6">
              We're reimagining wealth management.<br/><span className="text-brandMint">One complex workflow at a time.</span>
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-3xl mx-auto">
              FastTrackr is building the operating layer for the workflows that wealth management has lived with for decades, starting with advisor transitions, the hardest of them all.
            </p>
          </motion.div>
        </section>

        {/* Why we exist */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold text-textPrimary mb-8 text-center">Why we exist</h2>
            <div className="text-lg text-textSecondary space-y-6 leading-relaxed">
              <p className="font-semibold text-2xl text-brandDeep">Wealth management is in transition.</p>
              <p>
                Advisors are moving firms at record rates. RIAs are growing through acquisition. The advisor population is aging, and a generation of practices will change hands over the next decade. The plumbing underneath all of this (the repapering, the data migration, the operational handoffs) wasn't built for the volume the industry is now running.
              </p>
              <p>
                We're building what comes next. AI that actually understands the work. Workflows shaped by the people who do it. A system that gets better with every transition it runs.
              </p>
            </div>
          </div>
        </section>

        {/* How we got here */}
        <section className="py-24 bg-bgCanvas">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold text-textPrimary mb-8 text-center">How we got here</h2>
            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-lg text-textSecondary space-y-6 leading-relaxed relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-brandMint/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <p>
                  We started with conversations. Over 150 of them, with advisors, ops leaders, transition consultants, and operators at firms across the industry. We listened to where the work breaks. We built around what we heard.
                </p>
                <p>
                  Today, FastTrackr is in production with a top transition consultant, used by paying advisors and firms, and in active conversations with broker-dealers, custodians, and RIAs serving billions in client assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">Leadership</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {[
                { name: 'Vineet Mohan', title: 'Co-founder & CEO', desc: 'Ex-HSBC top 1% leadership; 15 years in financial services globally (7 in the US); successful startup investor. IIM Bangalore, NIT Calicut.' },
                { name: 'Kartik Kumar', title: 'Head of Engineering', desc: 'Senior engineering roles at unicorns (OYO, Games24x7); led AI build for high-scale systems. BITS Pilani.' },
                { name: 'Pradhumn V', title: 'GTM & Product', desc: 'Led 0-1 GTM for B2B SaaS and AI startups previously. Ex-founder, IIM alumnus.' }
              ].map((member, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <div className="w-20 h-20 rounded-full bg-brandMint/20 flex items-center justify-center text-brandDeep font-bold text-xl mx-auto mb-6">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary">{member.name}</h3>
                  <div className="text-brandMint font-bold text-sm mb-4">{member.title}</div>
                  <p className="text-textSecondary text-sm">{member.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-textPrimary mb-8">Advisory Board</h3>
                <div className="space-y-6">
                  {[
                    { name: 'James Cantwell', title: 'Founder, WealthTech Select', desc: '25 years of operational and tech expertise; influential industry voice.' },
                    { name: 'Sukesh Pai', title: 'Founder, Trillium Square', desc: 'RIA owner with strong technology and investments background.' },
                    { name: 'Andy Burgess', title: 'Founder, Foresight Consulting', desc: 'Industry veteran with leadership roles at top RIAs and custodians (Mercer, NewEdge, Fidelity, Schwab).' }
                  ].map((member, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-bgCanvas flex items-center justify-center text-textSecondary font-bold">{member.name.charAt(0)}</div>
                      <div>
                        <div className="font-bold text-textPrimary">{member.name}</div>
                        <div className="text-sm font-semibold text-brandDeep">{member.title}</div>
                        <div className="text-sm text-textSecondary mt-1">{member.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-textPrimary mb-8">Investors</h3>
                <div className="bg-bgCanvas p-8 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-lg text-textPrimary mb-2">gAI Ventures</h4>
                  <div className="text-brandMint font-bold text-sm mb-4">Venture studio and investor</div>
                  <ul className="space-y-3 text-sm text-textSecondary">
                    <li><strong className="text-textPrimary">Amit Goel (CEO):</strong> Serial founder, built and sold a fintech to a US unicorn (Prove)</li>
                    <li><strong className="text-textPrimary">Kushal Prakash (CTO):</strong> Ex-fintech founder, AI researcher (TU-Delft + BITS Pilani), Forbes 30U30</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageCTA headline="Ready to see what FastTrackr can do for your firm?" />

      </main>
      
      <Footer />
    </div>
  );
}
