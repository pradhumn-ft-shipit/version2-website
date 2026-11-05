import { m } from '../lib/motion';
import { Link } from 'react-router-dom';
import { PenLine, FileDown, FileSpreadsheet, Plug, ArrowRight } from 'lucide-react';

// Homepage section: the ways a finished household's paperwork leaves FastTrackr.
const cards = [
  {
    icon: <PenLine className="w-7 h-7 text-brandDeep" />,
    title: 'One click to DocuSign',
    description:
      'The firm documents (IAA, fee schedule, Form CRS, privacy policy) and the custodian paperwork go out together, with every signatory in place. Custodian rules like a carbon copy or SMS verification are built in.',
  },
  {
    icon: <FileDown className="w-7 h-7 text-brandDeep" />,
    title: 'Filled PDFs',
    description: 'Need a wet signature? Download every filled form and handle it offline.',
  },
  {
    icon: <FileSpreadsheet className="w-7 h-7 text-brandDeep" />,
    title: 'Excel in their template',
    description:
      'Some custodians and broker-dealers would rather do the filling themselves. Upload their template and FastTrackr maps the household data into it.',
  },
  {
    icon: <Plug className="w-7 h-7 text-brandDeep" />,
    title: 'Straight to the custodian by API',
    description: 'Where a custodian supports it, the data goes straight across by API. Nobody re-keys it.',
  },
];

export default function WhatGoesOut() {
  return (
    <section className="py-24 bg-bgCanvas border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-4"
          >
            What goes out the door
          </m.h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Once accelerated data collection through FastTrackr is done and checked, the paperwork goes out in whatever form the other side wants: DocuSign, filled PDFs, Excel in their own template, or straight to the custodian by API where it's supported. No retyping either way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <m.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-panel rounded-3xl p-8 border border-gray-100 hover:border-brandMint/30 transition-all duration-500 overflow-hidden relative bg-white flex flex-col"
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-brandMint/5 rounded-full blur-[60px] group-hover:bg-brandMint/10 transition-colors pointer-events-none" />
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-bgCanvas rounded-2xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-textPrimary mb-4">{card.title}</h3>
                <p className="text-textSecondary leading-relaxed flex-grow">{card.description}</p>
              </div>
            </m.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/solutions/advisor-transitions"
            className="group inline-flex items-center font-medium text-brandDeep hover:text-brandMint transition-colors"
          >
            See how a transition runs <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
