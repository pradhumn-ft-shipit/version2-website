---
title: "Repapering FAQ: Every Question Operations Teams Have About Advisor Transition Paperwork"
topic: "Document Processing & Back-Office"
categoryId: document-processing-and-back-office-automation
description: "A comprehensive FAQ for operations teams covering the most common repapering questions, including NIGO prevention, custodian-specific quirks, signature workflows, and audit-trail requirements."
image: repapering-faq-operations-teams.jpg
imageAlt: "Operations team reviewing a repapering workflow dashboard with NIGO flags, custodian status, and audit-trail entries."
persona: Operations leaders and repapering consultants supporting advisor transitions
author: FastTrackr AI Team
---
# Repapering FAQ: Every Question Operations Teams Have About Advisor Transition Paperwork

Repapering is the process of transferring all client accounts, agreements, and documentation from one broker-dealer or custodian to another when an advisor changes firms. For a typical advisor with 200–500 client accounts, repapering takes 30–90 days under manual processes — and it's the single biggest operational variable that determines whether a transition succeeds or collapses. The questions below are the ones operations teams actually ask when managing a live transition: not the advisor's checklist, and not the client FAQ, but the questions that come up at 11pm when three custodian portals are open and 47 forms have been rejected. Each answer is designed to be operationally useful, not theoretically correct.

---

## The Foundations of Repapering

**What is repapering and why is it required during advisor transitions?**

