---
title: "The Straight-Through Processing Rate in Advisor Repapering: How to Measure It and Push It Higher"
topic: "Advisor Transitions & Repapering"
description: "Straight-through processing rate is the single number that predicts how a book move will go. Here is how to define it, measure it honestly, benchmark it, and raise it past 80 percent."
author: "FastTrackr AI Team"
image: the-straight-through-processing-rate-in-advisor-repapering-how-to-measure-it-and-push-it-higher-hero.png
imageAlt: "The Straight-Through Processing Rate in Advisor Repapering: How to Measure It and Push It Higher"
---

Straight-through processing rate is the share of accounts in a transition that repaper end to end without a human touching them: no NIGO reject, no manual rekeying, no exception queue. It is the one operational number that predicts how a book move will actually go, because everything painful in a repaper, the delays, the cost, the AUM at risk, is concentrated in the accounts that fall out of straight-through and land on someone's desk.

Most transition teams track NIGO rate and stop there. NIGO tells you what got rejected, but it undercounts the real drag, because an account can require manual work without ever generating a formal not-in-good-order flag. Straight-through rate captures the whole picture: it is the percentage of the book that flows clean, and its inverse is the exact size of the manual workload that determines your timeline and your team's capacity. This piece defines the metric precisely, shows how to measure it without fooling yourself, gives realistic benchmarks by method, and lays out the specific moves that push the rate higher.

## What straight-through rate actually measures

Straight-through processing (STP) is a term the industry borrowed from securities settlement, where it means a trade that clears from execution to settlement with no manual intervention. Applied to repapering, an account processes straight through when its data is captured, its forms are populated, its submission validates, and it clears the custodian and ACATS without anyone rekeying a field, chasing a signature, or resolving an exception.

That definition matters because it is stricter than the absence of a NIGO. Consider three accounts:

- One is captured, populated, validated, submitted, and clears on the first pass. Straight through.
- One clears ACATS but only after an operator manually corrects a mismatched account title before submission. Not straight through, even though it never rejected.
- One submits, gets a NIGO reject from the carrying firm, and has to be corrected and resubmitted. Not straight through, and it also counts against NIGO.

Track only NIGO and the second account looks like a success. It was not. It consumed the scarce resource that actually gates a transition: human attention. STP rate is the honest denominator because it counts every account that needed a person, not just the ones the system bounced.

## How to measure it without lying to yourself

The metric is simple to define and easy to game. Measure it as accounts that required zero manual intervention divided by total accounts in the move, over a defined window. Three disciplines keep it honest.

**Count the account, not the form.** A single account can spawn several forms. If you measure at the form level, a book with clean accounts and messy paperwork inflates its own score. The unit that matters to the client and the timeline is the account, so that is the denominator.

**Count any touch as a touch.** The temptation is to exclude "quick fixes" because they only took a minute. Do not. A one-minute correction across 500 accounts is a full day of work, and excluding it hides exactly the workload you are trying to measure. If a human touched the account for any reason other than a final review sign-off, it did not process straight through.

**Fix the window and the stage.** Decide whether you are measuring straight-through to submission or straight-through to funded, and hold it constant. Submission-stage STP tells you about your intake and validation quality. Funded-stage STP tells you about the whole chain including custodian and ACATS behavior. Both are useful; mixing them is not.

