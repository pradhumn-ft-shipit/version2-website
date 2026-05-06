import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Calendar } from 'lucide-react';

function BentoCard({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={`relative group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(45, 212, 160, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
        {children}
      </div>
    </motion.div>
  );
}

export default function PainSection() {
  return (
    <section className="py-24 bg-bgPrimary relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-6"
          >
            If you've moved a book before, you know.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-textSecondary max-w-2xl mx-auto"
          >
            Repapering hasn't changed in decades. Advisors and their teams just learned to live with it. The process is broken, and clients, advisors, and teams all suffer for it.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
          
          {/* Hero Tile 1 - 90 Days */}
          <BentoCard className="md:col-span-6 md:row-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brandMint/10 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-brandDeep" />
              </div>
              <h3 className="text-3xl font-display font-bold text-textPrimary mb-4">90 days. Sometimes longer.</h3>
              <p className="text-textSecondary text-lg leading-relaxed">
                Months of repapering before the last asset transfers. Revenue paused. Client relationships in limbo.
              </p>
            </div>
            {/* Visual element placeholder */}
            <div className="mt-8 flex-1 w-full bg-gradient-to-t from-gray-50 to-transparent rounded-xl border border-gray-100 border-b-0 overflow-hidden relative">
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-50">
                {/* Simulated Gantt chart */}
                <div className="w-4/5 h-24 space-y-3">
                  <div className="h-4 bg-brandMint/30 rounded-full w-full" />
                  <div className="h-4 bg-gray-200 rounded-full w-3/4" />
                  <div className="h-4 bg-gray-200 rounded-full w-1/2" />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Hero Tile 2 - Hundreds of forms */}
          <BentoCard className="md:col-span-6 md:row-span-2">
            <div>
              <h3 className="text-3xl font-display font-bold text-textPrimary mb-4">Hundreds of forms. Per book.</h3>
              <p className="text-textSecondary text-lg leading-relaxed">
                Account applications, transfer-of-asset forms, services and firm paperwork, multiplied by every household.
              </p>
            </div>
            {/* Visual element placeholder */}
            <div className="mt-8 flex-1 w-full relative">
              <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 w-64 h-64 bg-white shadow-xl border border-gray-100 rounded-xl rotate-12 transition-transform duration-500 group-hover:rotate-6 group-hover:-translate-y-4" />
              <div className="absolute right-8 bottom-4 translate-x-8 translate-y-8 w-64 h-64 bg-white shadow-xl border border-gray-100 rounded-xl rotate-6 transition-transform duration-500 group-hover:rotate-3 group-hover:-translate-y-2" />
              <div className="absolute right-16 bottom-8 translate-x-8 translate-y-8 w-64 h-64 bg-white shadow-xl border border-gray-100 rounded-xl transition-transform duration-500 group-hover:-translate-y-0 p-6">
                <div className="h-4 w-1/2 bg-gray-100 rounded mb-4" />
                <div className="space-y-3">
                  <div className="h-3 w-full bg-gray-50 rounded" />
                  <div className="h-3 w-5/6 bg-gray-50 rounded" />
                  <div className="h-3 w-4/6 bg-gray-50 rounded" />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Medium Tile 1 */}
          <BentoCard className="md:col-span-4">
            <div>
              <h3 className="text-xl font-display font-bold text-textPrimary mb-2">Tracked in spreadsheets.</h3>
              <p className="text-textSecondary">
                Hundreds of accounts. Ops teams chasing status and inputs across emails, PDFs, and calls. One mis-keyed cell and the picture changes.
              </p>
            </div>
          </BentoCard>

          {/* Medium Tile 2 */}
          <BentoCard className="md:col-span-4">
            <div>
              <h3 className="text-xl font-display font-bold text-textPrimary mb-2">Burned-out teams.</h3>
              <p className="text-textSecondary">
                Transition season is overtime season. Mistakes pile up. So does the resentment.
              </p>
            </div>
          </BentoCard>

          {/* Medium Tile 3 */}
          <BentoCard className="md:col-span-4">
            <div>
              <h3 className="text-xl font-display font-bold text-textPrimary mb-2">NIGO means rework.</h3>
              <p className="text-textSecondary">
                Even one missing field can lead to a rejection. Multiply that by hundreds.
              </p>
            </div>
          </BentoCard>

          {/* Full Width Band */}
          <BentoCard className="md:col-span-12 !bg-brandDeep text-white border-transparent overflow-hidden h-auto py-8">
            <div className="absolute right-0 inset-y-0 w-1/2 bg-gradient-to-l from-brandMint/10 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Anxious clients.</h3>
                <p className="text-white/80 text-lg">
                  They notice when the move feels disorganized. Some quietly walk.
                </p>
              </div>
              <div className="w-full md:w-80">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-red-400 rounded-full"
                    animate={{ width: ["100%", "40%", "70%", "30%", "80%", "50%"] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm font-medium">
                  <span className="text-white/70">Client Confidence</span>
                  <span className="text-red-400">Fluctuating</span>
                </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}
