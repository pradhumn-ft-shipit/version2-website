import CustodianLayout, { type CustodianLayoutProps, signatureNigoItem } from './CustodianLayout';

// SEI custodian transition page (D2). SEI is a full-repaper custodian, handled the
// same way as Schwab and Fidelity (grounding §17). The move flow and the
// same-custodian case (Advisor Change form) follow grounding §18 (review
// decisions 12-13). Generic ACATS process facts are sourced to the SEC/DTCC;
// SEI-specific timelines and form versions are confirmed with SEI during onboarding.
const props: CustodianLayoutProps = {
  custodian: 'SEI',
  shortName: 'SEI',
  slug: 'sei',
  h1: 'Move your book to SEI, repapered in days',
  subhead: 'Advisor transitions and asset transfers onto SEI, without the paperwork war room.',
  intro:
    'Bringing a book of business to SEI means new-account applications, transfer of assets forms and firm paperwork for every household. Changing firms while staying at SEI still means an Advisor Change form and the full firm paperwork. That work is what turns a transition into a months-long project. FastTrackr collects the data once and prepares the forms so the move runs in days.',
  sameCustodianForm: 'Advisor Change form',
  processIntro:
    'Assets move to SEI over the ACATS rail: the Automated Customer Account Transfer Service operated by DTCC, which automates and standardizes asset transfers between firms. Once the paperwork is signed, every transfer follows the same three steps.',
  processSteps: [
    {
      n: '1',
      title: 'Initiate',
      desc: 'As the receiving custodian, SEI submits a transfer-initiation request to NSCC/ACATS with the customer detail the delivering firm needs to identify the account.',
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
    'SEI new-account application, for each account and account type',
    'Beneficiary forms',
    'Servicing forms: options, margin, EFT and distributions',
    'ACAT transfer of assets form',
    'Advisor Change form, when you change firms and keep SEI as custodian',
    'Firm paperwork: advisory agreement, fee schedule, Form CRS and privacy policy',
  ],
  processNote: (
    <>
      Sources: the SEC, which puts a standard ACATS transfer at about six business days
      (three for the delivering firm to validate or reject), and DTCC, the operator of ACATS,
      which offers accelerated processing in as few as four business days. SEI’s own
      processing windows and required forms vary by account type and are confirmed with SEI
      during onboarding.
    </>
  ),
  nigoItems: [
    signatureNigoItem,
    {
      title: 'Registration does not match',
      desc: 'The account title and registration on the new SEI paperwork must match the delivering firm’s records exactly. A middle initial, a trust date, or an ownership-type difference is a common rejection.',
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
      q: 'How does a move to SEI work?',
      a: 'FastTrackr collects the data, creates the paperwork and puts it into DocuSign, and everything goes out for signature. SEI then validates the paperwork, opens the accounts and initiates the ACAT through DTCC. Once the delivering firm or custodian accepts, everything settles. Repapering is the first step, and it sets off everything else.',
    },
    {
      q: 'Do I need to repaper if I change firms but stay at SEI?',
      a: 'Yes. When you move to a new firm and keep SEI as custodian, there is no ACAT. The step becomes a master account or G number change inside SEI, which happens promptly. The SEI form for this is the Advisor Change form, and your new firm paperwork is still the full set. FastTrackr prepares both.',
    },
    {
      q: 'How long does it take to move a book to SEI?',
      a: 'The ACATS transfer itself runs about six business days end to end (SEC), or as few as four with DTCC accelerated processing, once a request is validated. The full advisor transition, collecting data and preparing and signing the paperwork for every household, is what takes 90 days and sometimes longer. FastTrackr compresses that preparation work.',
    },
    {
      q: 'What is ACATS?',
      a: 'ACATS (Automated Customer Account Transfer Service) is the DTCC-operated system that automates and standardizes the transfer of customer assets between firms. It is the rail assets travel on when a book moves to SEI.',
    },
    {
      q: 'What causes an SEI transfer to be rejected as NIGO?',
      a: 'The most common causes are missing or mismatched signatures, a registration or title that does not match the delivering firm’s records, incomplete account or transfer details, and assets that cannot transfer in-kind. FastTrackr checks these fields before submission.',
    },
  ],
  ctaHeadline: 'Planning a move to SEI? See exactly how your book would repaper.',
};

export default function SEICustodian() {
  return <CustodianLayout {...props} />;
}
