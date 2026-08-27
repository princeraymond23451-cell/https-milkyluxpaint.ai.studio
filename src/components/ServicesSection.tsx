import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { Service } from '../types';
import { 
  Paintbrush, 
  Home, 
  Sparkles, 
  Building2, 
  Layers, 
  Palette, 
  Eye, 
  RefreshCw, 
  Briefcase, 
  Hammer, 
  ArrowRight, 
  CheckCircle,
  Phone,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Icon mapping
  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#C5A059]' };
    switch (iconName) {
      case 'Paintbrush': return <Paintbrush {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      default: return <Paintbrush {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'residential', label: 'Residential & Interiors' },
    { id: 'commercial', label: 'Commercial & Offices' },
    { id: 'decorative', label: 'Specialty & Textures' }
  ];

  const filteredServices = servicesData.filter(srv => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'residential') {
      return ['interior-painting', 'residential-painting', 'repainting-renovation', 'color-consultation', 'new-building-painting'].includes(srv.id);
    }
    if (selectedCategory === 'commercial') {
      return ['commercial-painting', 'office-business-painting', 'exterior-painting', 'new-building-painting'].includes(srv.id);
    }
    if (selectedCategory === 'decorative') {
      return ['wall-texturing', 'decorative-painting', 'color-consultation'].includes(srv.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D27] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-serif-luxury mb-4">
            Professional Painting & Finishing Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From luxury residential interiors and durable exterior weather coats to handcrafted Italian Venetian stuccos and large-scale commercial developments.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B1528] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col group"
              id={`service-card-${service.id}`}
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={`${service.title} by MILKYLUXPAINT`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Icon Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md border border-white/40">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Tag */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="font-semibold text-[#E2BE6E] tracking-wider uppercase">MILKYLUXPAINT Master Finish</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#111827] font-serif-luxury group-hover:text-[#9E7C32] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Benefit Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#FAF9F6] text-gray-700 border border-[#E5E7EB]"
                      >
                        <CheckCircle className="w-3 h-3 text-[#C5A059]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0B1528] hover:bg-[#C5A059] text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                    id={`book-service-${service.id}`}
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20am%20interested%20in%20your%20service%3A%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                    title={`Inquire about ${service.title} via WhatsApp: 08139065817`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Fast Assistance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0B1528] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C5A059]/30 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold font-serif-luxury text-[#FAF9F6]">
              Need a Custom or Multi-Phase Project Assessment?
            </h3>
            <p className="text-sm text-gray-300">
              Speak directly with our project advisory team for immediate color, material, and cost advice.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:08139065817"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#E2BE6E]" />
              <span>Call 08139065817</span>
            </a>
            <a
              href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20would%20like%20to%20consult%20on%20a%20custom%20painting%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp 08139065817</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

