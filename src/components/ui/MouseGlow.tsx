import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = -500;
    let y = -500;
    let targetX = -500;
    let targetY = -500;
    let animFrame: number;

    const handleMouse = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouse);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}
