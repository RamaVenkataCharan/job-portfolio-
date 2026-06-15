import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiEye } from 'react-icons/fi';
import TypeWriter from '../ui/TypeWriter';
import ParticleField from '../ui/ParticleField';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/RamaVenkataCharan', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rama-venkata-charan-ba0a592b9', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:ramavenkatacharan@gmail.com', label: 'Email' },
];

const animatedTexts = [
  'Building Intelligent Systems',
  'Exploring Bioinformatics',
  'Developing AI Solutions',
  'Creating Real-World Impact',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Field Background */}
      <div className="absolute inset-0">
        <ParticleField />
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" style={{ zIndex: -1 }} />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-accent-cyan)] opacity-[0.03] blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.05] blur-[150px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-pink)] opacity-[0.02] blur-[120px] animate-float" style={{ animationDelay: '-5s' }} />

      {/* Giant background MVC text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          className="text-[20vw] font-black text-[var(--color-text-primary)] opacity-[0.015] leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.015, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          MVC
        </motion.span>
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-bg-primary)_100%)]" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <motion.div className="flex-1 text-center lg:text-left" variants={fadeInLeft}>
          {/* Greeting tag */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono mb-6 bg-[var(--color-accent-cyan)]/8 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/15"
            variants={fadeInUp}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-cyan)] animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 leading-[0.95] tracking-tight"
            variants={fadeInUp}
          >
            <span className="text-[var(--color-text-primary)]">Mekala</span>
            <br />
            <span className="gradient-text-bright">Rama Venkata</span>
            <br />
            <span className="text-[var(--color-text-primary)]">Charan</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-sm md:text-base font-mono text-[var(--color-text-muted)] mb-3 tracking-wide"
            variants={fadeInUp}
          >
            AI Developer · Machine Learning Enthusiast · Computer Science Student
          </motion.p>

          {/* Typing Animation */}
          <motion.div
            className="text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] mb-10 h-8 font-medium"
            variants={fadeInUp}
          >
            <TypeWriter texts={animatedTexts} speed={60} deleteSpeed={30} pauseTime={2200} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            variants={fadeInUp}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-blue)] text-[var(--color-bg-primary)] font-bold hover:shadow-lg hover:shadow-[var(--color-accent-cyan)]/25 transition-all duration-300"
            >
              <FiEye size={18} className="group-hover:scale-110 transition-transform" />
              View Portfolio
            </a>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--color-accent-purple)]/40 text-[var(--color-text-primary)] font-bold hover:border-[var(--color-accent-purple)] hover:bg-[var(--color-accent-purple)]/8 transition-all duration-300"
            >
              <FiDownload size={18} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[var(--color-border-glass)] text-[var(--color-text-secondary)] font-bold hover:border-[var(--color-accent-cyan)]/30 hover:text-[var(--color-text-primary)] hover:bg-[var(--color-accent-cyan)]/5 transition-all duration-300"
            >
              <FiMail size={18} />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center lg:justify-start gap-3"
            variants={fadeInUp}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Visual */}
        <motion.div
          className="relative flex-shrink-0"
          variants={fadeInRight}
        >
          {/* Animated spinning ring */}
          <div className="absolute -inset-4 rounded-full animate-spin-slow">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, var(--color-accent-cyan), transparent, var(--color-accent-purple), transparent, var(--color-accent-cyan))',
                opacity: 0.15,
              }}
            />
          </div>

          {/* Decorative rings */}
          <div className="absolute -inset-3 rounded-full border border-[var(--color-accent-cyan)]/10 animate-pulse-glow" />
          <div className="absolute -inset-7 rounded-full border border-[var(--color-accent-purple)]/5" />
          <div className="absolute -inset-11 rounded-full border border-[var(--color-accent-pink)]/3" />

          {/* Image container */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass border-2 border-[var(--color-accent-cyan)]/15">
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-accent-cyan)]/15 via-[var(--color-accent-purple)]/10 to-[var(--color-accent-pink)]/15 flex items-center justify-center">
              <span className="text-6xl md:text-7xl lg:text-8xl font-black gradient-text select-none" style={{ fontFamily: 'var(--font-display)' }}>RC</span>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -right-6 top-8 px-4 py-2 rounded-xl glass text-xs font-mono text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/15"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'{ AI }'}
          </motion.div>
          <motion.div
            className="absolute -left-6 bottom-16 px-4 py-2 rounded-xl glass text-xs font-mono text-[var(--color-accent-purple)] border border-[var(--color-accent-purple)]/15"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            {'< ML />'}
          </motion.div>
          <motion.div
            className="absolute right-4 -bottom-2 px-4 py-2 rounded-xl glass text-xs font-mono text-[var(--color-accent-pink)] border border-[var(--color-accent-pink)]/15"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            {'🧬 Bio'}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono text-[var(--color-text-muted)] tracking-widest uppercase">Scroll</span>
        <FiArrowDown size={18} className="text-[var(--color-text-muted)]" />
      </motion.div>
    </section>
  );
}
