/*
 * "The $100M Line" — FastTrackr Research, Edition 2.1 (October 2026).
 *
 * Every figure here is copied from the locked report package in
 * reports/research/versions/v2.1_2026-10-05/ (report/copy_v2.md and the chart
 * values in report/panels/*.json). Observed counts are exact; modeled figures
 * carry "~" and are labelled Estimated on the page. Do not edit numbers here
 * without a new report version.
 */

export const REPORT_PDF = '/downloads/fasttrackr-fidelity-100m-line-report.pdf';
export const METHODOLOGY_PDF = '/downloads/fasttrackr-fidelity-100m-line-methodology.pdf';

export const DEADLINE_ISO = '2027-06-30';
export const PUBLISHED_ISO = '2026-10-05';

export const HEADLINE_STATS = [
  { value: '1,087', label: 'Advisory firms below the $100M line at Fidelity' },
  { value: '$40.5B', label: 'Client assets those firms hold at Fidelity' },
  { value: '393', label: 'Fidelity-only firms that must open a new custodian' },
  { value: '~$33–39B', label: 'Estimated to leave Fidelity, across four scenarios', estimated: true },
] as const;

export const TAKEAWAYS = [
  {
    title: "Nearly half of Fidelity's small-firm users fall short.",
    body: '1,087 of the 2,286 firms in our study that use Fidelity hold less than $100M there. That count is a floor.',
  },
  {
    title: 'Two kinds of firm face two different jobs.',
    body: '708 small firms keep almost everything at Fidelity. 379 larger firms keep only a small slice there.',
  },
  {
    title: '393 firms have no second custodian.',
    body: 'They must open a new one from scratch. The other 694 can fold their Fidelity accounts into a custodian they already use.',
  },
  {
    title: 'Most of the money goes to Schwab.',
    body: 'An estimated $33–39B leaves Fidelity in every scenario we tested, and ~$24–27B of it lands at Schwab.',
  },
  {
    title: 'Paperwork is the real limit, and it lands in tax season.',
    body: 'We estimate ~376,000 documents (range 244,000–564,000). For a typical small firm, client signatures fall between March and May 2027.',
  },
] as const;

export const KNOWN_UNKNOWNS = [
  { q: 'Custody ends below $100M held at Fidelity', status: 'Confirmed' },
  { q: 'Deadline is June 30, 2027', status: 'Confirmed' },
  { q: 'Only assets at Fidelity count', status: 'Reported from the letter' },
  { q: 'Same rule already applied to new firms', status: 'Confirmed' },
  { q: 'Number of firms affected', status: 'Not disclosed by Fidelity' },
  { q: 'Fee-to-stay option or exceptions', status: 'None reported' },
  { q: 'Firms that reach Fidelity through an introducing broker', status: 'Unclear' },
  { q: 'Assets pooled at a network level', status: 'Unclear' },
] as const;

/** Fig 3a — key dates. */
export const TIMELINE = {
  start: '2026-10-01',
  end: '2027-06-30',
  taxSeason: ['2027-02-01', '2027-04-15'] as const,
  marks: [
    { date: '2026-10-01', label: 'Letters arrive' },
    { date: '2026-10-05', label: 'This report' },
    { date: '2027-03-31', label: 'Form ADV update due' },
    { date: '2027-06-30', label: 'Custody ends', emphasis: true },
  ],
};

/** Fig 4a. */
export const FUNNEL = [
  { label: 'Retail RIAs under $1B that report a custodian', value: 16332 },
  { label: 'List Fidelity as a custodian', value: 2286 },
  { label: 'Hold under $100M at Fidelity', value: 1087, emphasis: true },
] as const;

/** Fig 4b — affected firms by dollars held at Fidelity. */
export const DOLLAR_BANDS = [
  { band: 'Under $10M', firms: 332, usdPct: 0.0297 },
  { band: '$10–25M', firms: 151, usdPct: 0.0622 },
  { band: '$25–50M', firms: 226, usdPct: 0.2049 },
  { band: '$50–75M', firms: 186, usdPct: 0.2859 },
  { band: '$75–100M', firms: 192, usdPct: 0.4173 },
] as const;

