import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCTA from '../components/PageCTA';
import LeadCaptureModal from '../components/LeadCaptureModal';
import { m } from '../lib/motion';
import {
  CheckCircle2,
  Download,
  FileText,
  ClipboardList,
  ArrowRight,
  ListChecks,
} from 'lucide-react';

/*
 * "Ultimate Advisor Transition Checklist" pillar page (W6, T2-4).
 *
 * The full checklist below IS the SEO asset — real, indexable on-page content.
 * The "Get the PDF" buttons open a LeadCaptureModal that captures the lead via the
 * shared contact worker and then serves the branded PDF from /downloads/ (a soft
 * gate — see LeadCaptureModal). The PDF is kept out of the index via robots.txt.
 */

const CHECKLIST_PDF = '/downloads/fasttrackr-advisor-transition-checklist.pdf';

type ChecklistPhase = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

// General transition best-practice, written as ordinary marketing content.
// No FastTrackr performance figures; no specific regulatory claims asserted as
// fact — Broker Protocol / custodian language is kept general.
const PHASES: ChecklistPhase[] = [
  {
    id: 'pre-transition-planning',
    title: 'Phase 1 — Pre-transition planning',
    summary:
      'Everything you settle before anyone signs anything. Get the plan on paper while the move is still confidential.',
    items: [
      'Confirm your target launch date and work backward into a week-by-week timeline.',
      'Inventory the book you intend to move: households, accounts, account types, and approximate AUM.',
      'Decide your destination model — RIA, hybrid, or a new broker-dealer — and confirm the custodian(s).',
      'Line up legal counsel experienced in advisor transitions to review your current agreements.',
      'Review your existing employment, non-solicit, and non-compete obligations with that counsel.',
      'Choose the tech stack: CRM, portfolio accounting, e-signature, and document handling.',
      'Assign an internal owner for each workstream (ops, compliance, client comms, technology).',
      'Budget for the transition: setup costs, dual-running costs, and lost-productivity time.',
    ],
  },
  {
    id: 'broker-protocol-resignation',
    title: 'Phase 2 — Broker Protocol & resignation',
    summary:
      'The mechanics of leaving cleanly. Sequence resignation, protocol steps, and the client-data list with counsel.',
    items: [
      'With counsel, determine whether both your current and future firms are Broker Protocol members.',
      'Prepare the client information you are permitted to take, in the form your counsel approves.',
      'Draft your resignation letter and confirm the exact timing with counsel.',
      'Plan resignation for a time that gives you a clean, well-documented departure.',
      'Keep only the permitted contact fields; do not remove account numbers or firm records.',
      'Document every step you take, with timestamps, in case questions arise later.',
      'Prepare for a same-day cutoff of firm systems, email, and building access.',
    ],
  },
  {
    id: 'client-communication',
    title: 'Phase 3 — Client communication',
    summary:
      'What clients hear, when, and from whom. The first 48 hours of outreach decide how much of the book follows you.',
    items: [
      'Draft an announcement that explains the move simply and reassures clients their assets are safe.',
      'Segment clients by AUM, complexity, and relationship depth to prioritize outreach order.',
      'Prepare call scripts and email templates for each segment.',
      'Schedule personal calls to your top households on day one.',
      'Have the transfer paperwork ready to send the moment a client says yes.',
      'Prepare answers to the predictable questions: fees, custodian, statements, and login changes.',
      'Set up a simple way to track who has been contacted and who has signed.',
      'Plan a follow-up cadence for clients who do not respond to the first outreach.',
    ],
  },
  {
    id: 'repapering-account-opening',
    title: 'Phase 4 — Repapering & account opening (ACATS)',
    summary:
      'Turning "yes" into transferred assets. This is where NIGO rework quietly eats the timeline if the paperwork is not clean.',
    items: [
      'Map every source account to its destination account type before you generate paperwork.',
      'Pre-fill new-account and transfer forms from your client data to reduce manual entry errors.',
      'Use e-signature so clients can complete paperwork without printing or scanning.',
      'Batch signatures by household so a client signs everything in one sitting.',
      'Double-check registrations, beneficiaries, and titling against the source account exactly.',
      'Submit ACATS transfers and track each one through to settlement.',
      'Build a NIGO (not-in-good-order) triage process so rejected transfers are fixed fast.',
      'Watch for non-transferable or proprietary positions that need a plan of their own.',
    ],
  },
  {
    id: 'custodian-requirements',
    title: 'Phase 5 — Custodian requirements',
    summary:
      'Each custodian has its own forms, queues, and quirks. Confirm the specifics early so nothing stalls in processing.',
    items: [
      'Confirm each custodian\'s account-opening requirements and supported account types.',
      'Get the current form versions directly from the custodian — old forms cause rejections.',
      'Understand each custodian\'s processing timeline and queue behavior during busy periods.',
      'Set up advisor access, portals, and any required data feeds before go-live.',
      'Confirm how in-kind versus liquidated transfers are handled for each position type.',
      'Establish a named contact at each custodian for escalating stuck transfers.',
      'Verify fee schedules, account minimums, and any transfer-fee reimbursements.',
    ],
  },
  {
    id: 'data-migration',
    title: 'Phase 6 — Data migration',
    summary:
      'Getting clean client and account data into your new systems, once, correctly — so the CRM is trustworthy from day one.',
    items: [
      'Export or reconstruct client contact data into a single, structured source.',
      'Standardize the data: consistent names, households, phone formats, and email fields.',
      'Import contacts and households into the new CRM and spot-check a sample.',
      'Load account data into portfolio accounting and reconcile balances after transfers settle.',
      'Recreate meeting notes, tasks, and workflows that clients and staff rely on.',
      'De-duplicate records so one client is not split across multiple entries.',
      'Set retention and backup policies for the migrated data.',
    ],
  },
  {
    id: 'go-live-first-72-hours',
    title: 'Phase 7 — Go-live & the first 72 hours',
    summary:
      'The launch window. Move fast, stay reachable, and log everything — momentum here compounds across the whole book.',
    items: [
      'Send your client announcement on the agreed schedule.',
      'Start top-household calls immediately and send paperwork within the same conversation.',
      'Staff a rapid-response channel for client questions during the first three days.',
      'Track signed paperwork, submitted transfers, and open items on a single dashboard.',
      'Escalate any NIGO rejections the same day they appear.',
      'Keep a running log of issues and how each was resolved.',
      'Check in daily with each workstream owner to clear blockers.',
    ],
  },
  {
    id: 'post-transition',
    title: 'Phase 8 — Post-transition',
    summary:
      'Closing out the move and turning it into a repeatable playbook for the next transition or acquisition.',
    items: [
      'Confirm every intended account has transferred and settled.',
      'Follow up with clients who have not yet signed or responded.',
      'Reconcile final balances and resolve any positions that did not transfer in kind.',
      'Send a "welcome / thank you" touch to clients who moved with you.',
      'Debrief the team on what worked and what slowed things down.',
      'Document the process into a repeatable playbook for the next transition.',
      'Archive transition records per your compliance and retention policy.',
    ],
  },
];

