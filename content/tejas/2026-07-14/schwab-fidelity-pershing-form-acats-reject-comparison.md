---
title: "Schwab, Fidelity, and Pershing Compared: Form Requirements, ACATS Behavior, and the Reject Patterns to Pre-Validate"
topic: "Advisor Transitions & Repapering"
description: "A custodian-by-custodian operational reference for advisor transitions: how Schwab, Fidelity, and Pershing differ on account forms and ACATS handling, plus the specific NIGO reject patterns to pre-validate before submission."
author: "FastTrackr AI Team"
---

Schwab, Fidelity, and Pershing each format their account forms differently and each surfaces ACATS rejects in its own way, so a repapering workflow tuned for one custodian throws avoidable not-in-good-order rejects on another. This is the custodian-by-custodian reference for a live transition: what differs in form requirements, how each handles the ACATS transfer, and the specific reject patterns to pre-validate before you submit, so the same clean process holds across every custodian in the move.

The mistake teams make is treating "the custodian" as one generic destination. In practice, the field that maps cleanly at one custodian needs a workaround at the next, and the reject that a soft 24-hour window forgives at one point costs a full rebook if caught late. This guide is the operational counterpart to a higher-level readiness score: not which custodian to pick, but how to run each one clean once it is in your move.

## First, the ACATS mechanics that apply to all three

Before the custodian differences, the shared system. ACATS is the Automated Customer Account Transfer Service run by the NSCC, and the [FINRA overview of customer account transfers](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) is the authoritative reference for how it governs a move. Two behaviors matter for every custodian in your transition.

First, rejects come in two severities. A soft reject, often a 24-hour window, keeps the transfer instruction active while you correct deficient information, so a fast catch saves the transfer. A hard reject cancels the instruction outright and forces a resubmission, which restarts the clock. The entire value of pre-validation is converting would-be hard rejects into non-events, and catching soft rejects inside their window.

