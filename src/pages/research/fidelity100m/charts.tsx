import type { ReactNode } from 'react';
import {
  BACKUP_CUSTODIAN,
  CUSTODIANS,
  DESTINATIONS,
  DOCS_PER_ACCOUNT,
  DOLLAR_BANDS,
  FUNNEL,
  JORDAN_PATHS,
  JORDAN_PLAN,
  MOVE_TYPES,
  SCENARIOS,
  TIMELINE,
  TOP_STATES,
} from './data';

/*
 * Charts for "The $100M Line", built as plain HTML/CSS bars so they reflow to any
 * width (the PDF's SVG panels were sized for print and don't shrink on phones).
 *
 * Palette (validated with the dataviz CVD checker against a white surface):
 *   PRIMARY  #0B7A55 — the main series
 *   SECONDARY #3FC79A — the second series (always direct-labelled; low contrast alone)
 * On the dark forest sections the bars use brandMint and white/40 instead.
 * Every value is printed as a direct label and repeated in the "View data" table,
 * so nothing depends on hover or on colour alone.
 */

const PRIMARY = '#0B7A55';
const SECONDARY = '#3FC79A';

const fmt = (n: number) => n.toLocaleString('en-US');

function dayIndex(iso: string) {
  return Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1, +iso.slice(8, 10)) / 86_400_000;
}
function pctBetween(iso: string, start: string, end: string) {
  const s = dayIndex(start);
  return ((dayIndex(iso) - s) / (dayIndex(end) - s)) * 100;
}

const MONTHS = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const MONTH_STARTS = [
  '2026-10-01',
  '2026-11-01',
  '2026-12-01',
  '2027-01-01',
  '2027-02-01',
  '2027-03-01',
  '2027-04-01',
  '2027-05-01',
  '2027-06-01',
];

// ── Figure shell ─────────────────────────────────────────────────────────────

