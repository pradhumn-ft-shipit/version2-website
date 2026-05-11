import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function PageFAQ({ faqs }: { faqs: { q: string, a: string }[] }) {
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
            Frequently Asked Questions
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
