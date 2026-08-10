---
title: "Beneficiary and TOD Designations in a Repaper: The Registration Detail That Silently Fails"
topic: "Advisor Transitions & Repapering"
description: "ACATS moves the assets but not the beneficiary designations. A repapered account arrives with its TOD blank, nobody notices, and the error surfaces only at death. Here is why it happens and the exception workflow that catches it."
author: "FastTrackr AI Team"
image: beneficiary-and-tod-designations-in-a-repaper-the-registration-detail-that-silently-fails-hero.png
imageAlt: "Beneficiary and TOD Designations in a Repaper: The Registration Detail That Silently Fails"
---

ACATS moves positions and cash. It does not move beneficiary designations. When a book repapers to a new firm, every account arrives with its transfer-on-death instruction blank, and unless someone re-establishes each one on a fresh form, the account has no beneficiary until the day it is needed. The failure is silent because nothing in the transfer status shows it.

This is the estate-planning detail that transition operations treats as an estate-planning problem, which is exactly why it slips. The ACATS queue shows the account delivered and settled. The advisor sees the assets land. The client sees their statement. Nobody sees the empty beneficiary field, because there is no queue that displays it and no reject code that flags it. The error surfaces years later, at a death, when a family that expected a clean transfer-on-death payout instead lands in probate, and the advisor who ran the move gets the call.

## Why the designation does not travel

Beneficiary and TOD designations are established at the account level with the firm that holds the account. They are a contract between the client and that specific firm, recorded on that firm's form. When the account moves to a new firm through the Automated Customer Account Transfer Service, the transfer carries the assets and the account structure, but not that contract.

