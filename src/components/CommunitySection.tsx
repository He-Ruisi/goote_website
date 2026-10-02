import React from 'react';
import { Github, GitPullRequest, Code2, Users, BookOpen, MessageSquare, HeartHandshake, Sparkles } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-[#090d14] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-400 mb-3">
            <span>05. 开源与社区共建</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>所有人创造，为所有人服务</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            属于每一个创作者的开源生产力工坊
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Goote 不隶属于任何商业巨头或风险投资机构。它的代码、协议与插件架构全部托管在 GitHub 上，完全透明、可审计。无论你是开发者、写作者还是设计师，欢迎随时加入共建。
          </p>
        </div>

        {/* GitHub Metrics & Repository Card */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl border border-white/[0.08] bg-[#111723] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">goote-app / goote</h3>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  GPL-3.0 License
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                The Swiss army knife for end-to-end writing, local-first note-taking, and open AI pipelines.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-slate-300">
            <div className="text-center">
              <span className="block text-lg font-bold text-white">14.2k</span>
              <span className="text-slate-500 text-[11px]">Stars</span>
            </div>
            <div className="text-center">
              <span className="block text-lg font-bold text-white">1.1k</span>
              <span className="text-slate-500 text-[11px]">Forks</span>
            </div>
            <div className="text-center">
              <span className="block text-lg font-bold text-white">128</span>
              <span className="text-slate-500 text-[11px]">Contributors</span>
            </div>
          </div>
        </div>

        {/* Contribution Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0f141f] hover:border-emerald-500/30 transition-all">
            <Code2 className="w-5 h-5 text-emerald-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1.5">开发扩展插件</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              基于精简的 TypeScript / Lua 插件 API，数十行代码即可封装属于你自己的瑞士小工具。
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0f141f] hover:border-indigo-500/30 transition-all">
            <Sparkles className="w-5 h-5 text-indigo-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1.5">贡献 AI 提示词链</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              将你在特定领域的写作提示词与推演管线分享给社区，帮助小说家、学者与程序员高效产出。
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0f141f] hover:border-amber-500/30 transition-all">
            <GitPullRequest className="w-5 h-5 text-amber-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1.5">提交代码与修复</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              无论是一处拼写修正、Linux 输入法兼容，还是底层 SQLite CRDT 的算法优化，我们认真对待每个 PR。
            </p>
          </div>

          <div className="p-5 rounded-xl border border-white/[0.06] bg-[#0f141f] hover:border-rose-500/30 transition-all">
            <MessageSquare className="w-5 h-5 text-rose-400 mb-3" />
            <h4 className="text-sm font-bold text-white mb-1.5">参与社群交流</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              加入官方 Discord、Telegram 与创作者交流群，交流知识管理心得，投票决定下个大版本特性。
            </p>
          </div>

        </div>

        {/* Community Action Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-slate-100 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] rounded-xl transition-colors flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>前往 GitHub Star 仓库</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>阅读开发与插件文档</span>
          </a>
        </div>

      </div>
    </section>
  );
};
