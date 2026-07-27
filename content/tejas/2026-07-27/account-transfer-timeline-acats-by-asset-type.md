---
title: "How Long Does an Account Transfer Really Take? ACATS Timelines by Asset Type, and Why a Book Move Is Never Six Days"
topic: "Advisor Transitions & Repapering"
description: "The six-business-day ACATS figure describes one clean account, not a book. Here is the transfer timeline by asset type, where the real time goes in an advisor transition, and how to forecast a completion date for hundreds of accounts instead of one."
author: "FastTrackr AI Team"
image: account-transfer-timeline-acats-by-asset-type-hero.png
imageAlt: "How Long Does an Account Transfer Really Take? ACATS Timelines by Asset Type, and Why a Book Move Is Never Six Days"
---

A clean, fully ACATS-eligible account transfers in roughly four to six business days. That number describes one account holding only transferable securities. In an advisor transition moving hundreds of accounts, the median account lands near that figure and the completion date is set by the slowest 10 percent, which routinely runs three to six weeks behind.

That gap between the median and the tail is the single most misunderstood thing in transition planning. Advisors are told "six days," they plan client communication around six days, and then spend six weeks explaining why the Johnson family's annuity has not arrived. The six-day number is not wrong. It is answering a different question than the one an operations team needs answered.

## What the rule actually requires

FINRA [Rule 11870](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870), Customer Account Transfer Contracts, sets the framework. The carrying member must validate the transfer instruction or take exception to it after the instruction is established in ACATS or the transfer initiation form is received, and then, under the rule's text, "within three business days following the validation of a transfer instruction, the carrying member must complete the transfer of the customer's security account assets to the receiving member."

Two details in the rule matter more to an ops team than the headline timing.

First, the grounds for taking exception are enumerated. The rule permits exception for specific reasons including missing documentation, invalid account numbers, duplicate requests, credit policy violations, Social Security number mismatches, account title discrepancies, and customer rescission. That list is effectively your pre-validation checklist. Every item on it is something you can verify before submission rather than discover after.

Second, non-transferable assets get their own track. The rule provides that the customer is contacted in writing regarding the disposition of nontransferable assets, and that where assets are liquidated, the carrying member distributes the resulting money balance or initiates the transfer within five business days following receipt of the customer's disposition instructions.

Read that second point carefully, because it is where transition timelines break. The five-day clock starts on receipt of the client's instructions. It does not start when the transfer was submitted. If the client takes eleven days to return a disposition instruction, that is eleven days added to the completion date, and nothing in your workflow can compress it except getting the question in front of the client earlier.

FINRA's plain-language [customer account transfers overview](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) frames the validation window more conservatively than the rule text does, and it also states plainly that there may be legitimate reasons why some transfers take longer than others. Plan against the conservative figure. Nobody has ever been criticized for a transfer arriving early.

## Timeline by asset type

This is the table most transition plans are missing. Group the book by asset type before you promise anyone a date.

| Asset type | Path | Realistic elapsed time | What drives the variance |
| --- | --- | --- | --- |
| Listed equities, ETFs | ACATS, fully automated | 4 to 6 business days | Nothing, if pre-validated |
| Corporate and municipal bonds | ACATS | 4 to 8 business days | CUSIP eligibility at the receiving firm |
| Mutual funds on both platforms | ACATS with re-registration | 5 to 10 business days | Fund re-registration processing |
| Proprietary or platform-restricted funds | Liquidation, then cash transfer | 2 to 4 weeks | Client disposition instruction, then the five-day rule |
| Fractional shares | Liquidated, transferred as cash | Follows main transfer as a residual | Residual credit processing |
| IRAs and qualified accounts | ACATS with custodian-to-custodian handling | 5 to 10 business days | Registration matching, beneficiary data |
| Annuities | Not ACATS, carrier paperwork | 3 to 6 weeks | Carrier processing, surrender terms, signature requirements |
| Alternatives, non-traded REITs, private funds | Manual, sponsor-level re-registration | 4 to 12 weeks | Sponsor turnaround, transfer agent forms |
| 529 plans | Plan-specific, often not ACATS | 2 to 6 weeks | Plan administrator, state-level rules |
| Trust and entity accounts | ACATS plus documentation review | 1 to 3 weeks | Trust document review, authorized signer verification |
| Held-direct positions at fund companies | Transfer agent, not ACATS | 3 to 8 weeks | Transfer agent processing, medallion requirements |
| Physical certificates, foreign securities | Manual | 4 weeks or more | Depository and custody arrangements |

