---
title: "Custodian Portal vs Your CRM: Reconciling Transition Status Without Double Entry"
topic: "Advisor Transitions & Repapering"
description: "During a transition, ACATS status lives in the custodian portal and client tasks live in the CRM, and they never agree. Here is why the two systems drift and how to reconcile transition status without keying everything twice."
author: "FastTrackr AI Team"
image: custodian-portal-vs-your-crm-reconciling-transition-status-without-double-entry-hero.png
imageAlt: "Custodian Portal vs Your CRM: Reconciling Transition Status Without Double Entry"
---

During a transition, the truth about each account is split across two systems that do not talk to each other. ACATS status, whether a transfer was submitted, rejected, or settled, lives in the custodian portal. The client relationship, the tasks, and who is chasing what live in the CRM. Neither system has the full picture, so teams key the same account into both, and the two records drift apart within days. Reconciling them without double entry is the difference between a transition you can report on and one you are guessing about.

This is the quiet operational tax on every advisor transition. It rarely shows up in a project plan, but it eats hours, hides rejected transfers, and produces status reports nobody trusts. Here is why the drift happens and how to close it.

## Why the two systems disagree by design

The custodian portal and the CRM were built for different jobs, and the transition is the one moment their jobs overlap badly.

The custodian portal, whether Schwab Advisor Center, Fidelity's Wealthscape, Pershing's NetX360, or a newer platform like Altruist, is the system of record for the mechanical state of an account. It knows the ACATS control number, the transfer status, the reject code, and whether cash and positions have settled. What it does not know is the human context: which client is anxious, which task is blocked, who promised what by Friday.

The CRM, whether Redtail, Wealthbox, or Salesforce Financial Services Cloud, is the opposite. It holds the relationship, the notes, the tasks, and the workflow. What it does not natively know is the live ACATS status sitting in the custodian portal. Most CRMs were never designed to ingest transfer-status feeds from multiple custodians in real time.

So the two systems are each authoritative for half the picture and blind to the other half. During steady-state business that split is fine, because account mechanics rarely change. During a transition, when every account is changing state daily, the split becomes a reconciliation problem that compounds every day it is left manual.

## Where the drift actually starts

Drift is not random. It enters at four predictable seams.

