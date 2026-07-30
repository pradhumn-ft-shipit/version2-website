---
title: "Cost Basis and Tax Lots in a Repaper"
topic: "Advisor Transitions & Repapering"
description: "Positions move through ACATS in days. Cost basis moves on a separate 15-day statement, and noncovered lots may never arrive. Here is what breaks, when you find out, and the exception workflow that catches it before tax season."
author: "FastTrackr AI Team"
image: cost-basis-and-tax-lots-in-a-repaper-hero.png
imageAlt: "Cost Basis and Tax Lots in a Repaper"
---

Positions and cost basis move on two different systems. ACATS delivers the shares in days. Basis travels separately as a transfer statement due within 15 days of settlement, and lots acquired before the covered-security dates carry no transfer obligation at all. A clean ACATS can still leave a household with blank basis.

That gap does not surface during the transition. It surfaces the following February, on a 1099-B, when a client sees a cost basis of zero on a position they have held since 1998 and calls the advisor who just moved them. By then the transition is nine months closed, the receiving ops team has moved on, and the person absorbing the complaint had nothing to do with the error.

This is a transition operations problem that everyone treats as a tax problem, which is exactly why it keeps happening.

## Two Transfers, Two Clocks

The account transfer runs through the Automated Customer Account Transfer Service, the NSCC system that FINRA describes in its [customer account transfers guidance](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers). ACATS moves the positions. It does not carry lot-level tax history.

