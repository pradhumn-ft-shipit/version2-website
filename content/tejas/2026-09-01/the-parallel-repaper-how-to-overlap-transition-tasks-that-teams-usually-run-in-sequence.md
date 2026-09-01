---
title: "The Parallel Repaper: How to Overlap Transition Tasks That Teams Usually Run in Sequence"
topic: "Advisor Transitions & Repapering"
description: "Most repaper timelines are long because teams run tasks one after another that could overlap. Here is how to separate the truly sequential steps from the falsely sequential ones, where AI collapses the machine-side wait, and where a human still gates the clock."
author: "FastTrackr AI Team"
image: the-parallel-repaper-how-to-overlap-transition-tasks-that-teams-usually-run-in-sequence-hero.png
imageAlt: "The Parallel Repaper: How to Overlap Transition Tasks That Teams Usually Run in Sequence"
---

Overlap the tasks that only look sequential. In a repaper, some steps have a true dependency, a signed form cannot be submitted before it is signed, but many are sequenced by habit, not necessity. Map each task's real predecessor, run everything without a hard dependency in parallel, and let AI collapse the data and form work so human signatures and reviews become the only critical path.

Most transition teams run a repaper the way you read a checklist: top to bottom, one line at a time. Map the accounts, then generate the forms, then chase signatures, then validate, then submit, then wait for ACATS, then fix the rejects, then chase the non-ACATS assets, then follow up with clients. Each step waits politely for the one before it to finish. That habit, not any custodian rule, is why a book that could move in three weeks takes ten. The tasks are not all dependent on each other. They are just scheduled as if they were.

A parallel repaper is not about working faster on any single task. It is about stopping the practice of finishing one whole stage of the book before starting the next. When you separate the steps that genuinely must wait from the ones that only wait by convention, the timeline compresses without cutting a single control. This is where AI earns its place, because the machine-side work is exactly the part that can run early and in bulk, leaving the human-gated steps as the true limit on the clock.

## Why the sequential repaper is so slow

Start with where the time actually goes, because it is not where teams think. ACATS itself is fast and getting faster. With the move to a T+1 settlement cycle and DTCC's ongoing transformation, the transfer window has shrunk: in October 2025 DTCC eliminated another day from the ACATS cycle, letting a full transfer process in roughly three to four business days. The wire is no longer the problem.

