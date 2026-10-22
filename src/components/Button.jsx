import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

/**
 * Luxury MosanTech Button Component
 * Variants: 'primary' (Gold Gradient), 'burgundy' (Deep Wine), 'outline' (Gold Rim), 'ghost' (Text Only)
 */
export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  showArrow = false,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 uppercase tracking-wider',
    md: 'text-sm px-6 py-3 uppercase tracking-wider',
    lg: 'text-base px-8 py-4 uppercase tracking-widest font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-burgundy-950 font-semibold shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-105 active:scale-[0.98]',
    burgundy:
      'bg-burgundy-600 hover:bg-burgundy-700 text-cream-100 border border-gold-400/40 shadow-burgundy-glow hover:shadow-gold-glow active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-gold-400/10 text-gold-300 border border-gold-400/70 hover:border-gold-300 active:scale-[0.98]',
    outlineBurgundy:
      'bg-transparent hover:bg-burgundy-600/10 text-burgundy-700 border border-burgundy-600/60 hover:border-burgundy-700 active:scale-[0.98]',
    ghost:
      'bg-transparent text-gold-300 hover:text-gold-200 hover:underline underline-offset-8',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {/* Subtle shimmer effect on hover */}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;