FINRA states the mechanics plainly in its [guidance on transferring brokerage assets at death](https://www.finra.org/investors/insights/plan-ahead-transfer-your-brokerage-account-assets-death): beneficiary designations do not automatically carry over when you move an account to a new institution, and you must complete new paperwork at the receiving firm. The [ACATS process itself](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers), the NSCC system that standardizes account transfers, is built to move assets, not to reproduce the delivering firm's beneficiary records at the receiving firm.

So the default state of a repapered TOD account is not "beneficiaries preserved." It is "beneficiaries erased." Preservation only happens if the transition team affirmatively re-collects and re-files each designation. Nothing about the transfer does it for you.

## Why it is silent, and why silence is the danger

Most repaper errors announce themselves. A missing signature bounces as NIGO. A bad account number rejects the ACATS. A cost-basis gap eventually shows up on a 1099-B. The beneficiary gap has none of those tripwires.

Three properties make it uniquely easy to miss:

- **No reject code.** The account transfers cleanly. There is no rejection, no exception queue entry, no error state. The transfer looks like a success on every operational dashboard.
- **No near-term client contact.** A living client rarely checks their beneficiary designation. The account can sit with a blank TOD for a decade, funded and trading normally, with no one prompted to look.
- **A delayed and irreversible trigger.** The gap only becomes visible at the account holder's death, the one moment it cannot be fixed. By then the client cannot sign a new form, and the assets follow the account's default path, which is usually the estate and probate rather than the intended beneficiary.

FINRA's guidance on [what happens when a brokerage account holder dies](https://www.finra.org/investors/insights/when-brokerage-account-holder-dies) describes the clean case, where a valid TOD registration passes assets directly to the named beneficiary outside probate. Strip the TOD out in a repaper and the account loses exactly that benefit, silently, at the worst possible time.

## Where the gap concentrates in a book

Like most transition risks, this one is not evenly distributed. It aims at the accounts and households where a probate surprise does the most damage.

| Account or household type | Why the beneficiary gap hits harder |
|---|---|
| Older clients with established TOD plans | Highest near-term mortality and the strongest expectation of a clean payout |
| Concentrated single-registration accounts | The TOD is the entire estate plan for that asset, with no trust backstop |
| Accounts previously moved between firms | May already carry a stale or lost designation before this move |
| Households mixing TOD and trust registrations | Easy to assume a trust covers an account that is actually individual with a TOD |

The pattern mirrors the [registrations that break a repaper for trusts, entities, and life events](https://fasttrackr.ai/blog/registrations-that-break-a-repaper-trusts-entities-life-events): the accounts with the most legal structure behind them are the ones where a quietly dropped detail creates the largest downstream failure. A book move does not spread this risk evenly. It points it at your oldest relationships.

## TOD is not the only designation that vanishes

The gap is easiest to describe with taxable TOD accounts, but the same account-level logic applies to every beneficiary-bearing registration in the book, and each fails in its own way.

A transfer-on-death registration) on a taxable brokerage account is a direct contract with the holding firm and has to be rebuilt on the new firm's form. Retirement account beneficiary designations behave similarly: an IRA moves by trustee-to-trustee transfer rather than a standard ACATS equity move, but its beneficiary designation is still firm-specific and still has to be re-established at the receiving custodian, and here the stakes are higher because the beneficiary form, not the will, controls who inherits the IRA. Trust-registered accounts are the trap in the other direction. Because a trust already names beneficiaries in its own document, teams assume every account in the household is covered, then miss the one account that is actually an individual registration with a TOD rider and no trust behind it.

The practical rule is to classify every account by registration type at intake and handle each on its own track: taxable TOD, retirement beneficiary, and trust. Lumping them together is how a team re-establishes the obvious TOD accounts and quietly drops the IRA beneficiary or the stray individual account the family assumed the trust covered. The classification is the same discipline the transfer itself demands, because registration type drives ACATS behavior as much as it drives the estate outcome.

## The beneficiary integrity workflow

The fix is not heroics, it is a queue. Because the transfer will never flag this for you, the transition team has to build the checkpoint that the systems do not provide. Treat beneficiary re-establishment as its own workstream, parallel to the asset transfer, not a line buried in a closing checklist.

1. **Capture designations before the move.** During intake, record which accounts carry a TOD or beneficiary designation and who the beneficiaries are, sourced from the client, not exported from the delivering firm. Beneficiary detail is not among the client data an advisor may take under the Protocol for Broker Recruiting, so it has to come from the client's own records or a client-authorized request.
2. **Open a beneficiary queue at intake, not at close.** Every account flagged in step one becomes an open item that stays open until a signed designation is on file at the new firm. This queue is separate from the ACATS queue precisely because ACATS settlement tells you nothing about it.
3. **Re-collect on the receiving firm's form.** Each designation has to be re-established on the new firm's TOD or beneficiary form, with correct beneficiary names and percentages. This is a signature-bearing document, so it lives in the same NIGO-prone territory as the rest of the repaper packet, where [the e-signature stack and its NIGO traps](https://fasttrackr.ai/blog/the-e-signature-stack-for-a-repaper-what-custodians-accept-and-where-nigo-hides) decide whether the form is accepted or bounced.
4. **Confirm on file before closing the account.** An account is not done when the assets settle. It is done when the assets settle and the beneficiary designation is confirmed on file at the receiving firm. Move the definition of "complete" to include the beneficiary, and the silent gap stops being silent.

The discipline is a single mental shift: settlement is not completion. An account with delivered assets and a blank beneficiary is an open exception wearing the costume of a closed file.

## Where document intelligence earns its keep

At the scale of a real book, hundreds of accounts, this is where manual process fails and automation earns its place. The bottleneck is not the concept, it is catching every account that had a designation and making sure a corresponding new form gets filed. Two points of leverage:

The first is detection. [Document intelligence that reads brokerage statements and account forms](https://fasttrackr.ai/solutions/document-intelligence) can surface which incoming accounts carried a TOD or beneficiary registration, so the beneficiary queue is populated from the source documents rather than from memory. The same [statement reading that pre-fills account forms and cuts NIGO](https://fasttrackr.ai/blog/ai-reads-brokerage-statement-prefill-account-forms-cut-nigo) applies directly to the new TOD form, reducing the transcription errors that get a beneficiary designation bounced.

The second is tracking. An [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) that keeps a per-account exception list can hold beneficiary re-establishment as an explicit open item that blocks account closure, so no account is marked complete while its designation is still blank. That is the structural fix: make the system refuse to call an account done until the beneficiary is on file. Firms that run transitions at this volume, the kind of [consulting practices that manage many concurrent moves](https://fasttrackr.ai/who-we-serve/transition-consultants), cannot hold hundreds of blank-beneficiary accounts in a spreadsheet and expect none to slip. The outcome in a well-run move, like the one documented in this [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition), depends on catching exactly these quiet details at scale.

## The one-line takeaway

A repaper that settles the assets and leaves the beneficiary blank is not a completed transition, it is a delayed failure with a client's estate as the cost. ACATS will never tell you the designation is missing, so build the queue that does. Capture designations at intake, re-establish each one on the receiving firm's form, and refuse to close an account until the beneficiary is confirmed on file. It is a small amount of operational discipline standing between a clean transition and a probate surprise that lands on the advisor years later.

## Frequently Asked Questions

### Do beneficiary designations transfer during an ACATS account transfer?

No. ACATS moves the assets and the account structure, but not the beneficiary or transfer-on-death designation. Beneficiary designations are established at the account level with the firm that holds the account, so when the account moves to a new firm the designation does not come with it. FINRA's guidance is explicit that you must complete new beneficiary paperwork at the receiving firm.

### Why is a missing beneficiary designation so easy to miss in a repaper?

Because it has no tripwire. The account transfers cleanly with no reject code and no exception, so every operational dashboard shows a success. A living client rarely checks their beneficiary, so the blank field can sit for years. The gap only becomes visible at the account holder's death, the one moment it can no longer be fixed, which is what makes it dangerous.

### What happens if a repapered account has no TOD beneficiary when the client dies?

The account loses the direct, outside-probate transfer that a valid TOD registration provides. Instead of passing straight to the named beneficiary, the assets generally follow the account's default path into the estate and through probate. That is slower, public, and often contrary to what the client intended and believed was still in place after the move.

### How should a transition team prevent the beneficiary gap?

Treat beneficiary re-establishment as its own workstream. Capture which accounts carry a designation at intake from the client's own records, open a beneficiary queue separate from the ACATS queue, re-collect each designation on the receiving firm's form, and refuse to mark an account complete until the signed designation is confirmed on file. The core shift is that settlement of assets is not completion of the account.

### Can an advisor bring beneficiary information from the old firm?

Not by exporting it from the delivering firm. Beneficiary detail is not among the limited client data fields an advisor may take under the Protocol for Broker Recruiting. The information has to come from the client directly or through a client-authorized request to the prior firm after the move, then be used to re-establish the designation on the new firm's form.

