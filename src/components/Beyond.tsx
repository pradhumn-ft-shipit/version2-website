import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mic, FileSearch, UserPlus, ArrowRight } from 'lucide-react';

const cards = [
  {
    icon: <UserPlus className="w-7 h-7 text-brandDeep" />,
    title: 'Client Onboarding',
    description: "The same engine that moves thousands of accounts during a transition, applied to every new client. Onboard in days, not weeks.",
    href: '/solutions/client-onboarding',
  },
  {
    icon: <Mic className="w-7 h-7 text-brandDeep" />,
    title: 'Meeting Assistant',
    description: "Pre-meeting prep, in-meeting notes, post-meeting follow-ups. CRM updated in one click. Built for advisors who'd rather talk to clients than write up calls.",
    href: '/solutions/meeting-assistant',
  },
  {
    icon: <FileSearch className="w-7 h-7 text-brandDeep" />,
    title: 'Document Intelligence',
    description: "Brokerage statements, tax docs, equity comp, extracted, organized, and ready for analysis. Goes from a stack of PDFs to insight in minutes.",
    href: '/solutions/document-intelligence',
  },
];

export default function Beyond() {
  return (
    <section className="py-24 bg-bgCanvas border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-4"
          >
            From moving the book to running the practice.
          </motion.h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            FastTrackr stays with you after the transition. The same AI engine that moved your book keeps your day-to-day operations running.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-panel rounded-3xl p-8 md:p-10 border border-gray-100 hover:border-brandMint/30 transition-all duration-500 overflow-hidden relative bg-white flex flex-col"
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-brandMint/5 rounded-full blur-[60px] group-hover:bg-brandMint/10 transition-colors pointer-events-none" />
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-bgCanvas rounded-2xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-textPrimary mb-4">{card.title}</h3>
                <p className="text-textSecondary leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>
                <Link
                  to={card.href}
                  aria-label={`Learn more about ${card.title}`}
                  className="inline-flex items-center font-medium text-brandDeep group-hover:text-brandMint transition-colors mt-auto"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
