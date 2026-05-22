---
title: "ACATS vs. Non-ACATS: Custodial Transfer Requirements for Advisor Transitions"
topic: "Advisor Transitions & Repapering"
categoryId: advisor-transitions-and-repapering
description: When account transfers can ride the ACATS rails and when they cannot — and what the non-ACATS workflow actually requires from advisor operations teams.
image: acats-vs-non-acats-custodial-transfer-requirements.jpg
imageAlt: Diagram contrasting the ACATS automated transfer flow with a manual non-ACATS workflow
persona: Transition Operations Lead
author: FastTrackr AI Team
---
ACATS (Automated Customer Account Transfer Service) handles the transfer of eligible securities between DTCC member firms electronically, with a regulatory maximum of 6 business days from form entry. Non-ACATS transfers cover assets that are ineligible for the automated system — including annuities, direct-registered securities, mutual funds held at fund companies, and alternative investments — and typically require manual custodian coordination that can take several weeks or months. In an advisor transition context, the ACATS/non-ACATS split in a client's book determines staffing requirements, timeline projections, and NIGO risk. A book with 40% non-ACATS assets requires fundamentally different operational planning than one that is 95% ACATS-eligible.

---

## What ACATS Covers and Why It Matters for Operations Teams

ACATS is the backbone of advisor transitions. Operated by the DTCC (Depository Trust & Clearing Corporation), it processes the electronic transfer of stocks, bonds, ETFs, options, and most mutual funds between participating firms. When a client's account is eligible for ACATS, the process is structured, trackable, and bound by regulatory timelines.

