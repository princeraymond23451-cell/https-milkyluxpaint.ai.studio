import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '08139065817';
  const prefilledMessage = 'Hello MILKYLUXPAINT, I would like to request a quote for a painting/finishing project.';
  const whatsappUrl = `https://wa.me/2348139065817?text=${encodeURIComponent(prefilledMessage)}`;

  useEffect(() => {
    // Show gentle prompt after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Tooltip prompt bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mb-3 p-3 sm:p-3.5 bg-[#0F1E36] text-white rounded-2xl shadow-2xl border border-[#C5A059]/40 max-w-[260px] relative text-xs"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white text-gray-800 rounded-full flex items-center justify-center shadow hover:bg-gray-100"
              aria-label="Close notification"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-1.5 text-[#E2BE6E] font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant WhatsApp Estimate</span>
            </div>
            <p className="text-gray-200 leading-snug">
              Chat directly with our team on <strong className="text-white">{phoneNumber}</strong> for quick quotes & project advice!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white font-bold shadow-2xl shadow-[#25D366]/40 hover:bg-[#20ba59] transition-all cursor-pointer border-2 border-white/30"
        id="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with MILKYLUXPAINT"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white shrink-0" />
        <span className="text-sm font-semibold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
        {/* Active status pulsating dot */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border border-white"></span>
        </span>
      </motion.a>
    </div>
  );
};
