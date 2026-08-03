---
title: "Advisory Fee Billing During a Transition: Proration, Billing Gaps, and the Revenue Lost in a Slow Repaper"
topic: "Advisor Transitions & Repapering"
description: "During an advisor transition, advisory fees stop at the old firm and restart only after accounts repaper and fund. Here is where the revenue leaks, how advance-versus-arrears mismatches create double-billing risk, and how to model the first billing cycle."
author: "FastTrackr AI Team"
image: advisory-fee-billing-during-a-transition-proration-billing-gaps-and-the-revenue-lost-in-a-slow-repaper-hero.png
imageAlt: "Advisory Fee Billing During a Transition: Proration, Billing Gaps, and the Revenue Lost in a Slow Repaper"
---

During an advisor transition, advisory fees usually stop at the old firm and restart at the new one only after each account repapers and funds. That gap, combined with mismatched billing methods between the two firms, quietly costs real revenue and creates double-billing risk. The fix is to model the billing timeline account by account and reconcile the first cycle deliberately rather than trusting the system defaults.

Most transition planning obsesses over ACATS timing and client retention and treats billing as an afterthought that operations will sort out later. That is exactly why the revenue leaks. A book that takes 45 days to fully repaper can lose weeks of billable fees on a meaningful slice of assets, and no one notices until the first quarterly reconciliation looks light. This article walks through where the money goes and how to stop the leak.

## Why fees stop, and where the revenue leaks

An advisory fee is charged against assets under management in accounts the firm administers. The moment an advisor resigns, the old firm stops billing the departing advisor's clients on that advisor's behalf, and the new firm cannot bill until three things are true for a given account: it has repapered, it has funded through ACATS, and it is on the new firm's billing system with a fee schedule attached.

The leak lives in the gap between those events. Positions may arrive through ACATS in days, but an account is not billable until it is fully established and configured, and the slowest accounts in a book set the pace. Trusts, retirement accounts, and anything with a registration exception can lag the simple individual accounts by weeks, and every day an account sits unbilled is fee revenue that no one recovers later. Firms managing this well treat the billing clock as a first-class metric alongside the repapering clock, which is the operational discipline the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to enforce.

## Billing in advance versus in arrears: the transition mismatch

The single most expensive detail in transition billing is whether each firm bills in advance or in arrears, because the two conventions collide at the moment of the move.

- **Bill in advance** means the client pays at the start of the period for services to come. If the old firm billed the full quarter in advance and the client leaves mid-quarter, the client is owed a prorated refund of the unearned portion.
- **Bill in arrears** means the client pays at the end of the period for services already delivered. The old firm will bill for the partial period the client was there, which can land after the client has already moved.

