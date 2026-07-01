---
title: "ACATS Reject Codes Decoded: The Most Common NIGO Reasons in Advisor Transitions and How Pre-Validation Stops Them"
topic: "Advisor Transitions & Repapering"
description: "ACATS rejects cluster into a handful of predictable reason categories. Here is what each one means in an advisor transition and how pre-submission validation stops it before the reject."
author: "FastTrackr AI Team"
image: acats-reject-codes-decoded-nigo-pre-validation-hero.png
imageAlt: "ACATS Reject Codes Decoded: The Most Common NIGO Reasons in Advisor Transitions and How Pre-Validation Stops Them"
---

Most ACATS rejects in an advisor transition are not random. They fall into a small set of reason categories that repeat across every book, and nearly all of them are catchable before you ever hit submit. A reject means the delivering firm reviewed the transfer instruction and took exception inside the ACATS validation window, sending the account back to you as a NIGO. Fix the pattern, not the one-off, and your rebook rate drops.

ACATS runs on the National Securities Clearing Corporation's Automated Customer Account Transfer Service, a rule-governed system. Every reject carries a reason, and when you aggregate enough of them across a large transition, the same categories keep surfacing. Below is what they mean and where pre-submission validation removes each one.

## Why rejects concentrate in a few categories

An ACATS transfer is a structured handshake between the receiving firm and the carrying firm. The receiving firm submits a transfer initiation instruction; the carrying firm validates the account against its own records and either delivers the assets or takes exception. That exception is the reject. Because the validation checks the same fields every time, name, tax ID, account title, account type, asset transferability, the failures cluster in the same places.

This is why reject-code knowledge is operational leverage. Fixing a category that causes a small slice of your NIGOs is fine. Fixing one that causes a large slice is transformative. The mechanics of the reason codes themselves are covered in depth in our reference on [ACATS reject reason codes and how to eliminate them before submission](https://fasttrackr.ai/blog/acats-reject-reason-codes-eliminate-before-submission); this piece maps them to the pre-validation controls that stop each at the source.

## The reject categories that repeat

The exact code labels vary slightly by system, but in a transition the practical categories look like this.

| Reject category | What triggered it | Pre-validation control |
| --- | --- | --- |
| Tax ID / SSN mismatch | The TIN on the instruction does not match the carrying firm's record | Extract and confirm the TIN from a current statement before submission |
| Account title discrepancy | Registration or ownership wording differs between firms | Match the exact title, including trust and joint-registration language |
| Account type incompatibility | Sending an IRA into a taxable shell, or a mismatched retirement subtype | Confirm receiving account type maps to the source before opening |
| Documentation required | The carrying firm needs a signed form or LOA not on file | Pre-stage required paperwork tied to the account type |
| Nontransferable or restricted assets | Proprietary funds, alternatives, or restricted positions in the account | Flag nontransferable holdings early and plan a residual or liquidation path |
| Account flat / no assets | The account has already moved or holds nothing | Verify current positions before initiating |
| Duplicate in progress | A transfer for the same account is already open | Check for an in-flight ACATS before resubmitting |
| Invalid or missing signature | Signature missing, mismatched, or on the wrong party | Validate signer authority against the registration |

None of these require guesswork at the reject stage. Each is a data check you can run before the instruction leaves your queue.

## Where document intelligence removes the reject

The common thread is data accuracy: the instruction has to match the carrying firm's record exactly. That match lives on the client's current statements and account forms, which is precisely where manual intake introduces error. Reading a TIN, an account title, and a registration type off a PDF by hand, across dozens of accounts, is how title mismatches and TIN errors get typed in.

[Document intelligence](https://fasttrackr.ai/solutions/document-intelligence) extracts those fields directly from statements and forms, so the values on the transfer instruction come from the source document rather than a rushed rekey. Built into an [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions), that extraction feeds a pre-submission validation layer that flags a mismatch before you submit rather than after the carrying firm rejects. For a transition team clearing hundreds of accounts, that shift from post-reject rework to pre-submission catch is where the timeline compresses.

## Why this matters for concurrent, at-scale transitions

Reject volume scales with account volume. A single breakaway advisor moving one book can absorb a few rebooks by hand. A firm onboarding several advisors at once, or a consultant running transitions across multiple clients, cannot. That is where systematic pre-validation stops being a nicety and becomes throughput. Teams that run this discipline, [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) especially, treat the reject-category distribution as a live dashboard and spend their pre-submission time on the categories that actually drive their NIGOs.

The payoff shows up in the timeline and in retained assets. A cleaner first-pass submission means faster delivery, fewer client-visible delays, and less of the operational attrition that costs a book AUM. One worked example of that outcome is in this [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition). For the operations checklist that keeps NIGO low from day one, see our [first 72 hours operations checklist](https://fasttrackr.ai/blog/first-72-hours-advisor-transition-operations-checklist).

## FAQ

**What does an ACATS reject actually mean?**
It means the carrying firm reviewed your transfer instruction during the ACATS validation window and took exception rather than delivering the assets. The account comes back as a NIGO with a reason code telling you which field or condition failed, so you can correct and resubmit.

**Which ACATS reject reasons are most common in a transition?**
In practice, tax ID and SSN mismatches, account title discrepancies, account type incompatibilities, missing documentation, and nontransferable assets account for the bulk of rejects. All of them are data-matching or asset-transferability issues that can be checked before submission.

**Can software eliminate ACATS rejects entirely?**
No system removes every reject, because some depend on the carrying firm's records or on genuinely nontransferable assets. But pre-submission validation driven by document intelligence removes the large share caused by mismatched or mistyped data, which is where most avoidable NIGOs come from.

**How does pre-validation differ from fixing rejects after the fact?**
Fixing after the fact is rework: the reject has already cost you a cycle and a client-visible delay. Pre-validation checks the instruction against extracted source data before you submit, so the mismatch is caught and corrected inside your own queue instead of by the carrying firm.

