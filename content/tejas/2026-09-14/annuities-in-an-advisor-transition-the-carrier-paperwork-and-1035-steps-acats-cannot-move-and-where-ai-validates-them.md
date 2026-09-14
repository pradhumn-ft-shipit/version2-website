---
title: "Annuities in an Advisor Transition: The Carrier Paperwork and 1035 Steps ACATS Cannot Move, and Where AI Validates Them"
topic: "Advisor Transitions & Repapering"
description: "Annuities do not move through ACATS. In a transition each contract needs either a change of broker-dealer of record with the carrier or a 1035 exchange, and both depend on selling agreements, appointments, and suitability review. Here is the annuity mechanics that strand a book, "
author: "FastTrackr AI Team"
image: annuities-in-an-advisor-transition-the-carrier-paperwork-and-1035-steps-acats-cannot-move-and-where-ai-validates-them-hero.png
imageAlt: "Annuities in an Advisor Transition: The Carrier Paperwork and 1035 Steps ACATS Cannot Move, and Where AI Validates Them"
---

Annuities are the accounts that quietly strand a book move, because they do not travel through ACATS at all. A brokerage position transfers automatically; an annuity does not. Each contract needs either a change of broker-dealer of record filed with the insurance carrier, or a 1035 exchange into a new contract, and both depend on the new firm holding a selling agreement and the rep being appointed with that carrier. AI can identify, route, and pre-fill every one of those paths. A human still owns the suitability call and the signature.

Most transition planning is built around the ACATS timeline, and for good reason: the bulk of a typical book is brokerage assets that move through the Automated Customer Account Transfer Service. Annuities break that model. They are insurance contracts held at carriers, not securities positions held at a custodian, so the machinery that repapers a brokerage account does nothing for them. An advisor moving a book can have the entire brokerage side clear cleanly and still be weeks from done because a dozen annuity contracts each need their own carrier-specific process, and any one of them can be orphaned if the receiving firm has no relationship with the carrier. This is the annuity problem in a transition: what actually has to happen, why it goes wrong, and where an AI-native workflow removes the delay without touching the judgment calls.

## Why annuities do not move through ACATS

