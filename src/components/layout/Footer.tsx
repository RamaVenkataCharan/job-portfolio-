import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiReact, SiTypescript } from 'react-icons/si';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/RamaVenkataCharan', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rama-venkata-charan-ba0a592b9', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:ramavenkatacharan@gmail.com', label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border-glass)]">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4 font-mono">{'<MVC />'}</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              AI Developer & Computer Science Student passionate about building
              intelligent solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[var(--color-accent-cyan)] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-5">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] hover:border-[var(--color-accent-cyan)]/30 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border-glass)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {year} Mekala Rama Venkata Charan. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
            Built with <FiHeart className="text-[var(--color-accent-pink)]" size={14} /> using
            <SiReact className="text-[#61dafb]" size={14} />
            <SiTypescript className="text-[#3178c6]" size={14} />
            & AI
          </p>
        </div>
      </div>
    </footer>
  );
}
