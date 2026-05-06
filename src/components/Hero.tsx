import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { AnimatedText } from './ui/AnimatedText';
import { ArrowDown, Activity } from 'lucide-react';

export default function Hero() {
  const [count, setCount] = useState(247);

  useEffect(() => {
    // Simulate live incrementing counter
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount(c => c + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Stunning Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bgPrimary" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Glow Effects */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brandMint/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brandDeep/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <AnimatedText 
              text="Advisor transitions, finally built right."
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-textPrimary leading-[1.1] tracking-tight mb-6"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg sm:text-xl text-textSecondary max-w-2xl leading-relaxed mb-10"
            >
              Move advisor books in weeks, not months. Purpose-built for advisor transitions and shaped by consultants, operators, and RIA founders who move billions in client assets every year.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-6 mb-16"
            >
              <Link to="/contact">
                <Button size="lg" className="group">
                  Book a Demo
                  <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </Button>
              </Link>

              <a href="#how-it-works" className="group flex items-center text-textPrimary font-medium hover:text-brandDeep transition-colors">
                See how it works
                <span className="ml-2 text-brandMint group-hover:translate-y-1 transition-transform">↓</span>
              </a>
            </motion.div>

            {/* Live Activity Strip */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="w-full max-w-xl border-y border-gray-200 py-3 flex items-center gap-3 text-sm text-textTertiary"
            >
              <Activity className="w-4 h-4 text-brandMint animate-pulse" />
              <span>Live: <strong className="text-textPrimary tabular-nums">{count}</strong> households moving through FastTrackr today</span>
            </motion.div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 hidden lg:block relative" style={{ perspective: '1000px' }}>
            <motion.div
              initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: -5, rotateX: 5, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="relative w-full aspect-[4/5] glass-panel rounded-3xl p-6 border-white/40 shadow-2xl flex flex-col"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Fake UI Header */}
              <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto w-32 h-2 bg-gray-100 rounded-full" />
              </div>

              {/* Fake UI Rows */}
              <div className="space-y-4 flex-1">
                {[
                  { status: 'Completed', color: 'text-green-700', bg: 'bg-green-100', dot: 'bg-green-500' },
                  { status: 'In Progress', color: 'text-blue-700', bg: 'bg-blue-100', dot: 'bg-blue-500' },
                  { status: 'Pending', color: 'text-gray-700', bg: 'bg-gray-100', dot: 'bg-gray-400' },
                  { status: 'Completed', color: 'text-green-700', bg: 'bg-green-100', dot: 'bg-green-500' },
                  { status: 'In Progress', color: 'text-blue-700', bg: 'bg-blue-100', dot: 'bg-blue-500' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/50 border border-white/50 shadow-sm"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-100`}>
                      <span className={`w-3 h-3 rounded-full ${item.dot}`} />
                    </div>
                    <div className="flex-1 font-medium text-sm text-textPrimary">
                      Household {i + 1}
                    </div>
                    <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${item.bg} ${item.color}`}>
                      {item.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
