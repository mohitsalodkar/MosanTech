
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Rocket,
  Gem,
  Zap,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import ctaWorkspace from '../../assets/cta-workspace.png';

const features = [
  {
    icon: Rocket,
    title: 'Free',
    subtitle: 'Consultation',
  },
  {
    icon: Gem,
    title: 'Custom',
    subtitle: 'Design',
  },
  {
    icon: Zap,
    title: 'Fast',
    subtitle: 'Delivery',
  },
  {
    icon: ShieldCheck,
    title: 'Dedicated',
    subtitle: 'Support',
  },
];

const benefits = [
  'No Obligation',
  'Quick Response',
  '100% Confidential',
];

export function FinalCtaSection() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, delay },
  });

  const whatsappNumber = '917620925471';
  const whatsappMessage = encodeURIComponent(
    'Hi MosanTech! I want to discuss a website project.'
  );

  return (
    <section
      id="get-started"
      className="relative isolate overflow-hidden bg-[#FFF9F0] text-[#351016]"
    >
      {/* Soft premium background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_50%,rgba(199,161,90,0.10),transparent_48%),linear-gradient(115deg,#FFF9F0_0%,#FFF6EA_55%,#F8EBDD_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 bottom-[-100px] -z-10 h-72 w-72 rounded-full bg-[#790D26]/[0.055] blur-[100px]"
      />

      {/* Main content */}
      <div className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-[76px] xl:px-16">
        <div className="grid grid-cols-1 items-center gap-9 md:gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8 xl:gap-12">

          {/* LEFT: Content */}
          <motion.div
            {...reveal(0)}
            className="relative z-10 min-w-0"
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span className="h-px w-10 shrink-0 bg-[#C28B4D] sm:w-12" />

              <p className="font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[2.2px] text-[#8A1830] sm:text-xs sm:tracking-[3px]">
                Ready to Grow Your Business?
              </p>
            </div>

            {/* Heading: existing premium typography */}
            <h2 className="max-w-[680px] font-['Georgia',serif] text-[clamp(2.65rem,5.3vw,4.6rem)] font-bold leading-[0.99] tracking-[-1.7px] text-[#351016] sm:tracking-[-2px]">
              Let’s Build Your
              <span className="mt-1 block">
                Dream{' '}
                <span className="bg-gradient-to-r from-[#A66B3D] via-[#C08A53] to-[#87512F] bg-clip-text text-transparent">
                  Website
                </span>
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[590px] text-[14px] leading-[1.8] text-[#716765] sm:mt-5 sm:text-base sm:leading-[1.75] lg:text-[16px]">
              Get a modern, high-performance website that helps you
              attract more customers, build trust, and grow your business
              online.
            </p>

            {/* Feature icons */}
            <div className="mt-6 grid max-w-[590px] grid-cols-4 gap-2 sm:mt-7 sm:gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, y: 12 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={
                      reducedMotion ? undefined : { y: -4 }
                    }
                    className="group flex min-w-0 flex-col items-center text-center"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#EEDCC7] bg-[#F7E7D5] text-[#790D26] shadow-[0_3px_10px_rgba(83,20,29,0.04)] transition-all duration-300 group-hover:border-[#C7A15A] group-hover:bg-[#790D26] group-hover:text-[#FFF9F0] sm:h-12 sm:w-12">
                      <Icon
                        className="h-[19px] w-[19px] sm:h-[22px] sm:w-[22px]"
                        strokeWidth={1.8}
                      />
                    </span>

                    <span className="mt-2.5 text-[11px] font-bold leading-tight text-[#54101D] sm:text-sm">
                      {feature.title}
                    </span>

                    <span className="mt-0.5 text-[10px] leading-[1.4] text-[#766963] sm:text-xs">
                      {feature.subtitle}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8 sm:gap-4">
              <motion.div
                whileHover={
                  reducedMotion ? undefined : { y: -2 }
                }
                whileTap={
                  reducedMotion ? undefined : { scale: 0.98 }
                }
                className="min-w-0 flex-1"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex min-h-[52px] w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-[#9C2039] bg-gradient-to-r from-[#920F2B] via-[#790D26] to-[#59091C] px-5 py-3 text-sm font-bold text-[#FFF9F0] shadow-[0_8px_22px_rgba(121,13,38,0.20)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(121,13,38,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A15A] focus-visible:ring-offset-2 sm:text-[15px]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />

                  <span className="relative">Get a Free Quote</span>

                  <ArrowRight
                    className="relative h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.8}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={
                  reducedMotion ? undefined : { y: -2 }
                }
                whileTap={
                  reducedMotion ? undefined : { scale: 0.98 }
                }
                className="min-w-0 flex-1"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-[#C58B50] bg-[#FFF9F0]/80 px-4 py-3 text-sm font-bold text-[#54101D] transition-all duration-300 hover:border-[#790D26] hover:bg-[#790D26] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A15A] focus-visible:ring-offset-2 sm:text-[15px]"
                >
                  <MessageCircle className="h-[21px] w-[21px] shrink-0 transition-transform duration-300 group-hover:rotate-[-8deg]" />

                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>
            </div>

            {/* Trust benefits */}
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium text-[#756966] sm:mt-6 sm:gap-x-5 sm:text-xs">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className={`inline-flex items-center gap-1.5 ${
                    index !== 0
                      ? 'min-[480px]:border-l min-[480px]:border-[#E7CBAA] min-[480px]:pl-3 sm:pl-5'
                      : ''
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#B8793D]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Generated workspace image */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, x: 28, scale: 0.985 }
            }
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-w-0 lg:-mr-4 xl:-mr-8"
          >
            {/* Image frame */}
            <div className="group relative overflow-hidden rounded-[22px] border border-[#E7D0B6] bg-[#EAD6BF] shadow-[0_18px_45px_rgba(65,20,25,0.12)] sm:rounded-[28px] lg:rounded-l-[100px] lg:rounded-r-[18px] lg:rounded-bl-[100px]">
              <img
                src={ctaWorkspace}
                alt="MosanTech workspace with a laptop displaying a restaurant website design"
                loading="lazy"
                decoding="async"
                className="block aspect-[1.45/1] h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025] sm:aspect-[1.65/1] lg:aspect-[1.08/1] xl:aspect-[1.16/1]"
              />

              {/* Warm image overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#351016]/10 via-transparent to-[#F8E5CB]/10"
              />

              {/* Small decorative accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[8px] rounded-[17px] border border-white/20 sm:inset-3 sm:rounded-[22px] lg:rounded-l-[88px] lg:rounded-r-[12px] lg:rounded-bl-[88px]"
              />
            </div>

            {/* Decorative gold ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-full border border-[#C7A15A]/40 sm:-bottom-5 sm:-right-5 sm:h-36 sm:w-36"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 top-8 -z-10 h-20 w-20 rounded-full bg-[#C7A15A]/10 blur-2xl sm:-left-5 sm:h-28 sm:w-28"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gold divider */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#D9B98A]/70 to-transparent"
      />
    </section>
  );
}

export default FinalCtaSection;

