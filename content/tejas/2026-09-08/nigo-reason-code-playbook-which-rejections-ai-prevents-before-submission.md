---
title: "The NIGO Reason-Code Playbook: Which Transition Rejections AI Can Prevent Before Submission"
topic: "Advisor Transitions & Repapering"
description: "Most transition rejects trace to a short list of NIGO reason codes. Here is the full taxonomy, mapped to which ones AI can catch before submission by validating against custodian data, and which ones still need a human to sign off."
author: "FastTrackr AI Team"
image: nigo-reason-code-playbook-which-rejections-ai-prevents-before-submission-hero.png
imageAlt: "The NIGO Reason-Code Playbook: Which Transition Rejections AI Can Prevent Before Submission"
---

**Most transition rejects trace to a short list of causes: name and title mismatches, SSN errors, wrong account numbers, account-type mismatches, missing signatures, and ineligible assets. AI can pre-validate the data-driven ones against custodian records before submission and flag the rest for a human. It cannot resolve a judgment call, so review stays mandatory.**

A book transfer does not usually die from one big problem. It bleeds out through dozens of small ones, each a form that came back not in good order, each triggering a correction, a re-sign, and a resubmission that adds days. On a solo move those delays are an annoyance. On a 300-account repaper running against a client-retention clock, a 20 percent NIGO rate is the difference between a book that lands in weeks and one that drags for a quarter while assets sit at the old firm. The good news is that NIGO is not random. It comes from a knowable set of reason codes, and once you sort those codes by cause, it becomes obvious which ones a machine can catch before submission and which ones will always need a human. This is that map.

## Why NIGO is a timeline problem, not a paperwork problem

The instinct is to treat a rejection as a clerical hiccup. The reality is that every NIGO is a loop, and loops are where transition timelines go to die. A rejected transfer has to be identified, diagnosed, corrected, re-signed by the client if a signature was involved, and resubmitted, after which it re-enters the custodian's queue behind everything else. Each cycle can add several business days, and a form can go NIGO more than once if the correction introduces a new error.

