import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from './BrandLogo';

/**
 * Premium Intro Loader
 * Logo reveal animation (ribbon / gold shimmer) for ~2 sec, then smoothly fades out into the website.
 */
export function IntroLoader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-burgundy-950 text-cream-100 select-none overflow-hidden"
          role="status"
          aria-label="Loading MosanTech"
        >
          {/* Subtle Ambient Radial Light */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.18)_0%,rgba(26,5,9,0.98)_75%)] pointer-events-none" />

          {/* Animated Gold Ring Shimmer Container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Outer Concentric Animated Gold Ring */}
            <motion.div
              initial={{ scale: 0.6, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute -inset-4 rounded-full border border-gold-400/30 border-dashed pointer-events-none animate-[spin_18s_linear_infinite]"
            />

            {/* Glowing Aura */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-44 h-44 rounded-full bg-gold-400/15 blur-2xl pointer-events-none"
            />

            {/* Circular Badge with Ribbon MS Monogram */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <BrandLogo size="xl" showWordmark={false} isDarkBackground />
            </motion.div>

            {/* Wordmark and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-center z-10"
            >
              <div className="flex items-baseline justify-center tracking-wider font-serif text-2xl md:text-3xl">
                <span className="font-bold text-cream-100">MOSAN</span>
                <span className="font-semibold text-gold-400 ml-1.5">TECH</span>
              </div>
              <motion.p
                initial={{ opacity: 0, letterSpacing: '0.15em' }}
                animate={{ opacity: 1, letterSpacing: '0.28em' }}
                transition={{ duration: 0.9, delay: 0.9 }}
                className="text-[10px] sm:text-[11px] uppercase font-sans font-medium text-gold-300/80 mt-2"
              >
                We build websites for your business
              </motion.p>
            </motion.div>

            {/* Minimal Gold Progress Line */}
            <div className="w-48 h-[2px] bg-burgundy-900 mt-7 overflow-hidden rounded-full border border-gold-400/20">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
                className="w-full h-full bg-gradient-to-r from-transparent via-gold-300 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroLoader;

