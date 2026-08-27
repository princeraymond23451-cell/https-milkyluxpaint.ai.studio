import React, { useState } from 'react';
import { colorPalettes, ColorSwatch } from '../data/colorPaletteData';
import { Palette, Sparkles, Check, ArrowRight, Layers, Eye, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ColorVisualizerProps {
  onSelectColorForQuote: (colorInfo: string) => void;
}

export const ColorVisualizer: React.FC<ColorVisualizerProps> = ({ onSelectColorForQuote }) => {
  const [selectedColor, setSelectedColor] = useState<ColorSwatch>(colorPalettes[0]);
  const [selectedSheen, setSelectedSheen] = useState<string>('Silk Sheen (Satin Luxury)');

  const finishes = [
    { name: 'Ultra-Matte Velvet', desc: 'No reflection, rich color depth, hides minor wall defects' },
    { name: 'Silk Sheen (Satin Luxury)', desc: 'Subtle pearlescent glow, durable and wipe-clean' },
    { name: 'Italian Stucco Veneziano', desc: 'Hand-burnished marble-like polish with tactile depth' },
    { name: 'Architectural Weather-Shield', desc: 'Silicone/Siloxane UV & anti-fungal exterior grade' }
  ];

  return (
    <section id="colors" className="py-20 lg:py-28 bg-[#121316] text-white relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#C5A059]/40 text-[#E2BE6E] text-xs font-bold uppercase tracking-widest mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Color & Finish Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif-luxury mb-4">
            Curated Architectural Pigments
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Experience our signature color palettes formulated for Nigerian architectural daylighting, high-ceiling villas, and modern corporate executive suites.
          </p>
        </div>

        {/* Visualizer Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Swatch Selector Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#E2BE6E] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Step 1: Select Signature Palette
              </span>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {colorPalettes.map((swatch) => (
                  <button
                    key={swatch.id}
                    onClick={() => setSelectedColor(swatch)}
                    className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden group cursor-pointer ${
                      selectedColor.id === swatch.id
                        ? 'border-[#E2BE6E] ring-2 ring-[#E2BE6E]/40 bg-white/10 scale-[1.02]'
                        : 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div
                      className="w-full h-12 rounded-lg mb-2 shadow-inner border border-black/20 flex items-center justify-center"
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {selectedColor.id === swatch.id && (
                        <div className="w-5 h-5 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                    <div className="text-xs font-bold text-white truncate">{swatch.name}</div>
                    <div className="text-[10px] text-[#C5A059] font-mono">{swatch.code}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Selector */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-widest text-[#E2BE6E] font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Step 2: Select Sheen & Texture
              </span>
              
              <div className="space-y-2">
                {finishes.map((finish) => (
                  <button
                    key={finish.name}
                    onClick={() => setSelectedSheen(finish.name)}
                    className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start justify-between gap-3 cursor-pointer ${
                      selectedSheen === finish.name
                        ? 'border-[#C5A059] bg-[#C5A059]/15 text-white'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-white">{finish.name}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{finish.desc}</div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
                      selectedSheen === finish.name ? 'border-[#E2BE6E] bg-[#E2BE6E]' : 'border-gray-500'
                    }`}>
                      {selectedSheen === finish.name && <div className="w-1.5 h-1.5 bg-[#121316] rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Room Live Interactive Preview Column (Right) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedColor.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden bg-[#1C1D22] border border-[#C5A059]/30 shadow-2xl"
              >
                {/* Simulated Visual Room Image */}
                <div className="relative h-[340px] sm:h-[420px] overflow-hidden">
                  <img
                    src={selectedColor.roomPreviewImage}
                    alt={`Room styled with ${selectedColor.name}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle color tint simulation overlay */}
                  <div
                    className="absolute inset-0 mix-blend-color opacity-25 pointer-events-none transition-all duration-700"
                    style={{ backgroundColor: selectedColor.hex }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16171B] via-transparent to-black/40 pointer-events-none" />

                  {/* Swatch Pill in top corner */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#121316]/90 backdrop-blur-md border border-white/20 flex items-center gap-3 shadow-xl">
                    <div
                      className="w-8 h-8 rounded-lg shadow-sm border border-white/30"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <div>
                      <div className="text-xs font-bold text-white">{selectedColor.name}</div>
                      <div className="text-[10px] text-gray-400 font-mono">{selectedColor.code} • {selectedColor.category}</div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#121316]/80 backdrop-blur-md border border-[#C5A059]/40 text-xs font-semibold text-[#E2BE6E]">
                    {selectedSheen}
                  </div>
                </div>

                {/* Card Spec Details & Direct Quote Hook */}
                <div className="p-6 sm:p-8 space-y-4 bg-[#16171B]">
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">
                      Color Description & Light Reaction
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {selectedColor.description}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center justify-between">
                    <span className="text-gray-400">Architectural Recommendation:</span>
                    <span className="text-[#E2BE6E] font-medium">{selectedColor.finishRecommendation}</span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => onSelectColorForQuote(`${selectedColor.name} (${selectedColor.code}) in ${selectedSheen}`)}
                      className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#121316] font-bold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                      id="color-select-quote-btn"
                    >
                      <span>Request Quote for This Palette</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/2348139065817?text=Hello%20MilkyluxPaint%2C%20I%20am%20interested%20in%20the%20color%20palette%3A%20${encodeURIComponent(selectedColor.name)}%20(${selectedColor.code})%20with%20${encodeURIComponent(selectedSheen)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 border border-white/20 transition-all"
                    >
                      <Droplet className="w-4 h-4 text-[#25D366]" />
                      <span>WhatsApp Color Sample</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
