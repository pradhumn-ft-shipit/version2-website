---
title: "Reg BI During a Breakaway: The Best-Interest Gaps AI Flags Before a Form Reaches the Custodian"
topic: "Advisor Transitions & Repapering"
description: "Not every account move in a breakaway is a recommendation, but the ones that are trigger Reg BI and PTE 2020-02 documentation. Here is which transition events cross the line, the file each owes, and where AI flags the gap before submission."
author: "FastTrackr AI Team"
image: reg-bi-during-a-breakaway-the-best-interest-gaps-ai-flags-before-a-form-reaches-the-custodian-hero.png
imageAlt: "Reg BI During a Breakaway: The Best-Interest Gaps AI Flags Before a Form Reaches the Custodian"
---

**Not every account move in a breakaway is a recommendation. But the moment an account type changes, a retirement account rolls over, or a position is liquidated and rebought, Reg BI and PTE 2020-02 attach and demand written best-interest documentation. AI flags which accounts cross that line and what each owes before submission. A human writes the rationale.**

A breakaway advisor tends to treat repapering as one undifferentiated pile of forms: get the client to sign, get the account to the new custodian, move on. From a compliance standpoint that pile is not uniform. Some accounts move like-for-like and carry no new best-interest obligation. Others quietly become recommendations the instant a detail changes, and each one owes a documented rationale a regulator can later ask to see. The danger is that the two look identical on the desk, so the accounts that needed a file get processed like the ones that did not, and the gap surfaces only in an exam. This is how to tell them apart, what each owes, and where automation catches the difference before submission. It is informational, not legal advice, and your firm's policies and the rules themselves govern.

## When a book move becomes a recommendation

The threshold question under Regulation Best Interest is whether you made a recommendation to a retail customer. Moving a book does not automatically clear that bar. As FINRA's overview of [Regulation Best Interest](https://www.finra.org/rules-guidance/key-topics/regulation-best-interest) frames it, the standard attaches to recommendations of securities transactions and, importantly, to recommendations of account types. A repaper that carries the same positions into the same kind of account, with the client following the advisor by their own choice, sits closest to a non-recommendation. The moment you change what the account is or what it holds, you are recommending something, and the obligation follows.