/** Fig 4c — top states (n=1,087; 51 firms have no mapped state). */
export const TOP_STATES = [
  { state: 'California', firms: 132 },
  { state: 'Texas', firms: 108 },
  { state: 'Florida', firms: 91 },
  { state: 'New York', firms: 68 },
  { state: 'Massachusetts', firms: 53 },
  { state: 'Michigan', firms: 41 },
  { state: 'Ohio', firms: 40 },
  { state: 'Pennsylvania', firms: 32 },
  { state: 'Colorado', firms: 32 },
  { state: 'Virginia', firms: 31 },
] as const;

/** Fig 5a — medians by segment. */
export const SEGMENTS = [
  { metric: 'Firms', small: '708', larger: '379' },
  { metric: '$ held at Fidelity', small: '$20.8B', larger: '$19.7B' },
  { metric: 'Median share of assets at Fidelity', small: '99%', larger: '25%', smallPct: 0.99, largerPct: 0.25 },
  { metric: 'Median clients per firm', small: '~45', larger: '~157' },
] as const;

export const PERSONAS = {
  jordan: {
    name: 'Jordan',
    tagline: 'The $50M solo planner',
    facts: [
      { k: 'Firm AUM', v: '~$50M' },
      { k: 'At Fidelity', v: '~$48M' },
      { k: 'Second custodian', v: 'None' },
      { k: 'Clients', v: '59 (~51 households)' },
      { k: 'Accounts', v: '~128' },
      { k: 'Documents', v: '~386', est: true },
    ],
    body: "Jordan runs a one-person, state-registered practice and keeps nearly everything at Fidelity, the firm's only custodian. There is nothing to consolidate. Every account must be opened somewhere new and moved: ~386 documents (Estimated; range 228–620).",
    builtFrom:
      'Built from the 75 Fidelity-only affected firms with $40–60M under management. 67 are state-registered; 56 have two or fewer employees.',
  },
  riley: {
    name: 'Riley',
    tagline: 'The larger firm with a small Fidelity slice',
    facts: [
      { k: 'Firm AUM', v: '~$212M' },
      { k: 'At Fidelity', v: '~$49M (21%)' },
      { k: 'At Schwab', v: '~$135M' },
      { k: 'Team', v: '5 people' },
      { k: 'Clients with Fidelity assets', v: '~33 of ~168' },
      { k: 'Documents', v: '~145', est: true },
    ],
    body: 'Riley can fold its Fidelity accounts into Schwab, where it already works. That is ~29 households, ~72 accounts and ~145 documents (Estimated; range 102–200).',
    builtFrom: 'Built from the 254 larger affected firms whose main other custodian is Schwab.',
  },
} as const;

/** Fig 6a — firms by move type and segment. */
export const MOVE_TYPES = [
  { label: 'Already has a second custodian', note: 'Consolidate', small: 359, larger: 335, total: 694 },
  { label: 'Fidelity-only', note: 'Open a new custodian', small: 349, larger: 44, total: 393 },
] as const;

/** Fig 6b — largest other custodian among the 694. */
export const BACKUP_CUSTODIAN = [
  { name: 'Schwab', firms: 480 },
  { name: 'Altruist (Vanguard)', firms: 40 },
  { name: 'Interactive Brokers', firms: 25 },
  { name: 'AssetMark', firms: 12 },
  { name: 'SEI', firms: 11 },
  { name: 'All others', firms: 126 },
] as const;

/** Fig 7a — base-case destinations of the $40.5B, in $B (Estimated). */
export const DESTINATIONS = [
  { name: 'Schwab', usdB: 25.9 },
  { name: 'Other existing custodians', usdB: 4.6, note: 'Raymond James, Axos, Pershing, LPL and others' },
  { name: 'Altruist (Vanguard)', usdB: 4.3 },
  { name: 'Interactive Brokers', usdB: 2.0 },
  { name: 'Stays at Fidelity via a host firm', usdB: 2.0, stays: true },
  { name: 'Schwab, via a host firm', usdB: 1.1 },
  { name: 'SEI', usdB: 0.6 },
  { name: 'Goldman Sachs Advisor Solutions', usdB: 0.06, display: '<$0.1B' },
] as const;

