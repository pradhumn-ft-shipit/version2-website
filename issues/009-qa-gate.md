# 009 — QA gate: full acceptance-criteria sweep on the Render preview

**Type:** AFK
**Blocks:** 010
**Blocked by:** 006, 007, 008

## Skills
- `frontend-visual-qa` — the browser/hydration/Lighthouse portion of the sweep. No TDD / red-first.

## Slice
The comprehensive QA gate before cutover — verify the whole plan's definition-of-done against the **Render per-branch preview deploy** of `spike/rr7-ssg`, simulating the non-JS AI crawlers this migration exists to serve. Nothing merges to `main` until this passes.

- Deploy path: push `spike/rr7-ssg`, get the Render preview URL, run all checks against it (not just local `dist/`).
- Crawler simulation: `curl` key pages with AI-crawler user agents (ClaudeBot, GPTBot, OAI-SearchBot, PerplexityBot) and confirm full `<body>` content — the pages must not depend on JS.

## Acceptance (maps to the plan's definition-of-done)
- [ ] `curl` a marketing page (home + one solutions + one legal) → full body copy in HTML, not empty `#root`.
- [ ] `curl` a blog post AND a news article → full article text in HTML.
- [ ] Full-content check holds under AI-crawler user agents (ClaudeBot / GPTBot / PerplexityBot), no JS executed.
- [ ] All ~460 routes prerendered; sample across every page type returns 200 with body. Count recorded and matches 006.
- [ ] Clean URLs — no `.html`, no trailing-slash weirdness — spot-checked across page types.
- [ ] Every redirect from 003 resolves correctly on the preview.
- [ ] SEO parity vs the old `prerender.mjs` output: title/description/canonical/OG/Twitter/JSON-LD present and correct on marketing, blog (`BlogPosting`), and news (`NewsArticle`). Spot-check JSON-LD validity.
- [ ] No hydration-mismatch console errors on key pages; entrance animations don't flicker or hide content without JS (confirms 007 on real deploy).
- [ ] Cloudflare `/api/contact` still works cross-origin from the Render-hosted site (contact form submits).
- [ ] LCP/Core Web Vitals spot-check on home + a blog post (should be same-or-better than CSR).

## Notes
- **Auto-pass (AFK):** Pradhumn opted to let this gate pass automatically when EVERY acceptance box above is objectively green — no human sign-off on the preview. Produce the full pass/fail report; if all pass, mark 009 done and unblock 010. If ANY box fails, STOP — do not proceed to 010; report the failures.
- Note: 010 (the actual merge to `main`) is still HIL — auto-passing QA unblocks cutover but does not perform it. The human gate moved to the merge, not the QA.
- Soft-404 behavior (unknown slugs returning 200) is a known owned open item — note it if observed but it is NOT a blocker for this migration.
- Use `frontend-visual-qa` for the browser/hydration/Lighthouse portion.
