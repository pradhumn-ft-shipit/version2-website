---
title: "Advisory vs Brokerage Accounts in a Transition: Why Fee-Based Books Repaper Differently"
topic: "Advisor Transitions & Repapering"
description: "In a transition, brokerage accounts ride ACATS while advisory accounts need a brand-new agreement, fresh disclosures, and re-billing setup. Here is why fee-based books repaper differently and how to plan for it."
author: "FastTrackr AI Team"
image: advisory-vs-brokerage-accounts-transition-repaper-hero.png
imageAlt: "Advisory vs Brokerage Accounts in a Transition: Why Fee-Based Books Repaper Differently"
---

**Brokerage and advisory accounts do not move the same way in a transition. Brokerage positions transfer in kind through ACATS, so the account simply follows the client. Advisory accounts move the assets through ACATS too, but the advisory relationship does not travel: the client signs a new management agreement, receives fresh disclosures, and is set up for billing again.**

Most transition plans treat the book as one pile of accounts to repaper. That assumption is where timelines slip. A commission brokerage account and a fee-based advisory account share almost nothing in the repaper except the ACATS leg, and the advisory side carries paperwork and compliance steps that have no brokerage equivalent. If your project plan does not split the book by account type on day one, you will discover the difference the hard way, one Not In Good Order rejection at a time.

This guide breaks down exactly where the two paths diverge, what that means for your sequencing, and how to keep a fee-based book from becoming the long pole in your transition.

## The core difference: assets move, relationships are rebuilt

An ACATS transfer moves securities and cash from one carrying firm to another. It is governed by [FINRA Rule 11870](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870) and runs on the National Securities Clearing Corporation's automated system. For a plain brokerage account, that transfer is close to the whole job. The positions arrive in kind, the registration matches, and the client keeps trading.

An advisory account is two things stacked on top of each other: the custodial account that holds the assets, and the advisory contract that governs how you manage them and how you get paid. ACATS handles the first. Nothing in ACATS handles the second. The investment management agreement at the old firm was between the client and that firm's RIA. It does not assign itself to your new RIA, and under the Investment Advisers Act an advisory contract generally cannot be assigned without the client's consent. So the client signs a new agreement, and with it comes a new stack of required paperwork.

That is the mechanical heart of the problem. On the brokerage side you are transferring an account. On the advisory side you are transferring assets and simultaneously originating a brand-new advisory relationship for the same client, at the same time, under a deadline.

## What each account type actually requires

Here is the side-by-side that should sit at the top of your transition workbook.

| Step | Brokerage account | Advisory account |
|---|---|---|
| Asset movement | ACATS transfer in kind | ACATS transfer in kind |
| New account agreement | New brokerage account form | New brokerage/custodial form plus a new investment management agreement |
| Disclosures to deliver | Form CRS, Reg BI disclosure | Form CRS, Form ADV Part 2A and 2B, privacy notice |
| Fee setup | Transaction/commission schedule | Advisory fee schedule, billing method, householding, fee groups |
| Standard of care re-established | Best interest at time of recommendation | Ongoing fiduciary duty |
| Billing risk if delayed | Low | Missed or double-billed advisory fees |
| Data needed to repaper | Registration, cost basis | Registration, cost basis, fee schedule, billing frequency, model or sleeve assignment |

The advisory column is longer for a reason. Every advisory account needs a fee schedule captured correctly, a billing method chosen (in advance or in arrears), and a link to the right model or sleeve so the account is actually managed the way the client expects on day one. Get the fee field wrong and you either bill the client incorrectly or fail to bill at all, and both are compliance conversations you do not want in your first month.

FINRA's own explainer on [brokerage and advisory accounts](https://www.finra.org/investors/insights/brokerage-advisory-accounts) frames the standard-of-care split cleanly: a brokerage relationship centers on recommendations judged at the point of sale, while an advisory relationship is an ongoing fiduciary engagement. That distinction is not just a disclosure footnote. It changes what evidence you build during the move, because the advisory account carries a continuing duty from the first day the assets land.

## Why the advisory side drives your NIGO rate

Not In Good Order rejections cluster on advisory accounts, and the cause is usually field-level, not conceptual. A brokerage repaper needs a handful of matching identifiers. An advisory repaper needs those plus a fee schedule, a billing cadence, a fee-group or household assignment, and a model mapping, and each of those is a chance for a mismatch between the old statement, the client's memory, and the new firm's form.

The data lives in different places, too. Registration and cost basis sit on the brokerage statement. The advisory fee schedule and billing method often live only in the old advisory agreement or the old firm's portfolio accounting system, which you may not be able to export cleanly. Reconstructing a fee schedule from memory is how accounts get repapered at the wrong rate.

