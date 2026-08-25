---
title: "The Advisor Transition Runbook: Turning Every Repaper Into a Documented Repeatable SOP"
topic: "Advisor Transitions & Repapering"
description: "A recruiting ops director's guide to building a transition runbook: the five repaper stages, the roles and handoffs, the validation gates, and the metrics that turn every advisor move from an emergency into a documented, repeatable process."
author: "FastTrackr AI Team"
image: the-advisor-transition-runbook-turning-every-repaper-into-a-documented-repeatable-sop-hero.png
imageAlt: "The Advisor Transition Runbook: Turning Every Repaper Into a Documented Repeatable SOP"
---

Build a transition runbook by decomposing every repaper into five fixed stages, account mapping, form generation, signature collection, pre-submission validation, and tracked custodian submission, then assign an owner, an input, an output, and a validation gate to each. Documented once, the runbook turns each new advisor move from an improvised scramble into a repeatable process any specialist can run.

The first advisor transition a growing RIA runs is heroic. Someone senior stays late, chases signatures by hand, learns which custodian form the client keeps getting wrong, and gets the book across. The fifth concurrent transition, run the same heroic way, is how ops directors burn out and how books get lost. The gap between those two states is not headcount or better software. It is a runbook: a written, versioned standard operating procedure that says exactly who does what, in what order, with what checks, so the knowledge lives in a document instead of in one exhausted person's head.

Most RIA operations teams never write it. They carry the process as tribal knowledge, which works until two things happen at once, a recruiting spike and the departure of the person who knew the steps. This is the guide to building the runbook before that day, aimed at the recruiting operations director who owns the outcome and has to make it survive turnover, volume, and the specific ways a repaper goes wrong.

## Why a runbook, not a checklist

A checklist is a list of tasks. A runbook is a system: tasks plus owners plus inputs, outputs, decision rules, and the validation gates that stop a bad packet from moving forward. The distinction matters because transitions fail at the seams between tasks, not inside them. Nobody forgets to open the account; they forget to confirm the registration matches the tax ID before submission, and the reject surfaces a week later as an ACATS NIGO.

The industry's best-known single-advisor reference, Kitces' [17-step breakaway transition checklist](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services-grier-rubeling-ria-paperwork-checklists-scripts/), is a strong starting inventory of what has to happen. A runbook is what you get when you take that inventory and add the operational scaffolding: who owns each step, what "done" means, what gets checked before the next step starts, and what happens when a step fails. The checklist tells you the destinations. The runbook tells a new hire how to drive there without you in the passenger seat.

## The five-stage spine

Every repaper, regardless of custodian or book size, moves through the same five stages. Fix these as the backbone of the runbook and everything else hangs off them.

**Stage one, account mapping and data verification.** Inventory every account in the book, classify each by how it will move (straight-through ACATS, exception, or non-ACATS asset), and verify the client and registration data against source documents. This is where document intelligence earns its place: AI [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) reads the brokerage statement and extracts the fields the next stages depend on, so mapping starts from validated data instead of hand-keyed guesses. The output is a clean account inventory with a move-path tagged to each line.

**Stage two, intelligent form generation.** Produce the right custodian forms for each account, pre-filled from the verified data. The runbook specifies which form set each account type and custodian requires, so the specialist is selecting from a documented matrix, not rediscovering it per transition.

**Stage three, coordinated signature collection.** Get the client's signatures with the fewest possible touches, batching forms so the client signs once, not five times across three weeks. The runbook names the sequence and the follow-up cadence.

**Stage four, pre-submission compliance validation.** Check every packet against the reject-causing fields before it goes to the custodian. This is the single highest-leverage gate in the whole runbook, and it gets its own section below.

**Stage five, tracked custodian submission and settlement monitoring.** Submit, then track each account through ACATS to settlement. Standard clean ACATS accounts settle in roughly six business days once the receiving account is open and the transfer is in good order, per the [FINRA customer account transfer rule](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870), but the runbook has to track the accounts that do not fit that clean case, which is most of the interesting ones.

