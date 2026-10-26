import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Layers, 
  Mic, 
  Cpu, 
  GitBranch, 
  ScrollText, 
  Compass, 
  Heart, 
  ArrowDownToLine, 
  BookOpen, 
  Clock, 
  Terminal, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

interface AboutViewProps {
  onBack: () => void;
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBack,
  onOpenDownload,
  onOpenSupporter,
}) => {
  const { lang } = useTranslation();
  const [activeTab, setActiveTab] = useState<'refined' | 'original'>('refined');

  // Inspirations mentioned by the author in alphabetical order
  const inspirations = [
    { name: 'Boogunote', desc: '树状扁平笔记先驱' },
    { name: 'Notion', desc: '块级编辑与自由排版' },
    { name: 'Obsidian', desc: '本地优先与双链网络' },
    { name: 'Roam Research', desc: '网状互联与无边界思考' },
    { name: 'Sayit', desc: '轻盈即时的语音转写' },
    { name: 'TreeSheets', desc: '分层网格与思维缩放' },
    { name: 'WDTP', desc: '深度写作与专注环境' },
  ];

  return (
    <article className="min-h-screen bg-keyviz-grid text-[#808080] selection:bg-[#808080] selection:text-[#F0F0F4] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation & Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#808080]/20">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#808080] hover:text-[#555] bg-[#F0F0F4] hover:bg-neutral-100 border border-[#808080]/30 rounded-xl px-3.5 py-2 transition-all shadow-sm group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>{lang === 'zh' ? '返回首页' : 'Back to Home'}</span>
          </button>

          {/* Toggle between structured refined chapters and raw original essay */}
          <div className="flex items-center gap-1 bg-[#F0F0F4] border border-[#808080]/30 rounded-xl p-1 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('refined')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'refined'
                  ? 'bg-[#808080] text-[#F0F0F4] shadow-sm'
                  : 'text-[#808080] hover:text-[#555]'
              }`}
            >
              {lang === 'zh' ? '分章精读版' : 'Structured Chapters'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('original')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'original'
                  ? 'bg-[#808080] text-[#F0F0F4] shadow-sm'
                  : 'text-[#808080] hover:text-[#555]'
              }`}
            >
              {lang === 'zh' ? '作者自述手记 (原文)' : 'Author Manuscript (Raw)'}
            </button>
          </div>
        </div>

        {/* Header Section */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#3B7A57]/10 text-[#3B7A57] border border-[#3B7A57]/20 mb-4">
            <ScrollText className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '开发者手记 · 为什么会有 Neinote' : 'Founder Note · Why Neinote Exists'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#555] tracking-tight mb-4 leading-tight">
            {lang === 'zh' ? (
              <>在纷繁杂乱中，<br className="hidden sm:inline" />打捞稍纵即逝的灵感</>
            ) : (
              <>Rescuing Fleeting Thoughts from the Chaos of Daily Life</>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#808080]/90 leading-relaxed font-serif italic max-w-2xl mb-6">
            {lang === 'zh' 
              ? '「长篇累牍在现代多形容文章繁杂啰嗦。可对于真实的生活经验而言，这却是再普遍不过的常态——我们不是时时刻刻都只谈论真理。」'
              : '"In modern Chinese, Lei Du (累牍) implies prolixity. Yet for actual lived experience, messy fragments are the most honest reality—we do not speak solely in eternal truths at every hour."'}
          </p>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-[#808080]/80 font-mono py-3 px-4 bg-[#F0F0F4] border border-[#808080]/20 rounded-2xl">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#3B7A57]" />
              <span>{lang === 'zh' ? '阅读时长：约 4 分钟' : 'Read time: ~4 min'}</span>
            </div>
            <span className="text-[#808080]/30 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#2B5F75]" />
              <span>React + Go + Wails v3</span>
            </div>
            <span className="text-[#808080]/30 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{lang === 'zh' ? '全功能永久免费 · 主题包支持' : 'Free Core · Supported via Themes'}</span>
            </div>
          </div>
        </header>

        {/* Content Tabs */}
        {activeTab === 'refined' ? (
          <div className="space-y-12">
            
            {/* Chapter 0: 序言 */}
            <section className="bg-[#F0F0F4] border border-[#808080]/25 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B7A57] mb-2 font-mono">
                <span>Chapter 00</span>
                <span>/</span>
                <span>{lang === 'zh' ? '序言 · 累积的不满与萌芽' : 'Prologue · Frustration as Catalyst'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#555] mb-4">
                {lang === 'zh' ? '为什么不能更进一步？为什么不能再简便一些？' : 'Why not take it a step further? Why can’t it be simpler?'}
              </h2>
              <div className="prose prose-neutral text-sm sm:text-base text-[#808080] leading-relaxed space-y-4">
                <p>
                  {lang === 'zh' ? (
                    <>
                      Neinote 开始于我常年使用各种效率与笔记工具过程中的便与不便。每当我打开一个软件，我都在反复思考一个问题：<strong>为什么不能更进一步？或者，为什么不能再简便一些？</strong>
                    </>
                  ) : (
                    <>
                      Neinote began from years of navigating both the brilliance and frictions of everyday note-taking tools. Whenever I worked in an application, one lingering thought refused to fade: <strong>Why not take it one step further? Why can't it be simpler?</strong>
                    </>
                  )}
                </p>
                <p>
                  {lang === 'zh' ? (
                    <>
                      在日复一日不满的累积下，我决定不再迁就，而是亲自动手做一款真正顺手的工具。你可以在 Neinote 上找到非常多优秀软件的影子——包括但不限于 <strong>Boogunote、Notion、Roam Research、Obsidian、Sayit、WDTP、TreeSheets</strong> 等（以上排名不分先后，按首字母排序）。它们都曾启发过我，但 Neinote 的所有交互与取舍，完全从我个人的实际体感出发。
                    </>
                  ) : (
                    <>
                      Under the accumulation of day-to-day frustrations, I decided to stop compromising and build my own tool. You will find echoes of many pioneering apps in Neinote—including <strong>Boogunote, Notion, Roam Research, Obsidian, Sayit, WDTP, and TreeSheets</strong> (listed alphabetically). They each lit a spark, but Neinote’s every design choice stems directly from my lived writing workflow.
                    </>
                  )}
                </p>
              </div>

              {/* Homage Pills */}
              <div className="mt-6 pt-5 border-t border-[#808080]/15">
                <span className="text-xs font-bold text-[#808080]/70 uppercase tracking-wider block mb-3 font-mono">
                  {lang === 'zh' ? '致敬灵感来源 (首字母排序)' : 'Inspirations & Homage (Alphabetical)'}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {inspirations.map((item) => (
                    <div 
                      key={item.name}
                      className="px-3 py-2 bg-neutral-100/60 border border-[#808080]/20 rounded-xl text-xs flex flex-col gap-0.5"
                    >
                      <span className="font-bold text-[#555]">{item.name}</span>
                      <span className="text-[11px] text-[#808080]/80">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Chapter 1: 十次重构 */}
            <section className="bg-[#F0F0F4] border border-[#808080]/25 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2B5F75] mb-2 font-mono">
                <span>Chapter 01</span>
                <span>/</span>
                <span>{lang === 'zh' ? '跋涉 · 十次重构与架构沉浮' : 'The Odyssey · 10 Refactors & Architecture'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#555] mb-4">
                {lang === 'zh' ? '从 bolt.new 原型到 React + Go + Wails v3' : 'From bolt.new Prototype to React + Go + Wails v3'}
              </h2>
              <div className="prose prose-neutral text-sm sm:text-base text-[#808080] leading-relaxed space-y-4">
                <p>
                  {lang === 'zh' ? (
                    <>
                      虽然早在很久以前我就开始构思 Neinote，但直到 <strong>2025 年 5 月份</strong>，我才第一次正式着手尝试。最初，我用 <code>bolt.new</code> 快速搭建了一个粗糙的原型。坦白说，除了两者都有一个 Markdown 编辑器之外，那个原型和今天的 Neinote 几乎毫不相关。
                    </>
                  ) : (
                    <>
                      Although I had contemplated Neinote for a long time, it wasn’t until <strong>May 2025</strong> that I made my first formal attempt. I quickly spun up a prototype using <code>bolt.new</code>. In truth, aside from both having a Markdown editor, that initial draft bore almost no resemblance to what Neinote is today.
                    </>
                  )}
                </p>
                <p>
                  {lang === 'zh' ? (
                    <>
                      我曾有过一些 Java 和 C++ 的后端项目经验，但对于现代前端体系却毫无头绪。依托于生成式 AI 的辅助，我像拓荒者一样开始了漫长的试错：从 <strong>Flutter</strong>，到纯 <strong>React</strong>，再到 <strong>Vue + Tauri</strong>……从那以后，我至少推倒重构了 10 次。
                    </>
                  ) : (
                    <>
                      I had prior engineering experience in Java and C++, but was utterly unfamiliar with modern frontend paradigms. Powered by generative AI, I embarked on a prolonged journey of architectural trials: from <strong>Flutter</strong>, to pure <strong>React</strong>, then to <strong>Vue + Tauri</strong>… In total, I tore down and rebuilt the codebase at least 10 times.
                    </>
                  )}
                </p>
                <p>
                  {lang === 'zh' ? (
                    <>
                      每一次重构几乎都经历了至少 7 个大版本、每个版本 3 个分支、每个分支 10 次以上的微迭代。起初我还会在 Git 日志里翻阅记录，后来我意识到：很多被视作常规的路线，在写作体验上其实是行不通的。
                    </>
                  ) : (
                    <>
                      Each rewrite involved at least 7 major iterations, across multiple branches and countless micro-commits. Eventually, I realized that many conventional desktop paradigms simply did not serve frictionless writing.
                    </>
                  )}
                </p>
                
                {/* Highlight Callout: Dual Window Discovery */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#2B5F75]/5 border border-[#2B5F75]/25 my-4">
                  <div className="flex items-start gap-3">
                    <Compass className="w-5 h-5 text-[#2B5F75] shrink-0 mt-0.5" />
                    <div className="text-sm sm:text-base">
                      <strong className="text-[#2B5F75] font-bold block mb-1">
                        {lang === 'zh' ? '第 7 次重构的顿悟：自动隐藏悬浮 + 主页面双窗口' : 'The Breakthrough at Refactor #7: Auto-Hiding Drawer + Dual Windows'}
                      </strong>
                      <span className="text-[#808080]">
                        {lang === 'zh' 
                          ? '直到第 7 次大重构，我才最终确定下「自动隐藏悬浮速记抽屉 + Markdown 主页面」的双窗口协同模式。在今天看来，这似乎是很显然、很直观的设计；但探索未知时，人们绝不可能一开始就走在最正确的道路上——哪怕别人的软件早就告诉过你应当如何。最终，技术选型也笃定在 React + Go + Wails v3 的轻量组合上。'
                          : 'Not until the 7th major refactor did the concept of an "auto-hiding floating quick-drawer + dedicated Markdown main stage" crystallize. Today it feels obvious and natural, but in software creation, one rarely begins on the right path. Ultimately, the stack stabilized on the lightweight, high-performance pairing of React + Go + Wails v3.'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter 2: 三位一体体系 */}
            <section className="bg-[#F0F0F4] border border-[#808080]/25 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D97706] mb-2 font-mono">
                <span>Chapter 02</span>
                <span>/</span>
                <span>{lang === 'zh' ? '体系 · 枝络、灵犀与以太' : 'The Trinity · Goote, Lumina & Aether'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#555] mb-4">
                {lang === 'zh' ? '虽不强求尽善尽美，但每部分皆有其独特生命' : 'Not Forcing Perfection, Yet Every Element Has Its Soul'}
              </h2>
              <div className="prose prose-neutral text-sm sm:text-base text-[#808080] leading-relaxed space-y-4 mb-6">
                <p>
                  {lang === 'zh' ? (
                    <>
                      对我来说，也许我仍未找到最正确、最舒服的交互方式，但至少在当下，我并不拒斥它，我们相处得还算融洽。Neinote 给予我的便利，已经是他能为我带来的最大价值。我不想苛求它，正如我不想苛求自己面面俱到。
                    </>
                  ) : (
                    <>
                      Perhaps I have yet to find the single most flawless interaction model, but for now, we coexist harmoniously. The daily friction Neinote removes for me is already its greatest reward. I do not wish to force it to be everything to everyone.
                    </>
                  )}
                </p>
                <p>
                  {lang === 'zh' ? (
                    <>
                      然而，尽管我努力劝慰自己，大家仍能从各个插件扩展中看出我的「不甘心」。我依然希望它尽可能好用，因为在我的构想里，每一个组件都承担着不可替代的使命：
                    </>
                  ) : (
                    <>
                      Yet, despite my attempts to remain modest, one can still sense my restless ambition in every modular extension. I still yearn for it to feel magical, because every organ of this system carries a distinct purpose:
                    </>
                  )}
                </p>
              </div>

              {/* 3 Pillars Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* 1. 枝络 Goote */}
                <div className="p-5 rounded-xl bg-neutral-100/80 border border-[#808080]/25 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#3B7A57]/15 text-[#3B7A57] flex items-center justify-center mb-3">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-black text-lg text-[#555]">枝络</h3>
                      <span className="font-mono text-xs font-bold text-[#3B7A57]">Goote</span>
                    </div>
                    <p className="text-xs font-semibold text-[#808080]/80 mb-3">
                      {lang === 'zh' ? '悬浮抽屉 · 碎片容纳 · 树之落叶' : 'Floating Drawer · Micro-Captures'}
                    </p>
                    <p className="text-xs text-[#808080] leading-relaxed">
                      {lang === 'zh'
                        ? '像影子一样的悬浮抽屉，容纳一切零散的思维碎片。宛如一棵树上独立生长的叶子，虽然自由脱落，但你依然将其看作整棵大树不可分割的一部分。'
                        : 'A shadow-like drawer holding fleeting micro-thoughts. Like independent leaves on a grand tree, free yet intrinsically bound to the trunk.'}
                    </p>
                  </div>
                </div>

                {/* 2. 灵犀 Lumina */}
                <div className="p-5 rounded-xl bg-neutral-100/80 border border-[#808080]/25 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#2B5F75]/15 text-[#2B5F75] flex items-center justify-center mb-3">
                      <Mic className="w-5 h-5" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-black text-lg text-[#555]">灵犀</h3>
                      <span className="font-mono text-xs font-bold text-[#2B5F75]">Lumina</span>
                    </div>
                    <p className="text-xs font-semibold text-[#808080]/80 mb-3">
                      {lang === 'zh' ? '随唤随至 · 倾听思考 · 声音凝字' : 'Voice Intuition · Faithful Transcriber'}
                    </p>
                    <p className="text-xs text-[#808080] leading-relaxed">
                      {lang === 'zh'
                        ? '随时随地按下快捷键呼出，倾听你未加修饰的原初喃喃自语。它忠实地从声音波形中抽象出凝练文字，心有灵犀，不扰清幽。'
                        : 'Summoned instantly via hotkey to listen to raw murmurs and unscripted thoughts, faithfully abstracting speech into clean written words.'}
                    </p>
                  </div>
                </div>

                {/* 3. 以太 Aether */}
                <div className="p-5 rounded-xl bg-neutral-100/80 border border-[#808080]/25 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#D97706]/15 text-[#D97706] flex items-center justify-center mb-3">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-black text-lg text-[#555]">以太</h3>
                      <span className="font-mono text-xs font-bold text-[#D97706]">Aether</span>
                    </div>
                    <p className="text-xs font-semibold text-[#808080]/80 mb-3">
                      {lang === 'zh' ? '抽丝剥茧 · 溯本求源 · 本地与直连' : 'Synthesizer · Trace the Source'}
                    </p>
                    <p className="text-xs text-[#808080] leading-relaxed">
                      {lang === 'zh'
                        ? '能从纷落的一片片叶子中抽丝剥茧、追溯思想本源的人工大模型辅助。纯客户端直连 API，不经任何私有中间服务，帮助你在当下话题提炼出独属于你的表述。'
                        : 'An AI assistant that weaves loose fallen leaves into coherent insights. Client-direct API architecture, grounding thoughts without proprietary lock-in.'}
                    </p>
                  </div>
                </div>

              </div>
            </section>

            {/* Chapter 3: 何谓长篇累牍 */}
            <section className="bg-[#F0F0F4] border border-[#808080]/25 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B7A57] mb-2 font-mono">
                <span>Chapter 03</span>
                <span>/</span>
                <span>{lang === 'zh' ? '释名 · 何谓「长篇累牍」' : 'Etymology · The Truth Behind "Lei Du"'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#555] mb-4">
                {lang === 'zh' ? '我们不是时时刻刻都只谈论真理' : 'We Do Not Speak Solely in Eternal Truths'}
              </h2>
              <div className="prose prose-neutral text-sm sm:text-base text-[#808080] leading-relaxed space-y-4">
                <p>
                  {lang === 'zh' ? (
                    <>
                      Neinote 的中文名字是「<strong>累牍</strong>」，取自古汉语词汇「长篇累牍」。
                    </>
                  ) : (
                    <>
                      The Chinese moniker of Neinote is <strong>Lei Du (累牍)</strong>, derived from the classical idiom <em>Chang Pian Lei Du (长篇累牍)</em>.
                    </>
                  )}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                  <div className="p-4 bg-neutral-100/70 border border-[#808080]/20 rounded-xl">
                    <span className="text-xs font-mono font-bold text-[#3B7A57] block mb-1">【累】 lěi</span>
                    <p className="text-xs text-[#808080]">
                      {lang === 'zh' 
                        ? '积累之累，亦是累计之累。既指思考质感的日积月累，亦指碎片记录数量的细水长流。'
                        : 'To accumulate and compile. Denotes both qualitative refinement over time and quantitative capture of ideas.'}
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-100/70 border border-[#808080]/20 rounded-xl">
                    <span className="text-xs font-mono font-bold text-[#3B7A57] block mb-1">【牍】 dú</span>
                    <p className="text-xs text-[#808080]">
                      {lang === 'zh' 
                        ? '指中国古代用于刻写的一片片简牍，或木制，或竹制。一片简容纳一句话，串联起来便是煌煌巨著。'
                        : 'Ancient Chinese wooden or bamboo slips used for writing. One slip for a singular line; bound together, they form a magnum opus.'}
                    </p>
                  </div>
                </div>
                <p>
                  {lang === 'zh' ? (
                    <>
                      在现代语境下，「长篇累牍」常常被赋予贬义色彩，多用于形容文章冗长、文字繁杂啰嗦。<strong>可对于每个活生生的人的个人生活经验而言，琐碎、繁杂与芜杂，恰恰才是再普遍不过的常态。</strong>
                    </>
                  ) : (
                    <>
                      In contemporary usage, "Lei Du" often carries a mildly derogatory connotation, describing writing that is rambling or verbose. <strong>Yet for genuine human living and thinking, fragmented and messy thoughts are the most universal reality.</strong>
                    </>
                  )}
                </p>
                <blockquote className="border-l-4 border-[#3B7A57] pl-4 py-1 italic font-serif text-[#555]">
                  {lang === 'zh' 
                    ? '「我们不是时时刻刻都只谈论真理。那些稍纵即逝的感叹、未经雕琢的火花、不成熟的假设，同样值得被一片片竹简郑重安放。」'
                    : '"We do not speak solely in eternal truths at every moment. Fleeting musings, unpolished sparks, and raw intuition deserve their own bamboo slips."'}
                </blockquote>
              </div>
            </section>

            {/* Chapter 4: 承诺与商业模式 */}
            <section className="bg-[#F0F0F4] border border-[#808080]/25 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#808080] mb-2 font-mono">
                <span>Chapter 04</span>
                <span>/</span>
                <span>{lang === 'zh' ? '诺言 · 全功能免费与美化自洽' : 'The Manifesto · 100% Free Core & Aesthetics'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#555] mb-4">
                {lang === 'zh' ? '生产力不应设卡，美与匠心自愿赞助' : 'No Paywalls on Productivity, Supported by Pure Craft'}
              </h2>
              <div className="prose prose-neutral text-sm sm:text-base text-[#808080] leading-relaxed space-y-4">
                <p>
                  {lang === 'zh' ? (
                    <>
                      出于工程节奏与各方面的考量，现阶段我并没有计划开源整个项目代码仓库。但我作出了一个极其坚定的决定：
                    </>
                  ) : (
                    <>
                      For various engineering considerations, I do not intend to open-source the full codebase at this stage. However, I have made an unwavering pledge:
                    </>
                  )}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
                  <div className="p-4 rounded-xl bg-[#3B7A57]/10 border border-[#3B7A57]/20 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B7A57] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#555] mb-1">
                        {lang === 'zh' ? '所有功能完全免费' : '100% Free Productivity Core'}
                      </h4>
                      <p className="text-xs text-[#808080]">
                        {lang === 'zh' 
                          ? '双窗口系统、随记悬浮窗、语音转录、Markdown 沉浸编辑、大纲关联等所有生产力核心机制永久免费开放，没有任何功能层面的付费墙。'
                          : 'Dual windows, auto-hiding drawer, voice transcription, Markdown synthesis, and graph outline are permanently unlocked.'}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#2B5F75]/10 border border-[#2B5F75]/20 flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#2B5F75] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-[#555] mb-1">
                        {lang === 'zh' ? '仅售卖视觉与音效主题包' : 'Aesthetic Theme & Audio Packs'}
                      </h4>
                      <p className="text-xs text-[#808080]">
                        {lang === 'zh' 
                          ? '为了软件能长期良性迭代，我只售卖精心设计的美化主题样式包与定制机械音效。如果你喜欢 Neinote，可以通过赞助主题来支持它的成长。'
                          : 'To maintain sustainable development, I only sell crafted visual skin packs and retro mechanical soundscapes. Pure voluntary patronage.'}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#808080]/80">
                  {lang === 'zh'
                    ? '同时在 AI 层面，Neinote 绝不代理、打包或加价转售任何大模型算力。我们只提供标准的纯客户端直连 API 服务（BYOK 模式），你的密钥与账单完全属于你自己。'
                    : 'Furthermore, Neinote never resells or markups AI tokens. We provide pure client-direct API connectivity (BYOK), leaving keys and billing entirely in your control.'}
                </p>
              </div>
            </section>

            {/* Chapter 5: 结语 */}
            <section className="bg-[#808080] text-[#F0F0F4] rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F0F0F4]/70 mb-2 font-mono">
                {lang === 'zh' ? '结语 · 我希望它能合格' : 'Epilogue · Hoping It Qualifies'}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {lang === 'zh' ? '在纷繁杂乱中理清思路，仅此而已' : 'To Clarify Thoughts Amidst the Noise, That is All'}
              </h2>
              <p className="text-sm sm:text-base text-[#F0F0F4]/90 leading-relaxed mb-6 font-serif">
                {lang === 'zh' ? (
                  <>
                    对于我而言，Neinote 和它所承载的一切，是为了帮助我在日常生活与工作中记录稍纵即逝的闪光，在纷繁杂乱中理清真正的思路。<br /><br />
                    我希望在这一点上，Neinote 能合格。
                  </>
                ) : (
                  <>
                    For me, Neinote and everything it embodies exists simply to capture what is fleeting, and to help distill clarity from chaos.<br /><br />
                    In that humble endeavor, I hope Neinote proves worthy.
                  </>
                )}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#F0F0F4]/20 text-xs text-[#F0F0F4]/70">
                <span>Neinote 独立开发者 谨记</span>
                <span className="font-mono">May 2025 – Present</span>
              </div>
            </section>

          </div>
        ) : (
          /* Raw Manuscript Tab */
          <div className="bg-[#F0F0F4] border border-[#808080]/30 rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-[#808080]/70 mb-4 pb-3 border-b border-[#808080]/20">
              <ScrollText className="w-4 h-4 text-[#808080]" />
              <span>{lang === 'zh' ? '作者原始手记原件 · 无删减存档' : 'Author Original Raw Manuscript'}</span>
            </div>

            <div className="font-serif text-sm sm:text-base text-[#555] leading-relaxed sm:leading-loose whitespace-pre-wrap space-y-4">
              <p>
                Neinote开始于我常年使用各种工具的便捷与不便，对于每一个工具我都在思考，为什么不更进一步，或者为什么不能再简便一些，在我日复一日的不满的累积下，我决定自己做一款软件。
              </p>
              <p>
                你可以在Neinote上找到非常多优秀的应用软件的影子，包括但不限于Boogunote，Notion，Roamresearch，obsidian,Sayit,WDTP，Treesheet等(以上排名不分前后，以首字母排序），Neinote完全从我的实际体验出发，虽然我曾有过一些java，c++项目经验，但对于前端却毫无头绪，依托于生成式AI，我开始尝试不同的架构，最后确定了react+go+wails3的最终组合。出于种种原因，现阶段不打算开源整个项目，但所有的功能免费，我只售卖主题样式包用于美化。
              </p>
              <p>
                虽然早在很久以前我就开始构思Neinote，但直到2025年5月份我才开始第一次正式尝试。我用bolt.new创建了一个原型。事实上，和今天的Neinote的样子，除了都拥有markdown编辑器，其他只能说毫不相关。从那以后，我至少重构了10次，尝试过flutter，react以及vue+tauri，除了不同的技术栈组合，UI界面也变换了许多，每次重构至少迭代7个大版本，每次版本至少3个分支，每个分支至少10次迭代当然，我自己也没有统计过，最开始几次重构我还会查看git的记录。后面我发现，路线是错误的。
              </p>
              <p>
                大概直到第7次重构才确定下自动隐藏悬浮+主页面双窗口，在今天看来是很显然很直观的设计，但人们并不是一开始就能一直走在正确的道路上。哪怕别人，别的应用软件已经告诉你，就是该那样做。
              </p>
              <p>
                对我来说，可能我仍然没找到最正确最舒服的交互方式，但至少在当下，我并不拒斥它，我们相处得还算融洽。Neinote一定程度上给予我的便利，已经是他能为我带来的最大价值。我不想强求它，就像强迫我一样面面俱到。
              </p>
              <p>
                但尽管我努力劝慰自己，大家仍能从各种插件扩展中看出的我的不甘心。我仍然希望它尽善尽美。因为每一个部分都有其独特的价值：
              </p>
              <p className="pl-4 border-l-2 border-[#808080]/30 italic text-[#666]">
                像影子一样的悬浮抽屉，可以容纳一切零散的思维碎片，像一棵树上独立生长的叶子，但你仍然将其看作树的一部分一样；这是<strong>枝络（goote)</strong>。<br />
                能随时呼出，倾听你的思考，忠实的从声音中抽象出文字的，是心有灵犀的<strong>灵犀(lumina)</strong>；<br />
                而能从落下的一片片叶子中抽丝剥茧，追溯本源的人工大模型的辅助是<strong>以太（aether）</strong>。
              </p>
              <p>
                每一个部分都意义，最终构成你在当下话题下独特的表述。
              </p>
              <p>
                Neinote的中文名是长篇累牍的累牍，累是积累的意思，也可以是累计的意思，可以是质也可以是量；牍是指中国古代用于书写的一片一片的简，或木制或竹制。长篇累牍在现代是具有贬义，多形容文章长，文字繁杂啰嗦。可对于个人生活经验而言，确实再普遍不过的常态。我们不是时时刻刻都只谈论真理。
              </p>
              <p>
                对于我而言，Neinote和其所有，是为了帮助我记录稍纵即逝，在纷繁杂乱中理清思路，我希望在这一点上，Neinote能合格。
              </p>
            </div>
          </div>
        )}

        {/* Bottom Actions CTA */}
        <div className="mt-12 pt-8 border-t border-[#808080]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-bold text-[#808080] hover:text-[#555] bg-[#F0F0F4] border border-[#808080]/30 px-4 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'zh' ? '返回首页浏览功能' : 'Back to Home'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenSupporter}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#2B5F75] bg-[#3B7A57]/10 hover:bg-[#3B7A57]/20 border border-[#2B5F75]/30 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#3B7A57]" />
              <span>{lang === 'zh' ? '赞助支持主题' : 'Support Themes'}</span>
            </button>
            <button
              type="button"
              onClick={onOpenDownload}
              className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-[#F0F0F4] bg-[#808080] hover:bg-[#6e6e6e] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>{lang === 'zh' ? '立即免费下载' : 'Download Free'}</span>
            </button>
          </div>
        </div>

      </div>
    </article>
  );
};
