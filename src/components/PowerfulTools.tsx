import React from 'react';
import { ShieldCheck, Star, GitFork, Heart, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';

export const PowerfulTools: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header (1:1 with Screenshot 3) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight">
            Powerful Tools
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-md leading-relaxed md:text-right">
            像瑞士军刀一样收纳每一种趁手工具。<br />
            从电光石火的录入，到深度整合输出的全链条写作。
          </p>
        </div>

        {/* 5-Card Bento Grid (1:1 with Screenshot 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* CARD 1 (Top Left, 7-col wide): Quick Capture & Global Hotkey */}
          <div className="md:col-span-7 bg-[#f8f9fa] border border-[#f0f0f2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* Dark Mockup Window Graphic */}
            <div className="mb-8 p-6 bg-[#2a2a2c] rounded-2xl border border-neutral-700/60 shadow-lg relative flex flex-col justify-center min-h-[170px]">
              <div className="space-y-3 w-4/5">
                <div className="h-7 bg-neutral-700/70 rounded-lg w-full flex items-center px-3">
                  <span className="text-[11px] font-mono text-neutral-300">Alt + Space 呼出快速速记...</span>
                </div>
                <div className="h-7 bg-neutral-700/50 rounded-lg w-3/4 flex items-center px-3">
                  <span className="text-[11px] font-mono text-neutral-400">正在通过端侧麦克风录入语音...</span>
                </div>
                <div className="h-7 bg-neutral-700/30 rounded-lg w-1/2" />
              </div>

              {/* Floating Mouse Indicators */}
              <div className="absolute top-5 left-5">
                <MouseIndicator active={true} className="border-neutral-600 bg-neutral-800" />
              </div>

              <div className="absolute right-6 bottom-4 flex items-center gap-3">
                <svg width="28" height="34" viewBox="0 0 24 30" fill="none" className="drop-shadow-lg">
                  <path
                    d="M2 2L10.5 24L14 15.5L22.5 12L2 2Z"
                    fill="#000000"
                    stroke="#ffffff"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="bg-[#1f1f21] p-3 rounded-xl border border-neutral-700 shadow-md">
                  <MouseIndicator active={true} className="border-neutral-500 bg-neutral-900" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-black mb-1.5">
                快速录入与全局呼出 (Quick Capture)
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                无需打开笨重编辑器。全局热键一秒唤醒，语音速记离线转文字，瞬间捕获转瞬即逝的灵感。
              </p>
            </div>
          </div>

          {/* CARD 2 (Top Right, 5-col wide): Open Source with Coin */}
          <div className="md:col-span-5 bg-[#f8f9fa] border border-[#f0f0f2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
            
            {/* GitHub Header Mockup + Golden 3D Coin Badge */}
            <div className="mb-8 p-4 bg-white rounded-2xl border border-neutral-200 shadow-sm relative min-h-[170px] flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200 text-[10px] font-semibold flex items-center gap-1">
                    <Heart className="w-2.5 h-2.5 fill-current" /> Sponsor
                  </span>
                  <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 border border-neutral-200 text-[10px] font-semibold flex items-center gap-1">
                    <GitFork className="w-2.5 h-2.5" /> Fork 1.1k
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-semibold flex items-center gap-1">
                    <Star className="w-2.5 h-2.5 fill-current" /> Starred 14.2k
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] font-mono text-neutral-500">
                <div className="flex justify-between">
                  <span>goote-core / local-crdt</span>
                  <span className="text-neutral-400">yesterday</span>
                </div>
                <div className="flex justify-between">
                  <span>whisper-engine / offline</span>
                  <span className="text-neutral-400">3 days ago</span>
                </div>
              </div>

              {/* 3D Golden Mascot Coin Graphic (1:1 with Screenshot 3) */}
              <div className="absolute -top-3 -right-2 w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-1 shadow-xl transform rotate-12 hover:rotate-0 transition-transform">
                <div className="w-full h-full rounded-full border-2 border-amber-100 flex items-center justify-center bg-gradient-to-br from-amber-300 to-amber-500 text-white font-black text-xl shadow-inner">
                  ★
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-black mb-1.5">
                完全开源 (Open Source)
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                全功能无保留开放，GPL 协议驱动。杜绝任何形式的云厂商格式锁死，人人皆可审查与共建。
              </p>
            </div>
          </div>

          {/* CARD 3 (Bottom Left, 4-col): Branching Outliner Keycaps */}
          <div className="md:col-span-4 bg-[#f8f9fa] border border-[#f0f0f2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            {/* 3D Keycaps Control + K */}
            <div className="mb-8 min-h-[140px] flex items-center justify-center gap-3">
              <Keycap subLabel="^" label="control" size="lg" />
              <Keycap label="K" size="lg" />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-black mb-1.5">
                枝络双链大纲 (Outliner)
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                将零散灵感碎叶快速拼装成大纲骨架，双向链接自由穿梭，自然长出丰茂长篇。
              </p>
            </div>
          </div>

          {/* CARD 4 (Bottom Center, 4-col): Privacy First Green Shield */}
          <div className="md:col-span-4 bg-[#f8f9fa] border border-[#f0f0f2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            {/* Green Glowing Shield Graphic (1:1 with Screenshot 3) */}
            <div className="mb-8 min-h-[140px] flex items-center justify-center bg-keyviz-dots rounded-2xl p-4">
              <div className="w-16 h-18 relative flex items-center justify-center">
                <svg viewBox="0 0 24 28" fill="none" className="w-16 h-20 text-emerald-500 drop-shadow-md">
                  <path
                    d="M12 2L3 6V12.5C3 18.5 7 23.5 12 25.5C17 23.5 21 18.5 21 12.5V6L12 2Z"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="white"
                  />
                  <path
                    d="M8.5 13.5L11 16L16 10"
                    stroke="#10b981"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-black mb-1.5">
                本地优先 (Privacy First)
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                数据永远存放在您本地硬盘（SQLite + Markdown），端侧脱网运行，零上传风险。
              </p>
            </div>
          </div>

          {/* CARD 5 (Bottom Right, 4-col): Keyboard Render */}
          <div className="md:col-span-4 bg-[#f8f9fa] border border-[#f0f0f2] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            {/* Realistic Physical Keyboard Render */}
            <div className="mb-8 min-h-[140px] bg-neutral-200/70 p-3 rounded-2xl flex flex-col justify-center gap-1.5 border border-neutral-300 shadow-inner">
              <div className="flex gap-1">
                {['esc', 'F1', 'F2', 'F3', 'F4', 'F5'].map((k) => (
                  <span key={k} className="flex-1 py-1 text-center bg-white text-[9px] font-bold rounded text-neutral-600 shadow-sm border border-neutral-300">
                    {k}
                  </span>
                ))}
              </div>
              <div className="flex gap-1">
                {['~', '1', '2', '3', '4', '5'].map((k) => (
                  <span key={k} className="flex-1 py-1 text-center bg-white text-[9px] font-bold rounded text-neutral-700 shadow-sm border border-neutral-300">
                    {k}
                  </span>
                ))}
              </div>
              <div className="flex gap-1">
                {['tab', 'Q', 'W', 'E', 'R', 'T'].map((k) => (
                  <span key={k} className="flex-1 py-1 text-center bg-white text-[9px] font-bold rounded text-neutral-700 shadow-sm border border-neutral-300">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-black mb-1.5">
                自定义 AI 与插件系统
              </h3>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                自带 API Key 直连任意大模型或本地 Ollama，200+ 社区插件打造专属工作流。
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
