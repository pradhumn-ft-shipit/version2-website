import { motion } from 'framer-motion';
import { Database, FileText, LayoutList } from 'lucide-react';

const capabilities = [
  {
    icon: <Database className="w-6 h-6 text-brandMint" />,
    title: "Data Collection",
    description: "AI extracts client and account data from existing sources of information (systems, docs, conversations). Pre-populated household records, ready for review, without another long blank intake form."
  },
  {
    icon: <FileText className="w-6 h-6 text-brandMint" />,
    title: "Documentation",
    description: "Smart mapping across end custodians and firms. The right documents identified, pre-filled, and ready for signature. Push to the custodian via API where supported, or generate signature-ready documents."
  },
  {
    icon: <LayoutList className="w-6 h-6 text-brandMint" />,
    title: "Project Management",
    description: "Hundreds of households, tracked and proactively managed in one place. Replaces the Excel war room. Visible to you, your team, and your clients."
  }
];

export default function Solution() {
  return (
    <section className="py-24 bg-bgCanvas border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold text-textPrimary leading-tight mb-6"
            >
              Built for transition.<br/>Not retrofitted with it.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-textSecondary mb-8 leading-relaxed"
            >
              FastTrackr is shaped by advisory practices, transition consultants, and operators who've moved billions in client assets. We've encoded what they know and their best practices into a system that handles the work, the quirks, and the edge cases that others miss.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brandDeep text-white p-6 rounded-2xl shadow-lg border border-brandDeepHover relative overflow-hidden"
            >
              <p className="relative z-10 font-medium text-lg">
                <span className="text-brandMint font-bold mr-2">The Difference:</span>
                Every transition is different. We get that. The system flexes around your book, not the other way around.
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {capabilities.map((cap, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-brandMint/0 via-brandMint/5 to-brandMint/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
                
                <div className="flex gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-bgCanvas flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-brandMint/30 transition-colors">
                    {cap.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-textPrimary mb-2">{cap.title}</h3>
                    <p className="text-textSecondary leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