That distinction is the whole game, and it is subtle enough that it deserves its own treatment. The line between a repaper that is not a recommendation and one that is, and the best-interest file the latter demands, is worked through in [when a repaper is not a recommendation](https://fasttrackr.ai/blog/when-a-repaper-is-not-a-recommendation-the-reg-bi-best-interest-file-a-breakaway-advisor-still-has-to-build). Read it as the companion to this piece, because getting the classification wrong is what creates the documentation gap in the first place.

## The four Reg BI obligations, applied to a transition

Reg BI is built on four component obligations, and each one lands somewhere specific in a breakaway. Naming them keeps the review from collapsing into a vague sense that compliance was handled.

- **Disclosure.** The client must receive the required relationship disclosures, including Form CRS, at or before the recommendation. In a breakaway this is easy to miss because the relationship is being re-established at a new firm and the delivery has to actually happen, not be assumed from the old one.
- **Care.** The recommendation must be in the client's best interest based on their profile, considering reasonable alternatives. When you move a client from a commission account to a fee-based one, the alternative of leaving it as-is is part of the analysis.
- **Conflict of interest.** Conflicts must be identified and addressed, and a move that changes how you are paid is a conflict that has to be surfaced, not buried in the enthusiasm of the launch.
- **Compliance.** The firm must have written policies reasonably designed to achieve compliance, which at a new RIA or independent shop means the transition workflow itself has to build the documentation in, not bolt it on later.

None of these is exotic. What makes them fail in a transition is volume and speed: a book of hundreds of accounts moving under deadline is exactly the condition under which a required disclosure or a care rationale gets skipped on the handful of accounts that needed it.

## The events that trip the best-interest requirement

Here is the practical map. For each common transition event, does it constitute a recommendation, what documentation does it owe, and where can automation catch a missing file before the packet goes out.

| Transition event | Recommendation? | What it owes | Where AI flags it |
|---|---|---|---|
| Same positions into the same account type | Usually not, if client-directed | Standard new-account records | Confirms account type and holdings are unchanged |
| Brokerage to advisory (fee-based) change | Yes | Reg BI care file plus, if retirement, PTE 2020-02 written reasons | Detects the account-type change across the book |
| IRA or retirement rollover | Yes, to a retirement investor | PTE 2020-02 written specific reasons and disclosures | Flags the account as retirement and rollover-type |
| Liquidate and rebuy a position | Yes, per position | Best-interest rationale for the transaction and tax analysis | Flags positions not moving in-kind |
| Missing Form CRS delivery | N/A | Proof of delivery at or before the recommendation | Detects no CRS on file for a new relationship |

The value of the table is that it turns a judgment problem into a triage problem. You do not have to remember which accounts need a file; you sort the book by these events and handle the ones that light up. The in-kind versus liquidate decision in particular carries both a tax and a Reg BI consequence, which is why it should never be made as a pure operations choice.

## PTE 2020-02: the retirement-account file you still owe

The sharpest edge in a breakaway is retirement money. The Department of Labor's Prohibited Transaction Exemption 2020-02 governs rollover and account-type-change recommendations to retirement investors, and it asks for more than Reg BI alone. As Kitces lays out in its guide to [complying with PTE 2020-02](https://www.kitces.com/blog/ira-401k-rollovers-pte-2020-02-erisa-fiduciary-dol-prohibited-transaction-exemption/), the exemption requires a fiduciary acknowledgment and, critically, written documentation of the specific reasons why the rollover or account-type change is in the retirement investor's best interest, retained for a defined multi-year period.

Two traps recur. First, advisors assume a trustee-to-trustee IRA transfer is not a rollover and therefore owes nothing, when the recommendation to move can itself trigger the analysis; the nuance is unpacked in [IRAs in a repaper and the PTE 2020-02 file you still owe](https://fasttrackr.ai/blog/iras-in-a-repaper-why-a-transfer-is-not-a-rollover-and-the-pte-2020-02-file-you-still-owe). Second, the written reasons have to be specific to the client, not a boilerplate paragraph pasted across the book, because a generic rationale is exactly what a regulator discounts. Legal analysis of FINRA's focus on account recommendations and rollovers shows this is an active examination priority, not a dormant rule.

The retention side is where a breakaway most often gets caught later. The documentation is not a one-time hurdle cleared at submission; it is a books-and-records artifact that has to survive for years and be retrievable on demand in an exam. During a transition, that means the best-interest file has to be captured and stored at the moment the account moves, not reconstructed months afterward from memory when the reviewer has already lost the context. A file built at the point of the move is defensible. A file assembled retroactively to answer an inquiry rarely reads that way, because the reasoning it records was never contemporaneous with the decision.

## Where AI flags the gaps before the form goes out

This is the wedge, and it is a flagging role, never a signing one. In a book move, AI reads the incoming statements and forms and classifies each account by the events above: it detects an account-type change from brokerage to advisory, identifies which accounts are retirement and therefore in PTE territory, spots positions slated to liquidate rather than transfer in-kind, and checks whether a Form CRS delivery is on file for the re-established relationship. Turning a stack of statements into these structured, checkable attributes is what [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) does, and running that classification across an entire book so no triggering account slips through is the job of an [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) rather than a manual review that fatigues at account fifty.

What the machine produces is a worklist: these accounts crossed a best-interest threshold, here is the documentation each one is missing, review and complete before submission. That is genuinely useful, because the failure mode in a fast transition is not a wrong rationale, it is a missing one on an account nobody flagged. FastTrackr AI describes results like a 95 percent reduction in not-in-good-order rejects from this kind of pre-submission checking, a figure that reflects FastTrackr's own reported outcomes rather than an independent industry benchmark, and the same completeness logic that catches a mechanical NIGO is what catches a missing compliance file. A worked example across a real book is in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Where the human must stay

AI flags the gap. It does not fill it with judgment. The substantive best-interest determination, the actual reasons a rollover or an account-type change serves this specific client, is the advisor's professional judgment and cannot be generated by software without becoming the boilerplate that regulators discount. A human owns the care analysis, the consideration of reasonable alternatives, the conflict disclosure, and the final attestation that the file is complete and accurate before anything reaches the custodian. The machine tells you which accounts need a file and what is missing from each; a person writes the file and signs it. For firms and [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) running many moves at once, that division is what makes the compliance review scale without either drowning the reviewer or letting a triggering account through unexamined.

## The takeaway

Treat a breakaway book as two populations, not one. The like-for-like accounts move on the operational track. The accounts that changed type, rolled over, or liquidated a position move on the compliance track, and each owes a specific, client-level best-interest file under Reg BI and, for retirement money, PTE 2020-02. The mistake is letting the two blur under deadline pressure until a missing file surfaces in an exam. Let AI sort the book and build the worklist of what each triggering account owes, keep the advisor writing the rationale and signing off, and the documentation gets built while the book is still on your desk, not reconstructed after a regulator asks.

## FAQ

### Is repapering a client's account always a Reg BI recommendation?
No. A repaper that moves the same positions into the same type of account, with the client choosing to follow the advisor, sits closest to a non-recommendation and carries no new best-interest obligation beyond standard new-account records. The obligation attaches when you change what the account is or what it holds: a brokerage-to-advisory switch, a retirement rollover, or liquidating and rebuying a position. Because the triggering and non-triggering accounts look identical on the desk, the safest practice is to classify every account by these events rather than assume the whole book is exempt.

### What does PTE 2020-02 require in a breakaway that Reg BI does not?
For rollover and account-type-change recommendations to retirement investors, PTE 2020-02 adds a fiduciary acknowledgment and written documentation of the specific reasons the recommendation is in that investor's best interest, retained for a defined multi-year period. Reg BI requires the recommendation to be in the client's best interest; the PTE adds the explicit written-rationale and retention conditions on top for retirement money. The reasons must be specific to the client, because a boilerplate paragraph reused across the book is what a regulator discounts as inadequate.

### Does a trustee-to-trustee IRA transfer avoid the PTE documentation?
Not necessarily. Advisors often assume that because a trustee-to-trustee transfer is not a distribution, it owes nothing under the PTE, but the recommendation to move the retirement account can itself trigger the best-interest analysis. Whether a given move requires the full PTE file depends on the facts and your firm's policies, so the practical rule during a transition is to flag every retirement account as potentially in scope and let a human make the determination, rather than exempting them by default and discovering the gap later.

### Can AI write the best-interest rationale for me?
No, and it should not. AI can identify which accounts crossed a best-interest threshold and what documentation each is missing, but the substantive rationale, the specific reasons a rollover or account-type change serves this client considering reasonable alternatives, is professional judgment. Software-generated reasoning becomes the generic boilerplate regulators discount, and it moves the accountability to a place it cannot legally sit. The correct design has AI produce the worklist and pre-fill the factual fields, while a named human writes the determination and attests the file is complete before submission.

### Where do most Reg BI documentation gaps happen in a transition?
On the handful of triggering accounts that got processed like the non-triggering majority. In a book of hundreds moving under deadline, the failure is rarely a wrong best-interest analysis; it is a missing Form CRS delivery, a missing PTE written rationale, or an undocumented liquidation on an account nobody separated out. That is precisely the gap pre-submission classification closes, because it forces every account that changed type, rolled over, or liquidated a position onto a worklist before the form reaches the custodian, when the file is still cheap to build.

