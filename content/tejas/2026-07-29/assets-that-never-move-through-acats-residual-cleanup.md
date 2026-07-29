---
title: "The Assets That Never Move Through ACATS: Annuities, Alts, and the Residual Cleanup That Runs Six Months Past Close"
topic: "Advisor Transitions & Repapering"
description: "ACATS moves the easy 80 percent of a book. Annuities, alternatives, limited partnerships, and held-away plans move on separate tracks with their own paperwork. Here is what does not transfer, what FINRA Rule 11870 requires when it does not, and how to plan the residual tail."
author: "FastTrackr AI Team"
image: assets-that-never-move-through-acats-residual-cleanup-hero.png
imageAlt: "The Assets That Never Move Through ACATS: Annuities, Alts, and the Residual Cleanup That Runs Six Months Past Close"
---

ACATS moves listed equities, most mutual funds, and cash. It does not move annuities, most alternative investments, limited partnerships, or held-away retirement plans. Those assets run on separate tracks with separate paperwork, and FINRA Rule 11870 requires the carrying firm to identify them in writing and collect disposition instructions before anything happens.

If you have ever watched a transition hit 95 percent of AUM in three weeks and then sit at 95 percent for four months, this is why. The remaining five percent is not slow because someone dropped it. It is slow because it was never going to move through ACATS at all, and nobody built a plan for it before resignation day.

Most transition planning treats ACATS as the whole transfer. It is not. It is the fast lane, and the fast lane serves the assets that were always going to be easy. The book's difficulty lives in the exceptions, and the exceptions have their own rules, their own counterparties, and their own clocks that keep running long after the transition project is declared closed.

## What ACATS actually covers, and what it does not

The clean division is by where the asset is held and who has the relationship with the product sponsor.

| Asset type | Moves via ACATS? | What actually moves it | Realistic timing |
|---|---|---|---|
| Listed equities, ETFs, options | Yes | Standard ACATS full or partial transfer | Within the rule's validation and transfer windows |
| Mutual funds held in brokerage (networked) | Usually | ACATS, if the receiving firm has a selling agreement with the fund family | Standard, unless the fund is not available at the new firm |
| Mutual funds held direct at the fund company | No | Transfer agent re-registration, separate paperwork per fund family | Weeks, varies by fund family |
| Variable and fixed annuities | No | Carrier change of broker-dealer or agent of record, or a 1035 exchange if the contract itself is replaced | Carrier-dependent, often the longest tail in the book |
| Alternative investments, private placements, non-traded REITs | Rarely | Re-registration with the fund administrator or transfer agent, subject to whether the new firm has a selling agreement | Weeks to months |
| Limited partnerships | No | Transfer agent re-registration | Weeks beyond ACATS |
| 529 plans | No | Plan-level paperwork with the program manager | Plan-specific |
| Held-away 401(k) and employer plans | No | Not a transfer at all, the assets stay put unless the client is eligible for a rollover | Governed by the plan, not by you |
| Physical certificates | No | DRS or transfer agent handling | Slow, and rare enough that nobody has a process |

The pattern worth internalizing: **ACATS moves assets, not relationships.** An annuity does not move because the contract sits with an insurance carrier, and what needs to change is which broker-dealer and which agent are named on the carrier's records. That is a carrier form, not a transfer instruction, and no amount of ACATS follow-up will produce it.

