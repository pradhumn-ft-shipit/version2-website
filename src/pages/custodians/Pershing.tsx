import CustodianLayout, { type CustodianLayoutProps } from './CustodianLayout';

// BNY Pershing custodian transition page. Onboarding/NIGO facts are drawn from
// BNY Pershing's own NetX360+ operations-experience material (bny.com/pershing);
// the underlying transfer rail (ACATS) is sourced to DTCC. Anything not verified
// from BNY Pershing's documentation is kept generic or TBD.
const props: CustodianLayoutProps = {
  custodian: 'BNY Pershing',
  shortName: 'Pershing',
  slug: 'pershing',
  h1: 'Move your book to BNY Pershing, repapered in days',
  subhead: 'Advisor transitions and account onboarding onto BNY Pershing, without the rework.',
  // D1 — Pershing is NOT a live mapping yet (Live today = Fidelity, Schwab, Goldman, SEI).
  // Marks the present-tense page as in-progress so it doesn't read as fully supported.
  statusBadge: (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm border border-blue-200">
      <span className="w-2 h-2 rounded-full bg-blue-400" />
      Coverage in active development — talk to us
    </span>
  ),
  intro:
    'Transitioning to BNY Pershing means opening accounts and moving assets for every household through NetX360+. Pershing itself calls out minimizing not-in-good-order rework as a core onboarding challenge. FastTrackr prepares the data and forms so households onboard without rework.',
  processIntro:
    'BNY Pershing accounts are opened and funded through its NetX360+ platform, with asset movement running over the ACATS rail operated by DTCC. The advisor-side repapering runs alongside account opening.',
  processSteps: [
    {
      n: '1',
      title: 'Open accounts',
      desc: 'BNY Pershing’s NetX360+ onboarding lets you initiate multiple accounts for a client at once and can be customized to your workflow.',
    },
    {
      n: '2',
      title: 'Capture signatures',
      desc: 'Pershing describes gathering verifiable, secure eSignatures to complete onboarding — the step where missing or second signatures create NIGO rework.',
    },
    {
      n: '3',
      title: 'Move assets (ACATS)',
      desc: 'From NetX360+ you initiate ACATs, journals, wires, and other asset movement with integrated approval workflow. The ACATS transfer itself settles through DTCC.',
    },
    {
      n: '4',
      title: 'Repaper',
      desc: 'Each household needs its BNY Pershing account applications, agreements, and firm forms completed to finish the transition.',
    },
  ],
  processNote: (
    <>
      Sources: BNY Pershing’s NetX360+ operations- and advisor-experience material
      (bny.com/pershing) describes onboarding multiple accounts at once, secure eSignature capture,
      ACATs initiation with approval workflow, and an explicit focus on minimizing not-in-good-order
      (NIGO) rework; DTCC operates the ACATS rail these transfers use. BNY Pershing’s own
      advisor-transition timelines and form versions are confirmed with Pershing during onboarding.
    </>
  ),
  nigoItems: [
    {
      title: 'Second-signature outreach',
      desc: 'BNY Pershing identifies NIGO issues that require going back to the investor for a second signature as a key onboarding friction point — each one adds a client touch and a delay.',
    },
    {
      title: 'Registration or title mismatch',
      desc: 'The registration on the new BNY Pershing account must match the delivering firm’s records. Trust names, dates, and ownership types are frequent mismatch points.',
    },
    {
      title: 'Incomplete account or transfer details',
      desc: 'A wrong account number, a missing delivering-firm identifier, or an omitted field stalls validation of the transfer.',
    },
    {
      title: 'Non-transferable or restricted assets',
      desc: 'Positions that cannot move in-kind need separate handling; unflagged, they can hold up the rest of a household’s transfer.',
    },
  ],
  blogCategoryId: 'advisor-transitions-and-repapering',
  blogCategoryLabel: 'Advisor Transitions & Repapering',
  faqs: [
    {
      q: 'How do accounts move to BNY Pershing?',
      a: 'Accounts are opened and funded through BNY Pershing’s NetX360+ platform, which lets you initiate multiple accounts at once, capture secure eSignatures, and initiate ACATs and other asset movement with approval workflow. The ACATS transfer settles through DTCC.',
    },
    {
      q: 'What causes NIGO rework at BNY Pershing?',
      a: 'BNY Pershing specifically calls out not-in-good-order issues that require a second signature from the investor. Beyond that, registration mismatches, incomplete transfer details, and non-transferable assets are common causes. FastTrackr validates these before submission.',
    },
    {
      q: 'What is ACATS?',
      a: 'ACATS (Automated Customer Account Transfer Service) is the DTCC-operated system that automates and standardizes account transfers between firms — the rail assets travel on when a book moves to BNY Pershing.',
    },
    {
      q: 'How does FastTrackr work with BNY Pershing?',
      a: 'FastTrackr collects the household data and prepares the forms a BNY Pershing transition needs so accounts onboard in good order, delivered as signature-ready packages. Talk to us about how the handoff would work for your book.',
    },
  ],
  ctaHeadline: 'Planning a move to BNY Pershing? See exactly how your book would repaper.',
};

export default function PershingCustodian() {
  return <CustodianLayout {...props} />;
}
