import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2400;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsLoading(false), 300);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f]"
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid opacity-20" />

          {/* Animated gradient orbs */}
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#00e5ff] opacity-[0.03] blur-[120px] animate-breathe" />
          <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-[#7c3aed] opacity-[0.04] blur-[100px] animate-breathe" style={{ animationDelay: '-2s' }} />

          {/* Logo Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Spinning conic gradient ring */}
            <motion.div
              className="absolute -inset-4 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #00e5ff, #7c3aed, #ec4899, transparent, #00e5ff)',
                filter: 'blur(16px)',
                opacity: 0.3,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />

            {/* Outer pulse ring */}
            <div className="absolute -inset-6 rounded-full border border-[#00e5ff]/10 animate-pulse-glow" />
            <div className="absolute -inset-10 rounded-full border border-[#7c3aed]/5" />

            {/* Main logo circle */}
            <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(13, 13, 26, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* MVC Letters */}
              <div className="flex gap-0.5">
                {['M', 'V', 'C'].map((letter, i) => (
                  <motion.span
                    key={letter}
                    className="text-3xl font-black gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.15,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Name reveal */}
          <motion.p
            className="mt-10 text-sm font-mono text-[#94a3b8] tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Initializing Portfolio
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-6 w-56 h-[2px] rounded-full bg-[#141428] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress * 100}%`,
                background: 'linear-gradient(90deg, #00e5ff, #7c3aed, #ec4899)',
              }}
            />
          </motion.div>

          {/* Progress percentage */}
          <motion.span
            className="mt-3 text-xs font-mono text-[#64748b]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {Math.round(progress * 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