The same logic applies to alternatives. If the receiving firm has no relationship or arrangement with the product sponsor, the asset is not transferable to that firm at all. FINRA is explicit about this in [Regulatory Notice 22-19](https://www.finra.org/rules-guidance/notices/22-19), which defines nontransferable assets in exactly those terms and notes that the receiver delete function, previously limited to mutual funds and annuities, was expanded to cover alternative investments in the fourth quarter of 2022.

## The obligation most transition plans skip

When assets are deemed nontransferable, this is not a quiet operational shrug. [FINRA Rule 11870](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870) creates a specific sequence, and Notice 22-19 reinforces it on the receiving side.

The carrying firm must identify the nontransferable assets to the customer in writing and request instructions for their disposition. The customer then chooses among a defined set of options:

1. Liquidate the asset
2. Retain the asset at the carrying firm
3. Have the asset transferred into the customer's own name and shipped to them
4. Transfer the asset to the third party that is the original source of the product

Once those instructions come back, the carrying member has **five business days** to distribute the resulting money balance or initiate the transfer.

On the receiving side, Notice 22-19 is equally direct: before a receiving firm uses the receiver delete function to strip assets out of a transfer, it must provide the customer a written list of the specific assets it cannot accept and request written instructions on disposition first. Deleting first and explaining later is not the compliant order of operations.

Read those two obligations together and the operational implication is obvious. Every nontransferable asset in the book generates a written client communication, a client decision, and a follow-up action, and each of those has its own turnaround. A book with 90 households and 140 non-ACATS positions is not one project. It is 140 small projects with client dependencies.

That is the work that turns a four-week transfer into a five-month one, and it is almost never in the plan.

## The residual tail runs six months, by rule

Here is the part that surprises even experienced operations teams. The transfer is not the end of the obligation.

Rule 11870 requires members to transfer credit balances, both cash and securities, that accrue to a transferred account within **ten business days** after those balances accrue, and to do so for a minimum period of **six months** following the transfer.

Dividends declared before the transfer but paid after it. Interest. Class action settlements. Corporate action proceeds. Fractional shares from a reinvestment that posted after the account closed. These keep landing in a closed account at the old firm for months, and each one has a ten-business-day clock attached.

Three practical consequences for anyone running the transition:

**The project does not close when AUM shows up.** If your transition dashboard flips to complete when assets land, you have handed an ongoing obligation to nobody in particular. Someone has to be monitoring residual credits at the prior firm for six months.

**Clients notice residuals before you do.** A client who gets a statement from a firm they thought they left, showing forty-one dollars of dividend, calls their advisor. That call is preventable with one sentence in the transition communication explaining that small residuals will trickle in for up to six months and will be swept automatically.

**Residual handling is where transfer claims come from.** The rule gives members five business days to resolve a claim relating to a transfer once notice is received. Unresolved residuals become claims, and claims consume operations time long after everyone has moved on to the next transition.

If you are tracking transition performance at all seriously, residual closure belongs in the metric set alongside the more familiar operational measures covered in the [advisor transition operations scorecard](https://fasttrackr.ai/blog/advisor-transition-ops-scorecard-metrics). Assets transferred is a milestone. Residuals closed is the completion.

## Build the exception inventory before resignation, not after

The single highest-impact change here is timing. Every one of these asset types can be identified from existing statements, weeks before anyone resigns. What stops teams is that the inventory work is manual and the statements are a mess of formats.

The inventory you want, per household, before drop day:

- Every position that is not a listed security or a networked mutual fund
- For annuities: carrier, contract number, product name, whether it is variable or fixed, and whether the receiving broker-dealer has a selling agreement with that carrier
- For alternatives and non-traded products: sponsor, program name, and whether the receiving firm has a selling agreement or custody arrangement for it
- For direct-at-fund mutual fund positions: fund family and account number
- For 529s: program and state
- For held-away plans: plan name and whether a rollover is even on the table
- A first-pass disposition recommendation per position, so the client conversation starts from a proposal rather than a blank page

That inventory answers the question that actually determines your timeline: for each non-ACATS position, does the receiving firm have the relationship needed to hold it, and if not, which of the four disposition paths applies?

Two things follow immediately from having it. You can sequence client conversations by difficulty rather than alphabetically, and you can raise the selling-agreement gaps with the new firm while there is still time to open one. A missing selling agreement discovered in week one of the transition is a business development conversation. The same gap discovered in week six is a forced liquidation conversation with a client who does not want to sell.

Extracting that inventory is exactly the kind of work [AI document intelligence](https://fasttrackr.ai/solutions/document-intelligence) handles well, because the source material is a stack of PDFs in a dozen different carrier and custodian formats and the extraction target is a fixed set of fields. Doing it by hand across a 200-household book is a two-week job that nobody has two weeks for, which is precisely why it gets skipped and then discovered later.

## Sequencing: what to start first

Non-ACATS assets have wildly different lead times, so start them in the order of how long they take rather than how large they are.

| Priority | Category | Why it goes first | Client dependency |
|---|---|---|---|
| 1 | Annuities | Longest tail, carrier-controlled, forms vary by carrier | Signature on carrier form |
| 2 | Alternatives and non-traded products | Sponsor re-registration plus a selling-agreement check that may fail | Signature, plus a disposition decision if the answer is no |
| 3 | Limited partnerships | Transfer agent re-registration, slow and manual | Signature |
| 4 | Direct-at-fund mutual funds | Per-fund-family paperwork, volume-heavy but predictable | Signature per family |
| 5 | 529 plans | Program-specific, moderate | Signature |
| 6 | Held-away plans | Often no action is possible or advisable | Conversation only |

Annuities go first for a reason that has nothing to do with size. The paperwork sits with a third party you do not control, the forms differ by carrier, and a rejected form restarts the clock. Starting them in week one and finishing in month three is a normal outcome. Starting them in month two guarantees the transition never feels finished.

One caution on annuities specifically. Changing the broker-dealer or agent of record on an existing contract is not the same thing as replacing the contract through a 1035 exchange. The first is administrative. The second is a recommendation, with all of the suitability, disclosure, and supervisory documentation that any replacement recommendation carries. Treating a replacement as though it were a paperwork step is a compliance problem, not a shortcut, and this is the point where the transition team should be handing off to the firm's supervisory process rather than working faster.

## What good looks like

A transition that handles this well looks different from one that does not, in ways you can see on a status board.

The exception inventory exists before resignation. Each non-ACATS position has a named disposition path and an owner. Client communications about nontransferable assets go out as one consolidated conversation per household, not as a series of surprises. Selling-agreement gaps are known in week one. Annuity forms are in flight before the ACATS bulk transfers even validate. And there is a named person watching residual credits at the prior firm for the full six months the rule contemplates.

The version that goes badly is the one where the ACATS batch clears, the dashboard turns green, the transition team rolls onto the next advisor, and the residual work quietly falls to the advisor and one operations associate who inherit 140 loose ends without a system. FINRA's [customer account transfers topic page](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) is worth putting in front of anyone who thinks the account transfer ends when the assets show up.

For firms running these moves repeatedly, the structural fix is to stop treating exceptions as exceptions. They are a predictable share of every book. Building them into the standard workflow, with the inventory as a required pre-resignation deliverable, is the difference between a transition process that scales and one that depends on individual heroics. That is the model behind the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) approach, and it is the pattern that firms running several moves at once tend to arrive at on their own, which is why the workflow built for [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) treats the exception inventory as a standard deliverable rather than an escalation. A [real transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows what the compressed version looks like end to end.

The timing detail worth remembering from the ACATS side, for context on how the two tracks diverge, is covered in [ACATS timelines by asset type](https://fasttrackr.ai/blog/account-transfer-timeline-acats-by-asset-type). The short version: the fast track is genuinely fast, and it was never the problem.

## Frequently asked questions

**Which assets cannot be transferred through ACATS?**

Annuities, most alternative investments and private placements, limited partnerships, mutual funds held directly at the fund company rather than in a brokerage account, 529 plans, held-away employer retirement plans, and physical certificates. Broadly, ACATS moves assets held in brokerage where the receiving firm can also hold them. Anything requiring a relationship with a third-party sponsor moves on that sponsor's paperwork instead.

**What does FINRA require when an asset is nontransferable?**

Under Rule 11870, the carrying firm must identify nontransferable assets to the customer in writing and request disposition instructions. The customer can direct liquidation, retention at the carrying firm, transfer into their own name, or transfer to the original product source. The carrying member then has five business days after receiving those instructions to distribute the money balance or initiate the transfer. A receiving firm using the receiver delete function must give the customer a written list of assets it cannot accept and request written instructions before designating them nontransferable.

**How long do residual credits keep arriving after a transfer?**

Rule 11870 requires members to transfer credit balances, cash and securities, within ten business days of accrual, for a minimum of six months after the transfer. Dividends declared before the move, interest, class action settlements, and corporate action proceeds all continue to land in the closed account during that window, so someone needs to own residual monitoring well past the point the transition looks finished.

**Do annuities need a 1035 exchange to move with an advisor?**

Usually not. Changing the broker-dealer and agent of record on an existing contract is administrative paperwork with the carrier and leaves the contract intact. A 1035 exchange replaces the contract itself, which makes it a recommendation subject to your firm's suitability, disclosure, and supervisory requirements. The two should never be treated as interchangeable steps in a transition workflow.

**When should the non-ACATS inventory be built?**

Before resignation. Every item on it can be identified from existing statements, and the two findings that most affect the timeline, missing selling agreements at the receiving firm and annuity carrier requirements, both need lead time to resolve. Building the inventory after the ACATS batch has already cleared means discovering forced-liquidation conversations at the worst possible moment.

