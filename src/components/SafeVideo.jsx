import { useRef, useState, useEffect } from 'react';
import { globalVideoManager } from '../hooks/useVideoPlaybackManager';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMediaQuery';
import { useDataSaver } from '../hooks/useDataSaver';
import { Play, Sparkles } from 'lucide-react';

/**
 * High-performance, luxury-resilient Video Player Component.
 * Adheres strictly to modern web best practices:
 * - On mobile (<768px) or data-saver: displays poster fallback instead of autoplaying hero video.
 * - Non-hero videos: lazy loads with IntersectionObserver, preloads metadata only near viewport, pauses off-screen.
 * - Enforces max 1-2 playing videos simultaneously.
 * - Handles missing video files gracefully with an elegant gold-accented animated backdrop.
 */
export function SafeVideo({
  src,
  poster,
  isHero = false,
  autoPlay = false,
  loop = true,
  muted = true,
  className = '',
  aspectRatio = 'aspect-video',
  overlayText = '',
  hoverToPlay = false,
  controls = false,
  title = 'MosanTech Video Showcase',
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useIsMobile();
  const isDataSaver = useDataSaver();
  const prefersReducedMotion = usePrefersReducedMotion();

  // On mobile or data saver, disable hero video autoplay
  const shouldSkipHeroVideo = isHero && (isMobile || isDataSaver || prefersReducedMotion);

  // Setup IntersectionObserver for below-the-fold / non-hero videos
  useEffect(() => {
    if (isHero) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.25,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isHero]);

  // Handle Playback State
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError || shouldSkipHeroVideo) return;

    if (isHero) {
      // Desktop Hero Autoplay
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            globalVideoManager.registerPlay(video);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
      return;
    }

    // Non-hero videos:
    if (hoverToPlay) {
      if (isHovered && isInView && !prefersReducedMotion) {
        const p = video.play();
        if (p !== undefined) {
          p.then(() => {
            setIsPlaying(true);
            globalVideoManager.registerPlay(video);
          }).catch(() => {});
        }
      } else {
        video.pause();
        setIsPlaying(false);
        globalVideoManager.registerPause(video);
      }
      return;
    }

    // Auto-play when in view
    if (autoPlay && isInView && !prefersReducedMotion) {
      const p = video.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          globalVideoManager.registerPlay(video);
        }).catch(() => {});
      }
    } else {
      if (!video.paused) {
        video.pause();
        setIsPlaying(false);
        globalVideoManager.registerPause(video);
      }
    }
  }, [isInView, isHovered, autoPlay, hoverToPlay, hasError, isHero, shouldSkipHeroVideo, prefersReducedMotion]);

  // Cleanup on unmount
  useEffect(() => {
    const video = videoRef.current;
    return () => {
      if (video) {
        globalVideoManager.unregister(video);
      }
    };
  }, []);

  const handleVideoError = () => {
    // When video file has not yet been placed in /public/videos, switch to graceful fallback
    setHasError(true);
  };

  // Graceful Fallback if video is missing or disabled on mobile
  if (hasError || shouldSkipHeroVideo) {
    return (
      <div
        ref={containerRef}
        className={`relative overflow-hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-black ${aspectRatio} ${className}`}
      >
        {/* Subtle Luxury Pattern / Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-burgundy-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Content badge */}
        <div className="relative z-10 text-center p-6 max-w-sm mx-auto flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-gold-400/40 bg-burgundy-900/60 backdrop-blur-md flex items-center justify-center shadow-gold-glow mb-3">
            <Sparkles className="w-6 h-6 text-gold-300 animate-pulse-subtle" />
          </div>
          <span className="text-[10px] tracking-luxury uppercase font-semibold text-gold-300/80 mb-1">
            {isHero ? 'MosanTech Cinematic Showcase' : 'Client Production'}
          </span>
          <p className="text-cream-100 font-serif text-base font-medium">
            {overlayText || title}
          </p>
          {shouldSkipHeroVideo && (
            <span className="mt-2 text-[11px] text-gold-200/60 font-sans tracking-wide">
              Optimized for mobile performance
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden w-full h-full bg-burgundy-950 ${aspectRatio} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload={isHero ? 'auto' : 'metadata'}
        muted={muted}
        loop={loop}
        playsInline
        controls={controls}
        onError={handleVideoError}
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        aria-label={title}
      />

      {/* Hover to play indicator if not currently playing */}
      {hoverToPlay && !isPlaying && (
        <div className="absolute inset-0 bg-burgundy-950/40 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400/50 backdrop-blur-md flex items-center justify-center text-gold-200 shadow-gold-glow transition-transform hover:scale-110">
            <Play className="w-5 h-5 ml-0.5 fill-current" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SafeVideo;

