---
title: "Non-Transferable and Proprietary Assets: What Stalls an ACATS Book Move and Where AI Flags It Early"
topic: "Advisor Transitions & Repapering"
description: "Proprietary funds, non-standard assets, and residual positions are the quiet reason a book transfer stalls in ACATS. Here is how each one fails, which the receiving firm can delete or must liquidate, and where AI catches the problem before the transfer initiates instead of after "
author: "FastTrackr AI Team"
image: non-transferable-and-proprietary-assets-what-stalls-an-acats-book-move-and-where-ai-flags-it-early-hero.png
imageAlt: "Non-Transferable and Proprietary Assets: What Stalls an ACATS Book Move and Where AI Flags It Early"
---

**Proprietary funds, non-standard alternatives, annuities, and residual balances are the assets a receiving custodian cannot accept in an ACATS transfer, and they are the quiet reason a large book move stalls. AI flags each one before the transfer initiates and routes it to liquidation, exchange, or manual re-registration, while a licensed human owns every tax and suitability decision.**

Proprietary and non-transferable assets are the failure mode that no advisor plans for and every large book move hits. A transition can clear signatures, tax IDs, and titles cleanly and still stall because a slice of the book holds positions the receiving custodian cannot accept: a former employer's house-brand mutual fund, a non-standard alternative, an annuity with no selling agreement, or a residual balance that posts after the bulk transfer settles. This is how each of those breaks an ACATS transfer, what the receiving firm can delete versus what the client must liquidate or move separately, and where AI can flag the asset before the transfer initiates rather than after a reject burns a week.

FastTrackr AI approaches this as a pre-submission problem, not a cleanup problem: the platform reads the incoming positions, applies custodian-specific acceptance logic, and surfaces the non-transferable assets for a human to decide, before the transfer is ever sent. AI drafts the exception list; professionals decide what happens to each position.

## What actually counts as non-transferable in ACATS

The Automated Customer Account Transfer Service, governed by [FINRA Rule 11870 on customer account transfer contracts](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870), is built to move standardized assets between participants quickly. It is not built to force a receiving firm to hold something it has no agreement to carry. The rule is explicit that a proprietary product of the carrying (delivering) organization is deemed non-transferable unless the receiving organization has agreed to accept it. That single sentence is the root of most residual headaches in a book move.

Non-transferable positions fall into a few recurring buckets, and they behave differently:

- Proprietary funds and products of the delivering firm, where the house-brand mutual fund or a sponsored product has no selling agreement with the receiving custodian.
- Mutual funds the receiving firm does not have a dealer agreement to hold, even when they are not proprietary, because the receiving custodian has no distribution relationship with that fund family.
- Non-standard assets such as limited partnerships, private placements, certain alternatives, and non-traded REITs, which often move outside ACATS entirely through a manual, paper-based re-registration.
- Annuities, which frequently transfer through a separate process rather than clean ACATS, and depend on carrier and selling-agreement status.
- Fractional shares and certain proprietary money market sweeps, which may not transfer in kind and get liquidated at the delivering firm.

