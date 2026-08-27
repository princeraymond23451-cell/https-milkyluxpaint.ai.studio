import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Star, Quote, Sparkles, ChevronLeft, ChevronRight, CheckCircle2, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D27] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-serif-luxury mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Read authentic feedback from homeowners, corporate facilities directors, architects, and leading property developers across Nigeria.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Slider */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xl">
            
            {/* Top Quote Icon */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#E5E7EB] flex items-center justify-center text-[#C5A059]">
                <Quote className="w-6 h-6 fill-current opacity-80" />
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            {/* Quote Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="text-lg sm:text-2xl text-[#111827] font-serif-luxury italic leading-relaxed">
                  "{testimonialsData[currentIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonialsData[currentIndex].avatar}
                      alt={testimonialsData[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#C5A059]"
                    />
                    <div>
                      <h3 className="text-base font-bold text-[#111827]">
                        {testimonialsData[currentIndex].name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {testimonialsData[currentIndex].role} • {testimonialsData[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] text-xs font-semibold text-[#8C6D27] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                    <span>{testimonialsData[currentIndex].projectType}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#C5A059]' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl border border-gray-200 hover:border-[#C5A059] text-gray-700 hover:text-[#C5A059] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl border border-gray-200 hover:border-[#C5A059] text-gray-700 hover:text-[#C5A059] transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Small trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-white border border-[#E5E7EB]">
            <div className="text-xl font-bold font-serif-luxury text-[#111827]">4.9 / 5.0</div>
            <div className="text-xs text-gray-500">Average Client Rating</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#E5E7EB]">
            <div className="text-xl font-bold font-serif-luxury text-[#111827]">99.2%</div>
            <div className="text-xs text-gray-500">On-Time Project Delivery</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#E5E7EB]">
            <div className="text-xl font-bold font-serif-luxury text-[#111827]">100%</div>
            <div className="text-xs text-gray-500">Clean Handover Guarantee</div>
          </div>
          <div className="p-4 rounded-xl bg-white border border-[#E5E7EB]">
            <div className="text-xl font-bold font-serif-luxury text-[#111827]">08139065817</div>
            <div className="text-xs text-gray-500">Direct WhatsApp / Call Line</div>
          </div>
        </div>

      </div>
    </section>
  );
};

