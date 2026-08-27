import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Contact Us',
    description: 'Tell us about your painting project, requirements, location, and aesthetic preferences.',
    details: [
      'Share project scope via phone, form, or WhatsApp (08139065817)',
      'Discuss property type, rooms, and timeline',
      'Initial style and finishing consultation',
      'Prompt, attentive response from our team'
    ],
    iconName: 'MessageSquare'
  },
  {
    stepNumber: '02',
    title: 'Get a Quote',
    description: 'Receive a transparent project assessment, detailed breakdown, and accurate quotation.',
    details: [
      'Comprehensive surface and area assessment',
      'Transparent itemized quote with zero hidden charges',
      'Clear material options and paint recommendations',
      'Agreed timeline and milestone planning'
    ],
    iconName: 'ShieldCheck'
  },
  {
    stepNumber: '03',
    title: 'Choose Your Finish',
    description: 'Select colours, finishes, and design preferences tailored to your architectural style.',
    details: [
      'Personalized chromatic matching and colour swatches',
      'Selection of sheens (Matte, Satin, Gloss, Silk, Venetian Stucco)',
      'Expert advice on lighting and interior decor pairing',
      'Finalization of project schedule and preparations'
    ],
    iconName: 'Palette'
  },
  {
    stepNumber: '04',
    title: 'We Transform Your Space',
    description: 'Our experienced team completes the painting and wall finishing work to perfection.',
    details: [
      'Complete furniture masking and floor protection',
      'Deep wall prep: crack filling, screeding, and priming',
      'Precision multi-coat paint application with crisp edges',
      'Joint walkthrough and 100% satisfaction handover'
    ],
    iconName: 'PaintRoller'
  }
];
