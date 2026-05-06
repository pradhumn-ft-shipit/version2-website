import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageCTA from '../../components/PageCTA';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileSearch, PieChart, Download, FileText } from 'lucide-react';

export default function SolDocumentIntelligence() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 bg-bgPrimary">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandMint/10 text-brandDeep font-medium text-sm mb-6 border border-brandMint/20">
                AI Document Intelligence
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight mb-6">
                From piles of client paperwork to instant insights.
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed mb-8">
                Brokerage statements, tax documents, equity comp, bank docs, extracted, organized, and ready for analysis in minutes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="bg-brandDeep text-brandMint hover:bg-brandDeepHover px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-xl">
                    Try for Free
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="bg-white border-2 border-gray-200 text-textPrimary hover:border-brandDeep px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-bgCanvas border border-gray-100 overflow-hidden shadow-glass flex flex-col justify-center items-center p-8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(45,212,160,0.1)_0%,transparent_100%)]" />
              <div className="relative z-10 w-full max-w-sm">
                <div className="relative flex justify-center mb-8">
                  <div className="absolute rotate-[-15deg] w-32 h-40 bg-white shadow-md border border-gray-200 rounded-lg -left-4 top-4" />
                  <div className="absolute rotate-[10deg] w-32 h-40 bg-white shadow-md border border-gray-200 rounded-lg -right-4 top-2" />
                  <div className="relative w-40 h-48 bg-white shadow-xl border border-brandMint/30 rounded-lg flex flex-col items-center justify-center p-4">
                    <FileSearch className="w-12 h-12 text-brandMint mb-4 animate-pulse" />
                    <div className="h-2 w-full bg-gray-100 rounded mb-2" />
                    <div className="h-2 w-3/4 bg-gray-100 rounded" />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                  <span className="font-bold text-textPrimary text-sm">Brokerage_Statement.pdf</span>
                  <span className="text-xs bg-brandMint/20 text-brandMint font-bold px-2 py-1 rounded">DATA EXTRACTED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What it does */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-textPrimary mb-4">What it does</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: 'Extracts data', icon: <FileText />, desc: 'From brokerage, bank, tax, and equity compensation documents' },
                { title: 'Organizes data', icon: <PieChart />, desc: 'Organizes and summarizes information for analysis and reporting' },
                { title: 'Enriches insights', icon: <FileSearch />, desc: 'Enriches extracted insights with current market data automatically' },
                { title: 'Exports anywhere', icon: <Download />, desc: 'Exports to your tools, financial planning software, CRM, Excel' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="w-12 h-12 bg-bgCanvas rounded-2xl flex items-center justify-center text-brandMint mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-textPrimary mb-2">{feature.title}</h3>
                  <p className="text-textSecondary text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-bgCanvas border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-8">"</span>
            <p className="text-xl md:text-2xl font-display font-semibold text-textPrimary leading-snug relative z-10 mb-8">
              After evaluating multiple AI solutions for our practice, we chose FastTrackr for document processing. Its integrated platform has been invaluable. The time savings are impressive, and even more importantly, the quality of our financial planning and client deliverables has improved significantly.
            </p>
            <div className="font-bold text-textPrimary text-lg">Sukesh Pai</div>
            <div className="text-textSecondary">Founder, Trillium Square Advisors</div>
          </div>
        </section>

        <PageCTA headline="Upload your first statement for free today." />

      </main>
      
      <Footer />
    </div>
  );
}
