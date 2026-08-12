---
title: "NIGO Root-Cause Analysis: Finding the Repaper Fields That Cause Most of Your ACATS Rejects"
topic: "Advisor Transitions & Repapering"
description: "Most repaper teams track NIGO as one number. Root-cause analysis breaks it down to the field level so you learn which few data points cause most of your ACATS rejects, and where to spend the next hour of pre-validation."
author: "FastTrackr AI Team"
image: nigo-root-cause-analysis-finding-the-repaper-fields-that-cause-most-of-your-acats-rejects-hero.png
imageAlt: "NIGO Root-Cause Analysis: Finding the Repaper Fields That Cause Most of Your ACATS Rejects"
---

NIGO root-cause analysis is the practice of tracing every not-in-good-order reject back to the specific data field that caused it, then ranking those fields by how often they break a transfer. It turns a single NIGO rate into a map that tells you exactly where to spend your next hour of pre-validation work.

Most transition teams know their NIGO rate and stop there. A rate tells you how many accounts bounced; it does not tell you why, and without the why you cannot fix the cause. Worse, teams substitute folklore for data. The senior specialist swears rejects are title mismatches, the new hire blames signatures, the compliance lead points at restricted assets, and each is working from whatever sample they happened to see last quarter. Root-cause analysis replaces the folklore with a stable distribution, because when you aggregate enough rejects across a book, the causes cluster into a predictable few. This piece shows how to build that distribution, why it follows a Pareto shape, and how to attack the handful of fields that drive most of your rejects.

## Why NIGO clusters into a few fields

ACATS runs on the National Securities Clearing Corporation's Automated Customer Account Transfer Service, a rule-governed system where the receiving firm submits a transfer request and the delivering firm validates it against what it holds on file. When the two do not match, the transfer rejects with a reason, and those reasons are not evenly spread. A small number of fields carry almost all the risk because they are the fields ACATS actually validates against: the account identity and the assets inside it.

