import React from 'react';
import { X, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-10 my-8 max-h-[85vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="px-6 py-5 bg-[#0F1E36] text-white flex items-center justify-between border-b border-[#C5A059]/30">
            <div className="flex items-center gap-2.5">
              {type === 'privacy' ? (
                <Shield className="w-5 h-5 text-[#E2BE6E]" />
              ) : (
                <FileText className="w-5 h-5 text-[#E2BE6E]" />
              )}
              <h3 className="text-lg font-bold font-serif-luxury text-[#FAF9F6]">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'} — MILKYLUXPAINT
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-4 text-sm text-gray-600 leading-relaxed">
            {type === 'privacy' ? (
              <>
                <p>
                  At <strong>MILKYLUXPAINT</strong>, we are committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, and safeguard the information you provide when requesting quotations or contacting us.
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">1. Information We Collect</h4>
                <p>
                  We collect information you voluntarily provide, such as your full name, phone number, email address, property location, and project specifications.
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">2. How We Use Your Information</h4>
                <p>
                  Your information is solely used to prepare accurate project quotations, communicate regarding site assessments, coordinate painting schedules, and provide customer support.
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">3. Data Confidentiality</h4>
                <p>
                  We do not sell, trade, or share your contact details or project information with third parties. All inquiries remain strictly confidential.
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">4. Direct Contact</h4>
                <p>
                  For any inquiries regarding your data, please call or WhatsApp us on <strong>08139065817</strong>.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong>MILKYLUXPAINT</strong>. By using our website or commissioning our painting and wall-finishing services, you agree to the following terms:
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">1. Scope of Quotations</h4>
                <p>
                  Estimates provided online or over the phone are preliminary. A binding quotation is confirmed upon site inspection or review of validated architectural plans and surface conditions.
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">2. Workmanship & Quality Standard</h4>
                <p>
                  MILKYLUXPAINT guarantees high-grade workmanship, standard surface preparation, and the application of quality paint products.
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">3. Project Milestones & Approvals</h4>
                <p>
                  Project timelines and milestone payments are documented in your tailored service agreement. A final walkthrough is performed upon completion to ensure customer satisfaction.
                </p>
                <h4 className="text-base font-bold text-gray-900 pt-2">4. Inquiries & Support</h4>
                <p>
                  For questions regarding our service agreements or to schedule a consultation, contact us at <strong>08139065817</strong>.
                </p>
              </>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#0F1E36] hover:bg-[#C5A059] text-white text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