Two structural observations from that table.

The ACATS-eligible rows cluster tightly. Everything eligible for the automated path lands in roughly the same window, which is why the six-day number is a reasonable description of that subset.

The non-ACATS rows do not cluster at all. They range from two weeks to three months, they are driven by third parties you have no relationship with, and they are the rows that determine when a book is actually done. An account book that is 92 percent ACATS-eligible still has a completion date set by the other 8 percent.

## The transfer clock is a small part of the transition clock

Here is the reframe that changes planning. Measure the phases separately.

| Phase | Who controls it | Typical duration | Compressible? |
| --- | --- | --- | --- |
| Data capture and account inventory | You | 3 to 15 days | Yes, substantially |
| Form preparation and pre-validation | You | 2 to 10 days | Yes, substantially |
| Client signature collection | Client | 3 to 21 days | Partially |
| ACATS submission to settlement | The rule and the firms | 4 to 6 business days | Barely |
| Exception rework and resubmission | You, reactively | 5 to 20 days per cycle | Yes, by prevention |
| Non-ACATS asset handling | Third parties | 2 to 12 weeks | Rarely |

The row everyone optimizes is the fourth one, and it is the row with the least available compression. The rule sets it, both firms follow the same process, and there is no version of a well-run transition where an ACATS transfer settles in two days.

The rows with real compression available are the first, second, and fifth. Data capture and form preparation are entirely internal. Exception rework is preventable, and it is the most expensive row in the table because a reject does not add three days, it adds a full cycle: identify the reject, diagnose the cause, correct the form, get a new signature if required, resubmit, and wait again. One reject on one account can add two to three weeks. Our breakdown of [ACATS reject codes and how pre-validation stops them](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation) covers what each reason category means and which are catchable before submission.

This is precisely why extraction quality matters at the front of the process rather than the back. Most rejects trace to a data element that was mistyped, missing, or pulled from a stale statement. Our [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) capability exists for that reason: reading account numbers, registration types, and positions directly from the client's own statements removes the rekeying step where those errors originate.

## The exception categories that decide your completion date

Four categories account for most of the long tail. Identify them at intake, not at submission.

**Registration mismatches.** The name and title on the receiving account must match the delivering account. Trusts with amended names, accounts titled with a middle initial at one firm and not the other, and post-marriage name changes all sit here. This is catchable at intake with a five-minute comparison and is one of the most common rejects when it is not.

**Anything with a surrender feature.** Annuities and CDs generally cannot ride ACATS and require carrier or issuer paperwork, with surrender terms that may carry economic consequences for the client. These need a client conversation, not just a form, and the conversation should happen in the intake week rather than in week four.

**Platform-restricted holdings.** Funds available at the old firm and not at the new one require a disposition decision from the client. Under Rule 11870 the five-business-day distribution clock runs from receipt of that instruction, so the elapsed time is dominated by how quickly you can get the decision.

**Anything held directly with a fund company or sponsor.** Positions held direct at the transfer agent, non-traded alternatives, and 529 plans move on the sponsor's schedule. Submit these first, on day one, because they will still be open when everything else has settled.

The sequencing rule that follows from all four: submit the slowest assets first and the fastest assets last. Most teams do the opposite, because the fast ones are easy and produce early wins on a status report. That ordering feels productive and pushes the completion date out by weeks.

