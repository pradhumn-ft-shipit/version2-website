import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import { m } from '../../lib/motion';
import { ArrowRight, Landmark } from 'lucide-react';

// Hub for the durable custodian transition pages (W6 · T2-3). Advisors moving a
// book onto or between custodians land here and route to the custodian-specific
// page. Distinct from /who-we-serve/custodians, which sells to custodians.
const custodians = [
  {
    name: 'Charles Schwab',
    slug: 'schwab',
    blurb:
      'New-account applications, transfer-of-account forms, and firm paperwork for every household, prepared and validated so the ACATS move to Schwab runs clean.',
  },
  {
    name: 'Fidelity',
    slug: 'fidelity',
    blurb:
      'A transfer of assets to Fidelity proceeds only once the paperwork is in good order. FastTrackr prepares it so it lands right the first time.',
  },
  {
    name: 'SEI',
    slug: 'sei',
    blurb:
      'Full repapering onto SEI — new-account paperwork and transfer forms for every household, prepared and validated so accounts open in good order the first time.',
  },
  {
    name: 'Goldman Sachs',
    slug: 'goldman-sachs',
    blurb:
      'FastTrackr structures every household and account and hands the data back in Goldman’s own required format, ready to upload into Goldman’s onboarding workflow.',
  },
  {
    name: 'BNY Pershing',
    slug: 'pershing',
    badge: 'In active development',
    blurb:
      'Open accounts, capture eSignatures, and move assets through NetX360+ — with the not-in-good-order rework Pershing warns about caught before submission.',
  },
];

export default function CustodiansHub() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandMint/10 text-brandDeep font-medium text-sm mb-6 border border-brandMint/20">
                Custodian transitions
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                Repaper your book onto any custodian, in days
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-10 max-w-3xl mx-auto">
                Moving a book of business to a new custodian is a paperwork problem: a
                transfer-of-account and fresh forms for every household, over the ACATS rail, with a
                not-in-good-order rejection resetting the clock each time a field is off. FastTrackr
                is the repapering platform that prepares the data and the forms so the move runs in
                days, not months. Pick your custodian to see how.
              </p>
            </m.div>
          </div>
        </section>

        {/* Custodian cards */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-8">
          <div className="grid md:grid-cols-3 gap-8">
            {custodians.map((c, i) => (
              <m.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-glass flex flex-col"
              >
                <div className="w-14 h-14 bg-bgCanvas rounded-2xl flex items-center justify-center text-brandMint mb-6">
                  <Landmark className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-textPrimary mb-3">{c.name}</h2>
                {'badge' in c && c.badge ? (
                  <span className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded-full bg-blue-50 text-blue-700 font-medium text-xs border border-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {c.badge}
                  </span>
                ) : null}
                <p className="text-textSecondary leading-relaxed mb-6 flex-grow">{c.blurb}</p>
                <Link
                  to={`/custodians/${c.slug}`}
                  className="inline-flex items-center gap-2 text-brandDeep font-bold hover:text-brandMint transition-colors"
                >
                  Moving to {c.name} <ArrowRight className="w-4 h-4" />
                </Link>
              </m.div>
            ))}
          </div>
        </section>

        {/* Link to the platform */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center py-16">
          <p className="text-lg text-textSecondary leading-relaxed mb-6">
            Not sure which custodian yet, or moving between two of them? The transition platform
            handles the whole repapering workflow regardless of where the book lands.
          </p>
          <Link
            to="/solutions/advisor-transitions"
            className="inline-flex items-center gap-2 bg-brandDeep text-brandMint hover:bg-brandDeepHover px-6 py-3 rounded-full font-bold transition-colors"
          >
            See the full transition platform <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        <PageCTA
          headline="Tell us which custodian you're moving to. We'll show you the repapering plan."
          link="/contact?interest=advisor-transitions"
        />
      </main>

      <Footer />
    </div>
  );
}