Industry guidance and custodian help pages converge on the same short list of leading causes. Account information mismatch, where the account number on the request does not exactly match the delivering firm's record down to leading zeros and formatting, is repeatedly named the single most common reject. Account type or registration mismatch, where a Traditional IRA is sent into the wrong account type or a joint registration does not line up, is the next heavy contributor. Name and title mismatches, and non-transferable or proprietary assets that cannot move through ACATS at all, round out the group. Betterment's own guide to [why an ACATS transfer gets rejected](https://www.betterment.com/help/why-your-acats-transfer-might-be-rejected-and-how-to-avoid-it) and FINRA's [customer account transfers](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) overview both describe the same validation points, which is exactly why the distribution stabilizes: the system checks the same handful of things every time.

The practical consequence is a Pareto distribution. Fixing a field that causes four percent of your NIGOs is fine. Fixing one that causes twenty-eight percent is transformative. Root-cause analysis exists to tell you which is which, in your book, rather than in someone's memory.

## Instrument the reject: from reason code to field

You cannot rank causes you do not capture. The mechanical core of root-cause analysis is logging every reject with enough structure to trace it to a field. For each rejected account, record five things: the account identifier, the ACATS or custodian reason returned, the specific field that was wrong, the source of the bad value (statement, CRM, or manual entry), and the stage it was caught. That last column matters because a reject caught at pre-submission validation cost you minutes, while the same reject caught by the delivering firm cost you a full ACATS cycle.

| Field group | Typical reject reason | Where the bad value comes from | Pre-validation that catches it |
| --- | --- | --- | --- |
| Account number | Account information mismatch | Manual entry, misread statement | Exact-match check against custodian record, formatting and leading zeros preserved |
| Registration / account type | Account type mismatch | Wrong source doc, assumed type | Map source account type to receiving type before submission |
| Name / title | Title or name mismatch | Nickname vs legal name, joint vs individual | Validate legal name and registration against tax ID |
| Tax ID | SSN or TIN mismatch | Transcription error | Verify TIN against the delivering firm record |
| Assets | Non-transferable or proprietary asset | Not flagged at intake | Screen holdings for proprietary funds, options, and restricted positions |

The taxonomy is the point. Reason codes are custodian-specific and often vague, but every reason maps to one of a small set of field groups, and the field group is what you can actually fix. Normalize the messy reason strings into these groups as you log them, and after a few dozen rejects the ranking emerges on its own.

## Read the distribution, then act on it

Once you have fifty or more rejects logged and grouped, sort the field groups by frequency and look at the cumulative share. In most books you will find that the top two or three groups account for the large majority of rejects. That is your work list, in priority order, and it is specific to your custodians, your book, and your intake process rather than to a benchmark.

The move is to convert each top offender into a pre-submission validation rule. If account-number mismatch leads your distribution, the fix is an exact-match check against the delivering firm record, with formatting and leading zeros preserved, so no account is submitted with a transcribed number. If registration mismatch leads, the fix is a mapping step that resolves the source account type to the correct receiving type before the form is built. Each rule you add removes an entire category of future reject, which is why the same [pre-validation that stops the most common ACATS reject codes](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation) pays back across every subsequent move, not just the current one.

Track the effect the honest way. A falling NIGO rate is the headline, but the real signal is that a field group you attacked drops out of the top of your distribution and a different one takes its place. That reshuffle is the analysis working. It also connects directly to throughput: every reject you prevent is an account that flows clean, which is the mechanism behind a rising [straight-through processing rate](https://fasttrackr.ai/blog/the-straight-through-processing-rate-in-advisor-repapering-how-to-measure-it-and-push-it-higher), the number that ultimately predicts how a book move will go.

## Where AI changes the economics

Root-cause analysis tells you which fields to fix; the question is how to fix them at the scale of a real book without hiring. This is where document intelligence does the heavy lifting, because most of the top NIGO fields trace back to a value that was transcribed by hand from a statement into a form. The account number misread by a digit, the registration typed from memory, the tax ID fat-fingered: these are transcription failures, and transcription is exactly what you can remove.

Reading the account number, registration, tax ID, and holdings straight off the existing brokerage statement, then populating the forms from that extracted data, closes the largest field groups at their source. When account data is mapped once from verified sources rather than rekeyed, reported NIGO rates fall into the four to ten percent range for digital workflows, against the roughly sixty percent that plagues paper submissions. FastTrackr's [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) is built to do exactly this: extract the fields your root-cause analysis flagged as high-risk and get them right at intake, so the account never carries a wrong value into ACATS.

AI also does the analysis you would otherwise do by hand. Across a book of hundreds of accounts, a model can group the reject reasons, surface the field that systematically breaks, and flag the accounts most likely to reject before you submit them. That pattern view is what turns a one-time cleanup into a standing control, and it is the core of what the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) automates for teams running moves continuously.

## Make the analysis a routine, not a project

The teams that get durable value do not run root-cause analysis once after a bad move. They keep the reject log running across every transition, so the distribution updates and the validation rules evolve as custodians change forms and reason codes. A field group you closed last year can creep back when a new custodian enters the mix, and only a live log catches it. For firms running many transitions at once, this discipline is not optional: at volume, a single unaddressed high-frequency field can generate hundreds of rejects, which is why the [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who repaper books for a living treat the reject distribution as a dashboard metric rather than a post-mortem.

The payoff is the same clean, fast move that shows up as lower cost and less AUM sitting in limbo, the outcome documented in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition). Stop treating NIGO as a single number to feel bad about. Break it down to the field, rank the fields, and spend your validation effort where the distribution tells you the rejects actually are.

## FAQ

**What is the difference between NIGO rate and NIGO root-cause analysis?**
NIGO rate is a single percentage: how many accounts went not-in-good-order. Root-cause analysis breaks that number apart by tracing each reject to the specific data field that caused it, then ranking the fields by frequency. The rate tells you that you have a problem; the analysis tells you which two or three fields are causing most of it, so you can target pre-validation instead of guessing. Without the breakdown, teams tend to fix the cause they remember rather than the cause that dominates.

**Which fields cause the most ACATS rejects?**
Custodian guidance and FINRA's transfer overview consistently point to a short list: account-number mismatch (the request must match the delivering firm's record exactly, including leading zeros), account-type or registration mismatch, name or title mismatch, tax ID mismatch, and non-transferable or proprietary assets that cannot move through ACATS at all. The exact ranking varies by book and custodian, which is the whole reason to measure your own distribution rather than assume the general one.

**How many rejects do I need before the distribution is meaningful?**
Around fifty logged and grouped rejects is enough to see a stable top two or three field groups, though more is better. The key is grouping consistently: normalize each custodian's messy reason string into a small set of field groups as you log it. A handful of rejects is folklore; fifty grouped rejects is a distribution you can prioritize against with confidence.

**Can AI actually reduce NIGO, or just report on it?**
Both, and the reduction is the bigger win. Most high-frequency NIGO fields trace to a value transcribed by hand from a statement, so extracting the account number, registration, tax ID, and holdings directly off the source document and populating forms from that data removes the errors at their origin. Reported NIGO for data mapped once from verified sources falls into the four to ten percent range, versus roughly sixty percent for paper. AI also groups reject reasons across a whole book to surface the systemic offender.

**How often should I run root-cause analysis?**
Continuously, not as a one-off. Keep the reject log running across every transition so the distribution updates as custodians change forms and reason codes, and as your book mix shifts. A field group you closed can reappear when a new custodian joins the move. Teams running transitions at scale treat the live reject distribution as a standing dashboard metric, which is what keeps the validation rules current instead of stale.