When an advisor moves from one firm to another, all client accounts must be established at the new custodian under a new advisory agreement. The existing accounts don't transfer automatically — they must be individually re-documented, re-signed, and re-approved by the receiving institution. This process is called repapering. It's required because the client relationship is legally tied to the original firm, not the individual advisor. The new firm needs signed authorization from every client before it can receive custody of their assets or execute trades on their behalf. According to [SmartAsset](https://smartasset.com/advisor-resources/repapering), a repapering specialist "reviews all client contracts and documents to identify which areas require revision, updates client documentation and obtains all required signatures."

**How long does repapering typically take?**

Under manual processes, [repapering can take a few weeks to a few months](https://smartasset.com/advisor-resources/repapering) for most advisors. LPL reports an average transition timeline of 45 days, with 87% of AUM transitioned by month two. For operations teams without automation, processing 15–20 accounts per day per specialist is the realistic throughput — meaning a 500-account book takes 25–35 business days at full speed, not accounting for NIGOs, rejections, or unresponsive clients. [FastTrackr AI](/)'s data shows that the industry average with legacy processes is 90 days from announcement to completion. With automated form population and pre-submission validation, that drops to approximately 3 weeks.

**What are the biggest causes of repapering delays?**

The top five causes of repapering delays — in order of frequency — are: missing or stale client data at intake, custodian-specific form variations that differ from what the ops team expected, client non-response during the signature collection window, NIGO (Not In Good Order) rejections from incomplete or inconsistent form submissions, and account-level complications such as trust accounts, joint accounts with non-advisors, or accounts with standing instructions that don't transfer automatically. Missing client data at intake is the most controllable of these — and the most underestimated. Most repapering timelines blow up in the first 72 hours because the advisor's CRM data is 18 months out of date.

**How many accounts can an ops team process per day without automation?**

The realistic benchmark for a skilled ops specialist working manually is 15–20 complete account packets per day. This assumes: the client data is available and accurate, the forms are pre-selected correctly, and no NIGOs occur. In practice, most teams manage 10–15 accounts per day once rework is factored in. [Advisor360 demonstrated that bulk repapering technology can process 6,000 accounts in 90 seconds](https://www.thinkadvisor.com/2024/07/16/advisor360-launches-bulk-repapering-service/) — a gap of several orders of magnitude from manual throughput. For a 500-account book, automation is the difference between 25 days and 3 days of processing time.

---

## Workflow Questions

**What's the difference between repapering for a wirehouse breakaway vs. a BD-to-BD move?**

Wirehouse breakaways involve transferring from a firm where the advisor was an employee to an independent RIA or independent BD model — which typically means establishing new custodial relationships, not just new agreements at an existing custodian. This requires more documentation, account re-establishment at [Fidelity](https://www.fidelity.com/wealth-services/working-with-fidelity), Schwab, or [Pershing](https://www.pershing.com), and often triggers a full ACATS transfer rather than just a re-registration. BD-to-BD moves are generally cleaner: the custodian may stay the same, only the clearing firm or BD agreement changes. The paperwork burden is similar in volume but less structurally complex. Wirehouse breakaways require more lead time for custodian agreements and advisor licensing to be finalized before repapering can begin.

**How do you handle clients who are unresponsive during the repapering process?**

Unresponsive clients are one of the top five reasons transitions run long. The standard approach is a three-touch escalation: initial outreach by the ops team, follow-up by the advisor (personal relationship matters here), and then a final attempt via certified mail if required by compliance. For large books, 10–15% of clients will require manual outreach beyond the initial packet. The advisor's personal call is the most effective tool — [research cited in 3xEquity](https://3xequity.com/blog/ripped-from-reddit-repapering-gets-real) found that 70% of advisors moved 70%+ of their AUM within the first few months, which means roughly 30% of AUM is at risk from slow client response. Pre-transition communication from the advisor to clients — explaining what they'll receive and why to sign quickly — dramatically reduces unresponsive client rates.

**What information do you need from an advisor before starting repapering?**

The minimum intake data set includes: complete client list with account numbers at the current custodian, client contact information (current addresses, phone, email), account type for each account (individual, joint, trust, IRA, etc.), beneficiary designations, and any standing instructions or automated features (systematic investments, RMDs, distribution schedules). Missing any of these at intake means delays downstream. The most common gap is beneficiary information — [custodians](/who-we-serve/custodians) require it on new account forms, and advisors frequently don't have it current in their CRM. Building a pre-transition intake checklist and sending it to the advisor 30 days before announcement prevents most of these issues.

**What's the right order to process accounts — highest AUM first, or something else?**

There are three schools of thought, and the right answer depends on the transition type. Highest AUM first is the most common approach — it maximizes revenue protection in the first wave and ensures the largest accounts are in good order before smaller ones. Complexity-first is preferred by experienced ops teams on large wirehouse breakaways, where trust accounts and accounts with multiple owners require the most lead time. Relationship-risk first means processing the clients most likely to defect first — advisors typically know which clients are wavering. The practical recommendation: process the top 20% by AUM in the first five days, then move to a complexity-sorted batch. [Kitces notes](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services) that planning the repapering sequence before the transition date — not during — is the key to a smooth outcome.

**How do you track repapering progress across 500 accounts?**

Without a purpose-built system, most teams use a master Excel tracker with columns for account number, client name, packet sent date, signature received date, custodian submission date, custodian confirmation, and NIGO status. This works at 100 accounts. At 500 accounts across three custodians, the spreadsheet becomes the bottleneck — version control breaks down, multiple team members overwrite each other's updates, and the ops director has no real-time visibility. The minimum viable tracking system for a 500-account transition is a shared, live status board with custodian-specific views and escalation flags. Automated tracking systems can pull confirmation data from custodian portals directly, eliminating the manual update step entirely.

---

## Operations at Scale

**When does it make sense to hire a repapering specialist vs. handling it in-house?**

The threshold is roughly 200 accounts or a concurrent load of more than two active transitions. Below that, a trained ops professional with the right templates and tools can manage repapering in-house. Above it, the complexity of coordinating multiple custodians, managing NIGOs, and maintaining client communication requires either dedicated headcount or an outsourced transition specialist. The cost of a repapering specialist ranges from $30K–60K annually for an in-house hire, or $15K–25K per transition for an outsourced consultant. The cost of a 30-day delay on a $500M AUM transition at 0.8% annual fee is approximately $330K in delayed revenue — context that makes specialist investment look very efficient.

**What's a NIGO and how does it affect repapering timelines?**

NIGO stands for Not In Good Order. It's the custodian's rejection of a submitted account packet because something is missing, inconsistent, or doesn't meet their requirements. Common NIGO causes in repapering include: missing client signature on one of several required forms, outdated beneficiary information, account feature elections not completed (options trading, checkwriting), missing government ID for identity verification, and inconsistencies between the client's name as signed vs. name on record. Each NIGO typically adds 3–7 business days to that account's timeline — the form goes back to the client for correction, must be re-signed, and re-submitted. At industry average NIGO rates (often 30–50% of accounts in manual transitions), timeline impact is significant. FastTrackr AI's pre-submission validation achieves a 95% reduction in NIGOs.

**How does automation change the repapering math?**

The core math: manual processing = 15–20 accounts per specialist per day. Automated processing = 200–500+ accounts per day with pre-submission validation. The productivity multiplier is 15–25x on throughput, and the quality multiplier is the 95% NIGO reduction. For a 500-account book, automation takes the repapering timeline from 25–35 business days to 3–5 business days for initial packet generation. The human work shifts from form population to exception handling and client communication — which is where experienced ops professionals are actually valuable. [LPL data](https://www.lpl.com/join-lpl/establishing-your-business/transitioning-your-practice.html) shows that 87% of AUM transitioned by month two is the industry benchmark; with automation, most transitions hit 90%+ within 30 days.

---

## Edge Cases

**What happens if a client account is rejected by the receiving custodian?**

Outright rejections (not NIGOs, but hard rejections) typically occur for one of three reasons: the account type isn't supported at the receiving custodian, the client has a regulatory restriction that blocks the transfer, or the account is part of an ongoing legal or estate proceeding. For most rejections, the ops team's first step is to contact the custodian's transition desk directly — form rejection often has a resolution path that isn't obvious from the rejection notice. If the account genuinely can't transfer, the advisor and compliance team need to be notified immediately, as this affects client communication and the advisor's AUM timeline. These accounts should be flagged in the master tracker and managed separately from the standard repapering workflow.

**What compliance documentation do you need to keep throughout repapering?**

The minimum compliance documentation set includes: the signed client consent to transfer for each account, all submitted forms and the submission confirmation from each custodian, any NIGO notices and the corrected re-submissions, dated records of client communication (initial outreach, follow-up, final confirmation), and internal supervisor review of packets before submission if required by the BD's supervisory procedures. Some BDs require an OSJ pre-review of all repapering packets. Keep documentation in a dedicated transition folder per advisor, organized by account, for a minimum of three years. Digital document management systems that timestamp submissions and create an audit trail are strongly preferred by compliance departments over email chains and shared drives.

**What does "completion" look like — when is a transition fully repapering-done?**

A transition is operationally complete when all transferable accounts have custodian confirmation numbers, the advisor has trading authority at the new firm, and no outstanding NIGO or rejected accounts remain without a documented resolution path. "Fully repapering-done" is often declared prematurely — many teams close the transition when 90% of accounts are confirmed, leaving a long tail of smaller accounts that never get properly closed out. The cleaner standard: repapering is complete when every account in the original book has either a confirmation number, a documented rejection reason with client notification, or a client-elected decision to remain at the old firm. [Fidelity data cited in 3xEquity](https://3xequity.com/blog/ripped-from-reddit-repapering-gets-real) shows that 80% of advisors who transitioned actually increased their AUM — which suggests that operationally clean transitions drive better outcomes, not just faster timelines.

---

Repapering doesn't have to be daunting — [WealthManagement.com's characterization](https://www.wealthmanagement.com/business-planning/for-transitioning-advisors-repapering-is-a-daunting-task) is accurate for teams without the right process and data. But the core problem isn't forms. It's dirty client data, unpredictable custodian requirements, and manual throughput limits that no amount of effort fully overcomes. The ops teams that run the cleanest transitions plan the repapering sequence before announcement, collect complete intake data before starting, and have a real-time tracking system that surfaces NIGOs and exceptions immediately. The paperwork is the symptom. The process — and the data quality behind it — is the cure.

---

## Frequently Asked Questions

### What is repapering in advisor transitions?
Repapering is the process of re-establishing all client accounts, agreements, and authorizations at a new broker-dealer or custodian when an advisor changes firms. Every client account must be individually re-documented and re-signed because the client relationship is legally tied to the original firm, not the advisor. For an advisor with 200–500 accounts, this creates a significant operational workload that typically takes 30–90 days under manual processes.

### How long does repapering take?
Repapering typically takes 30–90 days under manual processes, depending on book size, custodian complexity, and NIGO rates. LPL reports an average transition timeline of 45 days with 87% of AUM transitioned by month two. With automation and pre-submission validation, that 90-day average drops to approximately 3 weeks. The biggest variables are client responsiveness, data quality at intake, and the number of NIGO rejections that require re-submission.

### What are the most common causes of repapering delays?
The five most common causes of repapering delays are: (1) missing or stale client data at intake — especially beneficiary information and contact details — (2) NIGO rejections from custodians due to incomplete or inconsistent forms, (3) client non-response during the signature collection window, (4) custodian-specific form variations that differ from what the ops team expected, and (5) account-level complications such as trust accounts, joint accounts, or accounts with standing instructions. Missing client data at intake is the most controllable and most frequently underestimated cause.

### How many accounts can one ops specialist repaper per day?
A skilled ops specialist working manually can process 15–20 complete account packets per day under ideal conditions — meaning accurate client data, correct form selection, and no NIGOs. In practice, most teams manage 10–15 accounts per day once rework is factored in. Automation raises this ceiling dramatically: systems like FastTrackr AI can generate 200–500+ account packets per day, shifting the human work from form population to exception handling and client communication.

### What is a NIGO rejection and how long does it add to a timeline?
NIGO stands for Not In Good Order — a custodian rejection of a submitted account packet because something is missing, incorrect, or doesn't meet their requirements. Each NIGO typically adds 3–7 business days: the form goes back to the client for correction, requires a new signature, and must be resubmitted. At industry-average NIGO rates of 30–50% in manual transitions, NIGO delays are the single biggest controllable driver of transition timeline overruns. Pre-submission validation — checking data accuracy before the form is populated — is the most effective prevention strategy.

### What's the right order to process accounts during repapering?
The recommended approach for most transitions is to process the top 20% of accounts by AUM in the first five days (protecting the most revenue first), then shift to a complexity-sorted batch where trust accounts, joint accounts, and non-standard accounts get dedicated attention. Complexity-first works better for wirehouse breakaways with multiple custodians. Relationship-risk sequencing — processing wavering clients first — is worth layering over either approach when the advisor has identified specific at-risk relationships.

### When does automation become essential for repapering?
Automation becomes essential — not just helpful — at approximately 200 accounts or when more than two transitions are running concurrently. Below that threshold, skilled in-house ops professionals with good templates can manage manually. Above it, the combination of multi-custodian form variations, NIGO rates at scale, and tracking complexity makes manual processing the primary bottleneck. The cost of delay on a $500M AUM transition at 0.8% annual fee is approximately $10,000 per day — context that makes automation investment very straightforward to justify.

### What documentation should be kept throughout repapering for compliance?
Keep: signed client consent to transfer for each account, all submitted forms with custodian submission confirmations, NIGO notices and corrected re-submissions, dated client communication records, and any supervisor or OSJ review records required by your BD's supervisory procedures. Store in a dedicated, account-level folder per transition. Minimum retention period is three years. Digital document systems that timestamp submissions and maintain an audit trail are strongly preferred by compliance departments over email-based tracking.

### What's the difference between a NIGO and an outright custodian rejection?
A NIGO is a fixable problem — something is incomplete or incorrect on the form, and the custodian returns it for correction and resubmission. An outright rejection means the account itself cannot be transferred — typically because the account type isn't supported at the receiving custodian, the client has a regulatory restriction, or the account is involved in a legal proceeding. NIGOs are common and manageable. Hard rejections require immediate escalation to the transition desk, compliance, and the advisor.

### How do you know when a transition is operationally complete?
A transition is operationally complete when every account in the original book has either: (1) a custodian confirmation number showing successful transfer, (2) a documented rejection reason with client notification, or (3) a documented client decision to remain at the original firm. The common mistake is declaring completion when 90% of accounts confirm and letting the remaining 10% trail off without resolution. Clean transitions document every account's outcome, close the tracker formally, and notify the advisor and compliance of final disposition.

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is repapering in advisor transitions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repapering is the process of re-establishing all client accounts, agreements, and authorizations at a new broker-dealer or custodian when an advisor changes firms. Every client account must be individually re-documented and re-signed because the client relationship is legally tied to the original firm, not the advisor. For an advisor with 200–500 accounts, this creates a significant operational workload that typically takes 30–90 days under manual processes."
      }
    },
    {
      "@type": "Question",
      "name": "How long does repapering take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repapering typically takes 30–90 days under manual processes, depending on book size, custodian complexity, and NIGO rates. LPL reports an average transition timeline of 45 days with 87% of AUM transitioned by month two. With automation and pre-submission validation, that 90-day average drops to approximately 3 weeks. The biggest variables are client responsiveness, data quality at intake, and the number of NIGO rejections that require re-submission."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most common causes of repapering delays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The five most common causes of repapering delays are: (1) missing or stale client data at intake — especially beneficiary information and contact details — (2) NIGO rejections from custodians due to incomplete or inconsistent forms, (3) client non-response during the signature collection window, (4) custodian-specific form variations that differ from what the ops team expected, and (5) account-level complications such as trust accounts, joint accounts, or accounts with standing instructions. Missing client data at intake is the most controllable and most frequently underestimated cause."
      }
    },
    {
      "@type": "Question",
      "name": "How many accounts can one ops specialist repaper per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A skilled ops specialist working manually can process 15–20 complete account packets per day under ideal conditions — meaning accurate client data, correct form selection, and no NIGOs. In practice, most teams manage 10–15 accounts per day once rework is factored in. Automation raises this ceiling dramatically: systems like FastTrackr AI can generate 200–500+ account packets per day, shifting the human work from form population to exception handling and client communication."
      }
    },
    {
      "@type": "Question",
      "name": "What is a NIGO rejection and how long does it add to a timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NIGO stands for Not In Good Order — a custodian rejection of a submitted account packet because something is missing, incorrect, or doesn't meet their requirements. Each NIGO typically adds 3–7 business days: the form goes back to the client for correction, requires a new signature, and must be resubmitted. At industry-average NIGO rates of 30–50% in manual transitions, NIGO delays are the single biggest controllable driver of transition timeline overruns. Pre-submission validation — checking data accuracy before the form is populated — is the most effective prevention strategy."
      }
    },
    {
      "@type": "Question",
      "name": "What's the right order to process accounts during repapering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The recommended approach for most transitions is to process the top 20% of accounts by AUM in the first five days (protecting the most revenue first), then shift to a complexity-sorted batch where trust accounts, joint accounts, and non-standard accounts get dedicated attention. Complexity-first works better for wirehouse breakaways with multiple custodians. Relationship-risk sequencing — processing wavering clients first — is worth layering over either approach when the advisor has identified specific at-risk relationships."
      }
    },
    {
      "@type": "Question",
      "name": "When does automation become essential for repapering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automation becomes essential — not just helpful — at approximately 200 accounts or when more than two transitions are running concurrently. Below that threshold, skilled in-house ops professionals with good templates can manage manually. Above it, the combination of multi-custodian form variations, NIGO rates at scale, and tracking complexity makes manual processing the primary bottleneck. The cost of delay on a $500M AUM transition at 0.8% annual fee is approximately $10,000 per day — context that makes automation investment very straightforward to justify."
      }
    },
    {
      "@type": "Question",
      "name": "What documentation should be kept throughout repapering for compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keep: signed client consent to transfer for each account, all submitted forms with custodian submission confirmations, NIGO notices and corrected re-submissions, dated client communication records, and any supervisor or OSJ review records required by your BD's supervisory procedures. Store in a dedicated, account-level folder per transition. Minimum retention period is three years. Digital document systems that timestamp submissions and maintain an audit trail are strongly preferred by compliance departments over email-based tracking."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a NIGO and an outright custodian rejection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A NIGO is a fixable problem — something is incomplete or incorrect on the form, and the custodian returns it for correction and resubmission. An outright rejection means the account itself cannot be transferred — typically because the account type isn't supported at the receiving custodian, the client has a regulatory restriction, or the account is involved in a legal proceeding. NIGOs are common and manageable. Hard rejections require immediate escalation to the transition desk, compliance, and the advisor."
      }
    },
    {
      "@type": "Question",
      "name": "How do you know when a transition is operationally complete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A transition is operationally complete when every account in the original book has either: (1) a custodian confirmation number showing successful transfer, (2) a documented rejection reason with client notification, or (3) a documented client decision to remain at the original firm. The common mistake is declaring completion when 90% of accounts confirm and letting the remaining 10% trail off without resolution. Clean transitions document every account's outcome, close the tracker formally, and notify the advisor and compliance of final disposition."
      }
    }
  ]
}
</script>


**Related:** [Meeting Assistant](/solutions/meeting-assistant) · [Advisor Transitions Platform](/solutions/advisor-transitions)

