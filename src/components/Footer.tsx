import React from 'react';
import { servicesData } from '../data/servicesData';
import { 
  Paintbrush, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About MILKYLUXPAINT', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Project Gallery', href: '#projects' },
    { name: 'Colour Studio', href: '#colors' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Request a Quote', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070E1A] text-gray-400 pt-16 pb-24 sm:pb-16 border-t border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E2BE6E] via-[#C5A059] to-[#8C6D27] p-[1.5px]">
                <div className="w-full h-full bg-[#0B1528] rounded-[7px] flex items-center justify-center">
                  <Paintbrush className="w-5 h-5 text-[#E2BE6E]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-serif-luxury">
                  MILKYLUX<span className="text-[#E2BE6E]">PAINT</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-medium -mt-1">
                  Professional Painting & Finishing
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Nigeria's premier painting, wall finishing, and property transformation company. Delivering luxury residential finishes, commercial coatings, and master craftsmanship.
            </p>

            {/* Direct Contact Highlights */}
            <div className="space-y-2 pt-2 text-xs">
              <a
                href="tel:08139065817"
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#E2BE6E] transition-colors"
                id="footer-phone-link"
              >
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="font-semibold text-white">08139065817</span>
                <span className="text-gray-500">(Direct Phone Line)</span>
              </a>

              <a
                href="https://wa.me/2348139065817"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#25D366] transition-colors"
                id="footer-whatsapp-link"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <span className="font-semibold text-white">08139065817</span>
                <span className="text-gray-500">(WhatsApp Business)</span>
              </a>

              <div className="flex items-start gap-2.5 text-gray-300 pt-1">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Operating across Lagos, Abuja, Port Harcourt, and nationwide.</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-luxury">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#E2BE6E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-luxury">
              Our Services
            </h4>
            <div className="space-y-2 text-xs">
              {servicesData.slice(0, 7).map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => onSelectService(srv.title)}
                  className="block text-left text-gray-400 hover:text-[#E2BE6E] transition-colors truncate cursor-pointer w-full"
                >
                  • {srv.title}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Free Consultation Badge (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-luxury">
              Working Hours
            </h4>
            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="text-white font-medium">Monday — Friday:</div>
              <div>8:00 AM – 6:00 PM</div>
              <div className="text-white font-medium pt-1">Saturday:</div>
              <div>9:00 AM – 5:00 PM</div>
              <div className="text-white font-medium pt-1">Sunday:</div>
              <div>Bookings / Emergencies</div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E2BE6E] hover:underline"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Free Color Advice</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer with Legal Modals and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-gray-300">MILKYLUXPAINT</strong>. All rights reserved. Professional Painting & Wall Finishing Services.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gray-400 hover:text-[#E2BE6E] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