At scale the loops compound. The single largest driver of an at-scale timeline is client repapering volume, and signature collection is where most large repapering projects stall, because you are coordinating with hundreds of individual clients who each have their own schedule and urgency. A NIGO on a form you already fought to get signed sends you back to that same unresponsive client for a second signature, and the second ask is always slower than the first. This is why cutting the reject rate does more for the timeline than any other single lever, and why it pays to know exactly how many days each reject actually costs, laid out in [the ACATS resubmission loop](https://fasttrackr.ai/blog/the-acats-resubmission-loop-how-many-days-each-reject-costs-and-where-ai-breaks-the-cycle). The mechanics of how ACATS itself moves an account, and where the reject-resubmit cycle sits inside it, are governed by FINRA's automated transfer rule and operated through DTCC's system, detailed in the [DTCC ACATS reference material](https://www.dtcc.com/-/media/Files/Downloads/Clearing-Services/ACATS/19516Nonstandard-Transfers-Reference-Manual.pdf).

## The reject-code taxonomy: what actually stalls a transfer

NIGO reasons cluster into three families, and the family a reject belongs to tells you whether software can prevent it. A data mismatch is a comparison problem, which machines are good at. A completeness failure is a checklist problem, which machines are also good at. An eligibility failure is a judgment problem, which is where a human has to stay. Sorting every reject into one of those three buckets is the whole playbook.

| Reject reason | Family | What triggers it | AI-preventable before submission? |
|---|---|---|---|
| Name or title mismatch | Data mismatch | Registration on the new form does not match the delivering firm's record, including name variants, suffixes, and trust titles | Partial. AI flags the mismatch against source records; a human resolves the correct legal title |
| SSN or tax ID mismatch | Data mismatch | A transposed or wrong tax ID versus the custodian's record | Yes. Field-level validation against source data catches it |
| Account number mismatch | Data mismatch | Wrong, incomplete, or reformatted delivering account number | Yes. Format and check against the statement or custodian feed |
| Account-type mismatch | Data mismatch | Registration types do not correspond, such as an IRA directed into a taxable account | Yes. Rule check on the paired registration types |
| Missing or invalid signature | Completeness | A required signature, or spousal or custodial consent, left blank or in the wrong place | Yes for detection. AI confirms every required signature block is present before the form goes out |
| Missing required field or document | Completeness | A blank mandatory field, an unattached statement, an absent disclosure | Yes. Completeness validation against the form's field map |
| Outdated or wrong form version | Completeness | An old custodian form or the wrong form for the registration | Yes. AI selects the current custodian-specific form |
| Ineligible account type | Eligibility | An asset ACATS cannot carry, such as a 401(k), annuity, or CD routed as a brokerage transfer | Flag only. AI warns; a human reroutes to the correct process |
| Non-transferable or restricted asset | Eligibility | A proprietary fund, a position with a margin debit, or a restricted security | Flag only. Requires a human decision on liquidate, retain, or exception |

## The data-mismatch cluster: AI's strongest zone

Data mismatches are the highest-volume and most automatable family. A tax ID that is off by one digit, an account number missing its final characters, an IRA pointed at the wrong destination registration: these are all comparisons between what the new form says and what the delivering firm's record says. Reporting on ACATS rejects repeatedly puts title mismatch, tax ID mismatch, and a margin debit among the most common causes, and the single most common cause of a NIGO overall is simply that a required field was left blank or filled inconsistently, as industry NIGO breakdowns describe.

This is exactly the work AI pre-submission validation is built for. When a tool extracts the client's data from the source statement or CRM and cross-checks every field against the destination form and, where available, the custodian's own record, the transposed SSN and the truncated account number never leave the building. The technical core is document extraction that reads the incoming statements and forms and normalizes the fields, which is what [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) does before a form is ever queued. FastTrackr reports that this kind of pre-submission validation cuts NIGO sharply; treat that as the vendor's reported result rather than an industry constant, but the direction is not controversial: catching a field error before submission is always cheaper than catching it in a reject queue.

The one caveat inside this cluster is the name and title line. A raw string comparison flags that "Robert A. Smith TTEE" does not match "Bob Smith Revocable Trust," but it cannot decide which one is legally correct. That is where the machine hands off.

## The completeness cluster: checklist work AI does not get tired of

Completeness failures are missing signatures, blank mandatory fields, unattached documents, and stale form versions. Humans miss these because the checklists are long, custodian-specific, and mind-numbing, which is precisely why they are ideal for automation. A validation engine that holds the current field map for each custodian's forms can confirm, before anything is sent, that every required signature block is populated, every mandatory field is filled, every required attachment is present, and the form is the current version for that registration.

The signature point deserves emphasis because of its timeline cost. A missing-signature NIGO does not just require a correction; it requires going back to the client, and client responsiveness is the most variable input in the entire process. Preventing a single signature reject can save more calendar time than fixing ten internal data errors, because it removes a round trip through the slowest party in the chain. Using the current custodian form and confirming e-signature eligibility up front also matters, since custodians differ on wet-signature versus e-signature acceptance for specific form types, and the wrong choice is its own reject.

## The eligibility cluster: where the human has to stay

The third family is different in kind. An ineligible account type, a proprietary fund that will not transfer in kind, a position carrying a margin debit that has to be resolved first: these are not data errors to be corrected, they are decisions to be made. ACATS moves brokerage assets, and accounts like 401(k)s, annuities, and CDs cannot ride it, so a transfer coded that way is not a form to fix but a case to reroute. A restricted security or a proprietary position forces a choice to liquidate, retain, or seek an exception, with tax and suitability consequences that sit squarely under Reg BI.

AI's role here is to flag, not to resolve. A tool should surface, early, that an account holds a non-transferable asset or an ineligible type, so the exception is handled at the front of the project instead of surfacing as a reject in week six. But the decision, and the client conversation behind it, belongs to a licensed human. This is the honest boundary of automation in a transition: it removes the volume of avoidable, data-driven rejects so that the team's attention is free for the judgment calls that actually require it.

## Where AI fits the reject-resubmit cycle, step by step

Put the clusters together and the AI contribution to the cycle is specific, not a vague promise to speed things up:

- **Before submission**, extract client and account data from source statements and the CRM, then validate every field against the destination form and the custodian's requirements, so data-mismatch and completeness rejects are caught while they are still cheap to fix.
- **At form selection**, choose the current custodian-specific form and confirm signature-type eligibility, removing outdated-form and wet-versus-e-signature rejects.
- **At triage**, flag eligibility problems and non-transferable assets up front, routing them to a human instead of a custodian queue.
- **After a reject that still occurs**, read the return reason, map it to its cluster, and route it: auto-correctable data errors back through validation, judgment cases to a person.

None of this includes auto-submitting to a custodian without review, and it should not. The reliable pattern is that AI drafts and validates while a licensed professional signs off, especially on anything that bears a name variant, a trust registration, or a beneficiary. That division is the same one that lets a firm move a book faster without loosening control, and it is the backbone of the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) approach to repapering. Firms running high-volume moves under it have reported large NIGO reductions as a claimed outcome; the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) documents one such result.

