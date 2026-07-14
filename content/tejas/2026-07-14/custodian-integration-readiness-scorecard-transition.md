---
title: "Custodian Integration Readiness Scorecard: Rating Schwab, Fidelity, Pershing, and Altruist for Advisor Transitions"
topic: "Advisor Transitions & Repapering"
description: "A scoring rubric RIA operations directors can apply before a move: six weighted dimensions that predict whether a custodian integration will speed repapering or slow it, with a comparative read on Schwab, Fidelity, Pershing, and Altruist."
author: "FastTrackr AI Team"
---

Custodian integration readiness is the single best predictor of how fast a book repapers, and most teams evaluate it on brand reputation instead of the operational specifics that actually move the timeline. This scorecard gives RIA operations directors a six-dimension rubric to rate any custodian connection before the move, plus a comparative read on how Schwab, Fidelity, Pershing, and Altruist tend to score, so you weight your pre-move engineering where it pays off.

The reason this matters: a custodian that supports fully digital account opening and clean data feeds turns a repaper into a batch job, while one that needs wet signatures and manual rekeying turns the same book into weeks of exception handling. The difference is not the custodian's size or prestige. It is a set of specific integration capabilities you can score in advance. What follows is that scorecard, then a dimension-by-dimension comparison you can adapt to your own stack. Treat the custodian ratings as directional and confirm the current specifics with each custodian, because these capabilities change fast.

## The six dimensions that predict integration readiness

Not every integration feature affects a transition equally. Prioritize the ones that touch the repapering critical path, which is the sequence from data capture to funded account. Score each dimension from 1 (manual, high friction) to 5 (fully automated, straight-through), then weight by how directly it hits the timeline.

| Dimension | What it measures | Weight | Why it moves the timeline |
|---|---|---|---|
| 1. Digital account opening | Paperless new-account creation and e-sign | High | Wet signatures are the most common cause of stalled repapering |
| 2. Data feed depth | Real-time position and balance sync to your PMS | High | Bad feeds force manual reconciliation and billing rework |
| 3. ACATS straight-through | Digital transfer initiation and status visibility | High | Blind, manual ACATS is where NIGO rejects hide |
| 4. Form and field mapping | How account data maps to the custodian's forms | Medium | Field mismatches drive not-in-good-order rejects |
| 5. Bulk and batch handling | Ability to open and transfer many accounts at once | Medium | Sequential processing breaks on a large concurrent book |
| 6. Exception visibility | Surfacing and resolving flagged transfers early | Medium | Late-caught exceptions restart the transfer clock |

The weighting is deliberate. Digital account opening, feed depth, and ACATS straight-through sit on the critical path, so a weak score there costs you more than a weak score on batch handling. Run every custodian in your move through this rubric before you build the workflow, and you will know where the manual work will land.

## How the major custodians tend to score

Public capability differs across custodians, and the newer entrants have reset expectations for what "integration-ready" means. The read below reflects generally reported capabilities as of late 2025, not a guarantee for your specific firm profile, so validate against your own custodian conversations.

| Dimension | Schwab | Fidelity | Pershing | Altruist |
|---|---|---|---|---|
| Digital account opening | Strong | Strong | Strong | Very strong (fully digital) |
| Data feed depth / ecosystem | Very strong (deepest ecosystem) | Strong | Strong | Strong, all-in-one |
| ACATS straight-through | Strong | Strong | Strong | Very strong |
| Third-party tech breadth | Very strong | Strong | Strong | Emerging, expanding |
| Typical firm-size fit | Broad, no hard minimum for most | Often larger firms | Often $100M+ firms | Startup and growing RIAs |
| Best transition fit | Broad range, deep integrations | Established mid-to-large books | Larger, complex books | Digital-first breakaways |

