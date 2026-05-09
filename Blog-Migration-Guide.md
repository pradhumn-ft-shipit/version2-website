# Blog Migration Doability Assessment (Framer → Current Site)

## Context

You are evaluating moving ~200 blog posts from Framer onto this codebase, with an ongoing cadence of 10–15 bulk publishes/day. You have a CSV with all the links/metadata. **You are not implementing yet** — you want to understand doability, performance/SEO impact, and what a migration would actually require.

This document is an assessment, not a build plan.

---

## What this codebase is today

- **Stack**: Vite 8 + React 19 + React Router v7 + Tailwind. TypeScript. (`package.json`)
- **Rendering model**: Pure client-side SPA. One `index.html` shell is served for every route; React then renders the page in the browser. No SSR, no SSG, no prerender.
- **Hosting**: Cloudflare Pages. SPA routing handled by `public/_redirects`:
  ```
  /*    /index.html   200
  ```
- **Routes**: 17 routes wired up in `src/App.tsx`, lazy-loaded. `/resources/blog` exists but `src/pages/Blog.tsx` is a "coming soon" newsletter placeholder — **no blog infrastructure exists**: no markdown/MDX, no content collection, no CMS hookup, no `/blog/:slug` route, no data-fetching layer.
- **SEO setup**: Static `public/sitemap.xml` (hand-maintained, 17 URLs), static `public/robots.txt`, static `<meta>` tags in `index.html`. No per-page meta — every route currently shares the same OG image, title, description.

**Bottom line on current state:** the site is set up like a marketing brochure, not a content site. There is no foundation for blogs to slot into.

---

## Doability: yes, with a real architectural decision

The CSV → site mapping is the easy part. The hard part is choosing *how* posts are rendered, because the current SPA model is the wrong tool for a 200+ post blog. Three realistic paths:

### Path A — Stay SPA, render blogs client-side
Add blog content as MD/JSON in the repo, build `/blog/:slug` route that loads + renders client-side.
- **Effort**: low (1–2 days of work).
- **Speed impact**: bundle grows with every post unless you split chunks per slug. List page has to load a manifest of all 200. Acceptable if done with dynamic imports, but not great.
- **SEO impact**: **bad and probably disqualifying.** Google can crawl SPAs but indexing is slower and inconsistent. LinkedIn/Twitter/WhatsApp link previews mostly fail because they don't execute JS — your blog shares will look broken. For an SEO-driven content play, this defeats the purpose of migrating off Framer.
- **Verdict**: only viable if blog is gated/internal and you don't care about organic traffic.

### Path B — Add prerendering on top of current Vite stack (recommended if you want minimal disruption)
Use a Vite SSG plugin (`vite-plugin-ssg`, `vite-react-ssg`, or `react-snap`) so each blog post is generated as a real static HTML file at build time. Keep the rest of the site as-is.
- **Effort**: medium (3–5 days). Add the plugin, write `/blog` index + `/blog/:slug` template, wire up MD/MDX loader, convert CSV to frontmatter, generate dynamic sitemap.
- **Speed impact on existing pages**: **none on the user side** — actually faster, since everything becomes static HTML. Build time grows: 200 posts will add maybe 30–90 seconds to each Cloudflare Pages build. 10–15 new posts/day means each publish triggers a full rebuild (still fine at this scale; would start to matter past ~2,000 posts).
- **SEO impact**: full real HTML per post, proper per-page meta, Open Graph cards work, dynamic sitemap, fast LCP. This is the model Framer was already giving you.
- **Verdict**: best balance. Keeps the React components, design system, and routing you already have.

### Path C — Migrate the blog to Astro (or Next.js) on a subdomain or `/blog/*`
Run the marketing site as-is on Vite, run the blog as a separate app (Astro is purpose-built for this).
- **Effort**: high upfront, lower long-term. Two codebases to maintain, but each is simpler.
- **Speed impact**: best blog performance possible (Astro ships ~zero JS by default).
- **SEO impact**: same as Path B.
- **Verdict**: overkill unless the blog grows into something with categories, search, authors, etc. Consider only if you expect the blog to dwarf the marketing site.

**Recommendation if it were my call**: Path B. You keep this codebase, you get static-HTML SEO, and the publish cadence (10–15/day) is well within what a Cloudflare Pages rebuild can handle.

---

## Impact on existing site speed

- **Path A**: existing pages unaffected directly, but you'll be tempted to load post manifests on the home/blog index, which can hurt.
- **Path B**: existing pages get *faster* if you prerender them too (they currently pay an SPA hydration cost). Build time goes up. Runtime perf goes up.
- **Path C**: zero impact on this codebase.

