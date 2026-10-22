import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '../SectionHeading';
import { Button } from '../Button';
import { SafeVideo } from '../SafeVideo';
import { mediaPaths } from '../../data/media';
import { siteConfig } from '../../data/siteConfig';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

// Counter component that counts up smoothly when in view
function AnimatedCounter({ value, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10) || 0;
    const duration = 1600; // ms
    const increment = Math.ceil(end / (duration / 25));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-200 text-burgundy-950 overflow-hidden">
      {/* Background Subtle Luxury Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Media Presentation Slot (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant Outer Gold Border Frame */}
            <div className="relative p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 shadow-luxury-card">
              <div className="relative rounded-xl overflow-hidden bg-burgundy-950 aspect-[4/5] max-h-[520px]">
                <SafeVideo
                  src={mediaPaths.about.video}
                  poster={mediaPaths.about.image}
                  hoverToPlay
                  autoPlay={false}
                  aspectRatio="aspect-[4/5]"
                  className="w-full h-full object-cover"
                  overlayText="MosanTech Studio Atelier"
                  title="MosanTech Web Architecture"
                />

                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Luxury Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-burgundy-950 text-cream-100 p-4 sm:p-5 rounded-xl border border-gold-400/50 shadow-luxury-dark max-w-[220px]"
            >
              <div className="flex items-center space-x-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-gold-400/20 border border-gold-400/60 flex items-center justify-center text-gold-300">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs uppercase font-sans tracking-luxury text-gold-300 font-semibold">
                  Excellence
                </span>
              </div>
              <p className="text-xs font-serif text-cream-100/90 leading-snug">
                Bespoke architecture, zero generic templates.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative & Animated Counters (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="Why MosanTech"
              title="Where Digital Craftsmanship Meets"
              titleAccent="Commercial Success"
              description="We believe your website shouldn't just be an address on the internet — it should be your most relentless brand ambassador and highest-converting asset."
            />

            <div className="space-y-4 text-burgundy-900/80 text-base leading-relaxed font-sans">
              <p>
                Founded on the uncompromising pursuit of visual elegance and technical precision,
                MosanTech builds high-end websites that elevate brand perception and deliver measurable growth.
                Every line of code is clean, responsive, and tailored specifically to your business goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-sm font-medium text-burgundy-950">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Custom React & Tailwind Code</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-burgundy-950">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Sub-Second Page Load Optimization</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-burgundy-950">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Direct WhatsApp & Social Integrations</span>
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-burgundy-950">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Lifetime Source Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Animated Counters Grid (Editable in src/data/siteConfig.js) */}
            <div className="pt-8 border-t border-burgundy-900/15">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {siteConfig.stats.map((stat) => (
                  <div key={stat.id} className="text-left">
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-600 tracking-tight">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs uppercase font-sans tracking-luxury font-semibold text-burgundy-950 mt-1">
                      {stat.label}
                    </div>
                    <p className="text-[11px] text-burgundy-900/60 mt-0.5 leading-tight">
                      {stat.sublabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section CTA */}
            <div className="pt-6">
              <Button to="/services" variant="burgundy" size="md" showArrow>
                Explore What We Build
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

