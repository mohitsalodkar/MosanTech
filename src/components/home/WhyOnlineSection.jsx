
import { motion, useReducedMotion } from 'framer-motion';
import {
  UsersRound,
  ShieldCheck,
  ChartNoAxesCombined,
  Clock3,
  Target,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import whyOnlineImage from '../../assets/why-online-hero.png';

const benefits = [
  {
    title: 'Reach More Customers',
    description:
      'Your business can be found by people beyond your local area.',
    icon: UsersRound,
  },
  {
    title: 'Build Trust & Credibility',
    description:
      'A professional website makes your business look legit and reliable.',
    icon: ShieldCheck,
  },
  {
    title: 'Increase Sales & Growth',
    description:
      'Showcase your products or services and convert visitors into customers.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Available 24/7',
    description:
      "Your business works even when you're not online.",
    icon: Clock3,
  },
  {
    title: 'Stay Ahead of Competitors',
    description:
      'Your business works while competitors are already active.',
    icon: Target,
  },
  {
    title: 'Better Customer Experience',
    description:
      'Customers can easily explore, contact, and choose you anytime.',
    icon: Smartphone,
  },
];

const stats = [
  {
    value: '3X',
    title: 'More Reach',
    description: 'Than Offline',
  },
  {
    value: '70%',
    title: 'Customers Search',
    description: 'Online Before Buying',
  },
  {
    value: '24/7',
    title: 'Your Business',
    description: 'Works Always',
  },
];

function BenefitCard({ benefit, index, reducedMotion }) {
  const Icon = benefit.icon;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: reducedMotion ? 0 : index * 0.07,
      }}
      whileHover={reducedMotion ? undefined : { y: -5 }}
      className="
        group relative flex min-w-0 flex-col
        overflow-hidden rounded-[15px]
        border border-[#EEDCC8]
        bg-gradient-to-br from-white/95 via-[#FFFCF7] to-[#FBF0E4]
        p-4
        shadow-[0_4px_16px_rgba(65,20,25,0.045)]
        transition-all duration-300
        hover:border-[#D8B58A]
        hover:shadow-[0_13px_30px_rgba(65,20,25,0.10)]
        sm:rounded-[17px] sm:p-5
        xl:p-[21px]
      "
    >
      {/* Subtle premium top accent */}
      <span
        aria-hidden="true"
        className="
          absolute inset-x-5 top-0 h-[2px]
          origin-left scale-x-0 rounded-full
          bg-gradient-to-r from-[#790D26] to-[#C7A15A]
          transition-transform duration-500
          group-hover:scale-x-100
        "
      />

      {/* Icon */}
      <div
        className="
          mb-3 flex h-[48px] w-[48px] shrink-0
          items-center justify-center rounded-full
          border border-[#F0DCC9]
          bg-gradient-to-br from-[#F8E7D9] to-[#F3DCC9]
          text-[#790D26]
          shadow-[0_3px_9px_rgba(121,13,38,0.04)]
          transition-all duration-300
          group-hover:border-[#D8B58A]
          group-hover:bg-[#790D26]
          group-hover:text-[#FFF9F0]
          sm:mb-3.5 sm:h-[58px] sm:w-[58px]
        "
      >
        <Icon
          size={27}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title: inherits the site's existing sans font */}
      <h3
        className="
          max-w-[230px] font-sans
          text-[15px] font-bold leading-[1.22]
          tracking-[-0.35px] text-[#351016]
          sm:text-[17px] xl:text-[18px]
        "
      >
        {benefit.title}
      </h3>

      <p
        className="
          mt-2 font-sans text-[12px]
          leading-[1.65] text-[#70615B]
          sm:text-[13px] sm:leading-[1.7]
        "
      >
        {benefit.description}
      </p>

      {/* Gold accent */}
      <div
        aria-hidden="true"
        className="
          mt-auto w-9 pt-3
        "
      >
        <span
          className="
            block h-[2px] w-full rounded-full
            bg-gradient-to-r from-[#C78B39] to-[#EACB8E]
            transition-all duration-300
            group-hover:w-14
          "
        />
      </div>
    </motion.article>
  );
}

export function WhyOnlineSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="why-online"
      className="
        relative isolate overflow-hidden
        bg-[#FFF9F0] text-[#351016]
        py-12 sm:py-14 lg:py-[76px]
      "
    >
      {/* Warm ambient background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-24 top-12 -z-10
          h-72 w-72 rounded-full
          bg-[#D8B58A]/[0.12] blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24 bottom-0 -z-10
          h-80 w-80 rounded-full
          bg-[#790D26]/[0.055] blur-[110px]
        "
      />

      <div
        className="
          mx-auto w-full max-w-[1600px]
          px-5 sm:px-7 lg:px-10 xl:px-12 2xl:px-14
        "
      >
        <div
          className="
            grid grid-cols-1 items-center gap-8
            lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8
            xl:gap-x-7 2xl:gap-x-9
          "
        >
          {/* LEFT: Heading, description, CTA and stats */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-4"
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span
                aria-hidden="true"
                className="
                  h-px w-9 shrink-0
                  bg-gradient-to-r from-[#C78B39] to-[#8D3545]
                  sm:w-12
                "
              />

              <p
                className="
                  font-sans text-[10px] font-bold uppercase
                  tracking-[2.2px] text-[#8A1830]
                  sm:text-[11px] sm:tracking-[2.7px]
                "
              >
                Why Move Your Business Online?
              </p>
            </div>

            {/* Main heading */}
            <h2
              className="
                max-w-[560px] font-serif
                text-[clamp(2.35rem,4.1vw,4rem)]
                font-bold leading-[1.04]
                tracking-[-1.5px] text-[#351016]
              "
            >
              Because Your
              <br />
              Customers Are
              <br />
              Already{' '}
              <span
                className="
                  relative inline-block
                  bg-gradient-to-r from-[#9A6239] via-[#B78350] to-[#8E572F]
                  bg-clip-text text-transparent
                "
              >
                Online
                <span
                  aria-hidden="true"
                  className="
                    absolute -bottom-1 left-0
                    h-[2px] w-full rounded-full
                    bg-gradient-to-r from-[#C78B39] to-transparent
                  "
                />
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5 max-w-[480px]
                font-sans text-[14px] leading-[1.8]
                text-[#6B625E]
                sm:text-[15px] lg:mt-5
              "
            >
              A website is not just a luxury anymore — it’s a necessity.
              It helps you reach more people, build credibility, and
              grow your business 24/7.
            </p>

            {/* CTA */}
            <div className="mt-6 sm:mt-7">
              <Link
                to="/contact"
                className="
                  group inline-flex min-h-[48px]
                  items-center justify-center gap-3
                  rounded-full
                  border border-[#9B2039]/30
                  bg-gradient-to-r from-[#790D26] via-[#870D29] to-[#5B091B]
                  px-6 py-3
                  font-sans text-[13px] font-bold text-[#FFF9F0]
                  shadow-[0_7px_20px_rgba(121,13,38,0.18)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#C7A15A]
                  hover:shadow-[0_12px_28px_rgba(121,13,38,0.25)]
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#C7A15A]
                  focus-visible:ring-offset-2
                  sm:px-7 sm:text-sm
                "
              >
                <span>Start Your Online Journey</span>

                <ArrowRight
                  size={17}
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* Stats */}
            <div
              className="
                mt-8 grid grid-cols-3
                divide-x divide-[#E7CEB5]
                border-t border-[#EEDCC8] pt-5
                sm:mt-9 sm:pt-6
                lg:mt-9
              "
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={
                    reducedMotion ? false : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: reducedMotion ? 0 : index * 0.08,
                  }}
                  className={`min-w-0 ${
                    index === 0
                      ? 'pr-2'
                      : index === 1
                        ? 'px-2 sm:px-4'
                        : 'pl-2 sm:pl-4'
                  }`}
                >
                  <p
                    className="
                      font-serif text-[27px] font-bold
                      leading-none tracking-[-0.8px]
                      text-[#790D26]
                      sm:text-[34px] xl:text-[38px]
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      mt-2 font-sans text-[10px]
                      font-bold leading-snug text-[#351016]
                      sm:text-[12px]
                    "
                  >
                    {stat.title}
                  </p>

                  <p
                    className="
                      mt-1 font-sans text-[10px]
                      leading-[1.45] text-[#83756E]
                      sm:text-[11px]
                    "
                  >
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CENTER: Six benefit cards */}
          <div
            className="
              grid min-w-0 grid-cols-1 gap-3.5
              sm:grid-cols-2 sm:gap-4
              lg:col-span-5 lg:grid-cols-2
              xl:grid-cols-3 xl:gap-3
              2xl:gap-4
            "
          >
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          {/* RIGHT: Generated workspace image */}
          <motion.div
            initial={
              reducedMotion ? false : { opacity: 0, x: 24, scale: 0.985 }
            }
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="
              relative min-w-0
              lg:col-span-3 lg:self-stretch
            "
          >
            <div
              className="
                group relative h-full min-h-[360px]
                overflow-hidden rounded-[22px]
                border border-[#D8B58A]/70
                bg-[#E9D5BF]
                shadow-[0_15px_40px_rgba(65,20,25,0.13)]
                sm:min-h-[440px]
                lg:min-h-[600px]
                xl:min-h-[650px]
              "
            >
              <img
                src={whyOnlineImage}
                alt="Professional website displayed on a laptop and mobile phone in a premium workspace"
                loading="lazy"
                decoding="async"
                className="
                  absolute inset-0 h-full w-full
                  object-cover object-[58%_center]
                  transition-transform duration-700
                  group-hover:scale-[1.025]
                "
              />

              {/* Image finish */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t
                  from-[#351016]/30 via-transparent to-[#FFF9F0]/[0.03]
                "
              />

              {/* Decorative gold frame */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute inset-3
                  rounded-[16px] border border-white/25
                "
              />

              {/* Bottom image caption */}
              <div
                className="
                  absolute inset-x-4 bottom-4
                  rounded-[13px] border border-white/30
                  bg-[#FFF9F0]/90 px-4 py-3
                  shadow-[0_5px_18px_rgba(35,10,15,0.12)]
                  backdrop-blur-md
                  sm:inset-x-5 sm:bottom-5 sm:px-5 sm:py-4
                "
              >
                <p
                  className="
                    font-sans text-[9px] font-bold
                    uppercase tracking-[2px] text-[#8A1830]
                  "
                >
                  Your Digital Future
                </p>

                <p
                  className="
                    mt-1 font-serif text-[19px]
                    font-bold leading-tight text-[#351016]
                    sm:text-[22px]
                  "
                >
                  Make Your Business Stand Out.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyOnlineSection;

