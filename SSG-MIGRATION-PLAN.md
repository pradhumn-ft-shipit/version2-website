# SSG Migration Plan — Full-content prerendering for AI/crawler discoverability

> **Status:** Approved plan, ready to break into vertical-slice tickets.
> **Owner:** Pradhumn. **Created:** 2026-08-27.
> **Next step in a clean context:** read this file, then run the `vertical-slice-kanban`
> skill to turn the phases below into independently grabbable tickets in `issues/`.

---

## Why we're doing this

The site is a **client-side-rendered (CSR) React SPA** (Vite + React 19 + React Router v7).
The server ships an empty shell (`<div id="root"></div>`) and React builds every page in
the browser. Most AI crawlers (ClaudeBot, GPTBot/OAI-SearchBot, PerplexityBot) and several
social/search crawlers (Bing, LinkedIn, Slack, X) **do not execute JavaScript**, so they
see no body content.

Current mitigation (`scripts/prerender.mjs`) bakes only the `<head>` (title, meta, canonical,
OG/Twitter, JSON-LD) into per-route static HTML. The **`<body>` stays empty** — verified: a
prerendered blog post is ~4.5KB and its body is literally `<div id="root"></div>`.

**Goal:** every page — marketing pages *and* blog/news — ships its **full rendered body** in
the raw HTML, so AI models and non-JS crawlers can read and cite the actual content. Secondary
wins: faster LCP/Core Web Vitals, works without JS, better indexing independent of Google's
deferred-render queue.

## Chosen approach: Option C — React Router v7 framework mode, as SSG

We evaluated three options:
- **A. Headless-browser crawl (react-snap/Puppeteer)** — lowest effort, but needs Chromium in
  the build environment and re-animation-flash risk; still a hand-rolled script to maintain.
- **B. Node SSG (`react-dom/server`)** — medium effort, bespoke build script to maintain.
- **C. RR v7 framework mode (SSG)** — **chosen.** Highest one-time cost, but **zero recurring
  maintenance** and retires the hand-rolled `prerender.mjs`. We're already on
  `react-router-dom` v7, so framework mode is the idiomatic path.

**Decision rationale:** user wants *maximum impact* + *no recurring work to adapt* + Tejas's
blog flow preserved. C is the only option that gives full-content coverage AND removes the
bespoke prerender script AND auto-covers new content with no config edits.

### Why C covers marketing pages (the key advantage)

Marketing pages (`/`, `/pricing`, `/solutions/*`, `/who-we-serve/*`, `/contact`, `/fpa`,
`/case-study/*`, legal pages) have their content **inside the React components** — there is no
JSON data source for them. Framework-mode prerendering **runs the real component at build
time** and serializes what it renders, so the full copy is baked in. This is the thing the
current head-only prerender cannot do.

| Page type | Content source | Covered |
|---|---|---|
| Marketing (home, pricing, solutions, who-we-serve, contact, fpa, case-study, legal) | React components (JSX) | ✅ full body |
| Blog posts | JSON on disk (`public/blog-data/posts/*.json`, `content` field) | ✅ full body |
| News / press releases | JSON on disk (`public/news-data/posts/*.json`) | ✅ full body |

## Settled decisions (do not re-litigate)

1. **Mode: `ssr: false` + `prerender`.** Static HTML output, SPA fallback for anything not
   prerendered. **No new infra** — deploys to the existing Render static site unchanged
   (`buildCommand: npm run build`, `staticPublishPath: ./dist`). SSR (a Node/Workers runtime)
   is explicitly **out of scope**; not needed for the goal.
2. **Zero-maintenance linchpin: dynamic `prerender`.** The `prerender` config is a **function**
   that enumerates paths at build time = `all static/marketing routes + every blog slug + every
   news slug`, reading the slugs from `public/blog-data/index.json` and
   `public/news-data/index.json`. New content is prerendered automatically — **no route list to
   edit, ever.**
3. **Tejas's flow is frozen.** `content/tejas/<YYYY-MM-DD>/*.md` → PR → `path-guard.yml` +
   `auto-merge-blog.yml` → build. `build-blog-data.mjs` still runs first in `npm run build`;
   the prerender picks up its JSON output. No changes to the content authoring workflow,
   allowlist workflows, or folder convention.
4. **Isolation: throwaway branch.** Do the whole migration on `spike/rr7-ssg` (branched from an
   up-to-date `main`). Validate on Render's per-branch **preview URL**. Merge only after Phase 8
   passes. If it fails, `git branch -D` and nothing is lost. Long-lived branch → periodically
   merge `main` in (Tejas only touches `content/tejas/`, so low conflict risk).
5. **Clean URLs — no `.html`.** Prerender writes directory-style files
   (`dist/pricing/index.html`, `dist/blog/<slug>/index.html`), served at `/pricing`,
   `/blog/<slug>`. Same convention as today's `prerender.mjs`. Added as an explicit acceptance
   check (Phase 8).
6. **No new hosting infra; Cloudflare contact worker untouched.** The site stays on Render;
   `functions/_worker.ts` (Cloudflare `*.pages.dev`) keeps serving `/api/contact` cross-origin.

## Open questions to resolve during ticketing

- **`useSeo()` vs framework `meta` export.** Lean toward moving per-page SEO into route-level
  `meta`/head data (first-class in framework mode) and deleting `useSeo()` + `prerender.mjs`.
  Confirm no page needs runtime-dynamic head that only `useSeo()` provided.
