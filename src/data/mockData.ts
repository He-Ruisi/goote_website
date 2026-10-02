import { AppTheme, DownloadInfo, PluginItem } from '../types';

export const THEMES: AppTheme[] = [
  {
    id: 'default-noir',
    name: '极简黑曜 (Noir)',
    subtitle: '开源免费标配',
    isPaid: false,
    bgClass: 'bg-[#0f141c]',
    panelClass: 'bg-[#151c27]',
    borderClass: 'border-slate-800',
    accentClass: 'bg-emerald-500',
    accentTextClass: 'text-emerald-400',
    accentGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    previewColor: '#10b981',
    fontFamily: 'font-sans',
    description: '经典的无衬线高对比度黑灰底色，极简纯粹，专注字句本身。'
  },
  {
    id: 'emerald-pine',
    name: '山涧翠影 (Pine Frost)',
    subtitle: '大师套件 · 限量',
    isPaid: true,
    bgClass: 'bg-[#0b1612]',
    panelClass: 'bg-[#10241e]',
    borderClass: 'border-emerald-900/60',
    accentClass: 'bg-emerald-400',
    accentTextClass: 'text-emerald-300',
    accentGlow: 'shadow-[0_0_25px_rgba(52,211,153,0.25)]',
    previewColor: '#34d399',
    fontFamily: 'font-serif',
    description: '汲取雪后松林的冷冽绿意，搭配典雅宋体风格，沉稳静谧。'
  },
  {
    id: 'crimson-obsidian',
    name: '赤霄玄石 (Crimson)',
    subtitle: '大师套件 · 热销',
    isPaid: true,
    bgClass: 'bg-[#140b0f]',
    panelClass: 'bg-[#221219]',
    borderClass: 'border-rose-950/70',
    accentClass: 'bg-rose-500',
    accentTextClass: 'text-rose-400',
    accentGlow: 'shadow-[0_0_25px_rgba(244,63,94,0.25)]',
    previewColor: '#f43f5e',
    fontFamily: 'font-sans',
    description: '深曜石与暗绯红的高张力交融，利落如锋刃，赋予高强度写作极佳反馈。'
  },
  {
    id: 'kyoto-washi',
    name: '京都和纸 (Washi Light)',
    subtitle: '大师套件 · 典雅',
    isPaid: true,
    bgClass: 'bg-[#f4efe6]',
    panelClass: 'bg-[#ede6da]',
    borderClass: 'border-[#dfd6c6]',
    accentClass: 'bg-[#b85a38]',
    accentTextClass: 'text-[#b85a38]',
    accentGlow: 'shadow-[0_0_20px_rgba(184,90,56,0.15)]',
    previewColor: '#b85a38',
    fontFamily: 'font-serif',
    description: '模拟手工和纸与天然矿物墨的温润质感，柔和漫反射，全天写作不伤眼。'
  },
  {
    id: 'cyber-nebula',
    name: '星云紫微 (Cyber Violet)',
    subtitle: '大师套件 · 视觉先锋',
    isPaid: true,
    bgClass: 'bg-[#0d0d1e]',
    panelClass: 'bg-[#15152e]',
    borderClass: 'border-indigo-900/50',
    accentClass: 'bg-indigo-500',
    accentTextClass: 'text-indigo-400',
    accentGlow: 'shadow-[0_0_25px_rgba(99,102,241,0.25)]',
    previewColor: '#818cf8',
    fontFamily: 'font-mono',
    description: '微光等离子紫调与等宽数字仪表感，极具极客工业气息。'
  },
  {
    id: 'bauhaus-grid',
    name: '包豪斯几何 (Bauhaus 1926)',
    subtitle: '大师套件 · 艺术',
    isPaid: true,
    bgClass: 'bg-[#111215]',
    panelClass: 'bg-[#1b1c22]',
    borderClass: 'border-amber-900/40',
    accentClass: 'bg-amber-400',
    accentTextClass: 'text-amber-300',
    accentGlow: 'shadow-[0_0_25px_rgba(251,191,36,0.2)]',
    previewColor: '#fbbf24',
    fontFamily: 'font-sans',
    description: '经典的明黄与冷灰结构对比，线条清晰明快，构图克制严密。'
  }
];

