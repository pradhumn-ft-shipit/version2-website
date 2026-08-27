# 009 — QA gate report: SSG migration acceptance sweep

**Branch:** `spike/rr7-ssg` · **Date:** 2026-08-27 · **Type:** AFK QA gate (blocks 010, blocked by 006/007/008)

## Environment note (why this ran locally, not on the Render preview)

The ticket's ideal is to sweep the **Render per-branch preview deploy**. This run is executed by a
local, sandboxed agent under hard boundaries that **forbid `git push`, contacting any remote,
deploying, and all network access beyond `npm`** — so no preview URL could be created, and no
`chrome-devtools` MCP / browser / Lighthouse was available.

To keep the gate meaningful, every check below was run against the **real `npm run build` SSG
artifact in `dist/`** — the byte-for-byte output Render publishes (`staticPublishPath: ./dist`) —
served through a throwaway static server that mirrors static-host semantics (serve a real file if
it exists; SPA-fallback otherwise, i.e. Netlify/Render precedence). AI-crawler user agents were
simulated with `curl -A`.

**Bottom line:** every box that can be objectively verified against the published artifact is
**GREEN**. Three boxes are **PENDING PREVIEW** — they require the live Render deploy, the live
Cloudflare worker, or a real browser, none reachable from this sandbox. Because the auto-pass rule
requires **every** box objectively green, **009 is NOT auto-passed; do not treat 010 as unblocked
until the three PENDING boxes are confirmed on the preview** (the 010 cutover is HIL anyway).

---

## Results

| # | Acceptance criterion | Verdict | Evidence |
|---|---|---|---|
| 1 | `curl` marketing (home + solutions + legal) → full body, not empty `#root` | ✅ GREEN | home body 2,448 chars; `/solutions/meeting-assistant` 2,978; `/privacy-policy` 12,258. `emptyRoot=False`. |
| 2 | `curl` a blog post AND a news article → full article text | ✅ GREEN | blog `scale-ria-practice-without-hiring` 6,072 chars; news launch article 6,355 chars. |
| 3 | Full content under ClaudeBot / GPTBot / OAI-SearchBot / PerplexityBot, no JS | ✅ GREEN | identical body length + `http=200` for all 4 crawler UAs vs a normal UA on all 5 page types — static bytes, JS never executed. |
| 4 | All ~460 routes prerendered; sample every type returns 200 w/ body; count recorded, matches 006 | ✅ GREEN | **502** `index.html` prerendered = 34 static/marketing + 467 blog + 1 news. Matches 006 enumeration (`buildPrerenderPaths`: static + every blog slug + every news slug; index reports 467 blog / 1 news). Grew from the plan's ~460 as content was added — the zero-touch point of 006. |
| 5 | Clean URLs — no `.html`, no trailing-slash weirdness | ✅ GREEN | only non-index html is the intentional `__spa-fallback.html`; **0** site-relative `.html` hrefs (the `.html` links present are external, e.g. lpl.com); **0** canonicals with a stray trailing slash (root `/` excepted); clean paths (`/pricing`, `/who-we-serve/custodians`, …) all serve 200 with their own content. |
| 6 | Every redirect from 003 resolves correctly | ✅ GREEN (artifact) / ⚠️ preview for host 301s | 10 redirect stubs emit `<meta http-equiv="refresh">` to live targets (all targets return 200): `for-custodians→/who-we-serve/custodians`, `for-ibds`, `for-breakaway-advisors`, `for-acquisitive-rias`, `for-transition-consultants`, `about→/`, `blog→/resources/blog`, `resources/podcast→/resources/blog`, `aon→/contact`, `onepagecrm→/contact`. `aon`/`onepagecrm` also have host 301s (`render.yaml` + `dist/_redirects`) — the 301 itself only fires on the live host. |
| 7 | SEO parity: title/desc/canonical/OG/Twitter/JSON-LD; BlogPosting + NewsArticle; JSON-LD valid | ✅ GREEN | all 4 sampled pages carry title, description, canonical, `og:title/type/image`, `twitter:card`. JSON-LD parses valid: **Organization** (home), **BlogPosting** (blog: headline + datePublished + author), **NewsArticle** (news: headline + datePublished + author). Marketing sub-pages carry head meta without page-level JSON-LD (matches plan: Organization on marketing home). |
| 8 | No hydration-mismatch console errors; entrance animations don't flicker/hide content w/o JS (007) | ✅ GREEN (static) / ⚠️ live console PENDING | **0** inline `opacity:0` baked into prerendered HTML → content visible without JS. `src/lib/motion.tsx` suppresses hidden `initial` during SSR + the hydration render (`initial={false}`), so the client's first render matches the server — the opacity/`whileInView` mismatch class (React #418) is structurally prevented. Live console confirmation needs a browser (see PENDING). |
| 9 | Cloudflare `/api/contact` works cross-origin from the Render site | ⚠️ PENDING PREVIEW | contact `<form>` is present in prerendered `/contact` HTML; posts to `VITE_CONTACT_API_URL` (`render.yaml` → `https://version2-website.pages.dev/api/contact`); `functions/_worker.ts` is byte-identical to `main`. The live cross-origin round-trip needs the deployed site + worker + network. |
| 10 | LCP / Core Web Vitals spot-check (home + a blog post) | ⚠️ PENDING PREVIEW | needs Lighthouse in a real browser against the served pages — no `chrome-devtools` MCP / browser in this sandbox. SSG makes full body first-paint (no client fetch for content) so LCP should be same-or-better than CSR, but this is unmeasured here. |

**Also green:** `npm run build` passes (`✓ built in ~2.5s`, prerender enumerated all slugs); `npm test` = **15/15** across blog loaders, news loaders, and prerender enumeration.

## PENDING-PREVIEW checklist (for whoever runs the HIL 010 cutover)

Run these against the Render preview URL before merging to `main`:

1. **Live console/hydration** — load home, a solutions page, and a blog post in a browser; confirm **no React #418/#425 hydration warnings** and entrance animations play without a content flash.
2. **Cross-origin contact** — submit the `/contact` form on the preview; confirm the POST to the `*.pages.dev` worker succeeds (CORS + 200).
3. **Lighthouse** — LCP / CWV on home + a blog post, same-or-better than the current CSR site.
4. **Clean-URL sanity on the real host** — hard-refresh `/pricing`, `/solutions/*`, `/who-we-serve/*`, a legal page, a blog post, a news article and confirm each serves **its own** prerendered content (not the home shell). `render.yaml` still carries the pre-SSG per-type rewrites + the `/* → /index.html` SPA catch-all; on Render/Netlify precedence a real file wins over the catch-all, so this should hold — but it is the one thing worth eyeballing on the live host. (Pruning those now-redundant rules is explicitly deferred to **011**.)

## Known / not blocking

- **Soft-404s** (unknown blog/news slugs served 200 via SPA fallback) — the documented, owned open item; observed here (fallback serves the shell), **not a blocker** for this migration.
