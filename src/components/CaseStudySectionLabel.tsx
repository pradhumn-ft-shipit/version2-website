// Numbered section heading shared across the case-study pages (01 — Title …),
// extracted from src/pages/CaseStudy.tsx so every study renders it identically.
export default function CaseStudySectionLabel({
  number,
  title,
  onDark = false,
}: {
  number: string;
  title: string;
  onDark?: boolean;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="text-5xl md:text-6xl font-display font-bold leading-none text-brandMint">
        {number}
      </span>
      <span className="hidden sm:block h-px flex-shrink-0 w-8 bg-current opacity-20" />
      <h2
        className={`text-3xl md:text-4xl font-display font-bold tracking-tight ${
          onDark ? 'text-white' : 'text-textPrimary'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