## What this means for how you staff a repaper

The reason-code map has a staffing implication that operations leaders and [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) can act on directly. If most of your NIGO volume is data-mismatch and completeness, then most of it is preventable by validation, which means the right move is to put automation on the front of the pipeline and reserve your experienced people for the eligibility exceptions and the client conversations. A team that spends its days retyping account numbers is a team not working the trust registrations and beneficiary decisions that actually need a human. The playbook is not to add headcount to fix rejects faster. It is to prevent the preventable family entirely and point the humans at the family only they can handle. Knowing which specific fields generate the bulk of your rejects is the fastest way to target that prevention, the subject of [NIGO root-cause analysis](https://fasttrackr.ai/blog/nigo-root-cause-analysis-finding-the-repaper-fields-that-cause-most-of-your-acats-rejects).

## The takeaway

NIGO is a solvable problem because it is a categorized one. Sort every reject into data mismatch, completeness, or eligibility, and the correct tool for each falls out: validate the first two against source and custodian data before submission, and route the third to a human early. AI earns its place by removing the high-volume, avoidable rejects that stall a timeline, not by pretending to make judgment calls it cannot make. The firms that move books in weeks are not the ones with the biggest correction teams. They are the ones whose forms rarely come back at all.

## FAQ

### What are the most common NIGO reason codes in an account transfer?

The recurring causes cluster into data mismatches, completeness failures, and eligibility problems. In practice that means name or title mismatches, tax ID errors, wrong or reformatted account numbers, account-type mismatches, missing or misplaced signatures, blank required fields, outdated forms, and assets that cannot transfer through ACATS at all, such as annuities or 401(k)s. Reporting on ACATS rejects consistently names title mismatch, tax ID mismatch, and a margin debit among the most frequent, and a blank required field is the single most common underlying cause.

### Which NIGO rejects can AI actually prevent before submission?

The data-mismatch and completeness families, which are the high-volume ones. A validation engine can cross-check the tax ID, account number, and paired registration types against the source statement and custodian record, and confirm that every required field and signature block is present on the current version of the form, all before the form is submitted. What it cannot prevent is an eligibility problem, like a non-transferable asset, because that requires a human decision rather than a correction.

### Does AI submit corrected forms to the custodian automatically?

It should not, and a well-designed workflow does not. AI extracts data, validates it, selects the right form, and flags exceptions, but a licensed professional reviews and signs off before submission, particularly on anything involving a name variant, a trust registration, or a beneficiary. The value is in catching errors early and cutting the volume of avoidable rejects, not in removing the human from the custodian handoff. Framing it as fully automated submission with no review overstates what is safe or accurate.

### How much does reducing NIGO actually shorten a transition?

More than almost any other single change, because every reject is a multi-day loop and signature-related rejects send you back to the slowest party in the chain, the client. Cutting the reject rate removes those loops before they happen, which compounds across hundreds of accounts. Vendors report large reductions in NIGO from pre-submission validation; treat specific percentages as the vendor's claimed results, but the mechanism, preventing a reject is cheaper than fixing one, holds regardless of the exact number.

### Why can't a machine resolve a name or title mismatch on its own?

Because deciding the correct legal registration is a judgment, not a comparison. Software can instantly flag that the name on the new form does not match the delivering firm's record, including suffixes, variants, and trust titles, but it cannot know whether "Bob Smith" and "Robert A. Smith TTEE" refer to the same legally correct registration, or which version the custodian will accept. It surfaces the discrepancy early so a human resolves it before submission, which is the right division of labor for anything that carries legal or beneficiary consequences.

