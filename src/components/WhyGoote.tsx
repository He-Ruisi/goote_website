import React, { useState } from 'react';
import { MousePointer, Hash, Feather, Mic, LayoutGrid, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { LiquidPauseAnimation } from './LiquidPauseAnimation';
import { useTranslation } from '../i18n/LanguageContext';

export interface FeatureScreenItem {
  id: string;
  label: string;
  tooltip: string;
  icon: React.ReactNode;
  imageSrc: string;
  badge: string;
  title: string;
  desc: string;
  hotkey?: string;
  highlights: string[];
}

export const WhyGoote: React.FC = () => {
  const { t } = useTranslation();

  // 5 个功能标签页，根据当前语言动态获取文案，并完整绑定 5 张实际应用截图
  const SCREEN_TABS: FeatureScreenItem[] = [
    {
      id: 'quick-capture',
      label: t.why.tabs.quickCapture.label,
      tooltip: t.why.tabs.quickCapture.tooltip,
      icon: <MousePointer className="w-4 h-4" />,
      imageSrc: '/assets/aistudio/image_83057599.png',
      badge: t.why.tabs.quickCapture.badge,
      title: t.why.tabs.quickCapture.title,
      desc: t.why.tabs.quickCapture.desc,
      hotkey: t.why.tabs.quickCapture.hotkey,
      highlights: t.why.tabs.quickCapture.highlights
    },
    {
      id: 'dual-outline',
      label: t.why.tabs.dualOutline.label,
      tooltip: t.why.tabs.dualOutline.tooltip,
      icon: <Hash className="w-4 h-4" />,
      imageSrc: '/assets/aistudio/image_a4d27b33.png',
      badge: t.why.tabs.dualOutline.badge,
      title: t.why.tabs.dualOutline.title,
      desc: t.why.tabs.dualOutline.desc,
      hotkey: t.why.tabs.dualOutline.hotkey,
      highlights: t.why.tabs.dualOutline.highlights
    },
    {
      id: 'main-editor',
      label: t.why.tabs.mainEditor.label,
      tooltip: t.why.tabs.mainEditor.tooltip,
      icon: <Feather className="w-4 h-4" />,
      imageSrc: '/assets/aistudio/image_8be70009.png',
      badge: t.why.tabs.mainEditor.badge,
      title: t.why.tabs.mainEditor.title,
      desc: t.why.tabs.mainEditor.desc,
      hotkey: t.why.tabs.mainEditor.hotkey,
      highlights: t.why.tabs.mainEditor.highlights
    },
    {
      id: 'voice-stats',
      label: t.why.tabs.voiceStats.label,
      tooltip: t.why.tabs.voiceStats.tooltip,
      icon: <Mic className="w-4 h-4" />,
      imageSrc: '/assets/aistudio/image_225715e8.png',
      badge: t.why.tabs.voiceStats.badge,
      title: t.why.tabs.voiceStats.title,
      desc: t.why.tabs.voiceStats.desc,
      hotkey: t.why.tabs.voiceStats.hotkey,
      highlights: t.why.tabs.voiceStats.highlights
    },
    {
      id: 'extensions',
      label: t.why.tabs.extensions.label,
      tooltip: t.why.tabs.extensions.tooltip,
      icon: <LayoutGrid className="w-4 h-4" />,
      imageSrc: '/assets/aistudio/image_f96d7732.png',
      badge: t.why.tabs.extensions.badge,
      title: t.why.tabs.extensions.title,
      desc: t.why.tabs.extensions.desc,
      hotkey: t.why.tabs.extensions.hotkey,
      highlights: t.why.tabs.extensions.highlights
    }
  ];

  const [activeTabId, setActiveTabId] = useState<string>('quick-capture');
  const [centerPressed, setCenterPressed] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentTab = SCREEN_TABS.find(t => t.id === activeTabId) || SCREEN_TABS[0];

  const handleCenterClick = () => {
    setCenterPressed(true);
    setTimeout(() => setCenterPressed(false), 200);
  };

  return (
    <section id="why" className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtext, Highlight Bullet Points & Liquid Pause Micro-interaction */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B7A57]/15 border border-[#3B7A57]/30 text-xs font-mono font-bold text-[#3B7A57]">
              <span>{t.why.badge}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#808080] tracking-tight leading-tight">
              {t.why.title}
            </h2>

            <p className="text-[#808080]/90 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              {t.why.subtitle}
            </p>

            <div className="space-y-3.5 pt-1 text-xs sm:text-sm text-[#808080] font-medium leading-relaxed">
              <div className="flex items-start gap-3 bg-[#F0F0F4] p-3.5 rounded-2xl border border-[#808080]/20">
                <span className="w-5 h-5 rounded-full bg-[#3B7A57]/20 text-[#3B7A57] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-[#666666] block mb-0.5">{t.why.point1Title}</strong>
                  <span>{t.why.point1Desc}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F0F0F4] p-3.5 rounded-2xl border border-[#808080]/20">
                <span className="w-5 h-5 rounded-full bg-[#2B5F75]/20 text-[#2B5F75] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-[#666666] block mb-0.5">{t.why.point2Title}</strong>
                  <span>{t.why.point2Desc}</span>
                </div>
              </div>
            </div>

            {/* Liquid Pause Micro-interaction Display */}
            <div className="pt-2">
              <div className="flex items-center gap-4 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-2xl p-4 shadow-sm hover:border-[#808080]/60 transition-colors">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-[#808080]/10 rounded-xl">
                  <LiquidPauseAnimation size={54} />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#808080] font-mono tracking-tight">{t.why.liquidTitle}</span>
                    <span className="text-[10px] bg-[#3B7A57]/15 text-[#3B7A57] font-bold px-1.5 py-0.5 rounded">{t.why.liquidTag}</span>
                  </div>
                  <p className="text-[11px] text-[#808080]/85 font-medium leading-normal">
                    {t.why.liquidDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Screen Frame with Real Screenshot Preview */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#6e6e6e] rounded-[36px] sm:rounded-[44px] p-6 sm:p-9 shadow-2xl flex flex-col items-center justify-between min-h-[460px] sm:min-h-[530px] border-2 border-[#808080]">
              
              {/* Feature Title Badge on top of screen */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#F0F0F4]/20 text-xs font-mono text-[#F0F0F4]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F0F0F4]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F0F0F4]/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F0F0F4]/50" />
                  <span className="font-bold ml-1 text-[#F0F0F4]/90">{currentTab.badge}</span>
                </div>
                {currentTab.hotkey && (
                  <span className="bg-[#F0F0F4]/20 px-2.5 py-0.5 rounded-md text-[11px] font-bold text-white shadow-sm">
                    {currentTab.hotkey}
                  </span>
                )}
              </div>

              {/* Center Display: Renders the ACTUAL User Screenshots */}
              <div className="flex-1 flex flex-col items-center justify-center w-full relative py-3">
                
                <div 
                  onClick={handleCenterClick}
                  className={`relative w-full max-h-[300px] sm:max-h-[340px] rounded-[22px] sm:rounded-[26px] overflow-hidden border-2 border-[#808080] shadow-2xl bg-[#2b2b2b] transition-all duration-150 cursor-pointer group flex items-center justify-center ${
                    centerPressed ? 'scale-95' : 'hover:scale-[1.01]'
                  }`}
                  title={t.why.zoomHint}
                >
                  <img 
                    key={currentTab.id}
                    src={currentTab.imageSrc} 
                    alt={currentTab.title}
                    className="w-full h-auto object-contain max-h-[300px] sm:max-h-[340px] select-none block transition-opacity duration-300"
                  />
                  
                  {/* Subtle screenshot badge in bottom right */}
                  <div className="absolute bottom-2.5 right-2.5 bg-[#1f1f1f]/85 backdrop-blur-md text-[#F0F0F4] text-[10px] font-mono px-2.5 py-1 rounded-lg border border-[#F0F0F4]/20 flex items-center gap-1.5 shadow-md">
                    <ImageIcon className="w-3 h-3 text-[#3B7A57]" />
                    <span>{t.why.screenshotTag}</span>
                  </div>

                  {/* Hover hint */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsZoomed(true);
                      }}
                      className="pointer-events-auto px-3.5 py-1.5 bg-[#F0F0F4] text-[#808080] rounded-xl text-xs font-bold shadow-xl border border-[#808080]/30 hover:bg-white active:scale-95 transition-all"
                    >
                      {t.why.zoomHint}
                    </button>
                  </div>
                </div>

                {/* Animated Moving Fluid Cursor with LiquidPauseAnimation */}
                <motion.div
                  className="absolute pointer-events-none drop-shadow-2xl z-20"
                  animate={{
                    x: [0, 18, -12, 6, 0],
                    y: [0, -14, 8, -6, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ right: '5%', bottom: '8%' }}
                >
                  <div className="flex items-center gap-2 bg-[#F0F0F4]/90 backdrop-blur-md border border-[#808080] rounded-2xl p-1.5 shadow-2xl">
                    <LiquidPauseAnimation size={40} />
                    <div className="pr-1.5 text-left select-none">
                      <span className="text-[10px] font-mono font-black text-[#808080] block leading-tight">{t.why.fluidCursorTitle}</span>
                      <span className="text-[9px] text-[#3B7A57] font-bold">{t.why.fluidCursorStatus}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Explanatory Caption for Active Screen */}
              <div className="text-center px-4 my-2.5">
                <span className="text-xs sm:text-sm font-bold text-[#F0F0F4] block mb-0.5">{currentTab.title}</span>
                <p className="text-[11px] sm:text-xs text-[#F0F0F4]/80 max-w-lg mx-auto">{currentTab.desc}</p>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
                  {currentTab.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-[10px] text-[#F0F0F4]/90 bg-[#F0F0F4]/15 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#3B7A57]" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Dock Toolbar */}
              <div className="mt-3 bg-[#808080] border border-[#F0F0F4]/30 rounded-2xl p-1.5 flex items-center gap-1.5 sm:gap-3 shadow-inner">
                {SCREEN_TABS.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 text-xs font-bold ${
                        isActive 
                          ? 'bg-[#3B7A57] text-[#F0F0F4] shadow-md scale-105' 
                          : 'text-[#F0F0F4]/75 hover:text-white hover:bg-[#F0F0F4]/15'
                      }`}
                      title={tab.tooltip}
                    >
                      {tab.icon}
                      <span className="inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Screenshot Zoom Modal */}
      {isZoomed && (
        <div 
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-[#F0F0F4] p-3 rounded-2xl border-2 border-[#808080] shadow-2xl overflow-hidden flex flex-col items-center">
            <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-[#808080]/20 text-xs font-bold text-[#808080]">
              <span className="font-mono">{currentTab.badge} · {currentTab.title}</span>
              <button 
                type="button"
                onClick={() => setIsZoomed(false)}
                className="px-2.5 py-1 bg-[#808080] text-[#F0F0F4] rounded-lg text-xs hover:bg-[#6e6e6e]"
              >
                {t.why.closeEsc}
              </button>
            </div>
            <img 
              src={currentTab.imageSrc} 
              alt={currentTab.title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-inner select-none"
            />
          </div>
        </div>
      )}
    </section>
  );
};
