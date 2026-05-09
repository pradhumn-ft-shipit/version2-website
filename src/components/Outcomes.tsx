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

        {/* Outcome Loop Visual */}
        <div className="max-w-3xl mx-auto relative mt-24">
          <motion.div
            className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_10px_50px_rgba(45,212,160,0.08)] px-4 py-6 sm:px-8 sm:py-8"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto w-full max-w-[640px] aspect-[5/3]">
              {/* Dashed orbit (ellipse) */}
              <div className="absolute inset-x-[28%] inset-y-[14%] rounded-full border border-dashed border-brandMint/50" aria-hidden />

              {/* Orbiting dot, traces the elliptical orbit */}
              <motion.div
                className="absolute inset-x-[28%] inset-y-[14%] pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, ease: 'linear', repeat: Infinity }}
                aria-hidden
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brandMint shadow-[0_0_16px_rgba(45,212,160,0.9)]" />
              </motion.div>

              {/* Center FT logomark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 bg-brandMint/25 blur-2xl rounded-full scale-150" aria-hidden />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl ring-1 ring-brandMint/20">
                    <img
                      src="/logomark-classic.png"
                      alt="FastTrackr AI"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Top label */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-48 text-center font-display font-bold text-textPrimary text-base sm:text-lg md:text-xl">
                Faster transition
              </div>

              {/* Right label */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-40 text-center font-display font-bold text-textPrimary text-base sm:text-lg md:text-xl">
                Better client experience
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 sm:w-48 text-center font-display font-bold text-textPrimary text-base sm:text-lg md:text-xl">
                Higher retained AUM
              </div>

              {/* Left label */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 sm:w-32 md:w-40 text-center font-display font-bold text-textPrimary text-base sm:text-lg md:text-xl">
                Improved next transition
              </div>
            </div>
          </motion.div>

          <p className="text-center text-sm text-textTertiary mt-10">
            Every transition makes the next one easier. The system learns. So does your team.
          </p>
        </div>

      </div>
    </section>
  );
}
