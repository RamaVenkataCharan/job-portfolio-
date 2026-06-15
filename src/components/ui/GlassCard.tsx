import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'purple' | 'none';
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'none',
  onClick,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !hover) return;
    const rect = ref.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowClass =
    glow === 'cyan'
      ? 'glow-cyan'
      : glow === 'purple'
        ? 'glow-purple'
        : '';

  const hoverGlowClass =
    glow === 'cyan'
      ? 'glow-hover-cyan'
      : glow === 'purple'
        ? 'glow-hover-purple'
        : '';

  return (
    <motion.div
      ref={ref}
      className={`glass rounded-2xl ${hover ? 'glass-hover' : ''} ${glowClass} ${hoverGlowClass} transition-all duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={hover ? { rotateX, rotateY, transformPerspective: 800 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
