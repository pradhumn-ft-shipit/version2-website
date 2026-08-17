---
title: "The Medallion Signature Guarantee Bottleneck: The Repaper Step No Software Removes"
topic: "Advisor Transitions & Repapering"
description: "ACATS is automated and needs no medallion. The assets that fall outside ACATS often do, and a medallion signature guarantee has to be stamped in person, capped by a dollar limit, and cannot be e-signed. Here is where it bites a repaper and how to plan around it."
author: "FastTrackr AI Team"
image: the-medallion-signature-guarantee-bottleneck-the-repaper-step-no-software-removes-hero.png
imageAlt: "The Medallion Signature Guarantee Bottleneck: The Repaper Step No Software Removes"
---

Most of a repaper is now software. Forms pre-fill from statements, signatures move by e-sign, and ACATS shuttles street-name positions broker to broker with no wet ink at all. Then a handful of assets hit the one step nobody can automate away: the medallion signature guarantee. It has to be stamped in person by an authorized bank or credit union officer, it is capped by a dollar limit tied to a surety bond, and no e-signature platform can produce it. When a repaper stalls in its final days, a medallion is often the reason.

Transition teams underestimate this because the bulk of a book never needs one. ACATS transfers, the 80 percent, are automated and medallion-free. The trap is that the assets that fall outside ACATS, the annuities, the directly registered positions, the transfer-agent holdings, the estate and trust re-registrations, are exactly the ones that tend to require a medallion, and they are also the ones that already move slowly. The medallion stacks delay on top of delay. Here is what the guarantee actually is, where it bites in a book move, and how to keep it off the critical path.

## What a medallion signature guarantee actually is

A medallion signature guarantee is a stamp, issued by an officer of a participating bank, credit union, or broker-dealer, that warrants three things about a signature authorizing a securities transfer: that the signature is genuine, that the signer is the appropriate person to endorse, and that the signer had the legal capacity to sign. The guarantor is putting its own liability behind that warranty, which is why the stamp is backed by a surety bond and issued only to existing customers after identity verification.