The problem is everything wrapped around the wire. A book does not finish moving when ACATS settles; it finishes when the slowest dependent task clears, which is the whole argument of [the repaper critical path](https://fasttrackr.ai/blog/the-repaper-critical-path-which-single-task-actually-determines-when-a-book-finishes-moving). When you run stages sequentially, you stack every task's slack on top of every other task's slack. You wait for all 300 forms to be generated before you send any for signature. You wait for every signature before you validate anything. You wait for a full validation pass before you submit the first transfer. Each stage-level barrier converts a task that could have started on day two into one that starts on day nine, and the delays compound. Kitces documents the transition as a long chain of discrete steps, [seventeen of them in one commonly cited breakdown](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services-grier-rubeling-ria-paperwork-checklists-scripts/), and running seventeen steps strictly end to end is a schedule built to be slow.

## Separate the truly sequential from the falsely sequential

The core move is to replace stage-level thinking with dependency-level thinking. Instead of asking "what stage are we in," ask of every task: what is the one thing that genuinely must be true before this can start? That single question splits the repaper into two piles.

A truly sequential task has a hard predecessor. You cannot collect a signature on a form that does not exist yet. You cannot submit a Transfer Initiation Form the delivering firm will accept until the account data on it matches their records, which is the field-by-field discipline covered in [what a TIF must match for ACATS to accept a book](https://fasttrackr.ai/blog/the-transfer-initiation-form-field-by-field-what-a-tif-must-match-for-acats-to-accept-a-book). These dependencies are real physics; respect them.

A falsely sequential task only looks like it has a predecessor because of how the checklist is written. Opening accounts at the new custodian does not require every form for every client to be finished first; you can open accounts for the households whose data is ready while you are still reconciling the messy ones. Client communication does not wait for submission; it should run alongside the entire process. Non-ACATS asset cleanup, annuities, alternatives, and 529s that transfer outside the wire, does not wait for ACATS to settle; you can start those parallel tracks on day one. Most of your timeline is falsely sequential, and that is the slack you get to reclaim.

## The dependency map: what waits, what overlaps, and where AI fits

Here is the repaper decomposed into its real tasks, each tagged with its true predecessor, whether it can overlap earlier work, and where automation removes machine-side wait while a human stays in the loop. This is the map to build your own schedule from.

| Repaper task | True predecessor | Can it overlap? | Where AI fits, and where a human stays in | 
|---|---|---|---|
| Extract account data from statements | Statements in hand | Yes, start day one | AI reads statements and structures the data; a specialist spot-checks outliers |
| Reconcile CRM vs custodian vs planning data | Extraction started | Yes, per household | AI match-merges and flags conflicts; a human resolves true mismatches |
| Open receiving accounts | Data ready for that household | Yes, rolling | AI pre-fills applications; a principal reviews before opening |
| Generate transfer and account forms | Household data reconciled | Yes, rolling | AI drafts custodian-specific forms; a reviewer confirms logic |
| Collect client signatures | Form generated | Partly; batch as forms complete | Human-gated; AI sequences and tracks, never signs |
| Pre-submission validation | Form drafted | Yes, continuous | AI validates fields against custodian rules pre-submit; a human clears exceptions |
| Verify beneficiaries, trusts, registrations | Data extracted | Yes, early | Human judgment required; AI surfaces the items needing a decision |
| Submit ACATS transfers | Signed, validated form | No, hard dependency | AI assembles the package; a human authorizes submission |
| Work NIGO rejects | A reject exists | Yes, as they arrive | AI diagnoses the reason code and drafts the fix; a human approves |
| Non-ACATS asset transfers | Client authorization | Yes, day one track | AI tracks and pre-fills carrier forms; a human handles carrier calls |
| Client communication | Nothing | Yes, throughout | AI drafts status updates; the advisor owns the relationship |

Read down the "can it overlap" column and the pattern is stark. Almost everything can start before the prior stage is fully done. The only hard wall is that a form must be signed and validated before it is submitted. Everything else is a scheduling choice you have been making the slow way.

## Let AI collapse the machine-side sequence

This is where an AI-native transition platform changes the shape of the schedule rather than just speeding a step. In a manual repaper, data extraction, reconciliation, form generation, and validation are themselves slow, so they impose their own artificial sequence: you cannot start signatures until a human has hand-keyed and eyeballed hundreds of forms, which takes days. AI removes that internal drag. It reads brokerage statements and structures the data, applies custodian-specific form logic, reconciles CRM against custodian records, and runs pre-submission validation continuously as forms are drafted, which is the job of [FastTrackr's document intelligence](https://fasttrackr.ai/solutions/document-intelligence).

The effect is not merely "each step is faster." It is that the machine-side work stops being on the critical path at all. When AI drafts and validates forms in near real time, the constraint moves entirely to the human-gated steps: client signatures, the judgment calls on beneficiaries and trust registrations, and supervisory review. That is the right place for the constraint to sit, because those steps genuinely require a person. FastTrackr reports moving books with dramatic timeline compression in its own results, including a reported case of $100 million repapered with zero NIGO in about two weeks, a claim you can read in context in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition). Treat vendor numbers as the vendor's reported outcomes, not laws of nature, but the mechanism is sound: collapse the machine sequence and the humans become the schedule.

The framing that keeps this honest is "AI drafts, professionals review." AI never signs a client form, never authorizes a submission, and never makes the beneficiary or trust judgment on its own. It does the voluminous, deadline-driving preparation so that the human moments are the only thing left to wait on, and it does them early enough that those human moments can start in week one instead of week four.

## Sequence the human bottlenecks deliberately

Once AI has removed the machine drag, your remaining job is to manage the human-gated steps so they overlap too. Three tactics do most of the work.

First, batch signatures continuously instead of in one big wave. The instinct is to generate every form, then send one enormous signing package. That maximizes both delay and paperwork fatigue, which itself drives attrition. Instead, release forms for signature per household as each household's data clears, so signing runs as a steady stream from week one rather than a single spike in week four.

Second, front-load the judgment items. Beneficiary designations, trust and entity registrations, and anything with a name variant or a life-event freeze are the tasks most likely to stall late and blow the timeline. Have AI surface those exceptions on day one from the extracted data, and route them to a human immediately, so the hard decisions are being worked while the easy accounts flow. Do not let a trust registration question you could have answered in week one surface as a NIGO reject in week six.

Third, treat supervisory review as a parallel lane with its own capacity, not a gate every form passes through single file at the end. A principal approving new accounts is a real control and cannot be skipped, but it can be resourced to run alongside submission rather than after it. Plan for review throughput the same way you plan for signature throughput.

## What still has to run in order

A parallel repaper is not a reckless one. Some sequences exist for good reason and collapsing them creates real risk, so name them clearly.

A form must be signed by the client before it is submitted, and it must pass validation before it goes to the custodian, or you are simply generating NIGO rejects faster. Registration matching has to be right before submission, because a title mismatch or a bad account number rejects the whole account. Anything judgment-bearing, a beneficiary change, a discretionary authorization, a trust registration, requires a human decision before it becomes part of a submitted package. And the supervisory approval of a new account is a control, not a formality. The goal is to overlap the tasks that only wait by habit, never to short-circuit the ones that protect the client and the firm. Compressing the timeline and preserving the controls are not in tension when you parallelize the right tasks.

## From one book to many

The parallel repaper is the within-a-book version of a larger idea. Once you can overlap the tasks inside a single transition, you can overlap entire transitions, which is why running many book moves at once finishes faster than running them one after another, the [concurrency math](https://fasttrackr.ai/blog/concurrency-math-why-moving-20-books-at-once-finishes-faster-than-moving-them-one-after-another) that governs a busy recruiting desk. The same principle scales from tasks to books to a whole pipeline: find the waiting that overlaps, and stop stacking it.

For teams doing this repeatedly, the discipline lives in the platform. An [AI-native advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to run these tracks in parallel across a multi-custodian book, and for consultants managing several moves at once, the parallel model is the default rather than the exception, which is the working assumption behind FastTrackr's practice with [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants). The lesson is the same at every scale. Your repaper is slow not because the work is hard but because it is scheduled in single file. Map the real dependencies, let AI clear the machine-side sequence, put the humans on the critical path where they belong, and run everything else at once.

## Frequently asked questions

**What is a parallel repaper?** It is a repapering approach that runs transition tasks concurrently instead of finishing one whole stage before starting the next. Teams usually work a book top to bottom: map all accounts, then generate all forms, then chase all signatures, and so on. A parallel repaper separates the tasks that have a true dependency, such as a form that must be signed before it can be submitted, from the ones that are only sequenced by habit, such as opening accounts or contacting clients, and overlaps everything that does not have to wait.

**Which repaper tasks can safely overlap and which cannot?** Tasks with a hard predecessor must stay in order: a form has to be generated before it is signed, signed and validated before it is submitted, and registrations have to match before submission. Tasks that only look sequential can overlap: data extraction, reconciliation, account opening for ready households, non-ACATS asset transfers, and client communication can all start on day one. The rule is to ask what single thing must genuinely be true before a task starts, and to overlap everything that has no real predecessor.

**Where does AI actually shorten the transition timeline?** AI collapses the machine-side sequence. In a manual repaper, data extraction, reconciliation, form generation, and validation are slow enough that they impose their own delay before signatures can even begin. AI reads statements, structures and reconciles the data, drafts custodian-specific forms, and validates fields before submission, in near real time, so that work stops being the bottleneck. The constraint then shifts to the human-gated steps, signatures, judgment calls, and supervisory review, which is where it should sit.

**Does parallelizing a repaper increase compliance or NIGO risk?** Not if you keep the true dependencies intact. A parallel repaper overlaps tasks that only wait by convention; it never submits an unsigned or unvalidated form, never skips registration matching, and never automates a beneficiary or trust judgment. Pre-submission validation actually runs continuously in this model, so errors are caught earlier, not later. Supervisory review remains a required control, resourced as its own parallel lane. Compressing the timeline and preserving the controls are compatible when you overlap the right tasks.

**How fast is ACATS itself now?** The ACATS transfer window has shortened. With the move to a T+1 settlement cycle and DTCC's transformation program, a full transfer now processes in roughly three to four business days after DTCC eliminated another day from the cycle in October 2025. That means the wire is rarely the slow part of a book move. The delay lives in the surrounding tasks, account opening, signatures, validation, NIGO fixes, and non-ACATS assets, which is exactly what a parallel schedule is built to compress.

