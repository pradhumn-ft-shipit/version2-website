---
title: "Restricted and Control Stock in a Repaper: Rule 144 Legends and the Transfer-Agent Step ACATS Skips"
topic: "Advisor Transitions & Repapering"
description: "Restricted and control positions carry a legend, live at the transfer agent, and never ride ACATS. Moving them in a repaper means an issuer opinion letter, legend clearance, and a separate re-registration track. Here is how to plan it so it does not blindside a close."
author: "FastTrackr AI Team"
image: restricted-and-control-stock-in-a-repaper-rule-144-legends-and-the-transfer-agent-step-acats-skips-hero.png
imageAlt: "Restricted and Control Stock in a Repaper: Rule 144 Legends and the Transfer-Agent Step ACATS Skips"
---

A restricted or control position does not move through ACATS. It carries a Rule 144 restrictive legend, it usually lives in book-entry or certificate form at the issuer's transfer agent rather than in street name, and moving it to the new firm means an issuer counsel opinion letter, a transfer-agent legend review, and a re-registration on a separate, slower track. When a founder, executive, or early-investor client is in the book, this is the position most likely to be sitting untouched weeks after everything else has settled.

Transition teams miss it because it hides. On an account summary a legended position can look like any other equity holding, and the assumption is that it will ride ACATS with the rest. It will not, and the discovery usually comes late, when the transfer rejects or the transfer agent asks for an opinion letter nobody had queued. The cost is not just delay. A control person has ongoing sale restrictions that follow the shares to the new firm, and mishandling the move can create a compliance problem on top of an operational one. Here is what restricted and control stock actually is, why it skips the automated pipe, and how to run it as its own workstream from intake.

## Restricted versus control: two different reasons for the same legend

The terms get used interchangeably and they are not the same, which matters because the conditions attach differently.

Restricted securities are shares acquired in an unregistered, private transaction, such as a private placement, employee equity grant, or founder issuance. They come with a restrictive legend stamped on the certificate or noted on the book-entry position, stating that the shares cannot be resold unless registered or sold under an exemption like Rule 144.

Control securities are shares held by an affiliate of the issuer, meaning someone in a control relationship such as an executive officer, director, or large shareholder. Control status attaches to the holder, not to how the shares were acquired, so an affiliate's shares are control securities even if bought in the open market. A single client can hold shares that are both restricted and control at once.