const totalItems = PHASES.reduce((n, p) => n + p.items.length, 0);

export default function TransitionChecklist() {
  // Hydration-safe: server and the client's first render both start with an
  // empty set (all boxes unchecked), so there is no mismatch. Toggling is a
  // client-only progressive enhancement after hydration.
  const [checked, setChecked] = useState<Set<string>>(() => new Set());
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-bgPrimary">
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <m.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandMint/15 text-brandDeep border border-brandMint/30 text-sm font-medium mb-6"
            >
              <ListChecks size={16} />
              {totalItems}-point checklist across 8 phases
            </m.div>
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-6"
            >
              The Ultimate Advisor Transition Checklist
            </m.h1>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              A step-by-step operating guide for moving a book of business — from
              pre-transition planning and Broker Protocol through repapering,
              ACATS, custodian requirements, and the first 72 hours after go-live.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setPdfModalOpen(true)}
                className="inline-flex items-center gap-2 bg-brandDeep text-white hover:bg-brandDeepHover px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <Download size={18} /> Get the PDF checklist
              </button>
              <Link
                to="/solutions/advisor-transitions"
                className="inline-flex items-center gap-2 text-textSecondary hover:text-textPrimary font-medium px-6 py-3 transition-colors"
              >
                See how FastTrackr automates it <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* On-page checklist (the SEO asset) */}
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Jump nav */}
            <nav
              aria-label="Checklist phases"
              className="bg-bgCanvas border border-gray-100 rounded-3xl p-6 mb-12"
            >
              <div className="flex items-center gap-2 text-textPrimary font-bold mb-4">
                <ClipboardList size={18} className="text-brandDeep" /> Jump to a phase
              </div>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2 list-decimal list-inside text-textSecondary">
                {PHASES.map((phase) => (
                  <li key={phase.id}>
                    <a
                      href={`#${phase.id}`}
                      className="hover:text-brandDeep transition-colors"
                    >
                      {phase.title.replace(/^Phase \d+ — /, '')}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="space-y-14">
              {PHASES.map((phase, phaseIndex) => (
                <m.section
                  key={phase.id}
                  id={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  className="scroll-mt-28"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-brandMint font-display font-bold text-2xl">
                      {String(phaseIndex + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary tracking-tight">
                      {phase.title.replace(/^Phase \d+ — /, '')}
                    </h2>
                  </div>
                  <p className="text-textSecondary mb-6 max-w-2xl">{phase.summary}</p>

                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => {
                      const id = `${phase.id}-${itemIndex}`;
                      const isChecked = checked.has(id);
                      return (
                        <li key={id}>
                          <button
                            type="button"
                            onClick={() => toggle(id)}
                            aria-pressed={isChecked}
                            className="group flex w-full items-start gap-3 text-left rounded-xl border border-gray-100 bg-white hover:border-brandMint/40 px-4 py-3 transition-colors"
                          >
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                isChecked
                                  ? 'bg-brandMint border-brandMint text-brandDeep'
                                  : 'border-gray-300 text-transparent group-hover:border-brandMint'
                              }`}
                            >
                              <CheckCircle2 size={16} />
                            </span>
                            <span
                              className={`leading-relaxed transition-colors ${
                                isChecked
                                  ? 'text-textTertiary line-through'
                                  : 'text-textPrimary'
                              }`}
                            >
                              {item}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </m.section>
              ))}
            </div>
          </div>
        </section>

        {/* Gated-PDF lead capture — opens LeadCaptureModal */}
        <section id="get-the-pdf" className="py-16 scroll-mt-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brandDeep rounded-[40px] p-8 md:p-14 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-brandMint mb-4">
                    <FileText size={20} />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Free download
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-4">
                    Get the full checklist as a PDF
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    A print-ready, FastTrackr-branded copy of all {totalItems} steps across 8
                    phases — keep it on the wall for your next transition or acquisition.
                  </p>
                </div>

                <div className="text-center md:text-left">
                  <button
                    type="button"
                    onClick={() => setPdfModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-brandMint text-brandDeep hover:bg-white px-7 py-4 rounded-xl font-bold text-lg transition-colors"
                  >
                    <Download size={20} /> Get the PDF checklist
                  </button>
                  <p className="text-white/50 text-xs mt-3">
                    Takes 10 seconds — name and email, and it&apos;s yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                to="/solutions/advisor-transitions"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-bgCanvas hover:border-brandMint/40 px-6 py-5 transition-colors"
              >
                <div>
                  <div className="font-bold text-textPrimary mb-1">
                    Advisor transition automation
                  </div>
                  <div className="text-sm text-textSecondary">
                    How FastTrackr handles repapering and account opening.
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-textSecondary group-hover:text-brandDeep transition-colors shrink-0"
                />
              </Link>
              <Link
                to="/blog/category/advisor-transitions-and-repapering"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-bgCanvas hover:border-brandMint/40 px-6 py-5 transition-colors"
              >
                <div>
                  <div className="font-bold text-textPrimary mb-1">
                    Transitions &amp; repapering articles
                  </div>
                  <div className="text-sm text-textSecondary">
                    ACATS, NIGO rates, and the operations of moving a book.
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-textSecondary group-hover:text-brandDeep transition-colors shrink-0"
                />
              </Link>
            </div>
          </div>
        </section>

        <PageCTA headline="Ready to run your next transition without the NIGO scramble?" />
      </main>

      <LeadCaptureModal
        open={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        title="Get the transition checklist"
        description={`A print-ready PDF of all ${totalItems} steps across 8 phases. Tell us where to send it.`}
        assetUrl={CHECKLIST_PDF}
        assetFilename="fasttrackr-advisor-transition-checklist.pdf"
        interest="advisor-transitions"
        leadLabel="Advisor Transition Checklist PDF"
        submitLabel="Get the PDF checklist"
      />

      <Footer />
    </div>
  );
}
