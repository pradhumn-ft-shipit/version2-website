import { motion } from 'framer-motion';
import { Zap, ShieldCheck, TrendingUp, CalendarX2, ArrowRight } from 'lucide-react';

const stats = [
  {
    icon: <Zap className="w-5 h-5 text-brandMint" />,
    headline: "75% faster",
    description: "Less admin work, more revenues. More books moved per quarter."
  },
  {
    icon: <CalendarX2 className="w-5 h-5 text-brandMint" />,
    headline: (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-gray-400 line-through text-2xl font-normal decoration-red-400">Months</span>
        <ArrowRight className="w-5 h-5 text-textSecondary" />
        <span className="text-brandDeep text-3xl">Weeks</span>
      </div>
    ),
    description: "The 90-day timeline gets cut down dramatically."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-brandMint" />,
    headline: "Fewer NIGOs",
    description: "Pre-validated, mapped forms. Cleaner submissions."
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-brandMint" />,
    headline: "Higher AUM Retained",
    description: "Faster close means less attrition during the move."
  }
];



export default function Outcomes() {
  return (
    <section className="py-24 bg-bgCanvas border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-6"
          >
            What changes when transitions stop being chaos.
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-brandMint/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="font-display font-bold text-brandDeep mb-3 min-h-[2.5rem] flex items-end">
                {typeof stat.headline === 'string' ? <span className="text-3xl">{stat.headline}</span> : stat.headline}
              </div>
              <p className="text-textSecondary text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-xl text-textSecondary italic max-w-3xl mx-auto">
            And what doesn't show up in the numbers, calmer advisors, clients who barely notice the move, and ops teams that stop dreading next month.
          </p>
        </motion.div>

        {/* Horizontal Pill Visual */}
        <div className="max-w-4xl mx-auto relative mt-24">
          <motion.div 
            className="relative bg-white rounded-full border border-gray-100 shadow-[0_10px_50px_rgba(45,212,160,0.08)] py-12 px-8 md:px-16 flex items-center justify-between overflow-visible min-h-[300px]"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background dashed circle lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] rounded-full border border-brandMint/30 border-dashed absolute" />
              <div className="w-[320px] h-[320px] rounded-full border border-brandMint/20 border-dashed absolute rotate-45" />
              {/* Nodes on dashed circle */}
              <div className="w-3 h-3 bg-brandMint/40 rounded-full absolute -top-[160px]" />
              <div className="w-3 h-3 bg-brandMint/40 rounded-full absolute -bottom-[160px]" />
              <div className="w-3 h-3 bg-brandMint/40 rounded-full absolute top-1/2 -right-[160px] -translate-y-1/2" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-1/3 text-center md:text-right pr-4 md:pr-12">
              <div className="font-display font-bold text-textPrimary text-lg mb-1">Smoother next transition</div>
              <div className="text-sm text-textSecondary">System learns patterns</div>
            </div>

            {/* Center Core */}
            <div className="relative z-20 shrink-0">
              <div className="absolute inset-0 bg-brandMint/20 blur-2xl rounded-full scale-150" />
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brandDeep flex flex-col items-center justify-center shadow-2xl relative z-10">
                <span className="text-brandMint font-display font-bold text-5xl mb-1">F</span>
              </div>
              
              {/* Top/Bottom Floating text */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 text-center w-40 font-display font-bold text-textPrimary text-lg">
                Faster transition
              </div>
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center w-40 font-display font-bold text-textPrimary text-lg">
                Retained AUM
              </div>
            </div>

            {/* Right Content */}
            <div className="relative z-10 w-1/3 text-center md:text-left pl-4 md:pl-12">
              <div className="font-display font-bold text-textPrimary text-lg mb-1">Better client experience</div>
              <div className="text-sm text-textSecondary">No redundant forms</div>
            </div>

          </motion.div>
          
          <p className="text-center text-sm text-textTertiary mt-24">
            Every transition makes the next one easier. The system learns. So does your team.
          </p>
        </div>

      </div>
    </section>
  );
}
