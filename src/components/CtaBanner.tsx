import React from 'react';
import { Phone, MessageCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 lg:py-24 bg-[#0B1528] relative overflow-hidden text-white">
      {/* Background Architectural Accent & Luxury Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury residence transformed by MILKYLUXPAINT"
          className="w-full h-full object-cover opacity-20 filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/90 to-[#0B1528]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A059]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E2BE6E] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transform Your Property Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-serif-luxury text-white" id="cta-headline">
            Ready to Transform Your Space?
          </h2>

          {/* Subtext */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed" id="cta-subtext">
            Let <strong className="text-white font-semibold">MILKYLUXPAINT</strong> give your property the professional, luxurious finish it deserves.
          </p>

          {/* 3 Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-xl mx-auto" id="cta-button-group">
            {/* 1. Request a Free Quote */}
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#0B1528] font-bold text-sm sm:text-base shadow-xl shadow-[#C5A059]/25 hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              id="cta-request-free-quote-btn"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* 2. WhatsApp 08139065817 */}
            <a
              href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20am%20ready%20to%20transform%20my%20space.%20Let%27s%20discuss%20my%20painting%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2"
              id="cta-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp 08139065817</span>
            </a>

            {/* 3. Call 08139065817 */}
            <a
              href="tel:08139065817"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
              id="cta-call-now-btn"
            >
              <Phone className="w-4 h-4 text-[#E2BE6E]" />
              <span>Call 08139065817</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E2BE6E]" /> No-Obligation Free Estimate
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Transparent Material & Labor Quotes</span>
            <span className="hidden sm:inline">•</span>
            <span>100% Satisfaction Focus</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

