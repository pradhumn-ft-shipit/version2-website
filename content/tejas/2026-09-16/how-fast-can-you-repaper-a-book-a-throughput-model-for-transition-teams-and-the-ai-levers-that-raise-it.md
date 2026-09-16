---
title: "How Fast Can You Repaper a Book? A Throughput Model for Transition Teams and the AI Levers That Raise It"
topic: "Advisor Transitions & Repapering"
description: "The speed of a book move is not one number, it is three: how many accounts you keep in flight, how many days each takes to land, and how many clear on the first submission. Here is the throughput model that governs a repaper, the ACATS steps you cannot compress, and where AI rais"
author: "FastTrackr AI Team"
image: how-fast-can-you-repaper-a-book-a-throughput-model-for-transition-teams-and-the-ai-levers-that-raise-it-hero.png
imageAlt: "How Fast Can You Repaper a Book? A Throughput Model for Transition Teams and the AI Levers That Raise It"
---

How fast you can repaper a book is set by three numbers working together: how many accounts you keep in flight at once, how many days each one takes to land, and how many clear on the first submission. Raise concurrency, cut cycle time, and lift first-pass yield, and total throughput climbs. AI moves all three levers by pre-filling and validating before submission. A human still owns every judgment call.

Most transition teams answer "how fast can you move this book" with a single figure pulled from the last move that felt similar. That is a guess, not a model, and it fails the moment the next book has more trusts, a second custodian, or twice the accounts. Speed matters because time in transition is time assets are exposed. Research on advisors changing firms finds that roughly 19 percent of client assets are lost on average, and Cerulli's work on [advisors in transition](https://www.cerulli.com/resource/white-paper-advisors-in-transition-challenges-and-best-practices) reports that switching advisors rank operational matters, learning new systems, and lost revenue during the move as their top three challenges. Every extra week a book sits half-moved widens all three problems. So the real question is not "how long will it take," it is "what actually sets the pace, and which parts can we compress." This is a throughput problem, and it has a model.

## The throughput model: three numbers, not one

Borrow the one law that governs every queue. In a repaper, the number of accounts you land per week is roughly the number of accounts you keep in flight divided by the average time each account spends in flight. That single relationship, sometimes called Little's Law, tells you there are exactly two ways to finish a book sooner: keep more accounts moving at the same time, or shorten how long each one takes. There is no third door.

But raw cycle time hides a third number that quietly controls the other two: first-pass yield, the share of accounts that clear on the first submission with no not-in-good-order reject. First-pass yield is the multiplier because a NIGO does not cost you a quick fix, it costs a clock restart. When a transfer rejects, you do not resume where you left off; you correct, resubmit, and wait out the custodian's validation window again. So a book with a 40 percent NIGO rate is not 40 percent slower than a clean one, it is far slower, because a large share of accounts run the full cycle twice. That is why the honest throughput model is:

**Accounts landed per week ≈ (accounts in flight × first-pass yield) ÷ average cycle time**

