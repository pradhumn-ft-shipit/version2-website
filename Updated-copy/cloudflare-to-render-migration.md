# Migrating the site from Cloudflare Pages → Render (keeping the form on Cloudflare)

**Author context:** Written for the FastTrackr marketing site (Vite + React 19 + React Router v7, currently on Cloudflare Pages).

## ▶ START HERE (current status)

- ✅ **Render Static Site is created and rendering** at `version2-website.onrender.com` (Build Command `npm run build`, Publish Directory `dist`).
- ✅ Decisions locked: worker URL `version2-website.pages.dev`, env var `VITE_CONTACT_API_URL`, redirects/SPA in `render.yaml`, apex A record + www CNAME (301 www→apex), personal Render account, **no GitHub org transfer**.
- ✅ **DONE (code changes landed in the repo — typecheck passes):**
  1. `src/pages/Contact.tsx`: form fetch → `import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact'`.
  2. `src/lib/blog.ts`: `/api/blog-index` → `/blog-data/index.json`.
  3. **CORS** added to the deployed worker (`functions/_worker.ts`): OPTIONS preflight + `Access-Control-Allow-Origin` for `https://fasttrackr.ai` / `https://www.fasttrackr.ai` on the `/api/contact` POST response.
  4. **`render.yaml`** committed with the 3 redirects + SPA rewrite + `NODE_VERSION=20` + `VITE_CONTACT_API_URL`.
  5. `.env.example` documents `VITE_CONTACT_API_URL`.
- ⏭ **NEXT (dashboard / DNS — no more repo code needed):**
  1. **Push** these changes so (a) Cloudflare Pages redeploys the worker with CORS, and (b) Render redeploys the static site picking up `render.yaml`.
  2. **Verify** form + blog index + redirects + deep-link refresh all work on the `*.onrender.com` URL (no CORS errors in console on submit).
  3. **Only then** do the GoDaddy DNS cutover (Step 3) — do NOT point `fasttrackr.ai` at Render until verification passes, or the live form goes dark.
- 🔒 **Outstanding (unrelated):** revoke the GitHub PAT that was exposed in the git remote URL.

---

## Why we're doing this

Cloudflare Pages forces our **apex domain** (`fasttrackr.ai`) onto Cloudflare's nameservers (or CNAME flattening, which GoDaddy won't do at the apex). We don't want to move nameservers — our GoDaddy DNS has 150+ records. **Render** lets us point the apex with a plain **A record**, so GoDaddy stays exactly as-is.

The catch: GitHub Pages / Render are static hosts, but our site isn't purely static — a Cloudflare Worker handles the contact form, the blog index, and a few redirects. The plan keeps that worker on Cloudflare and moves only the static site to Render.

---

## The big picture: what moves, what stays

| Piece | Today | After migration | Notes |
|---|---|---|---|
| Static site (HTML/JS/CSS, blog pages) | Cloudflare Pages | **Render Static Site** | apex via A record |
| Blog authoring → merge to `main` | GitHub Actions | **GitHub Actions (unchanged)** | host-independent |
| Markdown → blog page build | Cloudflare build | **Render build** | happens inside `npm run build` |
| Contact form API (`/api/contact`) | Cloudflare worker | **Cloudflare worker (stays)** | served at `*.pages.dev` |
| Form secrets (Slack/Loops) | Cloudflare env vars | **Cloudflare env vars (stays)** | never touched |
| `/api/blog-index` | Cloudflare worker | **static file on Render** | switch fetch to `/blog-data/index.json` |
| Redirects (`/fpa` etc.) | Cloudflare worker | **Render redirect config** | reproduce the 3 rules |
| SPA deep-link fallback | Cloudflare worker | **Render rewrite rule** | all routes → `/index.html` |

**One-line summary:** Move the *site* to Render, leave the *form worker* on Cloudflare (`pages.dev`), and reproduce on Render the three other jobs the worker quietly did (blog-index, redirects, SPA fallback). The daily blog workflow does not change.

---

## Architecture: before vs. after

**Before (everything on Cloudflare Pages):**
```
Browser @ fasttrackr.ai
  ├─ static assets ─────────► Cloudflare Pages
  ├─ fetch('/api/contact') ─► Cloudflare worker (same origin) → Slack + Loops
  ├─ fetch('/api/blog-index')► Cloudflare worker → index.json
  └─ /fpa, /aon, /onepagecrm► Cloudflare worker → 301 /contact
```

**After (site on Render, form on Cloudflare):**
```
Browser @ fasttrackr.ai (Render Static Site)
  ├─ static assets ─────────────────────────► Render
  ├─ fetch('https://<proj>.pages.dev/api/contact') ─► Cloudflare worker (cross-origin + CORS) → Slack + Loops
  ├─ fetch('/blog-data/index.json') ────────► Render static file
  └─ /fpa, /aon, /onepagecrm ───────────────► Render redirect rules → /contact
```

