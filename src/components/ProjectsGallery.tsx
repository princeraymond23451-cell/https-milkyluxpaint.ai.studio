import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import { LightboxModal } from './LightboxModal';
import { Sparkles, MapPin, Maximize2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectsGalleryProps {
  onRequestQuote: (projectOrServiceName?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onRequestQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const categories = ['All', 'Interior', 'Exterior', 'Residential', 'Commercial', 'Decorative'];

  const filteredProjects = projectsData.filter(proj => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  const handleOpenLightbox = (index: number) => {
    setActiveProjectIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveProjectIndex(null);
  };

  const handlePrev = () => {
    if (activeProjectIndex === null) return;
    const prev = activeProjectIndex === 0 ? filteredProjects.length - 1 : activeProjectIndex - 1;
    setActiveProjectIndex(prev);
  };

  const handleNext = () => {
    if (activeProjectIndex === null) return;
    const next = activeProjectIndex === filteredProjects.length - 1 ? 0 : activeProjectIndex + 1;
    setActiveProjectIndex(next);
  };

  const currentProject = activeProjectIndex !== null ? filteredProjects[activeProjectIndex] : null;

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D27] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-serif-luxury mb-4">
            Showcase of Work & Transformations
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Explore our curated gallery of completed painting transformations across luxury private residences, modern estates, corporate towers, and decorative wall installations.
          </p>

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveProjectIndex(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0B1528] text-[#E2BE6E] shadow-lg border border-[#C5A059]/40'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#0B1528] border border-[#E5E7EB] shadow-sm hover:shadow-2xl hover:border-[#C5A059]/60 transition-all duration-500 cursor-pointer flex flex-col h-[380px] sm:h-[420px]"
              id={`project-card-${project.id}`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`${project.title} by MILKYLUXPAINT`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 transition-colors duration-300" />

              {/* Category & Zoom Icon Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-[#0B1528]/85 backdrop-blur-md border border-[#C5A059]/30 text-[#E2BE6E] text-[11px] font-semibold tracking-wide">
                  {project.category}
                </span>

                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#0B1528] transition-colors shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 transform transition-transform duration-300">
                <div className="flex items-center gap-1.5 text-xs text-[#E2BE6E] font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>

                <h3 className="text-xl font-bold font-serif-luxury text-white group-hover:text-[#F7E5B5] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {project.finishType}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#E2BE6E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Gallery Footer Note & CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Have a blueprint or architectural drawing? We provide complete painting bills of quantities (BOQ).
          </p>
          <button
            onClick={() => onRequestQuote()}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1528] hover:bg-[#C5A059] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            id="gallery-book-custom-project-btn"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={currentProject}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
        onRequestQuoteForProject={(title) => onRequestQuote(`Project Finishing: ${title}`)}
      />
    </section>
  );
};

