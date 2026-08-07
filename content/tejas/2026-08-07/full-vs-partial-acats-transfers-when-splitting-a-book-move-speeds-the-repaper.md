---
title: "Full vs Partial ACATS Transfers: When Splitting a Book Move Speeds the Repaper"
topic: "Advisor Transitions & Repapering"
description: "A full ACATS transfer moves the whole account and closes it; a partial moves only the assets you name and leaves the account open. Here is how each behaves, when splitting a book move actually speeds the repaper, and where the nontransferable assets that stall a full transfer bel"
author: "FastTrackr AI Team"
image: full-vs-partial-acats-transfers-when-splitting-a-book-move-speeds-the-repaper-hero.png
imageAlt: "Full vs Partial ACATS Transfers: When Splitting a Book Move Speeds the Repaper"
---

A full ACATS transfer moves every eligible position and cash balance and closes the delivering account. A partial transfer moves only the assets you specifically name and leaves the old account open. In a book move, choosing full by default is usually right, but the accounts holding one nontransferable asset are where a partial transfer earns its place.

Most transition teams treat the full-versus-partial choice as a formality. You are moving the whole book, so you submit every account as a full transfer and move on. That instinct is correct for the clean majority of a book, and it is why straight-through processing works at all. The problem is the minority of accounts where a full transfer is the slowest possible path, because one asset in the account cannot travel and drags the entire transfer into rejection or manual handling. Knowing when to split those accounts into a partial-plus-cleanup pattern is the difference between an account that funds this week and one that sits in exception limbo for a month.

## What each transfer type actually does

The mechanics are defined, not a matter of custodian preference. ACATS is the Automated Customer Account Transfer Service operated by the National Securities Clearing Corporation, and the customer account transfer obligation itself sits in [FINRA Rule 11870](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870). Two transfer types run on that rail.

A **full transfer** instructs the delivering firm to send everything transferable in the account, then close the account. The receiving firm submits a Transfer Initiation Form, the delivering firm validates it, and on a clean account the assets settle over the standard ACATS cycle of roughly six business days. This is the default for a book move because the goal is to leave the old firm entirely.

A **partial transfer**, called a "specifically designated" transfer in the rule, moves only the assets you list on the TIF. The delivering account stays open with whatever you did not name still sitting in it. Partials exist for clients splitting assets across firms, but in a transition their real use is surgical: move the transferable positions now, and handle the one asset that will not travel on its own track.

| Dimension | Full transfer | Partial transfer |
|---|---|---|
| What moves | All transferable positions and cash | Only the assets named on the TIF |
| Delivering account | Closes on completion | Stays open |
| Best default use | The clean majority of a book move | Accounts with one nontransferable or problem asset |
| Failure mode | One bad asset can reject or stall the whole account | Leaves a residual account you must remember to close |
| Repaper impact | Fastest when the account is clean | Faster than a rejected full when one asset is the blocker |

## Why a full transfer stalls, and what causes it

A full transfer is only as fast as its slowest asset. The delivering firm validates the whole TIF, and problems cluster into a few predictable categories. FINRA's own [explanation of the brokerage account transfer process](https://www.finra.org/investors/learn-to-invest/brokerage-accounts/understanding-brokerage-account-transfer-process) names the usual suspects, and in practice they sort into three buckets.

