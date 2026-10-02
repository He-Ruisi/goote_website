import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, Github, Command, CornerDownLeft, Sparkles } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';

interface HeroProps {
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenSupporter }) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Header (1:1 with Screenshot 1) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 sm:mb-24">
          
          {/* Left Title with floating Mouse Indicator */}
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-black tracking-tight leading-[1.08]">
              全链条写作的<br />
              <span className="inline-flex items-center gap-3">
                瑞士军刀利器
                <MouseIndicator active={true} className="align-middle inline-flex -mt-2" />
              </span>
            </h1>
          </div>

          {/* Right Subtext & Action Buttons */}
          <div className="max-w-md lg:text-left space-y-5">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Goote 是一个缝合了诸多小而美利器的瑞士军刀。简单、稳定，主打极速录入（包括语音）以及快速整合输出的全链条写作。
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={onOpenDownload}
                className="px-5 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>免费下载</span>
              </button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-white hover:bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-semibold rounded-xl border border-neutral-300 transition-all flex items-center gap-2 shadow-sm hover:shadow"
              >
                <Github className="w-4 h-4 text-black" />
                <span>Github 14.2k</span>
              </a>
            </div>
          </div>

        </div>

        {/* Center Canvas with Giant Bold 'goote' & Scattered 3D Keycaps (1:1 with Screenshot 1) */}
        <div className="relative w-full max-w-5xl mx-auto py-12 flex items-center justify-center select-none">
          
          {/* Giant Typographic Wordmark */}
          <div className="text-[130px] sm:text-[210px] md:text-[270px] lg:text-[320px] font-black text-black tracking-tighter leading-none select-none flex items-center justify-center font-sans">
            goote
          </div>

          {/* Floating Keycaps Scattered at Angles exactly like Screenshot 1 */}
          
          {/* 1. Large 'command ⌘' Keycap at top left (tilted -8deg) */}
          <div className="absolute top-[8%] left-[20%] sm:left-[24%] z-20">
            <Keycap
              subLabel=""
              label="command"
              icon={<Command className="w-4 h-4 ml-auto mb-1" />}
              size="lg"
              rotate="-rotate-[9deg]"
              className="hover:scale-105"
            />
          </div>

          {/* 2. 'enter ↵' Keycap on the second letter (tilted -12deg) */}
          <div className="absolute top-[34%] left-[10%] sm:left-[13%] z-20">
            <Keycap
              subLabel="↵"
              label="enter"
              size="lg"
              rotate="-rotate-[12deg]"
              className="hover:scale-105"
            />
          </div>

          {/* 3. '2 @' Keycap under first 'o' (tilted 32deg) */}
          <div className="absolute bottom-[8%] left-[30%] sm:left-[33%] z-20">
            <Keycap
              subLabel="2"
              label="@"
              size="sm"
              rotate="rotate-[34deg]"
              className="hover:scale-105"
            />
          </div>

          {/* 4. '枝' / 'G' Keycap between 'o' and 't' */}
          <div className="absolute top-[32%] right-[32%] sm:right-[35%] z-20">
            <Keycap
              label="枝"
              size="lg"
              rotate="-rotate-[6deg]"
              className="hover:scale-105 text-emerald-600 font-bold"
            />
          </div>

          {/* 5. 'K' / 'T' Keycap on top right (tilted 6deg) */}
          <div className="absolute top-[16%] right-[22%] sm:right-[26%] z-20">
            <Keycap
              label="T"
              size="md"
              rotate="rotate-[8deg]"
              className="hover:scale-105"
            />
          </div>

          {/* 6. Motion-blurred floating Keycap 'E' on the far right */}
          <div className="absolute top-[42%] right-[14%] sm:right-[18%] z-10 blur-[0.8px] opacity-80">
            <Keycap
              label="E"
              size="md"
              rotate="rotate-[25deg]"
              className="hover:scale-105"
            />
          </div>

          {/* Subtle real-time typing hint */}
          <div className="absolute bottom-[-10px] right-4 text-[11px] font-mono text-neutral-400 bg-white/80 px-2 py-0.5 rounded border border-neutral-200">
            {activeKey ? `正在捕获按键: ${activeKey}` : '💡 支持敲击物理键盘或点击按键交互'}
          </div>

        </div>

      </div>
    </section>
  );
};
