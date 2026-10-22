# MosanTech — Luxury Web Development Agency Website

> **Tagline:** *"We build websites for your business"*

A premier, multi-page business website built for web development agency **MosanTech**, featuring a deep burgundy and champagne gold luxury design, GPU-accelerated motion animations, lazy-loaded media resilience, and serverless EmailJS lead capture.

---

## 💎 Tech Stack

- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS (Strictly Tailwind with extended brand colors and custom keyframes)
- **Routing:** `react-router-dom` (Code-split with `React.lazy` and `Suspense`)
- **Motion & Transitions:** Framer Motion (GPU-only `transform` and `opacity` animations)
- **Smooth Scrolling:** Lenis (`@studio-freight/lenis` / `lenis`)
- **Icons:** `lucide-react`
- **Email Service:** `@emailjs/browser` (No backend required)
- **Typography:** Google Fonts (`Cinzel`, `Cormorant Garamond`, `Plus Jakarta Sans`)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🎨 Brand & Color Palette

- **Primary:** Deep Burgundy / Wine (`#6B0F2A`, darker `#3D0716`, lighter `#8B1A3A`, deep black-burgundy `#1A0509`)
- **Accent:** Champagne / Antique Gold (`#C9A66B`, `#E6D3A3`, `#A8803F`)
- **Light Sections:** Warm Cream / Ivory (`#FBF6EE`)
- **Dramatic Sections:** Rich Dark Burgundy-Black (`#1A0509`)

---

## 📁 Project Structure

```
MosanTech/
├── public/
│   ├── favicon.svg             # Luxury circular badge SVG favicon
│   ├── videos/                 # Place your agency video files here
│   │   ├── hero.mp4
│   │   ├── about.mp4
│   │   ├── showcase-1.mp4 ... showcase-6.mp4
│   │   └── cta.mp4
│   └── images/                 # Place your agency image files here
│       ├── portfolio-1.jpg ... portfolio-9.jpg
│       ├── about.jpg
│       ├── hero-poster.jpg
│       └── testimonial-1.jpg ... testimonial-5.jpg
├── src/
│   ├── assets/
│   │   └── logo.jpg            # Place your official circular badge logo here
│   ├── components/
│   │   ├── BrandLogo.jsx       # Circular badge + MOSAN (burgundy) TECH (gold) wordmark
│   │   ├── Button.jsx          # Luxury CTA button variants (Gold gradient, Burgundy, Outline)
│   │   ├── CursorGlow.jsx      # Desktop-only ambient gold cursor glow
│   │   ├── FloatingContact.jsx # Bottom-right WhatsApp & Instagram pulse button
│   │   ├── Footer.jsx          # Shared luxury footer with links, copyright, and socials
│   │   ├── IntroLoader.jsx     # ~2s ribbon gold shimmer logo reveal intro
│   │   ├── Navbar.jsx          # Sticky glassmorphism header with mobile overlay
│   │   ├── PageTransition.jsx  # GPU-friendly route transitions
│   │   ├── SafeImage.jsx       # CLS-protected image with luxury gradient fallback
│   │   ├── SafeVideo.jsx       # IntersectionObserver video with mobile poster fallback
│   │   ├── ScrollProgress.jsx  # Gold top reading progress bar
│   │   ├── ScrollToTop.jsx     # Scrolls to top on route change
│   │   ├── SectionHeading.jsx  # Reusable serif heading with thin gold line divider
│   │   └── home/               # Modular Home page sections (Hero, Marquee, About, etc.)
│   ├── data/
│   │   ├── faq.js              # FAQ accordion questions & answers
│   │   ├── media.js            # Central registry for all public media paths
│   │   ├── portfolio.js        # 9 showcase projects categorized under 6 filter tabs
│   │   ├── services.js         # The 5 agency service offerings & deliverables
│   │   ├── siteConfig.js       # Contact info, social links, stats counters, marquee
│   │   └── testimonials.js     # Client reviews and ratings
│   ├── hooks/
│   │   ├── useDataSaver.js     # Detects data-saver / slow network
│   │   ├── useMediaQuery.js    # Reactive breakpoints & prefers-reduced-motion
│   │   └── useVideoPlaybackManager.js # Enforces max 1-2 playing videos
│   ├── pages/
│   │   ├── Home.jsx            # 11 sections in required order
│   │   ├── Services.jsx        # Detailed 5 services, included grid, FAQ accordion
│   │   ├── Contact.jsx         # Two-column layout, validation, EmailJS, India visual
│   │   └── NotFound.jsx        # Luxury 404 page
│   ├── App.jsx                 # Lenis smooth scroll provider, code-splitting & layout
│   ├── index.css               # Tailwind directives, luxury scrollbar, keyframes
│   └── main.jsx                # React root mount
├── .env.example                # EmailJS environment template
├── tailwind.config.js          # Brand colors, typography, letter-spacing, shadows
├── vite.config.js              # Vite React configuration
└── package.json
```

---

## 🖼️ Media Files Guide

### 1. Brand Logo
Place your official logo file at:
```
/src/assets/logo.jpg
```
The `BrandLogo` component in the navbar, footer, and intro loader will automatically render your file. If the file is not yet placed, an authentic vector circular ribbon MS badge is rendered automatically.

