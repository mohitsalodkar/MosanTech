import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../hooks/useMediaQuery';

/**
 * GPU-friendly Page Transition Wrapper
 * Animates ONLY transform and opacity. Respects prefers-reduced-motion.
 */
export function PageTransition({ children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants = {
    initial: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 },
    animate: prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    exit: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full flex-grow"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;

