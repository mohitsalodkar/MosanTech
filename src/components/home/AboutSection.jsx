
import { motion, useReducedMotion } from 'framer-motion';
import {
  Gem,
  Zap,
  UsersRound,
  ShieldCheck,
  Monitor,
  Code2,
  TrendingUp,
  CalendarDays,
  Target,
  Eye,
} from 'lucide-react';

import aboutHero from '../../assets/about-hero.jpg';
import aboutStudio from '../../assets/about-studio.jpg';

const values = [
  {
    title: 'Premium Quality',
    description: 'High-end designs with clean, modern code.',
    icon: Gem,
  },
  {
    title: 'Fast Performance',
    description: 'Optimized for speed, SEO and user experience.',
    icon: Zap,
  },
  {
    title: 'Client-Centric',
    description: 'Your goals, our priority at every step.',
    icon: UsersRound,
  },
  {
    title: 'Reliable Support',
    description: "We're here, even after launch.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    title: 'UI/UX Design',
    description: 'Modern & user-friendly designs',
    icon: Monitor,
  },
  {
    title: 'Website Development',
    description: 'Custom, high-performance websites',
    icon: Code2,
  },
  {
    title: 'SEO & Digital Growth',
    description: 'Get more visibility, more customers',
    icon: TrendingUp,
  },
  {
    title: 'Year Experience',
    description: 'Building modern digital solutions',
    icon: CalendarDays,
    value: '1+',
  },
];