### 2. Video Files (`/public/videos/`)
Place your MP4 files in `/public/videos/` with these exact names:
- `hero.mp4` — Full-screen hero background video
- `about.mp4` — Split section studio reel
- `showcase-1.mp4` — Corporate Identity video reel
- `showcase-2.mp4` — Restaurant & QR Menu video reel
- `showcase-3.mp4` — E-Commerce video reel
- `showcase-4.mp4` — Royal Wedding Invitation reel
- `showcase-5.mp4` — Architecture / Creative Portfolio reel
- `showcase-6.mp4` — Advisory Platform reel
- `cta.mp4` — Bottom banner ambient reel (optional)

### 3. Image Files (`/public/images/`)
Place your JPG or WebP images in `/public/images/`:
- `about.jpg` — About section fallback poster
- `hero-poster.jpg` — Hero section poster (displayed on mobile & data saver)
- `portfolio-1.jpg` to `portfolio-9.jpg` — Portfolio project thumbnail images
- `testimonial-1.jpg` to `testimonial-5.jpg` — Client avatar images

> 💡 **Graceful Fallbacks:** Until your video and image files exist on disk, the `SafeVideo` and `SafeImage` components display an elegant burgundy-gold animated architectural mockup. Nothing looks broken or blank.
>
> To change or rename any file paths, simply edit **`src/data/media.js`**.

---

## ⚙️ How to Change Contact Details & Counter Stats

All site metadata is centralized in **`src/data/siteConfig.js`**:

```javascript
// Change Email, Instagram, WhatsApp, and Address:
export const siteConfig = {
  contact: {
    email: 'contact@mosantech.com',
    instagramHandle: 'mosantech',
    instagramUrl: 'https://instagram.com/mosantech',
    phone: '+91 98765 43210',
    whatsappNumber: '919876543210', // digits only for wa.me link
    whatsappDisplay: '+91 98765 43210',
    location: 'Mumbai & Pan-India • Available Worldwide',
  },

  // Edit the Animated Counter Numbers in About Section:
  stats: [
    { value: 85, suffix: '+', label: 'Projects Delivered' },
    { value: 65, suffix: '+', label: 'Happy Clients' },
    { value: 5,  suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Dedicated Support' },
  ],
};
```

---

## 📧 EmailJS Setup Guide (Step-by-Step)

The Contact page connects directly to [EmailJS](https://www.emailjs.com/) with zero backend server setup required.

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.

### Step 2: Create an Email Service
1. In the EmailJS Dashboard, navigate to **Email Services** → Click **Add New Service**.
2. Select your provider (e.g., **Gmail** or **Personal Email**).
3. Connect your email account and note down the **Service ID** (e.g. `service_mosantech`).

### Step 3: Create an Email Template
1. In the Dashboard, navigate to **Email Templates** → Click **Create New Template**.
2. Set the email subject: `New Project Inquiry from {{from_name}} - MosanTech`
3. In the template body, paste:
   ```html
   <h3>New Inquiry from MosanTech Website</h3>
   <p><strong>Client Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Phone / WhatsApp:</strong> {{phone}}</p>
   <p><strong>Service Requested:</strong> {{service}}</p>
   <p><strong>Estimated Budget:</strong> {{budget}}</p>
   <p><strong>Message:</strong></p>
   <p>{{message}}</p>
   ```
4. Note down your **Template ID** (e.g. `template_mosantech`).

### Step 4: Get Your Public Key
1. Go to **Account** (top right) → **API Keys**.
2. Copy your **Public Key** (e.g. `user_abcdef123456`).

### Step 5: Add Keys to `.env`
Create or edit `.env` in the root of the project:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

> 💡 **Demo Fallback:** If the `.env` keys are unset or invalid, the form gracefully simulates a successful submission and presents an explanatory toast so you can test the UI immediately.

---

## ⚡ Performance & Mobile Optimizations

1. **Hero Video Performance:** On mobile devices (`< 768px`) or when the user has Data Saver mode enabled, the hero video will not autoplay; instead, the high-resolution poster image is shown.
2. **Viewport Lazy Loading:** Below-the-fold videos load only when they enter the viewport via `IntersectionObserver` and pause immediately when scrolled off-screen.
3. **Simultaneous Video Limit:** The global video manager prevents browser lag by enforcing a maximum of 1–2 simultaneously playing videos.
4. **Code-Splitting:** All 4 page routes (`Home`, `Services`, `Contact`, `NotFound`) are split into separate JavaScript chunks using `React.lazy` and `Suspense`.
5. **GPU Acceleration:** Motion animations animate exclusively `transform` and `opacity` properties (never `width`, `height`, `top`, or `left`).
6. **Accessibility:** Automatically honors `prefers-reduced-motion` by disabling ambient particle orbs, disabling cursor glow, and simplifying page transitions.

---

## 🌐 Build & Deployment

### Vercel
```bash
# Push to GitHub, then import repository on Vercel.
# Framework Preset: Vite
# Build Command: npm run build
# Output Directory: dist
```
Add environment variables `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in **Vercel Settings → Environment Variables**.

### Netlify
Ensure your publish directory is set to `dist` and redirect all routes to `index.html` (Single Page Application rule):
Create a `public/_redirects` file:
```
/*    /index.html   200
```

