import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { glossaryTerms, glossaryCategories, GLOSSARY_SET_NAME } from '../lib/glossary';

// W3 glossary hub — index. Lists every term grouped by category with in-page
// anchor navigation; each card links to its /glossary/<slug> page. The
// DefinedTermSet JSON-LD is emitted by the route module's meta() (app/routes/
// glossary/index.tsx), not here, so it bakes into the static <head>.
//
// Whole-page NEW asset (nothing to strike through). Wrapped in the review
// banner below only to flag that the term set + definitions are W3 drafts
// pending editorial sign-off — the banner comes off at the WZ teardown.
function categoryId(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function Glossary() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brandDeep mb-4">Glossary</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-6">
            {GLOSSARY_SET_NAME}
          </h1>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Plain-language definitions of the terms that come up when advisors change firms and
            repaper their books — from NIGO and ACATS to the Broker Protocol and Reg BI.
          </p>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12">
            {/* Category jump nav */}
            <nav aria-label="Glossary categories" className="flex flex-wrap justify-center gap-3 mb-4">
              {glossaryCategories.map((category) => (
                <a
                  key={category}
                  href={`#${categoryId(category)}`}
                  className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-textSecondary hover:border-brandMint hover:text-brandDeep transition-colors"
                >
                  {category}
                </a>
              ))}
            </nav>
          </section>

          {/* Terms grouped by category */}
          <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-24 space-y-16">
            {glossaryCategories.map((category) => (
              <div key={category} id={categoryId(category)} className="scroll-mt-32">
                <h2 className="text-2xl font-display font-bold text-textPrimary mb-8 pb-3 border-b border-gray-100">
                  {category}
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {glossaryTerms
                    .filter((t) => t.category === category)
                    .map((t) => (
                      <Link
                        key={t.slug}
                        to={`/glossary/${t.slug}`}
                        className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-brandMint hover:shadow-md"
                      >
                        <h3 className="text-xl font-bold text-textPrimary">
                          {t.term}
                          {t.expansion ? (
                            <span className="ml-2 text-base font-normal text-textSecondary">
                              ({t.expansion})
                            </span>
                          ) : null}
                        </h3>
                        <p className="mt-3 flex-grow text-textSecondary leading-relaxed">{t.short}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brandDeep">
                          Read the definition
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
