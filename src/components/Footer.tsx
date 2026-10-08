import React from 'react';
import { COMPANY_DETAILS, STRATEGIC_PARTNERS } from '../data/companyData';
import { PageType } from '../types';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm">
      {/* Upper Footer: Partner Trust Ribbon */}
      <div className="border-b border-slate-900/80 bg-slate-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#C9A84C]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Registered Enterprise Compliance</p>
              <p className="text-xs text-slate-400">
                Companies and Intellectual Property Commission (CIPC) Reg No: <span className="text-slate-200 font-mono">{COMPANY_DETAILS.cipcNumber}</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-xs uppercase tracking-wider text-slate-400">Strategic Partners:</span>
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-800"
              >
                <span className="text-xs font-semibold text-slate-200">{partner.name}</span>
                <span className="text-[10px] text-[#C9A84C] bg-slate-900/80 px-1.5 py-0.5 rounded">
                  {partner.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand & All-Rounder Mission */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/src/assets/images/rsbc_logo_crest_1791449111579.jpg"
              alt="RSBC Trading Crest"
              className="w-10 h-10 rounded-full object-cover border border-[#C9A84C]/40"
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-lg font-bold text-white block leading-none font-display">
                RSBC <span className="text-[#C9A84C]">Trading</span>
              </span>
              <span className="text-xs text-slate-400">One Team. Every Service.</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            South Africa’s premier all-rounder multi-service provider. We consolidate commercial and residential cleaning, gourmet catering, and facility maintenance under one registered banner.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-950 bg-[#C9A84C] hover:bg-[#D8B75B] px-4 py-2 rounded-md transition-all cursor-pointer"
            >
              Request a Quotation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Column 2: Core Capabilities */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
            Core Service Lines
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button
                onClick={() => {
                  onNavigate('cleaning');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Commercial Office &amp; Deep Cleaning
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('cleaning');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Industrial Floor Scrubbing &amp; Sanitization
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('catering');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Corporate Boardroom &amp; Conference Catering
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('catering');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Private Event Buffets &amp; Canapé Service
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('maintenance');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Electrical Repairs &amp; Lighting Audits
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('maintenance');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Commercial Plumbing &amp; Facility Upkeep (SLAs)
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigation & Company */}
        <div>
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
            Company &amp; Governance
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                About Our Story &amp; Leadership
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Management Team Roster
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Verified Work Gallery
              </button>
            </li>
            <li>
              <a
                href={COMPANY_DETAILS.googlePhotosAlbumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#C9A84C] transition-colors"
              >
                <span>Live Google Photos Album</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact &amp; Location Map
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Direct Dispatch */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
            Direct Contact &amp; HQ
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
              <span>{COMPANY_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
              <a
                href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_DETAILS.primaryPhoneDisplay} (Direct / WhatsApp)
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#C9A84C] shrink-0" />
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20RSBC%20Trading%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors"
            >
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Quiet Copyright & Compliance */}
      <div className="border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} RSBC Trading (Pty) Ltd. All rights reserved. CIPC Registration: {COMPANY_DETAILS.cipcNumber}.
          </p>
          <p className="flex items-center gap-3">
            <span>Serving Greater Gauteng &amp; Surrounds</span>
            <span>·</span>
            <span>All-Rounder Facility Specialists</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
