---
title: "What Actually Happens When a Breakaway Goes Wrong: TRO Mechanics, the 15-Day FINRA Clock, and the Digital Trail"
topic: "Advisor Transitions & Repapering"
description: "Most Broker Protocol guides tell you what you can take. Almost none tell you what happens if the old firm sues. Here is the actual TRO sequence, the FINRA Rule 13804 expedited arbitration clock, what courts have ordered, and the operational controls that keep you out of it."
author: "FastTrackr AI Team"
image: breakaway-tro-mechanics-finra-15-day-clock-hero.png
imageAlt: "What Actually Happens When a Breakaway Goes Wrong: TRO Mechanics, the 15-Day FINRA Clock, and the Digital Trail"
---

If a former firm moves against a departing advisor, it seeks a temporary restraining order in court and simultaneously files a FINRA arbitration claim for permanent injunctive relief. If the court grants the order, an expedited hearing before a three-arbitrator panel must begin within 15 days. The whole sequence can run from resignation to hearing inside three weeks.

That compressed timeline is the part almost no breakaway guide covers. There is plenty of content on which five fields the Protocol permits you to take. There is very little on what the fight actually looks like if someone says you took a sixth, and the mechanics of that fight determine what your operations team should have been doing for the two weeks before you resigned.

This is an operational reference, not legal advice. Every advisor leaving a firm should have a securities attorney engaged before the resignation letter is drafted. What follows is the process your transition team needs to understand so the attorney's job is easier and cheaper.

## The sequence, from resignation to hearing

The thing that surprises people is the speed. Traditional litigation takes years. This does not.

| Stage | Typical timing | What happens |
| --- | --- | --- |
| Resignation | Day 0 | Advisor resigns, firm's legal and supervision teams are notified |
| Forensic review begins | Day 0 to 3 | Firm pulls email logs, print logs, VPN and login records, CRM export history |
| Complaint and TRO motion filed | Day 1 to 10 | Filed in court, often with a request for immediate relief |
| Court hearing on the TRO | Days after filing | Court applies the standard for temporary injunctive relief |
| FINRA statement of claim | Same time as the court filing | Required under Rule 13804, requesting permanent injunctive relief |
| Expedited arbitration hearing | Within 15 days of a granted TRO | Three-arbitrator panel |

