import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const contactItems = [
  {
    label: '76209 25471',
    icon: Phone,
    href: 'tel:+917620925471',
    external: false,
  },
  {
    label: 'info@mosantech.in',
    icon: Mail,
    href: 'mailto:info@mosantech.in',
    external: false,
  },
  {
    label: (
      <>
        Narmadha Vihar - 6, 7
        <br className="hidden sm:block" /> Nagpur - 440019
      </>
    ),
    icon: MapPin,
    href: 'https://maps.google.com/?q=Narmadha+Vihar+Nagpur+440019',
    external: true,
  },
  {
    label: '@mosan.tech',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/mosan.tech/',
    external: true,
  },
];

export function CtaBannerSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="get-a-quote"
      className="relative isolate overflow-hidden bg-[#FFF9F0] px-0 py-4 sm:px-4 sm:py-6 lg:px-6 lg:py-8"
    >
      <div className="relative mx-auto max-w-[1600px] overflow-hidden border-y border-[#8E2638]/50 bg-[#31050D] text-[#FFF9F0] shadow-[0_18px_45px_rgba(53,16,22,0.20)] sm:rounded-[3px] sm:border">
        {/* Rich burgundy base and soft spotlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_12%,rgba(111,12,31,0.55),transparent_58%),linear-gradient(105deg,#35050D_0%,#4B0714_48%,#35050D_100%)]"
        />

        {/* Decorative burgundy leaves on the left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-20 h-[360px] w-[180px] rotate-[25deg] rounded-[100%_0_100%_0] border border-[#A82B43]/20 bg-gradient-to-br from-[#790D26]/45 via-[#4A0715]/20 to-transparent sm:-left-12 sm:h-[440px] sm:w-[220px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-[-8%] h-[330px] w-[125px] rotate-[42deg] rounded-[100%_0_100%_0] border-l border-[#C7A15A]/25 bg-gradient-to-br from-[#8D1730]/30 to-transparent"
        />

        {/* Decorative right-side foliage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-24 h-[340px] w-[180px] rotate-[-28deg] rounded-[100%_0_100%_0] border border-[#C7A15A]/20 bg-gradient-to-bl from-[#8D1730]/35 to-transparent sm:-right-8 sm:h-[420px] sm:w-[220px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-[-10%] h-[300px] w-[120px] rotate-[-48deg] rounded-[100%_0_100%_0] border-r border-[#C7A15A]/20 bg-gradient-to-bl from-[#5D1020]/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-110px] right-[12%] h-56 w-24 rotate-[40deg] rounded-[100%_0_100%_0] border border-[#C7A15A]/10 bg-[#6B1023]/20"
        />

        <div className="relative z-10 px-5 pb-6 pt-7 text-center sm:px-8 sm:pb-7 sm:pt-8 md:px-10 md:pb-8 md:pt-9 lg:px-14 lg:pb-9 lg:pt-10">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="mx-auto max-w-5xl font-['Georgia',serif] text-[25px] font-bold leading-[1.15] tracking-[-0.5px] text-[#FFF9F0] sm:text-3xl md:text-[38px] lg:text-[44px]">
              Let’s Build Your Online Presence
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-[11px] leading-5 text-[#F5E9E5]/90 sm:mt-3.5 sm:text-sm sm:leading-6 md:text-base">
              Have a project in mind? We’re here to help you turn your ideas into a beautiful website.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#F5E8D7] bg-gradient-to-b from-[#FFFDF8] to-[#F4E7D8] px-6 py-2.5 font-['Montserrat',sans-serif] text-[11px] font-bold text-[#65101F] shadow-[0_5px_18px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B76D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#31050D] sm:mt-5 sm:min-h-11 sm:px-7 sm:text-xs md:mt-6"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-0 border-t border-[#C7A15A]/20 pt-3 sm:mt-7 sm:grid-cols-2 sm:pt-4 lg:mt-8 lg:grid-cols-4 lg:border-t-0 lg:pt-0">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`flex min-h-[47px] items-center justify-center gap-2.5 px-2 py-3 text-left transition-colors hover:text-[#E8C878] sm:min-h-[52px] sm:justify-start sm:px-4 lg:justify-center lg:px-3 lg:py-2 ${
                    index > 0
                      ? 'border-t border-[#C7A15A]/15 sm:border-t-0 sm:border-l sm:border-[#C7A15A]/25'
                      : ''
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF9F0] text-[#65101F] shadow-[0_2px_7px_rgba(0,0,0,0.12)] sm:h-9 sm:w-9">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={2.2} />
                  </span>

                  <span className="min-w-0 font-['Montserrat',sans-serif] text-[10px] font-medium leading-[1.5] text-[#FFF4EA] sm:text-[11px] md:text-xs">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBannerSection;
