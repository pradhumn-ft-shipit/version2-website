# 003 — Port all static/marketing/ICP/solutions/legal routes + preserve every redirect

**Type:** AFK
**Blocks:** 006
**Blocked by:** 001, 002

## Skills
- `frontend-visual-qa` — spot-check a sampled marketing page, a legal page, and a redirect render correctly (full body, dark mode, no console errors). No TDD / red-first — implement directly.

## Slice
Port every non-dynamic route from `src/App.tsx` into the framework route tree, each with its `meta` (pattern from 002), and preserve all redirects. After this ticket the whole static surface renders full-body in static HTML and `App.tsx` can be deleted.

- Routes (content pages, each a framework route → existing page component, each with `meta`):
  - Home `/` (already done in 001 — add meta if not yet).
  - Who-we-serve: `/who-we-serve/{transition-consultants,breakaway-advisors,acquisitive-rias,independent-broker-dealers,custodians}`
  - Solutions: `/solutions/{advisor-transitions,client-onboarding,meeting-assistant,document-intelligence}`
  - Core/marketing: `/pricing`, `/contact`, `/fpa`, `/case-study/advisor-transition`, `/resources-for-financial-advisors` (Resources), `/zoom-help-documentation`
  - Legal: `/privacy-policy`, `/tos`, `/privacy-policy-transitions`, `/tos-transitions`, `/client-privacy-notice`, `/client-data-consent-acknowledgment`
- Redirects (preserve exact targets):
  - `/for-transition-consultants → /who-we-serve/transition-consultants`, `/for-breakaway-advisors → …`, `/for-acquisitive-rias → …`, `/for-ibds → /who-we-serve/independent-broker-dealers`, `/for-custodians → …`
  - `/blog → /resources/blog`, `/resources/podcast → /resources/blog`
  - `/about → /`, `/aon → /contact`, `/onepagecrm → /contact`
  - (`/resources/blog/:slug → /blog/:slug` is a dynamic redirect — owned by 004.)
- Note: `/resources/blog`, `/blog/:slug`, `/resources/news`, `/resources/news/:slug` are data-backed and owned by 004/005 — this ticket only ports the STATIC surface + redirects. Keep the `Resources` page (`/resources-for-financial-advisors`) here even though it reads the blog index; its loader can be a thin stub until 004 lands the index loader, or it can depend on 004's loader — pick the lower-risk path and note which.
- UI: `NotFound` catch-all (`*`) registered and rendering.

## Acceptance
- [ ] Every static route above is registered in the framework route tree and renders full body copy in `curl`'d HTML.
- [ ] Every redirect above resolves to the correct target (verify each — prerendered redirect or SPA-level, matching today's behavior).
- [ ] Each ported page's `<head>` has correct title/description/canonical/OG (pattern from 002).
- [ ] `src/App.tsx` is deleted (or reduced to nothing referenced), with no remaining `BrowserRouter`/`Routes` usage.
- [ ] `npm run build` green; no hydration-mismatch errors on a sampled marketing page, a legal page, and a redirect.
- [ ] Build artifacts not committed.

## Notes
- Redirects that were `<Navigate>` in the SPA must still work for direct hits / crawlers. Decide per redirect whether it becomes a prerendered redirect (meta refresh / 301 via `render.yaml`) or a client redirect, and keep parity with today. Cross-check against `render.yaml` and `public/_redirects` so you don't double-define or drop one.
- Homogeneous work — safe for one agent to grind the full checklist. Don't split per-page.
