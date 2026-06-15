import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeInLeft } from '../../utils/animations';
import { experiences } from '../../data/experience';

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding relative bg-radial-glow">
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          label="Career"
          title="Experience"
          subtitle="My professional journey in tech"
        />

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-[var(--color-accent-cyan)] via-[var(--color-accent-purple)] to-transparent" />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              variants={fadeInLeft}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] border-4 border-[var(--color-bg-primary)] animate-pulse-glow" />
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <GlassCard className="p-7" glow="purple">
                  {/* Role & Company */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--color-accent-cyan)]/10 flex items-center justify-center">
                      <FiBriefcase className="text-[var(--color-accent-cyan)]" size={18} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)]">
                      {exp.role}
                    </h3>
                  </div>

                  <p className="text-[var(--color-accent-purple)] font-semibold mb-1 text-lg">
                    {exp.company}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-5">
                    <FiCalendar size={14} />
                    <span>{exp.startDate} – {exp.endDate}</span>
                    <span className="px-2 py-0.5 rounded-full text-xs bg-[var(--color-accent-purple)]/10 text-[var(--color-accent-purple)]">{exp.duration}</span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mb-5">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] mt-2 shrink-0" />
                        <span className="text-left">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-lg bg-[var(--color-accent-purple)]/8 text-[var(--color-accent-purple-light)] font-mono border border-[var(--color-accent-purple)]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
