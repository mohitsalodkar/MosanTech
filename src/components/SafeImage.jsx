import { useState } from 'react';
import { Layers } from 'lucide-react';

/**
 * Luxury-resilient Image Component.
 * - Enforces width/height layout stability to eliminate Cumulative Layout Shift (CLS).
 * - Implements native loading="lazy" for all below-the-fold media.
 * - Handles missing image files with an elegant, responsive luxury mockup card.
 */
export function SafeImage({
  src,
  alt = 'MosanTech Production',
  width = 800,
  height = 600,
  loading = 'lazy',
  className = '',
  category = '',
  title = '',
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        style={{ aspectRatio: `${width} / ${height}` }}
        className={`relative w-full h-full overflow-hidden flex flex-col items-center justify-center p-6 bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-black text-center ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(201,166,107,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
          <div className="w-12 h-12 rounded-full border border-gold-400/40 bg-burgundy-800/60 flex items-center justify-center shadow-gold-glow">
            <Layers className="w-5 h-5 text-gold-300" />
          </div>
          {category && (
            <span className="text-[10px] tracking-luxury uppercase font-semibold text-gold-300/90">
              {category}
            </span>
          )}
          <span className="text-cream-100 font-serif text-sm font-semibold tracking-wide max-w-[200px]">
            {title || alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${className}`}
    />
  );
}

export default SafeImage;

