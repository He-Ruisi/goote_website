import React, { useState, useEffect } from 'react';
import { X, Check, Copy } from 'lucide-react';
import { Keycap } from './Keycap';
import { useTranslation } from '../i18n/LanguageContext';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  osTarget?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  osTarget = 'macos'
}) => {
  const { lang, t } = useTranslation();
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadFinished, setDownloadFinished] = useState(false);
  const [copiedSha, setCopiedSha] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setDownloadProgress(0);
      setDownloadFinished(false);
      const t1 = setTimeout(() => setDownloadProgress(45), 250);
      const t2 = setTimeout(() => setDownloadProgress(88), 650);
      const t3 = setTimeout(() => {
        setDownloadProgress(100);
        setDownloadFinished(true);
      }, 1000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const shaHash = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

  const handleCopySha = () => {
    navigator.clipboard.writeText(shaHash);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#808080]/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg rounded-[28px] border-2 border-[#808080] bg-[#F0F0F4] p-7 shadow-2xl relative text-[#808080]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#808080]/70 hover:text-[#808080] p-1 rounded-xl cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <Keycap label="N" size="md" />
          <div>
            <h3 className="text-xl font-black text-[#808080]">
              {lang === 'zh' ? '下载 Neinote v1.4.2' : 'Download Neinote v1.4.2'} ({osTarget})
            </h3>
            <p className="text-xs text-[#808080]/80 font-bold">
              {lang === 'zh' ? '100% 免费解锁 · 全功能开放 · 本地优先' : '100% Free · All Features Unlocked · Local-First'}
            </p>
          </div>
        </div>

        {/* Progress simulation */}
        <div className="mb-6 p-4 rounded-2xl bg-[#F0F0F4] border border-[#808080]/30 shadow-sm">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-[#808080]">
              {downloadFinished 
                ? (lang === 'zh' ? '✅ 安装包准备完毕' : '✅ Package Ready for Install') 
                : (lang === 'zh' ? '正在从最快镜像源获取...' : 'Fetching from fastest CDN mirror...')}
            </span>
            <span className="font-mono text-[#808080] font-black">{downloadProgress}%</span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-[#808080]/20 overflow-hidden">
            <div
              className="h-full bg-[#808080] transition-all duration-300 rounded-full"
              style={{ width: `${downloadProgress}%` }}
            />
          </div>

          {downloadFinished && (
            <div className="mt-3 text-xs text-[#808080] flex items-center justify-between font-medium">
              <span>{lang === 'zh' ? '若下载未自动开始：' : 'If download did not start:'}</span>
              <a
                href="#download"
                onClick={(e) => { e.preventDefault(); }}
                className="text-[#3B7A57] font-bold underline"
              >
                {lang === 'zh' ? '直接点击重试保存' : 'Click here to retry'}
              </a>
            </div>
          )}
        </div>

        {/* 3 Step Quickstart */}
        <div className="space-y-2.5 mb-6 text-xs text-[#808080]">
          <span className="font-bold block mb-1">
            {lang === 'zh' ? '极速三步上手：' : '3-Step Quick Start:'}
          </span>
          <div className="p-2.5 rounded-xl bg-[#F0F0F4] border border-[#808080]/30 flex items-start gap-2.5 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#808080] text-[#F0F0F4] flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
            <span>
              {lang === 'zh' 
                ? '解压并运行 Neinote，指定您本地的纯文本 Markdown 存储目录。' 
                : 'Extract and launch Neinote, choose your local Markdown directory.'}
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F0F0F4] border border-[#808080]/30 flex items-start gap-2.5 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#808080] text-[#F0F0F4] flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
            <span>
              {lang === 'zh' 
                ? '赋予系统录音权限（用于端侧 Whisper 离线高保真语音速记）。' 
                : 'Grant microphone permission for high-fidelity offline voice streaming.'}
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#F0F0F4] border border-[#808080]/30 flex items-start gap-2.5 shadow-sm">
            <span className="w-5 h-5 rounded-full bg-[#808080] text-[#F0F0F4] flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
            <span>
              {lang === 'zh' ? '按下 ' : 'Press '}
              <kbd className="px-1.5 py-0.5 rounded bg-[#808080]/20 font-mono font-bold text-[#808080] text-[11px]">Alt + Space</kbd>
              {lang === 'zh' ? '，开始你的第一次瞬时灵感捕捉。' : ' to start capturing ideas instantaneously.'}
            </span>
          </div>
        </div>

        {/* SHA-256 */}
        <div className="p-3 rounded-xl bg-[#F0F0F4] border border-[#808080]/30 flex items-center justify-between text-[11px] font-mono text-[#808080] mb-6 shadow-sm">
          <span className="truncate max-w-[320px]">SHA-256: {shaHash}</span>
          <button
            type="button"
            onClick={handleCopySha}
            className="flex items-center gap-1 text-[#808080] font-bold hover:underline cursor-pointer ml-2"
          >
            {copiedSha ? <Check className="w-3.5 h-3.5 text-[#3B7A57]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSha ? (lang === 'zh' ? '已复制' : 'Copied') : (lang === 'zh' ? '复制' : 'Copy')}</span>
          </button>
        </div>

        {/* Complete button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 text-xs font-bold text-[#F0F0F4] bg-[#808080] hover:bg-[#6e6e6e] rounded-xl transition-all cursor-pointer shadow active:scale-95"
        >
          {lang === 'zh' ? '完成并关闭' : 'Done & Close'}
        </button>
      </div>
    </div>
  );
};
