import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LightboxModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onRequestQuoteForProject: (projectTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
  onRequestQuoteForProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20 focus:outline-none"
          aria-label="Close Lightbox"
          id="lightbox-close-btn"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev & Next Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20 focus:outline-none hidden sm:flex items-center justify-center"
          aria-label="Previous project"
          id="lightbox-prev-btn"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-20 focus:outline-none hidden sm:flex items-center justify-center"
          aria-label="Next project"
          id="lightbox-next-btn"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#16171B] border border-[#C5A059]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Main Showcase Image */}
          <div className="lg:w-7/12 relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[500px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover max-h-[60vh] lg:max-h-[85vh]"
            />
            
            {/* Category Pill */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#121316]/80 backdrop-blur-md border border-[#C5A059]/40 text-[#E2BE6E] text-xs font-semibold">
              {project.category}
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#C5A059] font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MilkyluxPaint Portfolio</span>
                </div>
                <h3 className="text-2xl font-bold font-serif-luxury text-white">
                  {project.title}
                </h3>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-[#E2BE6E] shrink-0" />
                <span>{project.location}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Finish Specification:</div>
                <div className="text-sm font-medium text-[#E2BE6E] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  {project.finishType}
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-1.5 text-xs text-gray-400">
                <span className="font-semibold text-gray-200">Scope of Work:</span>
                <p className="text-gray-300">{project.scope}</p>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  onRequestQuoteForProject(project.title);
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#121316] font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                id="lightbox-request-similar-btn"
              >
                <span>Request Similar Finish For Your Space</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/2348139065817?text=Hello%20MilkyluxPaint%2C%20I%20saw%20your%20project%20'${encodeURIComponent(project.title)}'%20in%20${encodeURIComponent(project.location)}%20and%20I%20would%20like%20a%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>Discuss on WhatsApp (08139065817)</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
};
