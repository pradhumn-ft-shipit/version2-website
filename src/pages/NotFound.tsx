import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  useEffect(() => {
    const noindex = document.createElement('meta');
    noindex.name = 'robots';
    noindex.content = 'noindex';
    document.head.appendChild(noindex);
    return () => {
      document.head.removeChild(noindex);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">404</div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-textPrimary leading-tight mb-6">
              Hmm, this page doesn't exist.
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-2xl mx-auto mb-10">
              It looks like the link you followed may be broken, or the page may have been moved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/"><Button size="lg">Go back home</Button></Link>
              <Link to="/contact" className="text-textSecondary hover:text-textPrimary font-medium transition-colors">
                Contact us →
              </Link>
            </div>

            <div className="bg-bgCanvas border border-gray-100 rounded-3xl p-8 text-left">
              <div className="text-sm font-semibold text-textTertiary uppercase tracking-wider mb-4">Try one of these</div>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li>
                  <Link to="/solutions/advisor-transitions" className="text-brandDeep font-medium hover:text-brandMint transition-colors">
                    → Advisor Transitions
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/client-onboarding" className="text-brandDeep font-medium hover:text-brandMint transition-colors">
                    → Client Onboarding
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/meeting-assistant" className="text-brandDeep font-medium hover:text-brandMint transition-colors">
                    → Meeting Assistant
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/document-intelligence" className="text-brandDeep font-medium hover:text-brandMint transition-colors">
                    → Document Intelligence
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-brandDeep font-medium hover:text-brandMint transition-colors">
                    → Pricing
                  </Link>
                </li>
                <li>
                  <a href="https://console.fasttrackr.ai/login" target="_blank" rel="noreferrer" className="text-brandDeep font-medium hover:text-brandMint transition-colors">
                    → Try for free
                  </a>
                </li>
              </ul>
            </div>
          </m.div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
}
