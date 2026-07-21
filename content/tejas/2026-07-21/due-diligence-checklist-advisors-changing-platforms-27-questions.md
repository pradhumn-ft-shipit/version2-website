---
title: "Due Diligence Checklist for Advisors Changing Platforms: 27 Questions to Ask Before You Sign With a New Broker-Dealer or Custodian"
topic: "Advisor Transitions & Repapering"
description: "Most advisor due diligence checklists cover payout and ownership and skip the questions that decide how painful your repaper will be. Here are 27 questions on Protocol, ACATS, NIGO, compliance records, and integration to ask before you sign."
author: "FastTrackr AI Team"
image: due-diligence-checklist-advisors-changing-platforms-27-questions-hero.png
imageAlt: "Due Diligence Checklist for Advisors Changing Platforms: 27 Questions to Ask Before You Sign With a New Broker-Dealer or Custodian"
---

**Before you sign with a new broker-dealer or custodian, run 27 due diligence questions across six areas: Protocol and data portability, ACATS and transfer mechanics, NIGO and pre-validation, compliance recordkeeping, integration depth, and economics. Most checklists cover pay and ownership. The questions below cover the thing that actually determines how fast and clean your book moves.**

Search "advisor due diligence checklist" and every result asks the same things: what is the payout, who owns the firm, can I keep my book, can I talk to references. Those questions matter and you should ask them. But they measure the deal, not the move. None of them tell you how painful the transition itself will be, which is decided by mechanics the standard checklist never mentions: whether both firms are Protocol members today, how the destination custodian behaves in ACATS, how it catches errors before they become rejects, and how compliance records survive the handoff. This checklist fills that gap. Twenty-seven questions, grouped by what they protect.

## Why the standard checklist misses the move

The economics of a move are visible on a term sheet. The operational reality is not, and it is where books get stuck. A transition that should take weeks stretches to months when accounts reject, data is rekeyed three times, and nobody confirmed the destination platform's transfer behavior before signing. The [ROI of advisor transition technology](https://fasttrackr.ai/blog/advisor-transition-technology-roi-cost-per-transition-benchmark) shows how directly slow repapering translates into revenue at risk, which is exactly why the mechanical questions belong in due diligence, not in the first painful week after you commit.

Here is the map of the six areas and what each set of questions protects.

| Area | Questions | What it protects |
|---|---|---|
| Protocol and data portability | 1-4 | What you can legally take and rebuild |
| ACATS and transfer mechanics | 5-9 | How fast accounts actually move |
| NIGO and pre-validation | 10-14 | Whether rejects are caught before submission |
| Compliance recordkeeping | 15-19 | Reg BI and books-and-records survival |
| Integration and data flow | 20-24 | Whether data flows once or is rekeyed |
| Economics and ownership | 25-27 | The net after every line-item cost |

## Protocol and data portability (questions 1 to 4)

The Protocol for Broker Recruiting, where both firms are members, lets you take exactly five client fields: name, address, phone, email, and account title. Membership is not permanent, and several large firms have withdrawn, which changes what you can take to nothing. Confirm the current state before you sign, not from last year's memory.

1. Is my current firm a Protocol member as of today, and is the destination firm a member?
2. If either firm is not a member, what is the destination firm's documented process for a compliant non-Protocol move?
3. What client data will I be rebuilding from scratch after the move, and who owns that rebuild?
4. Does my agreement with the new firm confirm I own the book and the client relationships?