- **Animation audit aggressiveness.** 234 framer-motion entrance patterns (mostly
  `initial={{ opacity: 0 }}`). Decide the standard: render content **visible by default**,
  animation as progressive enhancement (avoids invisible-without-JS and hydration flicker).

## Phased plan (source for vertical-slice tickets)

**Phase 0 — Spike / de-risk.** On `spike/rr7-ssg`, stand up RR v7 framework mode with only the
homepage + one blog post prerendering. Confirm: static HTML has real body content, deploys to a
Render preview, hydration works. ~half a day. Kill switch if it fights the stack.

**Phase 1 — Framework scaffolding.** Add `@react-router/dev` Vite plugin; introduce root route
+ routes config; switch entry from `createRoot` (client-only) to server/client entries with
`hydrateRoot`. Map existing `BrowserRouter`/`Routes` behavior 1:1.

**Phase 2 — Route migration.** Port every route from `src/App.tsx` into the framework route
tree: marketing, ICP/solutions/legal, and `:slug` routes for blog + news. Preserve all
redirects (`/for-*`, `/aon`, `/onepagecrm`, etc.).

**Phase 3 — Data loaders (build-time disk reads).** Replace client `fetch('/blog-data/...')`
(`src/lib/blog.ts`) and news fetchers (`src/lib/news.ts`) with `loader` functions that read the
JSON from disk at build. This is what puts blog/news content into the HTML. Also do SSR-safety:
guard `window`/`document`/`localStorage` access behind `useEffect`/`typeof window` for
components that render at build.

**Phase 4 — SEO meta.** Move `useSeo()` output into route `meta` exports (title, description,
canonical, OG/Twitter); move `BlogPosting`/`NewsArticle`/`Organization` JSON-LD into
route-level head data. (See `src/lib/seo.ts`.)

**Phase 5 — Dynamic prerender config (zero-touch core).** Implement the `prerender` function
enumerating static routes + every blog slug + every news slug from the JSON indexes. Verify the
generated page count matches today's (~460) and grows automatically when a post is added.

**Phase 6 — Animation & hydration audit.** Make server HTML render content visible by default;
animation as enhancement. QA high-animation pages (Hero, a solutions page, a blog post) in the
browser for flicker/hydration warnings. Files: `src/components/Hero.tsx`, `Outcomes.tsx`,
`PainSection.tsx`, `HowItWorks.tsx`, page components under `src/pages/`.

**Phase 7 — Preserve Tejas's flow + CI.** Confirm `build-blog-data.mjs` still runs first and the
prerender consumes its output. Dry-run: add a dummy `content/tejas/<date>/` post, build, confirm
its static HTML has full body — no config edits. Leave `path-guard.yml` /
`auto-merge-blog.yml` untouched.

**Phase 8 — Cutover (zero downtime).** Merge to branch → Render PR/preview deploy → validate:
`curl` a blog post and a marketing page for real `<body>` content; check hydration + animations
in a browser; spot-check JSON-LD; **confirm clean URLs (no `.html`)**. Then merge to `main`;
Render's atomic swap goes live. Rollback = redeploy previous build.

**Phase 9 — Cleanup.** Delete `scripts/prerender.mjs`. Update `CLAUDE.md`,
`Blog-Migration-Guide.md`, and any now-redundant Render routing rules in `render.yaml`
(remember: Render Blueprint won't delete rules — prune in the dashboard too).

## Acceptance criteria (definition of done)

- [ ] `curl <marketing page>` returns full body copy in HTML (not an empty `#root`).
- [ ] `curl <blog post>` and `<news article>` return full article text in HTML.
- [ ] All ~460 routes prerendered; count grows automatically when a post is added (no config edit).
- [ ] URLs are clean — no `.html`, no trailing-slash weirdness.
- [ ] Tejas's markdown-drop → auto-merge → build flow works unchanged; a new post is SSG'd with no manual step.
- [ ] Deploys as static to the existing Render site; no new infra; Cloudflare contact worker still works.
- [ ] No hydration-mismatch console errors on key pages; entrance animations don't flicker or hide content without JS.
- [ ] `scripts/prerender.mjs` removed; SEO (title/description/canonical/OG/JSON-LD) preserved via framework meta.

## Effort

~1–2 weeks, front-loaded into Phases 1–3. Phase 6 (animations) is the fiddly one. One-time cost;
zero recurring maintenance afterward.

## Key files touched (map for ticketing)

- `src/App.tsx` — route tree → framework routes config (Phase 2)
- `src/main.tsx` — `createRoot` → `hydrateRoot` + framework entries (Phase 1)
- `src/lib/blog.ts`, `src/lib/news.ts` — client fetch → build-time loaders (Phase 3)
- `src/lib/seo.ts` — `useSeo()` → route `meta` exports (Phase 4)
- `scripts/build-blog-data.mjs` — unchanged; still runs first (Phase 7)
- `scripts/prerender.mjs` — deleted at the end (Phase 9)
- `render.yaml` — routing rules review/prune (Phase 9)
- `vite.config.ts`, `package.json` — add `@react-router/dev`, adjust build (Phase 1)
- framer-motion components under `src/components/` and `src/pages/` — animation audit (Phase 6)
