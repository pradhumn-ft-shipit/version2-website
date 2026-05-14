---
title: "NIGO Rejection Patterns by Custodian: What Fidelity, Schwab, and Pershing Reject Most Often (And Why)"
topic: "Advisor Transitions & Repapering"
description: "NIGO rejections from custodians are the most common cause of advisor transition delays. Understanding each custodian's specific rejection patterns lets operations teams prevent them before submission."
author: "FastTrackr AI Team"
image: custodian-not-in-good-order-rejection-patterns-2026.jpg
imageAlt: "Operations team reviewing NIGO rejection data from multiple custodians during an advisor transition"
persona: "Consultants supporting transitions for operations (repapering)"
---

The irony of NIGO rejections is that most of them are predictable. They happen for the same reasons, at the same custodians, in the same account types, over and over again — and operations teams deal with them reactively every time instead of eliminating them at the source.

Not In Good Order (NIGO) is a custodian's way of saying a submitted transfer form has an error that prevents processing. The form gets returned. The transfer pauses. The operations team finds and fixes the error, gets the client to re-sign, and resubmits. Average time lost: 5–15 business days per NIGO.

For a 200-client transition with a 15–20% NIGO rate (typical for manual processes), that's 30–40 rejections. Which means weeks of added delay on a process that was already supposed to take 60–90 days.

Here's what actually causes NIGOs, how the major custodians differ, and how operations teams are eliminating them before submission.

## The Most Common NIGO Triggers (Across All Custodians)

Regardless of custodian, the same categories of errors drive the majority of NIGO rejections:

| NIGO Category | Estimated Frequency | Description |
|---|---|---|
| Missing signature | 25–30% | Client signature absent, wrong signature line, or unsigned required fields |
| Outdated address | 15–20% | Client address on form doesn't match custodian's current record |
| Missing/incorrect account number | 10–15% | Account number transcribed incorrectly or account number format mismatch |
| Incomplete beneficiary information | 10–12% | Beneficiary name, SSN, or relationship missing |
| Stale form | 8–10% | Custodian has updated form version; submitted version is outdated |
| Missing notarization | 5–8% | Certain account types (trusts, estates) require notarized signatures |
| Missing Medallion Guarantee | 4–6% | Required for transfers over specific dollar thresholds at some custodians |
| Incomplete new account application | 8–10% | Missing fields in new account opening paperwork at receiving custodian |

These categories account for roughly 90% of all NIGO rejections. Which means 90% of NIGOs are preventable with proper pre-submission validation.

## Custodian-Specific NIGO Patterns: What to Know

Each major custodian has its own form requirements, update cycles, and rejection sensitivities. Operations teams that understand these patterns can pre-empt the most common errors.

### Fidelity Institutional

Fidelity is known for strict address verification. If the address on a submitted ATA form doesn't exactly match Fidelity's records — including apartment number format, abbreviations (St. vs. Street), or zip code — the form will be rejected.

