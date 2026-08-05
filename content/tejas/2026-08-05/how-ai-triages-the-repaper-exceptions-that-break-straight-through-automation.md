---
title: "How AI Triages the Repaper Exceptions That Break Straight-Through Automation"
topic: "Advisor Transitions & Repapering"
description: "In advisor repapering, roughly 80 percent of accounts flow straight through and the other 20 percent break into exceptions. AI earns its keep on the exceptions: classifying, routing, and prioritizing the cases a rules engine cannot clear. Here is how that triage actually works."
author: "FastTrackr AI Team"
image: how-ai-triages-the-repaper-exceptions-that-break-straight-through-automation-hero.png
imageAlt: "How AI Triages the Repaper Exceptions That Break Straight-Through Automation"
---

In an advisor repaper, roughly 80 percent of accounts flow straight through to a submission-ready form, and the other 20 percent break into an exception queue. AI earns its keep on that 20 percent, classifying, routing, prioritizing, and pre-working the cases a rules engine cannot clear, not by automating the accounts that were never hard.

The happy path in a repaper is close to a solved problem. A clean individual account with covered positions and matching registration data can flow from statement to submitted form with almost no human touch. The money and the pain live in the accounts that break straight-through processing, because that residue is where NIGO rejects, timeline slippage, and day-one client frustration all originate.

Most transition automation is sold on the straight-through number. The real operational question is what happens to everything that does not go straight through. This piece breaks down what an exception actually is in a repaper, why a fixed share of any book will always generate them, and how AI classifies, routes, and prioritizes exceptions so a team clears them in hours instead of discovering them at the custodian a week later.

## Straight-through processing is real, but it is only the first 80 percent

Straight-through processing (STP) in repapering means an account moves from source document to a submission-ready package without manual data entry or manual review. On a clean book, modern platforms clear a large majority of accounts this way. Vendor claims of NIGO reductions above 90 percent, like the figures Docupace summarizes in its explainer on what a NIGO is, describe the effect of pushing more accounts onto that automated path and catching field errors before submission.

But STP has a ceiling that no amount of tooling removes, because the accounts that break it are not breaking on data entry. They break on judgment. An account with a trust registration, a beneficiary that does not match the delivering firm's records, or an asset that will not travel through ACATS is not a formatting problem a validation rule can fix. It is a decision that requires knowing what the receiving custodian will accept and what the client actually intends. The distinction between the mechanical work AI clears and the judgment work it cannot is mapped in detail in the workflow-by-workflow breakdown of [where AI actually helps in an advisor transition](https://fasttrackr.ai/blog/where-ai-helps-advisor-transition-workflow-breakdown), and the exception queue is precisely where that line falls.

## Why a fixed share of every book becomes an exception

Exceptions are not a sign of a bad process. They are a structural property of moving a real book, and they cluster into predictable causes. Understanding the taxonomy is what lets you automate the triage rather than treating every exception as a surprise.

| Exception class | What triggers it | Why STP cannot clear it |
|---|---|---|
| Registration mismatch | Trusts, entities, joint-to-individual changes, name or tax ID differences | Requires matching against delivering-firm records and a judgment on the correct target registration |
| Non-transferable asset | Annuities, alternatives, proprietary funds, held-away plans | Moves on a separate track with its own paperwork, outside ACATS entirely |
| Life-event freeze | Death, divorce, incapacity, court-ordered restrictions | Documentation and authority must be resolved before any transfer |
| Feature re-establishment | Margin, options approval, discretion, standing instructions | Firm-granted permissions that end with the old account and need new approvals |
| Document quality | Illegible statement, missing pages, outdated form version | Extraction confidence too low to submit without review |

The first four are judgment exceptions. The fifth is a confidence exception, and it is the one AI resolves most directly. The point of building the taxonomy is that once you know the distribution of exception classes across your book, you can route each class to the right resolution path automatically. Reject-code research consistently shows a small number of reason categories driving the majority of ACATS rebooks, which is the same logic applied at submission time; the reject-side view lives in [ACATS reject codes decoded and how pre-validation stops them](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation).

## What AI triage actually does to an exception

Triage is not resolution. It is the set of steps that turns a raw exception into a routed, prioritized, pre-worked case a human can close quickly. Four functions do the work.

### Classify

The first job is putting each exception in the right bucket without a person reading it. AI document intelligence extracts the registration type, asset mix, and account features from the source statement, then classifies the exception by the taxonomy above. An account that will not clear STP because it holds a variable annuity gets tagged as a non-transferable-asset exception, not thrown into an undifferentiated error pile. This extraction step is the same capability that pre-fills clean accounts, and the way [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) reads a statement is what makes accurate classification possible at the moment the exception is created rather than after a person opens it.

### Route

A classified exception goes to the resolution path built for its class. A registration mismatch routes to the specialist who reconciles against delivering-firm records. A life-event freeze routes to compliance for the documentation gate. A low-confidence extraction routes back for a quick human verify rather than to a securities expert who does not need to see it. Routing by class is what stops your most expensive people from spending the afternoon sorting a queue instead of clearing it.

### Prioritize

