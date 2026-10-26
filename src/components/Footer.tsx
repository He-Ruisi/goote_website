import React, { useState } from 'react';
import { Globe, ChevronDown, Check, ArrowUpRight, Mail, Github, MessageSquare, ShieldCheck } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import { LegalTabType } from './LegalTermsModal';

interface FooterProps {
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
  onOpenPrivacyPolicy: () => void;
  onOpenTerms: (tab?: LegalTabType) => void;
  onOpenAbout?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDownload,
  onOpenSupporter,
  onOpenPrivacyPolicy,
  onOpenTerms,
  onOpenAbout,
}) => {
  const { lang, setLang, toggleLang, t } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <footer className="w-full bg-[#111113] text-[#A0A0A5] pt-16 pb-12 border-t border-[#808080]/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid inspired by Obsidian */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Left Column: Brand, Follow us, Language Switcher & Copyright (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Brand Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#808080] border-b-2 border-[#555] text-[#F0F0F4] font-black text-base flex items-center justify-center shadow-md">
                {lang === 'zh' ? '牍' : 'N'}
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
                Neinote
              </span>
            </div>

            {/* Follow Us / Social Links */}
            <div>
              <span className="text-xs font-semibold text-[#707075] uppercase tracking-wider block mb-3">
                {t.footer.followUs}
              </span>
              <div className="flex items-center gap-4 text-sm font-medium text-[#C0C0C5]">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Github className="w-4 h-4 text-[#808080]" />
                  <span>GitHub</span>
                </a>
                <span className="text-[#404045]">/</span>
                <a
                  href="#why"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-4 h-4 text-[#808080]" />
                  <span>{lang === 'zh' ? '中文论坛' : 'Discord'}</span>
                </a>
                <span className="text-[#404045]">/</span>
                <a
                  href="mailto:support@neinote.com"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Mail className="w-4 h-4 text-[#808080]" />
                  <span>{lang === 'zh' ? '客服支持' : 'Support'}</span>
                </a>
              </div>
            </div>

            {/* Obsidian-Style Language Dropdown Pill */}
            <div className="relative inline-block text-left pt-2">
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#1c1c20] hover:bg-[#25252a] text-xs font-bold text-[#E0E0E5] border border-[#333338] transition-all cursor-pointer shadow-sm"
                aria-haspopup="true"
                aria-expanded={langMenuOpen}
              >
                <Globe className="w-4 h-4 text-[#808080]" />
                <span>{lang === 'zh' ? '简体中文' : 'English'}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#808080] transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <div 
                  className="absolute left-0 mt-2 w-40 rounded-xl bg-[#1c1c20] border border-[#333338] shadow-xl py-1 z-30"
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setLang('zh');
                      setLangMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-2 text-left text-xs font-bold hover:bg-[#282830] transition-colors flex items-center justify-between text-[#E0E0E5] cursor-pointer"
                  >
                    <span>简体中文</span>
                    {lang === 'zh' && <Check className="w-3.5 h-3.5 text-[#3B7A57]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      setLangMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-2 text-left text-xs font-bold hover:bg-[#282830] transition-colors flex items-center justify-between text-[#E0E0E5] cursor-pointer"
                  >
                    <span>English</span>
                    {lang === 'en' && <Check className="w-3.5 h-3.5 text-[#3B7A57]" />}
                  </button>
                </div>
              )}
            </div>

            {/* Support Email & SLA Tag */}
            <div className="pt-2 text-xs text-[#707075] space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B7A57]"></span>
                <span className="text-[#A0A0A5] font-mono">support@neinote.com</span>
                <span className="text-[#404045]">·</span>
                <span>{t.footer.supportSLA}</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-[#606065] pt-1">
              {t.footer.copyright}
            </p>
          </div>

          {/* Right Columns: Product, Legal & MoR, Resources (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Get started / 产品 */}
            <div className="space-y-3.5">
              <h3 className="text-sm font-bold text-white tracking-wide">
                {t.footer.colProduct}
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <button
                    type="button"
                    onClick={onOpenDownload}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {t.footer.download}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenSupporter}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {t.footer.themesAudio}
                  </button>
                </li>
                <li>
                  <a
                    href="#tools"
                    className="hover:text-white transition-colors block"
                  >
                    {t.footer.quickCapture}
                  </a>
                </li>
                <li>
                  <a
                    href="#why"
                    className="hover:text-white transition-colors block"
                  >
                    {t.footer.markdownEditor}
                  </a>
                </li>
                {onOpenAbout && (
                  <li>
                    <button
                      type="button"
                      onClick={onOpenAbout}
                      className="hover:text-white transition-colors cursor-pointer text-left text-[#3B7A57] font-medium"
                    >
                      {lang === 'zh' ? '关于 Neinote (诞生故事)' : 'About Neinote (Our Story)'}
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Column 2: Legal & MoR / 合规与条款 */}
            <div className="space-y-3.5">
              <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                <span>{t.footer.colLegal}</span>
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenTerms('terms')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {t.footer.termsOfService}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenPrivacyPolicy}
                    className="hover:text-white transition-colors cursor-pointer text-left text-[#3B7A57] flex items-center gap-1"
                  >
                    <span>{t.footer.privacyPolicy}</span>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenTerms('ai')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {t.footer.aiAup}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenTerms('refund')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {t.footer.refundPolicy}
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources & Support / 支持与资源 */}
            <div className="space-y-3.5">
              <h3 className="text-sm font-bold text-white tracking-wide">
                {t.footer.colSupport}
              </h3>
              <ul className="space-y-2.5 text-xs font-medium">
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenTerms('support')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {t.footer.customerSupport}
                  </button>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{t.footer.github}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#606065]" />
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="hover:text-white transition-colors block"
                  >
                    {t.footer.changelog}
                  </a>
                </li>
                <li>
                  <a
                    href="#why"
                    className="hover:text-white transition-colors block"
                  >
                    {t.footer.community}
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Minimal MoR Partner & Security Badge at Bottom */}
        <div className="pt-8 border-t border-[#25252a] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#606065]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3B7A57]" />
            <span>{t.footer.morNotice}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenTerms('terms')}
              className="hover:text-[#A0A0A5] transition-colors cursor-pointer"
            >
              {t.footer.termsOfService}
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-[#A0A0A5] transition-colors cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenTerms('refund')}
              className="hover:text-[#A0A0A5] transition-colors cursor-pointer"
            >
              {t.footer.refundPolicy}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
