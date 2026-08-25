---
title: "Transition Modeling Tools: The Inputs That Predict a Repaper's Timeline and Cost Before You Move"
topic: "Advisor Transitions & Repapering"
description: "A transition modeling tool turns a book's shape into a timeline, a cost, and an AUM-at-risk number before you move. Here are the input variables that actually drive the model and how to read what it tells you."
author: "FastTrackr AI Team"
image: transition-modeling-tools-the-inputs-that-predict-a-repaper-s-timeline-and-cost-before-you-move-hero.png
imageAlt: "Transition Modeling Tools: The Inputs That Predict a Repaper's Timeline and Cost Before You Move"
---

A transition modeling tool predicts a repaper's timeline, cost, and AUM at risk from a handful of inputs: the account mix by move-path, the NIGO rate you can realistically hit, your desk's daily packet capacity, and the signature latency you expect from clients. Feed it the book's actual shape and it turns a vague "a few months" into a dated curve you can plan and staff against.

Every advisor weighing a move asks the same three questions, and generic answers fail all of them. How long will this take? What will it cost me in time, money, and lost assets? Is it feasible with the team I have? The honest answer to each is "it depends on the book," which is useless until you make "it depends" computable. A transition modeling tool does exactly that: it takes the specific shape of a specific book and returns a timeline, a cost, and an at-risk number, so the decision rests on this book's math rather than an industry average that describes no one.

This is a guide to what actually drives that model, aimed at the advisor or ops director who wants to understand the inputs rather than trust a black box. Understand the four variables that move the output most and you can build a rough model in a spreadsheet, pressure-test a vendor's tool, or read a consultant's projection with a skeptical eye.

## Why an average timeline lies to you