The [advisor transition scorecard of operational metrics](https://fasttrackr.ai/blog/advisor-transition-ops-scorecard-metrics) puts STP alongside the other numbers an ops director should track, so it is read in context rather than as a vanity figure.

## Benchmarks: what a good rate looks like

STP rate varies enormously by method, and the gap between paper and validated-digital workflows is the whole argument for transition technology. The industry NIGO rate for paper-based new-account and transfer work runs around 60 percent, which puts paper straight-through rates well below half. Digital platforms with real-time validation report NIGO rates in the 4 to 10 percent range, with Docupace citing an 8 percent NIGO figure for fully digital account opening, which corresponds to straight-through rates in the 80s and low 90s.

| Method | Typical NIGO rate | Implied straight-through rate | What drives it |
| --- | --- | --- | --- |
| Paper and manual rekeying | ~60% | Under 50% | Manual entry errors, incomplete forms, no validation until the custodian rejects |
| Basic e-forms, no validation | 20-40% | 60-80% | Fewer transcription errors, but nothing catches bad data before submission |
| Validated digital workflow | 4-10% | 80-95% | Real-time validation, pre-filled fields, integration across systems |

The pattern behind the table: straight-through rate is a function of how early and how completely you validate. Every error you catch before submission is an account that stays in the straight-through column. Docupace attributes NIGO to four causes, manual entry errors, incomplete forms, compliance oversights, and lack of integration, and each one is a validation gap you can close before the account ever reaches a custodian.

## The four levers that raise the rate

Pushing STP higher is not about working faster on exceptions. It is about producing fewer exceptions. Four levers do the heavy lifting.

**Validate before submission, not after.** The single biggest driver. Paper workflows discover errors when the custodian rejects, which is the most expensive possible moment. A validated digital workflow checks the account title, tax ID, registration type, and required fields against custodian rules at intake, so the account that would have rejected never gets submitted wrong. Pre-submission validation is what turns a 60 percent NIGO book into a single-digit one, and the mechanics are covered in [how pre-validation stops the most common ACATS reject codes](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation).

**Kill manual rekeying with document intelligence.** Manual entry is the first cause of NIGO on Docupace's list, and it is entirely avoidable. Extracting account numbers, registrations, and positions straight off the existing statement removes the transcription errors that knock accounts out of straight-through. Our [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) reads the brokerage statement and pre-fills the forms, so the data enters once and enters right.

**Integrate the systems so data flows once.** Lack of integration is Docupace's fourth cause. When the custodian portal, the CRM, and the repapering system do not talk, someone rekeys between them, and every rekey is a chance to break straight-through. Wiring the systems so a field is captured once and propagates everywhere removes an entire class of exception.

**Triage the exceptions you cannot prevent.** Even a strong workflow leaves a residual set of genuinely hard accounts, trusts, entities, life-event registrations, that will never process straight through. The goal there is not to force them into the clean column but to resolve them fast so they do not stall the book. [How AI triages the repaper exceptions that break straight-through automation](https://fasttrackr.ai/blog/how-ai-triages-the-repaper-exceptions-that-break-straight-through-automation) covers routing the residual 20 percent efficiently.

## Why the rate is a business metric, not just an ops one

Straight-through rate is easy to file under operations, but it drives the numbers leadership cares about. Every account that falls out of straight-through consumes staff hours, extends the timeline, and keeps a client's assets in limbo longer, and limbo is where attrition happens. A move that runs at 90 percent STP funds faster, costs less to process, and exposes less AUM to a competitor's phone call than the same book run at 50 percent. That is why the metric belongs on the same dashboard as cost-per-transition and retention, and why transition consultants running many moves at once watch it closely: at volume, a ten-point swing in STP is the difference between a team that holds the line and one that needs a hire. Firms that run transitions at scale, including the [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who repaper books for a living, treat STP rate as the leading indicator of whether a move is under control.

The measured payoff of raising the rate shows up as a faster, cleaner move with less rework, which is exactly the outcome documented in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition). The [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to raise straight-through rate directly, by validating early, extracting instead of rekeying, and integrating the systems that would otherwise force manual handoffs.

For the regulatory backdrop on how transfers are validated and timed, FINRA's [customer account transfers](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) overview explains the three-business-day validation window under Rule 11870, Docupace's guide to reducing NIGO documents the causes and rates, and the SEC's [tips on avoiding transfer delays](https://www.sec.gov/about/reports-publications/investorpubsacctxferhtm) covers the account-level errors that most often break a clean transfer.

## FAQ

**What is a good straight-through processing rate for a repaper?**
On a validated digital workflow, aim for 80 percent or higher to submission, with best-in-class fully digital account opening corresponding to NIGO rates as low as 8 percent, which implies straight-through rates in the low 90s. Paper-based work typically sits under 50 percent because roughly 60 percent of paper submissions go not-in-good-order. If your rate is below 70 percent, the problem is almost always that validation happens after submission instead of before.

**How is straight-through rate different from NIGO rate?**
NIGO rate counts accounts the custodian or ACATS formally rejected. Straight-through rate counts accounts that needed no human intervention at all, which is stricter, because an account can require a manual correction before submission and never generate a NIGO. Tracking only NIGO undercounts your real manual workload. Straight-through rate is the honest measure of how much of the book your team actually had to touch.

**Should I measure straight-through to submission or to funded?**
Both, but never mixed. Submission-stage straight-through rate measures your intake and validation quality, which you control directly. Funded-stage rate measures the whole chain including custodian and ACATS behavior, which you influence but do not fully control. Pick one for a given report and hold it constant, because comparing a submission-stage number in one move to a funded-stage number in another tells you nothing.

**What is the fastest way to raise the rate?**
Move validation earlier. The largest single gain comes from checking account titles, tax IDs, registration types, and required fields against custodian rules at intake rather than discovering errors when the custodian rejects. Pair that with document extraction to kill manual rekeying, the top cause of NIGO, and system integration so data is captured once. Those three changes convert most of the accounts that would have fallen out of straight-through into clean passes.

**Does a higher straight-through rate really affect AUM retention?**
Yes, indirectly but reliably. Accounts that fall out of straight-through take longer to fund, and the longer a client's assets sit in limbo, the more opportunity a former firm or competitor has to pull them back. A move that runs at a high straight-through rate funds faster and exposes less AUM to that window. Straight-through rate is an operational number, but it moves the retention and cost figures leadership tracks.

