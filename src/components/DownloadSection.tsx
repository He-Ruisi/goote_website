import React from 'react';
import { ArrowDownToLine, Apple, Sparkles, ExternalLink } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';

interface DownloadSectionProps {
  onOpenDownload: (os?: string) => void;
  onOpenSupporter: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  onOpenDownload,
  onOpenSupporter
}) => {
  return (
    <section id="download" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header (1:1 with Screenshot 4) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Download
          </h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-500 hover:text-black text-xs sm:text-sm font-medium transition-colors md:text-right flex items-center gap-1.5"
          >
            <span>Access all current and previous releases directly on GitHub.</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Two Cards Side by Side (1:1 with Screenshot 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          
          {/* CARD 1: Free Card (1:1 with Screenshot 4 Left) */}
          <div className="bg-white border border-neutral-200 rounded-[28px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between min-h-[380px]">
            <div>
              {/* Top Row: Brand & 3D Keycap */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5">
                    <MouseIndicator active={true} className="w-4 h-6 border-neutral-600 bg-neutral-800" />
                    <span className="text-xs font-bold text-neutral-400 font-mono">Goote</span>
                  </div>
                  <h3 className="text-4xl font-black text-black tracking-tight">
                    Free
                  </h3>
                </div>

                <Keycap label="G" size="md" />
              </div>

              {/* Bullets */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-700 font-medium my-8">
                <li className="flex items-center gap-2">
                  <span className="text-neutral-400">·</span>
                  <span>Version: 1.4.2</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neutral-400">·</span>
                  <span>Released: 2026年最新发布</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neutral-400">·</span>
                  <span>免费解锁所有功能（无任何限制）</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neutral-400">·</span>
                  <span>Available for Windows, macOS and Linux</span>
                </li>
              </ul>
            </div>

            {/* Bottom Download Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-100">
              <button
                type="button"
                onClick={() => onOpenDownload('windows')}
                className="flex-1 py-3 px-5 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow active:scale-95"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                  <path d="M0 2.222L6.5 1.333v6.222H0V2.222zm7.5-1.467L16 0v7.556H7.5V.755zM0 8.444h6.5v6.223L0 13.778V8.444zm7.5 0H16V16l-8.5-.756V8.444z" />
                </svg>
                <span>Win</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDownload('macos')}
                className="flex-1 py-3 px-5 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow active:scale-95"
              >
                <Apple className="w-3.5 h-3.5" />
                <span>Mac</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDownload('linux')}
                className="py-3 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-xl transition-all flex items-center justify-center cursor-pointer"
              >
                <span>Linux</span>
              </button>
            </div>
          </div>

          {/* CARD 2: Support & Go Pro (1:1 with Screenshot 4 Right) */}
          <div className="pro-card-border shadow-sm hover:shadow-lg transition-shadow">
            <div className="pro-card-inner p-8 sm:p-10 flex flex-col justify-between min-h-[380px] h-full">
              <div>
                {/* Top Row: Label & Gradient 3D Keycap */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs font-bold text-neutral-500 block mb-1">
                      Support & Go Pro (大师 UI 主题套件)
                    </span>
                    <h3 className="text-4xl font-black text-black tracking-tight font-mono">
                      $9 <span className="text-sm font-normal text-neutral-500 font-sans">/ ¥39 买断</span>
                    </h3>
                  </div>

                  <Keycap label="G" size="md" isGradient={true} />
                </div>

                {/* Bullets with '+' */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-700 font-medium my-8">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 font-bold">+</span>
                    <span>精心打造的整套大师级 UI 界面与专属配色</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 font-bold">+</span>
                    <span>4 种机械轴与复古打字机沉浸击键声效</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 font-bold">+</span>
                    <span>包含未来所有新增主题与高级配色自定义</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500 font-bold">+</span>
                    <span>支持独立开源作者持续全职维护与迭代</span>
                  </li>
                </ul>
              </div>

              {/* Bottom White Button */}
              <div className="pt-4 border-t border-purple-100/50">
                <button
                  type="button"
                  onClick={onOpenSupporter}
                  className="w-full py-3 px-5 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>What's in Pro? (查看主题详情 & 赞助)</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Keycaps & Keyviz Branding (1:1 with Screenshot 4 Bottom) */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 select-none">
          
          {/* Centered Keycaps Ctrl ^ and V (or Alt and Space) */}
          <div className="flex items-center gap-3">
            <Keycap subLabel="^" label="Ctrl" size="lg" />
            <Keycap label="V" size="lg" />
          </div>

          {/* Centered Brand Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-2xl border border-neutral-200 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-neutral-900 text-white font-black text-sm flex items-center justify-center border-b-2 border-neutral-950">
              枝
            </div>
            <span className="text-lg font-black text-black tracking-tight font-sans">
              Goote v1.4.2
            </span>
          </div>

          {/* Clean Footer Links (1:1 with Screenshot 4) */}
          <nav className="flex flex-wrap items-center justify-center gap-8 pt-4 text-xs sm:text-sm font-semibold text-neutral-600">
            <button 
              onClick={onOpenSupporter} 
              className="hover:text-black transition-colors cursor-pointer"
            >
              Pro (大师主题)
            </button>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-black transition-colors"
            >
              Github
            </a>
            <a 
              href="#download" 
              className="hover:text-black transition-colors"
            >
              Download
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-black transition-colors"
            >
              Changelog
            </a>
            <a 
              href="#about" 
              className="hover:text-black transition-colors"
            >
              About
            </a>
          </nav>

        </div>

      </div>
    </section>
  );
};
