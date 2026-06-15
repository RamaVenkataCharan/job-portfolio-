import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin, FiCheck, FiAlertCircle,
} from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import { staggerContainer, staggerItem, fadeInUp } from '../../utils/animations';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'ramavenkatacharan@gmail.com',
    href: 'mailto:ramavenkatacharan@gmail.com',
    color: 'var(--color-accent-cyan)',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'Rama Venkata Charan',
    href: 'https://www.linkedin.com/in/rama-venkata-charan-ba0a592b9',
    color: 'var(--color-accent-blue)',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'RamaVenkataCharan',
    href: 'https://github.com/RamaVenkataCharan',
    color: 'var(--color-accent-purple)',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'India',
    href: '#',
    color: 'var(--color-accent-pink)',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS integration placeholder
      // Replace with your actual EmailJS credentials:
      // import emailjs from '@emailjs/browser';
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');

      // Simulate sending for demo
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputClasses =
    'w-full px-4 py-3.5 rounded-xl glass bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)]/40 focus:shadow-[0_0_0_1px_rgba(0,229,255,0.15)] transition-all duration-300';

  return (
    <section id="contact" className="section-padding relative bg-radial-glow">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          label="Get In Touch"
          title="Contact"
          subtitle="Have a question or want to work together? Let's connect!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            className="lg:col-span-3"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <GlassCard className="p-8 md:p-10" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] text-[var(--color-bg-primary)] font-bold text-base hover:shadow-xl hover:shadow-[var(--color-accent-cyan)]/20 transition-all duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[var(--color-bg-primary)] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <FiCheck size={18} />
                      Message Sent Successfully!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <FiAlertCircle size={18} />
                      Failed to Send
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <motion.div key={info.label} variants={staggerItem}>
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <GlassCard className="p-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${info.color}10` }}
                      >
                        <info.icon size={20} style={{ color: info.color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.15em] mb-0.5">
                          {info.label}
                        </p>
                        <p className="text-sm text-[var(--color-text-primary)] font-medium truncate">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div variants={staggerItem} className="flex-1">
              <GlassCard className="p-1 h-full min-h-[200px]" hover={false}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6201627563953!2d80.6234!3d16.4419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI2JzMxLjAiTiA4MMKwMzcnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full min-h-[200px] rounded-xl"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
