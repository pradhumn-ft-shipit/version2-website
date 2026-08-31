---
title: "The Transfer Initiation Form Field by Field: What a TIF Must Match for ACATS to Accept a Book"
topic: "Advisor Transitions & Repapering"
description: "ACATS validates the Transfer Initiation Form against the delivering firm's records field by field, and one mismatch rejects the account. Here is what each TIF field must match, the reject code it triggers when it does not, and exactly where AI validation stops the error before su"
author: "FastTrackr AI Team"
image: the-transfer-initiation-form-field-by-field-what-a-tif-must-match-for-acats-to-accept-a-book-hero.png
imageAlt: "The Transfer Initiation Form Field by Field: What a TIF Must Match for ACATS to Accept a Book"
---

ACATS validates the Transfer Initiation Form against the delivering firm's records field by field, and a single mismatch rejects the whole account. The fields that most often break a transfer are the account title, the tax ID, the account number, and the registration type, because each must match the old firm's records exactly, not merely be correct in the abstract. Get all four right before submission and most rejects disappear.

A repaper lives or dies on one document. The Transfer Initiation Form is what the receiving firm submits to start an ACATS transfer, and the entire automated transfer system does one thing with it first: it compares what you typed against what the delivering firm has on file. Not against reality, against their record. If your TIF says the account is titled "Robert Smith" and the old firm carries "Robert A. Smith," the machine does not reason about whether they are the same person. It rejects.

That is why NIGO, not in good order, is a data-matching problem before it is anything else, and why it is the single most preventable cause of a slow book move. Every reject-resubmit round adds days, and at volume those days compound. Here is the TIF walked field by field: what each one must match, the reject it triggers when it does not, and precisely where AI pre-fill and validation catch the mismatch before the form ever reaches the custodian, and where a human still has to decide.

## What the TIF is and how ACATS judges it