---

## STEP 1 — Code changes in the repo (2 small edits)

> These are the only source changes. Make them on a branch, build locally, then deploy.

### 1a. Point the form at the Cloudflare worker (absolute URL + CORS)

**File:** `src/pages/Contact.tsx` (around line 80)

The form currently calls a relative path:
```ts
const res = await fetch('/api/contact', { ... })
```
Once the site is on Render, that relative path resolves to `fasttrackr.ai/api/contact` — which doesn't exist on Render. Change it to the **absolute** Cloudflare worker URL. The Pages project is **`version2-website.pages.dev`**:
```ts
const res = await fetch(import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact', { ... })
```
With `.env` / Render env var:
```
VITE_CONTACT_API_URL=https://version2-website.pages.dev/api/contact
```
> **Decision baked in:** use a `VITE_CONTACT_API_URL` env var (not hard-coded). Production (Render) sets it to the `pages.dev` URL; local dev leaves it unset so it falls back to the relative `/api/contact` and still works under `npm run dev:cf` (wrangler). This keeps local form testing hitting the local worker.

**On the Cloudflare worker side** (`functions/api/contact.ts` / `functions/_worker.ts`), add **CORS** so the browser allows the cross-origin call:
- Respond to the preflight `OPTIONS /api/contact` request with the CORS headers.
- Add `Access-Control-Allow-Origin: https://fasttrackr.ai` (and `https://www.fasttrackr.ai`) to the POST response.
- Allowed methods: `POST, OPTIONS`. Allowed headers: `content-type`.

> Secrets, validation, honeypot, Slack Block Kit formatting, and the two Loops emails stay exactly as they are. Only CORS headers are added.

### 1b. Switch the blog index fetch to the static file

**File:** `src/lib/blog.ts` (around line 26)

Currently:
```ts
indexCache = fetch('/api/blog-index').then(...)
```
`/api/blog-index` is a worker route that just returns `public/blog-data/index.json` — which already ships as a static file. On Render, point straight at the file:
```ts
indexCache = fetch('/blog-data/index.json').then(...)
```
> Individual blog posts already fetch static files (`/blog-data/posts/<slug>.json`), so those need **no** change.

---

## STEP 2 — Render configuration (one-time, in Render dashboard)

### 2a. Create the Static Site  ✅ DONE — static site is live on `*.onrender.com`
- New → **Static Site** → connect the GitHub repo (current repo: `pradhumn-ft-shipit/version2-website`). **No org transfer** — that idea is dropped.
- **Build command:** `npm run build`
- **Publish directory:** `dist`  ← must be exactly `dist` (no `/dist`, no `./`, no trailing slash).
- Render auto-deploys on every push to `main` going forward.

> **GOTCHA we already hit:** setting Publish Directory to `./` makes Render serve the repo *root* (the source `index.html`, which loads `/src/main.tsx`). Render serves that `.tsx` as `binary/octet-stream`, the browser refuses the module script, and you get a **blank page**. Fix = Publish Directory `dist`. Node version on Render defaulted to 24.x and the build worked fine; pin `NODE_VERSION=20` only if a future build breaks.

### 2b. SPA deep-link rewrite (required)
Add a rewrite rule so React Router handles deep links / refreshes:
- **Source:** `/*`  →  **Destination:** `/index.html`  →  **Action:** Rewrite
> Without this, a hard refresh on `/blog/<post>` returns 404.

### 2c. Reproduce the 3 redirects (required — our "ruleset")
Add redirect rules (301):
| Source | Destination | Type |
|---|---|---|
| `/fpa` | `/contact` | 301 |
| `/aon` | `/contact` | 301 |
| `/onepagecrm` | `/contact` | 301 |
> Put these **before** the SPA `/*` rewrite so they take priority. **Decision baked in:** define these (and the SPA rewrite) in a committed **`render.yaml`** rather than the dashboard, so the rules are version-controlled and reviewable.

---

## STEP 3 — DNS cutover (GoDaddy + Render + Cloudflare)

> Do this once the Render deploy is live and verified on the temporary `*.onrender.com` URL.

1. **Render:** add the custom domain(s) — `fasttrackr.ai` and `www.fasttrackr.ai`. Render shows the exact A record IP and/or CNAME target, and provisions SSL automatically.
2. **GoDaddy DNS:**
   - **Apex** (`@`): set the **A record** to Render's IP (from step 1). *This is the whole point — A record, no CNAME flattening, no nameserver change.*
   - **`www`**: set a **CNAME** to Render's target (e.g. `<site>.onrender.com`).
   - Leave all other 150+ records untouched.