/** Fig 7b — leaves vs stays by scenario, $B (Estimated). */
export const SCENARIOS = [
  { name: 'Base case', leaves: 38.5, stays: 2.0 },
  { name: 'More firms join larger firms', leaves: 37.0, stays: 3.5 },
  { name: 'Early Savvy route', leaves: 37.6, stays: 2.9 },
  { name: 'Larger firms consolidate into Fidelity', leaves: 34.1, stays: 6.4 },
] as const;

/** P8 custodian landscape. */
export const CUSTODIANS = [
  {
    name: 'Schwab',
    share: '67%',
    cohortFrom: 66.3,
    cohortTo: 64.7,
    cohort: '66% → 65%',
    minimum: 'None',
    courting: 'Yes, explicit',
  },
  {
    name: 'Fidelity',
    share: '14%',
    cohortFrom: 8.5,
    cohortTo: 6.2,
    cohort: '8.5% → 6.2%',
    minimum: '$100M at Fidelity',
    courting: 'n/a',
  },
  {
    name: 'Altruist (Vanguard)',
    share: '8%',
    cohortFrom: 9.5,
    cohortTo: 22.1,
    cohort: '9.5% → 22.1%',
    minimum: 'None',
    courting: 'Yes, explicit',
  },
  {
    name: 'Interactive Brokers',
    share: '8%',
    cohortFrom: 13.9,
    cohortTo: 9.3,
    cohort: '13.9% → 9.3%',
    minimum: 'None',
    courting: 'Factual only',
  },
  {
    name: 'SEI',
    share: '2%',
    cohortFrom: 2.3,
    cohortTo: 1.5,
    cohort: '2.3% → 1.5%',
    minimum: 'None found',
    courting: 'None found',
  },
  {
    name: 'Goldman Sachs Advisor Solutions',
    share: 'under 1%',
    cohortFrom: 1.1,
    cohortTo: 0.3,
    cohort: '~1.1% → 0.3%',
    minimum: 'Not disclosed',
    courting: 'None found',
  },
  {
    name: 'Betterment (not modeled)',
    share: '1%',
    cohortFrom: 1.9,
    cohortTo: 1.9,
    cohort: '1.9% → 1.9%',
    minimum: 'None',
    courting: 'Factual only',
  },
] as const;

/** Fig 9a — documents per account (Estimated). */
export const DOCS_PER_ACCOUNT = [
  { move: 'Consolidate', custodian: 2.0, firm: 0 },
  { move: 'Open a new custodian', custodian: 3.0, firm: 0 },
  { move: 'Join a firm, keep Fidelity', custodian: 1.0, firm: 1.6 },
  { move: 'Join a firm at Schwab', custodian: 3.0, firm: 1.6 },
] as const;

/** Fig 9b — total paperwork, base case (Estimated). */
export const PAPERWORK = {
  households: '~58,000',
  accounts: '~146,000',
  documents: '~376,000',
  range: '244,000–564,000',
  conversations: '~151,000',
  byMove: [
    { move: 'Open a new custodian', docs: 203655 },
    { move: 'Consolidate', docs: 132844 },
    { move: 'Join a larger firm', docs: 39629 },
  ],
} as const;

/** Fig 9c — Jordan's nine months (illustrative dates, Estimated). */
export const JORDAN_PLAN = {
  start: '2026-10-01',
  end: '2027-06-30',
  steps: [
    { start: '2026-10-01', end: '2026-11-30', label: 'Decide the path' },
    { start: '2026-12-01', end: '2027-02-01', label: 'Sign up with the new custodian' },
    { start: '2027-01-15', end: '2027-03-01', label: 'Collect data, prepare forms' },
    { start: '2027-03-01', end: '2027-05-15', label: 'Client meetings and signatures' },
    { start: '2027-05-01', end: '2027-06-15', label: 'Transfers in waves' },
  ],
  fasttrackrSpan: ['2027-01-15', '2027-05-01'] as const,
  taxSeason: ['2027-02-01', '2027-04-15'] as const,
};

