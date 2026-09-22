---
title: "Running a Repaper in Parallel Instead of Waves: The Concurrency Math That Compresses a Book Move"
topic: "Advisor Transitions & Repapering"
description: "A book move gets faster when more accounts move at once, not when you work each one faster. Here is the concurrency math behind a parallel repaper, why processing accounts in waves quietly costs you weeks, why your not-in-good-order rate is the real ceiling on how many you can ru"
author: "FastTrackr AI Team"
image: running-a-repaper-in-parallel-instead-of-waves-the-concurrency-math-that-compresses-a-book-move-hero.png
imageAlt: "Running a Repaper in Parallel Instead of Waves: The Concurrency Math That Compresses a Book Move"
---

A repaper compresses when you raise the number of accounts moving at once, not when you work each one faster. Processing accounts in sequential waves caps throughput; running them concurrently across custodians, with AI validating each before submission to protect first-pass yield, is what turns a three-month book move into a few weeks. The real limit is your not-in-good-order rate, not your headcount.

Most transition teams try to accelerate a book move by working harder on each account: cleaner forms, faster typing, a bigger team for a month. That helps at the margins, but it aims at the wrong variable. The speed of a repaper is governed by how many accounts you keep in motion at the same time and how many clear on the first try, not by how quickly one specialist can fill a single application. Teams that understand this run the book as a concurrent pipeline. Teams that do not run it in waves and wonder why a 90-day project keeps sliding. Here is the concurrency math, the ceiling that actually caps it, and where automation moves that ceiling.

## Why a book move is a throughput problem, not a speed problem

A repaper is a queue of hundreds of near-identical items flowing through the same steps: gather data, generate forms, collect signatures, submit to the custodian, clear or correct not-in-good-order rejects, then track the ACATS transfer to settlement. When people say a manual transition takes three to six months, they are describing the behavior of that queue under load, not the time it takes to handle one account. A single clean account can be done in a day. Five hundred of them jam.

