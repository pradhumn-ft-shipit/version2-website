---
title: "The CRM Side of an Advisor Transition: What Client Data Moves and How to Wire It Into Repapering"
topic: "Advisor Transitions & Repapering"
description: "Your CRM is the client-data spine of the new firm, but the Broker Protocol limits what you can carry to five fields. Here is what moves, what does not, and how to wire it into repapering without rekeying."
author: "FastTrackr AI Team"
image: crm-side-advisor-transition-client-data-wire-into-repapering-hero.png
imageAlt: "The CRM Side of an Advisor Transition: What Client Data Moves and How to Wire It Into Repapering"
---

Your CRM is the client-data spine of the new firm, but it is not a suitcase you carry across the line intact. Under the Broker Protocol you can take five client fields: name, address, email, phone, and account title. Everything else, including account numbers and statements, stays behind and must be rebuilt from source documents. The job is wiring those five fields into your repapering workflow so client data flows once, cleanly, and never becomes a second place you rekey.

Most transition tech guidance treats the CRM as an afterthought, something you set up once the accounts are moving. That is backward. The CRM is where the transition either stays organized or falls apart, because it is the only system that spans both data streams in a repaper: the client relationship data you bring, and the account data you rebuild. Get the wiring right and the CRM becomes your control tower. Get it wrong and it becomes a third copy of the same errors.

## What your CRM can and cannot carry across the line

