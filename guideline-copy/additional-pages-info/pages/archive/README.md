# Superseded legal copy — archive

Prior versions of legal pages, kept so we can show what text was in force on a given
date if a User, custodian, firm, or regulator ever asks. **Nothing in this folder is
published.** No route serves these files, and the build does not read `guideline-copy/`.

## Convention

- Current version lives at `../<page-slug>.md` and carries a `**Status:** CURRENT` header.
- When a page is replaced, `git mv` the outgoing file here as
  `<page-slug>-<YYYY-MM-DD>.md`, where the date is that version's "Last Updated" date.
- Add a `SUPERSEDED` banner at the top giving the dates it was in force and where the
  replacement lives.
- The authoritative published text is always the React component under
  `src/pages/legal/`. These Markdown files mirror it for reference and audit.

## Version history — Transition Platform

| Document | Version | In force | File |
|---|---|---|---|
| Terms of Service | 13 April, 2026 | 13 Apr 2026 – 21 Jul 2026 | `tos-transitions-2026-04-13.md` |
| Terms of Service | July 21, 2026 | 21 Jul 2026 – current | `../tos-transitions.md` |
| Privacy Policy | 13 April, 2026 | 13 Apr 2026 – 21 Jul 2026 | `privacy-policy-transitions-2026-04-13.md` |
| Privacy Policy | July 21, 2026 | 21 Jul 2026 – current | `../privacy-policy-transitions.md` |

Source copy for the July 21, 2026 revision: `Updated-copy/AT TOS.md`, `Updated-copy/AT PP.md`.
