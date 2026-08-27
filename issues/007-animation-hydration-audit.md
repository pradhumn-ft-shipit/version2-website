# 007 — Animation & hydration audit: content visible by default, animation as enhancement

**Type:** AFK
**Blocks:** 009
**Blocked by:** 003, 004

## Skills
- `frontend-design` — for reworking the framer-motion entrances (visible-by-default, animation as enhancement) without regressing the look.
- `frontend-visual-qa` — verify no hydration flicker / hidden-without-JS content on the high-animation pages.
- No TDD / red-first — this is a visual slice; verification is curl + browser.

## Slice
Make server-rendered HTML show content **visible by default**, with framer-motion entrances as progressive enhancement — so non-JS crawlers see content and JS users don't get a hydration flicker or an invisible-until-hydrated page. ~234 entrance patterns (mostly `initial={{ opacity: 0 }}`).

- Standard to apply: content renders at full opacity / final position in the static HTML; animation runs only after hydration (e.g. animate from a CSS/`whileInView` state that starts visible, or gate the entrance on a mounted flag). No element may be `opacity: 0` in the prerendered HTML with its reveal depending on JS.
- Files (per plan): `src/components/Hero.tsx`, `Outcomes.tsx`, `PainSection.tsx`, `HowItWorks.tsx`, and page components under `src/pages/` that use motion entrances. Sweep all `initial={{ opacity: 0 }}` (and similar hidden-initial) usages.
- UI: audited pages look the same to a JS user; a JS-disabled load shows full content.

## Acceptance
- [ ] `curl` of Hero/homepage, a solutions page, and a blog post shows content present and NOT `opacity:0`-hidden in the raw HTML (grep for hidden-initial inline styles on content wrappers).
- [ ] With JavaScript disabled in the browser, key pages show full content (no blank/invisible sections).
- [ ] No hydration-mismatch console warnings on Hero, a high-animation solutions page, and a blog post.
- [ ] Entrance animations still play for JS users without a visible flash of hidden→shown on first paint.

## Notes
- **Pre-approved standard (AFK):** Pradhumn pre-approved "visible-by-default everywhere, animation as progressive enhancement" — no eyeball sign-off required. Apply the standard across all entrances and pass the objective checks (no `opacity:0` on content in raw HTML, no hydration warnings, full content with JS off, no first-paint flash). Ship when those are green.
- Still capture a short before/after on the 3-4 highest-animation pages in completion notes as a record (not a gate).
- Cosmetic/visual slice → no red-first unit tests; verification is curl + browser. Use the `frontend-visual-qa` skill for the browser pass.
