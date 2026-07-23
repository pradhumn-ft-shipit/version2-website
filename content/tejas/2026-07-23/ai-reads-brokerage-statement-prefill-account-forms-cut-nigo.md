---
title: "How AI Reads a Brokerage Statement to Pre-Fill Account Forms and Cut NIGO"
topic: "Advisor Transitions & Repapering"
description: "The brokerage statement is where most repapering errors begin. Here is how AI document intelligence extracts the right fields, pre-fills forms, and stops NIGO before ACATS submission."
author: "FastTrackr AI Team"
image: ai-reads-brokerage-statement-prefill-account-forms-cut-nigo-hero.png
imageAlt: "How AI Reads a Brokerage Statement to Pre-Fill Account Forms and Cut NIGO"
---

The brokerage statement is the source document for almost every repaper, and it is where most NIGO starts. AI document intelligence reads the statement by layout, not just by characters, so it knows a number in a given position is a cost basis and not a price. It extracts account type, registration, and holdings, then maps them into the receiving form and flags mismatches before submission.

That last step is the whole game. An ACATS reject almost never comes from a missing signature alone. It comes from a field on the transfer form that does not match what the delivering firm has on file, and the statement is where you find out what they have on file. Get the extraction right and you remove the largest single source of rebooks. Get it wrong, or do it by hand, and you rekey the same error into a form that gets rejected three days later.

## Why the brokerage statement is the hardest document in the repaper

A monthly statement looks simple to a human and is genuinely hard for software. Every custodian uses its own proprietary template, its own table layouts, and its own terminology for the same concept. Schwab, Fidelity, and Pershing each present positions, tax lots, and account registration differently, and each revises those templates without notice. A single household can arrive as four statements from four firms, plus a phone photo of a held-away 401(k) and a scanned IRA statement with a handwritten note in the margin.