None of the three paths slow your existing marketing pages. The real risk is bundle bloat in Path A.

---

## What a migration actually involves (regardless of path)

This is the work, roughly in order:

1. **Decide the architecture** (A/B/C above). Everything else depends on this.
2. **CSV → content schema.** Define frontmatter: `slug`, `title`, `publishedAt`, `updatedAt`, `author`, `tags`, `heroImage`, `ogImage`, `metaDescription`, `canonicalUrl`, `redirectFrom` (old Framer URL), `body`. The CSV needs to map cleanly to these fields — gaps will need backfilling.
3. **Body conversion.** Framer exports as HTML (often messy). You'll need a one-time script to convert HTML → Markdown/MDX, strip Framer-specific classes, normalize headings, fix internal links. Plan for ~10–20% of posts needing manual cleanup.
4. **Image migration.** 200 posts × ~2–5 images each = 400–1,000 images. Either (a) keep linking to Framer's CDN (risky if you ever sunset Framer), or (b) download all images and rehost on Cloudflare R2/Images/Cloudinary. Option (b) is the safe choice and is a one-evening script.
5. **301 redirects from old Framer URLs.** Critical for SEO continuity — without these, you lose every backlink and ranking. Add to `public/_redirects` (Cloudflare Pages) — one line per redirect, e.g. `/old-path /blog/new-slug 301`. The CSV should already give you the old URLs.
6. **Templates.** `/blog` index (paginated, filterable by tag), `/blog/:slug` post page, optional `/blog/tag/:tag`, RSS feed, dynamic `sitemap.xml` that includes every post.
7. **Per-page SEO.** Add `react-helmet-async` (or equivalent) so each post sets its own `<title>`, meta description, OG tags, JSON-LD `Article` schema.
8. **Publishing workflow for 10–15/day bulk.** Two options:
   - **Git-as-CMS**: drop MD files into the repo, push, Cloudflare Pages builds. Fine at this volume; gives you version control. Needs a small intake script (CSV row → MD file).
   - **Headless CMS** (Sanity / Contentful / Notion / Payload): editors publish in a UI, webhook triggers rebuild. More setup, smoother long-term editor experience. Worth it only if non-engineers are publishing.
9. **Analytics + tracking parity.** Make sure GA / GTM / whatever is on Framer today is preserved, and UTMs survive the redirects.

---

## Risks and things to flag

- **SEO regression window**: migrations always cost some traffic for 2–6 weeks while Google reindexes. 301s minimize but don't eliminate this. Time the migration deliberately.
- **Build time at scale**: at your current 200 posts you're fine. If you're at 2,000+ in a year, full rebuilds on every publish get slow — at that point you'd want incremental builds (Next.js ISR or Astro's content layer). Worth knowing now, not blocking now.
- **Editor experience**: if non-engineers publish blogs, git-as-CMS is friction. Decide upfront whether you need a CMS or whether engineers will keep handling intake.
- **The CSV**: I haven't seen it. If it has full HTML bodies in a column, conversion is a script. If it's only metadata + URLs, you'll need to re-scrape Framer or export properly first.

---

## TL;DR for the original question

- **Doable**: yes.
- **On this exact codebase as-is**: technically yes, but you'd ship something SEO-broken (Path A). Don't do that.
- **Recommended**: add static prerendering to this Vite codebase (Path B) — keeps your design system, gives you Framer-equivalent SEO, handles 10–15 posts/day comfortably.
- **Speed impact on existing site**: none negative; likely a small positive.
- **Real work**: roughly 1–2 weeks for an engineer to do it properly (architecture + templates + CSV import + redirects + image migration + publish workflow). Not 200 posts × manual.
- **Biggest non-obvious risk**: 301 redirects from old Framer URLs. Skip those and you throw away your existing blog SEO.

---

## If you want to go deeper next

Things worth looking at before committing:
- The CSV itself — what columns does it have? Especially: does it include the post body (HTML/Markdown) or only metadata + a Framer URL?
- Current Framer URL structure vs. what you want on the new site (affects redirect map size and complexity).
- Who publishes posts day-to-day — engineers or marketing? Decides CMS vs. git-as-CMS.

---

# GitHub Setup & Blog Workflow Guide

This section covers the operational setup: how to put the repo on GitHub, share it with the blog team, restrict what they can edit, prevent broken pushes from reaching production, and what happens if something goes wrong.

## Repo setup (one-time, by an engineer)

### Step 1 — Get the codebase onto GitHub

Current state: this is a local git repo on `main` branch. Two cases:

**If the repo isn't on GitHub yet:**
1. Create a new **private** repo. Strongly prefer a GitHub Organization (`fasttrackr-ai` or similar) over a personal account — orgs give you teams, finer permissions, audit logs, and CODEOWNERS that references team handles. Create the org first if you don't have one.
2. From the project root, push the existing repo:
   ```bash
   git remote add origin git@github.com:fasttrackr-ai/website.git
   git branch -M main
   git push -u origin main
   ```

**If it's already on GitHub:**
- Verify with `git remote -v`. Skip to Step 2.

### Step 2 — Connect Cloudflare Pages

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
2. Authorize the GitHub org, select the repo
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`
   - Node version: 20 (set via env var `NODE_VERSION=20`)
4. Save. Cloudflare runs the first build.
5. Add custom domain (`fasttrackr.ai`) under the Pages project's Custom domains tab once you're happy with the test deploy.

From this point on: every push to `main` → production deploy. Every PR → unique preview URL posted as a comment on the PR.

---

## Sharing access with the blog team

### Step 3 — Create teams in the org

GitHub org → Teams → New team:
- `engineering` — full repo access
- `blog-writers` — limited access to blog content only

Add members by GitHub username. They each need a personal GitHub account.

### Step 4 — Grant repo access per team

Repo → Settings → Collaborators and teams → Add teams:
- `engineering` — role: **Maintain** (or Admin for tech leads)
- `blog-writers` — role: **Write**

"Write" role lets them push branches and open PRs. Combined with branch protection (next section), it does NOT let them push directly to `main`.

---

## Restricting the blog team to only edit blog content

Two GitHub features work together: **CODEOWNERS** decides who must review which paths, and **branch protection** enforces it.

### Step 5 — CODEOWNERS file

Create `.github/CODEOWNERS` in the repo:

```
# Engineers own everything by default
*                          @fasttrackr-ai/engineering

# Blog team owns only blog content + blog images
/src/content/blog/         @fasttrackr-ai/blog-writers @fasttrackr-ai/engineering
/public/blog/images/       @fasttrackr-ai/blog-writers @fasttrackr-ai/engineering
```

Replace `fasttrackr-ai` with your actual org slug. The pattern: list both teams as owners on blog paths so a blog writer can self-approve their own blog-only PR; engineering must approve anything that touches code/config.

### Step 6 — Branch protection rules on `main`

Repo → Settings → Branches → Add branch protection rule. Branch name pattern: `main`.

Enable:
- Require a pull request before merging (no direct pushes to main)
  - Require approvals: **1**
  - Dismiss stale pull request approvals when new commits are pushed
  - **Require review from Code Owners** ← this is the rule that enforces CODEOWNERS
- Require status checks to pass before merging
  - Require branches to be up to date before merging
  - Add status checks once CI exists (Step 9): `validate-content`, `build`
- **Do not allow bypassing the above settings** (applies to admins too — important)

What this means in practice:
- A blog writer touching only `src/content/blog/foo.mdx` opens a PR. CI runs. Preview URL appears. Code-owner check passes (they're a code owner of that path). They merge.
- A blog writer accidentally edits `src/components/Navbar.tsx` in the same PR. Code-owner check requires `@engineering` approval. PR is blocked until an engineer reviews.
- Nobody — not even an org admin — can push directly to main.

> You said earlier you were fine with direct pushes to main for speed. With this setup, the workflow is still nearly as fast: push branch → open PR → wait ~1-2 min for CI + preview → click merge. The preview URL is the part you'd be giving up otherwise, and it's the closest thing to Framer's "preview before publish" experience.

---

## Preventing broken pushes

Four layers, each catching different kinds of mistakes. Cheap to set up, very high payoff.

### Step 7 — Frontmatter schema validator

Add `src/content/schema.ts`:

```ts
import { z } from 'zod'

export const PostFrontmatter = z.object({
  title: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/, 'lowercase, hyphens only'),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  author: z.string().min(1),
  tags: z.array(z.string()).default([]),
  heroImage: z.string().startsWith('/'),
  metaDescription: z.string().min(50).max(160),
  draft: z.boolean().default(false),
})
```

Add `scripts/validate-content.ts` that walks `src/content/blog/**/*.mdx`, parses frontmatter (using `gray-matter`), runs the schema, prints readable errors and exits non-zero on failure.

Wire it as `npm run validate-content`.

### Step 8 — Pre-commit hook (Husky)

```bash
npm i -D husky lint-staged gray-matter zod tsx
npx husky init
```

`.husky/pre-commit`:
```bash
npx lint-staged
```

`package.json`:
```json
"lint-staged": {
  "src/content/blog/**/*.mdx": "tsx scripts/validate-content.ts"
}
```

Now `git commit` of a malformed post fails locally with a clear error. Catches typos before they ever reach GitHub.

### Step 9 — GitHub Actions CI

Create `.github/workflows/ci.yml`:

```yaml
name: CI
on:
  pull_request:
    branches: [main]

