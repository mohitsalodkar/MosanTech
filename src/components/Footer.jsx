import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { Mail, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { siteConfig } from '../data/siteConfig';

export function Footer() {
  const iconClass =
    'flex h-9 w-9 items-center justify-center rounded-full border border-[#E5D2BC] bg-[#FFF9F0] text-[#351016] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#790D26] hover:bg-[#790D26] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7A15A]';

  return (
    <footer className="relative overflow-hidden border-t border-[#E5D2BC] bg-[#F7EBDD] text-[#351016]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C7A15A]/70 to-transparent"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Single-row footer navigation */}
        <div className="flex flex-col items-center justify-between gap-5 py-6 sm:py-7 lg:flex-row lg:gap-8">
          {/* Brand */}
          <Link
            to="/"
            aria-label="MosanTech Home"
            className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#790D26]"
          >
            <img
              src={logo}
              alt="MosanTech Logo"
              className="block h-auto w-[118px] object-contain sm:w-[130px]"
              loading="lazy"
            />
          </Link>

          {/* Main navigation */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7">
            <Link to="/" className="text-xs font-medium text-[#5F4945] transition-colors hover:text-[#790D26] sm:text-[13px]">
              Home
            </Link>
            <Link to="/services" className="text-xs font-medium text-[#5F4945] transition-colors hover:text-[#790D26] sm:text-[13px]">
              Services
            </Link>
            <Link to="/work" className="text-xs font-medium text-[#5F4945] transition-colors hover:text-[#790D26] sm:text-[13px]">
              Our Work
            </Link>
            <Link to="/plans" className="text-xs font-medium text-[#5F4945] transition-colors hover:text-[#790D26] sm:text-[13px]">
              Plans
            </Link>
            <Link to="/about" className="text-xs font-medium text-[#5F4945] transition-colors hover:text-[#790D26] sm:text-[13px]">
              About
            </Link>
            <Link to="/contact" className="text-xs font-medium text-[#5F4945] transition-colors hover:text-[#790D26] sm:text-[13px]">
              Contact
            </Link>
          </nav>

          {/* Social/contact icons */}
          <div className="flex shrink-0 items-center gap-2.5">
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MosanTech Instagram"
              title="Instagram"
              className={iconClass}
            >
              <InstagramIcon className="h-[17px] w-[17px]" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with MosanTech on WhatsApp"
              title="WhatsApp"
              className={iconClass}
            >
              <MessageCircle className="h-[17px] w-[17px]" />
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              aria-label="Email MosanTech"
              title="Email"
              className={iconClass}
            >
              <Mail className="h-[17px] w-[17px]" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#E5D2BC]" />

        {/* Copyright and brand tagline */}
        <div className="flex flex-col items-center justify-between gap-2.5 py-3.5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] leading-5 text-[#806B62] sm:text-xs">
            © {siteConfig.copyrightYear} {siteConfig.brandName}. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-[11px] font-medium text-[#806B62] sm:text-xs">
            <span>Design</span>
            <span className="text-[#C7A15A]">•</span>
            <span>Develop</span>
            <span className="text-[#C7A15A]">•</span>
            <span>Grow</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
