import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { m } from '../lib/motion';

/*
 * PR3-07 (2026-11-04): short About page with a small founding-team block (not a
 * team page). Copy is the ticket's draft; facts from the grounding doc (§3.4,
 * §8, §14) and the user (founding team, founded 2025, service model).
 * Kartik Kumar's exact title is still to be confirmed by the user ("Tech" is
 * the agreed default).
 */

const foundingTeam = [
  { name: 'Vineet Mohan', role: 'Founder and CEO' },
  { name: 'Pradhumn Vijayvargiya', role: 'Product and Growth' },
  { name: 'Kartik Kumar', role: 'Head of Technology' },
];

const links = [
  { label: 'See how a transition runs', href: '/solutions/advisor-transitions' },
  { label: 'Security', href: '/security' },
  { label: 'Talk to us', href: '/contact' },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-8">
              About FastTrackr AI
            </h1>
            <div className="space-y-5 text-xl text-textSecondary leading-relaxed">
              <p>
                FastTrackr AI is built to do one job end to end: advisor transitions. When an advisor changes firms or custodians, every household needs custodian paperwork and firm paperwork. The platform works out which forms each account needs before data collection starts, fills them from whatever data the advisor is allowed to bring, checks them, and sends them out.
              </p>
              <p>
                We cover every kind of move: going independent, changing custodians, getting acquired and moving to a broker-dealer. FastTrackr is a purpose-built platform that helps you through the transition, with access to experts when you need them. Where a move needs them, we work alongside top-tier consultants.
              </p>
            </div>
          </m.div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-textPrimary tracking-tight mb-6">
            Founding team
          </h2>
          <ul className="grid sm:grid-cols-3 gap-4">
            {foundingTeam.map((person) => (
              <li
                key={person.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-lg font-semibold text-textPrimary">{person.name}</div>
                <div className="text-textSecondary">{person.role}</div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-textSecondary">Founded: 2025</p>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-brandDeep font-medium hover:underline">
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
