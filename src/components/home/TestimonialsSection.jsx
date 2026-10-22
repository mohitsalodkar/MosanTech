import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit Sharma',
    role: 'Restaurant Owner',
    initials: 'RS',
    quote:
      'Amazing work! The website looks professional and exactly what I needed. Highly recommended!',
  },
  {
    name: 'Priya Mehta',
    role: 'Small Business Owner',
    initials: 'PM',
    quote:
      'Very responsive and understood my requirements perfectly. Delivered on time with great design.',
  },
  {
    name: 'Amit Verma',
    role: 'Entrepreneur',
    initials: 'AV',
    quote:
      'Professional, creative and easy to work with. Highly recommend for website development.',
  },
  {
    name: 'Neha Patel',
    role: 'Founder',
    initials: 'NP',
    quote:
      'The whole process felt simple and organised. The final website looks clean and works beautifully on mobile.',
  },
  {
    name: 'Arjun Desai',
    role: 'Business Owner',
    initials: 'AD',
    quote:
      'Great communication, thoughtful design and a smooth handover. The team understood what our business needed.',
  },
];

function TestimonialCard({ testimonial, index, reducedMotion }) {
  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.38, delay: index * 0.06 }}
      className="
        group relative flex h-full min-h-[260px] flex-col overflow-hidden
        rounded-[20px] border border-[#F0E0CC] bg-[#FFFCF7]
        p-5 shadow-[0_8px_24px_rgba(53,16,22,0.07)]
        transition-all duration-300
        hover:-translate-y-1 hover:border-[#D9BFA0]
        hover:shadow-[0_16px_34px_rgba(53,16,22,0.12)]
        sm:min-h-[275px] sm:p-6
      "
    >
      {/* Warm decorative quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-4 text-[#671C29]/[0.055]"
      >
        <Quote className="h-24 w-24 fill-current" strokeWidth={0.6} />
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star
              key={starIndex}
              className="h-[15px] w-[15px] fill-[#C7A15A] text-[#C7A15A]"
              strokeWidth={1.4}
            />
          ))}
        </div>
        <span className="rounded-full border border-[#E8D7C4] bg-[#FFF9F0] px-2.5 py-1 font-['Montserrat',sans-serif] text-[9px] font-bold uppercase tracking-[0.13em] text-[#671C29]">
          Client review
        </span>
      </div>

      <p className="relative z-10 mt-5 flex-1 font-['Montserrat',sans-serif] text-[12px] leading-[1.8] text-[#514541] sm:text-[13px]">
        “{testimonial.quote}”
      </p>

      <div className="relative z-10 mt-5 flex items-center gap-3 border-t border-[#EADBC9] pt-4">
        <div
          aria-hidden="true"
          className="
            flex h-11 w-11 shrink-0 items-center justify-center rounded-full
            border border-[#D8B86B]/70 bg-gradient-to-br from-[#F5E7D5] to-[#E6CDAF]
            font-['Montserrat',sans-serif] text-xs font-extrabold text-[#671C29]
            shadow-[0_3px_10px_rgba(103,28,41,0.08)]
            transition-transform duration-300 group-hover:scale-105
          "
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-['Montserrat',sans-serif] text-[12px] font-bold text-[#351016] sm:text-[13px]">
            {testimonial.name}
          </h3>
          <p className="mt-1 font-['Montserrat',sans-serif] text-[10px] text-[#806B62] sm:text-[11px]">
            {testimonial.role}
          </p>
        </div>
        <div
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#671C29]/[0.06] text-[#671C29] transition-colors duration-300 group-hover:bg-[#671C29] group-hover:text-white"
        >
          <Quote className="h-4 w-4" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#671C29] to-[#C7A15A] transition-all duration-500 group-hover:w-full"
      />
    </motion.article>
  );
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const next = () =>
    setActiveIndex((current) => (current + 1) % testimonials.length);

  const previous = () =>
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );

  const visibleTestimonials = Array.from(
    { length: Math.min(visibleCount, testimonials.length) },
    (_, offset) => testimonials[(activeIndex + offset) % testimonials.length]
  );

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#FFF9F0] py-12 text-[#351016] sm:py-16 lg:py-[76px]"
    >
      {/* Soft ivory background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-8 -z-10 h-72 w-72 rounded-full bg-[#C7A15A]/[0.09] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-[#671C29]/[0.045] blur-[100px]"
      />

      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mb-7 text-center sm:mb-9 lg:mb-10"
        >
          <p className="mb-2 font-['Montserrat',sans-serif] text-[10px] font-bold uppercase tracking-[0.28em] text-[#671C29] sm:text-[11px] sm:tracking-[0.32em]">
            Client Testimonials
          </p>

          <h2 className="font-['Bodoni_Moda',serif] text-[clamp(2rem,3.2vw,2.8rem)] font-semibold leading-[1.12] tracking-[-0.025em] text-[#2B1117]">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-3 max-w-xl font-['Montserrat',sans-serif] text-xs leading-6 text-[#76635B] sm:text-sm">
            Kind words from people we’ve had the pleasure of working with.
          </p>

          <div className="mx-auto mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#671C29] to-[#C7A15A]" />
        </motion.header>

        <div className="relative px-0 sm:px-8 lg:px-10">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="
              absolute -left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2
              items-center justify-center rounded-full border border-[#E4CDB5]
              bg-[#671C29] text-[#FFF9F0] shadow-[0_5px_15px_rgba(53,16,22,0.16)]
              transition hover:scale-105 hover:bg-[#4F1420]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#C7A15A] sm:flex
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${activeIndex}`}
                testimonial={testimonial}
                index={index}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="
              absolute -right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2
              items-center justify-center rounded-full border border-[#D9BFA0]
              bg-[#FFF9F0] text-[#671C29] shadow-[0_5px_15px_rgba(53,16,22,0.10)]
              transition hover:scale-105 hover:bg-[#F4E5D2]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#C7A15A] sm:flex
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonials"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9BFA0] bg-[#FFFDF9] text-[#671C29] shadow-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <span className="font-['Montserrat',sans-serif] text-[10px] font-semibold tracking-wide text-[#806B62]">
            {activeIndex + 1} / {testimonials.length}
          </span>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#671C29] text-white shadow-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
