import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.jpeg';

import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Mail,
  MessageCircle,
} from 'lucide-react';

import { siteConfig } from '../data/siteConfig';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  // ==========================================
  // SCROLL EFFECT
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ==========================================
  // CLOSE MENU ON ROUTE CHANGE
  // ==========================================

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // ==========================================
  // LOCK BODY SCROLL
  // ==========================================

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  // ==========================================
  // QUOTE BUTTON
  // ==========================================

  const QuoteButton = ({ mobile = false, onClick }) => (
    <Link
      to="/contact"
      onClick={onClick}
      className={`
        inline-flex shrink-0 items-center justify-center
        gap-3 whitespace-nowrap
        rounded-full
        bg-[#671C29]
        font-sans font-semibold text-white
        transition-all duration-300
        hover:bg-[#4D1420]
        hover:shadow-[0_6px_18px_rgba(121,13,38,0.20)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#671C29]
        focus-visible:ring-offset-2
        ${
          mobile
            ? 'px-4 py-2.5 text-[11px] sm:px-5 sm:text-xs'
            : 'px-6 py-3.5 text-[13px] lg:px-8 lg:py-4 lg:text-sm'
        }
      `}
    >
      <span>Get a Quote</span>
      <ArrowRight
        className={mobile ? 'h-3.5 w-3.5' : 'h-4 w-4'}
        aria-hidden="true"
      />
    </Link>
  );

  // ==========================================
  // NAVBAR
  // ==========================================

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50 w-full
          transition-all duration-300
          ${
            isScrolled
              ? 'bg-[#FFF9F0]/95 shadow-[0_4px_24px_rgba(72,20,30,0.07)] backdrop-blur-md'
              : 'bg-transparent'
          }
        `}
      >
        <div
          className="
            mx-auto w-full max-w-[1600px]
            px-5 sm:px-8 lg:px-12 xl:px-16
          "
        >
          <div
            className="
              relative flex min-h-[78px]
              items-center justify-between gap-3
              sm:min-h-[88px] sm:gap-5
              lg:min-h-[100px] lg:gap-8
            "
          >
            {/* ================================== */}
{/* MOSANTECH LOGO */}
{/* ================================== */}

<Link
  to="/"
  aria-label="MosanTech Home"
  className="
    relative z-50 flex shrink-0 items-center
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#671C29]
  "
>
  <img
    src={logo}
    alt="MosanTech"
    className="
      block h-auto w-[112px] object-contain
      sm:w-[140px]
      lg:w-[165px]
      xl:w-[175px]
    "
    fetchPriority="high"
  />
</Link>

            {/* ================================== */}
            {/* DESKTOP NAVIGATION */}
            {/* ================================== */}

            <nav
              aria-label="Main Navigation"
              className="
                absolute left-1/2 hidden
                -translate-x-1/2 items-center
                justify-center gap-5 whitespace-nowrap
                lg:flex xl:gap-8 2xl:gap-10
              "
            >
              {siteConfig.navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `
                    group relative py-2
                    font-sans text-[14px]
                    font-semibold tracking-[0.01em]
                    transition-colors duration-300
                    xl:text-[16px]
                    ${
                      isActive
                        ? 'text-[#671C29]'
                        : 'text-[#2B1117] hover:text-[#671C29]'
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>

                      {/* Active underline */}

                      <motion.span
                        className="
                          absolute bottom-0 left-0
                          h-[2px] rounded-full
                          bg-[#671C29]
                        "
                        initial={false}
                        animate={{
                          width: isActive ? '100%' : '0%',
                        }}
                        transition={{
                          duration: 0.25,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* Hover underline */}

                      {!isActive && (
                        <span
                          className="
                            absolute bottom-0 left-0
                            h-[2px] w-0 rounded-full
                            bg-[#671C29]
                            transition-all duration-300
                            group-hover:w-full
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ================================== */}
            {/* DESKTOP GET A QUOTE */}
            {/* ================================== */}

            <div className="hidden shrink-0 lg:flex">
              <QuoteButton />
            </div>

            {/* ================================== */}
            {/* MOBILE / TABLET CONTROLS */}
            {/* ================================== */}

            <div
              className="
                relative z-50 flex shrink-0
                items-center gap-2 lg:hidden
              "
            >
              {/* Mobile Quote Button */}

              <QuoteButton
                mobile
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Hamburger Button */}

              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen((previous) => !previous)
                }
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-full
                  border border-[#671C29]/20
                  bg-transparent text-[#671C29]
                  transition-colors duration-300
                  hover:bg-[#671C29]/5
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#671C29]
                  sm:h-11 sm:w-11
                "
                aria-label={
                  mobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ======================================== */}
      {/* MOBILE MENU */}
      {/* ======================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed inset-0 z-40
              flex flex-col overflow-y-auto
              bg-[#FFF9F0]
              px-6 pb-8 pt-[100px]
              sm:px-10 sm:pt-[115px]
              lg:hidden
            "
          >
            {/* Decorative accents */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -right-20 top-24 h-64 w-64
                rounded-full bg-[#671C29]/5 blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none absolute
                -bottom-10 -left-20 h-64 w-64
                rounded-full bg-[#C6A15B]/10 blur-3xl
              "
            />

            {/* Mobile Navigation Links */}

            <nav
              aria-label="Mobile Navigation"
              className="
                relative z-10 mx-auto
                flex w-full max-w-lg flex-col
              "
            >
              <p
                className="
                  mb-4 border-b border-[#671C29]/15
                  pb-3 font-sans text-[10px]
                  font-bold uppercase
                  tracking-[0.25em] text-[#671C29]
                "
              >
                Navigation
              </p>

              {siteConfig.navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.25,
                  }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => `
                      flex items-center justify-between
                      gap-4 border-b border-[#671C29]/10
                      py-4 font-serif text-lg font-semibold
                      transition-colors duration-200
                      sm:text-xl
                      ${
                        isActive
                          ? 'text-[#671C29]'
                          : 'text-[#2B1117] hover:text-[#671C29]'
                      }
                    `}
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-[#B18A4A]"
                    />
                  </NavLink>
                </motion.div>
              ))}

              {/* Mobile CTA */}

              <div className="mt-7">
                <QuoteButton
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            </nav>

            {/* ================================== */}
            {/* CONTACT DETAILS */}
            {/* ================================== */}

            <div
              className="
                relative z-10 mx-auto mt-10
                w-full max-w-lg
                border-t border-[#671C29]/15 pt-6
              "
            >
              <p
                className="
                  mb-4 font-sans text-[10px]
                  font-bold uppercase
                  tracking-[0.22em] text-[#A47B40]
                "
              >
                Direct Inquiries
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* Email */}

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="
                    flex min-w-0 items-center gap-3
                    rounded-xl border border-[#671C29]/10
                    bg-white/70 p-3 text-sm
                    text-[#2B1117] transition-colors
                    hover:text-[#671C29]
                  "
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#A47B40]" />

                  <span className="break-all">
                    {siteConfig.contact.email}
                  </span>
                </a>

                {/* WhatsApp */}

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex min-w-0 items-center gap-3
                    rounded-xl border border-[#671C29]/10
                    bg-white/70 p-3 text-sm
                    text-[#2B1117] transition-colors
                    hover:text-[#671C29]
                  "
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0 text-[#A47B40]"
                  />

                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Copyright */}

              <p
                className="
                  pt-6 text-center text-[11px]
                  text-[#2B1117]/50
                "
              >
                © {siteConfig.copyrightYear}{' '}
                {siteConfig.brandName}. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;