import { m, type Variants } from 'framer-motion';

export const AnimatedText = ({ text, className = '' }: { text: string; className?: string }) => {
  // Split text into words
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <m.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <m.span variants={child} key={index} className="mr-2 mb-2 inline-block">
          {word}
        </m.span>
      ))}
    </m.div>
  );
};
