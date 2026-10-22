import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MessageCircle,
  MapPin,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { PageTransition } from '../components/PageTransition';
import { siteConfig } from '../data/siteConfig';
import { services } from '../data/services';
import contactHeroImage from '../assets/contact-hero.png';

export function Contact() {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Get initial service from query param ?service=... or location state
  const queryService = searchParams.get('service') || location.state?.service || '';

  // Match query service slug to title if applicable
  const matchedService =
    services.find(
      (s) => s.id === queryService || s.slug === queryService || s.title.toLowerCase() === queryService.toLowerCase()
    )?.title || '';

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    service: matchedService,
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | 'demo'
  const [errorMessage, setErrorMessage] = useState('');

  // Update service dropdown when URL query param changes
  useEffect(() => {
    if (matchedService) {
      setFormData((prev) => ({ ...prev, service: matchedService }));
    }
  }, [matchedService]);

  const validate = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Please provide your name';
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = 'Name must be at least 2 characters';
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone or WhatsApp number';
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select the service you need';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Template variables matching requirements
    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      phone: formData.phone,
      service: formData.service,
      budget: formData.budget || 'Not specified',
      message: formData.message,
    };

    // If EmailJS credentials are provided, send actual email
    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSubmitStatus('success');
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
        });
      } catch (err) {
        console.error('EmailJS Error:', err);
        setSubmitStatus('error');
        setErrorMessage(
          err?.text || 'Failed to dispatch your inquiry. Please try again or message us on WhatsApp.'
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Graceful fallback mode for demo / prior to user adding .env keys
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('demo');
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
        });
      }, 1000);
    }
  };

  return (
    <PageTransition>
      <main className="relative overflow-hidden bg-[#FFF9F0] text-[#351016]">
        {/* Soft decorative background */}
        <div className="pointer-events-none absolute left-[-120px] top-72 h-80 w-80 rounded-full bg-[#C7A15A]/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-[-120px] top-[650px] h-96 w-96 rounded-full bg-[#790D26]/[0.06] blur-[110px]" />

        {/* Hero — navbar is handled by the existing layout */}
        <section className="relative isolate overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-36">
          {/* Hero background photo with a soft cream overlay */}
          <div className="absolute inset-0 -z-10 bg-[#FFF9F0]" />
          <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[58%]">
            <img
              src={contactHeroImage}
              alt="MosanTech workspace with laptop, coffee cup and burgundy backdrop"
              className="h-full w-full object-cover object-center opacity-25 sm:opacity-30 lg:opacity-70"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F0] via-[#FFF9F0]/85 to-[#FFF9F0]/25 lg:via-[#FFF9F0]/55 lg:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(199,161,90,0.20),transparent_38%),linear-gradient(110deg,#FFF9F0_0%,rgba(255,252,247,0.25)_58%,rgba(245,231,216,0.10)_100%)]" />
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[3px] text-[#790D26]">
                <span className="h-px w-7 bg-[#C7A15A]" /> Contact Us
              </div>
              <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,6vw,5.3rem)] font-bold leading-[.98] tracking-[-1.8px] text-[#351016]">
                Let’s Build<br />Your <span className="text-[#98643D]">Online Presence</span>
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#6B5A56] sm:text-base sm:leading-8">
                Have a project in mind? We’d love to hear about it. Tell us what you’re planning and let’s turn your ideas into a beautiful digital experience.
              </p>
              <div className="mt-7 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
                {[
                  { icon: MessageCircle, title: 'Free', text: 'Consultation' },
                  { icon: Sparkles, title: 'Quick', text: 'Response' },
                  { icon: ShieldCheck, title: 'Custom', text: 'Solutions' },
                  { icon: CheckCircle2, title: 'Dedicated', text: 'Support' },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8D8C4] bg-white/80 text-[#790D26] shadow-sm"><Icon size={18} /></span>
                    <span className="text-[11px] leading-4 text-[#6B5A56]"><strong className="block text-xs text-[#351016]">{title}</strong>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero image cropped from the supplied MosanTech design reference */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#C7A15A]/25 via-transparent to-[#790D26]/15 blur-xl" />
              <div className="relative overflow-hidden rounded-[26px] border border-white/80 bg-[#F7EBDD] shadow-[0_25px_70px_rgba(53,16,22,.16)]">
                <img
                  src={contactHeroImage}
                  alt="MosanTech workspace hero with laptop, coffee cup and burgundy branding"
                  className="h-[250px] w-full object-cover object-center sm:h-[330px] lg:h-[390px]"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#351016]/30 via-transparent to-white/5" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/35 bg-[#FFF9F0]/90 p-3 shadow-lg backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-4">
                  <div className="min-w-0">
                    <p className="font-serif text-base font-bold text-[#351016] sm:text-lg">Your Ideas. Our Creation.</p>
                    <p className="mt-0.5 text-xs text-[#6B5A56] sm:text-sm">Let’s build something remarkable together.</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#790D26] text-white sm:h-11 sm:w-11">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact information + form */}
        <section className="relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:gap-6">
            {/* Burgundy contact panel */}
            <motion.aside initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .5 }} className="relative isolate overflow-hidden rounded-[24px] bg-gradient-to-br from-[#790D26] via-[#510817] to-[#30070F] p-6 text-[#FFF9F0] shadow-[0_18px_45px_rgba(53,16,22,.18)] sm:p-8 lg:col-span-4">
              <div className="pointer-events-none absolute -bottom-10 -right-8 h-44 w-44 rounded-full border-[24px] border-[#C7A15A]/10" />
              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#E8C98F]">Get in touch</span>
                <h2 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl">We’d love to<br/>hear from you.</h2>
                <div className="mt-4 h-[2px] w-12 bg-[#C7A15A]" />
                <p className="mt-4 text-sm leading-6 text-[#FFF9F0]/80">We’re here to help you with website development, design, and your next digital project.</p>
                <div className="mt-7 space-y-5">
                  <a href={`mailto:${siteConfig.contact.email}`} className="group flex min-w-0 items-center gap-3.5 rounded-xl transition hover:translate-x-1">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF9F0] text-[#790D26]"><Mail size={19}/></span>
                    <span className="min-w-0"><span className="block text-[10px] text-[#E8C98F]">Drop us an email</span><span className="block break-words text-sm font-semibold text-white group-hover:text-[#E8C98F]">{siteConfig.contact.email}</span></span>
                  </a>
                  <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 items-center gap-3.5 transition hover:translate-x-1">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF9F0] text-[#790D26]"><MessageCircle size={20}/></span>
                    <span className="min-w-0"><span className="block text-[10px] text-[#E8C98F]">Call or WhatsApp</span><span className="block text-sm font-semibold text-white group-hover:text-[#E8C98F]">{siteConfig.contact.whatsappDisplay}</span></span>
                  </a>
                  <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 items-center gap-3.5 transition hover:translate-x-1">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF9F0] text-[#790D26]"><InstagramIcon className="h-5 w-5"/></span>
                    <span className="min-w-0"><span className="block text-[10px] text-[#E8C98F]">Follow us on Instagram</span><span className="block text-sm font-semibold text-white group-hover:text-[#E8C98F]">@{siteConfig.contact.instagramHandle}</span></span>
                  </a>
                </div>
                <div className="mt-7 rounded-xl border border-white/15 bg-white/[0.06] p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold"><MapPin size={17} className="text-[#E8C98F]"/> Remote & flexible collaboration</div>
                  <p className="mt-2 text-xs leading-5 text-white/70">Let’s connect from wherever you are and build something meaningful together.</p>
                </div>
              </div>
            </motion.aside>

            {/* Form panel */}
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .5, delay: .08 }} className="relative rounded-[24px] border border-[#E8D8C4] bg-[#FFFCF7] p-5 shadow-[0_12px_38px_rgba(53,16,22,.07)] sm:p-8 lg:col-span-8 lg:p-9">
              <div className="mb-7 sm:mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#98643D]">Project request form</span>
                <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#351016] sm:text-4xl">Send Us a Message</h2>
                <p className="mt-2 text-sm leading-6 text-[#6B5A56]">Tell us about your project and we’ll get back to you as soon as possible.</p>
              </div>

              <AnimatePresence>
                {submitStatus === 'success' && <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0"/><div><h3 className="text-sm font-bold">Message sent successfully!</h3><p className="mt-1 text-xs leading-5">Thanks for contacting MosanTech. We’ll review your requirements and get back to you.</p></div></motion.div>}
                {submitStatus === 'demo' && <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950"><Sparkles className="mt-0.5 h-5 w-5 shrink-0"/><div><h3 className="text-sm font-bold">Demo submission received</h3><p className="mt-1 text-xs leading-5">The form validated. Add your EmailJS keys in the .env file to enable live email delivery.</p></div></motion.div>}
                {submitStatus === 'error' && <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0"/><div><h3 className="text-sm font-bold">Message could not be sent</h3><p className="mt-1 text-xs leading-5">{errorMessage}</p></div></motion.div>}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="from_name" className="mb-2 block text-xs font-semibold text-[#351016]">Your Name <span className="text-rose-600">*</span></label>
                    <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleChange} placeholder="Enter your name" className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#351016] outline-none transition placeholder:text-[#A99B94] focus:ring-2 ${errors.from_name ? 'border-rose-400 focus:ring-rose-100' : 'border-[#E8D8C4] focus:border-[#790D26] focus:ring-[#790D26]/10'}`}/>
                    {errors.from_name && <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600"><AlertCircle size={13}/>{errors.from_name}</p>}
                  </div>
                  <div>
                    <label htmlFor="from_email" className="mb-2 block text-xs font-semibold text-[#351016]">Your Email <span className="text-rose-600">*</span></label>
                    <input type="email" id="from_email" name="from_email" value={formData.from_email} onChange={handleChange} placeholder="Enter your email" className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#351016] outline-none transition placeholder:text-[#A99B94] focus:ring-2 ${errors.from_email ? 'border-rose-400 focus:ring-rose-100' : 'border-[#E8D8C4] focus:border-[#790D26] focus:ring-[#790D26]/10'}`}/>
                    {errors.from_email && <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600"><AlertCircle size={13}/>{errors.from_email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-semibold text-[#351016]">Phone Number <span className="text-rose-600">*</span></label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#351016] outline-none transition placeholder:text-[#A99B94] focus:ring-2 ${errors.phone ? 'border-rose-400 focus:ring-rose-100' : 'border-[#E8D8C4] focus:border-[#790D26] focus:ring-[#790D26]/10'}`}/>
                    {errors.phone && <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600"><AlertCircle size={13}/>{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-xs font-semibold text-[#351016]">Project Type <span className="text-rose-600">*</span></label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#351016] outline-none transition focus:ring-2 ${errors.service ? 'border-rose-400 focus:ring-rose-100' : 'border-[#E8D8C4] focus:border-[#790D26] focus:ring-[#790D26]/10'}`}>
                      <option value="">Select a service</option>
                      {services.map((svc) => <option key={svc.id} value={svc.title}>{svc.title}</option>)}
                    </select>
                    {errors.service && <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600"><AlertCircle size={13}/>{errors.service}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="budget" className="mb-2 block text-xs font-semibold text-[#351016]">Estimated Budget <span className="font-normal text-[#8A7770]">(Optional)</span></label>
                    <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full rounded-xl border border-[#E8D8C4] bg-white px-4 py-3.5 text-sm text-[#351016] outline-none transition focus:border-[#790D26] focus:ring-2 focus:ring-[#790D26]/10">
                      <option value="">Select budget range</option>
                      <option value="Under ₹25,000 / $300">Under ₹25,000 (~$300)</option>
                      <option value="₹25,000 - ₹50,000 / $300 - $600">₹25,000 – ₹50,000 (~$300 – $600)</option>
                      <option value="₹50,000 - ₹1,00,000 / $600 - $1,200">₹50,000 – ₹1,00,000 (~$600 – $1,200)</option>
                      <option value="Above ₹1,00,000 / $1,200+">Above ₹1,00,000 (~$1,200+)</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-xs font-semibold text-[#351016]">Tell us about your project <span className="text-rose-600">*</span></label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Share your requirements, ideas or any specific details..." className={`w-full resize-y rounded-xl border bg-white px-4 py-3.5 text-sm text-[#351016] outline-none transition placeholder:text-[#A99B94] focus:ring-2 ${errors.message ? 'border-rose-400 focus:ring-rose-100' : 'border-[#E8D8C4] focus:border-[#790D26] focus:ring-[#790D26]/10'}`}/>
                    {errors.message && <p className="mt-1.5 flex items-center gap-1 text-xs text-rose-600"><AlertCircle size={13}/>{errors.message}</p>}
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#790D26] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_22px_rgba(121,13,38,.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#59091C] hover:shadow-[0_12px_28px_rgba(121,13,38,.25)] focus:outline-none focus:ring-2 focus:ring-[#C7A15A] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? <><Loader2 size={18} className="animate-spin"/><span>Sending Message...</span></> : <><span>Send Message</span><Send size={16} className="transition-transform group-hover:translate-x-1"/></>}
                </button>
                <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#8A7770]"><ShieldCheck size={14} className="text-[#98643D]"/> Your details stay private and secure.</p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* What happens next */}
        <section className="relative px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5 }} className="mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-[#E8D8C4] bg-[#FFFCF7] px-5 py-8 shadow-[0_10px_35px_rgba(53,16,22,.05)] sm:px-8 sm:py-10 lg:px-10">
            <div className="mb-8 text-center sm:mb-10"><span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#98643D]">Simple & transparent</span><h2 className="mt-2 font-serif text-3xl font-bold text-[#351016] sm:text-4xl">What Happens Next?</h2><p className="mt-2 text-sm text-[#6B5A56]">A simple process to get started with your project.</p></div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {[
                { icon: Mail, number: '01', title: 'We Review', text: "We’ll go through your requirements." },
                { icon: MessageCircle, number: '02', title: 'Quick Discussion', text: 'We’ll connect with you to understand the project.' },
                { icon: CheckCircle2, number: '03', title: 'Proposal & Plan', text: 'You’ll receive a tailored plan and estimate.' },
                { icon: Sparkles, number: '04', title: 'Project Kickoff', text: 'Once approved, we start building your website.' },
              ].map(({ icon: Icon, number, title, text: description }, index) => (
                <div key={number} className="relative flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#E8D8C4] bg-[#F7E8DD] text-[#790D26]"><Icon size={23}/></div>
                  <span className="text-[10px] font-bold tracking-[2px] text-[#98643D]">STEP {number}</span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-[#351016]">{title}</h3>
                  <p className="mt-1 max-w-[230px] text-sm leading-6 text-[#6B5A56]">{description}</p>
                  {index < 3 && <ArrowUpRight className="absolute -right-3 top-4 hidden text-[#C7A15A] lg:block" size={20}/>}
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}

export default Contact;
