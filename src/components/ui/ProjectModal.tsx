import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Content */}
        <motion.div
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-strong rounded-3xl"
          initial={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.9, y: 40, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero gradient area */}
          <div className="relative h-48 md:h-56 overflow-hidden rounded-t-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-cyan)]/20 via-[var(--color-accent-purple)]/15 to-[var(--color-accent-pink)]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent" />

            {/* Category icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl opacity-30">
                {project.category === 'ai-ml' ? '🧠' :
                 project.category === 'healthcare' ? '🏥' :
                 project.category === 'web-dev' ? '🌐' : '🛠️'}
              </span>
            </div>

            {/* Status badge */}
            {project.inDevelopment && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-warning)]/20 text-[var(--color-warning)] border border-[var(--color-warning)]/30 backdrop-blur-sm">
                🚧 In Development
              </div>
            )}
            {project.featured && !project.inDevelopment && (
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-accent-cyan)]/20 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/30 backdrop-blur-sm">
                ⭐ Featured
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 transition-all"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-4">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-[var(--color-accent-cyan)]/8 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/15 font-mono hover:bg-[var(--color-accent-cyan)]/15 hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-blue)] text-[var(--color-bg-primary)] font-semibold hover:shadow-lg hover:shadow-[var(--color-accent-cyan)]/20 transition-all duration-300"
              >
                <FiGithub size={18} />
                View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-accent-purple)] text-[var(--color-accent-purple)] font-semibold hover:bg-[var(--color-accent-purple)]/10 transition-all duration-300"
                >
                  <FiExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