3. **Cloudflare Pages:** remove the custom domain from the Pages project (Settings → Custom domains). **Do NOT delete the project** — it keeps serving the form worker at `*.pages.dev`.
4. Wait for DNS propagation (can take up to ~24–72h for apex; usually much faster). Verify `https://fasttrackr.ai` serves from Render with valid SSL.

---

## STEP 4 — Keep the form worker alive on Cloudflare

- **Leave the repo connected to Cloudflare Pages.** It keeps auto-building on every push, so the worker (and `/api/contact`) stays current at `<your-project>.pages.dev`.
- Cloudflare will keep building a full (but unused) copy of the site. This is wasteful-but-harmless — only `/api/contact` is actually used. (Optional later cleanup: split the worker into a standalone Cloudflare Worker via `wrangler deploy` so Cloudflare stops rebuilding the whole site.)
- Form **secrets** (`SLACK_WEBHOOK_URL`, `LOOPS_API_KEY`) stay in the Cloudflare Pages project env vars — nothing to move.

---

## What does NOT change (so nobody panics)

- **Blog authoring:** Tejas still drops Markdown into `content/tejas/<date>/<slug>.md` and opens a PR.
- **GitHub Actions:** `path-guard`, `build-smoke`, `auto-merge-blog` run exactly as today (they're host-independent).
- **Blog page generation:** still produced by `npm run build` → `scripts/build-blog-data.mjs` — just now executed by Render instead of Cloudflare.
- **Form behavior for users:** identical — submit → Slack message + Loops emails → success. They never see that the API lives on a different host.

---

## Verification checklist (after cutover)

- [ ] `https://fasttrackr.ai` loads from Render with valid SSL.
- [ ] `https://www.fasttrackr.ai` loads (or redirects to apex, per preference).
- [ ] Hard-refresh on a deep route (e.g. `/blog/<any-post>`) loads correctly (SPA rewrite working).
- [ ] Blog **index** page lists posts (blog-index fetch → static file working).
- [ ] An individual blog post page renders.
- [ ] `/fpa`, `/aon`, `/onepagecrm` each 301 to `/contact`.
- [ ] Submit the contact form → Slack message arrives **and** Loops emails fire (worker + CORS working).
- [ ] Browser console shows **no CORS errors** on form submit.
- [ ] Push a trivial change to `main` → Render rebuilds and redeploys automatically.

---

## Rollback

If anything goes wrong, revert DNS at GoDaddy:
- Point the apex/`www` records back to Cloudflare (re-add the custom domain to the Cloudflare Pages project).
- Because the Cloudflare Pages project was never deleted, the original full site (with worker) is still live at `*.pages.dev` and resumes serving the custom domain immediately once DNS points back.
- The two code changes (Steps 1a/1b) are backward-compatible if you keep the worker routes, but to fully revert, restore the relative `/api/contact` and `/api/blog-index` fetches.

---

## Decisions — RESOLVED

- [x] Cloudflare Pages project URL: **`version2-website.pages.dev`** → form posts to `https://version2-website.pages.dev/api/contact`.
- [x] Worker URL via **`VITE_CONTACT_API_URL` env var** (falls back to relative `/api/contact` locally).
- [x] `dist/` is **109 MB / 688 files** — within Render's static limits. ✅
- [x] Redirects + SPA rewrite live in a committed **`render.yaml`**.

## Decisions — RESOLVED (continued)

- [x] **`www` behavior:** apex `fasttrackr.ai` = **A record** (Render IP); `www` = **CNAME** (Render target); **301 `www` → apex**. This does NOT reintroduce the apex problem — apex uses an A record (Render provides a stable IP), www uses a CNAME (always allowed on subdomains), and the redirect is an HTTP rule, not DNS.
- [x] **Render account:** personal account. Auto-deploy is repo+branch based, not pusher-based — Tejas's daily blog pushes to `main` auto-deploy under this account. Commercial use is allowed on Render's free tier. (Caveat: personal accounts have limited team roles; move to a Render team later if others need to manage deploys.)
- [x] **Render service settings:** Static Site · Build Command `npm run build` · **Publish Directory `dist`** · set `NODE_VERSION=20` to match GitHub Actions.

## Still needs confirmation

1. **Sequencing vs. the GitHub org transfer:** if the repo will move to a GitHub org, note that (a) Render is being connected to the **current** repo now — after an org transfer the repo path changes and Render's GitHub connection may need re-authorizing, and (b) Cloudflare's GitHub App must also be re-authorized on the org or the form worker stops rebuilding. Decide whether to finish the Render move on the current repo first, or do the org transfer first.
```
