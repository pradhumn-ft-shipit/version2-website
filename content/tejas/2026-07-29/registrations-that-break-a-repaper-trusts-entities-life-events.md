---
title: "The Registrations That Break a Repaper: Trusts, Entities, and Accounts Frozen by a Life Event"
topic: "Advisor Transitions & Repapering"
description: "ACATS validates on registration and tax ID, not on the client. Trusts, LLCs, partnerships, and accounts touched by a death or divorce are where repapering timelines actually break. Here is the documentation each one needs and how to audit a book before resignation."
author: "FastTrackr AI Team"
image: registrations-that-break-a-repaper-trusts-entities-life-events-hero.png
imageAlt: "The Registrations That Break a Repaper: Trusts, Entities, and Accounts Frozen by a Life Event"
---

ACATS validates on registration name and tax identification number, not on the client relationship behind them. That is why a book of 90 households with 140 accounts can clear the individual and joint accounts in days and then stall for weeks on the trusts, the LLC, and the account belonging to a client who died in March.

Every transition plan has a timeline built on the average account. The repaper actually finishes when the hardest registration in the book finishes, and the hardest registrations are almost never the largest ones. A four million dollar joint account moves in a week. A two hundred thousand dollar irrevocable trust with a successor trustee who has not signed anything since 2011 can take two months.

This is the part of repapering that document automation helps with most and that transition plans budget for least. Here is what each difficult registration type actually requires, why it fails, and how to find all of them before anyone resigns.

## Why registration is the thing that fails

The mental model that causes the problem is thinking of a transfer as moving a client. Operationally, a transfer matches two records: the registration on the delivering account and the registration on the receiving account. If the title or the tax ID does not match exactly, the transfer does not validate.

Custodians handle mismatches with a Letter of Authorization, signed by all parties on the delivering account and showing the account title exactly as it appears on the most recent statement. That sounds minor. In a book move it is not, because every LOA is a client signature event, and client signature events are the slowest step in any transition.

Individual and joint accounts almost never mismatch. Everything else can:

- A trust whose formal name on the statement is abbreviated differently at the new custodian
- An entity account where the delivering firm shows the DBA and the new application shows the legal name
- An IRA where the client's married name was updated at one firm and not the other
- An estate account where the title changed after the transfer was initiated

The failure looks like a reject code. The cause is a records problem that existed before the transition started.

## The registration types, ranked by how much they slow you down

| Registration | Core documents needed | Common failure | Relative difficulty |
|---|---|---|---|
| Individual, joint | Application, ID | Name mismatch after marriage or divorce | Low |
| IRA, Roth, SEP | Application, beneficiary designations | Beneficiaries not carried over, so they silently reset | Low to moderate |
| Revocable living trust | Certification of trust, trustee identification | Trust amended since account opening, current trustee not documented | Moderate |
| Irrevocable trust | Certification of trust, sometimes full trust document, trustee ID | Successor trustee never formally accepted, co-trustee unreachable | High |
| UTMA / UGMA | Application, custodian ID, minor's information | Minor reached majority and nobody re-registered the account | Moderate to high |
| Corporate, LLC, partnership | Formation documents, EIN, authorized signer resolution, beneficial ownership certification | Signer list is out of date, beneficial owners must be re-certified | High |
| Estate | Death certificate, letters testamentary or equivalent, estate EIN | Authority not yet established, so nothing can move at all | Highest |
| Guardianship / conservatorship | Court appointment documents | Court order predates the new custodian's requirements | Highest |

The pattern: difficulty tracks how many third parties must confirm who is authorized to act. An individual account has one. An irrevocable trust with two co-trustees and a corporate trustee has four.

## Trusts: the document that sets your timeline

Trusts are the most common hard registration in a wealth management book and the one where the paperwork gap is widest.

Most custodians accept a certification of trust rather than the full trust instrument. That certification names the trust, its date, the current trustees, their powers, and the tax ID. The problem is that the certification on file at the old firm was often signed when the account was opened, and the trust has changed since. Restatements, amendments, a grantor who died and converted a revocable trust to irrevocable, a trustee who resigned, a successor who started acting without ever executing an acceptance.

