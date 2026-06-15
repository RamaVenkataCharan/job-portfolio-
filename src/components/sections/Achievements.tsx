import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { staggerContainer, staggerItem } from '../../utils/animations';

const achievements = [
  {
    id: 1,
    title: 'AI Internship Completion',
    description: 'Successfully completed AI internship at Skill Vertex, developing real-world ML solutions and building practical AI projects.',
    icon: '🏆',
    color: 'var(--color-accent-cyan)',
  },
  {
    id: 2,
    title: 'Multiple AI Projects Developed',
    description: 'Built and deployed 7+ AI/ML projects including disease prediction, protein structure prediction, and sign language translation.',
    icon: '🚀',
    color: 'var(--color-accent-purple)',
  },
  {
    id: 3,
    title: 'Bioinformatics Research Exploration',
    description: 'Explored the intersection of AI and biology through protein secondary structure prediction using deep learning techniques.',
    icon: '🧬',
    color: 'var(--color-accent-pink)',
  },
  {
    id: 4,
    title: 'Community Service Participation',
    description: 'Actively participated in community service projects, contributing technical skills for social impact initiatives.',
    icon: '🤝',
    color: 'var(--color-accent-blue)',
  },
];

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Milestones"
          title="Achievements"
          subtitle="Milestones and accomplishments along my journey"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {achievements.map((achievement) => (
            <motion.div key={achievement.id} variants={staggerItem}>
              <GlassCard className="p-7 h-full" glow="cyan">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="relative shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                      style={{ background: `${achievement.color}10` }}
                    >
                      {achievement.icon}
                    </div>
                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-15"
                      style={{ background: achievement.color }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
