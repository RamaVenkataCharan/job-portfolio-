import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import AnimatedCounter from '../ui/AnimatedCounter';
import { useGitHub } from '../../hooks/useGitHub';
import { staggerContainer, staggerItem } from '../../utils/animations';

const GITHUB_USERNAME = 'RamaVenkataCharan';

export default function GitHubStats() {
  const { stats, loading, error } = useGitHub();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Open Source"
          title="GitHub Analytics"
          subtitle="My open-source contributions and coding activity"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-2 border-[var(--color-accent-cyan)] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-muted)]">Unable to load GitHub data. Please try again later.</p>
            </div>
          ) : (
            <>
              {/* Stats Cards */}
              <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10" variants={staggerItem}>
                <GlassCard className="p-6 text-center" glow="cyan">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-cyan)]/10 flex items-center justify-center mx-auto mb-3">
                    <FiGithub className="text-[var(--color-accent-cyan)]" size={22} />
                  </div>
                  <div className="text-3xl font-extrabold text-[var(--color-text-primary)]">
                    <AnimatedCounter target={stats?.publicRepos || 0} />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">Repositories</p>
                </GlassCard>

                <GlassCard className="p-6 text-center" glow="purple">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-purple)]/10 flex items-center justify-center mx-auto mb-3">
                    <FiStar className="text-[var(--color-accent-purple)]" size={22} />
                  </div>
                  <div className="text-3xl font-extrabold text-[var(--color-text-primary)]">
                    <AnimatedCounter target={stats?.totalStars || 0} />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">Total Stars</p>
                </GlassCard>

                <GlassCard className="p-6 text-center" glow="cyan">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-cyan)]/10 flex items-center justify-center mx-auto mb-3">
                    <FiGitBranch className="text-[var(--color-accent-cyan)]" size={22} />
                  </div>
                  <div className="text-3xl font-extrabold text-[var(--color-text-primary)]">
                    <AnimatedCounter target={stats?.followers || 0} />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">Followers</p>
                </GlassCard>

                <GlassCard className="p-6 text-center" glow="purple">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-purple)]/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">🔥</span>
                  </div>
                  <div className="text-3xl font-extrabold text-[var(--color-text-primary)]">
                    <AnimatedCounter target={stats?.following || 0} />
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">Following</p>
                </GlassCard>
              </motion.div>

              {/* Language Breakdown */}
              {stats?.topLanguages && stats.topLanguages.length > 0 && (
                <motion.div variants={staggerItem} className="mb-10">
                  <GlassCard className="p-8">
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-6">
                      Top Languages
                    </h3>
                    <div className="space-y-5">
                      {stats.topLanguages.map((lang) => (
                        <div key={lang.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-[var(--color-text-primary)]">
                              {lang.name}
                            </span>
                            <span className="text-sm text-[var(--color-text-secondary)] font-mono">
                              {lang.percentage}%
                            </span>
                          </div>
                          <div className="w-full h-2.5 rounded-full bg-[var(--color-bg-tertiary)] overflow-hidden">
                            <motion.div
                              className="h-full rounded-full relative"
                              style={{ backgroundColor: lang.color }}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${lang.percentage}%` } : { width: 0 }}
                              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            >
                              <div
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-sm"
                                style={{ backgroundColor: lang.color, opacity: 0.5 }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              )}

              {/* GitHub Stats Cards (Embedded) */}
              <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <GlassCard className="p-4 flex items-center justify-center min-h-[180px]">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=00e5ff&icon_color=7c3aed&text_color=94a3b8`}
                    alt="GitHub Stats"
                    className="w-full max-w-md"
                    loading="lazy"
                  />
                </GlassCard>
                <GlassCard className="p-4 flex items-center justify-center min-h-[180px]">
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=00000000&ring=00e5ff&fire=7c3aed&currStreakLabel=00e5ff`}
                    alt="GitHub Streak"
                    className="w-full max-w-md"
                    loading="lazy"
                  />
                </GlassCard>
              </motion.div>

              {/* Contribution Graph */}
              <motion.div variants={staggerItem}>
                <GlassCard className="p-4 flex items-center justify-center overflow-x-auto">
                  <img
                    src={`https://ghchart.rshah.org/00e5ff/${GITHUB_USERNAME}`}
                    alt="GitHub Contribution Graph"
                    className="w-full max-w-3xl"
                    loading="lazy"
                  />
                </GlassCard>
              </motion.div>

              {/* View Profile Link */}
              <motion.div variants={staggerItem} className="text-center mt-10">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl glass text-[var(--color-accent-cyan)] font-bold hover:bg-[var(--color-accent-cyan)]/8 hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300"
                >
                  <FiGithub size={18} />
                  View Full Profile
                  <FiExternalLink size={14} />
                </a>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
