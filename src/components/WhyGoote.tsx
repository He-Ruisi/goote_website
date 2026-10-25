import React, { useState } from 'react';
import { MousePointer, Hash, Feather, Square, Type, Zap, Mic, FileText, Sparkles, HardDrive, Image as ImageIcon } from 'lucide-react';
import { Keycap, MouseIndicator } from './Keycap';

export interface FeatureScreenItem {
  id: string;
  label: string;
  tooltip: string;
  icon: React.ReactNode;
  imageSrc?: string;
  badge: string;
  title: string;
  desc: string;
  hotkey?: string;
}

export const WhyGoote: React.FC = () => {
  // 5 个功能标签页，直接支持替换为用户应用的实际截图 (imageSrc)
  const SCREEN_TABS: FeatureScreenItem[] = [
    {
      id: 'pointer',
      label: '录入',
      tooltip: '自动隐藏的竖状录入窗 (Alt + Space 快速语音)',
      icon: <MousePointer className="w-4 h-4" />,
      // 预先接入用户上传的截图 asset 作为实际效果示范
      imageSrc: '/assets/aistudio/image_13af7cb9.png',
      badge: '双窗口 · 极速录入',
      title: '自动隐藏的竖状速记窗',
      desc: 'Alt + Space 全局随手唤起，边缘自动贴靠隐藏。支持低延迟语音流式转写，随时随地捕获碎片灵感。',
      hotkey: 'Alt + Space'
    },
    {
      id: 'hash',
      label: '大纲',
      tooltip: '累牍双链拓扑与大纲树',
      icon: <Hash className="w-4 h-4" />,
      badge: '碎片重构 · 双链拓扑',
      title: '累牍大纲与知识串联',
      desc: '将离散随记的灵感碎叶快速拼装成大纲脉络，双向链接自由穿梭，让思考自然生长。',
      hotkey: 'Ctrl + K'
    },
    {
      id: 'pen',
      label: '主窗',
      tooltip: 'Markdown 知识整合与沉浸写作主窗口',
      icon: <Feather className="w-4 h-4" />,
      badge: '双窗口 · 整合输出',
      title: 'Markdown 知识整合主窗口',
      desc: '专为深度写作与长文输出打造。纯文本 Markdown 树形管理，多端无缝协同。',
      hotkey: 'Alt + M'
    },
    {
      id: 'box',
      label: '本地',
      tooltip: '本地优先存储 (Local-First SQLite & 纯文本)',
      icon: <Square className="w-4 h-4" />,
      badge: 'Local-First · 私钥自持',
      title: '绝对的数据自主所有权',
      desc: '数据 100% 存在本地 SQLite 与纯文本目录，零云端强制锁定，即便拔掉网线也能稳定使用十年。',
      hotkey: '端侧加密'
    },
    {
      id: 'text',
      label: '利器',
      tooltip: '自定义 AI 提示词管线与瑞士军刀微工具',
      icon: <Type className="w-4 h-4" />,
      badge: '自由算力 · 扩展插件',
      title: '自定义 AI 辅助与格式利器',
      desc: 'BYOK 自备密钥直连 OpenAI / DeepSeek 或脱网调用本地 Ollama，内置盘古排版洗发水与插件沙箱。',
      hotkey: 'BYOK 零差价'
    }
  ];

  const [activeTabId, setActiveTabId] = useState<string>('pointer');
  const [centerPressed, setCenterPressed] = useState(false);

  const currentTab = SCREEN_TABS.find(t => t.id === activeTabId) || SCREEN_TABS[0];

  const handleCenterClick = () => {
    setCenterPressed(true);
    setTimeout(() => setCenterPressed(false), 200);
  };

  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Subtext, 3D Keycap with Badge '2' and Mouse Indicator */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-black text-[#808080] tracking-tight leading-tight">
              Why Neinote?
            </h2>

            <p className="text-[#808080]/90 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              这是一个<strong>本地优先</strong>的碎片化收集、整合与 AI 辅助输入输出软件。
            </p>

            <div className="space-y-3 pt-1 text-xs text-[#808080] font-medium leading-relaxed">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#3B7A57]/20 text-[#3B7A57] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span><strong>双窗口协同</strong>：一个自动隐藏呼出的竖状窗口专用于随手语音录入；一个 Markdown 知识整合主窗口专用于沉浸产出。</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#2B5F75]/20 text-[#2B5F75] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span><strong>全功能完全免费</strong>：所有生产力功能无任何隐形限制，仅靠精心调教的 UI 主题与机械音效包获取支持。</span>
              </div>
            </div>

            {/* Visual artifacts: Mouse Indicator & 3D Keycap with count badge */}
            <div className="pt-4 flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <MouseIndicator active={true} className="w-6 h-10 border-[#808080] bg-[#808080]/20" />
                <span className="text-[11px] font-mono font-bold text-[#808080]">全局低延时</span>
              </div>

              {/* 3D Keycap with count badge 2 in #808080 */}
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

          {/* Right Column: Screen Frame with Screenshot & Fallback Preview */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#6e6e6e] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 shadow-xl flex flex-col items-center justify-between min-h-[420px] sm:min-h-[500px] border-2 border-[#808080]">
              
              {/* Feature Title Badge on top of screen */}
              <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#F0F0F4]/20 text-xs font-mono text-[#F0F0F4]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F0F0F4]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F0F0F4]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F0F0F4]/40" />
                  <span className="font-bold ml-1 text-[#F0F0F4]/90">{currentTab.badge}</span>
                </div>
                {currentTab.hotkey && (
                  <span className="bg-[#F0F0F4]/20 px-2 py-0.5 rounded text-[11px] font-bold text-white">
                    {currentTab.hotkey}
                  </span>
                )}
              </div>

              {/* Center Display: Renders the ACTUAL Screenshot if available, or High-Fidelity Mockup */}
              <div className="flex-1 flex flex-col items-center justify-center w-full relative py-2">
                
                {currentTab.imageSrc ? (
                  /* 实际应用截图呈现区 (支持用户随时替换图片) */
                  <div 
                    onClick={handleCenterClick}
                    className={`relative max-w-full max-h-[300px] sm:max-h-[340px] rounded-[24px] sm:rounded-[28px] overflow-hidden border-2 border-[#808080] shadow-2xl bg-[#F0F0F4] transition-all duration-150 cursor-pointer ${
                      centerPressed ? 'scale-95' : 'hover:scale-[1.01]'
                    }`}
                  >
                    <img 
                      src={currentTab.imageSrc} 
                      alt={currentTab.title}
                      className="w-full h-auto object-contain max-h-[300px] sm:max-h-[340px] select-none block"
                      onError={(e) => {
                        // Fallback if image path fails to load
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    
                    {/* Subtle screenshot badge */}
                    <div className="absolute bottom-2 right-2 bg-[#808080]/80 backdrop-blur-sm text-[#F0F0F4] text-[9px] font-mono px-2 py-0.5 rounded border border-[#F0F0F4]/30 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3" />
                      <span>应用实际截图</span>
                    </div>
                  </div>
                ) : (
                  /* 当该标签尚未传入截图时，展示高保真拟物卡片 */
                  <button
                    type="button"
                    onClick={handleCenterClick}
                    className={`w-48 h-48 sm:w-56 sm:h-56 rounded-[28px] sm:rounded-[34px] bg-[#F0F0F4] border-2 border-[#808080] border-b-[8px] border-b-[#808080] shadow-2xl flex flex-col items-center justify-center p-4 transition-all duration-150 cursor-pointer ${
                      centerPressed ? 'translate-y-2 border-b-[3px] shadow-sm' : 'hover:-translate-y-1'
                    }`}
                  >
                    {activeTabId === 'hash' && (
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#2B5F75]/15 text-[#2B5F75] flex items-center justify-center mx-auto mb-2">
                          <Hash className="w-6 h-6" />
                        </div>
                        <span className="font-black text-lg text-[#808080] block font-mono"># 累牍拓扑</span>
                        <span className="text-[11px] font-bold text-[#808080]/80">双链结构整理</span>
                      </div>
                    )}

                    {activeTabId === 'pen' && (
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#996644]/15 text-[#996644] flex items-center justify-center mx-auto mb-2">
                          <Feather className="w-6 h-6" />
                        </div>
                        <span className="font-black text-lg text-[#808080] block">知识整合主窗</span>
                        <span className="text-[11px] font-bold text-[#808080]/80">沉浸式 Markdown</span>
                      </div>
                    )}

                    {activeTabId === 'box' && (
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#3B7A57]/15 text-[#3B7A57] flex items-center justify-center mx-auto mb-2">
                          <Square className="w-6 h-6" />
                        </div>
                        <span className="font-black text-lg text-[#808080] block">本地优先</span>
                        <span className="text-[11px] font-bold text-[#808080]/80">SQLite + 离线盘</span>
                      </div>
                    )}

                    {activeTabId === 'text' && (
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-[#8C533C]/15 text-[#8C533C] flex items-center justify-center mx-auto mb-2">
                          <Type className="w-6 h-6" />
                        </div>
                        <span className="font-black text-lg text-[#808080] block">自定义 AI</span>
                        <span className="text-[11px] font-bold text-[#808080]/80">BYOK 提示词与插件</span>
                      </div>
                    )}

                    <span className="mt-3 text-[9px] font-mono text-[#808080]/60 bg-[#808080]/10 px-2 py-0.5 rounded">
                      可直接替换为实际截图
                    </span>
                  </button>
                )}

                {/* Mouse Cursor Pointer Graphic */}
                <div className="absolute right-[6%] sm:right-[10%] bottom-[12%] pointer-events-none drop-shadow-xl animate-pulse">
                  <svg width="34" height="42" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 2L10.5 24L14 15.5L22.5 12L2 2Z"
                      fill="#808080"
                      stroke="#F0F0F4"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Explanatory Caption for Active Screen */}
              <div className="text-center px-4 my-2">
                <span className="text-xs font-bold text-[#F0F0F4] block mb-0.5">{currentTab.title}</span>
                <p className="text-[11px] text-[#F0F0F4]/80 max-w-md mx-auto line-clamp-1">{currentTab.desc}</p>
              </div>

              {/* Bottom Dock Toolbar (每点击一个按钮切换对应应用截图) */}
              <div className="mt-4 bg-[#808080] border border-[#F0F0F4]/30 rounded-2xl px-3 py-1.5 flex items-center gap-2 sm:gap-4 shadow-inner">
                {SCREEN_TABS.map((tab) => {
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-2.5 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold ${
                        isActive 
                          ? 'bg-[#3B7A57] text-[#F0F0F4] shadow-md scale-105' 
                          : 'text-[#F0F0F4]/75 hover:text-white hover:bg-[#F0F0F4]/10'
                      }`}
                      title={tab.tooltip}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
