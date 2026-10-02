import React, { useState } from 'react';
import { MousePointer, Hash, Feather, Square, Type, Mic, Check, Sparkles, Zap } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';

export const WhyGoote: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<'pointer' | 'hash' | 'pen' | 'box' | 'text'>('pointer');
  const [centerPressed, setCenterPressed] = useState(false);

  const handleCenterClick = () => {
    setCenterPressed(true);
    setTimeout(() => setCenterPressed(false), 200);
  };

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtext, 3D Keycap with Badge '2' and Mouse Indicator (1:1 with Screenshot 2) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-black tracking-tight leading-tight">
              Why Goote?
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
              不再在五花八门的单点工具间横跳。Goote 缝合了毫秒级录入、语音速记、双链大纲与本地优先存储，让你全神贯注于思考与创作。
            </p>

            {/* Visual artifacts: Mouse Indicator & 3D Keycap with count badge */}
            <div className="pt-4 flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <MouseIndicator active={true} className="w-6 h-10 border-neutral-700 bg-neutral-800" />
                <span className="text-[11px] font-mono text-neutral-400">全局低延时</span>
              </div>

              {/* 3D Keycap with count badge 2 exactly like Screenshot 2 */}
              <div className="relative">
                <Keycap
                  subLabel="⌫"
                  label="del"
                  size="xl"
                  badge={2}
                  className="shadow-xl"
                  onClick={handleCenterClick}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Dark Rounded Canvas with White Squircle & Tool Dock (1:1 with Screenshot 2) */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#262628] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 shadow-2xl flex flex-col items-center justify-between min-h-[380px] sm:min-h-[460px] border border-neutral-800">
              
              {/* Center White Squircle Keycap / Canvas Display */}
              <div className="flex-1 flex items-center justify-center w-full relative">
                <button
                  type="button"
                  onClick={handleCenterClick}
                  className={`w-36 h-36 sm:w-44 sm:h-44 rounded-[28px] sm:rounded-[34px] bg-white border-2 border-neutral-900 border-b-[8px] border-b-neutral-900 shadow-2xl flex flex-col items-center justify-center p-4 transition-all duration-150 cursor-pointer ${
                    centerPressed ? 'translate-y-2 border-b-[3px] shadow-sm' : 'hover:-translate-y-1'
                  }`}
                >
                  {selectedTool === 'pointer' && (
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                        <Zap className="w-5 h-5 fill-current" />
                      </div>
                      <span className="font-black text-lg text-neutral-900 block font-mono">Alt + Space</span>
                      <span className="text-[11px] font-semibold text-neutral-400">全局极速录入</span>
                    </div>
                  )}

                  {selectedTool === 'hash' && (
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-600 flex items-center justify-center mx-auto mb-2">
                        <Hash className="w-5 h-5" />
                      </div>
                      <span className="font-black text-base text-neutral-900 block font-mono"># 枝络拓扑</span>
                      <span className="text-[11px] font-semibold text-neutral-400">双链结构整理</span>
                    </div>
                  )}

                  {selectedTool === 'pen' && (
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-2">
                        <Feather className="w-5 h-5" />
                      </div>
                      <span className="font-black text-base text-neutral-900 block">沉浸写作</span>
                      <span className="text-[11px] font-semibold text-neutral-400">纯净 Markdown</span>
                    </div>
                  )}

                  {selectedTool === 'box' && (
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center mx-auto mb-2">
                        <Square className="w-5 h-5" />
                      </div>
                      <span className="font-black text-base text-neutral-900 block">本地优先</span>
                      <span className="text-[11px] font-semibold text-neutral-400">SQLite + 本地盘</span>
                    </div>
                  )}

                  {selectedTool === 'text' && (
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-600 flex items-center justify-center mx-auto mb-2">
                        <Type className="w-5 h-5" />
                      </div>
                      <span className="font-black text-base text-neutral-900 block">排版清洗</span>
                      <span className="text-[11px] font-semibold text-neutral-400">中英文盘古规整</span>
                    </div>
                  )}
                </button>

                {/* Mouse Cursor Pointer Graphic (matches Screenshot 2 position) */}
                <div className="absolute right-[12%] sm:right-[18%] bottom-[20%] pointer-events-none drop-shadow-xl animate-pulse">
                  <svg width="34" height="42" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 2L10.5 24L14 15.5L22.5 12L2 2Z"
                      fill="#000000"
                      stroke="#ffffff"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Dock Toolbar (exact match with Screenshot 2) */}
              <div className="mt-6 bg-[#323236] border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-3 sm:gap-5 shadow-inner">
                <button
                  type="button"
                  onClick={() => setSelectedTool('pointer')}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    selectedTool === 'pointer' ? 'bg-[#007aff] text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="选择工具"
                >
                  <MousePointer className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTool('hash')}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    selectedTool === 'hash' ? 'bg-[#007aff] text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="大纲双链"
                >
                  <Hash className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTool('pen')}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    selectedTool === 'pen' ? 'bg-[#007aff] text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="沉浸笔触"
                >
                  <Feather className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTool('box')}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    selectedTool === 'box' ? 'bg-[#007aff] text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="本地卡片"
                >
                  <Square className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTool('text')}
                  className={`p-2 rounded-xl transition-all cursor-pointer ${
                    selectedTool === 'text' ? 'bg-[#007aff] text-white shadow-md' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="格式文本"
                >
                  <Type className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
