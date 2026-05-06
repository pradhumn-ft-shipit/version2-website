import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-display font-bold text-textPrimary tracking-tight mb-6"
            >
              Let's talk about your transition process.
            </motion.h1>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Whether you're looking to cut your timeline in half or just want to see how the engine works, we're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-bgCanvas p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold font-display text-textPrimary mb-8">Get in touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brandMint/20 flex items-center justify-center text-brandDeep shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-textPrimary mb-1">Phone</div>
                      <a href="tel:4159370609" className="text-textSecondary hover:text-brandMint transition-colors">
                        (415) 937-0609
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brandMint/20 flex items-center justify-center text-brandDeep shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-textPrimary mb-1">Email</div>
                      <a href="mailto:hello@fasttrackr.ai" className="text-textSecondary hover:text-brandMint transition-colors">
                        hello@fasttrackr.ai
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brandMint/20 flex items-center justify-center text-brandDeep shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-textPrimary mb-1">Headquarters</div>
                      <span className="text-textSecondary">
                        San Francisco, CA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 bg-brandMint/20 text-brandMint rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-textPrimary mb-4">Message Sent!</h3>
                    <p className="text-textSecondary mb-8">
                      We've received your inquiry and will be in touch shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="text-brandDeep font-bold hover:text-brandMint transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-textPrimary">First Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-textPrimary">Last Name</label>
                        <input required type="text" className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-textPrimary">Work Email</label>
                      <input required type="email" className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all" placeholder="john@company.com" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-textPrimary">Company Type</label>
                      <select className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all appearance-none">
                        <option>Transition Consultant</option>
                        <option>Breakaway Advisor</option>
                        <option>RIA</option>
                        <option>Broker-Dealer</option>
                        <option>Custodian</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-textPrimary">How can we help?</label>
                      <textarea required rows={4} className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all resize-none" placeholder="Tell us about your transition volume or workflow challenges..."></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-brandDeep text-white hover:bg-brandMint hover:text-brandDeep px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>Send Message <Send size={20} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
