---
title: "The Post-Close Retention Audit: How to Confirm a Moved Book Actually Landed"
topic: "Advisor Transitions & Repapering"
description: "Transition teams call a book move done at ACATS settlement, months before the book has actually landed. Here is the post-close retention audit that confirms every account funded, residuals swept, and held-away assets re-established, and measures true retention against the book yo"
author: "FastTrackr AI Team"
image: the-post-close-retention-audit-how-to-confirm-a-moved-book-actually-landed-hero.png
imageAlt: "The Post-Close Retention Audit: How to Confirm a Moved Book Actually Landed"
---

A book move is not done when ACATS settles. It is done when every account is funded, every residual has swept, every held-away asset is re-established, and the arrived book reconciles to the book you left with. The post-close retention audit proves it, run at 30, 60, and 90 days after close.

Most transition teams declare victory too early. The ACATS queue flips to settled, the advisor sees positions appear in the new custodian portal, and the project gets marked complete. But settlement is a milestone in the middle of the transition, not the end of it. Residual cash is still sweeping, mutual fund positions are still cleaning up, annuities and old retirement plans have not moved at all, and nobody has reconciled the arrived book against the departed book line by line. The gap between "ACATS settled" and "book actually landed" is where silent AUM leakage lives, and a team that never audits it never sees the leak.

## Why settlement is the wrong finish line

