import { useSyncExternalStore, type ReactNode } from 'react';
import {
  AFFECTED_FIRMS,
  BACKUP_CUSTODIAN,
  CUSTODIANS,
  DESTINATIONS,
  DOCS_PER_ACCOUNT,
  DOLLAR_BANDS,
  FIDELITY_USERS,
  FIRMS_BY_STATE,
  FLOW_ORIGINS,
  FLOWS,
  FUNNEL,
  JORDAN_PATHS,
  JORDAN_PLAN,
  MOVE_TYPES,
  NO_STATE_FIRMS,
  PAPERWORK,
  SCENARIOS,
  TIMELINE,
  TOP_STATES,
} from './data';

/*
 * Charts for "The $100M Line". Most are plain HTML/CSS so they reflow to any
 * width (the PDF's SVG panels were sized for print and don't shrink on phones).
 * The one exception is the Fig 7a flow diagram: an inline SVG on sm+ screens,
 * with the bar list as its phone fallback.
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

const FIDELITY_RED = '#C4452F';
const MUTED = '#9CA3AF';

const fmt = (n: number) => n.toLocaleString('en-US');
const fmtK = (n: number) => `${Math.round(n / 1000)}k`;

function dayIndex(iso: string) {
  return Date.UTC(+iso.slice(0, 4), +iso.slice(5, 7) - 1, +iso.slice(8, 10)) / 86_400_000;
}
function pctBetween(iso: string, start: string, end: string) {
  const s = dayIndex(start);
  return ((dayIndex(iso) - s) / (dayIndex(end) - s)) * 100;
}

const noSubscribe = () => () => {};
const localIso = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

/**
 * Today's date, client-only (null during prerender and hydration) so the static
 * HTML never disagrees with the client. Same day count as the hero's "days left".
 */
function useToday() {
  const iso = useSyncExternalStore(noSubscribe, localIso, () => null);
  return iso ? { iso, daysLeft: Math.max(0, Math.round(dayIndex(TIMELINE.end) - dayIndex(iso))) } : null;
}

