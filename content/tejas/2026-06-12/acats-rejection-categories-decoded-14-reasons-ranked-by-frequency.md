---
title: "ACATS Rejection Categories Decoded: The 14 Reasons Custodians Send Your Packet Back, Ranked by Frequency"
topic: "Advisor Transitions & Repapering"
categoryId: advisor-transitions-and-repapering
description: "Three rejection categories account for 71% of ACATS rebooks. The other 11 split the remaining 29%. Here is the ranked breakdown, the specific data points to validate before submission, and the order to fix them in if you want the biggest NIGO reduction per hour of work."
image: acats-rejection-categories-decoded-14-reasons-ranked-by-frequency.jpg
imageAlt: "Pareto chart of 14 ACATS rejection categories ranked by frequency, with three categories making up 71% of total rebooks."
persona: Operations specialists and transition consultants who run ACATS packets and want to know which rejections to prevent first
author: FastTrackr AI Team
---
# ACATS Rejection Categories Decoded: The 14 Reasons Custodians Send Your Packet Back, Ranked by Frequency

Every transition team has its own folklore about which ACATS rejections matter. The senior ops specialist will tell you it is title mismatches. The new hire will say it is signatures. The compliance lead will say it is restricted assets. They are all partially right, and they are all working from a sample size of whatever they happened to see last quarter.

The actual distribution is not folklore. ACATS runs on the NSCC's Automated Customer Account Transfer Service — a real, public, rule-governed system operated by the National Securities Clearing Corporation. Every reject coming back through that system carries a reason code, and when you aggregate enough of them across a large book, the distribution stabilizes. Three categories account for roughly 71% of rebooks. The other 11 categories split the remaining 29%.

That distribution matters because it tells you where to spend the next hour of pre-submission validation work. Fixing a category that causes 4% of your NIGOs is fine. Fixing one that causes 28% is transformative. This is the ranked breakdown, the specific data points to validate before submission, and the order to fix them in if you want the biggest NIGO reduction per hour of work.

## Why ranking rejections by frequency changes how you build the validation stack

Most transition operations teams build their pre-submission checklist alphabetically, by form section, or by whichever rejection burned them most recently. None of those orderings reflect risk. They reflect convenience or recency bias.

A frequency-ranked checklist is different. It assumes that pre-submission attention is finite, that catching one common rejection prevents more rework than catching one rare one, and that the validation logic should be ordered to maximize NIGO reduction per minute of analyst time. When the top three rejection categories cause 71% of rebooks, eliminating those three categories alone takes a packet from an industry-average ~25% first-pass NIGO rate down to under 8%.

That is also where AI shifts the math. [FastTrackr](/)'s clients see a 95% NIGO reduction not because the AI catches exotic rejection patterns — it catches the common ones, every time, before submission. The exotic patterns are still important. They are just not where the volume lives.

Below is the ranked table. Then we walk through each category, what triggers it at the custodian, and the specific data points the validation layer has to hold accountable before the packet leaves your queue.

## The full ranking: 14 ACATS rejection categories

| Rank | Category | Share of rebooks | Root cause | Fix priority |
|------|----------|------------------|------------|--------------|
| 1 | Account title / registration mismatch | 28% | Receiving packet shows a title that differs from the delivering custodian's exact registration of record | P0 — fix first |
| 2 | Social Security Number / TIN mismatch | 24% | SSN or TIN on the TIF does not match what the delivering firm has on file | P0 — fix first |
| 3 | Signature defects | 19% | Missing signature, wrong signer for the registration type, or signature mismatch with custodial record | P0 — fix first |
| 4 | Account number invalid or closed | 6% | Account at delivering firm is closed, restricted, or transcribed incorrectly | P1 |
| 5 | Asset eligibility / non-transferable position | 5% | Position cannot be moved in-kind (proprietary fund, restricted security, fractional share rules) | P1 |
| 6 | Date of birth mismatch | 4% | DOB on TIF does not match delivering firm's record | P1 |
| 7 | Address mismatch | 3% | Address of record at delivering firm differs from what is in the TIF | P2 |
| 8 | Spousal / joint owner consent missing | 3% | Joint, JTWROS, or community-property registration requires a second signature that was not collected | P2 |
| 9 | Authorized agent / POA documentation missing | 2% | POA, trustee, or custodian-of-minor authority required but not attached | P2 |
| 10 | Margin / option agreement not in place | 1.5% | Receiving firm has not opened the matching agreement for the position type being transferred | P3 |
| 11 | Cost basis transfer election errors | 1% | Elections (covered/non-covered handling, FIFO/specific lot) inconsistent or missing | P3 |
| 12 | Mutual fund networking / dealer-of-record errors | 1% | Fund networking level or dealer code not aligned for in-kind mutual fund transfer | P3 |
| 13 | Restricted, legended, or control-stock handling | 0.8% | 144 restricted, legended, or control positions need affidavits, opinions, or special routing | P4 |
| 14 | Duplicate or already-in-transit account | 0.7% | TIF submitted while a prior transfer is open, or against an account already moved | P4 |
| Total | | 100% | | |

