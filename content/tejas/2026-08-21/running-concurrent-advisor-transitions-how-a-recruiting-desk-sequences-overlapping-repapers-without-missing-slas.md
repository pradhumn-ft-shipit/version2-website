---
title: "Running Concurrent Advisor Transitions: How a Recruiting Desk Sequences Overlapping Repapers Without Missing SLAs"
topic: "Advisor Transitions & Repapering"
description: "When two advisor books land in the same window, first-in-first-out and biggest-book-first both blow your SLAs. Here is a sequencing framework that interleaves overlapping repapers by ACATS eligibility, deadline, and complexity so every advisor gets the turnaround you promised."
author: "FastTrackr AI Team"
image: running-concurrent-advisor-transitions-how-a-recruiting-desk-sequences-overlapping-repapers-without-missing-slas-hero.png
imageAlt: "Running Concurrent Advisor Transitions: How a Recruiting Desk Sequences Overlapping Repapers Without Missing SLAs"
---

Sequence concurrent transitions by interleaving, not queuing. Front-load the straight-through ACATS accounts across every book first, and start complex accounts in a parallel long-lead track from day one. Score each book by ACATS-eligible share, hard deadline, and complexity, then commit SLAs against submission dates you control. That is how overlapping repapers all land on time.

A single advisor transition is a scheduling problem you can solve in your head. Two or three landing in the same three-week window is a capacity problem that punishes every instinct a recruiting team has. The natural move, work them in the order they signed, quietly starves the second advisor while the first monopolizes your specialists. The other natural move, put the biggest book first, buries three smaller advisors who were promised the same fast turnaround. Both feel fair. Both miss SLAs. The teams that run overlapping transitions cleanly do not queue them at all. They interleave them, and the interleaving follows a rule set worth spelling out.

## Why queuing fails when transitions overlap

Start with the throughput ceiling, because everything downstream is governed by it. A transition specialist working without automation completes roughly 15 to 20 complete account packets per day under ideal conditions, and in practice most teams land at 10 to 15 once rework and NIGO rebooks are counted. That number is the whole constraint. A desk of three specialists moves somewhere around 30 to 45 clean packets a day, and no amount of urgency changes the ceiling, it only changes which accounts sit under it.

Now put two 400-account books into that desk five days apart. If you run them first-in-first-out, book one consumes the entire desk for roughly ten business days, and book two does not start its intake until book one is largely submitted. Advisor two was told the same "most of your assets move in the first month" story advisor one was told, and from advisor two's chair the clock started at resignation, not at whenever your desk freed up. You have not missed a deadline yet, but you have already spent the buffer, and the first trust account or ACATS reject in book one now pushes book two past its promise.

Biggest-book-first fails the mirror version of this. Serial processing in any order treats a shared, fixed-capacity resource as if it belonged to one advisor at a time, which guarantees that someone's committed turnaround is a function of when a stranger happened to sign. The fix is to stop thinking in books and start thinking in account tiers that cut across every concurrent move.

## The sequencing framework: score the book, then interleave the tiers

Before a book enters the desk, score it on three inputs. These decide where its accounts slot into the combined queue, not whether the book goes "first."

**ACATS-eligible share.** What fraction of the book is straight-through brokerage and standard retirement accounts that ride the automated ACATS system? These are your fast, high-retention accounts, and the [FINRA rule governing customer account transfers](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870) sets a defined settlement window for them once the receiving account is open and the transfer is in good order. A book that is 80 percent ACATS-eligible can be mostly cleared fast; a book heavy in trusts and annuities cannot, no matter how you schedule it.

**Hard deadline.** When did the advisor resign, and is there a Protocol window, a registration date, or a client event that fixes a real drop-dead date? A deadline is not the same as a signing order, and it is the only thing that should ever override the interleaving rule below.

**Complexity load.** What share of the book is trusts, entities, restricted stock, annuities, and held-away assets, the accounts that do not ride ACATS and carry long, mostly-fixed timelines governed by transfer agents and carriers?

With those three scores in hand, you interleave rather than queue:

| Account tier | What it is | How to sequence it across concurrent books |
|---|---|---|
| Tier one | Straight-through brokerage and standard retirement, roughly four in five accounts | Front-load across every active book at once, highest ACATS-eligible share first, because these are fast and hold the most assets |
| Tier two | Accounts with one known wrinkle: beneficiary re-designation, a non-carrying feature | Batch by exception type across books and process in a second wave, right behind tier one |
| Tier three | Trusts, entities, restricted stock, annuities, held-away | Start on day one in a parallel long-lead track, never in the main queue, because their timeline is fixed and long |

The logic is that tier-one accounts from advisor two should be moving before tier-three accounts from advisor one, even though advisor one signed first. The straight-through accounts protect the most assets in the least time, so they earn the front of the combined queue regardless of which book they came from. Kitces' widely referenced [17-step breakaway transition checklist](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services-grier-rubeling-ria-paperwork-checklists-scripts/) walks the single-advisor version of this account-by-account triage, and interleaving is what happens when you run several of those checklists through one desk at the same time.

## The parallel track is what makes concurrency work

The most common failure in concurrent transitions is treating complex accounts as residual cleanup, the stuff you get to after the "real" work. That sequencing is backward. Trusts, annuities, and held-away assets have the longest fixed timelines in the whole move, so they are the accounts that most need to start early, not last.

