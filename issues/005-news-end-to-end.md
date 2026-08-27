# 005 — News end-to-end: build-time loaders for index + article, content in HTML, JSON-LD

**Type:** AFK
**Blocks:** 006
**Blocked by:** 001, 002

## Skills
- `frontend-visual-qa` — verify the news index + an article actually render (full body, dark mode, no console errors) after implementation.
- No TDD / red-first — implement first, then add the tests below to lock behavior.

## Slice
Mirror of 004 for the news / press-release section. Replace client fetchers in `src/lib/news.ts` with build-time `loader`s reading committed JSON from disk, so press releases ship full-body HTML.

- Service/lib: refactor `src/lib/news.ts` so shaping stays pure; route data path reads `public/news-data/index.json` and `public/news-data/posts/<slug>.json` from disk via loaders — not `fetch`. Keep existing types/helpers.
- Loaders:
  - `/resources/news` (index) → reads `index.json` (reverse-chronological order preserved).
  - `/resources/news/:slug` → reads `posts/<slug>.json`; missing slug → 404 (render `NotFound`).
- SSR-safety: guard `window`/`document`/`localStorage` in news components behind `typeof window`/`useEffect`.
- SEO: article `meta` emits title/description/canonical/OG **article** tags + `NewsArticle` JSON-LD; index emits its own meta. `intro` framing (the non-duplicate original text) renders above syndicated release text.
- UI: news index lists articles; an article renders full body incl. `coverage` links.

## Tests (implement-first)
Reuse the Vitest harness stood up in 004. Write these AFTER the loaders work, to lock the behavior (not red-first):
- [ ] `src/lib/news.test.ts` — article loader returns the parsed object for a known slug (title + `intro` + body).
- [ ] `src/lib/news.test.ts` — unknown slug resolves to the 404 path, not a throw/500.
- [ ] `src/lib/news.test.ts` — index loader returns articles in reverse-chronological order.
Commit as a normal `test(005): news loaders` alongside/after the `feat(005)` commit.

## Acceptance
- [ ] `curl /resources/news/<real-slug>` returns full article text (intro + release) in `<body>`.
- [ ] `curl /resources/news/<real-slug>` `<head>` has `NewsArticle` JSON-LD + article OG with correct canonical.
- [ ] `curl /resources/news` lists articles in reverse-chronological order in `<body>`.
- [ ] Unknown news slug renders the 404 page, not a build crash.
- [ ] Vitest 005 tests pass green after implementation.
- [ ] No `fetch('/news-data/...')` remains on the news render path.
- [ ] Build artifacts not committed.

## Notes
- News JSON is produced by `scripts/build-blog-data.mjs` (same script as blog) — unchanged; loader just reads its output.
- Full slug enumeration for prerender is 006's job; prerendering one sample article here is enough to prove the loader.