export const PATHS = [
  {
    name: 'Consolidate',
    sub: 'into a custodian already in use',
    fit: 'Firms with a second custodian',
    firms: '694',
    paperwork: '~2 forms per account',
    keepsFidelity: 'No. But 307 could move other assets into Fidelity and stay.',
    risk: 'Clients asked to move for a reason that is not theirs',
  },
  {
    name: 'Open a new custodian',
    sub: 'start a fresh custody relationship',
    fit: 'Fidelity-only firms',
    firms: '393',
    paperwork: '~3 forms per account, plus a firm agreement',
    keepsFidelity: 'No',
    risk: 'Longest setup; signatures in tax season',
  },
  {
    name: 'Join a larger firm',
    sub: 'give up your own registration',
    fit: 'Owners ready to give up their own registration',
    firms: 'Any. ~12% of Fidelity-only firms in our base case (Estimated)',
    paperwork: '~1 form per account, plus 4 firm documents per household',
    keepsFidelity: 'Yes, if the host uses Fidelity',
    risk: 'Loss of independence. Few hosts take books under $100M.',
  },
  {
    name: 'Wait for an alternative',
    sub: 'e.g. Savvy, on Fidelity clearing',
    fit: 'Firms willing to bet on an unconfirmed route',
    firms: 'Unknown',
    paperwork: 'Treated like a new custodian',
    keepsFidelity: 'Possibly, on Fidelity clearing',
    risk: 'Fidelity has not confirmed it. Onboarding opens early-to-mid 2027.',
  },
] as const;

/** Fig 10b — Jordan's documents by path (Estimated; low/base/high). */
export const JORDAN_PATHS = [
  { path: 'Join a larger firm that keeps Fidelity', low: 272, base: 333, high: 413 },
  { path: 'Open a new custodian', low: 228, base: 386, high: 620 },
  { path: 'Wait for Savvy (if confirmed)', low: 228, base: 386, high: 620 },
  { path: 'Join a larger firm at Schwab', low: 408, base: 590, high: 856 },
] as const;

export const ACTION_PLAN = [
  {
    phase: 'Decide',
    window: 'Oct–Nov 2026',
    steps: [
      { by: 'Oct 31, 2026', text: 'Confirm the number held at Fidelity, not total assets under management.' },
      {
        by: 'Oct 31, 2026',
        text: 'List every household, account and account type, with beneficiaries, bank links and standing instructions.',
      },
      {
        by: 'Nov 15, 2026',
        text: 'Ask Fidelity, in writing, how offboarding works and whether any network or broker route changes the picture.',
      },
      {
        by: 'Nov 30, 2026',
        text: 'Choose a path. Compare fees, minimums, technology links and written transition support.',
      },
    ],
  },
  {
    phase: 'Prepare',
    window: 'Dec 2026–Feb 2027',
    steps: [
      { by: 'Dec 15, 2026', text: 'Sign the custody agreement and connect CRM, billing, trading and reporting.' },
      { by: 'Jan 15, 2027', text: 'Update Form ADV Part 2A, the advisory agreement and Form CRS where needed.' },
      {
        by: 'Feb 1, 2027',
        text: 'Tell clients early, in a short letter. Order households from simplest to most complex.',
      },
    ],
  },
  {
    phase: 'Sign and move',
    window: 'Mar–Jun 2027',
    steps: [
      { by: 'Mar 1, 2027', text: 'Prepare every form before the first meeting, to cut rejected paperwork.' },
      { by: 'May 15, 2027', text: 'Finish signatures. Use e-signature where the custodian accepts it.' },
      { by: 'Jun 15, 2027', text: 'Transfer in waves, fix rejects, and confirm cost basis and standing instructions.' },
    ],
  },
] as const;

