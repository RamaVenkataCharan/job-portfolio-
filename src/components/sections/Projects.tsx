import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiSearch } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ProjectModal from '../ui/ProjectModal';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { projects, projectCategories } from '../../data/projects';
import type { Project } from '../../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Featured Work"
          title="Projects"
          subtitle="A showcase of my work in AI, ML, and Web Development"
        />

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-[var(--color-bg-primary)] shadow-lg shadow-[var(--color-accent-cyan)]/15'
                    : 'glass text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl glass bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/40 transition-colors"
            />
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={staggerItem}>
                  <GlassCard
                    className="overflow-hidden group cursor-pointer h-full flex flex-col"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Image / Hero Area */}
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-tertiary)] to-[var(--color-bg-secondary)]" />
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/8 via-transparent to-[var(--color-accent-purple)]/8 flex items-center justify-center">
                        <span className="text-5xl opacity-60 group-hover:scale-125 transition-transform duration-500">
                          {project.category === 'ai-ml' ? '🧠' :
                           project.category === 'healthcare' ? '🏥' :
                           project.category === 'web-dev' ? '🌐' : '🛠️'}
                        </span>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                        <span className="text-sm text-[var(--color-accent-cyan)] font-semibold tracking-wide flex items-center gap-2">
                          <span className="w-6 h-px bg-[var(--color-accent-cyan)]" />
                          View Details
                          <span className="w-6 h-px bg-[var(--color-accent-cyan)]" />
                        </span>
                      </div>

                      {/* Status badge */}
                      {project.inDevelopment && (
                        <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-warning)]/20 text-[var(--color-warning)] border border-[var(--color-warning)]/30 backdrop-blur-sm">
                          🚧 In Development
                        </div>
                      )}
                      {project.featured && !project.inDevelopment && (
                        <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-accent-cyan)]/15 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/25 backdrop-blur-sm">
                          ⭐ Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2 line-clamp-2 group-hover:text-[var(--color-accent-cyan)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-5 line-clamp-3 flex-1 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-md bg-[var(--color-bg-glass-light)] text-[var(--color-text-muted)] font-mono border border-[var(--color-border-glass)]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 text-xs rounded-md bg-[var(--color-bg-glass-light)] text-[var(--color-text-muted)]">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 mt-auto">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub size={16} /> Code
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-purple)] transition-colors font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink size={16} /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[var(--color-text-muted)] text-lg">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