A few grounded specifics behind the ratings. Schwab holds the largest share of RIA assets and offers the deepest third-party integration ecosystem in the space, which is why complex stacks tend to score it high on feed depth. Fidelity and Pershing (BNY) historically onboard larger firms, with reported minimums that often start around fifty to a hundred million and a hundred million respectively, so a solo breakaway may fit them differently than a large recruiting deal. Altruist, founded in 2018 and reported as the fastest-growing custodian in the 2025 T3 software study, built around fully digital account opening and an all-in-one model, which is why digital-first breakaways often score it highest on readiness. The independent breakdowns from [Kitces on small RIA custodians](https://www.kitces.com/blog/ria-custodian-list-best-platforms-small-startup-ria-altruist-axos-tradepmr-eas-pershing-schwab/) and [AdvizorPro's custodian market analysis](https://advizorpro.com/post/top-ria-custodians) are useful references for confirming current capability before you commit.

## Dimension 1 and 2: where digital account opening and feed depth decide the move

The two highest-weighted dimensions deserve the most pre-move attention. Digital account opening determines whether new accounts are created with e-signature in minutes or with printed forms that clients sign, scan, and return over days. A custodian scoring 5 here lets you stage every new account and open them in a batch when the advisor drops; a custodian scoring 2 turns each account into a signature-chasing exercise that runs on the client's schedule, not yours.

Data feed depth is the quieter risk. If the custodian's position and balance feed into your portfolio management system is shallow or slow, your team pays for it after the accounts land, in manual reconciliation and billing corrections that surface at the first quarter-end. Confirm that your PMS supports a full feed from the custodian, since most major platforms support multiple custodian feeds but the depth varies. The point where custodian data meets your forms is exactly where [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) earns its place, pulling account data off statements and mapping it into the new custodian's forms so a shallow feed does not become manual data entry. Altruist's own framing of the features of a modern RIA custodian is a useful benchmark for what a 5 looks like on these dimensions.

## Dimension 3 and 4: ACATS straight-through and form mapping

ACATS straight-through processing is where a scorecard difference becomes a NIGO difference. A custodian that lets you initiate transfers digitally and see status back removes the blind spot where rejects hide; one that requires manual submission with no visibility means your team learns about a title mismatch when the account fails to arrive. Score this dimension on two things: can you initiate the transfer without paper, and can you see the transfer's status and reject reason back in a system you monitor.

Form and field mapping is the adjacent risk. Every custodian formats its account forms differently, and a field that maps cleanly on one requires a workaround on another. The failures cluster in predictable places, which is why a custodian-by-custodian view of form requirements and common reject patterns is worth building before the move; our companion guide on [custodian integration for advisor transitions](https://fasttrackr.ai/blog/custodian-integration-schwab-fidelity-pershing-repapering) covers the field-mapping specifics that a readiness score summarizes at a higher level.

## Dimension 5 and 6: batch handling and exception visibility for concurrent moves

The last two dimensions matter most when the move is not one advisor but many. Sequential processing that works fine for a single breakaway breaks when a recruiting team runs a large concurrent book, so score batch handling on whether the custodian and your workflow can stage, validate, and release many accounts together rather than one at a time. Exception visibility is the paired capability: on a large book, the accounts that flag are the ones that decide your timeline, so a custodian and workflow that surface exceptions early let you resolve them before they restart the transfer clock.

Teams running transitions at scale, especially [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) managing multiple firms' moves, should weight these two dimensions higher than a single-advisor breakaway would, because the coordination load is where a low score compounds.

## Turning the scorecard into a pre-move plan

The scorecard is a planning instrument, not just an evaluation. Once you have scored the custodians in your move, the low-scoring dimensions tell you exactly where to invest pre-move engineering. A custodian weak on digital account opening means staging e-signature workflows early; a custodian weak on feed depth means confirming your PMS mapping before accounts land; a custodian weak on ACATS visibility means building your own tracking layer. This is how an [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) turns a mixed-custodian move into a predictable timeline: it compensates for each custodian's weak dimension so the overall repaper runs clean. For proof of how that plays out on a real book, our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows the timeline effect of scoring and engineering the integration before the advisor dropped.

## Frequently asked questions

**What is the most important custodian integration feature for a transition?**
Digital account opening with e-signature, because wet signatures are the most common cause of stalled repapering. An account you can stage and open in a batch when the advisor drops moves far faster than one that waits on a client to print, sign, scan, and return forms. Data feed depth and ACATS straight-through processing follow closely, since both sit on the critical path from data capture to funded account.

**How do Schwab, Fidelity, Pershing, and Altruist differ for transitions?**
Broadly, Schwab offers the deepest third-party integration ecosystem and the widest firm-size fit; Fidelity and Pershing historically onboard larger books, with higher reported minimums; Altruist, a digital-first custodian founded in 2018, is built around fully digital account opening and tends to score highest on pure integration readiness for digital-first breakaways. Confirm current capabilities and minimums directly, since they change.

**How do I evaluate custodian readiness before committing to a move?**
Score six dimensions from 1 to 5: digital account opening, data feed depth, ACATS straight-through processing, form and field mapping, bulk and batch handling, and exception visibility. Weight the first three highest because they sit on the repapering critical path. The low scores tell you where to build pre-move workflows so the manual work does not surprise you mid-transition.

**Does using two custodians complicate a transition?**
It can, and it is increasingly common, with a meaningful share of RIAs now custodying at more than one firm. The main operational requirement is that your portfolio management system supports full data feeds from both custodians for reporting and billing, and that your repapering workflow handles each custodian's distinct forms and ACATS behavior. Score each custodian separately rather than assuming parity.

**Where does document automation fit into custodian integration?**
It bridges the gap where a custodian's feed or form mapping scores low. Document intelligence extracts account data from existing statements and maps it into the new custodian's forms, so a shallow feed does not force manual rekeying and field mismatches do not drive not-in-good-order rejects. It is the compensating layer that lets a mixed-readiness set of custodians still repaper on one clean timeline.

