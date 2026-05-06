import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

const solutionsItems = [
  { label: 'Advisor Transitions', href: '/solutions/advisor-transitions' },
  { label: 'Client Onboarding', href: '/solutions/client-onboarding' },
  { label: 'Meeting Assistant', href: '/solutions/meeting-assistant' },
  { label: 'Document Intelligence', href: '/solutions/document-intelligence' },
];

const whoWeServeItems = [
  { label: 'Transition Consultants', href: '/who-we-serve/transition-consultants' },
  { label: 'Breakaway Advisors', href: '/who-we-serve/breakaway-advisors' },
  { label: 'Acquisitive RIAs', href: '/who-we-serve/acquisitive-rias' },
  { label: 'Independent Broker-Dealers', href: '/who-we-serve/independent-broker-dealers' },
  { label: 'Custodians', href: '/who-we-serve/custodians' },
];

const resourcesItems = [
  { label: 'Blog', href: '/resources/blog' },
  { label: 'Advisor Ally Podcast', href: '/resources/podcast' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-xl shadow-glass border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img src="/logomark.png" alt="FastTrackr AI" className="h-8 w-auto" />
            <span className="font-display font-bold text-xl text-textPrimary tracking-tight">FastTrackr AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center h-full">
            <NavItem label="Solutions" items={solutionsItems} />
            <NavItem label="Who We Serve" items={whoWeServeItems} />
            <NavItem label="Resources" items={resourcesItems} />
            <Link to="/pricing" className="text-textSecondary hover:text-textPrimary font-medium transition-colors">Pricing</Link>
            <Link to="/contact" className="text-textSecondary hover:text-textPrimary font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact"><Button variant="primary">Book a Demo</Button></Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-textSecondary hover:text-textPrimary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <MobileSection
                label="Solutions"
                items={solutionsItems}
                isOpen={mobileSubmenu === 'Solutions'}
                onToggle={() => setMobileSubmenu(mobileSubmenu === 'Solutions' ? null : 'Solutions')}
                onNavigate={() => setMobileMenuOpen(false)}
              />
              <MobileSection
                label="Who We Serve"
                items={whoWeServeItems}
                isOpen={mobileSubmenu === 'Who We Serve'}
                onToggle={() => setMobileSubmenu(mobileSubmenu === 'Who We Serve' ? null : 'Who We Serve')}
                onNavigate={() => setMobileMenuOpen(false)}
              />
              <MobileSection
                label="Resources"
                items={resourcesItems}
                isOpen={mobileSubmenu === 'Resources'}
                onToggle={() => setMobileSubmenu(mobileSubmenu === 'Resources' ? null : 'Resources')}
                onNavigate={() => setMobileMenuOpen(false)}
              />
              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-textSecondary"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-textSecondary"
              >
                Contact
              </Link>
              <div className="pt-4 px-3">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full" variant="primary">Book a Demo</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ label, items }: { label: string, items?: { label: string, href: string }[] }) {
  return (
    <div className="relative group cursor-pointer flex items-center h-full">
      <div className="flex items-center gap-1 text-textSecondary group-hover:text-textPrimary font-medium transition-colors py-8">
        {label}
        {items && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
      </div>

      {items && (
        <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="block px-4 py-3 text-sm text-textSecondary hover:text-brandDeep hover:bg-bgCanvas rounded-lg font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSection({
  label,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-textSecondary hover:bg-gray-50 rounded-lg"
      >
        <span>{label}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-6 py-1 space-y-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={onNavigate}
                  className="block px-3 py-2 text-sm text-textSecondary hover:text-brandDeep hover:bg-bgCanvas rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
