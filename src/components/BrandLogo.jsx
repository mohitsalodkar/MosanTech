import { useState } from 'react';
import logoImg from '../assets/logo.jpeg';

/**
 * MosanTech Official Brand Logo Component
 * Circular badge with ribbon-style "MS" monogram in deep burgundy and champagne gold on cream background.
 * Wordmark: "MOSAN" (bold burgundy serif) and "TECH" (light gold serif).
 * 
 * Uses /src/assets/logo.jpg as requested, with automatic vector fallback.
 */
export function BrandLogo({
  size = 'md',
  showWordmark = true,
  showTagline = false,
  isDarkBackground = false,
  className = '',
}) {
  const [imgFailed, setImgFailed] = useState(false);

  const sizeClasses = {
    xs: { badge: 'w-7 h-7', wordmark: 'text-base', tagline: 'text-[7px]' },
    sm: { badge: 'w-9 h-9', wordmark: 'text-lg', tagline: 'text-[8px]' },
    md: { badge: 'w-11 h-11', wordmark: 'text-xl', tagline: 'text-[9px]' },
    lg: { badge: 'w-16 h-16', wordmark: 'text-2xl', tagline: 'text-[10px]' },
    xl: { badge: 'w-24 h-24', wordmark: 'text-3xl', tagline: 'text-[11px]' },
  };

  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Circular Badge */}
      <div
        className={`relative ${selectedSize.badge} rounded-full overflow-hidden flex-shrink-0 shadow-luxury-card border border-gold-400/40 bg-cream-200 transition-transform duration-300 hover:scale-105`}
      >
        {!imgFailed ? (
          <img
            src={logoImg}
            alt="MosanTech Monogram"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          /* SVG Ribbon-Style MS Monogram Fallback Badge */
          <svg viewBox="0 0 100 100" className="w-full h-full p-0.5">
            <circle cx="50" cy="50" r="46" fill="#FBF6EE" stroke="#6B0F2A" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="41" fill="none" stroke="#C9A66B" strokeWidth="1" strokeDasharray="2 1.5" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#6B0F2A" strokeWidth="1" />
            {/* MS Monogram */}
            <path
              d="M32 64 V36 L43 51 L54 36 V64"
              fill="none"
              stroke="#6B0F2A"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48 39 C52 35 62 35 65 41 C67 45 64 49 56 51 C48 53 48 59 53 62 C58 64 66 62 68 58"
              fill="none"
              stroke="#C9A66B"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline tracking-wider">
            <span
              className={`font-serif font-bold ${
                isDarkBackground ? 'text-cream-100' : 'text-burgundy-600'
              } ${selectedSize.wordmark}`}
            >
              MOSAN
            </span>
            <span
              className={`font-serif font-semibold ml-1 text-gold-400 ${selectedSize.wordmark}`}
            >
              TECH
            </span>
          </div>
          {showTagline && (
            <span
              className={`tracking-luxury uppercase font-sans font-medium mt-1 ${
                isDarkBackground ? 'text-gold-200/80' : 'text-gold-600'
              } ${selectedSize.tagline}`}
            >
              We build websites for your business
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default BrandLogo;