Second, the reject reasons cluster into a predictable set regardless of custodian: registration or title mismatch between the delivering and receiving account, Social Security number mismatch (a frequent culprit on joint accounts, where the secondary holder's number must match), invalid or missing account numbers, and non-transferable or restricted assets that cannot move through ACATS. Nearly all publicly traded securities and cash transfer cleanly; the exceptions are where accounts stall. Our deep reference on [ACATS reject codes and pre-validation](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation) breaks these categories down further, and pre-validating against them is what keeps the number near zero.

## Where the three custodians actually differ

The shared mechanics run through custodian-specific forms and processes. The table below summarizes the operational differences that affect repapering. Treat these as general, publicly reported tendencies as of late 2025, and confirm current specifics with each custodian, since forms and digital capabilities change.

| Factor | Schwab | Fidelity | Pershing (BNY) |
|---|---|---|---|
| Typical firm-size fit | Broad, no hard minimum for most | Often larger firms | Often $100M+ books |
| Account opening | Digital account opening available | Digital account opening available | Digital account opening available |
| Integration ecosystem | Deepest third-party ecosystem | Strong, broad | Strong, enterprise-oriented |
| Registration granularity | Detailed registration types | Detailed registration types | Detailed, enterprise account structures |
| Where rejects tend to cluster | Title and registration matching | SSN and joint-account matching | Complex and restricted account handling |
| Best-fit book | Broad range of firm sizes | Established mid-to-large books | Larger, complex, multi-entity books |

The pattern behind the table: the more complex the account structures a custodian specializes in, the more the reject risk shifts toward registration and restricted-asset handling rather than simple field typos. A large, multi-entity book moving to Pershing needs different pre-validation attention than a straightforward book moving to Schwab. The independent custodian breakdowns from [Kitces](https://www.kitces.com/blog/ria-custodian-list-best-platforms-small-startup-ria-altruist-axos-tradepmr-eas-pershing-schwab/) and [InvestmentNews on custodians supporting advisors in motion](https://www.investmentnews.com/goria/custodian/how-alternative-ria-custodians-support-advisors-in-motion/265144) are useful for confirming each custodian's current onboarding posture.

## Schwab: registration and title matching is the watch point

Schwab holds the largest share of RIA assets and offers the deepest third-party integration ecosystem, which means the data-feed and tooling side of a Schwab move tends to be strong. The reject risk concentrates instead in registration and title matching, because the detail Schwab captures on account registration is exactly the detail that must match the delivering firm's records.

Pre-validate the registration string against the delivering statement before you submit. A joint account titled slightly differently at the old firm, an individual account with a middle-initial discrepancy, or a trust registration that does not match word for word is where the soft rejects appear. Because Schwab's ecosystem supports strong data feeds, the discipline is to make sure the data flowing into the new account form matches the source exactly, which is where extracting the registration directly from the delivering statement rather than rekeying it removes the error. This is the practical role of [document intelligence](https://fasttrackr.ai/solutions/document-intelligence): pulling the exact registration and account details off the existing statement so the receiving form matches the delivering record field for field.

## Fidelity: joint accounts and SSN matching

Fidelity onboards a broad range of firms and often works with established, larger books. The reject pattern to watch is the Social Security number match, especially on joint and multi-holder accounts. A common historical cause of SSN rejects is the secondary holder's number failing to match on a joint account, which is why the transfer input allows a secondary SSN field. On a book with many joint accounts, this is the single pre-validation that prevents the most avoidable rejects.

Build the check into intake: capture both holders' Social Security numbers for every joint account and verify each against the delivering firm's records before submission, not after a reject bounces back. The accounts that fail here are rarely complex; they fail on a digit or a mismatched secondary holder, which clean intake catches every time.

## Pershing: complex and restricted account structures

Pershing, part of BNY, tends to serve larger and more complex books, often at higher asset thresholds. That profile shifts the reject risk toward the harder cases: multi-entity structures, restricted or non-transferable assets, and accounts that require supporting documentation before they can move. The failures here are less about a typo and more about an asset or structure that ACATS cannot process as submitted.

Pre-validate the asset composition of every account against ACATS transferability before you initiate. Flag proprietary funds, restricted securities, and any position that may need to be liquidated or handled outside ACATS, and identify multi-entity or trust structures that need supporting documents up front. For a larger, complex book, this is the exception-handling work that decides the timeline, and it is exactly the coordination load a [transition consultant](https://fasttrackr.ai/who-we-serve/transition-consultants) manages across multiple concurrent moves.

## A per-custodian pre-validation checklist

Turning the custodian differences into an operating checklist gives your intake team a single sheet to run before any submission. The point is to front-load the check that each custodian is most prone to fail, rather than validating everything equally and still missing the one field that matters.

| Check | Schwab | Fidelity | Pershing | When to run it |
|---|---|---|---|---|
| Registration string matches delivering statement word for word | Critical | Important | Critical | Before form generation |
| Both holders' SSNs captured and verified on joint accounts | Important | Critical | Important | At intake |
| Account numbers validated against delivering records | Important | Important | Important | Before submission |
| Asset composition screened for non-transferable positions | Important | Important | Critical | Before ACATS initiation |
| Multi-entity or trust documentation gathered | Important | Important | Critical | At intake |
| Middle initials and name suffixes reconciled | Critical | Important | Important | Before form generation |

Read the "critical" cells as where a miss most often becomes a reject at that custodian. A team that runs this sheet before submission converts the majority of would-be rejects into corrections made before the transfer ever enters ACATS. For a book moving to more than one custodian, run the full checklist but weight the critical cells for each account's destination, and the [repapering timeline benchmark](https://fasttrackr.ai/blog/repapering-timeline-benchmark-under-30-days) shows what that pre-validation discipline does to the overall move duration.

## Running one clean process across all three

The operational goal is not three separate workflows but one workflow that pre-validates for each custodian's specific reject pattern. That is what a purpose-built [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) provides: a single repapering process that maps data correctly to each custodian's forms, checks the registration, SSN, and asset-transferability issues that custodian is prone to, and surfaces the exceptions early enough to fix inside the soft-reject window. The alternative, a generic process applied identically to every custodian, is what produces the uneven NIGO rates teams see when the same book moves cleanly to one custodian and stalls at another.

The compounding effect on a concurrent book is significant. When a recruiting team runs many transfers at once, a per-custodian pre-validation layer is the difference between a predictable release schedule and a queue of rebooks. Our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows the timeline effect of pre-validating against each custodian's reject pattern before submission rather than reacting to rejects after the fact.

## Frequently asked questions

**Why does the same account move cleanly to one custodian but reject at another?**
Because each custodian formats its account forms and captures registration detail differently, so a field that maps cleanly at one needs a workaround at the next. Registration and title matching drives more rejects at custodians that capture detailed registration, while SSN matching drives more at custodians with joint-account-heavy books. A workflow tuned for one custodian throws avoidable rejects on another unless it pre-validates for each one's pattern.

**What is the difference between a soft and hard ACATS reject?**
A soft reject, often a 24-hour window, keeps the transfer instruction active while you correct the deficient information, so a fast catch saves the transfer without resubmitting. A hard reject cancels the instruction outright and forces a full resubmission, which restarts the transfer clock. Pre-validation aims to prevent hard rejects entirely and to catch soft rejects inside their correction window.

**Which reject reasons should I pre-validate for first?**
Registration or title mismatch, Social Security number mismatch (especially the secondary holder on joint accounts), invalid or missing account numbers, and non-transferable or restricted assets. These categories account for the bulk of avoidable rejects across custodians. Validating account data against the delivering firm's statement before submission, rather than rekeying it, removes most of them.

**How do I handle non-transferable assets in a Pershing move?**
Identify them before you initiate. Flag proprietary funds, restricted securities, and positions that ACATS cannot move, and plan for liquidation or a separate handling path where needed. Larger, complex books moving to Pershing carry more of this risk, so screening asset composition and multi-entity structures up front is the pre-validation that most protects the timeline.

**Does digital account opening eliminate ACATS rejects?**
No. Digital account opening speeds the new-account side and removes wet-signature delays, but ACATS rejects come from data mismatches between the delivering and receiving records, which digital opening alone does not check. Pre-validating registration, SSN, and asset transferability against the delivering statement is what prevents the rejects; digital opening and clean pre-validation together are what produce a fast, clean transfer.

