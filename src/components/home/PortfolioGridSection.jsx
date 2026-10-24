import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'restaurant',
    title: 'Restaurant Website',
    description: 'Modern menu & booking system',
    image: '/images/projects/restaurant-website.jpg',
    category: 'Food & Hospitality',
    liveUrl: '',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Website',
    description: 'Online store for products',
    image: '/images/projects/ecommerce-website.jpg',
    category: 'E-Commerce',
    liveUrl: '',
  },
  {
    id: 'business',
    title: 'Business Website',
    description: 'Professional business site',
    image: '/images/projects/business-website.jpg',
    category: 'Business',
    liveUrl: '',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Showcase work & skills',
    image: '/images/projects/portfolio-website.jpg',
    category: 'Portfolio',
    liveUrl: '',
  },
];

function ProjectCard({ project, index, reducedMotion }) {
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={reducedMotion ? undefined : { y: -5 }}
      className="
        group flex h-full min-w-0 flex-col overflow-hidden
        rounded-[17px] border border-[#EEDCC8]
        bg-[#FFFCF7]
        shadow-[0_5px_20px_rgba(65,20,25,0.055)]
        transition-shadow duration-300
        hover:border-[#D6B58A]
        hover:shadow-[0_15px_35px_rgba(65,20,25,0.12)]
      "
    >
      {/* Website Preview */}
      <div className="relative aspect-[1.42/1] overflow-hidden bg-[#E9DCCB]">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="
            h-full w-full object-cover object-top
            transition-transform duration-700
            group-hover:scale-[1.04]
          "
          onError={(event) => {
            event.currentTarget.style.opacity = '0';
          }}
        />

        {/* Category Badge */}
        <span
          className="
            absolute left-2.5 top-2.5
            max-w-[calc(100%-1.25rem)] truncate
            rounded-full border border-white/80
            bg-[#FFF9F0] px-2.5 py-1
            font-['Montserrat',sans-serif]
            text-[8px] font-semibold uppercase
            tracking-[1px] text-[#790D26]
            sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px]
          "
        >
          {project.category}
        </span>
      </div>

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <h3
          className="
            font-['Montserrat',sans-serif]
            text-[13px] font-bold leading-snug
            text-[#54101D]
            sm:text-base
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-1.5 min-h-[34px]
            text-[11px] leading-[1.65]
            text-[#76635B]
            sm:min-h-[38px] sm:text-[13px] sm:leading-[1.7]
          "
        >
          {project.description}
        </p>

        {/* Live Demo Button */}
        <div className="mt-auto pt-3 sm:pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex min-h-[34px] items-center
                justify-center gap-1.5 rounded-full
                border border-[#8D3545]
                px-3.5 py-1.5
                text-[11px] font-bold
                text-[#790D26]
                transition-all duration-300
                hover:bg-[#790D26] hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C7A15A]
                sm:min-h-[40px] sm:gap-2 sm:px-5 sm:py-2 sm:text-[12px]
              "
            >
              Live Demo
              <ArrowRight size={14} />
            </a>
          ) : (
            <span
              className="
                inline-flex min-h-[34px] items-center
                justify-center gap-1.5 rounded-full
                border border-[#8D3545]
                px-3.5 py-1.5
                text-[11px] font-bold
                text-[#790D26]
                sm:min-h-[40px] sm:gap-2 sm:px-5 sm:py-2 sm:text-[12px]
              "
            >
              Live Demo
              <ArrowRight size={14} />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function PortfolioGridSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="our-work"
      className="
        relative isolate overflow-hidden
        bg-[#FFF9F0] text-[#351016]
        py-10 sm:py-14 lg:py-[72px]
      "
    >
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -left-24 top-20 -z-10
          h-72 w-72 rounded-full
          bg-[#D9B77D]/10 blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-24 bottom-0 -z-10
          h-72 w-72 rounded-full
          bg-[#790D26]/[0.045] blur-[100px]
        "
      />

      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-8 lg:px-12 xl:px-14">
        {/* Section Heading */}
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="
            mb-6 flex flex-col items-start
            justify-between gap-4
            sm:mb-8 sm:flex-row sm:items-end sm:gap-5
          "
        >
          <div>
            <p
              className="
                mb-2 font-['Montserrat',sans-serif]
                text-[9px] font-bold uppercase
                tracking-[2.5px] text-[#8A1830]
                sm:text-[11px] sm:tracking-[3px]
              "
            >
              Our Recent Work
            </p>

            <h2
              className="
                font-['Bodoni_Moda',serif]
                text-[clamp(1.65rem,7vw,2.4rem)] font-bold
                leading-[1.15] tracking-[-0.6px]
                text-[#2A1010]
                sm:text-3xl md:text-[38px]
                lg:text-[42px]
              "
            >
              Websites We’ve Built
            </h2>
          </div>

          {/* View All Projects */}
          <a
            href="/#our-work"
            className="
              inline-flex min-h-[36px] shrink-0 items-center
              justify-center gap-2
              rounded-full border border-[#8D3545]
              px-4 py-2
              text-[11px] font-bold
              text-[#790D26]
              transition-all duration-300
              hover:bg-[#790D26] hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C7A15A]
              sm:min-h-[40px] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-[13px]
            "
          >
            View All Projects
            <ArrowRight size={14} />
          </a>
        </motion.header>

        {/* Responsive Project Grid */}
        <div
          className="
            grid grid-cols-2 items-stretch gap-3
            sm:grid-cols-2 sm:gap-5
            lg:grid-cols-4 lg:gap-5
            xl:gap-6
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGridSection;