ACATS transfers customer accounts between broker-dealers by moving the positions held in them, and its cousin process for mutual funds runs over NSCC networking. An annuity is not a position in a brokerage account. It is a contract between the client and an insurance company, serviced by an advisor who is appointed with that carrier. When the advisor changes firms, the contract does not need to be moved between custodians, because it never lived at a custodian. What needs to change is the servicing relationship, or the contract itself. Because annuities behave like non-transferable assets in an ACATS book move, they belong to the same category of holdings that stall a transfer if nobody flags them early, a category covered in [non-transferable and proprietary assets: what stalls an ACATS book move and where AI flags it early](https://fasttrackr.ai/blog/non-transferable-and-proprietary-assets-what-stalls-an-acats-book-move-and-where-ai-flags-it-early).

There is a wrinkle worth naming. Some annuities are networked through the carrier and appear on a client's brokerage statement, which can make them look like they move with the account. The valuation and positions may sync, but the servicing right, the broker-dealer of record and the appointed agent, still has to be re-established with the carrier under the new firm. The statement line moving is not the same as the advisor keeping the ability to service the contract.

## The two paths, and the relationship that gates both

Every annuity in a transitioning book takes one of two paths, and both hinge on the same precondition.

Path one is keeping the contract and changing the servicing party. The client stays in the same annuity, and the advisor files a change of broker-dealer of record, and a change of agent or representative of record, with the carrier so the advisor can continue to service it under the new firm. This is the cleaner path because it does not disturb the contract, its benefits, or its tax status. It is entirely dependent on one thing: the new broker-dealer or RIA must have a selling or distribution agreement with that carrier, and the rep must be appointed and state-licensed to service annuities there. If the new firm has no agreement with the carrier, the contract cannot be moved onto the new firm's book, and it becomes an orphaned, held-away asset the advisor can no longer service, no matter how much paperwork is filed.

Path two is replacing the contract through a 1035 exchange. Where a new contract is genuinely in the client's interest, Section 1035 of the Internal Revenue Code allows a tax-free exchange from one annuity to another, provided it is a direct exchange between insurance companies with no actual or constructive receipt of funds by the client. As resources like [annuity.org's overview of the 1035 exchange](https://www.annuity.org/annuities/1035-exchange/) explain, the transfer is coordinated directly between the carriers, and a receiving carrier is not obligated to accept an exchange. This path is not a workaround for a missing selling agreement, it is a recommendation, and it carries the full weight of suitability and best-interest review.

The precondition that gates both paths is the carrier relationship. Before a single annuity form is prepared, the workflow has to know, for each contract, which carrier holds it, whether the new firm has a selling agreement with that carrier, and whether the rep is appointed. That single check determines whether a contract is a clean change-of-record, a candidate for a 1035, or an orphan the advisor needs to plan around.

## Where annuity paperwork goes NIGO

Annuity forms are carrier-specific and unforgiving, and they reject for a predictable set of reasons distinct from brokerage NIGO. The following are the recurring failure points and where validation belongs.

| Annuity requirement | Why it stalls or rejects | Where AI validates before submission | Human control point |
|---|---|---|---|
| Selling agreement with the carrier | New firm has no distribution agreement; contract cannot move | Check each carrier against the firm's in-force agreements first | Decide how to handle an orphaned contract |
| Rep appointment and state license | Rep not appointed or licensed for that carrier and state | Verify appointment and license status per carrier and state | Complete or update the appointment |
| Correct carrier form and version | Wrong or outdated carrier form used | Match the current form for that carrier and product | Confirm the form fits the specific contract |
| Owner, annuitant, and beneficiary detail | Fields mismatch the contract of record | Pre-fill from the contract, flag any mismatch | Approve identity and beneficiary designations |
| 1035 replacement paperwork | Missing replacement forms and disclosures | Detect the replacement trigger, assemble the set | Make the suitability and best-interest call |
| Surrender charges and MVA | Not disclosed or analyzed before an exchange | Flag surrender period and market value adjustment | Weigh the cost against the benefit for the client |

The 1035 path deserves particular care because it is where the regulatory exposure concentrates. A recommended exchange of a deferred variable annuity falls under FINRA Rule 2330, and as [Smarsh's summary of FINRA Rule 2330](https://www.smarsh.com/regulations/finra-2330-deferred-variable-annuities) lays out, the firm must evaluate the client's age, liquidity needs, time horizon, and risk tolerance, and weigh the features and costs of both the existing and the proposed contract, before a registered principal reviews and approves the recommendation, generally within seven business days of a complete application. The rule text itself is in [FINRA Rule 2330 on members' responsibilities regarding deferred variable annuities](https://www.finra.org/rules-guidance/rulebooks/finra-rules/2330). For fixed and indexed annuities, the parallel best-interest obligation comes from state adoptions of the NAIC annuity suitability model. None of that is paperwork AI completes. It is judgment a licensed person makes and a principal supervises.

## Where AI fits the annuity mechanic

The annuity problem is mostly a knowledge-and-routing problem, which is exactly where automation earns its place. The wedge is precise, and it stops at the suitability line.

AI identifies and classifies every annuity up front. It reads the incoming statements and contract documents, distinguishes direct-held from networked annuities, and identifies the carrier, product, and contract details for each, so the annuities in a book are known on day one rather than discovered when a brokerage transfer completes and someone asks where the annuities went. That extraction from messy contract documents is the work of [document intelligence](https://fasttrackr.ai/solutions/document-intelligence).

AI runs the carrier-relationship check. For each contract, it can flag whether the new firm has a selling agreement with the carrier and whether the rep is appointed and licensed, which is the single most important early signal because it separates the contracts that can move from the ones that will be orphaned. Surfacing that on day one lets the advisor plan for the orphans instead of being surprised by them at the finish.

AI selects the right form and pre-fills it. It matches the current carrier-specific form for the product, pre-populates owner, annuitant, and beneficiary detail from the contract of record, and validates those fields against the source, so the form is correct on the attempt that counts. This is the same entitlement-and-agreement care that governs [margin and options accounts, the extra agreements that go NIGO and where AI validates them](https://fasttrackr.ai/blog/margin-and-options-accounts-in-a-transition-the-extra-agreements-that-go-nigo-and-where-ai-validates-them), applied to insurance contracts.

AI flags the 1035 triggers and assembles the record. When a replacement is on the table, it detects that a replacement is happening, pulls the surrender-charge schedule and any market value adjustment into view, and assembles the replacement forms and disclosures the transaction requires, so the human making the suitability call has the full cost picture in front of them rather than having to reconstruct it.

What AI does not do is decide whether a 1035 exchange is in the client's interest, or sign anything. The best-interest analysis under FINRA 2330 or the NAIC model, the principal review, and the client's signature all stay human, because a replacement recommendation is a judgment about a specific person's circumstances and a supervised regulatory act. The [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) holds that line: AI classifies, checks relationships, pre-fills, and flags, and a licensed professional decides and signs. FastTrackr reports compressing book moves by front-loading exactly this kind of classification and validation, and those are FastTrackr's reported results rather than an independent benchmark, but the annuity lesson is structural: the delay lives in discovery and routing, and that is the part automation removes.

## Put annuities on the critical path early

The strategic mistake is treating annuities as a footnote to the brokerage transfer, to be handled after ACATS clears. By then the orphans are a surprise, the wrong forms are already filed, and the 1035 suitability work is being rushed. Because annuity contracts have the longest and most relationship-dependent path in a book, they belong on the critical path from day one: classify them, run the carrier-relationship check, and sequence the change-of-record filings and any 1035 recommendations to the front, while the brokerage side moves in parallel. That is the same front-loading logic that governs the rest of a well-run transition, and it matters most where the lead time is longest.

For a consultant or an independent broker-dealer moving many reps, annuities are also where the carrier-relationship math compounds: each firm has a different set of in-force selling agreements, and a contract that moves cleanly for one rep is an orphan for another. A workflow that checks every contract against the receiving firm's agreements the same way, across every concurrent move, is what keeps annuities from becoming the item that sets the completion date. The [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) workflow treats the carrier-relationship check as a gate, and a worked example of a mixed book, brokerage and insurance, reaching a clean completion date is in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently asked questions

**Do annuities transfer through ACATS in an advisor transition?**

No. ACATS moves securities positions between broker-dealers, and an annuity is an insurance contract held at a carrier, not a position at a custodian. In a transition an annuity takes one of two paths instead: a change of broker-dealer of record and agent of record filed with the carrier so the advisor can keep servicing the same contract, or a 1035 exchange into a new contract. Some annuities are networked and appear on a brokerage statement, but even then the servicing right has to be re-established with the carrier under the new firm. The statement line syncing is not the same as the advisor keeping the contract.

**What is a change of broker-dealer of record for an annuity?**

It is the carrier filing that updates who services an existing annuity when the advisor changes firms. The client keeps the same contract, its benefits, and its tax status, and the advisor updates the broker-dealer of record and the agent or representative of record with the insurance carrier. This is usually the cleanest path because it does not disturb the contract. Its one hard requirement is that the new broker-dealer or RIA must have a selling or distribution agreement with that carrier and the rep must be appointed and licensed, otherwise the contract cannot move onto the new firm's book and becomes an orphaned, held-away asset.

**When does an annuity need a 1035 exchange instead?**

A 1035 exchange is used when moving the client into a new annuity contract is genuinely in their interest, not as a way around a missing selling agreement. Section 1035 of the Internal Revenue Code lets the client exchange one annuity for another tax-free, as long as it is a direct exchange between insurance companies with no actual or constructive receipt of funds, and the receiving carrier agrees to accept it. Because it replaces the contract, an exchange is a recommendation that triggers full suitability and best-interest review, including analysis of surrender charges, new fees, and any benefits the client would give up.

**Why do annuity forms go NIGO in a transition?**

For reasons distinct from brokerage NIGO. The most consequential is that the new firm has no selling agreement with the carrier or the rep is not appointed or licensed, which stops the contract from moving at all. Beyond that, the recurring rejects are the wrong or outdated carrier form, owner, annuitant, or beneficiary detail that does not match the contract of record, and, on an exchange, missing replacement forms or an undisclosed surrender charge or market value adjustment. Because these forms are carrier-specific and each gets essentially one clean attempt, validating the carrier relationship and the fields before submission is what prevents the reject.

**Where does AI help with annuities, and where must a human decide?**

AI handles discovery and routing: it identifies every annuity in the book from statements and contracts, distinguishes direct-held from networked, checks each contract against the firm's in-force selling agreements and the rep's appointments, selects and pre-fills the correct carrier form, and flags 1035 replacement triggers with the surrender and market-value-adjustment picture. Humans must make the suitability and best-interest determination on any 1035 exchange under FINRA Rule 2330 or the NAIC annuity model, complete the principal review, and sign. AI removes the delay in finding and preparing the right path; it never decides that replacing a contract is right for the client.

