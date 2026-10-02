import React, { useState, useEffect } from 'react';
import { X, ArrowDownToLine, Check, Copy, Apple } from 'lucide-react';
import { Keycap } from './Keycap';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg rounded-[28px] border-2 border-neutral-900 bg-white p-7 shadow-2xl relative text-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 rounded-xl cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6">
          <Keycap label="G" size="md" />
          <div>
            <h3 className="text-xl font-black text-black">下载 Goote v1.4.2</h3>
            <p className="text-xs text-neutral-500 font-medium">
              100% 免费开源 · 全功能解锁 · 本地优先
            </p>
          </div>
        </div>

        {/* Progress simulation */}
        <div className="mb-6 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
          <div className="flex items-center justify-between text-xs font-bold mb-2">
            <span className="text-neutral-700">
              {downloadFinished ? '✅ 安装包准备完毕' : '正在从最快镜像源获取...'}
            </span>
            <span className="font-mono text-neutral-900">{downloadProgress}%</span>
          </div>

          <div className="w-full h-2.5 rounded-full bg-neutral-200 overflow-hidden">
            <div
              className="h-full bg-black transition-all duration-300 rounded-full"
              style={{ width: `${downloadProgress}%` }}
            />
          </div>

          {downloadFinished && (
            <div className="mt-3 text-xs text-neutral-600 flex items-center justify-between">
              <span>若下载未自动开始：</span>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('模拟下载已就绪：Goote 安装包已保存至您的本地。'); }}
                className="text-black font-bold underline"
              >
                直接点击重试保存
              </a>
            </div>
          )}
        </div>

        {/* 3 Step Quickstart */}
        <div className="space-y-2.5 mb-6 text-xs">
          <span className="font-bold text-neutral-900 block mb-1">极速三步上手：</span>
          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
            <span>解压并运行 Goote，指定您本地的纯文本 Markdown 存储目录。</span>
          </div>
          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
            <span>赋予系统录音权限（用于端侧 Whisper 离线高保真语音速记）。</span>
          </div>
          <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
            <span>按下 <kbd className="px-1.5 py-0.5 rounded bg-neutral-200 font-mono font-bold text-black text-[11px]">Alt + Space</kbd>，开始你的第一次瞬时灵感捕捉。</span>
          </div>
        </div>

        {/* SHA-256 */}
        <div className="p-3 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-600 mb-6">
          <span className="truncate max-w-[320px]">SHA-256: {shaHash}</span>
          <button
            onClick={handleCopySha}
            className="flex items-center gap-1 text-black font-bold hover:underline cursor-pointer ml-2"
          >
            {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSha ? '已复制' : '复制'}</span>
          </button>
        </div>

        {/* Complete button */}
        <button
          onClick={onClose}
          className="w-full py-3 text-xs font-bold text-white bg-black hover:bg-neutral-800 rounded-xl transition-all cursor-pointer shadow-md active:scale-95"
        >
          完成并关闭
        </button>
      </div>
    </div>
  );
};