jobs:
  validate-content:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: 'npm' }
      - run: npm ci
      - run: npm run validate-content

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: 'npm' }
      - run: npm ci
      - run: npm run build
```

Then in branch protection (Step 6) mark `validate-content` and `build` as required status checks. PRs cannot merge if either fails. Pre-commit hooks can be bypassed locally (`git commit --no-verify`) — CI cannot.

### Step 10 — Build-time validation (last line of defense)

The Vite content loader (e.g., `src/content/loader.ts`) runs the same Zod schema. If anything bad somehow reaches main, the production build fails on Cloudflare and **the previous deploy keeps serving traffic**. You get a build-failure email; users see no disruption.

---

## Will the site break if a push is bad?

**No, with the setup above. Here's the layered reason:**

1. **Bad post caught at commit time** (Husky) → never reaches GitHub
2. **Bad post caught in CI** (GitHub Actions on PR) → PR blocked, cannot merge
3. **Bad post somehow reaches main** → Cloudflare build fails → **last successful deploy stays live**
4. **Build succeeds but post is visually wrong** → caught by preview URL on the PR before merge

Cloudflare Pages uses **atomic deploys**: a deployment either fully succeeds or doesn't replace production. There is no half-deployed state, no in-between where users see a broken page. Build failures show up in the Cloudflare dashboard and email — production keeps serving the previous version until you fix the issue and push again.

**The only realistic ways users could see a broken site:**
- An engineer force-pushes broken code to main and bypasses branch protection — blocked because "Do not allow bypassing" is on
- A runtime bug ships that built fine but breaks at runtime — this is what preview URLs catch; eyeball before merging

For 99% of mistakes (typos in frontmatter, missing image paths, malformed dates, broken Markdown), every single layer above catches it. The probability of all four failing simultaneously is negligible.

---

## The daily flow for a blog writer

Once everything above is set up, here's what publishing a post looks like:

```bash
# 1. Make a branch
git checkout -b post/ria-acat-transitions

# 2. Add the post
# Drop ria-acat-transitions.mdx into src/content/blog/
# Drop hero image into public/blog/images/

# 3. Commit (pre-commit hook validates frontmatter)
git add src/content/blog/ria-acat-transitions.mdx public/blog/images/acat.jpg
git commit -m "blog: ACAT transitions for RIAs"

# 4. Push
git push origin post/ria-acat-transitions
```

Then on GitHub:
1. Open PR
2. CI runs (~1-2 min). Cloudflare posts a preview URL as a PR comment.
3. Click preview URL, eyeball the post live
4. CODEOWNERS auto-approves blog-only PR — they click Merge
5. Cloudflare deploys `main` → live in ~1-2 min

For 10-15 posts/day, the team batches them: branch off, drop all 10-15 posts in, one PR, one preview, one merge, one production deploy. Stays well under Cloudflare's free-tier 500 builds/month.

For non-engineering writers who don't want a terminal: they can do all of the above through the GitHub web UI (create branch, upload files, open PR, merge). Or use **TinaCMS** / **Decap CMS** as a layer on top — they get a friendly editor, the CMS commits to git underneath. Same architecture.

---

## Checklist for actually wiring this up

(For when you decide to move past the assessment phase)

- [ ] Decide: personal account vs. `fasttrackr-ai` GitHub org → strongly recommend org
- [ ] Push existing repo to GitHub if not already there
- [ ] Create `engineering` and `blog-writers` teams; add members
- [ ] Connect Cloudflare Pages to the repo, configure build, test deploy
- [ ] Add `.github/CODEOWNERS`
- [ ] Configure branch protection on `main` with code-owner review + required CI
- [ ] Add `src/content/schema.ts` with Zod schema
- [ ] Add `scripts/validate-content.ts` and `npm run validate-content`
- [ ] Add Husky pre-commit hook
- [ ] Add `.github/workflows/ci.yml` with validate + build jobs
- [ ] Mark `validate-content` and `build` as required status checks
- [ ] Document the daily flow in `README.md` for the blog team
- [ ] Add custom domain to Cloudflare Pages
- [ ] Add Framer → new-site 301 redirects in `public/_redirects`