The top three categories — title mismatch, SSN/TIN mismatch, and signature defects — add to 71%. That is where every minute of pre-submission validation produces the highest return.

## The top 3: where 71% of your rebooks come from

### Account title and registration mismatch (28%)

Title and registration mismatches are the single largest source of ACATS rebooks. They happen because the delivering custodian's registration of record is treated as the authoritative string, and any deviation — punctuation, suffix ordering, trust name format, middle initial vs. middle name — causes the receiving custodian's submission to fail validation at NSCC or at the delivering firm's match step.

The fix is not "type carefully." The fix is to lift the registration verbatim from a recent statement or account summary from the delivering firm and use that string, character for character, on the TIF. Trust accounts are especially exposed: "John Smith Revocable Trust dated 1/1/2010" and "John Smith Rev. Trust U/A 1-1-2010" are the same trust to a human and two different registrations to ACATS.

Validation logic has to compare the TIF registration against an extracted, normalized version of the delivering firm's registration of record. Trust dates, suffixes (Jr., Sr., III), "and" vs. "&," and trustee naming format are the specific data points to hold accountable. This is also where [document intelligence](/solutions/document-intelligence) earns its place — extracting the registration of record from a statement PDF and matching it against the TIF is exactly the kind of pre-submission check that pays for itself within the first batch. See our piece on [document intelligence replacing data entry in broker-dealer back office](https://fasttrackr.ai/blog/document-intelligence-replacing-data-entry-broker-dealer-back-office) for the full pattern.

### Social Security Number and TIN mismatch (24%)

SSN/TIN mismatches are the second-largest source of rebooks and the most embarrassing. They get rejected not because the operations team did anything wrong, but because the SSN on the receiving paperwork does not exactly match what the delivering firm has on file — typically a transcription error, a digit transposition, or an account opened under a Tax ID that has since changed.

Joint accounts surface this most often. The primary SSN may match. The secondary SSN may have been recorded incorrectly years ago and never noticed. Trust accounts also fail here when the EIN on the TIF does not match the EIN the delivering firm has — often because the trust was re-papered with a new EIN that the delivering firm never updated.

The validation logic has to do two things. First, normalize the SSN/TIN format (dashes, spaces, leading zeros). Second, compare against either the delivering firm's record (when available via a statement or recent tax form) or against the client-supplied source of truth. A pre-submission system that flags a TIN entered without verification against any document is catching most of this category before it leaves the queue.

### Signature defects (19%)

Signature rejects are the third-largest category and the most varied. They include missing signatures, signatures on the wrong line, signatures collected from someone who is not the registered owner, signatures on a form that the custodian no longer accepts, and signatures that do not match the delivering firm's record on file.

The most common version is a joint account where only the primary signed. The second-most-common is a trust where the form was signed in personal capacity ("John Smith") instead of trustee capacity ("John Smith, Trustee"). The third is a form submitted with a digital signature image that the receiving or delivering custodian's policy does not accept for that form type.

Validation logic has to confirm three things before the packet leaves: every required signer for the registration type has actually signed, the signature capacity (trustee, POA, custodian) is captured in the signature block, and the form version and signature method match the destination custodian's current policy. This is the category where the AI-led pre-flight check has the largest day-one impact, because the rules are deterministic and the rejection cost is high.

## The middle band: rejections 4 through 9

