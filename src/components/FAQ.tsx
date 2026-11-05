import React, { useState } from 'react';
import { m } from '../lib/motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

// `a` is what's rendered (may contain links). `schemaAnswer` is the plain-text
// equivalent used only for FAQPage JSON-LD, required whenever `a` isn't a string.
const faqs: { q: string; a: React.ReactNode; schemaAnswer?: string }[] = [
  {
    q: "How is FastTrackr different from a generic AI tool?",
    a: "We didn't add a \"transition\" feature to a general-purpose product. FastTrackr was built for advisor transitions from the start, shaped by consultants and operators who move billions in client assets every year. The system understands the household structures, custodian quirks, and form variations that generic AI tools don't."
  },
  {
    q: "Which custodians do you support?",
    a: "We support Fidelity, Charles Schwab, Goldman Sachs and SEI. BNY Pershing is coming soon. If your custodian isn't listed, send us a note and we'll tell you where it stands. If you're a custodian and want to talk about partnership, write to us the same way."
  },
  {
    q: "How does FastTrackr handle our firm's specific forms?",
    a: "We map your firm's documents into the workflow during setup. Once they're mapped, FastTrackr fills them, checks them and sends them out with the custodian paperwork: by one-click DocuSign, as filled PDFs, as Excel in the counterparty's own template, or straight to the custodian by API where it's supported. No retyping either way. New forms or revisions are absorbed without re-platforming."
  },
  {
    q: "Do you train your AI on our client data?",
    a: (
      <>
        No. Your client data is yours. We don't use it to train any models. See our{' '}
        <Link to="/privacy-policy" className="text-brandDeep font-semibold hover:text-brandMint transition-colors">Privacy Policy</Link>
        {' '}for the full detail.
      </>
    ),
    schemaAnswer: "No. Your client data is yours. We don't use it to train any models. See our Privacy Policy for the full detail."
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
    q: "How is FastTrackr priced?",
    a: "Transition pricing depends on your volumes and use case. Reach out to us to know more about pricing."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: typeof faq.a === 'string' ? faq.a : faq.schemaAnswer ?? '',
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bgCanvas border-y border-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
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
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="text-lg font-semibold text-textPrimary pr-8">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-brandMint text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {open ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Answer is ALWAYS rendered (ships in prerendered HTML, readable
                    by crawlers / answer engines); only the height animates. */}
                <m.div
                  initial={false}
                  animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-6 pt-0 text-textSecondary leading-relaxed border-t border-gray-50 mt-2">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </m.div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
