import { useState, useEffect, useCallback } from 'react';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypeWriter({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseTime = 2000,
  className = '',
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length + 1));
      if (displayText.length === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentText.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayText, isDeleting, textIndex, texts, pauseTime]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-[var(--color-accent-cyan)]">|</span>
    </span>
  );
}
