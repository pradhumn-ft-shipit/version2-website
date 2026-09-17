import CustodianLayout, { type CustodianLayoutProps } from './CustodianLayout';

// Charles Schwab custodian transition page. Process facts are drawn from the
// DTCC ACATS primary source (the transfer rail Schwab uses); Schwab-specific
// timelines that could not be verified from Schwab's own documentation are kept
// generic rather than invented.
const props: CustodianLayoutProps = {
  custodian: 'Charles Schwab',
  shortName: 'Schwab',
  slug: 'schwab',
  h1: 'Move your book to Charles Schwab, repapered in days',
  subhead: 'Advisor transitions and ACATS transfers to Schwab, without the paperwork war room.',
  intro:
    'Bringing a book of business to Schwab means new-account applications, transfer-of-account forms, and firm paperwork for every household — the work that turns a transition into a months-long project. FastTrackr collects the data once and prepares the forms so the move runs in days.',
  processIntro:
    'Accounts move to Schwab over the ACATS rail — the Automated Customer Account Transfer Service operated by DTCC, which automates and standardizes asset transfers between firms. At a high level, every transfer follows the same four steps.',
  processSteps: [
    {
      n: '1',
      title: 'Initiate',
      desc: 'As the receiving firm, Schwab submits a transfer-initiation request to NSCC/ACATS containing the customer detail the delivering firm needs to identify the account.',
    },
    {
      n: '2',
      title: 'Validate',
      desc: 'The delivering firm reviews the request and either rejects it or returns the detailed account asset data — the step where a mismatch sends the transfer back as NIGO.',
    },
    {
      n: '3',
      title: 'Settle',
      desc: 'Once validated, the assets are delivered and settle through DTCC infrastructure. A standard ACATS transfer runs about six business days end to end (SEC), with accelerated processing as few as four (DTCC).',
    },
    {
      n: '4',
      title: 'Repaper',
      desc: 'Alongside the transfer, each household needs Schwab new-account applications, agreements, and any firm-specific forms executed to complete the move.',
    },
  ],
  processNote: (
    <>
      Sources: the SEC, which puts a standard ACATS transfer at about six business days
      (three for the delivering firm to validate or reject), and DTCC, the operator of ACATS,
      which offers accelerated processing in as few as four business days. Schwab’s own
      processing windows and required forms vary by account type and are confirmed with Schwab
      during onboarding.
    </>
  ),
  nigoItems: [
    {
      title: 'Registration does not match',
      desc: 'The account title and registration on the new Schwab paperwork must match the delivering firm’s records exactly. A middle initial, a trust date, or an ownership-type difference is a common rejection.',
    },
    {
      title: 'Missing or mismatched signatures',
      desc: 'Every required account owner has to sign, and the signatures have to match what the delivering firm holds. Joint and trust accounts multiply the places a signature can be missed.',
    },
    {
      title: 'Incomplete account or transfer details',
      desc: 'A wrong or truncated account number, a missing delivering-firm identifier, or an omitted field on the transfer form stalls validation.',
    },
    {
      title: 'Non-transferable or restricted assets',
      desc: 'Proprietary funds, limited partnerships, and certain restricted positions may not move in-kind and need to be handled separately, which delays the rest of the transfer if not flagged up front.',
    },
  ],
  blogCategoryId: 'advisor-transitions-and-repapering',
  blogCategoryLabel: 'Advisor Transitions & Repapering',
  faqs: [
    {
      q: 'How long does it take to move a book to Schwab?',
      a: 'The underlying ACATS transfer runs about six business days end to end (SEC), or as few as four with DTCC accelerated processing, once a request is validated — but the full advisor transition (collecting data, preparing and signing new-account and transfer forms for every household) is what usually stretches to weeks or months. FastTrackr compresses that preparation work.',
    },
    {
      q: 'What is ACATS?',
      a: 'ACATS (Automated Customer Account Transfer Service) is the DTCC-operated system that automates and standardizes the transfer of customer accounts between firms. It is the rail assets travel on when a book moves to Schwab.',
    },
    {
      q: 'What causes a Schwab transfer to be rejected as NIGO?',
      a: 'The most common causes are a registration or title that does not match the delivering firm’s records, missing or mismatched signatures, incomplete account or transfer details, and assets that cannot transfer in-kind. FastTrackr validates these fields before submission.',
    },
    {
      q: 'How does FastTrackr work with Schwab?',
      a: 'FastTrackr prepares the household data and the forms a Schwab transition needs, and delivers them as signature-ready, in-good-order packages. Talk to us about how the handoff would work for your book.',
    },
  ],
  ctaHeadline: 'Planning a move to Schwab? See exactly how your book would repaper.',
};

export default function SchwabCustodian() {
  return <CustodianLayout {...props} />;
}
