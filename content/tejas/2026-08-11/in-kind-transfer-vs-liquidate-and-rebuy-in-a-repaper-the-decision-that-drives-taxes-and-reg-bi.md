---
title: "In-Kind Transfer vs Liquidate and Rebuy in a Repaper: The Decision That Drives Taxes and Reg BI"
topic: "Advisor Transitions & Repapering"
description: "Moving a position in-kind or liquidating and rebuying it looks like an operations choice. It is a tax and Reg BI decision. Here is what changes, which assets force your hand, and how to document it."
author: "FastTrackr AI Team"
image: in-kind-transfer-vs-liquidate-and-rebuy-in-a-repaper-the-decision-that-drives-taxes-and-reg-bi-hero.png
imageAlt: "In-Kind Transfer vs Liquidate and Rebuy in a Repaper: The Decision That Drives Taxes and Reg BI"
---

For most of a book, the choice is made for you: an ACATS transfer moves positions in-kind, and nothing is sold, so there is no tax event and no securities recommendation to document. The decision that matters is the exception, the position that cannot move in-kind or that someone proposes to liquidate and rebuy at the new firm. That single choice converts a mechanical transfer into a taxable event and, often, a Reg BI recommendation, and getting it wrong exposes both the client and the advisor.

This piece is about that exception. It covers what actually changes when a position is liquidated instead of transferred in-kind, which assets force the decision whether you like it or not, the tax mechanics that surprise transition teams, when the choice triggers a Reg BI best-interest obligation, and how to document the call so it survives a later review. This is informational, not tax or legal advice; the client's specific facts and the firm's policies govern.

## The default is in-kind, and that is the point

An in-kind transfer moves a security exactly as it is held, from the carrying firm to the receiving firm, without selling it. Because nothing is sold, the client realizes no gain or loss, cost basis carries over, and the holding period is unbroken. The Automated Customer Account Transfer Service (ACATS) is built to do this: most ACATS transfers are in-kind, and a clean account typically completes in about six business days. Changing firms or custodians is not, by itself, a taxable event, and neither is moving the account, as long as nothing is sold in the process.

That is why in-kind is the default you protect. Every position you can move in-kind is a position with no tax consequence, no market-timing risk, and no recommendation to justify. The work of a clean repaper is largely the work of keeping positions in the in-kind column, and reserving the liquidate decision for the assets that genuinely require it.

## The assets that force the decision

Some holdings cannot move in-kind, and for those the liquidate question is not a preference, it is a constraint. Know them before you promise a client a tax-free move.

