import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '为什么说 Goote 是一把瑞士军刀？它缝合了哪些功能？',
    answer: '许多创作者在日常写作中往往需要开启 5~6 个互不相通的软件：一个录音速记工具、一个大纲思维导图软件、一个 Markdown 编辑器、一个 OCR 截图识别插件、一个中英文格式排版网页、再加上一个 ChatGPT 网页。Goote 将这些小而美的锋利微工具整合成一条闭环工作流，从快捷键全局录入、语音转文字，到双链大纲整合、智能润色、全渠道一键排版发布，全部在极轻量的本地应用中完成。'
  },
  {
    question: '免费下载版真的解锁了全部功能吗？会有字数限制或设备数限制吗？',
    answer: '是的，100% 毫无保留。Goote 没有任何功能阉割，没有字数或节点数量限制，不限制同步设备数量，支持离线语音、本地优先 SQLite 存储、多端 CRDT 同步、自定义 AI 与全部社区插件。我们坚信工具的实用价值属于每一个创作者，不应设立门槛。'
  },
  {
    question: '既然所有功能都免费，付费项目主要包含什么？',
    answer: 'Goote 的付费项目是“大师级 UI 主题套件（Supporter Pack）”。我们设计团队倾注了大量心血，针对宋体和无衬线字体进行了精确的光学字距微调，打造了诸如山涧翠影、赤霄玄石、京都和纸、星云紫微等高质感视觉主题，并录制了真实的机械轴与打字机击键反馈声效。购买主题包是一次性永久买断，用于直接资助开源作者持续维护与服务器开销。'
  },
  {
    question: '我的笔记和语音速记数据会被上传到云端或用于 AI 训练吗？',
    answer: '绝对不会。Goote 是严格的“本地优先（Local-First）”软件，所有的笔记、大纲与双链拓扑直接保存在你电脑/手机本地硬盘上的标准 SQLite 数据库与纯文本 Markdown 树中。即使是语音识别，也是在端侧调用轻量 Whisper 模型离线运算。你的文字永远百分之百属于你自己。'
  },
  {
    question: '支持自定义 AI，我该如何接入自己的模型？',
    answer: 'Goote 坚持 BYOK（自带密钥）原则。你可以在设置面板中直接填入 OpenAI、Claude、DeepSeek 或 Google Gemini 的官方 API Key，直接由你的设备与模型官方服务器通信；如果你更注重隐私或身处断网环境，更可以直接输入本地 Ollama 或 vLLM 的本地地址（如 http://localhost:11434），完全离线调用本地模型。'
  },
  {
    question: '如果未来 Goote 停止维护了，我的数据会丢失或无法读取吗？',
    answer: '完全不用担心。Goote 采用全透明开源格式，所有文章内容均可一键导出为纯文本 Markdown 文件夹或标准 SQLite 数据库。即使没有 Goote，任何支持 Markdown 的编辑器（如 Obsidian、VS Code、Typora）都可以随时无缝接管你的所有作品。'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <span>06. 常见疑问解答</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>坦诚、透明、直奔主题</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            你关心的，都在这里
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            关于本地数据安全、商业模式与跨平台特性的解答。
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-white/[0.08] bg-[#101622] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