export const DOWNLOAD_OPTIONS: DownloadInfo[] = [
  {
    platform: 'macos',
    name: 'macOS',
    icon: 'apple',
    version: 'v1.4.2',
    size: '26.4 MB',
    formats: [
      { label: 'Apple Silicon (M1/M2/M3/M4)', file: 'Goote-1.4.2-arm64.dmg', arch: 'aarch64' },
      { label: 'Intel Mac (x64)', file: 'Goote-1.4.2-x64.dmg', arch: 'x86_64' }
    ],
    command: 'brew install --cask goote-app',
    sha256: '9f83a47b1e8e2194c03b1e326df8018ab3f98c86d8b2e105e4d2931a5472e391'
  },
  {
    platform: 'windows',
    name: 'Windows',
    icon: 'windows',
    version: 'v1.4.2',
    size: '28.1 MB',
    formats: [
      { label: 'Windows 64位 安装包 (.msi)', file: 'Goote-1.4.2-x64-setup.msi', arch: 'x64' },
      { label: '便携免安装绿色版 (.zip)', file: 'Goote-1.4.2-portable.zip', arch: 'portable' },
      { label: 'Windows ARM64', file: 'Goote-1.4.2-arm64.msi', arch: 'arm64' }
    ],
    command: 'winget install Goote.Goote',
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  },
  {
    platform: 'linux',
    name: 'Linux',
    icon: 'linux',
    version: 'v1.4.2',
    size: '24.9 MB',
    formats: [
      { label: '通用独立可执行包 (.AppImage)', file: 'Goote-1.4.2.AppImage', arch: 'universal' },
      { label: 'Debian / Ubuntu (.deb)', file: 'goote_1.4.2_amd64.deb', arch: 'deb' },
      { label: 'Arch Linux (AUR)', file: 'yay -S goote-bin', arch: 'aur' }
    ],
    command: 'flatpak install flathub org.goote.Goote',
    sha256: 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0'
  },
  {
    platform: 'android',
    name: 'Android',
    icon: 'android',
    version: 'v1.4.0',
    size: '18.2 MB',
    formats: [
      { label: '直接下载 APK 安装包', file: 'Goote-v1.4.0.apk', arch: 'arm64-v8a' },
      { label: '前往 F-Droid 开源市场', file: 'https://f-droid.org/packages/org.goote.app', arch: 'repo' }
    ],
    sha256: '7c98b234ef018274391abfde6283940172648102937482910482019482910482'
  },
  {
    platform: 'ios',
    name: 'iOS / iPadOS',
    icon: 'smartphone',
    version: 'v1.4.0',
    size: '21.5 MB',
    formats: [
      { label: 'TestFlight 实时公测', file: 'https://testflight.apple.com/join/goote', arch: 'tf' },
      { label: 'App Store (即将上架)', file: 'https://apps.apple.com/app/goote', arch: 'store' }
    ],
    sha256: 'verified-by-apple-sandbox'
  }
];

export const PLUGINS_LIST: PluginItem[] = [
  {
    id: 'whisper-local',
    name: 'Local Whisper 离线语音引擎',
    author: 'Goote Core',
    downloads: '42.8k',
    rating: 4.9,
    description: '无需网络，利用端侧芯片即时高精度转录普通话、方言与中英混说。',
    installed: true,
    tags: ['语音', '离线', 'AI']
  },
  {
    id: 'clean-typo',
    name: '排版洗发水 (Clean Typo)',
    author: 'community/zen',
    downloads: '38.2k',
    rating: 4.8,
    description: '自动在中英文间增加盘古空格、修正全半角标点、清理 PDF 换行粘连。',
    installed: true,
    tags: ['排版', '利器', '清洗']
  },
  {
    id: 'outliner-mindmap',
    name: '枝络放射脑图 (Radial Canvas)',
    author: 'branch-dev',
    downloads: '29.5k',
    rating: 4.9,
    description: '将树形笔记一键渲染为可自由拖拽连线的放射状知识枝络拓扑。',
    installed: false,
    tags: ['可视化', '脑图', '双链']
  },
  {
    id: 'wechat-sync',
    name: '多平台一键发布助手',
    author: 'writer-tools',
    downloads: '21.7k',
    rating: 4.7,
    description: '支持一键渲染为微信公众号、知乎专栏、小红书图文卡片排版。',
    installed: false,
    tags: ['导出', '媒体', '排版']
  }
];