According to [SEC guidance on account transfers](https://www.sec.gov/about/reports-publications/investorpubsacctxferhtm), ACATS transfers must complete within 6 business days from submission. That regulatory ceiling gives operations teams a concrete planning anchor. If an account is submitted Monday, it should be settled by the following Tuesday — full stop.

The practical value of this predictability is significant at scale. An operations team repapering 500 accounts with 80% ACATS eligibility can calculate timelines with confidence for 400 of those accounts. The uncertainty is concentrated in the remaining 20% — and that's where planning attention should focus.

ACATS also provides automatic rejection handling. If a custodian cannot accept the transfer as submitted (wrong account number, account freeze, contested assets), it rejects the transfer with a specific reason code. That rejection is visible in the ACATS system, allowing the operations team to respond to the specific issue rather than guessing what went wrong.

---

## Non-ACATS Assets: The Source of Most Transition Complexity

Non-ACATS assets are the operations team's hard problem. These are assets that exist outside the DTCC's electronic transfer infrastructure — either because the asset type is ineligible, the holding institution is not an ACATS participant, or the account structure requires manual handling.

The most common non-ACATS assets in advisor transition books include:

**Annuities** — variable and fixed annuities are held at insurance carriers, not at [custodians](/who-we-serve/custodians). Transferring them requires completion of carrier-specific forms, surrender charge evaluation, and direct coordination with the insurance company's transfer team. Timelines are entirely controlled by the carrier and can range from 2 weeks to 3 months.

**Direct-registered securities** — securities held directly at a transfer agent (like Computershare) rather than at a broker-dealer must be transferred through the transfer agent's own process, which varies by company.

**Mutual funds held at fund companies** — some mutual fund positions are held directly at the fund company rather than through a custodian. These require a different form and process than standard ACATS fund transfers.

**Alternative investments** — private equity, hedge funds, and other limited partnership interests are almost never ACATS-eligible. Transfers require LP agreement review and GP consent in many cases.

**529 plans** — state-administered education savings accounts require state-specific transfer procedures that operate entirely outside ACATS.

As noted by [SEC investor guidance](https://www.sec.gov/about/reports-publications/investorpubsacctxferhtm), non-ACATS transfers can take multiple weeks or months — with no regulatory timeline ceiling. For operations teams, this is the open-ended variable that most frequently breaks transition projections.

---

## How the ACATS/Non-ACATS Split Affects Your Repapering Timeline

The operational impact of non-ACATS assets is not linear with their proportion in a book. A book that is 10% non-ACATS by account value can create disproportionate complexity if those non-ACATS assets are concentrated in specific clients whose total relationship depends on resolution.

Consider a transition of 200 client accounts. If 30 of those clients hold annuities, those 30 clients will experience a materially different transition timeline than the other 170. The ACATS accounts complete in under 2 weeks. The annuity clients may wait 6–8 weeks for their annuity portion to transfer — even if their other assets have long since settled.

That split creates a client communication challenge. The advisor can say "your brokerage accounts are settled" while simultaneously managing uncertainty about the annuity. Without clear tracking, the annuity delay can look like a transition failure rather than a known product-type constraint.

For operations teams planning a large transition, the correct approach is to:

1. **Identify all non-ACATS assets at discovery** — before forms are submitted, identify every asset type that will require a non-ACATS process
2. **Segment accounts by transfer complexity** — create separate tracking queues for ACATS and non-ACATS assets
3. **Start non-ACATS processes first** — initiate carrier/transfer agent coordination before ACATS submission, since non-ACATS processes will take longer regardless
4. **Set explicit client expectations by asset class** — don't give one timeline that covers both ACATS and non-ACATS

[FastTrackr](/)'s platform automatically maps account eligibility at the data collection stage, routing ACATS-eligible assets through automated workflows and flagging non-ACATS assets for specialist handling before any form is submitted. This prevents the most common error in large transitions: discovering that 20% of a book requires manual carrier coordination only after the ACATS accounts have already settled.

---

## Custodian-Specific Considerations for Mixed Portfolios

One of the underappreciated complexities in ACATS/non-ACATS management is that custodian requirements vary. [Fidelity](https://www.fidelity.com/wealth-services/working-with-fidelity), Schwab, and [Pershing](https://www.pershing.com) each have different procedures for handling the ACATS component — and different relationships with the insurance carriers and transfer agents that handle non-ACATS assets.

When a client has accounts at multiple custodians being consolidated into a single new RIA relationship, the operations team is managing ACATS transfers from multiple delivering custodians simultaneously — each with their own rejection codes, acceptance timelines, and re-submission requirements.

The parallel processing problem is where most ops teams hit capacity limits. Each ACATS submission is straightforward. Managing 50 simultaneous submissions across 3 custodians, while separately coordinating non-ACATS transfers with 8 insurance carriers, requires a data layer that most teams don't have. The industry standard is spreadsheets — which fail silently when a carrier transfer gets stuck waiting for a missing form.

---

## Frequently Asked Questions

### What is the difference between ACATS and non-ACATS transfers?

ACATS (Automated Customer Account Transfer Service) is the electronic system operated by the DTCC that moves eligible securities between member broker-dealers. It is regulated with a maximum 6-business-day completion window. Non-ACATS transfers cover assets that are ineligible for ACATS — including annuities, direct-registered securities, certain mutual funds, and alternative investments — and are processed through manual, carrier-specific, or transfer-agent-specific procedures with no regulated timeline ceiling.

### Which types of assets can be transferred via ACATS?

ACATS handles most standard brokerage assets: stocks, bonds, ETFs, options, and mutual funds held in a brokerage account at a participating custodian. Assets that cannot be transferred via ACATS include annuities (which are held at insurance carriers), direct-registered securities, mutual funds held directly at fund companies, 529 education accounts, and most alternative investments like private equity or hedge funds.

### How long does an ACATS transfer take vs. a non-ACATS transfer?

ACATS transfers are regulated to complete within 6 business days from form submission. Non-ACATS transfers have no regulatory timeline — annuity transfers typically take 2–8 weeks; direct-registered security transfers vary by transfer agent; alternative investments can take months depending on GP consent requirements.

### What are the most common non-ACATS assets in advisor transition books?

The most frequent non-ACATS assets in transition books are variable and fixed annuities, direct participation programs and limited partnerships, securities held directly at transfer agents like Computershare, mutual funds with proprietary share classes, and 529 education savings accounts. Books with affluent clients tend to have higher concentrations of annuities and alternatives, making non-ACATS planning a priority for high-AUM transitions.

### What happens when a client's portfolio has both ACATS and non-ACATS assets?

The ACATS-eligible portion moves on the regulated 6-day timeline while non-ACATS assets move on their own separate timeline. The client's account may appear "partially transferred" for an extended period. Operations teams should communicate this split explicitly to clients — setting separate timeline expectations for each asset class — and track ACATS and non-ACATS assets in separate queues rather than aggregating them into a single status.

### How do custodians handle rejected ACATS transfers?

When a custodian cannot accept an ACATS transfer, it rejects it with a specific reason code through the DTCC system. Common rejection reasons include account number errors, account freezes, beneficiary mismatches, and restricted securities. The delivering firm has a defined window to cure the rejection and resubmit. Having a tracking system that captures rejection codes and automatically triggers correction workflows is essential for large transitions — manual rejection management at scale is where most NIGO accumulation happens.

### What's the operational impact of a large percentage of non-ACATS assets?

A book with significant non-ACATS exposure requires dedicated staffing for carrier and transfer agent coordination, extended timeline projections, separate client communication strategies by asset class, and manual tracking infrastructure that doesn't come standard with most forms software. Operations teams frequently underestimate non-ACATS complexity because the volume of ACATS accounts is higher — but the per-account labor for non-ACATS assets is 5–10x greater.

### How does the ACATS/non-ACATS split affect repapering timelines?

The ACATS portion of a book sets a best-case timeline: 6 business days per submission batch. The non-ACATS portion creates the tail — the last accounts to settle are almost always non-ACATS. Transitions that budget 3 weeks based on ACATS timelines frequently extend to 6–8 weeks because of non-ACATS tail management. Accurate timeline projections require identifying non-ACATS assets at discovery and building their estimated processing times into the project plan from day one.

---

## Building the Right Operational Framework

The ACATS/non-ACATS distinction is one of the most important variables in advisor transition planning — and one of the least discussed in generic transition guides. Understanding it changes how you staff transitions, how you communicate timelines to clients, and how you architect the technology that supports the process.

The fundamental mistake most operations teams make is treating all accounts as equivalent units. They're not. An ACATS-eligible brokerage account and an annuity account with a carrier known for slow transfer processing are not the same workload. Treating them as the same leads to timeline misses, client surprises, and the kind of chaotic final weeks that define poorly managed transitions.

Build your workflow to distinguish between asset classes from the moment discovery data comes in. Process non-ACATS assets first, in parallel with ACATS preparation. Track them separately. Communicate their timelines separately. That's the difference between a transition that closes cleanly and one that drags for months — waiting on one annuity carrier.

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between ACATS and non-ACATS transfers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ACATS (Automated Customer Account Transfer Service) is the electronic system operated by the DTCC that moves eligible securities between member broker-dealers, with a maximum 6-business-day completion window. Non-ACATS transfers cover assets ineligible for ACATS — including annuities, direct-registered securities, certain mutual funds, and alternative investments — processed through manual carrier-specific or transfer-agent-specific procedures with no regulated timeline ceiling."
      }
    },
    {
      "@type": "Question",
      "name": "Which types of assets can be transferred via ACATS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ACATS handles most standard brokerage assets: stocks, bonds, ETFs, options, and mutual funds held in a brokerage account at a participating custodian. Assets that cannot be transferred via ACATS include annuities held at insurance carriers, direct-registered securities, mutual funds held directly at fund companies, 529 education accounts, and most alternative investments like private equity or hedge funds."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an ACATS transfer take vs. a non-ACATS transfer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ACATS transfers are regulated to complete within 6 business days from form submission. Non-ACATS transfers have no regulatory timeline. Annuity transfers typically take 2 to 8 weeks. Direct-registered security transfers vary by transfer agent. Alternative investments can take months depending on general partner consent requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What are the most common non-ACATS assets in advisor transition books?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most frequent non-ACATS assets in transition books are variable and fixed annuities, direct participation programs and limited partnerships, securities held directly at transfer agents like Computershare, mutual funds with proprietary share classes, and 529 education savings accounts. Books with affluent clients tend to have higher concentrations of annuities and alternatives."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when a client's portfolio has both ACATS and non-ACATS assets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ACATS-eligible portion moves on the regulated 6-day timeline while non-ACATS assets move on their own separate timeline. The client's account may appear partially transferred for an extended period. Operations teams should communicate this split explicitly to clients, setting separate timeline expectations for each asset class and tracking ACATS and non-ACATS assets in separate queues."
      }
    },
    {
      "@type": "Question",
      "name": "How do custodians handle rejected ACATS transfers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a custodian cannot accept an ACATS transfer, it rejects it with a specific reason code through the DTCC system. Common rejection reasons include account number errors, account freezes, beneficiary mismatches, and restricted securities. The delivering firm has a defined window to cure the rejection and resubmit. Having a tracking system that captures rejection codes and triggers correction workflows is essential for large transitions."
      }
    },
    {
      "@type": "Question",
      "name": "How does the ACATS/non-ACATS split affect repapering timelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ACATS portion of a book sets a best-case timeline of 6 business days per submission batch. The non-ACATS portion creates the tail — the last accounts to settle are almost always non-ACATS. Transitions that budget 3 weeks based on ACATS timelines frequently extend to 6 to 8 weeks because of non-ACATS tail management. Accurate projections require identifying non-ACATS assets at discovery and building their estimated processing times into the project plan from day one."
      }
    },
    {
      "@type": "Question",
      "name": "What's the operational impact of a large percentage of non-ACATS assets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A book with significant non-ACATS exposure requires dedicated staffing for carrier and transfer agent coordination, extended timeline projections, separate client communication strategies by asset class, and manual tracking infrastructure. Operations teams frequently underestimate non-ACATS complexity because the volume of ACATS accounts is higher, but the per-account labor for non-ACATS assets is 5 to 10 times greater."
      }
    }
  ]
}
</script>


**Related:** [Meeting Assistant](/solutions/meeting-assistant) · [Advisor Transitions Platform](/solutions/advisor-transitions)

