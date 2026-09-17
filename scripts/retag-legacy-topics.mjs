#!/usr/bin/env node
// W4 (Step C) — one-pass re-tagger for the legacy blog posts.
//
// 192 of 196 content/legacy-posts/*.json have `topic: null` (and 4 more carry
// non-canonical strings), which is the real cause of the "42% uncategorized"
// problem: every one of them fell into the "More resources" catch-all on the
// Resources page and got no topical related-posts. This assigns each legacy post
// a canonical category TITLE from src/lib/blogCategories.ts, deterministically
// from its slug, so the classification is reproducible and reviewable.
//
// Principle: advisor-transition/repapering is the honest home for most of this
// corpus. Genuinely GENERAL posts (podcasts, notetaking, prospecting, general
// compliance / document-processing / AI-strategy) route to their own category;
// anything about the transition/repapering process itself — even a compliance or
// document angle — stays under Transitions so that category stays coherent.
//
// Usage:
//   node scripts/retag-legacy-topics.mjs --dry   # print the classification, write nothing
//   node scripts/retag-legacy-topics.mjs         # write topics + emit a report
//
// Nothing here is committed until the WZ go-live ticket; review the report and
// the git diff, hand-correct any miss by editing the post's JSON `topic`.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'content/legacy-posts');
const DRY = process.argv.includes('--dry');

const TITLES = {
  INACTION: 'FastTrackr AI in Action',
  TRENDS: 'Advisor Trends & Industry',
  NOTETAKING: 'Client Communication & Notetaking',
  GROWTH: 'Prospecting & Growth',
  TRANSITIONS: 'Advisor Transitions & Repapering',
  COMPLIANCE: 'Compliance, Security & Data',
  DOCS: 'Document Processing & Back-Office',
  STRATEGY: 'AI in Wealth Management Strategy',
};

// Ordered rules — first match wins. Matched against a lowercased haystack of the
// slug + title (title catches transition posts whose slug omits the word, e.g.
// "prepare-clients-before-day-one"). The general "wins-first" categories are
// checked before the broad Transitions catch, and STRATEGY is the final fallback
// so no post is left uncategorized.
const RULES = [
  [TITLES.INACTION, /fasttrackr-ai-achieves|soc-2-type-ii|fasttrackr-ai-at-wealth-management-edge/],
  [
    TITLES.TRENDS,
    /-podcast(-\d+)?$|-podcast-|advisor-ally|gai-ventures|must-watch-podcasts|advisory-3-0|from-gold-mines|from-iit-bombay|building-a-800m-advisory-firm|the-fun-financial-planner|carbon-collective|overconfident-investors|advice-only|the-rise-of-advice|financial-planning-for-the-next-generation|why-financial-advice-is-more|three-big-opportunities|democratizing-financial-advice|standout-young-advisor|the-journalist-every-financial-advisor|transforming-wealth-management-through-vertical-ai/,
  ],
  [
    TITLES.NOTETAKING,
    /notetaking|note-taking|meeting-assistant|ai-client-communication|client-communication-tools|automating-content-and-commun/,
  ],
  [
    TITLES.GROWTH,
    /client-acquisition|client-prospecting|prospecting|lead-scoring|five-pillars-of-client-retention|scale-ria-practice-without-hiring|marketing-and-client/,
  ],
  [
    TITLES.TRANSITIONS,
    /transition|repaper|repapering|acats|nigo|breakaway|wirehouse|custodian|book-of-business|osj|empanelment|recruit|asset-leakage|asset-retention|post-merger|aggregator|from-form-to-fund|moving-your-book|your-book|1b-book|300m-book|150m|200m|10000-accounts|500-accounts|100-client-households|zero-nigo|per-account-pricing|orion-advisor|precisefp|docupace|due-diligence|advisor-onboarding|onboarding-time|time-to-productivity|advisor-departure|ma-integration|ma-technology|broker-dealer-ma|generational-wealth-transfer|move-\d/,
  ],
  [
    TITLES.COMPLIANCE,
    /compliance|compliant|finra|sec-requirements|-sec-|audit|data-privacy|data-security|regulatory|soc-2|-pii-|reg-bi/,
  ],
  [
    TITLES.DOCS,
    /document|back-office|form-completion|form-accuracy|paperwork|paperless|workflow-automation|data-entry|client-onboarding|onboarding-automation|-dms-/,
  ],
];

function classify(slug, title) {
  const haystack = `${slug} ${(title || '').toLowerCase()}`;
  for (const [cat, re] of RULES) {
    if (re.test(haystack)) return cat;
  }
  return TITLES.STRATEGY; // general AI / wealth-management strategy fallback
}

const files = fs.readdirSync(DIR).filter((f) => f.toLowerCase().endsWith('.json'));
const byCategory = new Map();
let changed = 0;

for (const f of files) {
  const p = path.join(DIR, f);
  const post = JSON.parse(fs.readFileSync(p, 'utf8'));
  const slug = (post.slug || path.basename(f, '.json')).trim();
  const topic = classify(slug, post.title);
  if (!byCategory.has(topic)) byCategory.set(topic, []);
  byCategory.get(topic).push({ slug, title: post.title, was: post.topic ?? null });
  if (post.topic !== topic) {
    changed++;
    if (!DRY) {
      post.topic = topic;
      fs.writeFileSync(p, JSON.stringify(post, null, 0).replace(/\n/g, ''));
    }
  }
}

// Report (stable order: canonical categories, then counts).
const order = [
  TITLES.TRANSITIONS,
  TITLES.COMPLIANCE,
  TITLES.DOCS,
  TITLES.STRATEGY,
  TITLES.NOTETAKING,
  TITLES.GROWTH,
  TITLES.TRENDS,
  TITLES.INACTION,
];
let report = `# W4 legacy re-tag ${DRY ? '(DRY RUN — nothing written)' : ''}\n\n`;
report += `${files.length} legacy posts · ${changed} topic values ${DRY ? 'would change' : 'changed'}\n\n`;
for (const cat of order) {
  const list = (byCategory.get(cat) || []).sort((a, b) => a.slug.localeCompare(b.slug));
  report += `## ${cat} — ${list.length}\n`;
  for (const it of list) report += `- ${it.slug}  ::  ${it.title}\n`;
  report += `\n`;
}

const outDir = process.env.SCRATCH || '/tmp';
const outFile = path.join(outDir, 'w4-retag-report.md');
fs.writeFileSync(outFile, report);
console.log(report.split('\n').slice(0, 3).join('\n'));
for (const cat of order) console.log(`  ${(byCategory.get(cat) || []).length.toString().padStart(4)}  ${cat}`);
console.log(`\nReport: ${outFile}`);
