---
title: "The E-Signature Stack for a Repaper: What Custodians Accept and Where NIGO Hides"
topic: "Advisor Transitions & Repapering"
description: "Electronic signature moves most repaper paperwork faster, but a handful of forms still demand wet ink or a medallion guarantee, and e-sign introduces its own NIGO modes. Here is which transition documents accept e-signature, which do not, and where the not-in-good-order errors ac"
author: "FastTrackr AI Team"
image: the-e-signature-stack-for-a-repaper-what-custodians-accept-and-where-nigo-hides-hero.png
imageAlt: "The E-Signature Stack for a Repaper: What Custodians Accept and Where NIGO Hides"
---

Electronic signature clears most of a repaper's paperwork faster than wet ink and cuts the missing-signature errors that cause not-in-good-order rejections. But a few transition documents still require wet ink or a medallion guarantee, and e-signature brings its own NIGO modes. Knowing which form takes which signature before you send it keeps the packet clean.

Every transition team has learned that e-signature is faster. What fewer teams have mapped is the boundary: the specific forms in a book move that will not accept an electronic signature, and the new failure modes that appear once you go digital. Treat e-sign as a blanket solution and you trade a pile of missing-ink NIGOs for a subtler pile of wrong-signer, expired-envelope, and unsupported-form NIGOs. The goal is not to digitize everything. It is to build a signature stack that routes each document to the method it actually requires.

## Why e-signature is the right default

The legal foundation is settled. Electronic signatures carry the same legal weight as wet ink under the federal ESIGN Act and state Uniform Electronic Transactions Act adoptions, which is why custodians and broker-dealers built e-signature into account opening years ago. For the bulk of a repaper packet, new account applications, advisory agreements, ACATS transfer initiation forms, and disclosures, a compliant e-signature workflow is faster, more auditable, and less error-prone than paper.

