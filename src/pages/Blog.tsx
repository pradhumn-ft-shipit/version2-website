import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">Blog</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
              Stay in the loop.
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-2xl mx-auto">
              Occasional updates on advisor transitions, the industry, and what we're shipping.
            </p>
          </motion.div>
        </section>

        {/* Newsletter signup */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bgCanvas border border-gray-100 rounded-3xl p-10"
          >
            {submitted ? (
              <div className="text-center py-6">
                <div className="font-display font-bold text-2xl text-brandDeep mb-2">You're in.</div>
                <p className="text-textSecondary">We'll only email you when we have something worth saying.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourfirm.com"
                  className="flex-grow px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                />
                <button
                  type="submit"
                  className="bg-brandDeep text-white hover:bg-brandMint hover:text-brandDeep px-8 py-4 rounded-xl font-bold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </section>

        {/* Coming soon grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-textPrimary mb-3">Coming soon</h2>
            <p className="text-textSecondary">Field notes from the people moving billions in client assets.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Inside an advisor transition',
              'What NIGOs really cost',
              'The economics of M&A integration',
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
              >
                <div className="aspect-video bg-bgCanvas rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-textTertiary text-sm font-medium uppercase tracking-wider">In progress</span>
                </div>
                <h3 className="font-display font-bold text-xl text-textPrimary mb-2">{title}</h3>
                <p className="text-textSecondary text-sm">Coming soon.</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
