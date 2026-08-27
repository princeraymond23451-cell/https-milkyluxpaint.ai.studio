import React from 'react';
import { whyChooseData } from '../data/whyChooseData';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Coins, 
  Zap, 
  HeartHandshake, 
  Phone,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsProps {
  onOpenQuote?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#C5A059]' };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Clock': return <Clock {...props} />;
      case 'Coins': return <Coins {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D27] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-serif-luxury mb-4">
            The MILKYLUXPAINT Difference
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We hold ourselves to the highest technical standards in the industry. Every brushstroke, colour mix, and wall finish is guided by six uncompromising commitments.
          </p>
        </div>

        {/* 6 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col justify-between group"
              id={`why-choose-${item.id}`}
            >
              <div className="space-y-4">
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0B1528] transition-all duration-300">
                  {renderIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold text-[#111827] font-serif-luxury group-hover:text-[#9E7C32] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C6D27] uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>MILKYLUXPAINT Guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fast Action CTA Strip */}
        <div className="mt-14 text-center flex flex-wrap items-center justify-center gap-4">
          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#0B1528] font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Experience the Difference — Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
          <a
            href="tel:08139065817"
            className="px-5 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-[#111827] border border-gray-300 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Call 08139065817</span>
          </a>
        </div>

      </div>
    </section>
  );
};

