---
title: "Post-Acquisition Repapering: The 90-Day Timeline That Protects AUM Retention"
topic: "Advisor Transitions & Repapering"
categoryId: advisor-transitions-and-repapering
description: "How a structured 90-day repapering timeline retains 92% of acquired AUM — broken into validation, custodian submission, and NIGO remediation phases."
image: post-acquisition-repapering-90-day-timeline-aum-retention.jpg
imageAlt: "M&A integration timeline showing the three phases of post-acquisition repapering across 90 days"
persona: "M&A Heads for Large RIAs and Broker-Dealers"
author: FastTrackr AI Team
---
Post-acquisition repapering that follows a structured 90-day timeline retains 92% or more of the acquired AUM. The timeline works in three phases: data validation and intake in days 1 to 21, form generation and custodian submission in days 22 to 60, and NIGO remediation and account confirmation in days 61 to 90. Firms that skip or compress phase one — the data validation phase — pay for it in phase two with NIGO rejection rates that extend the overall timeline past 120 days and produce the client uncertainty that drives attrition.

---

## Why 90 Days Is the Right Target — And 120 Days Is the Wrong One

The 90-day target for post-acquisition repapering isn't arbitrary. It comes from the data on client attrition during advisor transitions and acquisitions, which consistently shows a non-linear relationship between timeline length and AUM loss.

From days 1 to 60, client attrition risk remains relatively low — most clients are aware the acquisition is happening, the advisor is reassuring them, and account access disruption is minimal. From days 60 to 90, attrition risk begins to climb as clients who haven't seen their accounts move start asking whether they made a mistake staying. Past 90 days, attrition risk accelerates sharply.

