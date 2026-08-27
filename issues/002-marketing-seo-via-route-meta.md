# 002 — Marketing SEO via route `meta` (homepage first, establishes the pattern)

**Type:** AFK
**Blocks:** 003, 004, 005
**Blocked by:** 001

## Skills
- `frontend-visual-qa` — confirm the homepage still renders unchanged and the `<head>` (title/meta/OG/JSON-LD) is correct after moving to route `meta`. No TDD / red-first — implement directly.

## Slice
Move per-page `<head>` data from the runtime `useSeo()` hook into framework-mode route `meta`/head exports, so title/description/canonical/OG/Twitter/JSON-LD are baked into the static HTML `<head>` (not applied after hydration). Prove the pattern on the homepage; 003/004/005 replicate it.

- Service/lib: keep the pure helpers in `src/lib/seo.ts` (`absoluteUrl`, `clampText`, `SITE_ORIGIN`, `SeoConfig` type). Introduce a route-level `meta` export pattern (and, where needed, a `links` export for canonical) that consumes the same config shape.
- Route: homepage route exports `meta` producing title, description, canonical, `og:*`, `twitter:*`. Any JSON-LD the homepage emits goes into route head data.
- UI/head: curl'd `/` HTML `<head>` contains the correct title, meta description, `link[rel=canonical]`, OG/Twitter tags, and JSON-LD — identical values to what `useSeo()` produced before.
- `CanonicalSync` behavior (from `App.tsx`) is folded into `meta`/`links` or removed.

## Acceptance
- [ ] `curl /` `<head>` contains correct `<title>`, `<meta name="description">`, `<link rel="canonical">`, `og:title/description/type/url`, `twitter:card/title/description`, and JSON-LD — matching the pre-migration values.
- [ ] No hydration mismatch on the head after client takes over.
- [ ] The SEO pattern is documented inline (a short comment or helper) so 003/004/005 can copy it mechanically.
- [ ] `clampText`/`absoluteUrl` still the single source for description trimming and URL absolutization (no divergent copies).

## Notes
- **Runtime-dynamic head audit (AFK, self-serve):** Pradhumn wasn't certain any page needs a render-time-computed head, so the agent audits it. Grep every `useSeo()` call site; for each, determine whether title/description/canonical/OG is derivable at build time (static string, or from the route's build-time loader data) or genuinely runtime-only (depends on client state / user / query not known at build). **If all are build-time-derivable:** fully retire `useSeo()` and move on — no need to ask. **If any is runtime-only:** DON'T delete `useSeo()` for those pages — keep a runtime head path for them, list them in this ticket's completion notes, and flag to Pradhumn. Report the audit result either way.
- `scripts/prerender.mjs`'s `clamp()` mirrors `clampText()` — once meta is authoritative, that duplication is removed in 011 when `prerender.mjs` is deleted. Don't let them silently diverge in the meantime.