The data you actually need is [scattered across the document and buried in footnotes](https://www.docuclipper.com/blog/how-to-read-a-brokerage-statement/):

- Account registration and title, exactly as the delivering firm holds it
- Account type: individual, joint, IRA, Roth, trust, UTMA, entity
- Full account number, often split across a header and a continuation page
- Positions: symbol or CUSIP, share count, market value
- Tax lots and cost basis, frequently in a separate section with its own footnotes
- Restricted or non-transferable assets: proprietary funds, limited partnerships, annuities

Miss any one of these, or transcribe it slightly wrong, and the receiving form goes out with a defect. Entering positions, cost basis, and registration by hand across dozens of accounts makes data-entry errors inevitable, and every error is a future reject.

## OCR is not document intelligence

This is the distinction that decides whether extraction actually helps. Plain optical character recognition converts pixels into characters. It reads the text but does not understand it. Hand a raw OCR engine a Pershing statement and it returns a wall of numbers with no idea which number is a cost basis, which is a market value, and which is a footnote reference.

Layout-aware document intelligence understands structure. It knows that a figure in a specific position, on a specific custodian's template, in a specific column, is the cost basis for the lot on that row. Because it reads by structure rather than by fixed coordinates, it absorbs template revisions without someone re-engineering a parser for every new statement version. It [handles native PDFs, scans, and phone photos](https://www.investipal.co/blog/how-to-extract-and-analyze-data-from-brokerage-statements-using-ai-a-practical-guide-for-advisors), and it can read handwritten annotations that break a coordinate-based parser instantly.

The practical difference: OCR gives you text you still have to interpret and rekey. Document intelligence gives you structured fields, labeled and ready to map. FastTrackr's [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) is built for exactly this class of financial document, where the layout carries as much meaning as the numbers.

## The fields AI extracts, and what each one protects against

The value of extraction is not that it saves typing. It is that each extracted field maps to a specific reject category you would otherwise discover after submission. Here is how the two connect.

| Field extracted from the statement | Where it goes on the receiving form | The reject it prevents |
| --- | --- | --- |
| Account registration and title | Account owner name fields | Name or title mismatch |
| Account type (IRA vs. brokerage vs. trust) | Account type selection | Account type mismatch |
| Full account number | Delivering account number | Account number mismatch or transposition |
| Delivering firm and DTC number | Contra firm identification | Wrong or missing contra firm |
| Positions and share counts | Full vs. partial transfer instructions | Partial-transfer quantity errors |
| Restricted or proprietary assets | Non-transferable asset handling | Rejects on assets that cannot move in kind |

The top three rows matter most. Across large books, ACATS rejects cluster heavily into name mismatches, account type mismatches (the classic IRA versus individual brokerage error), and account number mismatches. Those three are precisely the fields a statement carries verbatim, which is why extracting them accurately from the source document, rather than retyping them from memory or a CRM, removes the bulk of preventable NIGO. A pre-validation pass that compares the extracted registration against the receiving form catches the defect while you can still fix it, not after the delivering firm has already rejected it. If you want the full taxonomy of what those rejects mean, our breakdown of [ACATS reject codes and how pre-validation stops them](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation) goes code by code.

## From extracted data to a pre-validated form

Extraction is step one. The workflow that actually compresses a repaper runs four steps, in order.

1. Ingest every statement for the household: native PDF, scan, or photo, across all delivering firms.
2. Extract the labeled fields above into structured records, one per account.
3. Map those records onto the receiving custodian's specific form, since the same data lands in different fields at Schwab versus Fidelity versus Pershing.
4. Validate before submission: compare the extracted registration, type, and number against the form, and flag every mismatch for a human to clear.

Step three is where firms that only connected their custodians still lose time. Extracting once but rekeying the data into three different custodial systems reintroduces the exact errors extraction was supposed to remove. The point is that the data flows once, from statement to validated form, without a human retyping it in between. That single-flow principle is the same one behind clean [custodian integration across Schwab, Fidelity, and Pershing](https://fasttrackr.ai/blog/custodian-integration-schwab-fidelity-pershing-repapering), and it is what turns extraction from a party trick into a timeline lever.

## Where AI extraction still needs a human

Honesty about the limits is what keeps this compliant. AI extraction does not eliminate review, and treating it as fully autonomous is both an operational and a regulatory mistake.

Cost basis is the clearest example. Basis transfers intact through ACATS, so the IRS still recognizes the original purchase price and date, but the number on the statement is not always the number the delivering firm will send, and covered versus non-covered lots need verification. Extraction gets you a fast, accurate first pass. It does not replace the reconciliation a human does when basis looks off.

Restricted assets need judgment too. Proprietary funds, certain annuities, and limited partnerships cannot always move in kind, and deciding whether to liquidate, leave behind, or re-register is not a document-extraction question. It is a suitability and client-conversation question.

There is also a supervision dimension you cannot ignore. The 2026 SEC examination priorities treat firms' use of AI and automated technologies in operations as a supervised activity, an emerging area of exam focus. In practice that means the output of an extraction model belongs inside your review and books-and-records process, not outside it. A person signs off, the validation trail is retained, and the model is one input to a supervised workflow. This is the same principle we lay out in [where AI actually helps in an advisor transition and where it does not](https://fasttrackr.ai/blog/where-ai-helps-advisor-transition-workflow-breakdown): the win is a faster, cleaner first pass under human supervision, not a hands-off pipeline.

## What clean extraction does to the timeline

Manual statement handling is slow twice: once to read and rekey the statement, and again to rework every NIGO it produces. Industry estimates put the manual cost of a single NIGO rework at several hours per account, and firms running acquired-book transitions report saving dozens to low hundreds of hours per deal by extracting from statements instead of retyping them. The mechanism is not magic. It is removing rekeying and moving error detection to before submission instead of after.

The compounding effect shows up at volume. On a solo breakaway with 200 accounts, shaving rework off each account is meaningful. On a tuck-in or a recruiting pipeline with a thousand accounts across multiple advisors, the difference between a clean first submission and a 20 percent reject rate is the difference between a 30-day repaper and a 90-day one, and the AUM at risk climbs with every extra day clients sit in limbo. Consultants who run this at scale, and the teams inside firms who own the ops, see it fastest, which is why FastTrackr's [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) puts extraction and pre-validation at the front of the workflow, and why [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) use the same engine across every book they move. The measured outcome of that approach shows up in our [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

Get the statement read correctly and the rest of the repaper gets easier. Get it wrong and you are debugging rejects for a month. That is why the least glamorous step, reading the source document, is the one worth automating first.

## Frequently asked questions

**What is the difference between OCR and AI document intelligence for brokerage statements?**
OCR converts an image into characters but does not understand them. AI document intelligence is layout-aware: it recognizes that a value in a specific position on a specific custodian's template is a cost basis, an account number, or a share count, and returns labeled, structured fields. Because it reads by structure, it handles new statement versions, scans, and phone photos without a re-engineered parser for each format.

**Which statement fields cause the most ACATS rejects in a repaper?**
Three categories dominate: account registration or name mismatches, account type mismatches (most often an IRA coded as an individual brokerage account or vice versa), and account number errors. All three appear verbatim on the brokerage statement, so extracting them from the source document and validating them against the receiving form before submission removes the largest, most preventable share of NIGO.

**Can AI fully automate account form completion for a transition?**
No, and any vendor claiming it can is overselling. AI extraction produces a fast, accurate first pass and flags mismatches, but cost basis reconciliation, restricted-asset decisions, and final sign-off require a person. The 2026 SEC exam priorities treat AI in operations as a supervised activity, so extraction output must sit inside your review and recordkeeping process, not replace it.

**Does cost basis transfer automatically during an ACATS move?**
Cost basis generally transfers intact through ACATS, so the IRS continues to recognize the original purchase price and acquisition date. That said, the figure on the delivering statement is not always the exact figure the firm transmits, and covered versus non-covered lots need verification. Use extraction for speed, then reconcile basis by hand before you rely on it.

**How much time does statement extraction actually save on a transition?**
The saving comes from two places: not rekeying positions and registration by hand, and not reworking the NIGO that manual entry causes. With single-NIGO rework running several hours per account, firms report saving dozens to low hundreds of hours on larger acquired-book transitions. The bigger gain is timeline: a clean first submission avoids the reject-and-resubmit cycle that stretches repapers past 90 days.

