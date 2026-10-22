import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import landingImage from '../../assets/servicesimg/website.jpg';
import businessImage from '../../assets/servicesimg/business.jpg';
import ecommerceImage from '../../assets/servicesimg/ecommerce.jpg';
import customImage from '../../assets/servicesimg/custom-websites.jpg';

const plans = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    subtitle: 'Website',
    description: 'Perfect for startups, individuals & small businesses.',
    image: landingImage,
    features: [
      'Single page website',
      'Modern & responsive design',
      'Contact form',
      'WhatsApp integration',
      'Basic SEO setup',
    ],
    price: '₹4,999',
  },
  {
    id: 'business-website',
    title: 'Business',
    subtitle: 'Website',
    description: 'Showcase your business professionally.',
    image: businessImage,
    features: [
      'Up to 5 pages',
      'Custom professional design',
      'About, Services & Contact pages',
      'WhatsApp integration',
      'Mobile responsive',
      'Basic SEO setup',
    ],
    price: '₹9,999',
    popular: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    subtitle: 'Website',
    description: 'Start your online store and sell with ease.',
    image: ecommerceImage,
    features: [
      'Online store setup',
      'Up to 50 products',
      'Payment gateway integration',
      'Shipping configuration',
      'Cart & checkout setup',
      'Mobile responsive design',
    ],
    price: '₹19,999',
  },
  {
    id: 'advanced-ecommerce',
    title: 'Advanced',
    subtitle: 'E-Commerce',
    description: 'Complete online store for growing businesses.',
    image: customImage,
    features: [
      'Up to 100 products',
      'Premium storefront design',
      'Payment & shipping setup',
      'Product categories & filters',
      'Essential policy pages',
      'Complete testing & support',
    ],
    price: '₹24,999',
  },
];

