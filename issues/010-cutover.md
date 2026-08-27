# 010 — Cutover: merge spike branch to main, zero-downtime go-live

**Type:** human-in-loop
**Blocks:** 011
**Blocked by:** 009

## Skills
- None — git/deploy step; Pradhumn-triggered. No TDD / red-first.

## Slice
Take the validated `spike/rr7-ssg` live with zero downtime, only after the 009 QA gate passes.

- Bring `spike/rr7-ssg` up to date with `main` (Tejas only touches `content/tejas/`, so low conflict risk); re-run the build to confirm still green after the merge-in.
- Merge `spike/rr7-ssg` → `main`. Render's atomic swap deploys the new static build.
- Immediate post-deploy smoke on production: `curl` a marketing page + a blog post + a news article for full body; confirm clean URLs; confirm contact form works.
- Rollback plan ready: redeploy the previous Render build if smoke fails.

## Acceptance
- [ ] `spike/rr7-ssg` merged into `main` with a clean, green build.
- [ ] Production (post atomic-swap) `curl` checks pass: marketing + blog + news full body, clean URLs.
- [ ] Contact form works in production.
- [ ] Rollback path confirmed (know how to redeploy the previous build) before merging.
- [ ] Pradhumn triggers/approves the merge to `main`.

## Notes
- **HIL:** the merge-to-`main` and go-live is Pradhumn's trigger — an agent should not unilaterally push the rendering-pipeline rewrite to production.
- If it fails catastrophically pre-merge, the spike branch is disposable (`git branch -D spike/rr7-ssg`) and `main` is untouched.