**Rejected transfers that never make it back to the CRM.** A transfer rejects in the custodian portal for a registration mismatch or a bad account number. Unless someone manually copies that reject into the CRM as a task, the CRM still shows the account as in-progress, and the rejection sits unworked. This is the most dangerous drift, because a NIGO or rejected ACATS that nobody is chasing is pure lost time, and the reject reasons often trace back to the same features and registrations that [do not carry through ACATS in the first place](https://fasttrackr.ai/blog/the-account-features-that-do-not-carry-in-acats-margin-options-discretion-and-standing-instructions).

**Assets that move on a separate track.** Annuities, alternatives, and held-away assets do not flow through ACATS, so their status never appears in the ACATS view at all. If the CRM is being updated from ACATS status alone, these accounts look invisible or stuck, when really they are moving on [their own separate timelines](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup). Teams either forget them or double-key them under the wrong status.

**Timing lag between the two systems.** The portal updates in near real time. The CRM updates whenever a human gets around to it. Even a diligent team introduces a lag of hours to days, and during that lag any report pulled from the CRM is wrong.

**Multiple custodians, multiple portals.** A firm moving advisors onto more than one custodian is reconciling three or more systems at once: two custodian portals and a CRM that matches neither. The drift multiplies with each platform.

## The reconciliation options, compared

There are three ways teams handle this, and they are not equal.

| Approach | How it works | Cost | Where it breaks |
|---|---|---|---|
| Manual double entry | Staff read the portal and re-key status into the CRM | High labor, high error | Rejected transfers get missed; status is always stale by the lag |
| Spreadsheet bridge | A shared sheet is updated from the portal, then reconciled to the CRM | Medium labor | Another surface to drift; no live status; version chaos across a team |
| Purpose-built transition layer | One system pulls custodian status and holds tasks together | Setup, then low ongoing | Requires a tool built for transitions, not a generic CRM add-on |

The manual and spreadsheet approaches both accept drift as a fact of life and try to out-work it. They fail at exactly the moment volume rises, which is the moment a transition needs them most.

## How to reconcile without keying everything twice

The goal is a single view where each account's mechanical status and its human tasks live together, updated from the custodian rather than from memory. Getting there comes down to four moves.

**Make the custodian portal the system of record for status, and the CRM the system of record for tasks.** Do not try to make either system do the other's job. The portal owns ACATS status; the CRM owns the relationship and the work. The reconciliation is a bridge between them, not a merger.

**Pull status from the source, do not re-type it.** Any status that a human copies by hand will drift. The reconciliation should read transfer status from the custodian, so the account's state in your working view always matches the portal without a person keying it. This is precisely the kind of extraction that [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) handles, turning statement and portal data into structured status instead of manual entry.

**Track the non-ACATS assets on their own status track.** Give annuities, alternatives, and held-away assets their own status field rather than forcing them into an ACATS-shaped view where they look stuck. A separate track keeps them visible instead of lost.

**Report from one place, not two.** Once status and tasks live in one view, your transition report comes from a single source instead of a reconciliation between two. That is what makes a status update trustworthy: everyone is reading the same reconciled picture. A dedicated [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to be that single view across custodians, which is why firms and [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) running many concurrent moves lean on it rather than stitching portals and CRMs together by hand. The operational lift shows in this [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition), where a reconciled view replaced a stack of spreadsheets.

## Setting a reconciliation cadence for the hot phase

Even with the right approach, a transition has a hot phase, the days when transfers are submitting and settling in volume, and the cadence you keep during that window decides how far status can drift before you catch it. A weekly reconciliation is fine in steady state and dangerous mid-transition, because a rejected transfer can sit unworked for six days.

During the hot phase, treat reconciliation as a daily discipline. Each day, pull the current transfer status from every custodian portal in play, compare it against the CRM's task state, and turn every mismatch into a task: new rejects become chase items, newly settled accounts close out, and non-ACATS assets get their track updated. The point is not to key more; it is to catch divergence within one day rather than one week. A team that does this every morning during the peak two weeks of a move will find and clear rejects while they are still cheap to fix, instead of discovering a pile of them at the end.

The cadence also protects the people. When ops knows there is a single daily reconciliation, nobody feels they have to check two systems constantly to stay safe, and the anxious back-and-forth that burns a transition team out drops away. One reliable daily pass beats a dozen nervous manual checks, and it produces a status you can actually stand behind.

## The reporting payoff

The reason this matters beyond the ops team is reporting. A principal or a client asking "where is my account?" deserves an answer that is true, not an answer that is a day old and might be hiding a rejected transfer. When the custodian portal and the CRM are reconciled, every status question has one answer, and that answer holds up. When they are not, every report carries a silent margin of error equal to the drift, and the first time a client catches it, trust in the whole transition takes the hit.

For the underlying account-transfer mechanics that drive the status you are reconciling, industry coverage at [WealthManagement.com](https://www.wealthmanagement.com/) and [InvestmentNews](https://www.investmentnews.com/) are useful references for how ACATS and custodian onboarding actually behave in practice.

## FAQ

**Why do the custodian portal and CRM show different transition statuses?**
Because each is authoritative for only half the picture. The custodian portal holds live ACATS and settlement status; the CRM holds tasks, notes, and the relationship. Most CRMs cannot ingest transfer-status feeds from custodians automatically, so unless someone manually reconciles them, the two records drift apart as accounts change state daily.

**What is the most dangerous kind of drift during a transition?**
A rejected or not-in-good-order transfer that shows as rejected in the custodian portal but still shows as in-progress in the CRM. Because no task was created, nobody is working the rejection, and the account silently stalls. Reconciling rejects from the portal into the CRM as tasks is the highest-value fix.

**How should we handle annuities and alternatives that never appear in ACATS?**
Give them their own status track rather than forcing them into an ACATS-based view, where they look stuck or invisible. These assets move on separate paperwork and timelines, so a separate field keeps them visible and prevents them from being double-keyed under the wrong status.

**Can we just reconcile in a spreadsheet?**
A spreadsheet works at low volume but becomes another surface that drifts, with no live status and version problems across a team. It fails when account volume rises, which is exactly when a transition needs reliable status most. A view that pulls status from the custodian avoids adding a third thing to reconcile.

**What is the right division of labor between the two systems?**
Let the custodian portal be the system of record for mechanical status and the CRM be the system of record for tasks and relationships. Do not make either do the other's job. The reconciliation is a bridge that reads status from the source and keeps tasks in the CRM, so nothing is keyed twice.

