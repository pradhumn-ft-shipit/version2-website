# Publishing Blogs

One post = one Markdown file in `content/blog/<slug>.md`. Push to `main`, it's live in ~2 minutes.

The 269 migrated posts already live as JSON in `public/blog-data/posts/` — don't touch those; everything new goes through Markdown.

## File layout

```
content/blog/my-post-slug.md
```

The filename (without `.md`) becomes the URL: `/blog/my-post-slug`. Use lowercase + hyphens only.

## Required frontmatter

```markdown
---
title: "My Post Title"
date: 2026-05-11
author: "Vineet Mohan"
topic: "AI in Wealth Management Strategy"
description: "One- or two-sentence excerpt shown on Blog and Resources cards."
image: /blog-images/my-cover.jpg
imageAlt: "Cover image description"
---

The body goes here in **Markdown**. Headings, lists, links, **bold**, *italic*, and
inline `<a href="...">HTML</a>` all work.

## A subheading

More content…
```

Fields:

| Field         | Required | Notes                                                                 |
| ------------- | -------- | --------------------------------------------------------------------- |
| `title`       | yes      | Post title.                                                           |
| `date`        | yes      | ISO date (`2026-05-11`).                                              |
| `author`      | yes      | Defaults to "FastTrackr AI Team" if omitted.                          |
| `description` | yes      | 1–2 sentence excerpt for the cards.                                   |
| `topic`       | yes      | Resources page category — see list below.                             |
| `image`       | optional | Hero image path (e.g. `/blog-images/foo.jpg`).                        |
| `imageAlt`    | optional | Falls back to the title.                                              |
| `persona`     | optional | Audience tag (free text, informational).                              |
| `slug`        | optional | Override URL slug; otherwise the filename is used.                    |

Wrap values in double-quotes if they contain colons, commas, or other punctuation.

## Topic values (Resources page auto-mapping)

Set `topic` to **one of these exact strings** so the post appears in the right section on `/resources`:

- `Client Communication & Notetaking`
- `Document Processing & Back-Office`
- `Prospecting & Growth`
- `Compliance, Security & Data`
- `AI in Wealth Management Strategy`
- `Advisor Transitions & Repapering`
- `Advisor Trends & Industry`
- `FastTrackr AI in Action`

Posts with a blank or unrecognized `topic` land in **More resources** at the bottom of `/resources` — they still appear, just uncategorized. To add a new top-level category, edit `src/lib/blogCategories.ts`.

## Images

Drop image files into `public/blog-images/` and reference them as `/blog-images/your-file.jpg` in `image` or inside the body. Anything in that folder is served as-is.

## Publish flow

1. Create or edit `content/blog/<slug>.md`.
2. Add any new images to `public/blog-images/`.
3. Commit and push to `main`.
4. Cloudflare Pages runs `npm run build` (which runs `scripts/build-blog-data.mjs`), then deploys.
5. Post is live at `/blog/<slug>` and auto-listed on `/resources/blog` + `/resources`.

If a row is missing frontmatter, `title`, or a valid filename slug, the build skips it and logs a warning — check the build log if a post doesn't appear.
