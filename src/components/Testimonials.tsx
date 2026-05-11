import { m } from 'framer-motion';

const testimonials = [
  {
    quote: "This is the smoothest transition anyone in our circle has seen or heard about. It aligned with our workflow, and it just worked. We had planned for a month, we finished in two weeks. Amazing tool, very intuitive to use.",
    author: "Nico DeMaio",
    role: "President and Co-founder",
    company: "AdvizorStack",
    featured: true
  },
  {
    quote: "FastTrackr AI has been a game-changer for our practice. We're saving 10–15 hours weekly on meeting prep, CRM updates and follow-ups. Our clients love how quickly we follow up and that we never miss important details. It's made us more efficient and our service much better.",
    author: "Christian von Stackelberg",
    role: "Partner",
    company: "Radius Wealth Management"
  },
  {
    quote: "Using FastTrackr AI has been a key enhancement to my client meeting process. It's remarkably easy to use... Most importantly, the quality of the meeting notes is far better than what I would capture manually. The summaries are clear, detailed, and actionable.",
    author: "Gregg D. Jensen",
    role: "CCO & Head of Financial Planning",
    company: "Pathway Partners"
  },
  {
    quote: "After evaluating multiple AI solutions for our practice, we chose FastTrackr for document processing. Its integrated platform has been invaluable. The time savings are impressive, and even more importantly, the quality of our financial planning has improved significantly.",
    author: "Sukesh Pai",
    role: "Founder",
    company: "Trillium Square Advisors"
  }
];

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

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Featured Testimonial */}
          <m.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel bg-bgCanvas rounded-3xl p-10 md:p-12 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <span className="text-8xl text-brandMint/30 leading-none font-display block -mb-8">"</span>
              <p className="text-2xl md:text-3xl font-display font-semibold text-textPrimary leading-snug relative z-10">
                This is the smoothest transition anyone in our circle has seen or heard about. It aligned with our workflow, and it just worked. We had planned for a month, we finished in two weeks. Amazing tool, very intuitive to use.
              </p>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-brandDeep flex items-center justify-center text-brandMint font-display font-bold text-xl">
                N
              </div>
              <div>
                <div className="font-bold text-textPrimary text-lg">Nico DeMaio</div>
                <div className="text-textSecondary">President and Co-founder, AdvizorStack</div>
              </div>
            </div>
          </m.div>

          {/* Other Testimonials Grid */}
          <div className="flex flex-col gap-6">
            {testimonials.slice(1).map((t, i) => (
              <m.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
              >
                <p className="text-textSecondary text-lg mb-6 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-textSecondary font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-textPrimary">{t.author}</div>
                    <div className="text-sm text-textTertiary">{t.role}, {t.company}</div>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
