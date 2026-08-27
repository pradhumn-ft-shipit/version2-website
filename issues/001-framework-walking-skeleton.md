# 001 — Walking skeleton: framework mode renders the homepage's full body in static HTML

**Type:** AFK
**Blocks:** 002, 003, 004, 005
**Blocked by:** —

## Skills
- `frontend-visual-qa` — after the build, load `/` and confirm the homepage renders + hydrates with no console/hydration errors. No TDD / red-first — implement directly.

## Slice
The irreducible bootstrap for everything else: stand up React Router v7 **framework mode (`ssr: false` + `prerender`)** and prove ONE marketing page ships real `<body>` content in the raw HTML. This is the plan's Phase 0 (spike) + Phase 1 (scaffolding) + a one-route slice of Phases 2 & 5, done together because none of them is independently curl-able.

- Build/config: add `@react-router/dev` Vite plugin to `vite.config.ts` (keep the existing `advancedChunks` groups); add `react-router.config.ts` with `ssr: false` and a `prerender` array that for now enumerates only `['/']`. Update `package.json` build: `vite build` → `react-router build` (keep `blog:build` running first, keep `tsc -b`). Leave `scripts/prerender.mjs` in place and wired for now — it is retired later (011), not here.
- Entry: replace `src/main.tsx` `createRoot(...).render(<App/>)` with framework entries — `app/root.tsx` (root route: `<html>` shell, `<Meta/>`, `<Links/>`, `<Scripts/>`, `<ScrollRestoration/>`, the `LazyMotion` wrapper, and the shared page chrome currently in `App.tsx`), a client entry using `hydrateRoot`, and a routes module.
- Routes: register just `/` → the existing `src/pages/Home.tsx` component, rendered through the framework route tree. Preserve the current `ScrollToTop` and `CanonicalSync` behavior (or note them as deferred to 002/007 if they fight SSR).
- UI: homepage renders identically to today after hydration; no visual regression.

## Acceptance
- [ ] All work is on branch `spike/rr7-ssg` (branched from up-to-date `main`).
- [ ] `npm run build` succeeds end-to-end (blog:build → tsc → react-router build).
- [ ] `dist/index.html` (served at `/`) contains real homepage hero copy in `<body>` — NOT an empty `<div id="root"></div>`. Verify with `curl`/grep for a known hero string.
- [ ] Loading `/` in a browser hydrates with **no hydration-mismatch console errors**.
- [ ] Homepage is visually unchanged after hydration (spot-check hero, nav, footer).
- [ ] Build artifacts (`dist/`, regenerated `public/blog-data/**`, `sitemap.xml`) are NOT committed with this ticket — code/config only.

## Notes
- Kill switch: if framework mode fights the Vite 7 / rolldown setup irrecoverably, stop and report before sinking more than ~half a day — that's the Phase 0 de-risk purpose.
- Deploy target is **Render static site** (`render.yaml`, `staticPublishPath: ./dist`). The Cloudflare `functions/_worker.ts` worker serves only the cross-origin `/api/contact` form and is out of scope — do not touch it.
- `App.tsx` is not deleted yet; its route list is the migration checklist consumed by 003/004/005. It can be removed once every route is ported (003).
- Deployment/preview validation is deferred to 009/010 — this ticket only needs a green local build + curl check.
