---
title: "Book Landed but Not Billable: The Revenue-Recognition Gap That Follows Every Advisor Transition"
topic: "Advisor Transitions & Repapering"
description: "ACATS settling moves the assets, not the revenue. Here are the four post-settlement steps, rep code, advisory agreement, fee enrollment, and householding, that decide when a moved account actually produces, the failure modes at each, and where AI validation compresses the gap whi"
author: "FastTrackr AI Team"
image: book-landed-but-not-billable-the-revenue-recognition-gap-that-follows-every-advisor-transition-hero.png
imageAlt: "Book Landed but Not Billable: The Revenue-Recognition Gap That Follows Every Advisor Transition"
---

<AnswerCapsule>
ACATS settling moves the assets, not the revenue. A moved account starts producing only after it is linked to the advisor's rep code, covered by a re-executed advisory agreement, enrolled in a fee-billing schedule, and householded for breakpoints. Each step has its own failure mode, and AI can validate the data feeding them while a human signs off on fees and discretion.
</AnswerCapsule>

Every transition team celebrates the wrong milestone. The dashboard turns green when ACATS settles and the assets appear at the new custodian, and everyone treats the account as moved. It is not moved in the sense that matters. The advisor cannot bill it, the firm cannot recognize revenue on it, and the client is technically holding assets that no one is yet being paid to manage. Between a settled transfer and a producing account sits a second repaper that almost no one plans for, and it is where weeks of revenue quietly leak out of an otherwise clean transition.

This gap is the part of the timeline that ROI models miss, because they measure time to settle when the number that pays the bills is time to billable. For an independent broker-dealer moving a recruiting class, or a consultant running several books at once, the difference between those two numbers, multiplied across hundreds of accounts, is real quarters of deferred revenue. Here is exactly what stands in the gap, how each piece fails, and where AI removes the manual work without removing the human judgment the work requires.

## Why a settled ACATS transfer is not the finish line

ACATS, governed by [FINRA Rule 11870 on customer account transfers](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870), does one thing: it moves the positions from the delivering firm to the receiving firm. When it settles, the shares and cash are at the new custodian, registered to the client. That is a custody event, not a revenue event. The account at that moment is often unlinked to any advisor, uncovered by any current advisory agreement, and enrolled in no billing schedule. It sits there, fully transferred and completely unproductive.