function PlanCard({ plan, index, reducedMotion }) {
  const isPopular = Boolean(plan.popular);

  return (
    <motion.article
      initial={
        reducedMotion
          ? false
          : { opacity: 0, y: 24 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: 'easeOut',
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.25 },
            }
      }
      className={`
        group relative flex h-full min-w-0
        flex-col overflow-visible rounded-[18px]
        border transition-[border-color,box-shadow,background-color]
        duration-300
        ${
          isPopular
            ? `
              z-10 border-[#C7A15A]
              bg-gradient-to-b
              from-[#65091C] via-[#490714] to-[#30040D]
              text-[#FFF9F0]
              shadow-[0_12px_30px_rgba(75,7,22,0.19)]
              hover:shadow-[0_20px_42px_rgba(75,7,22,0.27)]
              lg:scale-[1.025]
            `
            : `
              border-[#EBD9C4]
              bg-gradient-to-b
              from-white via-[#FFFCF7] to-[#FAF0E3]
              text-[#351016]
              shadow-[0_7px_22px_rgba(53,16,22,0.065)]
              hover:border-[#C7A15A]
              hover:shadow-[0_18px_36px_rgba(53,16,22,0.13)]
            `
        }
      `}
    >
      {/* Popular badge */}
      {isPopular && (
        <div
          className="
            absolute -top-3.5 left-1/2 z-30
            -translate-x-1/2
          "
        >
          <span
            className="
              inline-flex items-center gap-1.5
              whitespace-nowrap rounded-full
              border border-[#E4C77F]
              bg-gradient-to-r
              from-[#8B1831] to-[#5A091A]
              px-4 py-1.5
              font-['Montserrat',sans-serif]
              text-[10px] font-bold
              tracking-[0.35px] text-[#FFF9F0]
              shadow-[0_5px_14px_rgba(53,16,22,0.22)]
            "
          >
            <Sparkles
              size={12}
              className="text-[#F1D28C]"
            />
            Most Popular
          </span>
        </div>
      )}

      {/* Website preview image */}
      <div
        className={`
          relative aspect-[1.45/0.92]
          overflow-hidden rounded-t-[17px]
          ${
            isPopular
              ? 'bg-[#4A0815]'
              : 'bg-[#F0E3D0]'
          }
        `}
      >
        <img
          src={plan.image}
          alt={`${plan.title} ${plan.subtitle} website preview`}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          className="
            h-full w-full object-cover object-top
            transition-transform duration-700
            ease-out group-hover:scale-[1.055]
          "
        />

        {/* Image overlay */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-t
            from-[#351016]/25 via-transparent
            to-white/[0.04]
          "
        />

        {/* Premium image border */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-x-0
            bottom-0 h-px bg-gradient-to-r
            from-transparent via-[#C7A15A]/60
            to-transparent
          "
        />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Title */}
        <div>
          <h3
            className={`
              font-['Montserrat',sans-serif]
              text-[15px] font-bold leading-[1.4]
              sm:text-base
              ${
                isPopular
                  ? 'text-[#FFF9F0]'
                  : 'text-[#351016]'
              }
            `}
          >
            {plan.title}

            <span
              className={`
                block
                ${
                  isPopular
                    ? 'text-[#F1D28C]'
                    : 'text-[#790D26]'
                }
              `}
            >
              {plan.subtitle}
            </span>
          </h3>

          <p
            className={`
              mt-2 min-h-[36px]
              text-[11px] leading-[1.7]
              sm:text-xs
              ${
                isPopular
                  ? 'text-[#F3DDE1]/85'
                  : 'text-[#76635B]'
              }
            `}
          >
            {plan.description}
          </p>
        </div>

        {/* Divider */}
        <div
          className={`
            my-4 h-px
            bg-gradient-to-r
            from-transparent via-current to-transparent
            ${
              isPopular
                ? 'text-[#D8B86B]/35'
                : 'text-[#E5D2BC]'
            }
          `}
        />

        {/* Features */}
        <ul className="space-y-3">
          {plan.features.map((feature, featureIndex) => (
            <li
              key={feature}
              className={`
                flex items-start gap-2.5
                text-[11px] leading-[1.55]
                sm:text-xs
                ${
                  isPopular
                    ? 'text-[#FFF4F0]'
                    : 'text-[#554642]'
                }
              `}
            >
              <span
                className={`
                  mt-px flex h-[17px] w-[17px]
                  shrink-0 items-center justify-center
                  rounded-full
                  ${
                    isPopular
                      ? 'bg-[#D8B86B]/15 text-[#E9CC80]'
                      : 'bg-[#790D26]/[0.07] text-[#790D26]'
                  }
                `}
              >
                <Check
                  size={11}
                  strokeWidth={2.8}
                />
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div
          className={`
            mt-auto pt-5
          `}
        >
          <div
            className={`
              relative overflow-hidden rounded-xl
              border px-3 py-4 text-center
              transition-all duration-300
              ${
                isPopular
                  ? `
                    border-[#D8B86B]/55
                    bg-gradient-to-br
                    from-[#FFF9F0] to-[#F5E7D2]
                    text-[#790D26]
                    shadow-[0_5px_18px_rgba(0,0,0,0.12)]
                  `
                  : `
                    border-[#EBD9C4]
                    bg-gradient-to-br
                    from-white to-[#FFF8EF]
                    text-[#790D26]
                    shadow-[0_3px_12px_rgba(53,16,22,0.035)]
                    group-hover:border-[#D5B68D]
                  `
              }
            `}
          >
            <span
              className="
                block text-[10px] font-medium
                text-[#806B62]
              "
            >
              Starting at
            </span>

            <span
              className="
                mt-1 block
                font-['Montserrat',sans-serif]
                text-[25px] font-extrabold
                leading-tight tracking-[-0.8px]
                sm:text-[27px]
              "
            >
              {plan.price}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
          <Link
            to="/contact"
            className={`
              group/button relative
              inline-flex min-h-[43px] w-full
              items-center justify-center gap-2
              overflow-hidden rounded-full
              border px-4 py-2.5
              font-['Montserrat',sans-serif]
              text-[11px] font-bold
              transition-all duration-300
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C7A15A]
              focus-visible:ring-offset-2
              ${
                isPopular
                  ? `
                    border-[#FFF9F0]
                    bg-[#FFF9F0] text-[#790D26]
                    hover:border-[#E6D3A3]
                    hover:bg-[#F2DFC0]
                    hover:shadow-[0_5px_18px_rgba(0,0,0,0.16)]
                    focus-visible:ring-offset-[#490714]
                  `
                  : `
                    border-[#8D3545]
                    bg-transparent text-[#790D26]
                    hover:border-[#790D26]
                    hover:bg-[#790D26]
                    hover:text-white
                    hover:shadow-[0_5px_18px_rgba(121,13,38,0.16)]
                    focus-visible:ring-offset-[#FFF9F0]
                  `
              }
            `}
          >
            <span>Get Started</span>

            <ArrowRight
              size={15}
              className="
                transition-transform duration-300
                group-hover/button:translate-x-1
              "
            />
          </Link>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div
        aria-hidden="true"
        className={`
          absolute bottom-0 left-1/2 h-[2px]
          -translate-x-1/2 rounded-full
          transition-all duration-500
          ${
            isPopular
              ? 'w-1/2 bg-[#D8B86B]'
              : 'w-0 bg-[#C7A15A] group-hover:w-1/2'
          }
        `}
      />
    </motion.article>
  );
}

export function PlansPreviewSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="plans"
      className="
        relative isolate overflow-hidden
        bg-[#FFF9F0] py-12
        text-[#351016]
        sm:py-14
        lg:py-16
      "
    >
      {/* Warm background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 top-16 -z-10
          h-72 w-72 rounded-full
          bg-[#C7A15A]/[0.09]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 bottom-0 -z-10
          h-72 w-72 rounded-full
          bg-[#790D26]/[0.045]
          blur-[100px]
        "
      />

      <div
        className="
          mx-auto w-full max-w-[1400px]
          px-5 sm:px-7
          lg:px-10 xl:px-12
        "
      >
        {/* Section header */}
        <motion.header
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="
            mb-7 flex flex-col
            items-start justify-between
            gap-4 sm:mb-9
            sm:flex-row sm:items-end
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                mb-2 font-['Montserrat',sans-serif]
                text-[10px] font-bold uppercase
                tracking-[2.7px] text-[#8A1830]
                sm:text-[11px] sm:tracking-[3px]
              "
            >
              Our Plans
            </p>

            <h2
              className="
                font-['Georgia',serif]
                text-[27px] font-bold
                leading-[1.15] tracking-[-0.6px]
                text-[#2A1010]
                sm:text-3xl
                md:text-[35px]
              "
            >
              Simple &amp; Transparent Pricing
            </h2>

            <p
              className="
                mt-2 max-w-2xl
                text-xs leading-5
                text-[#6B5A56]
                sm:text-sm sm:leading-6
              "
            >
              Choose the right website package for your
              business, with clear starting prices and
              features designed around your goals.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              group inline-flex min-h-[42px]
              shrink-0 items-center
              justify-center gap-2.5
              rounded-full border border-[#8D3545]
              bg-[#790D26] px-5 py-2.5
              font-['Montserrat',sans-serif]
              text-[11px] font-bold
              text-[#FFF9F0]
              shadow-[0_5px_16px_rgba(121,13,38,0.15)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#59091C]
              hover:bg-[#59091C]
              hover:shadow-[0_9px_22px_rgba(121,13,38,0.22)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C7A15A]
              focus-visible:ring-offset-2
              sm:text-xs
            "
          >
            Get a Quote

            <ArrowRight
              size={15}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.header>

        {/* Pricing cards */}
        <div
          className="
            grid grid-cols-1 items-stretch
            gap-5 sm:grid-cols-2
            sm:gap-5 lg:grid-cols-4
            lg:gap-5 xl:gap-6
          "
        >
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={
            reducedMotion
              ? false
              : { opacity: 0 }
          }
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-6 text-center
            text-[10px] leading-5
            text-[#806B62]
            sm:mt-8 sm:text-xs
          "
        >
          Need something different?{' '}
          <Link
            to="/contact"
            className="
              font-semibold text-[#790D26]
              underline decoration-[#C7A15A]/70
              underline-offset-4
              transition-colors duration-200
              hover:text-[#4B0915]
            "
          >
            Let's discuss your project.
          </Link>
        </motion.p>
      </div>
    </section>
  );
}

export default PlansPreviewSection;