import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { siteConfig } from '../data/siteConfig';

/**
 * Floating WhatsApp & Instagram quick action button (bottom-right) with pulse animation.
 */
export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Action Drawer Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-3 w-64 bg-burgundy-950/95 backdrop-blur-xl border border-gold-400/40 rounded-xl p-4 shadow-luxury-dark text-cream-100"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-gold-400/20 mb-3">
              <div>
                <h4 className="text-xs uppercase font-sans font-bold tracking-luxury text-gold-300">
                  Instant Connect
                </h4>
                <p className="text-[11px] text-cream-200/70">
                  Typically replies within 1 hour
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-gold-400/80 hover:text-gold-200 rounded"
                aria-label="Close quick connect menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.contact.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-cream-100 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold group-hover:text-gold-200">
                    WhatsApp Chat
                  </span>
                  <span className="block text-[10px] text-cream-200/60">
                    Direct developer hotline
                  </span>
                </div>
              </a>

              {/* Instagram Button */}
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-burgundy-900/60 hover:bg-gold-400/20 border border-gold-400/30 text-cream-100 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-sm">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold group-hover:text-gold-200">
                    @{siteConfig.contact.instagramHandle}
                  </span>
                  <span className="block text-[10px] text-cream-200/60">
                    Follow agency portfolio
                  </span>
                </div>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-burgundy-900/60 hover:bg-gold-400/20 border border-gold-400/30 text-cream-100 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gold-400 text-burgundy-950 flex items-center justify-center shadow-sm font-bold">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold group-hover:text-gold-200">
                    Send Email
                  </span>
                  <span className="block text-[10px] text-cream-200/60">
                    Official quote inquiries
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open contact quick menu"
        aria-expanded={isOpen}
        className="relative group p-3.5 rounded-full bg-gradient-to-tr from-burgundy-900 via-burgundy-800 to-burgundy-950 text-gold-300 border border-gold-400/60 shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
      >
        {/* Soft pulse animated ring */}
        <span className="absolute -inset-1 rounded-full border border-gold-400/40 animate-ping opacity-60 pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 text-gold-200" />
        ) : (
          <div className="flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-gold-300 group-hover:text-gold-100 transition-colors" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-burgundy-950" />
          </div>
        )}
      </button>
    </div>
  );
}

export default FloatingContact;
