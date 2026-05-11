import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { m } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

const INTERESTS: Record<string, string> = {
  'advisor-transitions': 'Advisor Transitions',
  'client-onboarding': 'Client Onboarding',
  'document-intelligence': 'Document Intelligence',
  'meeting-assistant': 'Meeting Assistant',
};

const COMPANY_TYPES_BY_KEY: Record<string, string> = {
  'transition-consultant': 'Transition Consultant',
  'breakaway-advisor': 'Breakaway Advisor',
  'ria': 'RIA',
  'broker-dealer': 'Broker-Dealer',
  'custodian': 'Custodian',
  'other': 'Other',
};

const COMPANY_TYPES = Object.values(COMPANY_TYPES_BY_KEY);

const DEFAULT_INTEREST = 'advisor-transitions';
const DEFAULT_COMPANY_TYPE = COMPANY_TYPES[0];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const interestParam = searchParams.get('interest') ?? '';
  const companyParam = searchParams.get('company') ?? '';
  const validInterestParam = INTERESTS[interestParam] ? interestParam : '';
  const companyTypeFromUrl = COMPANY_TYPES_BY_KEY[companyParam] ?? '';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyType, setCompanyType] = useState(companyTypeFromUrl || DEFAULT_COMPANY_TYPE);
  const [interest, setInterest] = useState(validInterestParam || DEFAULT_INTEREST);
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot

  const [submittedName, setSubmittedName] = useState('');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Re-sync the form selects whenever the URL changes (e.g. user already on
  // /contact then clicks Book a Demo / Talk to Us from a different page).
  useEffect(() => {
    setInterest(validInterestParam || DEFAULT_INTEREST);
  }, [validInterestParam]);

  useEffect(() => {
    if (companyTypeFromUrl) {
      setCompanyType(companyTypeFromUrl);
    }
  }, [companyTypeFromUrl]);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setCompanyType(companyTypeFromUrl || DEFAULT_COMPANY_TYPE);
    setInterest(validInterestParam || DEFAULT_INTEREST);
    setMessage('');
    setWebsite('');
    setErrorMessage('');
    setFormStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          companyType,
          interest,
          message,
          website,
          source: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      setSubmittedName(firstName);
      setFormStatus('success');
    } catch (err) {
      setFormStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-bgPrimary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-display font-bold text-textPrimary tracking-tight mb-6"
            >
              Let's talk about your transition process.
            </m.h1>
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              Whether you're looking to cut your timeline in half or just want to see how the engine works, we're here to help.
            </p>
            {validInterestParam && (
              <m.div
                key={validInterestParam}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandMint/15 text-brandDeep border border-brandMint/30 text-sm font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-brandMint" />
                Inquiring about: {INTERESTS[validInterestParam]}
              </m.div>
            )}
          </div>

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Sidebar: email + response-time note */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-bgCanvas p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold font-display text-textPrimary mb-6">Get in touch</h3>

                <div className="flex items-start gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-brandMint/20 flex items-center justify-center text-brandDeep shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-textPrimary mb-1">Email</div>
                    <a href="mailto:contact@fasttrackr.ai" className="text-textSecondary hover:text-brandMint transition-colors">
                      contact@fasttrackr.ai
                    </a>
                  </div>
                </div>

                <p className="text-textSecondary leading-relaxed">
                  Our team will get back to you as soon as possible, usually within one business day. The more context you can share about your workflow, volume, or what you're trying to fix, the better we can tailor the response.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/20">
                {formStatus === 'success' ? (
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 bg-brandMint/20 text-brandDeep rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-textPrimary mb-4">
                      Thanks{submittedName ? `, ${submittedName}` : ''}. We're on it.
                    </h3>
                    <p className="text-textSecondary leading-relaxed max-w-md mx-auto mb-8">
                      Your note is in. Someone on our team will reach out within one business day. If anything else comes to mind in the meantime, send another and we'll fold it into the same thread.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={resetForm}
                        className="bg-brandDeep text-white hover:bg-brandDeepHover px-6 py-3 rounded-xl font-semibold transition-colors"
                      >
                        Send another message
                      </button>
                      <Link
                        to="/"
                        className="text-textSecondary hover:text-textPrimary font-medium px-6 py-3 transition-colors"
                      >
                        Back to home
                      </Link>
                    </div>
                  </m.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-textPrimary">First Name</label>
                        <input
                          required
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-textPrimary">Last Name</label>
                        <input
                          required
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-textPrimary">Work Email</label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-textPrimary">Company Type</label>
                      <select
                        value={companyType}
                        onChange={(e) => setCompanyType(e.target.value)}
                        className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all appearance-none"
                      >
                        {COMPANY_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-textPrimary">Interested in</label>
                      <select
                        name="interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all appearance-none"
                      >
                        {Object.entries(INTERESTS).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-textPrimary">How can we help?</label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all resize-none"
                        placeholder="Tell us about your transition volume or workflow challenges..."
                      />
                    </div>

                    <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                      <label>
                        Website (leave blank)
                        <input
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                        />
                      </label>
                    </div>

                    {formStatus === 'error' && (
                      <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                        {errorMessage || 'Something went wrong. Please try again or email contact@fasttrackr.ai.'}
                      </div>
                    )}

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
