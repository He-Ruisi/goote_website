import React from 'react';
import { Sparkles, Check, Heart, Shield, Palette, Layers, SlidersHorizontal, Music } from 'lucide-react';
import { THEMES } from '../data/mockData';

interface ThemeShowcaseProps {
  onOpenSupporter: () => void;
}

export const ThemeShowcase: React.FC<ThemeShowcaseProps> = ({ onOpenSupporter }) => {
  const paidThemes = THEMES.filter(t => t.isPaid);

  return (
    <section id="themes" className="py-24 bg-[#090d14] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 mb-3">
            <span>03. 商业模型与设计美学</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>功能归公，美学付费</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            功能绝不阉割，美学值得珍重。
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Goote 的所有核心功能（语音录入、双链大纲、Local-first 同步、插件扩展、自定义 AI）在免费版中 100% 毫无保留开放。我们唯一的付费项目，是团队倾注数百小时雕琢的整套大师级 UI 界面与交互声效。
          </p>
        </div>

        {/* 2-Column Showcase: Themes Grid & Supporter Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Theme Details (col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Palette className="w-4 h-4 text-amber-400" />
              <span>大师级 UI 主题套件（包含在赞助者包内）</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paidThemes.map((theme) => (
                <div
                  key={theme.id}
                  className="p-5 rounded-xl border border-white/[0.08] bg-[#121824] hover:border-amber-400/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: theme.previewColor }}
                      />
                      <span className="font-semibold text-sm text-slate-100">{theme.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      已调教
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {theme.description}
                  </p>
                  <div className="text-[11px] text-slate-500 font-mono flex items-center gap-2 pt-2 border-t border-white/[0.05]">
                    <span>光学字偶调整</span>
                    <span aria-hidden="true">·</span>
                    <span>专属按键声效</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Aesthetic Craftsmanship Pillars */}
            <div className="p-5 rounded-xl border border-white/[0.06] bg-black/25 mt-4 space-y-3">
              <h4 className="text-xs font-semibold text-slate-300">每一套大师 UI 包含的细微考量：</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>严苛的 WCAG 护眼色温控制</span>
                </div>
                <div className="flex items-start gap-2">
                  <Music className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Hi-Fi 机械轴真实击键音效</span>
                </div>
                <div className="flex items-start gap-2">
                  <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>手工矢量图标与动态状态光</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Supporter Purchase Card (col-span-5) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-[#191824] to-[#12131c] relative shadow-2xl">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-400 text-slate-950 font-bold text-xs rounded-full shadow-md">
              一次赞助 · 终身全包
            </div>

            <div className="mb-6">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
                Goote Supporter Pack
              </span>
              <h3 className="text-2xl font-extrabold text-white">大师级 UI 主题赞助者套件</h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                用一杯咖啡的支出，换取更愉悦的十年书写视界，同时为独立开源作者提供持续的服务器与开发动力。
              </p>
            </div>

            <div className="mb-6 pb-6 border-b border-white/[0.08] flex items-baseline gap-2">
              <span className="text-4xl font-extrabold text-white font-mono">¥39</span>
              <span className="text-slate-400 text-xs font-mono">/ 买断永久授权 ($9 USD)</span>
            </div>

            <ul className="space-y-3 mb-8 text-xs text-slate-200">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>立即解锁所有当前 5 套精致商业主题</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>免费获取未来版本推出的所有官方与联名主题</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>解锁高级自定义配色器（HSL 调色轮自由定制）</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>4 种复古打字机与机械轴沉浸声效包</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>GitHub 赞助者徽章与社区功能优先提议权</span>
              </li>
            </ul>

            <button
              onClick={onOpenSupporter}
              className="w-full py-3 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl transition-all shadow-lg hover:shadow-amber-400/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>支持独立开源 · 解锁主题套件</span>
            </button>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-slate-500 font-mono">
                支持 微信支付 · 支付宝 · Stripe · 14天无条件退款保证
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
