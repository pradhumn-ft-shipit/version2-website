---
title: "How to Order a Repaper by AUM at Risk Instead of Account Number"
topic: "Advisor Transitions & Repapering"
description: "Most repapers process accounts in whatever order the queue serves them. But attrition is not evenly spread and every week in limbo raises the odds a client reconsiders, so the sequence should follow AUM at risk. Here is how to score and order a book move by assets at risk, and wh"
author: "FastTrackr AI Team"
---

Most repapers move accounts in whatever order the queue happens to serve them, by account number, by the order forms were generated, by whichever advisor's book got worked first. That is the wrong sequence, because the risk in a book is not spread evenly. A small share of households usually holds most of the assets, small and younger clients are the likeliest to leave, and every extra week a client sits in limbo is another week they might reconsider or field a competitor's call. The right order follows AUM at risk: the households with the most assets and the highest probability of leaving move first and land fastest. AI can build that sequence from reconciled data and keep the highest-risk households on the critical path. A human still owns the judgment about who is actually wavering and makes the calls that keep them.

The reason sequence matters at all is that a transition leaks assets, and the leak is time-sensitive. When advisors change firm affiliation, roughly 19 percent of client assets are lost on average, and in a typical 90-day post-acquisition window AUM attrition often runs 10 to 15 percent against a planned 5 percent. Speed is the single highest-leverage lever, because the faster an account is opened and landed, the less time the client has to reconsider. If speed is the lever, then the question of what you speed up first is the strategy, and answering it by account number leaves your most valuable, most fragile relationships sitting in the queue behind accounts that were never going anywhere.

## Why account-number order quietly costs you the book

Processing in queue order treats every account as equally urgent, which is the opposite of true. Two facts about attrition make even ordering actively harmful.

