import React from 'react';
import { Github, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onOpenSupporter }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070a0f] text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand lockup */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold">
              枝
            </span>
            <div>
              <span className="font-bold text-white text-sm">Goote · 枝络</span>
              <p className="text-[11px] text-slate-500">瑞士军刀级全链条写作利器 · 本地优先 · 开源免费</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs">
            <a href="#features" className="hover:text-emerald-400 transition-colors">核心特性</a>
            <a href="#playground" className="hover:text-emerald-400 transition-colors">体验舱</a>
            <a href="#themes" className="hover:text-emerald-400 transition-colors">主题套件</a>
            <a href="#downloads" className="hover:text-emerald-400 transition-colors">下载应用</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSupporter}
              className="text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
            >
              支持作者 (大师 UI)
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={onOpenDownload}
              className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
            >
              获取最新安装包
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-1">
            <span>遵循 GPL-3.0 开源协议 · 核心功能 100% 永久免费</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current inline" />
            <span>for independent writers & thinkers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