The number everyone quotes, ACATS settles in about six business days, is true for one clean account and misleading for a book. The [FINRA customer account transfer rule](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870) does define a standard settlement window for a clean, in-good-order transfer, but a book is not a clean account. It is a mix of fast straight-through accounts, accounts with one wrinkle, and slow non-ACATS assets that move on their own clocks, and the total timeline is set by that mix, not by the six-day figure. The account-by-account reality of how long a real book takes, broken out by asset type, is laid out in [how long an account transfer really takes by asset type](https://fasttrackr.ai/blog/account-transfer-timeline-acats-by-asset-type), and the headline is that the average hides everything that matters.

A modeling tool exists to replace the average with a distribution. Instead of "a few months," it produces a curve: this share of your assets lands in the first two weeks, this share by week six, this tail of trusts and annuities finishes around month four. That curve is what you staff against and what you promise clients, and it is only as good as the four inputs that shape it.

## Input one: account mix by move-path

The single most important input is how the book decomposes by how each account moves. Classify every account into one of three paths, because each path has a fundamentally different clock:

Straight-through ACATS accounts, standard brokerage and retirement, move fast and predictably. A book that is heavily weighted here has a short, tight timeline. Accounts with a single exception, a beneficiary re-designation, a non-carrying feature, add a modest, batchable delay. Non-ACATS assets, trusts, annuities, alternatives, held-away plans, carry long, mostly-fixed timelines set by transfer agents and carriers that no amount of desk effort compresses.

| Move-path | Typical share of a book | Clock driver | Effect on the model |
|---|---|---|---|
| Straight-through ACATS | Roughly four in five accounts | Automated transfer window | Sets the fast front of the curve |
| Single-exception accounts | A modest middle slice | Batchable manual step | Second wave, small added time |
| Non-ACATS assets | The long tail | Transfer agents, carriers | Sets the total end date |

The model's timeline output is dominated by the third row, because the last account to land defines "done." Two books of identical AUM can have wildly different timelines if one is 85 percent straight-through and the other is thick with annuities and trusts. A modeling tool that does not ask for this decomposition is not modeling your book; it is quoting the average with extra steps.

## Input two: the NIGO rate you can realistically hit

The second driver is your not-in-good-order rate, the share of packets the custodian rejects, because every reject is a one-to-three-week rebook that pushes accounts down the curve. Industry NIGO rates in paper-heavy onboarding commonly run from 20 to 40 percent, and the difference between the top and bottom of that range roughly doubles the effective timeline for the affected accounts.

This input is the one you can most change, which makes it the most important lever in the model, not just an input. A model should let you run two scenarios, your current manual NIGO rate and the lower rate achievable with pre-submission validation, so you can see the timeline and cost difference the reduction buys. The mechanics of measuring and driving down your own reject rate, and its outsized effect on the whole timeline, are covered in the [under-30-day repapering timeline benchmark](https://fasttrackr.ai/blog/repapering-timeline-benchmark-under-30-days). Feeding a realistic NIGO rate, not an optimistic one, is what keeps the model honest.

## Input three: desk capacity

The third input is throughput, how many complete account packets your team can actually clear per day. This is a hard ceiling, and it is lower than most teams assume: a specialist working without automation completes roughly 10 to 15 complete packets a day once rework is counted, so a three-person desk moves about 30 to 45 clean packets daily regardless of urgency.

Capacity interacts with account mix to set the real timeline. A large book against a small desk queues, and the queue is often the biggest single component of the total time, larger than any custodian's processing window. A modeling tool has to divide the book by the desk's daily ceiling to find where accounts wait for a specialist rather than for a custodian, because that waiting is the part you control by staffing or automating. This is also where the model doubles as a staffing tool: it tells you whether the book fits the team you have or needs more hands or more automation to hit the date you want.

## Input four: signature and client-response latency

The fourth input is the human delay, how long clients take to return signed paperwork. A packet cannot be submitted until the client signs, and clients are slow, distracted, and easily fatigued by a stack of forms. Signature latency is often underestimated in models because it happens outside the firm's walls, but it sits directly on the critical path.

The lever here is the number of times you ask the client to act. Every additional signing event is a fresh chance for the client to stall, and paperwork fatigue converts directly into timeline drift and, at the extreme, attrition. A model should treat signature latency as a variable that improves when you batch forms so the client signs once instead of five times, because that batching is a design choice, not a fixed cost. Reducing client touches is one of the few levers that shortens the timeline and protects retention at the same time.

## What the model outputs: three numbers, not one

A good transition model returns three linked outputs, and reading them together is the point.

The timeline curve tells you when assets land, which drives client communication and revenue timing. The cost figure, staff hours plus technology plus the revenue lost while assets are not billing, gives you the true price of the move, and the framework for building that cost-per-transition number is detailed in the [advisor transition technology ROI and cost-per-transition model](https://fasttrackr.ai/blog/advisor-transition-technology-roi-cost-per-transition-benchmark). The third output, AUM at risk, is the one advisors most want and most often get wrong.

Attrition is not a single industry number. Cerulli's research puts asset loss at roughly 22 percent for a move between broker-dealers, around 18 percent moving from a broker-dealer to independence, and about 11 percent for a move between independent firms, with overall losses near a fifth of client assets in a typical affiliation change, figures summarized in Cerulli's work on [transition support and advisor retention](https://www.cerulli.com/press-releases/new-wealth-management-research-finds-transition-support-services-critical-to-retaining-assets-during-advisor-moves). A model should apply the rate that matches your move type, then adjust it for the operational factors you control, because much of that loss is operational, driven by a slow, painful repaper, not by client disloyalty. The household-level version of this risk, scoring which specific clients are likely to leave, is worth pairing with the aggregate model and is covered in the [pre-move attrition risk score](https://fasttrackr.ai/blog/pre-move-attrition-risk-score-household-triage).

## Use the model to change the answer, not just read it

The reason to build the model is not to accept its first output. It is to find the levers that move the output and decide which to pull. The four inputs are not all equally changeable: account mix is mostly fixed by the book, but NIGO rate, effective desk capacity, and signature latency all improve with the same two interventions.

The first is document automation. AI [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) extracts and validates statement data before submission, which lowers the NIGO rate and raises effective throughput by cutting the hand-keying and rework that eat specialist hours. In the model, that shows up as a shorter timeline and a lower cost for the same book. The second is running the whole move as one system rather than a pile of manual checklists, which is what a purpose-built [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) provides, and the compounding effect of pulling these levers on a real book is documented in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

Run the model twice, once at your current operating numbers and once at the numbers automation makes achievable, and the gap between the two curves is the concrete value of changing how you transition. That comparison is precisely the analysis firms and [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) use to justify the investment before a move, turning a modeling tool from a passive forecast into a decision that shortens the timeline, cuts the cost, and protects the book. A model that only tells you what will happen is half a tool. A model that shows you what you can change is the whole one.

## Frequently asked questions

**What does a transition modeling tool actually predict?** Three linked outputs: a timeline curve showing when assets land, a cost figure combining staff hours, technology, and revenue lost while assets are not billing, and an AUM-at-risk estimate. It computes these from the book's account mix by move-path, the achievable NIGO rate, the desk's daily packet capacity, and expected signature latency. The value is replacing a vague "a few months" with a dated curve you can staff, communicate, and budget against, specific to this book rather than an industry average.

**Why is the six-business-day ACATS figure a bad timeline estimate?** Because it describes one clean, in-good-order account, not a book. A real book is a mix of fast straight-through accounts, single-exception accounts, and slow non-ACATS assets like trusts and annuities that move on their own long clocks. The total timeline is set by that mix and by the last account to land, not by the six-day window. Two books of equal AUM can have very different timelines depending on how much of each is straight-through versus non-ACATS, which is exactly what the model captures.

**Which input matters most to the timeline?** The account mix by move-path dominates the end date, because the slow non-ACATS tail sets when the book is fully landed. But the NIGO rate is the most important lever you can change: reject rates commonly run 20 to 40 percent, and each reject is a multi-week rebook, so cutting the rate roughly compresses the timeline for affected accounts. Desk capacity and signature latency also move the curve. Model account mix to understand the timeline, then pull NIGO, capacity, and signatures to shorten it.

**How much AUM should I expect to lose in a transition?** It depends on move type, not a single number. Cerulli's research indicates roughly 22 percent asset loss moving between broker-dealers, around 18 percent from a broker-dealer to independence, and about 11 percent between independent firms, with overall losses near a fifth of client assets. Apply the rate matching your move, then adjust for operational factors, because much of that loss comes from a slow, painful repaper rather than client disloyalty, which means a faster, cleaner transition measurably protects assets the average would write off.

**Can a modeling tool tell me whether my team can handle the move?** Yes, that is one of its most useful outputs. By dividing the book by your desk's daily packet ceiling, roughly 10 to 15 complete packets per specialist per day once rework is counted, the model shows where accounts will queue for a specialist rather than for a custodian. That queue is often the largest single component of the timeline and the part you control. The model then doubles as a staffing tool, showing whether the book fits your team or needs more hands or automation to hit your target date.

