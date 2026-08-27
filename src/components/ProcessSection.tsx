import React from 'react';
import { processData } from '../data/processData';
import { MessageSquare, Palette, Paintbrush, ShieldCheck, Sparkles, Check, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessSectionProps {
  onStartConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartConsultation }) => {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#0B1528]' };
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'PaintRoller': return <Paintbrush {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0B1528] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E2BE6E] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-luxury mb-4">
            Our Four-Step Painting Process
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            From your initial inquiry to the final room walkthrough, our streamlined process ensures a smooth, transparent, and rewarding property transformation.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processData.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0F1E36] rounded-2xl p-6 sm:p-7 border border-[#C5A059]/25 hover:border-[#C5A059]/60 shadow-xl flex flex-col justify-between group transition-all duration-300 relative"
              id={`process-step-${step.stepNumber}`}
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DFB967] via-[#C5A059] to-[#9E7C32] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {renderIcon(step.iconName)}
                  </div>
                  <span className="text-3xl sm:text-4xl font-bold font-serif-luxury text-[#E2BE6E]/80 tracking-tight">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-xl font-bold text-white font-serif-luxury mb-2 group-hover:text-[#F7E5B5] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Key Activities List */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                      <Check className="w-3.5 h-3.5 text-[#E2BE6E] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Indicator Tag */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C5A059] uppercase tracking-wider font-semibold">
                <span>Step {step.stepNumber}</span>
                <span className="text-gray-400">Phase {index + 1} of 4</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#0B1528] font-bold text-sm sm:text-base shadow-xl shadow-[#C5A059]/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="process-get-started-btn"
          >
            <span>Get Started with MILKYLUXPAINT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:08139065817"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-[#E2BE6E]" />
            <span>Call 08139065817</span>
          </a>
        </div>

      </div>
    </section>
  );
};

