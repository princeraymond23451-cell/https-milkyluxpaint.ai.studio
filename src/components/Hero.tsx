import React from 'react';
import { Phone, MessageCircle, ArrowRight, Star, ShieldCheck, Sparkles, Award, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B1528]">
      {/* Rich Background Image with Luxury Vignette Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury architectural residence painted by MILKYLUXPAINT"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] contrast-[1.1]"
          loading="eager"
        />
        {/* Subtle Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528]/95 via-[#0B1528]/80 to-[#0B1528]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-[#0B1528]/70" />
        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A059]/12 blur-[130px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6]/10 border border-[#C5A059]/40 backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#E2BE6E]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FAF9F6]">
              Professional Painting & Finishing Brand
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.12] mb-6 font-serif-luxury"
            id="hero-main-heading"
          >
            Transform Your Space{' '}
            <span className="block mt-2 italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F7E5B5] via-[#E2BE6E] to-[#C5A059]">
              with Precision & Luxury.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto mb-10"
            id="hero-subheading"
          >
            Professional interior, exterior, decorative painting, and wall finishing designed to give homes, offices, and commercial properties a beautiful, durable, and luxurious finish.
          </motion.p>

          {/* 3 Call-To-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto mb-14"
            id="hero-cta-buttons"
          >
            {/* 1. Request a Quote */}
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#0B1528] font-bold text-base shadow-xl shadow-[#C5A059]/25 hover:shadow-2xl hover:shadow-[#C5A059]/40 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-get-free-quote-btn"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* 2. Call 08139065817 */}
            <a
              href="tel:08139065817"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-[#C5A059]/60 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg group"
              id="hero-call-now-btn"
            >
              <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#E2BE6E] group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <span className="tracking-wide">Call 08139065817</span>
            </a>

            {/* 3. WhatsApp Us */}
            <a
              href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20painting%2Ffinishing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 group"
              id="hero-whatsapp-us-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>

          {/* Social Proof & Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#E2BE6E] mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">500+</span>
              </div>
              <p className="text-xs text-gray-300">Projects Completed</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#E2BE6E] mb-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">100%</span>
              </div>
              <p className="text-xs text-gray-300">Satisfaction Focus</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#E2BE6E] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">Premium</span>
              </div>
              <p className="text-xs text-gray-300">Paints & Wall Finishes</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#E2BE6E] mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">Fast</span>
              </div>
              <p className="text-xs text-gray-300">On-Time Completion</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Curved Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
    </section>
  );
};