Categories 4 through 9 are where the data-quality work lives. Each one is rarer than any of the top three, but together they represent roughly 23% of all rebooks. They are also the categories that most teams under-validate, because they look "obvious" in isolation and are easy to miss in volume.

**Account number invalid or closed (6%)** is a transcription category. The account number was copied incorrectly from a statement, or it belongs to an account the client closed and reopened without telling the new advisor. Validation should require the account number to be sourced from a recent statement attachment, not from a memory or a client email. For closed-account cases, the client and the delivering firm have to confirm the current open account before the TIF goes in.

**Asset eligibility (5%)** covers positions that cannot be moved in-kind: proprietary mutual funds, certain alternative investments, restricted shares, and fractional positions under custodian-specific rules. The validation step is a pre-submission asset list review against the receiving custodian's accepted-securities list. Anything not on the list either needs to be liquidated, transferred via DTC, or excluded from the in-kind portion of the transfer. This is also where prediction models help — predicting which positions will trigger eligibility rejects from the asset profile alone is a use case we walk through in [predicting NIGO before form submission with AI models](https://fasttrackr.ai/blog/predicting-nigo-before-form-submission-ai-models).

**Date of birth mismatch (4%)** is a clean transcription category. The fix is to verify DOB against either an ID document on file or against the most recent statement showing date-of-birth verification at the delivering firm. The validation logic flags any DOB entered without a confirming source.

**Address mismatch (3%)** is a softer category but still rejects packets. The delivering firm's address of record is the comparison string. Validation logic compares the TIF address against the most recent statement's address block and flags any divergence — including suite numbers, zip+4 formatting, and apartment numbers that may have been truncated.

**Spousal or joint owner consent missing (3%)** is a registration-type rule. JTWROS, tenants in common, and community-property registrations require both owners to sign. Validation logic reads the registration type from the TIF and confirms that the number of signatures equals the number of registered owners.

**Authorized agent / POA documentation (2%)** covers POA, trustee, and custodian-of-minor authorizations. The validation step is to confirm that the TIF reflects the correct signing capacity AND that the supporting document (POA, trust certification, UGMA designation) is attached and current. Stale or unsigned trust certifications fail at the delivering firm's compliance step.

## The long tail: rejections 10 through 14

The long tail is the 5% of rejections that consume disproportionate operations time when they occur, because each one is rare enough that the ops team has to re-derive the fix every time.

**Margin and option agreements (1.5%)** fail when the receiving firm has not yet opened the matching agreement for a position that requires one. If the delivering firm holds a margin account with open option positions, the receiving firm must have an executed margin agreement AND option approval at the corresponding tier before the in-kind transfer can complete. The validation logic flags any TIF carrying margin or options positions where the receiving firm has not confirmed the agreement is in place.

**Cost basis transfer elections (1%)** are not rejections per se — they are elections that, when missing or inconsistent, cause the cost-basis side of the transfer to fail and trigger a rebook of the basis transfer specifically. Covered/non-covered handling and lot-method elections have to match what the client and advisor have agreed to. Validation should require an explicit election for both fields on the cost basis transfer document.

**Mutual fund networking errors (1%)** are a back-office-specific category. For in-kind mutual fund transfers, the dealer-of-record code, the networking level (Level 1 through Level 4), and the rep code have to align between the delivering firm and the receiving firm. Validation logic for this category lives in the mutual fund operations layer rather than the TIF layer, but it has to be triggered when the position list includes mutual funds held in networked accounts.

**Restricted, legended, or control stock (0.8%)** is the most procedurally complex category in the long tail. Rule 144 restricted positions, legended shares, and Section 16 control positions each have their own affidavit, opinion-letter, or special-routing requirements. Validation logic has to flag any position with a CUSIP that appears on a restricted-securities list and route it to the special-handling queue before the TIF goes in.

**Duplicate or already-in-transit (0.7%)** is the rarest and the most preventable. It happens when a TIF is submitted against an account that already has an open transfer, or against an account that was previously moved and is now closed at the delivering firm. The validation logic is a status check against the delivering firm's account before submission — either via the custodian's pre-check tools or by requiring a recent statement that confirms the account is still open and active.

## What "fix priority" actually means

The fix priority column in the table is not a wishlist. It reflects the order in which to build or upgrade your pre-submission validation stack to maximize NIGO reduction per hour of build work.

