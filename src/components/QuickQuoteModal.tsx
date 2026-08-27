import React, { useState, useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { X, Send, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState(initialService || 'Interior Painting');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;
    
    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#DFB967', '#0B1528', '#25D366']
    });
  };

  const getWhatsAppUrl = () => {
    const text = `*Quick Quote Request for MILKYLUXPAINT*
👤 *Name:* ${fullName || 'Client'}
📞 *Phone:* ${phoneNumber || 'Not provided'}
🎨 *Service:* ${service}
📍 *Location:* ${location || 'Nigeria'}
💬 *Message:* ${message || 'Please provide quotation.'}`;

    return `https://wa.me/2348139065817?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 border border-[#C5A059]/30 shadow-2xl overflow-hidden my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-all cursor-pointer"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-serif-luxury text-gray-900">
                Thank You, {fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                We have registered your quote request for <strong className="text-gray-900">{service}</strong>. Our team will call or WhatsApp you at <strong className="text-gray-900">{phoneNumber}</strong> shortly.
              </p>
              
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send to WhatsApp (08139065817) for Instant Answer</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="text-xs text-gray-500 hover:text-gray-800 underline font-medium pt-2 block mx-auto cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6D27] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Fast Free Estimate</span>
                </div>
                <h3 className="text-2xl font-bold font-serif-luxury text-gray-900">
                  Request a Free Quote
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  MILKYLUXPAINT • Phone/WhatsApp: <strong>08139065817</strong>
                </p>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase" htmlFor="modal-name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-xs sm:text-sm outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase" htmlFor="modal-phone">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="08139065817"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-xs sm:text-sm outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase" htmlFor="modal-service">
                    Service
                  </label>
                  <select
                    id="modal-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#C5A059] text-xs outline-none bg-white"
                  >
                    {servicesData.map((srv) => (
                      <option key={srv.id} value={srv.title}>{srv.title}</option>
                    ))}
                    <option value="Whole House Renovation">Whole House Renovation</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-gray-700 uppercase" htmlFor="modal-location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="modal-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lekki / Maitama"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#C5A059] text-xs outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-700 uppercase" htmlFor="modal-msg">
                  Message / Scope
                </label>
                <textarea
                  id="modal-msg"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brief description of rooms, floors, or paint preferences..."
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:border-[#C5A059] text-xs outline-none resize-none"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#0B1528] font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1e8f49] text-xs font-bold flex items-center justify-center gap-2 border border-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Or Message via WhatsApp (08139065817)</span>
                </a>
              </div>
            </form>
          )}

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