Not every exception carries equal weight. An exception on a household representing a large share of the moving AUM, or one that gates a client's ability to trade on day one, should surface above a residual cleanup item that can wait a month. AI prioritizes the queue by the two variables that actually matter, revenue at risk and time sensitivity, so the team works the cases in the order that protects the book rather than in the order they arrived.

### Pre-work

The highest-value triage function is preparing the exception so the human does less. When AI classifies a margin-feature exception, it can also assemble the new margin agreement and pre-fill it from the extracted data, so the specialist reviews and approves rather than builds from scratch. Pre-working the exception is where the hours actually collapse, because the human step shrinks from research plus paperwork to a single verify-and-submit decision.

## Keep a human on every judgment exception

The failure mode of exception automation is letting the model close cases it should only prepare. A confidence exception on a blurry statement is safe for AI to resolve once a person confirms the extracted fields. A trust registration or a divorce freeze is not, because getting it wrong produces a rejected transfer or a compliance problem that costs far more than the minutes saved. The correct design is straightforward: AI clears the confidence exceptions under human confirmation, and it triages the judgment exceptions but leaves the decision to a person. That division is why a well-run exception queue reduces headcount pressure without adding regulatory risk, and it is the same principle that lets a lean team run many transitions at once, as laid out in the playbook for [managing 50 or more concurrent advisor onboardings](https://fasttrackr.ai/blog/managing-50-concurrent-advisor-onboardings-bd-recruiting).

## The metrics that tell you the triage is working

If you manage a repaper by the straight-through rate alone, you are measuring the easy 80 percent and ignoring the part that decides your timeline. Track the exception queue directly with four numbers:

- **Exception rate by class.** The share of accounts landing in each taxonomy bucket. A rising registration-mismatch rate points at a data problem upstream, not a repaper problem.
- **Time-to-clear by class.** How long an exception sits before it is resolved, split by class. This is where a slow book actually loses days.
- **Auto-cleared share.** The percentage of exceptions AI closed under human confirmation without escalating to a specialist. This is the real automation number, and it is far more honest than a headline STP figure.
- **Rejects that started as missed exceptions.** ACATS rejects traced back to an exception the queue should have caught before submission. This closes the loop between your triage and the custodian's response.

Watched together, these tell you whether the triage is compressing the timeline or just relabeling the backlog. A transition that moved a full book on schedule usually shows a high auto-cleared share and a short time-to-clear on the judgment classes, which is the pattern behind a clean [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Why this matters more at scale

For a solo breakaway with 150 accounts, an exception queue is a spreadsheet and a careful week. For a consulting firm or a broker-dealer recruiting team running many books at once, the exceptions from every concurrent transition pool into a single operational load, and manual triage stops scaling. This is the environment where classify-route-prioritize-pre-work changes the economics, because the same specialists clear a far larger volume when the queue arrives sorted and pre-worked instead of raw. Firms that run transitions as a repeatable service rather than a one-off, the audience served by FastTrackr's work with [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants), feel this most, since their margin depends on clearing exceptions with a fixed team across an unpredictable inbound volume.

The broader mechanics of moving a book cleanly, from pre-validation to funding, sit inside the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) itself, and SmartAsset's [overview of repapering](https://smartasset.com/advisor-resources/repapering) is a useful plain-language reference for advisors who want the end-to-end picture before they focus on the exception layer.

## FAQ

**What is an exception in advisor repapering?**
An exception is any account that cannot flow straight through from source document to submission-ready form without human judgment. Clean individual accounts with covered positions usually clear automatically. The exceptions are accounts with trust or entity registrations, non-transferable assets like annuities, life-event freezes, features that must be re-established, or documents too low-quality to extract confidently. They are a structural share of any real book, not a sign of a broken process.

**What share of a book typically breaks straight-through processing?**
It varies by book composition, but a useful planning assumption is that a large majority of accounts clear automatically while a meaningful minority, often around a fifth, land in the exception queue. Books heavy in trusts, entities, annuities, or alternatives skew higher. The exact share matters less than knowing the distribution of exception classes, because that distribution is what lets you route each type to the right resolution path.

**Can AI resolve repaper exceptions on its own?**
Only the confidence exceptions, and only under human confirmation. When an exception exists because extraction confidence was too low, AI can prepare the corrected fields and a person verifies them. Judgment exceptions like trust registrations, divorce or death freezes, and restricted accounts should be triaged by AI but decided by a human, because an automated error there produces a rejected transfer or a compliance problem that costs far more than the time saved.

**How does AI triage differ from AI automation of a transition?**
Automation clears the easy accounts. Triage manages the hard ones. Triage classifies each exception by type, routes it to the right specialist or path, prioritizes it by revenue at risk and time sensitivity, and pre-fills the paperwork so the human step shrinks to verify-and-submit. The straight-through rate measures automation; the auto-cleared share and time-to-clear on the exception queue measure whether the triage is actually compressing the timeline.

**Which metric best shows a repaper is on track?**
Time-to-clear by exception class, paired with the share of exceptions auto-cleared under human confirmation. A high straight-through rate can hide a backlog of unresolved judgment exceptions that will surface as ACATS rejects later. Watching how fast the judgment classes clear, and how many rejects trace back to exceptions the queue should have caught, tells you whether the timeline will hold far better than the headline automation number.