| Stage | Owner | Input | Output | Validation gate |
|---|---|---|---|---|
| Account mapping | Transition specialist | Statements, client data | Tagged account inventory | Registration matches tax ID and source doc |
| Form generation | Specialist | Verified inventory | Pre-filled packet per account | Correct form set for custodian and account type |
| Signature collection | Client service | Packet | Signed forms | All required signatures present, dates valid |
| Pre-submission validation | Compliance reviewer | Signed packet | Cleared packet | Reject-cause fields checked, named sign-off |
| Submission and tracking | Operations | Cleared packet | Submitted transfer | Status tracked to settlement, exceptions flagged |

## Roles and handoffs: the part checklists skip

The reason transitions live in one person's head is that nobody wrote down who owns each stage and what a clean handoff looks like. A runbook fixes this by assigning a single accountable owner per stage and defining the handoff artifact between them, the specific, complete thing one role passes to the next.

For a small desk, one specialist may wear several of these hats, but the roles still exist and the handoff artifacts still have to be complete, because a role handing incomplete work to itself later is how a field gets skipped. As the desk grows, the runbook is what lets you split the roles across people without renegotiating the process each time. The staffing math behind how many specialists a given transition volume needs, and how the roles divide as you scale, is worth pairing with the runbook, and the operational metrics that tell you whether the whole system is healthy are laid out in the [advisor transition operations scorecard](https://fasttrackr.ai/blog/advisor-transition-ops-scorecard-metrics).

The handoff artifact is the enforcement mechanism. If stage one's output is defined as "a tagged inventory where every account has a verified registration and a move-path," then stage two cannot begin with a half-mapped book, because the artifact it needs does not exist yet. Documenting the artifact, not just the task, is what makes the runbook self-policing.

## The validation gates that stop NIGO

Not-in-good-order rejects are the tax a sloppy runbook pays, and they are expensive: NIGO rates in paper-heavy onboarding commonly run from 20 to 40 percent, and each reject is a one-to-three-week rebook that ripples across every book sharing the desk. The runbook's job is to move the catch earlier, from the custodian's reject queue to your own pre-submission gate, because a field caught before submission costs minutes and the same field caught after costs weeks.

Build the stage-four gate around root cause, not a generic once-over. Track which specific fields cause your rejects, registration and tax-ID mismatches, missing signatures, wrong form versions, unfunded delivery instructions, and build a validation step for each of the few that cause most of the damage. A named human owns this gate; the runbook records who signed off on each packet, which is both a quality control and a compliance record. The mechanics of finding your own reject drivers are covered in [ACATS reject codes decoded and pre-validation](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation), and the runbook is where that analysis becomes a permanent, enforced step rather than a one-time cleanup.

## Version it, and treat exceptions as runbook updates

A runbook that is written once and never revised rots, because custodian forms change, rules change, and every transition surfaces a new failure mode. Treat the runbook as a living document with a version number and an owner, and treat every exception you hit as a candidate update.

The discipline is simple: when a transition throws an exception the runbook did not anticipate, a trust that froze on a life event, a custodian that changed a form, a new reject code, you resolve it once and then decide whether it is common enough to write into the runbook so the next specialist does not rediscover it. Over a year, this converts hard-won tribal knowledge into documented process, and the desk gets faster not because people work harder but because the runbook absorbs everything the team has already learned. Custodian-side guidance on [streamlining RIA repapering](https://www.tradepmr.com/blog/streamlining-ria-custodian-transitions) makes the same point from the custodian's chair: the firms that transition cleanly are the ones that have systematized the handling of the hard accounts, not the ones that treat each as a surprise.

## Make the runbook visible while it runs

A documented process still fails if nobody can see where each account is inside it. The runbook defines the stages; a live status view shows which accounts sit in which stage right now, across every concurrent transition, so the ops director manages by exception instead of by asking. Building that single view is the job of a [transition control tower that tracks ACATS status across concurrent moves](https://fasttrackr.ai/blog/the-transition-control-tower-tracking-acats-status-across-many-concurrent-advisor-moves), and it is what turns the runbook from a document people are supposed to follow into a process the whole team can watch and trust.

Visibility also fixes the promise problem. When the runbook and the status view agree on where every account is, you can commit turnaround times you can actually keep, attaching the commitment to the submission segment you control rather than to settlement you do not, as detailed in [setting transition SLAs a recruiting team can commit to](https://fasttrackr.ai/blog/transition-slas-setting-repaper-turnaround-times-a-recruiting-team-can-actually-commit-to). A runbook without visibility is a good intention; a runbook with a live status view is an operating system.

## From runbook to platform

The endpoint of a mature runbook is that the document and the software become the same thing. When the five stages, the validation gates, and the status tracking all live in one [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions), the runbook stops being a PDF someone might read and becomes the rails the work runs on: the system assigns the owner, enforces the gate, and tracks the handoff, so following the process is the path of least resistance rather than an act of discipline. The compounding effect of running transitions on documented rails rather than improvised effort is visible in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition), where a repeatable process is what let a real book move fast and land intact.

Firms and [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who run at volume all converge on the same realization: the competitive edge in transitions is not heroics, it is a documented, versioned, enforced runbook that makes the tenth concurrent move as controlled as the first. Write it before the recruiting spike that would have exposed its absence, and every transition after becomes a process you run rather than a fire you fight.

## Frequently asked questions

**What is the difference between a transition checklist and a transition runbook?** A checklist is a list of tasks to complete. A runbook is a system: the same tasks plus a single accountable owner per stage, the defined input and output of each stage, decision rules for exceptions, and validation gates that stop a defective packet from advancing. Transitions fail at the seams between tasks, so the runbook's value is in specifying the handoffs and checks a checklist leaves implicit, which is what lets a new specialist run the process without the veteran standing over them.

**What are the five stages every repaper runbook should be built around?** Account mapping and data verification, intelligent form generation, coordinated signature collection, pre-submission compliance validation, and tracked custodian submission with settlement monitoring. These stages hold regardless of custodian or book size, so fixing them as the spine lets you attach owners, inputs, outputs, and gates consistently. The highest-leverage stage is pre-submission validation, because catching a reject-causing field before submission costs minutes while the same field caught by the custodian costs a one-to-three-week rebook.

**How does a runbook reduce NIGO rejects?** By moving the catch earlier. NIGO rates in paper-heavy onboarding commonly run 20 to 40 percent, and each reject is a multi-week rebook. The runbook's stage-four gate validates the specific fields that cause most of your rejects, registration and tax-ID mismatches, missing signatures, wrong form versions, before the packet reaches the custodian, with a named human signing off. This converts rejects from an after-the-fact surprise into a controlled, pre-submission check that also creates a compliance record of who cleared each packet.

**Who should own each stage of the transition runbook?** Each stage needs one accountable owner and a defined handoff artifact, the complete thing one role passes to the next. On a small desk one specialist may own several stages, but the artifacts still have to be complete because a role handing incomplete work forward, even to itself, is how fields get skipped. Typical ownership runs specialist for mapping and forms, client service for signatures, a compliance reviewer for validation, and operations for submission and tracking, splitting further as volume grows.

**How often should the runbook be updated?** Treat it as a living, versioned document owned by one person, and update it whenever a transition surfaces an exception common enough to recur, a changed custodian form, a new reject code, a registration type that keeps breaking. Resolve the exception once, then write the resolution into the runbook so the next specialist inherits the lesson. Over a year this discipline converts tribal knowledge into documented process and is the main reason a maturing desk gets faster without adding headcount.

