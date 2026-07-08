---
title: "Rule 17a-4 in an Advisor Transition: Retention Windows, WORM vs. Audit-Trail Storage, and the Records You Cannot Lose"
topic: "Advisor Transitions & Repapering"
description: "A compliance officer's field guide to SEC Rule 17a-4 during an advisor transition: exact retention windows, the WORM versus audit-trail storage choice after the 2022 amendment, and how repapering creates records you must preserve."
author: "FastTrackr AI Team"
---

Rule 17a-4 sets how long a broker-dealer must preserve the records Rule 17a-3 requires it to make, and an advisor transition triggers most at once. Core books stay six years, confirmations and statements three, and Reg BI retail-customer records six years past account closure. Since May 3, 2023, that storage must meet a WORM or audit-trail standard.

Most transition planning treats recordkeeping as an afterthought, a box the back office checks once repapering is done. That order is backward. The move itself is a recordkeeping event. The instant a book changes firms or custodians, both the losing firm and the gaining firm inherit specific, dated preservation duties under Rule 17a-4, and the electronic form those records take has to satisfy a storage standard the SEC tightened in 2023. Get the retention math or the storage format wrong and you have a books-and-records exam finding that no amount of clean ACATS work will offset.

This is the field guide the two most common questions skip. Not "what do we document" and not "what does the firm left behind owe." Instead: exactly how long each record class lives, who holds it, and what your storage system has to do to keep it compliant through and after the move. For the process-and-timeline view of the same rules, our guide on [what compliance teams must document before, during, and after a move](https://fasttrackr.ai/blog/reg-bi-rule-17a4-advisor-transition-documentation) is the companion to this one.

## Two rules people conflate: 17a-3 makes the record, 17a-4 keeps it

The single most common error in transition compliance is treating "17a-3" and "17a-4" as one rule. They are a pair. Rule 17a-3 is the making rule: it enumerates the records a broker-dealer must create, from trade blotters and ledgers to the retail-customer information Regulation Best Interest added in 2020. Rule 17a-4 is the keeping rule: it tells you how long to preserve each of those records, where they have to be accessible, and what form electronic copies must take. The full text of the preservation rule sits in the [eCFR entry for 17 CFR 240.17a-4](https://www.law.cornell.edu/cfr/text/17/240.17a-4).

Why this matters in a transition: repapering does not just move assets, it generates and reproduces 17a-3 records at speed. New account forms, updated suitability and Reg BI profiles, fresh authorizations, and copies of statements pulled from the old custodian are all records the moment they exist. Each one lands in a 17a-4 retention bucket immediately. The book moving does not reset the clock. It starts new clocks while the old ones keep running at the firm the advisor left.

## Retention windows that apply the moment a book moves

Rule 17a-4 does not set one universal retention period. It sorts records into classes with different lifespans, and the "first two years in an easily accessible place" qualifier applies to most of them. Here is how the classes that a transition touches actually break down.

| Record class (examples) | Retention period | Accessibility | In a transition, who holds it |
| --- | --- | --- | --- |
| Blotters, general ledgers, stock records, trial balances | Not less than 6 years | First 2 years easily accessible | Losing firm (historic activity); gaining firm (new activity) |
| Customer confirmations, account statements, most correspondence | Not less than 3 years | First 2 years easily accessible | Both firms for their respective periods |
| Retail-customer / Reg BI account record information | 6 years after account closed or info updated | First 2 years easily accessible | Firm that holds the relationship at each point |
| Account forms, authorizations, powers of attorney | Life of account plus retention tail | First 2 years easily accessible | Gaining firm creates; losing firm retains prior versions |
| Reg BI and Form CRS delivery records | Preserve under 17a-4 periods | Accessible for exam | Delivering firm |

Two practical readings come out of this table. First, the losing firm does not get to purge on resignation day. Its six-year and three-year clocks on everything the advisor generated keep running from the original record date, which is exactly why the firm left behind still owns real obligations, covered in depth in our checklist on [Reg BI and Rule 17a-4 obligations that survive an advisor's departure](https://fasttrackr.ai/blog/reg-bi-17a4-obligations-survive-advisor-departure). Second, the gaining firm starts fresh clocks the moment it opens accounts, and those clocks include the Reg BI retail-customer records with their own extended horizon.

## The Reg BI records a transition quietly creates

Regulation Best Interest, effective June 30, 2020, did more than set a conduct standard. It added a recordkeeping obligation that runs straight through every repaper. Under the retail-customer provisions, a firm has to make and keep a record of all information it collected from, and provided to, each retail customer in connection with a recommendation. FINRA's overview of the standard sits on its [Regulation Best Interest key-topic page](https://www.finra.org/rules-guidance/key-topics/regulation-best-interest).

The retention horizon here is the one teams miss. These retail-customer records must be preserved until at least six years after the earlier of the date the account was closed or the date the information was collected, provided, replaced, or updated. In a transition you are updating that information wholesale: new risk tolerance capture, new objectives, new Reg BI profiles for every household you repaper. Each update restarts a six-year preservation obligation on the record it replaces. A transition of a few hundred households is therefore a mass-generation event for long-horizon records, and the audit trail for who updated what, and when, has to survive with them.

This is where the recommendation to move fast and the recommendation to keep clean records stop being in tension. The same structured capture that speeds a repaper, when it is timestamped and preserved correctly, is the record. Sloppy capture creates rework and a compliance gap in one motion.

## WORM versus audit trail: what your storage must actually do

The 2022 amendments to Rule 17a-4, with a compliance date of May 3, 2023, changed the electronic-storage question every transition platform has to answer. Before, the practical default was WORM: preserve records exclusively in a non-rewriteable, non-erasable format. The amendment, detailed in the SEC's [final rule in the Federal Register](https://www.federalregister.gov/documents/2022/11/03/2022-22670/electronic-recordkeeping-requirements-for-broker-dealers-security-based-swap-dealers-and-major), kept WORM as one option and added an alternative.

You now must meet one of two standards for electronic records:

- **WORM.** Preserve the records exclusively in a non-rewriteable, non-erasable format, so an original cannot be altered once written.
- **Audit trail.** Maintain a complete, time-stamped audit trail that captures all modifications to and deletions of a record, including the date, time, and identity of the person making each change, so the original can be re-created if it is altered, overwritten, or erased.

The amendment also carried two operational conditions that bear directly on transitions running on modern software: an undertaking that gives regulators access to the electronic records held in the system, and the ability to produce records promptly on request. For a transition platform, "audit trail" is usually the relevant standard, because a repapering system is constantly writing and updating records rather than freezing them. The compliance test is not "did we store it" but "can we re-create the exact original of this Reg BI profile as it existed on the day we submitted the account, and show who touched it since."

| Storage standard | Core requirement | Best fit | Transition risk if absent |
| --- | --- | --- | --- |
| WORM | Non-rewriteable, non-erasable format | Static archives, final statements | Low if records never change |
| Audit trail | Time-stamped log of every change, deletion, and editor | Active repapering and updated Reg BI records | Cannot prove original state of a changed record |

## Where repapering quietly breaks recordkeeping

The failure mode is rarely a missing rule. It is a record that technically exists but does not satisfy 17a-4 in form. Three patterns cause most of it in a transition.

The first is image-only capture. A statement pulled from a losing custodian and saved as a flat scan is a preserved image, but the data inside it is not extracted, indexed, or verifiable against the new account record. When an examiner asks you to reconcile the Reg BI profile against the source, a pile of images is not a clean answer. This is the exact gap that purpose-built [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) closes, by turning source statements and forms into structured, verifiable data that carries its own extraction record.

The second is the broken audit trail. If your repapering runs across email, shared drives, and a CRM with no unified change log, you cannot reconstruct who updated a household's objectives on which day. Under the audit-trail standard, that reconstruction is the compliance requirement, not a nice-to-have.

The third is the retention orphan. Records generated during a fast transition, especially superseded drafts of account forms and prior Reg BI profiles, get treated as disposable working files and deleted. They are not disposable. The version you replaced is exactly the record 17a-4 wants preserved for its full window. Running the move on an [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) that preserves versions and timestamps by default removes the human judgment call that creates orphans.

For the teams that run many of these at once, the recordkeeping discipline is also a scale problem, and it is why so many firms lean on outside specialists, a workflow we cover for [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who repaper across multiple firms and custodians simultaneously.

## A pre-move recordkeeping checklist

Before the first account form goes out, confirm the following:

1. **Map every record class the move will touch** to its 17a-4 retention window, and assign an owner at both the losing and gaining firm.
2. **Confirm your storage meets one standard cleanly.** Decide WORM or audit trail per system, and verify the audit-trail systems actually log editor identity and timestamps, not just versions.
3. **Treat superseded Reg BI profiles and draft forms as records,** not working files. Preserve every version you replace for its full window.
4. **Verify prompt-production capability.** If an examiner asked today, could you produce the original state of a specific household's account record and its change history within the required timeframe.
5. **Reconcile extracted data to source.** Every figure lifted from an old statement into a new account record should trace back to the preserved source document, ideally through a structured extraction record rather than a manual re-key.

Firms that treat these five as gates rather than cleanup tasks tend to move faster overall, because they stop generating rework. A real example of that compounding across a live book is in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## FAQ

**Does the losing firm's retention obligation end when the advisor resigns?**
No. Rule 17a-4 clocks run from the date each record was originally made, not from the resignation date. The firm the advisor left must continue preserving blotters, statements, correspondence, and Reg BI records for their full six-year or three-year windows, with the first two years accessible. Departure changes who services the account, not who owes the historic records.

**Is WORM storage still required after the 2022 amendment?**
No, WORM is now one of two options. Since the May 3, 2023 compliance date, a broker-dealer's electronic recordkeeping system must satisfy either the WORM standard or an audit-trail standard that time-stamps and logs every modification, deletion, and editor. Active repapering systems typically rely on the audit-trail alternative because records are updated rather than frozen.

**How long must Reg BI retail-customer records be kept after a transition?**
At least six years after the earlier of the date the account was closed or the date the information was collected, provided, replaced, or updated. Because a repaper updates this information for every household, each update starts a fresh six-year window on the record it replaces, which is why superseded profiles cannot be discarded.

**What is the difference between Rule 17a-3 and Rule 17a-4?**
Rule 17a-3 is the record-creation rule that lists what a broker-dealer must make, including Reg BI retail-customer information. Rule 17a-4 is the preservation rule that sets how long each record is kept, where it must be accessible, and what electronic-storage standard applies. A transition triggers obligations under both simultaneously.

**Can scanned statements alone satisfy 17a-4 in a transition?**
A scanned image can be a preserved record, but an image-only file makes reconciliation and prompt production difficult, because the data inside is not structured or verifiable against the new account record. Extracting source documents into structured, timestamped data satisfies preservation and gives you a defensible audit trail in one step.

Recordkeeping is not the glamorous part of a transition, but it is the part an examiner reads first. Build the retention map and the storage standard into the plan before day one, and the move that protects the book also protects the firm.