The reason this surprises teams is that at a wirehouse the two events were fused. The advisor's book, their compensation, and their client agreements all lived inside one firm's systems, so an account that existed was an account that produced. In an independent or RIA context those layers are separate systems that each have to be told, in the right order, that this account now belongs to this advisor under these terms. The move does not carry that wiring. You rebuild it after the assets land, and until you do, the book is on the balance sheet but not on the fee run. Understanding which single task gates the whole sequence is the same discipline covered in [the repaper critical path](https://fasttrackr.ai/blog/the-repaper-critical-path-which-single-task-actually-determines-when-a-book-finishes-moving), applied to the stretch after settlement rather than before it.

## The four things that stand between a landed account and a billable one

Four steps convert a settled account into a producing one. They do not all run in sequence, but a fee run cannot pull an account until all four are complete and consistent, and a mismatch in any one of them silently drops the account from billing.

### Rep code and advisor of record

The account has to be coded to the correct advisor, rep code, and branch. This is the linkage that tells the custodian and the firm's billing system who manages the account and who gets paid on it. In a concurrent move, this is where errors cluster: an account gets coded to the wrong rep in a multi-advisor team, a joint account is split across two rep codes, or a house account never gets reassigned off the departing firm's default code. An account with no valid rep code, or the wrong one, will not appear on the right advisor's fee run at all.

### The advisory agreement, re-executed

An account cannot be billed an advisory fee without a current advisory agreement between the new RIA and the client. The old firm's agreement does not travel. As Kitces details in its breakdown of [compliant client advisory agreements](https://www.kitces.com/blog/client-advisory-agreements-investment-advisers-act-of-1940-performance-based-fees-services-compliance-regulations/), that agreement has to state the exact fee, when it is charged, how it is prorated at the start and end, how the client pays, and which accounts may be billed. Until the client signs it and it is filed against the account, that account is not eligible for a fee, no matter how cleanly the assets transferred.

### Fee-schedule enrollment and the billing cycle

Even with a signed agreement, the account has to be enrolled in the billing system against a specific fee schedule and billing cycle. Billing platforms filter fees by custodian, rep code, and billing cycle, so an account that is not tagged to a schedule, or is tagged to the wrong one, either bills incorrectly or does not bill. This is distinct from the proration and gap mechanics covered in [advisory fee billing during a transition](https://fasttrackr.ai/blog/advisory-fee-billing-during-a-transition-proration-billing-gaps-and-the-revenue-lost-in-a-slow-repaper); the question here is simply whether the account is in the system correctly enough to be picked up when the cycle runs.

### Householding and breakpoints

Fee schedules almost always give breakpoints for aggregated household assets. If the moved accounts are not householded correctly, the client is billed at the wrong tier, usually higher than agreed, which is both a client-trust problem and a compliance one. Rebuilding household groupings after a move is manual, error-prone, and easy to defer past the first billing cycle, which means the first invoice a transitioned client sees is the one most likely to be wrong.

## Where each step fails, and where AI belongs

The gap is a data problem before it is a paperwork problem. Every one of these steps depends on the same underlying facts, the client, the account, the registration, the advisor, the fee, being consistent across the CRM, the custodian, and the billing system. That is exactly the reconciliation an AI-native platform is built to do: read the source records, match them, and flag the mismatches before they reach a fee run. FastTrackr AI positions its [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) on that multi-system reconciliation, and its [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) capability extracts the account and registration data from statements and agreements so the linkage is built from the source, not rekeyed by hand. FastTrackr reports large reductions in not-in-good-order rates and manual effort from this approach; those are the company's own reported results, and they describe the same principle that applies to the post-settlement gap, catch the mismatch before submission rather than after.

The line that matters is what AI validates versus what a human signs. The table below maps it step by step.

| Post-settlement step | How it fails | Where AI validates before it breaks | Where a human must sign off |
|---|---|---|---|
| Rep code / advisor of record | Account coded to wrong or no rep; team split incorrectly | Reconcile account-to-advisor mapping across CRM and custodian; flag unassigned or duplicated codes | Confirm team splits, house accounts, and any judgment call on who owns a joint account |
| Advisory agreement re-execution | Account billed with no current signed agreement on file | Check that a signed agreement exists and is filed against every billable account; flag the gaps | Approve the fee terms, discretion, and any performance-fee eligibility |
| Fee-schedule enrollment | Account not tagged, or tagged to the wrong schedule or cycle | Validate every account is enrolled against a schedule consistent with its agreement; flag mismatches | Confirm the correct schedule where the agreement allows more than one |
| Householding / breakpoints | Household not rebuilt; client billed at the wrong tier | Propose household groupings from registration and address data; flag tier mismatches | Approve the final household definition and any exception |

AI does not sign the advisory agreement, set the fee, grant discretion, or decide performance-fee eligibility. Those are judgment-bearing and stay with a licensed human, which is the mandatory human-in-the-loop principle that should govern any automation touching client fees. What AI removes is the silent, manual reconciliation that otherwise happens one account at a time and usually only surfaces its errors when a fee run comes back wrong.

## The billing-cycle trap that costs a full quarter

The most expensive failure in the gap is not a wrong fee, it is a missed cycle. Many advisory fees bill quarterly. If an account is not fully wired, coded, agreement filed, enrolled, householded, before the quarter's billing cutoff, it does not bill late; it waits for the next quarter. A single account that misses the cutoff by two days can defer its revenue by roughly ninety days. Multiply that across a recruiting class where a batch of accounts all settled in the last week of a quarter and the deferred revenue is a material number that never shows up as a loss, only as a delay no one attributed to the transition process.

This is why the operational target has to be time to billable measured against the billing calendar, not time to settle. A team that settles a book on the 29th and celebrates has often just missed a quarter. A team that works backward from the cutoff and front-loads the coding, agreement, and enrollment work so it completes before settlement lands the same book inside the cycle. The sequencing skill is the same one that governs the pre-settlement repaper, applied with the fee calendar as the deadline.

## What a home office should actually measure

For an independent broker-dealer running many advisors, the post-settlement gap is where a transition program either compounds or bleeds. The instinct is to report on assets transferred, because that number is clean and available. The number that predicts revenue is the share of transferred assets that are billable, and how many days elapse between settlement and billable status. A home office that tracks time to billable per advisor finds the reps and the account types where the gap is widest and can staff or automate against it, rather than discovering the leak a quarter later in a soft fee run.

This measurement discipline is what separates a scalable transition desk from one that simply processes moves. Consultants who run transitions across many firms build it into their engagements as a matter of course, which is why FastTrackr works with [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) on exactly this handoff, and it is visible in outcome terms in the FastTrackr [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition). The point is not that software eliminates the gap. It is that the gap is measurable, the failure modes are known, and most of the reconciliation that stretches it can be validated by AI and cleared before it ever reaches a fee run, leaving humans to sign the things only humans can sign. The steps to build the surrounding checklist are laid out in Kitces's guide to [transitioning clients as a broker to an RIA](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services-grier-rubeling-ria-paperwork-checklists-scripts/), and the revenue-recognition steps belong on that same checklist rather than being treated as an afterthought once the assets arrive.

## The takeaway

A settled ACATS transfer is the halfway point of getting paid, not the end. The account becomes billable only when it is coded to the right advisor, covered by a signed advisory agreement, enrolled in the correct fee schedule and cycle, and householded for breakpoints. Miss any one and the account holds assets while producing nothing; miss the billing cutoff and you defer a quarter. AI can reconcile the data behind every step and flag the breaks before a fee run does, while the fee, the discretion, and the agreement stay with a human. Measure time to billable, work backward from the billing calendar, and the gap stops being the place transition revenue disappears.

<FAQ items={[
  {
    question: "If ACATS settled and the assets are at the new custodian, why can't the advisor bill the account yet?",
    answer: "Because ACATS moves custody, not the advisory relationship. The account still has to be coded to the advisor's rep code, covered by a re-executed advisory agreement the client signs, enrolled in a fee-billing schedule and cycle, and householded for breakpoints. Until all four are complete and consistent across systems, a fee run will not pull the account, so it holds assets while producing no revenue."
  },
  {
    question: "What is the difference between time to settle and time to billable?",
    answer: "Time to settle measures when the assets arrive through ACATS. Time to billable measures when the account can actually be charged an advisory fee, which requires rep-code linkage, a signed agreement, fee-schedule enrollment, and correct householding. Time to billable is the number that predicts revenue, and it is usually days or weeks longer than time to settle, especially near a quarterly billing cutoff."
  },
  {
    question: "How can missing a billing cutoff by a day or two cost a full quarter?",
    answer: "Many advisory fees bill quarterly. If an account is not fully wired before the quarter's billing cutoff, it does not bill late, it waits for the next cycle, deferring roughly ninety days of revenue. Across a recruiting class whose accounts settle in the last week of a quarter, that can defer a material amount that shows up only as a delay, not as a recorded loss."
  },
  {
    question: "Where does AI help in the post-settlement gap, and where must a human stay in the loop?",
    answer: "AI reconciles the client, account, registration, advisor, and fee data across the CRM, custodian, and billing system, then flags mismatches: unassigned rep codes, missing agreements, wrong fee schedules, broken households. It validates before a fee run breaks. A licensed human still approves fee terms, discretion, performance-fee eligibility, and final household definitions. AI drafts and checks; professionals sign off on anything judgment-bearing."
  },
  {
    question: "What should a broker-dealer home office measure to control this gap?",
    answer: "Track the share of transferred assets that are billable and the days between settlement and billable status per advisor, rather than only assets transferred. That surfaces the reps and account types where the gap is widest so the firm can staff or automate against it, instead of discovering deferred revenue a quarter later in a soft fee run."
  }
]} />

