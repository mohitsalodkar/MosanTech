import { useState, useEffect } from 'react';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMediaQuery';

/**
 * Desktop-only custom ambient cursor glow.
 * Disabled on touch screens, mobile devices, and for users who prefer reduced motion.
 */
export function CursorGlow() {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile, touch, or reduced-motion
    if (isMobile || prefersReducedMotion || 'ontouchstart' in window) {
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, prefersReducedMotion, visible]);

  if (isMobile || prefersReducedMotion || !visible) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-40 transition-opacity duration-300"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-400/10 blur-[80px] pointer-events-none" />
    </div>
  );
}

export default CursorGlow;

