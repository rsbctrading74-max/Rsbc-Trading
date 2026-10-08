import React from 'react';
import { 
  COMPANY_DETAILS, 
  STRATEGIC_PARTNERS, 
  TEAM_MEMBERS 
} from '../data/companyData';
import { 
  ShieldCheck, 
  Users, 
  Cpu, 
  TrendingUp, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Building2,
  Clock,
  Briefcase
} from 'lucide-react';
import { PageType } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  return (
    <div className="py-12 space-y-20">
      {/* 1. Header / Company Story Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-[#C9A84C]/40 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#C9A84C]" />
            <span>CIPC Registered: {COMPANY_DETAILS.cipcNumber}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display">
            Built on Reliability. <span className="gold-gradient-text">Unified by Purpose.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            RSBC Trading (Pty) Ltd was founded with a singular conviction: South African businesses and homeowners deserve an integrated multi-service partner they can count on without having to manage three disparate contractors.
          </p>
        </div>

        {/* Narrative & Emblem Showcase */}
        <div className="mt-12 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-slate-950/80 rounded-2xl border border-slate-800">
            <img
              src="/src/assets/images/rsbc_logo_crest_1791449111579.jpg"
              alt="RSBC Trading Official Insignia"
              className="w-36 h-36 rounded-2xl object-cover border-2 border-[#C9A84C]/50 shadow-xl mb-4"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-lg font-bold text-white font-display">RSBC Trading (Pty) Ltd</h3>
            <span className="text-xs text-[#C9A84C] font-mono mt-0.5">Reg. {COMPANY_DETAILS.cipcNumber}</span>
            <p className="text-[11px] text-slate-400 mt-2">
              Corporate &amp; Residential Multi-Services · South Africa
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              Our Story &amp; Corporate Vision
            </h2>
            <p>
              In South Africa’s demanding commercial landscape, property managers and enterprise leaders lose hours daily dealing with misaligned suppliers. When an office cleaning team damages a fixture, they blame an absent maintenance team. When an event requires catering and subsequent turnaround cleaning, two separate vendors struggle to coordinate schedules.
            </p>
            <p>
              RSBC Trading re-engineered this model from the ground up. By uniting <strong className="text-white">Commercial Cleaning</strong>, <strong className="text-white">Event Catering</strong>, and <strong className="text-white">Facility Maintenance</strong> under one disciplined executive structure, we offer clients absolute accountability.
            </p>
            <p>
              Every squad member is vetted, trained, and overseen by dedicated operational managers. Our contracts are transparent, our billing is consolidated, and our communication is rapid.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What "All-Rounders" Means in Practice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
            Our Operating Philosophy
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            What &ldquo;All-Rounders&rdquo; Means in Practice
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            It is not about doing everything poorly; it is about housing three specialized divisions under one rigorous command.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <span className="font-mono text-sm font-bold">01</span>
            </div>
            <h3 className="text-base font-bold text-white font-display">Single Point of Contact</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your portfolio manager (Tyroleen Winnaar) oversees all three service arms for your facility. You have one direct WhatsApp channel and one contact person for any job, request, or emergency.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C]">
              <span className="font-mono text-sm font-bold">02</span>
            </div>
            <h3 className="text-base font-bold text-white font-display">Synchronized Operations</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When our catering division prepares an executive lunch, our cleaning division is automatically pre-dispatched for post-event reset, and our technician is on standby for kitchen electrical support.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <span className="font-mono text-sm font-bold">03</span>
            </div>
            <h3 className="text-base font-bold text-white font-display">Consolidated Accounting</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Eliminate vendor bookkeeping clutter. Receive one clean, transparent, tax-compliant invoice covering daily hygiene, monthly maintenance retainers, and catering line items.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Strategic Partners Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
              Institutional Backing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Our Strategic Alliances
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Strengthened by high-caliber partners in digital systems and corporate investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STRATEGIC_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#C9A84C] bg-slate-900 px-2.5 py-1 rounded">
                      {partner.badge}
                    </span>
                    {partner.name.includes('Future') ? (
                      <Cpu className="w-5 h-5 text-blue-400" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-amber-400" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{partner.name}</h3>
                  <p className="text-xs text-[#C9A84C] font-medium mt-0.5">{partner.focus}</p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Collaborative Integration</span>
                  <span className="text-emerald-400 font-medium">Active Synergy</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Management Team Roster (Table & Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A84C] block mb-1">
              People &amp; Governance
            </span>
            <h2 className="text-3xl font-extrabold text-white font-display">
              Management Team Roster
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Direct access to our executive directors, operational division managers, and portfolio heads.
            </p>
          </div>

          <button
            onClick={onRequestQuote}
            className="px-5 py-2.5 bg-[#C9A84C] text-slate-950 rounded-lg text-xs font-bold hover:bg-[#D8B75B] transition-colors cursor-pointer whitespace-nowrap"
          >
            Work With Our Team
          </button>
        </div>

        {/* Responsive Team Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-[#C9A84C]/40 transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-[#C9A84C]/30 flex items-center justify-center font-display font-bold text-white text-base group-hover:border-[#C9A84C] transition-colors">
                    {member.firstName[0]}{member.surname[0]}
                  </div>
                  <span className="text-[10px] font-semibold text-[#C9A84C] bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                    RSBC Lead
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-display">
                  {member.firstName} {member.surname}
                </h3>
                <p className="text-xs text-[#C9A84C] font-semibold mt-0.5">
                  {member.position}
                </p>

                {member.roleDescription && (
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {member.roleDescription}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2 text-xs">
                <a
                  href={`tel:${member.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A84C]" />
                  <span className="font-mono">{member.phone}</span>
                </a>

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#C9A84C] transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
