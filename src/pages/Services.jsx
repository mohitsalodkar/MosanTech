import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Check,
  Sparkles,
  ArrowRight,
  Layout,
  Gauge,
  Search,
  Mail,
  MessageCircle,
  LifeBuoy,
} from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { SafeVideo } from '../components/SafeVideo';
import { services } from '../data/services';
import { siteConfig } from '../data/siteConfig';
import { faqs } from '../data/faq';

const includedIconMap = {
  Layout,
  Gauge,
  Search,
  Mail,
  MessageCircle,
  LifeBuoy,
};

export function Services() {
  const [searchParams] = useSearchParams();
  const highlightedService = searchParams.get('service');
  const [openFaqId, setOpenFaqId] = useState(1);

  // If navigated with a service query param, scroll to that service section
  useEffect(() => {
    if (highlightedService) {
      const el = document.getElementById(`service-${highlightedService}`);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }, [highlightedService]);

  return (
    <PageTransition>
      {/* 1. Page Hero Banner with Breadcrumbs */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-burgundy-950 text-cream-100 overflow-hidden border-b border-gold-400/20">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-burgundy-700/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center space-x-2 text-xs uppercase font-sans tracking-luxury text-gold-300/80 mb-6">
            <Link to="/" className="hover:text-gold-200 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-400/60" />
            <span className="text-gold-200 font-semibold">Services</span>
          </nav>

          {/* Heading Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-burgundy-900/60 backdrop-blur-md shadow-gold-glow mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase font-sans font-semibold tracking-luxury text-gold-200">
              Agency Capabilities
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-100 leading-tight max-w-4xl mx-auto mb-6">
            Bespoke Web Development for{' '}
            <span className="bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent font-cormorant italic font-semibold">
              Visionary Brands
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-cream-200/80 max-w-2xl mx-auto leading-relaxed">
            From high-conversion corporate fronts to artisan restaurant QR menus, luxury e-commerce,
            and royal digital celebration invitations — every site is tailored to your success.
          </p>
        </div>
      </section>

      {/* 2. Detailed Section for EACH of the 5 Services (Alternating Left/Right) */}
      <section className="relative py-20 bg-cream-200 text-burgundy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-36">
          {services.map((svc, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={svc.id}
                id={`service-${svc.id}`}
                className="scroll-mt-28"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Media Slot (5 cols) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-5 relative ${
                      isEven ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    <div className="relative p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 shadow-luxury-card">
                      <div className="relative rounded-xl overflow-hidden bg-burgundy-950 aspect-[4/3] max-h-[460px]">
                        <SafeVideo
                          src={svc.mediaSrc}
                          poster={svc.posterSrc}
                          hoverToPlay
                          autoPlay={false}
                          aspectRatio="aspect-[4/3]"
                          className="w-full h-full object-cover"
                          overlayText={svc.title}
                          title={svc.title}
                        />
                      </div>
                    </div>

                    {/* Floating Monogram Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-burgundy-950 text-gold-300 border border-gold-400/50 flex items-center justify-center font-serif font-bold text-lg shadow-gold-glow">
                      {svc.number}
                    </div>
                  </motion.div>

                  {/* Content Narrative Slot (7 cols) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8 }}
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? 'order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-burgundy-900/20 bg-burgundy-900/5 text-burgundy-900 text-xs uppercase font-sans font-semibold tracking-luxury">
                      <span>{svc.tag}</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-burgundy-950 leading-tight">
                      {svc.title}
                    </h2>

                    <p className="font-serif text-lg sm:text-xl text-gold-600 font-medium italic">
                      "{svc.headline}"
                    </p>

                    <p className="font-sans text-base text-burgundy-900/80 leading-relaxed">
                      {svc.fullDescription}
                    </p>

                    {/* Feature Checklist with Gold Checks */}
                    <div className="pt-2">
                      <h4 className="text-xs uppercase font-sans font-bold tracking-luxury text-burgundy-950 mb-3">
                        Key Deliverables & Specifications:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {svc.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start space-x-2 text-xs font-sans text-burgundy-900/90"
                          >
                            <span className="w-4 h-4 rounded-full bg-gold-400/20 border border-gold-500/50 flex items-center justify-center text-gold-700 shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ideal For pill */}
                    <div className="p-3.5 rounded-lg bg-burgundy-900/5 border border-burgundy-900/10 text-xs text-burgundy-950 font-sans">
                      <span className="font-bold text-burgundy-700 uppercase tracking-wider mr-1.5">
                        Ideal For:
                      </span>
                      <span>{svc.idealFor}</span>
                    </div>

                    {/* CTA Button Pre-selecting Service in Contact Form */}
                    <div className="pt-4 flex items-center space-x-4">
                      <Button
                        to={`/contact?service=${svc.id}`}
                        state={{ service: svc.id }}
                        variant="burgundy"
                        size="md"
                        showArrow
                      >
                        Get a Quote for {svc.shortTitle}
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. "What's Included in Every Project" Grid */}
      <section className="relative py-24 md:py-32 bg-burgundy-950 text-cream-100 overflow-hidden border-t border-gold-400/25">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            isDark
            badge="Standard Agency Promise"
            title="What’s Included in"
            titleAccent="Every Single Project"
            description="Regardless of scope, every client website is delivered with our full suite of core engineering and performance foundations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.includedInEveryProject.map((item, idx) => {
              const Icon = includedIconMap[item.icon] || Layout;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="rounded-2xl bg-gradient-to-b from-burgundy-900/50 to-burgundy-950 p-7 border border-gold-400/25 hover:border-gold-400 transition-colors shadow-luxury-card group"
                >
                  <div className="w-12 h-12 rounded-xl bg-burgundy-900 border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:bg-gold-400 group-hover:text-burgundy-950 transition-all duration-300 mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-cream-100 group-hover:text-gold-200 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-cream-200/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion with Smooth Animation */}
      <section className="relative py-24 md:py-32 bg-cream-200 text-burgundy-950 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Got Questions?"
            titleAccent="We Have Answers"
            description="Clear and transparent answers about timelines, delivery, QR code menus, invitations, and our support warranty."
          />

          <div className="space-y-4 mt-12">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-burgundy-900/15 bg-cream-100/90 overflow-hidden shadow-sm transition-colors hover:border-gold-500/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-burgundy-950">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-burgundy-900/20 flex items-center justify-center text-burgundy-800 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-gold-400 text-burgundy-950 border-gold-400' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 text-burgundy-900/80 font-sans text-sm sm:text-base leading-relaxed border-t border-burgundy-900/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}

export default Services;

