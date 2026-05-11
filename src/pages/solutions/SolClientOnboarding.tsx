import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Clock, Database, Smile } from 'lucide-react';

export default function SolClientOnboarding() {
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
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                Onboard new clients in days, not weeks.
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                The same technology built to handle thousands of account openings during advisor transitions, now accelerating your day-to-day client onboarding.
              </p>
              <Link to="/contact?interest=client-onboarding">
                <button className="bg-brandDeep text-brandMint hover:bg-brandDeepHover px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-xl">
                  Book a Demo
                </button>
              </Link>
            </m.div>
            
            {/* Visual */}
            <m.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex flex-col justify-center items-center p-8"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brandMint/10 rounded-full blur-[80px]" />
              <div className="relative z-10 w-full max-w-sm">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-brandMint/20 flex items-center justify-center text-brandDeep font-bold">JD</div>
                    <div>
                      <div className="font-bold text-textPrimary">John Doe</div>
                      <div className="text-sm text-brandMint font-bold">New Client</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-brandMint w-5 h-5" />
                      <span>Data collected from CRM</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="text-brandMint w-5 h-5" />
                      <span>Forms pre-filled</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm opacity-50">
                      <div className="w-5 h-5 rounded-full border-2 border-brandMint border-t-transparent animate-spin" />
                      <span>Waiting for client signature</span>
                    </div>
                  </div>
                </div>
              </div>
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
              Bringing on a new client should be a celebration.<br/>Today, it's a slog.
            </m.h2>
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-textSecondary space-y-6 leading-relaxed"
            >
              <p>
                <strong>Days, sometimes weeks, between "yes" and "fully onboarded."</strong> First impressions cool off in the gap.
              </p>
              <p>
                <strong>Multiple intake forms, scattered across tools.</strong> Clients fill out the same information three times across CRM, planning software, and account opening.
              </p>
              <p>
                <strong>Manual data entry into your stack.</strong> Someone keys it from email into the CRM. Then re-keys it into the planning software. Then re-keys it for the custodian.
              </p>
              <p>
                <strong>Errors live forever.</strong> A typo on day one becomes a wrong tax document at year-end.
              </p>
            </m.div>
          </div>
        </section>

        {/* What FastTrackr Does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">How FastTrackr changes it</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Data gathered from any source', desc: 'Meetings, emails, prospect documents, extracted and structured automatically.' },
                { title: 'Clients confirm, they don\'t retype', desc: 'Send a clean, pre-filled summary for confirmation rather than another blank intake form.' },
                { title: 'One source feeds your stack', desc: 'CRM, planning software, account opening, populated in one m.' },
                { title: 'Account opening kicked off automatically', desc: 'Disclosures, agreements, custodial paperwork, initiated in the same flow.' }
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
                <div className="text-2xl font-bold font-display mb-2">Days, not weeks</div>
                <div className="text-white/80">from yes to fully onboarded</div>
              </div>
              <div className="text-center">
                <Database className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">Cleaner data</div>
                <div className="text-white/80">entered once, used everywhere</div>
              </div>
              <div className="text-center">
                <Smile className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">A first impression</div>
                <div className="text-white/80">that matches the pitch</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">More capacity</div>
                <div className="text-white/80">onboarding stops being the bottleneck</div>
              </div>
            </div>
          </div>
        </section>

        <PageCTA headline="Start onboarding clients the right way." link="/contact?interest=client-onboarding" />

      </main>
      
      <Footer />
    </div>
  );
}
