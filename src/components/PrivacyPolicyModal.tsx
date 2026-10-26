import React, { useState } from 'react';
import { X, ShieldCheck, HardDrive, Cpu, CreditCard, Mic, EyeOff, Puzzle, FileText, Printer, Copy, Check, Globe } from 'lucide-react';
import { Keycap } from './Keycap';
import { useTranslation } from '../i18n/LanguageContext';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const { lang, toggleLang, t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('storage');

  if (!isOpen) return null;

  const policy = t.privacyPolicy;

  const handleCopy = () => {
    const textToCopy = `
# ${policy.modalTitle}
${policy.lastUpdated} | ${policy.effectiveDate}

${policy.leadStatement}

---
${policy.quickSummary}

${policy.sections
  .map(
    (s) => `
## ${s.tag} - ${s.title}
${s.summary}

${s.points.map((p) => `### ${p.subtitle}\n${p.content}`).join('\n\n')}
`
  )
  .join('\n\n')}

---
${policy.contactLead} ${policy.contactEmail}
${policy.gdprNote}
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    setActiveSectionId(id);
    const element = document.getElementById(`privacy-sec-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#808080]/65 backdrop-blur-md overflow-hidden animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[26px] border-2 border-[#808080] bg-[#F0F0F4] shadow-2xl text-[#808080] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#808080]/20 bg-[#F0F0F4]/95 shrink-0">
          <div className="flex items-center gap-3">
            <Keycap label="N" size="md" isGradient={true} />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-[#808080] tracking-tight">
                  {policy.modalTitle}
                </h2>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-black rounded-md bg-[#3B7A57]/15 text-[#3B7A57] border border-[#3B7A57]/30">
                  {lang === 'zh' ? '公开规范' : 'Public Charter'}
                </span>
              </div>
              <p className="text-xs text-[#808080]/70 font-semibold">
                {policy.lastUpdated} · {policy.effectiveDate}
              </p>
            </div>
          </div>

          {/* Action buttons in header */}
          <div className="flex items-center gap-2">
            {/* Quick in-modal language switcher */}
            <button
              type="button"
              onClick={toggleLang}
              title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#808080] bg-white border border-[#808080]/30 rounded-xl hover:border-[#808080]/70 transition-all cursor-pointer shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#3B7A57]" />
              <span className="font-mono text-[11px] font-extrabold">{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Copy Policy text */}
            <button
              type="button"
              onClick={handleCopy}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-[#808080] bg-white border border-[#808080]/30 rounded-xl hover:border-[#808080]/70 transition-all cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#3B7A57]" /> : <Copy className="w-3.5 h-3.5 text-[#808080]" />}
              <span>{copied ? policy.copiedNotice : policy.copyBtn}</span>
            </button>

            {/* Print button */}
            <button
              type="button"
              onClick={handlePrint}
              title={policy.printBtn}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#808080] bg-white border border-[#808080]/30 rounded-xl hover:border-[#808080]/70 transition-all cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#808080]" />
              <span className="hidden lg:inline">{policy.printBtn}</span>
            </button>

            {/* Close Modal */}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#808080]/80 hover:text-[#808080] hover:bg-[#808080]/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Quick Jump Bar */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-neutral-100/70 border-b border-[#808080]/15 overflow-x-auto scrollbar-none shrink-0 text-xs font-bold">
          <span className="text-[#808080]/60 uppercase tracking-wider text-[10px] shrink-0 font-mono">
            {lang === 'zh' ? '快速导览：' : 'JUMP TO:'}
          </span>
          {policy.sections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollToSection(sec.id)}
              className={`px-2.5 py-1 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeSectionId === sec.id
                  ? 'bg-[#808080] text-[#F0F0F4] shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#808080] border border-[#808080]/20'
              }`}
            >
              {sec.title.split('与')[0].split('&')[0]}
            </button>
          ))}
        </div>

        {/* Scrollable Policy Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 scroll-smooth text-[#808080]">
          
          {/* Top Lead Banner & Philosophy */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#3B7A57]/10 via-[#2B5F75]/10 to-[#996644]/10 border border-[#3B7A57]/25 shadow-xs">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[#3B7A57] shrink-0 mt-0.5" />
              <div>
                <span className="inline-block px-2 py-0.5 text-[10px] font-black rounded-md bg-[#3B7A57]/20 text-[#3B7A57] mb-2 font-mono">
                  {policy.badge}
                </span>
                <p className="text-sm font-bold text-[#5c5c5c] leading-relaxed mb-3">
                  {policy.leadStatement}
                </p>
                <div className="p-3 bg-white/70 rounded-xl border border-[#808080]/20 text-xs font-semibold text-[#808080] leading-normal">
                  <span className="font-black text-[#3B7A57] mr-1">✦</span>
                  {policy.quickSummary}
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {policy.corePillars.map((pillar, idx) => {
              const icons = [
                <HardDrive key="hd" className="w-4 h-4 text-[#3B7A57]" />,
                <Cpu key="cpu" className="w-4 h-4 text-[#2B5F75]" />,
                <EyeOff key="eye" className="w-4 h-4 text-[#996644]" />,
                <CreditCard key="card" className="w-4 h-4 text-[#3B7A57]" />,
              ];
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#808080]/30 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded-lg bg-[#F0F0F4] border border-[#808080]/20">
                        {icons[idx % icons.length]}
                      </div>
                      <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-[#808080]/80">
                        {pillar.tag}
                      </span>
                    </div>
                    <h4 className="text-xs font-black text-[#808080] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-[#808080]/80 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-6 pt-2">
            {policy.sections.map((section) => (
              <section 
                key={section.id} 
                id={`privacy-sec-${section.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#808080]/30 shadow-xs transition-colors hover:border-[#808080]/60"
              >
                {/* Section Header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono font-bold text-[#3B7A57] bg-[#3B7A57]/10 px-2 py-0.5 rounded-md border border-[#3B7A57]/20">
                    {section.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#808080] mb-2 tracking-tight">
                  {section.title}
                </h3>
                <p className="text-xs font-bold text-[#808080]/75 pb-4 border-b border-[#808080]/15 leading-relaxed">
                  {section.summary}
                </p>

                {/* Sub-Points */}
                <div className="mt-4 space-y-4">
                  {section.points.map((pt, pIdx) => (
                    <div key={pIdx} className="pl-3 border-l-2 border-[#808080]/30 hover:border-[#3B7A57] transition-colors">
                      <h4 className="text-xs font-extrabold text-[#5c5c5c] mb-1 flex items-center gap-1.5">
                        <span className="text-[#3B7A57]">▸</span>
                        {pt.subtitle}
                      </h4>
                      <p className="text-xs text-[#808080] font-medium leading-relaxed">
                        {pt.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer Contact & Legal Compliance */}
          <div className="p-5 rounded-2xl bg-white border border-[#808080]/30 text-xs font-semibold space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#808080]/15">
              <div>
                <p className="text-[#808080]">{policy.contactLead}</p>
                <a 
                  href={`mailto:${policy.contactEmail}`} 
                  className="text-[#2B5F75] font-mono font-bold hover:underline"
                >
                  {policy.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Keycap label="Alt" size="sm" />
                <span className="text-[11px] font-mono text-[#808080]/70">Neinote · Privacy Protected</span>
              </div>
            </div>
            <p className="text-[11px] text-[#808080]/70 pt-1">
              {policy.gdprNote}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#808080]/20 bg-[#F0F0F4] shrink-0">
          <div className="text-xs text-[#808080]/75 font-semibold">
            {lang === 'zh' ? 'Neinote 尊重每一位创作者的数据自主权' : 'Neinote fully respects creator data sovereignty'}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-[#F0F0F4] bg-[#808080] hover:bg-[#6c6c6c] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            {policy.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