export function AboutSection() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: {
      duration: 0.55,
      delay: reducedMotion ? 0 : delay,
    },
  });

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#FFF9F0] px-4 pt-14 pb-10 text-[#351016] sm:px-6 sm:pt-16 sm:pb-14 lg:px-10 lg:pt-20 lg:pb-16"
    >
      {/* Soft decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#D8B86B]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#790D26]/[0.045] blur-[100px]"
      />

      <div className="mx-auto w-full max-w-[1440px]">
        {/* TOP: Heading left, image right */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-12">
          {/* Left content */}
          <motion.div
            {...reveal()}
            className="min-w-0 lg:pt-4"
          >
            <p className="mb-4 flex items-center gap-3 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[3px] text-[#671C29] sm:text-[11px]">
              <span className="h-px w-10 bg-[#C7A15A]" />
              About Us
            </p>

            <h2 className="max-w-[650px] font-['Georgia',serif] text-[clamp(2.3rem,4.4vw,4.1rem)] font-bold leading-[1.02] tracking-[-1.7px] text-[#390711]">
              Crafting Digital Experiences That{' '}
              <span className="bg-gradient-to-r from-[#96623A] via-[#C49A65] to-[#8B572F] bg-clip-text text-transparent">
                Make an Impact
              </span>
            </h2>

            <p className="mt-5 max-w-[620px] text-[13px] leading-[1.85] text-[#5F5652] sm:text-[15px] sm:leading-[1.8]">
              At MosanTech, we're more than just a web development studio —
              we're your digital growth partner. We craft bespoke,
              high-performance websites that help businesses look premium,
              build trust, and turn visitors into loyal customers.
            </p>

            {/* Four value points */}
            <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 sm:mt-8 sm:grid-cols-4 sm:gap-x-0 sm:gap-y-4">
              {values.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    {...reveal(index * 0.07)}
                    whileHover={
                      reducedMotion ? undefined : { y: -4 }
                    }
                    className={`group flex flex-col items-center text-center sm:px-3 ${
                      index > 0
                        ? 'sm:border-l sm:border-[#DCC5A8]'
                        : ''
                    }`}
                  >
                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#F0E0CC] bg-gradient-to-br from-[#F9EBDD] to-[#F2DEC5] text-[#671C29] shadow-[0_4px_14px_rgba(53,16,22,0.04)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C7A15A] group-hover:shadow-[0_8px_20px_rgba(103,28,41,0.12)]">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-3 font-['Montserrat',sans-serif] text-[11px] font-bold leading-snug text-[#390711] sm:text-[12px]">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 max-w-[155px] text-[10px] leading-[1.6] text-[#75645D] sm:text-[11px]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right-side image */}
          <motion.div
            {...reveal(0.12)}
            className="relative min-w-0 lg:-mr-10 lg:mt-[-40px] xl:-mr-10"
          >
            {/* Decorative burgundy backdrop */}
            <div
              aria-hidden="true"
              className="absolute -left-3 top-0 h-[82%] w-[24%] rounded-l-[100px] border border-[#C7A15A]/70 bg-gradient-to-b from-[#790D26] to-[#390711] sm:-left-5 sm:w-[26%]"
            />

            <div className="relative ml-3 overflow-hidden rounded-bl-[65px] rounded-tl-[85px] rounded-br-[45px] rounded-tr-[8px] border border-[#D5B27C] bg-[#F0E0CC] p-[3px] shadow-[0_18px_50px_rgba(53,16,22,0.12)] sm:ml-5 sm:rounded-bl-[100px] sm:rounded-tl-[125px] sm:rounded-br-[65px]">
              <img
                src={aboutHero}
                alt="MosanTech creative studio and web design workspace"
                className="block aspect-[1.15/1] h-auto w-full rounded-bl-[61px] rounded-tl-[81px] rounded-br-[41px] rounded-tr-[5px] object-cover object-center sm:aspect-[1.2/1] sm:rounded-bl-[96px] sm:rounded-tl-[120px] sm:rounded-br-[61px]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Gold decorative line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 left-[18%] right-0 h-5 rounded-r-full border-b border-[#C7A15A]/80"
            />
          </motion.div>
        </div>

        {/* SERVICES STRIP */}
        <motion.div
          {...reveal(0.08)}
          className="mt-10 overflow-hidden rounded-[18px] border border-[#F0E2D0] bg-gradient-to-r from-[#F8EDDE] via-[#FFF8EF] to-[#F8EDDE] shadow-[0_8px_28px_rgba(53,16,22,0.035)] sm:mt-12 lg:mt-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={
                    reducedMotion ? undefined : { y: -3 }
                  }
                  className={`relative flex min-w-0 flex-col items-center justify-center px-3 py-5 text-center transition-colors duration-300 hover:bg-white/50 sm:px-4 sm:py-6 lg:py-7 ${
                    index % 2 === 0
                      ? 'border-r border-[#DEC5A7] sm:border-r-0'
                      : ''
                  } ${
                    index < 2
                      ? 'border-b border-[#DEC5A7] sm:border-b-0'
                      : ''
                  } ${
                    index > 0
                      ? 'sm:border-l sm:border-[#DEC5A7]'
                      : ''
                  }`}
                >
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-[#F0DEC7] bg-gradient-to-br from-[#F7E5D0] to-[#EED3B2] text-[#671C29] shadow-sm transition-all duration-300 hover:shadow-[0_6px_18px_rgba(103,28,41,0.12)] sm:h-[58px] sm:w-[58px]">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {service.value && (
                    <span className="mb-1 font-['Georgia',serif] text-[29px] font-bold leading-none text-[#671C29] sm:text-[32px]">
                      {service.value}
                    </span>
                  )}

                  <h3 className="font-['Montserrat',sans-serif] text-[11px] font-bold leading-snug text-[#351016] sm:text-[13px]">
                    {service.title}
                  </h3>

                  <p className="mt-1.5 max-w-[220px] text-[10px] leading-[1.6] text-[#75645D] sm:text-[11px]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM: Studio image and Mission / Vision */}
        <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:mt-12 lg:mt-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 xl:gap-12">
          {/* Studio image with small-team message */}
          <motion.div
            {...reveal()}
            className="relative min-w-0 overflow-hidden rounded-[18px] border border-[#EAD7C0] bg-[#F4E4D0] p-2 shadow-[0_8px_26px_rgba(53,16,22,0.045)] transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(53,16,22,0.09)] sm:p-3"
          >
            <div className="grid grid-cols-[1.65fr_0.7fr] items-stretch gap-2 sm:gap-3">
              <div className="overflow-hidden rounded-[12px]">
                <img
                  src={aboutStudio}
                  alt="MosanTech workspace"
                  className="h-full min-h-[210px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] sm:min-h-[270px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex flex-col items-center justify-center rounded-[12px] bg-gradient-to-br from-[#FFF6E9] to-[#F3DFC7] px-2 py-4 text-center">
                <span className="font-['Georgia',serif] text-[clamp(1.2rem,2.2vw,2rem)] italic leading-[1.4] text-[#671C29]">
                  Small
                  <br />
                  Team
                  <br />
                  Big
                  <br />
                  Dreams
                </span>

                <span className="mt-3 h-[2px] w-10 rotate-[-12deg] bg-[#96623A]" />
              </div>
            </div>
          </motion.div>

          {/* Mission and Vision */}
          <motion.div
            {...reveal(0.1)}
            className="min-w-0 lg:pl-2"
          >
            <p className="mb-3 flex items-center gap-3 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[2.7px] text-[#671C29] sm:text-[11px] sm:tracking-[3px]">
              <span className="h-px w-9 bg-[#C7A15A]" />
              Our Mission & Vision
            </p>

            <h2 className="font-['Georgia',serif] text-[clamp(1.8rem,3vw,2.7rem)] font-bold leading-[1.12] tracking-[-0.8px] text-[#390711]">
              Building More Than Websites.
              <span className="mt-1 block text-[#A16C40]">
                We Build Your Future.
              </span>
            </h2>

            <p className="mt-4 max-w-[650px] text-[12px] leading-[1.8] text-[#625752] sm:text-[14px]">
              Our mission is to empower businesses with stunning, functional,
              and results-driven websites. We envision a world where every
              business — no matter the size — has a powerful online presence.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-0">
              {/* Mission */}
              <div className="flex items-start gap-3 sm:pr-5">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#EBD5B9] bg-gradient-to-br from-[#F8E7D1] to-[#EAC9A5] text-[#671C29] transition-transform duration-300 hover:scale-105">
                  <Target size={27} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 pt-1">
                  <h3 className="font-['Montserrat',sans-serif] text-[12px] font-bold text-[#390711] sm:text-[13px]">
                    Our Mission
                  </h3>
                  <p className="mt-1 text-[11px] leading-[1.7] text-[#6B5A56]">
                    Deliver exceptional web solutions that create real
                    business value.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start gap-3 border-t border-[#DEC5A7] pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-1">
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-[#EBD5B9] bg-gradient-to-br from-[#F8E7D1] to-[#EAC9A5] text-[#671C29] transition-transform duration-300 hover:scale-105">
                  <Eye size={27} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-['Montserrat',sans-serif] text-[12px] font-bold text-[#390711] sm:text-[13px]">
                    Our Vision
                  </h3>
                  <p className="mt-1 text-[11px] leading-[1.7] text-[#6B5A56]">
                    To be a globally trusted web development studio known
                    for quality, creativity, and impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

