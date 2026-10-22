import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Top gold scroll progress bar indicating current reading depth.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 origin-left z-50 pointer-events-none shadow-[0_1px_8px_rgba(201,166,107,0.7)]"
    />
  );
}

export default ScrollProgress;

