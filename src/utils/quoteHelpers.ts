import { QuoteFormData } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';

export function calculateEstimatedPrice(data: Partial<QuoteFormData>): {
  minPrice: number;
  maxPrice: number;
  currency: string;
  notes: string;
} {
  let baseMin = 850;
  let baseMax = 1800;

  switch (data.serviceType) {
    case 'Cleaning':
      if (data.propertyType === 'Commercial Office') {
        baseMin = 2200;
        baseMax = 6500;
      } else if (data.propertyType === 'Industrial Facility') {
        baseMin = 4500;
        baseMax = 12000;
      } else if (data.propertyType === 'Event Venue') {
        baseMin = 1800;
        baseMax = 4200;
      } else {
        baseMin = 950;
        baseMax = 2600;
      }
      break;

    case 'Catering':
      if (data.propertyType === 'Event Venue' || data.propertyType === 'Commercial Office') {
        baseMin = 3500;
        baseMax = 16000;
      } else {
        baseMin = 2200;
        baseMax = 7500;
      }
      break;

    case 'Maintenance':
      if (data.propertyType === 'Industrial Facility' || data.propertyType === 'Commercial Office') {
        baseMin = 1800;
        baseMax = 9500;
      } else {
        baseMin = 650;
        baseMax = 3200;
      }
      break;

    case 'All-in-One Multi-Service':
      baseMin = 4800;
      baseMax = 18500;
      break;

    default:
      baseMin = 1200;
      baseMax = 4500;
      break;
  }

  // Adjust for frequency
  if (data.frequency === 'Monthly Contract (SLA)') {
    baseMin = Math.round(baseMin * 2.8);
    baseMax = Math.round(baseMax * 3.5);
  } else if (data.frequency === 'Weekly') {
    baseMin = Math.round(baseMin * 1.6);
    baseMax = Math.round(baseMax * 2.0);
  }

  return {
    minPrice: baseMin,
    maxPrice: baseMax,
    currency: 'ZAR',
    notes: 'Indicative estimate. Official binding quotation confirmed following site assessment.',
  };
}

export function generateWhatsAppQuoteLink(data: Partial<QuoteFormData>): string {
  const message = `Hello RSBC Trading, I would like to request an official quote:
*Client Name:* ${data.fullName || 'Prospective Client'}
*Service:* ${data.serviceType || 'Multi-Service'}
*Property Type:* ${data.propertyType || 'General'}
*Frequency:* ${data.frequency || 'Once-off'}
*Phone:* ${data.phone || 'Not provided'}
*Email:* ${data.email || 'Not provided'}
*Preferred Date:* ${data.preferredDate || 'Flexible'}
*Scope Details:* ${data.notes || 'Please contact me with availability and pricing.'}

_Sent via RSBC Trading Online Portal (CIPC Reg: ${COMPANY_DETAILS.cipcNumber})_`;

  return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
