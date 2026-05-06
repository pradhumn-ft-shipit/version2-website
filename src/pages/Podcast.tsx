import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const platforms = [
  { name: 'YouTube', href: '#' },
  { name: 'Apple Podcasts', href: '#' },
  { name: 'Spotify', href: '#' },
];

export default function Podcast() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">Podcast</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
              Advisor Ally Podcast
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-2xl mx-auto mb-10">
              Tune in to our podcast on advisor transitions, technology, and the future of wealth management.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="bg-bgCanvas border border-gray-200 hover:border-brandMint hover:bg-white px-6 py-3 rounded-full font-semibold text-sm text-brandDeep transition-colors"
                >
                  Listen on {p.name}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Episodes coming soon */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brandDeep text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">New episodes, dropping soon.</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Conversations with advisors, transition consultants, and the operators reshaping wealth management. Subscribe on your platform of choice to catch episode one.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
