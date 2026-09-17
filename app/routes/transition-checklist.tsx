import type { MetaDescriptor } from 'react-router';
import TransitionChecklist from '../../src/pages/TransitionChecklist';
import { seoMeta, type SeoConfig, absoluteUrl, breadcrumbList } from '../../src/lib/seo';

const CANONICAL = '/transition-checklist';

// HowTo mirrors the eight on-page phases so the checklist is machine-readable;
// BreadcrumbList rides in the same @graph. Kept in sync with the phase headings
// in src/pages/TransitionChecklist.tsx.
const HOW_TO_STEPS = [
  ['Pre-transition planning', 'Set the timeline, inventory the book, choose the destination model and custodian, and align legal counsel before anyone signs.'],
  ['Broker Protocol & resignation', 'With counsel, confirm protocol membership, prepare the permitted client information, and sequence a clean, documented resignation.'],
  ['Client communication', 'Announce the move, segment clients by priority, and start personal outreach with transfer paperwork ready to send.'],
  ['Repapering & account opening (ACATS)', 'Map source to destination accounts, pre-fill and e-sign paperwork, submit ACATS transfers, and triage any NIGO rejections fast.'],
  ['Custodian requirements', 'Confirm each custodian’s current forms, processing timelines, access, and escalation contacts.'],
  ['Data migration', 'Standardize and import client and account data once, reconcile balances, and de-duplicate records.'],
  ['Go-live & the first 72 hours', 'Send the announcement, call top households, staff a rapid-response channel, and track signatures and transfers on one dashboard.'],
  ['Post-transition', 'Confirm every account settled, follow up with non-responders, debrief, and turn the process into a repeatable playbook.'],
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HowTo',
      name: 'The Ultimate Advisor Transition Checklist',
      description:
        'A step-by-step operating guide for moving a book of business, from pre-transition planning and Broker Protocol through repapering, ACATS, custodian requirements, and the first 72 hours after go-live.',
      url: absoluteUrl(CANONICAL),
      step: HOW_TO_STEPS.map(([name, text], i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name,
        text,
      })),
    },
    breadcrumbList([
      { name: 'Home', path: '/' },
      { name: 'Advisor Transition Checklist', path: CANONICAL },
    ]),
  ],
};

const seo: SeoConfig = {
  title: 'The Ultimate Advisor Transition Checklist | FastTrackr AI',
  description:
    'A step-by-step advisor transition checklist: pre-transition planning, Broker Protocol, client communication, repapering, ACATS, custodian requirements, and go-live.',
  canonical: CANONICAL,
  ogImage: '/logomark.png',
  jsonLd,
};

export function meta(): MetaDescriptor[] {
  return seoMeta(seo);
}

export default TransitionChecklist;
