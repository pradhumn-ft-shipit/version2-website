import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mic, FileText, Database, Send } from 'lucide-react';

export default function SolMeetingAssistant() {
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
                AI Meeting Assistant
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                Your always-on meeting coordinator.
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                Pre-meeting prep, in-meeting notes, post-meeting follow-ups, handled. So you can focus on the conversation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact?interest=meeting-assistant">
                  <button className="bg-brandDeep text-brandMint hover:bg-brandDeepHover px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-xl">
                    Try for Free
                  </button>
                </Link>
                <Link to="/contact?interest=meeting-assistant">
                  <button className="bg-white border-2 border-gray-200 text-textPrimary hover:border-brandDeep px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex flex-col justify-center items-center p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,160,0.1)_0%,transparent_70%)]" />
              <div className="relative z-10 w-full max-w-sm space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brandDeep text-brandMint flex items-center justify-center mb-4">
                    <Mic size={28} />
                  </div>
                  <div className="flex gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className={`w-2 h-8 rounded-full bg-brandMint animate-pulse`} style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                  <div className="w-full bg-gray-50 rounded-lg p-4 border border-gray-100 text-sm text-textSecondary">
                    "Great to see you again. Based on our last conversation, let's review your recent equity compensation..."
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What it does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">What it does</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Generates prep', icon: <FileText />, desc: 'Pre-meeting prep from email and CRM data' },
                { title: 'Summarizes calls', icon: <Mic />, desc: 'In-person and virtual calls (Zoom, Teams, Meet)' },
                { title: 'Drafts follow-ups', icon: <Send />, desc: 'Drafts contextual follow-up emails and identifies action items' },
                { title: 'Updates tools', icon: <Database />, desc: 'Updates your CRM and other tools in one click' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 bg-bgCanvas rounded-2xl flex items-center justify-center text-brandMint mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-textPrimary mb-2">{feature.title}</h3>
                  <p className="text-textSecondary text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-8">"</span>
            <p className="text-xl md:text-2xl font-display font-semibold text-textPrimary leading-snug relative z-10 mb-8">
              Using FastTrackr AI has been a key enhancement to my client meeting process. It's remarkably easy to use, the interface is intuitive, and the learning curve is minimal. Most importantly, the quality of the meeting notes is far better than what I would capture manually.
            </p>
            <div className="font-bold text-textPrimary text-lg">Gregg D. Jensen</div>
            <div className="text-textSecondary">CCO and Head of Financial Planning, Pathway Partners</div>
          </div>
        </section>

        <PageCTA headline="Try the Meeting Assistant for free today." link="/contact?interest=meeting-assistant" />

      </main>
      
      <Footer />
    </div>
  );
}
