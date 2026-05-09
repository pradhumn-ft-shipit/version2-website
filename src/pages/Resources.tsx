import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';

type Article = {
  title: string;
  description?: string;
  href: string;
};

type Category = {
  id: string;
  title: string;
  articles: Article[];
};

const categories: Category[] = [
  {
    id: 'ai-in-client-communication-and-notetaking',
    title: 'AI in Client Communication & Notetaking',
    articles: [
      {
        title: 'AI Note-Taking for Financial Advisors: From Meeting Chaos to Clean CRM',
        description: 'Advisors lose 10–11 hours a week to note-taking, follow-ups, and manual CRM updates. This article lays out a better way: AI-powered meeting capture with auto-summaries, tasks, and compliant logs pushed directly into your CRM.',
        href: '/blog/ai-notetaking-for-financial-advisors',
      },
      {
        title: 'Automating Content and Communication For Financial Advisors',
        description: 'One of the most common challenges for advisory firms is figuring out how to scale the service experience without compromising the personal attention that built the business.',
        href: '/blog/automating-content-and-communitcation-for-financial-advisors',
      },
    ],
  },
  {
    id: 'document-processing-and-back-office-automation',
    title: 'Document Processing & Back-Office Automation',
    articles: [
      {
        title: 'How Back-Office Automation Is Transforming Financial Advisory Firms',
        description: 'Advisory firms spend staggering time on non-revenue tasks. This deep dive quantifies the cost and lays out where automation pays off first: onboarding, compliance monitoring, and dynamic billing.',
        href: '/blog/how-back-office-automation-is-transforming-financial-advisory-firms',
      },
      {
        title: 'How AI Document Processing is Transforming Wealth Management',
        description: 'Every relationship begins with documents. This article shows how AI turns unstructured PDFs and scans into structured, accurate data in minutes.',
        href: '/blog/how-ai-document-processing-is-transforming-wealth-management',
      },
      {
        title: 'How Financial Advisors Are Using AI for Document Processing',
        description: 'A practical guide outlining how RIAs deploy AI for extraction, intelligent categorization, enrichment, and client-ready report generation.',
        href: '/blog/how-financial-advisor-are-using-ai-for-document-processing',
      },
    ],
  },
  {
    id: 'ai-for-client-prospecting-and-growth',
    title: 'AI for Client Prospecting & Growth',
    articles: [
      {
        title: 'Marketing & Client Prospecting Using AI: A Blueprint for Scalable Growth',
        description: 'How to use real-time signals, predictive lead scoring, and automated outreach to attract ideal clients.',
        href: '/blog/marketing-and-client-prospecting-using-ai',
      },
      {
        title: 'AI Powered Client Acquisition For RIAs',
        description: 'Practical AI applications for client acquisition and onboarding.',
        href: '/blog/ai-powered-client-acquisition-for-rias',
      },
      {
        title: 'Using Agentic AI to Reclaim Time and Transform Client Relationships',
        description: 'How agentic AI helps advisors focus on relationship building and strategic planning.',
        href: '/blog/using-agentic-ai-to-reclaim-time-and-transform-client-relationships',
      },
      {
        title: 'The Five Pillars of Client Retention Using AI',
        description: 'A framework for improving long-term client retention using AI.',
        href: '/blog/the-five-pillars-of-client-retention-using-ai',
      },
    ],
  },
  {
    id: 'ai-for-compliance-security-and-data-management',
    title: 'AI for Compliance, Security & Data Management',
    articles: [
      {
        title: 'Download the Compliance Checklist to Evaluate AI Tools and Vendors',
        description: 'A detailed 8-point checklist for evaluating AI vendors.',
        href: '/contact',
      },
      {
        title: 'AI Automation, Compliance and the RIA Time Trap',
        description: 'How advisory firms can reclaim two days a week without breaking compliance.',
        href: '/blog/ai-automation-compliance-and-the-ria-time-trap',
      },
      {
        title: 'Data and Compliance for RIAs',
        description: 'A reality check on data management and compliance for modern advisory firms.',
        href: '/blog/how-smart-wealth-management-firms-are-using-data-to-win-clients-stay-compliant-and-scale-profitably',
      },
    ],
  },
  {
    id: 'the-role-of-ai-in-wealth-management-strategy',
    title: 'The Role of AI in Wealth Management Strategy',
    articles: [
      { title: 'AI in Wealth Management: Delivering Superior Client Experiences', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'AI for Financial Advisors: Using AI To Automate, Optimize, and Elevate', href: '/blog/ai-for-financial-advisors-using-ai-to-automate-optimize-and-elevate' },
      { title: 'Financial Planning for the Next Generation', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'Tech and the Transformation of Wealth Planning', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'Why Financial Advice Is More Than Just Money Management', href: '/blog/ai-in-wealth-management-delivering-superior-client-experiences' },
      { title: 'Wealth Management Opportunity, Challenges and Top Use Cases', href: '/blog/wealth-management-opportunity-challenges-and-top-use-cases' },
      { title: "AI For RIA's And Financial Advisors", href: '/blog/wealth-management-opportunity-challenges-and-top-use-cases' },
      { title: 'Beyond the Usual: How RIA Firms Are Reimagining Their Tech Stack', href: '/blog/beyond-the-usual-how-ria-firms-are-reimagining-their-tech-stack-for-efficiency-and-growth' },
      { title: 'Three Big Opportunities for Wealth Advisors (and How AI Helps You Capture Them)', href: '/blog/three-big-opportunities-for-wealth-advisors' },
      { title: 'AI And Technology Guide For The New RIAs: How To Build Your Perfect Tech Stack', href: '/blog/ai-and-technology-guide-for-the-new-rias-how-to-build-your-perfect-tech-stack' },
    ],
  },
  {
    id: 'advisor-trends-behavior-and-industry-commentary',
    title: 'Advisor Trends, Behavior & Industry Commentary',
    articles: [
      { title: '41 Must-Watch Podcasts for Financial Advisors (and How to Make Them Actionable)', href: '/blog/list-of-must-watch-podcasts-for-financial-advisors' },
      { title: 'Advisory 3.0: Tech, Trust, and Tailored Financial Planning', href: '/blog/advisory-3-0-tech-trust-and-tailored-financial-planning' },
      { title: 'Systematizing CRMs to Power Lean Tech for Scalable Growth', href: '/blog/systematizing-crms-to-power-lean-tech-for-scalable-growth' },
      { title: 'Democratizing Financial Advice: How AI Levels the Playing Field', href: '/blog/democratizing-financial-advice-ethan-jung-vineet-mohan-advisor-ally-podcast-10' },
      { title: "A Standout Young Advisor's Journey: Lessons for the Next Generation", href: '/blog/a-standout-young-advisor-s-journey-brittany-brinckerhoff-vineet-mohan-advisor-ally-podcast-08' },
      { title: 'Building an $800M Advisory Firm', href: '/blog/building-a-800m-advisory-firm' },
      { title: 'The Journalist Every Financial Advisor Reads', href: '/blog/the-journalist-every-financial-advisor-reads-oisin-breen-vineet-mohan-advisor-ally-podcast-09' },
      { title: 'The Data Gap In Wealth Management', href: '/blog/the-data-gap-in-wealth-management' },
      { title: 'How 15 Years of Bull Market Euphoria Has Created a Generation of Overconfident Investors', href: '/blog/how-15-years-of-bull-market-euphoria-has-created-a-generation-of-overconfident-investors' },
      { title: 'From Gold Mines To Wealth Management', href: '/blog/from-gold-mines-to-wealth-management' },
      { title: 'From IIT Bombay To Wall Street To Starting an RIA', href: '/blog/from-iit-bombay-to-wall-street-to-starting-an-ria' },
      { title: 'The Evolving Role Of Financial Advisors In The Age Of AI', href: '/blog/the-evolving-role-of-financial-advisors-in-the-age-of-ai' },
      { title: 'Transforming Wealth Management Through Vertical AI: The Story Behind FastTrackr AI', href: '/blog/transforming-wealth-management-through-vertical-ai-fasttrackr-ai-on-gai-ventures-podcast' },
    ],
  },
  {
    id: 'fasttrackr-ai-in-action',
    title: 'FastTrackr AI in Action',
    articles: [
      { title: 'FastTrackr AI Achieves SOC 2 Type II Certification: A Major Milestone in Security & Trust', href: '/blog/fasttrackr-ai-achieves-soc-2-type-ii-certification-a-milestone-in-security-and-trust' },
      { title: 'FastTrackr AI At Wealth Management Edge', href: '/blog/fasttrackr-ai-at-wealth-management-edge' },
    ],
  },
];

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-semibold text-brandMint uppercase tracking-wider mb-4">Resources</div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
              Ultimate AI resource for financial advisors.
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed max-w-3xl mx-auto">
              Resources for financial advisors, RIAs, wealth managers, and planners who want to understand how modern AI tools can simplify their workflows. A resource hub and a roadmap for using AI to future-proof your practice.
            </p>
          </motion.div>
        </section>

        {/* Category nav */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-bgCanvas border border-gray-100 rounded-3xl p-8">
            <div className="text-sm font-semibold text-textTertiary uppercase tracking-wider mb-4">Explore by category</div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="text-textSecondary hover:text-brandDeep font-medium transition-colors flex items-baseline gap-2"
                  >
                    <span className="text-brandMint">→</span>
                    <span>{cat.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          {categories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-32">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-textPrimary tracking-tight">{cat.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.articles.map((article, i) => (
                  <motion.div
                    key={`${cat.id}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i, 5) * 0.05 }}
                  >
                    <Link
                      to={article.href}
                      className="group block h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-brandMint hover:shadow-glass transition-all"
                    >
                      <h3 className="font-display font-bold text-lg text-textPrimary leading-snug mb-3 group-hover:text-brandDeep transition-colors">
                        {article.title}
                      </h3>
                      {article.description && (
                        <p className="text-sm text-textSecondary leading-relaxed mb-4">{article.description}</p>
                      )}
                      <div className="text-sm font-semibold text-brandMint group-hover:text-brandDeep transition-colors">
                        Read more →
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-brandDeep text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to automate your practice?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                FastTrackr AI helps financial advisors automate meeting notes, document processing, CRM updates, and compliance — all from a single secure platform built for wealth professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link to="/contact"><Button size="lg">Book a Demo</Button></Link>
                <a href="https://console.fasttrackr.ai/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white font-medium transition-colors">
                  Try FastTrackr AI for free →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
