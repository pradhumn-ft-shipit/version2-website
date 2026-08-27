# 006 — Dynamic zero-touch prerender config (static routes + every blog/news slug)

**Type:** AFK
**Blocks:** 008, 009
**Blocked by:** 003, 004, 005

## Skills
- None — pure build-config work; implement directly. No TDD / red-first.

## Slice
The zero-maintenance linchpin. Replace the placeholder `prerender: ['/']` (from 001) with a **`prerender` function** that enumerates, at build time, every path to bake: all static/marketing/legal routes + every blog slug + every news slug, reading slugs from the JSON indexes. New content is then prerendered automatically with no config edit, ever.

- Config: `react-router.config.ts` `prerender` becomes an async function returning:
  - the fixed list of static routes (home, who-we-serve, solutions, core, legal, resources index, blog index, news index) — sourced from the route tree or a single canonical list, not hand-duplicated per deploy.
  - every `/blog/<slug>` from `public/blog-data/index.json`.
  - every `/resources/news/<slug>` from `public/news-data/index.json`.
- Ordering: runs after `blog:build` (which regenerates the indexes) in `npm run build`, so it always sees current slugs.
- UI: no new UI — this makes the full site surface exist as static files.

## Tests (implement-first)
Reuse the Vitest harness (004). Write these AFTER the enumerator works, to lock the behavior (not red-first):
- [ ] `react-router.config.test.ts` (or a helper `buildPrerenderPaths()` unit) — enumerated paths include every slug present in the blog + news indexes (count of `/blog/*` === blog index count; `/resources/news/*` === news index count).
- [ ] same — adding a fixture post to the index makes its path appear with **no code/config change** (drive the function off a fixture index).
- [ ] same — the static-route list is present and de-duplicated (no path emitted twice).
Commit as a normal `test(006): prerender enumeration` alongside/after `feat(006)`.

## Acceptance
- [ ] `npm run build` prerenders the full set; total generated page count ≈ today's (~460). Report the exact number.
- [ ] Adding a dummy post JSON to the index and rebuilding increases the count by one with **no edit to route/prerender config** (proves zero-touch; the real Tejas dry-run is 008).
- [ ] Every blog slug and every news slug has a corresponding `dist/.../index.html` with full body.
- [ ] No path duplicated; no static route missing vs the 003 route list.
- [ ] Build artifacts not committed.

## Notes
- This is the acceptance line "count grows automatically when a post is added (no config edit)" — the whole reason Option C was chosen. Guard it with the fixture test, not just a one-off manual check.
- Keep the static-route source single (derive from routes config if framework mode exposes it) so it can't drift from 003.