- **Proprietary and non-transferable funds.** House-brand mutual funds and some proprietary products do not port between firms. A carrying firm's proprietary fund often cannot be held at the receiving custodian, so it must be liquidated before or during the transfer. This is the classic surprise: a position the client assumed would move simply cannot.
- **Fractional shares.** ACATS moves whole shares. Fractional positions are commonly liquidated and sent as cash, which is a small but real taxable event the client did not expect.
- **Annuities, alternatives, and limited partnerships.** These never travel through ACATS at all. They move on separate tracks with their own paperwork, or they get surrendered, and each path has its own tax and timing profile. The full residual list is covered in [the assets that never move through ACATS](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup).
- **Mutual funds that route through Fund/SERV.** Fund positions do not move like equities; they depend on Networking matrix levels and Fund/SERV eligibility, and a mismatch forces a reject or a liquidation. See [why fund positions reject in an ACATS transfer](https://fasttrackr.ai/blog/mutual-fund-networking-and-nscc-fund-serv-why-fund-positions-reject-in-an-acats-transfer).

For everything else, the position can move in-kind, and the only reason to liquidate is a deliberate portfolio decision, which is exactly where Reg BI enters.

## What changes when you liquidate and rebuy

Liquidating a position and repurchasing it at the new firm looks operationally simple. It carries four consequences that an in-kind move does not.

**A realized tax event.** Selling crystallizes the gain or loss. In a taxable account, an appreciated position sold to move as cash generates a capital gain the client owes tax on, and selling in a high-income year can push the bill higher. In-kind avoids this entirely.

**Time out of the market.** Between the sale at the old firm and the repurchase at the new one, the client is in cash and exposed to market movement. A gap of days can mean a materially different repurchase price, and that risk falls on the client for a move that was supposed to be administrative.

**A reset holding period and possible wash-sale complications.** Repurchasing resets the holding period, which can turn a long-term position back into a short-term one. And if the position was sold at a loss and a substantially identical security is repurchased within 30 days, the wash-sale rule disallows the loss for now, deferring it into the new cost basis. Advisors who liquidate to harvest a loss and immediately rebuy can accidentally void the very benefit they were chasing.

**Broken cost basis continuity.** In-kind moves preserve basis, though it travels on a separate and slower track than the shares. Liquidation resets basis to the repurchase price. Either way, basis is where repaper reporting quietly breaks; [cost basis and tax lots in a repaper](https://fasttrackr.ai/blog/cost-basis-and-tax-lots-in-a-repaper) covers how noncovered lots and the 15-day basis-transfer window cause errors.

| Dimension | In-kind transfer | Liquidate and rebuy |
| --- | --- | --- |
| Tax event | None | Realized gain or loss |
| Cost basis | Carries over | Resets to repurchase price |
| Holding period | Unbroken | Reset |
| Market exposure | Continuous, position held throughout | Client in cash during the gap |
| Wash-sale risk | None | Loss disallowed if rebought within 30 days |
| Reg BI recommendation | Usually not | Typically yes, document it |
| Speed | ACATS, about six business days | Sale plus settlement plus repurchase |

## When the choice becomes a Reg BI recommendation

Here is the regulatory line transition teams miss. A repaper where the same positions move in-kind to the same account type is generally not a securities recommendation, so no best-interest analysis is required. The moment you recommend selling a position, or an account-type change forces a liquidation, you have likely made a recommendation subject to Regulation Best Interest, and the obligation to act in the client's best interest and document why attaches to that decision.

The practical test is not whether a trade happened but whether a recommendation drove it. A proprietary fund you are forced to liquidate because it cannot transfer is a constraint, and you document the constraint. A decision to liquidate an appreciated, transferable position and rebuy it in a different allocation is a recommendation, and it needs a best-interest rationale: why the tax cost, the time out of market, and the reset holding period are justified by the benefit to the client. Conflating the two is how a routine move becomes an examination finding. [When a repaper is not a recommendation](https://fasttrackr.ai/blog/when-a-repaper-is-not-a-recommendation-the-reg-bi-best-interest-file-a-breakaway-advisor-still-has-to-build) walks through exactly where the line sits and the best-interest file a breakaway still has to build.

## How to document the decision so it survives review

Every liquidate-or-transfer call on a position that could have moved in-kind should leave a record. Build the habit into the workflow, not the memory of whoever ran the move.

- **Flag the forced liquidations separately.** Proprietary funds, fractional shares, and non-transferable products should be tagged as constraints, with the reason they could not move in-kind. This is documentation, not a recommendation file, but it belongs in the record.
- **Attach a best-interest rationale to every discretionary liquidation.** When the position could have transferred but you chose to sell, record why: the tax cost estimated, the client's objective served, and the alternative of moving in-kind considered and rejected.
- **Capture the client's tax posture at decision time.** A liquidation that is reasonable for a client in a low-income year may not be for one facing a large gain. The rationale should reference the facts as they were known.
- **Preserve it with the rest of the transition record.** These decisions are books-and-records material and need to be retained and retrievable long after the move closes.

Getting this right at volume is a data problem as much as a compliance one. You have to know, position by position, which holdings can move in-kind and which cannot, before you talk to the client, so the tax and Reg BI conversation happens once and correctly. Our [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) reads the incoming statement and surfaces the positions, including the proprietary and non-transferable ones, so the forced-liquidation list is known at intake rather than discovered at the custodian. The [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) carries that classification through repapering, and the [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who run these moves at scale rely on catching the liquidation decisions early, when there is still time to plan around them. The cleaner-move outcome that follows is the pattern documented in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

For the underlying mechanics, Thrivent's overview of [in-kind transfers and which investments qualify](https://www.thrivent.com/insights/investing/understanding-in-kind-transfers-and-the-investments-that-qualify) explains what moves and what does not, the SEC's [tips on avoiding transfer delays](https://www.sec.gov/about/reports-publications/investorpubsacctxferhtm) covers the account-level snags, and Advisorfinder's ACAT transfer guide walks through the tax-free in-kind path and its exceptions.

## FAQ

**Is transferring an account to a new firm a taxable event?**
Not by itself. Moving an account between firms or custodians is not taxable, and neither is transferring positions in-kind through ACATS, because nothing is sold. A tax event is created only when a position is liquidated, whether because it cannot transfer in-kind or because someone chose to sell it. The default in-kind path preserves cost basis and holding period and realizes no gain or loss.

**Which holdings usually have to be liquidated instead of transferred in-kind?**
Proprietary and house-brand funds that the receiving custodian cannot hold, fractional shares, and certain products routed through Fund/SERV that hit a Networking or eligibility mismatch. Annuities, alternatives, and limited partnerships do not move through ACATS at all and follow separate paths. Everything else is generally transferable in-kind, so the liquidate decision on a transferable position is a deliberate one that carries a Reg BI obligation.

**When does a repaper decision trigger Reg BI?**
When a recommendation drives a sale. Moving the same positions in-kind to the same account type is generally not a recommendation. Recommending that a client liquidate a transferable position, or an account-type change that forces liquidation, typically is, and it requires a best-interest analysis and documentation. The test is whether you recommended the transaction, not merely whether a transaction occurred. Forced liquidations of non-transferable assets are documented as constraints rather than recommendations.

**What is the wash-sale risk in a liquidate-and-rebuy?**
If a position is sold at a loss and a substantially identical security is repurchased within 30 days before or after the sale, the wash-sale rule disallows the loss for the current year and rolls it into the new position's cost basis. An advisor who liquidates to harvest a loss during a transition and immediately rebuys the same security at the new firm can inadvertently void the loss. Plan the timing or the security selection to avoid it.

**How do I decide in-kind versus liquidate for a transferable position?**
Default to in-kind unless there is a clear, documented client benefit to selling that outweighs the tax cost, the time out of the market, and the reset holding period. When you do choose to liquidate a position that could have moved, treat it as a Reg BI recommendation: record the rationale, the tax impact, the client's objective, and the in-kind alternative you considered. Knowing which positions are even eligible to move in-kind before the client conversation, from the incoming statement, is what lets you make the call deliberately rather than react to a custodian rejection.

