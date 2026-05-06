import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const solutionsLinks = [
  { label: 'Advisor Transitions', href: '/solutions/advisor-transitions' },
  { label: 'Client Onboarding', href: '/solutions/client-onboarding' },
  { label: 'Meeting Assistant', href: '/solutions/meeting-assistant' },
  { label: 'Document Intelligence', href: '/solutions/document-intelligence' },
];

const whoWeServeLinks = [
  { label: 'Transition Consultants', href: '/who-we-serve/transition-consultants' },
  { label: 'Breakaway Advisors', href: '/who-we-serve/breakaway-advisors' },
  { label: 'Acquisitive RIAs', href: '/who-we-serve/acquisitive-rias' },
  { label: 'Independent Broker-Dealers', href: '/who-we-serve/independent-broker-dealers' },
  { label: 'Custodians', href: '/who-we-serve/custodians' },
];

const resourcesLinks = [
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Advisor Ally Podcast', href: '/resources/podcast' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Demo', href: '/contact' },
];

export default function Footer({ hideCTA = false }: { hideCTA?: boolean }) {
  return (
    <footer className="bg-bgPrimary pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">

      {/* Final CTA Strip */}
      {!hideCTA && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="bg-bgTint rounded-3xl p-10 md:p-16 text-center border border-brandMint/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandMint/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brandDeep/5 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-4">
                Let's reimagine how your next transition feels.
              </h2>
              <p className="text-xl text-textSecondary mb-8 max-w-2xl mx-auto">
                A 20-minute walkthrough is enough to show you whether this works for your book.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact"><Button size="lg">Book a Demo</Button></Link>
                <Link to="/contact" className="text-textSecondary hover:text-textPrimary font-medium transition-colors">
                  Prefer to write first? Send us a note
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">

          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-brandDeep flex items-center justify-center">
                <span className="text-brandMint font-display font-bold text-xl">F</span>
              </div>
              <span className="font-display font-bold text-xl text-textPrimary tracking-tight">FastTrackr AI</span>
            </Link>
            <p className="text-sm text-textSecondary italic">
              Reimagining wealth management.<br/>One complex workflow at a time.
            </p>
          </div>

          <FooterColumn title="Solutions" links={solutionsLinks} />
          <FooterColumn title="Who We Serve" links={whoWeServeLinks} />
          <FooterColumn title="Resources" links={resourcesLinks} />
          <FooterColumn title="Company" links={companyLinks} />

        </div>

        {/* Podcast Block */}
        <div className="bg-bgCanvas rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <h4 className="font-semibold text-textPrimary mb-1">Advisor Ally Podcast</h4>
            <p className="text-sm text-textSecondary">Tune in to our podcast on advisor transitions, technology, and the future of wealth management.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/resources/podcast" className="text-brandDeep font-medium text-sm hover:underline">YouTube</Link>
            <Link to="/resources/podcast" className="text-brandDeep font-medium text-sm hover:underline">Apple Podcasts</Link>
            <Link to="/resources/podcast" className="text-brandDeep font-medium text-sm hover:underline">Spotify</Link>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-textSecondary">
            <span>© 2026 FastTrackr Inc. All rights reserved.</span>
            <Link to="/privacy-policy" className="hover:text-textPrimary">Privacy Policy</Link>
            <Link to="/tos" className="hover:text-textPrimary">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-6 text-sm text-textSecondary">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brandDeep">LinkedIn</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-brandDeep">X</a>
            </div>
            <span className="text-xs border border-gray-200 px-2 py-1 rounded">Backed by gAI Ventures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold text-textPrimary mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-textSecondary">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.href} className="hover:text-brandDeep transition-colors">{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
