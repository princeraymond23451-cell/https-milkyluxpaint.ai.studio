export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  tags: string[];
  idealFor: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Interior' | 'Exterior' | 'Residential' | 'Commercial' | 'Decorative';
  location: string;
  scope: string;
  finishType: string;
  image: string;
  secondaryImages?: string[];
  description: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  projectType: string;
  avatar: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  location: string;
  propertyType: string;
  serviceRequired: string;
  numberOfRooms: string;
  preferredFinish: string;
  estimatedBudget: string;
  preferredStartDate: string;
  projectDescription: string;
}
