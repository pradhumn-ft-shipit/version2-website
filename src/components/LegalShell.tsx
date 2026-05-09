import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

type LegalShellProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function LegalShell({ eyebrow = 'Legal', title, subtitle, lastUpdated, children }: LegalShellProps) {
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
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">{eyebrow}</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-textSecondary mb-3">{subtitle}</p>
            )}
            {lastUpdated && (
              <p className="text-sm text-textTertiary mb-10">Last updated: {lastUpdated}</p>
            )}

            <div className="legal-prose text-base leading-relaxed text-textSecondary space-y-6">
              {children}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
}
