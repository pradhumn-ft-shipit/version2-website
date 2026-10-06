import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarClock,
  Download,
  FileText,
  Mail,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  CircleAlert,
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageFAQ from '../../components/PageFAQ';
import LeadCaptureModal from '../../components/LeadCaptureModal';
import {
  ACTION_PLAN,
  CUSTODIANS,
  DEADLINE_ISO,
  FAQS,
  HEADLINE_STATS,
  KNOWN_UNKNOWNS,
  PAPERWORK,
  PATHS,
  PERSONAS,
  REPORT_PDF,
  SEGMENTS,
  SOURCES,
  TAKEAWAYS,
} from './fidelity100m/data';
import {
  BackupCustodianChart,
  CohortChart,
  DeadlineTimeline,
  DestinationsChart,
  DistanceBands,
  DocsPerAccountChart,
  JordanGantt,
  JordanPathsChart,
  FidelityShareWaffle,
  MoveTypeChart,
  PaperworkBreakdown,
  ScenariosChart,
  StateTileMap,
} from './fidelity100m/charts';

/*
 * "The $100M Line" — FastTrackr Research report on Fidelity's $100M custody
 * minimum, rebuilt as a web page from the Edition 2.1 PDF
 * (reports/research/versions/v2.1_2026-10-05). The full text and every chart is
 * real, indexable on-page content; the report PDF is soft-gated
 * behind LeadCaptureModal (files in /downloads/, kept out of the index by robots.txt).
 */

const CHAPTERS = [
  { id: 'the-letter', label: 'The letter' },
  { id: 'who-is-affected', label: 'Who is affected' },
  { id: 'two-problems', label: 'Two problems' },
  { id: 'easy-or-hard', label: 'Easy vs hard move' },
  { id: 'where-the-money-goes', label: 'Where the money goes' },
  { id: 'custodians', label: 'Custodians' },
  { id: 'paperwork', label: 'The paperwork wall' },
  { id: 'four-paths', label: 'Four paths' },
  { id: 'what-to-do', label: 'What to do' },
] as const;

type Asset = 'report' | null;