**Most common Fidelity NIGOs:**
- Address mismatch (most frequent across all custodians)
- Missing signature date (Fidelity requires date adjacent to signature, not just at the end of the form)
- Partial account number (Fidelity requires the full account number, including check digit)
- Outdated form version (Fidelity updates forms regularly; always verify you're on the current version)

**Prevention strategy:** Pull and verify the client's address directly from Fidelity's records before form population. Use Fidelity's current form downloads — not saved copies from previous transitions.

### Schwab Advisor Services

Schwab's rejection patterns tend to cluster around beneficiary designation completeness and trust account documentation.

**Most common Schwab NIGOs:**
- Incomplete beneficiary designation (Schwab requires full legal name, date of birth, relationship, and percentage for each beneficiary — partial information generates rejection)
- Trust document mismatch (trust accounts require documentation that matches the exact legal name and date of the trust on file)
- Missing Inherited IRA documentation (transfers of inherited IRAs require specific supporting documentation that varies by the inheritance structure)
- Joint account authorization (for joint accounts, Schwab requires both account holders' signatures; missing one always generates rejection)

**Prevention strategy:** Flag trust accounts and inherited IRAs for specialist review before form generation. Confirm beneficiary information completeness against Schwab's specific requirements before submission.

### Pershing (BNY Mellon)

Pershing is the primary custodian for many independent broker-dealers and OSJs, and its rejection patterns reflect the complexity of broker-dealer account structures.

**Most common Pershing NIGOs:**
- Medallion Guarantee requirements (Pershing's thresholds for Medallion Guarantee are sometimes lower than industry norms; confirm per-transfer thresholds before submission)
- BD-specific account type documentation (certain account types at independent BDs require additional firm-level authorization beyond the client signature)
- Transfer-in-kind vs. liquidate-and-transfer specification (Pershing requires clear specification of transfer method; ambiguous instructions generate rejection)
- Stale signature dates (Pershing has specific time windows within which form signatures must be dated; forms dated outside the window are rejected)

**Prevention strategy:** Confirm current Medallion Guarantee thresholds with your Pershing service team at the start of each transition. Build signature date tracking into your submission workflow to catch forms approaching expiration.

## How NIGO Rates Differ by Account Type

Not all accounts have the same NIGO risk. Operations teams that triage by account type can prioritize their pre-submission review effort.

| Account Type | NIGO Risk | Primary Causes |
|---|---|---|
| Standard individual brokerage | Low | Address mismatch, outdated form |
| Traditional / Roth IRA | Low-Medium | Beneficiary incompleteness |
| Joint account | Medium | Missing second signature |
| Trust account | High | Trust document matching, notarization |
| Inherited IRA | High | Supporting documentation requirements |
| Corporate/entity account | High | Multiple authorization requirements |
| Alternative investments | Very High | Transfer restrictions, unique form requirements |
| Employer-sponsored retirement plan | Very High | Plan administrator involvement required |

For a 200-client book, most accounts (60–70%) will fall into the low-to-medium risk categories. The high-risk accounts — trusts, inherited IRAs, entity accounts — require specialist handling but typically represent 15–25% of accounts.

## The Pre-Submission Validation Process That Eliminates Most NIGOs

The NIGO reduction approach that actually works is validation before submission, not correction after rejection. The workflow:

**Step 1: Data extraction and population**
Use transition automation to pull client information from existing records and pre-populate forms. AI-assisted data extraction reduces manual transcription errors that cause a significant portion of NIGOs.

**Step 2: Custodian-specific validation rules**
Apply validation rules for each custodian before the form is sent to the client for signature. Is the address matching custodian records? Are beneficiary fields complete per that custodian's requirements? Is the form on the current version?

**Step 3: Account-type screening**
Flag high-risk account types (trusts, inherited IRAs, corporate accounts) for specialist review before submission.

**Step 4: Pre-submission checklist**
For each form: confirm all required fields are complete, signature lines are clearly marked, date is within the custodian's acceptance window, and account numbers match custodian records.

**Step 5: Submission tracking with NIGO alert**
After submission, monitor transfer status with an automatic alert for any rejection within 24 hours. This is what compresses NIGO resolution from 5–15 days to 1–2 days.

FastTrackr AI builds this validation workflow into the form generation process. Every form is checked against custodian-specific rules before it's sent to the client — which is why NIGO rates on FastTrackr-supported transitions average 3–5%, compared to the 15–25% typical for manual processes.

## The Hidden Cost of High NIGO Rates

NIGO rejections don't just delay transitions. They create a cascade of secondary costs that are rarely captured in operations reporting:

**Client experience damage.** A client who signed a form, expected their account to transfer, and then gets a call that it's been delayed because of a paperwork error has a legitimately worse experience than a client whose transfer completed smoothly. In the delicate early weeks of a transition, when client loyalty is being re-established, this damage is real.

**Advisor confidence.** Advisors who go through high-NIGO transitions learn not to over-promise to clients. Over time, they learn not to actively recruit other advisors to the firm. The NIGO rate affects the recruiting culture of the whole organization.

**Compliance exposure.** Each NIGO creates a gap in the transfer timeline that compliance teams have to document. High NIGO rates raise questions about process quality during exams. Low NIGO rates indicate systematic validation — which is exactly what examiners want to see.

**Staff time.** NIGO resolution is one of the most time-intensive and low-value activities in transition operations. Every hour spent chasing down rejections is an hour not spent on the exceptions that actually require judgment.

Understanding and eliminating NIGO rejections is not an operational nicety. It's a business performance issue — and it's solvable.

---

**Frequently Asked Questions**

**What does NIGO mean in advisor transitions?**
NIGO stands for "Not In Good Order." It is a custodian's rejection of a transfer form due to errors or missing information. Common causes include missing signatures, address mismatches, outdated form versions, incomplete beneficiary information, and missing notarization or Medallion Guarantee where required.

**What is the average NIGO rejection rate for advisor transitions?**
For manual transition processes, NIGO rejection rates typically run 15–25%. With purpose-built transition automation that includes pre-submission validation, rates drop to 3–5%. FastTrackr AI-supported transitions consistently achieve NIGO rates in this lower range.

**Which custodians have the most specific NIGO requirements?**
All three major custodians — Fidelity, Schwab, and Pershing — have distinct NIGO patterns. Fidelity is particularly strict on address verification and signature dating. Schwab's most common rejections involve beneficiary completeness and trust documentation. Pershing's NIGO patterns cluster around Medallion Guarantee thresholds and BD-specific authorization requirements.

**How long does NIGO resolution take?**
Manual NIGO resolution typically takes 5–15 business days per rejection. Automated NIGO resolution workflows compress this to 24–48 hours by immediately identifying the error, retrieving the correct information, regenerating the form, and routing it for re-signature without the standard tracking lag.