export function Figure({
  id,
  title,
  note,
  source = 'Source: SEC Form ADV; FastTrackr analysis',
  estimated,
  dark,
  table,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  source?: string;
  estimated?: boolean;
  dark?: boolean;
  table?: { head: string[]; rows: (string | number)[][] };
  children: ReactNode;
}) {
  const muted = dark ? 'text-white/60' : 'text-textTertiary';
  return (
    <figure
      id={id}
      className={`wide rounded-3xl p-5 sm:p-7 scroll-mt-28 ${
        dark ? 'bg-white/[0.04] border border-white/10' : 'bg-white border border-gray-100 shadow-sm'
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <h3 className={`font-display font-bold text-lg leading-snug ${dark ? 'text-white' : 'text-textPrimary'}`}>
          {title}
        </h3>
        {estimated && (
          <span
            className={`shrink-0 text-[11px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-1 ${
              dark ? 'bg-brandMint/15 text-brandMint' : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}
          >
            Estimated
          </span>
        )}
      </div>
      {children}
      <figcaption className={`mt-5 text-xs leading-relaxed ${muted}`}>
        {note && <span>{note} </span>}
        <span>{source}</span>
      </figcaption>
      {table && (
        <details className={`mt-3 text-sm ${dark ? 'text-white/80' : 'text-textSecondary'}`}>
          <summary className={`cursor-pointer text-xs font-semibold ${dark ? 'text-brandMint' : 'text-brandDeep'}`}>
            View data
          </summary>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left text-xs">
              <thead>
                <tr>
                  {table.head.map((h) => (
                    <th
                      key={h}
                      className={`py-1.5 pr-4 font-semibold border-b ${dark ? 'border-white/15' : 'border-gray-200'}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j} className={`py-1.5 pr-4 border-b ${dark ? 'border-white/10' : 'border-gray-100'}`}>
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      )}
    </figure>
  );
}

function Legend({
  items,
  dark,
}: {
  items: { label: string; color: string; hollow?: boolean; round?: boolean }[];
  dark?: boolean;
}) {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-1 mb-4 text-xs ${dark ? 'text-white/70' : 'text-textSecondary'}`}>
      {items.map((it) => (
        <span key={it.label} className="inline-flex items-center gap-1.5">
          <span
            className={`inline-block w-3 h-3 ${it.round ? 'rounded-full' : 'rounded-sm'}`}
            style={it.hollow ? { border: `2px solid ${it.color}` } : { background: it.color }}
          />
          {it.label}
        </span>
      ))}
    </div>
  );
}

/** One labelled horizontal bar row: label on top, bar + value beneath. */
function BarRow({
  label,
  value,
  pct,
  color = PRIMARY,
  sub,
  dark,
}: {
  label: string;
  value: string;
  pct: number;
  color?: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div className="group" title={`${label}: ${value}`}>
      <div
        className={`flex items-baseline justify-between gap-3 text-sm mb-1 ${dark ? 'text-white/85' : 'text-textPrimary'}`}
      >
        <span className="min-w-0">
          {label}
          {sub && <span className={`block text-xs ${dark ? 'text-white/50' : 'text-textTertiary'}`}>{sub}</span>}
        </span>
        <span className="font-semibold tabular-nums shrink-0">{value}</span>
      </div>
      <div className={`h-2.5 rounded-full ${dark ? 'bg-white/10' : 'bg-gray-100'}`}>
        <div
          className="h-full rounded-full transition-opacity group-hover:opacity-80"
          style={{ width: `${Math.max(pct, 0.8)}%`, background: color }}
        />
      </div>
    </div>
  );
}

// ── Fig 3a: nine months ───────────────────────────────────────────────────────

export function DeadlineTimeline() {
  const { start, end, taxSeason } = TIMELINE;
  const taxL = pctBetween(taxSeason[0], start, end);
  const taxW = pctBetween(taxSeason[1], start, end) - taxL;
  const adv = pctBetween('2027-03-31', start, end);
  return (
    <Figure
      id="fig-timeline"
      title="Nine months from the letter to the deadline"
      note="Dates as reported; 268 days from Oct 5, 2026 to June 30, 2027. Tax season shown as Feb–mid-Apr 2027."
      source="Source: Fidelity letter as reported in trade press; FastTrackr analysis"
      table={{
        head: ['Date', 'Event'],
        rows: [
          ['Oct 1, 2026', 'Letters begin reaching advisory firms'],
          ['Feb 1 – Apr 15, 2027', 'Tax season'],
          ['Mar 31, 2027', 'Annual Form ADV update due for most firms'],
          ['Jun 30, 2027', 'Custody ends for firms below $100M at Fidelity'],
        ],
      }}
    >
      <div className="relative pt-10 pb-2">
        <div className="absolute top-0 left-0 text-[11px]">
          <div className="font-semibold text-textPrimary">Oct 1</div>
          <div className="text-textTertiary">Letters arrive</div>
        </div>
        <div className="absolute top-0 right-0 text-[11px] text-right">
          <div className="font-semibold text-[#C4452F]">Jun 30</div>
          <div className="text-textTertiary">Custody ends</div>
        </div>

        <div className="relative h-8 rounded-lg bg-gray-100 overflow-hidden">
          <div
            className="absolute inset-y-0 flex items-center justify-center text-[11px] font-semibold text-amber-900"
            style={{
              left: `${taxL}%`,
              width: `${taxW}%`,
              background: 'repeating-linear-gradient(45deg, #FDE7B0, #FDE7B0 6px, #FBDA8C 6px, #FBDA8C 12px)',
            }}
          >
            Tax season
          </div>
          <div className="absolute inset-y-0 w-0.5 bg-textPrimary/70" style={{ left: `${adv}%` }} />
          <div className="absolute inset-y-0 right-0 w-1 bg-[#C4452F]" />
        </div>
        <div className="relative h-5 mt-1.5">
          {MONTH_STARTS.map((d, i) => (
            <span
              key={d}
              className="absolute text-[10px] sm:text-[11px] text-textTertiary"
              style={{ left: `${pctBetween(d, start, end)}%` }}
            >
              {MONTHS[i]}
            </span>
          ))}
        </div>
        {/* ADV marker label sits under the axis, ending at the marker, so it never
            collides with the deadline label on narrow screens. */}
        <div className="relative h-5 mt-1">
          <span
            className="absolute -translate-x-full pr-1.5 text-[11px] whitespace-nowrap text-textSecondary border-r-2 border-textPrimary/70"
            style={{ left: `${adv}%` }}
          >
            <span className="font-semibold text-textPrimary">Mar 31</span> Form ADV update due
          </span>
        </div>
      </div>
    </Figure>
  );
}

// ── Fig 4a: funnel ─────────────────────────────────────────────────────────────

export function SizingFunnel() {
  const max = FUNNEL[0].value;
  return (
    <Figure
      id="fig-funnel"
      title="Nearly half of Fidelity's small-firm users fall below the line"
      note="Retail RIAs under $1B that report a custodian. 1,087 of 2,286 Fidelity users (48%)."
      table={{ head: ['Step', 'Firms'], rows: FUNNEL.map((f) => [f.label, fmt(f.value)]) }}
    >
      <div className="space-y-4">
        {FUNNEL.map((f) => (
          <BarRow
            key={f.label}
            label={f.label}
            value={fmt(f.value)}
            pct={(f.value / max) * 100}
            color={'emphasis' in f ? '#C4452F' : PRIMARY}
          />
        ))}
      </div>
    </Figure>
  );
}

// ── Fig 4b: distance to the line (two small multiples, one axis each) ──────────

export function DistanceBands() {
  const maxFirms = Math.max(...DOLLAR_BANDS.map((b) => b.firms));
  return (
    <Figure
      id="fig-bands"
      title="Many firms sit far below; most dollars sit close"
      note="Affected firms by dollars held at Fidelity (n=1,087; $40.5B). 192 firms within $25M of the line hold 42% of the dollars."
      table={{
        head: ['Held at Fidelity', 'Firms', 'Share of $'],
        rows: DOLLAR_BANDS.map((b) => [b.band, b.firms, `${Math.round(b.usdPct * 100)}%`]),
      }}
    >
      <div className="grid grid-cols-[auto_1fr_1fr] gap-x-3 sm:gap-x-5 gap-y-3 items-center text-sm">
        <span />
        <span className="text-xs font-semibold text-textTertiary uppercase tracking-wider">Firms</span>
        <span className="text-xs font-semibold text-textTertiary uppercase tracking-wider">Share of dollars</span>
        {DOLLAR_BANDS.map((b) => (
          <BandRow key={b.band} band={b.band} firms={b.firms} firmsPct={(b.firms / maxFirms) * 100} usdPct={b.usdPct} />
        ))}
      </div>
    </Figure>
  );
}

function BandRow({ band, firms, firmsPct, usdPct }: { band: string; firms: number; firmsPct: number; usdPct: number }) {
  return (
    <>
      <span className="text-textPrimary whitespace-nowrap text-xs sm:text-sm">{band}</span>
      <div className="flex items-center gap-2" title={`${band}: ${firms} firms`}>
        <div className="h-3 rounded-r-md" style={{ width: `${firmsPct * 0.75}%`, background: PRIMARY }} />
        <span className="text-xs font-semibold tabular-nums">{firms}</span>
      </div>
      <div className="flex items-center gap-2" title={`${band}: ${Math.round(usdPct * 100)}% of dollars`}>
        <div className="h-3 rounded-r-md" style={{ width: `${(usdPct / 0.42) * 75}%`, background: SECONDARY }} />
        <span className="text-xs font-semibold tabular-nums">{Math.round(usdPct * 100)}%</span>
      </div>
    </>
  );
}

// ── Fig 4c: states ────────────────────────────────────────────────────────────

export function TopStates() {
  const max = TOP_STATES[0].firms;
  return (
    <Figure
      id="fig-states"
      title="Affected firms in 48 states and DC; five hold 42%"
      note="Affected firms by main office state, top ten (n=1,087). No single city has more than 18."
      table={{ head: ['State', 'Affected firms'], rows: TOP_STATES.map((s) => [s.state, s.firms]) }}
    >
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
        {TOP_STATES.map((s, i) => (
          <BarRow
            key={s.state}
            label={s.state}
            value={String(s.firms)}
            pct={(s.firms / max) * 100}
            color={i < 5 ? PRIMARY : SECONDARY}
          />
        ))}
      </div>
    </Figure>
  );
}

// ── Fig 6a: move type × segment ───────────────────────────────────────────────

export function MoveTypeChart() {
  const max = 694;
  return (
    <Figure
      id="fig-move-type"
      title="Nearly two in three firms already have a second custodian"
      note="Affected firms by whether another custodian holds 10%+ of client assets (n=1,087)."
      table={{
        head: ['Starting point', 'Small firms', 'Larger firms', 'Total'],
        rows: MOVE_TYPES.map((m) => [m.label, m.small, m.larger, m.total]),
      }}
    >
      <Legend
        items={[
          { label: 'Small firms (under $100M AUM)', color: PRIMARY },
          { label: 'Larger firms', color: SECONDARY },
        ]}
      />
      <div className="space-y-5">
        {MOVE_TYPES.map((m) => (
          <div key={m.label}>
            <div className="flex items-baseline justify-between text-sm mb-1.5">
              <span className="text-textPrimary">
                {m.label} <span className="text-textTertiary">· {m.note}</span>
              </span>
              <span className="font-display font-bold text-xl tabular-nums">{m.total}</span>
            </div>
            <div className="flex h-7 gap-[2px]" style={{ width: `${(m.total / max) * 100}%` }}>
              <div
                className="rounded-l-md flex items-center pl-2 text-[11px] font-semibold text-white"
                style={{ width: `${(m.small / m.total) * 100}%`, background: PRIMARY }}
                title={`Small firms: ${m.small}`}
              >
                {m.small}
              </div>
              <div
                className="rounded-r-md flex items-center pl-1.5 text-[11px] font-semibold text-brandDeep"
                style={{ width: `${(m.larger / m.total) * 100}%`, background: SECONDARY }}
                title={`Larger firms: ${m.larger}`}
              >
                {m.larger}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Figure>
  );
}

// ── Fig 6b: backup custodian ──────────────────────────────────────────────────

export function BackupCustodianChart() {
  const max = BACKUP_CUSTODIAN[0].firms;
  return (
    <Figure
      id="fig-backup"
      title="For firms with a backup, it is mostly Schwab"
      note="Largest other custodian by dollars, among the 694 firms that already use a second custodian."
      table={{ head: ['Largest other custodian', 'Firms'], rows: BACKUP_CUSTODIAN.map((b) => [b.name, b.firms]) }}
    >
      <div className="space-y-3">
        {BACKUP_CUSTODIAN.map((b) => (
          <BarRow key={b.name} label={b.name} value={String(b.firms)} pct={(b.firms / max) * 100} />
        ))}
      </div>
    </Figure>
  );
}

// ── Fig 7a: destinations ──────────────────────────────────────────────────────

export function DestinationsChart() {
  const max = DESTINATIONS[0].usdB;
  return (
    <Figure
      id="fig-destinations"
      title="About two-thirds of the money lands at Schwab"
      note="Base case. Where the $40.5B now at Fidelity goes, by destination. Altruist and Vanguard shown combined (deal pending). ~$15.5B of Schwab's total comes from firms that already custody there."
      source="Source: SEC Form ADV; FastTrackr estimates"
      estimated
      table={{
        head: ['Destination', '$B (base case)'],
        rows: DESTINATIONS.map((d) => [d.name, 'display' in d ? d.display : `~$${d.usdB.toFixed(1)}B`]),
      }}
    >
      <div className="space-y-3.5">
        {DESTINATIONS.map((d) => (
          <BarRow
            key={d.name}
            label={d.name}
            sub={'note' in d ? d.note : undefined}
            value={'display' in d ? d.display : `~$${d.usdB.toFixed(1)}B`}
            pct={(d.usdB / max) * 100}
            color={'stays' in d ? SECONDARY : PRIMARY}
          />
        ))}
      </div>
    </Figure>
  );
}

// ── Fig 7b: scenarios ─────────────────────────────────────────────────────────

export function ScenariosChart() {
  const total = 40.5;
  return (
    <Figure
      id="fig-scenarios"
      title="$33–39B leaves Fidelity in every scenario"
      note="Dollars leaving vs staying at Fidelity across four scenarios (n=1,087 firms; $40.5B)."
      source="Source: SEC Form ADV; FastTrackr estimates"
      estimated
      table={{
        head: ['Scenario', 'Leaves ($B)', 'Stays ($B)'],
        rows: SCENARIOS.map((s) => [s.name, `~${s.leaves.toFixed(1)}`, `~${s.stays.toFixed(1)}`]),
      }}
    >
      <Legend
        items={[
          { label: 'Leaves Fidelity', color: PRIMARY },
          { label: 'Stays at Fidelity', color: SECONDARY },
        ]}
      />
      <div className="space-y-4">
        {SCENARIOS.map((s) => (
          <div key={s.name}>
            <div className="flex items-baseline justify-between gap-3 text-sm mb-1.5">
              <span className="text-textPrimary">{s.name}</span>
              <span className="text-xs text-textSecondary tabular-nums shrink-0">~${s.stays.toFixed(1)}B stays</span>
            </div>
            <div className="flex h-7 gap-[2px]">
              <div
                className="rounded-l-md flex items-center pl-2 text-[11px] font-semibold text-white"
                style={{ width: `${(s.leaves / total) * 100}%`, background: PRIMARY }}
                title={`${s.name}: ~$${s.leaves.toFixed(1)}B leaves`}
              >
                ~${s.leaves.toFixed(1)}B
              </div>
              <div
                className="rounded-r-md flex items-center justify-center text-[11px] font-semibold text-brandDeep"
                style={{ width: `${(s.stays / total) * 100}%`, background: SECONDARY }}
                title={`${s.name}: ~$${s.stays.toFixed(1)}B stays`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Figure>
  );
}

// ── Fig 8b: cohort share dumbbell ─────────────────────────────────────────────

export function CohortChart() {
  const rows = CUSTODIANS.filter((c) => !c.name.startsWith('Betterment'));
  const axisMax = 70;
  return (
    <Figure
      id="fig-cohort"
      title="Altruist more than doubled its share of new small firms"
      note="Share of new small firms (under $100M) listing each custodian, by registration cohort: 2021 and earlier (n=6,472) vs 2024–26 (n=1,445). Altruist alone; Vanguard deal pending."
      table={{
        head: ['Custodian', '≤2021', '2024–26'],
        rows: rows.map((c) => [c.name, `${c.cohortFrom}%`, `${c.cohortTo}%`]),
      }}
    >
      <Legend
        items={[
          { label: '2021 and earlier', color: PRIMARY, hollow: true, round: true },
          { label: '2024–26', color: PRIMARY, round: true },
        ]}
      />
      <div className="space-y-4">
        {rows.map((c) => {
          const a = (c.cohortFrom / axisMax) * 100;
          const b = (c.cohortTo / axisMax) * 100;
          const up = c.cohortTo > c.cohortFrom;
          return (
            <div key={c.name} title={`${c.name}: ${c.cohort}`}>
              <div className="flex items-baseline justify-between text-sm mb-1">
                <span className="text-textPrimary">{c.name.replace(' (Vanguard)', '')}</span>
                <span className={`text-xs font-semibold tabular-nums ${up ? 'text-[#0B7A55]' : 'text-textSecondary'}`}>
                  {c.cohort}
                </span>
              </div>
              <div className="relative h-4">
                <div className="absolute top-1/2 inset-x-0 h-px bg-gray-200" />
                <div
                  className="absolute top-1/2 h-0.5 -translate-y-1/2"
                  style={{ left: `${Math.min(a, b)}%`, width: `${Math.abs(b - a)}%`, background: PRIMARY }}
                />
                <span
                  className="absolute top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                  style={{ left: `${a}%`, border: `2px solid ${PRIMARY}` }}
                />
                <span
                  className="absolute top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white"
                  style={{ left: `${b}%`, background: PRIMARY }}
                />
              </div>
            </div>
          );
        })}
        <div className="relative h-4 text-[10px] text-textTertiary">
          {[0, 20, 40, 60].map((t) => (
            <span key={t} className="absolute -translate-x-1/2" style={{ left: `${(t / axisMax) * 100}%` }}>
              {t}%
            </span>
          ))}
        </div>
      </div>
    </Figure>
  );
}

// ── Fig 9a: documents per account (dark section) ──────────────────────────────

export function DocsPerAccountChart() {
  const max = 4.6;
  return (
    <Figure
      id="fig-docs-per-account"
      dark
      title="Documents per account, by type of move"
      note="Base case. Typical documents per account by type of move; joiners also sign firm documents."
      source="Source: SEC Form ADV; FastTrackr estimates"
      estimated
      table={{
        head: ['Move', 'Custodian forms / account', 'Firm documents / account'],
        rows: DOCS_PER_ACCOUNT.map((d) => [d.move, d.custodian.toFixed(1), d.firm.toFixed(1)]),
      }}
    >
      <Legend
        dark
        items={[
          { label: 'Custodian forms', color: '#2DD4A0' },
          { label: 'Firm documents', color: 'rgba(255,255,255,0.45)' },
        ]}
      />
      <div className="space-y-4">
        {DOCS_PER_ACCOUNT.map((d) => {
          const total = d.custodian + d.firm;
          return (
            <div key={d.move}>
              <div className="flex justify-between text-sm text-white/85 mb-1.5">
                <span>{d.move}</span>
                <span className="font-semibold tabular-nums">~{total.toFixed(1)}</span>
              </div>
              <div className="flex h-3 gap-[2px]" style={{ width: `${(total / max) * 100}%` }}>
                <div
                  className="rounded-l-md bg-brandMint"
                  style={{ width: `${(d.custodian / total) * 100}%` }}
                  title={`Custodian forms: ${d.custodian}`}
                />
                {d.firm > 0 && (
                  <div
                    className="rounded-r-md bg-white/45"
                    style={{ width: `${(d.firm / total) * 100}%` }}
                    title={`Firm documents: ${d.firm}`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Figure>
  );
}

// ── Fig 9c: Jordan's nine months (dark section) ───────────────────────────────

export function JordanGantt() {
  const { start, end, steps, fasttrackrSpan, taxSeason } = JORDAN_PLAN;
  const p = (d: string) => pctBetween(d, start, end);
  const taxL = p(taxSeason[0]);
  const taxW = p(taxSeason[1]) - taxL;
  const ftL = p(fasttrackrSpan[0]);
  const ftW = p(fasttrackrSpan[1]) - ftL;
  return (
    <Figure
      id="fig-jordan-plan"
      dark
      title="Jordan's signatures land in tax season"
      note="Jordan: composite $50M solo planner, ~$48M at Fidelity, no second custodian, ~51 households. Base case: ~128 accounts, ~386 documents. Illustrative dates."
      source="Source: SEC Form ADV; FastTrackr estimates"
      estimated
      table={{
        head: ['Step', 'From', 'To'],
        rows: steps.map((s) => [s.label, s.start, s.end]),
      }}
    >
      <div className="relative">
        {/* tax season + FastTrackr span overlays */}
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: `${taxL}%`, width: `${taxW}%`, background: 'rgba(253, 231, 176, 0.10)' }}
        />
        <div className="relative space-y-3 pt-7">
          <div
            className="absolute top-0 text-[10px] font-semibold uppercase tracking-wider text-amber-200/80"
            style={{ left: `${taxL}%` }}
          >
            Tax season
          </div>
          {steps.map((s) => {
            const l = p(s.start);
            const w = p(s.end) - l;
            const rightSide = l > 50;
            return (
              <div key={s.label} className="relative h-8">
                <div
                  className="absolute inset-y-1 rounded-md bg-brandMint/85"
                  style={{ left: `${l}%`, width: `${w}%` }}
                  title={`${s.label}: ${s.start} to ${s.end}`}
                />
                <span
                  className="absolute top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-white whitespace-nowrap"
                  style={rightSide ? { right: `${100 - l + 1}%` } : { left: `${l + w + 1}%` }}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
          <div className="relative h-7">
            <div
              className="absolute inset-y-1 rounded-md border border-dashed border-brandMint flex items-center justify-center text-[10px] sm:text-[11px] font-semibold text-brandMint"
              style={{ left: `${ftL}%`, width: `${ftW}%` }}
            >
              <span className="sm:hidden">FastTrackr span</span>
              <span className="hidden sm:inline">FastTrackr: data → forms → e-sign → transfer</span>
            </div>
          </div>
        </div>
        <div className="relative h-5 mt-2 border-t border-white/15 pt-1">
          {MONTH_STARTS.map((d, i) => (
            <span key={d} className="absolute text-[10px] text-white/50" style={{ left: `${p(d)}%` }}>
              {MONTHS[i]}
            </span>
          ))}
        </div>
      </div>
    </Figure>
  );
}

// ── Fig 10b: Jordan's documents by path ───────────────────────────────────────

export function JordanPathsChart() {
  const axisMax = 900;
  return (
    <Figure
      id="fig-jordan-paths"
      title="Every path open to Jordan means 330 or more documents"
      note="Jordan: composite $50M solo planner, ~$48M at Fidelity, no second custodian, 59 clients (~51 households). Dot = base case; bar = low–high range. Consolidating is not an option for Jordan."
      source="Source: SEC Form ADV; FastTrackr estimates"
      estimated
      table={{
        head: ['Path', 'Low', 'Base', 'High'],
        rows: JORDAN_PATHS.map((j) => [j.path, j.low, j.base, j.high]),
      }}
    >
      <div className="space-y-5">
        {JORDAN_PATHS.map((j) => (
          <div key={j.path} title={`${j.path}: ~${j.base} (range ${j.low}–${j.high})`}>
            <div className="flex items-baseline justify-between text-sm mb-1.5">
              <span className="text-textPrimary">{j.path}</span>
              <span className="font-semibold tabular-nums">
                ~{j.base}{' '}
                <span className="text-xs font-normal text-textTertiary">
                  ({j.low}–{j.high})
                </span>
              </span>
            </div>
            <div className="relative h-4">
              <div className="absolute top-1/2 inset-x-0 h-px bg-gray-200" />
              <div
                className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full"
                style={{
                  left: `${(j.low / axisMax) * 100}%`,
                  width: `${((j.high - j.low) / axisMax) * 100}%`,
                  background: SECONDARY,
                }}
              />
              <span
                className="absolute top-1/2 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white"
                style={{ left: `${(j.base / axisMax) * 100}%`, background: PRIMARY }}
              />
            </div>
          </div>
        ))}
        <div className="relative h-4 text-[10px] text-textTertiary">
          {[0, 200, 400, 600, 800].map((t) => (
            <span
              key={t}
              className="absolute -translate-x-1/2 first:translate-x-0"
              style={{ left: `${(t / axisMax) * 100}%` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Figure>
  );
}
