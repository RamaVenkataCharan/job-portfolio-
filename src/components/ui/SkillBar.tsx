import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
}

export default function SkillBar({ name, level, color }: SkillBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const barColor = color || 'var(--color-accent-cyan)';

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-[var(--color-text-primary)]">
          {name}
        </span>
        <span className="text-sm text-[var(--color-text-secondary)] font-mono">
          {level}%
        </span>
      </div>
      <div className="w-full h-2 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${barColor}, var(--color-accent-purple))`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {/* Glow effect on the bar tip */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-sm"
            style={{ background: barColor, opacity: 0.6 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