export default function Fidelity100MReport() {
  const [asset, setAsset] = useState<Asset>(null);
  const openReport = () => setAsset('report');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-bgPrimary">
        <Hero onDownload={openReport} />
        <ChapterBar onDownload={openReport} />

        <ShortVersion />

        <Chapter
          id="the-letter"
          n={1}
          kicker="The letter"
          title="Fidelity set a firm date but left the edges open"
          dek="The rule is simple. Several of the details that matter most are not."
        >
          <Prose>
            <p>
              Letters began reaching advisory firms around October 1, 2026. Firms that custody with Fidelity must hold
              at least $100M in client assets on the Fidelity platform, or the custody relationship ends after June 30,
              2027. Trade press quoting the letter reports that “only assets held at Fidelity will be counted.”
              <Cite n={1} /> A firm’s total assets under management do not help.
            </p>
            <p>
              Fidelity called it a matter of consistency. It already asked new firms for $100M. A spokesperson said it
              is “now extending that criteria to existing custody clients.”
              <Cite n={2} /> We found no Fidelity press release, FAQ or list of exceptions as of October 5.
            </p>
            <p>
              That is unusual. Custodians have usually priced small firms out with fees rather than ended the
              relationship. Fidelity itself widened a small-firm platform fee in 2013. Raymond James raised its minimum
              for new firms in 2009 but kept existing ones.
              <Cite n={6} />
              <Cite n={7} />
            </p>
          </Prose>
          <DeadlineTimeline />
          <Prose>
            <p>
              The calendar is tight. From October 5 there are 268 days left, and the annual Form ADV update is due March
              31 for most firms, in the middle of tax season.
            </p>
          </Prose>
          <KnownUnknowns />
        </Chapter>

        <Chapter
          id="who-is-affected"
          n={2}
          kicker="Who is affected"
          title="Nearly half of Fidelity’s small-firm users are below the line"
          dek="1,087 firms and $40.5B, spread across almost every state."
          tint
        >
          <Prose>
            <p>
              We started with every registered adviser, about 33,000 firms, and kept those that serve individual
              clients, report a custodian and manage under $1B. That left 16,332 firms. Of those, 2,286 use Fidelity,
              and 1,087 hold less than $100M there. Together they keep $40.5B at Fidelity.
            </p>
          </Prose>
          <Prose>
            <p>
              Most firms are far from the line, but most of the money is close to it. 483 firms hold under $25M at
              Fidelity, yet together they hold less than a tenth of the dollars. At the other end, 192 firms sit within
              $25M of the line and hold 42% of the money. For some of them, moving other assets in could clear the bar.
            </p>
          </Prose>
          <Pair>
            <FidelityShareWaffle />
            <DistanceBands />
          </Pair>
          <Prose>
            <p>
              The problem is spread out. California has 132 affected firms, Texas 108, Florida 91, New York 68 and
              Massachusetts 53. No single city has more than 18. Few local markets will feel a wave; nearly every state
              will feel something.
            </p>
          </Prose>
          <StateTileMap />
          <Callout title="Why 1,087 is a floor">
            <p>
              Form ADV lists a custodian only if it holds 10% or more of a firm’s separately managed assets. A small
              Fidelity slice can be invisible, so the true count is likely higher.
            </p>
            <p>
              Our headline covers firms under $1B. A wider scan of 18,601 firms finds 40 larger firms also below the
              line, holding ~$2.0B at Fidelity. With them, the total is 1,127 firms, $42.4B and 395 Fidelity-only firms.
              An outside estimate of ~1,100 affected firms (Winthrop &amp; Co.) is close to ours.
              <Cite n={5} />
            </p>
          </Callout>
        </Chapter>

        <Chapter
          id="two-problems"
          n={3}
          kicker="Who is affected"
          title="The same rule creates two very different problems"
          dek="For small firms it means a full move. For larger ones it means tidying up a side account."
        >
          <Prose>
            <p>
              The affected firms split almost evenly by dollars, but not by shape. 708 small firms (under $100M in
              total) hold $20.8B at Fidelity; the typical one keeps 99% of its custodied assets there. 379 larger firms
              clear $100M in total but not at Fidelity; they hold $19.7B there, yet the typical one keeps only 25% at
              Fidelity.
            </p>
          </Prose>
          <SegmentCompare />
          <Prose>
            <p>Two composite firms show what that gap means in practice.</p>
          </Prose>
          <div className="wide grid md:grid-cols-2 gap-5">
            <PersonaCard persona={PERSONAS.jordan} />
            <PersonaCard persona={PERSONAS.riley} />
          </div>
          <Prose>
            <p>
              Jordan (one person, ~$48M at Fidelity) faces more than twice the paperwork of Riley (five people, ~$49M at
              Fidelity).
            </p>
          </Prose>
        </Chapter>

        <Chapter
          id="easy-or-hard"
          n={4}
          kicker="Who is affected"
          title="Most firms have an easy move; 393 face the hard one"
          dek="A second custodian turns a forced move into a transfer between accounts."
          tint
        >
          <Prose>
            <p>
              A firm’s starting point sets the size of the job. Firms that already use a second custodian can move their
              Fidelity accounts there. Fidelity-only firms need a new custody agreement, new technology links and new
              paperwork for every client before any money moves.
            </p>
            <p>
              694 firms already use a second custodian. 393 are Fidelity-only, and most of those are small: 349 small
              firms holding $15.7B. Only 44 larger firms are Fidelity-only.
            </p>
          </Prose>
          <Prose>
            <p>
              For firms that have a backup, it is mostly Schwab, which holds the most money for 480 of the 694. These
              are real relationships with real money in them: the typical larger firm in this group already holds $135M
              at Schwab, more than twice its Fidelity balance.
            </p>
          </Prose>
          <Pair>
            <MoveTypeChart />
            <BackupCustodianChart />
          </Pair>
          <Callout title="What Jordan weighs" jordan>
            <p>
              Jordan, our composite $50M solo planner, keeps ~$48M at Fidelity and has no second custodian, so the firm
              must pick a new one. <strong>Price comes first.</strong> Schwab, Altruist and Interactive Brokers charge
              no custody fee; SEI’s starts at 0.10%.
              <Cite n={11} /> None of the four has a published minimum that would shut out a $50M firm, while BNY
              Pershing’s $100M minimum matches Fidelity’s.
            </p>
            <p>
              <strong>Interest matters too.</strong> Schwab and Altruist have said in public that they want these firms.
              Interactive Brokers said only that it has no size minimums. <strong>Then there is stability:</strong>{' '}
              Vanguard agreed to buy Altruist in August, the deal is still pending, and Vanguard has not committed to
              pricing after it closes.
              <Cite n={8} />
            </p>
          </Callout>
        </Chapter>

        <InlineDownload onDownload={openReport} />

        <Chapter
          id="where-the-money-goes"
          n={5}
          kicker="Where the money goes"
          title="Most of the money ends up at Schwab"
          dek="Schwab wins mainly by default, because so many firms already use it."
        >
          <Prose>
            <p>
              We modeled where each firm’s Fidelity assets are likely to go. Firms with a second custodian move into it.
              Fidelity-only firms are split across five custodians, in line with where new small firms have gone since
              2024. A small share joins a larger firm instead. All of these figures are estimates.
            </p>
            <p>
              In the base case, ~$38.5B of the $40.5B leaves Fidelity. Schwab receives ~$25.9B directly, about
              two-thirds, and ~$15.5B of that comes from firms that already custody there. Altruist (Vanguard) is a
              clear second at ~$4.3B.
            </p>
          </Prose>
          <DestinationsChart />
          <Prose>
            <p>
              We tested three other scenarios: more firms joining larger firms, an early Savvy route, and larger firms
              moving assets into Fidelity. In every case ~$33–39B leaves Fidelity, 81–95% of the total, and Schwab
              receives ~$24–27B.
            </p>
          </Prose>
          <ScenariosChart />
          <Callout title="What could keep money at Fidelity">
            <ul className="space-y-3">
              <li>
                <strong>Joining a host firm.</strong> Advisors who join a larger firm that uses Fidelity can keep their
                accounts there. In the base case that holds ~$2.0B (Estimated).
              </li>
              <li>
                <strong>Savvy.</strong> Savvy’s new platform runs on Fidelity’s clearing. If Fidelity accepts that route
                and onboarding opens in time, ~$1.6–2.4B could stay (Estimated). Neither condition is confirmed.
              </li>
              <li>
                <strong>The reverse move.</strong> 307 firms, nearly all of them larger firms, hold enough across their
                custodians to clear $100M by consolidating into Fidelity. If some do, ~68 firms stay and ~$10.5B moves
                into Fidelity (Estimated), or about $2.4B if they move only enough to clear the line.
              </li>
            </ul>
          </Callout>
        </Chapter>

        <Chapter
          id="custodians"
          n={6}
          kicker="Where the money goes"
          title="The firms leaving Fidelity have places to go"
          dek="Schwab is the largest. Altruist is growing fastest with new small firms."
          tint
        >
          <Prose>
            <p>
              The custodians that serve small firms best charge no custody fee and publish no minimum. Schwab, Altruist
              and Interactive Brokers fit both, which makes them the natural landing spots for small firms.
            </p>
            <p>
              Schwab is used by two in three retail firms in our study, and its share of new small firms has held steady
              at about 65%. Altruist is smaller, but its share of new small firms more than doubled, from 9.5% to 22.1%.
              Interactive Brokers still reaches about one new small firm in eleven, but its share is falling. Fidelity
              was already losing ground with new small firms before the letter.
            </p>
          </Prose>
          <CustodianTable />
          <CohortChart />
          <Prose>
            <p>
              On October 1, Schwab’s head of advisor services called small firms “the backbone of the independent
              advisory profession.”
              <Cite n={2} /> Altruist’s chief executive said the firm could serve advisors leaving Fidelity.
              <Cite n={4} /> No custodian had published a Fidelity-specific offer, such as fee waivers, by October 5.
            </p>
            <p className="font-semibold text-textPrimary">
              Picking a custodian is the easy part. Moving the clients is where the time goes.
            </p>
          </Prose>
        </Chapter>

        <PaperworkWall />

        <Chapter
          id="four-paths"
          n={8}
          kicker="The four paths"
          title="Four paths, side by side"
          dek="Each path trades paperwork against independence and certainty."
        >
          <Prose>
            <p>
              Every affected firm has the same four options. Which one fits depends on whether the firm already has a
              second custodian and how much it values its independence.
            </p>
          </Prose>
          <div className="wide grid sm:grid-cols-2 gap-5">
            {PATHS.map((p, i) => (
              <PathCard key={p.name} path={p} n={i + 1} />
            ))}
          </div>
          <Prose>
            <p>
              Joining a larger firm is the only sure way to keep Fidelity custody, but it does not avoid paperwork: it
              swaps custodian forms for a full set of new client agreements. Few hosts publish an entry point for small
              firms; Savvy’s advisor recruiting cites a $25M book.
            </p>
            <p>
              Waiting is the riskiest choice. Savvy launched its platform on September 23, cleared and custodied at
              Fidelity, but outside firms can only join a waitlist and pricing is not final.
              <Cite n={9} />
              <Cite n={10} />
            </p>
            <p>
              For Jordan (the $50M solo planner with ~$48M at Fidelity and no second custodian), consolidating is not an
              option. The lightest remaining path, joining a host that keeps Fidelity, still means ~333 documents
              (Estimated).
            </p>
          </Prose>
          <JordanPathsChart />
          <FastTrackrNote>
            Whichever path a firm takes, FastTrackr handles the repapering across custodians and firms, for every
            account in bulk.
          </FastTrackrNote>
        </Chapter>

        <Chapter
          id="what-to-do"
          n={9}
          kicker="What to do"
          title="What to do between now and June"
          dek="A firm that decides by late November can finish signatures by mid-May."
          tint
        >
          <Prose>
            <p>
              These steps are vendor-neutral. The dates are working targets for a small firm, not rules. Only June 30,
              2027 comes from Fidelity.
            </p>
          </Prose>
          <ActionPlan />
          <FastTrackrNote>
            FastTrackr shortens the Prepare and Sign phases. Data is collected once, every form for every account is
            prepared in bulk, and packages go out for e-signature together. A firm can move through repapering in days,
            not months.
          </FastTrackrNote>
        </Chapter>

        <PageFAQ faqs={FAQS} />

        <MoveCTA onDownload={openReport} />

        <Methods onDownload={openReport} />
      </main>

      <LeadCaptureModal
        open={asset === 'report'}
        onClose={() => setAsset(null)}
        title="Download “The $100M Line”"
        description="The full 12-page report on Fidelity’s $100M custody minimum, as a PDF. Tell us where to send it."
        assetUrl={REPORT_PDF}
        assetFilename="FastTrackr-The-100M-Line-Fidelity-Report.pdf"
        interest="advisor-transitions"
        leadLabel="Fidelity $100M Line Report PDF"
        submitLabel="Download the report"
        successTitle="Your report is ready"
      />

      <Footer />
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function useDaysLeft() {
  // Client-only so the prerendered HTML never disagrees with hydration.
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    // Whole calendar days from today to the deadline date (matches the report's
    // "268 days from Oct 5").
    const now = new Date();
    const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const [y, m, d] = DEADLINE_ISO.split('-').map(Number);
    setDays(Math.max(0, Math.round((Date.UTC(y, m - 1, d) - today) / 86_400_000)));
  }, []);
  return days;
}

