---
title: "Wet-Signature Holdout Forms: Which Custodian Documents Still Refuse E-Sign and How AI Routes Around Them"
topic: "Advisor Transitions & Repapering"
description: "Most transition paperwork can be e-signed, but a stubborn minority still needs wet ink or a Medallion Signature Guarantee, and those forms sit on the critical path. Here is which documents refuse e-sign, why they take days, and how AI classifies and sequences them so they never b"
author: "FastTrackr AI Team"
image: wet-signature-holdout-forms-which-custodian-documents-still-refuse-e-sign-and-how-ai-routes-around-them-hero.png
imageAlt: "Wet-Signature Holdout Forms: Which Custodian Documents Still Refuse E-Sign and How AI Routes Around Them"
---

Most transition paperwork can be e-signed under the E-SIGN Act, but a stubborn minority still demands wet ink or a Medallion Signature Guarantee, and those forms sit squarely on the critical path because they take days to physically execute. AI cannot sign them, but it can classify every document in a packet by its signature requirement, detect the triggers that force a Medallion, and sequence those items first so they never become the delay. A human still signs and guarantees.

A book transfer runs at the speed of its slowest signature. When ninety percent of the packet clears through an e-signature platform in minutes and the remaining ten percent needs a client to visit a bank branch for a Medallion stamp, the transition does not run ten percent slower, it waits on that branch visit. The forms that refuse e-sign are a minority by count and a majority of the calendar drag, and most transition plans discover them one at a time, late, when a custodian bounces a digitally signed document that had to be wet-signed. This is the field-level breakdown of which documents still hold out against e-signature, why each one does, and the specific points where an AI-native repapering workflow routes around them before they stall the book.

## Why e-sign is the default now, but not universal

Electronic signatures have been legally valid for account paperwork for more than two decades. The federal E-SIGN Act and the state-level Uniform Electronic Transactions Act together make an e-signature enforceable for most financial documents, and custodians have built the Transfer Initiation Form, new-account applications, and advisory agreements around e-signature platforms because it compresses days into minutes. For the bulk of a transition packet, e-sign is not just allowed, it is the expected path.

