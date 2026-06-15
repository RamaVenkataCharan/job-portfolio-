import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cinematicReveal } from '../../utils/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'center',
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      ref={ref}
      className={`mb-16 md:mb-20 ${alignClass}`}
      variants={cinematicReveal}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Category label */}
      {label && (
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-6 bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/20"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {label}
        </motion.span>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-5 tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>

      {subtitle && (
        <motion.p
          className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-2xl leading-relaxed"
          style={align === 'center' ? { margin: '0 auto' } : undefined}
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Animated gradient line */}
      <motion.div
        className={`mt-6 h-[2px] rounded-full overflow-hidden ${
          align === 'center' ? 'mx-auto' : ''
        }`}
        style={{ width: 80 }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[var(--color-accent-cyan)] via-[var(--color-accent-purple)] to-[var(--color-accent-pink)] animate-gradient" style={{ backgroundSize: '200% 200%' }} />
      </motion.div>
    </motion.div>
  );
}
