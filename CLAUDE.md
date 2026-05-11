# FastTrackr AI — Marketing site

Vite + React 19 + React Router v7 + Tailwind, deployed on Cloudflare Pages. SPA today.

## Common commands

- `npm run dev` — local dev (rebuilds blog data, then `vite`)
- `npm run build` — production build (blog data + tsc + vite)
- `npm run blog:build` — regenerate blog JSON only

## Where things live

- `src/pages/` — top-level routes (`Home`, `Blog`, `BlogPost`, `Resources`, `Pricing`, `Contact`, ICP/solutions subfolders, etc.). Routes wired in `src/App.tsx`.
- `src/components/` — shared sections (`Navbar`, `Footer`, `Hero`, `FAQ`, `PageCTA`, …) and `ui/` primitives.
- `src/lib/blog.ts` — client fetchers for the blog index and individual posts.
- `src/lib/blogCategories.ts` — canonical Resources-page categories. Source of truth for the `topic` values blogs can use.
- `content/blog/<slug>.md` — authoring source for new blog posts (Markdown + YAML frontmatter).
- `scripts/build-blog-data.mjs` — renders `content/blog/*.md` to JSON, then regenerates `public/blog-data/index.json` from every post JSON on disk.
- `public/blog-data/posts/*.json` — committed runtime data (269 legacy migrated posts + any rendered from Markdown). Read at runtime by the Blog pages.
- `public/blog-images/` — committed blog imagery; reference as `/blog-images/<file>`.
- `public/_redirects` — Cloudflare Pages redirects (SPA fallback + any 301s).

## Blog workflow

Marketing drops a Markdown file into `content/blog/<slug>.md` (frontmatter + Markdown body); the build script renders it to `public/blog-data/posts/<slug>.json` and rebuilds `index.json`. Legacy migrated posts already exist as JSON and are left untouched. Full marketing-facing guide: **`BLOGS.md`**. Deeper architecture notes (migration paths, GitHub/CI setup, redirects): **`Blog-Migration-Guide.md`**.

The Resources page (`src/pages/Resources.tsx`) auto-builds category sections from the blog index, grouping by the post's `Topic` field via `resolveCategoryId` in `src/lib/blogCategories.ts`. To change the category list or blurbs, edit that one file.
