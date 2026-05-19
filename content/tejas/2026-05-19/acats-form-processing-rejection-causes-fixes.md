---
title: "ACATS Rejections: 7 Causes of Custodian Pushback and How to Fix Each One"
topic: "Document Processing & Back-Office"
categoryId: document-processing-and-back-office-automation
description: "ACATS transfers fail for the same seven reasons over and over again. This is the operations team's reference for catching each one before submission and what to do when a custodian rejects anyway."
image: acats-form-processing-rejection-causes-fixes.jpg
imageAlt: Operations specialist reviewing an ACATS rejection report on a monitor with custodian logos visible
persona: Operations Directors at RIAs and Broker-Dealers
author: FastTrackr AI Team
---
## The 60-second answer

The Automated Customer Account Transfer Service (ACATS) rejects somewhere between 15 and 25 percent of transfers on first submission across the industry. Seven causes account for almost all of them: name and address mismatches, title mismatches, account-number errors, illegible signatures, missing or stale signature guarantees, ineligible securities, and timing collisions with corporate actions. Each is preventable with a pre-submission check the operations team can run in under two minutes per transfer.

## Why ACATS rejection rates have not improved in 20 years

ACATS has been live since 1985. The standard turnaround is six business days. And the industry-wide first-pass rejection rate has barely moved since the early 2000s.

The reason is structural. The system compares the data on a transfer-initiation form to the data on file at the delivering custodian, and rejects on any meaningful mismatch. The receiving firm controls the form. The delivering firm controls the record-of-truth. Neither sees the other's data before the form is submitted, so any drift between the two becomes a rejection.

For operations teams, that means most rejections are not exotic problems. They are the same seven small problems repeating across thousands of transfers.

## The seven causes, in rough order of frequency

### 1. Name mismatch between the new application and the delivering custodian

Maria Garcia opens an account with [FastTrackr](/) Advisors and signs "Maria Garcia." Her account at the delivering custodian is "Maria L. Garcia." Two characters different — and the transfer is rejected.

**Fix before submission:** Pull the most recent statement from the delivering firm and copy the name field character-for-character into the new application. Suffixes, hyphens, middle initials, married-name changes, and Jr./Sr./III all matter.

### 2. Address mismatch

Especially common when a client recently moved. The delivering firm has the prior address; the new firm has the current one.

**Fix before submission:** Either match the delivering firm's address exactly on the transfer form (and let the address update come through after the transfer settles), or do a documented address change at the delivering firm first.

### 3. Account title or registration mismatch

A joint account on one side, an individual account on the other. A revocable trust at one custodian, an individual account at the other. ACATS will reject any transfer where the registration does not match.

**Fix before submission:** Verify the *current* registration at the delivering firm — not what the client thinks the registration is. The two are different surprisingly often.

### 4. Account number error

One transposed digit. The form goes through, the receiving firm's system accepts it, the delivering firm cannot find the account, and the transfer rejects with a "Not in Good Order" code.

**Fix before submission:** Have the client provide a recent statement or the account-detail screen from the delivering firm's portal. Do not let the client type the account number from memory.

### 5. Signature problems

Three sub-causes here: illegible signatures, signatures that do not match the signature card on file, and missing Medallion signature guarantees for accounts above the guarantee threshold (typically $250,000, though it varies by custodian and account type).

**Fix before submission:** Use a digital signature platform that produces a clean PDF signature. For account values above the threshold, route to a Medallion guarantor — not a notary — before submission.

### 6. Ineligible securities in the account

ACATS handles cash, equities, mutual funds, ETFs, options, and most fixed income. It does not handle proprietary fund classes that the receiving firm does not custody, non-transferable annuities, certain limited partnerships, or unsettled trades. If any of these are in the account, the whole transfer may bounce.

**Fix before submission:** Run the holdings list against the receiving firm's accept-list before the client signs. Liquidate or transfer separately anything that will not move.

### 7. Corporate actions in progress

A pending dividend, a tender offer in process, a stock split that just executed — any of these can lock the position out of ACATS for the duration of the corporate action.

**Fix before submission:** Check for pending corporate actions on the holdings. If one is in flight, wait until it settles before initiating the transfer.

## A two-minute pre-submission checklist

Operations teams that have cut their rejection rate below 5 percent share one habit: they run a short, fixed checklist on every transfer before it is submitted to ACATS.

- Name on transfer form matches name on most recent statement, character-for-character
- Address on transfer form matches address on most recent statement
- Registration type matches at both firms
- Account number verified against the statement, not the client's recollection
- Signatures legible and matched to signature card
- Medallion guarantee present where required by the delivering firm
- Holdings list filtered against the receiving firm's accept-list
- No corporate actions in flight on transferable positions

A team can run this checklist in 90 seconds per transfer. The time saved on rejected-transfer rework is roughly 30 minutes per transfer, every time the checklist catches a problem.

## What to do when a rejection happens anyway

About 5 percent of transfers will still reject even with a clean checklist — usually because of something the receiving firm could not have known. When the rejection notice arrives:

1. **Read the rejection code, not just the email.** ACATS rejection codes are specific; the email summary is often misleading.
2. **Correct at the source, not on the form.** If the delivering firm has the wrong address, update it there. Re-submitting with corrected data on the form will not fix the underlying record.
3. **Re-submit fast.** Most rejection cycles add three to five business days. Treat the rejection notice as an urgent operations ticket, not a "we'll get to it tomorrow" item.
4. **Log the cause.** A team that tracks the cause of every rejection learns where its process is breaking. A team that does not track will see the same rejection every quarter.

## What changes when this is automated

The seven causes above are pattern-matchable. Software can compare the new application data against the most recent statement at the delivering firm and flag mismatches before the form is signed. Software can check the holdings list against the receiving firm's accept-list. Software can detect corporate actions in flight.

Operations teams using purpose-built transition technology for ACATS pre-checks routinely run first-pass rejection rates between 2 and 5 percent — roughly a quarter of the industry average. The cost is the upfront integration; the return is hundreds of hours per year not spent re-submitting transfers that should have gone through the first time.

## FAQ

**How long does a typical ACATS transfer take when nothing goes wrong?**
Six business days from initiation to settlement is the standard. Day one is initiation, day six is settlement. A rejection adds three to five business days to that cycle.

**What is the difference between ACATS and a non-ACATS transfer?**
ACATS is for full or partial transfers of brokerage accounts at firms that participate in the system. Non-ACATS transfers — for assets like alternative investments, certain insurance products, or accounts at non-participating firms — use paper forms and manual processing, and typically take three to six weeks.

**Can a Medallion signature guarantee be skipped if the client and the advisor are both on-site?**
No. The Medallion guarantee is a fraud-prevention mechanism required by the delivering firm, not the receiving advisor. It must be obtained from an authorized Medallion participant.

**Why do partial transfers reject more often than full transfers?**
Partial transfers introduce a security-by-security comparison instead of an account-level comparison. Each position is checked for eligibility, current price, and cost-basis carryover. More fields, more places to mismatch.

**Does ACATS handle cost basis automatically?**
Yes — since 2011, basis information is transmitted with covered securities under the Emergency Economic Stabilization Act rules. But basis errors are still common, and the receiving firm should reconcile basis within 30 days of settlement.


**Related:** [Meeting Assistant](/solutions/meeting-assistant) · [Advisor Transitions Platform](/solutions/advisor-transitions) · [For Transition Consultants](/who-we-serve/transition-consultants)

