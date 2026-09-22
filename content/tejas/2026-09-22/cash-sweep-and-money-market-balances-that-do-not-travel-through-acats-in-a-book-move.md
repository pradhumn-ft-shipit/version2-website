---
title: "Cash Sweep and Money Market Balances That Do Not Travel Through ACATS in a Book Move"
topic: "Advisor Transitions & Repapering"
description: "Not all cash moves cleanly in an advisor transition. Bank-sweep deposits and proprietary money market funds often do not transfer in kind through ACATS, so they liquidate to a residual sweep that trickles in for months. Here is which cash travels, which gets left behind, and wher"
author: "FastTrackr AI Team"
---

Not all cash moves cleanly in a book transfer. Positions in transferable securities move in kind through ACATS, but bank-sweep deposits sit at partner banks and proprietary money market funds are not portable, so both are typically liquidated and paid out through a residual sweep that can trickle in for up to six months. AI flags each account's sweep type up front so the gap is expected, not discovered.

Operations teams plan a transition around the things that obviously go not-in-good-order: trusts, margin agreements, directly held securities. The cash gets waved off as the easy part, because cash is cash. Then the book lands, and a client calls because the twenty thousand dollars that showed as available at the old firm is not in the new account, and no one on the team can immediately say why. The answer is that the client's cash was not sitting in the account the way everyone assumed. It was in a bank-sweep deposit or a proprietary money market fund, and neither of those travels through ACATS the way a stock position does. Here is the mechanic, which cash moves and which does not, and where automation prevents the client-facing surprise.

## Why cash is not one thing in a brokerage account

