---
title: "Systematic Withdrawals and RMDs in a Repaper: The Retiree Income That Breaks When a Book Moves"
topic: "Advisor Transitions & Repapering"
description: "ACATS moves positions and cash, but a systematic withdrawal plan, an RMD schedule, and the ACH link that pays a retiree do not carry to the new custodian. Here is what breaks, why a year-of-transfer RMD is the highest-risk item in the book, and the rebuild sequence that keeps a r"
author: "FastTrackr AI Team"
image: systematic-withdrawals-and-rmds-in-a-repaper-the-retiree-income-that-breaks-when-a-book-moves-hero.png
imageAlt: "Systematic Withdrawals and RMDs in a Repaper: The Retiree Income That Breaks When a Book Moves"
---

ACATS moves positions and cash, but not standing instructions. A systematic withdrawal plan, the ACH link that pays a retiree's monthly income, and the RMD schedule behind it stay at the old custodian and must be rebuilt at the new one. Miss the rebuild and a retiree misses a paycheck or an RMD.

Most repaper checklists are built around getting the assets to move. For a retiree's account, the assets moving is the easy part. The hard part is that the machinery paying that retiree every month, the systematic withdrawal, the reinvestment election, the bank link, the withholding, and the required minimum distribution the whole thing is calibrated to, does not ride along in the transfer. ACATS re-registers the shares and sweeps the cash, and then the account arrives at the new custodian inert: correct holdings, zero instructions. If nobody rebuilds the income machinery before the next scheduled payment, the client who depends on that deposit finds it did not arrive, and that is the single fastest way to lose a household you just spent weeks moving.

This is the part of a repaper that hits the most retention-sensitive clients hardest, and it is routinely under-managed because it does not show up as an ACATS reject. The transfer looks clean. The failure surfaces later, on the client's bank statement. Here is exactly what breaks, why the year-of-transfer RMD is the highest-risk item in any retiree's move, and the rebuild sequence that keeps the income on time.

## What ACATS carries, and what it silently leaves behind

Start with the boundary, because the whole problem lives at it. ACATS is an asset-transfer system. It re-registers positions in kind and moves cash balances from the delivering firm to the receiving firm, and FINRA's [customer account transfer framework](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) governs that movement of assets. What it does not do is carry the account's operating instructions. Those are account-servicing settings held in the delivering custodian's system, and they have no field in the transfer.

The instructions that do not carry include the ones that pay the client and the ones that keep the account compliant:

- The systematic withdrawal plan itself: the amount, frequency, and pay date that generate the client's income.
- The distribution instruction behind it: which position or cash the withdrawal draws from, and whether it is pro rata across holdings.
- The ACH or EFT bank link the money lands in, which requires reverification and often a fresh voided check or micro-deposit confirmation at the new custodian.
- The tax withholding election on retirement-account distributions, which resets to the receiving custodian's default rather than the client's chosen rate.
- Dividend and capital-gains reinvestment elections, which revert to the new custodian's default and can silently flip a client from reinvest to cash or the reverse.
- The RMD calculation and any automated RMD service the old custodian was running.

