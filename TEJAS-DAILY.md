# Daily Blog Publishing — Tejas

**Repo:** https://github.com/pradhumn-ft-shipit/version2-website
**HTTPS clone URL:** `https://github.com/pradhumn-ft-shipit/version2-website.git`

This is your one-page playbook. Every day, you do the same six steps and the posts go live automatically. You only ever touch one folder: `content/tejas/`.

---

## The 30-second version

1. **Fresh clone the repo each morning** (don't reuse yesterday's clone — start clean).
2. Create today's folder: `content/tejas/YYYY-MM-DD/`
3. Drop your `.md` files and image files into that folder.
4. Commit just that folder.
5. Push to a new branch named `tejas/YYYY-MM-DD`.
6. Open a PR — it auto-merges if everything's valid. Site updates ~2 minutes after merge.

If any check fails, the PR will say exactly what's wrong. Fix it, push again, it re-checks.

---

## Folder naming convention

```
content/tejas/2026-05-12/
content/tejas/2026-05-13/
content/tejas/2026-05-14/
```

- **One folder per day.**
- **Format: `YYYY-MM-DD`** — four-digit year, two-digit month, two-digit day, separated by hyphens. Always use this exact format. `2026-05-12` is correct. `12-05-2026`, `2026-5-12`, `May-12-2026`, `20260512` will all be **rejected** by the build.
- Folder name = the publish date for every post inside it (you can override per-post via frontmatter, but you usually won't).
- **Never delete or rename a folder once it has been merged.** They stay forever as an audit trail.

---

## Blog file (`.md`) naming convention

Inside each daily folder, one `.md` file per post:

```
content/tejas/2026-05-12/
  ├── how-ai-is-changing-onboarding.md
  ├── q2-compliance-checklist-for-ria-firms.md
  └── (image files…)
```

Rules for the `.md` filename:

- **Lowercase only.** No capitals.
- **Hyphens between words.** No spaces, no underscores, no dots inside the name.
- **End in `.md`** — not `.markdown`, not `.MD`.
- **Keep it short and meaningful** — this filename becomes the URL. `how-ai-is-changing-onboarding.md` becomes `/blog/how-ai-is-changing-onboarding`.
- **Don't reuse a slug** — even across different days. If you publish `client-retention-tips.md` on May 12, don't publish another `client-retention-tips.md` on May 20. Pick a different name (e.g. `client-retention-tips-part-2.md`). The build will fail with "duplicate slug" if you collide.

Good examples:
- `finra-rule-3210-explained.md`
- `top-five-ai-tools-for-advisors.md`
- `ria-onboarding-checklist-2026.md`

Bad examples:
- `My Post.md` (capitals + space)
- `post_one.md` (underscore)
- `2026-05-12-post.md` (don't repeat the date — it's already in the folder)

---

## Image file naming convention

Drop image files **into the same daily folder** as your `.md` files. Don't put them anywhere else.

```
content/tejas/2026-05-12/
  ├── how-ai-is-changing-onboarding.md
  ├── cover-onboarding.png
  └── chart-q1-trends.jpg
```

Rules:

- **Lowercase, hyphens between words**, same as `.md` files.
- **Allowed formats: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`.**
- **Filenames are unique within a day** — you can have `chart.png` on May 12 and another `chart.png` on May 13; the system auto-prefixes them with the date when copying so they won't collide.
- **Reference images by just the filename** in your markdown — never with a path. The build does the rest.

Inside the `.md` file, refer to images like this:

```markdown
![Quarterly chart](chart-q1-trends.jpg)
```

Or in frontmatter:

```yaml
image: cover-onboarding.png
```

**Do NOT** write `image: /blog-images/cover-onboarding.png` or `![Chart](../images/chart.png)`. Just the filename. The build copies the image to the right place and rewrites the path automatically.

---

## What goes in the `.md` file

Every post starts with a **frontmatter block** between two `---` lines. Then the body in Markdown. Copy this template:

```markdown
---
title: "Your Post Title Here"
topic: "AI in Wealth Management Strategy"
description: "One- or two-sentence summary that shows up on the blog index and Resources page cards."
author: "Tejas"
image: cover.png
imageAlt: "Short description of the cover image for accessibility"
---

Your post body in Markdown goes here.

## A subheading

You can use **bold**, *italic*, [links](https://example.com), bullet lists,
numbered lists, `inline code`, and inline images: ![Chart](chart.png).

> Block quotes work too.
```

### Required fields

| Field         | Required | Notes                                                                  |
| ------------- | -------- | ---------------------------------------------------------------------- |
| `title`       | yes      | The post title shown at the top of the page and on cards.              |
| `topic`       | yes      | One of the **8 exact strings** below. Typos will fail the build.       |
| `description` | yes      | 1–2 sentences shown on the blog/resources cards.                       |
| `author`      | optional | Defaults to "FastTrackr AI Team" if you leave it out.                  |
| `image`       | optional | Cover image filename (must be in the same daily folder).               |
| `imageAlt`    | optional | Alt text for the cover image. Defaults to the title.                   |
| `persona`     | optional | Audience tag — free text, e.g. "Compliance officers".                  |
| `slug`        | optional | Override the URL slug. Almost always leave this out — filename is fine. |

You don't need a `date` field — the folder name (`2026-05-12`) becomes the date automatically.

### The 8 valid topic values

Copy one of these **exactly** (matching capitalization, spaces, punctuation):

- `Client Communication & Notetaking`
- `Document Processing & Back-Office`
- `Prospecting & Growth`
- `Compliance, Security & Data`
- `AI in Wealth Management Strategy`
- `Advisor Transitions & Repapering`
- `Advisor Trends & Industry`
- `FastTrackr AI in Action`

If you typo one, the build will fail and tell you which value you used and the full list of valid options. No guessing.

### Quoting tip

If your `title` or `description` contains a colon, comma, apostrophe, or other punctuation, **wrap the whole value in double quotes** (as in the template above). When in doubt, quote it.

---

## Daily git workflow

You will do this exact sequence every single day. Memorize the muscle pattern.

### One-time setup (do this once, ever)

```bash
# 1. Install Git and the GitHub CLI if you don't have them
#    Mac:    brew install git gh
#    Linux:  apt install git gh
#    Windows: winget install Git.Git GitHub.cli

# 2. Authenticate with GitHub
gh auth login
```

### Every morning — fresh clone

**Always start the day with a fresh clone.** Don't reuse yesterday's folder — start clean so you never push stale state.

```bash
cd ~/work                                  # or wherever you keep your clones
rm -rf version2-website                    # delete yesterday's clone if it exists
gh repo clone pradhumn-ft-shipit/version2-website
cd version2-website
```

### Add today's folder

```bash
# Replace the date with today's date in YYYY-MM-DD format
DATE=2026-05-12

mkdir -p content/tejas/$DATE
cp ~/Drops/$DATE/*.md   content/tejas/$DATE/
cp ~/Drops/$DATE/*.png  content/tejas/$DATE/   # adjust extension as needed
cp ~/Drops/$DATE/*.jpg  content/tejas/$DATE/
```

(Adjust the `cp` lines to point at wherever your daily folder lives on your machine. The point is: copy your day's `.md` files and image files into `content/tejas/<today's date>/`.)

### Commit, push, open PR

```bash
git checkout -b tejas/$DATE
git add content/tejas/$DATE
git commit -m "Posts for $DATE"
git push -u origin tejas/$DATE
gh pr create --fill --base main
```

That's it. The PR will:

1. Run a check that confirms you only touched `content/tejas/$DATE/` — nothing else.
2. Run the blog build to validate every post (frontmatter complete, topic valid, all referenced images present).
3. If both pass, **auto-merge into main** without anyone clicking a button.
4. Cloudflare Pages rebuilds the site (~2 minutes) and your posts go live at `/blog/<slug>` and on `/resources`.

If a check fails, the PR page will show a red X with the error message. Fix the file in your local clone, then:

```bash
git add content/tejas/$DATE
git commit -m "Fix validation"
git push
```

The PR automatically re-runs the checks. Repeat until green.

---

## What you must NOT do

You will be **physically blocked** from doing these things, but it saves time to know up front:

- ❌ Touch any file outside `content/tejas/YYYY-MM-DD/`. Don't edit `src/`, don't edit `public/blog-images/` directly, don't edit other people's old daily folders, don't touch `package.json`, etc. The path-guard check will fail your PR if any non-tejas file appears in the diff.
- ❌ Push directly to `main`. Branch protection will reject it. Always work on a `tejas/...` branch and PR.
- ❌ Reuse yesterday's clone. Always start with a fresh clone — keeps everything sane.
- ❌ Rename or delete a folder that's already been merged. Audit trail is sacred.
- ❌ Reuse a slug (`.md` filename) across days. Pick unique names.

---

## Common errors and fixes

| Error message in the PR                                           | What it means                                                                | Fix                                                                                  |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `folder name must be YYYY-MM-DD (got "...")`                      | You used the wrong date format.                                              | Rename to `YYYY-MM-DD` (e.g. `2026-05-12`).                                          |
| `missing "title"` / `missing "topic"` / `missing "description"`   | A required frontmatter field is missing.                                     | Add the field between the `---` lines at the top of the `.md`.                       |
| `invalid topic "..."`                                             | Your `topic` value isn't one of the 8 allowed strings.                       | Copy-paste exactly from the list above. Watch for trailing spaces.                   |
| `image not found "foo.png"`                                       | Your `.md` references an image that's not in the daily folder.               | Either add the image to the folder or fix the filename in the `.md`.                 |
| `duplicate slug "..."`                                            | Two `.md` files (across all days) have the same filename.                    | Rename one of them.                                                                  |
| `Blog-team author "..." touched ... files outside content/tejas/` | You accidentally committed something outside your folder.                    | `git restore <file>` on the offending file, then `git commit --amend` and re-push.   |

---

## Quick reference card

```
FOLDER:   content/tejas/YYYY-MM-DD/
FILES:    lowercase-with-hyphens.md
IMAGES:   put in same folder, reference by filename only
BRANCH:   tejas/YYYY-MM-DD
COMMAND:  gh pr create --fill --base main
```

That's the whole job.
