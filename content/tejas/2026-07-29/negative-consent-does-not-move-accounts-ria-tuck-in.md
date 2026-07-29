---
title: "Negative Consent Does Not Move the Accounts: The Operational Gap in Every RIA Tuck-In"
topic: "Advisor Transitions & Repapering"
description: "Negative consent handles the advisory contract assignment in an RIA acquisition. It does nothing to move custodial accounts. Here is where the two timelines diverge and how tuck-ins stall in the gap."
author: "FastTrackr AI Team"
image: negative-consent-does-not-move-accounts-ria-tuck-in-hero.png
imageAlt: "Negative Consent Does Not Move the Accounts: The Operational Gap in Every RIA Tuck-In"
---

Negative consent resolves the assignment of an advisory contract when an RIA changes control. It does not move a single account. If the acquirer custodies elsewhere, every household still needs new custodial paperwork and an ACATS transfer, on a separate timeline with separate failure modes. Most tuck-ins stall in that gap.

Deal counsel handles the consent process well. There is a mature body of practice around it: the notice, the response window, the follow-up mailing, the Form ADV amendment. Where tuck-ins go wrong is three weeks after closing, when the operations team discovers that 340 households are legally consented and operationally stuck, because nobody built a repapering plan alongside the consent plan.

This is a guide to that second timeline: what negative consent actually accomplishes, what it leaves untouched, and how to sequence the operational work so the two do not collide.

## What negative consent actually does

Start with the statutory basis, because the scope of the rule explains the scope of the relief.

