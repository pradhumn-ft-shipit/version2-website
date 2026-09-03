import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CASE_STUDY_HUB = '/case-study';

// Three studies, each led by a descriptive type-label (mint) so the fragments
// read as distinct stories rather than blurring into one claim.
const studies = [
  { label: 'Advisor team', stat: '$100M repapered, zero NIGO' },
  { label: 'Breakaway advisor', stat: '411 accounts out before noon' },
  { label: 'BD → RIA', stat: '$400M moved in 9 days' },
];

// One pass of the marquee message. Repeated to fill the track so the
// translateX(-50%) loop never reveals a gap on wide screens.
function MarqueeGroup() {
  return (
    <div className="flex items-center shrink-0">
      {studies.map((s) => (
        <span key={s.label} className="flex items-center">
          <span className="px-5 font-medium text-white/90">
            <strong className="font-bold text-brandMint">{s.label}</strong>
            {': '}
            {s.stat}
          </span>
          <span className="text-brandMint/50">&bull;</span>
        </span>
      ))}
      <span className="px-5 inline-flex items-center gap-1.5 font-bold text-white">
        Read our case studies
        <ArrowRight className="w-3.5 h-3.5" />
      </span>
      <span className="text-brandMint/50">&bull;</span>
    </div>
  );
}

export default function AnnouncementRibbon({ scrolled }: { scrolled: boolean }) {
  const { pathname } = useLocation();

  // Don't advertise case studies while the visitor is already reading one
  // (the hub or any individual study page).
  if (pathname === CASE_STUDY_HUB || pathname.startsWith('/case-study/')) return null;

  return (
    <Link
      to={CASE_STUDY_HUB}
      aria-label="Read our case studies: an advisor team repapered $100M with zero NIGO, a breakaway advisor sent 411 accounts before noon, and a BD-to-RIA team moved $400M in nine days"
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
