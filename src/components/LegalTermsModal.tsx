import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Cpu, RefreshCw, Mail, Printer, Copy, Check, Globe, ExternalLink, HelpCircle } from 'lucide-react';
import { Keycap } from './Keycap';
import { useTranslation } from '../i18n/LanguageContext';

export type LegalTabType = 'terms' | 'ai' | 'refund' | 'support';

interface LegalTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTabType;
  onOpenPrivacyPolicy?: () => void;
}

export const LegalTermsModal: React.FC<LegalTermsModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms',
  onOpenPrivacyPolicy,
}) => {
  const { lang, toggleLang, t } = useTranslation();
  const [activeTab, setActiveTab] = useState<LegalTabType>(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const legal = t.legalModal;

  const handleCopyCurrentTab = () => {
    let contentToCopy = '';
    if (activeTab === 'terms') {
      contentToCopy = `
# ${legal.termsContent.title}
${legal.lastUpdated} | ${legal.effectiveDate}

${legal.termsContent.lead}

${legal.termsContent.articles
  .map((a) => `## [${a.num}] ${a.heading}\n${a.body}`)
  .join('\n\n')}

${legal.morNotice}
Support: ${legal.supportEmail} (${legal.supportSLA})
      `.trim();
    } else if (activeTab === 'ai') {
      contentToCopy = `
# ${legal.aiAupContent.title}
${legal.lastUpdated} | ${legal.effectiveDate}

${legal.aiAupContent.lead}

${legal.aiAupContent.rules
  .map((r) => `## [${r.num}] ${r.heading}\n${r.body}`)
  .join('\n\n')}

Support: ${legal.supportEmail}
      `.trim();
    } else if (activeTab === 'refund') {
      contentToCopy = `
# ${legal.refundContent.title}
${legal.lastUpdated} | ${legal.effectiveDate}

${legal.refundContent.lead}

${legal.refundContent.policies
  .map((p) => `## [${p.num}] ${p.heading}\n${p.body}`)
  .join('\n\n')}

Refund Requests: ${legal.supportEmail}
      `.trim();
    } else {
      contentToCopy = `
# ${legal.supportContent.title}
${legal.supportContent.lead}

${legal.supportContent.channels
  .map((c) => `## ${c.label}\n${c.value} - ${c.desc}`)
  .join('\n\n')}
      `.trim();
    }

    navigator.clipboard.writeText(contentToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Modal Card */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="relative w-full max-w-4xl bg-[#F0F0F4] border-2 border-[#808080]/40 rounded-[28px] shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh] z-10"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#808080]/20 bg-[#F0F0F4]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <Keycap label="N" size="sm" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#3B7A57] bg-[#3B7A57]/10 px-2 py-0.5 rounded-md border border-[#3B7A57]/30">
                  {legal.badge}
                </span>
                <span className="text-xs text-[#808080]/70 font-mono hidden sm:inline">
                  {legal.lastUpdated}
                </span>
              </div>
              <h2 id="legal-modal-title" className="text-lg sm:text-xl font-black text-[#808080] tracking-tight">
                {legal.title}
              </h2>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              title={lang === 'zh' ? 'Switch to English' : '切换为简体中文'}
              className="p-2 text-xs font-bold text-[#808080] bg-white/70 hover:bg-white rounded-xl border border-[#808080]/30 transition-all flex items-center gap-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#3B7A57]" />
              <span className="font-mono text-[11px] font-bold">{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              title={legal.printBtn}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#808080] bg-white/70 hover:bg-white rounded-xl border border-[#808080]/30 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '打印' : 'Print'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyCurrentTab}
              title={legal.copyBtn}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#808080] bg-white/70 hover:bg-white rounded-xl border border-[#808080]/30 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#3B7A57]" />
                  <span className="text-[#3B7A57] font-mono">{lang === 'zh' ? '已复制' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{lang === 'zh' ? '复制' : 'Copy'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#808080] hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
              aria-label={legal.closeBtn}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="bg-[#E6E6EC] px-6 py-2.5 border-b border-[#808080]/20 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-[#808080] text-[#F0F0F4] shadow-sm'
                : 'text-[#808080] hover:bg-white/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{legal.tabTerms}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-[#808080] text-[#F0F0F4] shadow-sm'
                : 'text-[#808080] hover:bg-white/60'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{legal.tabAiAup}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('refund')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-[#808080] text-[#F0F0F4] shadow-sm'
                : 'text-[#808080] hover:bg-white/60'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{legal.tabRefund}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('support')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'support'
                ? 'bg-[#808080] text-[#F0F0F4] shadow-sm'
                : 'text-[#808080] hover:bg-white/60'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{legal.tabSupport}</span>
          </button>

          {onOpenPrivacyPolicy && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenPrivacyPolicy();
              }}
              className="ml-auto text-xs font-bold text-[#3B7A57] hover:underline flex items-center gap-1 cursor-pointer whitespace-nowrap px-2"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'zh' ? '查看独立隐私政策 →' : 'View Privacy Policy →'}</span>
            </button>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-[#808080]">
          {/* TAB 1: Terms of Service */}
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="bg-white/80 border border-[#808080]/20 rounded-2xl p-5 shadow-xs">
                <h3 className="text-xl sm:text-2xl font-black text-[#808080] mb-2">
                  {legal.termsContent.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#808080]/90 leading-relaxed font-medium">
                  {legal.termsContent.lead}
                </p>
              </div>

              {/* MoR Alert Banner */}
              <div className="bg-[#3B7A57]/10 border-l-4 border-[#3B7A57] p-4 rounded-r-xl text-xs leading-relaxed text-[#234e37] font-medium flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#3B7A57] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold block mb-0.5">Merchant of Record (MoR) 合规结算说明</strong>
                  <span>{legal.morNotice}</span>
                </div>
              </div>

              {/* Articles */}
              <div className="space-y-4">
                {legal.termsContent.articles.map((art) => (
                  <div 
                    key={art.num} 
                    className="bg-white/70 border border-[#808080]/25 rounded-2xl p-5 hover:bg-white transition-colors shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#808080] text-[#F0F0F4] font-mono text-xs font-black flex items-center justify-center shrink-0">
                        {art.num}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-[#808080]">
                        {art.heading}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#808080]/90 pl-9.5">
                      {art.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: AI Acceptable Use Policy */}
          {activeTab === 'ai' && (
            <div className="space-y-6">
              <div className="bg-white/80 border border-[#808080]/20 rounded-2xl p-5 shadow-xs">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2B5F75]/10 text-[#2B5F75] font-mono text-xs font-bold mb-3 border border-[#2B5F75]/20">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>BYOK & Local-First AI Charter</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#808080] mb-2">
                  {legal.aiAupContent.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#808080]/90 leading-relaxed font-medium">
                  {legal.aiAupContent.lead}
                </p>
              </div>

              {/* Rules List */}
              <div className="space-y-4">
                {legal.aiAupContent.rules.map((rule) => (
                  <div 
                    key={rule.num} 
                    className="bg-white/70 border border-[#808080]/25 rounded-2xl p-5 hover:bg-white transition-colors shadow-xs"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <span className="w-7 h-7 rounded-lg bg-[#2B5F75] text-[#F0F0F4] font-mono text-xs font-black flex items-center justify-center shrink-0">
                        {rule.num}
                      </span>
                      <h4 className="text-base sm:text-lg font-black text-[#808080]">
                        {rule.heading}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#808080]/90 pl-9.5">
                      {rule.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Refund & Delivery Policy */}
          {activeTab === 'refund' && (
            <div className="space-y-6">
              <div className="bg-white/80 border border-[#808080]/20 rounded-2xl p-5 shadow-xs">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#3B7A57]/10 text-[#3B7A57] font-mono text-xs font-bold mb-3 border border-[#3B7A57]/20">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>14-Day Money-Back Guarantee</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#808080] mb-2">
                  {legal.refundContent.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#808080]/90 leading-relaxed font-medium">
                  {legal.refundContent.lead}
                </p>
              </div>

              {/* Policies List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {legal.refundContent.policies.map((pol) => (
                  <div 
                    key={pol.num} 
                    className="bg-white/70 border border-[#808080]/25 rounded-2xl p-5 hover:bg-white transition-colors shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-md bg-[#3B7A57] text-[#F0F0F4] font-mono text-xs font-black flex items-center justify-center shrink-0">
                          {pol.num}
                        </span>
                        <h4 className="text-sm sm:text-base font-black text-[#808080]">
                          {pol.heading}
                        </h4>
                      </div>
                      <p className="text-xs leading-relaxed text-[#808080]/90">
                        {pol.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fast Action Box */}
              <div className="bg-[#F0F0F4] border-2 border-dashed border-[#808080]/40 rounded-2xl p-4 text-center">
                <p className="text-xs font-bold text-[#808080] mb-2">
                  {lang === 'zh' 
                    ? '需要发起退款申请或查询订单？' 
                    : 'Need to submit a refund request or check order status?'}
                </p>
                <a
                  href={`mailto:${legal.supportEmail}?subject=${encodeURIComponent(lang === 'zh' ? 'Neinote 主题增值包退款申请' : 'Neinote Theme Add-on Refund Request')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#808080] text-[#F0F0F4] text-xs font-bold rounded-xl hover:bg-[#6e6e6e] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{lang === 'zh' ? '致信客服邮箱发起申请 →' : 'Email Support to Request Refund →'}</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 4: Customer Support & SLA */}
          {activeTab === 'support' && (
            <div className="space-y-6">
              <div className="bg-white/80 border border-[#808080]/20 rounded-2xl p-5 shadow-xs">
                <h3 className="text-xl sm:text-2xl font-black text-[#808080] mb-2">
                  {legal.supportContent.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#808080]/90 leading-relaxed font-medium">
                  {legal.supportContent.lead}
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-4">
                {legal.supportContent.channels.map((chan, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/70 border border-[#808080]/25 rounded-2xl p-5 hover:bg-white transition-colors shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs font-bold text-[#3B7A57] uppercase tracking-wider block mb-1">
                        {chan.label}
                      </span>
                      <div className="text-base sm:text-lg font-black text-[#808080] font-mono">
                        {chan.value}
                      </div>
                      <p className="text-xs text-[#808080]/80 mt-1">
                        {chan.desc}
                      </p>
                    </div>

                    {chan.value.includes('@') && (
                      <a
                        href={`mailto:${chan.value}`}
                        className="px-4 py-2 bg-[#808080] text-[#F0F0F4] text-xs font-bold rounded-xl hover:bg-[#6e6e6e] transition-colors flex items-center justify-center gap-1.5 shrink-0 self-start sm:self-center"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{lang === 'zh' ? '发送邮件' : 'Send Email'}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* SLA Guarantee Box */}
              <div className="bg-[#3B7A57]/10 border border-[#3B7A57]/30 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3B7A57] text-white flex items-center justify-center shrink-0 font-mono font-bold text-xs">
                  SLA
                </div>
                <div className="text-xs text-[#234e37]">
                  <strong className="block font-bold">响应时限承诺：{legal.supportSLA}</strong>
                  <span>如遇紧急安全或支付问题，支持团队将在第一时间介入处理。</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#E6E6EC] border-t border-[#808080]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#808080]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-[#3B7A57]"></span>
            <span>{legal.supportEmail}</span>
            <span className="text-[#808080]/40">·</span>
            <span>{legal.supportSLA}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyCurrentTab}
              className="px-4 py-2 bg-white text-[#808080] font-bold rounded-xl border border-[#808080]/30 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              {copied ? (lang === 'zh' ? '已复制条款' : 'Copied') : legal.copyBtn}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-[#808080] text-[#F0F0F4] font-bold rounded-xl hover:bg-[#6e6e6e] transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              {legal.closeBtn}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