The distinction drives the resale conditions. [Rule 144 itself, codified at 17 CFR 230.144](https://www.law.cornell.edu/cfr/text/17/230.144), sets the safe-harbor conditions that let these shares be sold publicly: a holding period of six months for reporting-company securities or twelve months for non-reporting issuers, current public information about the issuer, and, for affiliates specifically, volume limits and a manner-of-sale requirement. For affiliates, the volume sold in any three-month period generally cannot exceed the greater of one percent of the outstanding shares of that class or the average weekly reported trading volume over the preceding four weeks, and a Form 144 notice is required when the sale crosses thresholds set in the rule.

None of that is transition-specific, but all of it follows the shares into the new firm, which is why the repaper cannot treat a legended position as a routine equity transfer.

## Why these positions skip ACATS

ACATS moves street-name positions broker to broker. Restricted and control shares typically are not in street name. They sit in book-entry form or as physical certificates at the issuer's transfer agent, because the legend and the resale conditions have to be enforced at the registration level, which is the transfer agent's job. There is no street-name broker position for ACATS to shuttle.

Moving the position therefore runs through the transfer agent, not the clearing system, and it involves a step ACATS never touches: legend review. Only the transfer agent can remove a restrictive legend, and it will generally act only on an opinion letter from the issuer's counsel confirming the shares are eligible for sale or transfer under Rule 144 or another exemption. The legal analysis behind that letter belongs to securities counsel and the issuer, not the transition team; the operational point is that the letter is a dependency with its own lead time, and the transfer cannot complete until it clears.

| Step | Street-name equity (ACATS) | Restricted or control position |
| --- | --- | --- |
| Where it is held | Broker street name | Transfer agent, book-entry or certificate |
| Transfer mechanism | ACATS, automated | Transfer-agent re-registration, manual |
| Legend / opinion letter | None | Issuer counsel opinion often required |
| Typical medallion need | No | Frequently yes on the instruction |
| Ongoing sale restrictions after move | None | Holding period, volume, and manner-of-sale conditions travel with the shares |

Because these positions also live at the transfer agent, they usually attract the [medallion signature guarantee bottleneck](https://fasttrackr.ai/blog/the-medallion-signature-guarantee-bottleneck-the-repaper-step-no-software-removes) at the same time, stacking two non-ACATS gates on one holding. They belong squarely on the list of [assets that never move through ACATS and run months past close](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup).

## The compliance tail the transfer does not end

Getting the shares re-registered at the new firm is the operational finish line, not the compliance one. If the client is a control person, the affiliate conditions do not disappear because the custodian changed. The holding period, the volume limits, the manner-of-sale requirement, and the Form 144 obligation continue to apply to sales at the new firm exactly as they did at the old one.

That has two practical consequences for a repaper. First, the new firm needs to know the position's status on arrival, so control shares are flagged and sale restrictions are enforced from day one rather than discovered when a client tries to sell. Second, the documentation supporting the position's Rule 144 status, the acquisition date that starts the holding period, the affiliate determination, the prior sales that count toward the volume cap, needs to travel with the account so the new firm can administer future sales correctly. Extracting those details cleanly from the documents the client provides is where [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) earns its place, turning a certificate, a grant agreement, and a statement into the structured facts the new firm's control-stock desk needs, rather than leaving them to be rebuilt by hand under time pressure.

A plain-language walk-through of these conditions is in [Thomson Reuters' Rule 144 glossary](https://legal.thomsonreuters.com/blog/rule-144-legal-glossary/), which is a useful practitioner reference alongside the rule text. Whether a specific sale or transfer qualifies under Rule 144 is a legal determination for counsel, and nothing here is legal advice. The transition team's job is narrower and entirely operational: identify the positions, queue the dependencies, and make sure the status and its supporting record land intact at the new firm.

## Running restricted and control stock as its own workstream

The only way this position does not blindside a close is to pull it out of the general repaper flow at intake and run it separately.

Flag it during the initial book review. Any client who is a company founder, executive, director, or private-company investor is a candidate, and any legended or transfer-agent-held position is a signal. Do not wait for an ACATS reject to reveal it. Next, identify the transfer agent and the issuer contact early, because the opinion letter runs through the issuer's counsel and that is not a same-day process; queuing it at the start of the transition rather than the end can save weeks. Confirm the client's Rule 144 status facts, the acquisition date and affiliate determination, so the receiving firm can enforce restrictions on arrival. And sequence the medallion, since these positions usually need one on the transfer instruction, into the same early workstream rather than adding it later.

This is exception management, and it is exactly the discipline a purpose-built [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is meant to enforce: automate the street-name majority without a second thought, and route the legended, transfer-agent-held minority into a tracked exception lane with its own dependencies and clock. The [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who move books with concentrated founder and executive positions treat restricted stock as a named workstream in every plan, because a single overlooked control position can hold a high-value household open long after the rest of the book has landed. A live [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows the difference: when the hard positions are queued at intake, they close on their own slower timeline without dragging the reported completion of the book.

For teams that want the exact language on holding periods and volume limits, the rule text linked earlier is the authoritative source, and securities counsel is the right party to confirm how it applies to a specific position.

## FAQ

**Do restricted or control securities transfer through ACATS?**
No. ACATS moves street-name positions between brokers, and restricted or control shares are typically held in book-entry or certificate form at the issuer's transfer agent so the legend and resale conditions can be enforced at the registration level. Moving them runs through the transfer agent as a manual re-registration, usually requiring an issuer counsel opinion letter to clear the legend, which is a step ACATS never involves.

**What is the difference between restricted and control securities?**
Restricted securities are acquired in an unregistered private transaction and carry a legend limiting resale. Control securities are held by an affiliate of the issuer, such as an officer, director, or large shareholder, and the status attaches to the holder regardless of how the shares were bought. A client can hold shares that are both. The distinction matters because affiliate status adds volume limits, a manner-of-sale requirement, and a Form 144 obligation on top of the holding period.

**Who removes the restrictive legend when the position moves?**
Only the transfer agent can remove a restrictive legend, and it generally acts on an opinion letter from the issuer's counsel confirming the shares are eligible under Rule 144 or another exemption. The legal analysis is counsel's, not the transition team's. Operationally, the opinion letter is a dependency with real lead time, so it should be queued at the start of the transition rather than discovered when the transfer stalls.

**Do a control person's sale restrictions continue after the account moves to a new firm?**
Yes. Changing custodians does not reset Rule 144. The holding period, volume limits, manner-of-sale requirement, and Form 144 obligation continue to apply at the new firm. The receiving firm needs the position flagged as control stock on arrival and the supporting facts, acquisition date, affiliate status, and prior sales, so it can administer future sales correctly rather than discovering the restrictions when the client tries to sell.

**How early should we deal with restricted stock in a transition?**
At intake, before any transfer instruction goes out. Identify clients who are founders, executives, directors, or private-company investors, flag legended and transfer-agent-held positions, identify the transfer agent and issuer contact, and queue the opinion letter early because it runs through counsel and takes time. Sequence the likely medallion requirement into the same workstream. Treated as an early exception lane, these positions close on their own clock without stalling the book.

Restricted and control stock is the clearest case of a repaper truth: the account wrapper and the registration decide how a position moves, not the ticker. Pull the legended positions out of the automated flow at the start, queue their dependencies, and the concentrated positions that carry the most client value stop being the ones that quietly hold a close open.

