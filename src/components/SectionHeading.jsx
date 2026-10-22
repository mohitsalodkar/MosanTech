import { motion } from 'framer-motion';

/**
 * Reusable Luxury Section Heading Component
 * Features gold badge, serif headline, thin gold line divider (matching the logo's rings), and description.
 */
export function SectionHeading({
  badge = '',
  title = '',
  titleAccent = '',
  description = '',
  align = 'center',
  isDark = false,
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {/* Small uppercase gold badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gold-400/40 ${
            isDark ? 'bg-gold-400/10 text-gold-200' : 'bg-gold-50 text-gold-700'
          } mb-4 shadow-sm`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-subtle" />
          <span className="text-[11px] font-sans font-semibold tracking-luxury uppercase">
            {badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-subtle" />
        </motion.div>
      )}

      {/* Main Serif Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
            isDark ? 'text-cream-100' : 'text-burgundy-950'
          }`}
        >
          {title}{' '}
          {titleAccent && (
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent italic font-cormorant font-semibold">
              {titleAccent}
            </span>
          )}
        </motion.h2>
      )}

      {/* Thin Gold Line Divider (Echoing circular badge rings) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`flex items-center space-x-3 my-4 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/80" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold-400 bg-gold-300" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/80" />
      </motion.div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className={`font-sans text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-cream-200/80' : 'text-burgundy-900/75'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

export default SectionHeading;

