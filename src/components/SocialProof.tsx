import React from 'react';

const logos: { src: string; alt: string; width: number; height: number }[] = [
  { src: '/logos/fidelity.png', alt: 'Fidelity Investments', width: 65, height: 40 },
  { src: '/logos/charles-schwab.svg', alt: 'Charles Schwab', width: 140, height: 40 },
  { src: '/logos/lpl-financial.svg', alt: 'LPL Financial', width: 120, height: 40 },
  { src: '/logos/edward-jones.png', alt: 'Edward Jones', width: 244, height: 40 },
  { src: '/logos/cetera.png', alt: 'Cetera Financial Group', width: 136, height: 40 },
  { src: '/logos/newedge-advisors.jpg', alt: 'NewEdge Advisors', width: 140, height: 40 },
  { src: '/logos/advizorstack.svg', alt: 'Advizorstack', width: 150, height: 40 },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-b border-gray-100 bg-bgCanvas overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-textTertiary tracking-wide uppercase mb-8">
          Shaped by advisors and operators at
        </p>

        {/* Infinite Marquee */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-[7rem] group-hover:pause">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <img
                    key={`${i}-${logo.alt}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto max-w-none object-contain shrink-0 grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                ))}
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