Every one of these is a standing instruction, and standing instructions are exactly the category of account feature that does not survive an ACATS transfer. The mechanics of why account-level settings and certain positions do not carry cleanly are the same family of problem that makes [fractional shares and DRIP positions break in an ACATS transfer](https://fasttrackr.ai/blog/why-fractional-shares-and-drip-positions-break-acats-transfers-and-how-to-handle-them): the transfer standardizes the asset, not the servicing around it.

## A dropped systematic withdrawal is a missed paycheck, not a ticket

Treat the systematic withdrawal as what it is to the client: income. A working-age client whose reinvestment election resets will not notice for a quarter. A retiree living on a monthly systematic withdrawal notices on the day the deposit does not appear, and that client is, by AUM and by loyalty, usually among the most valuable and most portable in the book.

The failure mode is quiet on your side and loud on theirs. Your status board shows the account transferred and settled. Meanwhile the old custodian, now holding an empty or closed account, stops paying. The new custodian has no withdrawal instruction on file, so it pays nothing. The gap is invisible to a transfer-status view and fully visible to the client's checking account. A retiree who has to call and ask where their income went is a retiree a competitor can convert, and the emotional weight of a missed distribution is out of all proportion to the operational size of the fix.

This is why the income machinery belongs on the repaper checklist as a first-class deliverable with its own owner, not as a footnote to the asset transfer. The data you need to rebuild it, the exact withdrawal amount, the pay date, the source, the withholding rate, lives on the old custodian's statements and distribution confirmations, and getting it off those documents accurately at volume is where [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) earns its place, because a rebuild from a rounded guess is how the client ends up with the wrong amount on the wrong day.

## The year-of-transfer RMD is the highest-risk item in the move

Retirement accounts add a second, sharper failure on top of the income gap: the required minimum distribution. Once a client reaches RMD age, currently 73, the IRS requires a minimum withdrawal every year, and the [IRS required-minimum-distribution rules](https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs) base each year's RMD on the account's fair market value at the prior December 31. That timing detail is what makes a mid-year custodian move dangerous.

Move an IRA in, say, July, and the RMD for that year is still calculated on the prior year-end balance, a balance the receiving custodian never held and may have no record of. Two opposite errors follow, and a transition team has to prevent both:

- The missed RMD. The old custodian's automated RMD service dies with the account, the new custodian does not know one is owed, and the year closes with the distribution never taken. The penalty for a missed RMD is a 25 percent excise tax on the shortfall under current rules, reduced to 10 percent if corrected within the IRS correction window. That is a client-harm event traceable directly to the transition.
- The double distribution. The client took part of the RMD at the old custodian before the move, nobody tells the new custodian, and a fresh full RMD gets scheduled, over-distributing the account and creating an unnecessary taxable event.

Aggregation rules give you room to manage this, but only if you track it. A client may satisfy the total RMD across all their traditional IRAs from any one of those IRAs, so a partial distribution taken at the old custodian counts toward the year's requirement even after the balance moves. Workplace plan accounts do not aggregate this way and each must be satisfied separately, and inherited IRAs are tracked on their own rules entirely. The number you must carry across the move is the year-to-date distributed amount and the year's required amount, per account, so the new custodian schedules only the remainder. Carrying that figure through the transfer is a data-continuity problem, the same one described in [how transition data moves from custodian statements to your CRM during a repaper](https://fasttrackr.ai/blog/how-transition-data-moves-from-custodian-statements-to-your-crm-during-a-repaper), and it is the field most likely to be lost because it lives in distribution history, not on the current statement.

## What moves, what resets, and what you must rebuild

The clean way to run this is a single ledger that separates the three categories, so nothing in the reset-or-rebuild columns gets mistaken for something the transfer handled.

| Account element | What ACATS does | Action required at receiving custodian |
|---|---|---|
| Positions and cash | Transferred in kind | Verify, then reconnect instructions below |
| Systematic withdrawal plan | Not carried | Rebuild amount, frequency, pay date, source |
| ACH / EFT bank link | Not carried | Re-establish and reverify the client's bank |
| Tax withholding election | Resets to default | Re-elect the client's chosen federal and state rate |
| Dividend / cap-gains reinvestment | Resets to default | Re-set reinvest or cash per client instruction |
| RMD schedule and YTD amount | Not carried | Recalculate on prior year-end value, net YTD taken |
| Automated RMD service | Dies with old account | Re-enroll and confirm before the December deadline |

The pattern in the right-hand column is the point: for a retiree's account, most of the real repaper work is in the elements ACATS never touched. Building the account correctly means treating the transfer as step one of two, with the instruction rebuild as the step that actually protects the client.

## The rebuild sequence that keeps the income on time

Sequence the rebuild so no scheduled payment falls into the gap between custodians. The order matters more than the speed.

Capture before you close. Before the assets leave, pull the full income profile from the old custodian: the systematic withdrawal amount and pay date, the source instruction, the withholding rate, the reinvestment elections, and the RMD figures including the year-to-date amount already distributed. This is the moment the data is still live and complete; after the account closes, distribution history gets harder to reach.

Rebuild in parallel with the transfer, not after it. The receiving custodian can accept standing-instruction setup while the ACATS transfer is in flight, so the withdrawal plan, bank link, and withholding elections can be staged to activate as the assets settle. Waiting until the account shows settled to begin the rebuild is what opens the missed-payment window.

Verify the first payment specifically. The single highest-value check in the whole process is confirming that the first post-transfer distribution is scheduled, funded, and dated correctly, against the client's expected pay date. One confirmed first payment closes the gap that causes the retention-losing phone call. The custodian's own cutoffs and enrollment lead times govern here, so build the timeline around the receiving firm's distribution calendar, not an assumed same-day switch.

Reconcile the RMD before year-end, not at it. For every retirement account over RMD age, confirm the year's required amount, subtract what was distributed at the old custodian, and schedule only the remainder with enough runway before the December 31 deadline that a delay does not push it into penalty territory.

## Why this breaks at volume, and how to systematize it

One retiree account, worked carefully by one specialist, rarely fails. The failure scales with concurrency. A recruiting desk moving dozens of accounts at once cannot hold each client's pay date and RMD status in memory, and the income machinery, because it does not generate an ACATS reject, is precisely the work that falls off a status board built around transfer state. The board says settled and the team moves on, and the missed distribution surfaces weeks later as a complaint.

The fix is to make the instruction rebuild a tracked, gated step in the workflow rather than tribal knowledge. Every retirement or income account carries a flag until its systematic withdrawal, bank link, withholding, and RMD are rebuilt and the first payment is verified, and the account is not marked complete on transfer settlement alone. Running that discipline across a full book is what a purpose-built [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is for, giving one view where income-account status is visible separately from transfer status so the retiree's paycheck cannot hide behind a green checkmark. The [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who move retiree-heavy books without income complaints are not more careful in the moment; they run a system that refuses to close an income account until the income is proven to flow. That is the same operational discipline behind the outcome in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition), where protecting the most portable households through the move is what preserved the AUM.

The assets moving is the visible half of a retiree's repaper and the easy half. The income machinery, the withdrawal, the bank link, the withholding, and the RMD, is the invisible half and the one the client actually feels. Rebuild it deliberately, verify the first payment, reconcile the RMD before the deadline, and the retiree never knows the account moved, which is exactly the outcome that keeps the household.

## Frequently asked questions

**Does a systematic withdrawal plan transfer to the new custodian automatically?** No. ACATS moves the account's positions and cash, but the systematic withdrawal plan is a standing instruction held in the delivering custodian's servicing system, and it does not carry. The account arrives at the new custodian with the correct holdings and no withdrawal instruction, so the client's income stops until the plan is rebuilt. The withdrawal amount, frequency, pay date, source, and the bank link it deposits into all have to be re-established and reverified at the receiving custodian, which is why the rebuild belongs on the repaper checklist as its own owned task rather than an assumed carryover.

**What happens to a client's RMD if the account moves mid-year?** The required minimum distribution for the year of the transfer is still calculated on the account's prior December 31 balance, which the old custodian held and the new one may not have on record. Two errors follow if it is unmanaged: a missed RMD, because the old custodian's automated service died and the new one does not know one is owed, carrying a 25 percent excise tax on the shortfall under current rules; or a double distribution, if a partial RMD was already taken before the move and a fresh full one gets scheduled. Carry the year-to-date distributed amount and the required amount across the transfer so the new custodian schedules only the remainder.

**Can a partial RMD taken at the old custodian still count after the move?** For traditional IRAs, yes. The IRS lets a client satisfy the total RMD across all their traditional IRAs from any single IRA, so an amount distributed at the old custodian before the transfer counts toward the year's requirement even after the balance moves elsewhere. Workplace retirement plans do not aggregate this way and must each be satisfied separately, and inherited IRAs follow their own separate rules. The practical requirement is to track the per-account year-to-date distributed figure through the move so nothing is double-counted or missed.

**Why do withholding and reinvestment elections change after a transfer?** Because they are account-level elections in the old custodian's system, not attributes of the positions, so they do not travel with an ACATS transfer and instead reset to the receiving custodian's defaults. A client who elected a specific federal withholding rate on distributions can land at the new custodian on the default rate, and a client set to reinvest dividends can silently flip to cash or the reverse. Both should be captured from the old custodian before the move and re-elected at the new one as part of the standing-instruction rebuild, then confirmed against the client's intended settings.

**How do I keep income accounts from slipping when I run many transitions at once?** Make the instruction rebuild a gated, tracked step separate from transfer status. Because a dropped systematic withdrawal produces no ACATS reject, it is invisible on a board built around transfer state, so the account looks done while the income is broken. Flag every retirement and income account until its withdrawal plan, bank link, withholding, and RMD are rebuilt and the first payment is verified, and do not mark it complete on settlement alone. At volume this has to be systematized rather than remembered, with income-account status visible on its own so a retiree's paycheck cannot hide behind a completed transfer.

