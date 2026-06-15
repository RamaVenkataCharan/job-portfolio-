import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  SiPython, SiJavascript, SiHtml5, SiCss, SiReact, SiAngular,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiMongodb,
  SiTensorflow, SiScikitlearn, SiOpencv, SiOpenai, SiGit, SiGithub,
  SiGooglecolab, SiJupyter,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { BiDna } from 'react-icons/bi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { skillCategories } from '../../data/skills';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  SiPython, SiJavascript, SiHtml5, SiCss, SiReact, SiAngular,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiMongodb,
  SiTensorflow, SiScikitlearn, SiOpencv, SiOpenai, SiGit, SiGithub,
  SiGooglecolab, SiJupyter,
  SiCss3: SiCss,
  SiOpenjdk: FaJava,
  SiVisualstudiocode: SiGit,
  SiC: TbBrandCpp,
  SiMoleculer: BiDna,
  FaDatabase,
};

const categoryEmojis: Record<string, string> = {
  'Programming': '💻',
  'Frontend': '🎨',
  'Backend': '⚙️',
  'Databases': '🗄️',
  'AI & ML': '🧠',
  'Tools': '🛠️',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-[var(--color-bg-primary)] shadow-lg shadow-[var(--color-accent-cyan)]/15'
                : 'glass text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-cyan)]/20'
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.category
                  ? 'bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-[var(--color-bg-primary)] shadow-lg shadow-[var(--color-accent-cyan)]/15'
                  : 'glass text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-cyan)]/20'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredCategories.map((category) => (
                <motion.div key={category.category} variants={staggerItem}>
                  <GlassCard className="p-6 h-full" glow="cyan">
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-[var(--color-accent-cyan)]/10 flex items-center justify-center text-xl">
                        {categoryEmojis[category.category] || '📦'}
                      </span>
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.skills.map((skill) => {
                        const Icon = iconMap[skill.icon];
                        return (
                          <motion.div
                            key={skill.name}
                            className="group flex items-center gap-3 p-3 rounded-xl bg-[var(--color-bg-glass-light)] hover:bg-[var(--color-accent-cyan)]/6 border border-transparent hover:border-[var(--color-accent-cyan)]/10 transition-all duration-300"
                            whileHover={{ x: 6 }}
                          >
                            {Icon && (
                              <Icon
                                size={20}
                                className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cyan)] transition-colors shrink-0 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]"
                              />
                            )}
                            <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors flex-1">
                              {skill.name}
                            </span>
                            {/* Mini progress indicator */}
                            <div className="w-16 h-1.5 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                              <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)]"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