None of that stops the account from running at the current firm. All of it stops the account from opening at a new one, because the new custodian is doing fresh diligence on who has authority today.

Four checks per trust account, before resignation:

1. **Is the trust name on the statement the trust's actual legal name, including the date?** "Smith Family Trust" on a statement and "The John A. Smith and Mary B. Smith Revocable Trust dated June 14, 2004" in the document are the same trust and will not match on a form.
2. **Who are the current trustees, and can each of them sign?** Co-trustees who live in different states, an institutional co-trustee, or a trustee with diminished capacity each add weeks.
3. **Has the grantor died?** A revocable trust becomes irrevocable at the grantor's death and typically needs its own tax ID from that point. If the account is still running on the grantor's Social Security number, the registration and the tax ID no longer agree, and that is a reject waiting to happen.
4. **Has the trust been amended or restated since the account opened?** If yes, the certification on file is stale and a new one is needed regardless of anything else.

The fourth check is the one that finds most surprises, and it is answerable only by asking the client. Which means it must happen before drop day, not after.

## Entity accounts and the beneficial ownership reset

Corporate, LLC, and partnership accounts carry a requirement that transition plans routinely miss: opening an account at the new firm is a new account opening for a legal entity customer, which triggers beneficial ownership certification at the receiving firm.

That certification identifies the individuals who own or control the entity. It is not satisfied by whatever was collected at the old firm years ago. Someone at the entity has to complete it again, accurately, and the answer has to match the formation documents and the [entity's EIN](https://www.irs.gov/businesses/small-businesses-self-employed/employer-identification-number) on file.

Add the documents the new custodian will want alongside it: articles of organization or incorporation, the operating agreement or bylaws, and a current resolution naming who is authorized to trade and to move money. Business clients change signers more often than they update their brokerage paperwork, and the resolution on file at the delivering firm is frequently years out of date.

Practical sequencing for entity accounts: start them first among the "hard" registrations, because the client-side work is not a signature, it is a document retrieval project inside a business that has its own priorities. Asking a client's controller for an updated operating agreement in week one is a reasonable request. Asking in week six, when the transfer is already stuck, is an escalation.

## Accounts frozen by a life event

Some accounts cannot move at any speed, because the authority to act on them has not been established yet.

| Situation | What blocks the transfer | What unblocks it |
|---|---|---|
| Account holder died | No activity, including transfer, until legal authority is established and a new account is opened | Death certificate, executor or administrator appointment documents, estate tax ID, new estate or beneficiary account |
| One joint holder died | Registration must change before or as part of the move | Death certificate and re-registration to the surviving holder |
| Client incapacitated | Existing POA may not be accepted by the new custodian | Custodian review of the POA, or a court appointment |
| Divorce in progress | Title and ownership are unsettled | Final decree or settlement, then re-registration |
| Trustee died or resigned | No documented authority to sign | Successor trustee acceptance, updated certification |

FINRA's investor guidance on [what happens when a brokerage account holder dies](https://www.finra.org/investors/insights/when-brokerage-account-holder-dies) is worth reading once by anyone running transitions, because the sequence is counterintuitive. Generally, no activity, including transferring the account to another firm, can happen until legal authority is established and the new account is opened. There is no version of this where a well-run operations team moves faster. The gating item is a probate court, not a custodian.

The right operational response is not urgency. It is triage. Identify these accounts before resignation, set an explicit expectation with the advisor that they will move on a separate and much longer timeline, and stop counting them in the transition's completion percentage. A transition that reports 96 percent complete with a clear, named list of six court-gated accounts is a well-run transition. One that reports 96 percent complete with no explanation is a transition where six clients are quietly unhappy.

## The pre-resignation registration audit

Everything above is knowable from documents the advisor already has. The reason it does not get done is volume: it means reading every statement and every account record in a book and extracting a structured picture of registration, title, tax ID type, authorized parties, and document currency.

That is a pattern-matching job across inconsistent formats, which is exactly what [AI document intelligence](https://fasttrackr.ai/solutions/document-intelligence) is good at. The same extraction that pre-fills account forms produces the registration audit as a by-product, and the mechanics of pulling clean fields out of messy statements are covered in [how AI reads a brokerage statement](https://fasttrackr.ai/blog/ai-reads-brokerage-statement-prefill-account-forms-cut-nigo).

What the audit should output, per account:

- Exact registration title as it appears on the statement, character for character
- Tax ID type: SSN, EIN, or trust ID, and whether it matches the registration type
- Registration category, mapped to the difficulty tiers above
- Named authorized parties and whether each is currently able to sign
- Supporting document status: on file, stale, or missing
- Flag for any life event indicator visible in the record, such as an estate title or a deceased-party notation
- Assigned tier and owner

Then sort the book by difficulty rather than by size, and build the client outreach calendar from that sort. Most transitions do the opposite, front-loading the largest households, which are usually also the easiest to move.

That registration data is the same spine your client records depend on afterward, which is why it is worth capturing in a structured form rather than a spreadsheet that gets abandoned. The downstream side of that is covered in [the CRM side of an advisor transition](https://fasttrackr.ai/blog/crm-side-advisor-transition-client-data-wire-into-repapering).

## Staffing the hard tier

One more thing that separates transitions that finish from transitions that linger. The difficult registrations should not be distributed evenly across the operations team.

Trusts, entities, and life-event accounts each require judgment about documentation sufficiency, and that judgment improves fast with repetition. A team of four each handling a mixed queue of easy and hard accounts produces four people who are mediocre at trusts. The same team with one person owning every trust and entity account in the book produces one person who is genuinely fast at it by the third week, plus three people clearing the simple queue at high volume.

The corollary applies to firms running several moves at once: the hard-registration specialist is a shared resource across transitions, not a per-transition role. Consultants who run multiple books simultaneously tend to figure this out early, which is one reason the workflow designed for [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) separates the exception queue from the bulk queue by default. The broader system for running this end to end sits in the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions), and a [worked transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows the compressed timeline in practice.

The timing rules that govern the rest of the transfer, including validation windows and residual credit obligations, are set out in [FINRA Rule 11870](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870). Worth noting that none of those clocks start on an account whose registration cannot be established. The rule governs the transfer. It does not govern the eighteen days you spend finding out who the current trustee is.

Find that out first.

## Frequently asked questions

**Why do trust accounts reject during an advisor transition?**

Usually because the certification of trust on file is stale or the registration and tax ID no longer agree. Trusts get amended, restated, and converted from revocable to irrevocable when a grantor dies, and trustees resign or die without the paperwork being updated. The account keeps running at the current firm because nobody re-examines it, but the receiving custodian performs fresh diligence on who has authority today, and that is where the gap surfaces.

**What documents does a new custodian need for an LLC or corporate account?**

Expect formation documents such as articles of organization or incorporation, the operating agreement or bylaws, the entity's EIN, a current resolution naming authorized signers, and a fresh beneficial ownership certification. The beneficial ownership step is the one most often missed, because opening the account at the new firm is a new account opening for a legal entity customer and the certification collected years ago at the old firm does not carry over.

**Can you transfer an account after the client has died?**

Not until legal authority is established and an appropriate new account is opened. That generally means a death certificate, documents appointing the executor or administrator, and in most cases a tax ID for the estate. The pace is set by the probate process, not by the custodians, so these accounts should be identified early and tracked on a separate timeline rather than counted against the transition's completion percentage.

**What causes a title mismatch reject, and how do you fix it?**

The registration on the delivering account and the receiving account must match. Mismatches come from abbreviated trust names, entity DBAs versus legal names, name changes after marriage or divorce, and re-registrations that happened mid-transfer. The fix is a Letter of Authorization showing the title exactly as it appears on the most recent statement, signed by all parties on the delivering account, which means another client signature event and more elapsed time.

**When should the registration audit happen?**

Before resignation, without exception. Two of its most valuable findings, stale trust certifications and out-of-date entity signer resolutions, require client action that takes weeks and cannot be compressed once the transition clock is running. Every input to the audit comes from statements and account records the advisor already has, so there is no reason it cannot be completed during planning rather than discovered during execution.

