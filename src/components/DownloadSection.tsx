import React from 'react';
import { Apple, Sparkles, ExternalLink } from 'lucide-react';
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
        
        {/* Top Header in #808080 (1:1 with Screenshot 4) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#808080] tracking-tight">
            Download
          </h2>
          <p className="text-[#808080]/80 text-xs sm:text-sm font-bold md:text-right">
            永久免费解锁全部生产力功能 · 稳定轻量无广告
          </p>
        </div>

        {/* Two Cards Side by Side in #F0F0F4, #808080 and Chinese Landscape Gradient */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          
          {/* CARD 1: Free Card (1:1 with Screenshot 4 Left) */}
          <div className="bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[28px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between min-h-[380px]">
            <div>
              {/* Top Row: Brand & 3D Keycap */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5">
                    <MouseIndicator active={true} className="w-4 h-6 border-[#808080] bg-[#808080]/15" />
                    <span className="text-xs font-bold text-[#808080] font-mono">Neinote</span>
                  </div>
                  <h3 className="text-4xl font-black text-[#808080] tracking-tight">
                    Free
                  </h3>
                </div>

                <Keycap label="N" size="md" />
              </div>

              {/* Bullets */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#808080] font-semibold my-8">
                <li className="flex items-center gap-2">
                  <span className="text-[#808080]/60">·</span>
                  <span>Version: 1.4.2</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#808080]/60">·</span>
                  <span>Released: 2026年最新发布</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#808080]/60">·</span>
                  <span>免费解锁所有功能（无任何限制）</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#808080]/60">·</span>
                  <span>Available for Windows, macOS and Linux</span>
                </li>
              </ul>
            </div>

            {/* Bottom Download Buttons in #808080 */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#808080]/20">
              <button
                type="button"
                onClick={() => onOpenDownload('windows')}
                className="flex-1 py-3 px-5 bg-[#808080] hover:bg-[#6e6e6e] text-[#F0F0F4] text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow active:scale-95"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 16 16">
                  <path d="M0 2.222L6.5 1.333v6.222H0V2.222zm7.5-1.467L16 0v7.556H7.5V.755zM0 8.444h6.5v6.223L0 13.778V8.444zm7.5 0H16V16l-8.5-.756V8.444z" />
                </svg>
                <span>Win</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDownload('macos')}
                className="flex-1 py-3 px-5 bg-[#808080] hover:bg-[#6e6e6e] text-[#F0F0F4] text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow active:scale-95"
              >
                <Apple className="w-3.5 h-3.5" />
                <span>Mac</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenDownload('linux')}
                className="py-3 px-4 bg-[#808080]/20 hover:bg-[#808080]/30 text-[#808080] text-xs font-bold rounded-xl transition-all flex items-center justify-center cursor-pointer border border-[#808080]/30"
              >
                <span>Linux</span>
              </button>
            </div>
          </div>

          {/* CARD 2: Support & Go Pro (中国山水画石绿·石青·赭石渐变外框) */}
          <div className="pro-card-border shadow-sm hover:shadow-lg transition-shadow">
            <div className="pro-card-inner p-8 sm:p-10 flex flex-col justify-between min-h-[380px] h-full">
              <div>
                {/* Top Row: Label & Landscape Gradient 3D Keycap */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs font-bold text-[#808080] block mb-1">
                      Support & Go Pro (大师 UI 主题套件)
                    </span>
                    <h3 className="text-4xl font-black text-[#808080] tracking-tight font-mono">
                      $9 <span className="text-sm font-normal text-[#808080]/80 font-sans">/ ¥39 买断</span>
                    </h3>
                  </div>

                  <Keycap label="N" size="md" isGradient={true} />
                </div>

                {/* Bullets with '+' in Landscape Green (#3B7A57) */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#808080] font-semibold my-8">
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B7A57] font-bold text-base">+</span>
                    <span>精心打造的整套大师级 UI 界面与专属配色</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2B5F75] font-bold text-base">+</span>
                    <span>4 种机械轴与复古打字机沉浸击键声效</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#996644] font-bold text-base">+</span>
                    <span>包含未来所有新增主题与高级配色自定义</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#3B7A57] font-bold text-base">+</span>
                    <span>支持独立开发者持续维护与新主题研发</span>
                  </li>
                </ul>
              </div>

              {/* Bottom Button in #F0F0F4 with Landscape Accent */}
              <div className="pt-4 border-t border-[#808080]/20">
                <button
                  type="button"
                  onClick={onOpenSupporter}
                  className="w-full py-3 px-5 bg-[#F0F0F4] hover:bg-white text-[#808080] border border-[#808080]/40 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#3B7A57]" />
                  <span>What's in Pro? (查看主题详情 & 赞助)</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Keycaps & Branding */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 select-none">
          
          {/* Centered Keycaps Ctrl ^ and V in #808080 */}
          <div className="flex items-center gap-3">
            <Keycap subLabel="^" label="Ctrl" size="lg" />
            <Keycap label="V" size="lg" />
          </div>

          {/* Centered Brand Pill */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F0F0F4] rounded-2xl border border-[#808080]/40 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-[#808080] text-[#F0F0F4] font-black text-sm flex items-center justify-center border-b-2 border-[#5c5c5c]">
              牍
            </div>
            <span className="text-lg font-black text-[#808080] tracking-tight font-sans">
              Neinote v1.4.2
            </span>
          </div>

          {/* Clean 2-letter Footer Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8 pt-4 text-sm font-bold text-[#808080]">
            <button 
              type="button"
              onClick={onOpenSupporter} 
              className="hover:text-[#5c5c5c] hover:underline underline-offset-4 transition-colors cursor-pointer"
            >
              主题
            </button>
            <a 
              href="#why" 
              className="hover:text-[#5c5c5c] hover:underline underline-offset-4 transition-colors"
            >
              特性
            </a>
            <a 
              href="#tools" 
              className="hover:text-[#5c5c5c] hover:underline underline-offset-4 transition-colors"
            >
              利器
            </a>
            <a 
              href="#download" 
              className="hover:text-[#5c5c5c] hover:underline underline-offset-4 transition-colors"
            >
              下载
            </a>
            <a 
              href="#why" 
              className="hover:text-[#5c5c5c] hover:underline underline-offset-4 transition-colors"
            >
              关于
            </a>
          </nav>

        </div>

      </div>
    </section>
  );
};