When the two firms use different conventions, clients can receive two bills close together, one settling the old relationship and one opening the new. Kitces has documented this exact double-billing trap in the [merger and acquisition context](https://www.kitces.com/blog/advisory-fee-billing-in-advance-arrears-quarterly-daily-balance-merger-acquisition/), and it is the fastest way to generate an angry client call in the first month of a transition you otherwise ran cleanly. The transition team has to know each firm's convention before the move, not discover it at reconciliation.

## The three billing gaps a repaper creates

Break the revenue leak into three distinct gaps, each with a different owner and a different fix.

| Gap | What happens | Who should catch it |
|---|---|---|
| The dead period | Account has left the old firm but is not yet billable at the new firm | Transition operations |
| The proration gap | Partial-period fees miscalculated on either side of the move | Billing and compliance |
| The method mismatch | Advance-versus-arrears collision produces double or missed bills | Advisor and operations together |

The dead period is the biggest dollar figure and the most controllable. It shrinks directly as repapering time shrinks, which is why [compressing the repaper timeline](https://fasttrackr.ai/blog/repapering-timeline-benchmark-under-30-days) is a revenue project, not just a client-experience one. The proration gap is the most compliance-sensitive: the SEC has flagged fee-calculation errors, including inconsistent proration and billing that does not match the agreement, in its [examination risk alert on fee calculations](https://www.sec.gov/files/exams-risk-alert-fee-calculations.pdf). The method mismatch is the most embarrassing because it reaches the client directly.

## How to model the first billing cycle

You cannot manage what you have not modeled. Before the move, build a simple per-account view that answers, for every account, when it will become billable and how the first fee should be calculated.

1. **Tag each account by complexity.** Simple individual and joint accounts repaper fast. Trusts, entities, and retirement accounts lag. The lagging accounts define your billing dead period, so size that tail explicitly.
2. **Record both firms' billing conventions.** Advance or arrears, and the billing cycle (monthly, quarterly). This one field prevents the double-billing call.
3. **Set the new fee-schedule start date per account, not per book.** Billing the whole book from one date either overcharges the accounts that funded late or undercharges the ones that funded early. Start the clock when each account is actually billable.
4. **Reconcile the first cycle by hand.** Automated billing runs inherit whatever configuration you gave them. The first post-transition cycle should be reviewed account by account before invoices go out, because that is where proration errors hide.

Modeling this is straightforward when you already have clean, structured data on every account. Pulling account type, registration, and current fee arrangement out of statements and agreements is exactly what [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) does, which turns the billing model from a manual spreadsheet exercise into a byproduct of the repapering work you are already doing.

## Compliance: proration, refunds, and disclosure

Transition billing is not only a revenue question. It is a compliance one, and the two failure modes are symmetrical.

- **Overbilling.** Charging a full period when the client was present for part of it, or failing to refund unearned advance fees when an account leaves, is a classic exam finding. Advance-billing firms need a clear termination-and-refund policy and must apply it.
- **Underbilling and inconsistency.** Applying proration inconsistently across a book, even in the client's favor, still signals a control weakness. Regulators care that the fee matches the disclosed agreement, not merely that it errs low.

The practical safeguard is a documented proration method applied uniformly, with the first transition cycle reconciled against the advisory agreements. Because these obligations touch books-and-records and disclosure, coordinate the billing plan with the same compliance workflow handling the rest of the move rather than running it on a separate track.

## Where the billing gap and the repaper meet

Every day of repapering delay is a day of unbilled assets, so the levers that speed the transition are the same levers that protect fee revenue. Pre-validated forms, statement extraction, and exception triage all pull accounts onto the billing system sooner. That is the connection most transition ROI models miss, and it is why the [cost-per-transition and revenue-at-risk model](https://fasttrackr.ai/blog/advisor-transition-technology-roi-cost-per-transition-benchmark) should include the billing dead period as a line item, not just repapering labor. For firms running many transitions at once, the compounding matters even more, which is why [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) managing books at scale track billable-date-per-account as a core deliverable. A [real transition outcome](https://fasttrackr.ai/case-study/advisor-transition) shows what closing that gap looks like in practice.

## A worked example of the dead period

Put numbers on it. Say an advisor moves a $250 million book at a 1 percent annual advisory fee, billed quarterly. That is roughly $625,000 in quarterly fees, or about $6,900 in daily fee revenue across the whole book. Now assume the simple accounts, 70 percent of assets, become billable in 10 days, while the complex tail, 30 percent of assets, takes 40 days.

The tail alone represents about $2,070 in daily fees. Thirty extra days of dead period on that slice is roughly $62,000 in fees that never get billed and never come back, on a single transition. That is the number most ROI models omit entirely, and it dwarfs the labor cost of the repaper. Firms that bill in arrears and reconcile on a daily average balance, a method covered in Orion's guide to billing in arrears, reduce the exposure because they bill for the days an account was actually present rather than losing a whole period, but they still lose the days the account sat unbilled between firms.

The lesson is blunt: shave days off the complex tail and you recover fee revenue at a rate that makes the transition technology pay for itself before you count anything else.

## The bottom line

Advisory fee revenue during a transition is not lost to a single dramatic error. It leaks slowly through the dead period between firms, through proration mistakes, and through advance-versus-arrears mismatches that no one modeled. The teams that keep the revenue treat billing as an operational deliverable with its own timeline, model the first cycle account by account, and reconcile it by hand before invoices go out. Do that, and the money you moved the book to keep actually shows up in the first quarter's fees.

## FAQ

**When do advisory fees restart after an advisor transition?**
Fees restart at the new firm only after an account has repapered, funded through ACATS, and been loaded onto the new firm's billing system with a fee schedule attached. Positions can arrive in days, but the account is not billable until it is fully established and configured. The slowest accounts in a book, typically trusts, entities, and retirement accounts, set the pace and define the billing dead period.

**What causes double billing during a transition?**
The most common cause is a mismatch between the two firms' billing conventions. If the old firm billed the quarter in advance and the new firm also bills in advance, a client can receive two bills close together unless the old firm issues a prorated refund of the unearned portion. Knowing each firm's advance-versus-arrears convention before the move is what prevents the problem.

**How should partial-period fees be prorated during a move?**
Prorate based on the portion of the billing period the account was actually under each firm's management, applying one consistent method across the entire book. The SEC has flagged inconsistent proration and fees that do not match the advisory agreement as examination findings, so the method should be documented and the first transition billing cycle reconciled account by account against the agreements before invoices go out.

**Does a slow repaper actually cost fee revenue?**
Yes. Every day an account sits between firms, unbilled, is advisory fee revenue that is not recovered later. A book that takes 45 days to fully repaper can lose weeks of fees on the slower-moving accounts. That is why compressing repapering time is a revenue project as much as a client-experience one, and why the billing dead period belongs in any transition ROI model.

**Who owns transition billing on the operations team?**
It is shared. Transition operations owns the billable-date-per-account timeline, billing and compliance own proration accuracy and refund policy, and the advisor and operations together own catching advance-versus-arrears mismatches before they reach the client. Assigning these explicitly, rather than assuming billing will sort itself out, is what keeps the revenue from leaking.