Start with the constraint, because it defines everything downstream. The [Broker Protocol, established in 2004](https://www.kitces.com/blog/broker-protocol-recruiting-requirements-for-moving-brokers-to-breakaway-or-go-independent-ria/) by Smith Barney, Merrill Lynch, and UBS to reduce litigation over client solicitation, permits a departing advisor to take [exactly five categories of client information](https://smartasset.com/advisor-resources/broker-protocol) and nothing more.

| Moves with you (Protocol-permitted) | Stays behind (not permitted to take) |
| --- | --- |
| Client name | Account numbers |
| Address | Account statements |
| Email address | Cost basis and positions |
| Phone number | Account values and holdings |
| Account title or registration | Any portion of the client file |

The practical consequence is a clean split. The five permitted fields are relationship data, and they seed your new CRM. The forbidden fields are account data, and they have to be reconstructed at the new firm from documents the client provides after they consent to move. This is exactly why the CRM and the statement are two different problems: the CRM carries who the client is, and the brokerage statement carries what they hold. If both firms are Protocol members, you should also document the exact list of client information you took and include it with your resignation letter, a point we cover in the [Broker Protocol compliance checklist for what you can take](https://fasttrackr.ai/blog/broker-protocol-compliance-checklist-what-you-can-take).

If either firm is not a Protocol signatory, the rules change and the five-field allowance may not apply at all, which is a securities-attorney question rather than a CRM question. Do not let a data-migration convenience make a legal decision for you.

## The two data streams a CRM has to reconcile

A repaper runs on two separate inputs that meet inside the CRM.

Stream one is client data: the five Protocol fields, which you export from the old CRM (or reconstruct from memory and permitted records) and load into the new one before U4 drop day. This is what lets you contact clients the moment you are cleared to.

Stream two is account data: registration, account type, numbers, positions, and cost basis, none of which you can carry. This has to come from the client's own statements after they agree to transfer. Reading those statements accurately is its own discipline, and AI [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) is what turns a stack of multi-custodian PDFs into the structured account records the repaper needs.

The CRM is where the two streams join. You match the incoming account data to the right client record, confirm the registration on the statement matches the account title you carried, and feed the combined, verified record into the receiving custodian's form. When those two streams do not reconcile, when the account title on the statement does not match the title in your CRM, you have found a NIGO before it happens instead of after.

## Mapping CRM fields onto receiving account forms

The failure mode here is subtle and expensive: the same client data lives in different field names across your CRM, the custodian form, and the account-opening system, and every hand-off is a chance to transpose or drop a value. A "primary phone" in Wealthbox, a "phone" in Redtail, and a "Business Phone" in Salesforce Financial Services Cloud are the same fact wearing three labels.

Clean wiring means the field mapping is defined once, not improvised per account:

- Map each CRM field to its exact destination on each custodian's form.
- Preserve householding: joint accounts, trusts, and entity accounts must keep their relationships, or you split a household into orphaned records.
- Deduplicate on load, because a spouse who appears in two advisors' books becomes two client records and two conflicting sets of accounts.
- Let the data flow from CRM to form directly, so no one retypes a name that already exists in a structured field.

This is the same single-flow principle that governs [custodian integration across Schwab, Fidelity, and Pershing](https://fasttrackr.ai/blog/custodian-integration-schwab-fidelity-pershing-repapering): data entered once, mapped deliberately, validated before it moves. A CRM that only stores data but cannot push it cleanly into the repapering step just adds a manual copy operation to every account.

## Standing up the new CRM under a transition deadline

If you are launching an RIA, you are also choosing and configuring a CRM while the repapering clock runs. The choice matters because onboarding time is time you do not have. A rough fit by firm profile:

| CRM | Best fit | Transition consideration |
| --- | --- | --- |
| Wealthbox | Solo and small breakaway RIAs | Fastest to stand up, often productive within a week |
| Redtail | Established independents wanting deep integrations | Broadest custodian and portfolio integrations; longer setup |
| Salesforce Financial Services Cloud | Enterprise and high-customization firms | Most flexible, highest cost and configuration effort |

Redtail holds the largest advisor-CRM market share in recent T3 and Inside Information surveys, Wealthbox wins on speed to productivity for smaller firms, and Salesforce Financial Services Cloud is the enterprise standard at a starting cost around 225 dollars per user per month before customization. For a breakaway on a deadline, the safest move is the CRM your team can actually operate on day one, not the one with the longest feature list. Whatever you choose, load the five Protocol fields first and confirm the field mapping into your repapering workflow before you import a single account, because the data points you capture up front determine how clean the repaper runs, as our [RIA operations director transition intake checklist](https://fasttrackr.ai/blog/ria-ops-director-transition-intake-checklist) lays out.

## Where CRM integration actually breaks

Four failure points cause most of the pain, and all four are preventable.

Duplicate records are the first. When client data comes from two advisors, or from a CRM export plus manual entry, the same client lands twice with different account sets. Deduplicate before you map anything.

Broken householding is the second. Joint, trust, and entity relationships that are implicit in the old system get flattened on export, and you end up repapering a joint account as two individual accounts. Preserve the relationships explicitly.

Field-name drift is the third. The transpositions happen at the boundaries between systems, so the fewer manual hand-offs between CRM, form, and custodian, the fewer errors survive to submission.

Silent staleness is the fourth. A phone number or address that was right two years ago in the old CRM is not necessarily right now, and a returned client mailing during a transition is a lost contact at the worst possible moment. Treat the carried five fields as a starting point to confirm with the client, not gospel.

## The compliance layer you cannot skip

The CRM is a books-and-records system, which means how you populate it during a transition is itself subject to supervision. Two habits keep it clean. Keep the exact list of client information you carried, so you can substantiate that you took only the five permitted fields. And remember that the new firm's recordkeeping duties attach the moment client data lands in the CRM, so the migration itself needs an audit trail. None of this is a reason to slow down. It is a reason to run the client-data stream through a deliberate, documented workflow rather than a rushed spreadsheet import.

Handled well, the CRM stops being the system you set up last and becomes the one that holds the whole transition together. It carries the five fields you are allowed to bring, reconciles them against the account data you rebuild from statements, and feeds clean, validated records into the repaper. That is the difference between a transition that runs on a control tower and one that runs on scattered exports. FastTrackr's [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is built to join those two streams, and the [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who run this at volume treat the CRM wiring as a first-week task, not a last one. The outcome of doing it that way shows up in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently asked questions

**What client data can I take from my CRM when I change firms?**
Under the Broker Protocol you may take five categories: client name, address, email address, phone number, and account title. You may not take account numbers, statements, positions, cost basis, or any portion of the client file. If both your current and new firm are Protocol signatories, document the exact information you carried and include the list with your resignation letter.

**How is CRM data different from the account data in a repaper?**
CRM data is relationship data: who the client is and how to reach them, which is the five fields you can carry under the Protocol. Account data is what the client holds: registration, account numbers, positions, and cost basis, none of which transfers with you. Account data must be rebuilt at the new firm from the client's statements after they consent to move.

**Which CRM should a breakaway advisor choose during a transition?**
Choose for speed to productivity, not feature count. Wealthbox stands up fastest and suits solo and small RIAs. Redtail offers the broadest integrations for established independents but takes longer to configure. Salesforce Financial Services Cloud fits enterprise firms that need heavy customization, at a higher cost and setup effort. The right choice is the one your team can operate on day one.

**Why do CRM-to-form errors cause ACATS rejects?**
The same client fact carries different field names across your CRM, the custodian form, and the account-opening system, so every manual hand-off risks a transposition or a dropped value. If the account title in your CRM does not match the registration on the statement, the transfer form goes out with a mismatch and gets rejected. Defining the field mapping once and letting data flow without rekeying removes that risk.

**Does the Broker Protocol always apply to my CRM export?**
No. The five-field allowance applies only when both the departing and receiving firms are Protocol signatories. If either firm has withdrawn from the Protocol, or was never a member, the allowance may not apply and the rules governing client data become a legal question. Confirm both firms' membership and consult a securities attorney before relying on the Protocol for any data you carry.

