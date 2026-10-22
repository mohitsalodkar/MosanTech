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
            absolute left-3 top-3
            rounded-full border border-white/80
            bg-[#FFF9F0] px-3 py-1.5
            font-['Montserrat',sans-serif]
            text-[9px] font-semibold uppercase
            tracking-[1.3px] text-[#790D26]
            sm:left-4 sm:top-4 sm:text-[10px]
          "
        >
          {project.category}
        </span>
      </div>

      {/* Project Information */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3
          className="
            font-['Plus_Jakarta_Sans',sans-serif]
            text-[14px] font-bold leading-snug
            text-[#54101D]
            sm:text-base
          "
        >
          {project.title}
        </h3>

        <p
          className="
            mt-1.5 min-h-[38px]
            text-[12px] leading-[1.7]
            text-[#76635B]
            sm:text-[13px]
          "
        >
          {project.description}
        </p>

        {/* Live Demo Button */}
        <div className="mt-auto pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex min-h-[40px] items-center
                justify-center gap-2 rounded-full
                border border-[#8D3545]
                px-5 py-2
                text-[12px] font-bold
                text-[#790D26]
                transition-all duration-300
                hover:bg-[#790D26] hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C7A15A]
              "
            >
              Live Demo
              <ArrowRight size={15} />
            </a>
          ) : (
            <span
              className="
                inline-flex min-h-[40px] items-center
                justify-center gap-2 rounded-full
                border border-[#8D3545]
                px-5 py-2
                text-[12px] font-bold
                text-[#790D26]
              "
            >
              Live Demo
              <ArrowRight size={15} />
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
        py-12 sm:py-14 lg:py-[72px]
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

      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-14">

        {/* Section Heading */}
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="
            mb-7 flex flex-col items-start
            justify-between gap-5
            sm:mb-8 sm:flex-row sm:items-end
          "
        >
          <div>
            <p
              className="
                mb-2 font-['Montserrat',sans-serif]
                text-[10px] font-bold uppercase
                tracking-[3px] text-[#8A1830]
                sm:text-[11px]
              "
            >
              Our Recent Work
            </p>

            <h2
              className="
                font-['Georgia',serif]
                text-[29px] font-bold
                leading-[1.15] tracking-[-0.7px]
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
              inline-flex shrink-0 items-center
              justify-center gap-2.5
              rounded-full border border-[#8D3545]
              px-5 py-2.5
              text-[12px] font-bold
              text-[#790D26]
              transition-all duration-300
              hover:bg-[#790D26] hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#C7A15A]
              sm:text-[13px]
            "
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </motion.header>

        {/* Responsive Project Grid */}
        <div
          className="
            grid grid-cols-1 items-stretch gap-5
            sm:grid-cols-2
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