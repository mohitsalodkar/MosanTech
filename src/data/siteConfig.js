/**
 * MosanTech Central Site Configuration
 * Change any contact detail, counter stat, or social link here in one place.
 */

export const siteConfig = {
  brandName: 'MosanTech',
  wordmarkMain: 'MOSAN',
  wordmarkAccent: 'TECH',
  tagline: 'We build websites for your business',
  shortBio:
    'A boutique web development studio crafting bespoke, high-performance websites for visionary businesses, restaurants, luxury brands, and celebrations.',

  // Contact details - replace placeholders as needed
  contact: {
    email: 'contact@mosantech.com',
    instagramHandle: 'mosantech',
    instagramUrl: 'https://instagram.com/mosantech',
    phone: '+91 98765 43210',
    whatsappNumber: '919876543210', // digits only for wa.me link
    whatsappDisplay: '+91 98765 43210',
    whatsappMessage: 'Hello MosanTech! I would like to discuss building a website for my business.',
    location: 'Mumbai & Pan-India • Available Worldwide',
    addressDisplay: 'Serving visionary clients across India and globally with bespoke web architecture.',
  },

  // Editable counter stats for About section
  stats: [
    {
      id: 'projects',
      value: 85,
      suffix: '+',
      label: 'Projects Delivered',
      sublabel: 'Custom tailored code & design',
    },
    {
      id: 'clients',
      value: 65,
      suffix: '+',
      label: 'Happy Clients',
      sublabel: 'Across retail, hospitality & tech',
    },
    {
      id: 'experience',
      value: 5,
      suffix: '+',
      label: 'Years Experience',
      sublabel: 'Crafting premium web experiences',
    },
    {
      id: 'support',
      value: 100,
      suffix: '%',
      label: 'Dedicated Support',
      sublabel: 'Post-launch peace of mind',
    },
  ],

  // Navigation Links
  navLinks: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ],

  // Ticker marquee phrases
  marqueeItems: [
    'Business Websites',
    'Restaurant & QR Menu',
    'E-Commerce Websites',
    'Wedding & Event Invites',
    'Portfolio & Creative Portals',
    'Ultra Fast Loading',
    'Bespoke Luxury Aesthetics',
    'Mobile-First Responsive',
    'SEO Engineered',
  ],

  // Process / Timeline
  processSteps: [
    {
      step: '01',
      title: 'Discuss',
      subtitle: 'Discovery & Vision',
      description:
        'We deep-dive into your brand, target audience, competitive edge, and business objectives to define the project architecture and roadmap.',
      features: ['Scope definition', 'Brand alignment', 'Wireframe layout', 'Feature checklist'],
    },
    {
      step: '02',
      title: 'Design',
      subtitle: 'Bespoke Visual Concept',
      description:
        'We craft high-fidelity luxury prototypes featuring exquisite typography, tailored color palettes, interactive micro-animations, and intuitive user journeys.',
      features: ['Tailored UI/UX', 'Interactive mockups', 'Mobile-first layouts', 'Visual asset curation'],
    },
    {
      step: '03',
      title: 'Develop',
      subtitle: 'High-Performance Code',
      description:
        'We construct your website using modern, clean React and Tailwind CSS architecture. Zero bloat, blazing fast loading speeds, seamless responsiveness, and on-page SEO.',
      features: ['Clean React code', 'Core Web Vitals tuned', 'Responsive testing', 'Interactive animations'],
    },
    {
      step: '04',
      title: 'Deliver',
      subtitle: 'Launch & Continued Support',
      description:
        'Rigorous cross-browser testing, domain connection, analytics setup, WhatsApp integration, and dedicated post-launch support to guarantee your success.',
      features: ['Production deployment', 'Domain & SSL setup', 'WhatsApp & CRM integration', 'Free support warranty'],
    },
  ],

  // Why choose us highlights
  whyChooseUs: [
    {
      title: 'Blazing Fast Speed',
      description:
        'Engineered for sub-second page loads and pristine Core Web Vitals to elevate user retention and Google search rankings.',
      icon: 'Zap',
      badge: 'Performance',
    },
    {
      title: 'Mobile-First Precision',
      description:
        'Over 75% of your clients browse on mobile. We design fluid, app-like touch experiences optimized for every screen size.',
      icon: 'Smartphone',
      badge: 'Responsiveness',
    },
    {
      title: 'SEO-Ready Architecture',
      description:
        'Semantic HTML5, automated meta tags, structured data, and clean URLs built-in from day one to attract organic buyers.',
      icon: 'TrendingUp',
      badge: 'Discoverability',
    },
    {
      title: 'Transparent & Accessible',
      description:
        'Honest pricing with no hidden surprises, clear milestones, and luxury agency standards accessible to ambitious businesses.',
      icon: 'ShieldCheck',
      badge: 'Value',
    },
    {
      title: 'Direct Personal Support',
      description:
        'You speak directly with the engineers building your site. Fast turnarounds, WhatsApp accessibility, and reliable maintenance.',
      icon: 'Headphones',
      badge: 'Dedication',
    },
  ],

  // What is included in every project (Services page)
  includedInEveryProject: [
    {
      title: '100% Mobile Responsive',
      description: 'Flawlessly optimized across iPhones, Androids, iPads, laptops, and ultra-wide desktops.',
      icon: 'Layout',
    },
    {
      title: 'Sub-Second Page Loads',
      description: 'Optimized image assets, minified code, and modern bundlers for instant interactivity.',
      icon: 'Gauge',
    },
    {
      title: 'Foundational On-Page SEO',
      description: 'Custom meta titles, descriptions, Open Graph preview tags, and search engine sitemaps.',
      icon: 'Search',
    },
    {
      title: 'Functional Contact Form',
      description: 'Instant lead delivery directly to your inbox via EmailJS with zero monthly server costs.',
      icon: 'Mail',
    },
    {
      title: 'WhatsApp & Social Integration',
      description: 'Direct 1-click WhatsApp chat triggers and beautifully styled Instagram and social cards.',
      icon: 'MessageCircle',
    },
    {
      title: 'Free Dedicated Support Period',
      description: 'Complimentary post-launch warranty with content tweaks, technical guidance, and training.',
      icon: 'LifeBuoy',
    },
  ],

  copyrightYear: 2026,
};

export default siteConfig;

