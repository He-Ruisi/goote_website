import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Zap, Command } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';
import { useTranslation } from '../i18n/LanguageContext';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setActiveKey(e.key.toUpperCase());
      const timer = setTimeout(() => setActiveKey(''), 300);
      return () => clearTimeout(timer);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative pt-12 pb-24 sm:pt-16 sm:pb-32 overflow-hidden">
      
      {/* 极淡的中国山水远山青绿水墨微晕背景 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#3B7A57]/10 via-[#2B5F75]/10 to-[#996644]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 sm:mb-24">
          
          {/* Left Title with floating Mouse Indicator in #808080 */}
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-[#808080] tracking-tight leading-[1.08]">
              {t.hero.titleLine1}<br />
              <span className="inline-flex items-center gap-3">
                {t.hero.titleLine2}
                <MouseIndicator active={true} className="align-middle inline-flex -mt-2" />
              </span>
            </h1>
          </div>

          {/* Right Subtext & Action Buttons */}
          <div className="max-w-md lg:text-left space-y-5">
            <p className="text-[#808080]/90 text-sm sm:text-base leading-relaxed font-medium">
              {t.hero.desc}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onOpenDownload}
                className="px-5 py-2.5 bg-[#808080] hover:bg-[#6e6e6e] text-[#F0F0F4] text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow active:scale-95"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>{t.hero.downloadBtn}</span>
              </button>

              <a
                href="#why"
                className="px-4 py-2.5 bg-[#F0F0F4] hover:bg-neutral-100 text-[#808080] text-xs sm:text-sm font-bold rounded-xl border border-[#808080]/40 transition-all flex items-center gap-2 shadow-sm hover:shadow"
              >
                <Zap className="w-4 h-4 text-[#3B7A57]" />
                <span>{t.hero.demoBtn}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Center Canvas with Giant Bold 'neinote' & Scattered 3D Keycaps */}
        <div className="relative w-full max-w-5xl mx-auto py-12 flex items-center justify-center select-none">
          
          {/* Giant Typographic Wordmark in #808080 */}
          <div className="text-[100px] sm:text-[170px] md:text-[220px] lg:text-[260px] font-black text-[#808080] tracking-tighter leading-none select-none flex items-center justify-center font-sans">
            neinote
          </div>

          {/* Floating Keycaps Scattered with Landscape Accents */}
          
          {/* 1. Large 'command ⌘' Keycap at top left (tilted -8deg) */}
          <div className="absolute top-[8%] left-[16%] sm:left-[20%] z-20">
            <Keycap
              subLabel=""
              label="command"
              icon={<Command className="w-4 h-4 ml-auto mb-1 text-[#808080]" />}
              size="lg"
              rotate="-rotate-[9deg]"
              className="hover:scale-105"
            />
          </div>

          {/* 2. 'enter ↵' Keycap on the second letter (tilted -12deg) */}
          <div className="absolute top-[34%] left-[8%] sm:left-[11%] z-20">
            <Keycap
              subLabel="↵"
              label="enter"
              size="lg"
              rotate="-rotate-[12deg]"
              className="hover:scale-105"
            />
          </div>

          {/* 3. '2 @' Keycap under first 'o' (tilted 32deg) */}
          <div className="absolute bottom-[8%] left-[26%] sm:left-[29%] z-20">
            <Keycap
              subLabel="2"
              label="@"
              size="sm"
              rotate="rotate-[34deg]"
              className="hover:scale-105"
            />
          </div>

          {/* 4. '牍' Keycap between 'i' and 'n' with Chinese landscape green text */}
          <div className="absolute top-[32%] right-[32%] sm:right-[35%] z-20">
            <Keycap
              label="牍"
              size="lg"
              rotate="-rotate-[6deg]"
              className="hover:scale-105 font-bold"
              icon={<span className="text-[#3B7A57] font-black text-2xl">牍</span>}
            />
          </div>

          {/* 5. 'N' Keycap on top right (tilted 6deg) */}
          <div className="absolute top-[16%] right-[20%] sm:right-[24%] z-20">
            <Keycap
              label="N"
              size="md"
              rotate="rotate-[8deg]"
              className="hover:scale-105 font-black text-[#2B5F75]"
            />
          </div>

          {/* 6. Motion-blurred floating Keycap 'E' on the far right */}
          <div className="absolute top-[42%] right-[14%] sm:right-[18%] z-10 blur-[0.8px] opacity-75">
            <Keycap
              label="E"
              size="md"
              rotate="rotate-[25deg]"
              className="hover:scale-105"
            />
          </div>

          {/* Real-time typing hint */}
          <div className="absolute bottom-[-10px] right-4 text-[11px] font-mono text-[#808080] bg-[#F0F0F4] px-2.5 py-1 rounded-lg border border-[#808080]/30 shadow-sm">
            {activeKey ? `捕获击键: ${activeKey}` : '💡 支持物理键盘敲击或点击按键交互'}
          </div>

        </div>

      </div>
    </section>
  );
};
