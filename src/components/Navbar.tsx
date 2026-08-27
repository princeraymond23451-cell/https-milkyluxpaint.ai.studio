import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Paintbrush, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Color Studio', href: '#colors' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1528]/95 backdrop-blur-md border-b border-[#C5A059]/25 shadow-xl py-3 text-white'
          : 'bg-[#0B1528]/85 backdrop-blur-sm border-b border-white/10 py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            id="navbar-brand-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E2BE6E] via-[#C5A059] to-[#8C6D27] p-[1.5px] shadow-md group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#0B1528] rounded-[7px] flex items-center justify-center">
                <Paintbrush className="w-5 h-5 text-[#E2BE6E]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight flex items-center font-serif-luxury">
                <span className="text-white">MILKYLUX</span>
                <span className="text-[#E2BE6E]">PAINT</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium -mt-1">
                Luxury Wall Finishing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-medium text-gray-200 hover:text-[#E2BE6E] transition-colors rounded-md hover:bg-white/5 whitespace-nowrap"
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Quick Buttons & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct Phone Call */}
            <a
              href="tel:08139065817"
              className="flex items-center gap-1.5 text-xs lg:text-sm text-gray-200 hover:text-[#E2BE6E] font-medium px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-[#C5A059]/40 bg-white/5 hover:bg-white/10 transition-all"
              title="Call MILKYLUXPAINT on 08139065817"
              id="navbar-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#E2BE6E]" />
              <span>08139065817</span>
            </a>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20painting%2Ffinishing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:text-white bg-[#25D366]/10 hover:bg-[#25D366] rounded-lg border border-[#25D366]/30 transition-all duration-200"
              title="Chat on WhatsApp: 08139065817"
              id="navbar-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            {/* Quote Action CTA */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="relative group overflow-hidden rounded-lg p-[1px] font-semibold text-xs lg:text-sm shadow-lg shadow-[#C5A059]/20 cursor-pointer"
              id="navbar-get-quote-btn"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] transition-all group-hover:scale-105" />
              <div className="relative px-3.5 py-2 bg-gradient-to-r from-[#C5A059] to-[#A68138] text-white rounded-lg flex items-center gap-1.5 group-hover:brightness-110 transition-all">
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:08139065817"
              className="p-2 text-[#E2BE6E] bg-white/5 border border-white/10 rounded-lg"
              aria-label="Call 08139065817"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden border-t border-[#C5A059]/20 bg-[#0B1528] px-4 pt-3 pb-6 space-y-3 shadow-2xl"
            id="mobile-nav-drawer"
          >
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-xs font-medium text-gray-200 hover:text-[#E2BE6E] rounded-md bg-white/5 hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-300 py-1">
                <span className="flex items-center gap-1 text-[#C5A059]">
                  <ShieldCheck className="w-4 h-4" /> Direct Contact Line:
                </span>
                <span className="font-semibold text-white">08139065817</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:08139065817"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/10 text-white text-xs font-semibold border border-white/10"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E2BE6E]" />
                  <span>Call 08139065817</span>
                </a>
                <a
                  href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20painting%2Ffinishing%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#25D366]/20 text-[#25D366] text-xs font-semibold border border-[#25D366]/30"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] text-white text-sm font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer"
                id="mobile-drawer-quote-btn"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
