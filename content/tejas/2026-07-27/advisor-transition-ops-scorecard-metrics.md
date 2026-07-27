---
title: "The Advisor Transition Scorecard: 10 Operational Metrics an RIA Recruiting Ops Director Should Actually Track"
topic: "Advisor Transitions & Repapering"
description: "Generic recruiting KPIs like time-to-fill say nothing about whether a transition is going well. Here are ten transition-specific operational metrics, how to define each one so it cannot be gamed, and the weekly cadence that catches problems while they are still cheap."
author: "FastTrackr AI Team"
image: advisor-transition-ops-scorecard-metrics-hero.png
imageAlt: "The Advisor Transition Scorecard: 10 Operational Metrics an RIA Recruiting Ops Director Should Actually Track"
---

Time-to-fill and cost-per-hire tell you nothing about whether an advisor transition is working. The metrics that predict a clean repaper are transition-specific: NIGO rate at first submission, days from U4 effective to first submitted transfer, percentage of AUM settled by day 30, and the size of the exception tail. Track ten numbers, review four weekly.

Most RIA recruiting operations directors inherit a reporting framework built for hiring, then discover it goes quiet at exactly the moment the work gets hard. The offer is accepted, the requisition closes, the recruiting dashboard shows green, and the actual operational job of moving several hundred accounts has not started yet.

