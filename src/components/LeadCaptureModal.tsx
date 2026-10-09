import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Download, X, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
  /** Modal heading. */
  title: string;
  /** Sub-line under the heading. */
  description?: string;
  /** Static asset revealed/downloaded on success (e.g. a PDF under /downloads/). */
  assetUrl: string;
  /** Suggested filename for the download. */
  assetFilename?: string;
  /** `interest` value passed to the contact worker (defaults to advisor-transitions). */
  interest?: string;
  /** Short identifier for where the lead came from (also sent as the message body). */
  leadLabel: string;
  /** Button label in the idle state. */
  submitLabel?: string;
}

/**
 * Reusable lead-capture popup. Collects name + email, posts to the same Cloudflare
 * contact worker the demo form uses (VITE_CONTACT_API_URL → /api/contact), then
 * reveals a static asset on success — a "soft gate": the lead is captured before
 * the download link is surfaced, but the file itself is a public static URL.
 *
 * Client-only (state + Escape/scroll-lock effects); safe on the prerendered page
 * because it renders nothing until `open` and guards all `document`/`window` use.
 */
export default function LeadCaptureModal({
  open,
  onClose,
  title,
  description,
  assetUrl,
  assetFilename,
  interest = 'advisor-transitions',
  leadLabel,
  submitLabel = 'Get the PDF',
}: LeadCaptureModalProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  // Escape to close + lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const triggerDownload = () => {
    downloadRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (website) return; // honeypot tripped — silently ignore
    setStatus('submitting');
    setErrorMessage('');
    try {
      const res = await fetch(import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          interest,
          kind: 'download',
          assetName: leadLabel,
          message: `Requested the ${leadLabel} download.`,
          website,
          source: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setStatus('success');
      // Reveal is the point of the gate; kick the download once the lead is captured.
      setTimeout(triggerDownload, 150);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  const success = status === 'success';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-brandDeep/60 backdrop-blur-sm"
      />

      {/* hidden anchor used to trigger the download programmatically */}
      <a
        ref={downloadRef}
        href={assetUrl}
        download={assetFilename}
        className="hidden"
        aria-hidden="true"
      >
        download
      </a>

      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-textTertiary hover:text-textPrimary transition-colors"
        >
          <X size={22} />
        </button>

        {success ? (
          <div className="text-center py-2">
            <div className="w-14 h-14 bg-brandMint/20 text-brandDeep rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-display font-bold text-textPrimary mb-2">
              Your checklist is ready{firstName ? `, ${firstName}` : ''}.
            </h3>
            <p className="text-textSecondary text-sm mb-6">
              The download should start automatically. If it doesn&apos;t, use the button below.
            </p>
            <button
              type="button"
              onClick={triggerDownload}
              className="w-full bg-brandDeep text-brandMint hover:bg-brandDeepHover px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              <Download size={18} /> Download the PDF
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-textPrimary tracking-tight">
                {title}
              </h3>
              {description && <p className="text-textSecondary text-sm mt-2">{description}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-textPrimary">First name</label>
                <input
                  ref={firstFieldRef}
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-textPrimary">Last name</label>
                <input
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                  placeholder="Advisor"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-textPrimary">Work email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-bgCanvas border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brandMint/50 focus:border-brandMint transition-all"
                placeholder="john@firm.com"
              />
            </div>

            {/* honeypot */}
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

            {status === 'error' && (
              <p className="text-sm text-red-600" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-brandMint text-brandDeep hover:bg-brandDeepHover hover:text-brandMint px-6 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Download size={18} /> {submitLabel}
                </>
              )}
            </button>

            <p className="text-center text-xs text-textTertiary">
              We&apos;ll email you occasionally about transition tooling. No spam, unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
