/**
 * MosanTech Central Media Registry
 * All media files in /public can be configured and updated here in one place.
 * 
 * If a video or image file does not yet exist on disk, MosanTech's SafeVideo
 * and SafeImage components will automatically display a luxury champagne-gold
 * gradient fallback with abstract architectural mockup graphics.
 */

export const mediaPaths = {
  // Hero background video & fallback poster
  hero: {
    video: '/videos/hero.mp4',
    poster: '/images/hero-poster.jpg',
  },

  // About / Why MosanTech section media
  about: {
    video: '/videos/about.mp4',
    image: '/images/about.jpg',
  },

  // Video Showcase section (horizontal/auto-scrolling gallery of 6 videos)
  showcase: [
    {
      id: 1,
      title: 'Bespoke Corporate Identity',
      category: 'Business Website',
      video: '/videos/showcase-1.mp4',
      poster: '/images/showcase-1-poster.jpg',
    },
    {
      id: 2,
      title: 'Artisan Dining & QR Menu',
      category: 'Restaurant & Hospitality',
      video: '/videos/showcase-2.mp4',
      poster: '/images/showcase-2-poster.jpg',
    },
    {
      id: 3,
      title: 'Haute Horlogerie Storefront',
      category: 'E-Commerce Website',
      video: '/videos/showcase-3.mp4',
      poster: '/images/showcase-3-poster.jpg',
    },
    {
      id: 4,
      title: 'The Royal Wedding Invitation',
      category: 'Wedding & Event Invites',
      video: '/videos/showcase-4.mp4',
      poster: '/images/showcase-4-poster.jpg',
    },
    {
      id: 5,
      title: 'Architectural Atelier Portfolio',
      category: 'Portfolio & Creative',
      video: '/videos/showcase-5.mp4',
      poster: '/images/showcase-5-poster.jpg',
    },
    {
      id: 6,
      title: 'Fintech Advisory Platform',
      category: 'Business Website',
      video: '/videos/showcase-6.mp4',
      poster: '/images/showcase-6-poster.jpg',
    },
  ],

  // Portfolio items (9 projects with clear image & video references)
  portfolio: [
    {
      id: 'p-1',
      title: 'Aura Capital Advisors',
      category: 'Business',
      categoryLabel: 'Corporate Business',
      image: '/images/portfolio-1.jpg',
      video: '/videos/portfolio-1.mp4',
      description: 'High-conversion institutional web presence with client investor portal.',
    },
    {
      id: 'p-2',
      title: 'Saffron & Silk Dining',
      category: 'Restaurant',
      categoryLabel: 'Fine Dining & QR Menu',
      image: '/images/portfolio-2.jpg',
      video: '/videos/portfolio-2.mp4',
      description: 'Interactive digital QR menu, online table reservation, and chef showcase.',
    },
    {
      id: 'p-3',
      title: 'Velvet Atelier Fragrances',
      category: 'E-commerce',
      categoryLabel: 'Luxury E-Commerce',
      image: '/images/portfolio-3.jpg',
      video: '/videos/portfolio-3.mp4',
      description: 'Ultra-fast headless luxury e-commerce with seamless payment gateway.',
    },
    {
      id: 'p-4',
      title: 'Aarav & Meera Imperial Nuptials',
      category: 'Wedding',
      categoryLabel: 'Digital Wedding Invite',
      image: '/images/portfolio-4.jpg',
      video: '/videos/portfolio-4.mp4',
      description: 'Royal animated digital wedding invitation with RSVP tracking and ceremony countdown.',
    },
    {
      id: 'p-5',
      title: 'Studio Kanso Architects',
      category: 'Portfolio',
      categoryLabel: 'Creative Architecture',
      image: '/images/portfolio-5.jpg',
      video: '/videos/portfolio-5.mp4',
      description: 'Minimalist editorial portfolio highlighting award-winning structural designs.',
    },
    {
      id: 'p-6',
      title: 'Lumina Diagnostic Care',
      category: 'Business',
      categoryLabel: 'Healthcare & Wellness',
      image: '/images/portfolio-6.jpg',
      video: '/videos/portfolio-6.mp4',
      description: 'Patient booking platform, doctor profiles, and WhatsApp consultation integration.',
    },
    {
      id: 'p-7',
      title: 'Bistro Riviera Wine & Dine',
      category: 'Restaurant',
      categoryLabel: 'Cocktail Bar & QR Menu',
      image: '/images/portfolio-7.jpg',
      video: '/videos/portfolio-7.mp4',
      description: 'Live contactless QR ordering, events calendar, and Instagram live feed.',
    },
    {
      id: 'p-8',
      title: 'Aethel Couture Jewels',
      category: 'E-commerce',
      categoryLabel: 'Jewelry E-Commerce',
      image: '/images/portfolio-8.jpg',
      video: '/videos/portfolio-8.mp4',
      description: 'High-ticket jewelry store with 360-degree product views and WhatsApp concierge.',
    },
    {
      id: 'p-9',
      title: 'Zayd & Anya Destination Gala',
      category: 'Wedding',
      categoryLabel: 'Event Celebration',
      image: '/images/portfolio-9.jpg',
      video: '/videos/portfolio-9.mp4',
      description: 'Interactive multi-day itinerary website with guest travel logistics and photo gallery.',
    },
  ],

  // Testimonials avatars
  testimonials: [
    { id: 1, image: '/images/testimonial-1.jpg' },
    { id: 2, image: '/images/testimonial-2.jpg' },
    { id: 3, image: '/images/testimonial-3.jpg' },
    { id: 4, image: '/images/testimonial-4.jpg' },
  ],

  // Bottom Call To Action background video
  cta: {
    video: '/videos/cta.mp4',
    poster: '/images/cta-poster.jpg',
  },
};

export default mediaPaths;