The [ACATS process operated by DTCC's National Securities Clearing Corporation](https://dtcclearning.com/products-and-services/equities-clearing/1655-acats.html) is designed to move the transferable core of an account fast, typically in three to eight business days for a clean account. What it does not do is deliver the whole relationship in one clean event. Several things trail the settlement date, and each is a place assets can go missing without triggering any alert.

- **Residual credits still in flight.** Dividends and interest that posted at the old firm during the transfer window arrive later as residual credits, and [FINRA's account transfer guidance](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) notes these follow the main transfer rather than moving with it. If nobody tracks them, small balances get stranded at the delivering firm.
- **Nonstandard cleanup running behind.** Mutual fund cleanups, partial transfer reversals, and fail reversals resolve on their own timelines after the primary ACATS. A position that looked settled can still be in a cleanup state.
- **Assets that never entered ACATS.** Annuities, alternatives, limited partnerships, and held-away retirement plans move on entirely separate paperwork tracks that can run months past close, covered in depth in our guide to [the assets that never move through ACATS](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup).
- **Accounts settled but unfunded.** An account can transfer and then sit with cash the advisor never reinvested, or with a pending item that blocks trading. Settled is not the same as working.

Because none of these throw a reject code, the operational dashboard shows green while the book is still incomplete. The audit exists to look where the dashboard does not.

## The three-checkpoint structure

Run the audit at three points after the primary close, because different failures surface on different clocks. One review at day 30 is too early to catch trailing cleanup; one at day 90 is too late to chase a stranded residual efficiently.

| Checkpoint | What it confirms | What typically surfaces |
|---|---|---|
| Day 30 | Core positions arrived and reconcile to the pre-move list | Missing lots, unfunded accounts, settled-not-working accounts |
| Day 60 | Residuals swept, nonstandard cleanup resolved, features restored | Stranded residual cash, blank beneficiary and margin/options gaps |
| Day 90 | Held-away and separate-track assets re-established; true retention measured | Annuities and alts still parked, the real retained-AUM number |

The three checkpoints turn "is it done yet" from a guess into a scheduled reconciliation. Each one has a specific list to clear, and nothing closes until the day-90 review confirms the separate-track assets have landed and the retention number is real.

## What to reconcile at each checkpoint

The core discipline is the same at every checkpoint: compare what is at the new firm against the book you left with, not against what happens to have arrived. The pre-move book snapshot is the baseline, and every account, position, and feature on it has to be accounted for as landed, in flight, or lost.

**Day 30, position reconciliation.** Pull the arrived book at the new custodian and match it account by account, position by position, against the pre-move snapshot. Flag any account that settled but holds uninvested cash, any position with missing tax lots, and any registration that did not come across. Document intelligence earns its keep here: [FastTrackr's document intelligence](https://fasttrackr.ai/solutions/document-intelligence) extracts positions and balances from the old and new statements so the match is a data comparison rather than a manual eyeball, which is where reconciliation errors hide.

**Day 60, residual and feature reconciliation.** Confirm residual credits have swept and no cash is stranded at the delivering firm. Verify the account features that ACATS does not carry, margin, options approval, discretionary authority, standing instructions, and beneficiary designations, have all been re-established. These fail silently, so they only get caught by a checklist that names each one.

**Day 90, separate-track and retention reconciliation.** Confirm annuities, alternatives, and held-away plans have been re-registered or intentionally left in place with a reason. Then compute retention properly, described below. Only after this checkpoint clears is the transition genuinely complete.

## Measuring retention against the right denominator

The retention number most teams report is inflated, because they divide arrived AUM by arrived AUM and get something near 100 percent by definition. Real retention measures what you kept against what you left with.

Set the denominator as the pre-move book: total AUM under the advisor at the old firm on resignation day. The numerator is what has actually landed and funded at the new firm at the day-90 checkpoint, including the separate-track assets. The difference is your true attrition, and it is the only figure worth benchmarking. For context, [Cerulli's transition research](https://www.cerulli.com/press-releases/new-wealth-management-research-finds-transition-support-services-critical-to-retaining-assets-during-advisor-moves) finds attrition varies sharply by move type, and our own [breakdown of AUM retention benchmarks](https://fasttrackr.ai/blog/aum-retention-benchmark-advisor-transition-data) explains why the widely quoted 97 percent figure does not describe advisors in motion. A B/D-to-B/D move loses materially more of the book than an independent-to-independent one, so compare yourself to the right benchmark for your move type, not to a blanket number.

| Retention framing | Denominator | What it tells you |
|---|---|---|
| Vanity retention | Arrived AUM | Almost nothing; near 100% by construction |
| True retention | Pre-move book on resignation day | Actual attrition, benchmarkable by move type |
| Funded retention | Pre-move book, counting only funded-and-working accounts | The number that reflects revenue, not just custody |

Funded retention is the sharpest of the three, because an account that transferred but sits unfunded generates no advisory fee. Measuring it forces the audit to distinguish "custody arrived" from "relationship working," which is the distinction that matters to the P&L.

## Where the leaks actually are, and how to close them

Across a real book, post-close leakage clusters in a few predictable places, and the audit is how you find yours before they become permanent.

1. **The settled-but-unfunded account.** Transferred, holds cash, never reinvested, earning no fee. Caught at day 30, closed by an advisor follow-up.
2. **The stranded residual.** Small dividend or interest balances left at the old firm. Caught at day 60, closed by a residual sweep request.
3. **The silent feature gap.** Blank beneficiary, lost margin or options approval, dropped standing instruction. Caught at day 60 by the feature checklist.
4. **The parked separate-track asset.** An annuity or alt that everyone assumed would move and nobody drove. Caught at day 90, and the most common source of "we thought we retained it" surprises.

Each leak has an owner and a closing action, which is what turns the audit from a report into recovered assets. A team running ten or more concurrent moves cannot hold this in someone's head, which is why the audit works best as a standing workflow with the reconciliation automated and the exceptions routed. Our guide to [measuring and raising the straight-through processing rate](https://fasttrackr.ai/blog/the-straight-through-processing-rate-in-advisor-repapering-how-to-measure-it-and-push-it-higher) covers the upstream half of the same discipline: fewer exceptions going in means a shorter audit list coming out.

## Making the audit routine

The post-close audit should not be a special project a consultant runs once. It should be the standard closing procedure on every transition, with the same three checkpoints, the same reconciliation against the pre-move book, and the same retention math each time. [FastTrackr's advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to hold the pre-move snapshot, reconcile the arrived book against it automatically, and surface the settled-but-unfunded and separate-track exceptions on schedule. For firms and consultants running transitions at volume, [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) use the same audit structure across many concurrent moves, and the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows what tightening the post-close process does to retained AUM.

Stop calling a move done at settlement. Snapshot the book on resignation day, reconcile against it at 30, 60, and 90 days, restore the features ACATS drops, drive the separate-track assets home, and measure retention against what you left with. That is the difference between a book you assume you kept and a book you can prove you kept.

## Frequently asked questions

**When is an advisor book move actually complete?** Not at ACATS settlement. Settlement moves the transferable core of each account in three to eight business days, but residual credits are still sweeping, nonstandard cleanup is still resolving, account features like beneficiary and margin have to be re-established, and separate-track assets such as annuities and held-away plans have not moved at all. A move is complete only when every account is funded and working, residuals have swept, features are restored, and the arrived book has been reconciled against the pre-move book. In practice that is around 90 days, not the settlement date.

**What is a post-close retention audit?** It is a structured reconciliation run at 30, 60, and 90 days after the primary close that confirms the book actually landed. Day 30 reconciles core positions against the pre-move snapshot and flags unfunded accounts. Day 60 confirms residuals swept and silent features like beneficiary designations and options approval were restored. Day 90 confirms separate-track assets are re-established and computes true retention. Each checkpoint has a specific list, and the transition does not close until day 90 clears.

**Why is my reported retention number too high?** Because the denominator is usually wrong. Dividing arrived AUM by arrived AUM produces a figure near 100 percent by construction and measures nothing. True retention divides what actually landed and funded by the pre-move book on resignation day. Funded retention goes further and counts only accounts that are funded and working, since a transferred but unfunded account earns no fee. Those denominators reveal real attrition; the vanity version hides it.

**Which assets go missing after ACATS settles?** The ones that never trigger a reject code. Residual dividend and interest credits stranded at the old firm, mutual fund positions still in cleanup, settled accounts left with uninvested cash, silently dropped features like blank beneficiary designations and lost margin or options approval, and separate-track assets such as annuities, alternatives, and held-away retirement plans that move on their own paperwork months past close. None of these show as errors on the operational dashboard, so only an audit finds them.

**How should retention be benchmarked?** By move type, not against a single blanket figure. Attrition differs materially between a broker-dealer-to-broker-dealer move, a move to independence, and an independent-to-independent move, so the widely quoted 97 percent retention number does not describe an advisor in motion. Measure true retention against your pre-move book at the day-90 checkpoint, then compare it to the benchmark for your specific move type.

