
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Plus,
  Minus,
  MessageCircle,
  Zap,
  UserRound,
  Heart,
  ArrowRight,
  CircleHelp,
} from 'lucide-react';

import faqHero from '../../assets/faq-hero.png';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most of our websites are completed within 1 to 3 weeks, depending on the project type and requirements. Simple business websites take less time, while custom designs or e-commerce websites may take longer. We always give you a clear timeline before we start.',
  },
  {
    question: 'Do you provide domain and hosting?',
    answer:
      'Yes! We can help you choose and set up a domain name and reliable hosting for your website. Domain registration and hosting charges depend on the provider and plan you choose. We explain the costs before proceeding.',
  },
  {
    question: 'Can I update the website myself?',
    answer:
      'Yes. We can build your website with an easy-to-manage content system, depending on your requirements. You can update supported content such as text, images, and products without needing to change the code. We can also guide you through the basic editing process.',
  },
  {
    question: 'Do you provide support after the website is launched?',
    answer:
      'Yes. Support is available according to your selected package. We can help with troubleshooting, basic maintenance, and agreed updates after launch. The support duration and included services will be explained clearly before the project begins.',
  },
  {
    question: 'What is included in your website packages?',
    answer:
      'Our packages can include responsive design, essential pages, contact forms, WhatsApp integration, basic SEO setup, and other features based on your selected plan. E-commerce projects can also include product pages, cart, checkout, and payment integration where agreed.',
  },
  {
    question: 'Will my website be mobile friendly and SEO ready?',
    answer:
      'Yes. We design websites to adapt to mobile phones, tablets, laptops, and desktops. We can also implement foundational SEO practices such as page titles, meta descriptions, semantic structure, and image optimization. Search rankings depend on several factors and cannot be guaranteed.',
  },
  {
    question: 'Do you work with businesses outside India?',
    answer:
      'Yes. We can discuss website projects with businesses and individuals outside India. Communication, project requirements, timelines, payment arrangements, and any applicable additional costs are discussed before the project starts.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply contact us through WhatsApp or our contact page. Tell us about your business, the type of website you need, your preferred features, and your budget. We will discuss your requirements and the next steps with you.',
  },
];

const supportBenefits = [
  { label: 'Quick', sublabel: 'Response', icon: Zap },
  { label: 'Direct', sublabel: 'Support', icon: UserRound },
  { label: 'No', sublabel: 'Obligation', icon: Heart },
];