The FINRA overview of [customer account transfers](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) and the practitioner-level walkthrough in [Embark's ACATS transfer guide](https://www.embarkfunds.com/insights/how-to-transfer-brokerage-accounts-acats) both make the same point from different angles: the transfer moves what both sides can hold, and everything else needs a decision. The decision is where time leaks.

## How a non-transferable asset actually stalls the move

The mechanical failure is quieter than a hard reject. When the receiving firm reviews the transfer instruction and finds an asset it cannot accept, ACATS provides a receiver-delete function that lets the receiving member designate the position as non-transferable and remove it from the list of assets to be transferred, so the rest of the account can proceed. That sounds clean. It is not, because a deleted asset does not disappear from the client's life. It stays at the old firm, orphaned, until someone decides to liquidate it, move it through a separate channel, or leave it behind, and each of those choices carries tax and suitability weight that no automation should make on its own.

The second, slower failure is the residual. After a bulk transfer settles, positions can post at the delivering firm afterward: a dividend, a trailing distribution, a late-settling trade, a fractional remainder. Those become residual credits that need a separate residual transfer to sweep, and if no one is watching, they sit. On one account this is trivial. On a five-hundred-account book move, the residual and non-transferable exceptions are the long tail that keeps an operations team busy for weeks after the advisor believed the transition was done.

The third failure is the worst because it is invisible until it is expensive: a proprietary or non-standard asset that was never flagged, gets included in the transfer instruction, and triggers a reject or a partial that then has to be diagnosed, corrected, and resubmitted. That is the [ACATS reject-and-resubmit loop](https://fasttrackr.ai/blog/transition-timeline-killers-five-delays-that-add-weeks-where-ai-removes-each) doing its damage, and non-transferable assets are one of its most common causes alongside title and tax-ID mismatches.

## The exception decision table

Every non-transferable position needs a routing decision, and the decision is not the same for each. Here is the practical map operations teams work from, and where automation can prepare the decision versus where a human must own it.

| Asset type | Why it stalls the transfer | Typical routing | Where AI helps | Where a human must decide |
|---|---|---|---|---|
| Delivering firm's proprietary fund | No selling agreement with receiving custodian | Liquidate before or after transfer, or leave at old firm | Detect the position, flag no-agreement status, estimate tax impact of a sale | Whether to sell, given capital gains and client suitability |
| Mutual fund with no receiving dealer agreement | Receiving firm cannot hold that fund family | Exchange to a held share class or liquidate | Match the fund to the receiving firm's approved list, propose a like alternative | Approve the alternative and any share-class change |
| Non-standard alternatives (LPs, private placements, non-traded REITs) | Move outside ACATS via manual re-registration | Separate paper re-registration process | Pre-fill the re-registration paperwork, track the parallel workflow | Verify ownership, valuation, and transfer eligibility |
| Annuities | Often transfer outside clean ACATS; carrier rules apply | 1035 exchange or carrier-specific transfer | Identify the contract, assemble the carrier form set | Confirm surrender terms, riders, and best-interest fit |
| Residual credits after settlement | Post after the bulk transfer completes | Residual transfer sweep | Monitor for post-settlement postings and queue the sweep | Confirm the residual is complete before closing the account |
| Fractional shares and sweep remainders | Do not transfer in kind | Liquidated at delivering firm | Reconcile expected versus received share counts | Resolve any material discrepancy |

The pattern in that table is the whole thesis of AI-assisted repapering: the machine is good at detection, matching, pre-fill, and monitoring, and it is not permitted to make the judgment calls that carry tax or suitability consequences. That division is the difference between automation that a compliance officer trusts and automation that a compliance officer bans.

## Where AI actually fits, mechanic by mechanic

The value is not "AI speeds up transfers." It is specific, and it lives at four moments in the workflow.

Detection before initiation. Before a single transfer instruction is built, AI reads the delivering-firm statements and position files and compares every holding against the receiving custodian's acceptance rules. It surfaces the proprietary funds with no selling agreement, the fund families the receiving firm cannot hold, the alternatives that will never clear ACATS, and the annuities that need a carrier path. This is the moment that matters most, because a non-transferable asset caught here becomes a planned decision, while the same asset caught after submission becomes a reject. FastTrackr's [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) is built for exactly this extraction and comparison step, reading unstructured statements into a structured position list a rule engine can check.

Matching and alternative-proposal. When a fund cannot move in kind, AI can match it against the receiving firm's approved products and propose a comparable share class or like fund for a human to approve. The machine does the lookup that would otherwise eat an operations analyst's afternoon per account; the advisor makes the call, because a like fund is a recommendation and recommendations belong to a licensed human.

Parallel-workflow tracking. Non-standard assets that route outside ACATS create a second, manual workflow running alongside the main transfer. AI can pre-populate the re-registration paperwork and track the status of each parallel item so it does not fall off the board while attention is on the bulk move. This is where books quietly lose weeks, and where concurrency across many accounts, the core of an [end-to-end advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions), turns a scattered exception list into a managed queue.

Residual monitoring. After settlement, AI watches for post-settlement postings and queues residual sweeps, so the trailing dividend or late fractional does not strand an account in a half-closed state. A human confirms the residual is complete before the old account is closed, because closing an account with an unresolved residual is a client-service failure that surfaces at the worst time.

## Why this is a concurrency problem, not a per-account problem

On one transition, a non-transferable asset is an annoyance you handle by hand. The reason it deserves a system is scale. A consultant moving several advisors at once, or a home office repapering a large book, faces the exception long tail multiplied across hundreds of accounts, each with its own routing decision, tax consideration, and parallel workflow. Handled account by account, the exceptions are what blow the timeline, because they are the items that do not fit the assembly line and get set aside "to deal with later," and later is where transitions go to stall.

FastTrackr AI reports outcomes like large books moving in weeks rather than months, and figures such as a claimed reduction in not-in-good-order rates, and those are FastTrackr's own reported results rather than independent industry facts. What is not a claim is the structural point: the exceptions are the bottleneck, and a platform that detects them before submission, routes each to the right path, and tracks the parallel work to completion is attacking the exact part of a transition that manual process handles worst. The teams that feel this most are the ones who run transitions for a living, which is why [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) treat exception management as a core deliverable rather than an afterthought, and why a documented [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) is worth more than a feature list when the question is whether the long tail actually gets handled.

## What AI must never do here

The guardrail is as important as the capability. AI should not decide to liquidate a proprietary fund, because that is a taxable event with suitability implications that belong to the advisor and the client. It should not select the replacement fund as a final decision, because a like-for-like recommendation is advice. It should not auto-submit a transfer instruction that includes a flagged non-transferable asset, because submitting a known bad instruction is how you manufacture a reject. And it should not close an account with an open residual. In every one of those, the machine's job ends at "here is the position, here is why it cannot transfer, here is the option, here is the tax estimate," and the human's job begins. The teams that get repapering automation right are strict about this line, and their clients trust the output precisely because a person signs the judgment calls.

## The takeaway for an operations lead

Non-transferable and proprietary assets will not show up in the demo of a smooth transfer, and they are exactly what determines whether a large book move finishes on schedule or drags for a month past the advisor's expectation. The fix is not a faster reject-resubmit loop. It is moving the discovery earlier: reading the book before the transfer is built, flagging every position the receiving custodian cannot hold, routing each to liquidation, exchange, manual re-registration, or a residual sweep, and letting a licensed human make each judgment call from a prepared exception list instead of from a pile of rejects. That reordering, detection before initiation rather than diagnosis after failure, is where AI earns its place in a transition, and where the difference between weeks and months actually lives. The related discipline of catching the other pre-submission failures, the [NIGO reason codes AI can prevent](https://fasttrackr.ai/blog/nigo-reason-code-playbook-which-rejections-ai-prevents-before-submission), completes the picture: same principle, different failure mode, same answer of validating before you submit.

## Frequently asked questions

**What makes an asset non-transferable in an ACATS transfer?**

An asset is non-transferable when the receiving firm has no agreement or ability to hold it. FINRA Rule 11870 deems a delivering firm's proprietary product non-transferable unless the receiving firm agrees to accept it, and the same practical result applies to mutual funds the receiving custodian has no dealer agreement to carry, non-standard alternatives like limited partnerships and private placements that move outside ACATS, and certain annuities. The receiving firm can use a receiver-delete to remove the position so the rest of the account transfers, but the deleted asset still needs a routing decision: liquidate, exchange, re-register manually, or leave it behind.

**How does a proprietary fund stall a book transfer?**

It stalls in one of two ways. If it is flagged before submission, it forces a decision, liquidate, exchange to a held fund, or leave it at the old firm, and each choice carries tax and suitability weight. If it is not flagged and gets included in the transfer instruction, it can trigger a reject or a partial transfer that then has to be diagnosed and resubmitted, adding days to the account. Across a large book, unflagged proprietary and non-standard positions are one of the most common reasons the exception long tail keeps an operations team busy for weeks after the main transfer settles.

**Can AI decide what to do with a non-transferable asset?**

No, and it should not. AI can detect the position, identify why it cannot transfer, match it against the receiving firm's approved products, propose a comparable alternative, estimate the tax impact of a sale, and pre-fill any parallel re-registration paperwork. It cannot decide to liquidate, because that is a taxable recommendation, and it cannot finalize a replacement fund, because that is advice. The consistent rule is that AI drafts the exception list and prepares the options, and a licensed professional makes every judgment call that carries tax, suitability, or best-interest consequences.

**What is a residual transfer and why does it matter at scale?**

A residual is a position that posts at the delivering firm after the bulk transfer has already settled: a trailing dividend, a late-settling trade, a distribution, or a fractional remainder. It requires a separate residual transfer to sweep into the new account. On a single account this is minor, but across hundreds of accounts the residuals are a long tail that strands accounts in a half-closed state if no one monitors for them. AI can watch for post-settlement postings and queue the sweeps, but a human should confirm each residual is complete before the old account is closed.

**Do alternatives and annuities move through ACATS at all?**

Often not through clean ACATS. Non-standard assets such as limited partnerships, private placements, and non-traded REITs typically require a manual, paper-based re-registration that runs as a parallel workflow alongside the main transfer. Annuities usually transfer through a carrier-specific process or a 1035 exchange rather than standard ACATS, and depend on selling-agreement status and contract terms. Because these run outside the automated flow, they are the positions most likely to be forgotten, which is why pre-filling their paperwork and tracking each item to completion is where an AI-assisted process protects the timeline.

