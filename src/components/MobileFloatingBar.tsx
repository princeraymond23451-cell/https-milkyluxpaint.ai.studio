import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

interface MobileFloatingBarProps {
  onOpenQuote: () => void;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ onOpenQuote }) => {
  return (
    <div
      id="mobile-floating-action-bar"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1528]/95 backdrop-blur-lg border-t border-[#C5A059]/30 p-2.5 shadow-2xl safe-area-bottom"
    >
      <div className="grid grid-cols-3 gap-2">
        
        {/* Call Now */}
        <a
          href="tel:08139065817"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 active:scale-95"
          id="mobile-float-call"
        >
          <Phone className="w-4 h-4 text-[#E2BE6E] mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20would%20like%20to%20request%20a%20painting%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md active:scale-95"
          id="mobile-float-whatsapp"
        >
          <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Get Quote */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-br from-[#DFB967] to-[#9E7C32] text-[#0B1528] font-bold shadow-md active:scale-95 cursor-pointer"
          id="mobile-float-quote"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] tracking-tight">Get Quote</span>
        </button>

      </div>
    </div>
  );
};

