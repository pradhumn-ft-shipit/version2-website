import CustodianLayout, { type CustodianLayoutProps, signatureNigoItem } from './CustodianLayout';

// Fidelity custodian transition page. The move flow and the same-custodian case
// (Advisor Change form) follow grounding §18 (review decisions 12-13). Technical
// timeline facts are taken from Fidelity's own published Transfer of Assets FAQ
// (fidelity.com/accounts/services/content/toafaq.html) and the DTCC ACATS primary
// source. Fidelity Institutional-specific details that could not be verified are
// left generic.
const props: CustodianLayoutProps = {
  custodian: 'Fidelity',
  shortName: 'Fidelity',
  slug: 'fidelity',
  h1: 'Move your book to Fidelity, repapered in days',
  subhead: 'Advisor transitions and transfer of assets onto Fidelity, without the manual paperwork.',
  intro:
    'A transition to Fidelity means a transfer of assets and fresh account paperwork for every household. Changing firms while staying at Fidelity still means an Advisor Change form and the full firm paperwork. Fidelity itself says a transfer only proceeds once the paperwork is in good order, and that is exactly where books stall. FastTrackr prepares that paperwork so it lands right the first time.',
  sameCustodianForm: 'Advisor Change form',
  processIntro:
    'Assets move to Fidelity as a Transfer of Assets (TOA), which runs over the ACATS rail operated by DTCC. Fidelity publishes the timeline for its retail transfers.',
  processSteps: [
    {
      n: '1',
      title: 'Initiate the TOA',
      desc: 'The transfer request is submitted with the client and account detail Fidelity needs. Fidelity’s published guidance notes written confirmation of initiation within 7–10 days of a mailed form.',
    },
    {
      n: '2',
      title: 'Good-order review',
      desc: 'Fidelity states that once it receives the paperwork and determines it is in good order, the transfer proceeds. A single missing or mismatched field holds up the whole transfer.',
    },
    {
      n: '3',
      title: 'Transfer & settle',
      desc: 'Fidelity’s published range is 3–5 weeks for most transfers to complete once in good order; a full (rather than partial) transfer may be automated and faster.',
    },
  ],
  forms: [
    'Fidelity new-account application, for each account and account type',
    'Beneficiary forms',
    'Servicing forms: options, margin, EFT and distributions',
    'Transfer of Assets (TOA) form',
    'Advisor Change form, when you change firms and keep Fidelity as custodian',
    'Firm paperwork: advisory agreement, fee schedule, Form CRS and privacy policy',
  ],
  processNote: (
    <>
      Sources: Fidelity’s Transfer of Assets FAQ (fidelity.com/accounts/services/content/toafaq.html)
      states written confirmation within 7–10 days of mailing the form and that most transfers take
      3–5 weeks once the paperwork is in good order, with foreign securities and limited
      partnerships taking longer; DTCC operates the ACATS rail these transfers use. These are
      Fidelity’s published retail figures; advisor-platform timelines and form versions are
      confirmed with Fidelity during onboarding.
    </>
  ),
  nigoItems: [
    signatureNigoItem,
    {
      title: 'Paperwork not in good order',
      desc: 'Fidelity is explicit that a transfer proceeds only once it determines the paperwork is in good order. Any missing field, signature, or document keeps the transfer from starting.',
    },
    {
      title: 'Registration or title mismatch',
      desc: 'The registration on the new Fidelity account must match the delivering firm’s records. Trust names, dates, and ownership types are frequent mismatch points.',
    },
    {
      title: 'Foreign securities and limited partnerships',
      desc: 'Fidelity notes these asset types take longer to transfer. Left unflagged, they can hold up the rest of an in-kind move.',
    },
    {
      title: 'Third-party release delays',
      desc: 'Fidelity states the actual transfer time depends partly on how quickly the delivering firm releases the assets, a dependency worth tracking per household.',
    },
  ],
  blogCategoryId: 'advisor-transitions-and-repapering',
  blogCategoryLabel: 'Advisor Transitions & Repapering',
  faqs: [
    {
      q: 'How does a move to Fidelity work?',
      a: 'FastTrackr collects the data, creates the paperwork and puts it into DocuSign, and everything goes out for signature. Fidelity then validates the paperwork, opens the accounts and initiates the ACAT through DTCC. Once the delivering firm or custodian accepts, everything settles. Repapering is the first step, and it sets off everything else.',
    },
    {
      q: 'Do I need to repaper if I change firms but stay at Fidelity?',
      a: 'Yes. When you move to a new firm and keep Fidelity as custodian, there is no ACAT. The step becomes a master account or G number change inside Fidelity, which happens promptly. The Fidelity form for this is the Advisor Change form, and your new firm paperwork is still the full set. FastTrackr prepares both.',
    },
    {
      q: 'How long does a transfer to Fidelity take?',
      a: 'Fidelity’s published guidance for its retail transfers is written confirmation of initiation within 7–10 days of a mailed form, and most transfers completing in 3–5 weeks once the paperwork is in good order (Fidelity Institutional advisor-platform timelines may differ). Full transfers may be automated and faster; foreign securities and limited partnerships take longer.',
    },
    {
      q: 'What does “in good order” mean for a Fidelity transfer?',
      a: 'Fidelity proceeds with a transfer once it determines the paperwork is complete and correct: in good order. A missing signature, a mismatched registration, or an omitted field means it is not, and the transfer waits.',
    },
    {
      q: 'What is ACATS?',
      a: 'ACATS (Automated Customer Account Transfer Service) is the DTCC-operated system that automates and standardizes the transfer of customer assets between firms, and is the rail a transfer of assets to Fidelity travels on.',
    },
  ],
  ctaHeadline: 'Planning a move to Fidelity? See exactly how your book would repaper.',
};

export default function FidelityCustodian() {
  return <CustodianLayout {...props} />;
}
