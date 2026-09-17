import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { m } from '../lib/motion';
import {
  Calculator,
  Clock,
  AlertTriangle,
  TrendingDown,
  Sparkles,
  CalendarClock,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Database,
  Building2,
  BookOpen,
} from 'lucide-react';

/*
 * "Cost of repapering your book" calculator (W6, T2-4).
 *
 * Pure client-side compute — NO backend, NO email gate. Inputs are kept as raw
 * strings in state so a field can be cleared to empty (a numeric state would
 * coerce an empty field back to "0"); numOf() parses to a number for the math.
 * First (server-prerendered) render is deterministic and hydrates without
 * mismatch — no window / localStorage is read during render.
 *
 * ── INTERNAL MODELING CONSTANTS (never shown to the user) ──
 * Leadership-set assumptions (2026-09-17). The page shows NO assumptions
 * breakdown and NO FastTrackr price; the saving is a single CONSERVATIVE floor.
 * These performance figures still carry the same substantiation question as
 * elsewhere — keep the legal check on performance claims before the WZ go-live.
 */

const REWORK_HOURS_PER_ERROR = 1.5; // ops rework hours per NIGO item
const OPS_TIME_SAVING = 0.75; // ops hours + repaper window: 75% faster
const NIGO_REDUCTION = 0.95; // NIGO / error rework: reduced by 95%

// FastTrackr cost per account — NEVER surfaced. Conservative single value so the
// saving is stated as a floor (no range).
const FT_COST_PER_ACCOUNT = 35;

type Field = {
  key: string;
  label: string;
  hint?: string;
  suffix?: string;
  prefix?: string;
  /** AUM entered in $000s: user edits the thousands, a static ",000" trails. */
  inThousands?: boolean;
  group: 'primary' | 'advanced';
  min: number;
  step: number;
};

const FIELDS: Field[] = [
  { key: 'accounts', label: 'Accounts / households to transition', group: 'primary', min: 1, step: 1 },
  {
    key: 'avgAum',
    label: 'Average AUM per account',
    prefix: '$',
    suffix: ',000',
    inThousands: true,
    group: 'primary',
    min: 0,
    step: 1,
  },
  { key: 'feeBillingRate', label: 'Fee billing %', suffix: '%', group: 'primary', min: 0, step: 0.05 },
  { key: 'daysToRepaper', label: 'Current days to complete a repaper', suffix: 'days', group: 'advanced', min: 1, step: 1 },
  { key: 'nigoRate', label: 'Current NIGO / error rate', suffix: '%', group: 'advanced', min: 0, step: 1 },
  {
    key: 'opsHoursPerAccount',
    label: 'Ops hours spent per account',
    hint: 'Everything hands-on per account — data collection, form prep, repapering, and follow-up.',
    suffix: 'hrs',
    group: 'advanced',
    min: 0,
    step: 0.5,
  },
  { key: 'loadedHourlyCost', label: 'Loaded hourly cost of ops staff', prefix: '$', suffix: '/hr', group: 'advanced', min: 0, step: 1 },
];

// Raw-string defaults (avgAum is in $000s → "200" means $200,000).
const DEFAULTS: Record<string, string> = {
  accounts: '500',
  avgAum: '200',
  feeBillingRate: '1',
  daysToRepaper: '45',
  nigoRate: '10',
  opsHoursPerAccount: '3',
  loadedHourlyCost: '50',
};

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});
const num = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const num1 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });

function fmtUsd(n: number): string {
  if (!Number.isFinite(n)) return '$0';
  return usd.format(Math.round(n));
}
function fmtNum(n: number): string {
  if (!Number.isFinite(n)) return '0';
  return num.format(Math.round(n));
}
function fmtNum1(n: number): string {
  if (!Number.isFinite(n)) return '0';
  return num1.format(n);
}

// Keep only digits and a single decimal point, and strip a leading zero when it
// precedes another digit ("05" → "5") while still allowing a real decimal
// ("0.5" stays, a lone "0" stays).
function sanitizeNumeric(raw: string): string {
  let s = raw.replace(/[^\d.]/g, '');
  const dot = s.indexOf('.');
  if (dot !== -1) {
    s = s.slice(0, dot + 1) + s.slice(dot + 1).replace(/\./g, '');
  }
  return s.replace(/^0+(?=\d)/, '');
}

