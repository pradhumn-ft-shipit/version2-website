# 004 — Blog end-to-end: build-time loaders for post + index, content in HTML, JSON-LD

**Type:** AFK
**Blocks:** 006
**Blocked by:** 001, 002

## Skills
- `frontend-visual-qa` — verify the blog index + a post actually render (full body, dark mode, no console errors) after implementation.
- No TDD / red-first — implement first, then add the tests below to lock behavior.

## Slice
The core value slice: blog content ships as real HTML. Replace the client `fetch('/blog-data/...')` in `src/lib/blog.ts` with framework **`loader`** functions that read the committed JSON from disk at build time, so `<body>` carries the full article.

- Service/lib: refactor `src/lib/blog.ts` so the data-shaping stays pure and reusable, but the route data path reads from disk (`public/blog-data/index.json`, `public/blog-data/posts/<slug>.json`) via loaders — not `fetch`. Keep `formatBlogDate`, types (`BlogIndexEntry`, `BlogPost`).
- Loaders:
  - `/blog/:slug` → loader reads `posts/<slug>.json`; missing slug → 404 (render `NotFound`, not a thrown 500). `encodeURIComponent`/path-safety on slug preserved.
  - `/resources/blog` (index) → loader reads `index.json`.
  - `/resources-for-financial-advisors` (Resources) → consumes the same index (grouped by topic via `resolveCategoryId`). Wire it here if 003 left it stubbed.
- Redirect: `/resources/blog/:slug → /blog/:slug` (the dynamic `BlogPostRedirect`).
- SSR-safety: guard any `window`/`document`/`localStorage` access in blog components behind `typeof window`/`useEffect` so build-time render doesn't crash.
- SEO: `/blog/:slug` `meta` emits title/description/canonical/OG **article** tags + `BlogPosting` JSON-LD; index page emits its own meta (pattern from 002).
- UI: blog index lists posts; a post page renders full rendered `content` HTML.

## Tests (implement-first)
This is the first slice that needs tests — **stand up Vitest** here (add `vitest` + `test` script; jsdom not required for these unit tests). Reuse in 005/006. Write these AFTER the loaders work, to lock the behavior (not red-first):
- [ ] `src/lib/blog.test.ts` — loader returns the parsed post object for a known on-disk slug (title + non-empty `content`).
- [ ] `src/lib/blog.test.ts` — unknown slug resolves to the 404 path (loader signals not-found), NOT a thrown/500.
- [ ] `src/lib/blog.test.ts` — index loader returns `{ count, posts[] }` with `count === posts.length`.
- [ ] `src/lib/blog.test.ts` — a slug with URL-sensitive characters is read safely (no path escape / wrong file).
Commit as a normal `test(004): blog loaders` alongside/after the `feat(004)` commit.

## Acceptance
- [ ] `curl /blog/<real-slug>` returns the full article text in `<body>` (grep a known sentence from the post).
- [ ] `curl /blog/<real-slug>` `<head>` has `BlogPosting` JSON-LD + article OG tags with correct canonical.
- [ ] `curl /resources/blog` lists real post titles in `<body>`.
- [ ] Unknown slug (`/blog/does-not-exist`) renders the 404 page, not a build crash or 500.
- [ ] `/resources/blog/:slug` redirects to `/blog/:slug`.
- [ ] Vitest is wired (`npm test`) and the 004 tests pass green.
- [ ] No `fetch('/blog-data/...')` remains on the blog render path.
- [ ] Build artifacts not committed.

## Notes
- 269 legacy migrated posts + Markdown-rendered posts already exist as JSON on disk — the loader just reads them; do not regenerate or reformat them.
- The dynamic `prerender` enumeration of every slug is **006's** job — here, prerendering `/blog/:slug` for even one or two sample slugs is enough to prove the loader. Don't build the full enumerator here.
