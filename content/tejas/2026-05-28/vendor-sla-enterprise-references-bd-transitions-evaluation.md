---
title: "Vendor SLA and Enterprise References: Evaluation Guide for 30-40 BD Transitions Per Year"
topic: FastTrackr AI in Action
categoryId: fasttrackr-ai-in-action
description: "How independent broker-dealers running 30-40 advisor transitions per year should evaluate vendor SLAs, escalation paths, and enterprise references — including the specific clauses, response-time tiers, and reference call questions that separate enterprise-grade vendors from SaaS lookalikes."
image: vendor-sla-enterprise-references-bd-transitions-evaluation.jpg
imageAlt: Evaluation matrix comparing vendor SLAs and reference call quality for high-volume broker-dealer transition platforms
persona: Independent broker-dealer executives evaluating transition platforms at 30-40 advisor/year volume
author: FastTrackr AI Team
---
# Vendor SLA and Enterprise References: Evaluation Guide for 30-40 BD Transitions Per Year

A broker-dealer running 30-40 transitions per year needs vendor SLAs with 4-hour P1 response, 24/7 incident escalation, named customer success ownership, and three reference calls with BDs of comparable volume. The standard SaaS T&Cs that work for a 50-employee RIA fail at this scale because a single platform outage during a 12-advisor wave can stall $400M in AUM movement for a week. This guide covers the specific SLA clauses, response tiers, and reference call questions to evaluate before signing.

## Why SaaS-Standard SLAs Don't Work at BD Scale

Most transition platforms market themselves with consumer-SaaS SLAs: 99.9% uptime, "best-effort" support, business-hours response. For a small RIA running 2-3 transitions per quarter, that's adequate. For a BD running 30-40 per year with overlapping waves, the math changes:

- **Throughput dependency.** 30 transitions/year means ~2.5 concurrent at any time and 4-5 active during peak resignation seasons (typically Q1 and Q3). A single day of platform downtime stalls 4-5 advisors simultaneously, each with $50M-$200M of AUM in motion.
- **NIGO time-sensitivity.** ACATS clocks run continuously. A NIGO that sits unrouted for 48 hours because the platform was down is a NIGO that arrives at the custodian after the cure window — meaning re-submission and another 5-10 day clock.
- **Audit trail liability.** BD compliance departments need real-time audit trail access for FINRA examinations. A platform that loses 24 hours of activity logs because of a backup failure creates a compliance gap that takes months to remediate.

The SLA needs to reflect the operational reality. Enterprise-grade transition platforms publish SLAs that look more like custodian SLAs than SaaS SLAs.

## The Six SLA Clauses That Matter

### 1. Response Time Tiers

The platform must define at least three incident severity tiers with distinct response times. The benchmark for BD-scale operations:

| Severity | Definition | Response | Resolution Target |
|----------|------------|----------|-------------------|
| P1 — Critical | Platform unavailable, data loss, or active transition blocked | 4 hours, 24/7 | 8 hours |
| P2 — High | Degraded performance affecting >25% of active users | 8 hours, business days | 24 hours |
| P3 — Medium | Functional issue with workaround available | 24 hours, business days | 5 business days |

If the vendor cannot define these tiers in writing in the MSA, that's a signal they have not operated at BD scale before.

### 2. Uptime Commitment with Specific Exclusions

99.9% uptime sounds good but allows for 8.76 hours of unplanned downtime per year — and many SaaS uptime calculations exclude planned maintenance, beta features, third-party dependencies, and "force majeure" (which often quietly includes AWS outages). For BD-scale work, the benchmark is 99.95% with maintenance windows scheduled outside business hours in all four US time zones, and credits paid automatically (not by customer request).

### 3. Named Customer Success Ownership

A named CSM with a backup CSM, both with documented response coverage. The CSM owns the relationship, has authority to escalate inside the vendor, and knows the BD's transition pipeline by name. Generic "support ticket" coverage is inadequate when the BD's CFO is asking why $80M of AUM hasn't custodied.

### 4. Incident Communication SLA

Within 30 minutes of incident detection, the vendor publishes a status page update *and* directly notifies the named contacts at the BD via at least two channels (email + SMS or Slack). Many SaaS vendors only update a status page; for BD-scale operations, the named CSM should call before the BD has to ask what's happening.

### 5. Data Export and Portability

The MSA should include a data export clause: complete data export in machine-readable format (JSON, CSV, or PDF for documents) within 10 business days of request, at no charge, with no minimum usage period required. This protects the BD if the vendor relationship sours mid-contract.

