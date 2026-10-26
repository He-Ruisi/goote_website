import React, { useState } from 'react';
import { X, Sparkles, Check, Heart, Copy } from 'lucide-react';
import { Keycap } from './Keycap';
import { useTranslation } from '../i18n/LanguageContext';

interface ThemeSupporterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeSupporterModal: React.FC<ThemeSupporterModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useTranslation();
  const [payMethod, setPayMethod] = useState<'wechat' | 'alipay' | 'card'>('wechat');
  const [isCompleted, setIsCompleted] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePay = () => {
    const randomKey = `NEINOTE-PRO-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setLicenseKey(randomKey);
    setIsCompleted(true);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#808080]/60 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg rounded-[28px] border-2 border-[#808080] bg-[#F0F0F4] p-7 shadow-2xl relative text-[#808080]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#808080]/70 hover:text-[#808080] p-1 rounded-xl cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Keycap label="N" size="md" isGradient={true} />
              <div>
                <h3 className="text-xl font-black text-[#808080]">{t.modal.themeTitle}</h3>
                <p className="text-xs text-[#808080]/80 font-bold">
                  {t.modal.themeSub}
                </p>
              </div>
            </div>

            {/* 中国山水画色系柔和渐变卡片 (石绿 · 石青 · 浅绛) */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#3B7A57]/15 via-[#2B5F75]/10 to-[#996644]/15 border border-[#3B7A57]/30 mb-5 shadow-sm">
              <div className="flex items-baseline justify-between mb-3 pb-3 border-b border-[#808080]/20">
                <span className="text-xs font-bold text-[#808080]">{t.modal.priceTag}</span>
                <span className="text-2xl font-black font-mono text-[#2B5F75]">
                  {lang === 'zh' ? '¥39' : '$5.9'} <span className="text-xs font-normal text-[#808080]">{lang === 'zh' ? '/ 买断' : '/ Lifetime'}</span>
                </span>
              </div>

              <div className="space-y-2 text-xs text-[#808080] font-medium">
                {t.modal.featuresList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#3B7A57] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method Switcher */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#808080] mb-2">
                {lang === 'zh' ? '选择支付渠道：' : 'Select Payment Method:'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPayMethod('wechat')}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                    payMethod === 'wechat'
                      ? 'border-[#3B7A57] bg-[#3B7A57] text-[#F0F0F4]'
                      : 'border-[#808080]/40 bg-[#F0F0F4] text-[#808080] hover:border-[#808080]'
                  }`}
                >
                  {t.modal.wechatPay}
                </button>
                <button
                  type="button"
                  onClick={() => setPayMethod('alipay')}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                    payMethod === 'alipay'
                      ? 'border-[#2B5F75] bg-[#2B5F75] text-[#F0F0F4]'
                      : 'border-[#808080]/40 bg-[#F0F0F4] text-[#808080] hover:border-[#808080]'
                  }`}
                >
                  {t.modal.alipay}
                </button>
                <button
                  type="button"
                  onClick={() => setPayMethod('card')}
                  className={`py-2 px-3 rounded-xl border-2 text-xs font-bold transition-all cursor-pointer ${
                    payMethod === 'card'
                      ? 'border-[#996644] bg-[#996644] text-[#F0F0F4]'
                      : 'border-[#808080]/40 bg-[#F0F0F4] text-[#808080] hover:border-[#808080]'
                  }`}
                >
                  {t.modal.cardPay}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSimulatePay}
              className="w-full py-3.5 text-xs font-extrabold text-[#F0F0F4] bg-[#808080] hover:bg-[#6e6e6e] rounded-xl transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#3B7A57]" />
              <span>
                {lang === 'zh' ? '立即赞助并生成授权激活码 (¥39)' : 'Support Author & Generate License ($5.9)'}
              </span>
            </button>

            <p className="text-[11px] text-[#808080]/80 text-center mt-3 font-medium">
              {lang === 'zh'
                ? '支持 14 天无理由全额退款 · 激活码支持纯离线激活，零连网依赖'
                : '14-day refund guarantee · Works 100% offline with zero cloud dependency'}
            </p>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-[#3B7A57]/20 text-[#3B7A57] flex items-center justify-center mx-auto mb-3 border border-[#3B7A57]/40">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="text-xl font-black text-[#808080] mb-2">
              {lang === 'zh' ? '感谢您对 Neinote 独立开发的支持！' : 'Thank you for supporting Neinote!'}
            </h3>
            <p className="text-xs text-[#808080] max-w-sm mx-auto mb-5 leading-relaxed font-medium">
              {lang === 'zh'
                ? '您的专属主题解锁激活码已生成。在 Neinote 客户端内进入「设置」→「UI 主题工坊」→「输入激活码」即可瞬间解锁全套大师级主题。'
                : 'Your license key has been generated. Open Neinote -> Settings -> Theme Workshop -> Enter Key to unlock all artisan themes.'}
            </p>

            <div className="p-3.5 rounded-xl bg-[#F0F0F4] border border-[#808080]/40 max-w-md mx-auto flex items-center justify-between mb-6 shadow-sm">
              <code className="text-sm font-mono text-[#2B5F75] font-bold select-all">
                {licenseKey}
              </code>
              <button
                type="button"
                onClick={handleCopyKey}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#808080]/15 border border-[#808080]/30 text-xs font-bold text-[#808080] hover:bg-[#808080]/25 transition-colors cursor-pointer"
              >
                {copiedKey ? <Check className="w-3.5 h-3.5 text-[#3B7A57]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey ? (lang === 'zh' ? '已复制' : 'Copied') : (lang === 'zh' ? '复制密钥' : 'Copy Key')}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-6 text-xs font-bold text-[#F0F0F4] bg-[#808080] hover:bg-[#6e6e6e] rounded-xl transition-all cursor-pointer shadow active:scale-95"
            >
              {lang === 'zh' ? '完成并返回' : 'Done & Return'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
