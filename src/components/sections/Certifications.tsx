import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward } from 'react-icons/fi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { certifications } from '../../data/certifications';

const iconStyles: Record<string, { icon: string; color: string }> = {
  IoT: { icon: '📡', color: 'var(--color-accent-cyan)' },
  Cloud: { icon: '☁️', color: 'var(--color-accent-blue)' },
  AI: { icon: '🤖', color: 'var(--color-accent-purple)' },
  Internship: { icon: '💼', color: 'var(--color-accent-pink)' },
};

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="section-padding relative bg-radial-glow">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          subtitle="Professional certifications and credentials"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certifications.map((cert) => {
            const style = iconStyles[cert.icon] || { icon: '📜', color: 'var(--color-accent-cyan)' };
            return (
              <motion.div key={cert.id} variants={staggerItem}>
                <GlassCard className="p-7 text-center h-full flex flex-col items-center" glow="purple">
                  {/* Icon */}
                  <div
                    className="w-18 h-18 rounded-2xl flex items-center justify-center text-4xl mb-5 relative"
                    style={{ background: `${style.color}10`, width: '72px', height: '72px' }}
                  >
                    {style.icon}
                    {/* Glow behind icon */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-20"
                      style={{ background: style.color }}
                    />
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-3 leading-tight">
                    {cert.name}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] mb-2">
                    <HiOutlineAcademicCap size={16} />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-[var(--color-text-muted)] mb-5">
                    {cert.date}
                  </p>

                  {/* Badge */}
                  <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ color: style.color, background: `${style.color}10`, border: `1px solid ${style.color}20` }}>
                    <FiAward size={14} />
                    <span>Certified</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