The gap is that legal validity is not the same as custodian acceptance, and two categories fall outside the default. First, some documents are carved out or treated cautiously because they carry heightened fraud or authority risk, and the receiving firm or the transfer agent imposes a stricter standard than the law's floor. Second, the requirement often comes not from the brokerage but from a transfer agent, an insurance carrier, or a retirement plan administrator sitting behind the account, each with its own rules the custodian cannot override. FINRA's guidance on [customer account transfers](https://www.finra.org/rules-guidance/key-topics/customer-account-transfers) governs how the positions move, but the signature standard on a specific supporting form is set by whoever bears the authority-verification risk on that document, and that party is frequently not the custodian running the ACATS transfer. That is why the same client can e-sign twelve forms and be told the thirteenth needs a stamp.

## The Medallion Signature Guarantee: the long pole in the transition

The single most disruptive holdout is the Medallion Signature Guarantee, because it cannot be produced remotely and increasingly cannot be produced at all without effort. A Medallion is not a notarization. As [Vanguard's explanation of the Medallion Signature Guarantee](https://investor.vanguard.com/investor-resources-education/faqs/what-is-a-medallion-signature-guarantee-and-do-i-need-one-for-my-transfer) sets out, it is a stamp from a financial institution participating in a Medallion program that guarantees both the signer's identity and their legal authority to transfer the securities, and a notary public is explicitly not an acceptable substitute. The guaranteeing institution takes on liability for the transfer, which is why it will only stamp for existing customers and why a growing share of bank branches have stopped offering the service or offer it only under narrow conditions.

The scenarios that commonly trigger a Medallion in a book move are specific: physical stock or bond certificates that have to be assigned and re-registered, decedent and estate transfers where an executor is moving securities, certain re-registrations that change the name of record, transfer-on-death and beneficiary changes at some transfer agents, and large or unusual transfers where the receiving firm wants the extra protection. Each of these turns a same-day e-signature into a multi-day errand: the client has to locate an institution that still offers the Medallion, be an eligible customer there, appear in person, and sign in front of the guarantor. Miss a field and the redo is not a re-send, it is another branch visit. On a concurrent book move, a handful of estate and certificate accounts scattered across the households can quietly set the completion date for the whole transition, which is exactly the kind of hidden dependency behind [the transition timeline killers that add weeks](https://fasttrackr.ai/blog/transition-timeline-killers-five-delays-that-add-weeks-where-ai-removes-each).

## The wet-signature holdouts beyond the Medallion

Not every ink requirement rises to a Medallion. A second tier of documents accepts a plain wet signature, sometimes with a notary, but rejects e-sign, and these are easy to miss because they look like ordinary forms.

- **Spousal consent and ERISA plan documents.** Where a retirement plan requires a spouse's waiver of survivor benefits, the plan administrator frequently mandates a wet, notarized signature, and the requirement comes from the plan, not the custodian.
- **Certain retirement rollover and distribution forms.** Some IRA custodians and plan providers still require ink on specific distribution or transfer authorizations, particularly for older plan types.
- **Trust and entity re-registration documents.** Some receiving custodians accept e-sign on a Certificate of Trust and some require a wet, notarized version, and this varies by firm, which ties directly into why [trust, estate, and entity accounts go NIGO more than any other registration](https://fasttrackr.ai/blog/trust-estate-and-entity-accounts-the-registrations-that-always-go-nigo-in-a-transition-and-where-ai-catches-them).
- **Physical certificate assignments.** A stock power or bond assignment executed against a physical certificate is wet-signature and usually Medallion-guaranteed.
- **Large letters of authorization.** Above certain dollar or risk thresholds, some firms require a wet-signed LOA rather than an electronic one.

The through-line is that the requirement is document-specific and party-specific, not client-specific. The same person signs some forms with a mouse and others with a pen and a notary, and knowing which is which before the packet goes out is the whole game. The Kitces walkthrough of the [full breakaway paperwork sequence](https://www.kitces.com/blog/17-steps-breakaway-broker-advisor-transition-services-grier-rubeling-ria-paperwork-checklists-scripts/) shows how many document-dependent steps sit on the critical path, and the signature standard on each one is a gate that either opens in minutes or takes a week.

## Custodian by custodian: the same form, different signature rules

| Scenario | Typical signature standard | Where AI helps |
|---|---|---|
| Standard ACATS Transfer Initiation Form | E-sign accepted at most custodians | Pre-fill and route to the e-sign platform; no bottleneck |
| Physical certificate re-registration | Wet signature plus Medallion Guarantee | Detect the certificate, flag Medallion needed, sequence it on day one |
| Decedent or estate transfer | Wet signature plus Medallion, often plus court documents | Detect the estate trigger from account data, pre-stage the packet, route early |
| Spousal consent on a retirement plan | Wet, notarized signature per plan rules | Flag the plan type that requires it; pre-fill so the notarized form is right once |
| Trust or entity re-registration | Varies: e-sign at some custodians, wet and notarized at others | Apply the receiving custodian's specific rule before building the packet |
| Beneficiary or TOD change at a transfer agent | Frequently Medallion-guaranteed | Identify the transfer agent's standard and warn before submission |

The reason a table is necessary is that Schwab, Fidelity, Pershing, and Altruist do not share one rulebook. A digital-native custodian may accept e-sign on entity documents that a legacy platform still wants wet and notarized, and the transfer agent behind a physical position sets its own standard regardless of which custodian receives the account. Treating e-sign acceptance as uniform is how a book that looked fully digital ends up with three accounts waiting on branch visits.

## Where AI fits, and where a human must sign

AI cannot sign a document or stand in a bank branch, and it should never try to. What it can do is make sure the wet-signature and Medallion items are known, correct, and started first, which is where almost all of the avoidable delay lives.

It classifies every form in the packet by its signature requirement, against the specific receiving custodian's and transfer agent's rules, so the ten percent that needs ink is identified before anything goes out rather than discovered on rejection. It detects the triggers that force a Medallion or a wet signature, an estate registration, a physical certificate, a plan type with a spousal-consent rule, a transfer above a threshold, by reading the incoming account data instead of relying on someone to remember. It pre-fills those forms completely and validates them, because a Medallion-guaranteed or notarized form is the most expensive one to get wrong: a rejected e-sign is a re-send, a rejected Medallion form is a second trip to the branch. That document extraction and field-level validation is the work of [document intelligence](https://fasttrackr.ai/solutions/document-intelligence), applied hardest to the forms that get exactly one clean shot. And it sequences the wet-signature items to the front of the schedule so they are physically executing while the e-signable bulk clears in parallel.

The human keeps every part that carries authority or a pen. The client signs and, where required, obtains the Medallion or the notarization in person. A supervisor or compliance officer reviews the judgment-bearing forms. Nothing about a beneficiary change, an estate transfer, or a spousal waiver gets auto-processed, because those are precisely the documents the wet-signature and Medallion requirements exist to protect. The principle that runs through the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) holds here without exception: AI drafts, validates, and sequences, and professionals sign.

## Sequencing: put the ink on the calendar first

The practical lesson is a scheduling one. Because the wet-signature and Medallion forms have the longest physical lead time and the least tolerance for a redo, they belong at the front of the transition, not wherever they happen to surface. A workflow that identifies them on day one turns a hidden dependency into a managed one: the client makes a single, well-prepared branch visit early, with correctly pre-filled forms, while the rest of the book moves electronically around it.

On a single household this is a matter of attention. Across a concurrent book move, or a consultant running several transitions at once, it is the difference between a predictable completion date and a schedule held hostage by whichever client had a physical certificate nobody flagged. The [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) workflow treats signature classification as a gate before submission, and a worked example of a complex book compressing toward its clean completion date, rather than dragging on the slowest signature, is in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently asked questions

**Can most advisor transition paperwork be e-signed?**

Yes. Under the federal E-SIGN Act and state UETA rules, electronic signatures are legally valid for the large majority of transition documents, and custodians have built the Transfer Initiation Form, new-account applications, and advisory agreements around e-signature platforms. The exceptions are a minority of forms where a transfer agent, insurance carrier, or retirement plan administrator behind the account imposes a stricter standard, or where the document carries heightened authority-verification risk. Those are the wet-signature and Medallion holdouts, and they are the ones worth identifying before the packet goes out.

**What is a Medallion Signature Guarantee and when does a transition need one?**

A Medallion Signature Guarantee is a stamp from a financial institution in a Medallion program that guarantees both the signer's identity and their authority to transfer securities. It is not a notarization, and a notary cannot substitute for it. In a book move it is commonly triggered by physical stock or bond certificates, decedent and estate transfers, certain name-of-record re-registrations, some transfer-on-death and beneficiary changes at transfer agents, and large or unusual transfers. It requires the client to appear in person at an institution where they are an eligible customer, and a growing share of bank branches no longer offer it, which is why it is often the longest lead-time item in a transition.

**Which transition documents still refuse e-signature?**

The recurring holdouts are physical certificate assignments and stock powers, decedent and estate transfer forms, spousal-consent waivers on retirement plans, certain retirement distribution and rollover authorizations, some trust and entity re-registration documents, and letters of authorization above a firm's dollar threshold. Whether a given form accepts e-sign depends on the receiving custodian and the transfer agent or plan administrator behind it, not on the client, so the same person may e-sign most of a packet and be required to wet-sign or Medallion-guarantee a few specific forms. Schwab, Fidelity, Pershing, and Altruist do not apply identical rules.

**Can AI e-sign or obtain a Medallion for a client?**

No, and it should not. A signature and a Medallion Guarantee carry legal authority that has to rest with the client and the guaranteeing institution. What AI does is remove the delay around those human steps: it classifies each form by its signature requirement against the specific custodian's and transfer agent's rules, detects the triggers that force ink, pre-fills and validates those forms so they are correct on the first and only clean attempt, and sequences them to the front of the schedule. The human signs, notarizes, and obtains the Medallion. AI makes sure they only have to do it once, early, with the right form.

**How does multi-custodian support reduce signature delays?**

Because signature standards differ by custodian and transfer agent, a form that e-signs cleanly at one firm can be bounced for wet ink at another. A multi-custodian workflow applies the receiving custodian's and the relevant transfer agent's specific signature rules before it builds each packet, so a document is prepared to the standard it will actually be judged against rather than a generic assumption. On a concurrent book move touching several custodians, that prevents the most common late surprise: a digitally signed form rejected days into the transfer because the party behind that account required ink all along.