This is where [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) earns its place in a fee-based transition. Pulling the fee schedule, billing frequency, and registration straight off the source statements and agreements, then mapping them into the new firm's advisory forms, removes the single biggest source of advisory NIGO: a human re-keying a number under time pressure. The brokerage accounts will mostly clear on their own. The advisory accounts are where extraction and validation change your reject rate.

## Sequencing: split the book before you touch a single form

The practical move is to segment the book by account type at kickoff, then sequence the work so the advisory accounts get the extra runway they need.

1. **Segment.** Split every account into brokerage or advisory, and inside advisory, group by model and fee schedule. You are looking for the natural batches you can repaper together.
2. **Front-load advisory data capture.** Advisory accounts need more fields, and those fields are harder to source. Start extracting fee schedules and billing methods first, because that is your critical path.
3. **Batch the paperwork.** Households and fee groups let you move related advisory accounts as a set rather than one at a time, which cuts both client signature fatigue and your own review load.
4. **Run brokerage ACATS in parallel.** Brokerage accounts do not wait on advisory paperwork. Kick their transfers as soon as the new accounts are open.
5. **Verify billing before the first cycle.** Confirm every advisory account has the correct fee schedule and billing date before the new firm's first billing run, not after.

If you want a fuller framework for ordering the whole repaper by return on effort, [what to automate first in an advisor transition](https://fasttrackr.ai/blog/what-to-automate-first-in-an-advisor-transition-sequencing-repaper-tasks-by-payback) walks through sequencing tasks by payback, and the advisory-first data capture above fits directly on top of it.

## The assets that break both paths

Some positions do not ride ACATS at all, and they cut across both account types. Restricted stock, certain annuities, alternative investments, and physical certificates fall outside the automated system and need their own manual transfer, sometimes with a medallion signature guarantee. The [medallion signature guarantee bottleneck](https://fasttrackr.ai/blog/the-medallion-signature-guarantee-bottleneck-the-repaper-step-no-software-removes) is a repaper step no software removes, and it shows up whether the account is brokerage or advisory. Flag these positions during segmentation so they do not surprise you in week three.

## Where the advisory difference matters most: fee-based breakaways

The advisory-versus-brokerage split is sharpest for advisors moving from a wirehouse or independent broker-dealer to an RIA, because that move often coincides with a shift toward fee-based management. As [BlackRock's advisor research](https://www.blackrock.com/us/financial-professionals/insights/why-financial-advisors-move-to-fee-based-from-brokerage) notes, advisors keep moving toward advisory fee models for more predictable revenue. If your transition is also a business-model shift, you are not just repapering advisory accounts, you may be converting brokerage clients into new advisory relationships, which means new suitability and best-interest documentation on top of the standard repaper. For a deeper look at the breakaway path itself, SmartAsset's overview of [breakaway advisors](https://smartasset.com/advisor-resources/breakaway-advisors) is a useful primer on the move.

A clean transition treats this conversion as its own workstream with its own documentation, not as a footnote to the account transfer. Our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows what a tracked, account-type-aware repaper looks like in practice. FastTrackr's [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to keep these workstreams separate and tracked, and for firms running many of these at once, our tooling for [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) is designed to manage concurrent advisory and brokerage repapers without letting the fee-based accounts fall behind.

## FAQ

**Do advisory accounts transfer through ACATS like brokerage accounts?**
The assets do. ACATS moves the securities and cash in kind for both account types. What ACATS does not move is the advisory relationship. The client must sign a new investment management agreement with the new RIA, receive Form ADV Part 2 and Form CRS, and be set up for advisory billing, none of which happens automatically with the asset transfer.

**Why do advisory accounts have a higher NIGO rate in a transition?**
Advisory accounts require more fields than brokerage accounts, including a fee schedule, billing method, and model assignment, and that data often lives only in the old advisory agreement or portfolio system rather than on the brokerage statement. Each extra field re-keyed under deadline is a chance for a mismatch, which is why extracting and validating advisory data at the source cuts rejections.

**Can I assign my clients' advisory contracts to my new RIA?**
Generally no, not without consent. Under the Investment Advisers Act, an advisory contract cannot be assigned without the client's consent, so the standard practice is to have the client sign a new agreement with the new firm rather than port the old one. This is why every advisory account effectively originates a new relationship during the move.

**Should I repaper brokerage and advisory accounts on the same timeline?**
No. Segment the book by account type at kickoff and give advisory accounts more runway. Brokerage ACATS transfers can run in parallel and largely clear on their own, while advisory accounts need front-loaded data capture and a billing verification step before the new firm's first fee cycle. Treating them as one queue is how fee-based books fall behind.

**What advisory data should I capture first?**
Start with the fee schedule and billing method for every advisory account, because they are the hardest to source and sit on your critical path. Then confirm the model or sleeve assignment so the account is managed correctly on day one. Registration and cost basis matter for both account types, but the fee and billing fields are what separate an advisory repaper from a brokerage one.

