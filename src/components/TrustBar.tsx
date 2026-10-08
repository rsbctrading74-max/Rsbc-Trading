import React from 'react';
import { COMPANY_DETAILS, STRATEGIC_PARTNERS } from '../data/companyData';
import { ShieldCheck, Cpu, TrendingUp, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border-y border-slate-800/80 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* CIPC Official Registration Badge */}
          <div className="flex items-center gap-3.5 bg-slate-950/60 border border-slate-800/90 rounded-xl p-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider">CIPC Registered</span>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-1.5 py-0.2 rounded font-semibold">Verified</span>
              </div>
              <p className="text-xs text-slate-300 font-mono mt-0.5">
                Reg No: {COMPANY_DETAILS.cipcNumber}
              </p>
            </div>
          </div>

          {/* Strategic Tech Partner */}
          <div className="flex items-center gap-3.5 bg-slate-950/60 border border-slate-800/90 rounded-xl p-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">{STRATEGIC_PARTNERS[0].name}</span>
                <span className="text-[10px] text-blue-400 bg-blue-950/70 border border-blue-800/50 px-1.5 rounded">Tech Partner</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Smart dispatch &amp; digital SLA operations
              </p>
            </div>
          </div>

          {/* Strategic Investment Partner */}
          <div className="flex items-center gap-3.5 bg-slate-950/60 border border-slate-800/90 rounded-xl p-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">{STRATEGIC_PARTNERS[1].name}</span>
                <span className="text-[10px] text-amber-400 bg-amber-950/70 border border-amber-800/50 px-1.5 rounded">Capital Partner</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Corporate growth &amp; enterprise backing
              </p>
            </div>
          </div>
        </div>

        {/* Quick Micro-Certifications Row */}
        <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Unified Single-Vendor Billing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>100% Vetted &amp; Screened Workforce</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>Public Liability Insured</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>24/7 SLA Emergency Facility Dispatch</span>
          </div>
        </div>
      </div>
    </div>
  );
};
