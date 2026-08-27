# 008 — Preserve Tejas's content flow + CI: dummy-post dry run, zero config edits

**Type:** AFK
**Blocks:** 009
**Blocked by:** 006

## Skills
- None — build/CI verification work; implement directly. No TDD / red-first.

## Slice
Prove the frozen content-authoring workflow still works untouched under SSG: a Markdown drop becomes a fully prerendered page with no manual step and no config edit.

- Confirm `build-blog-data.mjs` still runs FIRST in `npm run build` and the prerender consumes its JSON output (chain: `blog:build` → `tsc` → `react-router build` incl. dynamic prerender).
- Dry run: add a dummy `content/tejas/<YYYY-MM-DD>/<slug>.md` post, run `npm run build`, confirm `dist/blog/<slug>/index.html` exists with full body — with NO edit to route config or the prerender function.
- Confirm `path-guard.yml` and `auto-merge-blog.yml` are untouched by the migration (allowlist workflows, folder convention `content/tejas/<date>/` unchanged).
- UI: the dummy post renders as a normal blog page; then remove the dummy (do not commit it).

## Acceptance
- [ ] Dummy `content/tejas/<date>/` post → `npm run build` → its `dist/blog/<slug>/index.html` has full article body, with zero config/route edits.
- [ ] `build-blog-data.mjs` is unchanged and still first in the build chain.
- [ ] `path-guard.yml` and `auto-merge-blog.yml` are byte-for-byte unchanged by the migration (git diff clean for those files).
- [ ] Dummy post is deleted before finishing; not committed.

## Notes
- This is the "Tejas's flow is frozen" settled decision (#3) — the migration must not require content authors to learn anything new.
- Reminder (standing rule): keep regenerated `public/blog-data/**`, `dist/`, `sitemap.xml` out of any commit here.
