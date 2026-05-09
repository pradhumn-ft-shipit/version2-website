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
  { label: 'AI Resources for Advisors', href: '/resources-for-financial-advisors' },
];

const companyLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Demo', href: '/contact' },
];

const podcastLinks = {
  youtube: 'https://www.youtube.com/playlist?list=PL62WoDwasFkKSIN6l1dzcyZUOkCCV4bqV',
  apple: 'https://podcasts.apple.com/us/podcast/advisor-ally/id1814318489',
  spotify: 'https://open.spotify.com/show/2I2qpkqczILncDxf3haRhZ',
};

const socialLinks = {
  linkedin: 'https://www.linkedin.com/company/fasttrackr-ai/',
  twitter: 'https://x.com/Fasttrackr_AI',
  youtube: 'https://www.youtube.com/channel/UCnzPn4iuHJwjTj9bM_1FcbA',
};

const investorUrl = 'https://gai.ventures/';

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
            <Link to="/" className="inline-flex items-center mb-6">
              <img
                src="/logo.png"
                alt="FastTrackr AI"
                width={180}
                height={40}
                className="h-9 w-auto"
              />
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
            <h3 className="font-semibold text-textPrimary mb-1">Advisor Ally Podcast</h3>
            <p className="text-sm text-textSecondary">Tune in to our podcast on advisor transitions, technology, and the future of wealth management.</p>
          </div>
          <div className="flex gap-4">
            <a href={podcastLinks.youtube} target="_blank" rel="noreferrer" className="text-brandDeep font-medium text-sm hover:underline">YouTube</a>
            <a href={podcastLinks.apple} target="_blank" rel="noreferrer" className="text-brandDeep font-medium text-sm hover:underline">Apple Podcasts</a>
            <a href={podcastLinks.spotify} target="_blank" rel="noreferrer" className="text-brandDeep font-medium text-sm hover:underline">Spotify</a>
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
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-brandDeep">LinkedIn</a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-brandDeep">X</a>
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="hover:text-brandDeep">YouTube</a>
            </div>
            <a
              href={investorUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs border border-gray-200 px-2 py-1 rounded hover:border-brandMint hover:text-brandDeep transition-colors"
            >
              Backed by gAI Ventures
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-semibold text-textPrimary mb-4">{title}</h3>
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
