import React from 'react';
import { ArrowDownToLine, Github, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenSupporter }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2.5 text-black hover:opacity-85 transition-opacity">
          <div className="w-8 h-8 rounded-xl bg-neutral-900 border-b-2 border-neutral-950 text-white font-black text-sm flex items-center justify-center shadow-sm">
            枝
          </div>
          <span className="font-extrabold text-lg tracking-tight text-neutral-900 font-sans">
            Goote · 枝络
          </span>
        </a>

        {/* Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-semibold text-neutral-600">
          <a href="#why" className="hover:text-black transition-colors">为什么是枝络</a>
          <a href="#tools" className="hover:text-black transition-colors">瑞士军刀利器</a>
          <a href="#download" className="hover:text-black transition-colors">多端下载</a>
          <button onClick={onOpenSupporter} className="hover:text-black transition-colors cursor-pointer">
            大师 UI 主题
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-colors shadow-sm"
          >
            <Github className="w-3.5 h-3.5 text-black" />
            <span>Github 14.2k</span>
          </a>

          <button
            onClick={onOpenSupporter}
            className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Pro UI 主题</span>
          </button>

          <button
            onClick={onOpenDownload}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-black hover:bg-neutral-800 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>免费下载</span>
          </button>
        </div>

      </div>
    </header>
  );
};
