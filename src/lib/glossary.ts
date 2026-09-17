// Canonical glossary data — the single source of truth for /glossary and every
// /glossary/<slug> term page (W3, website-visibility program).
//
// WHY A DATA MODULE (not markdown): the term set is small, curated, and
// YMYL-adjacent (regulatory/compliance terms must stay accurate), so it lives in
// one reviewable, type-checked file rather than the markdown blog pipeline. The
// glossary route + prerender enumeration read from here, exactly the way the
// blog/news/podcast routes read from their JSON indexes — so a term added here is
// prerendered on the next build with no route or config edit (see
// app/lib/prerenderPaths.ts → readGlossarySlugs).
//
// The heavy terms (NIGO, ACATS, repapering, Broker Protocol, OSJ, Reg BI) are
// seeded from how the existing library already uses them; the thin ones (TOA,
// PTE 2020-02, tuck-in, TIF) are net-new canonical definitions.

/**
 * Canonical name of the set — rendered as the index <h1>, the DefinedTermSet
 * `name`, and the `inDefinedTermSet.name` on every term page. One constant so
 * those never drift apart.
 */
export const GLOSSARY_SET_NAME = 'Advisor Transition & Wealth-Management Glossary';

export interface GlossaryPillar {
  label: string;
  href: string;
}

export interface GlossaryTerm {
  /** URL slug: /glossary/<slug>. Unique, kebab-case. */
  slug: string;
  /** Canonical display name / headword (e.g. "NIGO"). */
  term: string;
  /** Full expansion shown next to the headword (e.g. "Not In Good Order"). */
  expansion?: string;
  /** Alternate names / spellings — feed DefinedTerm and on-page "also called". */
  aka?: string[];
  /** Index grouping. */
  category: 'Transitions & transfers' | 'Compliance & regulation' | 'Firm & advisor structure';
  /**
   * Answer-first, one-sentence definition. Used verbatim as the index blurb, the
   * DefinedTerm.description in JSON-LD, and the page meta description — so keep it
   * self-contained and accurate.
   */
  short: string;
  /** Body paragraphs for the term page (answer-first, then context). */
  body: string[];
  /** Slugs of related terms (must resolve to another entry). */
  related: string[];
  /** The pillar / solution / ICP page this term maps to. */
  pillar?: GlossaryPillar;
}