The industry numbers make the jam concrete. A relatively simple book of 100 clients often turns out to need close to 1,500 signatures once you count every account application, transfer form, and feature form, a scale [WealthManagement has described as a genuinely daunting task](https://www.wealthmanagement.com/business-planning/for-transitioning-advisors-repapering-is-a-daunting-task). Without automation, a realistic throughput per specialist is 15 to 20 accounts per day, which puts a 500-account book at 25 to 35 business days of pure processing before a single not-in-good-order reject, unresponsive client, or non-ACAT asset enters the picture. Those exceptions are what stretch the calendar from weeks into months. So the lever that matters is not seconds per form. It is how many accounts you can hold in flight at once without the error rate exploding.

## The concurrency math behind a parallel repaper

The relationship is the one every operations team eventually rediscovers: the number of accounts you finish per week equals the number you keep in progress divided by how long each one takes to move through the pipeline. Raise the accounts in progress, or shorten the time each spends in the pipe, and weekly output rises. That is the entire game.

A wave approach deliberately holds the accounts-in-progress number low. You process fifty accounts, wait for most to clear, then start the next fifty. Your pipeline is never more than a fraction full, so your weekly output is a fraction of what the same team could produce. A parallel approach floods the pipeline: every account for which data is ready enters at once, across every custodian, and the constraint becomes how many the custodians and your reviewers can absorb, not an artificial batch size you imposed. FastTrackr's core [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built around exactly this concurrent model, moving many accounts across multiple custodians at the same time rather than marching through them in sequence.

There is a second term in the equation that parallelism quietly improves: the time each account spends in the pipe. Most of that time is not work, it is waiting, for a signature, for a custodian queue, for a reject to be noticed and resubmitted. Running concurrently lets those waits overlap instead of stacking, which is the deeper mechanic behind [a throughput model for transition teams and the AI levers that raise it](https://fasttrackr.ai/blog/how-fast-can-you-repaper-a-book-a-throughput-model-for-transition-teams-and-the-ai-levers-that-raise-it). Two accounts waiting on two custodians at the same time cost you one wait, not two.

## Why waves feel safer and cost you weeks

Teams choose waves for a reason: they feel controllable. A batch of fifty is legible. You can staff it, watch it, and not drown in status. The problem is that the control is an illusion bought with idle capacity. While wave two waits for wave one to clear, your reviewers and the custodians sit partly idle, and the calendar burns.

Waves also concentrate risk in a way parallel processing does not. If a systematic error slips into wave one, a wrong rep code, a mismatched title convention, you discover it only when that whole wave rejects together, and you have lost the batch cycle. Worse, a not-in-good-order reject on one account in a household can block every account in that household, so a batched wave organized by processing convenience rather than by household can multiply a single error across accounts that had nothing wrong with them. The five bottlenecks that turn a six-week move into six months are mostly wave-shaped: they are places where the pipeline drains and refills instead of running full.

The honest caveat is that pure parallelism without validation is worse than waves, because you submit five hundred potential errors at once instead of fifty. That is why concurrency and pre-submission validation are not two separate ideas. You can only safely flood the pipeline if you are confident most of what enters it is correct. The ceiling on how many accounts you can run at once is set by how good your accounts are when they go in.

## The hidden ceiling on concurrency: your not-in-good-order rate

Here is the constraint every concurrency plan runs into. The more accounts you push through at once, the more rework a bad first-pass yield generates, and rework is what actually clogs the pipe. If your not-in-good-order rate is high, parallelism does not speed you up, it just produces a larger pile of rejects to chase, each of which re-enters the queue and competes with fresh accounts for the same reviewers.

The industry spread on this is stark. Manual, paper-based transitions carry not-in-good-order rates that sources put near 60 percent, while digital repapering with pre-submission validation generally brings that into the single digits to low teens. Run the two through the concurrency math and the difference is not incremental. At a 60 percent reject rate, more than half of everything you submit comes back, so your effective throughput collapses under the weight of resubmission no matter how many accounts you start. At a 10 percent rate, nine of ten accounts clear on the first pass and the pipeline keeps flowing. First-pass yield, not team size, is the variable that decides whether concurrency helps or hurts.

This is why "just add people for a month" underperforms. More reviewers raise capacity, but if each account still has a coin-flip chance of rejecting, you have scaled the rework along with the work. Lowering the reject rate is what lets you run more accounts at once safely, and lowering it at scale is a data problem before it is a staffing one.

## Where AI raises the concurrency ceiling, and where a human stays in the loop

AI moves the ceiling by attacking first-pass yield directly, so you can safely hold more accounts in flight. It does that at specific, checkable points in the pipeline, and it deliberately stops short of the judgment-bearing steps.

| Pipeline step | Wave-and-manual behavior | Parallel-with-AI behavior | Human still owns |
|---|---|---|---|
| Data gather | Re-keyed per account from CRM and custodian files | Ingested once, reconciled across systems, reused across every account | Resolving true conflicts between sources |
| Form generation | Typed per form, per custodian, high transcription error | Pre-populated with custodian-specific logic applied automatically | Confirming the right form set for edge cases |
| Pre-submission check | Errors found by the custodian, after rejection | Missing or mismatched fields flagged before submission | Judgment fields: name variants, beneficiaries, trust authority |
| Signature collection | Sequential, form-by-form round trips | Batched by household into one signing session | Confirming the client understood what they signed |
| Status tracking | Status meetings and spreadsheets per wave | Every account's stage visible across the whole book at once | Deciding where to intervene |

The pattern is consistent: AI pre-fills, validates, reconciles, and flags, which raises the share of accounts that clear on the first try and therefore raises how many you can run concurrently without drowning in rework. The [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) layer is where the reject-cause reduction actually happens, extracting and validating the fields that most often go not-in-good-order before the account is ever submitted. What AI does not do is submit blind or make the calls that carry liability. A mandatory human still signs off on name variants, beneficiary designations, trust and entity registrations, and anything requiring interpretation, because those are exactly the fields where a confident wrong answer is worse than a flag. The principle holds throughout: AI drafts and checks, professionals review and approve.

## The one-day custodian validation window makes first-pass yield non-negotiable

There is a timing reason first-pass yield matters more in 2026 than it did a few years ago. The ACATS transfer cycle has been compressed to roughly three to four business days, and the delivering firm now has only about one business day to validate a transfer request. That is very little buffer for manual error correction. Under [FINRA's customer account transfer rule](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870), a request that goes out wrong gets rejected quickly, and the tightened cycle means a reject-and-resubmit loop costs you a fresh trip through the custodian queue with almost no slack to absorb it.

The infrastructure is moving the same direction: DTCC's ACATS enhancements are pushing firms toward modern messaging formats and a faster, more automated transfer process. A faster rail rewards clean submissions and punishes messy ones, because there is no longer a slow settlement-prep stage to hide a correction inside. In a compressed cycle, the account you submit correctly the first time settles in days, and the account you submit wrong loses a full cycle each time it bounces. Concurrency amplifies both outcomes, which is one more reason validation is the price of admission for running in parallel. The custodian queue itself is a real constraint, and how those queues add hidden days is worth understanding on its own, covered in [how custodian processing queues add hidden days to every concurrent repaper](https://fasttrackr.ai/blog/how-custodian-processing-queues-add-hidden-days-to-every-concurrent-repaper).

## How to run a parallel repaper without losing control

Concurrency is not chaos. Running in parallel well means a few disciplines that keep the flood organized.

Sequence by risk, not by account number. Enter the accounts with the most assets at risk of attrition first, so the highest-value relationships are moving while the long tail catches up. Group by household so that a single signing session and a single validation pass cover every account a family holds, which prevents one reject from stranding a whole household mid-wave. Hold back only the genuinely exception-shaped accounts, annuities, trusts needing a medallion, non-ACAT assets, into their own track so they do not gate the clean majority. And watch the pipeline as a whole rather than as batches, using status that shows every account's stage across the book so you intervene where it is actually stuck instead of running status meetings.

For a firm moving many books at once, this is the difference between a schedule you can commit to and a hope. It is why [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) running concurrent client transitions lean on concurrency plus validation rather than staffing up for each move, and the pattern of what that produces is in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition), where running accounts in parallel with pre-submission checks, rather than marching through waves, is what compressed the timeline. Automated form population and pre-submission validation is what industry practitioners credit with dropping a 90-day manual average toward roughly three weeks, and the mechanism behind that drop is exactly the concurrency math: more accounts in flight, a higher share clearing on the first pass, and the waits overlapping instead of stacking.

## Frequently asked questions

**Does running a repaper in parallel actually make it faster, or just busier?**

Faster, provided your first-pass yield is high. The accounts you finish per week equal the number you keep in progress divided by how long each spends in the pipeline. Running concurrently raises the accounts in progress and lets the unavoidable waits, for signatures and custodian queues, overlap instead of stacking. The catch is that parallelism multiplies rework if accounts are error-prone, so concurrency only pays off when most of what you submit is correct the first time. Without validation, running in parallel just produces a bigger pile of rejects.

**Why is the not-in-good-order rate the real limit on concurrency?**

Because rework, not fresh work, is what clogs the pipeline. Every rejected account re-enters the queue and competes with new accounts for the same reviewers and the same custodian window. Manual transitions carry reject rates reported near 60 percent, while digital repapering with pre-submission validation runs in the single digits to low teens. At 60 percent, more than half of what you submit comes back and throughput collapses no matter how many accounts you start. At around 10 percent, the pipeline keeps flowing. Lowering the reject rate is what lets you safely run more accounts at once.

**Why not just add staff for a month instead of changing the approach?**

Because adding people scales capacity but not quality. If each account still has a high chance of rejecting, more reviewers just process more rework alongside the real work. The binding constraint in a large repaper is first-pass yield and the number of accounts you can hold in flight without the error rate exploding, not raw headcount. Automation that raises the share of accounts clearing on the first submission does more for the timeline than a temporary team, because it attacks the variable that actually caps throughput.

**Where does AI help in a parallel repaper, and where must a human stay involved?**

AI helps at the checkable steps: ingesting and reconciling client data once and reusing it, pre-populating forms with custodian-specific logic, flagging missing or mismatched fields before submission, batching signatures by household, and showing every account's status across the book. Those raise first-pass yield and therefore how many accounts you can run at once. A human must still own the judgment-bearing fields, name variants, beneficiary designations, trust and entity registrations, and confirm the client understood what they signed. The rule is that AI drafts, checks, and tracks, while professionals review and approve.

**How does the faster ACATS cycle change how I should run a book move?**

It raises the cost of a bad submission and rewards clean ones. The transfer cycle is now roughly three to four business days, with the delivering firm getting about one business day to validate a request, so there is little room to absorb a manual error. An account submitted correctly settles in days; an account submitted wrong loses a full cycle each time it bounces. Because concurrency amplifies both outcomes, pre-submission validation is no longer optional if you want to run accounts in parallel. Clean submissions are what let a compressed cycle work for you instead of against you.

