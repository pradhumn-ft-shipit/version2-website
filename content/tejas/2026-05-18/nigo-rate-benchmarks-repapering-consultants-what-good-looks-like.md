---
title: "NIGO Rate Benchmarks for Repapering Consultants: What Good Actually Looks Like"
topic: "Advisor Transitions & Repapering"
categoryId: advisor-transitions-and-repapering
description: "Most repapering consultants know when their NIGO rate is too high — but there's almost no published benchmark for what 'good' actually means. Here are the industry numbers, organized by operations type, and the technical factors that separate a 2% rate from a 20% one."
image: nigo-rate-benchmarks-repapering-consultants-what-good-looks-like.jpg
imageAlt: NIGO rate benchmark chart for repapering operations
persona: Consultants supporting transitions for operations (repapering)
author: FastTrackr AI Team
---
Most [repapering consultants](/who-we-serve/transition-consultants) know when their NIGO rate is too high. They feel it in the form of constant resubmissions, client calls asking where their account is, and emails from advisors at 11pm. What almost no one in the industry has published is a clear benchmark — what does a *good* NIGO rate actually look like, and what separates the operations running at 2% from the ones running at 20%?

This article answers that question with actual numbers and explains the technical mechanisms behind the gap.

## What Is a NIGO and Why It Costs More Than You Think

NIGO stands for Not In Good Order — the custodian's rejection of a submitted form due to an error, a missing field, a missing signature, or a requirement the form didn't meet. Every NIGO is not just an inconvenience; it's a timeline reset.

When a form is rejected, the affected account goes back to square one: the error must be identified and corrected, new client signatures are typically required, and the form is resubmitted into the custodian's processing queue. Depending on the custodian and the error type, a single NIGO can add 2–4 weeks to an individual account's timeline.

For a consultant managing 15 simultaneous advisor transitions, a 20% NIGO rate means dozens of accounts are in limbo at any given moment — each one extending the transition window for that advisor, each one requiring another client touchpoint that tests relationship patience.

The math is straightforward: on a 500-account book at a 20% NIGO rate, 100 accounts will require resubmission. If each resubmission adds an average of two weeks, you've added 200 account-weeks of delay to a single advisor's transition. That's how 90-day transitions stay at 90 days regardless of how efficiently the first submission was prepared.

## Industry NIGO Rate Benchmarks by Operations Type

These are the benchmarks that the industry doesn't publish but that operational data consistently supports:

| Operations Type | Typical NIGO Rate | Primary Driver |
|---|---|---|
| Manual portal entry, no validation | 15–40% | Human error in form population; outdated knowledge of custodian requirements |
| [Document automation](/solutions/document-intelligence), generic validation | 8–15% | Catches obvious errors; misses custodian-specific requirement variations |
| Pre-submission validation, custodian-specific rules | Under 5% | Validates against each custodian's current requirements before submission |
| Purpose-built AI with continuous rule updates | Under 2% | Automated rule currency; field-level validation per custodian |

[FastTrackr AI](/)'s benchmark is 95% reduction in NIGOs from typical manual baselines. If your current operation sees a 20% NIGO rate — common for manual operations — a 95% reduction brings that to under 1%. That's not a marginal improvement; it's a structural one.

The key insight from these benchmarks: the gap between a 2% rate and a 20% rate is almost entirely explained by one technical factor — whether forms are validated against each custodian's specific current requirements before submission, or after (when the custodian tells you they were wrong).

## Why Each Custodian Has Different Rules (And Why This Matters for Your NIGO Rate)