### 6. Liability and Insurance Floor

For 30-40 transitions/year representing $1B-$4B in AUM movement annually, the liability floor should be at least $5M in errors-and-omissions coverage and $2M in cyber liability, with the vendor named as additional insured on certificates of insurance refreshed annually.

## Reference Call Questions That Surface Real Behavior

Vendor-provided references are pre-selected; that's fine, but the call needs to be structured to surface real operational behavior, not just satisfaction theater. Run three reference calls with BDs operating at similar or higher volume. Ask:

**On reliability:**
- "Describe the last P1 incident you experienced with this platform. What was the response time and resolution time? What didn't go well?"
- "In the last 12 months, how many unplanned downtime events affected your active transitions?"
- "Have you ever needed to invoke the SLA credit? How smoothly did that go?"

**On scaling:**
- "Walk me through your largest concurrent transition month. How many advisors, how much AUM in motion, how did the platform handle peak load?"
- "What broke first when you scaled past 20 concurrent transitions?"

**On change management:**
- "When the vendor releases a major feature update, how much advance notice do you get? Are you ever surprised by a UI change mid-transition?"
- "How responsive is the product team to your specific feature requests? Can you give an example?"

**On compliance:**
- "Has your platform been part of a FINRA examination? What was the audit trail extraction experience like?"
- "How do you handle the audit log gap between the platform and your CRM?"

**On honest failure modes:**
- "If you could change one thing about this platform tomorrow, what would it be?"
- "What's the workflow where you still fall back to manual processes outside the platform?"

The last two questions are the most diagnostic. References that cannot name a single weakness are either coached or have not operated at scale.

## Red Flags in Vendor Conversations

Three patterns predict vendor underperformance at BD scale:

**Red flag 1: Vendor will not provide more than one reference at comparable volume.** Either they don't have customers at that volume, or the customers they have are not willing to be references.

**Red flag 2: The CSM assignment is "post-contract."** Enterprise vendors assign the CSM during evaluation so the BD can interview them. Vendors that wait until after signature are signaling that CSM assignment is a resourcing question, not a relationship priority.

**Red flag 3: The MSA includes a one-sided termination clause.** Specifically, watch for clauses that allow the vendor to terminate for "any reason with 30 days notice" while requiring the BD to give 90 days notice and pay through end-of-term. Symmetric termination rights are table stakes for enterprise contracts.

## The 30-Day Pilot Structure

The right pilot for BD-scale evaluation is 30 days, three transitions, with explicit pass/fail metrics defined upfront:

| Metric | Pass Threshold |
|--------|----------------|
| Document generation time per transition | < 4 hours from kickoff to first packet ready |
| NIGO rate on first ACATS submission | < 30% |
| Mean time to NIGO remediation | < 48 hours |
| P1 incidents during pilot | 0 |
| CSM response time on any escalation | < 4 hours |
| Audit log completeness vs CRM reconciliation | > 99% match |

If the vendor cannot agree to these metrics in writing, the pilot is not really a pilot — it is a sales demo with billable hours attached.

## FAQ

**What SLA response time should we require for a BD running 30+ transitions per year?**
P1 (critical/outage) response within 4 hours, 24/7, with resolution targeted at 8 hours. P2 within 8 business hours. Anything looser is inadequate for the throughput dependency of high-volume transition operations.

**How many vendor references should we require, and from what kinds of firms?**
Three references minimum, all from BDs running at least 20 transitions per year. Two should be on the platform for 18+ months. One should be from a BD that previously used a different platform and switched, so you can surface comparative pain points.

**What's the liability minimum for an enterprise transition vendor?**
$5M in E&O coverage and $2M in cyber liability is the floor for BD-scale operations representing $1B+ in annual AUM movement. Vendors carrying less should be considered higher-risk and contracts should include vendor-paid indemnification language for the gap.

**Should we expect a free pilot?**
A 30-day structured pilot with pass/fail metrics is standard at enterprise tier. Free is less important than "scoped, measurable, and with a written exit ramp." Pay if you must, but get measurable metrics.

**What's the single biggest red flag in vendor evaluation?**
The vendor will not name the CSM who would own the account before contract signature. This signals CSM assignment is a post-sale resourcing decision rather than a relationship commitment.


**Related:** [Meeting Assistant](/solutions/meeting-assistant) · [Advisor Transitions Platform](/solutions/advisor-transitions) · [For Transition Consultants](/who-we-serve/transition-consultants) · [For Breakaway Advisors](/who-we-serve/breakaway-advisors)

