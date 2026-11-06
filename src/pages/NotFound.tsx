import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { m } from '../lib/motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// PR2-10: the not-found page. Prerendered once as dist/404.html (see
// react-router.config.ts + scripts/stage-dist.mjs), which Render serves with a
// 404 status for any path that has no file and no rule. The client router's `*`
// route renders the same component, so in-app navigation matches.
const links = [
  { label: 'Advisor transitions', to: '/solutions/advisor-transitions' },
  { label: 'Custodians', to: '/custodians' },
  { label: 'Blog', to: '/resources/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function NotFound() {
  useEffect(() => {
    // The static <head> already carries noindex (route meta). This covers the
    // client-side case where the app navigates here from another page.
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
            <h1 className="text-5xl md:text-7xl font-display font-bold text-textPrimary leading-tight mb-6">
              Page not found
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-2xl mx-auto mb-10">
              There's nothing at this address. It may have moved. Try one of these:
            </p>

            <ul className="bg-bgCanvas border border-gray-100 rounded-3xl p-8 grid sm:grid-cols-2 gap-3 text-left">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-brandDeep font-medium hover:text-brandMint transition-colors">
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        </section>
      </main>

      <Footer hideCTA />
    </div>
  );
}
