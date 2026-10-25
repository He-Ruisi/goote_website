import React from 'react';
import { Mic, FileText, Sparkles, SlidersHorizontal, ArrowRight, ShieldCheck } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';

export const PowerfulTools: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header in #808080 */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#808080] tracking-tight">
            Powerful Tools
          </h2>
          <p className="text-[#808080]/85 text-xs sm:text-sm max-w-md leading-relaxed md:text-right font-medium">
            双窗口协同架构：左手极速碎片录入，右手深度知识整合。<br />
            全功能完全免费，本地优先驱动。
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
                      竖状录入窗
                    </span>
                    <span className="text-[9px] font-mono text-[#808080]/70 bg-[#808080]/10 px-1 rounded">自动贴边隐藏</span>
                  </div>

                  {/* Simulated Voice wave & input field */}
                  <div className="space-y-2">
                    <div className="bg-[#808080]/10 rounded-lg p-2 border border-[#808080]/20">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-[#3B7A57] flex items-center gap-1">
                          <Mic className="w-3 h-3 text-[#3B7A57]" />
                          语音正在聆听...
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
                        “梳理累牍核心概念：叶为碎片，枝为大纲，络为长卷。”
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[9px] text-[#808080]/70">
                      <span className="bg-[#3B7A57]/10 text-[#3B7A57] px-1 py-0.5 rounded font-mono font-bold">#灵感</span>
                      <span className="bg-[#808080]/10 text-[#808080] px-1 py-0.5 rounded font-mono">毫秒级入库</span>
                    </div>
                  </div>

                  <div className="mt-2 pt-1.5 border-t border-[#808080]/15 flex items-center justify-between text-[9px] font-mono text-[#808080]/70">
                    <span>快捷键 Alt + Space</span>
                    <span className="text-[#3B7A57] font-bold">已同步</span>
                  </div>
                </div>

                {/* Right hint graphic */}
                <div className="flex-1 hidden sm:flex flex-col items-start justify-center text-left space-y-2 pl-2">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#3B7A57]/15 text-[#3B7A57] text-[10px] font-bold">
                    <Mic className="w-3 h-3" />
                    <span>随时呼出 · 离线语音</span>
                  </div>
                  <p className="text-[11px] text-[#808080] font-medium leading-relaxed">
                    光标随时就绪，说完即自动打标并隐藏，完全不打断当前工作流。
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
                  双窗口之一
                </span>
                <h3 className="text-xl font-extrabold text-[#808080]">
                  自动隐藏竖状速记窗
                </h3>
              </div>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                桌面边缘常驻、自动贴靠隐藏。专为高频碎片化收集打造，集成毫秒级离线语音速记，随想随说，一瞬归拢入库。
              </p>
            </div>
          </div>

          {/* CARD 2 (Top Right, 6-col): Markdown 知识整合主窗口 (产出输出 + 整合知识 + 自定义AI与插件) */}
          <div className="md:col-span-6 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* Visual: Markdown Editor & Knowledge Synthesis Window */}
            <div className="mb-6 p-4 bg-[#808080]/15 rounded-2xl border border-[#808080]/30 shadow-sm relative flex flex-col justify-between min-h-[190px]">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-2 border-b border-[#808080]/20 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#808080]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#808080]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#808080]/40" />
                  <span className="text-[10px] font-bold text-[#808080] ml-2">知识整合主页面.md</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-[#2B5F75] bg-[#2B5F75]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> 自定义 AI
                  </span>
                  <span className="text-[10px] font-bold text-[#996644] bg-[#996644]/10 px-1.5 py-0.5 rounded">
                    插件系统
                  </span>
                </div>
              </div>

              {/* Main Markdown Synthesis Pane */}
              <div className="my-2 bg-[#F0F0F4] border border-[#808080]/30 rounded-xl p-3 shadow-sm text-[10px] font-mono space-y-1.5 text-[#808080]">
                <div className="flex items-center justify-between text-[#808080]/60 text-[9px] border-b border-[#808080]/15 pb-1">
                  <span>双向链接: [[碎片捕获池]] → [[累牍大纲]]</span>
                  <span className="text-[#3B7A57] font-bold">实时输出</span>
                </div>
                <div className="font-bold text-[#808080]"># 2026 知识体系重构方案</div>
                <p className="text-[9px] text-[#808080]/80 line-clamp-2">
                  将白天在竖状窗记录的 14 条语音碎片，一键拖拽拼装成完整论述，调用本地 AI 提炼文眼金句。
                </p>
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between text-[9px] font-mono text-[#808080]/70 pt-1">
                <span>纯文本 Markdown · 本地 SQLite 自动保存</span>
                <span className="text-[#2B5F75] font-bold">全功能免费解锁</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono font-bold text-[#2B5F75] bg-[#2B5F75]/10 px-1.5 py-0.5 rounded border border-[#2B5F75]/20">
                  双窗口之二
                </span>
                <h3 className="text-xl font-extrabold text-[#808080]">
                  Markdown 知识整合主窗口
                </h3>
              </div>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                用于沉浸产出、知识整合与长篇输出。碎片化内容一键接驳进大纲骨架，支持直连自定义 AI 提示词管线与丰富的扩展插件系统。
              </p>
            </div>
          </div>

          {/* CARD 3 (Bottom Left, 4-col): 枝络双链大纲 (Keep as is) */}
          <div className="md:col-span-4 bg-[#F0F0F4] border-2 border-[#808080]/30 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            {/* 3D Keycaps Control + K */}
            <div className="mb-8 min-h-[140px] flex items-center justify-center gap-3">
              <Keycap subLabel="^" label="control" size="lg" />
              <Keycap label="K" size="lg" />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-[#808080] mb-1.5">
                累牍双链大纲 (Outliner)
              </h3>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                将零散灵感碎叶快速拼装成大纲骨架，双向链接自由穿梭，自然长出丰茂长篇。
              </p>
            </div>
          </div>

          {/* CARD 4 (Bottom Center, 4-col): 本地优先 Privacy First (Keep as is) */}
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
                本地优先 (Privacy First)
              </h3>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                数据永远存放在您本地硬盘（SQLite + Markdown），端侧脱网运行，零上传风险。
              </p>
            </div>
          </div>

          {/* CARD 5 (Bottom Right, 4-col): 自定义 AI 与插件系统 (Keep as is) */}
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
                自定义 AI 与插件系统
              </h3>
              <p className="text-[#808080]/85 text-xs sm:text-sm leading-relaxed font-medium">
                自带 API Key 直连任意大模型或本地 Ollama，200+ 社区插件随心扩展。
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
