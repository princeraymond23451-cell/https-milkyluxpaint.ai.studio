import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ColorVisualizer } from './components/ColorVisualizer';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactQuoteSection } from './components/ContactQuoteSection';
import { Footer } from './components/Footer';
import { MobileFloatingBar } from './components/MobileFloatingBar';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [customNote, setCustomNote] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleSelectColorForQuote = (colorNote: string) => {
    setCustomNote(colorNote);
    setSelectedService('Color Consultation & Application');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleStartConsultation = () => {
    setSelectedService('Color Consultation & Site Diagnosis');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111827] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuoteModal()} />

        {/* 2. About Section */}
        <AboutSection onOpenQuote={() => handleOpenQuoteModal()} />

        {/* 3. Services Section (All 10 services) */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 4. Projects Gallery & Lightbox */}
        <ProjectsGallery onRequestQuote={handleSelectServiceForQuote} />

        {/* 5. Interactive Colour & Finish Studio */}
        <ColorVisualizer onSelectColorForQuote={handleSelectColorForQuote} />

        {/* 6. Why Choose MILKYLUXPAINT (6 Core Pillars) */}
        <WhyChooseUs />

        {/* 7. Our 4-Step Process */}
        <ProcessSection onStartConsultation={handleStartConsultation} />

        {/* 8. Client Testimonials */}
        <TestimonialsSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Call to Action Banner */}
        <CtaBanner onOpenQuote={() => handleOpenQuoteModal()} />

        {/* 11. Contact & Comprehensive Quote Form */}
        <ContactQuoteSection
          preselectedService={selectedService}
          preselectedColorOrNote={customNote}
        />
      </main>

      {/* Footer */}
      <Footer 
        onSelectService={handleSelectServiceForQuote}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Floating Action Bar on Mobile */}
      <MobileFloatingBar onOpenQuote={() => handleOpenQuoteModal()} />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedService}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

