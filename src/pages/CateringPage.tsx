import React, { useState } from 'react';
import { CORE_SERVICES, COMPANY_DETAILS } from '../data/companyData';
import { 
  Utensils, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Sparkles, 
  Coffee, 
  Wine, 
  MessageSquare,
  Check,
  Calculator
} from 'lucide-react';
import { PageType } from '../types';

interface CateringPageProps {
  onNavigate: (page: PageType) => void;
  onRequestQuote: (service?: 'Catering') => void;
}

export const CateringPage: React.FC<CateringPageProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const service = CORE_SERVICES.find((s) => s.id === 'catering')!;
  const [guestCount, setGuestCount] = useState<number>(40);
  const [menuTier, setMenuTier] = useState<'platters' | 'buffet' | 'canape'>('buffet');

  const perPersonCost = menuTier === 'platters' ? 145 : menuTier === 'canape' ? 220 : 290;
  const estimatedTotal = guestCount * perPersonCost;

  return (
    <div className="py-12 space-y-16">
      {/* Hero Banner for Catering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Copy */}
            <div className="p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs text-[#C9A84C] font-semibold">
                <Utensils className="w-3.5 h-3.5" />
                <span>Culinary Excellence &amp; Event Hospitality</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
                Flavors That Inspire. <span className="gold-gradient-text">Service That Delivers.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Whether powering an executive corporate board meeting in Sandton, feeding 200 conference delegates in Midrand, or celebrating an intimate family milestone, RSBC Catering crafts exquisite South African culinary menus using farm-fresh, premium ingredients.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Halal-Friendly Sourced</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Vegetarian &amp; Vegan Menus</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span>Chafing Gear &amp; Waitstaff Provided</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onRequestQuote('Catering')}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <span>Request Catering Menu &amp; Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20RSBC%20Catering%20Team%2C%20I%20would%20like%20to%20discuss%20menus%20for%20an%20event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Catering Desk</span>
                </a>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative h-80 lg:h-full min-h-[380px] overflow-hidden bg-slate-950">
              <img
                src={service.image}
                alt="RSBC Gourmet Event Catering Setup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
            Tailored Menus
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            Curated Dining for Every Occasion
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Designed to impress corporate clients and delight private guests alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Corporate Platters &amp; Lunches</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Freshly baked artisanal rolls, gourmet wraps, sticky chicken skewers, mini quiches, and fruit platters. Ideal for executive meetings and training workshops.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li>· Delivered punctually in sealed temperature-controlled boxes</li>
              <li>· Biodegradable eco-plates and cutlery included</li>
              <li>· Minimum 10 guests</li>
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Grand Buffets &amp; Carvery</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Full 2 or 3-course warm buffet service featuring slow-roasted beef, spiced lemon herb chicken, savoury rice, roasted butter squash, Greek salad, and Malva pudding.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li>· Stainless steel chafing warmers provided</li>
              <li>· On-site serving team and clean-up included</li>
              <li>· Minimum 25 guests</li>
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Cocktail &amp; Canapé Soirées</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Exquisite bite-sized luxury canapés passed around by professional waitstaff. Ideal for networking evenings, product launches, and celebratory cocktail parties.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 pt-2">
              <li>· 6 to 10 canapé choices per guest</li>
              <li>· Uniformed waitstaff in black attire</li>
              <li>· Dietary labeling on all circulating trays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interactive Guest Count & Budget Estimator for Events */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-6 h-6 text-[#C9A84C]" />
            <div>
              <h3 className="text-xl font-bold text-white font-display">Quick Event Catering Budget Estimator</h3>
              <p className="text-xs text-slate-400">Slide guest count to calculate budget estimate in South African Rand</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-2">
                <span>Number of Expected Guests:</span>
                <span className="font-bold text-[#C9A84C] font-mono text-sm">{guestCount} Guests</span>
              </div>
              <input
                type="range"
                min={10}
                max={300}
                step={5}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#C9A84C] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>10 Guests (Boardroom)</span>
                <span>150 Guests (Banquet)</span>
                <span>300+ Guests (Conference)</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Select Catering Style:
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setMenuTier('platters')}
                  className={`p-3 rounded-lg text-xs font-semibold text-center border transition-all ${
                    menuTier === 'platters'
                      ? 'bg-[#C9A84C] text-slate-950 border-[#C9A84C]'
                      : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  Platters &amp; Wraps
                  <span className="block text-[11px] font-mono font-normal mt-0.5">R 145 / guest</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMenuTier('buffet')}
                  className={`p-3 rounded-lg text-xs font-semibold text-center border transition-all ${
                    menuTier === 'buffet'
                      ? 'bg-[#C9A84C] text-slate-950 border-[#C9A84C]'
                      : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  Grand Warm Buffet
                  <span className="block text-[11px] font-mono font-normal mt-0.5">R 290 / guest</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMenuTier('canape')}
                  className={`p-3 rounded-lg text-xs font-semibold text-center border transition-all ${
                    menuTier === 'canape'
                      ? 'bg-[#C9A84C] text-slate-950 border-[#C9A84C]'
                      : 'bg-slate-950 text-slate-300 border-slate-800'
                  }`}
                >
                  Cocktails &amp; Canapés
                  <span className="block text-[11px] font-mono font-normal mt-0.5">R 220 / guest</span>
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Indicative Catering Total ({guestCount} guests)</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#C9A84C] font-mono">
                  R {estimatedTotal.toLocaleString()} ZAR
                </span>
              </div>

              <button
                onClick={() => onRequestQuote('Catering')}
                className="w-full sm:w-auto px-6 py-3 bg-[#C9A84C] hover:bg-[#D8B75B] text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Book This Catering Package
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
