import React from 'react';
import { ArrowDownToLine, Sparkles, MessageSquare, Globe } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
  onOpenPrivacyPolicy: () => void;
  onOpenTerms?: () => void;
  onOpenAbout?: () => void;
  onNavigateHome?: () => void;
  currentView?: 'home' | 'about';
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenDownload, 
  onOpenSupporter, 
  onOpenPrivacyPolicy,
  onOpenTerms,
  onOpenAbout,
  onNavigateHome,
  currentView = 'home',
}) => {
  const { lang, toggleLang, t } = useTranslation();

  const handleNavAnchor = (hash: string) => {
    if (currentView === 'about' && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F0F0F4]/90 backdrop-blur-md border-b border-[#808080]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Zone */}
        <button 
          type="button"
          onClick={() => {
            if (onNavigateHome) onNavigateHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-[#808080] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-[#808080] border-b-2 border-[#5c5c5c] text-[#F0F0F4] font-black text-sm flex items-center justify-center shadow-sm">
            {lang === 'zh' ? '牍' : 'N'}
          </div>
          <span className="font-extrabold text-lg tracking-tight text-[#808080] font-sans">
            {t.nav.brand}
          </span>
        </button>

        {/* 顶部导航便签 (2个字风格) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-bold text-[#808080]/85">
          <button 
            type="button"
            onClick={() => handleNavAnchor('#why')} 
            className="hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer"
          >
            {t.nav.features}
          </button>
          <button 
            type="button"
            onClick={() => handleNavAnchor('#tools')} 
            className="hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer"
          >
            {t.nav.tools}
          </button>
          <button 
            type="button"
            onClick={() => handleNavAnchor('#download')} 
            className="hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer"
          >
            {t.nav.download}
          </button>
          <button 
            type="button"
            onClick={onOpenSupporter} 
            className="hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer font-bold"
          >
            {t.nav.themes}
          </button>
          {onOpenAbout && (
            <button 
              type="button"
              onClick={onOpenAbout} 
              className={`hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer font-bold ${
                currentView === 'about' ? 'text-[#3B7A57] font-extrabold underline decoration-2' : ''
              }`}
            >
              {t.nav.about}
            </button>
          )}
          <button 
            type="button"
            onClick={onOpenPrivacyPolicy} 
            className="hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer font-bold"
          >
            {t.nav.privacy}
          </button>
          {onOpenTerms && (
            <button 
              type="button"
              onClick={onOpenTerms} 
              className="hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer font-bold"
            >
              {t.nav.terms}
            </button>
          )}
        </nav>

        {/* Action Buttons with Language Switcher right next to Community */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Community Link */}
          <a
            href="#why"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#808080] bg-[#F0F0F4] border border-[#808080]/40 rounded-xl hover:bg-neutral-100 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#808080]" />
            <span>{t.nav.community}</span>
          </a>

          {/* Language Switcher right next to Community */}
          <button
            type="button"
            onClick={toggleLang}
            title={lang === 'zh' ? 'Switch to English (当前：中文)' : '切换为中文 (Current: English)'}
            aria-label="Switch Language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold text-[#808080] bg-[#F0F0F4] border border-[#808080]/40 rounded-xl hover:border-[#808080]/80 hover:bg-neutral-100 transition-all shadow-sm cursor-pointer select-none group"
          >
            <Globe className="w-3.5 h-3.5 text-[#808080] group-hover:rotate-12 transition-transform" />
            <div className="flex items-center gap-1 font-mono text-[11px]">
              <span className={lang === 'zh' ? 'text-[#3B7A57] font-black' : 'text-[#808080]/60'}>中</span>
              <span className="text-[#808080]/30 text-[10px]">/</span>
              <span className={lang === 'en' ? 'text-[#3B7A57] font-black' : 'text-[#808080]/60'}>EN</span>
            </div>
          </button>

          {/* Support Pro Theme Button */}
          <button
            type="button"
            onClick={onOpenSupporter}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#2B5F75] bg-[#3B7A57]/10 hover:bg-[#3B7A57]/20 border border-[#2B5F75]/30 rounded-xl transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3B7A57]" />
            <span>{t.nav.support}</span>
          </button>

          {/* Download CTA Button */}
          <button
            type="button"
            onClick={onOpenDownload}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#F0F0F4] bg-[#808080] hover:bg-[#6e6e6e] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>{t.nav.downloadBtn}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
