import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { m } from '../../lib/motion';
import {
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  FileWarning,
  FileText,
  Database,
  LayoutList,
  ShieldCheck,
} from 'lucide-react';

/*
 * Shared presentational shell for the durable custodian landing pages
 * (/custodians/schwab, /custodians/fidelity, /custodians/sei, /custodians/pershing).
 * W6 · T2-3; section order reworked in PR6 (review decisions 12-13): hero →
 * simple move flow (+ same-custodian case) → NIGO → how FastTrackr helps →
 * outcomes → technical detail → FAQ → CTA.
 *
 * These pages target advisors repapering a book of business ONTO/BETWEEN a
 * custodian — distinct from /who-we-serve/custodians, which sells to custodians
 * as a customer. Content is data-driven from each custodian page component so
 * the structure, SEO shape, and internal-linking stay consistent.
 *
 * NOTE: this site has no dark-mode variant — the theme is delivered through the
 * semantic Tailwind tokens (bgPrimary/bgCanvas/textPrimary/…, brandDeep/brandMint)
 * defined in tailwind.config.js, exactly as SolAdvisorTransitions.tsx and every
 * other page do. There is no `dark:` layer to mirror.
 */

export type ProcessStep = { n: string; title: string; desc: ReactNode };
export type InfoItem = { title: string; desc: ReactNode };
export type Faq = { q: string; a: string };

export type CustodianLayoutProps = {
  /** Full custodian name, e.g. "Charles Schwab". */
  custodian: string;
  /** Short name used inline, e.g. "Schwab". */
  shortName: string;
  /** Contact-link qualifier, e.g. "schwab". */
  slug: string;
  h1: ReactNode;
  subhead: ReactNode;
  intro: ReactNode;
  /** Optional status label rendered directly under the H1 — used to mark a
   *  custodian that isn't live on FastTrackr yet (Pershing: "Coming soon"). */
  statusBadge?: ReactNode;
  /** Optional override for the intro above the simple move flow (Pershing:
   *  future tense, since it isn't live yet). */
  flowIntro?: ReactNode;
  /** Same-custodian case (grounding §18 / review decision 13): the advisor
   *  changes firm but keeps this custodian. `form` is the custodian form
   *  (LPOA for Schwab, Advisor Change form for Fidelity and SEI). Omit for a
   *  custodian that isn't live (Pershing). */
  sameCustodianForm?: string;
  /** What changes inside the custodian on a same-custodian move, e.g. 'a master account number change'. */
  sameCustodianChange?: string;
  /** Optional overrides for the "How FastTrackr …" section, for a custodian
   *  that isn't live yet (Pershing), so its copy reads as future tense. */
  helpsHeading?: ReactNode;
  helpsIntro?: ReactNode;
  handlesHeading?: ReactNode;
  handlesItems?: InfoItem[];
  handoffHeading?: ReactNode;
  handoffBody?: ReactNode;
  /** Hide the outcomes strip (Pershing: no outcome claims before it's live). */
  hideOutcomes?: boolean;
  /** Technical detail, rendered near the bottom of the page (above the FAQ):
   *  intro, the sourced custodian/ACATS mechanics, the forms involved and a
   *  sources note. Never a "repaper" step here: repapering is the first step
   *  of the simple flow, not a later one. */
  processIntro: ReactNode;
  processSteps: ProcessStep[];
  /** Forms involved on a move to this custodian (only names already on the
   *  page or in the grounding doc). */
  forms?: string[];
  /** Optional sourced/generic note rendered under the technical detail. */
  processNote?: ReactNode;
  /** Common not-in-good-order (NIGO) pitfalls for this custodian. */
  nigoItems: InfoItem[];
  /** Blog category hub this custodian's page links into. */
  blogCategoryId: string;
  blogCategoryLabel: string;
  faqs: Faq[];
  ctaHeadline: string;
};

/** The signature NIGO item, in the user's wording (review decision 15). Each
 *  live custodian page lists it first. */
export const signatureNigoItem: InfoItem = {
  title: 'Missing or mismatched signatures',
  desc: 'Every required account owner has to sign, and the signatures have to match what the delivering firm holds. Joint and trust accounts multiply the places a signature can be missed.',
};

