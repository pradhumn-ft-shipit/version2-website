import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PageCTA({ headline, ctaText = "Book a Demo", link = "/contact" }: { headline: string, ctaText?: string, link?: string }) {
  return (
    <section className="py-24 bg-bgPrimary relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brandDeep rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Background graphics */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brandMint/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brandMint/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-10 max-w-3xl mx-auto leading-tight">
              {headline}
            </h2>
            <Link to={link}>
              <button className="bg-brandMint text-brandDeep hover:bg-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-[0_0_20px_rgba(45,212,160,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                {ctaText}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