The word cash hides three different arrangements, and they behave completely differently in a transfer. The first is a free credit balance, actual cash held by the broker-dealer in the account. The second is a bank-sweep deposit, where idle cash is automatically moved into deposit accounts at one or more partner banks under a sweep program, which is why the balance is FDIC-insured rather than covered by SIPC. The third is a money market mutual fund, a security the account holds, which may be a widely available fund or a proprietary fund the firm offers only to its own clients. The [SEC's investor bulletin on cash sweep programs](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/cash-sweep-programs-uninvested-cash-your-investment-accounts-investor-bulletin) lays out that uninvested cash is typically swept into either a bank deposit program or a money market fund product, and that distinction is exactly what decides how the balance moves in a transition.

The reason this matters is that ACATS moves securities positions and free credit balances between brokerage accounts, but a bank-sweep deposit is not a brokerage position, it is money sitting at a bank, and a proprietary money fund is a security the receiving firm cannot hold. So the transfer engine that cleanly moves a client's equities may leave the cash behind, not because anything went wrong, but because those balances were never in a form ACATS could carry. The client experiences it as money going missing. The team experiences it as a call they cannot answer. Both are avoidable if the sweep type is known before the transfer, not after.

## What actually happens to each kind of cash

Walk each arrangement through a full transfer and the behavior becomes predictable. A free credit balance generally moves with the ACATS transfer as cash, and is the least troublesome case. A widely available money market mutual fund may transfer in kind if the receiving firm can hold it, in which case the position simply moves like any other security. The trouble starts with the two forms most firms actually use for swept cash.

A bank-sweep deposit has to be un-swept first. The cash is pulled back from the partner banks into the account, then moves as a residual balance rather than traveling instantly with the securities. Under the mechanics of a [residual sweep in the ACATS process governed by FINRA's customer account transfer rule](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870), balances and payments that were not ready at the moment the transfer request was processed get swept over afterward, and the delivering account can stay linked to the receiving account for up to roughly six months to catch trailing dividends, interest, and residual cash. So a bank-sweep balance often does not show up on day one, it shows up later, in pieces.

A proprietary money market fund is worse, because the receiving firm usually cannot hold it at all. It has to be liquidated to cash at the old firm, and then the proceeds move as residual cash on the delivering firm's sweep schedule. That liquidation is a taxable-status and timing event the client should be told about in advance, and it puts the cash on the same trickle-in timeline as any other residual. This is the same failure pattern as any non-portable holding, which is why proprietary sweep funds belong in the same mental bucket as [non-transferable and proprietary assets that stall an ACATS book move](https://fasttrackr.ai/blog/non-transferable-and-proprietary-assets-what-stalls-an-acats-book-move-and-where-ai-flags-it-early): they do not fail loudly, they just do not arrive when everything else does.

## The residual sweep and the six-month tail

The residual sweep is the part clients never expect and teams rarely explain well. After the main ACATS transfer settles, the old account does not close instantly. It stays open, linked to the new account, and trailing amounts, a dividend that paid after the cutoff, interest credited on the swept deposits, cash from a liquidated fractional share or proprietary fund, get swept to the new firm on the delivering firm's own periodic schedule. That schedule is weekly at many firms, and the linkage can persist for up to about 180 days.

For a single account this is a footnote. Across a book of hundreds, it is a reconciliation problem with a long tail. Some portion of every client's cash may arrive after the account is otherwise complete, which means "done" is not the same as "every dollar has landed." A team that marks a household finished when the securities settle will get calls for months about small balances that are, in fact, arriving exactly as designed. The settle-date behavior underneath this, where pending activity freezes or delays parts of a transfer, is the same dynamic covered in [why unsettled trades and pending activity freeze an ACATS transfer](https://fasttrackr.ai/blog/the-settle-date-trap-why-unsettled-trades-and-pending-activity-freeze-an-acats-transfer). The cash tail is not a defect to be fixed, it is a timeline to be communicated, and the communication only works if the team knew the sweep type up front.

## Where AI flags the cash before it becomes a client call

The entire problem is a knowledge-timing problem: the information needed to set the client's expectation exists at the start, in the account data, but usually is not surfaced until a balance fails to appear. That is precisely the gap automation closes. A repapering tool that reads each account's holdings can classify the cash before the transfer, not after.

| Cash type at old firm | Moves in kind via ACATS? | What actually happens | Where AI flags it |
|---|---|---|---|
| Free credit balance | Usually yes, as cash | Moves with the transfer | Confirms amount matches expectation |
| Widely available money market fund | Sometimes, if receiving firm holds it | Transfers in kind or liquidates to residual cash | Checks whether the fund is holdable at the new firm |
| Bank-sweep deposit (FDIC program) | No, not as a position | Un-swept from partner banks, arrives as residual cash | Marks the account as residual-cash pending, sizes the balance |
| Proprietary money market fund | No, receiving firm cannot hold it | Liquidated at old firm, proceeds arrive on residual schedule | Flags for liquidation instruction and client tax notice |
| Trailing dividends and interest | No, arrive post-close | Swept over for up to about six months | Sets the six-month reconciliation watch |

The tool's job is to turn an after-the-fact surprise into a before-the-fact line item. The [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) layer reads the statement and identifies whether the cash is a free balance, a bank sweep, or a proprietary fund, then attaches the correct expectation and next step to each account. That is what lets the advisor tell the client, on the front end, that a specific balance will liquidate and arrive over the following weeks rather than instantly, which is the difference between a reassuring heads-up and an anxious phone call. Across the whole book, the same classification feeds the reconciliation watch, so no residual balance is quietly forgotten. This is the reconciliation-and-completeness role the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) plays throughout a move, applied to the one asset class everyone assumes is trivial.

What AI does not do is decide to liquidate a position or make the tax call. Liquidating a proprietary money fund realizes its status and timing consequences for the client, and instructing that liquidation is a professional decision that a human makes and the client authorizes. The tool flags the account, sizes the balance, drafts the client notice, and tracks the residual to completion. A person confirms the liquidation instruction, explains the tax picture, and signs off. That is the same boundary the platform holds everywhere: AI surfaces and stages, professionals decide and approve.

## Building the cash check into the transition plan

The fix is to treat cash as a screened category on day one, alongside trusts and margin, rather than as the easy leftover. During the initial data gather, classify every account's cash: how much is a free balance, how much is in a bank-sweep deposit, and whether any money market position is proprietary and therefore non-portable. Size the balances that will arrive as residual rather than in kind, and flag proprietary funds for a liquidation decision and a client conversation before the transfer, not after.

Then set expectations explicitly. Tell each client which of their cash moves immediately and which arrives over the following weeks, so the residual sweep reads as expected behavior rather than lost money. And keep the reconciliation watch open until the tail has cleared, because a household is not truly done while a residual balance is still scheduled to sweep. The pre-transition checklists that experienced teams use, such as the [transition paperwork and account-review steps mapped out by Kitces](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services-grier-rubeling-ria-paperwork-checklists-scripts/), reward exactly this kind of up-front classification, and doing it at scale across concurrent moves is where [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) protect both the timeline and the client relationship. The pattern of catching the awkward, easy-to-miss balances at the start rather than fielding them as complaints later is what the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows when the cash is planned rather than assumed.

Cash feels like the safe part of a book move because it is the part everyone understands as a number. It becomes a problem only because the number is sitting in a form the transfer engine cannot carry, and no one checked which form until a client noticed. Check first, explain early, reconcile to the end, and the one asset class that should never generate a support call stops doing so.

## Frequently asked questions

**Why did a client's cash not transfer with the rest of their account?**

Almost always because the cash was not a plain brokerage balance. If it was in a bank-sweep deposit, the money was sitting at partner banks under a sweep program, not in the brokerage account, so it had to be un-swept and sent over as residual cash rather than moving in kind with the securities. If it was in a proprietary money market fund, the receiving firm could not hold that fund, so it was liquidated at the old firm and the proceeds arrive on the delivering firm's residual sweep schedule. Nothing failed; the cash was simply in a form ACATS does not carry as a position.

**What is a residual sweep in an ACATS transfer?**

It is the process of moving over any cash or securities that were not ready at the moment the transfer request was processed. Trailing dividends, interest on swept deposits, proceeds from liquidated fractional shares or proprietary funds, and un-swept bank deposits all arrive after the main transfer through the residual sweep. The old account stays linked to the new one and sweeps these amounts on a periodic schedule, often weekly, for up to roughly six months. It is designed behavior, which is why setting the client's expectation in advance matters more than trying to prevent it.

**Do bank-sweep deposits move through ACATS?**

Not as a position. A bank-sweep deposit is FDIC-insured cash held at partner banks, not a security in the brokerage account, so the transfer first un-sweeps the money back into the account and then moves it as a residual cash balance. That means it commonly arrives after the securities rather than at the same moment. Sizing that balance up front and telling the client it will land shortly after the main transfer prevents the most common cash-related support call in a book move.

**Why are proprietary money market funds a problem in a transition?**

Because the receiving firm usually cannot hold a fund that the old firm offers only to its own clients. The position cannot transfer in kind, so it has to be liquidated to cash at the delivering firm, and the proceeds then arrive on the residual sweep timeline. The liquidation also carries timing and tax-status consequences the client should hear about before it happens. Flagging every proprietary sweep fund at the start, for a liquidation decision and a client conversation, keeps it from surfacing weeks later as an unexplained gap.

**How does AI help with cash in a book move?**

By classifying each account's cash before the transfer instead of after. Automation reads the statement, identifies whether a balance is a free credit balance, a bank-sweep deposit, or a proprietary money fund, sizes what will arrive as residual rather than in kind, and flags proprietary funds for a liquidation decision. That lets the advisor set the client's expectation up front and lets the team keep a reconciliation watch open until the six-month tail clears. The human still authorizes any liquidation and explains the tax picture; the tool makes sure nothing is silently stranded.

