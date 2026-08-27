import { useState } from 'react';
import { m } from '../lib/motion';
import { Plus, Minus } from 'lucide-react';

export default function PageFAQ({ faqs }: { faqs: { q: string, a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage structured data. Every answer is a plain string here, so the schema
  // maps 1:1 to what's rendered — and because the answers are always mounted
  // (collapsed via animated height, not conditionally unmounted), the visible
  // HTML and the schema agree, which is what Google's FAQ rich-result validation
  // and AI answer-extraction both want.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

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
            Frequently Asked Questions
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

                {/* Answer is ALWAYS rendered (so it ships in the prerendered HTML
                    and is readable by crawlers / answer engines); the accordion
                    only animates its height open and closed. */}
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
