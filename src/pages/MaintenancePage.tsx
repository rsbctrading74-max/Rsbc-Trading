import React from 'react';
import { CORE_SERVICES, COMPANY_DETAILS, TEAM_MEMBERS } from '../data/companyData';
import { 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Droplet, 
  Paintbrush, 
  ShieldCheck, 
  AlertTriangle,
  Clock, 
  Phone, 
  MessageSquare,
  Check
} from 'lucide-react';
import { PageType } from '../types';

interface MaintenancePageProps {
  onNavigate: (page: PageType) => void;
  onRequestQuote: (service?: 'Maintenance') => void;
}

export const MaintenancePage: React.FC<MaintenancePageProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const service = CORE_SERVICES.find((s) => s.id === 'maintenance')!;
  const maintenanceManager = TEAM_MEMBERS.find((m) => m.position.includes('Maintenance'));

  return (
    <div className="py-12 space-y-16">
      {/* Hero Banner for Maintenance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Copy */}
            <div className="p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs text-[#C9A84C] font-semibold">
                <Wrench className="w-3.5 h-3.5" />
                <span>Facility Upkeep &amp; Emergency Repairs</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display leading-tight">
                Flawless Facilities. <span className="gold-gradient-text">Zero Downtime.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Protect your assets and keep operations smooth. RSBC Trading dispatches certified artisans and handymen for electrical faults, plumbing bursts, preventative HVAC maintenance, and commercial tenant reinstatements.
              </p>

              {/* Maintenance Lead Callout */}
              {maintenanceManager && (
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-[#C9A84C]/40 flex items-center justify-center text-xs font-bold text-white">
                    {maintenanceManager.firstName[0]}{maintenanceManager.surname[0]}
                  </div>
                  <div className="text-xs">
                    <span className="text-white font-bold block">
                      {maintenanceManager.firstName} {maintenanceManager.surname} · {maintenanceManager.position}
                    </span>
                    <span className="text-slate-400 block mt-0.5">
                      Direct Ops: {maintenanceManager.phone} · Rapid Emergency Response
                    </span>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onRequestQuote('Maintenance')}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C9A84C] hover:from-[#E5C158] hover:to-[#D8B75B] text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <span>Request Maintenance Callout / SLA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=EMERGENCY%20MAINTENANCE%3A%20Hello%20Alwin%20and%20RSBC%20team%2C%20I%20have%20an%20urgent%20maintenance%20issue.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs rounded-xl transition-colors flex items-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>Emergency Fault Desk</span>
                </a>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative h-80 lg:h-full min-h-[380px] overflow-hidden bg-slate-950">
              <img
                src={service.image}
                alt="RSBC Facility Maintenance Technician"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Trade Disciplines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Electrical */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Electrical &amp; Power Systems</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fault diagnosis, distribution board (DB) balance, circuit breaker replacements, energy-efficient LED upgrades, and generator change-over switches.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>DB Board overhauls &amp; labeling</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Commercial lighting repairs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Safety isolation audits</span>
              </li>
            </ul>
          </div>

          {/* Plumbing */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Droplet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Plumbing &amp; Sanitary Care</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Burst pipes, water pressure regulation, geyser thermostat repairs, blocked corporate drain jetting, and sanitary fixture reinstatements.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Rapid burst pipe isolations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Water geyser inspection &amp; valves</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Commercial bathroom hardware</span>
              </li>
            </ul>
          </div>

          {/* Handyman & Building Envelope */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Paintbrush className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">General Building &amp; Handyman</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Drywall repair, ceiling tiles replacement, commercial painting, door closer adjustments, security locks, and routine building upkeep.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Tenant reinstatement refurbishing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Drywall patches &amp; paint blending</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>Door locks &amp; emergency exits</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Maintenance SLAs & Retainers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
            Service Level Agreements
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            Maintenance Retainer Tiers
          </h2>
          <p className="text-xs text-slate-400 mt-2">
            Eliminate unexpected downtime with scheduled monthly walkthrough audits.
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
                  Recommended For Businesses
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
                    Deliverables:
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
                  onClick={() => onRequestQuote('Maintenance')}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    idx === 1
                      ? 'bg-[#C9A84C] hover:bg-[#D8B75B] text-slate-950'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Inquire About {pkg.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
