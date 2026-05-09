import React from 'react';

const logos = [
  { src: '/logos/fidelity.webp', alt: 'Fidelity Investments' },
  { src: '/logos/charles-schwab.svg', alt: 'Charles Schwab' },
  { src: '/logos/lpl-financial.svg', alt: 'LPL Financial' },
  { src: '/logos/edward-jones.png', alt: 'Edward Jones' },
  { src: '/logos/cetera.png', alt: 'Cetera Financial Group' },
  { src: '/logos/newedge-advisors.jpg', alt: 'NewEdge Advisors' },
  { src: '/logos/advizorstack.svg', alt: 'Advizorstack' },
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
                    loading="lazy"
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
