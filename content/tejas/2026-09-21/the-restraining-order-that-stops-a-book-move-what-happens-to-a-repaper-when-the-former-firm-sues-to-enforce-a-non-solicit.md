---
title: "The Restraining Order That Stops a Book Move: What Happens to a Repaper When the Former Firm Sues to Enforce a Non-Solicit"
topic: "Advisor Transitions & Repapering"
description: "A departing advisor leaves a non-protocol firm and days later a temporary restraining order lands, barring solicitation and freezing the transition. Here is how the TRO-to-FINRA-arbitration sequence actually works, what it does and does not stop, and the exact data discipline AI "
author: "FastTrackr AI Team"
image: the-restraining-order-that-stops-a-book-move-what-happens-to-a-repaper-when-the-former-firm-sues-to-enforce-a-non-solicit-hero.png
imageAlt: "The Restraining Order That Stops a Book Move: What Happens to a Repaper When the Former Firm Sues to Enforce a Non-Solicit"
---

When a departing advisor leaves a non-protocol firm, the old firm can win a temporary restraining order that bars soliciting former clients and freezes a book move within days. The TRO does not erase a client's own right to move their account, but it stops advisor-initiated repapering until a FINRA panel rules. Clean data discipline survives the challenge.

Most transition content treats the repaper as an operations problem: forms, custodians, ACATS. But a whole class of transitions runs headfirst into a legal event that stops the operations cold. An advisor resigns from a firm that is not a Broker Protocol signatory, and before the first transfer form is even signed, a process server delivers a temporary restraining order. Suddenly the question is not how fast the book can move; it is whether the advisor is legally permitted to contact the clients at all. This is where the Broker Protocol, non-solicitation agreements, FINRA arbitration, and a repapering workflow collide, and it is worth understanding the mechanic before it happens, not during. None of what follows is legal advice; it is how the process works and where technology fits.

## Why a former firm can freeze a transition in court

