import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Button } from '../components/Button';
import { BrandLogo } from '../components/BrandLogo';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <PageTransition>
      <section className="min-h-[85vh] flex items-center justify-center bg-burgundy-950 text-cream-100 py-28 px-4 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <BrandLogo size="lg" showWordmark={false} isDarkBackground />
          </motion.div>

          <span className="text-xs uppercase font-sans tracking-luxury font-bold text-gold-400 mb-2">
            Error 404 • Destination Not Found
          </span>

          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-cream-100 mb-4">
            Page Out of{' '}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent font-cormorant italic font-semibold">
              Reach
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-cream-200/75 leading-relaxed max-w-md mb-8">
            The page you are looking for does not exist, has been relocated, or is undergoing architectural refinement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button to="/" variant="primary" size="md" showArrow>
              <HomeIcon className="w-4 h-4 mr-2" />
              <span>Return Home</span>
            </Button>
            <Button to="/services" variant="outline" size="md">
              <span>View Services</span>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default NotFound;

