import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, UserPlus, Building, Network, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const audiences = [
  {
    href: '/who-we-serve/transition-consultants',
    title: 'Transition Consultants',
    icon: <Briefcase className="w-6 h-6" />,
    description: 'Take on more deals without taking on more admin slog. Your team moves more books with the same headcount.',
  },
  {
    href: '/who-we-serve/breakaway-advisors',
    title: 'Breakaway Advisors',
    icon: <UserPlus className="w-6 h-6" />,
    description: 'Bring your book to your new firm without burning out your team or losing your clients.',
  },
  {
    href: '/who-we-serve/acquisitive-rias',
    title: 'Acquisitive RIAs',
    icon: <Building className="w-6 h-6" />,
    description: 'Protect AUM and accelerate revenue through every M&A integration. Cut weeks out of every deal.',
  },
  {
    href: '/who-we-serve/independent-broker-dealers',
    title: 'Independent Broker-Dealers',
    icon: <Network className="w-6 h-6" />,
    description: 'Win advisor recruits with a transition experience that actually works. Stop losing recruits to the firm with the smoother onboarding.',
  },
  {
    href: '/who-we-serve/custodians',
    title: 'Custodians',
    icon: <Landmark className="w-6 h-6" />,
    description: 'Help your advisors grow faster, acquire better, and onboard onto your platform smoothly. Be the on-ramp for every new RIA and advisory practice.',
  }
];

export default function ICP() {
  return (
    <section className="py-24 bg-bgPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-4"
          >
            Built for every player in the transition.
          </motion.h2>
          <p className="text-lg text-textSecondary">Click through to see what changes for you.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((aud, i) => (
            <Link key={aud.href} to={aud.href}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group h-full bg-white rounded-2xl p-8 border border-gray-100 hover:border-brandMint/40 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brandMint/5 rounded-full blur-[40px] group-hover:bg-brandMint/10 transition-colors" />
                
                <div className="relative z-10 flex-1">
                  <div className="inline-flex items-center justify-center p-3 bg-bgCanvas rounded-xl mb-6 text-brandDeep group-hover:bg-brandDeep group-hover:text-brandMint transition-colors">
                    {aud.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-textPrimary mb-4 group-hover:text-brandDeep transition-colors">
                    {aud.title}
                  </h3>
                  <p className="text-textSecondary leading-relaxed mb-8">
                    {aud.description}
                  </p>
                </div>
                
                <div className="relative z-10 mt-auto flex items-center font-semibold text-brandDeep group-hover:text-brandMint transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