function Hero({ onDownload }: { onDownload: () => void }) {
  const days = useDaysLeft();
  return (
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-to-b from-bgTint to-bgPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-textTertiary mb-6">
          <Link to="/" className="hover:text-brandDeep">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/resources-for-financial-advisors" className="hover:text-brandDeep">
            Resources
          </Link>
          <span className="mx-2">/</span>
          <span className="text-textSecondary">Research</span>
        </nav>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandMint/15 text-brandDeep border border-brandMint/30 text-sm font-medium mb-6">
              <BookOpen size={16} /> FastTrackr Research · October 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-textPrimary tracking-tight leading-[1.02] mb-6">
              The $100M Line
            </h1>
            <p className="text-xl md:text-2xl text-textSecondary leading-snug max-w-2xl">
              What Fidelity’s custody minimum means for 1,087 advisors, and how the next nine months play out.
            </p>
            <p className="mt-5 text-textSecondary max-w-2xl leading-relaxed">
              On October 1, 2026, Fidelity began telling advisory firms with less than $100M on its platform that their
              custody will end on June 30, 2027. We read the public filings of every retail advisory firm under $1B to
              see who is affected, where the money goes, and what the move takes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onDownload}
                className="inline-flex items-center justify-center gap-2 bg-brandDeep text-white hover:bg-brandDeepHover px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                <Download size={18} /> Download the full report (PDF)
              </button>
              <a
                href="#short-version"
                className="inline-flex items-center justify-center gap-2 text-textPrimary hover:text-brandDeep border border-gray-200 hover:border-brandMint/50 bg-white px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                Read the key findings <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Cover card */}
          <div className="relative bg-brandDeep rounded-[32px] p-7 md:p-10 overflow-hidden shadow-2xl">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brandMint/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="relative">
              <div className="text-brandMint/80 text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Below the line at Fidelity
              </div>
              <div className="font-display font-bold text-brandMint text-7xl md:text-8xl leading-none tabular-nums">
                1,087
              </div>
              <div className="text-white/80 mt-3 text-lg">
                registered investment advisers hold less than $100M at Fidelity.
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {HEADLINE_STATS.slice(1).map((s) => (
                  <div key={s.value} className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
                    <div className="font-display font-bold text-white text-2xl tabular-nums">{s.value}</div>
                    <div className="text-white/60 text-xs mt-1 leading-snug">
                      {s.label}
                      {'estimated' in s && <span className="text-brandMint"> · Estimated</span>}
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl bg-brandMint/10 border border-brandMint/25 p-4">
                  <div className="flex items-center gap-1.5 font-display font-bold text-white text-2xl tabular-nums">
                    <CalendarClock size={20} className="text-brandMint" />
                    {days !== null ? `${days} days` : 'Jun 30, 2027'}
                  </div>
                  <div className="text-white/60 text-xs mt-1 leading-snug">
                    {days !== null ? 'until custody ends on June 30, 2027' : 'when custody ends below the line'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sticky chapter bar ───────────────────────────────────────────────────────

function ChapterBar({ onDownload }: { onDownload: () => void }) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
        else if (window.scrollY < (els[0]?.offsetTop ?? 0) - 200) setActive(null);
      },
      { rootMargin: '-140px 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Keep the active chip visible in the horizontally scrolling bar.
  useEffect(() => {
    if (!active) {
      document.querySelector('nav[aria-label="Report chapters"]')?.scrollTo({ left: 0 });
      return;
    }
    const chip = document.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    const bar = chip?.closest('nav');
    if (!chip || !bar) return;
    const offset = chip.getBoundingClientRect().left - bar.getBoundingClientRect().left;
    bar.scrollLeft += offset - 16;
  }, [active]);

  return (
    <div className="sticky top-20 md:top-[108px] z-40 bg-white/90 backdrop-blur-xl border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
        <nav aria-label="Report chapters" className="flex-1 min-w-0 overflow-x-auto [scrollbar-width:none]">
          <ol className="flex items-center gap-1 py-2.5 whitespace-nowrap">
            {CHAPTERS.map((c, i) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  data-chip={c.id}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${
                    active === c.id
                      ? 'bg-brandDeep text-white'
                      : 'text-textSecondary hover:text-textPrimary hover:bg-bgCanvas'
                  }`}
                >
                  <span className={`text-xs tabular-nums ${active === c.id ? 'text-brandMint' : 'text-textTertiary'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {c.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <button
          type="button"
          onClick={onDownload}
          className="shrink-0 inline-flex items-center gap-1.5 bg-brandMint text-brandDeep hover:bg-brandDeep hover:text-brandMint px-3.5 py-2 rounded-lg text-sm font-bold transition-colors"
        >
          <Download size={16} /> <span className="hidden sm:inline">Get the PDF</span>
          <span className="sm:hidden">PDF</span>
        </button>
      </div>
    </div>
  );
}

// ── The short version ─────────────────────────────────────────────────────────

function ShortVersion() {
  return (
    <section id="short-version" className="py-16 md:py-24 scroll-mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-sm font-semibold uppercase tracking-wider text-brandDeep mb-3">The short version</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-textPrimary tracking-tight">
            A letter, a deadline and 1,087 firms below the line
          </h2>
        </div>
        <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TAKEAWAYS.map((t, i) => (
            <li key={t.title} className="rounded-3xl border border-gray-100 bg-bgCanvas p-6 md:p-7">
              <div className="font-display font-bold text-brandMint text-3xl mb-3 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-bold text-lg text-textPrimary leading-snug mb-2">{t.title}</h3>
              <p className="text-textSecondary leading-relaxed">{t.body}</p>
            </li>
          ))}
          <li className="rounded-3xl bg-brandDeep p-6 md:p-7 flex flex-col justify-between">
            <p className="text-white/80 leading-relaxed">
              The story starts with the letter itself, and with how much of it is still unclear.
            </p>
            <a href="#the-letter" className="mt-6 inline-flex items-center gap-2 text-brandMint font-semibold">
              Start reading <ArrowRight size={16} />
            </a>
          </li>
        </ol>
        <p className="mt-6 text-xs text-textTertiary max-w-3xl">
          Form ADV lists only custodians that hold 10% or more of a firm’s separately managed assets, so some affected
          firms are not visible. Firm and asset counts are observed; flows and paperwork are Estimated. Source: SEC Form
          ADV; FastTrackr analysis.
        </p>
      </div>
    </section>
  );
}

// ── Layout primitives ─────────────────────────────────────────────────────────

function Chapter({
  id,
  n,
  kicker,
  title,
  dek,
  tint,
  children,
}: {
  id: string;
  n: number;
  kicker: string;
  title: string;
  dek: string;
  tint?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-36 ${tint ? 'bg-bgCanvas border-y border-gray-100' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ChapterHeading n={n} kicker={kicker} title={title} dek={dek} />
        </div>
        <Body>{children}</Body>
      </div>
    </section>
  );
}

/**
 * Chapter body: text and callouts keep a readable ~70-character column, while
 * anything marked `.wide` (charts, card grids, tables) breaks out to the full
 * chapter width so the page reads like a website, not a PDF column.
 */
function Body({ children }: { children: ReactNode }) {
  return <div className="space-y-8 [&>*:not(.wide)]:max-w-3xl [&>*:not(.wide)]:mx-auto">{children}</div>;
}

/** Two related charts side by side on large screens. */
function Pair({ children }: { children: ReactNode }) {
  return <div className="wide grid lg:grid-cols-2 gap-6 items-stretch">{children}</div>;
}

function ChapterHeading({
  n,
  kicker,
  title,
  dek,
  dark,
}: {
  n: number;
  kicker: string;
  title: string;
  dek: string;
  dark?: boolean;
}) {
  return (
    <header className="mb-10">
      <div
        className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-wider mb-4 ${dark ? 'text-brandMint' : 'text-brandDeep'}`}
      >
        <span className="tabular-nums">{String(n).padStart(2, '0')}</span>
        <span className={`h-px w-8 ${dark ? 'bg-brandMint/50' : 'bg-brandDeep/30'}`} />
        <span>{kicker}</span>
      </div>
      <h2
        className={`text-3xl md:text-[2.6rem] font-display font-bold tracking-tight leading-[1.1] mb-4 ${dark ? 'text-white' : 'text-textPrimary'}`}
      >
        {title}
      </h2>
      <p className={`text-xl leading-snug ${dark ? 'text-white/70' : 'text-textSecondary'}`}>{dek}</p>
    </header>
  );
}

function Prose({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`space-y-5 text-[1.075rem] leading-[1.75] ${dark ? 'text-white/80' : 'text-textSecondary'}`}>
      {children}
    </div>
  );
}

function Cite({ n }: { n: number }) {
  return (
    <sup className="ml-0.5">
      <a href={`#source-${n}`} className="text-brandDeep font-semibold hover:underline" aria-label={`Source ${n}`}>
        [{n}]
      </a>
    </sup>
  );
}

function Callout({ title, children, jordan }: { title: string; children: ReactNode; jordan?: boolean }) {
  return (
    <aside className={`rounded-3xl p-6 md:p-8 ${jordan ? 'bg-[#F7F0E1]' : 'bg-brandMint/10'}`}>
      {jordan && (
        <span className="inline-block text-[11px] font-semibold uppercase tracking-wider bg-white/70 text-[#7A5B1E] rounded-full px-2.5 py-1 mb-3">
          Composite firm
        </span>
      )}
      <h3 className="font-display font-bold text-xl text-textPrimary mb-3">{title}</h3>
      <div className="space-y-3 text-textSecondary leading-relaxed">{children}</div>
    </aside>
  );
}

function FastTrackrNote({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <aside
      className={`rounded-2xl p-5 md:p-6 border flex gap-4 items-start ${
        dark ? 'border-brandMint/30 bg-brandMint/[0.07]' : 'border-brandDeep/15 bg-white'
      }`}
    >
      <img src="/logomark.png" alt="" className="w-8 h-8 shrink-0 rounded-lg" />
      <p className={`leading-relaxed ${dark ? 'text-white/85' : 'text-textSecondary'}`}>
        <strong className={dark ? 'text-brandMint' : 'text-brandDeep'}>Where FastTrackr helps: </strong>
        {children}
      </p>
    </aside>
  );
}

// ── Chapter-specific blocks ───────────────────────────────────────────────────

function KnownUnknowns() {
  const icon = (status: string) => {
    if (status === 'Confirmed') return <CheckCircle2 size={16} className="text-[#0B7A55]" />;
    if (status === 'Unclear' || status.startsWith('Not')) return <HelpCircle size={16} className="text-amber-600" />;
    return <CircleAlert size={16} className="text-textTertiary" />;
  };
  return (
    <aside className="rounded-3xl bg-bgCanvas border border-gray-100 p-6 md:p-8">
      <h3 className="font-display font-bold text-lg text-textPrimary mb-5">What we know, and what we don’t</h3>
      <ul className="divide-y divide-gray-200/70">
        {KNOWN_UNKNOWNS.map((k) => (
          <li key={k.q} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6">
            <span className="text-textPrimary">{k.q}</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-textSecondary shrink-0">
              {icon(k.status)} {k.status}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-sm text-textSecondary">
        The two open questions at the bottom decide which escape routes are real.
      </p>
    </aside>
  );
}

function SegmentCompare() {
  const share = SEGMENTS[2];
  return (
    <div className="wide grid sm:grid-cols-2 gap-5">
      {(['small', 'larger'] as const).map((seg) => (
        <div key={seg} className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-textTertiary mb-1">
            {seg === 'small' ? 'Small firms' : 'Larger firms'}
          </div>
          <div className="text-sm text-textSecondary mb-5">
            {seg === 'small' ? 'Under $100M in total' : '$100M+ in total, under $100M at Fidelity'}
          </div>
          <dl className="grid grid-cols-2 gap-4 mb-6">
            {SEGMENTS.filter((s) => s !== share).map((s) => (
              <div key={s.metric}>
                <dt className="text-xs text-textTertiary">{s.metric}</dt>
                <dd className="font-display font-bold text-2xl text-textPrimary tabular-nums">{s[seg]}</dd>
              </div>
            ))}
          </dl>
          <div className="text-xs text-textTertiary mb-1.5">Median share of assets at Fidelity</div>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 rounded-full bg-gray-100">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(seg === 'small' ? share.smallPct : share.largerPct) * 100}%`,
                  background: '#0B7A55',
                }}
              />
            </div>
            <span className="font-display font-bold text-xl tabular-nums">{share[seg]}</span>
          </div>
        </div>
      ))}
      <p className="sm:col-span-2 text-xs text-textTertiary">Medians. Source: SEC Form ADV; FastTrackr analysis.</p>
    </div>
  );
}

type Persona = (typeof PERSONAS)[keyof typeof PERSONAS];

function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <article className="rounded-3xl bg-[#F7F0E1] p-6 md:p-7 flex flex-col">
      <span className="self-start text-[11px] font-semibold uppercase tracking-wider bg-white/70 text-[#7A5B1E] rounded-full px-2.5 py-1 mb-4">
        Composite firm
      </span>
      <h3 className="font-display font-bold text-2xl text-textPrimary">{persona.name}</h3>
      <p className="text-textSecondary mb-5">{persona.tagline}</p>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 mb-5">
        {persona.facts.map((f) => (
          <div key={f.k}>
            <dt className="text-xs text-[#7A5B1E]/80">{f.k}</dt>
            <dd className="font-semibold text-textPrimary">
              {f.v}
              {'est' in f && <span className="text-xs font-normal text-textTertiary"> est.</span>}
            </dd>
          </div>
        ))}
      </dl>
      <p className="text-textSecondary leading-relaxed text-[0.95rem]">{persona.body}</p>
      <p className="mt-auto pt-4 text-xs text-textTertiary">
        {persona.builtFrom} Built from Form ADV medians; not a real firm.
      </p>
    </article>
  );
}

function CustodianTable() {
  return (
    <div className="wide rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left min-w-[640px]">
          <thead className="bg-bgCanvas text-xs uppercase tracking-wider text-textTertiary">
            <tr>
              <th className="px-5 py-3 font-semibold">Custodian</th>
              <th className="px-3 py-3 font-semibold">Retail firms using it</th>
              <th className="px-3 py-3 font-semibold">New small firms, ≤2021 → 2024–26</th>
              <th className="px-3 py-3 font-semibold">Published minimum</th>
              <th className="px-5 py-3 font-semibold">Courting small firms</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {CUSTODIANS.map((c) => (
              <tr key={c.name} className={c.name === 'Fidelity' ? 'bg-red-50/40' : ''}>
                <td className="px-5 py-3 font-semibold text-textPrimary">{c.name}</td>
                <td className="px-3 py-3 tabular-nums">{c.share}</td>
                <td className="px-3 py-3 tabular-nums">{c.cohort}</td>
                <td className="px-3 py-3">{c.minimum}</td>
                <td className="px-5 py-3">{c.courting}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="px-5 py-4 text-xs text-textTertiary border-t border-gray-100">
        Altruist alone in the cohort column; Vanguard’s purchase of Altruist is pending. Betterment is shown but not
        modeled: it reprices on January 1, 2027 and has made no recruiting statement. Retail firms using it: share of
        16,332 firms in the study. New small firms: under $100M, by registration year (n = 6,472 and 1,445). Source: SEC
        Form ADV; FastTrackr analysis; custodian pricing pages.
        <Cite n={11} />
      </p>
    </div>
  );
}

function PaperworkWall() {
  const stats = [
    { v: PAPERWORK.households, l: 'households' },
    { v: PAPERWORK.accounts, l: 'accounts' },
    { v: PAPERWORK.documents, l: 'documents', big: true },
    { v: PAPERWORK.conversations, l: 'client conversations' },
  ];
  return (
    <section id="paperwork" className="py-16 md:py-24 bg-brandDeep relative overflow-hidden scroll-mt-36">
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-brandMint/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ChapterHeading
            dark
            n={7}
            kicker="The paperwork wall"
            title="The real bottleneck is paperwork, and it lands in tax season"
            dek="Assets move in days. The forms before the transfer take months."
          />
        </div>
        <Body>
          <Prose dark>
            <p>
              Every move needs two sets of papers: the custodian’s account paperwork and the advisory firm’s own client
              documents. What changes from move to move is how much custodian paperwork is needed. Opening a new
              custodian is the heaviest: about three forms per account, plus a firm agreement.
            </p>
          </Prose>
          <div className="wide grid lg:grid-cols-2 gap-6 items-center">
            <DocsPerAccountChart />
            <div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.l}
                    className={`rounded-2xl p-4 ${s.big ? 'bg-brandMint text-brandDeep' : 'bg-white/[0.06] border border-white/10 text-white'}`}
                  >
                    <div className="font-display font-bold text-2xl md:text-3xl tabular-nums">{s.v}</div>
                    <div className={`text-xs mt-1 ${s.big ? 'text-brandDeep/80' : 'text-white/60'}`}>{s.l}</div>
                  </div>
                ))}
              </div>
              <PaperworkBreakdown />
              <p className="text-xs text-white/50 mt-4">
                Estimated, base case, all 1,087 firms. Document range {PAPERWORK.range}. Source: SEC Form ADV;
                FastTrackr estimates.
              </p>
            </div>
          </div>

          <Prose dark>
            <p>
              The load is lopsided. Small Fidelity-only firms are about a third of affected firms but carry ~48% of the
              documents. They are also the firms least likely to have operations staff.
            </p>
          </Prose>

          <aside className="rounded-3xl bg-[#F7F0E1] p-6 md:p-8">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider bg-white/70 text-[#7A5B1E] rounded-full px-2.5 py-1 mb-3">
              Composite firm
            </span>
            <h3 className="font-display font-bold text-xl text-textPrimary mb-3">Jordan’s nine months</h3>
            <p className="text-textSecondary leading-relaxed">
              Jordan is our composite $50M solo planner: ~$48M at Fidelity, no second custodian, 59 clients in ~51
              households. Working back from June 30, signatures must close by mid-May: about five households a week from
              early March. Before that, Jordan picks a custodian by late November, signs up by mid-December and prepares
              forms in February. That is ~386 documents and ~154 client conversations (Estimated), on top of tax season
              and the March 31 Form ADV update, with no staff.{' '}
              <strong>A January decision removes most of the slack.</strong>
            </p>
          </aside>

          <JordanGantt />

          <FastTrackrNote dark>
            FastTrackr covers the highlighted span above: it collects household and account data once, prepares every
            custodian and firm form in bulk, sends them for e-signature and carries each account through to transfer
            initiation.
          </FastTrackrNote>
        </Body>
      </div>
    </section>
  );
}

function PathCard({ path, n }: { path: (typeof PATHS)[number]; n: number }) {
  const rows = [
    { k: 'Best fit', v: path.fit },
    { k: 'Firms it fits', v: path.firms },
    { k: 'Paperwork', v: path.paperwork },
    { k: 'Keeps Fidelity?', v: path.keepsFidelity },
  ];
  return (
    <article className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 flex flex-col">
      <div className="flex items-baseline gap-3 mb-1">
        <span className="font-display font-bold text-brandMint text-2xl tabular-nums">
          {String(n).padStart(2, '0')}
        </span>
        <h3 className="font-display font-bold text-xl text-textPrimary">{path.name}</h3>
      </div>
      <p className="text-sm text-textTertiary mb-5">{path.sub}</p>
      <dl className="space-y-3 text-sm">
        {rows.map((r) => (
          <div key={r.k}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-textTertiary">{r.k}</dt>
            <dd className="text-textPrimary mt-0.5">{r.v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-auto pt-5">
        <div className="rounded-xl bg-red-50/70 border border-red-100 px-4 py-3 text-sm">
          <span className="font-semibold text-[#9A3412]">Main risk: </span>
          <span className="text-textSecondary">{path.risk}</span>
        </div>
      </div>
    </article>
  );
}

function ActionPlan() {
  return (
    <ol className="wide grid lg:grid-cols-3 gap-5 items-start">
      {ACTION_PLAN.map((phase, i) => (
        <li key={phase.phase} className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-6 py-4 bg-brandDeep text-white">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brandMint text-brandDeep font-display font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="font-display font-bold text-lg">{phase.phase}</span>
            </div>
            <span className="text-sm text-white/70">{phase.window}</span>
          </div>
          <ul className="divide-y divide-gray-100">
            {phase.steps.map((s) => (
              <li
                key={s.text}
                className="px-6 py-4 grid sm:grid-cols-[8.5rem_1fr] lg:grid-cols-1 gap-1 sm:gap-4 lg:gap-1"
              >
                <span className="text-sm font-semibold text-brandDeep tabular-nums">By {s.by}</span>
                <span className="text-textPrimary leading-relaxed">{s.text}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function InlineDownload({ onDownload }: { onDownload: () => void }) {
  return (
    <section className="py-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brandMint/30 bg-brandMint/[0.08] p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-brandDeep text-brandMint flex items-center justify-center shrink-0">
            <FileText size={22} />
          </div>
          <div className="flex-1">
            <div className="font-display font-bold text-lg text-textPrimary">Take the full report with you</div>
            <p className="text-sm text-textSecondary">
              The 12-page PDF, with every chart, ready to share with partners and staff.
            </p>
          </div>
          <button
            type="button"
            onClick={onDownload}
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-brandDeep text-white hover:bg-brandDeepHover px-5 py-3 rounded-xl font-semibold transition-colors"
          >
            <Download size={18} /> Get the PDF
          </button>
        </div>
      </div>
    </section>
  );
}

function MoveCTA({ onDownload }: { onDownload: () => void }) {
  const details = [
    'Current custodian',
    'Likely destination or path',
    'Rough number of accounts',
    'Target completion date',
  ];
  const next = [
    {
      t: 'Share the four details.',
      d: 'FastTrackr maps which custodian and firm forms each account needs for that move.',
    },
    {
      t: 'Collect the data once.',
      d: 'Household and account data comes in from CRM exports, spreadsheets or statements, with a view of only what is still missing.',
    },
    {
      t: 'Get signature-ready paperwork.',
      d: 'Validated packages go to DocuSign in one step, or as filled PDFs for wet signatures.',
    },
  ];
  return (
    <section id="planning-a-move" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brandDeep rounded-[40px] p-7 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-5">
                Planning a move? Tell us.
              </h2>
              <p className="text-white/75 leading-relaxed mb-6">
                A firm like Jordan’s (a $50M solo practice, ~$48M at Fidelity, no second custodian) faces ~386 documents
                (Estimated) and a deadline that runs through tax season. Advisors planning a move can share four things
                with us:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-white">
                    <CheckCircle2 size={18} className="text-brandMint shrink-0" /> {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brandMint text-brandDeep hover:bg-white px-6 py-3.5 rounded-xl font-bold transition-colors"
                >
                  Talk to us about your move <ArrowRight size={18} />
                </Link>
                <a
                  href="mailto:contact@fasttrackr.ai?subject=Fidelity%20%24100M%20%E2%80%93%20planning%20a%20move"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold transition-colors"
                >
                  <Mail size={18} /> contact@fasttrackr.ai
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-3">
                How FastTrackr helps, whichever way a firm moves
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                An advisor may stay at Fidelity by joining another firm, join a firm that custodies elsewhere, or move
                existing accounts to a new custodian. In every case FastTrackr does the repapering: all the custodian
                paperwork and all the firm paperwork, across custodians and firms, for every account in bulk.
              </p>
              <ol className="space-y-4">
                {next.map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-brandMint/15 text-brandMint font-display font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-white">{s.t}</div>
                      <div className="text-sm text-white/65 leading-relaxed">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
              <button
                type="button"
                onClick={onDownload}
                className="mt-8 inline-flex items-center gap-2 text-brandMint font-semibold hover:text-white transition-colors"
              >
                <Download size={16} /> Or download the full report first
              </button>
            </div>
          </div>
          <p className="relative mt-10 pt-6 border-t border-white/10 text-xs text-white/50 italic">
            Disclosure: FastTrackr provides transition and re-papering software to advisers and may benefit from the
            transitions described in this report.
          </p>
        </div>
      </div>
    </section>
  );
}

function Methods({ onDownload }: { onDownload: () => void }) {
  return (
    <section id="methods" className="py-16 md:py-20 bg-bgCanvas border-t border-gray-100 scroll-mt-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary tracking-tight mb-5">
            How we did this
          </h2>
          <div className="space-y-4 text-textSecondary leading-relaxed">
            <p>
              Counts come from our own analysis of public SEC Form ADV data: the SEC roster of September 1, 2026 and the
              state feed of October 1, 2026. The study covers 16,332 retail firms under $1B that report a custodian.
              “Affected” means a firm lists Fidelity in Schedule D, Item 5.K(3), with less than $100M there. Small firms
              manage under $100M in total; larger firms manage $100M or more. Fidelity-only means no other custodian at
              10% or more.
            </p>
            <p>
              Observed counts are exact. Flows and workload are modeled and marked Estimated; they rest on stated
              assumptions about joining rates, households and forms per account. Third-party estimates appear only as
              cross-checks. Jordan and Riley are composites built from Form ADV medians, not real firms. No affected
              firm is named.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onDownload}
              className="inline-flex items-center justify-center gap-2 bg-brandDeep text-white hover:bg-brandDeepHover px-5 py-3 rounded-xl font-semibold transition-colors"
            >
              <Download size={18} /> Full report (PDF)
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-textPrimary tracking-tight mb-5">Sources</h2>
          <ol className="space-y-2.5 text-sm">
            {SOURCES.map((s, i) => (
              <li key={s.url} id={`source-${i + 1}`} className="flex gap-3 scroll-mt-40">
                <span className="text-textTertiary tabular-nums shrink-0">[{i + 1}]</span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-brandDeep hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs text-textTertiary">
            Primary data: SEC Form ADV (SEC monthly roster, 2026-09-01; IAPD state feed, 2026-10-01).
          </p>
        </div>
      </div>
    </section>
  );
}
