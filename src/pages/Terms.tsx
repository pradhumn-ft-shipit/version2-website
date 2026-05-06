import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">Legal</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-8">
              Terms of Service
            </h1>
            <div className="bg-bgCanvas border border-gray-100 rounded-3xl p-10">
              <p className="text-lg text-textSecondary leading-relaxed mb-6">
                We're finalizing the published version of our Terms of Service. For the active terms governing your engagement with FastTrackr, please refer to your Master Services Agreement or pilot contract.
              </p>
              <p className="text-lg text-textSecondary leading-relaxed">
                Questions? Reach us at <a href="mailto:hello@fasttrackr.ai" className="text-brandDeep font-semibold hover:text-brandMint transition-colors">hello@fasttrackr.ai</a>.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
}
