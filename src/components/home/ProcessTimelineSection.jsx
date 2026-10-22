import { motion, useReducedMotion } from 'framer-motion';
import {
  MessageCircle,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Discuss',
    subtitle: 'Your Requirements',
    description:
      'We learn about your business, audience, goals and the features your website needs.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Design',
    subtitle: '& Plan',
    description:
      'We shape the visual direction, organize your pages and agree on a clear plan.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Develop',
    subtitle: '& Test',
    description:
      'We build your website, refine the details and test it across devices and screen sizes.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Launch',
    subtitle: '& Support',
    description:
      'We launch your website and help you take the next step with confidence.',
    icon: Rocket,
  },
];

const processStats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: 'Fast', label: 'Delivery Timeline' },
];

function ProcessStep({ step, index, reducedMotion }) {
  const Icon = step.icon;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.09,
        ease: 'easeOut',
      }}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -5, transition: { duration: 0.25 } }
      }
      className="
        group relative flex min-w-0 flex-col
        items-center rounded-2xl
        border border-[#D8B86B]/15
        bg-white/[0.025]
        px-3 py-5 text-center
        transition-all duration-300
        hover:border-[#D8B86B]/45
        hover:bg-white/[0.055]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
        sm:px-4 sm:py-6
        lg:border-transparent lg:bg-transparent
        lg:hover:border-[#D8B86B]/20
      "
    >
      {/* Step number */}
      <span
        className="
          absolute right-3 top-3
          font-['Montserrat',sans-serif]
          text-[10px] font-bold tracking-[2px]
          text-[#D8B86B]/65
          sm:right-4 sm:top-4
        "
      >
        {step.number}
      </span>

      {/* Icon */}
      <div
        className="
          relative mb-5 flex h-[66px] w-[66px]
          shrink-0 items-center justify-center
          rounded-full border border-[#D8B86B]/70
          bg-gradient-to-br from-[#6B1022] to-[#26040E]
          text-[#E6D3A3]
          shadow-[0_0_0_5px_rgba(216,184,107,0.06),0_8px_22px_rgba(0,0,0,0.2)]
          transition-all duration-500
          group-hover:border-[#E6D3A3]
          group-hover:shadow-[0_0_0_7px_rgba(216,184,107,0.09),0_10px_28px_rgba(0,0,0,0.25)]
          sm:h-[78px] sm:w-[78px]
          lg:h-[82px] lg:w-[82px]
        "
      >
        <Icon
          className="
            h-7 w-7 transition-transform duration-500
            group-hover:scale-110
            sm:h-8 sm:w-8
          "
          strokeWidth={1.6}
        />

        {/* Small gold accent */}
        <span
          aria-hidden="true"
          className="
            absolute bottom-0 left-1/2
            h-[3px] w-0 -translate-x-1/2
            rounded-full bg-[#D8B86B]
            transition-all duration-300
            group-hover:w-7
          "
        />
      </div>

      {/* Heading */}
      <h3
        className="
          font-['Montserrat',sans-serif]
          text-[13px] font-bold leading-[1.45]
          text-[#FFF9F0]
          sm:text-[15px]
          lg:text-base
        "
      >
        <span className="text-[#D8B86B]">
          {step.title}
        </span>

        <span className="mt-0.5 block text-[#FFF9F0]">
          {step.subtitle}
        </span>
      </h3>

      {/* Description */}
      <p
        className="
          mx-auto mt-3 max-w-[260px]
          font-['Montserrat',sans-serif]
          text-[10px] leading-[1.8]
          text-[#F1DDE0]/75
          transition-colors duration-300
          group-hover:text-[#FFF9F0]/90
          sm:text-[11px]
          lg:text-xs
        "
      >
        {step.description}
      </p>

      {/* Connecting arrow — desktop only */}
      {index < processSteps.length - 1 && (
        <div
          aria-hidden="true"
          className="
            absolute -right-[15px] top-[43px]
            z-20 hidden h-7 w-7
            items-center justify-center
            rounded-full border border-[#D8B86B]/25
            bg-[#390711] text-[#D8B86B]
            lg:flex
          "
        >
          <ArrowRight
            className="h-4 w-4"
            strokeWidth={1.5}
          />
        </div>
      )}
    </motion.article>
  );
}

export function ProcessTimelineSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="our-process"
      className="
        relative isolate overflow-hidden
        bg-[#390711] py-12
        text-[#FFF9F0]
        sm:py-16
        lg:py-[76px]
      "
    >
      {/* Premium burgundy background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-20
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(128,14,40,0.45),transparent_60%),linear-gradient(115deg,#390711_0%,#26050B_55%,#4A0A18_100%)]
        "
      />

      {/* Gold ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 top-12 -z-10
          h-72 w-72 rounded-full
          bg-[#A51D3C]/15 blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 bottom-0 -z-10
          h-72 w-72 rounded-full
          bg-[#D1AA61]/10 blur-[100px]
        "
      />

      {/* Decorative outlines */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-20 top-20 -z-10
          h-[380px] w-[200px]
          rotate-[25deg] rounded-[100%]
          border border-[#D8B86B]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-8 top-32 -z-10
          h-[320px] w-[130px]
          rotate-[25deg] rounded-[100%]
          border border-[#D8B86B]/10
        "
      />

      <div
        className="
          mx-auto w-full max-w-[1320px]
          px-5 sm:px-8 lg:px-12
        "
      >
        {/* Section heading */}
        <motion.header
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 14 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ duration: 0.45 }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <p
            className="
              mb-2.5 font-['Montserrat',sans-serif]
              text-[10px] font-bold uppercase
              tracking-[0.28em] text-[#D8B86B]
              sm:text-xs sm:tracking-[0.3em]
            "
          >
            Our Process
          </p>

          <h2
            className="
              max-w-4xl
              font-['Bodoni_Moda',serif]
              text-[clamp(2rem,3.4vw,3rem)]
              font-semibold leading-[1.12]
              tracking-[-0.025em]
              text-[#FFF9F0]
            "
          >
            Simple Process, Great Results
          </h2>

          {/* Decorative heading underline */}
          <div
            aria-hidden="true"
            className="
              mt-5 h-[2px] w-16
              rounded-full
              bg-gradient-to-r
              from-[#D8B86B] to-transparent
            "
          />
        </motion.header>

        {/* Four-step timeline */}
        <div className="relative">
          {/* Gold connecting line on desktop */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[12%] right-[12%] top-[41px]
              hidden h-px
              bg-gradient-to-r
              from-transparent
              via-[#D8B86B]/65
              to-transparent
              lg:block
            "
          />

          <div
            className="
              grid grid-cols-1 gap-4
              sm:grid-cols-2 sm:gap-5
              lg:grid-cols-4 lg:gap-4
              xl:gap-5
            "
          >
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.number}
                step={step}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>

        {/* Premium statistics panel */}
        <motion.div
          initial={
            reducedMotion
              ? false
              : { opacity: 0, y: 16 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            relative mt-8 overflow-hidden
            rounded-[18px]
            border border-[#D8B86B]/35
            bg-gradient-to-br
            from-[#FFF9F0] via-[#F8EDDE] to-[#F1E0CA]
            shadow-[0_14px_36px_rgba(0,0,0,0.18)]
            sm:mt-10
            lg:mt-12
          "
        >
          {/* Subtle gold highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-x-0 top-0
              h-px bg-gradient-to-r
              from-transparent via-[#C7A15A] to-transparent
            "
          />

          <div className="grid grid-cols-3">
            {processStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  relative flex min-w-0
                  min-h-[100px] flex-col
                  items-center justify-center
                  px-1.5 py-4 text-center
                  transition-colors duration-300
                  hover:bg-[#C7A15A]/[0.06]
                  sm:min-h-[120px] sm:px-4 sm:py-5
                  ${
                    index < processStats.length - 1
                      ? 'border-r border-[#D9C4A8]'
                      : ''
                  }
                `}
              >
                <span
                  className="
                    font-['Bodoni_Moda',serif]
                    text-[clamp(1.3rem,3vw,2.5rem)]
                    font-semibold leading-none
                    tracking-[-0.025em]
                    text-[#671C29]
                  "
                >
                  {stat.value}
                </span>

                <span
                  className="
                    mt-2 max-w-full
                    font-['Montserrat',sans-serif]
                    text-[9px] font-semibold
                    leading-snug text-[#5F4945]
                    sm:mt-2.5 sm:text-xs
                    md:text-sm
                  "
                >
                  {stat.label}
                </span>

                {/* Small accent */}
                <span
                  aria-hidden="true"
                  className="
                    mt-2.5 h-[2px] w-5
                    rounded-full bg-[#C7A15A]/70
                    sm:mt-3 sm:w-7
                  "
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessTimelineSection;