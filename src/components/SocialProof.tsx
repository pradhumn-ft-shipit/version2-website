import React from 'react';
export default function SocialProof() {
  return (
    <section className="py-12 border-b border-gray-100 bg-bgCanvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-textTertiary tracking-wide uppercase mb-8">
          Shaped by advisors and operators at
        </p>
        
        {/* Infinite Marquee */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 group-hover:pause">
            {/* We'll duplicate the logos to create a seamless loop */}
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="text-2xl font-display font-bold text-gray-300">FIDELITY</div>
                <div className="text-2xl font-display font-bold text-gray-300">CHARLES SCHWAB</div>
                <div className="text-2xl font-display font-bold text-gray-300">LPL FINANCIAL</div>
                <div className="text-2xl font-display font-bold text-gray-300">RAYMOND JAMES</div>
                <div className="text-2xl font-display font-bold text-gray-300">PERSHING</div>
              </React.Fragment>
            ))}
          </div>

          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bgCanvas to-transparent" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bgCanvas to-transparent" />
        </div>
      </div>
    </section>
  );
}
