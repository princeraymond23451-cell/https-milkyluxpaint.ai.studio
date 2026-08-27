export interface ColorSwatch {
  id: string;
  name: string;
  code: string;
  hex: string;
  textHex: string;
  category: 'Neutrals' | 'Warm Luxury' | 'Bold Accents' | 'Earthy Naturals';
  description: string;
  finishRecommendation: string;
  roomPreviewImage: string;
}

export const colorPalettes: ColorSwatch[] = [
  {
    id: 'champagne-mist',
    name: 'Champagne Mist',
    code: 'MLP-104',
    hex: '#F4ECE1',
    textHex: '#3A3226',
    category: 'Neutrals',
    description: 'A luminous, warm off-white with delicate golden undertones. Expands room perception and enhances natural ambient daylight.',
    finishRecommendation: 'Silk Sheen or Satin for living lounges',
    roomPreviewImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'nordic-sage',
    name: 'Nordic Royal Sage',
    code: 'MLP-308',
    hex: '#7A8D7E',
    textHex: '#FFFFFF',
    category: 'Earthy Naturals',
    description: 'A calming, restorative muted botanical green that evokes organic tranquility and serene architectural harmony.',
    finishRecommendation: 'Ultra-Matte for bedrooms and private studies',
    roomPreviewImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'imperial-navy',
    name: 'Imperial Sovereign Navy',
    code: 'MLP-512',
    hex: '#1B2A3A',
    textHex: '#FFFFFF',
    category: 'Bold Accents',
    description: 'A deep, commanding midnight blue with velvet depth. Creates intimate luxury, dramatic focal points, and grand contrast.',
    finishRecommendation: 'Eggshell or Venetian Stucco with gold trim',
    roomPreviewImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'alabaster-cream',
    name: 'Warm Alabaster',
    code: 'MLP-101',
    hex: '#FAF6F0',
    textHex: '#2A2927',
    category: 'Neutrals',
    description: 'A timeless gallery-grade ivory cream. The ultimate foundational tone for contemporary minimalist mansions and modern duplexes.',
    finishRecommendation: 'Washable Matte Emulsion for high ceilings',
    roomPreviewImage: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'terracotta-glow',
    name: 'Tuscan Terracotta',
    code: 'MLP-405',
    hex: '#B86245',
    textHex: '#FFFFFF',
    category: 'Warm Luxury',
    description: 'An earthy sun-drenched terracotta infused with warm clays and mineral pigments. Inviting, spirited, and undeniably upscale.',
    finishRecommendation: 'Textured Lime Wash or Fine Sand Stucco',
    roomPreviewImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'charcoal-obsidian',
    name: 'Obsidian Velvet',
    code: 'MLP-909',
    hex: '#212226',
    textHex: '#FFFFFF',
    category: 'Bold Accents',
    description: 'A rich architectural charcoal black designed for high-contrast doors, feature walls, audio-visual lounges, and exterior accents.',
    finishRecommendation: 'Ultra-Matte Suede or High-Gloss Lacquer',
    roomPreviewImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80'
  }
];
