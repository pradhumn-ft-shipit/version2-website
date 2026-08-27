# 011 — Cleanup: retire prerender.mjs, update docs, prune Render rules

**Type:** AFK
**Blocks:** —
**Blocked by:** 010

## Skills
- None — deletion + docs/config housekeeping; implement directly. No TDD / red-first.

## Slice
Remove the now-dead hand-rolled prerender path and reconcile docs/config with the SSG reality — the "zero recurring maintenance" payoff.

- Delete `scripts/prerender.mjs` and its `prerender` npm script; confirm `npm run build` no longer references it and still produces full-content HTML.
- Remove the now-redundant `clamp()` duplication rationale (the `clampText` mirror note in `src/lib/seo.ts`) if `useSeo()`/`prerender.mjs` are fully gone.
- Docs: update `CLAUDE.md` (build pipeline, "SPA today" line, where prerender happens) and `Blog-Migration-Guide.md` to describe framework-mode SSG. Note the hosting reality: Render static site for the app, Cloudflare worker only for `/api/contact`.
- `render.yaml`: review routing rules; remove any made redundant by framework-mode clean-URL output. **Reminder:** Render Blueprint sync will NOT delete removed rules — they must also be pruned in the Render dashboard. Call this out in the ticket completion notes so Pradhumn does the dashboard step.

## Acceptance
- [ ] `scripts/prerender.mjs` deleted; no `prerender` script or reference remains; `npm run build` green with full-content output.
- [ ] `CLAUDE.md` and `Blog-Migration-Guide.md` updated to reflect SSG (no stale "empty body / head-only prerender" or "SPA today" claims).
- [ ] `render.yaml` redundant rules removed; completion note explicitly lists which rules also need manual pruning in the Render dashboard.
- [ ] No dead references to `useSeo()` if it was retired in 002.

## Notes
- Do this only after 010 is live and stable — deleting the old prerender before cutover would remove the fallback.
- Standing rule: don't sweep regenerated blog artifacts / `sitemap.xml` into this commit.
