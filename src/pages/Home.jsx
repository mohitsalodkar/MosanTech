
import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { IntroLoader } from '../components/IntroLoader';

import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { WhyOnlineSection } from '../components/home/WhyOnlineSection';
import { ProcessTimelineSection } from '../components/home/ProcessTimelineSection';
import { PortfolioGridSection } from '../components/home/PortfolioGridSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

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
      {showLoader && (
        <IntroLoader onComplete={handleLoaderComplete} />
      )}

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Why Move Your Business Online */}
      <WhyOnlineSection />

      {/* 4. Our Process */}
      <ProcessTimelineSection />

      {/* 5. Our Work */}
      <PortfolioGridSection />

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Questions */}
      <FAQSection />

      {/* 8. Final CTA — Immediately Above Footer */}
      <FinalCtaSection />
    </PageTransition>
  );
}

export default Home;