The guidance available does not help much either. Advisor onboarding content tends to emphasize structure over measurement. A representative example, [OneVest's blueprint for onboarding new advisors faster](https://www.onevest.com/blog/how-to-onboard-new-advisors-faster-ria), gives useful milestones like completing setup provisioning in five business days and having the advisor running independent client meetings by day 60, but stops short of the operational instrumentation an ops director needs to know whether a specific transition in week three is on track or quietly failing.

This is that instrumentation. Ten metrics, three tiers, and a defensible definition for each so it cannot be gamed by the person reporting it.

## Why generic recruiting KPIs break here

Three structural reasons.

**The work happens after the metric stops.** Time-to-fill ends at offer acceptance. Every operationally difficult thing in a transition happens in the following 90 days.

**The unit is wrong.** Recruiting metrics count advisors. Transition operations run on accounts. One advisor with 340 accounts across four custodians and eleven asset types is not comparable to one advisor with 60 accounts at a single custodian, and any per-advisor average blends them into a number that describes neither.

**Averages hide the tail.** A transition where 92 percent of accounts settle in nine days and 8 percent take eleven weeks reports the same mean as one where everything took three weeks. Only the first one has an angry client and a stalled revenue recognition.

The scorecard below fixes all three: it measures the post-acceptance period, it counts accounts and AUM rather than advisors, and it reports distribution rather than mean.

## The scorecard

| # | Metric | Definition | Tier | Review |
| --- | --- | --- | --- | --- |
| 1 | Intake completeness | % of accounts with full position-level data captured before U4 effective date | Speed | Weekly |
| 2 | Days to first submission | Calendar days from U4 effective to first transfer submitted | Speed | Weekly |
| 3 | Submission velocity | % of total accounts submitted by day 7, 14, 21 | Speed | Weekly |
| 4 | AUM settled by day 30 | % of transitioning AUM fully settled at 30 days | Speed | Monthly |
| 5 | First-pass NIGO rate | % of submissions rejected or returned on first attempt | Quality | Weekly |
| 6 | Rework cycles per rejected account | Average number of resubmissions before settlement | Quality | Monthly |
| 7 | Exception tail size | Count and AUM of accounts still open at day 45 | Quality | Weekly |
| 8 | Ops hours per 100 accounts | Total team hours logged, divided by accounts, per transition | Cost | Monthly |
| 9 | Client contact coverage | % of transitioning households contacted per the planned sequence | Risk | Weekly |
| 10 | AUM retained at day 90 | Transitioned AUM as % of expected book | Risk | Monthly |

## Tier one: speed

**1. Intake completeness.** The percentage of accounts for which you hold full position-level detail, including registration type, asset types, and any non-ACATS holdings, before the advisor's U4 goes effective. This is the earliest metric available and the most predictive one on the board. A transition that starts at 60 percent intake completeness will spend weeks discovering annuities and non-traded alternatives one at a time, and each discovery resets a client conversation. Our [transition intake checklist for RIA operations directors](https://fasttrackr.ai/blog/ria-ops-director-transition-intake-checklist) covers the specific data points that need to exist before drop day.

**2. Days to first submission.** Calendar days from the U4 effective date to the first transfer actually submitted. This measures whether preparation happened in advance or is happening now. A team that prepared properly submits on day one. A team that did not spends the first week building forms while the advisor's clients are receiving calls from the firm they just left.

**3. Submission velocity.** The percentage of accounts submitted by day 7, day 14, and day 21. Report all three, never an average. The shape of this curve is diagnostic. A front-loaded curve means preparation was done. A curve that stays flat until day 10 and then spikes means the team is batching reactively.

There is a sequencing subtlety here that a naive reading of this metric will get backwards. High early velocity is only good if the slow assets went first. A team that submits 200 easy ACATS-eligible accounts in week one and holds the annuities until week four will post an excellent velocity number and finish six weeks late. Track submission velocity alongside a separate flag for whether non-ACATS assets were in the first submission batch.

**4. AUM settled by day 30.** The percentage of transitioning AUM, not account count, fully settled at the 30-day mark. AUM-weighting matters because the largest accounts are frequently the most complex, and an account-count metric lets a team look successful while the revenue has not moved. This is the number a firm principal cares about, and it is the correct headline metric for monthly reporting.

## Tier two: quality

**5. First-pass NIGO rate.** The percentage of submissions rejected or returned on the first attempt. This is the number that moves elapsed time most, because a reject does not cost a few days, it costs a full cycle: diagnose, correct, re-sign where required, resubmit, and wait through validation again. The specific reason categories and which are preventable before submission are covered in our breakdown of [ACATS reject codes and pre-validation](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation).

Define this carefully or it will be gamed. Count returns and requests for correction, not only formal rejects. Measure at the account level. Count a submission as failed on first pass if it required any human intervention after submission, including a phone call to the receiving firm to fix a field.

**6. Rework cycles per rejected account.** Of the accounts that failed first pass, the average number of resubmissions before settlement. This separates two very different problems. A high NIGO rate with 1.1 rework cycles means one systematic data issue that gets caught and fixed. A high NIGO rate with 2.4 rework cycles means the team is guessing at causes, and each guess costs another two weeks.

**7. Exception tail size.** The count and AUM of accounts still open at day 45, with a named owner for each. This is the metric that most directly determines whether a transition is remembered as smooth. The accounts that will still be open at day 45 are identifiable in week one, since they are almost always the annuities, sponsor-held alternatives, and platform-restricted funds. Reporting the tail from week one turns it into a managed workstream instead of a week-six surprise.

## Tier three: cost and risk

**8. Ops hours per 100 accounts.** Total team hours logged against a transition, normalized to a hundred accounts. This is the metric that converts operational improvement into a number leadership can act on, and it is the one most firms cannot produce because nobody logs time by transition.

The reason it matters is capacity. Kitces Research on [how financial advisors actually spend their time](https://www.kitces.com/blog/how-do-financial-advisors-spend-time-research-study-productivity-capacity-efficiency/) found that the typical lead advisor spends no more than about half their time on direct client activity, with back-office work including meeting prep, analyses, and servicing exceeding actual client-facing hours. Transition work lands on top of that baseline. If you cannot say what a transition costs in hours, you cannot say how many you can run concurrently, and you will discover the ceiling by hitting it. The full cost model sits in our [cost-per-transition benchmark and technology ROI breakdown](https://fasttrackr.ai/blog/advisor-transition-technology-roi-cost-per-transition-benchmark).

**9. Client contact coverage.** The percentage of transitioning households contacted according to the planned communication sequence, measured weekly rather than at the end. Operational speed does not retain a book on its own. A client who has not heard from the advisor in twelve days will assume the worst, and the former firm is actively filling that silence. This metric is a leading indicator for metric ten, and it is the only one on the scorecard that the advisor rather than the ops team primarily owns.

**10. AUM retained at day 90.** Transitioned AUM as a percentage of the expected book. This is the outcome metric and the one everyone wants to lead with. It is also the least actionable, because by the time you can measure it every decision that influenced it has already been made. Report it, learn from it across transitions, and manage the nine metrics above it.

## The two that predict the rest

If you can only instrument two, instrument intake completeness and first-pass NIGO rate.

Intake completeness is the earliest available signal and it constrains everything downstream. You cannot submit a form for an account you have not fully inventoried, you cannot sequence non-ACATS assets first if you do not know which accounts hold them, and you cannot give a client an accurate date. Every later metric inherits its ceiling from this one.

First-pass NIGO rate is the largest single consumer of elapsed time, and it is almost entirely a function of data accuracy at the point of form preparation. Most rejects trace back to a field that was mistyped during rekeying or captured from an outdated statement. That is a mechanical problem with a mechanical fix, which is why extracting data directly from client-supplied statements rather than retyping it is where our [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) capability is aimed.

The two together also explain most of the variance between a 30-day book move and a 90-day one, which is more than any other pair on the list.

## Instrumenting this without adding headcount

The objection to any scorecard is that someone has to maintain it. Three principles keep the overhead near zero.

**Instrument the workflow, not the reporting.** If status changes are captured as work happens, the scorecard is a query rather than a task. If someone has to update a spreadsheet on Fridays, the data will be stale by month two and abandoned by month four. Metrics 1 through 7 should all be byproducts of the workflow itself, and the tracking layer in our [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to produce them without a separate reporting step.

**Define once, in writing, before the first transition.** Every metric here can be defined two ways, and a team that changes its definition mid-quarter has no trend data. Write the definitions down and keep them fixed even when a definition turns out to be slightly unflattering.

**Report the same ten numbers every time.** Consistency beats completeness. Ten metrics reported identically for eight consecutive transitions is a management system. Twenty metrics reported differently each time is a slide deck.

| Cadence | What you review | Who is in the room |
| --- | --- | --- |
| Weekly, 20 minutes | Metrics 1, 2, 3, 5, 7, 9 for every active transition | Ops director, transition leads |
| Monthly | Metrics 4, 6, 8, 10 across all transitions in the period | Ops director, firm principal |
| Per transition close | All ten, plus a written note on the largest single delay | Ops director, transition lead, advisor |

The per-transition close is the item most often skipped and the one that compounds. A single written paragraph naming the largest delay and its cause, captured while it is fresh, becomes the improvement backlog. After six transitions, the same cause will appear three times, and that is your next process fix identified without any analysis.

## What to report upward

Firm principals do not want ten numbers. They want three: percentage of AUM settled by day 30, the exception tail with a completion date, and AUM retained at day 90 for transitions that have reached it. Everything else in the scorecard exists to let you manage those three rather than explain them after the fact.

Two presentation rules make the upward report credible. Report the tail explicitly, every time, including when it is small, so it never looks like something you disclosed only when forced. And report the distribution rather than the average, because the average is the number that makes a bad transition look acceptable right up until a client calls the principal directly.

Firms running several transitions at once need these numbers per transition and in aggregate, since the aggregate is what tells you whether you have capacity for the next recruit. The sequencing and prioritization side of that is covered in our playbook on [managing ten concurrent transitions without adding headcount](https://fasttrackr.ai/blog/managing-10-concurrent-transitions-without-headcount-ria), and consultants running this across multiple firms typically standardize the definitions once and apply them everywhere, which is the pattern we build for with the [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) we work with. The measured difference this makes on a real transition is in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently asked questions

**What is the most important metric in an advisor transition?**
First-pass NIGO rate, with intake completeness a close second. A rejected transfer costs a full cycle rather than a few days, so preventing rejects returns more elapsed time than any other intervention. Intake completeness is the earliest available signal and it caps how good every downstream metric can be, since you cannot prepare or sequence accounts you have not fully inventoried.

**Why not just track time-to-completion?**
Because it is a single number available only at the end, when nothing can be changed. It also hides distribution: a transition where 8 percent of accounts take eleven weeks reports similarly to one where everything took three weeks, and only the first one has a retention problem. Track leading indicators weekly and use time-to-completion as a retrospective input.

**How do I measure NIGO rate so it cannot be gamed?**
Measure at the account level, count any post-submission human intervention as a first-pass failure including informal corrections and phone calls to fix a field, and write the definition down before the first transition rather than after seeing an unflattering number. Also track rework cycles separately, since a high reject rate with low rework means one systematic cause while high rework means the team is guessing.

**What is a realistic target for AUM settled by day 30?**
Set your own target from your own first two transitions rather than adopting an industry figure, because the achievable number depends heavily on asset mix. A book that is almost entirely ACATS-eligible equities and funds can settle the large majority of AUM inside 30 days. A book carrying meaningful annuity or non-traded alternative exposure cannot, regardless of execution quality, because those assets move on third-party schedules.

**Do I need software to run this scorecard?**
No, but you need the data to be a byproduct of the workflow rather than a separate reporting task. Scorecards maintained by hand in a spreadsheet reliably go stale within a couple of months. Whatever system holds transition status should be the system that produces these numbers, so that reporting costs no additional hours.

**How many of these should I review weekly?**
Six: intake completeness, days to first submission, submission velocity, first-pass NIGO rate, exception tail size, and client contact coverage. Those are the ones where a problem spotted in week two is still cheap to fix. The cost, settlement, and retention metrics are monthly, since they move too slowly for a weekly review to add anything.