[Cerulli Associates](https://www.cerulli.com) found that acquisitions completing the account transfer process within 90 days retained an average of 92% of client AUM. Acquisitions completing between 91 and 120 days retained 84%. Acquisitions exceeding 120 days retained 71%. The cost of a 30-day overrun on a $500M acquisition, at those retention rates, is $40M in AUM — roughly $300K in annual revenue at a 0.75% fee.

> **Key Takeaway:** The 90-day timeline isn't about compliance. It's about the $40M difference between finishing on time and finishing a month late on a $500M acquisition.

---

## Phase 1 (Days 1–21): Data Validation — The Phase That Determines Everything Else

Every day spent on data cleanup in phase one saves three to five days in phase two. This isn't a guideline — it's the lived experience of every ops team that has tried to skip intake validation and discovered the cost at custodian submission.

The acquired book's data quality problems are predictable. Address data goes stale at a rate of roughly 15% per year — meaning a $200M book that hasn't been actively validated in 18 months likely has 20% to 25% stale addresses. Beneficiary designations are missing on 8% to 12% of accounts in the average acquired book, per [Broadridge Financial Solutions](https://www.broadridge.com) research from 2024. Account titles frequently don't match between the advisor's CRM and the custodian's records, particularly for trusts and corporate accounts opened more than five years ago.

**Phase 1 actions (days 1–21):**

1. **Extract account data from all [custodians](/who-we-serve/custodians)** via ACATS export or direct data request. This is the source of truth — not the advisor's CRM.
2. **Run field-level validation** against receiving custodian requirements for each account type. Every required field must be populated and correctly formatted before form generation begins.
3. **Generate a data gap report.** Every missing field becomes a line item with an owner and a due date.
4. **Remediate gaps through direct outreach.** Missing beneficiary designations require contact with the client or advisor. Budget 3 to 5 business days for complete remediation on a 200-account book.

[FastTrackr AI](/)'s [acquisition integration workflow](https://fasttrackr.ai) runs this validation automatically against each custodian's current field requirements, producing a prioritized gap report within 24 hours of data ingestion. NIGO rates for acquisitions using automated pre-submission validation run 3% to 5% versus 18% to 22% for acquisitions relying on manual intake.

---

## Phase 2 (Days 22–60): Form Generation and Custodian Submission

With clean data in hand, phase two is where the physical account transfers happen. The operational challenge is sequencing and volume management across multiple custodians simultaneously.

**Sequencing by account type:**

| Account Type | Processing Time | Sequence |
|-------------|----------------|----------|
| Individual taxable | 5–7 business days | First |
| Joint accounts | 5–7 business days | Second |
| IRA / retirement | 7–10 business days | Third |
| Trust / entity | 10–15 business days | Fourth |
| Annuities / alternatives | 15–30+ business days | Last |

The sequencing logic is straightforward: get the fast-processing accounts moving first to show early progress (which matters for client confidence), and give the slow-processing accounts maximum runway within the 90-day window.

**Custodian batching:** Submitting large volumes to a single custodian in a single day creates processing backlog. According to [Fidelity's institutional clearing operations team](https://clearingcustody.fidelity.com), distributed submission schedules — submitting 20% to 30% of volume daily over 5 to 7 days rather than in one batch — produce 25% faster average processing times for high-volume submissions.

**Tracking:** Every submitted form needs a tracking record: submission date, expected processing date, custodian reference number, and status (pending/confirmed/rejected). At 2,000 accounts across 10 advisors, this tracking is only manageable with account-level status tooling.

---

## Phase 3 (Days 61–90): NIGO Remediation and Completion Confirmation

Phase three is the remediation phase — but if phases one and two were executed correctly, it should be a small one. The target: all NIGO responses resolved within 14 days of the rejection notice, all accounts confirmed transferred or in final processing by day 85.

**NIGO response protocol:**
1. NIGO alert received from custodian (email or portal notification)
2. Ops team categorizes the rejection: missing field, wrong form version, address mismatch, other
3. Remediation assigned to owner with 24-hour response target
4. Corrected form resubmitted; tracking record updated

At a 5% NIGO rate on 2,000 accounts, this is 100 remediation items. At 18%, it's 360. The difference between a manageable phase three and a chaotic one is entirely determined by how thoroughly phase one ran.

**Client communication in phase three:** For every account still in transit at day 75, the advisor should have a specific update ready for that client: where the account is in the transfer process, why it hasn't completed yet, and when it will complete. Clients who receive specific status updates are significantly less likely to reconsider the decision to follow the advisor.

[J.D. Power's 2025 wealth management satisfaction study](https://www.jdpower.com) found that advisors who provided proactive, specific account status updates during transitions retained 18% more AUM during the transition period than advisors who provided only general reassurance.

---

## Frequently Asked Questions

### What is the post-acquisition repapering timeline for wealth management firms?

The standard post-acquisition repapering timeline runs 90 days in three phases: data validation and intake (days 1–21), form generation and custodian submission (days 22–60), and NIGO remediation and completion confirmation (days 61–90). Acquisitions completing within 90 days retain an average of 92% of client AUM, compared to 71% for acquisitions exceeding 120 days.

### How much AUM do firms lose when post-acquisition repapering takes longer than 90 days?

Cerulli Associates research shows a clear relationship: acquisitions completing within 90 days retain 92% of client AUM, those completing in 91 to 120 days retain 84%, and those exceeding 120 days retain 71%. For a $500M acquisition, the difference between a 90-day and a 120-day completion is roughly $40M in retained AUM — approximately $300K in annual revenue at a 0.75% fee.

### What causes post-acquisition repapering to exceed 90 days?

The most common causes are: skipping pre-submission data validation (which leads to high NIGO rates in phase two), sequential rather than parallel track management, and insufficient NIGO response capacity in phase three. High NIGO rates (above 15%) are the single most common cause of acquisitions missing the 90-day target.

### What is a good NIGO rejection rate for post-acquisition repapering?

With pre-submission data validation, NIGO rates of 3% to 5% on first submission are achievable. Without validation, industry averages run 18% to 22%. A NIGO rate above 12% consistently causes acquisitions to miss the 90-day target because each rejected form adds 10 to 14 business days to that account's timeline.

### How should account transfers be sequenced in a post-acquisition repapering?

Sequence by processing speed: individual taxable accounts first (5 to 7 days), then joint accounts, IRAs and retirement accounts, trust and entity accounts, and finally annuities and alternative investments last (15 to 30+ days). This sequencing shows early client progress and gives the slowest-processing accounts maximum runway within the 90-day window.

### What should advisors tell clients during a post-acquisition account transfer?

Clients in active transition need specific status updates, not general reassurance. J.D. Power research shows that advisors providing specific, proactive account status updates retain 18% more AUM during transitions than those providing only general reassurance. For accounts still in transit at day 75, every client should have a specific update: current status, reason for the timeline, and expected completion date.

---

## Sources

- [Cerulli Associates: AUM Retention in M&A Acquisitions](https://www.cerulli.com) — 2025
- [Broadridge Financial Solutions: Data Quality in Advisor Transitions](https://www.broadridge.com) — 2024
- [Fidelity Institutional: Custodian Submission Processing](https://clearingcustody.fidelity.com) — 2025
- [J.D. Power: Wealth Management Client Satisfaction Study](https://www.jdpower.com) — 2025
- [Reddit r/financialplanning: Advisor discussions on acquisition timelines](https://www.reddit.com/r/financialplanning/)

---

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the post-acquisition repapering timeline for wealth management firms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The standard post-acquisition repapering timeline runs 90 days in three phases: data validation and intake (days 1–21), form generation and custodian submission (days 22–60), and NIGO remediation and completion confirmation (days 61–90). Acquisitions completing within 90 days retain an average of 92% of client AUM, compared to 71% for acquisitions exceeding 120 days."
      }
    },
    {
      "@type": "Question",
      "name": "How much AUM do firms lose when post-acquisition repapering takes longer than 90 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Acquisitions completing within 90 days retain 92% of client AUM, those completing in 91 to 120 days retain 84%, and those exceeding 120 days retain 71%. For a $500M acquisition, the difference between a 90-day and a 120-day completion is roughly $40M in retained AUM — approximately $300K in annual revenue at a 0.75% fee."
      }
    },
    {
      "@type": "Question",
      "name": "What causes post-acquisition repapering to exceed 90 days?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common causes are skipping pre-submission data validation (which leads to high NIGO rates in phase two), sequential rather than parallel track management, and insufficient NIGO response capacity in phase three. High NIGO rates above 15% are the single most common cause of acquisitions missing the 90-day target."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good NIGO rejection rate for post-acquisition repapering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With pre-submission data validation, NIGO rates of 3% to 5% on first submission are achievable. Without validation, industry averages run 18% to 22%. A NIGO rate above 12% consistently causes acquisitions to miss the 90-day target because each rejected form adds 10 to 14 business days to that account's timeline."
      }
    },
    {
      "@type": "Question",
      "name": "How should account transfers be sequenced in a post-acquisition repapering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sequence by processing speed: individual taxable accounts first (5 to 7 days), then joint accounts, IRAs and retirement accounts, trust and entity accounts, and finally annuities and alternative investments last (15 to 30+ days). This sequencing shows early client progress and gives the slowest-processing accounts maximum runway within the 90-day window."
      }
    },
    {
      "@type": "Question",
      "name": "What should advisors tell clients during a post-acquisition account transfer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients in active transition need specific status updates, not general reassurance. J.D. Power research shows advisors providing specific, proactive account status updates retain 18% more AUM during transitions than those providing only general reassurance. For accounts in transit at day 75, every client should have a specific update: current status, reason for the timeline, and expected completion date."
      }
    }
  ]
}
```


**Related:** [Meeting Assistant](/solutions/meeting-assistant) · [Advisor Transitions Platform](/solutions/advisor-transitions)

