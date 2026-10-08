import React from 'react';
import { CORE_SERVICES, COMPANY_DETAILS, TEAM_MEMBERS } from '../data/companyData';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Home, 
  Phone, 
  MessageSquare,
  Award,
  Clock,
  Check
} from 'lucide-react';
import { PageType } from '../types';

interface CleaningPageProps {
  onNavigate: (page: PageType) => void;
  onRequestQuote: (service?: 'Cleaning') => void;
}

export const CleaningPage: React.FC<CleaningPageProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const service = CORE_SERVICES.find((s) => s.id === 'cleaning')!;
  const cleaningManager = TEAM_MEMBERS.find((m) => m.position.includes('Cleaning'));

  return (
    <div className="py-12 space-y-16">
      {/* Hero Banner for Cleaning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Copy */}
            <div className="p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs text-[#C9A84C] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial &amp; Residential Hygiene</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
                Pristine Cleanliness. <span className="gold-gradient-text">Zero Compromise.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                From high-traffic corporate office atriums in Sandton to luxury private residential estates across Gauteng, RSBC Trading deploys certified cleaning squads equipped with heavy-duty rotary buffers, hospital-grade sanitizers, and eco-certified chemicals.
              </p>

              {/* Operations Lead Callout */}
              {cleaningManager && (
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-[#C9A84C]/40 flex items-center justify-center text-xs font-bold text-white">
                    {cleaningManager.firstName[0]}{cleaningManager.surname[0]}
                  </div>
                  <div className="text-xs">
                    <span className="text-white font-bold block">
                      {cleaningManager.firstName} {cleaningManager.surname} · {cleaningManager.position}
                    </span>
                    <span className="text-slate-400 block mt-0.5">
                      Direct Ops: {cleaningManager.phone} · Vetted Crews &amp; Site Inspections
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onRequestQuote('Cleaning')}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <span>Request Cleaning Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=Hello%20Nelly%20and%20RSBC%20Cleaning%20Team%2C%20I%20need%20a%20quote%20for%20cleaning.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Cleaning Desk</span>
                </a>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative h-80 lg:h-full min-h-[380px] overflow-hidden bg-slate-950">
              <img
                src={service.image}
                alt="RSBC Commercial Cleaning Squad"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Dual Grid: B2B Commercial vs B2C Residential */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* B2B Commercial Cleaning */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">B2B Commercial &amp; Corporate</h3>
                <p className="text-xs text-slate-400">Offices, Industrial Parks &amp; Venues</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              We provide turnkey facility hygiene programs with supervisor oversight, monthly audit reports, and certified consumables dispensing.
            </p>

            <ul className="space-y-3">
              {service.b2bOfferings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onRequestQuote('Cleaning')}
                className="w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Request Commercial Contract Proposal
              </button>
            </div>
          </div>

          {/* B2C Residential & Private Cleaning */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">B2C Residential &amp; Estates</h3>
                <p className="text-xs text-slate-400">Private Homes, Move-Ins &amp; Spring Cleans</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Trustworthy, thoroughly vetted staff who treat your private sanctuary with care, using gentle yet powerful eco-certified detergents.
            </p>

            <ul className="space-y-3">
              {service.b2cOfferings.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onRequestQuote('Cleaning')}
                className="w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                Book a Residential Deep Clean
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Rates & Transparent Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
            Transparent Options
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            Cleaning Packages &amp; Retainers
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Indicative South African pricing. Customized exact quotes provided after facility scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.packages?.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between border ${
                idx === 1
                  ? 'bg-slate-900 border-[#C9A84C] shadow-xl relative'
                  : 'bg-slate-950 border-slate-800'
              }`}
            >
              {idx === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-slate-950 text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h4 className="text-base font-bold text-white">{pkg.name}</h4>
                <div className="mt-3 mb-2">
                  <span className="text-2xl font-extrabold text-[#C9A84C] font-mono">
                    {pkg.priceHint}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="border-t border-slate-800 pt-4 space-y-2.5">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    What's Included:
                  </span>
                  {pkg.included.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#C9A84C] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onRequestQuote('Cleaning')}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    idx === 1
                      ? 'bg-[#C9A84C] hover:bg-[#D8B75B] text-slate-950'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Choose {pkg.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