Custodian behavior adds another layer of variance on top of asset type, since firms differ in form requirements and in how they handle exceptions. Our operational comparison of [Schwab, Fidelity, and Pershing form requirements and ACATS reject patterns](https://fasttrackr.ai/blog/schwab-fidelity-pershing-form-acats-reject-comparison) covers where those differences actually bite.

## How to forecast a completion date for a book

Stop forecasting an average. Forecast a distribution, and communicate against it.

**Step 1: Segment the book at intake.** Bucket every account into ACATS-clean, ACATS-with-exceptions, and non-ACATS. You cannot do this from an AUM number. You need position-level detail, which is why intake quality determines forecast quality.

**Step 2: Apply the asset-type table.** Each bucket gets its own expected window from the table above.

**Step 3: Set three dates, not one.** Report the date by which the majority of accounts and AUM will have moved, the date by which the ACATS-eligible book will be complete, and the date by which everything including the tail will be complete. These are typically about one week, three weeks, and eight to twelve weeks respectively for a book with normal asset diversity.

**Step 4: Communicate the right date to the right audience.** Clients holding only ACATS-eligible assets should hear the short date. Clients holding an annuity or a non-traded alternative should be told at the outset that their transfer works differently and takes longer. A client told six days who waits five weeks has a service failure. The same client told five weeks up front has a normal experience.

**Step 5: Track the tail explicitly.** The accounts that will still be open in week six are identifiable in week one. Give them a named owner and a weekly review from the start, rather than discovering them when the main wave clears.

For the benchmark ranges behind step 3, our [repapering timeline benchmark for RIA operations directors](https://fasttrackr.ai/blog/repapering-timeline-benchmark-under-30-days) covers the tiers and the NIGO rates by method that separate a 30-day book move from a 90-day one.

## What actually compresses the timeline

Four things, in order of effect:

1. **Pre-validation before submission.** Preventing a single reject saves more elapsed time than any improvement to the ACATS phase, because a reject costs a full cycle rather than a few days.
2. **Front-loading the slow assets.** Annuities and sponsor-level alternatives submitted on day one instead of day fifteen pull the completion date forward by the full delay.
3. **Batching signature collection.** Signatures are the largest client-controlled delay. Collecting them once, for all accounts, in one session beats collecting them account by account as forms become ready.
4. **Getting disposition questions asked early.** Every non-transferable position needs a client decision, and the regulatory clock only starts once that decision arrives.

What does not compress it: escalating with the carrying firm on a validated transfer that is inside its normal window, resubmitting a transfer that was correctly rejected without fixing the underlying data, or adding people. Transitions are gated by sequence and data quality, not by headcount, which is the same reason [running many concurrent transitions](https://fasttrackr.ai/solutions/advisor-transitions) is a workflow design problem rather than a hiring problem.

Firms running transitions continuously rather than occasionally end up building this segmentation into intake as a standing step, because the forecast is only as good as the position-level data captured in week one. That is the pattern we see across the [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) we work with, and the timeline compression it produces is visible in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently asked questions

**How long does an ACATS transfer take?**
A clean, fully ACATS-eligible account generally transfers in four to six business days. FINRA Rule 11870 requires the carrying member to validate or take exception to the instruction, and then to complete the transfer within three business days following validation. Accounts holding assets that are not ACATS-eligible fall outside that window entirely and can take weeks.

**Why is my advisor's book taking six weeks when transfers take six days?**
Because the completion date of a book is set by its slowest accounts, not its median one. Annuities typically take three to six weeks, non-traded alternatives and sponsor-held positions can take one to three months, and any position requiring a client disposition decision waits on that decision before its regulatory clock starts. A book that is 90 percent ACATS-clean still finishes when the last 10 percent finishes.

**Which assets cannot transfer through ACATS?**
Common examples include annuities, which require carrier paperwork and may involve surrender terms, non-traded REITs and private funds requiring sponsor-level re-registration, proprietary or platform-restricted funds not available at the receiving firm, many 529 plans, positions held directly with a fund company's transfer agent, physical certificates, and certain foreign securities. These move on manual paths with third-party processing times.

**What happens to holdings the new firm does not support?**
Under Rule 11870 the customer is contacted in writing about the disposition of nontransferable assets. If the client instructs liquidation, the carrying member distributes the resulting money balance or initiates the transfer within five business days following receipt of those instructions. The elapsed time is therefore driven mostly by how fast the client responds, which is why the question should be asked during intake rather than after submission.

**Does a rejected transfer just add a few days?**
No. A reject costs a full cycle: identifying it, diagnosing the cause, correcting the data, obtaining a new signature where one is required, resubmitting, and waiting through validation and settlement again. In practice that adds one to three weeks per affected account, which is why pre-submission validation returns more elapsed time than any other intervention.

**What is the single biggest lever on transition speed?**
Data quality at intake. Most rejects trace back to a field that was mistyped, missing, or captured from an outdated statement. Accurate position-level capture at the start also produces the segmentation needed to forecast a realistic completion date, which is what keeps client communication credible through the weeks when the tail is still open.

