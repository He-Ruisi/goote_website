import React from 'react';
import { Mic, Database, Cpu, Puzzle, HardDrive, Smartphone, Sparkles, Zap, Lock } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <span>02. 核心架构与哲学</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>缝合小而美，拒绝大而无当</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            每一件工具都锋利趁手，组合起来便是一座创作工坊。
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Goote 不发明臃肿的专属私有格式，也不强迫你改变已有的书写习惯。它只做一件事：用最高的执行效率，打通从灵感诞生到成稿发布的每一个物理断点。
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Fast Capture & Voice (col-span-7) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#101622] hover:border-emerald-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Mic className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-slate-500">毫秒级全局呼出</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">01. 电光石火的极速录入</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                无论在写代码、浏览网页还是开会，全局快捷键瞬间弹出。内置端侧优化的 Whisper 语音引擎，中英文混说高精度实时转写，零等待直接落入碎片捕获池。
              </p>
            </div>

            {/* Visual Micro-Interface */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-white/[0.05]">
                <span>快捷键: Alt + Space</span>
                <span className="text-emerald-400">唤醒延时: 12ms</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-400">正在收音:</span>
                <span>“将大纲第二节的逻辑展开，补充 local-first 原理。”</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <span>自动分类标签</span>
                <span className="text-slate-400">→ #提纲 #深度写作</span>
              </div>
            </div>
          </div>

          {/* Card 2: Local-First & Multi-platform (col-span-5) */}
          <div id="localfirst" className="md:col-span-5 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#101622] hover:border-emerald-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <HardDrive className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-teal-400">数据自主所有权</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">02. 真正的本地优先 (Local-First)</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                数据永远存在你自己的硬盘上（通用 SQLite + 标准纯文本 Markdown 树）。支持局域网 P2P 点对点加密同步与 WebDAV，零云厂商锁定，即便拔掉网线也能顺畅写作十年。
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-teal-400" />
                <span>端到端 CRDT 无缝合并</span>
              </div>
              <span className="text-slate-500">零云端依赖</span>
            </div>
          </div>

          {/* Card 3: Custom AI BYOK (col-span-5) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#101622] hover:border-indigo-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-indigo-400">BYOK 零差价</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">03. 自定义 AI 与算力自主</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                不搞任何按月翻倍的 AI 专有捆绑订阅。直接填入你自己的 DeepSeek、OpenAI、Claude、Gemini API Key，或直接连接本地已运行的 Ollama 离线大模型。随心编排专属 Prompt 管线。
              </p>
            </div>

            <div className="space-y-1.5 p-3 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono">
              <div className="flex items-center justify-between text-slate-400">
                <span>支持协议：</span>
                <span className="text-indigo-300">OpenAI / Ollama / Anthropic</span>
              </div>
              <div className="flex items-center justify-between text-slate-500">
                <span>数据政策：</span>
                <span className="text-slate-300">绝不用作模型训练</span>
              </div>
            </div>
          </div>

          {/* Card 4: Extensible Plugins & Swiss Utilities (col-span-7) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#101622] hover:border-amber-500/30 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Puzzle className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-amber-400">200+ 社区插件</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">04. 模块化插件沙箱与瑞士工具箱</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                无论是思维脑图一键生成、排版格式清洗、OCR 图片字提取、LaTeX 公式渲染，还是微信公众号与知乎排版输出，通过轻量安全沙箱随心装卸，绝不拖累核心运行速度。
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">
                <span className="text-slate-400 block mb-0.5 font-mono">OCR 识图</span>
                <span className="text-emerald-400 font-semibold text-[11px]">离线秒提取</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">
                <span className="text-slate-400 block mb-0.5 font-mono">排版洗发水</span>
                <span className="text-amber-400 font-semibold text-[11px]">中英文规整</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">
                <span className="text-slate-400 block mb-0.5 font-mono">双链枝络</span>
                <span className="text-teal-400 font-semibold text-[11px]">放射状脑图</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/[0.06] text-center">
                <span className="text-slate-400 block mb-0.5 font-mono">媒体发布</span>
                <span className="text-indigo-400 font-semibold text-[11px]">一键公众号</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