Section 205(a)(2) of the Investment Advisers Act requires an advisory contract to provide, [in the statute's words](https://www.law.cornell.edu/uscode/text/15/80b-5), "that no assignment of such contract shall be made by the investment adviser without the consent of the other party to the contract." The client has to consent before their advisory agreement moves.

The reason this bites in an acquisition that never touches an individual contract is the definition of assignment. Section 202(a)(1) [defines assignment](https://www.law.cornell.edu/uscode/text/15/80b-2) to include "any direct or indirect transfer or hypothecation of an investment advisory contract by the assignor or of a controlling block of the assignor's outstanding voting securities by a security holder of the assignor." Buy a controlling block of the firm and you have triggered an assignment of every client contract by operation of law, without amending any of them. There is a narrow carve-out in the same definition for partnerships where only minority interests change, and the SEC's [rule 202(a)(1)-1](https://www.ecfr.gov/current/title-17/chapter-II/part-275/section-275.202%28a%29%281%29-1) addresses when a partnership reorganization does not result in an assignment.

Note what the statute does not say. It does not say written consent, and it does not define consent. That silence is the opening that negative consent procedures rely on: a materially complete notice to the client, a reasonable period to object, and consent deemed given if the client does nothing. The availability of that approach in any given deal rests on SEC staff guidance and on the specific facts, including what the client's own advisory agreement says about assignment. That is a question for the deal's counsel, not for an operations playbook, and this article does not attempt to answer it.

What this article does address is the part counsel does not own.

## The four things consent does not touch

| What moves | Does negative consent handle it? | What is actually required |
| --- | --- | --- |
| The advisory contract | Yes, that is the entire point | Notice, response window, follow-up mailing |
| Custodial account ownership and paperwork | No | New account forms or an account conversion at the custodian |
| Positions held at a different custodian | No | ACATS or non-ACATS transfer, per asset type |
| Brokerage accounts and commission business | No | Separate BD process, its own forms and rules |
| Advisory fee billing setup | No | Fee schedules, billing authority, and debit instructions at the new custodian |

The single most expensive misunderstanding in a tuck-in is treating row one as if it covers rows two through five. It reads as if it should. The client has consented to the new adviser, so surely the accounts follow. They do not, because the custodian is not a party to the advisory contract and has no visibility into the consent process at all. As far as the custodian is concerned, an account still sits where it sat, titled how it was titled, with whatever advisor authority was on file.

## The two timelines, side by side

Here is where the sequencing matters. The consent clock and the repapering clock run in parallel but are gated differently, and teams that run them sequentially add a month to the deal for no reason.

| Phase | Consent track | Operational track |
| --- | --- | --- |
| Pre-close | Draft notice with counsel, build the client list, confirm agreement terms | Inventory accounts by type and custodian, pull statements, map fields, flag exceptions |
| Notice sent | Response window opens | Pre-validate account data, stage forms, resolve title and registration mismatches |
| Mid-window | Follow-up mailing to non-responders | Forms ready to send, exception queue worked down |
| Consent complete | Deemed or affirmative consent recorded per household | Submit transfers and conversions, work rejects |
| Post-close | Form ADV amended, records retained | Reconcile positions, confirm billing, close out exceptions |

The critical point: everything in the right-hand column before "consent complete" can be done during the response window. Data inventory, field mapping, exception identification, and form staging do not require consent. They require statements and a system to read them.

Teams that wait for the consent window to close before starting operational work turn a 45 to 60 day process into a 90 to 120 day one. The accounts sit, the clients notice, and the attrition that everyone was trying to avoid by using negative consent happens anyway, for operational reasons rather than legal ones.

## Where the operational track actually breaks

Four failure patterns account for most of the delay in tuck-in repapering. All four are visible before closing if anyone looks.

### Registration and title mismatches

The acquired firm's records say one thing, the custodian's records say another, and the new paperwork inherits whichever one the operations team happened to key from. Trust accounts with outdated trustee names, joint accounts where one party's name changed, entity accounts with a stale registered agent. These are the classic rejects, and they are found by comparing what is on the actual custodial statement against what is in the acquired firm's CRM, not by asking the advisor.

This is exactly the reconciliation that [AI document intelligence](https://fasttrackr.ai/solutions/document-intelligence) is built for: reading the statements themselves and extracting the registration as the custodian holds it, rather than as the seller's CRM believes it to be. When the two disagree, and in a book of a few hundred households they will disagree somewhere, the statement is the version that governs whether a transfer clears.

### Assets that do not move through ACATS

A tuck-in inventory that counts only brokerage positions understates the work badly. Annuities, direct-held mutual fund positions at the fund company, alternatives with a transfer agent, 529 plans, and certain retirement account types each have their own path and their own paperwork. They are a small share of accounts and a large share of elapsed time, because each one is a manual process with a different counterparty.

Inventory these separately at diligence. The right question is not how many accounts, it is how many distinct transfer processes.

### Retirement accounts

Qualified accounts carry considerations that taxable accounts do not, and the consent analysis for them is not always identical to the taxable side. This is counsel's call, but the operational consequence is worth flagging early: if a subset of the book needs a different consent approach or different paperwork, that subset needs its own workstream and its own timeline, and finding that out after the notice goes out is expensive.

### The brokerage side

If the acquired firm has commission business, that book does not travel on the advisory consent at all. It has its own process, its own forms, and its own supervisory requirements. Advisors moving accounts held away also sit under [FINRA Rule 3210](https://www.finra.org/rules-guidance/rulebooks/finra-rules/3210) on the broker-dealer side, which is a separate consent regime entirely from the Advisers Act one. Firms that run a hybrid model need both tracks planned, and the two are frequently owned by different people who are not talking to each other.

## The diligence questions that predict the repaper

Most RIA acquisition diligence lists are financial and legal. The operational questions that actually predict how long the repaper takes are usually missing. Ask these before signing.

**How many custodians, and which?** One custodian shared with the acquirer is the best case and often means an account conversion rather than a transfer. Multiple custodians, or a custodian the acquirer has no relationship with, changes the timeline materially.

**What percentage of accounts are non-ACATS-eligible?** Ask for the breakdown by asset type, not a headline account count.

**What is the account-to-household ratio?** A book with 200 households and 800 accounts is four times the paperwork of one with 200 households and 220 accounts, and the headline AUM number tells you nothing about which you are buying.

**How clean is the CRM against the statements?** Ask for a sample of 20 households and compare. The mismatch rate in the sample is a reasonable predictor for the book.

**Are advisory agreements assignable, and what do they say about notice?** The individual agreements can be more restrictive than the statute. Some require affirmative consent regardless of what the staff guidance permits generally.

**Who at the acquired firm actually knows the book?** Repapering is knowledge work. If the operations person who understands the exceptions is not staying through the transition, budget for that.

## Sequencing the two tracks properly

The version that works, assuming counsel has cleared the consent approach:

**Before the notice goes out.** Pull statements for every account. Extract registration, title, account type, and asset composition from the statement itself. Reconcile against the CRM. Build the exception list. Segment the book: same-custodian conversions, ACATS-eligible transfers, non-ACATS assets, brokerage, and anything with a data problem. Each segment gets its own path and its own owner.

**During the response window.** Work the exception list down to zero. Stage the paperwork for every segment so that forms are ready to go the moment consent completes. Pre-validate the data that causes rejects: registration match, title match, account number format, restricted or non-transferable positions.

**At consent completion.** Submit in waves by segment rather than all at once. Same-custodian conversions first because they clear fastest and reduce the open population. Then clean ACATS-eligible transfers. Then the non-ACATS tail, which will take the longest and should start early rather than last.

**Throughout.** Track by household, not by account, because the client experiences a household. A household with seven accounts where six have transferred is not 86 percent done from the client's point of view. It is unfinished.

The pre-validation step is where the elapsed time is won or lost. Rejects cluster into a predictable set of causes, and our breakdown of [ACATS reject codes and how pre-validation stops them](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation) covers the distribution and what to check before submission rather than after. The same principle applies to a tuck-in, at higher volume: a reject rate that is tolerable on a single advisor's book becomes a staffing crisis across 400 households.

## What good looks like

A tuck-in of a few hundred households, one custodian change, with the operational track run in parallel, should complete the bulk of its transfers within weeks of consent completing rather than months. Our [repapering timeline benchmark](https://fasttrackr.ai/blog/repapering-timeline-benchmark-under-30-days) covers the tiers and what separates them for single-advisor moves, and the same variables drive the outcome at deal scale: data quality going in, pre-validation, exception handling capacity, and whether the work started before it was legally allowed to finish.

The measurable targets worth setting at the start of a deal:

| Metric | Why it matters | Where to set the target |
| --- | --- | --- |
| Exception rate at first submission | Directly drives elapsed time and staffing | Below the rate the team can clear in a week |
| Percentage of households fully complete | The client-facing measure | Track weekly, not at the end |
| Days from consent completion to first submission | Measures whether the parallel track worked | Should be days, not weeks |
| Non-ACATS tail completion | Usually the last thing to close | Started first, tracked separately |
| Billing accuracy at first cycle post-close | A silent failure that erodes trust | Reconciled before the first invoice |

That last row is worth dwelling on. Fee billing is frequently the thing nobody owns in a tuck-in, and a first post-close billing cycle that is wrong for a meaningful share of households does more relationship damage than a slow transfer, because the client reads it as carelessness with their money rather than paperwork.

## The short version

Negative consent is a legal mechanism for the advisory contract. It is not a transfer mechanism. Treat it as one and you will find yourself, three weeks after close, with a fully consented book sitting in accounts that have not moved, and no plan for moving them.

Run the operational track from diligence through close, in parallel with the consent track, gated only at the point where submission genuinely requires completed consent. Inventory by asset type and custodian rather than by AUM. Reconcile CRM against statements before anything goes out. Pre-validate. Segment. Submit in waves.

Firms running this at volume, whether as an acquirer with a pipeline of tuck-ins or as a consultant managing deals for others, need it to be a repeatable process rather than a heroic effort each time. That is what the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to run, and our [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) page covers how firms managing multiple concurrent deals structure the work. The [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows the operational sequence and the outcome on a real book.

None of this is legal advice, and the consent approach for any particular transaction belongs with counsel who knows the deal. What belongs to operations is everything that happens on the other track, and that work can start long before the lawyers finish.

## Frequently Asked Questions

### Does negative consent move client accounts to the new custodian?

No. Negative consent addresses the assignment of the investment advisory contract under the Advisers Act. The custodian is not a party to that contract and does not act on it. If the acquiring firm custodies at a different institution, every account still requires new custodial paperwork and a transfer, whether through ACATS or an asset-specific process.

### What triggers the consent requirement in an RIA acquisition if the contracts are not amended?

The statutory definition of assignment includes the indirect transfer of a controlling block of the adviser's outstanding voting securities. A change of control therefore constitutes an assignment of every client advisory contract by operation of law, even though no individual contract is touched, which is what triggers the consent requirement under Section 205(a)(2).

### Can the operational repapering work start before the consent window closes?

Yes, and it should. Statement collection, data extraction, CRM reconciliation, exception identification, field mapping, and form staging require no client consent. Only submission genuinely needs to wait. Teams that run these sequentially rather than in parallel typically add a month or more to the deal timeline for no regulatory reason.

### Which assets cause the longest delays in a tuck-in repaper?

The non-ACATS tail: annuities, direct-held mutual fund positions at the fund company, alternatives with a transfer agent, and certain plan account types. Each has its own counterparty and its own manual process. They are usually a small share of accounts and a disproportionate share of elapsed time, so they should be inventoried separately at diligence and started first rather than last.

### What operational diligence question best predicts how long a tuck-in will take?

The account-to-household ratio combined with the custodian map. Headline AUM says nothing about paperwork volume, but a book with four accounts per household spread across two custodians the acquirer does not use is a fundamentally different project from one with a single shared custodian, regardless of whether both books are the same size.

