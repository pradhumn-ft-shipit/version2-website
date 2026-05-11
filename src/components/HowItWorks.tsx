import { useRef, useState, useEffect } from 'react';
import { m, AnimatePresence, useInView } from 'framer-motion';

const steps = [
  {
    title: "We learn your book",
    description: "Where you're coming from. Where you're going. Every household, every account, every quirk. Mapped before day one, so nothing surprises you mid-move.",
    number: "01"
  },
  {
    title: "AI-driven data collection",
    description: "What used to take days happens in minutes. Clients confirm what we already have, they don't fill out manual forms again. The intake disappears, the experience improves.",
    number: "02"
  },
  {
    title: "Custodian forms, auto-filled",
    description: "Push directly to your custodian via API where supported. Or get pre-filled forms ready for client signature. Either way, no retyping, no copy-paste between tabs.",
    number: "03"
  },
  {
    title: "Visibility, end to end",
    description: "From day one to the final asset transfer. Every household, every step, visible to you, your team, and your clients. No more blind handoffs. No more \"where are we on this one?\"",
    number: "04"
  }
];

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="w-full max-w-sm aspect-video bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandMintGlow opacity-20" />
        <div className="flex gap-4 items-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 animate-spin-slow" />
          <div className="h-0.5 w-16 bg-gray-200">
            <div className="h-full w-full bg-brandMint animate-pulse" />
          </div>
          <div className="w-16 h-16 rounded-2xl bg-brandDeep shadow-xl flex items-center justify-center">
            <span className="text-brandMint font-display font-bold">F</span>
          </div>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="w-full max-w-sm space-y-4">
        {[1, 2, 3].map(i => (
          <m.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-4 rounded-xl border border-brandMint/30 shadow-md flex items-center justify-between"
          >
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-full bg-bgCanvas" />
              <div className="h-3 w-24 bg-gray-200 rounded" />
            </div>
            <div className="w-5 h-5 rounded-full bg-brandMint text-white flex items-center justify-center text-xs">✓</div>
          </m.div>
        ))}
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="relative w-full max-w-sm aspect-[3/4] bg-white rounded-lg shadow-2xl border border-gray-200 p-8">
        <div className="h-4 w-1/3 bg-gray-200 rounded mb-8" />
        <div className="space-y-4">
          <div className="h-10 w-full bg-brandMint/10 border border-brandMint/30 rounded flex items-center px-4"><span className="w-2/3 h-2 bg-brandDeep/20 rounded" /></div>
          <div className="h-10 w-full bg-brandMint/10 border border-brandMint/30 rounded flex items-center px-4"><span className="w-1/2 h-2 bg-brandDeep/20 rounded" /></div>
          <div className="h-10 w-full bg-brandMint/10 border border-brandMint/30 rounded flex items-center px-4"><span className="w-3/4 h-2 bg-brandDeep/20 rounded" /></div>
        </div>
        <div className="absolute bottom-8 right-8 w-16 h-16 bg-brandDeep rounded-full flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 rounded-full bg-brandMint animate-ping absolute" />
          <span className="text-white relative z-10 font-bold">✓</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-brandDeep p-4 flex justify-between items-center">
        <div className="h-3 w-32 bg-white/20 rounded" />
        <div className="h-6 w-16 bg-brandMint/20 text-brandMint text-[10px] font-bold uppercase rounded flex items-center justify-center">84% Done</div>
      </div>
      <div className="p-6 space-y-4">
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <m.div
            initial={{ width: 0 }}
            animate={{ width: '84%' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full bg-brandMint"
          />
        </div>
        <div className="space-y-3 pt-4">
          <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
            <span className="text-textSecondary">Forms Generated</span>
            <span className="font-medium text-textPrimary">412 / 412</span>
          </div>
          <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
            <span className="text-textSecondary">Client Signatures</span>
            <span className="font-medium text-textPrimary">380 / 412</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-textSecondary">Asset Transfers</span>
            <span className="font-medium text-brandMint">In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ step, index, onActive }: { step: typeof steps[number]; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '-45% 0px -45% 0px' });

  useEffect(() => {
    if (isInView) onActive(index);
  }, [isInView, index, onActive]);

  return (
    <div
      ref={ref}
      className={`relative z-10 min-h-[60vh] flex flex-col justify-center transition-opacity duration-500 ${
        isInView ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <div className="flex gap-6">
        <div className={`flex-shrink-0 text-5xl font-display font-bold transition-colors duration-500 ${isInView ? 'text-brandMint' : 'text-gray-400'}`}>
          {step.number}
        </div>
        <div>
          <h3 className="text-3xl font-display font-bold text-textPrimary mb-4">{step.title}</h3>
          <p className="text-xl text-textSecondary leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 bg-bgPrimary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-24">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-6"
          >
            Every transition is different.<br/>We've built for that.
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-textSecondary max-w-2xl mx-auto"
          >
            No two books move the same way. The process flexes around your specifics, your book, your custodians, your edge cases.
          </m.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative">

          {/* Left Column - Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <Step key={index} step={step} index={index} onActive={setActiveStep} />
            ))}
          </div>

          {/* Right Column - Sticky Visual.
              Sticky is applied directly to the grid item with self-start so the
              grid container becomes the sticky containing block. The previous
              wrapper-div approach was unreliable because the inner sticky's
              parent didn't always stretch to the full row height. */}
          <div className="hidden lg:block sticky top-32 self-start h-[calc(100vh-10rem)]">
            <div className="w-full h-full aspect-square max-h-full mx-auto bg-bgCanvas rounded-3xl border border-gray-100 overflow-hidden shadow-glass flex items-center justify-center p-12 relative">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <StepVisual index={activeStep} />
                </m.div>
              </AnimatePresence>

              {/* Step indicator dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStep ? 'w-8 bg-brandMint' : 'w-1.5 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
