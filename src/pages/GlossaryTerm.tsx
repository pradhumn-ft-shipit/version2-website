import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { GlossaryTerm as GlossaryTermType } from '../lib/glossary';
import { relatedTerms } from '../lib/glossary';

// W3 glossary term page. Answer-first: the headword, then the one-sentence
// definition in a callout, then context, then related terms + the pillar link.
// The DefinedTerm JSON-LD is emitted by the route module's meta()
// (app/routes/glossary/term.tsx). Whole-page NEW asset — no strikethrough.
export default function GlossaryTerm({ term }: { term: GlossaryTermType }) {
  const related = relatedTerms(term);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        <article className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto pb-24">
          <Link
            to="/glossary"
            className="inline-flex items-center gap-1 text-sm font-medium text-textSecondary hover:text-brandDeep transition-colors"
          >
            <ArrowLeft size={14} />
            All terms
          </Link>

          <header className="mt-6 mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brandDeep mb-3">
              {term.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight">
              {term.term}
            </h1>
            {term.expansion ? (
              <p className="mt-2 text-xl text-textSecondary">{term.expansion}</p>
            ) : null}
          </header>

          {/* Answer-first definition callout */}
          <div className="rounded-3xl border border-brandMint/30 bg-bgTint p-6 md:p-8">
            <p className="text-lg leading-relaxed text-textPrimary">{term.short}</p>
          </div>

          {/* Context body */}
          <div className="mt-8 space-y-5">
            {term.body.map((para, i) => (
              <p key={i} className="text-textSecondary leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {term.aka && term.aka.length > 0 ? (
            <p className="mt-6 text-sm text-textSecondary">
              <span className="font-semibold text-textPrimary">Also called:</span>{' '}
              {term.aka.join(', ')}.
            </p>
          ) : null}

          {/* Related terms */}
          {related.length > 0 ? (
            <div className="mt-12 border-t border-gray-100 pt-8">
              <h2 className="text-lg font-bold text-textPrimary mb-4">Related terms</h2>
              <div className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/glossary/${r.slug}`}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-textSecondary hover:border-brandMint hover:text-brandDeep transition-colors"
                  >
                    {r.term}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          {/* Pillar / solution link */}
          {term.pillar ? (
            <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
              <p className="text-textSecondary">
                See how FastTrackr handles this in practice.
              </p>
              <Link
                to={term.pillar.href}
                className="mt-3 inline-flex items-center gap-1 font-semibold text-brandDeep hover:gap-2 transition-all"
              >
                {term.pillar.label}
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : null}
        </article>
      </main>

      <Footer />
    </div>
  );
}
