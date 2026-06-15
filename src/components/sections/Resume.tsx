import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiFileText } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { fadeInUp } from '../../utils/animations';

export default function Resume() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="resume" className="section-padding relative bg-radial-glow">
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          label="Document"
          title="Resume"
          subtitle="Download my resume to learn more about my qualifications"
        />

        <motion.div
          ref={ref}
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <GlassCard className="p-10 text-center" glow="cyan" hover={false}>
            {/* Resume Icon */}
            <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--color-accent-cyan)]/15 to-[var(--color-accent-purple)]/15 flex items-center justify-center mx-auto mb-8">
              <FiFileText size={40} className="text-[var(--color-accent-cyan)]" />
              <div className="absolute inset-0 rounded-2xl bg-[var(--color-accent-cyan)] blur-2xl opacity-10" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-3">
              Mekala Rama Venkata Charan
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-2 text-lg">
              B.Tech Computer Science Engineering
            </p>
            <p className="text-[var(--color-text-muted)] text-sm mb-10 font-mono">
              AI Developer • Machine Learning Enthusiast • Full-Stack Developer
            </p>

            {/* Resume Preview */}
            <div className="w-full h-[500px] rounded-2xl overflow-hidden mb-10 bg-[var(--color-bg-tertiary)] border border-[var(--color-border-glass)]">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              >
                <p className="p-8 text-[var(--color-text-muted)]">
                  Your browser does not support PDF preview.
                  Please download the file instead.
                </p>
              </iframe>
            </div>

            {/* Download Button */}
            <motion.a
              href="/resume.pdf"
              download="Mekala_Rama_Venkata_Charan_Resume.pdf"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-[var(--color-bg-primary)] font-bold text-lg hover:shadow-xl hover:shadow-[var(--color-accent-cyan)]/20 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiDownload size={22} />
              Download Resume
            </motion.a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