function FAQItem({ faq, index, isOpen, onToggle, reducedMotion }) {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.35,
        delay: reducedMotion ? 0 : index * 0.035,
      }}
      className={`
        group overflow-hidden rounded-[13px] border
        transition-all duration-300 sm:rounded-[15px]
        ${
          isOpen
            ? 'border-[#E6CDB3] bg-white/65 shadow-[0_7px_22px_rgba(65,20,25,0.065)]'
            : 'border-[#F0E2D3] bg-white/50 shadow-[0_3px_12px_rgba(65,20,25,0.035)] hover:border-[#D9B894] hover:bg-white/75 hover:shadow-[0_6px_18px_rgba(65,20,25,0.06)]'
        }
      `}
    >
      <button
        id={questionId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="
          flex min-h-[58px] w-full items-center gap-3
          px-3.5 py-3 text-left
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-inset focus-visible:ring-[#C7A15A]
          sm:min-h-[64px] sm:gap-4 sm:px-5
          lg:gap-5 lg:px-[21px]
        "
      >
        {/* Question number */}
        <span
          aria-hidden="true"
          className="
            w-[34px] shrink-0 font-serif
            text-[23px] font-semibold leading-none
            tracking-[-0.7px] text-[#AD794B]
            sm:w-[39px] sm:text-[26px]
          "
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Elegant separator */}
        <span
          aria-hidden="true"
          className="
            h-6 w-px shrink-0 bg-[#DCC4AC]
            sm:h-[27px]
          "
        />

        {/* Question */}
        <span
          className="
            min-w-0 flex-1 font-serif
            text-[13px] font-bold leading-[1.45]
            tracking-[-0.2px] text-[#54101D]
            sm:text-[15px] md:text-[16px]
            lg:text-[15px] xl:text-[16px]
          "
        >
          {faq.question}
        </span>

        {/* Plus / minus control */}
        <span
          className={`
            flex h-[29px] w-[29px] shrink-0
            items-center justify-center rounded-full border
            transition-all duration-300 sm:h-[32px] sm:w-[32px]
            ${
              isOpen
                ? 'rotate-180 border-[#790D26] bg-[#790D26] text-[#FFF9F0] shadow-[0_3px_10px_rgba(121,13,38,0.18)]'
                : 'border-[#D9BCA4] bg-[#FFF9F0] text-[#54101D] group-hover:border-[#790D26] group-hover:bg-[#790D26] group-hover:text-white'
            }
          `}
        >
          {isOpen ? (
            <Minus size={16} strokeWidth={2} />
          ) : (
            <Plus size={16} strokeWidth={1.8} />
          )}
        </span>
      </button>

      {/* Animated answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.28 }}
            className="overflow-hidden"
          >
            <div className="pb-3.5 pl-[61px] pr-3.5 sm:pb-4 sm:pl-[83px] sm:pr-5 lg:pl-[88px]">
              <div
                className="
                  rounded-[9px] bg-[#F8EFE5]/75
                  px-3 py-2.5 sm:px-3.5 sm:py-3
                "
              >
                <p
                  className="
                    font-sans text-[12px] leading-[1.75]
                    text-[#6C625E]
                    sm:text-[13px] sm:leading-[1.8]
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function FAQContactCard() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[390px]">
      {/* Decorative question badge */}
      <div
        aria-hidden="true"
        className="
          absolute -left-3 top-5 z-20
          flex h-[52px] w-[52px] items-center
          justify-center rounded-full
          border-[3px] border-[#FFF9F0]
          bg-gradient-to-br from-[#D3A46C] to-[#9A6536]
          text-white shadow-[0_4px_15px_rgba(91,42,17,0.2)]
          sm:-left-4 sm:top-6 sm:h-[62px] sm:w-[62px]
        "
      >
        <CircleHelp size={31} strokeWidth={1.8} />
      </div>

      {/* Workspace image */}
      <div
        className="
          relative h-[265px] overflow-hidden
          rounded-t-[160px] border-x border-t
          border-[#D5AC75] bg-[#EBD7C1]
          p-[5px] sm:h-[310px] sm:rounded-t-[190px]
          lg:h-[320px] xl:h-[340px]
        "
      >
        <img
          src={faqHero}
          alt="MosanTech's premium website development workspace"
          loading="lazy"
          decoding="async"
          className="
            h-full w-full rounded-t-[155px]
            object-cover object-[50%_55%]
            sm:rounded-t-[185px]
          "
        />

        {/* Soft image overlay */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-[5px]
            rounded-t-[155px]
            bg-gradient-to-t from-[#351016]/15 via-transparent to-transparent
            sm:rounded-t-[185px]
          "
        />
      </div>

      {/* Contact panel */}
      <div
        className="
          relative -mt-1 rounded-[22px]
          border border-[#F0E2D3]
          bg-gradient-to-br from-[#FFFCF7] via-[#FBF3E9] to-[#F7EBDD]
          p-5 shadow-[0_14px_35px_rgba(65,20,25,0.09)]
          sm:rounded-[25px] sm:p-6
          lg:p-[25px]
        "
      >
        <p
          className="
            font-sans text-[9px] font-bold uppercase
            tracking-[2.4px] text-[#96502F]
            sm:text-[10px] sm:tracking-[2.7px]
          "
        >
          Still Have Questions?
        </p>

        <h3
          className="
            mt-2 font-serif text-[29px]
            font-bold leading-[1.12]
            tracking-[-0.8px] text-[#351016]
            sm:text-[32px] xl:text-[34px]
          "
        >
          Let’s Talk{' '}
          <span className="text-[#A46B40]">Directly</span>
        </h3>

        <p
          className="
            mt-2.5 max-w-[310px] font-sans
            text-[12px] leading-[1.75] text-[#70615B]
            sm:text-[13px]
          "
        >
          Can’t find the answer you’re looking for?
          We’re just a message away.
        </p>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group mt-4 inline-flex min-h-[43px]
            w-full items-center justify-center gap-2.5
            rounded-full border border-[#8D3545]/30
            bg-gradient-to-r from-[#790D26] to-[#5B091B]
            px-4 py-3 font-sans text-[12px] font-semibold
            text-[#FFF9F0]
            shadow-[0_5px_15px_rgba(121,13,38,0.16)]
            transition-all duration-300
            hover:-translate-y-0.5 hover:border-[#C7A15A]
            hover:shadow-[0_9px_22px_rgba(121,13,38,0.22)]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#C7A15A] focus-visible:ring-offset-2
            sm:w-auto sm:min-w-[215px] sm:text-[13px]
          "
        >
          <MessageCircle size={17} strokeWidth={1.8} />
          <span>Chat on WhatsApp</span>
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        {/* Small contact benefits */}
        <div
          className="
            mt-5 grid grid-cols-3
            divide-x divide-[#E6D2BD]
            border-t border-[#EAD9C7] pt-4
          "
        >
          {supportBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.label}
                className="flex min-w-0 items-start gap-1.5 px-1.5 first:pl-0 last:pr-0 sm:gap-2 sm:px-2"
              >
                <Icon
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#790D26] sm:h-[18px] sm:w-[18px]"
                />

                <div className="min-w-0">
                  <p className="font-sans text-[10px] font-bold leading-tight text-[#351016] sm:text-[11px]">
                    {benefit.label}
                  </p>

                  <p className="mt-0.5 font-sans text-[9px] leading-[1.4] text-[#806B62] sm:text-[10px]">
                    {benefit.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="faq"
      className="
        relative isolate overflow-hidden
        bg-[#FFF9F0] py-12 text-[#351016]
        sm:py-14 lg:py-[76px]
      "
    >
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-28 top-32 -z-10
          h-72 w-72 rounded-full
          bg-[#D9B77D]/[0.12] blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24 bottom-12 -z-10
          h-80 w-80 rounded-full
          bg-[#790D26]/[0.055] blur-[110px]
        "
      />

      {/* Subtle decorative circles */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-20 top-0 -z-10
          h-64 w-64 rounded-full border border-[#D8B58A]/25
          sm:-right-28 sm:h-80 sm:w-80
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -bottom-40 -left-24 -z-10
          h-64 w-[430px] -rotate-[18deg]
          rounded-[50%] bg-[#790D26]/[0.035]
          sm:h-80 sm:w-[550px]
        "
      />

      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-7 lg:px-10 xl:px-12">
        {/* Heading */}
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center sm:mb-10 lg:mb-11"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-9 bg-gradient-to-r from-transparent to-[#C7A15A] sm:w-14"
            />

            <p
              className="
                font-sans text-[10px] font-bold uppercase
                tracking-[3px] text-[#96502F]
                sm:text-[11px] sm:tracking-[3.5px]
              "
            >
              FAQ
            </p>

            <span
              aria-hidden="true"
              className="h-px w-9 bg-gradient-to-l from-transparent to-[#C7A15A] sm:w-14"
            />
          </div>

          <h2
            className="
              font-serif text-[clamp(1.85rem,4vw,3.1rem)]
              font-bold leading-[1.13]
              tracking-[-0.9px] text-[#351016]
            "
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#A16B40] to-[#BC8A58] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p
            className="
              mx-auto mt-2.5 max-w-2xl
              font-sans text-[12px] leading-[1.75]
              text-[#70615B]
              sm:text-[14px]
            "
          >
            Quick answers to common questions about our website
            development services.
          </p>
        </motion.header>

        {/* Main layout */}
        <div
          className="
            grid grid-cols-1 items-start gap-8
            lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.7fr)]
            lg:gap-8 xl:grid-cols-[minmax(320px,0.8fr)_minmax(0,1.7fr)]
            xl:gap-11 2xl:gap-14
          "
        >
          {/* Left: Image and contact card */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55 }}
            className="mx-auto w-full max-w-[390px] lg:mt-1"
          >
            <FAQContactCard />
          </motion.div>

          {/* Right: FAQ accordion */}
          <div className="min-w-0">
            <div className="space-y-2.5 sm:space-y-[11px]">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((current) =>
                      current === index ? -1 : index
                    )
                  }
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>

            {/* Bottom note */}
            <motion.p
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="
                mt-4 flex items-start gap-2 px-1
                font-sans text-[10px] leading-[1.7]
                text-[#806B62] sm:mt-5 sm:text-[11px]
              "
            >
              <CircleHelp
                size={15}
                className="mt-0.5 shrink-0 text-[#A46B40]"
              />

              <span>
                Have a question that isn’t listed here? Contact us and
                we’ll help you understand the best solution for your
                business.
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

