import React, { useState } from 'react';
import { PageType } from '../types';
import { 
  COMPANY_DETAILS, 
  CORE_SERVICES, 
  WHY_US_PILLARS, 
  GALLERY_ITEMS, 
  TESTIMONIALS 
} from '../data/companyData';
import { TrustBar } from '../components/TrustBar';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Utensils, 
  Wrench, 
  Layers, 
  PhoneCall, 
  ExternalLink,
  Calculator,
  ChevronRight,
  ShieldCheck,
  Building2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { calculateEstimatedPrice, generateWhatsAppQuoteLink } from '../utils/quoteHelpers';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onRequestQuote: (service?: 'Cleaning' | 'Catering' | 'Maintenance' | 'All-in-One Multi-Service') => void;
  onOpenImageModal: (image: string, title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenImageModal,
}) => {
  // Quick Interactive Estimator on Homepage
  const [calcService, setCalcService] = useState<'Cleaning' | 'Catering' | 'Maintenance' | 'All-in-One Multi-Service'>('All-in-One Multi-Service');
  const [calcProperty, setCalcProperty] = useState<'Commercial Office' | 'Residential' | 'Industrial Facility' | 'Event Venue'>('Commercial Office');
  const [calcFrequency, setCalcFrequency] = useState<'Once-off' | 'Weekly' | 'Monthly Contract (SLA)' | 'Ad-Hoc'>('Monthly Contract (SLA)');

  const instantEstimate = calculateEstimatedPrice({
    serviceType: calcService,
    propertyType: calcProperty,
    frequency: calcFrequency,
  });

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-900">
        {/* Background Image with Heavy Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/rsbc_hero_banner_1791449074465.jpg"
            alt="RSBC Trading Multi-Service Fleet and Team"
            className="w-full h-full object-cover object-center filter brightness-50 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_0%,_rgba(15,23,42,0.8)_100%]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Subtle Top Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-[#C9A84C]/40 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="font-semibold text-white">All-Rounder Multi-Service Company</span>
            <span className="text-slate-500">·</span>
            <span>CIPC Reg: {COMPANY_DETAILS.cipcNumber}</span>
          </div>

          {/* Bold Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display text-balance leading-none">
            One Team. <span className="gold-gradient-text">Every Service.</span>
          </h1>

          {/* Subheadline mentioning all three core services */}
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            South Africa’s premier single-vendor solution for <span className="text-white font-semibold underline decoration-[#C9A84C]/60 underline-offset-4">Commercial &amp; Residential Cleaning</span>, <span className="text-white font-semibold underline decoration-[#C9A84C]/60 underline-offset-4">Event Catering</span>, and <span className="text-white font-semibold underline decoration-[#C9A84C]/60 underline-offset-4">Facility Maintenance</span>.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Why contract three separate vendors when one vetted, registered partner delivers seamless quality, unified billing, and guaranteed accountability?
          </p>

          {/* Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRequestQuote('All-in-One Multi-Service')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] text-slate-950 font-bold text-sm rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700/80 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Why All-Rounders Win</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20RSBC%20Trading%2C%20I%20am%20interested%20in%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-4 bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono block">3-in-1</span>
              <span className="text-xs text-slate-400">Core Services Unified</span>
            </div>
            <div>
              <span className="text-2xl lg:text-3xl font-extrabold text-[#C9A84C] font-mono block">100%</span>
              <span className="text-xs text-slate-400">CIPC &amp; COIDA Compliant</span>
            </div>
            <div>
              <span className="text-2xl lg:text-3xl font-extrabold text-white font-mono block">&lt; 2 Hr</span>
              <span className="text-xs text-slate-400">Rapid Response Dispatch</span>
            </div>
            <div>
              <span className="text-2xl lg:text-3xl font-extrabold text-[#C9A84C] font-mono block">Single</span>
              <span className="text-xs text-slate-400">Invoice &amp; Accountability</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar: CIPC & Strategic Partners */}
      <TrustBar />

      {/* 3. Three-Column Service Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-2">
              Our Core Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display text-balance">
              Three Essential Services. Zero Headaches.
            </h2>
            <p className="mt-3 text-sm text-slate-400 text-balance">
              Whether you oversee a multi-story corporate park, a commercial event venue, or a private residential property, RSBC Trading mobilizes certified squads for all three requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => {
              const icon = 
                service.id === 'cleaning' ? <Sparkles className="w-5 h-5" /> :
                service.id === 'catering' ? <Utensils className="w-5 h-5" /> :
                <Wrench className="w-5 h-5" />;

              return (
                <div
                  key={service.id}
                  className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden hover:border-[#C9A84C]/50 transition-all flex flex-col group shadow-lg"
                >
                  {/* Service Image Container */}
                  <div className="relative h-56 overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-700/80 backdrop-blur-md flex items-center justify-center text-[#C9A84C]">
                      {icon}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white font-display">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#C9A84C] font-medium mt-1">
                        {service.tagline}
                      </p>
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                        {service.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => {
                          onNavigate(service.id as PageType);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer text-center"
                      >
                        Explore Offerings
                      </button>

                      <button
                        onClick={() => onRequestQuote(service.title.split(' ')[0] as any)}
                        className="py-2.5 px-4 bg-[#C9A84C] hover:bg-[#D8B75B] text-slate-950 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. "Why RSBC Trading" Section: The All-Rounder Advantage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Narrative Column */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-2">
                The Single-Vendor Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-tight text-balance">
                Why RSBC Trading? We Are True All-Rounders.
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Most facilities managers and homeowners juggle three phone numbers, three monthly invoices, three contracts, and three sets of vendor excuses. When a pipe bursts during an executive lunch, who coordinates the cleanup?
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                With RSBC Trading, <strong className="text-white">one phone call solves all three</strong>. You deal with one registered South African company, one portfolio manager, and one accountable standard of excellence.
              </p>

              {/* Pillars List */}
              <div className="mt-8 space-y-4">
                {WHY_US_PILLARS.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] shrink-0 mt-0.5">
                      <span className="font-mono text-xs font-bold">0{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{pillar.description}</p>
                      <span className="inline-block mt-1 text-[11px] font-medium text-[#C9A84C]">
                        {pillar.highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-[#C9A84C] hover:bg-[#D8B75B] text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Read Our Company Story
                </button>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition-colors cursor-pointer"
                >
                  Meet the Management Roster
                </button>
              </div>
            </div>

            {/* Right Interactive Estimator Block */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-[#C9A84C]" />
                    Instant Service Cost Estimator
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Benchmark realistic South African Rand pricing for your premises
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Select Scope of Work
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['All-in-One Multi-Service', 'Cleaning', 'Catering', 'Maintenance'] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setCalcService(s)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                          calcService === s
                            ? 'bg-[#C9A84C] text-slate-950 font-bold shadow-sm'
                            : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-850'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Property or Event Facility
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Commercial Office', 'Residential', 'Industrial Facility', 'Event Venue'] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setCalcProperty(p)}
                        className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                          calcProperty === p
                            ? 'bg-slate-800 text-[#C9A84C] border border-[#C9A84C]/50'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Service Rhythm / Schedule
                  </label>
                  <select
                    value={calcFrequency}
                    onChange={(e) => setCalcFrequency(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-[#C9A84C]"
                  >
                    <option value="Once-off">Once-Off Project / Intensive Session</option>
                    <option value="Weekly">Weekly Scheduled Visits</option>
                    <option value="Monthly Contract (SLA)">Monthly Retainer SLA (Highest Value)</option>
                    <option value="Ad-Hoc">Ad-Hoc Callout Basis</option>
                  </select>
                </div>

                {/* Estimate Result Box */}
                <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-[#C9A84C]/30 text-center">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                    Estimated South African Market Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#C9A84C] font-mono mt-1">
                    R {instantEstimate.minPrice.toLocaleString()} – R {instantEstimate.maxPrice.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {instantEstimate.notes}
                  </p>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    onClick={() => onRequestQuote(calcService)}
                    className="flex-1 py-3 bg-[#C9A84C] hover:bg-[#D8B75B] text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Lock In This Quote
                  </button>
                  <a
                    href={generateWhatsAppQuoteLink({
                      serviceType: calcService,
                      propertyType: calcProperty,
                      frequency: calcFrequency,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center justify-center"
                    title="Send to WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Photo Gallery Strip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-2">
                On-Site Evidence
              </span>
              <h2 className="text-3xl font-extrabold text-white font-display">
                Real Work. Real Transformations.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Real crews, real events, and verified facility jobs across South Africa.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_DETAILS.googlePhotosAlbumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-[#C9A84C] text-xs font-semibold text-slate-200 transition-colors"
              >
                <span>Live Google Photos Album</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C9A84C]" />
              </a>

              <button
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg bg-[#C9A84C] text-slate-950 text-xs font-bold hover:bg-[#D8B75B] transition-colors cursor-pointer"
              >
                View Full Gallery
              </button>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenImageModal(item.image, item.title)}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer aspect-4/3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-center justify-between text-[11px] text-[#C9A84C] font-semibold uppercase mb-1">
                    <span>{item.category}</span>
                    <span className="text-slate-400 font-normal">{item.clientType}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#C9A84C] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-2">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Trusted by Corporate &amp; Estate Leaders
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Real testimonials from corporate facilities directors, event coordinators, and residential estate managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative"
              >
                <div>
                  <div className="text-xs font-semibold text-[#C9A84C] bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded inline-block mb-4">
                    {t.metric}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-[#C9A84C]">{t.role}</p>
                  <p className="text-[11px] text-slate-400">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final High-Impact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] mx-auto">
            <Layers className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display text-balance">
            Ready to get it done?
          </h2>

          <p className="text-base text-slate-300 max-w-xl mx-auto text-balance">
            Consolidate your cleaning, catering, and maintenance under one CIPC-registered South African team. Request your official quote or call our dispatch desk now.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onRequestQuote('All-in-One Multi-Service')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] text-slate-950 font-bold text-sm rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              Request a Quote Today
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#C9A84C]" />
              <span>Call Operations ({COMPANY_DETAILS.primaryPhoneDisplay})</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            CIPC Registration No: {COMPANY_DETAILS.cipcNumber} · Servicing Greater Johannesburg, Pretoria &amp; Surrounds
          </p>
        </div>
      </section>
    </div>
  );
};