Basis moves under a separate rule. Section 6045A and its regulation, [26 CFR 1.6045A-1](https://www.law.cornell.edu/cfr/text/26/1.6045A-1), require the transferring party to furnish a transfer statement to the receiving broker within 15 days after settlement of the transfer, with the lot-level detail the receiving firm needs to keep reporting accurately.

Two consequences follow, and both matter operationally:

**The transfer statement is not part of ACATS status.** Your ACATS queue will show the account delivered and settled. Nothing in that status tells you whether basis arrived, arrived partially, or arrived blank. Teams that mark a household complete on ACATS settlement are closing the file before half the data lands.

**The 15-day clock starts per transfer, not per book.** In a single-account move that is a fortnight of waiting. In a 400-account book move staged over six weeks, you have hundreds of overlapping 15-day windows with no natural checkpoint. Nobody is watching, because there is no queue that shows it.

## Covered and Noncovered: The Line That Decides Whether Basis Arrives at All

The transfer obligation only attaches to covered securities, and coverage is determined by when the lot was acquired, not by when it transferred.

| Lot type | Covered when acquired on or after | Basis transfer obligation | Who reports basis to the IRS |
|---|---|---|---|
| Stock, other than regulated investment company shares | January 1, 2011 | Yes | Broker |
| Mutual fund and other RIC shares, and shares in a dividend reinvestment plan | January 1, 2012 | Yes | Broker |
| Certain options and debt instruments | Phased in from January 1, 2014 | Yes, once covered | Broker |
| Any lot acquired before its covered date | Not covered | No obligation | Taxpayer |

That last row is the whole problem. For noncovered lots the delivering firm has no requirement to pass basis along, and many do not. The basis may arrive as a courtesy, may arrive without acquisition dates, or may not arrive at all. When it does not, the taxpayer carries the burden of substantiating basis, a point [IRS Publication 550](https://www.irs.gov/publications/p550) makes plainly, and an unsubstantiated basis defaults to zero on the sale.

Now overlay that on a real book. Noncovered lots concentrate in exactly the households you least want to disappoint: the twenty-year relationships, the concentrated low-basis stock positions, the DRIP accounts with three hundred small lots accumulated since the Clinton administration. Your largest and longest-tenured clients carry the highest share of untransferable basis. A book move does not distribute this risk evenly. It aims it at your top decile.

## What Else Degrades in Transit

Missing noncovered basis is the headline. Several quieter failures do at least as much damage because they look correct.

**Basis degrades with each hop.** A lot that came into the delivering firm through an earlier transfer, without complete history, leaves the same way. Books that have already moved once, common among recruited advisors, carry accumulated damage from every prior move. Ask how many custodians a household has seen. Two or more is a red flag before you look at anything else.

**Wash sale adjustments do not follow the account.** A firm tracks wash sales within the accounts it holds. Move the account mid-year and the disallowed loss adjustments computed at the old firm do not automatically reconstruct at the new one. Clients who harvested losses in the same year they transferred are the exposure.

**A mutual fund average cost election does not carry itself over.** Average cost is an election made at the account and fund level. After a transfer, the receiving firm's default method governs unless the election is made again. Nobody notices until a redemption is reported on a different method than the client expected.

**Gifted and inherited lots arrive without their story.** Basis on gifted shares depends on the donor's basis and the fair market value at the date of the gift. Inherited lots step up as of the date of death. That context lives in documentation, not in a transfer file, and if it is not captured during the move it usually is not captured at all.

**Holding period travels with acquisition date.** Lose the acquisition date and a long-term position can report as short-term. The dollar difference on a large low-basis holding is not a rounding error.

## Why This Is a Transition Problem and Not a Tax Problem

Here is the constraint that makes basis different from every other repapering data field, and it is the one most transition plans miss.

You cannot pre-stage it from the old firm's records. For a Protocol move, the departing advisor may take five client data fields: name, address, phone number, email address, and account title. Cost basis is not among them. Neither are tax lots, acquisition dates, or holding methods. An advisor who exports lot detail before resigning has not solved a data problem, they have created a legal one, and a good securities attorney will tell them the same thing.

So the basis snapshot has to come from the client, through the client's own statements and access, or from the delivering firm through a client-authorized request after the move. Both paths run through the client. Both take time. Neither happens by accident.

That reframes the whole task. Basis integrity is not a back-office cleanup you schedule for later. It is a client-touch workstream with a legal boundary, and it belongs in the transition plan next to the account forms. It behaves the same way as the other things that quietly run past close, which we covered in [the residual cleanup on assets that never move through ACATS](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup).

## The Basis Integrity Workflow

Six steps, with the owner and the trigger. This is the version that fits inside an existing repapering process rather than replacing it.

| Step | When | Owner | Output |
|---|---|---|---|
| Flag high-exposure households | Intake, before U4 drop | Transition lead | List of accounts with pre-2011 tenure, concentrated positions, DRIPs, prior transfers |
| Request client statement history | With the TIF | Client service | Year-end statements and confirms the client can supply from their own records |
| Add basis authorization to the paperwork pack | With account forms | Ops | Client-signed authorization to request historical basis from the delivering firm |
| Open a basis tracking queue at settlement | ACATS settle date | Ops | Per-account clock, 15 days from settlement, status not started, partial, complete |
| Work the exception queue | Days 15 to 45 | Ops | Every account resolved to received, requested, or reconstruction required |
| Client disclosure pass | Before year end | Advisor | Written notice of any position with unresolved basis, before the 1099-B arrives |

The last row is the one that protects the relationship. A client told in November that four positions carry unresolved basis, with a plan and a document request, stays a client. The same client discovering it on a tax form in February does not blame the delivering firm.

## Reconstructing Basis You Cannot Get

When the statement never comes and the lot is noncovered, reconstruction is the only path. The standard is documentation, not estimation.

Work the sources in this order. Client year-end statements come first, because they are the cleanest and the client can usually get them. Trade confirmations come next, and they carry acquisition dates that statements sometimes summarize away. Issuer records handle corporate actions, since splits, spinoffs, and mergers change basis allocation, and the issuer's own filing on the corporate action is the authority for how. Estate documents and appraisals cover inherited lots. Historical pricing is the last resort, and it is only defensible when the acquisition date is documented and the method is written down.

Two rules keep this clean. Write the method down for every reconstructed lot at the time you do it, because the file is the substantiation. And never populate a basis field with an unlabeled estimate. A blank that is flagged is an open item. A guess that looks like data is a liability that nobody will catch.

## Where Automation Earns Its Keep

The volume problem here is real. A 400-account book with a decade of statement history is tens of thousands of pages, and the useful content is lot-level rows buried in PDFs with a different layout at every custodian. Reading those by hand is why this work gets deferred until it is too late to fix.

This is the same extraction problem that drives NIGO on account forms, applied to a different document. [Document intelligence](https://fasttrackr.ai/solutions/document-intelligence) that already parses brokerage statements to pre-fill account forms is parsing the same lot tables you need for basis reconciliation. Pulling both from one pass, rather than running statement extraction twice, is the difference between basis integrity being a project and being a byproduct.

Running it as a tracked workstream inside [the advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) rather than a spreadsheet is what makes the 15-day clock visible at all. For consultants managing several books at once, the exposure compounds, which is part of why [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) tend to formalize this earlier than in-house teams do. The mechanics of running a clean move end to end are covered in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently Asked Questions

### Does cost basis automatically transfer during an ACATS transfer?

Only for covered securities. Under Section 6045A and 26 CFR 1.6045A-1, the transferring party must furnish a transfer statement with lot-level basis to the receiving broker within 15 days after settlement. Lots acquired before their covered-security date, generally 2011 for most stock and 2012 for mutual fund and DRIP shares, carry no transfer obligation, and that basis often does not arrive.

### How long after an account transfer should basis appear at the new firm?

The statement is due within 15 days after settlement, but the receiving firm still has to process and post it, so allow a few weeks beyond that before treating an account as an exception. The practical checkpoint is day 15 to open the exception, and day 45 to escalate anything still unresolved. ACATS settlement status tells you nothing about basis, so it needs its own queue.

### Can an advisor take cost basis data from the old firm before resigning?

No. The Protocol for Broker Recruiting permits five client data fields, and cost basis and tax lot detail are not among them. Exporting lot data ahead of a resignation creates legal exposure without solving the problem. The basis has to come from the client's own records or through a client-authorized request to the delivering firm after the move.

### What happens if cost basis is never recovered for a noncovered position?

The taxpayer carries the burden of substantiating basis. Without documentation the position is effectively treated as having a zero basis at sale, so the entire proceeds are taxed as gain. Reconstruction from statements, confirmations, and issuer records is the remedy, and the documented method is what makes it defensible.

### Which households in a book carry the most basis risk?

Long-tenured relationships with pre-2011 holdings, concentrated low-basis stock, dividend reinvestment accounts with many small lots, accounts that have already transferred between custodians at least once, and any household with gifted or inherited positions. These tend to be the largest relationships in the book, which is why basis exposure concentrates in the clients a transition can least afford to lose.