The NIGO math is the reason it matters in a transition. A paper packet fails not-in-good-order for mundane reasons: a missing initial on page four, a signature in the wrong box, a date left blank. Each miss restarts the loop, and in a book move you are running that loop across hundreds of accounts against a repapering clock. A well-built e-signature envelope enforces required fields, refuses to complete until every signature block is filled, and timestamps the whole thing into an audit trail. It removes the entire category of NIGO that comes from a human forgetting to sign something. Those records also have to be retained, and e-signed documents preserved under [FINRA's books-and-records requirements in Rule 4511](https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511) are easier to produce in an exam than a filing cabinet of scanned paper.

## Where e-signature stops: the wet-ink and guarantee exceptions

The exceptions are the whole point, because they are where a digitized team gets surprised. A handful of document types in a transition still require something more than a click, and submitting them e-signed produces a rejection days later.

The clearest exception is the **medallion signature guarantee**. When a transaction involves physical securities certificates or instructions to a transfer agent, the transfer agent typically requires a medallion guarantee, not a notarization and not an e-signature. As [Investor.gov explains, a medallion guarantee protects against the unauthorized transfer of securities](https://www.investor.gov/introduction-investing/investing-basics/glossary/medallion-signature-guarantees-preventing) and can only be issued by a participant in a recognized medallion program, usually a bank or broker-dealer. No e-signature platform can produce one. An account holding certificated positions is a wet-ink-plus-guarantee event you plan for, not a form you route through DocuSign.

Beyond medallions, the exceptions are custodian-specific and worth confirming per firm rather than assuming, but they cluster predictably:

| Document type | Typical signature requirement | Why |
|---|---|---|
| Standard new account and advisory agreements | Compliant e-signature | Built for digital execution, high volume |
| ACATS transfer initiation form | Usually e-signature | Digital-native rail, but confirm the delivering firm |
| Certificated securities / transfer-agent instructions | Wet ink plus medallion guarantee | Fraud protection on unauthorized transfers |
| Some retirement distributions and rollovers | Sometimes wet ink or extra verification | Higher-risk irreversible transactions |
| Certain annuity and insurance forms | Often carrier-specific wet ink | Governed by the product carrier, not the custodian |
| Notary-required documents | Wet ink plus notarization | State law formality |

The operational error is treating the table as uniform. Two custodians can differ on whether a given rollover accepts e-signature, and an annuity carrier can override both. This is why the assets that travel on their own tracks, annuities and alternatives, so often carry their own signature rules, a pattern that runs through [the assets that never move through ACATS](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup).

## The new NIGO modes e-signature introduces

Going digital does not eliminate NIGO. It changes its shape. A team that assumes e-sign means clean packets walks straight into a second set of rejections.

- **Wrong-signer NIGO.** The envelope was signed, but by the wrong party, or a required second signer on a joint or trust account was never routed. E-signature enforces that a block gets filled; it does not know your titling rules unless you built them in. Trusts, entities, and joint accounts are where this hides.
- **Expired-envelope NIGO.** E-signature requests expire. In a book move where a client is slow to act, an envelope times out, and the account sits un-progressed while everyone assumes it is done. Nothing rejected; nothing moved either.
- **Unsupported-form NIGO.** A form that the receiving custodian or a product carrier does not accept electronically was sent e-signed anyway, and comes back for wet ink after the timeline already assumed it was complete.
- **Identity and consent gaps.** ESIGN requires the signer to have affirmatively consented to do business electronically and to be able to access the records. A workflow that skips clean consent capture creates a record that is harder to defend later.

None of these are reasons to abandon e-signature. They are reasons to design the routing, so the method matches the form and the signer before the envelope goes out. The related consent mechanics, including where a bulk repaper can move on negative consent instead of a signature at all, are covered in [negative consent letters and when they fail](https://fasttrackr.ai/blog/negative-consent-letters-the-bulk-repaper-shortcut-and-when-it-fails).

## Building the routing layer

The signature stack is really a routing decision made once per form, applied across the book. It works in three steps.

First, **classify every form in the packet by its signature requirement** for this specific custodian and any product carriers involved: e-signable, wet-ink, or wet-ink-plus-guarantee. Do this at the book level before the first envelope, not per account under deadline pressure.

Second, **enforce the field and signer rules inside the e-signable set**. Every envelope should refuse to complete without all required fields, route to every required signer based on account titling, and carry a clean electronic-consent record. This is where you kill wrong-signer and missing-field NIGO at the source.

Third, **stage the wet-ink exceptions early**. The medallion guarantees, the notary appointments, the carrier-specific annuity forms: these have human-scheduling lead times a digital envelope does not, so they belong at the front of the timeline. The team that discovers a medallion requirement on day thirty has already lost the days it needed to book the appointment.

The input to all three steps is knowing exactly what forms and positions each account requires, which is a reading problem before it is a signing problem. [FastTrackr's document intelligence](https://fasttrackr.ai/solutions/document-intelligence) extracts the positions and account details from the inbound statements and pre-fills the forms, so the packet arrives with the right fields populated and the exceptions already flagged. That upstream accuracy is what makes the signature routing clean, and it connects directly to how [AI reads a brokerage statement to pre-fill account forms and cut NIGO](https://fasttrackr.ai/blog/ai-reads-brokerage-statement-prefill-account-forms-cut-nigo) earlier in the workflow. The full sequencing of e-signable and wet-ink work across a book is what the [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) coordinates, and the transfer forms themselves sit under the customer account transfer obligation in [FINRA Rule 11870](https://www.finra.org/rules-guidance/rulebooks/finra-rules/11870).

## What this looks like at book scale

Run across a whole book, the signature stack turns a source of scattered late rejections into a predictable pipeline. The e-signable majority flows through enforced envelopes with near-zero missing-signature NIGO. The wet-ink minority is identified up front and scheduled first, so medallions and notaries never become the reason an otherwise-ready account waits. Consultants running many transitions at once build this classification into intake, which is part of why [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) treat signature routing as a design decision rather than a per-form scramble. The payoff, a packet that is in good order the first time, is the same operational lever behind the outcome in the [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition).

## Frequently asked questions

**Can I e-sign an ACATS transfer initiation form?**
In most cases yes, since the transfer initiation form is a digital-native document and custodians widely accept compliant electronic signatures on it under the ESIGN Act. The caveat is the delivering firm and any product-specific rules, so confirm rather than assume. The transfer forms that genuinely require more than an e-signature are the ones tied to certificated securities or a transfer agent, which need a medallion guarantee instead.

**What is the difference between a medallion signature guarantee and a notarization?**
They solve different problems. A notarization verifies that a signer is who they say they are on a document. A medallion signature guarantee, issued only by a participant in a recognized medallion program such as a bank or broker-dealer, additionally guarantees the signature for the purpose of transferring securities and carries financial backing against fraud. Transfer agents require a medallion, not a notarization, for many certificate and transfer instructions, and no e-signature platform can produce one.

**Does e-signature actually reduce NIGO in a repaper?**
It eliminates the largest category, missing or misplaced signatures and blank required fields, because a well-built envelope refuses to complete until every block is filled. What it does not do is prevent wrong-signer errors, expired envelopes, or forms sent electronically that a custodian or carrier only accepts in wet ink. Net NIGO drops substantially, but only if the routing and field rules are built in rather than assumed.

**Which repaper documents still require a wet signature?**
The recurring exceptions are instructions involving certificated securities or a transfer agent, which need a medallion guarantee; certain higher-risk retirement distributions and rollovers at some custodians; many annuity and insurance forms governed by the product carrier; and anything a state requires to be notarized. These are custodian and carrier specific, so the durable practice is to classify each form's requirement up front rather than apply one rule to the whole packet.

**How do I stop e-signature envelopes from stalling a transition?**
Expired and forgotten envelopes are a real NIGO mode, so track envelope status as an open task, not a completed one, until the account actually progresses. Set reminders against the repapering timeline, stage the wet-ink exceptions that need scheduling at the front, and make sure the upstream forms are pre-filled and correct so a client is not abandoning an envelope because it asked for information they do not have on hand.

