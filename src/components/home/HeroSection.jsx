import { motion, useReducedMotion } from 'framer-motion';

import {
  Play,
  Rocket,
  Smartphone,
  Headset,
} from 'lucide-react';

// Background image import
import heroBackground from '../../assets/hero-background.png';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  // ==========================================
  // ANIMATION HELPER
  // ==========================================

  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion
      ? false
      : {
          opacity: 0,
          y: 20,
        },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: prefersReducedMotion ? 0 : 0.7,
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.16, 1, 0.3, 1],
    },
  });

  // ==========================================
  // FEATURES
  // ==========================================

  const features = [
    {
      icon: Rocket,
      title: 'Modern',
      subtitle: 'Designs',
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      subtitle: 'Friendly',
    },
    {
      icon: Headset,
      title: 'Ongoing',
      subtitle: 'Support',
    },
  ];

  // ==========================================
  // HERO SECTION
  // ==========================================

  return (
    <section
      id="home"
      className="
        relative isolate
        flex min-h-[560px]
        w-full items-center
        overflow-hidden
        bg-[#FFF8EE]
        text-[#3B0A12]
        sm:min-h-[660px]
        lg:min-h-[740px]
        xl:min-h-[780px]
      "
    >
      {/* ========================================
          BACKGROUND IMAGE
          Correct image layering
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          bg-[#FFF8EE]
        "
      >
        <img
          src={heroBackground}
          alt=""
          fetchPriority="high"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[62%_center]
            brightness-[1.04]
            saturate-[1.06]
            max-sm:object-[68%_center]
          "
        />
      </div>

      {/* ========================================
          LIGHT OVERLAY
          Keeps the heading readable
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-[1]
          bg-gradient-to-r
          from-[#FFF8EE]/96
          via-[#FFF8EE]/30
          to-transparent
          max-sm:bg-gradient-to-b
          max-sm:from-[#FFF8EE]/96
          max-sm:via-[#FFF8EE]/55
          max-sm:to-[#FFF8EE]/10
        "
      />

      {/* ========================================
          CONTENT CONTAINER
      ======================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full
          max-w-[1600px]
          px-4
          py-12
          sm:px-8
          sm:py-20
          md:px-12
          lg:px-16
          lg:py-20
          xl:px-20
        "
      >
        <div
          className="
            grid grid-cols-1
            items-center
            gap-6
            lg:grid-cols-12
            lg:gap-5
          "
        >
          {/* ======================================
              LEFT SIDE CONTENT
          ====================================== */}

          <div
            className="
              relative z-10
              col-span-1
              w-full max-w-[720px]
              lg:col-span-7
              xl:col-span-7
            "
          >
            {/* Eyebrow */}

            <motion.div
              {...reveal(0.1)}
              className="
                mb-3
                font-sans
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#671c29]
                sm:mb-6
                sm:text-sm
              "
            >
              We Build
            </motion.div>

            {/* ======================================
                MAIN HEADING
            ====================================== */}

            <motion.h1
              {...reveal(0.2)}
              className="
                max-w-[720px]
                font-serif
                text-[clamp(2.15rem,8.2vw,5rem)]
                font-bold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#3B0A12]
              "
            >
              Websites for

              <br />

              Your{' '}

              <span
                className="
                  bg-gradient-to-r
                  from-[#805022]
                  via-[#A8753D]
                  to-[#805022]
                  bg-clip-text
                  text-transparent
                "
              >
                Business
              </span>
            </motion.h1>

            {/* ======================================
                DESCRIPTION
            ====================================== */}

            <motion.p
              {...reveal(0.35)}
              className="
                mt-4
                max-w-[560px]
                font-sans
                text-sm
                leading-[1.65]
                text-[#514747]
                sm:mt-6
                sm:text-base
                lg:text-lg
              "
            >
              Modern, responsive and result-driven websites
              that help you grow. From business websites to
              e-commerce, portfolios and custom solutions.
            </motion.p>

            {/* ======================================
                CTA BUTTONS
            ====================================== */}

            <motion.div
              {...reveal(0.5)}
              className="
                mt-5
                flex flex-row flex-wrap
                items-center
                gap-3
                sm:mt-8
                sm:flex-row
                sm:items-center
                sm:gap-6
              "
            >
 {/* GET A QUOTE */}

<a
  href="/contact"
  className="
    inline-flex
    min-h-[44px]
    w-auto
    items-center
    justify-center
    gap-2
    rounded-full
    border-0
    bg-[#671c29]
    px-5
    font-sans
    text-sm
    font-semibold
    text-white
    shadow-none
    transition-none
    hover:bg-[#671c29]
    hover:text-white
    hover:shadow-none
    focus:bg-[#671c29]
    active:bg-[#671c29]
    sm:min-h-[50px]
    sm:px-7
    sm:text-[15px]
    sm:w-auto
    sm:min-w-[200px]
  "
>
  <span>Get a Quote</span>

  <span aria-hidden="true">↗</span>
</a>
              {/* VIEW OUR WORK */}

              <a
                href="/work"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  font-sans
                  text-sm
                  font-semibold
                  text-[#671c29]
                  transition-colors duration-300
                  hover:text-[#986334]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#671c29]
                  focus-visible:ring-offset-4
                  sm:text-base
                "
              >
                <span
                  className="
                    flex h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#671c29]
                    text-white
                    shadow-sm
                    transition-all duration-300
                    group-hover:scale-105
                    group-hover:bg-[#671c29]
                  "
                >
                  <Play
                    className="ml-0.5 h-4 w-4"
                    fill="currentColor"
                  />
                </span>

                <span>View Our Work</span>
              </a>
            </motion.div>

            {/* ======================================
                FEATURE HIGHLIGHTS
            ====================================== */}

            <motion.div
              {...reveal(0.7)}
              className="
                mt-6 grid grid-cols-3 gap-2
                border-t border-[#5A1020]/20 pt-4
                sm:mt-10 sm:grid-cols-3 sm:gap-4 sm:pt-6
                lg:max-w-[690px]
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      group flex min-w-0 flex-col items-start gap-2
                      rounded-xl border border-[#5A1020]/10
                      bg-[#FFF9F0]/85 px-2 py-2.5
                      shadow-[0_6px_22px_rgba(59,10,18,0.07)]
                      backdrop-blur-sm
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-[#8B1730]/30
                      hover:bg-white hover:shadow-[0_12px_28px_rgba(59,10,18,0.13)]
                      sm:flex-row sm:gap-3 sm:px-3 sm:py-4
                    "
                  >
                    <span
                      className="
                        flex h-8 w-8 shrink-0 items-center justify-center
                        rounded-xl border border-[#8B1730]/15
                        bg-gradient-to-br from-[#671c29] to-[#3B0A12]
                        text-[#F8E7C5]
                        shadow-[0_5px_12px_rgba(59,10,18,0.22)]
                        transition-transform duration-300
                        group-hover:scale-105
                        sm:h-12 sm:w-12
                      "
                    >
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={2} />
                    </span>

                    <div className="min-w-0">
                      <p
                        className="
                          font-serif text-[11px] font-bold leading-tight
                          tracking-[0.01em] text-[#3B0A12]
                          sm:text-[15px] md:text-base
                        "
                      >
                        {feature.title}
                      </p>

                      <p
                        className="
                          mt-1 font-sans text-[10px] font-medium leading-tight
                          text-[#5B2630] sm:text-sm
                        "
                      >
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ======================================
              RIGHT SIDE SPACE
              Background image remains visible
          ====================================== */}

          <div
            aria-hidden="true"
            className="
              hidden
              lg:col-span-5
              lg:block
              lg:min-h-[420px]
              xl:min-h-[500px]
            "
          />
        </div>
      </div>

      {/* ========================================
          BOTTOM DECORATIVE LINE
      ======================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          z-10 h-px
          bg-gradient-to-r
          from-transparent
          via-[#B38A4B]/40
          to-transparent
        "
      />
    </section>
  );
}

export default HeroSection;