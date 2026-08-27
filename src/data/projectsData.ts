import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'Minimalist Penthouse Living Lounge',
    category: 'Interior',
    location: 'Banana Island, Lagos',
    scope: 'Whole-apartment skim coating & velvety matte emulsion finish',
    finishType: 'Ultra-Matte Mineral Finish with Warm Charcoal Trim',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A 5-bedroom penthouse transformation featuring seamless surface screeding, hidden LED cove color harmonizing, and dustless finishing for a serene luxury aesthetic.',
    featured: true
  },
  {
    id: 'proj-2',
    title: 'Contemporary Luxury Villa Facade',
    category: 'Exterior',
    location: 'Lekki Phase 1, Lagos',
    scope: 'Complete exterior waterproofing, texturing & anti-fungal silicone coating',
    finishType: 'UV-Reflective Siloxane Weather Shield',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An architectural marvel coated with custom formulated weather-resistant siloxane paint, designed to withstand coastal humidity and harsh equatorial sunlight without chalking.',
    featured: true
  },
  {
    id: 'proj-3',
    title: 'Italian Venetian Stucco Accent Suite',
    category: 'Decorative',
    location: 'Maitama, Abuja',
    scope: 'Artisan handcrafted Stucco Veneziano wall treatment',
    finishType: 'High-Gloss Polished Marble Venetian Plaster',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Multi-layered trowel-applied Italian lime plaster burnished to a mirror sheen, providing a natural marble-like depth and tactile luxury.',
    featured: true
  },
  {
    id: 'proj-4',
    title: 'Boutique Hotel & Executive Suites',
    category: 'Commercial',
    location: 'Victoria Island, Lagos',
    scope: '64 Guest rooms, lobby atrium, bar & restaurant repainting',
    finishType: 'Commercial Scuff-Resistant Eggshell & Metallic Champagne Accents',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Completed on a tight 14-day schedule without closing guest operations. Features high-durability washable coatings and bespoke hotel brand color harmonization.',
    featured: true
  },
  {
    id: 'proj-5',
    title: 'Private Estate Royal Mansion',
    category: 'Residential',
    location: 'Guzape Hills, Abuja',
    scope: 'Interior screeding, ceiling medallion gilding & exterior architectural paint',
    finishType: 'Silk Sheen Satin & 24k Gold-Leaf Accent Trims',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Full property finishing spanning over 1,200 sq meters, with flawless drywall smoothing and delicate cornice highlighting.',
    featured: true
  },
  {
    id: 'proj-6',
    title: 'Modern Tech Headquarters Office',
    category: 'Commercial',
    location: 'Ikoyi, Lagos',
    scope: 'Collaborative workspaces, acoustic meeting pods & boardroom finishes',
    finishType: 'Low-VOC Matte Emulsion & Magnetic Idea-Wall Coatings',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Vibrant corporate environment styled with brand-aligned palettes and washable anti-glare coatings optimized for video conference rooms.',
    featured: false
  },
  {
    id: 'proj-7',
    title: 'Metallic Velvet Feature Bedroom',
    category: 'Decorative',
    location: 'Ikeja GRA, Lagos',
    scope: 'Custom textured velvet suede paint behind headboard',
    finishType: 'Iridescent Suede Texture with Subtle Gold Undertones',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Tactile suede effect that shifts subtly as ambient lighting changes from daylight to evening warm lamps.',
    featured: false
  },
  {
    id: 'proj-8',
    title: 'Waterfront Duplex Exterior Renewal',
    category: 'Exterior',
    location: 'Eko Atlantic, Lagos',
    scope: 'Salt-spray resistant marine-grade facade restoration',
    finishType: 'Hydrophobic Anti-Saline Exterior Coating',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Complete remedial scraping, micro-crack sealing, and marine-protective topcoats designed specifically for seaside properties.',
    featured: false
  },
  {
    id: 'proj-9',
    title: 'Scandinavian Warm Neutral Residence',
    category: 'Residential',
    location: 'Wuse 2, Abuja',
    scope: 'Open-concept living room, kitchen and hallway re-coating',
    finishType: 'Warm Alabaster Eggshell with Warm Sand Accent Paneling',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Transforming a dim interior with luminous light-reflecting pigments that boost natural brightness and spatial warmth.',
    featured: false
  }
];