It is not a notarization. A notary confirms a person signed a document; a medallion guarantees the signer is entitled to transfer the specific securities. That is a higher bar and a different institution's liability, which is precisely why it cannot be replicated by an e-sign click or a notary stamp. The [SEC's investor guidance on medallion signature guarantees](https://www.investor.gov/introduction-investing/investing-basics/glossary/medallion-signature-guarantees-preventing) frames it as a protection against the unauthorized transfer of securities, and that protective purpose is the reason the process is deliberately hard to shortcut.

Medallions are issued under three programs, the Securities Transfer Agents Medallion Program (STAMP), the Stock Exchanges Medallion Program (SEMP), and the New York Stock Exchange Medallion Signature Program (MSP). The stamp also carries a coverage limit, a surety prefix indicating the maximum dollar value it will guarantee. A stamp rated below the value of the position being transferred will be rejected, which is a failure mode teams rarely see coming.

## Why ACATS does not need one and the residual assets do

The reason a medallion never appears for most of a book is structural. ACATS is a broker-to-broker automated system run through the National Securities Clearing Corporation. The securities are held in street name, the delivering and receiving firms are both regulated participants, and the transfer is validated electronically against registration and tax ID. There is no individual instruction letter for a transfer agent to guarantee, so there is no medallion.

The medallion surfaces the moment an asset leaves that automated street-name pipe and a transfer agent, rather than a broker, has to act on a signed instruction. That is the non-ACATS residual, and it is a predictable list.

| Asset or event | Why it falls outside ACATS | Medallion likely |
| --- | --- | --- |
| Directly registered (DRS) or book-entry positions at a transfer agent | Held at the transfer agent, not in street name | Yes, on the transfer instruction |
| Physical stock certificates | No broker holds them; transfer agent re-registers | Yes |
| Mutual fund positions held direct at the fund | Fund/transfer-agent account, not brokerage street name | Often |
| Annuities and alternative investments | Move on carrier or sponsor paperwork, not ACATS | Carrier-dependent; frequently required |
| Estate, trust, or entity re-registration | Change of ownership, not a like-registration transfer | Yes, commonly |
| Transfer of ownership between different registrations | Not a clean like-to-like move | Yes |

These are the same holdings that already run six months past close in a typical book, the annuities, alts, and held-away positions that never touch ACATS. The medallion is one more gate on the slowest lane, which is why it deserves attention in planning rather than discovery at the eleventh hour. Our breakdown of the [account features and assets that do not carry in ACATS](https://fasttrackr.ai/blog/assets-that-never-move-through-acats-residual-cleanup) maps the full residual list the medallion tends to follow.

## Why no software removes it

It is worth being precise about why this step resists automation, because the instinct on a modern transition is to assume tooling can dissolve any bottleneck. Three properties make the medallion the exception.

It requires a physical, in-person interaction with a guarantor institution where the client already holds a relationship, because the guarantor is verifying identity and capacity before pledging its surety. It is capped by a dollar limit, so a large position may exceed a branch's medallion authority and require a specific higher-limit stamp that not every location can issue. And it carries genuine liability for the guarantor, which is why many banks issue medallions only to established customers and sometimes decline outright. None of those can be satisfied by pre-filling a form or collecting an e-signature.

That is the honest boundary of automation in a repaper. Software can pre-fill the transfer instruction, extract the exact account and registration details a transfer agent will check, and flag which positions will need a medallion before the client ever sits down with a banker, so the stamp is obtained once and correctly. What it cannot do is issue the guarantee itself. The value of [document intelligence](https://fasttrackr.ai/solutions/document-intelligence) here is not eliminating the step; it is making sure the instruction the client carries to the guarantor is complete and accurate, so a scarce in-person appointment does not get wasted on a form that has to be redone. Being clear-eyed about what technology does and does not remove is the same honesty a good [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) brings to the whole book: automate the 80 percent ruthlessly, and manage the medallion-bound residual as the human-gated exception it is.

## Planning the medallion off the critical path

Because the medallion cannot be removed, the only lever is timing. The teams that keep it from stalling a close treat it as an early workstream, not a closing task.

Identify medallion-bound positions during intake, when you inventory the book, not when the transfer instruction is ready to send. Every DRS holding, physical certificate, direct-at-fund position, annuity, alternative, and any account with an ownership or registration change is a candidate. Confirm the client's guarantor access next, because not every bank issues medallions and not every branch can issue a high-limit stamp for a large position; a client with only an online bank may have no easy guarantor at all. Then batch the signings so a client with several medallion-bound assets makes one guarantor visit with all instructions in hand, correctly prepared, rather than returning three times. For a client whose positions exceed a single stamp's coverage limit, plan for a higher-rated stamp or a split in advance, so the rejection does not happen after the appointment.

There is also a client-communication dimension that teams forget. A medallion visit is one of the few moments a repaper asks the client to do something in person, and an unexplained request to visit a bank and sign a guaranteed instruction reads as friction or, worse, as a sign the move is going badly. Fold it into the transition communication sequence as a normal, expected step, name which assets need it and why, and give the client the prepared instructions ahead of time. A client who knows the medallion is coming and arrives with the paperwork ready treats it as a five-minute errand rather than a surprise that erodes confidence in the move.

This is the kind of exception routing that separates a transition run on a plan from one run on hope. The [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) who handle many advisors at once build the medallion inventory into the intake checklist precisely because a single overlooked certificate can hold a household open for weeks after everything else has settled. A live [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows the payoff of front-loading these gates: the residual assets close on their own slower clock without dragging the reported completion of the book with them.

For the operational definition of the guarantee and where to obtain one, [Kiplinger's explainer on when a medallion stamp is required to transfer securities](https://www.kiplinger.com/investing/medallion-stamp-required-for-transferring-securities) and the SEC guidance linked above are the two references worth keeping in the transition playbook.

## FAQ

**Does an ACATS transfer require a medallion signature guarantee?**
No. ACATS is an automated broker-to-broker system for street-name positions, validated electronically against registration and tax ID, so there is no signed instruction for a transfer agent to guarantee. The medallion appears only when an asset falls outside ACATS and a transfer agent has to act on a signed transfer instruction, such as a directly registered position, a physical certificate, or an estate or trust re-registration.

**Why can't a medallion be handled with e-signature like the rest of the repaper?**
Because the guarantor is pledging its own surety-backed liability that the signer is genuine, appropriate, and legally capable of transferring the specific securities. That verification requires an in-person interaction at an institution where the client holds a relationship, and it is capped by a dollar limit. A notary or an e-sign click confirms a signature but does not carry the guarantor's warranty, so it cannot substitute.

**Which repaper assets most often need a medallion?**
The non-ACATS residual: directly registered or book-entry positions held at a transfer agent, physical stock certificates, mutual funds held direct at the fund, annuities and alternative investments moving on carrier paperwork, and any estate, trust, entity, or ownership re-registration. These are also the slowest-moving assets in a book, so the medallion compounds an existing delay rather than creating a new one.

**What is a medallion coverage limit and why does it matter?**
Each medallion stamp carries a surety prefix indicating the maximum dollar value it will guarantee. If the position being transferred exceeds that limit, the stamp is rejected and the client needs a higher-rated stamp, which not every branch can issue. Checking the position value against the available stamp limit before the appointment prevents a rejection that would otherwise send the client back for a second visit.

**How do we keep the medallion from delaying a close?**
Treat it as an intake workstream, not a closing task. Inventory every medallion-bound position when you first review the book, confirm the client actually has access to a guarantor that can issue a high-enough limit, prepare all instructions accurately so one visit covers everything, and plan for higher-limit stamps on large positions in advance. Software can flag and prepare, but the in-person stamp has to be scheduled early.

The medallion is a reminder that a repaper is not fully a software problem. Automate everything that can be automated, then manage the few genuinely human-gated steps as their own early workstream. Handled that way, the one step no tool can remove stops being the reason a book move runs late.

