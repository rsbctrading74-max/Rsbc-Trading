export type PageType = 
  | 'home' 
  | 'cleaning' 
  | 'catering' 
  | 'maintenance' 
  | 'about' 
  | 'gallery' 
  | 'contact';

export interface TeamMember {
  firstName: string;
  surname: string;
  phone: string;
  email?: string;
  position: string;
  roleDescription?: string;
  notes?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  b2bOfferings: string[];
  b2cOfferings: string[];
  packages?: {
    name: string;
    description: string;
    priceHint: string;
    included: string[];
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cleaning' | 'catering' | 'maintenance';
  image: string;
  description: string;
  clientType: 'B2B Corporate' | 'B2C Residential' | 'Private Event' | 'Commercial Facility';
  dateCompleted?: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: 'Cleaning' | 'Catering' | 'Maintenance' | 'All-in-One Multi-Service';
  propertyType: 'Residential' | 'Commercial Office' | 'Industrial Facility' | 'Event Venue';
  frequency: 'Once-off' | 'Weekly' | 'Monthly Contract (SLA)' | 'Ad-Hoc';
  preferredDate?: string;
  estimatedBudget?: string;
  notes: string;
}

export interface PartnerInfo {
  name: string;
  focus: string;
  description: string;
  badge: string;
}
