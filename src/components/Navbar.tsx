import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS } from '../data/companyData';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'cleaning', label: 'Cleaning' },
    { id: 'catering', label: 'Catering' },
    { id: 'maintenance', label: 'Maintenance' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      {/* Utility Top Ribbon: South African CIPC Notice & Direct Contact */}
      <div className="bg-[#091224] border-b border-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
              CIPC Reg. {COMPANY_DETAILS.cipcNumber}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">All-Rounder Multi-Service Provider (B2B &amp; B2C)</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 text-slate-300 hover:text-[#C9A84C] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C9A84C]" />
              <span className="font-medium">{COMPANY_DETAILS.primaryPhoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="text-slate-300 hover:text-[#C9A84C] transition-colors hidden md:inline"
            >
              {COMPANY_DETAILS.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single element brand mark */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-lg p-1"
        >
          <img
            src="/src/assets/images/rsbc_logo_crest_1791449111579.jpg"
            alt="RSBC Trading Logo Crest"
            className="w-10 h-10 rounded-full object-cover border border-[#C9A84C]/50 shadow-sm transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div>
            <span className="text-xl font-bold tracking-tight text-white block leading-none font-display">
              RSBC <span className="text-[#C9A84C]">Trading</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block mt-0.5">
              Pty Ltd · South Africa
            </span>
          </div>
        </button>

        {/* Zone 2: Clean text nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#C9A84C]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onRequestQuote}
            className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] rounded-lg shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onRequestQuote}
            className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-[#C9A84C] rounded-md whitespace-nowrap"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                currentPage === link.id
                  ? 'bg-slate-800 text-[#C9A84C]'
                  : 'text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-950 bg-[#C9A84C] rounded-md"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