const SOL_TRANSITIONS: GlossaryPillar = {
  label: 'Advisor Transitions',
  href: '/solutions/advisor-transitions',
};
const ICP_BREAKAWAY: GlossaryPillar = {
  label: 'For Breakaway Advisors',
  href: '/who-we-serve/breakaway-advisors',
};
const ICP_ACQUISITIVE: GlossaryPillar = {
  label: 'For Acquisitive RIAs',
  href: '/who-we-serve/acquisitive-rias',
};
const ICP_IBD: GlossaryPillar = {
  label: 'For Independent Broker-Dealers',
  href: '/who-we-serve/independent-broker-dealers',
};
const SOL_ONBOARDING: GlossaryPillar = {
  label: 'Client Onboarding',
  href: '/solutions/client-onboarding',
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'nigo',
    term: 'NIGO',
    expansion: 'Not In Good Order',
    aka: ['Not In Good Order', 'not-in-good-order'],
    category: 'Transitions & transfers',
    short:
      'NIGO ("Not In Good Order") is a paperwork submission a custodian or clearing firm rejects because it is incomplete, inconsistent, or missing a required signature, date, or document — so the account action cannot process until it is corrected and resubmitted.',
    body: [
      'NIGO stands for "Not In Good Order." A form is In Good Order (IGO) when everything the custodian needs is present and internally consistent; it is Not In Good Order when something is missing, mismatched, unsigned, or out of date, and the custodian sends it back instead of processing it.',
      'In an advisor transition, NIGO is the single biggest source of hidden delay. Every rejected form has to be found, fixed, re-sent to the client for signature where needed, and resubmitted — often days later, and sometimes more than once. A book with hundreds of accounts can stall for weeks on NIGO alone.',
      'Common NIGO triggers are a missing or mismatched signature, a name or address that does not match the custodian’s records, an incomplete transfer form, a missing account number, or a required disclosure that was never attached. The fix is to catch these before submission, not after the rejection comes back.',
      'FastTrackr validates each form against the receiving custodian’s rules before it is submitted, so most NIGO patterns are caught and corrected up front rather than surfacing as rejections that reset the clock.',
    ],
    related: ['acats', 'repapering', 'tif', 'toa'],
    pillar: SOL_TRANSITIONS,
  },
  {
    slug: 'acats',
    term: 'ACATS',
    expansion: 'Automated Customer Account Transfer Service',
    aka: ['Automated Customer Account Transfer Service'],
    category: 'Transitions & transfers',
    short:
      'ACATS (the Automated Customer Account Transfer Service) is the DTCC’s standardized system for transferring a client’s brokerage account — positions and cash — from one custodian or broker-dealer to another, on a standard six-business-day cycle.',
    body: [
      'ACATS, the Automated Customer Account Transfer Service, is operated by the National Securities Clearing Corporation (a DTCC subsidiary) and is the standard rails for moving a brokerage account between firms. The receiving firm initiates the transfer, the delivering firm validates it, and eligible assets move on a defined settlement cycle — standardly six business days from initiation.',
      'Most advisor-transition repapering ends in an ACATS transfer: once the new-account paperwork is In Good Order, the account is moved through ACATS to the new custodian. When something on the transfer is wrong, the account goes NIGO and the ACATS clock resets — which is why front-loading clean, validated paperwork matters so much to transition timelines.',
      'Not every position is ACATS-eligible; proprietary funds and certain products may need to be liquidated or transferred separately, which is one of the things a transition workflow has to plan for account by account.',
    ],
    related: ['nigo', 'repapering', 'tif', 'toa'],
    pillar: SOL_TRANSITIONS,
  },
  {
    slug: 'repapering',
    term: 'Repapering',
    aka: ['re-papering', 'repaper'],
    category: 'Transitions & transfers',
    short:
      'Repapering is the process of re-executing a client’s account paperwork — new-account forms, transfer authorizations, and disclosures — at a new firm or custodian after an advisor moves, so the book can be transferred and serviced under the new relationship.',
    body: [
      'When an advisor changes firms or custodians, the client’s existing accounts do not simply follow them. Each account has to be re-opened and re-authorized at the new home: new-account applications, transfer forms, beneficiary and disclosure documents, and any firm-specific paperwork all have to be completed and signed again. That end-to-end re-execution is repapering.',
      'How much repapering a move requires depends on whether the custodian changes. In an *internal repaper* — a same-custodian move where only the advisor’s firm or affiliation changes — the assets stay put and the custodian-side paperwork can be as light as a change-of-advisor form. In a *re-custody* move, the accounts move to a new custodian, so the full set applies: new-account forms, beneficiary and servicing forms, and an ACATS transfer that actually relocates the assets. Either way, the firm-side paperwork (advisory agreement, fee schedule, disclosures) still has to be re-executed.',
      'Repapering is the operational heart of an advisor transition, and it is where books either move in weeks or drag on for months. The volume multiplies fast — every household, every account type, and every custodian variation adds forms — and a single NIGO rejection on any of them can send that account back to the start.',
      'FastTrackr compresses repapering by collecting client data once, pre-filling every form, validating each submission against the receiving custodian’s rules, and routing it for e-signature — so the book repapers in a fraction of the manual timeline.',
    ],
    related: ['acats', 'nigo', 'broker-protocol', 'toa'],
    pillar: SOL_TRANSITIONS,
  },
  {
    slug: 'broker-protocol',
    term: 'Broker Protocol',
    expansion: 'Protocol for Broker Recruiting',
    aka: ['Protocol for Broker Recruiting', 'the Protocol'],
    category: 'Transitions & transfers',
    short:
      'The Broker Protocol (formally the Protocol for Broker Recruiting) is a voluntary agreement among member firms that lets a departing advisor take a limited, defined set of client contact information to a new firm without triggering litigation, provided they follow its steps.',
    body: [
      'The Protocol for Broker Recruiting — usually just "the Broker Protocol" — is an inter-firm agreement established in 2004 to reduce recruiting-related lawsuits. When both the departing and receiving firms are signatories, an advisor who follows the Protocol can take a specified set of client contact details (name, address, phone, email, and account title) and solicit those clients at the new firm. Not all firms are members.',
      'Whether a move is a Protocol move or a non-Protocol move changes what information can travel and how the transition is handled. Protocol moves are more predictable; non-Protocol moves are more constrained and require extra care around what data can be used and a clean audit trail.',
      'The Protocol governs what an advisor may take, not how the accounts get rebuilt — the client paperwork still has to be repapered and the assets still move through ACATS at the new custodian.',
    ],
    related: ['breakaway-advisor', 'repapering', 'reg-bi'],
    pillar: ICP_BREAKAWAY,
  },
  {
    slug: 'osj',
    term: 'OSJ',
    expansion: 'Office of Supervisory Jurisdiction',
    aka: ['Office of Supervisory Jurisdiction'],
    category: 'Compliance & regulation',
    short:
      'An OSJ (Office of Supervisory Jurisdiction) is a branch office a broker-dealer designates as responsible for supervising the activities of registered representatives and other, often smaller, offices under FINRA supervision rules.',
    body: [
      'Under FINRA rules, an Office of Supervisory Jurisdiction is a location where certain supervisory functions happen — approving new accounts, reviewing and endorsing transactions, maintaining customer records, and supervising the registered reps assigned to it and to the branches beneath it.',
      'For an advisor affiliating with an independent broker-dealer, the OSJ is the supervisory home for their business, and the OSJ arrangement shapes how paperwork is reviewed and approved. Larger OSJs supervise many downstream offices, which is part of why clean, consistent transition paperwork matters at scale.',
    ],
    related: ['reg-bi', 'broker-protocol'],
    pillar: ICP_IBD,
  },
  {
    slug: 'reg-bi',
    term: 'Reg BI',
    expansion: 'Regulation Best Interest',
    aka: ['Regulation Best Interest', 'Reg. BI'],
    category: 'Compliance & regulation',
    short:
      'Reg BI (Regulation Best Interest) is the SEC rule requiring broker-dealers and their representatives to act in a retail customer’s best interest when recommending securities or account types, and to disclose and manage conflicts of interest.',
    body: [
      'Regulation Best Interest, adopted by the SEC, raised the standard of conduct for broker-dealers when they make recommendations to retail customers. Rather than the older suitability standard, a recommendation must be in the customer’s best interest at the time it is made, and the firm must address the conflicts of interest around it.',
      'Reg BI matters in transitions and onboarding because recommending a move — a new account type, a rollover, or a change in products — is itself a recommendation that has to be documented and justified. Clean disclosure and a defensible record are part of doing a transition the right way.',
      'This entry is a plain-language summary, not legal or compliance advice; firms should follow their own compliance guidance and the SEC’s rule text.',
    ],
    related: ['pte-2020-02', 'osj'],
    pillar: SOL_TRANSITIONS,
  },
  {
    slug: 'toa',
    term: 'TOA',
    expansion: 'Transfer of Assets',
    aka: ['Transfer of Assets', 'asset transfer'],
    category: 'Transitions & transfers',
    short:
      'A TOA (Transfer of Assets) is the movement of a client’s assets from one financial institution to another; in brokerage transitions a TOA is typically executed through ACATS.',
    body: [
      'Transfer of Assets is the umbrella term for moving a client’s holdings — brokerage positions, cash, and sometimes retirement or advisory assets — from a delivering institution to a receiving one. In the advisor-transition context, a TOA is the actual asset move that follows the repapering.',
      'For standard brokerage accounts, the TOA runs through ACATS. Other account types or non-transferable products may move through separate processes, so a transition plan tracks, per account, how each TOA will actually be executed and what could send it NIGO.',
    ],
    related: ['acats', 'repapering', 'tif', 'nigo'],
    pillar: SOL_TRANSITIONS,
  },
  {
    slug: 'tif',
    term: 'TIF',
    expansion: 'Transfer Initiation Form',
    aka: ['Transfer Initiation Form'],
    category: 'Transitions & transfers',
    short:
      'A TIF (Transfer Initiation Form) is the form the receiving firm submits to start an ACATS transfer; errors on the TIF are a common source of NIGO rejections.',
    body: [
      'The Transfer Initiation Form is what kicks off an account transfer: the receiving firm completes it with the client’s delivering-firm account details and submits it to begin the ACATS process. The delivering firm then validates the request against its records.',
      'Because the TIF is the hand-off point between two firms’ records, small mismatches — a wrong account number, a name that does not match the delivering firm’s registration, a missing signature — are exactly what turn into NIGO rejections and reset the transfer clock. Getting the TIF right the first time is one of the highest-leverage steps in a clean transfer.',
    ],
    related: ['acats', 'nigo', 'toa'],
    pillar: SOL_TRANSITIONS,
  },
  {
    slug: 'pte-2020-02',
    term: 'PTE 2020-02',
    expansion: 'Prohibited Transaction Exemption 2020-02',
    aka: ['Prohibited Transaction Exemption 2020-02', 'DOL PTE 2020-02'],
    category: 'Compliance & regulation',
    short:
      'PTE 2020-02 is a U.S. Department of Labor prohibited-transaction exemption that lets financial institutions and advisors receive otherwise-prohibited compensation for fiduciary investment advice on retirement accounts — most notably rollover recommendations — when they meet its conditions.',
    body: [
      'Prohibited Transaction Exemption 2020-02 is a Department of Labor exemption tied to fiduciary advice on retirement assets covered by ERISA and the Internal Revenue Code. Absent an exemption, an advisor receiving compensation on such advice could be engaging in a prohibited transaction; PTE 2020-02 provides a path to receive that compensation if its conditions are met.',
      'Its conditions include meeting Impartial Conduct Standards, providing certain disclosures, adopting policies and procedures to manage conflicts, and — importantly for transitions — documenting the specific reasons a rollover recommendation is in the client’s best interest.',
      'This entry is a plain-language summary, not legal, tax, or compliance advice. The DOL’s exemption text and a firm’s own compliance program govern how PTE 2020-02 applies in practice.',
    ],
    related: ['reg-bi'],
    pillar: SOL_ONBOARDING,
  },
  {
    slug: 'tuck-in',
    term: 'Tuck-in',
    expansion: 'Tuck-in model',
    aka: ['tuck-in model', 'tuck-in acquisition', 'tuck in'],
    category: 'Firm & advisor structure',
    short:
      'A tuck-in is an arrangement where a smaller advisory practice operates under an existing RIA’s registration — adopting its Form ADV, compliance, technology, and back office — rather than running as a standalone firm.',
    body: [
      'In the tuck-in model, an advisor or small team joins an existing RIA and operates under that firm’s registration and compliance framework instead of maintaining their own — skipping their own Form ADV filing and the SEC registration wait. It is a common path for advisors who want independence from a wirehouse without the overhead of building and running a firm.',
      'Operationally, a tuck-in still requires repapering the incoming book onto the acquiring firm’s custodian and systems — the same data collection, form-filling, and ACATS transfers as any other transition, just absorbed by the acquirer’s operations team. Doing that without adding headcount is exactly where transition automation earns its keep.',
    ],
    related: ['breakaway-advisor', 'repapering'],
    pillar: ICP_ACQUISITIVE,
  },
  {
    slug: 'breakaway-advisor',
    term: 'Breakaway advisor',
    aka: ['breakaway broker', 'going independent'],
    category: 'Firm & advisor structure',
    short:
      'A breakaway advisor is an advisor who leaves a wirehouse or large broker-dealer to launch or join an independent RIA, taking their practice independent.',
    body: [
      'A breakaway advisor is one who "breaks away" from an employee-model firm — typically a wirehouse — to operate independently, either by founding their own RIA, joining an existing one, or affiliating with an independent broker-dealer. The draw is usually ownership, flexibility, and economics; the friction is the transition itself.',
      'Going independent means moving the book: repapering every client account onto a new custodian and, where the move is a Protocol move, taking the limited client information the Broker Protocol allows. The speed and cleanliness of that repapering largely determines how much of the book actually comes across.',
    ],
    related: ['broker-protocol', 'tuck-in', 'repapering'],
    pillar: ICP_BREAKAWAY,
  },
];

/** Fast slug → term lookup. */
const bySlug = new Map<string, GlossaryTerm>(glossaryTerms.map((t) => [t.slug, t]));

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return bySlug.get(slug);
}

/** Headword with its expansion — the form used in titles, meta, and JSON-LD. */
export function displayName(term: GlossaryTerm): string {
  return term.expansion ? `${term.term} (${term.expansion})` : term.term;
}

/** Every slug — the source the prerender enumerator reads (zero-touch). */
export const glossarySlugs: string[] = glossaryTerms.map((t) => t.slug);

/** Resolve a term's related slugs to full entries (skips any that don't resolve). */
export function relatedTerms(term: GlossaryTerm): GlossaryTerm[] {
  return term.related.map((slug) => bySlug.get(slug)).filter((t): t is GlossaryTerm => Boolean(t));
}

/** Distinct categories in display order (first-seen order across the term list). */
export const glossaryCategories: GlossaryTerm['category'][] = Array.from(
  new Set(glossaryTerms.map((t) => t.category)),
);
