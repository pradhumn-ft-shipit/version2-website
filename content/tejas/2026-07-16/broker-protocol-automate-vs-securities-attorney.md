---
title: "Broker Protocol Breakaway: What Software Can Automate and What Needs a Securities Attorney"
topic: "Advisor Transitions & Repapering"
description: "A practical division of labor for a Protocol breakaway: which parts of the transition are mechanical and safe to automate, which require a securities attorney, and the handful of steps where getting the order wrong creates the litigation risk."
author: "FastTrackr AI Team"
---

In a Broker Protocol breakaway, software owns the mechanical work: five-field client list validation, form population, document extraction from lawful sources, ACATS submission, and exception tracking. A securities attorney owns every judgment call: your employment agreement, the resignation letter, and what you may say to clients and when.

Every breakaway advisor asks the automation question backwards. They ask what the software can do. The better question is what the software must not be allowed to touch, because that list is short, specific, and it is where transitions actually blow up.

The division is cleaner than most advisors expect. Software owns the mechanical work: form population, data validation, ACATS submission, exception tracking. A securities attorney owns every judgment call about what you are permitted to do. The two lists barely overlap. What ruins transitions is not picking the wrong tool. It is letting a workflow make a decision that belonged to counsel, usually because the workflow was faster and nobody noticed a decision was being made.

**None of what follows is legal advice.** It is an operational map of where the line sits, drawn from the public rules. Your employment agreement is a document about you specifically, and no article can read it.

## What the Protocol actually gives you, and why it is less than people assume