export default function CustodianLayout({
  custodian,
  shortName,
  slug,
  h1,
  subhead,
  intro,
  statusBadge,
  flowIntro,
  sameCustodianForm,
  sameCustodianChange,
  helpsHeading,
  helpsIntro,
  handlesHeading,
  handlesItems,
  handoffHeading,
  handoffBody,
  hideOutcomes = false,
  processIntro,
  processSteps,
  forms,
  processNote,
  nigoItems,
  blogCategoryId,
  blogCategoryLabel,
  faqs,
  ctaHeadline,
}: CustodianLayoutProps) {
  const contactLink = `/contact?interest=advisor-transitions&custodian=${slug}`;

  // The only custodian-move flow (grounding §18, review decision 12).
  // Repapering is the first step and triggers everything after it.
  const flowSteps: ProcessStep[] = [
    {
      n: '1',
      title: 'Collect the data',
      desc: 'FastTrackr collects the household and account data from your exports, statements and client documents.',
    },
    {
      n: '2',
      title: 'Create the paperwork',
      desc: `FastTrackr fills the ${shortName} account forms, the transfer of assets forms and your firm paperwork, and puts it all into DocuSign.`,
    },
    {
      n: '3',
      title: 'Send for signature',
      desc: 'Everything goes out to clients for signature.',
    },
    {
      n: '4',
      title: `${shortName} opens the accounts`,
      desc: `${shortName} validates the paperwork, opens the accounts and initiates the ACAT through DTCC.`,
    },
    {
      n: '5',
      title: 'Everything settles',
      desc: 'Once the delivering firm or custodian accepts the transfer, the assets move and everything settles.',
    },
  ];

  const stepGridCols =
    processSteps.length >= 4 ? 'lg:grid-cols-4' : processSteps.length === 3 ? 'lg:grid-cols-3' : '';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="text-center max-w-4xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandMint/10 text-brandDeep font-medium text-sm mb-6 border border-brandMint/20">
                Custodian transitions
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-4">
                {h1}
              </h1>
              {statusBadge ? <div className="mb-6">{statusBadge}</div> : null}
              <h2 className="text-xl md:text-2xl font-display font-semibold text-brandDeep mb-6">
                {subhead}
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed mb-10 max-w-3xl mx-auto">
                {intro}
              </p>
              <Link to={contactLink}>
                <button className="bg-brandDeep text-brandMint hover:bg-brandDeepHover px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-xl">
                  Book a Demo
                </button>
              </Link>
            </m.div>
          </div>
        </section>

        {/* How a move to <custodian> works: the simple flow */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">
                How a move to {shortName} works
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                {flowIntro ?? (
                  <>
                    Repapering is the first step, and it sets off everything else. Once the
                    paperwork is right, the rest of the move follows.
                  </>
                )}
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {flowSteps.map((step, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white p-6 pt-8 rounded-3xl border border-gray-100 shadow-glass"
                >
                  <div className="mb-5 w-12 h-12 rounded-2xl bg-brandDeep text-brandMint flex items-center justify-center font-display font-bold text-xl shadow-lg">
                    {step.n}
                  </div>
                  <h3 className="text-lg font-bold text-textPrimary mb-2">{step.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{step.desc}</p>
                </m.div>
              ))}
            </div>

            {sameCustodianForm ? (
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-3xl mx-auto mt-12">
                <div className="flex items-center gap-3 mb-3">
                  <ArrowLeftRight className="w-6 h-6 text-brandMint" />
                  <h3 className="text-lg font-bold text-textPrimary">
                    Changing firms but staying at {shortName}?
                  </h3>
                </div>
                <p className="text-textSecondary leading-relaxed">
                  You still have to repaper. When you move to a new firm and keep {shortName} as
                  custodian, there is no ACAT. Steps 1 to 3 are the same, and step 4 becomes{' '}
                  {sameCustodianChange ?? 'an advisor change'} inside {shortName}, which happens promptly. The{' '}
                  {shortName} form for this is the {sameCustodianForm}. Your new firm paperwork is
                  still the full set, and FastTrackr prepares both.
                </p>
              </div>
            ) : null}
          </div>
        </section>

        {/* Common NIGO pitfalls */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileWarning className="w-6 h-6" />
              </div>
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">
                Where {shortName} repapering goes not-in-good-order
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                A not-in-good-order (NIGO) submission is one the receiving or delivering firm
                rejects for missing or mismatched information. Each rejection sends the paperwork
                back and restarts the clock. These are the recurring causes on a book move.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {nigoItems.map((item, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex gap-4"
                >
                  <FileWarning className="w-6 h-6 text-red-400 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-textPrimary mb-2">{item.title}</h3>
                    <p className="text-textSecondary leading-relaxed">{item.desc}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* How FastTrackr helps on this custodian's move */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">
                {helpsHeading ?? <>How FastTrackr repapers a book onto {shortName}</>}
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                {helpsIntro ?? (
                  <>
                    FastTrackr is the purpose-built platform for advisor transitions. It collects
                    household data once, fills the paperwork, checks it against custodian and firm
                    rules before submission to reduce NIGOs, and tracks every account to done.
                  </>
                )}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {[
                {
                  icon: <Database />,
                  title: 'Collect once',
                  desc: 'AI pulls client and account data from your existing documents, statements and exports, so no household is retyped from scratch.',
                },
                {
                  icon: <FileText />,
                  title: 'Map & pre-fill',
                  desc: `The right ${shortName} new-account, transfer of assets and firm forms are identified and pre-filled, then checked against the fields that drive NIGO rejections.`,
                },
                {
                  icon: <LayoutList />,
                  title: 'Track to done',
                  desc: 'Every household, form and transfer status sits in one shared view, in place of the spreadsheet-and-email war room, until the last account lands.',
                },
              ].map((f, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-glass text-center"
                >
                  <div className="w-16 h-16 bg-bgCanvas rounded-2xl flex items-center justify-center text-brandMint mx-auto mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-4">{f.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{f.desc}</p>
                </m.div>
              ))}
            </div>

            {/* What FastTrackr handles on this custodian's move */}
            <div className="max-w-3xl mx-auto mb-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-glass">
              <h3 className="text-lg font-bold text-textPrimary mb-5">
                {handlesHeading ?? <>What FastTrackr handles on a {shortName} move</>}
              </h3>
              <ul className="space-y-4">
                {(handlesItems ?? [
                  {
                    title: 'Output the way you work',
                    desc: 'Push to DocuSign in one click, download the filled PDFs, export Excel in the counterparty’s own template, or send straight to the custodian by API where it’s supported. No retyping either way.',
                  },
                  {
                    title: `${shortName}-specific nuances, handled`,
                    desc: 'Carbon-copy requirements, SMS verification and second-signature outreach trip up submissions. FastTrackr builds them into every package it prepares.',
                  },
                  {
                    title: 'The transfer forms, not just the account opening',
                    desc: 'FastTrackr fills the ACAT / transfer of assets forms too, so the assets start moving with the account paperwork instead of being chased separately.',
                  },
                  {
                    title: 'Your firm paperwork, not just the custodian forms',
                    desc: `Beyond the ${shortName} account and transfer forms, FastTrackr also prepares your new firm paperwork (advisory agreement, fee schedule and disclosures), so every household is repapered on both the custodian and the firm side.`,
                  },
                  {
                    title: 'Nothing slips',
                    desc: 'Every household is tracked to done, with a pending view that shows only what is still missing.',
                  },
                ]).map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brandMint shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-textPrimary">{item.title}. </span>
                      <span className="text-textSecondary leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-brandMint" />
                <h3 className="text-lg font-bold text-textPrimary">
                  {handoffHeading ?? <>FastTrackr and {custodian}: how the handoff works</>}
                </h3>
              </div>
              <p className="text-textSecondary leading-relaxed">
                {handoffBody ?? (
                  <>
                    FastTrackr prepares everything a {custodian} move needs: the household data,
                    collected once, and the new-account, transfer of assets and firm forms, filled and
                    checked before they go out for signature. Talk to us about how the handoff would
                    work for your book.
                  </>
                )}
              </p>
            </div>

            {/* Internal links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link
                to="/solutions/advisor-transitions"
                className="inline-flex items-center gap-2 bg-brandDeep text-brandMint hover:bg-brandDeepHover px-6 py-3 rounded-full font-bold transition-colors"
              >
                See the full transition platform <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={`/blog/category/${blogCategoryId}`}
                className="inline-flex items-center gap-2 bg-white text-brandDeep border border-gray-200 hover:border-brandMint px-6 py-3 rounded-full font-bold transition-colors"
              >
                Read more on {blogCategoryLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Outcomes strip */}
        {hideOutcomes ? null : (
        <section className="py-20 bg-brandDeep text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Months to days', desc: 'timelines compress on the move to ' + shortName },
              { title: 'Fewer NIGOs', desc: 'forms checked before they reach the custodian' },
              { title: 'Retained AUM', desc: 'less attrition while the book is in transit' },
            ].map((o, i) => (
              <div key={i}>
                <CheckCircle2 className="w-6 h-6 text-brandMint mx-auto mb-4" />
                <div className="text-2xl font-bold font-display mb-2">{o.title}</div>
                <div className="text-white/80">{o.desc}</div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Technical detail: sourced custodian/ACATS mechanics and form names.
            Deliberately near the bottom so the simple flow and value lead. */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-textPrimary mb-4">
                The technical detail: how assets move to {shortName}
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">{processIntro}</p>
            </div>
            <div className={`grid md:grid-cols-2 ${stepGridCols} gap-8`}>
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="relative bg-white p-8 pt-10 rounded-3xl border border-gray-100 shadow-sm"
                >
                  <div className="mb-5 w-12 h-12 rounded-2xl bg-bgCanvas text-brandDeep flex items-center justify-center font-display font-bold text-xl">
                    {step.n}
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{step.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            {forms && forms.length > 0 ? (
              <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-textPrimary mb-5">
                  Forms on a {shortName} move
                </h3>
                <ul className="space-y-3">
                  {forms.map((f, i) => (
                    <li key={i} className="flex gap-3">
                      <FileText className="w-5 h-5 text-brandMint shrink-0 mt-0.5" />
                      <span className="text-textSecondary leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {processNote ? (
              <p className="text-sm text-textSecondary max-w-3xl mx-auto text-center mt-10 leading-relaxed">
                {processNote}
              </p>
            ) : null}
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA headline={ctaHeadline} link={contactLink} />
      </main>

      <Footer />
    </div>
  );
}
