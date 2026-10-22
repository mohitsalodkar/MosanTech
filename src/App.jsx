import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import { FloatingContact } from './components/FloatingContact';
import { BrandLogo } from './components/BrandLogo';
import MobileBottomNav from './components/MobileBottomNav';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-burgundy-950 text-cream-100">
      <div className="relative flex flex-col items-center">
        <BrandLogo
          size="lg"
          showWordmark={false}
          isDarkBackground
        />

        <div className="absolute -inset-2 h-16 w-16 animate-spin rounded-full border-2 border-gold-400/30 border-t-gold-400" />

        <span className="mt-8 text-xs font-semibold uppercase tracking-luxury text-gold-300">
          Loading MosanTech...
        </span>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppLayout() {
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <CursorGlow />

      <div className="flex min-h-screen flex-col overflow-x-clip bg-cream-200 text-burgundy-950 selection:bg-gold-400 selection:text-burgundy-950">
        <Navbar />

        {/* Page content */}
        <main className="relative flex-1 pb-[76px] md:pb-0">
          <Suspense fallback={<PageFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>

        <Footer />

        {/* Fixed mobile navigation */}
        <MobileBottomNav />

        <FloatingContact />
      </div>
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;