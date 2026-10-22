import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { IntroLoader } from '../components/IntroLoader';

import { HeroSection } from '../components/home/HeroSection';
import { ServicesPreviewSection } from '../components/home/ServicesPreviewSection';
import { ProcessTimelineSection } from '../components/home/ProcessTimelineSection';
import { PortfolioGridSection } from '../components/home/PortfolioGridSection';
import { PlansPreviewSection } from '../components/home/PlansPreviewSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CtaBannerSection } from '../components/home/CtaBannerSection';

export function Home() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('mosantech_loader_shown');
    }
    return true;
  });

  const handleLoaderComplete = () => {
    setShowLoader(false);
    sessionStorage.setItem('mosantech_loader_shown', 'true');
  };

  return (
    <PageTransition>
      {showLoader && <IntroLoader onComplete={handleLoaderComplete} />}

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Our Services */}
      <ServicesPreviewSection />

      {/* 3. Our Process */}
      <ProcessTimelineSection />

      {/* 4. Client Work */}
      <PortfolioGridSection />

      {/* 5. Our Plans */}
      <PlansPreviewSection />

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. CTA Banner — Footer ke just upar */}
      <CtaBannerSection />
    </PageTransition>
  );
}

export default Home;