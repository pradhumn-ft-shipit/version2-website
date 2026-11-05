import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageFAQ from '../components/PageFAQ';
import { Button } from '../components/ui/Button';
import { m } from '../lib/motion';

/*
 * PR3-01 (2026-11-04): /security. PR6 (2026-11-05): per grounding §18, no
 * auditor name, no dates, no bridge letter, no next-report date anywhere on
 * the site (§16.1 stays internal). The SOC 2 report is restricted-use: never
 * link, quote or upload it here; we share it on request.
 *
 * "How we protect data" lists only practices stated in the transitions privacy
 * policy (§8), terms (§5.4) and client privacy notice (§5). Zero data retention
 * with AI model providers and deletion after the move come from the user
 * (grounding §18). Don't add security claims beyond these without the user's OK.
 */

// PageFAQ renders these and emits the matching FAQPage JSON-LD.
const securityFaqs = [
  {
    q: 'Is FastTrackr SOC 2 compliant?',
    a: 'Yes. FastTrackr is SOC 2 Type II compliant. If your team needs more detail, write to us and we will share our detailed report.',
  },
  {
    q: 'How do you protect client data?',
    a: 'Data is encrypted in transit and at rest. Role-based access controls limit who can see client data, and we run regular security assessments and monitoring.',
  },
  {
    q: 'Do you train AI models on our client data?',
    a: "No. Client data is used to run your transition, not to train models. We also have zero data retention with our AI model providers, so they don't keep it.",
  },
  {
    q: 'What happens to client data after the move?',
    a: 'FastTrackr deletes client data within 30 days of the move closing.',
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
      'FastTrackr is SOC 2 Type II compliant.',
      'SOC 2 is an audit framework from the AICPA. A Type II report checks that controls worked over a period of months, not just on one day.',
      "If your compliance or security team needs more detail, write to us and we'll share our detailed report.",
    ],
  },
  {
    heading: 'How we protect data',
    paragraphs: [
      'We follow industry-standard practices for the client data a transition depends on, such as SSNs, account numbers and other financial details.',
      'Data is encrypted in transit and at rest. Role-based access controls limit who can see client data, and we run regular security assessments and monitoring.',
    ],
  },
  {
    heading: 'You own the data',
    paragraphs: [
      'The data belongs to the advisor and the client. We process it on their behalf, under strict controls, to do the work in the account.',
    ],
  },
  {
    heading: 'No training, zero data retention',
    paragraphs: [
      "Client data is used to run your transition. It isn't used to train any model. We have zero data retention with our AI model providers, so they don't keep what we send them.",
    ],
  },
  {
    heading: 'Deleted after the move',
    paragraphs: ['FastTrackr deletes client data within 30 days of the move closing.'],
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
              Ask for our detailed report
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed mb-6">
              Send us a note with your firm name and what your review needs, and we'll share our detailed report.
            </p>
            <Link to="/contact">
              <Button size="lg">Request the report</Button>
            </Link>
          </div>
        </section>

        <PageFAQ faqs={securityFaqs} title="Questions" />
      </main>

      <Footer />
    </div>
  );
}
