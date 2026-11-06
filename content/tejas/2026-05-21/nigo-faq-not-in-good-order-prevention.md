---
title: "NIGO FAQ: What Is Not In Good Order and How Do You Prevent It?"
topic: "Advisor Transitions & Repapering"
categoryId: advisor-transitions-and-repapering
description: "NIGO — Not In Good Order — is the most expensive two-word phrase in advisor transition operations. This FAQ covers what NIGOs are, why manual processes produce 30-50% rejection rates, the top five causes, and what broker-dealer ops teams can do to prevent them."
image: nigo-faq-not-in-good-order-prevention.jpg
imageAlt: Operations analyst reviewing custodian NIGO rejection notices on a dual-monitor workstation
persona: Transition-heavy broker-dealer operations executives and ops directors
author: FastTrackr AI Team
updated: 2026-11-04
---
NIGO — Not In Good Order — is a custodian or broker-dealer rejection of a submitted account application or document because it's incomplete, incorrect, or fails to meet regulatory or institutional requirements. In advisor transitions, NIGOs are the most expensive two-word phrase in the ops team's vocabulary: each rejection adds 3–7 business days per account, multiplied across a book of 200–500 accounts. Industry data shows that 60% of life insurance and annuity applications are NIGO on first submission, per [Hexure](https://hexure.com/blog/uncategorized/what-are-not-in-good-order-nigo-rates/). In broker-dealer advisor transitions, NIGO rates on manual submissions typically run 30–50%. The questions below address what NIGOs are, why they happen at scale, and specifically how broker-dealer operations teams can prevent them — not just process them faster.

---

## The Basics of NIGOs

**What does NIGO mean in financial services?**

[Docupace defines NIGO](https://www.docupace.com/blog/what-is-nigo-and-what-does-it-mean-for-you/) as a label applied to "account applications or documents that are incomplete, incorrect or fail to meet regulatory or organisational requirements." In practice, a NIGO means the receiving custodian or BD has reviewed a submitted form packet and found at least one problem that prevents processing. The document goes back to the submitting party with a rejection notice specifying the deficiency. The submitter must correct the problem, obtain any required re-signatures from the client, and resubmit — from scratch on the review queue. There is no partial credit: one NIGO field holds the entire account packet.

**How common are NIGOs in advisor transitions?**

Very common — and underreported. [Hexure's data](https://hexure.com/blog/uncategorized/what-are-not-in-good-order-nigo-rates/) shows 60% of life insurance and annuity applications are NIGO on first submission. In broker-dealer advisor transitions specifically, manual processes typically produce NIGO rates of 30–50% of account packets. Operations teams that have been doing this work for years often treat NIGOs as routine — which is exactly the problem. The normalized expectation that a third to half of all submissions will require rework is baked into their timeline planning. [FastTrackr AI](/)'s pre-submission validation achieves a 95% reduction in this rate, bringing NIGO incidence to under 5% of submissions.

**What are the top 5 causes of NIGOs during repapering?**

In advisor transition repapering, the five most common NIGO causes are: (1) missing client signature — often on one of several required forms in a multi-form packet, where one gets missed; (2) outdated or incorrect beneficiary information — [custodians](/who-we-serve/custodians) require current beneficiary designations, and advisor CRMs are often 12–18 months out of date; (3) incomplete account feature elections — options trading authorization, checkwriting, standing authorization letters, or distribution election forms not included; (4) identity verification gaps — missing government-issued ID, mismatch between the signing name and the name on record; and (5) custodian-specific variation — the same account type requires different forms at [Fidelity](https://www.fidelity.com/wealth-services/working-with-fidelity) vs. Schwab vs. [Pershing](https://www.pershing.com), and a form that was correct for one custodian fails at another. The first two causes — signature gaps and beneficiary data — account for the majority of NIGOs in most transitions.

**What's the difference between a NIGO and an outright rejection?**

A NIGO is correctable. The custodian returns the form with a specific deficiency notice, and the ops team can fix the problem and resubmit. Processing resumes once the correction clears. An outright rejection is a hard stop: the account cannot be transferred at all — because the account type isn't supported at the receiving custodian, the client has a regulatory restriction or freeze on the account, or the account is involved in a legal proceeding. NIGOs are an operational problem. Hard rejections are a compliance and advisor relations problem that requires immediate escalation. Both affect timelines, but they're managed completely differently.

---

## The Impact of NIGOs

**How much does a NIGO delay a transition timeline?**

Each NIGO rejection adds a minimum of 3 business days and often 5–7 days per account. The cycle is: rejection notice received (day 1) → ops team reviews and prepares correction (day 1–2) → correction sent to client for re-signature (day 2–4, depending on client responsiveness) → re-submission (day 4–5) → custodian review queue (add 1–2 business days). For a 500-account transition at 30% NIGO rate, that's 150 accounts each adding 5+ days — creating a hidden timeline extension of several weeks on top of the base repapering timeline. At FastTrackr AI's standard of $10,000 in delayed revenue per day saved on a $500M AUM transition, a 10-day NIGO-driven delay represents $100,000 in foregone revenue.

**Can NIGOs be prevented entirely or are they always part of the process?**

The resigned framing — that "[NIGOs are part of the process](https://impactpartner.com/blog/nigos-are-a-part-of-the-process/)" — is what most legacy operations teams accept. It doesn't have to be true. The core insight: most NIGOs happen not because form software is bad, but because the data going into the forms is wrong before any form is populated. An incorrect beneficiary name, a missing signature block, an outdated account feature — these exist in the client data long before the forms are generated. Pre-submission validation that checks data quality, cross-references custodian requirements, and flags problems before the packet is sent to the client eliminates the majority of NIGOs at the source. FastTrackr AI's 95% NIGO reduction isn't theoretical — it's the measurable result of validating data before it populates any form.

---

## Prevention Strategies

**What is pre-submission validation and how does it prevent NIGOs?**

Pre-submission validation is the process of checking every data point in a client account packet against custodian requirements before the packet is generated and sent for signature. This includes: confirming beneficiary data is present and formatted correctly, verifying that all required forms for a given account type at a given custodian are included, cross-checking that account feature elections are complete, and flagging any identity verification gaps. When this happens before the forms are populated — not after — NIGO causes are eliminated rather than caught and reworked. Digital forms that auto-populate from a validated data source and use conditional logic to surface missing required fields are the implementation mechanism. The result: the packet that goes to the client is already custodian-compliant, and the rate of first-submission acceptance jumps from 50–70% to 95%+.

**What role do e-signatures play in reducing NIGOs?**

E-signature platforms address one specific NIGO cause: missing or invalid signatures. Electronic signature systems can enforce required-signature completion before the document is returned — the form can't be submitted without all required signatures in all required locations. This eliminates signature-gap NIGOs, which account for a meaningful portion of total NIGO volume. However, e-signatures don't address data NIGOs: incorrect beneficiary information, missing account feature elections, or custodian-specific form variations will still produce rejections regardless of how the signature was collected. E-signatures are a necessary component of NIGO prevention, but not a complete solution on their own.

**How do custodian-specific requirements create unique NIGO risks?**

Fidelity, Schwab, and Pershing each have their own form libraries, field requirements, and submission standards. The same account type — for example, a joint tenants with right of survivorship account — requires different forms at each custodian, with different fields marked required, different signature placement, and sometimes different documentation for the account owner's identity. An ops team managing a multi-custodian transition must maintain custodian-specific form libraries and routing logic. Using the wrong form version, a form that expired when the custodian updated their requirements, or a form designed for one custodian submitted to another is a guaranteed NIGO. Intelligent form routing — automatically selecting the current, correct form for each custodian based on account type — is the structural solution. Manual form selection at scale is a NIGO factory.

**Which fields does the carrying firm check on an ACATS transfer?**

Under FINRA's [customer account transfer process](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers), the receiving firm enters the transfer instruction, and the carrying firm (the one that holds the account today) must validate it or take exception to it within three business days. In practice, [ACATS](/glossary/acats) rejects come back on a short list of fields. The account number has to match the carrying firm's record exactly, including leading zeros and formatting. The account type or registration has to line up. So do the account title and owner names, and the tax ID. Some assets, such as proprietary funds, can't move through ACATS at all. Many of these errors start as values re-keyed by hand from a statement. Read them straight off the latest statement and match them against the new account forms before anything is sent, and the error never leaves your desk.

**Does pre-submission validation mean software submits transfers on its own?**

No. Validation hands a person a checked packet with the problem fields already flagged. Software can do the field matching across a whole book. A person still confirms ambiguous name variants, owns trust and entity registrations and beneficiary designations, and handles anything a life event has frozen. That person also does the final review before the packet goes to the custodian. The point is to put a correct packet in front of the reviewer.

---

## NIGOs at Scale

**What does a 95% NIGO reduction mean in practice for a BD operations team?**

A 95% NIGO reduction on a 500-account transition at a 30% baseline NIGO rate means: instead of 150 accounts requiring rework cycles, fewer than 8 accounts need correction. The operational math translates directly: the team that was spending two to three weeks on NIGO rework is now spending a day. The ops specialists who were doing re-signature outreach and re-submission processing are now available for client communication and exception handling. At the business level, the transition closes 10–20 days faster — and [Fidelity's research cited in 3xEquity](https://3xequity.com/blog/ripped-from-reddit-repapering-gets-real) shows that 80% of advisors who transitioned actually increased their AUM, which suggests that faster, cleaner transitions drive better client retention. The 95% number isn't just an efficiency metric — it's a revenue protection number.

---

## When a NIGO Comes Back

**What's the fastest way to work a NIGO once it arrives?**

Run every NIGO through the same five steps. First, classify it by root cause, because the cause decides who fixes it. Beneficiary gaps go to client service, form-version problems go to whoever owns the forms, and signature gaps go back through the e-signature workflow. Second, give it one owner and don't pass it around. Third, fix the cause, and correct the source record too (CRM, intake form or spreadsheet) so the same error doesn't turn up on the next account. Fourth, resubmit and tag the resubmission so nobody confuses it with the original. Fifth, close it only after the custodian confirms it was accepted.

**What do you need in hand to fix a NIGO quickly?**

Four things: the custodian's reason or code, the account and form it applies to, the source data that produced the error, and the corrected value. If any of these is missing, the fix stalls. A vague reason code is the usual culprit, because someone has to call the custodian before anyone can correct anything.

**Which NIGOs should be worked first?**

Start with the ones that need the client, since they take longest. Bundle every open issue on the same account or household into one client contact instead of several. After that, work oldest first. Watch for clusters as well. When a field is missing on a few accounts, it is often missing on others that haven't been submitted yet, so check the rest of the book before the next batch goes out.

**Which NIGOs can't be prevented before submission?**

Split your rejects into two groups. Validation can remove the mechanical group: a registration string that doesn't match the carrying firm's record, a transposed tax ID, an account number copied from the wrong page of a statement, a missing signature page, a second transfer fired on an account already in flight. Each of these existed at submission and could have been caught then. The judgment group works differently. An account frozen after a death, a divorce or a legal hold will be rejected however clean the data is. A margin debit has to be settled with the client first. A trust registration that doesn't map cleanly to a new account type needs someone to read the trust. Hand these to a named person early, and don't count them against your validation process.

---

## Measuring and Planning Around NIGOs

**How do you find the fields behind most of your NIGOs?**

Log every reject with five details: the account, the reason the custodian gave, the field that was wrong, where the bad value came from (statement, CRM or manual entry), and the stage where it was caught. Reason codes differ by custodian and are often vague. Sort each one into a small set of field groups as you log it: account number, registration or account type, name and title, tax ID, and non-transferable assets. Once enough rejects are logged, rank the groups. A few of them usually carry most of the volume. Turn each top group into a pre-submission check. Keep the log running across every transition, because a new custodian or a form change can bring an old problem back.

**Which NIGO metrics should an ops team track during a transition?**

Track four, weekly, while transitions are live: NIGO rate by custodian, average time from NIGO receipt to confirmed resubmission, the share of NIGOs by root cause, and the recurrence rate (how often the same cause comes back on later accounts in the same transition). If one cause's share is rising, look at the intake point that feeds it. A high recurrence rate means fixes aren't reaching the source records.

**How do you build the case for preventing NIGOs instead of fixing them faster?**

Use your own numbers rather than a vendor benchmark. You need the accounts in the book, your first-submission NIGO rate, the calendar days a reject adds, the staff time to diagnose and fix one, and the cost to validate an account before it goes out. Prevention is a small cost paid on every account. A fix is a larger cost paid only on rejects, but each one sends the account back through custodian review and often means asking the client to sign again. Faster rework doesn't win that time back. Count the second cost as well: assets at risk while the book sits half-moved, which grows with every week the move runs long. Book mix matters here. Margin accounts, alternatives, trusts with mismatched titles and non-transferable securities reject more often than standard brokerage and retirement accounts, so a per-account average borrowed from another firm won't predict your move.

**How do NIGOs fit into planning a transition timeline?**

NIGO rate is one of four inputs that shape a book's timeline. The others are the account mix, the number of complete packets your team can clear in a day, and how long clients take to sign. Straight-through ACATS accounts move quickly. Trusts, annuities and other non-ACATS assets move on transfer agents' and carriers' clocks, and they usually set the end date. Account mix is mostly fixed. The other three you can change. Validation lowers the NIGO rate. Less re-keying raises daily capacity. Batching forms so each client signs once, rather than several times, cuts signature delays. Plan the move at today's numbers and again at the numbers those changes make realistic, then compare the two.

---

NIGOs aren't a paperwork problem. They're a revenue problem. And unlike most revenue problems in wealth management — where the margin is thin and the variables are external — the NIGO problem is almost entirely internal. It's a data quality problem and a process problem. Fixing the data before it populates any form, routing forms intelligently by custodian and account type, and enforcing completion before submission doesn't require heroic effort from ops teams. It requires the right system. The difference between a transition that closes in 3 weeks and one that drags to 90 days often comes down to how many NIGOs hit the queue in week one.

---

## Frequently Asked Questions

### What does NIGO stand for?
NIGO stands for Not In Good Order. It's the designation custodians and broker-dealers apply to account applications or documents that can't be processed because they're incomplete, incorrect, or don't meet regulatory or institutional requirements. In advisor transitions, a NIGO means a submitted account packet has been rejected and must be corrected and resubmitted before the account can be transferred.

### How common are NIGOs in broker-dealer advisor transitions?
Very common. Industry data from Hexure shows 60% of life insurance and annuity applications are NIGO on first submission. In broker-dealer advisor transitions specifically, manual processes typically produce NIGO rates of 30–50% of account packets. Operations teams that plan around this baseline accept weeks of avoidable rework as a given. Pre-submission validation systems can reduce this rate to under 5%.

### What are the top causes of NIGOs during advisor transitions?
The top five causes are: missing client signature on one of several required forms, outdated or incorrect beneficiary information, incomplete account feature elections (options trading, checkwriting, standing instructions), identity verification gaps (missing government ID or name mismatches), and custodian-specific form variations where the wrong form version was submitted. Missing signatures and beneficiary data errors account for the majority of NIGOs in most transitions.

### How long does a NIGO delay a transition?
Each NIGO rejection typically adds 3–7 business days per account: time to review the rejection, prepare the correction, get client re-signature, and resubmit through the custodian review queue. On a 500-account book at a 30% NIGO rate, that's 150 accounts each adding multiple days — creating a hidden timeline extension of several weeks that compounds the base repapering timeline.

### Can NIGOs be prevented entirely?
The industry assumption is that NIGOs are inevitable. That assumption is wrong. Most NIGOs originate from data problems that exist before any form is generated — incorrect beneficiary information, missing required fields, wrong form versions. Pre-submission validation that checks data quality and custodian requirements before populating forms eliminates the majority of NIGO causes at the source. FastTrackr AI achieves a 95% reduction in NIGO rates through this approach.

### What is pre-submission validation?
Pre-submission validation is the process of checking every data point in a client account packet against custodian requirements before the packet is generated and sent to the client for signature. It verifies that beneficiary data is present and correct, all required forms for the account type and custodian are included, account feature elections are complete, and identity verification requirements are met. When this runs before forms are populated, NIGO causes are eliminated rather than caught post-submission.

### Why do NIGO rates differ across custodians?
Fidelity, Schwab, and Pershing each maintain their own form libraries, required fields, and submission standards. The same account type requires different forms at each custodian — with different required signatures, different identity documentation, and different account feature election formats. An ops team using the wrong form version, an expired form, or a form designed for one custodian and submitted to another will generate a guaranteed NIGO. Intelligent form routing that automatically selects the current, correct form for each custodian and account type eliminates this cause entirely.

### How does a 95% NIGO reduction affect a BD operations team's workflow?
On a 500-account transition at a 30% baseline NIGO rate, a 95% reduction means: instead of 150 accounts requiring rework cycles, fewer than 8 accounts need correction. The team that was spending two to three weeks on NIGO rework spends a day instead. Ops specialists shift from re-signature outreach and re-submission processing to client communication and exception handling — the work that actually requires human judgment. The transition closes 10–20 days faster, capturing significant additional revenue from the advisor's book.

### What's the difference between a NIGO and an account rejection?
A NIGO is a fixable problem: the form has a specific deficiency, the custodian returns it with a rejection notice, the ops team corrects the issue, and the packet is resubmitted. Processing resumes after correction. An outright account rejection is a hard stop — the account cannot be transferred because it's not supported at the receiving custodian, the client has a regulatory restriction, or the account is involved in a legal proceeding. NIGOs are routine (if preventable) operational problems. Hard rejections require immediate escalation to compliance and the advisor.

### What systems prevent NIGOs most effectively?
The most effective NIGO prevention combines three elements: pre-submission data validation (checking accuracy before forms populate), intelligent custodian-specific form routing (ensuring the right current form is used for each custodian and account type), and enforced completion logic (ensuring packets can't be submitted with missing required fields). E-signatures address signature-gap NIGOs specifically. Data validation addresses beneficiary and election NIGOs. Form routing addresses custodian-variation NIGOs. Systems that integrate all three — like FastTrackr AI — produce the lowest first-submission rejection rates.

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does NIGO stand for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NIGO stands for Not In Good Order. It's the designation custodians and broker-dealers apply to account applications or documents that can't be processed because they're incomplete, incorrect, or don't meet regulatory or institutional requirements. In advisor transitions, a NIGO means a submitted account packet has been rejected and must be corrected and resubmitted before the account can be transferred."
      }
    },
    {
      "@type": "Question",
      "name": "How common are NIGOs in broker-dealer advisor transitions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Very common. Industry data from Hexure shows 60% of life insurance and annuity applications are NIGO on first submission. In broker-dealer advisor transitions specifically, manual processes typically produce NIGO rates of 30–50% of account packets. Operations teams that plan around this baseline accept weeks of avoidable rework as a given. Pre-submission validation systems can reduce this rate to under 5%."
      }
    },
    {
      "@type": "Question",
      "name": "What are the top causes of NIGOs during advisor transitions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The top five causes are: missing client signature on one of several required forms, outdated or incorrect beneficiary information, incomplete account feature elections (options trading, checkwriting, standing instructions), identity verification gaps (missing government ID or name mismatches), and custodian-specific form variations where the wrong form version was submitted. Missing signatures and beneficiary data errors account for the majority of NIGOs in most transitions."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a NIGO delay a transition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each NIGO rejection typically adds 3–7 business days per account: time to review the rejection, prepare the correction, get client re-signature, and resubmit through the custodian review queue. On a 500-account book at a 30% NIGO rate, that's 150 accounts each adding multiple days — creating a hidden timeline extension of several weeks that compounds the base repapering timeline."
      }
    },
    {
      "@type": "Question",
      "name": "Can NIGOs be prevented entirely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The industry assumption is that NIGOs are inevitable. That assumption is wrong. Most NIGOs originate from data problems that exist before any form is generated — incorrect beneficiary information, missing required fields, wrong form versions. Pre-submission validation that checks data quality and custodian requirements before populating forms eliminates the majority of NIGO causes at the source. FastTrackr AI achieves a 95% reduction in NIGO rates through this approach."
      }
    },
    {
      "@type": "Question",
      "name": "What is pre-submission validation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pre-submission validation is the process of checking every data point in a client account packet against custodian requirements before the packet is generated and sent to the client for signature. It verifies that beneficiary data is present and correct, all required forms for the account type and custodian are included, account feature elections are complete, and identity verification requirements are met. When this runs before forms are populated, NIGO causes are eliminated rather than caught post-submission."
      }
    },
    {
      "@type": "Question",
      "name": "Why do NIGO rates differ across custodians?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fidelity, Schwab, and Pershing each maintain their own form libraries, required fields, and submission standards. The same account type requires different forms at each custodian — with different required signatures, different identity documentation, and different account feature election formats. An ops team using the wrong form version, an expired form, or a form designed for one custodian and submitted to another will generate a guaranteed NIGO. Intelligent form routing that automatically selects the current, correct form for each custodian and account type eliminates this cause entirely."
      }
    },
    {
      "@type": "Question",
      "name": "How does a 95% NIGO reduction affect a BD operations team's workflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On a 500-account transition at a 30% baseline NIGO rate, a 95% reduction means: instead of 150 accounts requiring rework cycles, fewer than 8 accounts need correction. The team that was spending two to three weeks on NIGO rework spends a day instead. Ops specialists shift from re-signature outreach and re-submission processing to client communication and exception handling — the work that actually requires human judgment. The transition closes 10–20 days faster, capturing significant additional revenue from the advisor's book."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a NIGO and an account rejection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A NIGO is a fixable problem: the form has a specific deficiency, the custodian returns it with a rejection notice, the ops team corrects the issue, and the packet is resubmitted. Processing resumes after correction. An outright account rejection is a hard stop — the account cannot be transferred because it's not supported at the receiving custodian, the client has a regulatory restriction, or the account is involved in a legal proceeding. NIGOs are routine (if preventable) operational problems. Hard rejections require immediate escalation to compliance and the advisor."
      }
    },
    {
      "@type": "Question",
      "name": "What systems prevent NIGOs most effectively?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most effective NIGO prevention combines three elements: pre-submission data validation (checking accuracy before forms populate), intelligent custodian-specific form routing (ensuring the right current form is used for each custodian and account type), and enforced completion logic (ensuring packets can't be submitted with missing required fields). E-signatures address signature-gap NIGOs specifically. Data validation addresses beneficiary and election NIGOs. Form routing addresses custodian-variation NIGOs. Systems that integrate all three — like FastTrackr AI — produce the lowest first-submission rejection rates."
      }
    }
  ]
}
</script>


**Related:** [Meeting Assistant](/solutions/meeting-assistant) · [Advisor Transitions Platform](/solutions/advisor-transitions)

