export type Language = 'zh' | 'en';

export interface Translations {
  nav: {
    brand: string;
    features: string;
    tools: string;
    download: string;
    themes: string;
    community: string;
    support: string;
    privacy: string;
    terms: string;
    about: string;
    downloadBtn: string;
    switchLang: string;
    langName: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    downloadBtn: string;
    demoBtn: string;
    versionPill: string;
  };
  why: {
    badge: string;
    title: string;
    subtitle: string;
    point1Title: string;
    point1Desc: string;
    point2Title: string;
    point2Desc: string;
    liquidTitle: string;
    liquidTag: string;
    liquidDesc: string;
    tabs: {
      quickCapture: {
        label: string;
        tooltip: string;
        badge: string;
        title: string;
        desc: string;
        hotkey: string;
        highlights: string[];
      };
      dualOutline: {
        label: string;
        tooltip: string;
        badge: string;
        title: string;
        desc: string;
        hotkey: string;
        highlights: string[];
      };
      mainEditor: {
        label: string;
        tooltip: string;
        badge: string;
        title: string;
        desc: string;
        hotkey: string;
        highlights: string[];
      };
      voiceStats: {
        label: string;
        tooltip: string;
        badge: string;
        title: string;
        desc: string;
        hotkey: string;
        highlights: string[];
      };
      extensions: {
        label: string;
        tooltip: string;
        badge: string;
        title: string;
        desc: string;
        hotkey: string;
        highlights: string[];
      };
    };
    screenshotTag: string;
    zoomHint: string;
    closeEsc: string;
    fluidCursorTitle: string;
    fluidCursorStatus: string;
  };
  tools: {
    title: string;
    subtitle: string;
    card1Badge: string;
    card1Title: string;
    card1Desc: string;
    card2Badge: string;
    card2Title: string;
    card2Desc: string;
    card3Badge: string;
    card3Title: string;
    card3Desc: string;
    card4Badge: string;
    card4Title: string;
    card4Desc: string;
    card5Badge: string;
    card5Title: string;
    card5Desc: string;
  };
  download: {
    title: string;
    subtitle: string;
    freeCard: {
      brand: string;
      name: string;
      version: string;
      released: string;
      feature1: string;
      feature2: string;
      feature3: string;
      winBtn: string;
      macBtn: string;
      linuxBtn: string;
    };
    proCard: {
      tag: string;
      name: string;
      price: string;
      priceUnit: string;
      feature1: string;
      feature2: string;
      feature3: string;
      feature4: string;
      btnText: string;
    };
    footerNav: {
      themes: string;
      features: string;
      tools: string;
      download: string;
      privacy: string;
      about: string;
    };
  };
  modal: {
    downloadTitle: string;
    downloadDesc: string;
    startDownload: string;
    themeTitle: string;
    themeDesc: string;
    themeSub: string;
    priceTag: string;
    featuresList: string[];
    wechatPay: string;
    alipay: string;
    cardPay: string;
    close: string;
  };
  privacyPolicy: {
    modalTitle: string;
    badge: string;
    lastUpdated: string;
    effectiveDate: string;
    leadStatement: string;
    quickSummary: string;
    corePillars: {
      title: string;
      desc: string;
      tag: string;
    }[];
    sections: {
      id: string;
      tag: string;
      title: string;
      summary: string;
      points: { subtitle: string; content: string }[];
    }[];
    closeBtn: string;
    printBtn: string;
    copyBtn: string;
    copiedNotice: string;
    contactLead: string;
    contactEmail: string;
    gdprNote: string;
  };
  footer: {
    brandDesc: string;
    followUs: string;
    supportEmail: string;
    supportSLA: string;
    copyright: string;
    morNotice: string;
    colProduct: string;
    colLegal: string;
    colSupport: string;
    download: string;
    quickCapture: string;
    markdownEditor: string;
    themesAudio: string;
    termsOfService: string;
    privacyPolicy: string;
    aiAup: string;
    refundPolicy: string;
    customerSupport: string;
    changelog: string;
    github: string;
    community: string;
  };
  legalModal: {
    title: string;
    tabTerms: string;
    tabAiAup: string;
    tabRefund: string;
    tabSupport: string;
    badge: string;
    lastUpdated: string;
    effectiveDate: string;
    closeBtn: string;
    copyBtn: string;
    copiedNotice: string;
    printBtn: string;
    morNotice: string;
    supportEmail: string;
    supportSLA: string;
    termsContent: {
      title: string;
      lead: string;
      articles: { num: string; heading: string; body: string }[];
    };
    aiAupContent: {
      title: string;
      lead: string;
      rules: { num: string; heading: string; body: string }[];
    };
    refundContent: {
      title: string;
      lead: string;
      policies: { num: string; heading: string; body: string }[];
    };
    supportContent: {
      title: string;
      lead: string;
      channels: { label: string; value: string; desc: string }[];
    };
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      brand: 'Neinote · 累牍',
      features: '特性',
      tools: '利器',
      download: '下载',
      themes: '主题',
      community: '社区',
      support: '赞助',
      privacy: '隐私',
      terms: '条款',
      about: '关于',
      downloadBtn: '下载',
      switchLang: '语言切换',
      langName: '中 / EN',
    },
    hero: {
      badge: '本地优先 · 自由输入输出',
      titleLine1: '全链条写作的',
      titleLine2: '瑞士军刀利器',
      desc: 'Neinote 是一个本地优先的碎片化收集、整合与 AI 辅助输入输出软件。自动隐藏的竖状速记窗随时语音录入，Markdown 整合主窗深度产出，所有功能全部免费解锁，仅靠大师 UI 与音效主题获取商业支持。',
      downloadBtn: '免费下载 (全功能解锁)',
      demoBtn: '查看双窗口演示',
      versionPill: '永久免费解锁全部生产力功能',
    },
    why: {
      badge: '本地优先 · 全链条写作',
      title: 'Why Neinote?',
      subtitle: '这是一个本地优先的碎片化收集、整合与 AI 辅助输入输出软件。以瑞士军刀般的灵活度，将灵感碎片化繁为简。',
      point1Title: '双窗口协同体系',
      point1Desc: '独立竖状自动贴边窗口专用于随手语音录入；Markdown 主窗口专用于沉浸知识整合与长篇输出。',
      point2Title: '所有功能全部免费',
      point2Desc: '所有生产力与核心机制永久无限制解锁，仅靠精心调教的定制 UI 界面与拟物音效包支持可持续发展。',
      liquidTitle: '流体录入交互',
      liquidTag: '流式动画',
      liquidDesc: '轻量动效反馈，毫秒级流体波纹状态响应，让随手暂停与语音流式录入丝滑自然。',
      tabs: {
        quickCapture: {
          label: '录入',
          tooltip: '自动隐藏的竖状录入窗 (随时语音录入与素材收集)',
          badge: '双窗口 · 极速录入',
          title: '自动隐藏的竖状速记窗',
          desc: 'Alt + Space 全局随手唤起，贴靠屏幕边缘自动隐藏。监听语音流式转写，随手捕获碎片灵感火花。',
          hotkey: 'Alt + Space',
          highlights: ['边缘吸附自隐', '实时监听语音流', '大纲层级碎片卡片'],
        },
        dualOutline: {
          label: '联动',
          tooltip: '双窗口联动：主编辑窗 + 悬浮大纲素材托盘',
          badge: '双窗口联动 · 素材大纲',
          title: '主编辑区与悬浮大纲协同',
          desc: '右侧随时调出大纲与素材抽屉，左侧专注长文编辑，素材卡片拖拽即用，双向排版一览无余。',
          hotkey: 'Ctrl + \\',
          highlights: ['左右窗口自由停靠', '素材库无缝拖拽', '树状大纲即时定位'],
        },
        mainEditor: {
          label: '主窗',
          tooltip: 'Markdown 知识整合与沉浸写作主窗口',
          badge: '沉浸写作 · 知识整合',
          title: 'Markdown 知识整合主窗口',
          desc: '专为深度长文与知识产出打造。纯文本 Markdown 树形管理、优雅的中文字体排版与无干扰工作流。',
          hotkey: 'Alt + M',
          highlights: ['沉浸式纯粹写作', '多级目录导航', '双链引用与反向链接'],
        },
        voiceStats: {
          label: '语音',
          tooltip: '语音中枢导航与口述时长数据统计',
          badge: '语音中枢 · 产出统计',
          title: '语音中枢导航与口述统计',
          desc: '内置端侧语音中枢，实时统计口述时长与输入记录。解放双手，用声音驱动全流程高速创作。',
          hotkey: 'Voice Hub',
          highlights: ['口述输入时长统览', '高准确度流式听写', '离线本地安全转写'],
        },
        extensions: {
          label: '插件',
          tooltip: 'Neinote 插件与扩展市场生态',
          badge: '自由算力 · 扩展生态',
          title: 'Neinote 插件与扩展生态',
          desc: '一键接入自定义 AI 算力与三方扩展，支持排版利器、多端同步与格式转换，打造专属的瑞士军刀。',
          hotkey: 'Plugin Store',
          highlights: ['BYOK 自备 AI 密钥', '排版清洗沙箱', '社区小而美利器'],
        },
      },
      screenshotTag: 'Neinote 实际界面',
      zoomHint: '放大查看细节',
      closeEsc: '关闭 ESC',
      fluidCursorTitle: '流式暂停/播放',
      fluidCursorStatus: '监听中 · Alt',
    },
    tools: {
      title: 'Powerful Tools',
      subtitle: '双窗口协同架构：左手极速碎片录入，右手深度知识整合。全功能完全免费，本地优先驱动。',
      card1Badge: '双窗口 · 极速录入',
      card1Title: '自动隐藏的竖状速记窗',
      card1Desc: '轻敲 Alt + Space 唤出紧凑竖状侧窗，录入即走，自动贴靠屏幕边缘隐藏。支持流式语音输入与碎片暂存托盘。',
      card2Badge: '双窗口 · 知识整合',
      card2Title: 'Markdown 深度输出主窗口',
      card2Desc: '主窗口专为组织知识网络与沉浸长文产出而生。多级双链拓扑大纲，结构一目了然，灵感随心串联。',
      card3Badge: '自由算力',
      card3Title: '自定义 AI 提示词管线',
      card3Desc: '支持自备 API Key 直连主流大模型或脱网调用本地 Ollama。零差价自由定制提示词管线。',
      card4Badge: '瑞士军刀',
      card4Title: '开放式插件与扩展系统',
      card4Desc: '缝合排版清洗、格式转换、数学公式与离线速记等小而美工具，自由组合你的专属瑞士军刀。',
      card5Badge: 'Local-First',
      card5Title: '本地优先与私钥自持',
      card5Desc: '数据 100% 存在本地纯文本与 SQLite 数据库，无强制云端锁定，断网也能飞速运行。',
    },
    download: {
      title: 'Download',
      subtitle: '永久免费解锁全部生产力功能 · 稳定轻量无广告',
      freeCard: {
        brand: 'Neinote',
        name: 'Free',
        version: 'Version: 1.4.2',
        released: 'Released: 2026年最新发布',
        feature1: '免费解锁所有功能（无任何限制）',
        feature2: '双窗口协同、语音速记与 Markdown 整合',
        feature3: '支持 Windows、macOS 与 Linux',
        winBtn: 'Win',
        macBtn: 'Mac',
        linuxBtn: 'Linux',
      },
      proCard: {
        tag: '精心打造 · 商业化支持',
        name: 'UI 主题与音效包',
        price: '¥39',
        priceUnit: '/ 永久拥有',
        feature1: '多套精心调教的大师级 UI 视觉主题',
        feature2: '清脆复古的客制化机械键盘打字音效',
        feature3: '支持作者持续迭代小而美的生产力利器',
        feature4: '进入专享体验交流群与新特性优先试用',
        btnText: '支持作者 / 购买主题包',
      },
      footerNav: {
        themes: '主题',
        features: '特性',
        tools: '利器',
        download: '下载',
        privacy: '隐私政策',
        about: '关于',
      },
    },
    modal: {
      downloadTitle: '下载 Neinote 安装包',
      downloadDesc: '选择对应平台架构，即可立即体验瑞士军刀级的轻量全链条写作。',
      startDownload: '立即下载安装包',
      themeTitle: '支持作者 · 购买主题与音效包',
      themeDesc: 'Neinote 所有生产力功能均永久免费开放，我们仅通过整套精心打造的高颜值 UI 界面与客制化机械音效包获取支持。',
      themeSub: '一次赞助，全平台所有精选主题与机械键盘打字音效终身解锁',
      priceTag: '永久赞助支持',
      featuresList: [
        '中国水墨、青绿山水、复古深色等 6 套大师级 UI 皮肤',
        '青轴、茶轴、打字机等 8 种高保真拟物立体音效',
        '永久享受后续新增的所有 UI 界面与音效拓展',
        '加入开发者深度交流社群，优先体验内测特性'
      ],
      wechatPay: '微信支付',
      alipay: '支付宝',
      cardPay: '信用卡',
      close: '关闭',
    },
    privacyPolicy: {
      modalTitle: 'Neinote 隐私政策与数据安全准则',
      badge: '本地优先 · 绝对主权 · 零数据收集',
      lastUpdated: '最后更新日期：2026 年 3 月',
      effectiveDate: '生效日期：2026 年 3 月 1 日',
      leadStatement: '在 Neinote（累牍），我们坚信：你的知识与思考属于你自己，并且只应留在你的设备里。我们采用与 Obsidian 相同的本地优先（Local-First）底层架构，绝不设中心化内容存储服务器，不采集你的私密文档，不转售任何 AI 算力，不进行任何窥探性行为跟踪。',
      quickSummary: '核心摘要：所有笔记与知识图谱 100% 存放在你自己的本地硬盘（Markdown / SQLite）；AI 仅支持直连 API（BYOK）或本地离线大模型，我们不售卖也不转售任何 AI 算力；购买主题采用合规支付通道，我们不碰触信用卡与银行账号；零行为遥测，永久保障数据自主权。',
      corePillars: [
        {
          title: '本地优先 · 绝对掌控',
          desc: '数据纯本地 Markdown / SQLite 文件存储，无中心数据服务器，零云端托管风险。',
          tag: '100% 本地存储',
        },
        {
          title: '自带 Key · 不卖 AI',
          desc: '现阶段仅提供直连 API 框架，用户自带 API Key 或连接本地 Ollama，我们不售卖算力、不转售代理、不留存 Prompt。',
          tag: 'BYOK 纯直连',
        },
        {
          title: '零遥测 · 无追踪代码',
          desc: '没有 Google Analytics、没有打点上报、没有按键监听，不贩卖任何用户画像。',
          tag: '零追踪 零打点',
        },
        {
          title: '独立支付 · 不存敏感信息',
          desc: '主题支持仅通过微信/支付宝/Stripe 官方接口完成，平台绝不收集或储存银行卡号与 CVV。',
          tag: 'PCI-DSS 合规',
        },
      ],
      sections: [
        {
          id: 'storage',
          tag: '01. 数据存储与主权',
          title: '本地优先架构与数据所有权',
          summary: '你的所有创作内容、碎片灵感与大纲数据完全存储于你的本地磁盘，不存在任何中心化用户云端服务器。',
          points: [
            {
              subtitle: '完全本地存储',
              content: '你在 Neinote 中录入的所有碎片文本、Markdown 篇章、知识图谱、思维大纲以及配置文件，均直接保存在你选定的本地设备目录中（通常为标准开放的 .md 文件与本地 SQLite 数据库）。',
            },
            {
              subtitle: '无中心内容服务器',
              content: 'Neinote 不运营任何集中式的云端用户内容服务器。这意味着你的笔记从未被传输或托管至我们的服务器，我们没有任何技术途径可以读取、解密、索引、共享或出售你的个人文档。',
            },
            {
              subtitle: '开放格式与无供应商锁定',
              content: '所有笔记均遵循通用的纯文本 Markdown 与标准嵌入格式。即使你将来决定不再使用 Neinote，也可以直接使用 VS Code、Obsidian、Logseq 或任何文本编辑器打开和自由迁移你的数据。',
            },
          ],
        },
        {
          id: 'ai-policy',
          tag: '02. AI 服务透明声明',
          title: 'AI 服务的纯 API 架构：我们不售卖任何 AI 服务',
          summary: 'Neinote 坚守工具中立定位。现阶段 AI 功能仅提供客户端直连 API 服务与本地引擎桥接，我们绝不售卖、代理或打包转售任何 AI 算力。',
          points: [
            {
              subtitle: '自带密钥模式（BYOK - Bring Your Own Key）',
              content: '用户在设置中填写的 API Key（例如 OpenAI、Google Gemini、Anthropic、DeepSeek、Groq 等）仅保存在你本地系统的安全密钥库中。发起总结、润色或大纲拓展时，客户端直接向所选 AI 服务商官方服务器发起端到端 HTTPS 请求，绝不经由 Neinote 中继服务器。',
            },
            {
              subtitle: '绝不售卖任何 AI 算力与订阅',
              content: 'Neinote 绝不向用户倒卖 Token、算力配额或收取任何 AI 订阅溢价。我们是一个纯粹的本地创作工具，不是 AI 转售商。你的 AI 使用成本完全由你与你选择的 API 提供商直接结算。',
            },
            {
              subtitle: '支持 100% 离线本地大模型',
              content: 'Neinote 原生支持对接本地运行的模型引擎（如 Ollama、LocalAI、LM Studio）。在本地模型模式下，所有生成计算完全在你的电脑硬件（GPU/NPU）上离线完成，不产生任何外网请求，真正实现物理级安全。',
            },
            {
              subtitle: '零数据训练承诺',
              content: '由于请求不经过我们，Neinote 绝不会使用你的任何笔记、Prompt 或输出结果来训练任何基础大模型或公开算法。',
            },
          ],
        },
        {
          id: 'account-payment',
          tag: '03. 账户与支付信息',
          title: '账户体系与主题赞助支付处理',
          summary: '基础版与全功能无需注册账户；可选的主题购买通过受信任的合规第三方支付平台进行，我们不保存敏感金融数据。',
          points: [
            {
              subtitle: '无需注册即可使用全部功能',
              content: 'Neinote 的所有核心生产力功能、双窗口模式、本地知识整合、离线 AI 桥接完全免费且免登录。你无需创建账户，也无需提交电子邮箱或电话号码。',
            },
            {
              subtitle: '主题与音效包赞助机制',
              content: '若你选择付费支持作者并解锁客制化 UI 主题与机械音效包，支付流程由合规的第三方支付服务商（微信支付、支付宝、Stripe 等）直接安全处理。',
            },
            {
              subtitle: '不收集或保存金融卡信息',
              content: 'Neinote 永远不会获取、处理或存储你的信用卡号、安全码（CVV）、银行卡信息或账户密码。我们仅接收支付网关返回的不可逆订单状态凭证，用于在本地为你激活主题包。',
            },
          ],
        },
        {
          id: 'audio-voice',
          tag: '04. 语音与麦克风录入',
          title: '竖状悬浮窗语音录入与音频流处理',
          summary: '麦克风调用仅在用户主动触发语音键时生效，音频流转录即焚，绝不上云存储。',
          points: [
            {
              subtitle: '用户显式授权与即时录音',
              content: '竖状悬浮窗的语音转文字功能仅在用户按下指定快捷键或主动点击录音按钮时激活。应用绝不在后台常驻监听环境声音。',
            },
            {
              subtitle: '内存中实时转文字与即时销毁',
              content: '录入的声音数据在本地内存流式解析（通过本地 Whisper 引擎或你配置的语音转写 API），转文字完成或用户松开按键后，音频缓存立即在内存中清除释放，不写入外部云盘。',
            },
          ],
        },
        {
          id: 'telemetry',
          tag: '05. 零遥测与网络透明',
          title: '无追踪代码、无埋点、网络透明',
          summary: 'Neinote 不包含任何行为分析埋点，软件的所有网络行为均受用户掌控。',
          points: [
            {
              subtitle: '零行为分析追踪',
              content: '我们不集成 Google Analytics、Mixpanel、Firebase Analytics、百度统计或任何营销追踪 SDK。我们不记录你的打字速度、打开文件频次、工作时长或使用偏好。',
            },
            {
              subtitle: '透明的网络更新检查',
              content: '软件仅提供可选的新版本检测功能，仅向公开的 GitHub Release 或 CDN 发起静态版本号对比，过程中不发送任何硬件唯一指纹（UUID/MAC）或个人标识符。',
            },
          ],
        },
        {
          id: 'plugins',
          tag: '06. 插件与扩展安全',
          title: '自定义插件与第三方系统沙箱',
          summary: '插件系统支持扩展功能，所有脚本在受限本地环境运行，并受权限隔离保护。',
          points: [
            {
              subtitle: '本地沙箱隔离',
              content: '自定义插件在受控本地环境中运行。当插件申请读写主笔记目录之外的磁盘空间或发起外部网络请求时，系统会向用户显示明确的授权弹窗。',
            },
            {
              subtitle: '开源透明审计',
              content: '我们提倡社区插件开源，用户可随时审查任何已安装插件的代码逻辑，杜绝暗门与恶意回传。',
            },
          ],
        },
        {
          id: 'rights',
          tag: '07. 您的权利与合规',
          title: '数据导出、删除权与全球隐私合规（GDPR/CCPA）',
          summary: '由于你拥有数据的全部物理所有权，你可以随时对笔记进行全量备份、导出或永久物理粉碎。',
          points: [
            {
              subtitle: '即时导出与无感备份',
              content: '因为你的数据本身就是你硬盘上的普通文件，只需复制目标文件夹，即可完成 100% 完整备份，无须等待云端打包归档。',
            },
            {
              subtitle: '真正的彻底删除',
              content: '在 Neinote 中删除文档或从硬盘中移除整个知识库目录即代表物理销毁，由于我们云端没有副本，不存在传统 SaaS 平台所谓的“30天软删除留存”风险。',
            },
          ],
        },
      ],
      closeBtn: '关闭',
      printBtn: '打印 / 另存为 PDF',
      copyBtn: '复制政策条款',
      copiedNotice: '已复制隐私政策到剪贴板',
      contactLead: '如对本隐私政策有任何疑问或安全建议，欢迎通过以下渠道与开发者联系：',
      contactEmail: 'contact@neinote.com',
      gdprNote: '符合欧盟 GDPR 与加州 CCPA 对数据隐私与消费者主权的高标准要求。',
    },
    footer: {
      brandDesc: '本地优先的碎片化收集、整合与写作利器',
      followUs: '关注与社区',
      supportEmail: 'support@neinote.com',
      supportSLA: '工作日 24-48 小时内答复',
      copyright: '© 2026 Neinote · 累牍. 保留所有权利。',
      morNotice: '增值主题扩展包由授权商家记录（Merchant of Record）合规结算，提供税务发票与退款保障。',
      colProduct: '产品',
      colLegal: '合规与条款',
      colSupport: '支持与资源',
      download: '下载客户端',
      quickCapture: '双窗口速记',
      markdownEditor: 'Markdown 主窗',
      themesAudio: '主题与音效包',
      termsOfService: '服务条款',
      privacyPolicy: '隐私政策',
      aiAup: 'AI 使用守则',
      refundPolicy: '退款与交付',
      customerSupport: '客户支持',
      changelog: '更新日志 (v1.4.2)',
      github: 'GitHub 仓库',
      community: '交流社群',
    },
    legalModal: {
      title: '法律合规中心 · 商家记录与服务规范',
      tabTerms: '服务条款 (Terms)',
      tabAiAup: 'AI 使用守则 (AUP)',
      tabRefund: '退款与交付政策',
      tabSupport: '客户支持与 SLA',
      badge: 'Merchant of Record 合规保证 · 本地优先',
      lastUpdated: '最后更新：2026 年 3 月',
      effectiveDate: '生效日期：2026 年 3 月 1 日',
      closeBtn: '关闭',
      copyBtn: '复制条款',
      copiedNotice: '已复制条款内容到剪贴板',
      printBtn: '打印 / 保存 PDF',
      morNotice: '重要提示：Neinote 的付费主题与音效扩展由认证商家记录（Merchant of Record）提供结算服务，包括税务合规、付款欺诈防范与发票开具。核心写作功能 100% 免费且本地离线可用。',
      supportEmail: 'support@neinote.com',
      supportSLA: '承诺在 24–48 小时（工作日）内处理并答复',
      termsContent: {
        title: 'Neinote 软件服务条款与增值服务购买协议',
        lead: '欢迎使用 Neinote（累牍）。Neinote 是一款坚守“本地优先”的碎片化收集、知识整合与全链条写作软件。基础功能与所有生产力核心机制对所有个人与商业用户完全免费开放。请在安装软件或购买增值主题包前仔细阅读以下条款：',
        articles: [
          {
            num: '01',
            heading: '软件核心许可与永久免费承诺',
            body: 'Neinote 授予用户不可转让、非排他性的免费使用许可。用户可在 Windows、macOS 及 Linux 平台上无限制使用所有双窗口协同、大纲整理、知识整合及离线 AI 接入功能。我们承诺核心生产力工具永远免费，不设置功能墙或强制订阅。',
          },
          {
            num: '02',
            heading: '付费增值主题与客制化音效包',
            body: '用户可自愿付费购买大师级 UI 视觉主题包与复古机械键盘音效包以支持独立开发者。购买后，您将获得针对该附加包的终身使用授权（Lifetime License），享有后续同系列主题包的持续更新。该费用为一次性支付，绝无任何自动扣费订阅。',
          },
          {
            num: '03',
            heading: '商家记录（Merchant of Record）支付与税务说明',
            body: 'Neinote 网站上的付费增值包订单由授权的商家记录（Merchant of Record，如 Lemon Squeezy / Paddle / Stripe）进行结算处理。MoR 负责订单收款、增值税（VAT）与销售税的计算与申报、欺诈监测以及电子发票提供。交易记录将在您的账单中体现 MoR 名称。',
          },
          {
            num: '04',
            heading: '用户内容主权与工具中立性',
            body: '用户在 Neinote 中创建、存储或整理的任何文字、草稿、大纲及数据，其知识产权与所有权 100% 归属于用户本人。Neinote 绝不保留、上传或主张任何用户内容的版权，亦不强制锁定文件格式（支持通用的标准 Markdown 与 SQLite）。',
          },
          {
            num: '05',
            heading: '软件保证与免责声明',
            body: 'Neinote 软件按“现状”（AS IS）提供，不包含任何明示或暗示的担保。作为本地优先软件，用户应对其个人计算机设备上的数据备份负主要责任。在法律允许的最大范围内，开发者及分销商不对因软硬件故障、系统崩溃或第三方服务商故障造成的任何间接损失承担责任。',
          },
        ],
      },
      aiAupContent: {
        title: 'AI 辅助写作功能使用准则 (Acceptable Use Policy)',
        lead: 'Neinote 坚守纯粹的工具中立定位，不自建大模型也不转售、代理任何 AI 算力 Token。AI 辅助功能纯粹基于客户端直连 API（自带密钥 BYOK）或本地离线运行的 Ollama / LM Studio 引擎。为确保全球合规与负责任的 AI 使用，特制定本使用守则：',
        rules: [
          {
            num: '01',
            heading: '自带密钥（BYOK）与零算力转售原则',
            body: 'Neinote 仅充当本地编辑器与 AI 服务商之间的直接调用工具。我们不向用户售卖任何 AI 额度，亦不截留或利用用户的 Prompt 进行算法训练。用户与所选 AI 供应商（如 OpenAI、Gemini、Anthropic、DeepSeek 等）直接建立服务关系。',
          },
          {
            num: '02',
            heading: '严格遵守上游基础模型提供商的使用政策',
            body: '用户在使用其个人 API 密钥接入特定 AI 服务时，必须严格遵守该模型提供商的官方使用政策与服务条款。Neinote 提供的客户端提示词模板不得用于诱导模型规避上游提供商的安全护栏与审核机制。',
          },
          {
            num: '03',
            heading: '严禁滥用与非法内容生成',
            body: '严禁使用 Neinote 的 AI 辅助功能编写、生成或传播以下内容：(a) 恶意软件、黑客攻击载荷、网络漏洞利用脚本；(b) 涉及虐待儿童（CSAM）、非自愿性暴力或极端主义暴力的材料；(c) 批量网络钓鱼、自动化垃圾营销、恶意欺诈或虚假金融欺诈信息；(d) 侵犯第三方商标、专利或著作权的非法复制内容。',
          },
          {
            num: '04',
            heading: '人工审核与最终发布责任（Human-in-the-Loop）',
            body: '生成式 AI 具有产生事实错误或误导性信息的固有局限（模型幻觉）。用户在使用 AI 辅助撰写文档、技术方案或公开发表材料时，负有最终的事实核实与内容审查义务，并对公开发表的内容独立承担一切法律责任。',
          },
        ],
      },
      refundContent: {
        title: '增值服务退款与数字商品交付政策',
        lead: '我们希望每位支持 Neinote 的创作者都能获得优质的视觉与听觉写作体验。为此，我们针对所有付费 UI 主题包与客制化音效包提供透明、诚恳的交付与退款保障：',
        policies: [
          {
            num: '01',
            heading: '14 天无忧全额退款保障',
            body: '如果您在购买 Neinote 主题与音效包后的 14 天内，因任何原因（例如审美不符、音效不合心意或意外购买）希望退款，我们提供全额退款支持，不收取任何隐形手续费。',
          },
          {
            num: '02',
            heading: '数字内容即时交付机制',
            body: '当您通过微信支付、支付宝或信用卡完成支付后，授权激活密钥及主题包下载凭据将立即在网页屏幕上展示，并自动发送至您在支付时填写的电子邮箱。您可在应用内立即一键激活。',
          },
          {
            num: '03',
            heading: '如何快速申请退款',
            body: '您可以通过以下任一途径发起退款：(1) 直接发送邮件至 support@neinote.com（附带您的订单号或付款邮箱）；(2) 通过购买收据邮件中的“Manage Order / Refund”链接一键提交。我们在收到请求后 24-48 小时内完成审核并放行退款。',
          },
          {
            num: '04',
            heading: '退款原路返还时效',
            body: '退款审批通过后，款项将通过商家记录（MoR）直接原路退回至您的微信、支付宝或支付银行卡账户。根据发卡银行与支付渠道的处理速度，通常在 3 至 7 个工作日内到账。',
          },
        ],
      },
      supportContent: {
        title: '客户支持渠道与服务响应时限 (SLA)',
        lead: '无论您遇到安装问题、激活凭证丢失、退款诉求还是关于软件的使用建议，我们的支持团队都会认真对待：',
        channels: [
          {
            label: '官方客服与退款邮箱',
            value: 'support@neinote.com',
            desc: '处理增值包购买、激活密钥补发、退款审核与商务咨询。承诺工作日 24–48 小时内人工答复。',
          },
          {
            label: '开发者直联邮箱',
            value: 'r.s.he477@gmail.com',
            desc: '用于安全漏洞通报、核心代码建议与紧急事项直联。',
          },
          {
            label: '开源与社区支持',
            value: 'GitHub Discussions / Issues',
            desc: '公开追踪功能建议与 Bug 反馈，由社区成员与作者共同维护。',
          },
        ],
      },
    },
  },
  en: {
    nav: {
      brand: 'Neinote',
      features: 'Features',
      tools: 'Tools',
      download: 'Download',
      themes: 'Themes',
      community: 'Community',
      support: 'Support',
      privacy: 'Privacy',
      terms: 'Terms',
      about: 'About',
      downloadBtn: 'Get App',
      switchLang: 'Switch Language',
      langName: 'EN / 中',
    },
    hero: {
      badge: 'Local-First · Seamless Input & Output',
      titleLine1: 'The Swiss Army Knife for',
      titleLine2: 'End-to-End Writing',
      desc: 'Neinote is a local-first application for micro-capture, knowledge synthesis, and AI-assisted creation. Features an auto-hiding vertical window for quick voice capture and an immersive Markdown window for knowledge synthesis. 100% free with all productivity features unlocked.',
      downloadBtn: 'Free Download (All Features)',
      demoBtn: 'Dual-Window Demo',
      versionPill: 'Permanently Free · All Features Unlocked',
    },
    why: {
      badge: 'Local-First · End-to-End Writing',
      title: 'Why Neinote?',
      subtitle: 'A local-first Swiss Army knife for fragmented capture, synthesis, and AI-assisted output. Turning chaotic inspiration into structured clarity.',
      point1Title: 'Dual-Window Architecture',
      point1Desc: 'Dedicated auto-hiding vertical dock for instant voice & scratch notes; full Markdown master window for deep knowledge synthesis.',
      point2Title: 'All Features 100% Free',
      point2Desc: 'All productivity mechanisms are permanently unlocked with zero limitations. Financed solely by handcrafted UI theme packs & haptic click sounds.',
      liquidTitle: 'Fluid Input Interaction',
      liquidTag: 'Liquid Motion',
      liquidDesc: 'Millisecond-level fluid wave feedback, making voice dictation and scratch pausing intuitive and silky smooth.',
      tabs: {
        quickCapture: {
          label: 'Capture',
          tooltip: 'Auto-hiding vertical outliner (Instant voice dictation & scratch collector)',
          badge: 'Dual-Window · Instant Capture',
          title: 'Auto-Hiding Vertical Scratchpad',
          desc: 'Summoned globally via Alt + Space and docks automatically to screen edge. Real-time voice streaming capture for fleeting thoughts.',
          hotkey: 'Alt + Space',
          highlights: ['Auto-hides to screen edge', 'Real-time voice stream', 'Outliner hierarchy cards'],
        },
        dualOutline: {
          label: 'Dual',
          tooltip: 'Dual-Window Sync: Master Editor + Floating Material Drawer',
          badge: 'Dual-Window · Material Outliner',
          title: 'Master Editor & Floating Outliner',
          desc: 'Toggle the outline & material drawer on the right while focusing on deep writing on the left. Drag-and-drop workflow at your fingertips.',
          hotkey: 'Ctrl + \\',
          highlights: ['Free floating dock layout', 'Seamless material drag & drop', 'Instant tree navigation'],
        },
        mainEditor: {
          label: 'Editor',
          tooltip: 'Markdown Knowledge Synthesis & Deep Writing Master Window',
          badge: 'Deep Writing · Knowledge Synthesis',
          title: 'Markdown Knowledge Master Window',
          desc: 'Engineered for long-form synthesis. Clean plain-text Markdown tree, elegant typography, and a distraction-free flow.',
          hotkey: 'Alt + M',
          highlights: ['Immersive deep writing', 'Multi-level TOC navigation', 'Bi-directional linking'],
        },
        voiceStats: {
          label: 'Voice',
          tooltip: 'Voice Hub Navigation & Dictation Statistics',
          badge: 'Voice Hub · Output Stats',
          title: 'Voice Hub & Dictation Analytics',
          desc: 'Built-in local voice hub tracking dictation duration and capture volume. Accelerate writing flow hands-free.',
          hotkey: 'Voice Hub',
          highlights: ['Dictation duration overview', 'High accuracy voice streaming', 'Offline local security'],
        },
        extensions: {
          label: 'Plugins',
          tooltip: 'Neinote Extension & Plugin Ecosystem',
          badge: 'Open Compute · Extension Hub',
          title: 'Neinote Plugin & Extension Hub',
          desc: 'Plug in custom AI models (BYOK), formatting formatters, and community micro-tools to assemble your bespoke Swiss Army knife.',
          hotkey: 'Plugin Store',
          highlights: ['BYOK custom AI keys', 'Typography sandbox', 'Handy micro-utilities'],
        },
      },
      screenshotTag: 'Neinote Real UI',
      zoomHint: 'Click to Inspect Detail',
      closeEsc: 'Close ESC',
      fluidCursorTitle: 'Fluid Pause / Play',
      fluidCursorStatus: 'Listening · Alt',
    },
    tools: {
      title: 'Powerful Tools',
      subtitle: 'Dual-window architecture: ultra-fast capture on the left, deep synthesis on the right. 100% free with local-first persistence.',
      card1Badge: 'Dual-Window · Instant Capture',
      card1Title: 'Auto-Hiding Vertical Scratchpad',
      card1Desc: 'Hit Alt + Space to reveal a compact vertical dock. Captures instantly, docks to edge, and supports streaming voice dictation.',
      card2Badge: 'Dual-Window · Knowledge Synthesis',
      card2Title: 'Markdown Deep Output Master Window',
      card2Desc: 'Engineered for knowledge synthesis and deep publishing. Bi-directional links and outliner tree keep ideas interconnected.',
      card3Badge: 'Custom Compute',
      card3Title: 'Custom AI Prompt Pipeline',
      card3Desc: 'Bring your own API Key (BYOK) for OpenAI/DeepSeek or run offline with local Ollama. Zero markup on your AI compute.',
      card4Badge: 'Swiss Army Knife',
      card4Title: 'Extensible Plugin & Tool Sandbox',
      card4Desc: 'Seamlessly combines typography linters, format converters, LaTeX math, and offline scrapers into your tailored kit.',
      card5Badge: 'Local-First',
      card5Title: 'Local-First & Data Sovereignty',
      card5Desc: 'Your data lives 100% in local plain text files and SQLite databases. No mandatory cloud lock-in; works flawlessly offline.',
    },
    download: {
      title: 'Download',
      subtitle: 'All productivity features permanently free · Lightweight, stable, ad-free',
      freeCard: {
        brand: 'Neinote',
        name: 'Free',
        version: 'Version: 1.4.2',
        released: 'Released: 2026 Latest',
        feature1: 'All features completely unlocked (No limits)',
        feature2: 'Dual-window workflow, voice dictation & Markdown',
        feature3: 'Available for Windows, macOS and Linux',
        winBtn: 'Win',
        macBtn: 'Mac',
        linuxBtn: 'Linux',
      },
      proCard: {
        tag: 'Handcrafted · Commercial Support',
        name: 'UI Themes & Sound Pack',
        price: '$5.9',
        priceUnit: '/ Lifetime',
        feature1: 'Artisan visual UI theme collections',
        feature2: 'Crisp tactile mechanical keyboard typing audio',
        feature3: 'Supports continuous independent development',
        feature4: 'Exclusive insider group & early preview releases',
        btnText: 'Support Author / Get Themes',
      },
      footerNav: {
        themes: 'Themes',
        features: 'Features',
        tools: 'Tools',
        download: 'Download',
        privacy: 'Privacy Policy',
        about: 'About',
      },
    },
    modal: {
      downloadTitle: 'Download Neinote',
      downloadDesc: 'Choose your platform architecture to start writing with the Swiss Army knife experience.',
      startDownload: 'Download Installer',
      themeTitle: 'Support Author · Themes & Audio Pack',
      themeDesc: 'All productivity features in Neinote are permanently free. We sustain development purely via artisan UI themes and custom mechanical audio packs.',
      themeSub: 'One-time support for lifetime access to all handcrafted UI skins & mechanical audio feedback',
      priceTag: 'Lifetime Patron Support',
      featuresList: [
        '6 artisanal master visual skins including Landscape Ink, Stone Green & Dark Mode',
        '8 haptic mechanical keyboard sound profiles (Blue, Brown, Typewriter, etc.)',
        'Lifetime access to all future UI themes and sound pack expansions',
        'Access to private patron discussion group & insider release builds'
      ],
      wechatPay: 'WeChat Pay',
      alipay: 'Alipay',
      cardPay: 'Credit Card',
      close: 'Close',
    },
    privacyPolicy: {
      modalTitle: 'Neinote Privacy Policy & Data Security Charter',
      badge: 'Local-First · Absolute Sovereignty · Zero Cloud Data',
      lastUpdated: 'Last Updated: March 2026',
      effectiveDate: 'Effective Date: March 1, 2026',
      leadStatement: 'At Neinote, we firmly believe your thoughts and knowledge belong strictly to you and should remain on your own device. Built upon the same local-first architecture popularized by Obsidian, we operate zero central user content servers, never collect your private notes, never resell AI compute, and run zero invasive behavioral tracking.',
      quickSummary: 'Key Summary: 100% of notes & knowledge graphs reside in plain Markdown and SQLite on your hard drive. AI features strictly use Direct API (BYOK) or local offline models—we do not sell or resell any AI services. Supporter payments are processed by PCI-compliant gateways; we never touch credit card details. Zero telemetry, forever honoring user sovereignty.',
      corePillars: [
        {
          title: 'Local-First Sovereignty',
          desc: '100% local Markdown / SQLite files on your physical disk with zero central cloud databases.',
          tag: '100% Local Storage',
        },
        {
          title: 'BYOK · No AI Reselling',
          desc: 'Bring your own API key or connect local Ollama models. We never resell compute, proxy tokens, or store prompts.',
          tag: 'Direct API Only',
        },
        {
          title: 'Zero Telemetry & Tracking',
          desc: 'No Google Analytics, no keystroke loggers, no trackers, and no user profiling of any kind.',
          tag: 'Zero Telemetry',
        },
        {
          title: 'Independent Payment Gateways',
          desc: 'Theme pack purchases are processed securely by WeChat/Alipay/Stripe. We store zero card or CVV details.',
          tag: 'PCI-DSS Compliant',
        },
      ],
      sections: [
        {
          id: 'storage',
          tag: '01. Data Storage & Ownership',
          title: 'Local-First Architecture & Full Data Ownership',
          summary: 'All your creative writing, fleeting thoughts, and outline structures are stored entirely on your local filesystem.',
          points: [
            {
              subtitle: '100% On-Device Storage',
              content: 'All scratchpad notes, Markdown articles, knowledge graphs, and configuration files created in Neinote are saved directly in your selected local directory (standard plaintext .md files and local SQLite database).',
            },
            {
              subtitle: 'No Central Content Servers',
              content: 'Neinote does not operate or maintain central cloud document servers. Your documents are never uploaded to our servers, meaning we have zero technical ability to read, index, decrypt, or monetize your work.',
            },
            {
              subtitle: 'Open Formats & Zero Vendor Lock-in',
              content: 'Your content is stored in standardized Markdown and SQLite. You can open, edit, or migrate your files anytime with VS Code, Obsidian, Logseq, or any plaintext tool.',
            },
          ],
        },
        {
          id: 'ai-policy',
          tag: '02. Transparent AI Policy',
          title: 'Pure API Architecture: We Do Not Sell Any AI Services',
          summary: 'Neinote is a pure productivity tool. We provide direct API connectivity and local LLM hooks; we do not resell or markup AI computing.',
          points: [
            {
              subtitle: 'Bring Your Own Key (BYOK)',
              content: 'API keys entered in settings (OpenAI, Gemini, Anthropic, DeepSeek, Groq, etc.) are encrypted locally in your operating system keychain. Prompts and completions travel directly between your machine and the provider’s official HTTPS endpoints without passing through Neinote intermediaries.',
            },
            {
              subtitle: 'Zero Markup & No Compute Reselling',
              content: 'Neinote does not resell tokens, compute credits, or charge AI subscriptions. You are not buying AI services from us; usage is billed directly between you and your chosen AI provider.',
            },
            {
              subtitle: '100% Offline Local LLMs (Ollama / LM Studio)',
              content: 'Neinote provides native support for local inference engines such as Ollama and LM Studio. In local mode, generation is executed 100% offline on your own GPU/NPU with zero internet outbound traffic.',
            },
            {
              subtitle: 'Zero AI Training on Your Notes',
              content: 'Because your data never passes through our infrastructure, we never train models, fine-tune algorithms, or share prompts using your personal notes.',
            },
          ],
        },
        {
          id: 'account-payment',
          tag: '03. Account & Payment Data',
          title: 'Account Architecture & Patron Payment Handling',
          summary: 'All core features require zero account registration. Optional theme support is handled by secure payment gateways.',
          points: [
            {
              subtitle: 'No Account Required for All Features',
              content: 'All productivity features, dual-window scratchpads, knowledge synthesis, and offline AI bridges are completely free and account-free. No email, password, or phone number required.',
            },
            {
              subtitle: 'Patron Theme & Audio Purchases',
              content: 'If you choose to support the author by purchasing UI themes and mechanical audio feedback packs, transactions are processed securely through certified payment providers (Stripe, WeChat Pay, Alipay).',
            },
            {
              subtitle: 'Zero Financial Card Data Stored',
              content: 'Neinote never receives, processes, or stores your credit card numbers, CVVs, or bank credentials. We only receive an anonymized transaction receipt token to unlock theme assets locally.',
            },
          ],
        },
        {
          id: 'audio-voice',
          tag: '04. Voice & Microphone Input',
          title: 'Vertical Dock Voice Capture & Audio Streams',
          summary: 'Microphone access occurs solely during user-initiated voice capture. Audio is transcribed in-memory and immediately discarded.',
          points: [
            {
              subtitle: 'Explicit User Initiation',
              content: 'Microphone access is triggered only when you explicitly press the voice hotkey or click the capture button. The application never listens passively in the background.',
            },
            {
              subtitle: 'Ephemeral In-Memory Transcription',
              content: 'Audio waveforms are streamed into transient memory buffers for instant transcription (via local Whisper or your personal speech API). Once transcribed or released, the audio buffer is wiped immediately.',
            },
          ],
        },
        {
          id: 'telemetry',
          tag: '05. Zero Telemetry & Privacy',
          title: 'No Tracking SDKs, No Behavior Profiling',
          summary: 'Neinote operates with zero telemetry, keeping all your software interactions strictly confidential.',
          points: [
            {
              subtitle: 'Strict Zero-Telemetry Standard',
              content: 'We bundle no Google Analytics, Mixpanel, Sentry user tracking, or advertising pixels. We do not track typing speed, note count, or usage patterns.',
            },
            {
              subtitle: 'Transparent Update Checks',
              content: 'Optional version checking queries public GitHub Release or CDN endpoints for static version tags without transmitting hardware fingerprints or device UUIDs.',
            },
          ],
        },
        {
          id: 'plugins',
          tag: '06. Plugin & Extension Security',
          title: 'Custom Plugins & Sandboxed Execution',
          summary: 'User-created plugins and extensions execute within sandboxed environments with strict permission boundaries.',
          points: [
            {
              subtitle: 'Local Sandboxing',
              content: 'Custom extensions run within local sandbox boundaries. If an extension attempts to access filesystem paths outside the vault or make external network calls, an explicit user permission prompt is required.',
            },
            {
              subtitle: 'Open Source Community Auditing',
              content: 'We advocate for open-source plugin code, empowering users and security researchers to inspect extension logic freely.',
            },
          ],
        },
        {
          id: 'rights',
          tag: '07. Your Rights & Compliance',
          title: 'Data Portability, Physical Erasure & GDPR/CCPA',
          summary: 'Because you physically hold all data on disk, you enjoy effortless export, migration, and permanent shredding.',
          points: [
            {
              subtitle: 'Instant Backup & Portability',
              content: 'Simply copy your local notes folder to an external drive or Git repository for immediate, complete backups with zero waiting for cloud export archives.',
            },
            {
              subtitle: 'True Physical Erasure',
              content: 'Deleting a file or folder in Neinote deletes it directly on your hard drive. Since there is no cloud mirror, there is zero risk of ghost retention or 30-day soft-delete lingering.',
            },
          ],
        },
      ],
      closeBtn: 'Close',
      printBtn: 'Print / Save as PDF',
      copyBtn: 'Copy Policy',
      copiedNotice: 'Privacy policy copied to clipboard',
      contactLead: 'If you have any questions, security disclosures, or suggestions regarding this privacy policy, please contact us:',
      contactEmail: 'contact@neinote.com',
      gdprNote: 'Designed to comply fully with EU GDPR and California CCPA global data sovereignty standards.',
    },
    footer: {
      brandDesc: 'Local-first tool for micro-capture, knowledge synthesis, and writing.',
      followUs: 'Follow us',
      supportEmail: 'support@neinote.com',
      supportSLA: 'Response within 24–48 business hours',
      copyright: '© 2026 Neinote. All rights reserved.',
      morNotice: 'Theme and sound pack add-ons are processed securely by authorized Merchant of Record partners with full invoicing and refund guarantees.',
      colProduct: 'Get started',
      colLegal: 'Legal & Terms',
      colSupport: 'Resources',
      download: 'Download',
      quickCapture: 'Quick Capture',
      markdownEditor: 'Markdown Editor',
      themesAudio: 'Themes & Audio',
      termsOfService: 'Terms of service',
      privacyPolicy: 'Privacy policy',
      aiAup: 'AI Acceptable Use',
      refundPolicy: 'Refund policy',
      customerSupport: 'Customer support',
      changelog: 'Changelog (v1.4.2)',
      github: 'GitHub repository',
      community: 'Community',
    },
    legalModal: {
      title: 'Legal & Compliance Center · Merchant of Record Terms',
      tabTerms: 'Terms of Service',
      tabAiAup: 'AI Acceptable Use (AUP)',
      tabRefund: 'Refund & Delivery',
      tabSupport: 'Support & SLA',
      badge: 'Merchant of Record Compliant · Local-First',
      lastUpdated: 'Last Updated: March 2026',
      effectiveDate: 'Effective Date: March 1, 2026',
      closeBtn: 'Close',
      copyBtn: 'Copy Terms',
      copiedNotice: 'Terms copied to clipboard',
      printBtn: 'Print / Save as PDF',
      morNotice: 'Important Notice: Paid UI themes and audio add-ons for Neinote are fulfilled securely by certified Merchant of Record (MoR) partners who manage tax compliance, card security, and invoicing. Core writing features remain 100% free and work fully offline.',
      supportEmail: 'support@neinote.com',
      supportSLA: 'Response guaranteed within 24–48 business hours',
      termsContent: {
        title: 'Neinote Software Terms of Service & Add-on Agreement',
        lead: 'Welcome to Neinote. Neinote is a local-first software application designed for micro-capture, knowledge synthesis, and end-to-end writing. All core productivity tools and features are permanently free for personal and commercial use without account registration. Please review these terms carefully before installing the software or purchasing add-on themes:',
        articles: [
          {
            num: '01',
            heading: 'Core License & Permanent Free Software Guarantee',
            body: 'Neinote grants you a non-transferable, non-exclusive, perpetual license to use the core application across Windows, macOS, and Linux without charge. All dual-window workflows, markdown synthesis, local outlining, and offline AI bridges are unrestricted. We guarantee that core productivity features will never be locked behind subscriptions or paywalls.',
          },
          {
            num: '02',
            heading: 'Artisan UI Themes & Mechanical Audio Add-ons',
            body: 'Users may optionally purchase artisanal visual themes and authentic mechanical keyboard typing sound packs to support ongoing independent development. Purchases grant a personal, perpetual, non-exclusive lifetime license for the purchased asset pack. All payments are strictly one-time; there are no recurring subscription fees.',
          },
          {
            num: '03',
            heading: 'Merchant of Record (MoR) & Tax Compliance Disclosure',
            body: 'Order transactions for paid add-ons are processed by our authorized Merchant of Record (MoR) reseller (such as Lemon Squeezy, Paddle, or Stripe). The MoR is the merchant of record for customer order fulfillment, collection and remittance of applicable sales taxes (VAT/GST/sales tax), payment fraud screening, and official receipt generation. Your credit card billing statement will reflect the MoR entity name.',
          },
          {
            num: '04',
            heading: '100% User Content Ownership & Tool Neutrality',
            body: 'You retain absolute and exclusive intellectual property ownership of all notes, drafts, voice transcriptions, outlines, and databases created within Neinote. We claim zero rights, licenses, or title to your work. Neinote stores all documents locally in standardized open formats (plaintext Markdown and SQLite) with zero vendor lock-in.',
          },
          {
            num: '05',
            heading: 'Warranty Disclaimer & Limitation of Liability',
            body: 'Neinote is provided "AS IS", without warranty of any kind, express or implied. As a local-first application, the user maintains primary responsibility for regular filesystem backups. To the maximum extent permitted by applicable law, neither the author nor distribution partners shall be liable for any indirect, incidental, or consequential damages resulting from hardware, OS, or third-party service failures.',
          },
        ],
      },
      aiAupContent: {
        title: 'AI-Assisted Writing Acceptable Use Policy (AUP)',
        lead: 'Neinote adheres to strict tool neutrality. We neither build proprietary models nor resell or markup AI tokens. AI assistance is powered purely via client-side Direct API calls (Bring Your Own Key - BYOK) or local offline inference engines (Ollama / LM Studio). To ensure global regulatory compliance and responsible usage, users must comply with the following standards:',
        rules: [
          {
            num: '01',
            heading: 'BYOK Architecture & Zero Token Reselling Principle',
            body: 'Neinote functions strictly as an interface between your local markdown editor and your configured AI endpoints. We do not sell computing credits, proxy prompts, or use your writing to train algorithms. You maintain an independent contractual relationship with your chosen AI provider (OpenAI, Gemini, Anthropic, DeepSeek, etc.).',
          },
          {
            num: '02',
            heading: 'Compliance with Upstream AI Foundation Policies',
            body: 'When providing API keys to third-party providers, you agree to adhere strictly to the respective foundation model provider’s Usage Policies, Terms of Service, and ethical guidelines. Prompt templates provided in Neinote must not be configured or used to circumvent safety guardrails.',
          },
          {
            num: '03',
            heading: 'Strictly Prohibited Uses & Unlawful Generation',
            body: 'You may not use Neinote’s AI integrations to generate, process, or disseminate: (a) Malware, exploits, ransomware, or cyberattack payloads; (b) Child sexual abuse material (CSAM) or non-consensual sexually explicit content; (c) High-volume automated spam, phishing, financial fraud, or deceptive disinformation campaigns; (d) Unlawful copies violating third-party copyrights or intellectual property rights.',
          },
          {
            num: '04',
            heading: 'Human-in-the-Loop & Sole Editorial Responsibility',
            body: 'Generative AI models are subject to probabilistic hallucinations, factual omissions, and biases. When utilizing AI-assisted drafts or summaries for publishing, professional counsel, or public dissemination, you retain sole responsibility for reviewing, fact-checking, and validating the final output.',
          },
        ],
      },
      refundContent: {
        title: 'Add-on Refund & Digital Delivery Policy',
        lead: 'We want every patron supporting Neinote to be completely delighted with their visual skins and mechanical keyboard acoustics. We provide clear, straightforward refund and delivery guarantees for all digital purchases:',
        policies: [
          {
            num: '01',
            heading: '14-Day Hassle-Free Money-Back Guarantee',
            body: 'If you are unsatisfied with your purchased UI theme or mechanical sound pack for any reason within 14 days of purchase, we offer a full refund without hidden cancellation fees or questions asked.',
          },
          {
            num: '02',
            heading: 'Instant Digital Fulfillment',
            body: 'Upon successful payment processing by our MoR partner, your activation license key and theme package assets are unlocked immediately on your browser screen and emailed to the billing email address provided. Instant in-app activation is supported.',
          },
          {
            num: '03',
            heading: 'How to Request a Refund',
            body: 'You can initiate a refund through either method: (1) Email us at support@neinote.com with your order number or billing email; or (2) Click the "Manage Order / Request Refund" link included in your official receipt email. Requests are acknowledged and approved within 24–48 business hours.',
          },
          {
            num: '04',
            heading: 'Refund Processing Timelines',
            body: 'Approved refunds are credited back to your original payment method (Credit Card, WeChat Pay, Alipay) via our Merchant of Record. Processing generally completes within 3 to 7 business days depending on your financial institution.',
          },
        ],
      },
      supportContent: {
        title: 'Customer Support Channels & Service Level Agreement (SLA)',
        lead: 'Whether you require assistance with installation, license key recovery, refund requests, or software feedback, our team is committed to assisting you:',
        channels: [
          {
            label: 'Official Support & Refund Email',
            value: 'support@neinote.com',
            desc: 'Handles add-on purchases, license recovery, refund claims, and billing questions. Guaranteed human response within 24–48 business hours.',
          },
          {
            label: 'Lead Developer Direct Contact',
            value: 'r.s.he477@gmail.com',
            desc: 'Direct line for security vulnerability disclosures, core codebase architecture, and urgent inquiries.',
          },
          {
            label: 'Open Source Community Support',
            value: 'GitHub Discussions / Issues',
            desc: 'Track public feature proposals, bug fixes, and plugin ecosystem discussions alongside fellow creators.',
          },
        ],
      },
    },
  },
};
