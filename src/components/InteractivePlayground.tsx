import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, MicOff, Sparkles, Wand2, FileText, 
  Network, Copy, Check, Play, RefreshCw, Zap,
  Sliders, Layers, Volume2, ShieldCheck, ArrowRight, Palette
} from 'lucide-react';
import { THEMES } from '../data/mockData';
import { AppTheme } from '../types';

interface InteractivePlaygroundProps {
  onOpenSupporter: () => void;
}

export const InteractivePlayground: React.FC<InteractivePlaygroundProps> = ({ onOpenSupporter }) => {
  const [activeTab, setActiveTab] = useState<'capture' | 'outliner' | 'tools' | 'themes'>('capture');
  const [selectedTheme, setSelectedTheme] = useState<AppTheme>(THEMES[0]);
  
  // Voice capture simulation state
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('在灵感闪现的瞬间，按下 Alt+Space 直接说话即可自动转为结构化笔记。');
  const [audioWaves, setAudioWaves] = useState<number[]>([15, 30, 60, 45, 80, 50, 20]);
  const [notesList, setNotesList] = useState<Array<{ id: string; text: string; time: string; tag: string }>>([
    { id: '1', text: '讨论枝络离线 CRDT 协议设计，确保断网秒开与零冲突合并。', time: '10:24', tag: '#架构' },
    { id: '2', text: '在文章结尾引入瑞士军刀隐喻：小而美工具的高内聚管道。', time: '11:05', tag: '#金句' },
    { id: '3', text: '多端音频降噪插件优化，降低打字键盘杂音。', time: '11:40', tag: '#语音' }
  ]);
  const [quickInput, setQuickInput] = useState('');
  const [copiedNote, setCopiedNote] = useState(false);

  // Outliner branch selection
  const [selectedBranch, setSelectedBranch] = useState<number>(0);
  const branches = [
    {
      title: '01. 破除写作碎片化困境',
      desc: '为什么我们在 Notion、备忘录与录音笔之间来回横跳？',
      content: `### 01. 破除写作碎片化困境\n\n大多数创作者最痛苦的不是没有想法，而是**想法死在记录的途中**。\n\n- 打开臃肿的云端文档需要 5 秒\n- 录音后转成文字还需要另一款工具\n- 各种格式散落在五花八门的软件里\n\nGoote 的使命是：按下快捷键直接录入，哪怕是在离线高铁上，也能把思维碎片丝滑接驳。`
    },
    {
      title: '02. 枝络形态的双链演化',
      desc: '从单点灵感（叶）到逻辑骨架（枝）到完整长文（络）',
      content: `### 02. 枝络形态的双链演化\n\n写作不是从第一字线性写到最后一个字，而是**生长的过程**。\n\n1. **叶 (Leaf)**: 随时通过语音、OCR 或剪贴板捕获的微小直觉。\n2. **枝 (Branch)**: 逻辑卡片与大纲脉络的串联。\n3. **络 (Network)**: 最终长篇、书籍或策划案的完整输出。\n\n每一篇文档都在本地保持双向锚点，无需繁琐的文件夹层级管理。`
    },
    {
      title: '03. 瑞士军刀的缝合哲学',
      desc: '拒绝笨重大全套，只做顺手锋利的微型管道',
      content: `### 03. 瑞士军刀的缝合哲学\n\n我们不试图替代专业的排版软件或数据库系统。Goote 就像挂在钥匙扣上的那把瑞士军刀：\n\n- 需要螺丝刀时，它刚好在手边；\n- 需要小剪刀时，单手即可弹出；\n- 干净、简单、稳定，绝不在启动时弹窗要你升级会员。`
    }
  ];

  // Pocket tools simulation
  const [dirtyText, setDirtyText] = useState('今天 讨论了Goote(枝络) 的排版格式，例如:中英文 之间缺少空格,还有一些来自PDF的奇怪\n断行 以及“全角标点”混用？？');
  const [cleanResult, setCleanResult] = useState('');
  const [selectedAiModel, setSelectedAiModel] = useState('本地 Ollama / DeepSeek-R1');
  const [selectedPrompt, setSelectedPrompt] = useState('提炼文眼金句');
  const [aiOutput, setAiOutput] = useState('');
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  // Audio wave pulsation during recording
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setAudioWaves(Array.from({ length: 9 }, () => Math.floor(Math.random() * 70) + 15));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const handleToggleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTranscribedText('正在监听端侧麦克风... (请畅所欲言)');
      setTimeout(() => {
        setTranscribedText('“我认为创作的本质在于自由流动。任何繁琐的格式整理都应该被管道自动化，把时间留给深度思考。”');
        setIsRecording(false);
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const handleAddQuickNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setNotesList([{
      id: String(Date.now()),
      text: quickInput.trim(),
      time: timeStr,
      tag: '#瞬时捕获'
    }, ...notesList]);
    setQuickInput('');
  };

  const handleRunTypoCleaner = () => {
    // Clean spaces, convert punctuation, fix broken lines
    const cleaned = dirtyText
      .replace(/\r?\n/g, ' ')
      .replace(/([a-zA-Z0-9])([\u4e00-\u9fa5])/g, '$1 $2')
      .replace(/([\u4e00-\u9fa5])([a-zA-Z0-9])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .replace(/，/g, '，')
      .replace(/？+/g, '？')
      .replace(/:/g, '：');
    setCleanResult(`✨ 已完成盘古中英文空格校正、标点统一与断行修复：\n\n${cleaned}`);
  };

  const handleRunAiPipeline = () => {
    setIsAiGenerating(true);
    setAiOutput('正在调用端侧模型并执行自定义提示词链...');
    setTimeout(() => {
      if (selectedPrompt === '提炼文眼金句') {
        setAiOutput(`【${selectedAiModel} 提取结果】\n“创作的本质是思维的自由生长；好工具应当如无形流水，润物无声却从不迟疑。”\n(耗时: 180ms · 消耗 Token: 0 云端费用)`);
      } else if (selectedPrompt === '大纲逻辑重组') {
        setAiOutput(`【${selectedAiModel} 大纲重构建议】\n1. 痛点破局：传统文本工具的输入熵增\n2. 机制拆解：Local-First 与端侧 Whisper 闭环\n3. 范式转移：从软件仆人到个人思想外挂\n(耗时: 220ms · 零数据离开本地机器)`);
      } else {
        setAiOutput(`【${selectedAiModel} 延伸推演】\n如果将灵感捕获门槛降至零，创作者的日均构思产量可提升约 3.4 倍。关键在于录入后的第一道“枝络自动链接”，消除文件管理的心智包袱。`);
      }
      setIsAiGenerating(false);
    }, 900);
  };

  const handleCopySample = () => {
    navigator.clipboard.writeText(branches[selectedBranch].content);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2000);
  };

  return (
    <section id="playground" className="py-20 bg-[#090d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & domain intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <span>01. 交互体验舱</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>无需安装，在浏览器中测试 Goote 的手感</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            一把瑞士军刀，是如何缝合创作全链条的？
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            从电光石火的语音录入，到双链大纲整合，再到极速格式化输出与整套 UI 主题切换。亲手体验这些微小而确定的丝滑。
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#121824] border border-white/[0.08] rounded-xl max-w-2xl mx-auto mb-8 shadow-inner">
          <button
            onClick={() => setActiveTab('capture')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'capture'
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
            }`}
          >
            <Mic className="w-4 h-4 text-emerald-400" />
            <span>01 极速捕获 & 语音</span>
          </button>

          <button
            onClick={() => setActiveTab('outliner')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'outliner'
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
            }`}
          >
            <Network className="w-4 h-4 text-teal-400" />
            <span>02 枝络双链大纲</span>
          </button>

          <button
            onClick={() => setActiveTab('tools')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'tools'
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
            }`}
          >
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>03 瑞士军刀利器箱</span>
          </button>

          <button
            onClick={() => setActiveTab('themes')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'themes'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
            }`}
          >
            <Palette className="w-4 h-4 text-amber-400" />
            <span>04 UI 主题变装</span>
          </button>
        </div>

        {/* Global theme quick switcher strip right above the simulator window */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 mb-2 px-2 text-xs text-slate-400 max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">当前渲染主题：</span>
            <span className="font-semibold text-slate-200">{selectedTheme.name}</span>
            {selectedTheme.isPaid ? (
              <span className="text-amber-400/90 font-mono text-[11px] bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                大师赞助套件
              </span>
            ) : (
              <span className="text-emerald-400/90 font-mono text-[11px] bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">
                开源默认
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {THEMES.map(theme => (
              <button
                key={theme.id}
                onClick={() => setSelectedTheme(theme)}
                className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                  selectedTheme.id === theme.id ? 'scale-110 border-white shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: theme.previewColor }}
                title={`${theme.name} (${theme.isPaid ? '大师套件' : '免费'})`}
              />
            ))}
          </div>
        </div>

        {/* The Simulator Window */}
        <div 
          className={`max-w-5xl mx-auto rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${selectedTheme.bgClass} ${selectedTheme.borderClass} ${selectedTheme.accentGlow}`}
        >
          {/* Window Titlebar */}
          <div className="h-10 px-4 flex items-center justify-between border-b border-white/[0.08] bg-black/25">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400">Goote · 枝络工作台 (本地存储：~/Documents/Goote/)</span>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Local-first 已就绪</span>
              </span>
              <span className="hidden sm:inline">CRDT 零延迟</span>
            </div>
          </div>

          {/* Simulator Content Area */}
          <div className="p-4 sm:p-6 min-h-[460px]">

            {/* TAB 1: QUICK CAPTURE & VOICE */}
            {activeTab === 'capture' && (
              <div className="space-y-6">
                
                {/* Simulated Floating Raycast/Spotlight Capture Bar */}
                <div className="p-4 sm:p-5 rounded-xl border border-white/[0.1] bg-black/30 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium text-slate-200">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      <span>全局呼出框 (按下 Alt + Space 唤起)</span>
                    </span>
                    <span className="font-mono text-slate-500">端侧低功耗常驻 · 内存仅 18MB</span>
                  </div>

                  <form onSubmit={handleAddQuickNote} className="flex gap-2">
                    <input
                      type="text"
                      value={quickInput}
                      onChange={(e) => setQuickInput(e.target.value)}
                      placeholder="键入任意灵感、待办、或粘贴剪贴板内容后回车..."
                      className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/70 transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                    >
                      秒存入库
                    </button>
                  </form>

                  {/* Voice recording interactive trigger */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleToggleRecord}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          isRecording 
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/50 animate-pulse' 
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20'
                        }`}
                      >
                        {isRecording ? <MicOff className="w-3.5 h-3.5 text-rose-400" /> : <Mic className="w-3.5 h-3.5 text-emerald-400" />}
                        <span>{isRecording ? '点击结束语音录制' : '测试语音转文字 (点击说话)'}</span>
                      </button>

                      {isRecording && (
                        <div className="flex items-center gap-1 h-5">
                          {audioWaves.map((height, i) => (
                            <span
                              key={i}
                              className="w-1 bg-emerald-400 rounded-full transition-all duration-100"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                      <Volume2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>端侧 Whisper 引擎 · 离线可用无需上传隐私</span>
                    </div>
                  </div>

                  {/* Transcribed speech output */}
                  <div className="mt-3 p-3 rounded-lg bg-black/40 border border-white/[0.05] text-xs text-slate-300 font-mono">
                    <span className="text-slate-500 mr-2">[语音流转文字]:</span>
                    <span>{transcribedText}</span>
                  </div>
                </div>

                {/* Stored Recent Notes Queue */}
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold text-slate-300">瞬时捕获池（自动通过 CRDT 同步至各端）</span>
                    <span className="text-slate-500">共 {notesList.length} 条碎片</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {notesList.map((note) => (
                      <div 
                        key={note.id} 
                        className="p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                      >
                        <p className="text-xs text-slate-200 leading-relaxed mb-3">
                          {note.text}
                        </p>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/[0.05]">
                          <span className="text-emerald-400/80 font-mono">{note.tag}</span>
                          <span className="font-mono">{note.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: OUTLINER & SYNTHESIS */}
            {activeTab === 'outliner' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Left: Branching tree list */}
                <div className="md:col-span-4 space-y-2 border-r border-white/[0.08] pr-0 md:pr-4">
                  <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center justify-between">
                    <span>枝络结构树 (双链骨架)</span>
                    <span className="text-slate-500 font-mono text-[11px]">3 个主干</span>
                  </div>

                  {branches.map((b, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedBranch(idx)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedBranch === idx
                          ? 'border-emerald-500/40 bg-emerald-500/10 text-white shadow-sm'
                          : 'border-white/[0.06] bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="text-xs font-semibold text-slate-200 mb-1 flex items-center justify-between">
                        <span>{b.title}</span>
                        {selectedBranch === idx && <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1">{b.desc}</div>
                    </button>
                  ))}

                  <div className="p-3 rounded-lg border border-dashed border-white/[0.1] text-center mt-4">
                    <p className="text-[11px] text-slate-400">
                      💡 提示：在真实软件中，你可以通过拖拽任意灵感碎片直接化为大纲分支。
                    </p>
                  </div>
                </div>

                {/* Right: Markdown synthesis preview */}
                <div className="md:col-span-8 flex flex-col justify-between">
                  <div className="p-4 rounded-xl bg-black/35 border border-white/[0.08] min-h-[300px]">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs text-slate-400">
                      <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>实时 Markdown 整合视图</span>
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono">字数: 382 · 纯文本</span>
                        <button
                          onClick={handleCopySample}
                          className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 text-xs transition-colors cursor-pointer"
                        >
                          {copiedNote ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedNote ? '已复制' : '复制 Markdown'}</span>
                        </button>
                      </div>
                    </div>

                    <pre className="text-xs text-slate-200 whitespace-pre-wrap font-sans leading-relaxed">
                      {branches[selectedBranch].content}
                    </pre>
                  </div>

                  <div className="flex items-center justify-between pt-3 text-xs text-slate-500">
                    <span>支持导出为: Markdown · PDF · ePub · 微信一键排版</span>
                    <span className="text-emerald-400 font-mono">秒速自动保存 (本地 SQLite)</span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: SWISS KNIFE POCKET TOOLS */}
            {activeTab === 'tools' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Tool 1: Clean typo & format */}
                <div className="p-4 rounded-xl border border-white/[0.08] bg-black/25 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                        <Wand2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>利器 1：排版洗发水 (Typo Cleaner)</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">微型格式清洗工具</span>
                    </div>

                    <textarea
                      value={dirtyText}
                      onChange={(e) => setDirtyText(e.target.value)}
                      rows={3}
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg p-2.5 text-xs text-slate-300 focus:outline-none focus:border-amber-400/60 font-mono"
                    />

                    <div className="mt-2 flex justify-end">
                      <button
                        onClick={handleRunTypoCleaner}
                        className="px-3 py-1.5 text-xs font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>执行盘古清洗</span>
                      </button>
                    </div>

                    {cleanResult && (
                      <div className="mt-3 p-2.5 rounded bg-amber-500/5 border border-amber-500/20 text-xs text-slate-200 whitespace-pre-wrap font-sans">
                        {cleanResult}
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-white/[0.05]">
                    清理无规则空格、修补换行粘连，让从微信/PDF 复制的内容重获新生。
                  </p>
                </div>

                {/* Tool 2: Custom AI Prompt Pipelines (BYOK) */}
                <div className="p-4 rounded-xl border border-white/[0.08] bg-black/25 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>利器 2：自定义 AI 提示词管线 (BYOK)</span>
                      </span>
                      <span className="text-[11px] text-indigo-300 font-mono">不捆绑任何订阅</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">选择模型引擎：</label>
                        <select
                          value={selectedAiModel}
                          onChange={(e) => setSelectedAiModel(e.target.value)}
                          className="w-full bg-[#121824] border border-white/[0.1] rounded-lg px-2 py-1.5 text-xs text-slate-200 focus:outline-none"
                        >
                          <option value="本地 Ollama / DeepSeek-R1">本地 Ollama / DeepSeek-R1 (脱网)</option>
                          <option value="自备 OpenAI API Key">自备 OpenAI / GPT-4o (直连)</option>
                          <option value="自备 Claude 3.7 Sonnet">自备 Claude 3.7 Sonnet (直连)</option>
                          <option value="自备 Google Gemini 2.5">自备 Google Gemini 2.5 (直连)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mb-1">自定义提示词操作：</label>
                        <select
                          value={selectedPrompt}
                          onChange={(e) => setSelectedPrompt(e.target.value)}
                          className="w-full bg-[#121824] border border-white/[0.1] rounded-lg px-2 py-1.5 text-xs text-slate-200 focus:outline-none"
                        >
                          <option value="提炼文眼金句">提炼文眼金句</option>
                          <option value="大纲逻辑重组">大纲逻辑重组</option>
                          <option value="反思性思维推演">反思性思维推演</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handleRunAiPipeline}
                      disabled={isAiGenerating}
                      className="w-full py-2 text-xs font-medium text-slate-950 bg-indigo-300 hover:bg-indigo-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isAiGenerating ? 'AI 正在极速推演...' : '运行提示词管线'}</span>
                    </button>

                    {aiOutput && (
                      <div className="mt-3 p-2.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-100 whitespace-pre-wrap font-mono">
                        {aiOutput}
                      </div>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-3 pt-2 border-t border-white/[0.05]">
                    支持本地模型及任意兼容 OpenAI 规范的 API 供应商，零中间加价。
                  </p>
                </div>

              </div>
            )}

            {/* TAB 4: THEME ENGINE & CRAFTSMANSHIP (THE PAID USP) */}
            {activeTab === 'themes' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <div>
                    <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm mb-1">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>为什么 Goote 免费解锁全部功能，只售卖 UI 主题？</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                      我们坚信生产力工具的底层效能属于所有人，不应通过功能阉割逼迫用户升级。精心调教的字偶间距、色彩对比、手感音效属于艺术创造——通过购买大师 UI 主题套件，你直接资助了开源核心的持续维护。
                    </p>
                  </div>
                  <button
                    onClick={onOpenSupporter}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap transition-colors shadow-md cursor-pointer self-start sm:self-auto"
                  >
                    解锁全部主题 (¥39 终身赞助)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {THEMES.map((theme) => (
                    <div
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        selectedTheme.id === theme.id 
                          ? 'border-amber-400/80 bg-white/[0.08] shadow-lg scale-[1.02]' 
                          : 'border-white/[0.08] bg-black/20 hover:border-white/[0.2] hover:bg-white/[0.03]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-4 h-4 rounded-full border border-white/30"
                            style={{ backgroundColor: theme.previewColor }}
                          />
                          <span className="font-semibold text-xs text-slate-200">{theme.name}</span>
                        </div>
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                          theme.isPaid ? 'text-amber-300 bg-amber-400/10 border border-amber-400/30' : 'text-emerald-300 bg-emerald-400/10 border border-emerald-400/30'
                        }`}>
                          {theme.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {theme.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Simulator Footer Statusbar */}
          <div className="h-9 px-4 border-t border-white/[0.08] bg-black/35 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-3">
              <span>Goote Engine: Rust + Tauri</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">端侧 SQLite 3.45</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>数据 100% 存在本地</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
