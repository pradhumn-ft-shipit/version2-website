import CustodianLayout, { type CustodianLayoutProps } from './CustodianLayout';

// BNY Pershing custodian transition page. Onboarding/NIGO facts are drawn from
// BNY Pershing's own NetX360+ operations-experience material (bny.com/pershing);
// the underlying transfer rail (ACATS) is sourced to DTCC. Anything not verified
// from BNY Pershing's documentation is kept generic or TBD.
const props: CustodianLayoutProps = {
  custodian: 'BNY Pershing',
  shortName: 'Pershing',
  slug: 'pershing',
  h1: 'Moving a book to BNY Pershing (coming soon)',
  subhead: 'Advisor transitions and account onboarding onto BNY Pershing, without the rework.',
  // PR2-02 — Pershing is NOT live yet (live: Fidelity, Schwab, SEI, Goldman). The
  // forms are mapped, so it's named with a "Coming soon" label and every line
  // about what FastTrackr does here is future tense.
  statusBadge: (
    <p className="inline-flex items-start gap-2 px-4 py-2 rounded-2xl bg-blue-50 text-blue-800 font-medium text-base border border-blue-200 max-w-2xl text-left">
      <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-2" />
      <span>
        Coming soon. We've mapped the BNY Pershing forms, but Pershing isn't live on FastTrackr
        yet. If your book is moving there, talk to us about timing.
      </span>
    </p>
  ),
  helpsHeading: 'How a Pershing move will run on FastTrackr (coming soon)',
  helpsIntro:
    'FastTrackr is built for advisor transitions. When Pershing goes live, it will collect household data once, fill and check the paperwork before submission, and track every account to done.',
  handlesHeading: 'What FastTrackr will handle on a Pershing move',
  handlesItems: [
    {
      title: 'Sign the way the client will',
      desc: 'FastTrackr will send the paperwork to DocuSign in one click for e-signature, or let you download the filled PDFs where a client or form still needs a wet signature.',
    },
    {
      title: 'Pershing-specific nuances, handled',
      desc: 'FastTrackr will build the quirks that trip up a submission, such as carbon-copy requirements, SMS verification and second-signature outreach, into every package it prepares.',
    },
    {
      title: 'The transfer forms, not just the account opening',
      desc: 'FastTrackr will fill the ACAT / transfer-of-assets forms too, so the assets start moving with the account paperwork instead of being chased separately.',
    },
    {
      title: 'Your firm paperwork, not just the custodian forms',
      desc: 'Beyond the Pershing account and transfer forms, FastTrackr will also prepare your new firm paperwork (advisory agreement, fee schedule and disclosures), so every household is repapered on both the custodian and the firm side.',
    },
    {
      title: 'Nothing slips',
      desc: 'Every household will be tracked to done, with a pending view that shows only what is still missing.',
    },
  ],
  handoffHeading: 'FastTrackr and BNY Pershing: where it stands',
  handoffBody:
    "Pershing is coming soon. We've mapped the forms. When it goes live, FastTrackr will collect the household data once and prepare the new-account, transfer and firm forms for signature. Talk to us about timing for your book.",
  hideOutcomes: true,
  intro:
    'Transitioning to BNY Pershing means opening accounts and moving assets for every household through NetX360+. Pershing itself calls out minimizing not-in-good-order rework as a core onboarding challenge. Once Pershing is live on FastTrackr, we\'ll prepare the data and forms so households onboard without rework.',
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
      a: 'BNY Pershing specifically calls out not-in-good-order issues that require a second signature from the investor. Beyond that, registration mismatches, incomplete transfer details, and non-transferable assets are common causes. Once Pershing is live on FastTrackr, it will check for these before submission.',
    },
    {
      q: 'What is ACATS?',
      a: 'ACATS (Automated Customer Account Transfer Service) is the DTCC-operated system that automates and standardizes account transfers between firms — the rail assets travel on when a book moves to BNY Pershing.',
    },
    {
      q: 'How does FastTrackr work with BNY Pershing?',
      a: "BNY Pershing is coming soon on FastTrackr. We've mapped the forms, but it isn't live yet. Talk to us about timing for your book.",
    },
  ],
  ctaHeadline: 'Planning a move to BNY Pershing? See exactly how your book would repaper.',
};

export default function PershingCustodian() {
  return <CustodianLayout {...props} />;
}