Note the fifth row. Under [FINRA Rule 13804](https://www.finra.org/rules-guidance/rulebooks/finra-rules/13804), a party seeking a temporary injunctive order in court must at the same time file a statement of claim with the FINRA Director requesting permanent injunctive relief and all other relief on the same dispute, and serve the other parties by overnight delivery, hand delivery, email, or fax. The rule also requires a non-refundable $2,500 surcharge from the party seeking the temporary order when it files.

If the court issues the order, the rule provides that the arbitration hearing on permanent injunctive relief begins within 15 days of the date the court issued it, before a panel of three arbitrators selected under Rule 13402. Arbitrator selection itself is compressed: the Director sends a list of seven arbitrators for a non-public panel or nine for a majority-public panel, each party strikes one or two respectively, and parties rank their preferences within three days.

The operational consequence is what matters to a transition team. Your book is mid-repaper, your clients are mid-decision, and you now have three weeks of legal process running in parallel. Every day the repaper is not finished during that window is a day of exposure that a faster transition would have eliminated.

## The three things the old firm has to prove

Courts assessing a request for temporary injunctive relief generally weigh a likelihood of success on the merits, the prospect of irreparable injury if relief is withheld, and a balance of equities favoring the party asking for it. The exact articulation varies by jurisdiction, which is one reason venue matters and one reason your attorney will ask early where you are.

The second element is where these motions most often fail, and it is worth understanding why.

In one federal case in the District of Connecticut, a court refused a TRO because the moving parties had not shown irreparable harm. The judge's reasoning in [that opinion](https://www.brokeandbroker.com/5844/irreparable-harm-tro/) was that where money damages are plainly available, irreparable harm is not even possible, let alone likely. The court also pointed out that the parties could transfer accounts through FINRA's ACATS system by persuading clients themselves, and that the extra effort and expense involved did not amount to irreparable harm.

That reasoning generalizes into something useful. A firm arguing it will be irreparably harmed has an easier case when it can point to misappropriated confidential data that cannot be un-disclosed. It has a much harder case when the dispute is really about revenue that clients chose to move, because revenue is compensable in dollars.

Which means the fight almost always turns on data, not on clients. Clients leaving is a damages question. Data leaving is an injunction question. That distinction should govern how a transition is run.

## The digital trail is the case

Firms do not usually build these cases from client testimony. They build them from logs, and the logs exist whether or not anyone did anything wrong.

| Evidence category | What the firm pulls | What it looks like when it goes badly |
| --- | --- | --- |
| Email | Sent-items to personal addresses, attachments | Client lists or statements mailed to a personal account |
| Print and export | Print server logs, CRM report exports, download history | A bulk client report run days before resignation |
| Device and cloud | USB mount events, cloud sync clients, personal device access | Firm files synced to personal storage |
| Access timing | VPN and login records with timestamps | Repeated late-night or weekend logins in the final weeks |
| Client contact | Recorded lines, CRM activity notes, calendar | Meetings with clients about the move before resigning |

Practitioner guidance for advisors leaving non-Protocol firms, including [this list of departure do's and don'ts](https://www.mayerllp.com/blog/tips-to-avoid-a-tro-for-brokers-transitioning-from-non-protocol-firms), converges on the same set of behaviors: do not email firm information to personal accounts or cloud storage, do not store client data on personal devices, do not print unexplained client documents before departing, avoid unusual late-night or weekend login patterns, and do not tell clients you are leaving before you have resigned.

Notice that most of those are not really legal decisions. They are workflow decisions. An advisor who has no operational way to prepare for a transition without touching firm data will improvise, and the improvisation is what creates the log entry. That is a solvable process problem, and the line between what software should handle and what belongs with counsel is covered in our breakdown of [what a Protocol breakaway can automate versus what needs a securities attorney](https://fasttrackr.ai/blog/broker-protocol-automate-vs-securities-attorney).

## What courts have actually ordered

The remedies in these matters go beyond a simple order not to solicit, and the practical burden of them is frequently underestimated.

Reported outcomes in advisor-departure disputes have included orders to retain a third-party forensic examiner to review records and personal devices for improperly retained client data, orders to delete data found on those devices, and requirements that the receiving firm identify customers whose data was improperly transferred so those customers can be notified.

Sit with that last one. The remedy is that your new firm tells your clients their data was mishandled during your move. There is no version of that conversation that helps you retain the book, and it lands during exactly the weeks when retention is most fragile.

Forensic examination is also disruptive in ways that do not show up in a legal budget. The examiner reviews personal devices. That means the advisor's own phone and laptop, and sometimes those of staff who moved with them, are unavailable or under review during the transition. The team's capacity to run a repaper is reduced precisely when it is needed most.

## Protocol and non-Protocol change your exposure, not the process

The Protocol for Broker Recruiting is a voluntary agreement, not a regulation, and it changes what you are permitted to take rather than the machinery described above.

| Factor | Both firms in the Protocol | One or both outside it |
| --- | --- | --- |
| Client data you may take | The five permitted contact fields, nothing more | Governed by your employment agreement and applicable law |
| Litigation posture | Protocol provides a shield when followed exactly | No shield, employment agreement controls |
| Most common dispute trigger | Taking a sixth field, or pre-resignation solicitation | Solicitation and confidential information generally |
| Practical effect on the transition | Faster clean start | Longer preparation, heavier counsel involvement |

Two operational cautions follow. First, Protocol membership changes. Firms join and withdraw, and a firm that was a member when an advisor started planning may not be one at resignation, which is why membership needs verification close to the date rather than at the start of planning. Second, the shield only holds if the procedure is followed exactly, including the form and timing of the resignation letter and the list of what was taken.

If either firm sits outside the Protocol, the preparation burden shifts substantially toward counsel and toward documentation. Our guide to [running a compliant non-Protocol breakaway](https://fasttrackr.ai/blog/non-protocol-breakaway-compliant-transition) covers the data rules that apply when there is no Protocol shield to rely on.

## The operational controls that keep you out of this

Four controls do most of the work, and all four are process rather than legal strategy.

**1. Separate preparation data from firm data.** The account information needed to prepare a repaper package can be reconstructed from documents the client provides directly, most commonly their own statements, rather than exported from the firm's systems. That distinction is the difference between a clean file and a log entry. Our [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) capability exists in part because a client-supplied statement carries the account numbers, registration types, and positions a transfer form needs, without anyone exporting a firm report.

**2. Compress the window between resignation and completed transfers.** Exposure is measured in days. Every day accounts remain untransferred is a day of solicitation disputes, client uncertainty, and pressure to make contact you should not make. Speed is a legal risk control, not just a client-experience improvement.

**3. Sequence client contact against the legal timeline, not the operational one.** The rules on what you may say and when are strict, and the difference between a permitted announcement and prohibited solicitation is where advisors get sued. Our guide to [announcement versus solicitation for breakaway advisors](https://fasttrackr.ai/blog/announcement-vs-solicitation-breakaway-advisor-client-contact) covers what can be said at each phase.

**4. Document the preparation itself.** Keep a contemporaneous record of what was prepared, from what source, and when. If a forensic examination happens, the ability to show where each data element came from converts a suspicious-looking file into an explainable one.

## Where a transition platform fits, and where it does not

Software does not reduce your legal exposure by having opinions about the Protocol. It reduces exposure by removing the operational reasons advisors improvise.

What it genuinely does: pre-validates account forms so transfers do not sit in reject queues during the exposure window, extracts data from client-supplied documents so nobody needs a firm export, tracks ACATS status so the team knows which accounts are still open, and keeps an audit trail of what was prepared and when.

What it does not do: decide whether your agreement permits a given action, verify Protocol membership as a legal matter, draft a resignation letter, or replace counsel in any part of the process. Any vendor implying otherwise is describing something they cannot deliver.

The honest framing is that the fastest clean transition is also the lowest-risk one, and the two goals do not conflict. Our [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built around compressing the repaper window, and the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows what that compression looks like against a conventional timeline. For firms running many of these at once, the risk math changes again, because a single mishandled departure creates precedent that affects every subsequent recruit. That portfolio view is why we work directly with [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) rather than only with individual advisors.

The advisors who get through a contested departure well are almost never the ones who were cleverest about the Protocol. They are the ones whose preparation left nothing interesting in the logs and whose accounts were already moving before anyone got to court.

## Frequently asked questions

**How fast can a former firm actually get a restraining order?**
Fast. The complaint and motion can be filed within days of resignation, and the court can hear the request for temporary relief shortly after. Under FINRA Rule 13804, if the court issues a temporary injunctive order, the expedited arbitration hearing on permanent injunctive relief must begin within 15 days of that date. The full sequence from resignation to arbitration hearing can run inside three weeks.

**Does the Broker Protocol prevent a firm from suing me?**
No. The Protocol is a voluntary agreement among member firms that limits what departing advisors may take to five client contact fields and provides a litigation shield when its procedures are followed exactly. It does not remove a firm's ability to file, and it does not protect conduct outside its terms, such as taking additional data or soliciting clients before resigning. Verify current membership for both firms close to your resignation date, because firms join and withdraw.

**Why do some TRO requests fail?**
The most common reason is a failure to show irreparable harm. Courts have reasoned that where money damages are plainly available, irreparable harm is not established, particularly when the underlying dispute is about revenue from clients who chose to move rather than about misappropriated confidential data. That is why these cases usually turn on data handling rather than on client relationships.

**What can a court order beyond stopping solicitation?**
Reported remedies have included appointment of a third-party forensic examiner to review firm records and personal devices, orders to delete improperly retained data, and requirements that the receiving firm identify affected customers so they can be notified. The forensic review is often the most operationally disruptive, because it can take the advisor's own devices out of service during the transition.

**Does moving faster actually reduce legal risk?**
It reduces the size of the exposure window. Contested departures generate the most difficulty during the period when accounts have not yet transferred, because that is when solicitation disputes arise and when clients are most uncertain. Completing transfers quickly does not affect whether a firm decides to file, but it shortens the period in which the dispute can affect the book.

