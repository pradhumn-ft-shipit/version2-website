import CustodianLayout, { type CustodianLayoutProps, signatureNigoItem } from './CustodianLayout';

// Charles Schwab custodian transition page. The move flow and the same-custodian
// case (LPOA) follow grounding §18 (review decisions 12-13). Technical process
// facts are drawn from the DTCC ACATS primary source (the transfer rail Schwab
// uses) and the SEC; Schwab-specific timelines that could not be verified from
// Schwab's own documentation are kept generic rather than invented.
const props: CustodianLayoutProps = {
  custodian: 'Charles Schwab',
  shortName: 'Schwab',
  slug: 'schwab',
  h1: 'Move your book to Charles Schwab, repapered in days',
  subhead: 'Advisor transitions and ACATS transfers to Schwab, without the paperwork war room.',
  intro:
    'Bringing a book of business to Schwab means new-account applications, transfer of assets forms and firm paperwork for every household. Changing firms while staying at Schwab still means an LPOA and the full firm paperwork. That work is what turns a transition into a months-long project. FastTrackr collects the data once and prepares the forms so the move runs in days.',
  sameCustodianForm: 'LPOA',
  processIntro:
    'Accounts move to Schwab over the ACATS rail: the Automated Customer Account Transfer Service operated by DTCC, which automates and standardizes asset transfers between firms. Once the paperwork is signed, every transfer follows the same three steps.',
  processSteps: [
    {
      n: '1',
      title: 'Initiate',
      desc: 'As the receiving firm, Schwab submits a transfer-initiation request to NSCC/ACATS containing the customer detail the delivering firm needs to identify the account.',
    },
    {
      n: '2',
      title: 'Validate',
      desc: 'The delivering firm reviews the request and either rejects it or returns the detailed account asset data. This is the step where a mismatch sends the transfer back as NIGO.',
    },
    {
      n: '3',
      title: 'Settle',
      desc: 'Once validated, the assets are delivered and settle through DTCC infrastructure. A standard ACATS transfer runs about six business days end to end (SEC), with accelerated processing as few as four (DTCC).',
    },
  ],
  forms: [
    'Schwab new-account application, for each account and account type',
    'Beneficiary forms',
    'Servicing forms: options, margin, EFT and distributions',
    'ACAT transfer of assets form',
    'LPOA, when you change firms and keep Schwab as custodian',
    'Firm paperwork: advisory agreement, fee schedule, Form CRS and privacy policy',
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
    signatureNigoItem,
    {
      title: 'Registration does not match',
      desc: 'The account title and registration on the new Schwab paperwork must match the delivering firm’s records exactly. A middle initial, a trust date, or an ownership-type difference is a common rejection.',
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
      q: 'How does a move to Schwab work?',
      a: 'FastTrackr collects the data, creates the paperwork and puts it into DocuSign, and everything goes out for signature. Schwab then validates the paperwork, opens the accounts and initiates the ACAT through DTCC. Once the delivering firm or custodian accepts, everything settles. Repapering is the first step, and it sets off everything else.',
    },
    {
      q: 'Do I need to repaper if I change firms but stay at Schwab?',
      a: 'Yes. When you move to a new firm and keep Schwab as custodian, there is no ACAT. The step becomes a master account or G number change inside Schwab, which happens promptly. The Schwab form for this is the LPOA, and your new firm paperwork is still the full set. FastTrackr prepares both.',
    },
    {
      q: 'How long does it take to move a book to Schwab?',
      a: 'The ACATS transfer itself runs about six business days end to end (SEC), or as few as four with DTCC accelerated processing, once a request is validated. The full advisor transition, collecting data and preparing and signing the paperwork for every household, is what takes 90 days and sometimes longer. FastTrackr compresses that preparation work.',
    },
    {
      q: 'What is ACATS?',
      a: 'ACATS (Automated Customer Account Transfer Service) is the DTCC-operated system that automates and standardizes the transfer of customer assets between firms. It is the rail assets travel on when a book moves to Schwab.',
    },
    {
      q: 'What causes a Schwab transfer to be rejected as NIGO?',
      a: 'The most common causes are missing or mismatched signatures, a registration or title that does not match the delivering firm’s records, incomplete account or transfer details, and assets that cannot transfer in-kind. FastTrackr checks these fields before submission.',
    },
  ],
  ctaHeadline: 'Planning a move to Schwab? See exactly how your book would repaper.',
};

export default function SchwabCustodian() {
  return <CustodianLayout {...props} />;
}