[Fidelity](https://www.fidelity.com/wealth-services/working-with-fidelity)'s repapering requirements differ from Schwab's. Schwab's differ from [Pershing](https://www.pershing.com)'s. Each custodian has unique field requirements, acceptable account number formats, signature placement conventions, and supplemental documentation requirements for certain account types.

Manual operations teams typically maintain this knowledge informally — institutional memory about which custodian cares about which field, updated when a NIGO surfaces with a new requirement. This approach has two failure modes: knowledge gaps when new team members haven't accumulated the institutional memory yet, and stale knowledge when custodian requirements change and the team doesn't know it.

The practical consequence: a form that passes your team's quality review and still fails custodian validation. Not because your team made an obvious error, but because Fidelity updated a requirement last quarter and your team didn't know.

True pre-submission validation means validating against each custodian's actual current requirements — not a generic form review, but a field-level check against the rules that the specific custodian applies to the specific account type you're submitting. This is the technical distinction that explains most of the benchmark gap in the table above.

## What FINRA Expects from Your Audit Trail in 2026

FINRA's 2026 Annual Regulatory Oversight Report flagged recordkeeping deficiencies over 50 times — making it the single most frequently cited examination issue. For repapering consultants, this has direct operational implications.

When FINRA examines a transition-related recordkeeping question, examiners are looking for specific documentation:
- A complete log of every form submitted, by account, with timestamps
- Documentation of every NIGO rejection — reason code, resolution, resubmission date
- Evidence of who had access to client data during the transition
- Audit trail showing each step of the workflow for any account under examination

Manual operations that track transitions via spreadsheets or email chains typically cannot produce this documentation on demand. The accounts are eventually transferred, but the paper trail that demonstrates how is incomplete. That's an exam finding.

This matters for NIGO tracking specifically because NIGO resolution is the step most often missing from audit trails. The form was eventually submitted successfully — but the record of why it was rejected, what was corrected, and who made the correction is often undocumented.

For repapering consultants working with broker-dealers, this creates dual exposure: the operational cost of the NIGO itself (timeline extension, client re-signature, resubmission) and the compliance cost if the resolution isn't documented.

## The 5-Step NIGO Prevention Checklist

This checklist applies to every submission batch, not just the first:

**Step 1 — Verify custodian rule currency before each batch**
Custodian requirements change. Before submitting a new batch of forms, confirm you're working with current form versions and current field requirements for each custodian in the batch. This is the most commonly skipped step and the most common source of avoidable NIGOs.

**Step 2 — Separate batches by custodian and account type**
Multi-custodian batches that mix account types are harder to validate because the rules vary at the intersection of custodian and account type. Separating submissions by custodian and account type allows you to apply the relevant rule set to each group cleanly.

**Step 3 — Run field-level validation before submission, not just completeness review**
Checking that all required fields are filled is necessary but not sufficient. Field-level validation checks that the data in each field meets the custodian's specific requirements for that field — correct format, acceptable values, correct length. Completeness review catches missing data; field-level validation catches incorrect data.

**Step 4 — Automate signature reminders rather than relying on advisor follow-up**
A significant portion of NIGOs involving missing signatures are not form errors — they're follow-up gaps. The advisor was supposed to remind the client to sign; the advisor got busy; the deadline passed. Automated signature reminders sent directly to clients at defined intervals eliminate this failure mode.

**Step 5 — Build the NIGO audit trail from the first submission**
For every form in every batch, log the submission timestamp, the custodian, the account type, and the outcome. When a NIGO occurs, log the rejection reason, the correction made, and the resubmission date. This takes minutes at the time and hours when an examiner asks for it three years later.

## Calculating the Cost of Your Current NIGO Rate

This exercise takes about ten minutes and reframes the NIGO conversation from operational inconvenience to financial impact:

1. Take your average number of simultaneous advisor transitions.
2. Estimate your current NIGO rate as a percentage of submitted forms.
3. Multiply: (accounts per transition × average transitions) × NIGO rate = accounts requiring resubmission.
4. Estimate average days added per NIGO (typically 14–21 days).
5. Multiply: accounts requiring resubmission × average days added = total timeline extension.

For a consultant managing 10 simultaneous transitions with an average of 200 accounts each, at a 20% NIGO rate and 14 days added per NIGO: 400 accounts in resubmission × 14 days = 5,600 account-days of avoidable delay. That's the operational tax your current NIGO rate is charging.

Now calculate the same math at a 4% NIGO rate: 80 accounts in resubmission × 14 days = 1,120 account-days. The difference — 4,480 account-days — is the transition time your clients aren't experiencing because your process is catching errors before [custodians](/who-we-serve/custodians) do.

If your current NIGO rate is above 10%, the gap between where you are and where best-in-class operations run is measured in weeks of avoidable delay per client, per transition.

---

**Frequently Asked Questions**

**What is a good NIGO rate for advisor transition repapering?**
Below 5% is achievable with pre-submission validation technology that checks forms against each custodian's specific current requirements. Best-in-class operations using purpose-built automation see rates below 2%. Above 10% is a red flag requiring immediate process review.

**What causes high NIGO rates in repapering operations?**
The primary causes are: manual form population with human data entry errors, outdated knowledge of custodian-specific field requirements, generic form review that doesn't catch custodian-specific errors, and missing or misplaced signatures discovered only after custodian rejection.

**How do you reduce NIGO rejections in advisor transitions?**
Pre-submission validation against each custodian's specific current requirements is the highest-impact change. Separating submissions by custodian and account type, automating signature reminders, and maintaining current custodian rule documentation reduce the remaining rejections.

**What is the difference between a generic form review and custodian-specific validation?**
Generic form review checks that required fields are completed and obviously correct. Custodian-specific validation checks that the data in each field meets each custodian's current requirements for that specific field type — the acceptable format, the correct length, any custodian-specific values. Most NIGOs survive generic review and fail custodian-specific validation.

**What does FINRA expect from NIGO documentation?**
FINRA examiners look for: a log of every submission with timestamps, documentation of every NIGO rejection with reason codes, documentation of how each NIGO was resolved, and evidence of who had access to client data during the transition. Undocumented NIGO resolution is a common exam finding.

**How does a 95% NIGO reduction change transition timelines?**
For a 500-account book at 20% NIGO rate, a 95% reduction means 10 accounts requiring resubmission instead of 100. If each resubmission adds two weeks, that's 20 weeks of cumulative delay eliminated — the difference between a 90-day transition and one that completes in under 30 days.