Get the answers in writing. The full boundary of what the Protocol does and does not permit is laid out in the [Broker Protocol compliance checklist](https://fasttrackr.ai/blog/broker-protocol-compliance-checklist-what-you-can-take), and the data you cannot carry is the data your repaper has to reconstruct.

## ACATS and transfer mechanics (questions 5 to 9)

ACATS, the Automated Customer Account Transfer Service run by the NSCC, is the rail your accounts ride. A clean transfer completes in as little as five to six business days. The variable is not the rail, it is how the destination custodian participates and validates.

Custodian platforms vary widely on minimums, asset support, and integrations, as [Kitces' independent custodian comparisons](https://www.kitces.com/blog/best-ria-custodian-top-4-independent-platforms-and-second-tier-niche-providers/) document in detail, so treat this set as firm-specific rather than assuming parity.

5. Which custodians and clearing firms does the platform support, and can I keep my current custody relationship if I want to?
6. Is the destination custodian a full ACATS participant for all the asset types in my book, including any non-standard positions?
7. How does the platform handle partial transfers and residual sweeps?
8. What is the destination's typical time from account open to funded, based on real advisor data, not the sales number?
9. How are restricted or non-transferable assets flagged and handled?

Custodians differ more than advisors expect. The [Schwab, Fidelity, and Pershing comparison on forms and ACATS reject behavior](https://fasttrackr.ai/blog/schwab-fidelity-pershing-form-acats-reject-comparison) is the reference for how much this varies in practice, and the differences are exactly what questions 5 through 9 surface.

## NIGO and pre-validation (questions 10 to 14)

NIGO, Not In Good Order, is the catch-all reject for anything missing, mismatched, or out of policy. Your NIGO rate is the single biggest driver of how long your transition takes, because every reject restarts the clock for that account. The question is whether the platform prevents NIGO or just processes it.

10. Does the platform validate account data in real time as it is entered, or only reject after submission?
11. What is the platform's documented NIGO rate for inbound transfers?
12. Can the system read existing statements and account forms and pre-fill new-account paperwork?
13. How are title mismatches, missing consents, and beneficiary gaps caught before submission?
14. What error-checking happens between my input and the custodian's queue?

This is where purpose-built technology separates from generic onboarding. FastTrackr's [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) reads statements and forms to catch the reject drivers before anything is submitted, which is the difference between a clean first batch and a week of rework on the accounts that bounce.

## Compliance recordkeeping (questions 15 to 19)

Your recordkeeping obligations do not pause during a move. [Reg BI](https://www.sec.gov/regulation-best-interest) recommendation records and books-and-records duties under SEC Rule 17a-4 apply across the transition, and the records you cannot lose are the ones a rushed move is most likely to drop.

15. How does the platform preserve Reg BI recommendation and communication records across the transfer?
16. What is the platform's approach to Rule 17a-4 retention, and does it use compliant storage?
17. Which records must I retain from my former firm, and how do I obtain them cleanly?
18. Is there an audit trail for every repapering action, exportable for an examination?
19. How does the platform support FINRA Rule 3210 consents for outside accounts?

The documentation obligations across the whole move are detailed in the [Reg BI and Rule 17a-4 transition documentation guide](https://fasttrackr.ai/blog/reg-bi-rule-17a4-advisor-transition-documentation). Ask questions 15 through 19 before you sign, because retrofitting compliant records after a sloppy transfer is expensive and sometimes impossible.

## Integration and data flow (questions 20 to 24)

The cost you feel every day after the move is rekeying. If account data has to be entered separately into the custodian, the CRM, the portfolio system, and the planning tool, you are paying for the same data four times and multiplying the chance of a mismatch that becomes a NIGO.

20. Does account data flow once from a single source, or is it rekeyed across systems?
21. What are the native integrations between the custodian, CRM, and portfolio accounting?
22. Where are the known field-mapping failure points between these systems?
23. Can I see a live demo of the actual data flow, not a slide?
24. Who owns integration maintenance when a custodian changes a field?

Integration depth is measurable before you commit. A structured way to score it is the [custodian integration readiness scorecard](https://fasttrackr.ai/blog/custodian-integration-readiness-scorecard-transition), which turns questions 20 through 24 into a rating you can compare across firms.

## Economics and ownership (questions 25 to 27)

Only now, with the mechanics understood, do the economics mean anything. A high payout on a platform that makes your book slow and error-prone to move is not the deal it looks like.

25. What is my true net payout after platform fees, technology costs, and every line item?
26. Who owns the firm, what is the ownership horizon, and how has that changed recently?
27. Can I speak with three advisors who moved to this platform in the last year, not handpicked references, and ask about their transition specifically?

## How to use these 27 questions

Score each firm you evaluate against all 27, not just the four or five a recruiter volunteers. A platform that answers the ACATS, NIGO, compliance, and integration questions crisply and in writing is telling you the move will be clean. A platform that deflects those questions toward payout is telling you something too. For advisors and teams who want the mechanics handled by design rather than by hope, a purpose-built [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is what turns good answers on this checklist into a move that actually runs that way, and [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) use exactly this kind of structured diligence to steer clients away from platforms that look good on payout and stall on repaper. For a picture of the clean version once the mechanics check out, the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) walks through a real move.

## Frequently asked questions

**Why do standard advisor due diligence checklists skip these questions?** Because most are written to evaluate the business relationship, payout, ownership, culture, and support, which is the recruiter's frame. The transition mechanics live in operations, so they rarely make the sales-stage checklist even though they determine how fast and cleanly your book actually moves. That gap is why so many advisors are surprised by a slow, reject-heavy repaper.

**Which of the 27 questions matter most?** The NIGO and ACATS sets, questions 5 through 14, because they most directly control transition speed and rework. A platform that validates in real time and participates fully in ACATS across your asset types will move your book in a fraction of the time of one that rejects after submission. Protocol status, questions 1 and 2, is a hard gate: get it wrong and nothing else matters.

**How do I verify a platform's NIGO rate claim?** Ask for the documented inbound-transfer NIGO rate in writing, then triangulate it against references who moved recently, question 27. If a platform cannot state its NIGO rate or will not put it in writing, treat that as the answer. Real numbers exist for teams that track them, and the ones that track them are usually the ones worth joining.

**Do these questions apply to a custodian change as well as a broker-dealer change?** Yes. The Protocol and U4 or U5 questions are specific to broker-dealer and registration moves, but the ACATS, NIGO, compliance recordkeeping, and integration questions apply to any custodian change, including an RIA moving its book from one custodian to another. Adjust questions 1 through 4 to your situation and keep the rest.

**What should I get in writing versus verbally?** Get Protocol status, NIGO rate, ACATS participation by asset type, compliance record handling, and net payout in writing. Verbal assurances on mechanics have a way of not surviving contact with your first transfer batch. A firm confident in its operations will document them.

