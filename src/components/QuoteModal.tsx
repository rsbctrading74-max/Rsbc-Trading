import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { calculateEstimatedPrice, generateWhatsAppQuoteLink } from '../utils/quoteHelpers';
import { X, Send, MessageSquare, CheckCircle, Calculator, Building, Phone, Mail } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: QuoteFormData['serviceType'];
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Cleaning',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: initialService,
    propertyType: 'Commercial Office',
    frequency: 'Once-off',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const estimate = calculateEstimatedPrice(formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl my-8 overflow-hidden shadow-2xl relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wider">
                Official Quotation Request
              </span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-400 font-mono">CIPC: {COMPANY_DETAILS.cipcNumber}</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display mt-1">
              Request Your Custom Service Quote
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              One vendor for Cleaning, Catering &amp; Maintenance across South Africa.
            </p>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Quote Request Received!</h4>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Our operations team (lead by Portfolio Manager Tyroleen Winnaar) has received your request and will contact you within 2 working hours.
              </p>
            </div>

            {/* Quick WhatsApp Forward Option */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Indicative Pricing:</span>
                <span className="text-white font-mono font-semibold">
                  R {estimate.minPrice.toLocaleString()} – R {estimate.maxPrice.toLocaleString()} {estimate.currency}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Need urgent confirmation? Send your exact request directly to our director on WhatsApp:
              </p>
              <a
                href={generateWhatsAppQuoteLink(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp (+27 62 101 3195)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={resetAndClose}
                className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Live Estimator Indicator */}
            <div className="bg-slate-950/70 border border-[#C9A84C]/30 rounded-xl p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-[#C9A84C]" />
                <div>
                  <span className="text-xs font-medium text-slate-300 block">Indicative Cost Range</span>
                  <span className="text-[11px] text-slate-400 block">{estimate.notes}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-[#C9A84C] font-mono">
                  R {estimate.minPrice.toLocaleString()} – R {estimate.maxPrice.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block uppercase">South African Rand</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Johan Smith / Sarah Khumalo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="e.g. johan@company.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  />
                  <Mail className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Phone Number (South Africa) *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 082 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  />
                  <Phone className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Primary Service Needed *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                >
                  <option value="Cleaning">Cleaning Services (Corporate / Residential)</option>
                  <option value="Catering">Catering Services (Events / Buffets / Lunches)</option>
                  <option value="Maintenance">Maintenance Services (Electrical / Plumbing)</option>
                  <option value="All-in-One Multi-Service">All-in-One Multi-Service Package</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Property / Event Type *
                </label>
                <div className="relative">
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Commercial Office">Commercial Office / HQ</option>
                    <option value="Residential">Residential Home / Estate</option>
                    <option value="Industrial Facility">Industrial Warehouse / Plant</option>
                    <option value="Event Venue">Event Venue / Conference Center</option>
                  </select>
                  <Building className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Frequency / Arrangement
                </label>
                <select
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value as any })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                >
                  <option value="Once-off">Once-Off Project / Deep Clean</option>
                  <option value="Weekly">Weekly Scheduled Visits</option>
                  <option value="Monthly Contract (SLA)">Monthly Retainer / SLA Contract</option>
                  <option value="Ad-Hoc">Ad-Hoc As Needed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Project Scope &amp; Special Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Describe your requirements (e.g. square meters, number of attendees, specific electrical/plumbing faults, preferred dates)..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C] resize-none"
              />
            </div>

            {/* Actions: Direct Submit + Direct WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>Submit Official Quote Request</span>
              </button>

              <a
                href={generateWhatsAppQuoteLink(formData)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quote via WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
