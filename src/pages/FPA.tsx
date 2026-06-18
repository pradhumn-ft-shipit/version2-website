import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { m } from 'framer-motion';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// FPA members land here from co-marketing. The angle is the Meeting Assistant,
// so we hard-code the interest and tag the lead via companyType + source URL —
// no Cloudflare worker changes needed (it surfaces both fields verbatim).
const FPA_INTEREST = 'meeting-assistant';
const FPA_COMPANY_TYPE = 'FPA Member';
const FPA_TAG_MESSAGE = 'FPA member — interested in the Meeting Assistant discount.';

export default function FPA() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot

  const [submittedName, setSubmittedName] = useState('');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
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
      const res = await fetch(import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          companyType: FPA_COMPANY_TYPE,
          interest: FPA_INTEREST,
          // Always tag the lead as FPA; append the member's own note verbatim if they left one.
          // (Also guarantees a non-empty message, which the worker requires.)
          message: message.trim() ? `${FPA_TAG_MESSAGE}\n\n${message.trim()}` : FPA_TAG_MESSAGE,
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <m.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandMint/15 text-brandDeep border border-brandMint/30 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-brandMint" />
              Exclusive for FPA members
            </m.div>
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-display font-bold text-textPrimary tracking-tight mb-6"
            >
              An exclusive discount on our Meeting Assistant.
            </m.h1>
            <p className="text-lg sm:text-xl text-textSecondary leading-relaxed">
              As an FPA member, you get special pricing on FastTrackr's AI Meeting Assistant —
              automatic notes, summaries, and follow-ups built for financial advisors. Tell us a
              little about yourself and our team will reach out to walk you through the discount.
            </p>
          </div>

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
                  Your note is in. Someone on our team will reach out within one business day to
                  share the FPA member discount and answer any questions.
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
                  <label className="text-sm font-bold text-textPrimary">
                    Anything you'd like us to know? <span className="font-normal text-textTertiary">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all resize-none"
                    placeholder="e.g. how many advisors on your team, what tools you use today..."
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
                    <>Get in touch <Send size={20} /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
