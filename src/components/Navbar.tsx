import React from 'react';
import { ArrowDownToLine, Sparkles, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenSupporter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenSupporter }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#F0F0F4]/90 backdrop-blur-md border-b border-[#808080]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2.5 text-[#808080] hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-xl bg-[#808080] border-b-2 border-[#5c5c5c] text-[#F0F0F4] font-black text-sm flex items-center justify-center shadow-sm">
            牍
          </div>
          <span className="font-extrabold text-lg tracking-tight text-[#808080] font-sans">
            Neinote · 累牍
          </span>
        </a>

        {/* 顶部导航便签：精简为 2 个字 */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[#808080]/85">
          <a href="#why" className="hover:text-[#808080] hover:underline underline-offset-4 transition-all">
            特性
          </a>
          <a href="#tools" className="hover:text-[#808080] hover:underline underline-offset-4 transition-all">
            利器
          </a>
          <a href="#download" className="hover:text-[#808080] hover:underline underline-offset-4 transition-all">
            下载
          </a>
          <button 
            type="button"
            onClick={onOpenSupporter} 
            className="hover:text-[#808080] hover:underline underline-offset-4 transition-all cursor-pointer font-bold"
          >
            主题
          </button>
        </nav>

        {/* Action Buttons (2字紧凑标签) */}
        <div className="flex items-center gap-3">
          <a
            href="#why"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#808080] bg-[#F0F0F4] border border-[#808080]/40 rounded-xl hover:bg-neutral-100 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#808080]" />
            <span>社区</span>
          </a>

          <button
            type="button"
            onClick={onOpenSupporter}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#2B5F75] bg-[#3B7A57]/10 hover:bg-[#3B7A57]/20 border border-[#2B5F75]/30 rounded-xl transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3B7A57]" />
            <span>赞助</span>
          </button>

          <button
            type="button"
            onClick={onOpenDownload}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#F0F0F4] bg-[#808080] hover:bg-[#6e6e6e] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>下载</span>
          </button>
        </div>

      </div>
    </header>
  );
};
