import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "How is FastTrackr different from a generic AI tool?",
    a: "We didn't add a \"transition\" feature to a general-purpose product. FastTrackr was built for advisor transitions from the start, shaped by consultants and operators who move billions in client assets every year. The system understands the household structures, custodian quirks, and form variations that generic AI tools don't."
  },
  {
    q: "Which custodians do you support?",
    a: "We already support the major custodians. If you'd like to know whether yours is covered, drop us a note via the contact form and we'll share specifics. If you're a custodian and want to talk about partnership, write to us the same way."
  },
  {
    q: "How does FastTrackr handle our firm's specific forms?",
    a: "We map your firm's documentation into the workflow during onboarding. Once it's mapped, the system pre-fills it, validates it, and pushes it to wherever it needs to go. New forms or revisions are absorbed without re-platforming."
  },
  {
    q: "Do you train your AI on our client data?",
    a: (
      <>
        No. Your client data is yours. We don't use it to train any models. See our{' '}
        <Link to="/privacy-policy" className="text-brandDeep font-semibold hover:text-brandMint transition-colors">Privacy Policy</Link>
        {' '}for the full detail.
      </>
    )
  },
  {
    q: "Is our data secure?",
    a: "Yes. Encryption in transit and at rest, role-based access, and full audit trails. Compliance documentation is available on request, your compliance team can reach out and we'll send the security packet."
  },
  {
    q: "How fast can we go live?",
    a: "For most firms, in a matter of days, not months. Setup happens in parallel with your first transition, so you start seeing time saved on day one."
  },
  {
    q: "Can we use just the Meeting Assistant or Document Intelligence module?",
    a: "Yes. The modules are independent. Many firms start with one and expand. Pricing is module-based, so you only pay for what you use."
  },
  {
    q: "How is FastTrackr priced?",
    a: (
      <>
        For Advisor Transitions, we price based on the time saved and the additional revenue we help you capture. For other modules, pricing is per-seat. The{' '}
        <Link to="/pricing" className="text-brandDeep font-semibold hover:text-brandMint transition-colors">Pricing</Link>
        {' '}page has more, or we can walk through it on a call.
      </>
    )
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bgCanvas border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-textPrimary tracking-tight"
          >
            Questions worth answering up front.
          </m.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-6 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-semibold text-textPrimary pr-8">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-brandMint text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 text-textSecondary leading-relaxed border-t border-gray-50 mt-2">
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}