/** Position of today inside a start–end window, or null when outside it. */
function todayPct(today: { iso: string } | null, start: string, end: string) {
  if (!today) return null;
  const p = pctBetween(today.iso, start, end);
  return p < 0 || p > 100 ? null : p;
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
      className={`wide flex flex-col rounded-3xl p-5 sm:p-7 scroll-mt-28 ${
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
      {/* flex-1 keeps the caption at the bottom when a Pair stretches two cards to one height */}
      <div className="flex-1">{children}</div>
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
  const today = useToday();
  const now = todayPct(today, start, end);
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
      <div className="relative pt-11 pb-2">
        <div className="absolute top-0 left-0 text-[11px] sm:text-xs">
          <div className="font-semibold text-textPrimary">Oct 1, 2026</div>
          <div className="text-textTertiary">Fidelity letters arrive</div>
        </div>
        <div className="absolute top-0 right-0 text-[11px] sm:text-xs text-right">
          <div className="font-bold" style={{ color: FIDELITY_RED }}>
            Jun 30, 2027 · Deadline
          </div>
          <div className="text-textTertiary">Custody ends below $100M</div>
        </div>

        <div className="relative h-10 rounded-lg bg-gray-100 overflow-hidden">
          {/* elapsed time, from the letter to today */}
          {now !== null && (
            <div className="absolute inset-y-0 left-0 bg-brandDeep/10" style={{ width: `${now}%` }} />
          )}
          <div
            className="absolute inset-y-0 flex flex-col items-center justify-center leading-tight text-amber-900"
            style={{
              left: `${taxL}%`,
              width: `${taxW}%`,
              background: 'repeating-linear-gradient(45deg, #FDE7B0, #FDE7B0 6px, #FBDA8C 6px, #FBDA8C 12px)',
            }}
          >
            <span className="text-[11px] font-bold">Tax season</span>
            <span className="hidden sm:block text-[10px]">Feb – Apr 15</span>
          </div>
          <div className="absolute inset-y-0 w-0.5 bg-textPrimary/70" style={{ left: `${adv}%` }} />
          <div className="absolute inset-y-0 right-0 w-1.5" style={{ background: FIDELITY_RED }} />
          {now !== null && (
            <div className="absolute inset-y-0 w-0.5 bg-brandDeep" style={{ left: `${now}%` }} />
          )}
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
        {/* Today marker gets its own row so it can't collide with the ADV label
            as it slides right over the season. Rendered client-side only. */}
        <div className="relative h-5 mt-1">
          {now !== null && today && (
            <span
              className={`absolute text-[11px] whitespace-nowrap font-semibold text-brandDeep ${
                now > 60 ? '-translate-x-full pr-1.5 border-r-2' : 'pl-1.5 border-l-2'
              } border-brandDeep`}
              style={{ left: `${now}%` }}
            >
              Today · {today.daysLeft} days left
            </span>
          )}
        </div>
      </div>
    </Figure>
  );
}

// ── Fig 4a: one dot per 1% of Fidelity's small-firm users ─────────────────────

export function FidelityShareWaffle() {
  const share = Math.round((AFFECTED_FIRMS / FIDELITY_USERS) * 100);
  return (
    <Figure
      id="fig-funnel"
      title="Nearly half of Fidelity's small-firm users fall below the line"
      note={`Retail RIAs under $1B that report a custodian (n=${fmt(FUNNEL[0].value)}); ${fmt(FIDELITY_USERS)} list Fidelity; ${fmt(AFFECTED_FIRMS)} hold under $100M there (${share}%).`}
      table={{ head: ['Step', 'Firms'], rows: FUNNEL.map((f) => [f.label, fmt(f.value)]) }}
    >
      <div className="flex items-end gap-3 mb-4">
        <span className="font-display font-bold text-5xl leading-none tabular-nums" style={{ color: FIDELITY_RED }}>
          {fmt(AFFECTED_FIRMS)}
        </span>
        <span className="text-sm text-textSecondary leading-snug pb-0.5">
          of {fmt(FIDELITY_USERS)} Fidelity-using firms hold under $100M there ({share}%)
        </span>
      </div>
      {/* 20 × 5, filled column by column so the 48 read as one block on the left */}
      <div
        className="grid grid-rows-5 grid-flow-col gap-1 sm:gap-1.5"
        style={{ gridTemplateColumns: 'repeat(20, minmax(0, 1fr))' }}
        role="img"
        aria-label={`${share} of 100 dots filled: ${share}% of Fidelity's small-firm users are below the line`}
      >
        {Array.from({ length: 100 }, (_, i) => (
          <span
            key={i}
            className="aspect-square rounded-full"
            style={{ background: i < share ? FIDELITY_RED : '#E5E7EB' }}
          />
        ))}
      </div>
      <div className="mt-4 -mb-2">
        <Legend
          items={[
            { label: 'Below the line', color: FIDELITY_RED, round: true },
            { label: 'At or above $100M at Fidelity', color: '#E5E7EB', round: true },
          ]}
        />
      </div>
      <p className="text-xs text-textTertiary">Each dot = 1% of the {fmt(FIDELITY_USERS)} firms.</p>
      <p className="mt-4 pt-3 border-t border-gray-100 text-xs text-textSecondary tabular-nums">
        {fmt(FUNNEL[0].value)} retail RIAs <span className="text-textTertiary">→</span> {fmt(FIDELITY_USERS)} use
        Fidelity <span className="text-textTertiary">→</span>{' '}
        <strong style={{ color: FIDELITY_RED }}>{fmt(AFFECTED_FIRMS)} below the line</strong>
      </p>
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

// ── Fig 4c: state tile map ────────────────────────────────────────────────────

/** Equal-area tile grid: [state, column, row] on an 11 × 8 grid. */
const STATE_TILES: [string, number, number][] = [
  ['AK', 0, 0], ['ME', 10, 0],
  ['VT', 9, 1], ['NH', 10, 1],
  ['WA', 0, 2], ['ID', 1, 2], ['MT', 2, 2], ['ND', 3, 2], ['MN', 4, 2], ['IL', 5, 2], ['WI', 6, 2], ['MI', 7, 2], ['NY', 8, 2], ['RI', 9, 2], ['MA', 10, 2],
  ['OR', 0, 3], ['NV', 1, 3], ['WY', 2, 3], ['SD', 3, 3], ['IA', 4, 3], ['IN', 5, 3], ['OH', 6, 3], ['PA', 7, 3], ['NJ', 8, 3], ['CT', 9, 3],
  ['CA', 0, 4], ['UT', 1, 4], ['CO', 2, 4], ['NE', 3, 4], ['MO', 4, 4], ['KY', 5, 4], ['WV', 6, 4], ['VA', 7, 4], ['MD', 8, 4], ['DE', 9, 4],
  ['AZ', 1, 5], ['NM', 2, 5], ['KS', 3, 5], ['AR', 4, 5], ['TN', 5, 5], ['NC', 6, 5], ['SC', 7, 5], ['DC', 8, 5],
  ['OK', 3, 6], ['LA', 4, 6], ['MS', 5, 6], ['AL', 6, 6], ['GA', 7, 6],
  ['HI', 0, 7], ['TX', 3, 7], ['FL', 8, 7],
];

/** Sequential buckets, light → dark (same cut points as the PDF panel). */
const STATE_BUCKETS = [
  { label: '0', min: 0, bg: '#F3F4F6', fg: '#9CA3AF' },
  { label: '1–9', min: 1, bg: '#DDF5EC', fg: '#0A3D2E' },
  { label: '10–24', min: 10, bg: '#A7E6CF', fg: '#0A3D2E' },
  { label: '25–49', min: 25, bg: '#3FC79A', fg: '#0A3D2E' },
  { label: '50–99', min: 50, bg: '#0B7A55', fg: '#FFFFFF' },
  { label: '100+', min: 100, bg: '#0A3D2E', fg: '#FFFFFF' },
];
const bucketFor = (n: number) => [...STATE_BUCKETS].reverse().find((b) => n >= b.min)!;

export function StateTileMap() {
  const top5 = TOP_STATES.slice(0, 5);
  const ranked = Object.entries(FIRMS_BY_STATE).sort((a, b) => b[1] - a[1]);
  return (
    <Figure
      id="fig-states"
      title="Affected firms in 48 states and DC; five hold 42%"
      note={`Affected firms by main office state (n=1,087; ${NO_STATE_FIRMS} firms have no mapped state). No single city has more than 18.`}
      table={{ head: ['State', 'Affected firms'], rows: ranked.map(([s, n]) => [s, n]) }}
    >
      <div className="max-w-2xl mx-auto">
        <div
          className="grid grid-cols-11 gap-[3px] sm:gap-1"
          role="img"
          aria-label="Tile map of affected firms by state. California 132, Texas 108, Florida 91, New York 68, Massachusetts 53; every state except Alaska and West Virginia has at least one."
        >
          {STATE_TILES.map(([st, col, row]) => {
            const n = FIRMS_BY_STATE[st];
            const b = bucketFor(n);
            return (
              <div
                key={st}
                className="aspect-square rounded-[4px] sm:rounded-md flex flex-col items-center justify-center leading-none"
                style={{ gridColumnStart: col + 1, gridRowStart: row + 1, background: b.bg, color: b.fg }}
                title={`${st}: ${n} affected firm${n === 1 ? '' : 's'}`}
              >
                <span className="text-[9px] sm:text-xs font-bold">{st}</span>
                <span className="hidden sm:block text-[10px] mt-0.5 tabular-nums opacity-80">{n}</span>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-textTertiary mb-1.5">
              Affected firms
            </div>
            <div className="flex">
              {STATE_BUCKETS.map((b) => (
                <div key={b.label} className="w-10 sm:w-12">
                  <div className="h-2.5" style={{ background: b.bg }} />
                  <div className="text-[10px] text-textTertiary mt-1">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-sm text-textPrimary font-semibold tabular-nums">
            {top5.map((s, i) => (
              <span key={s.state}>
                {i > 0 && <span className="text-textTertiary font-normal"> · </span>}
                {s.state} {s.firms}
              </span>
            ))}
          </div>
        </div>
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

// ── Fig 7a: where the $40.5B goes (flow diagram) ──────────────────────────────

const destLabel = (d: (typeof DESTINATIONS)[number]) => ('display' in d ? d.display : `~$${d.usdB.toFixed(1)}B`);

/** Sankey order on the right: Schwab first, the small destinations, then what stays. */
const FLOW_RIGHT = [
  'Schwab',
  'Schwab, via a host firm',
  'Altruist (Vanguard)',
  'Interactive Brokers',
  'SEI',
  'Goldman Sachs Advisor Solutions',
  'Other existing custodians',
  'Stays at Fidelity via a host firm',
] as const;

const ORIGIN_COLOR = { fidelityOnly: PRIMARY, secondCustodian: SECONDARY } as const;

function FlowSankey() {
  const W = 780;
  const top = 12;
  const avail = 262;
  const rGap = 7;
  const lGap = 16;
  const nodeW = 10;
  const lx = 168;
  const rx = 508;
  const total = FLOW_ORIGINS.reduce((s, o) => s + o.usdB, 0);
  const sc = (avail - rGap * (FLOW_RIGHT.length - 1)) / total;

  const right = FLOW_RIGHT.map((name) => {
    const d = DESTINATIONS.find((x) => x.name === name)!;
    return { name, d, usdB: FLOWS.filter((f) => f.to === name).reduce((s, f) => s + f.usdB, 0) };
  });
  const rY: Record<string, number> = {};
  let y = top;
  for (const r of right) {
    rY[r.name] = y;
    y += r.usdB * sc + rGap;
  }
  const H = y - rGap + top;

  const lY: Record<string, number> = {};
  y = top + (avail - (total * sc + lGap)) / 2;
  for (const o of FLOW_ORIGINS) {
    lY[o.key] = y;
    y += o.usdB * sc + lGap;
  }

  // Stack ribbons: leaving each origin in destination order, arriving at each
  // destination in origin order, so no two ribbons cross at a node.
  const outCursor: Record<string, number> = { ...lY };
  const inCursor: Record<string, number> = { ...rY };
  const links = FLOW_RIGHT.flatMap((to) =>
    FLOW_ORIGINS.map((o) => FLOWS.find((f) => f.from === o.key && f.to === to)).filter((f) => f !== undefined),
  ).map((f) => {
    const h = f.usdB * sc;
    const y0 = outCursor[f.from];
    outCursor[f.from] += h;
    return { f, h, y0, y1: 0 };
  });
  for (const to of FLOW_RIGHT) {
    for (const o of FLOW_ORIGINS) {
      const l = links.find((x) => x.f.to === to && x.f.from === o.key);
      if (!l) continue;
      l.y1 = inCursor[to];
      inCursor[to] += l.h;
    }
  }

  // Right labels: centred on their node, pushed down to keep 15 units apart.
  const labelY: number[] = [];
  right.forEach((r, i) => {
    const centre = rY[r.name] + (r.usdB * sc) / 2;
    labelY.push(i === 0 ? centre : Math.max(centre, labelY[i - 1] + 15));
  });

  const x0 = lx + nodeW;
  const x1 = rx;
  const xm = (x0 + x1) / 2;
  const originName = (key: string) => FLOW_ORIGINS.find((o) => o.key === key)!.label.join(' ');

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="Flow of the $40.5B now at Fidelity. Fidelity-only firms ($18.0B) and firms with a second custodian ($22.5B) flow mostly to Schwab (~$25.9B), then other existing custodians (~$4.6B), Altruist (~$4.3B), Interactive Brokers (~$2.0B); ~$2.0B stays at Fidelity via a host firm."
    >
      {links.map(({ f, h, y0, y1 }) => (
        <path
          key={`${f.from}-${f.to}`}
          d={`M${x0},${y0} C${xm},${y0} ${xm},${y1} ${x1},${y1} L${x1},${y1 + h} C${xm},${y1 + h} ${xm},${y0 + h} ${x0},${y0 + h} Z`}
          fill={ORIGIN_COLOR[f.from]}
          className="opacity-35 hover:opacity-70 transition-opacity"
        >
          <title>{`${originName(f.from)} → ${f.to}: ~$${f.usdB.toFixed(1)}B`}</title>
        </path>
      ))}

      {FLOW_ORIGINS.map((o) => {
        const h = o.usdB * sc;
        const cy = lY[o.key] + h / 2;
        return (
          <g key={o.key}>
            <rect x={lx} y={lY[o.key]} width={nodeW} height={h} rx={2} fill={ORIGIN_COLOR[o.key]} />
            <text x={lx - 12} y={cy - 12} textAnchor="end" className="fill-textPrimary" fontSize={14} fontWeight={700}>
              <tspan x={lx - 12}>{o.label[0]}</tspan>
              <tspan x={lx - 12} dy={16}>
                {o.label[1]}
              </tspan>
            </text>
            <text x={lx - 12} y={cy + 24} textAnchor="end" fontSize={11.5} className="fill-textTertiary">
              {o.sub}
            </text>
          </g>
        );
      })}

      {right.map((r, i) => {
        const h = Math.max(r.usdB * sc, 1.5);
        const stays = 'stays' in r.d;
        const big = i === 0;
        return (
          <g key={r.name}>
            <rect x={rx} y={rY[r.name]} width={nodeW} height={h} rx={1.5} fill={stays ? MUTED : '#0A3D2E'} />
            <text
              x={rx + nodeW + 10}
              y={labelY[i]}
              dominantBaseline="middle"
              fontSize={big ? 17 : 12.5}
              fontWeight={big || stays ? 700 : 500}
              className="fill-textPrimary"
            >
              {r.name === 'Goldman Sachs Advisor Solutions' ? 'Goldman Sachs' : r.name}
            </text>
            <text
              x={W - 2}
              y={labelY[i]}
              dominantBaseline="middle"
              textAnchor="end"
              fontSize={big ? 17 : 12.5}
              fontWeight={700}
              className="tabular-nums"
              fill={big ? PRIMARY : '#0B1220'}
            >
              {destLabel(r.d)}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function DestinationsChart() {
  const max = DESTINATIONS[0].usdB;
  return (
    <Figure
      id="fig-destinations"
      title="About two-thirds of the money lands at Schwab"
      note="Base case. Where the $40.5B now at Fidelity goes, by starting point and destination. Altruist and Vanguard shown combined (deal pending). ~$15.5B of Schwab's total comes from firms that already custody there; other existing custodians include Raymond James, Axos, Pershing, LPL and AssetMark."
      source="Source: SEC Form ADV; FastTrackr estimates"
      estimated
      table={{
        head: ['From', 'To', '$B (base case)'],
        rows: FLOWS.map((f) => [
          FLOW_ORIGINS.find((o) => o.key === f.from)!.label.join(' '),
          f.to,
          f.usdB < 0.1 ? '<$0.1B' : `~$${f.usdB.toFixed(1)}B`,
        ]),
      }}
    >
      <div className="hidden sm:block">
        <div className="flex justify-between text-[11px] font-semibold uppercase tracking-wider text-textTertiary mb-2">
          <span>From: $40.5B at Fidelity</span>
          <span>To (base case)</span>
        </div>
        <FlowSankey />
      </div>
      {/* Phones: the same destinations as a bar list. */}
      <div className="sm:hidden space-y-3.5">
        {DESTINATIONS.map((d) => (
          <BarRow
            key={d.name}
            label={d.name}
            sub={'note' in d ? d.note : undefined}
            value={destLabel(d)}
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
  const bandL = (33 / total) * 100;
  const bandW = ((39 - 33) / total) * 100;
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
      <div className="relative pt-9">
        {/* the range every scenario lands in: a bracket above the bars and a light
            tint behind them (no vertical rules, so labels stay readable) */}
        <div
          className="absolute top-8 bottom-0 bg-[#0B7A55]/[0.08] rounded-sm"
          style={{ left: `${bandL}%`, width: `${bandW}%` }}
        />
        <div
          className="absolute top-6 h-2 border-x-2 border-t-2"
          style={{ left: `${bandL}%`, width: `${bandW}%`, borderColor: PRIMARY }}
        />
        <div
          className="absolute top-0 -translate-x-full text-xs font-bold whitespace-nowrap"
          style={{ left: `${bandL + bandW}%`, color: PRIMARY }}
        >
          ~$33–39B leaves in all four
        </div>
        <div className="relative space-y-4">
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
                  className="rounded-r-md"
                  style={{ width: `${(s.stays / total) * 100}%`, background: SECONDARY }}
                  title={`${s.name}: ~$${s.stays.toFixed(1)}B stays`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Figure>
  );
}

// ── Fig 8b: cohort share dumbbell ─────────────────────────────────────────────

export function CohortChart() {
  const rows = CUSTODIANS.filter((c) => !c.name.startsWith('Betterment'));
  const axisMax = 70;
  // Two rows carry the story: Altruist's jump and Fidelity's slide. The rest stay grey.
  const tone = (name: string) =>
    name.startsWith('Altruist') ? PRIMARY : name === 'Fidelity' ? FIDELITY_RED : MUTED;
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
          { label: '2021 and earlier', color: '#6B7280', hollow: true, round: true },
          { label: '2024–26', color: '#6B7280', round: true },
        ]}
      />
      <div className="space-y-4">
        {rows.map((c) => {
          const a = (c.cohortFrom / axisMax) * 100;
          const b = (c.cohortTo / axisMax) * 100;
          const color = tone(c.name);
          const altruist = c.name.startsWith('Altruist');
          const focus = color !== MUTED;
          return (
            <div key={c.name} title={`${c.name}: ${c.cohort}`}>
              <div className="flex items-baseline justify-between gap-3 text-sm mb-1">
                <span className={focus ? 'font-bold text-textPrimary' : 'text-textSecondary'}>
                  {c.name.replace(' (Vanguard)', '')}
                  {altruist && (
                    <span
                      className="ml-2 text-[11px] font-semibold rounded-full px-2 py-0.5 text-white"
                      style={{ background: PRIMARY }}
                    >
                      more than doubled
                    </span>
                  )}
                </span>
                <span
                  className={`text-xs tabular-nums shrink-0 ${focus ? 'font-bold' : 'font-semibold text-textSecondary'}`}
                  style={focus ? { color } : undefined}
                >
                  {c.cohort}
                </span>
              </div>
              <div className="relative h-4">
                <div className="absolute top-1/2 inset-x-0 h-px bg-gray-200" />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 ${altruist ? 'h-1.5 rounded-full' : 'h-0.5'}`}
                  style={{ left: `${Math.min(a, b)}%`, width: `${Math.abs(b - a)}%`, background: color }}
                />
                <span
                  className="absolute top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                  style={{ left: `${a}%`, border: `2px solid ${color}` }}
                />
                <span
                  className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white ${
                    altruist ? 'w-4 h-4' : 'w-3 h-3'
                  }`}
                  style={{ left: `${b}%`, background: color }}
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

// ── Fig 9b: total paperwork, range and mix (dark section) ─────────────────────

const MOVE_TONES = ['bg-brandMint', 'bg-brandMint/50', 'bg-white/35'];

export function PaperworkBreakdown() {
  const { low, base, high, byMove } = PAPERWORK;
  const axisMax = 600_000;
  const at = (n: number) => `${(n / axisMax) * 100}%`;
  const sum = byMove.reduce((s, m) => s + m.docs, 0);
  return (
    <div className="mt-5 space-y-5">
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-2">
          Documents, low to high estimate
        </div>
        <div className="relative h-4" title={`Range ${fmt(low)}–${fmt(high)}; base ${fmt(base)}`}>
          <div className="absolute top-1/2 inset-x-0 h-px bg-white/15" />
          <div
            className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-white/25"
            style={{ left: at(low), width: `${((high - low) / axisMax) * 100}%` }}
          />
          <span
            className="absolute top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brandMint ring-2 ring-brandDeep"
            style={{ left: at(base) }}
          />
        </div>
        <div className="relative h-4 mt-1 text-[11px] tabular-nums text-white/60">
          <span className="absolute -translate-x-1/2" style={{ left: at(low) }}>
            {fmtK(low)}
          </span>
          <span className="absolute -translate-x-1/2 font-bold text-brandMint" style={{ left: at(base) }}>
            ~{fmtK(base)}
          </span>
          <span className="absolute -translate-x-1/2" style={{ left: at(high) }}>
            {fmtK(high)}
          </span>
        </div>
      </div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-2">
          Base case, by type of move
        </div>
        <div className="flex h-3 gap-[2px]">
          {byMove.map((m, i) => (
            <div
              key={m.move}
              className={`${MOVE_TONES[i]} ${i === 0 ? 'rounded-l-md' : ''} ${i === byMove.length - 1 ? 'rounded-r-md' : ''}`}
              style={{ width: `${(m.docs / sum) * 100}%` }}
              title={`${m.move}: ~${fmtK(m.docs)} documents`}
            />
          ))}
        </div>
        <ul className="mt-2 space-y-1 text-xs text-white/80">
          {byMove.map((m, i) => (
            <li key={m.move} className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className={`inline-block w-2.5 h-2.5 rounded-sm ${MOVE_TONES[i]}`} />
                {m.move}
              </span>
              <span className="font-semibold tabular-nums">~{fmtK(m.docs)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Fig 9c: Jordan's nine months (dark section) ───────────────────────────────

/** Workload callouts printed inside the step bars on sm+ screens. */
const GANTT_TAGS: Record<string, string> = {
  'Client meetings and signatures': '~386 documents · 51 households',
  'Transfers in waves': '~128 accounts',
};

export function JordanGantt() {
  const { start, end, steps, fasttrackrSpan, taxSeason } = JORDAN_PLAN;
  const p = (d: string) => pctBetween(d, start, end);
  const taxL = p(taxSeason[0]);
  const taxW = p(taxSeason[1]) - taxL;
  const ftL = p(fasttrackrSpan[0]);
  const ftW = p(fasttrackrSpan[1]) - ftL;
  const today = useToday();
  const now = todayPct(today, start, end);
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
        {/* tax season overlay, today marker and the June 30 deadline line */}
        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: `${taxL}%`, width: `${taxW}%`, background: 'rgba(253, 231, 176, 0.10)' }}
        />
        {now !== null && (
          <div
            className="absolute inset-y-0 border-l border-dashed border-white/40 pointer-events-none"
            style={{ left: `${now}%` }}
          />
        )}
        <div className="absolute inset-y-0 right-0 w-0.5 bg-[#F08A75] pointer-events-none" />
        <div className="relative space-y-3 pt-7">
          <div
            className="absolute top-0 text-[10px] font-semibold uppercase tracking-wider text-amber-200/80"
            style={{ left: `${taxL}%` }}
          >
            Tax season
          </div>
          {now !== null && now < 75 && (
            <div className="absolute top-0 pl-1.5 text-[10px] font-semibold text-white/70" style={{ left: `${now}%` }}>
              Today
            </div>
          )}
          <div className="absolute top-0 right-0 pr-2 text-[10px] font-bold uppercase tracking-wider text-[#F08A75]">
            Jun 30<span className="hidden sm:inline"> deadline</span>
          </div>
          {steps.map((s) => {
            const l = p(s.start);
            const w = p(s.end) - l;
            const rightSide = l > 50;
            const tag = GANTT_TAGS[s.label];
            return (
              <div key={s.label} className="relative h-8">
                <div
                  className="absolute inset-y-1 rounded-md bg-brandMint/85 flex items-center justify-center overflow-hidden"
                  style={{ left: `${l}%`, width: `${w}%` }}
                  title={`${s.label}: ${s.start} to ${s.end}${tag ? ` (${tag})` : ''}`}
                >
                  {tag && (
                    <span className="hidden md:inline px-1.5 text-[10px] font-bold text-brandDeep whitespace-nowrap">
                      {tag}
                    </span>
                  )}
                </div>
                <span
                  className="absolute top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-white whitespace-nowrap"
                  style={rightSide ? { right: `${100 - l + 1}%` } : { left: `${l + w + 1}%` }}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
          <div className="relative h-8">
            <div
              className="absolute inset-y-0.5 rounded-md bg-white text-brandDeep flex items-center justify-center text-[10px] sm:text-[11px] font-bold shadow-sm"
              style={{ left: `${ftL}%`, width: `${ftW}%` }}
            >
              <span className="sm:hidden">FastTrackr</span>
              <span className="hidden sm:inline whitespace-nowrap">FastTrackr: data → forms → e-sign → transfer</span>
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