export default function CostOfRepapering() {
  const [values, setValues] = useState<Record<string, string>>(DEFAULTS);

  const setField = (key: string, raw: string) => {
    setValues((v) => ({ ...v, [key]: sanitizeNumeric(raw) }));
  };
  // Parse a field to a number for the math; empty / invalid → 0.
  const numOf = (key: string): number => {
    const v = Number(values[key]);
    return Number.isFinite(v) ? v : 0;
  };

  const accounts = numOf('accounts');
  const avgAum = numOf('avgAum') * 1000; // entered in $000s
  const feeBillingRate = numOf('feeBillingRate');
  const daysToRepaper = numOf('daysToRepaper');
  const nigoRate = numOf('nigoRate');
  const opsHoursPerAccount = numOf('opsHoursPerAccount');
  const loadedHourlyCost = numOf('loadedHourlyCost');

  // ── Current-state cost of manual repapering ──
  const totalOpsHours = accounts * opsHoursPerAccount;
  const laborCost = totalOpsHours * loadedHourlyCost;

  const errorCount = accounts * (nigoRate / 100);
  const reworkCost = errorCount * REWORK_HOURS_PER_ERROR * loadedHourlyCost;

  const totalAum = accounts * avgAum;
  // Fee revenue not yet being earned while the book sits un-transitioned.
  const delayCost = totalAum * (feeBillingRate / 100) * (daysToRepaper / 365);

  const currentTotalCost = laborCost + reworkCost + delayCost;

  // ── Modeled state with FastTrackr ──
  const laborSaved = laborCost * OPS_TIME_SAVING;
  const reworkSaved = reworkCost * NIGO_REDUCTION;
  const daysSaved = daysToRepaper * OPS_TIME_SAVING;
  const newDays = daysToRepaper - daysSaved;
  const delaySaved = totalAum * (feeBillingRate / 100) * (daysSaved / 365);

  const grossSavings = laborSaved + reworkSaved + delaySaved;
  // Conservative floor, net of FastTrackr's (hidden) cost. Clamp at 0.
  const netSaving = Math.max(0, grossSavings - FT_COST_PER_ACCOUNT * accounts);

  // Fee revenue every week sooner puts back on the books.
  const weekRevenue = (totalAum * (feeBillingRate / 100)) / 52;
  const weeksSaved = daysSaved / 7;
  const opsHoursFreed = totalOpsHours * OPS_TIME_SAVING;

  const currentCards = [
    {
      icon: <Clock className="w-6 h-6 text-brandDeep" />,
      label: 'Manual ops hours',
      value: `${fmtNum(totalOpsHours)} hrs`,
      sub: `${fmtUsd(laborCost)} in loaded labor cost`,
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brandDeep" />,
      label: 'NIGO / error rework',
      value: fmtUsd(reworkCost),
      sub: `${fmtNum(errorCount)} items × ${REWORK_HOURS_PER_ERROR} hrs each`,
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-brandDeep" />,
      label: 'Delayed fee revenue',
      value: fmtUsd(delayCost),
      sub: `${fmtUsd(totalAum)} in transit for ${fmtNum(daysToRepaper)} days`,
    },
  ];

  const primaryFields = FIELDS.filter((f) => f.group === 'primary');
  const advancedFields = FIELDS.filter((f) => f.group === 'advanced');

  const renderField = (f: Field) => (
    <div key={f.key} className="space-y-2">
      <label htmlFor={f.key} className="text-sm font-bold text-textPrimary">
        {f.label}
      </label>
      {f.hint ? <p className="text-xs text-textSecondary leading-snug -mt-1">{f.hint}</p> : null}
      {f.suffix ? (
        // Number + its unit as one right-aligned group, so the unit hugs the
        // number ("200,000", "1%", "50 /hr") instead of drifting to the edge.
        <div className="flex items-center bg-bgCanvas border border-gray-200 rounded-xl py-3 px-4 transition-all focus-within:ring-2 focus-within:ring-brandMint/50 focus-within:border-brandMint">
          {f.prefix ? (
            <span className="text-textTertiary pointer-events-none">{f.prefix}</span>
          ) : null}
          <span className="flex-grow flex items-center justify-end tabular-nums">
            <input
              id={f.key}
              type="text"
              inputMode="decimal"
              value={values[f.key] ?? ''}
              onChange={(e) => setField(f.key, e.target.value)}
              className="w-28 min-w-0 p-0 bg-transparent text-right focus:outline-none"
            />
            <span
              className={`pointer-events-none ${
                f.inThousands ? 'text-textSecondary' : 'ml-1 text-textTertiary text-sm'
              }`}
            >
              {f.suffix}
            </span>
          </span>
        </div>
      ) : (
        <div className="relative flex items-center">
          {f.prefix ? (
            <span className="absolute left-4 text-textTertiary pointer-events-none">{f.prefix}</span>
          ) : null}
          <input
            id={f.key}
            type="text"
            inputMode="decimal"
            value={values[f.key] ?? ''}
            onChange={(e) => setField(f.key, e.target.value)}
            className={`w-full py-3 pr-4 text-right tabular-nums bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all ${
              f.prefix ? 'pl-8' : 'pl-4'
            }`}
          />
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-14 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandMint/15 text-brandDeep border border-brandMint/30 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Free calculator — no email required
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
              What does repapering your book <span className="text-brandMint">actually cost?</span>
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed">
              Estimate the labor, rework, and delayed fee revenue locked up in a manual advisor
              transition — and how much of it you could get back. Everything is computed in your
              browser; nothing is sent anywhere.
            </p>
          </m.div>
        </section>

        {/* Calculator grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Inputs */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-textPrimary mb-6">
                  Your transition
                </h2>
                <div className="space-y-5">{primaryFields.map(renderField)}</div>

                <details className="group mt-6 border-t border-gray-100 pt-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-bold text-brandDeep">
                    Adjust the details
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="space-y-5 mt-5">{advancedFields.map(renderField)}</div>
                </details>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3 space-y-6">
              {/* Current-state total */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brandDeep text-white rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-xs font-semibold text-brandMint uppercase tracking-wider mb-3">
                    Estimated cost of this transition, manually
                  </div>
                  <div className="text-5xl md:text-6xl font-display font-bold mb-2">
                    {fmtUsd(currentTotalCost)}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Loaded labor + NIGO rework + fee revenue on hold across {fmtNum(accounts)}{' '}
                    accounts.
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-full bg-brandMint/15 border border-brandMint/30 px-4 py-2 text-sm text-brandMint font-semibold">
                    <Sparkles className="w-4 h-4" />
                    You could save more than {fmtUsd(netSaving)} of this with FastTrackr
                  </div>
                </div>
              </m.div>

              {/* Breakdown tiles */}
              <div className="grid sm:grid-cols-3 gap-4">
                {currentCards.map((c) => (
                  <div
                    key={c.label}
                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-bgCanvas flex items-center justify-center mb-4">
                      {c.icon}
                    </div>
                    <div className="text-xs font-semibold text-textTertiary uppercase tracking-wider mb-1">
                      {c.label}
                    </div>
                    <div className="text-2xl font-display font-bold text-textPrimary mb-1">
                      {c.value}
                    </div>
                    <div className="text-xs text-textSecondary leading-snug">{c.sub}</div>
                  </div>
                ))}
              </div>

              {/* Upside with FastTrackr */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brandMint/10 border border-brandMint/30 rounded-3xl p-8 md:p-10"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-brandDeep" />
                  <h3 className="text-xl font-display font-bold text-textPrimary">
                    What you could get back with FastTrackr
                  </h3>
                </div>

                <div className="mb-3 text-xs font-semibold text-brandDeep uppercase tracking-wider">
                  Estimated saving on this transition
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-brandDeep mb-2">
                  {fmtUsd(netSaving)}
                </div>
                <p className="text-sm text-textSecondary leading-relaxed mb-6">
                  A conservative floor, after FastTrackr — most books do better.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 border-t border-brandMint/20 pt-6">
                  <div>
                    <div className="text-3xl font-display font-bold text-brandDeep mb-1">
                      {fmtNum(Math.round(opsHoursFreed))} hrs
                    </div>
                    <div className="text-xs text-textSecondary">Ops hours freed up</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-brandDeep mb-1">
                      {fmtNum1(weeksSaved)} wks
                    </div>
                    <div className="text-xs text-textSecondary">
                      Sooner to fully transitioned ({fmtNum(Math.round(newDays))} days, from{' '}
                      {fmtNum(daysToRepaper)})
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-brandDeep mb-1">
                      {fmtUsd(weekRevenue)}
                    </div>
                    <div className="text-xs text-textSecondary">
                      Fee revenue every week sooner puts back on the books
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Single CTA — right after the calculator. */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="rounded-3xl bg-bgCanvas border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-brandMint/15 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-brandDeep" />
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-display font-bold text-textPrimary mb-2">
                These are directional estimates. Let's find your real number.
              </h2>
              <p className="text-sm text-textSecondary leading-relaxed">
                The true saving depends on your book, your custodians, and where your team's hours
                actually go. Tell us about your transition and we'll model it with you — no
                spreadsheet homework required.
              </p>
            </div>
            <Link
              to="/contact?interest=advisor-transitions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brandDeep text-white font-semibold hover:bg-brandDeep/90 transition-colors shrink-0"
            >
              Ask our team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-textTertiary">
            <CalendarClock className="w-3.5 h-3.5" />
            Every figure is computed live in your browser from the inputs above. Nothing is stored
            or transmitted.
          </p>
        </section>

        {/* Supporting guidance — what actually drives the inputs above: how much of
            the book you rebuild by hand. On-intent text for search; links out to the
            glossary + blog instead of duplicating them. Grounded in the vetted
            Article-work voice; orientation, not legal advice. */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <h2 className="text-3xl font-display font-bold text-textPrimary mb-4">
            What actually drives the number: how much of the book you rebuild
          </h2>
          <p className="max-w-4xl text-textSecondary leading-relaxed mb-8">
            The big swings above — ops hours per account, days to repaper, NIGO rate — are really one
            question: how much of each household you have to rebuild by hand at the new firm. Three
            things set that, and none of them is the legal event itself.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-2xl border border-brandMint/30 bg-brandMint/5 p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-brandDeep" />
                <h3 className="font-display font-bold text-textPrimary">Protocol or not</h3>
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                Under the{' '}
                <Link to="/glossary/broker-protocol" className="text-brandDeep font-semibold hover:underline">
                  Broker Protocol
                </Link>{' '}
                {/* REVIEW (E1): was "five fields — name, address, phone, email, account title —"; grounding lists the exact five as not-yet-confirmed, so kept vague. */}
                you leave with roughly five fields — the basics, like name and contact details — and nothing
                else. That's a rolodex, not a book. Outside Protocol you rebuild the contact list too,
                from memory, after you've resigned.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-brandDeep" />
                <h3 className="font-display font-bold text-textPrimary">Who owns the data</h3>
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                What you're allowed to take is set before Protocol enters the picture — by whether
                your client data is rep-owned or firm-owned under your agreement. Firm-owned means
                more stays behind, so you reconstruct more and your ops-hours and days inputs climb.
                Own the data outright — a title change or acquisition — and it flips: add your
                system exports to FastTrackr and it does the rest in a fraction of the time.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-brandDeep" />
                <h3 className="font-display font-bold text-textPrimary">A breakaway build</h3>
              </div>
              <p className="text-sm text-textSecondary leading-relaxed">
                Going independent starts the receiving side blank: no firm CRM, no pre-loaded
                accounts. Every household is new-account paperwork, a fresh beneficiary election, a
                client-initiated ACATS, and cost basis you may have to chase back to the firm you
                left.
              </p>
            </div>
          </div>

          <p className="max-w-4xl text-textSecondary leading-relaxed mb-4">
            Here's the part almost nobody sizes before they move: the reconstruction lands all at
            once, inside the same 60-to-120-day window you're on the phone retaining clients — and
            retention turns on execution speed, not the legal step. The household set up cleanly in
            week one tends to stay; the one still waiting on paperwork in week six drifts back to the
            retention team at the old firm.
          </p>
          <p className="max-w-4xl text-textSecondary leading-relaxed mb-8">
            That reconstruction is the bottleneck FastTrackr is built for. It automates the
            per-household rebuild — extracting the data out of whatever documents you already have,
            building out each household and its accounts, and populating the custodian and firm
            paperwork — so the move isn't hundreds of hours of hand data entry across the book. It's
            the same work the calculator prices; the tool just puts a number on it.
          </p>

          <p className="max-w-4xl rounded-xl border border-gray-200 bg-bgCanvas px-5 py-4 text-sm text-textSecondary leading-relaxed">
            Whether a move is protocol-eligible, and what your data agreement lets you take, is firm-
            and fact-specific. Treat this as orientation, not legal advice, and confirm the specifics
            with counsel before your resignation date. For depth, see our{' '}
            <Link to="/glossary/broker-protocol" className="text-brandDeep font-semibold hover:underline">
              Broker Protocol definition
            </Link>{' '}
            and the{' '}
            <Link
              to="/blog/category/advisor-transitions-and-repapering"
              className="inline-flex items-center gap-1 text-brandDeep font-semibold hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              advisor transitions &amp; repapering library
            </Link>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
