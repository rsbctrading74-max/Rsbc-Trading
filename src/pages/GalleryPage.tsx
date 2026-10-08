import React, { useState } from 'react';
import { GALLERY_ITEMS, COMPANY_DETAILS } from '../data/companyData';
import { ExternalLink, Filter, Sparkles, Utensils, Wrench, Eye } from 'lucide-react';
import { PageType } from '../types';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
  onRequestQuote: () => void;
  onOpenImageModal: (image: string, title: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenImageModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cleaning' | 'catering' | 'maintenance'>('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header and Google Photos Album Link */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
            Visual Proof of Quality
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Our Work in Action
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl">
            Real photos showing commercial cleaning atriums, gourmet corporate catering setups, and precision facility maintenance projects.
          </p>
        </div>

        {/* Official Google Photos Shared Album External Link */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href={COMPANY_DETAILS.googlePhotosAlbumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#C9A84C] text-xs font-bold text-white transition-all shadow-md group cursor-pointer"
          >
            <span>Open Official Google Photos Album</span>
            <ExternalLink className="w-4 h-4 text-[#C9A84C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onRequestQuote}
            className="px-5 py-3 rounded-xl bg-[#C9A84C] hover:bg-[#D8B75B] text-slate-950 text-xs font-bold transition-colors cursor-pointer"
          >
            Request a Quote
          </button>
        </div>
      </div>

      {/* Interactive Category Filter Bar */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl w-fit overflow-x-auto">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeCategory === 'all'
              ? 'bg-[#C9A84C] text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          All Showcases ({GALLERY_ITEMS.length})
        </button>
        <button
          onClick={() => setActiveCategory('cleaning')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeCategory === 'cleaning'
              ? 'bg-[#C9A84C] text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Cleaning</span>
        </button>
        <button
          onClick={() => setActiveCategory('catering')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeCategory === 'catering'
              ? 'bg-[#C9A84C] text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>Catering</span>
        </button>
        <button
          onClick={() => setActiveCategory('maintenance')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
            activeCategory === 'maintenance'
              ? 'bg-[#C9A84C] text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>Maintenance</span>
        </button>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenImageModal(item.image, item.title)}
            className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-[#C9A84C]/50 transition-all flex flex-col cursor-pointer shadow-lg"
          >
            {/* Image Preview with Hover Overlay */}
            <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-slate-900/90 text-[#C9A84C] border border-slate-700 shadow-xl">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-semibold text-[#C9A84C] uppercase">
                {item.category}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span>{item.clientType}</span>
                  {item.dateCompleted && <span>{item.dateCompleted}</span>}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#C9A84C] transition-colors font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Click to view full photo</span>
                <span className="text-[#C9A84C] font-semibold">Inspect &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Album Notice Box */}
      <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center max-w-3xl mx-auto space-y-4">
        <h3 className="text-lg font-bold text-white font-display">
          Continually Updated Client Album
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed max-w-xl mx-auto">
          Our on-site supervisors upload high-resolution before-and-after photos directly to our live Google Photos archive. Tap below to view our complete media catalog.
        </p>
        <a
          href={COMPANY_DETAILS.googlePhotosAlbumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] text-slate-950 font-bold text-xs hover:from-[#E5C158] hover:to-[#D8B75B] transition-all shadow-md cursor-pointer"
        >
          <span>Open Google Photos Gallery</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
