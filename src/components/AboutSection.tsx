import React from 'react';
import { Sparkles, Check, ArrowRight, Award, MessageCircle } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const targetAudiences = [
    'Discerning Homeowners',
    'Offices & Corporate Workspaces',
    'Boutique Hotels & Lounges',
    'Real Estate Developers',
    'Landlords & Estate Managers',
    'Architects & Interior Designers'
  ];

  const brandPillars = [
    {
      title: 'Professional Workmanship',
      desc: 'Expert surface preparation, multi-layer screeding, razor-sharp edge cut-ins, and zero roller marks.'
    },
    {
      title: 'Premium Quality Paints & Materials',
      desc: 'Top-tier low-VOC, non-fading, washable pigments, and weather-shield coatings built for durability.'
    },
    {
      title: 'Reliable Project Execution',
      desc: 'Clear milestones, disciplined timelines, clean site management, and dedicated project supervision.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative subtle texture patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Luxury Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Primary Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                  alt="MILKYLUXPAINT Master Painter perfecting an interior luxury living room"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E2BE6E] font-semibold">Excellence in Finishing</span>
                  <p className="text-sm font-medium text-gray-200">Meticulous wall prep & smooth coating technology</p>
                </div>
              </div>

              {/* Floating Secondary Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-56 sm:w-64 bg-[#0B1528] text-white p-5 rounded-2xl border border-[#C5A059]/30 shadow-2xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DFB967] to-[#9E7C32] flex items-center justify-center text-[#0B1528]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-serif-luxury text-white">100%</div>
                    <div className="text-[11px] text-[#C5A059] uppercase tracking-wider font-semibold">Quality Assured</div>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-snug">
                  From initial wall diagnostics to final room handover.
                </p>
              </div>

              {/* Decorative Gold Accent Border */}
              <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#C5A059] rounded-tl-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#8C6D27] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About MILKYLUXPAINT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-serif-luxury leading-tight">
                Where Luxury Aesthetics Meet Master Workmanship.
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              <strong className="text-[#111827] font-semibold">MILKYLUXPAINT</strong> is a premier Nigerian painting, decoration, and wall-finishing company committed to elevating everyday spaces into extraordinary environments. We blend timeless elegance, advanced surface preparation, and the finest paints to deliver breathtaking residential and commercial transformations.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Whether you are an architect orchestrating a newly constructed mansion, a business executive revamping an office, a hotelier seeking sophisticated ambiance, or a homeowner desiring pristine walls, our team brings unmatched dedication, clean work habits, and guaranteed satisfaction.
            </p>

            {/* Brand Pillars */}
            <div className="space-y-3 pt-2">
              {brandPillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E5E7EB] shadow-sm hover:border-[#C5A059]/50 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#C5A059]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#9E7C32]">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#111827]">{pillar.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-normal">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Who We Serve Tags */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2.5">
                Trusted by Clients Across Nigeria:
              </p>
              <div className="flex flex-wrap gap-2">
                {targetAudiences.map((aud, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB] hover:bg-[#E5E7EB] transition-colors"
                  >
                    {aud}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Button Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#0B1528] font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                id="about-request-quote-btn"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20painting%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-[#111827] border border-gray-300 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                id="about-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>Chat: 08139065817</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