**P0 categories (1–3, 71% of rebooks)** are where the first build pass goes. These three categories have well-defined data points, the source of truth is usually a recent statement from the delivering firm, and the validation logic is deterministic. A pre-submission check that catches title mismatches, TIN mismatches, and signature defects is the highest-ROI build any transition operations team can ship.

**P1 categories (4–6, 15% of rebooks)** are the second build pass. They are mostly data-quality categories that benefit from document intelligence — pulling account numbers, asset lists, and DOB from statements rather than relying on transcription.

**P2 categories (7–9, 8% of rebooks)** require structural logic — registration-type-aware signature counting, address normalization, and authorization-document checking. These are higher to build but lower to maintain once they are running.

**P3 and P4 categories (10–14, 5% of rebooks)** are the long tail. They are worth automating only once the P0–P2 stack is solid. Building them first is a classic operations anti-pattern — high engineering effort, low population coverage.

A team that ships P0 validation first and then layers P1 and P2 over the following quarter is the team that delivers the FastTrackr-pattern outcomes: 95% NIGO reduction, 75% faster end-to-end transitions, and 90-day repapering processes collapsed into roughly three weeks. Once ACATS clears clean on the first pass, the rest of the relational work — the post-transition client retention covered in our [first 90 days after ACATS completion client retention playbook](https://fasttrackr.ai/blog/first-90-days-after-acats-completion-client-retention-playbook) — gets to start on schedule rather than two weeks late.

## The validation stack, summarized in one paragraph

Build a pre-submission system that does three things, in this order. First, lift the registration of record, the TIN, and the required signers from the delivering firm's most recent statement or system-of-record document, and compare each against the TIF. Second, run the data-quality checks against statement-extracted account numbers, asset lists, DOB, and address. Third, layer in the registration-type-aware structural checks for signature count, authorization documents, agreements, and special-handling positions. Do that in order, and the rebook rate falls from industry-average ~25% to under 5%. Do it with the AI doing the document-extraction, normalization, and comparison work, and analyst time per packet falls by an order of magnitude. The volume becomes the design constraint, not the bottleneck.

## The packet that does not come back

The packet that does not come back is not the packet that was checked carefully at the end. It is the packet that was assembled against a validation stack ordered by what actually rejects packets. The three categories at the top of the list — title, TIN, and signature — are not exotic. They are well-known, well-documented, and entirely preventable. They cause 71% of the rebooks anyway because most teams check them in the wrong order, with the wrong source of truth, at the wrong stage of the workflow.

Ranking the rejections changes that. So does treating ACATS not as a paperwork submission but as a structured data problem the delivering custodian will accept or reject based on rules that are knowable in advance. Build the validation stack against those rules. Ship it in priority order. Let the AI do the matching. The packet stops coming back. The transition timeline collapses. The client never sees the rebook that did not happen — which is exactly what the well-run transition looks like from the outside.

## Frequently asked questions

**What are the top three categories of ACATS rejections by frequency?**

The top three categories — account title or registration mismatch, SSN or TIN mismatch, and signature defects — together account for roughly 71% of ACATS rebooks. Title and registration mismatch alone is the largest single category at about 28%. Building pre-submission validation against these three categories first is the highest-ROI improvement most transition operations teams can ship, because the underlying data points are deterministic and source-of-truth documents are usually available.

**Why do account title mismatches cause so many ACATS rebooks?**

ACATS treats the delivering custodian's registration of record as the authoritative string. Any deviation — punctuation, suffix ordering, trust name format, middle initial versus middle name — causes the match step to fail. Trust accounts and joint registrations are especially exposed because they include dates, capacities, and multiple parties whose exact phrasing must be preserved character for character on the transfer initiation form.

**How can operations teams prevent SSN and TIN mismatches before submission?**

The validation stack has to normalize the SSN or TIN format and compare against a source-of-truth document — most often the delivering firm's most recent statement or a tax form. Joint accounts and trust accounts are the highest-risk subset because the secondary SSN or the trust EIN is the data point most likely to have been entered incorrectly years ago and never reconciled. A pre-submission check that refuses any TIN entered without a confirming document catches the majority of this category.

**What is the fix-priority order for building an ACATS validation stack?**

Start with P0 — title, TIN, and signatures — because those three categories cause 71% of rebooks. Move to P1 next: account number accuracy, asset eligibility, and date-of-birth verification. Then layer in P2 structural checks for address, joint-owner consent, and authorized agent documentation. Leave P3 and P4 long-tail categories like margin agreements, cost basis elections, mutual fund networking, restricted stock, and duplicate transfers for the final build pass once the high-volume categories are clean.

**How does AI reduce ACATS NIGOs in practice?**

AI replaces transcription with document extraction and replaces ad-hoc analyst checks with deterministic, source-of-truth comparisons. FastTrackr-pattern implementations see a 95% NIGO reduction because the system catches every common rejection category before submission, every time, rather than catching most of them most of the time. The result is a first-pass acceptance rate that takes end-to-end transitions from 90 days to roughly three weeks — a 75% timeline reduction.

**Does the long tail of ACATS rejections matter if it is only 5% of volume?**

It matters operationally but not strategically. The long tail — restricted stock handling, mutual fund networking, duplicate transfers, and similar edge cases — consumes disproportionate analyst time per occurrence because each one is rare enough that the team re-derives the fix every time. Automating the long tail is worth doing once the top three categories are solved, but doing it first is a classic operations anti-pattern: high build effort, low population coverage, and minimal impact on the overall first-pass rate.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the top three categories of ACATS rejections by frequency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The top three categories — account title or registration mismatch, SSN or TIN mismatch, and signature defects — together account for roughly 71% of ACATS rebooks. Title and registration mismatch alone is the largest single category at about 28%. Building pre-submission validation against these three categories first is the highest-ROI improvement most transition operations teams can ship, because the underlying data points are deterministic and source-of-truth documents are usually available."
      }
    },
    {
      "@type": "Question",
      "name": "Why do account title mismatches cause so many ACATS rebooks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ACATS treats the delivering custodian's registration of record as the authoritative string. Any deviation — punctuation, suffix ordering, trust name format, middle initial versus middle name — causes the match step to fail. Trust accounts and joint registrations are especially exposed because they include dates, capacities, and multiple parties whose exact phrasing must be preserved character for character on the transfer initiation form."
      }
    },
    {
      "@type": "Question",
      "name": "How can operations teams prevent SSN and TIN mismatches before submission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The validation stack has to normalize the SSN or TIN format and compare against a source-of-truth document — most often the delivering firm's most recent statement or a tax form. Joint accounts and trust accounts are the highest-risk subset because the secondary SSN or the trust EIN is the data point most likely to have been entered incorrectly years ago and never reconciled. A pre-submission check that refuses any TIN entered without a confirming document catches the majority of this category."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fix-priority order for building an ACATS validation stack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with P0 — title, TIN, and signatures — because those three categories cause 71% of rebooks. Move to P1 next: account number accuracy, asset eligibility, and date-of-birth verification. Then layer in P2 structural checks for address, joint-owner consent, and authorized agent documentation. Leave P3 and P4 long-tail categories like margin agreements, cost basis elections, mutual fund networking, restricted stock, and duplicate transfers for the final build pass once the high-volume categories are clean."
      }
    },
    {
      "@type": "Question",
      "name": "How does AI reduce ACATS NIGOs in practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI replaces transcription with document extraction and replaces ad-hoc analyst checks with deterministic, source-of-truth comparisons. FastTrackr-pattern implementations see a 95% NIGO reduction because the system catches every common rejection category before submission, every time, rather than catching most of them most of the time. The result is a first-pass acceptance rate that takes end-to-end transitions from 90 days to roughly three weeks — a 75% timeline reduction."
      }
    },
    {
      "@type": "Question",
      "name": "Does the long tail of ACATS rejections matter if it is only 5% of volume?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It matters operationally but not strategically. The long tail — restricted stock handling, mutual fund networking, duplicate transfers, and similar edge cases — consumes disproportionate analyst time per occurrence because each one is rare enough that the team re-derives the fix every time. Automating the long tail is worth doing once the top three categories are solved, but doing it first is a classic operations anti-pattern: high build effort, low population coverage, and minimal impact on the overall first-pass rate."
      }
    }
  ]
}
```


**Related:** [Meeting Assistant](/solutions/meeting-assistant) · [Advisor Transitions Platform](/solutions/advisor-transitions)