export const FAQS = [
  {
    q: 'Does total assets under management count toward the $100M?',
    a: 'No. The letter, as reported, counts only assets held at Fidelity.',
  },
  {
    q: 'Can a firm near the line move assets in and stay?',
    a: 'Yes, if it has assets elsewhere. 307 affected firms would clear $100M if they moved their other custodied assets to Fidelity.',
  },
  {
    q: 'Can a firm stay through Savvy?',
    a: 'Not yet known. Fidelity has not said whether its test applies to firms that reach it through an introducing broker.',
  },
  {
    q: 'What happens after June 30, 2027?',
    a: 'Fidelity says the custody relationship ends. It has not published offboarding details, so firms should ask in writing.',
  },
  {
    q: 'How many RIAs are affected by the Fidelity $100M custody minimum?',
    a: 'Our analysis of SEC Form ADV filings finds 1,087 retail advisory firms under $1B that hold less than $100M at Fidelity, together holding $40.5B there. Because Form ADV lists only custodians holding 10% or more of a firm’s separately managed assets, that count is a floor.',
  },
];

export type Source = { label: string; url: string };

export const SOURCES: Source[] = [
  {
    label: 'AdvisorHub, “Fidelity to Drop RIAs Below $100M Custody Minimum,” 2026-10-01',
    url: 'https://www.advisorhub.com/fidelity-to-drop-rias-below-100m-custody-minimum/',
  },
  {
    label: 'Financial Planning, “Fidelity says it will end custody relationships with RIAs under $100M,” 2026-10-01',
    url: 'https://www.financial-planning.com/news/fidelity-says-it-will-end-custody-relationships-with-rias-under-100m',
  },
  {
    label: 'Financial Advisor Magazine, “Fidelity To Small RIAs: Find Another Custodian,” 2026-10-01',
    url: 'https://www.fa-mag.com/news/fidelity-to-small-rias--drop-dead-88684.html',
  },
  {
    label: 'WealthManagement.com, “Fidelity to Raise Custody Asset Minimum to $100M,” 2026-10-01',
    url: 'https://www.wealthmanagement.com/ria-news/fidelity-to-raise-custody-asset-minimum-to-100m',
  },
  {
    label: 'Winthrop & Co., “Fidelity’s $100M Custody Minimum for RIAs: Your Four Options,” 2026-10-02',
    url: 'https://winthropco.com/insights/fidelity-100-million-ria-custody-minimum',
  },
  {
    label: 'InvestmentNews, “Fidelity zaps more RIAs with fee,” 2013-10-09',
    url: 'https://www.investmentnews.com/ria-news/fidelity-zaps-more-rias-with-fee/54104',
  },
  {
    label: 'PlanAdviser, “Raymond James Ups AUM Requirement for New RIAs,” 2009-10-29',
    url: 'https://www.planadviser.com/raymond-james-ups-aum-requirement-for-new-rias',
  },
  {
    label: 'WealthManagement.com, “Tech-Based Custodian Altruist Sells to Vanguard,” 2026-08-26',
    url: 'https://www.wealthmanagement.com/advisor-support-platforms/tech-based-custodian-altruist-sells-to-vanguard',
  },
  {
    label: 'Business Wire, “Savvy Wealth Announces the Launch of Savvy Custodial Platform,” 2026-09-23',
    url: 'https://secure.businesswire.com/news/home/20260923656434/en/',
  },
  {
    label: 'AdvisorHub, “Savvy Wealth to Offer Fidelity-Based ‘Custody’ Platform to Outside RIAs,” 2026-09-23',
    url: 'https://www.advisorhub.com/savvy-wealth-to-offer-fidelity-based-custody-platform-to-outside-rias/',
  },
  {
    label: 'Financial Planning, “Why SEI’s 0.10% custody fee stands out from giant custody rivals,” 2026-07-21',
    url: 'https://www.financial-planning.com/news/why-seis-0-10-custody-fee-stands-out-from-giant-custody-rivals',
  },
  {
    label: 'Financial Planning, “IBKR’s custody pitch to RIAs focuses on low fees, growth potential,” 2026-09-09',
    url: 'https://www.financial-planning.com/news/ibkrs-ria-custody-pitch-focuses-on-low-fees-growth',
  },
  {
    label: 'Financial Planning, “For RIA custody, Betterment’s platform fees will begin at 0.20%,” 2026-09-28',
    url: 'https://www.financial-planning.com/news/for-ria-custody-betterments-platform-fees-begin-at-0-20',
  },
];
