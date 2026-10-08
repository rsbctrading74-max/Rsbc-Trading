import React, { useState } from 'react';
import { COMPANY_DETAILS, TEAM_MEMBERS } from '../data/companyData';
import { QuoteFormData } from '../types';
import { calculateEstimatedPrice, generateWhatsAppQuoteLink } from '../utils/quoteHelpers';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Building2, 
  Calculator,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Cleaning',
    propertyType: 'Commercial Office',
    frequency: 'Once-off',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const estimate = calculateEstimatedPrice(formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C]">
          Direct Engagement
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
          Request a Quote &amp; Contact Us
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Reach out for commercial contracts, private bookings, or urgent maintenance callouts. Our team guarantees rapid response times across Greater Gauteng and beyond.
        </p>
      </div>

      {/* Quick Action Ribbon: Click to Call & WhatsApp Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Click to Call */}
        <a
          href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#C9A84C] transition-all flex items-center gap-4 group shadow-md"
        >
          <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C] group-hover:text-slate-950 transition-colors shrink-0">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Direct Phone Dispatch</span>
            <span className="text-base font-bold text-white font-mono">{COMPANY_DETAILS.primaryPhoneDisplay}</span>
            <span className="text-[11px] text-emerald-400 block mt-0.5">Click to call instantly</span>
          </div>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20RSBC%20Trading%20Team%2C%20I%20would%20like%20to%20request%20a%20quote.`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500 transition-all flex items-center gap-4 group shadow-md"
        >
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-emerald-300 uppercase tracking-wider block">Official WhatsApp Desk</span>
            <span className="text-base font-bold text-white">Chat on WhatsApp</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">Instant chat &amp; photo exchange</span>
          </div>
        </a>

        {/* Official Email */}
        <a
          href={`mailto:${COMPANY_DETAILS.email}`}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#C9A84C] transition-all flex items-center gap-4 group shadow-md sm:col-span-2 lg:col-span-1"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950 transition-colors shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Formal Inquiries</span>
            <span className="text-sm font-bold text-white truncate block">{COMPANY_DETAILS.email}</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">RFPs, tenders &amp; invoices</span>
          </div>
        </a>
      </div>

      {/* Main Form and Location Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white font-display">
              Official Quotation Request Form
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Please complete all required fields. For complex corporate contracts, an on-site audit will be arranged.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-6 bg-slate-950/80 rounded-2xl border border-slate-800">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quotation Request Dispatched!</h3>
                <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your request for <span className="text-[#C9A84C] font-semibold">{formData.serviceType}</span> has been logged with Portfolio Management.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Market Price Benchmark:</span>
                  <span className="text-[#C9A84C] font-mono font-bold">
                    R {estimate.minPrice.toLocaleString()} – R {estimate.maxPrice.toLocaleString()} {estimate.currency}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Prefer an immediate answer? Send these specifications directly to our director on WhatsApp:
                </p>
                <a
                  href={generateWhatsAppQuoteLink(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp (+27 62 101 3195)</span>
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Live Cost Guide Banner */}
              <div className="bg-slate-950/80 border border-[#C9A84C]/30 rounded-xl p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#C9A84C]" />
                  <span className="text-xs text-slate-300">Live Estimate Benchmark</span>
                </div>
                <span className="text-sm font-bold text-[#C9A84C] font-mono">
                  R {estimate.minPrice.toLocaleString()} – R {estimate.maxPrice.toLocaleString()} ZAR
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sipho Ndlovu"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sipho@enterprise.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone Number (South Africa) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 082 345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Service Needed *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Cleaning">Cleaning Services</option>
                    <option value="Catering">Catering Services</option>
                    <option value="Maintenance">Maintenance Services</option>
                    <option value="All-in-One Multi-Service">Multiple / All-in-One Package</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Property / Venue Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Commercial Office">Commercial Office / HQ</option>
                    <option value="Residential">Residential Home / Private Property</option>
                    <option value="Industrial Facility">Industrial Warehouse / Plant</option>
                    <option value="Event Venue">Event Venue / Conference Hall</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Engagement Frequency
                  </label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Once-off">Once-Off Project</option>
                    <option value="Weekly">Weekly Scheduled Clean/Check</option>
                    <option value="Monthly Contract (SLA)">Monthly Retainer Contract (SLA)</option>
                    <option value="Ad-Hoc">Ad-Hoc / On-Demand</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Message / Scope Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the property size, specific challenges, number of guests, or dates required..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#C9A84C] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request</span>
                </button>

                <a
                  href={generateWhatsAppQuoteLink(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dispatch via WhatsApp</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Right Details & Google Maps Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Company Verification Card */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-display">
                  Corporate Registration &amp; Location
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  CIPC Reg: {COMPANY_DETAILS.cipcNumber}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Physical Address</strong>
                  <span className="text-slate-300">{COMPANY_DETAILS.address}</span>
                  <span className="text-slate-400 block mt-0.5">Area coverage: {COMPANY_DETAILS.serviceAreas}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Operating Schedule</strong>
                  <span className="text-slate-300">{COMPANY_DETAILS.operatingHours}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Interactive Embed */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-white">Our Sandton, Gauteng Hub</span>
                <span className="text-[11px] text-[#C9A84C]">Google Maps View</span>
              </div>
              <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                <iframe
                  title="RSBC Trading Headquarters Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114620.19890483863!2d27.978056!3d-26.104444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95733f382a39d1%3A0x6b77241249b5585!2sSandton%2C%20Johannesburg!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Quick Roster Contacts Directory */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
            <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">
              Key Department Contacts
            </h4>
            <div className="space-y-3 text-xs">
              {TEAM_MEMBERS.slice(0, 4).map((member, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div>
                    <span className="text-white font-semibold block">{member.firstName} {member.surname}</span>
                    <span className="text-[11px] text-[#C9A84C]">{member.position}</span>
                  </div>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-mono text-xs transition-colors"
                  >
                    {member.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