Launch every tier-three account on day one in a separate workstream, in parallel with the tier-one submissions, so their long clocks run underneath the fast work instead of extending past it. This is the single highest-leverage scheduling decision in a multi-book window, because it converts the slowest accounts from a tail that stretches the total timeline into a background process that finishes around the same time as everything else. Custodian-side guidance on [streamlining RIA repapering](https://www.tradepmr.com/blog/streamlining-ria-custodian-transitions) makes the same point from the other side of the transfer: the assets that need manual, carrier-specific handling should be identified and started at the very beginning, not discovered halfway through.

Running two tracks at once is only manageable if you can see both. A single view of every account across every concurrent move, its tier, its status, and its owning specialist, is what keeps interleaving from turning into chaos, and building that view is the job of a [transition control tower that tracks ACATS status across concurrent moves](https://fasttrackr.ai/blog/the-transition-control-tower-tracking-acats-status-across-many-concurrent-advisor-moves). Without it, sequencing decisions get made per-book by whoever is loudest, which is exactly the queuing behavior the framework is meant to replace.

## Protect the SLA by committing on the segment you control

Interleaving only holds if the promise you made each advisor is a promise the desk can actually keep under load. The commitment should attach to time-to-submission, the segment from complete intake to a validated package handed to the custodian, because that segment is almost entirely the desk's own work. Settlement, by contrast, waits on the carrying firm's validation queue and the NSCC cycle, which no scheduling decision controls. The full logic of scoping commitments this way is worth reading in the piece on [setting transition SLAs a recruiting team can commit to](https://fasttrackr.ai/blog/transition-slas-setting-repaper-turnaround-times-a-recruiting-team-can-actually-commit-to); in a concurrent context it matters even more, because submission is the one lever you can pull faster by sequencing well.

Reserve buffer too. A desk running at 100 percent of its packet ceiling has no capacity to absorb the first ACATS reject, and rejects are not rare, industry onboarding NIGO rates commonly run from 20 to 40 percent in paper-heavy environments. Plan the interleaved queue to about 80 percent of theoretical throughput so a reject in book one does not automatically consume the slack that book two was depending on.

## Raise effective concurrency without adding headcount

The throughput ceiling is the constraint, so the durable way to run more concurrent transitions is to raise how many packets each specialist clears per day, not to keep hiring against every recruiting spike. Two levers move it.

The first is removing the data-entry and rework tax on the intake-to-submission segment. Hand-keying statement data is slow and it is where most NIGOs originate, and every reject is a one-to-three-week rebook that ripples across every book sharing the desk. AI [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) pre-fills forms from the brokerage statement and validates the fields that cause most rejects before submission, which both shortens each packet and cuts the reject rate that eats your buffer. Fewer rejects means the 80 percent capacity plan holds instead of unraveling on the first complex book.

The second is treating the whole thing as one system rather than a pile of parallel manual checklists. An [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) that assigns, tracks, and validates every account across every active move is what lets a fixed-size desk run five overlapping transitions with the same discipline it brought to one, and the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows the compounding effect of shortening the controllable segment across a real book. Firms and [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who standardize sequencing this way stop treating each new signing as an emergency and start treating concurrency as the normal operating state it has become.

Run overlapping transitions this way and the recruiting promise finally survives contact with the calendar. You score each book, interleave the tiers so the fast high-retention accounts lead across every move, start the slow accounts in parallel on day one, commit only on the submission segment you own, and hold back enough buffer to absorb the rejects you know are coming. No advisor's turnaround depends on when a stranger happened to sign, which is the entire point of running a desk instead of a queue.

## Frequently asked questions

**How many concurrent advisor transitions can one desk actually handle?** It is governed by the packet ceiling, not the number of advisors. A specialist clears roughly 10 to 15 complete account packets a day once rework is counted, so a three-person desk moves about 30 to 45 clean packets daily regardless of how many books those accounts belong to. The right question is not how many advisors but how many total accounts, and whether you can interleave them so the fast, high-retention accounts across all of them lead the combined queue.

**Should I process concurrent transitions first-in-first-out or biggest-book-first?** Neither. Both serialize a shared, fixed-capacity resource, which makes each advisor's turnaround depend on when someone else signed. Interleave instead: front-load the straight-through ACATS accounts across every active book first because they are fast and hold the most assets, batch the one-wrinkle accounts into a second wave, and run the complex accounts in a parallel long-lead track. A hard deadline, a real registration or Protocol date, is the only thing that should override this ordering.

**Why start the complex accounts first when they take the longest?** Precisely because they take the longest. Trusts, annuities, and held-away assets carry fixed timelines set by transfer agents and carriers, so if you start them last they become a tail that stretches the total move past its deadline. Started on day one in a parallel track, their long clocks run underneath the fast tier-one work and finish around the same time, which converts your slowest accounts from a schedule risk into a background process.

**What SLA should I commit to when transitions overlap?** Commit on time-to-submission, from complete intake data to a validated package submitted to the custodian, because that segment is almost entirely the desk's own work and is the one you can accelerate by sequencing well. Do not commit on settlement, which waits on the carrying firm and the NSCC cycle. Plan the interleaved queue to about 80 percent of theoretical throughput so a NIGO reject in one book does not consume the buffer another book was relying on.

**How do I run more concurrent transitions without hiring for every recruiting spike?** Raise packets-per-specialist-per-day instead of headcount. Document extraction pre-fills forms from statements and catches reject-causing fields before submission, which shortens each packet and lowers the 20 to 40 percent NIGO rate that erodes your buffer. Pair that with one platform that assigns, validates, and tracks every account across every active move, and a fixed-size desk can run five overlapping transitions with the discipline it once needed for one.