The Transfer Initiation Form is the instruction that opens an ACATS transfer. The client authorizes the receiving firm to pull the account, the receiving firm enters the key data from the TIF, name, tax ID, and account number among them, and submits it into the [ACATS process governed by FINRA's customer account transfer rules](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers). From there the clock is short and unforgiving: under [FINRA Rule 11870](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870), the delivering firm must validate or reject the transfer within one business day and, once validated, complete delivery within about three business days.

The critical thing to understand is what "validate" means. The delivering firm's system matches the TIF data against its own books and records. It is checking whether the account you described exists on their side exactly as you described it. This is why accuracy against the old firm's records, not accuracy in the abstract, is the standard, and why the accuracy of those underlying records matters so much that [FINRA Rule 4511](https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511) makes books-and-records accuracy a regulatory obligation in the first place. Your TIF is being graded against their file, and a one-character disagreement is a failing grade.

## The four fields that cause most rejects

ACATS rejects cluster into a small set of predictable reasons, and a handful of TIF fields cause most of them. Walk them in order of how often they break a book.

**Account title and registration.** The account name on the TIF must match the delivering firm's title exactly. A missing middle initial, a maiden name the old firm never updated, a "Jr." that appears on one side and not the other, a joint account listing owners in a different order, any of these triggers a title mismatch, one of the most common reject reasons. This field causes disproportionate trouble because the "right" answer is whatever the old firm has on file, which may itself be stale or inconsistent, so the correct value is not always the current legal name.

**Taxpayer identification number.** The SSN or EIN on the TIF must match the delivering firm's record for the account. A transposed digit, or the wrong owner's SSN on a joint or entity account, produces a tax-ID mismatch reject. This is a pure data-entry error the vast majority of the time, and pure data-entry errors are exactly what a machine prevents most reliably.

**Account number.** The account number must be the delivering firm's master account number, entered without transposition. Using a sub-account or a display number instead of the master, or transposing two digits, bounces the request immediately. Long account numbers hand-keyed from a statement are a frequent source of this error.

**Account type and registration match.** ACATS requires the registration types to correspond. Trying to move an individual account into a joint account, a taxable account into an IRA, or mismatching the retirement account subtype will reject, because the transfer system will not silently convert one registration into another. This one is not always a typo; sometimes it reflects a real decision the team got wrong about how the receiving account should be opened.

## The TIF field-by-field reject-and-prevent table

Put the fields against their reject reasons and the prevention path, and the whole validation problem becomes a checklist.

| TIF field | What it must match | Reject reason if it does not | AI-preventable before submission? |
|---|---|---|---|
| Account title / registration name | Delivering firm's exact title, including initials and suffixes | Title mismatch | Mostly; flag name variants, human confirms the true legal name |
| Taxpayer ID (SSN/EIN) | Delivering firm's tax ID for the account owner | Tax-ID mismatch | Yes; a direct data comparison |
| Account number | Delivering firm's master account number, no transposition | Invalid or wrong account number | Yes; extract and validate against the statement |
| Account type / registration | Corresponding registration type on both sides | Account-type mismatch | Partly; flag the mismatch, human decides the correct target account |
| Positions / transferable assets | Account holds ACATS-eligible, transferable assets | Flat account or non-transferable assets | Partly; flag non-transferable holdings, human plans their separate path |
| Custodian and DTC number | Correct delivering firm identifiers | Wrong or unmatched firm | Yes; validated from reference data |

The pattern in the right-hand column is the whole point. The fields that reject most often, title, tax ID, account number, are precisely the ones a machine validates most reliably, because they are data comparisons. The fields that need a human, the target account type and the plan for non-transferable assets, are judgment calls, not typos. That split is what tells you where to point automation and where to keep a person.

## Where AI stops the error before submission

Because most TIF rejects are data-matching failures, the highest-leverage moment to catch them is before the form is ever submitted, and that is exactly what AI pre-fill and pre-submission validation do.

Pre-fill removes the transcription error at its source. Instead of a specialist hand-keying a name, tax ID, and 12-digit account number off a PDF statement, AI [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) reads the delivering firm's statement and populates the TIF fields directly from it, so the value on the form is the value on the record it will be matched against. The single largest cause of tax-ID and account-number rejects, a human mistyping, disappears when a human is not typing.

Pre-submission validation catches the mismatches that survive. Before the TIF goes out, the system compares each field against the extracted source and flags disagreements: a title that does not match the statement, an account type that will not correspond, a holding that will not ride ACATS. FastTrackr reports a roughly 95 percent reduction in NIGO on the accounts it processes from this pre-validation, a vendor result rather than an industry figure, but the mechanism is straightforward: catch the reject at the desk, where fixing it costs minutes, instead of at the custodian, where it costs a rejected transfer and a multi-day resubmit. The field-level approach to finding which data points cause most of your rejects is detailed in [NIGO root-cause analysis](https://fasttrackr.ai/blog/nigo-root-cause-analysis-finding-the-repaper-fields-that-cause-most-of-your-acats-rejects), and how pre-validation eliminates each reject category is in [ACATS reject codes decoded](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation).

Two things stay human, and saying so is what keeps the automation trustworthy. First, the true legal name behind a title variant is a judgment call: when the statement shows "Bob Smith" and the client is "Robert A. Smith," a person confirms which the delivering firm actually carries, because guessing wrong just moves the reject. Second, the target account type and the handling of non-transferable assets are decisions with tax and Reg BI consequences, and those are never auto-submitted. AI drafts, professionals review. The mechanics of how extraction turns a statement into pre-filled forms, and where the human review sits, are covered in [how AI reads a brokerage statement to pre-fill account forms and cut NIGO](https://fasttrackr.ai/blog/ai-reads-brokerage-statement-prefill-account-forms-cut-nigo).

## The fields that are not typos

Not every reject is a data error, and treating them all as typos is its own mistake. Two categories need a decision, not a correction.

The flat-account and non-transferable-asset reject means the account holds nothing ACATS can move, either because it is empty or because its holdings are proprietary funds, annuities, or other assets that route outside ACATS. The fix is not to re-key the TIF; it is to recognize that these assets need their own transfer path and to plan it separately, or the account will keep rejecting no matter how clean the form.

The account-type mismatch sometimes reflects a genuine question about how the receiving account should be structured. Moving a brokerage account whose owner also wants an advisory relationship, or an account touched by a life event, may require a different target registration than a naive one-to-one copy. That is an operations and compliance decision, made by a person, before the TIF is finalized.

Both categories are why validation and human judgment work together rather than one replacing the other. Automation clears the mechanical majority fast and flags the judgment cases, so the specialist's time goes to the decisions that actually need it.

## How to operationalize clean TIFs at scale

One careful specialist can produce clean TIFs by hand. A desk moving many books cannot rely on care alone, because care does not scale and the reject rate climbs with volume. The answer is to make field-level validation a gated step every TIF passes before submission, not a habit.

That means pre-filling from the source document rather than transcribing, running an automated field-match check before the TIF goes out, and routing only the flagged judgment cases, name variants, target account types, non-transferable assets, to a human. Running that gate across a whole book is what a purpose-built [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is for, and it is why the [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who keep reject rates low at volume are not simply more careful; they have made the match a system step that a form cannot skip. The same discipline produced the outcome in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition), where cutting rejects protected the timeline and the AUM.

The TIF is a small form with an outsized effect on how a book moves. ACATS grades it against the delivering firm's record, field by field, and one disagreement rejects the account and costs days. Pre-fill the fields from the source so the values match by construction, validate every field before submission, and reserve human judgment for the handful of decisions, the legal name, the target registration, the non-transferable assets, that are not typos at all. Do that and the reject-resubmit loop that quietly lengthens most repapers stops being the thing that sets your timeline.

## Frequently asked questions

**What is a Transfer Initiation Form in an ACATS transfer?** It is the form the receiving firm submits to start an account transfer through ACATS. The client authorizes the receiving firm to pull the account, and the firm enters the key data, account title, taxpayer ID, account number, and registration type, from the TIF into the ACATS system. The delivering firm then validates that data against its own books and records within one business day under FINRA Rule 11870. The TIF is essentially a claim about an account that the old firm either confirms or rejects, so its accuracy against the old firm's record is what determines whether the transfer proceeds.

**Why do TIFs get rejected as NIGO so often?** Because ACATS matches the TIF field by field against the delivering firm's records, and one disagreement rejects the account. The most common breakpoints are an account title that does not match exactly, a transposed or wrong taxpayer ID, a mistyped or non-master account number, and a registration type that does not correspond between the two firms. Most of these are transcription errors from hand-keying data off a statement, which is why they are highly preventable. The reject is judged against the old firm's record, not against reality, so a value can be correct in the abstract and still reject if it disagrees with their file.

**Which TIF errors can AI prevent, and which need a human?** AI reliably prevents the data-matching errors: taxpayer-ID mismatches, account-number transpositions, and wrong custodian identifiers, because those are direct comparisons against the source statement. It also flags title variants and registration mismatches for review. What needs a human is the judgment behind those flags: confirming the true legal name the delivering firm actually carries, deciding the correct target account type when a one-to-one copy is not right, and planning a separate path for non-transferable assets. AI drafts and validates; a named person decides the judgment cases and signs off before submission.

**What is a flat-account reject and how do I fix it?** A flat-account reject means the account holds no assets ACATS can transfer, either because it is empty or because its holdings, such as proprietary funds, annuities, or certain alternatives, route outside the ACATS system. Re-keying the TIF will not fix it, because the form is not the problem. The fix is to recognize that those assets need their own transfer mechanism, carrier paperwork for an annuity, a transfer-agent step for restricted stock, a separate process for held-away plans, and to plan that path separately rather than resubmitting the same ACATS request that will keep rejecting.

**How do I keep TIF reject rates low when moving many accounts at once?** Make field-level validation a gated step every TIF must pass before submission, rather than relying on individual care, which does not scale as volume rises. Pre-fill each field from the source statement instead of transcribing it, run an automated match check that compares every field against that source before the form goes out, and route only the flagged judgment cases to a person. This keeps the reject-causing data errors from ever reaching the custodian while still putting human review on the decisions, legal name, target registration, and non-transferable assets, that genuinely require it.