The first is **registration and title mismatches**. ACATS validates on the account title and tax ID, not on the human. If the delivering account reads "John A. Smith" and the new paperwork reads "John Smith," the system rejects. Trusts, entities, and accounts touched by a death or divorce are where this bites hardest, which we cover in depth in [the registrations that break a repaper](https://fasttrackr.ai/blog/registrations-that-break-a-repaper-trusts-entities-life-events).

The second is **account-type and position mismatches**, where the receiving account type cannot hold an incoming position, or the numbers do not reconcile.

The third, and the one that changes the transfer-type decision, is **nontransferable assets**. Rule 11870 defines a nontransferable asset as a product the receiving firm does not have the relationship or agreement to carry: a proprietary fund of the delivering firm, a third-party product with no selling agreement at the new custodian, or a security the new platform simply does not support. When one of these sits in an account submitted as a full transfer, it does not quietly stay behind. It can reject or freeze the whole account, so a client whose other twelve positions were perfectly transferable waits on the one that was not.

## The decision: when to split an account into a partial

Here is the operative rule. Run a full transfer whenever every asset in the account is transferable to the new custodian. The moment an account contains a known nontransferable asset, stop and decide deliberately, because a full transfer on that account is often the slowest path to a funded book.

Sort each flagged account against three questions:

- **Is the blocking asset actually nontransferable, or just slow?** A proprietary fund with no home at the new custodian is nontransferable and needs a separate plan. A security that transfers but takes longer is not a reason to split; a full transfer still gets there.
- **Does the client need the transferable assets working now?** If the answer is yes, and it usually is during a transition, a partial transfer moves the clean positions immediately while the blocker is resolved on its own track. Waiting for a full transfer to clear the blocker keeps otherwise-good assets frozen.
- **What happens to the blocker?** It gets liquidated and moved as cash, moved on a separate non-ACATS track, or left in place by client choice. Each path has its own paperwork and its own timeline, and none of them should hold the rest of the account hostage.

When the transferable assets are large and time-sensitive and the blocker is a small proprietary position, the partial-first pattern is clearly right: move the book, clean up the residual. When the blocker is trivial and the whole account is small, a single full transfer with the nontransferable asset simply left behind is simpler. The judgment is about what keeps the most client assets funded fastest, not about a rule of thumb.

## The residual account you just created

A partial transfer solves the speed problem and creates a bookkeeping one: the delivering account is still open, holding whatever you did not move. That residual is where transitions quietly leak time and revenue if nobody owns it.

Two things live in that account and both need a plan. The first is the **nontransferable asset itself**, which now needs its own resolution: liquidation and a cash sweep, a separate transfer track for assets that never move through ACATS, or a documented decision to leave it. The assets that travel on their own tracks, annuities, alternatives, and held-away plans, are exactly the ones we map in [the assets that never move through ACATS](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup). The second is **residual credit**: dividends, interest, and other small balances that post to the old account after the main transfer. The delivering firm forwards these, generally within about ten business days of accrual, but only if the account is tracked until it is genuinely empty and closed.

The failure mode is predictable. The team celebrates a funded account, forgets the open residual, and three weeks later a dividend posts to a firm the client thinks they have left. Every partial transfer needs an owner and a close-out date, or it becomes the residual cleanup that runs six months past close.

## Where document intelligence changes the math

The full-versus-partial decision depends entirely on knowing, before you submit, which accounts hold a nontransferable asset. Do that knowledge-gathering by hand and you are reading every brokerage statement line by line, flagging proprietary funds and unsupported products across a whole book. Miss one and it surfaces as a rejected full transfer days later, when the fix is most expensive.

This is precisely the pre-submission validation that [FastTrackr's document intelligence](https://fasttrackr.ai/solutions/document-intelligence) is built for: extract every position from the inbound statements, check each against what the receiving custodian can carry, and flag the accounts that should be split before a single TIF goes out. The broader repapering workflow that decides which accounts move full, which move partial, and which need exception handling is what the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) coordinates end to end, so the transfer-type decision is made from data rather than from whichever rejections happened to show up last quarter. FINRA's [Regulatory Notice 22-19 on ACATS transfer timing and firm obligations](https://www.finra.org/rules-guidance/notices/22-19) is a useful reminder that the delivering firm's clock and validation duties are fixed, so the leverage you have is entirely on the submission you control.

## How this fits a book-level plan

At the scale of a full book, the pattern is straightforward once the data is in front of you. The large clean majority of accounts go out as full transfers in the normal batch. A smaller set, the ones your validation flagged for a nontransferable asset, get a deliberate call: partial-first where the transferable assets are worth moving now, full-with-a-known-exception where the blocker is trivial. Consultants running this across many advisors at once build the split decision into their intake, which is part of why [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) treat statement pre-validation as the first step rather than a late check. The outcome, a book that funds in tiers instead of waiting on its worst account, is the same operational lever behind the results in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently asked questions

**Should I use a full or partial ACATS transfer for a book move?**
Default to full transfers for the clean majority of the book, because the goal is to leave the old firm entirely and a full transfer closes the delivering account. Switch to a partial transfer only for accounts that contain a known nontransferable asset, where moving the transferable positions now and handling the blocker separately funds the client faster than waiting on a full transfer that may reject.

**What makes an asset nontransferable in ACATS?**
Under FINRA Rule 11870, a nontransferable asset is one the receiving firm does not have the relationship or agreement to carry. Common examples are a proprietary fund of the delivering firm, a third-party product for which the new custodian has no selling agreement, and securities the receiving platform does not support. These are the assets that stall or reject a full transfer, so identifying them before submission is what drives the full-versus-partial decision.

**Does a partial transfer close the old account?**
No. A partial, or specifically designated, transfer moves only the assets you name on the Transfer Initiation Form and leaves the delivering account open with everything else. That open residual account still needs an owner and a close-out date, both to resolve the nontransferable asset it holds and to catch residual credits like post-transfer dividends and interest, which the delivering firm forwards for a period after the main transfer.

**Will splitting an account into a partial transfer slow the overall move?**
For an account with a nontransferable asset, a partial transfer usually speeds the practical outcome, because it lets the transferable positions settle on the normal ACATS cycle instead of waiting on the blocker. The tradeoff is the residual account you must track and close, so the time you save on funding is only real if someone owns the cleanup.

**How do I know which accounts need a partial transfer before I submit?**
You have to read the holdings against what the receiving custodian can carry, account by account. Doing this by hand across a full book is where errors and late rejections come from. Automated statement extraction that flags proprietary and unsupported positions before any TIF is filed lets you make the full-versus-partial call from data at submission time, rather than discovering the blocker in a rejection days later.