**Attrition concentrates.** Household attrition is not uniform. External acquisitions see roughly 11 percent household attrition while internal successions see around 2 percent, and within any book the losses cluster among specific client types. As [SkyView's analysis of client attrition after acquisition](https://www.skyview.com/articles/how-many-clients-walk-after-acquisition.html) notes, both smaller and younger clients are markedly less likely to stay. Meanwhile the assets concentrate too: when a large share of a book's assets sits in just a few households, losing even one of those households after the move is a serious revenue and confidence hit. The accounts that matter most and the accounts most likely to walk are identifiable in advance, and neither correlates with account number.

**Every week in limbo is a week of exposure.** The period between resignation and a landed account is the dark period, when the client is neither fully at the old firm nor settled at the new one, and it is when doubt and competitor outreach do their damage, a window broken down in [the dark period after resignation](https://fasttrackr.ai/blog/the-dark-period-after-resignation-how-long-clients-sit-in-limbo-and-the-windows-you-can-actually-compress). Because the [cost of switching can genuinely give clients pause](https://www.cerulli.com/press-releases/for-advisors-the-costs-of-switching-may-outweigh-the-benefits), a slow landing gives that hesitation time to harden into a decision to stay behind. The longer a valuable household is exposed, the more likely you lose it, so the households you most need to keep are exactly the ones you least want lingering in the queue.

Put those together and the conclusion is direct: order by exposure, not by administrative sequence. The book move should attack the assets at risk first.

## Building an AUM-at-risk score

The sequencing input is a simple, defensible score per household: the assets you would lose times the probability you lose them. You are ranking households by expected assets at risk, and moving the top of that ranking first.

The AUM side is straightforward once the data is clean: total the household's assets across all its accounts. The probability side draws on the attrition signals that transitions reliably show. The pre-move triage that produces this risk read is covered in [the pre-move attrition risk score](https://fasttrackr.ai/blog/pre-move-attrition-risk-score-household-triage); the inputs that consistently matter include the following.

| Risk input | Higher-risk signal | Why it raises attrition probability |
|---|---|---|
| Household AUM | Concentrated, high-value households | One loss moves the whole book; worth landing first |
| Client age | Younger clients | Statistically less likely to stay through a move |
| Account size | Smaller accounts | Lower stickiness, less relationship depth |
| Relationship depth | Few products, low engagement | Weaker tie to the advisor personally |
| Complexity | Trusts, entities, held-away, annuities | Longer path means longer exposure in the dark period |
| Tenure and contact recency | New or rarely-contacted clients | Less loyalty built, easier to lose |

Multiply the AUM by the modeled probability and you get expected AUM at risk, and that number, not the account number, sets the order. A large household with wobbly signals goes to the front. A tiny, decades-loyal account can wait without much downside.

Two nuances keep the score honest. First, a highly complex household, one with trusts, entities, annuities, or held-away assets, needs an early start even if its raw probability looks moderate, because its path is long and a late start means a long exposure. The complexity that strands these accounts is the same set of registrations and non-transferable assets that stall an ACATS book move. Second, the score is a prioritization tool, not a verdict; it tells you where to point attention first, not which clients to write off.

## Sequencing the queue, not just scoring it

A score only helps if it reorders the actual work. Sequencing by AUM at risk means the high-expected-loss households are the ones whose accounts open first, whose transfer initiation forms are validated first, and whose signing sessions go out first, so they clear the queues and land while their exposure window is shortest. This is a deliberate override of first-in, first-out, and it interacts with the real constraint that book moves finish only as fast as their slowest necessary task, the idea behind [the repaper critical path](https://fasttrackr.ai/blog/the-repaper-critical-path-which-single-task-actually-determines-when-a-book-finishes-moving). The goal is to arrange the sequence so that the highest-risk households are never the ones waiting on the critical path; the low-risk, simple accounts absorb the wait instead.

There is a limit to hold. Sequencing by risk shortens exposure for the households that matter most, but it does not license cutting corners on good order to rush them. A high-value household rushed into a not-in-good-order rejection lands later than one done right the first time, and it also signals disorganization to exactly the client you most want to reassure. Speed and good order are not in tension when the validation happens before submission; they are in tension only when speed means skipping the check. Front-loaded validation is what lets you move fast on the accounts that count without spending their goodwill on a re-sign.

## Where AI builds the queue, and where the human owns the relationship

The sequencing work is data-heavy and continuous, which is where AI carries the load, while every client-facing judgment stays with the advisor.

AI computes the score from reconciled data. Building expected AUM at risk requires one clean record per household, assets totaled across accounts, ages and tenure and product counts attached, complexity flagged. That match-and-merge across custodian, CRM, and planning records is the reconciliation problem AI is built for, and it is the foundation of FastTrackr's [document intelligence](https://fasttrackr.ai/solutions/document-intelligence). Without clean data the score is guesswork; with it the ranking is defensible.

AI sequences and keeps high-risk households on the fast path. It orders the account-opening, validation, and signing work by expected AUM at risk, front-loads good-order validation on the top of the list so those accounts clear the queues once, and tracks live status so the team can see whether the households that matter most are actually moving fastest. The end-to-end version, across many accounts and advisors at once, is the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions).

What stays human is the relationship and the judgment. The model can flag a household as high-risk from age, size, and engagement, but only the advisor knows that a particular client is quietly unhappy, or perfectly loyal despite looking risky on paper. The advisor decides who gets the early personal call, what to say, and how to reassure a wavering client, and signs off on every registration and suitability call before a form goes out. AI tells you where to point the effort; the advisor supplies the effort. FastTrackr reports that front-loading reconciliation and validation compresses landing times, and those are FastTrackr's reported results rather than an independent benchmark, but the strategic point is model-agnostic: attrition is concentrated and time-sensitive, so the sequence should follow the assets at risk. A worked example of a book landing cleanly is in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## For consultants and broker-dealers, the sequence is portfolio management

For a single advisor, ordering by AUM at risk is smart triage. For a consultant or an independent broker-dealer running many moves at once, it becomes portfolio management: across every advisor's book, the households with the highest expected assets at risk should compete for capacity first, regardless of which advisor they belong to or where they sit in an account-number sequence. A recruiting desk that sequences its combined queue by risk protects the most revenue per unit of operational effort, which is a different and better objective than finishing each book in the order it arrived. That cross-book prioritization is exactly the discipline that separates a scaled transition program from a set of parallel scrambles, and it is why teams that run transitions at volume, including [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants), treat the queue as something to order by exposure rather than to serve in arrival order. The accounts were never equally urgent. Sequence them as if that were true.

## Frequently asked questions

**Why is account-number order the wrong way to sequence a repaper?**

Because it treats every account as equally urgent when attrition is highly concentrated. A small number of households usually holds most of a book's assets, and the clients likeliest to leave, smaller and younger ones, are identifiable in advance, but neither the value nor the risk correlates with account number. Every week an account sits in limbo raises the chance the client reconsiders, so serving the queue in arrival order leaves your most valuable and most fragile relationships waiting behind accounts that were never going to leave. Ordering by assets at risk shortens exposure where a loss would hurt most.

**What is an AUM-at-risk score and how do I build one?**

It is expected assets at risk per household: the household's total AUM multiplied by the modeled probability that the household leaves. Total the assets across all of a household's accounts for the AUM side. For the probability side, use the signals transitions reliably show, younger clients and smaller accounts are less likely to stay, shallow relationships and long, complex account structures raise exposure, and low tenure or recent lack of contact adds risk. Rank households by the product of the two, and let that ranking, not the account number, set the order in which accounts are opened, validated, and sent for signature.

**Does sequencing by risk mean rushing the high-value accounts?**

No. Speed and good order only conflict when speed means skipping validation. A high-value household rushed into a not-in-good-order rejection lands later than one done correctly the first time, and it signals disorganization to the client you most need to reassure. Sequencing by AUM at risk means the highest-exposure households are first in line for account opening, validation, and signing, so they clear the queues while their exposure window is shortest, but each of those steps still gets full pre-submission validation. The point is to move fast on the accounts that count without spending their goodwill on a re-sign.

**How does complexity factor into the sequence?**

Complex households need an early start even when their raw attrition probability looks only moderate, because their path is long. Trusts, entities, annuities, and held-away assets each add steps and can stall an ACATS book move, so a complex household that starts late stays exposed in the dark period for a long time. Treat high complexity as a reason to move a household toward the front of the queue independent of its risk score, because the calendar cost of a late start is highest exactly where the path is longest. The score points to fragile value; complexity points to long exposure, and both belong at the front.

**Where does AI help with sequencing, and what stays with the advisor?**

AI does the data work: it reconciles one clean record per household across custodian, CRM, and planning systems, totals AUM, attaches age, tenure, product count, and complexity flags, computes the expected-assets-at-risk score, orders the account-opening, validation, and signing work by that score, and tracks whether the highest-risk households are actually moving fastest. The advisor owns the relationship: deciding which client gets the early personal call, judging who is genuinely wavering versus loyal despite a risky profile, and approving every registration and suitability call before a form is sent. AI tells you where to aim the effort; the advisor supplies the reassurance and signs.

