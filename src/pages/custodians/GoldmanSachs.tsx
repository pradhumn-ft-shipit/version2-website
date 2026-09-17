import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import PageFAQ from '../../components/PageFAQ';
import { m } from '../../lib/motion';
import { ArrowRight, Database, FileSpreadsheet, UploadCloud, CheckCircle2 } from 'lucide-react';

/*
 * Goldman Sachs custodian transition page (D2).
 *
 * DELIBERATELY NOT built on CustodianLayout. Goldman is the DATA-HANDBACK case,
 * not a full repaper: FastTrackr does NOT repaper directly onto Goldman. Instead it
 * collects and structures the household + account data and returns it in Goldman's
 * own required format, ready to upload into Goldman's onboarding workflow — grounding
 * §10.3 (Excel/output mapped into the counterparty's own template). The shared layout
 * is framed around "how FastTrackr repapers a book onto {custodian}", which would
 * misrepresent this model, so this page uses accurate handback copy throughout.
 *
 * Goldman-specific format/template names and workflow specifics are kept generic
 * (confirmed with Goldman during onboarding) rather than stated.
 */

const steps = [
  {
    icon: <Database />,
    title: 'Collect the book, once',
    desc: 'FastTrackr’s AI pulls every household, member, and account out of your existing documents, statements, exports, and conversations — no re-keying from scratch.',
  },
  {
    icon: <CheckCircle2 />,
    title: 'Structure and validate',
    desc: 'The data is organized into clean household records and checked for the gaps and mismatches that would otherwise bounce back later.',
  },
  {
    icon: <FileSpreadsheet />,
    title: 'Map into Goldman’s format',
    desc: 'FastTrackr outputs the book in Goldman’s own required format, ready to hand over — the exact template and workflow details are confirmed with Goldman during onboarding.',
  },
  {
    icon: <UploadCloud />,
    title: 'Goldman’s workflow takes it from there',
    desc: 'The prepared file uploads into Goldman’s own onboarding workflow, where the accounts are opened on Goldman’s side.',
  },
];

const faqs = [
  {
    q: 'Does FastTrackr repaper directly onto Goldman Sachs?',
    a: 'Not directly. For Goldman, FastTrackr collects and structures the household and account data and returns it in Goldman’s own required format, ready to upload into Goldman’s onboarding workflow — Goldman opens the accounts on their side. You still get the hard part done for you: the data gathered once, structured, and validated.',
  },
  {
    q: 'How is this different from the Schwab or Fidelity pages?',
    a: 'For Schwab, Fidelity, and SEI, FastTrackr prepares and validates the actual repapering forms for every household. For Goldman, the output is the structured data in Goldman’s preferred format rather than a filled form set — the collection, structuring, and validation work is the same either way.',
  },
  {
    q: 'What data can FastTrackr pull in?',
    a: 'Structured and unstructured sources alike — CRM and system exports, custodian statements, spreadsheets, PDFs, and more. FastTrackr reads them, extracts the account and household detail, and assembles it into one clean record set.',
  },
  {
    q: 'How does FastTrackr work with Goldman Sachs?',
    a: 'FastTrackr produces the structured, ready-to-upload data package a Goldman transition needs, in Goldman’s own required format. Talk to us about how the handoff would work for your book.',
  },
];

export default function GoldmanSachsCustodian() {
  const contactLink = '/contact?interest=advisor-transitions&custodian=goldman-sachs';

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
                Moving a book to Goldman Sachs, data-ready in days
              </h1>
              <h2 className="text-xl md:text-2xl font-display font-semibold text-brandDeep mb-6">
                FastTrackr structures your book and hands it back in Goldman’s own format.
              </h2>
              <p className="text-xl text-textSecondary leading-relaxed mb-10 max-w-3xl mx-auto">
                The slowest part of any transition is gathering and structuring the client data. For
                a move to Goldman, FastTrackr does exactly that — collecting every household once and
                returning it in the format Goldman’s onboarding workflow expects, ready to upload.
              </p>
              <Link to={contactLink}>
                <button className="bg-brandDeep text-brandMint hover:bg-brandDeepHover px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-xl">
                  Book a Demo
                </button>
              </Link>
            </m.div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">
                How a move to Goldman Sachs works with FastTrackr
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed">
                Goldman opens the accounts on their side. FastTrackr does the data work that gets you
                there — so what lands in Goldman’s workflow is clean, complete, and in the right
                format the first time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-glass"
                >
                  <div className="mb-5 w-14 h-14 rounded-2xl bg-bgCanvas text-brandMint flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{step.title}</h3>
                  <p className="text-textSecondary leading-relaxed">{step.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why the handback model still saves the time */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display font-bold text-textPrimary mb-6">
              You still skip the part that actually takes months
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed mb-10">
              Whether the output is a filled form set or a structured upload file, the work that
              stretches a transition to Goldman is the same: finding, extracting, and reconciling
              every household’s data by hand. FastTrackr collapses that into one automated pass, so
              your team hands Goldman a clean book instead of building it row by row.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solutions/advisor-transitions"
                className="inline-flex items-center gap-2 bg-brandDeep text-brandMint hover:bg-brandDeepHover px-6 py-3 rounded-full font-bold transition-colors"
              >
                See the full transition platform <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/blog/category/advisor-transitions-and-repapering"
                className="inline-flex items-center gap-2 bg-white text-brandDeep border border-gray-200 hover:border-brandMint px-6 py-3 rounded-full font-bold transition-colors"
              >
                Read more on Advisor Transitions &amp; Repapering <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <PageFAQ faqs={faqs} />
        <PageCTA
          headline="Moving a book to Goldman Sachs? See how fast the data comes together."
          link={contactLink}
        />
      </main>

      <Footer />
    </div>
  );
}
