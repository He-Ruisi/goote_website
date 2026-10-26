import React from 'react';
import { Mic, Sparkles } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';
import { useTranslation } from '../i18n/LanguageContext';

export const PowerfulTools: React.FC = () => {
  const { lang, t } = useTranslation();

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header in #808080 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#808080] tracking-tight">
            {t.tools.title}
          </h2>
          <p className="text-[#808080]/85 text-xs sm:text-sm max-w-md leading-relaxed md:text-right font-medium">
            {t.tools.subtitle}
          </p>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* CARD 1 (Top Left, 6-col): 自动隐藏的竖状速记窗 (方便快速录入 + 语音) */}
          <div className="md:col-span-6 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* Visual: Vertical Auto-Hiding Window Mockup */}
            <div className="mb-6 p-4 bg-[#808080]/15 rounded-2xl border border-[#808080]/30 shadow-sm relative flex items-center justify-center min-h-[190px]">
              
              {/* Outer screen preview container */}
              <div className="w-full h-full flex items-center justify-between gap-4">
                
                {/* The Vertical Capture Sidebar Window (竖状速记窗) */}
                <div className="w-48 bg-[#F0F0F4] border-2 border-[#808080]/60 rounded-xl p-3 shadow-md flex flex-col justify-between relative">
                  <div className="flex items-center justify-between border-b border-[#808080]/20 pb-1.5 mb-2">
                    <span className="text-[10px] font-bold text-[#808080] flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B7A57] animate-pulse" />
                      {lang === 'zh' ? '竖状录入窗' : 'Vertical Dock'}
                    </span>
                    <span className="text-[9px] font-mono text-[#808080]/70 bg-[#808080]/10 px-1 rounded">
                      {lang === 'zh' ? '自动贴边隐藏' : 'Auto Hide'}
                    </span>
                  </div>

                  {/* Simulated Voice wave & input field */}
                  <div className="space-y-2">
                    <div className="bg-[#808080]/10 rounded-lg p-2 border border-[#808080]/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-[#3B7A57] flex items-center gap-1">
                          <Mic className="w-3 h-3 text-[#3B7A57]" />
                          {lang === 'zh' ? '语音正在聆听...' : 'Voice Listening...'}
                        </span>
                        <div className="flex items-center gap-0.5 h-3">
                          {[30, 80, 50, 100, 60, 40].map((h, i) => (
                            <span 
                              key={i} 
                              className="w-0.5 bg-[#3B7A57] rounded-full" 
                              style={{ height: `${h}%` }} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[9px] text-[#808080] font-medium line-clamp-2">
                        {lang === 'zh' 
                          ? '“梳理累牍核心概念：叶为碎片，枝为大纲，络为长卷。”' 
                          : '"Capture fleeting thoughts: leaves as notes, branches as outline, trunk as synthesis."'}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[9px] text-[#808080]/70">
                      <span className="bg-[#3B7A57]/10 text-[#3B7A57] px-1 py-0.5 rounded font-mono font-bold">
                        {lang === 'zh' ? '#灵感' : '#Sparks'}
                      </span>
                      <span className="bg-[#808080]/10 text-[#808080] px-1 py-0.5 rounded font-mono">
                        {lang === 'zh' ? '毫秒级入库' : 'Ultra Fast'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-[#808080]/15 flex items-center justify-between text-[9px] font-mono text-[#808080]/70">
                    <span>{lang === 'zh' ? '快捷键 Alt + Space' : 'Alt + Space'}</span>
                    <span className="text-[#3B7A57] font-bold">{lang === 'zh' ? '已同步' : 'Synced'}</span>
                  </div>
                </div>

                {/* Right hint graphic */}
                <div className="flex-1 hidden sm:flex flex-col items-start justify-center text-left space-y-2 pl-2">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#3B7A57]/15 text-[#3B7A57] text-[10px] font-bold">
                    <Mic className="w-3 h-3" />
                    <span>{lang === 'zh' ? '随时呼出 · 离线语音' : 'Quick Call · Offline Voice'}</span>
                  </div>
                  <p className="text-[11px] text-[#808080] font-medium leading-relaxed">
                    {lang === 'zh' 
                      ? '光标随时就绪，说完即自动打标并隐藏，完全不打断当前工作流。' 
                      : 'Instantly summoned anywhere, tags captured ideas automatically without breaking your workflow.'}
                  </p>
                </div>

              </div>

              {/* Floating Mouse Indicators */}
              <div className="absolute top-3 right-3">
                <MouseIndicator active={true} className="border-[#808080] bg-[#F0F0F4]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-[#3B7A57] bg-[#3B7A57]/10 px-1.5 py-0.5 rounded border border-[#3B7A57]/20">
                  {t.tools.card1Badge}
                </span>
                <h3 className="text-xl font-extrabold text-[#808080]">
                  {t.tools.card1Title}
                </h3>
              </div>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                {t.tools.card1Desc}
              </p>
            </div>
          </div>

          {/* CARD 2 (Top Right, 6-col): Markdown 知识整合主窗口 */}
          <div className="md:col-span-6 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* Visual: Markdown Editor & Knowledge Synthesis Window */}
            <div className="mb-6 p-4 bg-[#808080]/15 rounded-2xl border border-[#808080]/30 shadow-sm relative flex flex-col justify-between min-h-[190px]">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-2 border-b border-[#808080]/20 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#808080]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#808080]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#808080]/40" />
                  <span className="text-[10px] font-bold text-[#808080] ml-2">
                    {lang === 'zh' ? '知识整合主页面.md' : 'Knowledge_Master.md'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-[#2B5F75] bg-[#2B5F75]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> {lang === 'zh' ? '自定义 AI' : 'BYOK AI'}
                  </span>
                  <span className="text-[10px] font-bold text-[#996644] bg-[#996644]/10 px-1.5 py-0.5 rounded">
                    {lang === 'zh' ? '插件系统' : 'Plugins'}
                  </span>
                </div>
              </div>

              {/* Main Markdown Synthesis Pane */}
              <div className="my-2 bg-[#F0F0F4] border border-[#808080]/30 rounded-xl p-3 shadow-sm text-[10px] font-mono space-y-1.5 text-[#808080]">
                <div className="flex items-center justify-between text-[#808080]/60 text-[9px] border-b border-[#808080]/15 pb-1">
                  <span>{lang === 'zh' ? '双向链接: [[碎片捕获池]] → [[累牍大纲]]' : 'Bi-links: [[Inbox]] → [[Synthesis]]'}</span>
                  <span className="text-[#3B7A57] font-bold">{lang === 'zh' ? '实时输出' : 'Live Output'}</span>
                </div>
                <div className="font-bold text-[#808080]">
                  {lang === 'zh' ? '# 2026 知识体系重构方案' : '# 2026 Deep Knowledge Synthesis'}
                </div>
                <p className="text-[9px] text-[#808080]/80 line-clamp-2">
                  {lang === 'zh' 
                    ? '将白天在竖状窗记录的 14 条语音碎片，一键拖拽拼装成完整论述，调用本地 AI 提炼文眼金句。' 
                    : 'Transform 14 voice memos captured during the day into an articulate thesis with local AI prompt pipelines.'}
                </p>
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between text-[9px] font-mono text-[#808080]/70 pt-1">
                <span>{lang === 'zh' ? '纯文本 Markdown · 本地 SQLite 自动保存' : 'Markdown · Local SQLite Auto Save'}</span>
                <span className="text-[#2B5F75] font-bold">{lang === 'zh' ? '全功能免费解锁' : '100% Free'}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-[#2B5F75] bg-[#2B5F75]/10 px-1.5 py-0.5 rounded border border-[#2B5F75]/20">
                  {t.tools.card2Badge}
                </span>
                <h3 className="text-xl font-extrabold text-[#808080]">
                  {t.tools.card2Title}
                </h3>
              </div>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                {t.tools.card2Desc}
              </p>
            </div>
          </div>

          {/* CARD 3 (Bottom Left, 4-col): 双链大纲 (Outliner) */}
          <div className="md:col-span-4 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            {/* 3D Keycaps Control + K */}
            <div className="mb-8 min-h-[140px] flex items-center justify-center gap-3">
              <Keycap subLabel="^" label="control" size="lg" />
              <Keycap label="K" size="lg" />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-[#808080] mb-1.5">
                {lang === 'zh' ? '累牍双链大纲 (Outliner)' : 'Bi-Directional Outliner'}
              </h3>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                {lang === 'zh'
                  ? '将零散灵感碎叶快速拼装成大纲骨架，双向链接自由穿梭，自然长出丰茂长篇。'
                  : 'Weave scratch nodes into structured trees with bi-directional references.'}
              </p>
            </div>
          </div>

          {/* CARD 4 (Bottom Center, 4-col): 本地优先 Privacy First */}
          <div className="md:col-span-4 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            {/* Green Shield in Chinese Landscape Malachite Green */}
            <div className="mb-8 min-h-[140px] flex items-center justify-center bg-keyviz-grid rounded-2xl p-4 border border-[#808080]/20">
              <div className="w-16 h-18 relative flex items-center justify-center">
                <svg viewBox="0 0 24 28" fill="none" className="w-16 h-20 drop-shadow-md">
                  <path
                    d="M12 2L3 6V12.5C3 18.5 7 23.5 12 25.5C17 23.5 21 18.5 21 12.5V6L12 2Z"
                    stroke="#3B7A57"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#F0F0F4"
                  />
                  <path
                    d="M8.5 13.5L11 16L16 10"
                    stroke="#3B7A57"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-[#808080] mb-1.5">
                {lang === 'zh' ? '本地优先 (Privacy First)' : 'Local-First (Privacy First)'}
              </h3>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                {t.tools.card5Desc}
              </p>
            </div>
          </div>

          {/* CARD 5 (Bottom Right, 4-col): 自定义 AI 与插件系统 */}
          <div className="md:col-span-4 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            {/* Keyboard Layout in #808080 and #F0F0F4 */}
            <div className="mb-8 min-h-[140px] bg-[#808080]/15 p-3 rounded-2xl flex flex-col justify-center gap-1.5 border border-[#808080]/30 shadow-inner">
              <div className="flex gap-1">
                {['esc', 'F1', 'F2', 'F3', 'F4', 'F5'].map((k) => (
                  <span key={k} className="flex-1 py-1 text-center bg-[#F0F0F4] text-[9px] font-bold rounded text-[#808080] shadow-sm border border-[#808080]/40">
                    {k}
                  </span>
                ))}
              </div>
              <div className="flex gap-1">
                {['~', '1', '2', '3', '4', '5'].map((k) => (
                  <span key={k} className="flex-1 py-1 text-center bg-[#F0F0F4] text-[9px] font-bold rounded text-[#808080] shadow-sm border border-[#808080]/40">
                    {k}
                  </span>
                ))}
              </div>
              <div className="flex gap-1">
                {['tab', 'Q', 'W', 'E', 'R', 'T'].map((k) => (
                  <span key={k} className="flex-1 py-1 text-center bg-[#F0F0F4] text-[9px] font-bold rounded text-[#808080] shadow-sm border border-[#808080]/40">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-[#808080] mb-1.5">
                {lang === 'zh' ? '自定义 AI 与插件系统' : 'Custom AI & Plugin Hub'}
              </h3>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                {t.tools.card4Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
