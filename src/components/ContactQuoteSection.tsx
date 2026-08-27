import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { servicesData } from '../data/servicesData';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Calendar, 
  Building, 
  Paintbrush, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactQuoteSectionProps {
  preselectedService?: string;
  preselectedColorOrNote?: string;
}

export const ContactQuoteSection: React.FC<ContactQuoteSectionProps> = ({
  preselectedService,
  preselectedColorOrNote
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    propertyType: 'Residential (House / Duplex)',
    serviceRequired: preselectedService || 'Interior Painting',
    location: '',
    preferredDate: '',
    message: preselectedColorOrNote ? `Interested in: ${preselectedColorOrNote}` : '',
    approximateSize: 'Medium (3 - 5 Bedroom / Medium Office)'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedColorOrNote) {
      setFormData(prev => ({
        ...prev,
        message: prev.message ? `${prev.message}\n${preselectedColorOrNote}` : `Interested in: ${preselectedColorOrNote}`
      }));
    }
  }, [preselectedColorOrNote]);

  const propertyTypes = [
    'Residential (House / Duplex)',
    'Luxury Villa / Mansion',
    'Apartment / Flat',
    'Commercial Office / Corporate Tower',
    'Hotel / Hospitality Lounge',
    'Retail Store / Shopping Mall',
    'New Building Construction',
    'Industrial / Warehouse'
  ];

  const locations = [
    'Lekki / Victoria Island / Ikoyi, Lagos',
    'Ikeja / Mainland, Lagos',
    'Ajah / Epe, Lagos',
    'Maitama / Wuse / Guzape, Abuja',
    'Port Harcourt, Rivers State',
    'Ibadan, Oyo State',
    'Ogun State (Abeokuta / Sagamu / Mowe)',
    'Other Location in Nigeria'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage('Please enter your phone number so we can reach you.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable quote processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A059', '#DFB967', '#0B1528', '#25D366']
      });
    }, 600);
  };

  // Generate instant WhatsApp message with quote details
  const getWhatsAppUrl = () => {
    const text = `*New Quote Request for MILKYLUXPAINT*
👤 *Name:* ${formData.fullName || 'Prospective Client'}
📞 *Phone:* ${formData.phoneNumber || 'Not provided'}
✉️ *Email:* ${formData.email || 'Not provided'}
🏢 *Property:* ${formData.propertyType}
🎨 *Service:* ${formData.serviceRequired}
📍 *Location:* ${formData.location || 'Nigeria'}
📅 *Date:* ${formData.preferredDate || 'As soon as possible'}
💬 *Message/Description:* ${formData.message || 'Please provide quotation and project timeline.'}`;

    return `https://wa.me/2348139065817?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#8C6D27] text-xs font-bold uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Contact & Quotes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight font-serif-luxury mb-4">
            Request a Free Quote
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Fill out the project details below for an estimate, or reach out directly on our phone / WhatsApp lines for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Details & Trust Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Navy Card with Phone & WhatsApp prominently displayed */}
            <div className="bg-[#0B1528] text-white p-6 sm:p-8 rounded-3xl border border-[#C5A059]/40 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold font-serif-luxury text-[#FAF9F6] mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#E2BE6E]" />
                Direct Hotline & WhatsApp
              </h3>
              <p className="text-xs text-gray-300 mb-6">
                Our project supervisors and colour consultants are ready to assist you.
              </p>

              <div className="space-y-4">
                
                {/* Phone Card */}
                <a
                  href="tel:08139065817"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059] flex items-center gap-4 group transition-all"
                  id="contact-box-phone"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/20 text-[#E2BE6E] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#C5A059] font-bold">Call Us Direct</div>
                    <div className="text-lg sm:text-xl font-bold font-serif-luxury text-white tracking-wide">
                      08139065817
                    </div>
                    <div className="text-[11px] text-gray-400">Available Mon – Sat, 8:00 AM – 6:00 PM</div>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/2348139065817?text=Hello%20MILKYLUXPAINT%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20my%20property."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366] flex items-center gap-4 group transition-all"
                  id="contact-box-whatsapp"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#25D366] font-bold">WhatsApp Direct</div>
                    <div className="text-lg sm:text-xl font-bold font-serif-luxury text-white tracking-wide">
                      08139065817
                    </div>
                    <div className="text-[11px] text-gray-400">Fast Chat, Photo & Video Assessment</div>
                  </div>
                </a>

              </div>

              {/* Service Areas & Fast Facts */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E2BE6E] shrink-0 mt-0.5" />
                  <span>Serving residential and commercial clients across Nigeria with on-site assessments.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E2BE6E] shrink-0" />
                  <span>Prompt site inspection & detailed bill of quantities (BOQ).</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#E2BE6E] shrink-0" />
                  <span>Guaranteed quality warranty on all painting work.</span>
                </div>
              </div>

            </div>

            {/* Testimonial Snippet */}
            <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] shadow-sm">
              <div className="text-xs font-semibold text-[#8C6D27] uppercase tracking-wider mb-1">
                Transparent Pricing Promise
              </div>
              <p className="text-xs text-gray-600 italic">
                "We provide clear, detailed pricing with no hidden charges. Our quotes encompass proper surface preparation, premium paints, and complete clean-up."
              </p>
            </div>

          </div>

          {/* Right Column: Quote Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E7EB] shadow-xl relative">
              
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-8 space-y-6" id="quote-success-message">
                  <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#9E7C32] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10 text-[#C5A059]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#111827]">
                      Quote Request Received!
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Thank you, <strong className="text-[#111827]">{formData.fullName}</strong>. A MILKYLUXPAINT specialist will review your request and reach out via <strong className="text-[#111827]">{formData.phoneNumber}</strong> shortly.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E7EB] text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="font-bold text-gray-800 border-b pb-1 text-sm">Project Summary:</div>
                    <div className="flex justify-between text-gray-600"><span>Service:</span> <span className="font-semibold text-gray-900">{formData.serviceRequired}</span></div>
                    <div className="flex justify-between text-gray-600"><span>Property:</span> <span className="font-semibold text-gray-900">{formData.propertyType}</span></div>
                    {formData.location && <div className="flex justify-between text-gray-600"><span>Location:</span> <span className="font-semibold text-gray-900">{formData.location}</span></div>}
                  </div>

                  {/* Instant WhatsApp forward option */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs text-gray-500">Want an immediate response on WhatsApp?</p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Forward this Request to WhatsApp (08139065817)</span>
                    </a>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phoneNumber: '',
                          email: '',
                          propertyType: 'Residential (House / Duplex)',
                          serviceRequired: 'Interior Painting',
                          location: '',
                          preferredDate: '',
                          message: '',
                          approximateSize: 'Medium (3 - 5 Bedroom / Medium Office)'
                        });
                      }}
                      className="text-xs text-[#8C6D27] underline hover:text-[#0B1528] font-medium cursor-pointer"
                    >
                      Submit another quote request
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Quote Form */
                <form onSubmit={handleSubmit} className="space-y-5" id="quote-request-form">
                  
                  <div className="border-b border-gray-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold font-serif-luxury text-[#111827]">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Tell us about your property and finishing requirements.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Arc. David / Chief Adeleke"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="phoneNumber">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 08139065817"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="email">
                        Email Address <span className="text-gray-400 font-normal normal-case">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="location">
                        Project Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Lekki Phase 1, Lagos / Maitama, Abuja"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Property Type & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="propertyType">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none bg-white transition-all"
                      >
                        {propertyTypes.map((pt, i) => (
                          <option key={i} value={pt}>{pt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="serviceRequired">
                        Service Needed
                      </label>
                      <select
                        id="serviceRequired"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none bg-white transition-all"
                      >
                        {servicesData.map((srv) => (
                          <option key={srv.id} value={srv.title}>{srv.title}</option>
                        ))}
                        <option value="Complete Whole-Property Finishing Package">Complete Whole-Property Finishing Package</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Project Date & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="preferredDate">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none bg-white transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="approximateSize">
                        Estimated Project Scope
                      </label>
                      <select
                        id="approximateSize"
                        name="approximateSize"
                        value={formData.approximateSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none bg-white transition-all"
                      >
                        <option value="Single Room / Accent Wall">Single Room / Accent Wall</option>
                        <option value="2 - 3 Bedroom Apartment">2 - 3 Bedroom Flat / Apartment</option>
                        <option value="4 - 5 Bedroom Duplex / Villa">4 - 5 Bedroom Duplex / Villa</option>
                        <option value="Whole Mansion / Estate Compound">Whole Mansion / Estate Compound</option>
                        <option value="Commercial Office / Retail Complex">Commercial Office / Retail Complex</option>
                        <option value="Multi-Unit Real Estate Development">Multi-Unit Real Estate Development</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Description */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider" htmlFor="message">
                      Project Description / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current wall conditions, preferred paint finishes, screeding requirements, or timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 text-sm outline-none transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button & WhatsApp Option */}
                  <div className="pt-3 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#DFB967] via-[#C5A059] to-[#9E7C32] hover:from-[#E8C575] hover:to-[#B38D3C] text-[#0B1528] font-bold text-base shadow-lg shadow-[#C5A059]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      id="submit-quote-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Processing Estimate...' : 'Submit Quote Request'}</span>
                    </button>

                    <div className="relative flex py-1 items-center">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="flex-shrink mx-3 text-gray-400 text-xs font-medium uppercase">Or Send Instantly</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      id="submit-quote-whatsapp-btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send Quote Details Direct to WhatsApp (08139065817)</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

