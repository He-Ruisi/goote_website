import React, { useState } from 'react';
import { X, Sparkles, Check, Heart, Copy } from 'lucide-react';
import { Keycap } from './Keycap';

interface ThemeSupporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeSupporterModal: React.FC<ThemeSupporterModalProps> = ({ isOpen, onClose }) => {
  const [payMethod, setPayMethod] = useState<'wechat' | 'alipay' | 'card'>('wechat');
  const [isCompleted, setIsCompleted] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePay = () => {
    const randomKey = `GOOTE-PRO-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setLicenseKey(randomKey);
    setIsCompleted(true);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg rounded-[28px] border-2 border-neutral-900 bg-white p-7 shadow-2xl relative text-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1 rounded-xl cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Keycap label="G" size="md" isGradient={true} />
              <div>
                <h3 className="text-xl font-black text-black">大师级 UI 主题套件 (Pro)</h3>
                <p className="text-xs text-neutral-500 font-medium">
                  赞助独立开源 · 一次买断永久享受所有当前与未来主题
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/70 to-rose-50/70 border border-purple-200/80 mb-5">
              <div className="flex items-baseline justify-between mb-3 pb-3 border-b border-purple-200/50">
                <span className="text-xs font-bold text-neutral-700">终身赞助者权益（大师主题 & 音效包）</span>
                <span className="text-2xl font-black font-mono text-purple-700">¥39 / $9</span>
              </div>

              <div className="space-y-2 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>解锁 5 套精心打造的顶级商业 UI 主题（山涧翠影、赤霄黑曜、京都和纸等）</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>4 种机械轴与复古打字机物理击键声效包</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>GitHub Sponsor 专属徽章，不限安装设备台数</span>
                </div>
              </div>
            </div>

            {/* Payment Method Switcher */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-neutral-800 mb-2">选择支付渠道：</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPayMethod('wechat')}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                    payMethod === 'wechat'
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  微信支付
                </button>
                <button
                  type="button"
                  onClick={() => setPayMethod('alipay')}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                    payMethod === 'alipay'
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  支付宝
                </button>
                <button
                  type="button"
                  onClick={() => setPayMethod('card')}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                    payMethod === 'card'
                      ? 'border-neutral-900 bg-neutral-900 text-white'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  Apple Pay
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSimulatePay}
              className="w-full py-3.5 text-xs font-extrabold text-white bg-black hover:bg-neutral-800 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-300" />
              <span>立即赞助并生成授权激活码 (¥39 / $9)</span>
            </button>

            <p className="text-[11px] text-neutral-400 text-center mt-3">
              支持 14 天无理由全额退款 · 激活码支持纯离线激活，零连网依赖
            </p>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-300">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="text-xl font-black text-black mb-2">感谢您对 Goote 开源事业的赞助！</h3>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto mb-5 leading-relaxed">
              您的专属主题解锁激活码已生成。在 Goote 客户端内进入「设置」→「UI 主题工坊」→「输入激活码」即可瞬间解锁全套大师级主题。
            </p>

            <div className="p-3.5 rounded-xl bg-neutral-100 border border-neutral-300 max-w-md mx-auto flex items-center justify-between mb-6">
              <code className="text-sm font-mono text-purple-700 font-bold select-all">
                {licenseKey}
              </code>
              <button
                type="button"
                onClick={handleCopyKey}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-neutral-300 text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey ? '已复制' : '复制密钥'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-6 text-xs font-bold text-white bg-black hover:bg-neutral-800 rounded-xl transition-all cursor-pointer shadow active:scale-95"
            >
              完成并返回
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
