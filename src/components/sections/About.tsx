import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiBriefcase, FiAward, FiCpu } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import { staggerContainer, staggerItem, cinematicReveal } from '../../utils/animations';

const stats = [
  { icon: FiCode, value: 7, suffix: '+', label: 'Projects Built', color: 'var(--color-accent-cyan)' },
  { icon: FiBriefcase, value: 1, suffix: '', label: 'Internship', color: 'var(--color-accent-purple)' },
  { icon: FiAward, value: 4, suffix: '+', label: 'Certifications', color: 'var(--color-accent-pink)' },
  { icon: FiCpu, value: 10, suffix: '+', label: 'Technologies', color: 'var(--color-accent-blue)' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative bg-radial-glow">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Introduction"
          title="About Me"
          subtitle="Passionate about leveraging AI to solve real-world problems"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Bio */}
          <motion.div
            ref={ref}
            className="lg:col-span-3"
            variants={cinematicReveal}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <GlassCard className="p-8 md:p-10" hover={false}>
              <div className="space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
                  B.Tech Computer Science Engineering Student
                </h3>

                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  I'm a passionate Computer Science Engineering student with a deep fascination for
                  <span className="text-[var(--color-accent-cyan)] font-medium"> Artificial Intelligence</span>,
                  <span className="text-[var(--color-accent-purple)] font-medium"> Machine Learning</span>,
                  <span className="text-[var(--color-accent-pink)] font-medium"> Bioinformatics</span>, and
                  <span className="text-[var(--color-accent-blue)] font-medium"> Web Development</span>.
                </p>

                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  My journey in tech is driven by the desire to solve real-world problems using
                  cutting-edge technology. From predicting protein structures using deep learning
                  to building AI-powered healthcare systems, I'm constantly exploring the
                  intersection of computer science and scientific discovery.
                </p>

                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  I have hands-on experience building AI applications, full-stack web projects,
                  and data-driven solutions. I believe in continuous learning and contributing
                  to the tech community through open-source projects and knowledge sharing.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {['AI/ML Developer', 'Full-Stack', 'Bioinformatics', 'Open Source', 'Problem Solver'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-accent-cyan)]/8 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/15 hover:bg-[var(--color-accent-cyan)]/15 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <GlassCard className="p-6 text-center h-full" glow={stat.color === 'var(--color-accent-cyan)' ? 'cyan' : 'purple'}>
                  <div
                    className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: `${stat.color}12` }}
                  >
                    <stat.icon size={24} style={{ color: stat.color }} />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