The lever is a temporary restraining order, and the path to it runs through FINRA. Industry disputes between a firm and a registered person generally have to be arbitrated at FINRA, but a firm can still go to a court first to obtain emergency relief while the arbitration spins up. Under [FINRA Rule 13804](https://www.finra.org/rules-guidance/rulebooks/finra-rules/13804), a party may seek a temporary injunctive order from a court of competent jurisdiction, and if the court grants one, an expedited arbitration hearing on permanent injunctive relief must begin within 15 days before a panel of three arbitrators. To win the TRO in court, the firm typically has to show three things: a likelihood of success on the merits, the prospect of irreparable injury without the order, and that the balance of equities favors it.

What the firm is trying to enforce is usually a non-solicitation covenant in the advisor's employment agreement, which bars the advisor from soliciting former clients for a defined period after departure, often a year. Firms that have signed the Broker Protocol have agreed not to pursue this kind of action against an advisor who follows the protocol's narrow rules. Firms that have not signed, or advisors who stepped outside the protocol's limits, are exposed to exactly this move. The [Broker Protocol recruiting requirements](https://www.kitces.com/blog/broker-protocol-recruiting-requirements-for-moving-brokers-to-breakaway-or-go-independent-ria/) define that safe harbor, and stepping outside it is what turns a routine breakaway into a courtroom.

## What a TRO actually stops, and what it does not

This is the distinction that decides how much damage a restraining order does to a book move, and it is widely misunderstood. A non-solicitation TRO restrains the advisor from soliciting former clients. It does not, as a rule, extinguish a client's own right to choose their advisor and move their account. The SEC has recognized that customers have the right to select their financial professional, and FINRA panels frequently narrow or dissolve these injunctions on the view that keeping a client from following the advisor they want is inconsistent with fair dealing and only delays the customer's own transfer.

In practice that means a TRO usually stops advisor-initiated repapering, the outreach, the pre-filled forms sent to clients, the coordinated signing campaign, while leaving intact a client's ability to independently instruct a transfer they initiated themselves. The line between solicitation and a client's own decision becomes the whole ballgame, and it is a factual, evidentiary line. Who reached out first? What was said? Was the transfer form the product of the advisor's outreach or the client's independent choice? The advisor's side has to be able to show, with records, that its conduct stayed on the right side of that line. This is not a place for improvisation, and it is the exact place where a disciplined data trail matters more than speed.

## The TRO-to-arbitration timeline

| Stage | What happens | Effect on the book move | Typical window |
|---|---|---|---|
| Resignation from a non-protocol firm | Advisor departs; non-solicit covenant is in play | None yet; the clock starts | Day zero |
| Firm files for a TRO | Court asked for emergency relief under the Rule 13804 path | Advisor-initiated outreach at risk of being enjoined | Days |
| Court grants the TRO | Solicitation barred pending arbitration | Advisor-initiated repapering freezes; client-initiated transfers may continue | Immediate on entry |
| Expedited FINRA arbitration begins | Three-arbitrator panel hears the permanent-injunction request | The scope of any lasting restraint is decided here | Within 15 days of the TRO |
| Panel ruling | Injunction dissolved, narrowed, or made permanent | Determines when and how repapering resumes | Follows the hearing |

The takeaway from the timeline is that the freeze is often temporary and the arbitration moves fast by design, but the transition still loses the very days that matter most, the early window when client attrition risk is highest. A book that cannot be actively worked for two or three weeks at the start is a book bleeding clients while the lawyers argue. That is why the durable protection is built before the resignation, in how the data was handled, not after the TRO lands.

## Where AI fits, and the line it must not cross

An AI-native transition platform does not litigate, and it certainly does not give legal advice. What it does is enforce the data discipline that keeps a repaper defensible if it is ever challenged, and that is a real and specific contribution. Three functions matter.

First, it can enforce the Broker Protocol data boundary at the point of data entry. The protocol permits an advisor to take a narrow set of client-contact fields, client name, address, phone number, email, and account title, and nothing else, not account numbers, not statements, not performance data. A system built for transitions can be configured to ingest only those permitted fields when protocol governs, and to flag or block anything beyond the line, so the advisor does not inadvertently carry data that converts a clean move into an actionable one. What the platform stores and how it was sourced becomes evidence, and clean evidence is the point.

Second, it can maintain a complete, timestamped audit trail of what data entered the system, when, and from where. If the former firm alleges the advisor took prohibited information, the defense is records, and a system that logs its inputs produces exactly the contemporaneous trail that a firm's recordkeeping obligations under [SEC Rule 17a-4](https://www.smarsh.com/regulations/sec-rule-17a-4-records-preservation/) already contemplate. The tool builds the trail as a byproduct of doing the work, rather than the team reconstructing it under subpoena.

Third, it can hold accounts under a litigation hold instead of processing them. When counsel says freeze advisor-initiated activity, the platform can queue the affected accounts and distinguish client-initiated instructions from advisor-driven outreach, so the team honors the order without losing the work already staged. The moment the injunction is dissolved or narrowed, the queued work resumes. This is document intelligence and workflow control in service of compliance, not speed.

The line the platform must not cross is judgment. It does not decide what counts as solicitation, it does not advise on the merits, and it does not contact clients on its own. Those are decisions for the advisor, their counsel, and the compliance team. The framing FastTrackr holds across its product applies exactly here: AI drafts, validates, and records, professionals and their lawyers review and decide.

## What a clean transition looks like when litigation is a live risk

If you are moving from a non-protocol firm, or from a protocol firm under terms that could be contested, the operational plan should assume the challenge and build for it. That means treating the Broker Protocol data limits as hard system constraints from the first day, not as guidance, so the record shows only permitted fields were ever taken. It means preserving a timestamped trail of every input, so the difference between solicitation and a client's own choice can be shown rather than asserted. And it means designing the client-outreach sequence with counsel so that what the advisor does, and what the client independently decides, are cleanly separable in the records.

The custodian and ACATS mechanics do not change because litigation is pending; what changes is that you cannot afford a sloppy data trail on top of a legal challenge. The same advisor transition platform that pre-fills forms and validates fields to prevent not-in-good-order rejects is also the system of record that makes a repaper defensible, because both come from the same disciplined handling of client data. For a firm that runs many of these, the ability to hold, document, and resume is part of how transition consultants manage risk across a portfolio of moves rather than firefighting each one, and the advisor transition case study shows what a controlled, well-documented move looks like in practice. The related question of what you are even permitted to bring is covered in the FastTrackr Broker Protocol compliance checklist.

## The takeaway

A restraining order does not usually kill a transition, but it can freeze the part the advisor controls at the worst possible moment, and it turns the quality of your data handling into a legal exhibit. The advisors who come through it intact are the ones who never carried prohibited data, who can show a clean, timestamped record of what they did take, and who could pause advisor-initiated work on command while a client's own instructions continued. Technology cannot argue the case, but it can make sure the record argues for you. Build the discipline before the resignation, because once the TRO is served, the time to get your data house in order has already passed. This is educational information, not legal advice; involve qualified counsel on any specific transition.

## Frequently asked questions

**Can a former firm actually stop my clients from moving to me?**

Generally it can stop you from soliciting them, not stop them from choosing to move on their own. A temporary restraining order enforcing a non-solicitation covenant restrains the departing advisor's outreach, but the SEC has recognized a customer's right to select their financial professional, and FINRA panels often narrow or dissolve injunctions that would keep a client from following the advisor they want. The practical effect is that advisor-initiated repapering pauses while client-initiated transfers can usually proceed, which makes the solicitation-versus-choice distinction the central factual issue.

**How fast does the legal process move once a TRO is issued?**

By design, quickly. Under FINRA Rule 13804, if a court issues a temporary injunctive order in a dispute that must be arbitrated, the arbitration hearing on the request for permanent injunctive relief begins within 15 days before a panel of three arbitrators. So the initial freeze is often measured in a few weeks rather than months. The damage, though, is front-loaded, because those early weeks are when client attrition risk is highest, which is why the defensible position has to be built before the resignation.

**Does the Broker Protocol prevent this from happening?**

It prevents it when both the departing and receiving firms are protocol signatories and the advisor follows the protocol's narrow rules, taking only client name, address, phone, email, and account title and leaving everything else behind. That is the safe harbor. If the old firm never signed the protocol, or the advisor stepped outside its limits, the non-solicitation covenant is back in force and the firm can seek a restraining order. The protocol is protection only to the extent it is followed exactly.

**How does AI help if the risk is legal rather than operational?**

By enforcing the data discipline that makes a repaper defensible. A transition platform can be configured to ingest only the client-contact fields the Broker Protocol permits and to flag anything beyond that line, maintain a timestamped audit trail of every input so the source of each record is provable, and hold advisor-initiated activity under a litigation hold while distinguishing client-initiated instructions. It does not give legal advice or decide what counts as solicitation. It builds the clean record that counsel needs, as a byproduct of doing the work.

**What should I do differently if I am leaving a non-protocol firm?**

Assume a challenge and build for it from day one. Treat the protocol data limits as hard system constraints even if you are unsure they apply, preserve a complete record of what you took and when, and design your client outreach with counsel so that your conduct and the client's independent choices are cleanly separable in the records. The operational mechanics of the move do not change, but a sloppy data trail on top of a lawsuit is what turns a survivable freeze into a lost book. Engage qualified counsel early, because the record you can show matters more than the speed you can achieve.

