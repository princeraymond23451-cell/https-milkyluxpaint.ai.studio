import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What painting services does MILKYLUXPAINT provide?',
      answer: 'MILKYLUXPAINT provides a comprehensive range of professional services including interior painting, exterior painting, residential painting, commercial painting, decorative painting (such as Italian Venetian Stucco and metallic glazes), wall finishing (screeding, skimming, damp sealing, and crack repair), and expert colour consultation.'
    },
    {
      id: 'faq-2',
      question: 'Do you handle both interior and exterior painting?',
      answer: 'Yes, we specialize in both interior and exterior painting. For exteriors, we use premium UV-resistant, anti-fungal, and weather-shield formulations built to withstand heavy tropical rains and intense sun. For interiors, we deliver ultra-smooth, washable, low-VOC, and odor-free luxury finishes.'
    },
    {
      id: 'faq-3',
      question: 'Can I request a quotation?',
      answer: 'Yes! You can request a 100% free, no-obligation quote by completing our online quote request form, calling our dedicated line at 08139065817, or sending a direct message via WhatsApp. We will provide a transparent, itemized assessment for your project.'
    },
    {
      id: 'faq-4',
      question: 'Can you help me choose paint colours?',
      answer: 'Yes, we offer professional colour consultation. Our specialists evaluate your room proportions, natural lighting, furniture, and personal style to help you select harmonious palettes, complementary undertones, and optimal sheens (matte, satin, silk, or gloss).'
    },
    {
      id: 'faq-5',
      question: 'Do you work on residential and commercial properties?',
      answer: 'Yes, we serve discerning homeowners, luxury estate developers, architects, corporate offices, hotels, restaurants, retail shops, and commercial complexes across Nigeria with dedicated teams tailored to each project scope.'
    },
    {
      id: 'faq-6',
      question: 'How can I contact MILKYLUXPAINT?',
      answer: 'You can contact us anytime by calling 08139065817, chatting with us on WhatsApp at 08139065817, or submitting your project specifications through the quote form on this website.'
    },
    {
      id: 'faq-7',
      question: 'How do I get started?',
      answer: 'Getting started is simple: 1) Contact us with your project details, 2) Receive our assessment and quotation, 3) Select your colours and preferred finishes, and 4) Relax while our professional painting team transforms your space on schedule.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D27] text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-serif-luxury mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our painting services, process, timelines, and quotations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-[#C5A059] shadow-md ring-1 ring-[#C5A059]/20'
                    : 'border-[#E5E7EB] hover:border-[#D1D5DB]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className={`text-base sm:text-lg font-bold font-serif-luxury transition-colors ${
                    isOpen ? 'text-[#0F1E36]' : 'text-[#1F2937]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#0F1E36] text-[#E2BE6E] rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1528] text-white border border-[#C5A059]/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold font-serif-luxury text-[#FAF9F6]">
              Have a specific question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Speak directly with our project advisory desk.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:08139065817"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E2BE6E]" />
              <span>08139065817</span>
            </a>
            <a
              href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20have%20a%20question%20about%20your%20painting%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
