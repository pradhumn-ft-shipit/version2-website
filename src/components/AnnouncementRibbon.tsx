import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CASE_STUDY_PATH = '/case-study/advisor-transition';

// One pass of the marquee message. Repeated to fill the track so the
// translateX(-50%) loop never reveals a gap on wide screens.
function MarqueeGroup() {
  return (
    <div className="flex items-center shrink-0">
      <span className="px-5 font-medium text-white/90">
        Advisor team transitioned{' '}
        <strong className="font-bold text-brandMint">70% of their book in two weeks</strong>
      </span>
      <span className="text-brandMint/50">&bull;</span>
      <span className="px-5 font-medium text-white/90">
        <strong className="font-bold text-brandMint">$100M</strong> in assets moved with zero NIGO
      </span>
      <span className="text-brandMint/50">&bull;</span>
      <span className="px-5 inline-flex items-center gap-1.5 font-bold text-white">
        Read case study
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
      <span className="text-brandMint/50">&bull;</span>
    </div>
  );
}

export default function AnnouncementRibbon({ scrolled }: { scrolled: boolean }) {
  const { pathname } = useLocation();

  // Don't advertise the page the visitor is already on.
  if (pathname === CASE_STUDY_PATH) return null;

  return (
    <Link
      to={CASE_STUDY_PATH}
      aria-label="Read the advisor transition case study: how one team transitioned 70% of their book and moved $100M in two weeks"
      className={`group hidden md:flex items-center overflow-hidden bg-brandDeep hover:bg-brandDeepHover transition-all duration-300 ${
        scrolled ? 'h-7 text-xs' : 'h-10 text-sm'
      }`}
    >
      <div
        aria-hidden="true"
        className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center shrink-0">
            {[0, 1, 2, 3].map((i) => (
              <MarqueeGroup key={i} />
            ))}
          </div>
        ))}
      </div>
    </Link>
  );
}