The Broker Protocol permits five pieces of client information. Per [Kitces' breakdown of Protocol requirements](https://www.kitces.com/blog/broker-protocol-recruiting-requirements-for-moving-brokers-to-breakaway-or-go-independent-ria/), that is: names, addresses, phone numbers, email addresses, and account titles. Nothing else. Not account statements, not account numbers, not any portion of the client file.

Most advisors know the five fields. Far fewer have internalized what the Protocol does **not** cover, and this is where the automation question gets decided. The Protocol does not protect you from non-compete clauses, which remain enforceable under state law. It does not touch forgivable loan or retention deal obligations. It does not cover proprietary firm products, or clients you got through an internal referral program. As Kitces puts it, the rest of the employment agreement still applies and must still be complied with.

Read that again, because it is the whole argument. The Protocol is a narrow safe harbor around client data and solicitation. Your employment agreement is a separate document that survives it intact. Software can enforce the five-field rule perfectly and you can still be in court over a non-compete, a team agreement, or a retention note. A tool that tells you that you are "Protocol compliant" is answering a much smaller question than the one you are actually asking.

The [Protocol compliance checklist on what you can and cannot take](https://fasttrackr.ai/blog/broker-protocol-compliance-checklist-what-you-can-take) covers the field-level detail. The point here is scope: clearing the data rule is necessary and nowhere near sufficient.

## The actual division of labor

| Task | Owner | Why the line falls here |
| --- | --- | --- |
| Reading your employment agreement for non-solicit, non-compete, team, and loan terms | **Attorney only** | It is interpretation of a contract against state law. There is no rule engine for this |
| Confirming both firms are Protocol members on your resignation date | **Software assists, attorney confirms** | The lookup is mechanical. Whether membership status is dispositive for your situation is not |
| Drafting the resignation letter and its attachments | **Attorney drafts, software never** | Brevity is a legal strategy, not a formatting preference |
| Building the five-field client list | **Software** | A field-level constraint. A validation rule enforces this better than a human |
| Pre-populating new account forms | **Software** | Pure data transformation once the source data is lawful |
| Extracting data from statements and existing forms | **Software** | Mechanical extraction, with one large caveat below |
| ACATS submission and reject handling | **Software** | Rule-governed NSCC process with published reason codes |
| Deciding what you may say to a client, and when | **Attorney only** | Timing and wording are the entire litigation surface |
| Sequencing resignation, registration, and first contact | **Attorney sets, software executes** | The order is a legal judgment. Executing it on schedule is an ops problem |
| Deciding whether a specific client was an internal referral | **Attorney only** | Turns on team agreements and firm policy, not data |

The pattern: **software owns anything with a deterministic right answer. Counsel owns anything that requires reading a document about you.** When a task looks like it sits in both columns, it belongs to counsel.

## The caveat inside document extraction

Document intelligence is the highest-value automation in a transition and the one that needs the tightest constraint, because the constraint is not technical.

Extraction is mechanical. Feeding it an unlawful source document is not. If you photograph account statements on your last Friday and run them through an extraction tool, the tool works flawlessly and you have just created a clean, timestamped, machine-readable record of taking data the Protocol never permitted you to take. The automation did not cause the problem. It documented it, in a format opposing counsel would be delighted to receive.

So the rule is about inputs, not outputs. [Document intelligence](https://fasttrackr.ai/solutions/document-intelligence) belongs on documents the new firm lawfully holds: forms the client signs at the new firm, statements the **client** provides directly, data the client authorizes. That is a genuine constraint on where the tool points, and it should be settled before anyone logs in.

The advisors who get this wrong are almost never acting in bad faith. They are moving fast, the tool makes it easy, and nobody drew the input boundary in advance.

## What your logs say about you

The strongest argument for automation is one nobody makes: it keeps you out of the behaviors that trigger a TRO in the first place.

[Mayer LLP's guidance on avoiding a TRO from non-protocol firms](https://www.mayerllp.com/blog/tips-to-avoid-a-tro-for-brokers-transitioning-from-non-protocol-firms) lists what the old firm's counsel goes looking for: emailing firm data to personal accounts, storing client information on personal devices, printing client documents without explanation, pulling files off shared drives. They note that remote, late night, and weekend logins create suspicion, and that any retention of firm records will be presumed to be for the purpose of soliciting clients.

Look at that list again. Every item is something an advisor does when they have no system. The advisor emailing spreadsheets to Gmail at 11pm on a Sunday is not stealing. They are improvising, because nobody gave them a compliant place to work. The improvisation is what produces the exhibit.

A structured [advisor transition platform](https://fasttrackr.ai/solutions/advisor-transitions) is a behavioral control before it is an efficiency tool. When the workflow lives in one system with an audit trail, the personal-device pattern does not happen, because there is no reason for it to. That is worth more than the hours it saves, and it is the part of the pitch that gets left out.

Note the presumption in that sentence: retention of records is presumed to be for solicitation. You do not get to explain the spreadsheet later. Design so the spreadsheet never exists.

## Non-protocol changes the sequencing, not the split

If your firm has left the Protocol, the automate-versus-attorney line does not move. The stakes and the sequencing do.

Non-protocol firms are, in Mayer LLP's framing, prepared to initiate legal action as a matter of course, regardless of book size. Counsel's role expands to reviewing how courts in your specific jurisdiction have recently handled these cases, which is not a question any software answers. Attorney involvement also has to start earlier, well before resignation, because the pre-departure conduct is what gets examined.

The software's job actually gets narrower and more valuable: it has to be ready to move on day one, since the compliant path is slower and the [dark period](https://fasttrackr.ai/blog/non-protocol-breakaway-compliant-transition) is longer. Every day of repapering you compress is a day of exposure you remove. That is the honest case for automation in a non-protocol move, and it is an operational case, not a legal one.

One mechanical step is worth doing early either way. Protocol membership is administered by J.S. Held, which [maintains the member firm list](https://www.comply.com/resource/understanding-the-broker-protocol-in-2025-what-individual-advisers-and-rias-need-to-know/), and joining requires a signed Joinder Agreement with no fee. Membership moves: Comply notes a growing number of firms have exited, with Cresset and multiple Focus Financial affiliates withdrawing in 2024. Check status close to your resignation date rather than relying on what was true when you started planning. The lookup is free and takes minutes. The assumption is expensive.

## Where the handoff actually happens

The failure mode is not choosing wrong. It is running the two workstreams in the wrong order.

Counsel goes first, always, and the output is a written scope: which clients, what you may say, when you may say it, what the agreement restricts. That document is the input to every configuration decision the ops team makes. Build the workflow before that scope exists and you have automated an assumption.

Then ops executes against it. Configure the five-field constraint. Point extraction at lawful sources only. Stage the ACATS submissions so rejects surface early rather than in week three, since reject patterns are predictable and [pre-validation stops most of them before submission](https://fasttrackr.ai/blog/acats-reject-codes-decoded-nigo-pre-validation).

Then the loop back: when ops hits something the scope does not cover, and they will, it returns to counsel. It does not get resolved in a workflow by whoever is closest. Most transition disasters are a junior ops person making a legal call at 6pm on a deadline because escalating felt slower than deciding.

For firms running this repeatedly, the scope-to-configuration handoff is the thing worth templating. That is the core of what good [transition consultants](https://fasttrackr.ai/who-we-serve/transition-consultants) sell: not legal advice and not software, but a repeatable sequence where the legal scope is settled before the ops clock starts. The [advisor transition case study](https://fasttrackr.ai/case-study/advisor-transition) shows what the compressed version looks like when the order holds.

## The short version

Software does not reduce your legal risk. It reduces the improvisation that creates legal risk, which is a different claim and a more defensible one.

Automate the mechanical: five-field validation, form population, extraction from lawful sources, ACATS, exception tracking. Give counsel everything that requires reading a document about you: the employment agreement, the resignation letter, client communication timing and wording, referral-origin questions.

The overlap is thin. Treat it as thin. Every transition that ends in a TRO had a moment where somebody let a workflow answer a question that belonged to a lawyer, and it almost always happened because the workflow was right there and the lawyer was not.

## Frequently asked questions

**Can software tell me whether I am allowed to contact a specific client?**

No, and a tool that claims to is answering a narrower question than it appears. Solicitation permissions turn on your employment agreement, whether the client came through an internal referral or team arrangement, and state law. Software can hold the client list and enforce the five-field data rule. It cannot determine which names on that list you may lawfully contact or when.

**Does Protocol membership mean I am safe from litigation?**

No. The Protocol is a narrow safe harbor covering client data and solicitation between member firms. It does not override non-compete clauses, which remain enforceable under state law, and it does not affect forgivable loan obligations, retention deals, proprietary product restrictions, or clients obtained through internal referral programs. Kitces is explicit that the rest of the employment agreement still applies.

**Can I use document extraction on my current firm's account statements?**

This is where advisors get into trouble. The Protocol permits five client fields and does not include account statements or account numbers, so running firm statements through an extraction tool can create a clean record of taking data you were not permitted to take. Point extraction at documents the new firm lawfully holds or the client provides directly, and settle that boundary before the tool is configured.

**How do I verify both firms are Protocol members?**

The Protocol is administered by J.S. Held, which maintains the member firm list. Joining requires a signed Joinder Agreement and carries no fee. Because membership changes, with several firms withdrawing in 2024, verify status close to your resignation date rather than relying on earlier research.

**When should a securities attorney get involved?**

Before you tell anyone you are leaving, and earlier still if your firm is not a Protocol member. Counsel's first task is reviewing your employment agreement for restrictions specific to you, which determines the scope every downstream operational decision depends on. Pre-departure conduct is what gets examined in a TRO fight, so engaging counsel after resignation means the reviewable behavior has already happened.

