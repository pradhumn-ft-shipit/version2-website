import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageFAQ from '../components/PageFAQ';
import { Button } from '../components/ui/Button';
import { m } from '../lib/motion';

/*
 * PR3-01 (2026-11-04): /security. Facts come from the product grounding doc
 * (§16, §16.1) only. The SOC 2 report is restricted-use: never link, quote or
 * upload it here. The page offers documentation on request instead. Don't add
 * security claims beyond these without the user's OK.
 *
 * When the next report arrives (expected around 2027-05-31), update the period
 * and bridge-letter lines below and in the FAQ.
 */

// PageFAQ renders these and emits the matching FAQPage JSON-LD.
const securityFaqs = [
  {
    q: 'Is FastTrackr SOC 2 compliant?',
    a: 'Yes. FastTrackr holds a SOC 2 Type II report from Assurion Services LLC for December 1, 2025 to May 31, 2026, covering security, confidentiality and availability, with no exceptions noted.',
  },
  {
    q: 'Can we see the SOC 2 report?',
    a: "It's restricted-use, so we don't publish it. Your compliance or security team can request our security documentation.",
  },
  {
    q: 'Do you train AI models on our client data?',
    a: 'No. Client data is used to do the work in your account, not to train models.',
  },
  {
    q: 'Who owns the data?',
    a: 'You and your clients do. FastTrackr processes it on your behalf.',
  },
];

const sections = [
  {
    heading: 'SOC 2 Type II',
    paragraphs: [
      'FastTrackr holds a SOC 2 Type II report from Assurion Services LLC. It covers December 1, 2025 to May 31, 2026 and the Security, Confidentiality and Availability criteria, with no exceptions noted. A bridge letter covers June 1 to October 12, 2026, and the next report is expected around May 31, 2027.',
      'SOC 2 is an audit framework from the AICPA. A Type II report checks that controls worked over a period of months, not just on one day.',
      "The report is restricted-use, so we don't publish it. Your compliance or security team can ask for our security documentation and we'll send it.",
    ],
  },
  {
    heading: 'You own the data',
    paragraphs: [
      'The data belongs to the advisor and the client. We process it on their behalf, under strict controls, to do the work in the account.',
    ],
  },
  {
    heading: "We don't train models on client data",
    paragraphs: ["Client data is used to run your transition. It isn't used to train any model."],
  },
];

export default function Security() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 bg-bgPrimary">
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <img
              src="/logos/soc2-type-ii-112.webp"
              srcSet="/logos/soc2-type-ii-112.webp 2x, /logos/soc2-type-ii-168.webp 3x"
              alt="SOC 2 Type II"
              width={72}
              height={72}
              className="w-[72px] h-[72px] object-contain"
            />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-textPrimary leading-tight">
              Security at FastTrackr
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed">
              Moving a book means handling every client's account details. Here's how we treat that data.
            </p>
          </m.div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20 space-y-14">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-3xl font-display font-bold text-textPrimary tracking-tight mb-5">
                {section.heading}
              </h2>
              <div className="space-y-4 text-lg text-textSecondary leading-relaxed">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-bgTint rounded-3xl p-8 md:p-10 border border-brandMint/20">
            <h2 className="text-3xl font-display font-bold text-textPrimary tracking-tight mb-4">
              Ask for our security documents
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed mb-6">
              Send us a note with your firm name and what your review needs.
            </p>
            <Link to="/contact">
              <Button size="lg">Request security documents</Button>
            </Link>
          </div>
        </section>

        <PageFAQ faqs={securityFaqs} title="Questions" />
      </main>

      <Footer />
    </div>
  );
}
