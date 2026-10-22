import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  ShoppingBag,
  Monitor,
  BarChart3,
  Heart,
  QrCode,
  ArrowRight,
} from 'lucide-react';

import websiteImage from '../../assets/servicesimg/website.jpg';
import ecommerceImage from '../../assets/servicesimg/ecommerce.jpg';
import portfolioImage from '../../assets/servicesimg/portfolio.jpg';
import businessImage from '../../assets/servicesimg/business.jpg';
import invitationsImage from '../../assets/servicesimg/invitations.jpg';
import customWebsitesImage from '../../assets/servicesimg/custom-websites.jpg';

const services = [
  {
    id: 'landing-pages',
    title: 'Website',
    subtitle: 'Landing Pages',
    description: 'Modern and engaging landing pages for your brand or business.',
    image: websiteImage,
    icon: Globe,
    imageAlt: 'Website landing page displayed on a laptop',
  },
  {
    id: 'ecommerce',
    title: 'ecommerce',
    subtitle: 'Websites',
    description: 'Beautiful online stores with a smooth, secure shopping experience.',
    image: ecommerceImage,
    icon: ShoppingBag,
    imageAlt: 'E-commerce shopping experience on mobile',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Websites',
    description: 'Showcase your work, skills and achievements professionally.',
    image: portfolioImage,
    icon: Monitor,
    imageAlt: 'Portfolio website displayed on a desktop',
  },
  {
    id: 'business',
    title: 'Business',
    subtitle: 'Websites',
    description: 'Professional websites for startups, SMEs and growing businesses.',
    image: businessImage,
    icon: BarChart3,
    imageAlt: 'Business website displayed on a laptop',
  },
  {
    id: 'invitations',
    title: 'Wedding &',
    subtitle: 'Birthday Invites',
    description: 'Beautiful digital invitations with RSVP for your special day.',
    image: invitationsImage,
    icon: Heart,
    imageAlt: 'Digital wedding and birthday invitation design',
  },
  {
    id: 'qr-menu',
    title: 'QR Menu',
    subtitle: 'Websites',
    description: 'Digital menus for restaurants, cafes, bars and shops.',
    image: customWebsitesImage,
    icon: QrCode,
    imageAlt: 'Digital menu displayed on devices',
  },
];

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay: (index % 3) * 0.06 }}
      className="
        group relative flex min-h-[340px] flex-col overflow-hidden
        rounded-[18px] border border-[#F0E2D1] bg-[#FFFCF7]
        shadow-[0_5px_16px_rgba(72,39,25,0.07)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[#D9BFA0]
        hover:shadow-[0_14px_28px_rgba(72,39,25,0.12)]
        sm:min-h-[350px] lg:min-h-[330px] xl:min-h-[350px]
      "
    >
      {/* Full-width image strip at the top, matching the provided reference */}
      <div className="relative h-[172px] w-full overflow-hidden bg-[#F1E4D5] sm:h-[185px]">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
          className="
            h-full w-full object-cover object-center
            transition-transform duration-700 ease-out
            group-hover:scale-[1.045]
          "
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B1117]/25 via-transparent to-transparent"
        />
        <div className="
          absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center
          rounded-[12px] border border-white/70 bg-[#FFF9F0]/95
          text-[#671C29] shadow-[0_4px_12px_rgba(43,17,23,0.12)]
          transition-all duration-300
          group-hover:-translate-y-0.5 group-hover:bg-[#671C29] group-hover:text-white
          sm:left-5
        ">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
        </div>
      </div>

      {/* Clear, spacious text area beneath the image */}
      <div className="flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5">
        <h3 className="
          font-['Montserrat',sans-serif] text-[17px] font-bold
          leading-[1.25] tracking-[-0.35px] text-[#2B1117]
          sm:text-[18px]
        ">
          <span className="block">{service.title}</span>
          <span className="block">{service.subtitle}</span>
        </h3>

        <p className="
          mt-2.5 max-w-[34ch] font-['Montserrat',sans-serif]
          text-[12px] font-normal leading-[1.65] text-[#625452]
          sm:mt-3 sm:text-[13px]
        ">
          {service.description}
        </p>

        <div className="mt-auto flex justify-end pt-4">
          <Link
            to={`/services?service=${service.id}`}
            aria-label={`Explore ${service.title} ${service.subtitle}`}
            className="
              inline-flex h-10 w-10 items-center justify-center rounded-full
              border border-white/80 bg-[#671C29] text-white
              shadow-[0_4px_10px_rgba(103,28,41,0.18)]
              transition-all duration-300
              hover:scale-105 hover:bg-[#4F1420]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#C7A15A] focus-visible:ring-offset-2
            "
          >
            <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-0 left-0 h-[3px] w-0
          bg-gradient-to-r from-[#671C29] to-[#C7A15A]
          transition-all duration-500 group-hover:w-full
        "
      />
    </motion.article>
  );
}

export function ServicesPreviewSection() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#FFF9F0] py-12 text-[#2B1117] sm:py-14 lg:py-[68px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-64 w-64 rounded-full bg-[#C7A15A]/[0.08] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#671C29]/[0.04] blur-[100px]"
      />

      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-8 max-w-5xl text-center sm:mb-10 lg:mb-11"
        >
          <p className="
            mb-2.5 font-['Montserrat',sans-serif] text-[10px]
            font-bold uppercase tracking-[0.3em] text-[#671C29]
            sm:mb-3 sm:text-[11px] sm:tracking-[0.34em]
          ">
            Our Services
          </p>

          {/* Match the premium display serif used in the hero headline */}
          <h2 className="
            font-['Bodoni_Moda',serif]
            text-[clamp(2rem,3.1vw,2.8rem)] font-semibold
            leading-[1.12] tracking-[-0.025em] text-[#2B1117]
          ">
            Everything You Need to Build Your Online Presence
          </h2>

          <p className="
            mx-auto mt-3 max-w-3xl font-['Montserrat',sans-serif]
            text-[12px] font-medium leading-6 text-[#625452]
            sm:mt-3.5 sm:text-sm lg:text-[15px]
          ">
            We create modern, high-performing websites tailored to your business goals.
          </p>

          <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#671C29] to-[#C7A15A] sm:mt-5" />
        </motion.header>

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            to="/services"
            className="
              group inline-flex min-h-11 items-center justify-center gap-2
              rounded-full border border-[#671C29]/25 px-6 py-3
              font-['Montserrat',sans-serif] text-xs font-semibold text-[#671C29]
              shadow-[0_4px_12px_rgba(103,28,41,0.04)]
              transition-all duration-300 hover:border-[#671C29]
              hover:bg-[#671C29] hover:text-white
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#671C29] focus-visible:ring-offset-2
              sm:text-sm
            "
          >
            Explore All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreviewSection;