Every lever a transition team has pulls on one of those three terms. The [straight-through processing rate you can measure and raise](https://fasttrackr.ai/blog/the-straight-through-processing-rate-in-advisor-repapering-how-to-measure-it-and-push-it-higher) is first-pass yield by another name, and it is usually the cheapest term to move because it attacks rework rather than adding capacity.

## Where the cycle time actually goes

Before you can compress cycle time you have to see it. A single account's journey breaks into four segments, and only some of them are yours to compress.

| Cycle segment | Typical driver | Compressible? | Where the time really goes |
|---|---|---|---|
| Prep and data assembly | Gathering statements, reconciling client data across CRM, custodian, and planning tools, filling forms | Highly compressible | Manual rekeying and hunting for the right field values |
| Signature collection | Client availability, number of round trips, wet-ink and medallion holdouts | Compressible | Round trips when forms go out piecemeal instead of batched by household |
| ACATS validation window | The carrying firm must validate or except a request inside a fixed window | Fixed by rule | The carrying firm's review, not your work |
| Reject and resubmit loop | NIGO codes: title mismatch, bad account number, missing or mismatched signature, restricted or non-transferable assets | Preventable, not compressible | A full clock restart per reject, which compounds |

The ACATS clock is the segment teams fixate on and the one they cannot move. Under the [FINRA customer account transfer framework](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers), the carrying firm has a defined window to validate or take exception to a transfer, and a clean account generally settles in roughly four to six business days. NSCC's ongoing modernization of ACATS messaging is tightening those windows further, which cuts the delivering side's slack for manual error correction. The lesson is not to fight the ACATS window; it is to stop feeding it rejects, because the reject loop is the only part of that segment you control.

That reframes the whole exercise. Prep and signatures are where your labor lives, but the reject loop is where your calendar dies. A repaper that runs mostly clean lands close to the ACATS floor. A repaper that runs dirty runs that floor two or three times per rejected account. Industry estimates put manual, paper-based NIGO rates as high as around 60 percent, while digital repapering commonly brings that into the single digits to low teens. That gap, not the ACATS window, is the difference between a book that moves in weeks and one that drags for months. The manual baseline is well documented in Grier Rubeling's widely cited [17-step breakaway transition checklist](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services-grier-rubeling-ria-paperwork-checklists-scripts/), which shows just how many hand-offs a paper process carries.

## Lever 1: raise first-pass yield before you touch anything else

First-pass yield is the highest-return term because it removes work instead of adding it. Every point of NIGO you prevent is an entire cycle you never run. The mechanic is pre-submission validation: check every field a custodian will check, before the form leaves your hands.

This is the core of what an [AI-native advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) does, and it is worth being precise about the mechanic rather than saying "AI speeds things up." AI-driven [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) reads the old custodian statement and the account application, extracts the registration, tax ID, account type, and cost-basis fields, and reconciles them across the CRM and planning tool so the same client is not represented three different ways. It then pre-fills the new-account and transfer initiation forms and runs each field against custodian-specific rules: does the registration match what the delivering firm has on record, is the account number in the format the receiving custodian expects, is a margin or options agreement missing for an account that needs one, is this a restricted or proprietary position that will not ride ACATS at all. Those are the exact conditions behind the most common NIGO reason codes, and catching them pre-submission is what turns a 40 percent reject rate into a single-digit one. FastTrackr reports results such as a 95 percent reduction in NIGO and moves like 100 million dollars repapered with zero NIGO in two weeks; treat those as the vendor's reported outcomes, and the mechanic behind them is simply validating before, not after.

The human stays in the loop precisely where judgment lives. AI drafts and validates; a named person reviews and signs off on anything interpretive: a name variant that might be the same person or two different ones, a beneficiary or trust registration, an in-kind versus liquidate decision that carries a tax and Reg BI consequence, and the principal review a broker-dealer owes under its supervisory obligations. AI does not submit to the custodian on its own, and no honest platform claims it does. The value is a clean form reaching a human faster, not a human removed.

## Lever 2: shorten cycle time on the segments you own

With yield rising, attack the two compressible segments. On prep, the entire manual-rekeying leg collapses when extraction and reconciliation are automated, because the specialist stops transcribing statements and starts reviewing pre-filled forms. On signatures, the round trips are the enemy, not the signing itself. Batching every form a household needs into one signing event removes the piecemeal back-and-forth that stalls large books, and routing e-signable forms electronically while flagging the wet-ink and medallion holdouts early keeps the exceptions off the critical path instead of surfacing them at the end.

Custodian behavior is not uniform, and treating it as uniform is a quiet source of delay. Schwab, Fidelity, Pershing, and Altruist differ in their form requirements, which documents they will accept as e-signed, and the reject patterns they throw. A throughput-minded team encodes those differences into validation so a Pershing form is checked against Pershing rules and a Schwab form against Schwab rules, rather than discovering the mismatch after submission. That per-custodian logic is exactly the kind of repetitive, rule-bound checking AI does well and humans do slowly.

## Lever 3: raise concurrency safely

The last term is how many accounts you keep in flight. Running accounts one after another wastes the largest block of time in a repaper, which is waiting, because one account's ACATS window overlaps perfectly with another's. This is the [concurrency math that shows why moving many books at once finishes faster](https://fasttrackr.ai/blog/concurrency-math-why-moving-20-books-at-once-finishes-faster-than-moving-them-one-after-another) than moving them in series. The constraint is not the ACATS system, which handles parallel transfers fine; it is your team's ability to prepare, submit, and monitor many accounts without dropping one or double-submitting.

That is a capacity and visibility problem, and it is where automation raises the safe ceiling. When forms are pre-filled and validated automatically, a specialist's time shifts from production to exception handling, so the same person can hold far more accounts in flight before quality slips. A single status view across every custodian means no account stalls unseen in a portal nobody checked. The practical effect is that concurrency stops being capped by headcount and starts being capped by how many genuine exceptions arise, which is exactly the number the first two levers are driving down.

## Putting the model to work on a real book

Suppose a transition consultant takes on a 600-account book across two custodians and wants a defensible timeline. Do not quote a month. Model it. Estimate the safe accounts-in-flight the team can hold given the automation in place, estimate first-pass yield from the mix of registrations and the custodians involved, and take the average cycle time from the ACATS floor plus your real prep and signature legs. The three numbers give you a landed-per-week rate and, from that, a range with named assumptions rather than a guess. Then improve the inputs deliberately: pre-validation lifts yield, batching cuts the signature leg, concurrency tooling raises safe in-flight count. Each improvement moves a specific term in the model, so you can show a client or a home office exactly why the timeline shortened and by how much, which is the kind of predictability that lets [transition consultants commit to a schedule across many clients](https://fasttrackr.ai/who-we-serve/transition-consultants) instead of hedging. The [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows what the model looks like when all three levers move together on a live book.

The context for all of this is competitive. The category is filling with tools aimed at the same bottleneck, from incumbents to newer entrants, a shift visible in coverage like WealthManagement.com's report on [Dispatch launching advisor transitions software](https://www.wealthmanagement.com/financial-technology/dispatch-launches-advisor-transitions-software). What separates a real throughput gain from a marketing one is whether the tool moves all three terms, first-pass yield, cycle time, and safe concurrency, or just digitizes the paper. A faster form that still goes NIGO at the old rate has not raised throughput; it has only made the rework prettier.

## The number to manage

Stop tracking days-to-close as your headline metric. Days-to-close is an output; it tells you what happened after it is too late to change. Manage the three inputs instead. Watch first-pass yield weekly, because it is the cheapest and highest-leverage term and the one AI moves most directly. Watch average cycle time by segment, so you know whether prep, signatures, or the reject loop is bleeding time. Watch safe accounts-in-flight, so you know whether you have room to run more in parallel or whether exceptions are already at the ceiling. A book does not move faster because someone worked harder. It moves faster because first-pass yield went up, cycle time came down, and concurrency rose at the same time, and those are the three numbers a throughput-minded transition team actually runs.

## Frequently asked questions

**What single number best predicts how fast a book will repaper?**

First-pass yield, the share of accounts that clear on the first submission with no NIGO reject. It matters more than raw cycle time because a reject does not cost a quick fix, it restarts the ACATS validation clock, so a large share of accounts run the full cycle twice. A book with a high NIGO rate is not a little slower than a clean one, it is dramatically slower, because rework compounds. Raising first-pass yield through pre-submission validation is usually the cheapest way to accelerate a transition because it removes entire cycles rather than adding staff.

**Can you actually speed up ACATS itself?**

No, and trying is the wrong target. The ACATS validation window is fixed by rule: the carrying firm has a defined period to validate or take exception, and a clean account generally settles in about four to six business days. You cannot compress that window, and NSCC's messaging modernization is tightening it further. What you control is how many rejects you feed into it. The reject and resubmit loop is the only part of the custodian segment you can influence, and you influence it by validating every field a custodian will check before the form is submitted, not after it bounces.

**Where does AI genuinely raise throughput, and where must a human stay?**

AI raises all three model terms: it lifts first-pass yield by extracting statement data and validating forms against custodian-specific rules before submission, it cuts cycle time by removing manual rekeying and reconciling client data across systems, and it raises safe concurrency by shifting specialists from production to exception handling. A human stays in the loop on every judgment call: name-variant matches, beneficiary and trust registrations, in-kind versus liquidate decisions with tax and Reg BI consequences, and the principal review a broker-dealer owes under supervision. AI drafts and validates; professionals review and sign. The tool never auto-submits to a custodian on its own.

**Why does running accounts in parallel finish a book sooner?**

Because a repaper is mostly waiting, and waiting overlaps. One account's ACATS validation window runs at the same time as another's, so holding many accounts in flight lets that unavoidable wait happen once for the whole batch instead of end to end for each account. The ACATS system handles parallel transfers without trouble. The real limit is your team's ability to prepare, submit, and monitor many accounts at once without dropping or double-submitting one, which is why a single cross-custodian status view and automated form preparation raise the number of accounts you can safely keep moving.

**How should I give a client or home office a timeline I can defend?**

Model it from the three inputs instead of quoting a figure from memory. Estimate the accounts your team can safely keep in flight, the first-pass yield you expect from the book's registration mix and custodians, and the average cycle time from the ACATS floor plus your real prep and signature legs. Those produce a landed-per-week rate and a range with named assumptions. When you improve an input, pre-validation for yield, signature batching for cycle time, concurrency tooling for in-flight count, you can show exactly which term moved and by how much, which is far more credible than a single promised date you may miss.

