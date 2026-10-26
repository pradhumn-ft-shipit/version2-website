import { m } from '../lib/motion';
type FeaturedQuote = { quote: string[]; author: string; role?: string; company?: string };

// Featured quote — heads the left column
const featured: FeaturedQuote = {
  quote: [
    "Before FastTrackr, so much of every transition was manual; document generation, DocuSign uploads, and all the steps in between. FastTrackr takes that work off our plate and lets our team focus on the parts of the transition that actually need us. We don't want to do another transition without it."
  ],
  author: "Grier Rubeling",
  role: "Director",
  company: "ROffice"
};

// Second featured quote — heads the right column
const featuredRight: FeaturedQuote = {
  quote: [
    "Transitioning an entire wealth management practice to a new custodian and RIA is an enormous undertaking, particularly when you're dealing with thousands of client accounts, tens of thousands of data points, and an aggressive timeline.",
    "FastTrackr AI played an important role in helping us navigate that process efficiently. The platform helped streamline the organization and management of client information, reduce administrative complexity, and keep the transition moving forward.",
    "We successfully transitioned our business while achieving a remarkable 97.5% client retention rate. Accomplishing that in such a compressed timeframe required tremendous coordination, organization, and execution.",
    "FastTrackr AI provided valuable technology and support throughout the process, allowing our team to spend less time managing administrative challenges and more time focusing on our clients.",
    "I would highly recommend FastTrackr AI to any advisory team preparing for a significant transition."
  ],
  author: "Austin Barranco",
  role: "Partner & Financial Advisor",
  company: "Waverly Advisors"
};

// Emphasis quote — sits under the featured quote, in the left column
const secondary = {
  quote: [
    "FastTrackr saved me a tremendous amount of time and frustration throughout this process. Out of 411 accounts, we only had two NIGOs (neither due to FastTrackr), which is remarkable given the volume and complexity of the project.",
    "Their team is brilliant and the platform did an excellent job organizing and managing a significant amount of data. The efficiency, accuracy, and time savings were extremely valuable to me."
  ],
  author: "Douglas Vowels",
  role: "Managing Partner",
  company: "Intentional Wealth Planning"
};

// Closes out the left column, under the emphasis quote
const leftColumn = {
  quote: "Transitioning was the most stressful month I've had in my career. Working with FastTrackr allowed me to focus on contacting clients and devote very little mental energy to the details around completion of paperwork.",
  author: "Jason Carter, CFA®, MBA",
  role: "Managing Partner | Wealth Advisor",
  company: "Cana Wealth Management"
};

// Sits under the second featured quote, in the right column
const rightColumn = {
  quote: "This is the smoothest transition anyone in our circle has seen or heard about. It aligned with our workflow, and it just worked. We had planned for a month, we finished in two weeks. Amazing tool, very intuitive to use.",
  author: "Nico DeMaio",
  role: "President and Co-founder",
  company: "AdvizorStack"
};

type Quote = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
};

function QuoteCard({ t, delay = 0, from = 20, grow = false }: { t: Quote; delay?: number; from?: number; grow?: boolean }) {
  return (
    <m.div
      initial={{ opacity: 0, x: from }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm${grow ? ' flex-1' : ''}`}
    >
      <p className="text-textSecondary text-lg mb-6 leading-relaxed">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-textSecondary font-bold">
          {t.author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-textPrimary">{t.author}</div>
          {(t.role || t.company) && (
            <div className="text-sm text-textTertiary">{[t.role, t.company].filter(Boolean).join(', ')}</div>
          )}
        </div>
      </div>
    </m.div>
  );
}

function FeaturedCard({ t, from }: { t: FeaturedQuote; from: number }) {
  return (
    <m.div
      initial={{ opacity: 0, x: from }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="glass-panel bg-bgCanvas rounded-3xl p-10 md:p-12 border border-gray-100 flex flex-col"
    >
      <div>
        <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-8">"</span>
        <div className="text-lg md:text-xl text-textPrimary leading-snug relative z-10 space-y-4">
          {t.quote.map((para, i) => (
            <p key={i}>{i === 0 && '"'}{para}{i === t.quote.length - 1 && '"'}</p>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center gap-4">
        <div className="w-14 h-14 flex-shrink-0 rounded-full bg-brandDeep flex items-center justify-center text-brandMint font-display font-bold text-xl">
          {t.author.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-textPrimary text-lg">{t.author}</div>
          {(t.role || t.company) && (
            <div className="text-textSecondary">{[t.role, t.company].filter(Boolean).join(', ')}</div>
          )}
        </div>
      </div>
    </m.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-bgPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-textPrimary tracking-tight mb-4"
          >
            Top-performing advisors and firms use FastTrackr.
          </m.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Left column — featured + emphasis + supporting quote */}
          <div className="flex flex-col gap-6 h-full">
            <FeaturedCard t={featured} from={-20} />

            {/* Emphasis Testimonial */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-bgCanvas rounded-3xl p-8 md:p-10 border border-gray-100"
            >
              <p className="text-lg md:text-xl text-textPrimary leading-snug mb-8">
                {secondary.quote.map((para, i) => (
                  <span key={i}>{i > 0 && <><br /><br /></>}{i === 0 && '"'}{para}{i === secondary.quote.length - 1 && '"'}</span>
                ))}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brandMint/15 flex items-center justify-center text-brandDeep font-display font-bold text-lg">
                  {secondary.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-textPrimary">{secondary.author}</div>
                  <div className="text-textSecondary text-sm">{secondary.role}, {secondary.company}</div>
                </div>
              </div>
            </m.div>

            <QuoteCard t={leftColumn} delay={0.2} from={-20} grow />
          </div>

          {/* Right column — second featured + supporting quote */}
          <div className="flex flex-col gap-6 h-full">
            <FeaturedCard t={featuredRight} from={20} />
            <QuoteCard t={rightColumn} delay={0.1} grow />
          </div>

        </div>

      </div>
    </section>
  );
}
