---
title: Three Questions Every Compliance Officer Should Ask Before Approving a New Custodial Workflow
topic: "Compliance, Security & Data"
categoryId: ai-for-compliance-security-and-data-management
description: A practical pre-approval checklist for compliance officers reviewing new custodial workflows during an advisor transition. Three questions that catch most NIGO risks before go-live.
image: three-questions-compliance-officer-new-custodial-workflow.jpg
imageAlt: Compliance officer reviewing a custodial workflow approval checklist on a tablet
persona: Compliance officers at independent broker-dealers
author: FastTrackr AI Team
---
# Three Questions Every Compliance Officer Should Ask Before Approving a New Custodial Workflow

When an advisor transition kicks off, the operations side moves quickly. New custodial workflows get configured, exception handling is decided in side conversations, and by the time anything reaches compliance for review, a lot of decisions are already locked in. The cost of catching a workflow problem after go-live is steep: NIGOs spike, audit trails become incomplete, and FINRA examiners ask questions you can't easily answer.

Compliance officers at [independent broker-dealers](/who-we-serve/independent-broker-dealers) can reset the conversation by asking three specific questions before they sign off on any new custodial workflow. Each one targets a category of failure that legacy review processes routinely miss.

## 1. Where does this workflow store the evidence that a registered representative consented to the change?

Most modern custodial workflows pull data automatically — account numbers, beneficiary information, advisor compensation splits. That speed is the value, but it also means the consent moment is now buried in a system event, not on a signed page in a filing cabinet. Before approving the workflow, ask exactly which field, in which table, on which system retains the consent evidence. Then ask how long it's retained and who can modify it after the fact.

If the answer involves email screenshots or "we'd export it if we needed to," the workflow is not yet ready for production. [FINRA Rule 4511](https://www.finra.org/rules-guidance/key-topics/books-records) expects books and records to be preserved in a tamper-evident, immediately accessible form. Workflow tooling that scatters the consent trail across an email thread, a Slack message, and a CRM note does not clear that bar.

## 2. What does this workflow do when the custodian rejects the submission?

Most workflow demos show the happy path. The compliance question is what happens on the unhappy path. When [Schwab Advisor Services](https://www.schwab.com/advisor-services) or [Fidelity](https://www.fidelity.com/wealth-services/working-with-fidelity) rejects a submitted form for a missing field or a mismatched signature, what does the workflow do?

The acceptable answers are narrow: the workflow either (a) automatically queues the rejection into a structured exception log with the rejection reason captured verbatim, or (b) routes the rejection to a named operator with a documented SLA and the same structured logging. The unacceptable answers are broad: anything involving "the rep gets an email," "the ops person catches it in the daily report," or "the custodian calls if it's urgent" will produce gaps that surface during your next audit.

For high-volume transitions, [document intelligence](/solutions/document-intelligence) tooling can ingest the custodian's rejection notice, classify the issue, and route it back into the workflow with the original submission context attached. That's the model worth holding new workflow approvals against.

## 3. Who can change this workflow after it's live, and how are those changes recorded?

The third question is the one most likely to surprise operations teams. A workflow that has been approved by compliance is a regulatory artifact, not just an operational one. If anyone with admin rights to the workflow tool can edit a step — a routing rule, a validation, a default value — without an audit trail, then your approval covered the workflow on day one but not on day fifty.

The right answer to this question is: changes are version-controlled, each change is timestamped and attributed to a named user, and the diff of any change is reviewable. Most modern wealth management transition technology supports this natively, but only if it's been configured. If the workflow you're reviewing hasn't enabled change auditing, that's a precondition for approval, not a nice-to-have.

## Putting the three questions to work

The point of these three questions isn't to add friction to the approval process. It's to redirect the conversation from "does this workflow do the right thing on a good day" to "does this workflow preserve the evidence we'll need on a bad day."

In practice, asking them at the workflow-design stage saves compliance officers hours of cleanup work later — and the operations team typically appreciates having the gaps named before they ship rather than after. [Transition consultants](/who-we-serve/transition-consultants) who have built mature transition operations programs treat these three questions as table stakes for any new custodial integration.

If you're running compliance for an independent broker-dealer that handles a high volume of advisor transitions, the cost of getting this checklist wrong scales linearly with your transition velocity. Worth the fifteen minutes to ask them before signing.


**Related:** [Meeting Assistant](/solutions/meeting-assistant)

