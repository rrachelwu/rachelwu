import ssrouterCover from '@/assets/ssrouter-cover.webp';
import pokubyCover from '@/assets/pokubuy-cover.webp';
import wheelslineCover from '@/assets/wheelsline-cover.webp';

export interface DecisionItem {
  problem: string;
  judgment: string;
  solution: string;
  /** Optional image inserted below this decision card */
  image?: string;
  imageCaption?: string;
  imageCaptionEn?: string;
}

export interface DeliverableItem {
  image?: string;
  images?: string[];
  layout?: 'single' | 'row-3' | 'grid-2x2';
  caption: string;
  title?: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
  /** Captions for each image in `images` array (e.g. "Before", "After") */
  imageCaptions?: string[];
}

export interface ComparisonItem {
  title: string;
  titleEn: string;
  leftImage?: string;
  leftCaption: string;
  leftCaptionEn: string;
  rightImage?: string;
  rightCaption: string;
  rightCaptionEn: string;
  fullWidth?: boolean;
  fullWidthImage?: string;
}

export interface ComparisonSection {
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  items: ComparisonItem[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  coverImage: string;
  /** Optional custom link path (overrides default /projects/:slug) */
  linkTo?: string;
  // 一句话描述：我解决了什么问题
  summary: string;
  summaryEn: string;
  role: string;
  roleEn: string;
  duration: string;
  durationEn: string;
  status?: string;
  statusEn?: string;
  tags: string[];
  tagsEn: string[];
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
  };
  // 新结构
  background: string;
  backgroundEn: string;
  decisions: DecisionItem[];
  decisionsEn: DecisionItem[];
  deliverables: DeliverableItem[];
  deliverablesEn: DeliverableItem[];
  results: string[];
  resultsEn: string[];
  reflection: string;
  reflectionEn: string;
  /** Optional comparison section (e.g. before/after redesign) */
  comparisons?: ComparisonSection;
}

export const projects: Project[] = [
  {
    id: "0",
    slug: "fengos",
    title: "FengOS HMI — 智能投影仪多状态交互系统设计",
    titleEn: "FengOS HMI — Smart Projector Multi-State Interaction System",
    coverImage: "/fengos-cover.png",
    summary: "遥控器只有方向键和OK键，但用户要完成选片、K歌、应用管理全部操作——为峰米投影仪 FengOS 设计一套在焦点交互约束下仍然清晰易用的 HMI 交互规范。",
    summaryEn: "With only directional keys and an OK button, users need to complete everything from content browsing to karaoke and app management — designed a clear and usable HMI interaction system for Formovie FengOS smart projector under remote control constraints.",
    role: "产品设计师",
    roleEn: "Product Designer",
    duration: "2023.08 - 2023.11",
    durationEn: "Aug 2023 - Nov 2023",
    status: "已上线",
    statusEn: "Launched",
    tags: ["智能硬件", "HMI交互", "C端产品"],
    tagsEn: ["Smart Hardware", "HMI Design", "Consumer Product"],
    techStack: ["Figma", "FengOS 2.0", "FengOS 3.0", "遥控器交互规范"],
    links: {},
    background: "峰米投影仪搭载 FengOS 系统，用户通过遥控器操作所有功能。遥控器的物理限制——只有方向键、OK键和少数功能键——让 TV 端交互远比触屏复杂：焦点状态必须始终清晰，操作路径必须足够短，边界状态必须全部被设计到。我参与了 FengOS 2.0 到 3.0 的迭代设计，负责焦点海报多状态规范、K歌频道信息架构、常用面板交互逻辑三个模块。",
    backgroundEn: "Formovie projectors run the FengOS system, where users control everything via remote. The physical constraints of a remote — only directional keys, OK, and a few function buttons — make TV interaction far more complex than touchscreen: focus states must always be clear, action paths must be short, and every edge case must be accounted for. I participated in the iteration from FengOS 2.0 to 3.0, responsible for the focal banner multi-state specs, K-song channel IA, and shortcut panel interaction logic.",
    decisions: [
      {
        problem: "焦点海报标题长短不一，长标题会撑破布局或截断内容",
        judgment: "TV端海报是用户进入后第一眼看到的核心内容，标题显示完整与否直接影响用户判断是否点击观看。不能靠截断解决，必须有规则地适配",
        solution: "制定以9字为分界的双规则系统：9字以内单行展示，保持简洁；超过9字自动换行并调整描述文字区域高度，2.0和3.0分别针对不同视觉风格做了对应适配，确保两个版本的海报在任意标题长度下都不破版",
      },
      {
        problem: "常用面板的编辑、排序、卸载三个操作如何在遥控器上清晰区分",
        judgment: "TV端没有右键菜单、没有长按弹出上下文菜单的视觉反馈，用户很容易搞不清楚当前处于什么操作模式",
        solution: "设计三层操作状态机：普通浏览→长按进入编辑→再次长按进入排序。每个状态有独立的顶部提示文案和图标状态变化，焦点移动逻辑也针对每个状态单独定义，确保用户在任何一步都知道自己在做什么",
      },
      {
        problem: "K歌频道需要同时承载历史记录、点歌入口、分类浏览三类不同深度的用户需求",
        judgment: "TV端K歌用户行为分两类：知道要唱什么的用户想快速找到，不知道唱什么的用户需要分类浏览引导。两类需求放在同一页面容易互相干扰",
        solution: "首屏顶部放高频直达入口（K歌历史、点歌台），中部放运营位，下部按分类和年代/语种双维度组织内容，满足探索型用户的浏览需求，两类用户路径在视觉上互不干扰",
      },
    ],
    decisionsEn: [
      {
        problem: "Focal banner titles vary greatly in length — long titles break layouts or get truncated",
        judgment: "The banner is the first thing users see after entering — whether the title displays completely directly affects their decision to watch. Truncation isn't acceptable; systematic adaptation rules are needed",
        solution: "Established a dual-rule system with 9 characters as the threshold: under 9 displays single-line for clarity; over 9 auto-wraps with adjusted description area height. Both FengOS 2.0 and 3.0 received version-specific adaptations ensuring no layout breaks at any title length",
      },
      {
        problem: "How to clearly differentiate edit, sort, and uninstall operations on a remote control",
        judgment: "TV has no right-click menus or contextual long-press feedback — users easily lose track of which operation mode they're in",
        solution: "Designed a three-layer state machine: normal browsing → long press to enter edit → long press again to enter sort. Each state has independent top prompt text and icon state changes, with focus movement logic defined separately per state so users always know what they're doing",
      },
      {
        problem: "K-song channel needs to serve three distinct user need depths: history, direct song search, and browse by category",
        judgment: "TV karaoke users split into two types: those who know what they want (need quick access) and those who don't (need guided browsing). Mixing both on one page easily creates interference",
        solution: "Top of first screen holds high-frequency direct entries (K-song history, song request); middle holds editorial content; bottom organizes by category and era/language for exploration-type users — two user paths visually non-interfering",
      },
    ],
    deliverables: [
      {
        title: "焦点海报多状态规范",
        caption: "",
        description: "FengOS 2.0/3.0 双版本，覆盖标题9字内/超9字 × 首屏/第2行以后共4种状态的完整适配规则",
        image: "/images/fengos/banner-states.png",
        layout: "single" as const,
      },
      {
        title: "K歌频道页面",
        caption: "",
        description: "K歌历史、点歌台、热门歌手、分类点歌、年代/语种分类入口完整页面，信息层级三段式布局",
        image: "/images/fengos/kge-channel.png",
        layout: "single" as const,
      },
      {
        title: "常用面板交互流程",
        caption: "",
        description: "编辑、排序、卸载三种操作模式的完整状态机，含焦点移动规则、提示文案逻辑、边界状态处理",
        image: "/images/fengos/shortcut-panel.png",
        layout: "single" as const,
      },
    ],
    deliverablesEn: [
      {
        title: "Focal Banner Multi-State Specs",
        caption: "",
        description: "FengOS 2.0/3.0 dual-version, complete adaptation rules for 4 states: under/over 9 chars × first screen/subsequent rows",
        image: "/images/fengos/banner-states.png",
        layout: "single" as const,
      },
      {
        title: "K-Song Channel Page",
        caption: "",
        description: "Complete page covering K-song history, song request, hot artists, category browsing, era/language filters — three-section IA layout",
        image: "/images/fengos/kge-channel.png",
        layout: "single" as const,
      },
      {
        title: "Shortcut Panel Interaction Flow",
        caption: "",
        description: "Complete state machine for edit, sort, and uninstall modes — including focus movement rules, prompt text logic, and edge state handling",
        image: "/images/fengos/shortcut-panel.png",
        layout: "single" as const,
      },
    ],
    results: [
      "FengOS 2.0/3.0 双版本焦点海报多状态规范落地，覆盖全部标题长度边界情况",
      "常用面板交互状态机完整交付，三种操作模式均有清晰的焦点状态和提示文案区分",
      "K歌频道从0搭建信息架构，双类型用户路径在同一页面内互不干扰",
      "遥控器焦点交互规范作为设计文档沉淀，支持后续版本迭代复用",
    ],
    resultsEn: [
      "FengOS 2.0/3.0 dual-version focal banner multi-state specs fully delivered, covering all title length edge cases",
      "Shortcut panel interaction state machine completely delivered — three operation modes each with clear focus states and distinct prompt text",
      "K-song channel IA built from scratch, dual user paths non-interfering within the same page",
      "Remote control focus interaction specs documented as reusable design reference for future iterations",
    ],
    reflection: "3个月时间短，很多决策是在快速迭代中做出的，没有足够的用户测试来验证焦点状态切换是否真的符合用户直觉。TV端用户和手机用户的操作习惯差异很大，理想情况下应该在真实投影环境下做可用性测试，而不只是在Figma里模拟遥控器操作路径。",
    reflectionEn: "With only 3 months, many decisions were made in rapid iteration without sufficient user testing to validate whether focus state transitions truly matched user intuition. TV users and mobile users have significantly different interaction habits — ideally usability testing should happen in a real projection environment, not just simulating remote control paths in Figma.",
  },
  {
    id: "2",
    slug: "jinyin",
    title: "金银湖安全大模型 — 代码漏洞检测平台UI设计",
    titleEn: "Jinyinhu Security LLM — Code Vulnerability Detection Platform UI Design",
    coverImage: "/jinyin-cover.png",
    summary: "面向安全研究员的代码漏洞检测大模型——用户提交代码，系统在30分钟内完成10万行代码的漏洞扫描并输出检测报告。如何让专业的漏洞检测结果对工程师清晰可读，是这个项目的核心设计挑战。",
    summaryEn: "A code vulnerability detection LLM for security researchers — users submit code, the system scans 100k lines within 30 minutes and outputs detection reports. Making professional vulnerability results clearly readable for engineers was the core design challenge.",
    role: "UI/UX设计师",
    roleEn: "UI/UX Designer",
    duration: "2024.09 - 2024.11",
    durationEn: "Sep 2024 - Nov 2024",
    status: "交付上线（内部）",
    statusEn: "Delivered & Launched (Internal)",
    tags: ["AI产品", "网络安全", "B端工具"],
    tagsEn: ["AI Product", "Cybersecurity", "Enterprise Tool"],
    techStack: ["Figma", "漏洞检测界面", "代码块设计", "国家机构视觉规范"],
    links: {},
    background: "武汉金银湖实验室是依托华中科技大学、武汉大学等顶尖高校，在国家网络安全人才与创新基地建立的新型研发机构，由武汉市人民政府批复设立。核心产品是面向网络安全领域的代码漏洞检测大模型——通过学习30多万个「漏洞切片」，实现从百万行代码中自动捕捉漏洞，10万行代码扫描不超过30分钟。我作为外包设计师独立负责该平台全部UI设计，用户是安全研究员和工程师。项目中途因需求表达不清晰，主动推动了一次线下需求沟通，明确了核心使用场景后再进入高保真设计阶段。因签署保密协议，完整页面不对外展示。这个产品本质上是把安全工程师原本在命令行环境下完成的漏洞扫描工作，转化为有界面、有结构化输出的 Web 平台——设计的核心挑战不只是「好看」，而是如何让习惯了 CLI 工具的专业用户，在 GUI 界面里感受到同等甚至更高的效率和可控感。",
    backgroundEn: "Wuhan Jinyinhu Laboratory is a new R&D institution established at the National Cybersecurity Talent and Innovation Base, approved by the Wuhan Municipal Government and built with HUST and Wuhan University. Its core product is a code vulnerability detection LLM — trained on 300,000+ 'vulnerability slices' to automatically detect vulnerabilities, scanning 100k lines of code in under 30 minutes. As a freelance designer, I independently handled all UI design. Mid-project, I proactively initiated an in-person requirement clarification session before entering high-fidelity design. Full pages are not publicly displayed due to NDA. This product essentially transforms vulnerability scanning work that security engineers previously did in command-line environments into a web platform with structured UI and output — the core design challenge wasn't just aesthetics, but how to make professional users accustomed to CLI tools feel equal or greater efficiency and control in a GUI interface.",
    decisions: [
      {
        problem: "漏洞检测报告包含大量代码片段和技术细节，纯文字呈现对工程师极不友好",
        judgment: "安全工程师看漏洞报告的核心诉求是：快速定位漏洞位置、理解风险等级、获取修复建议。如果代码和文字混排没有层级，工程师需要逐行阅读才能找到关键信息，效率极低",
        solution: "设计三层信息架构：漏洞摘要（风险等级+位置）→ 漏洞详情（上下文说明）→ 代码块（具体漏洞片段+修复建议）。代码块采用深色背景与正文区强对比，等宽字体确保代码可读性，关键漏洞行高亮标注，让工程师扫描式阅读即可定位问题",
      },
      {
        problem: "客户产品经验不足，需求表达模糊，设计方向反复变动",
        judgment: "外包项目中需求不清晰比设计难题更危险——每一次方向变动都意味着大量返工。必须主动介入产品决策，而不是被动等待需求",
        solution: "基于对网络安全工具产品形态的理解，独立完成高保真设计稿后带到线下与客户现场确认。会议中逐页走查，对齐细节调整点，整体方案一稿通过，后续只做局部微调。把设计决策的主导权握在自己手里，而不是等客户给方向——这是推动外包项目顺利交付的关键",
      },
      {
        problem: "产品服务于国家网安基地科研机构，视觉风格需要匹配政府科研机构的权威感，而不是商业SaaS产品的轻量感",
        judgment: "金银湖实验室logo采用深蓝色系，国家网安基地的视觉调性是专业、权威——这套语言决定了产品的主色方向。但作为一个工具类平台，界面本身需要保持简洁克制，让用户专注于内容而非界面本身，不能因为强调机构感而牺牲信息可读性",
        solution: "白色底+深蓝主色的设计方案：整体界面保持白色简约风格，以金银湖实验室logo的深蓝色作为主色，用于导航、按钮、强调元素等关键交互节点。盾牌logo在登录页居中作为视觉锚点，传递安全可信的机构背书感。简约的白色底保证了信息密集时的可读性，深蓝主色则维持了与商业消费级产品的视觉区分",
      },
      {
        problem: "目标用户是习惯命令行的安全工程师，GUI界面容易让他们感到「失控」——不知道系统在后台做什么",
        judgment: "CLI 工具的核心体验是「可见、可控、可预期」——每一个操作都有即时的文字反馈，用户清楚知道当前状态。把这套工具做成 GUI 时，最大的陷阱是把复杂性藏起来，结果让专业用户反而不信任这个界面",
        solution: "在界面设计上保留「CLI 的信息密度」：检测进度实时可见，日志输出完整展示，代码块保留原始格式而不做过度美化。让工程师在 GUI 里能看到和 CLI 一样多的信息，同时通过视觉层级让这些信息更易扫描——这是 CLI 到 GUI 的体验迁移，而不是简单的界面包装",
      },
    ],
    decisionsEn: [
      {
        problem: "Vulnerability detection reports contain large amounts of code snippets and technical details — plain text presentation is extremely unfriendly to engineers",
        judgment: "Security engineers reading vulnerability reports need to: quickly locate vulnerability positions, understand risk levels, and get fix suggestions. Without hierarchical code-text separation, engineers must read line by line to find key information — extremely inefficient",
        solution: "Designed three-level information architecture: vulnerability summary (risk level + location) → vulnerability details (context explanation) → code block (specific vulnerability snippet + fix suggestion). Code blocks use dark background for strong contrast with body text, monospace font for readability, key vulnerability lines highlighted — enabling scan-reading to locate issues",
      },
      {
        problem: "Client lacked product experience, requirements were vague, and design direction kept shifting",
        judgment: "In freelance projects, unclear requirements are more dangerous than design challenges — every directional change means significant rework. Must proactively engage in product decisions rather than passively waiting for requirements",
        solution: "Based on understanding of cybersecurity tool product patterns, independently completed high-fidelity designs before bringing them to an in-person client review. Walked through pages together on-site, aligning on detail adjustments — overall concept passed in one round with only minor local revisions afterward. Keeping design decision-making authority in hand rather than waiting for client direction was key to smooth freelance project delivery",
      },
      {
        problem: "Product serves a national cybersecurity research institution — visual style must match the authority of a government research organization, not the lightness of commercial SaaS",
        judgment: "Jinyinhu Lab's logo uses a deep blue palette — the National Cybersecurity Base's visual tone is professional and authoritative, determining the primary color direction. But as a tool platform, the interface itself needs to remain clean and restrained so users focus on content, not the interface — institutional gravitas cannot come at the cost of information readability",
        solution: "White-base + deep blue primary color solution: overall interface maintains a clean white aesthetic, with Jinyinhu Lab's logo deep blue as the primary color applied to navigation, buttons, and key interactive nodes. The shield logo is centered on the login page as a visual anchor conveying institutional credibility. The clean white base ensures readability under information-dense conditions, while the deep blue primary color maintains clear visual distinction from consumer commercial products",
      },
      {
        problem: "Target users are security engineers accustomed to command lines — GUI interfaces easily make them feel 'out of control,' not knowing what the system is doing in the background",
        judgment: "The core CLI experience is 'visible, controllable, predictable' — every action has immediate text feedback and users clearly know current status. The biggest trap when building GUI versions of such tools is hiding complexity, which causes professional users to distrust the interface instead",
        solution: "Preserved 'CLI information density' in the UI design: detection progress visible in real-time, complete log output displayed, code blocks retain original formatting without over-beautification. Engineers can see as much information in the GUI as in CLI, while visual hierarchy makes this information more scannable — this is a CLI-to-GUI experience migration, not a simple interface wrapper",
      },
    ],
    deliverables: [],
    deliverablesEn: [],
    results: [
      "独立完成 13 个页面全部 UI 设计，从登录注册到漏洞检测报告完整交付",
      "主动推动线下需求对齐，设计方案一次通过客户评审，无重大返工",
      "漏洞报告三层信息架构和代码块组件获客户认可，作为产品核心交互模式落地",
      "视觉风格成功匹配国家机构调性，产品内部顺利上线，服务金银湖实验室安全大模型研发团队",
    ],
    resultsEn: [
      "Independently completed all 13 pages of UI design, fully delivered from login to vulnerability detection reports",
      "Proactively drove in-person requirement alignment — design passed client review in one round with no major rework",
      "Three-level vulnerability report IA and code block component approved, implemented as core interaction pattern",
      "Visual style successfully matched national institution tone — product launched internally, serving Jinyinhu Lab's security LLM research team",
    ],
    reflection: "这个项目让我意识到设计的风格基调判断需要从客户的机构属性出发，而不是从当下流行的产品趋势出发。金银湖实验室是国家级科研机构，它的用户对「权威感」和「专业可信度」的需求，远比对「好看」的需求更强烈。如果一开始就套用消费级AI产品的设计语言，反而会让用户感到不信任。这个判断是在线下沟通之后才真正确立的，也是这个项目最重要的设计决策。",
    reflectionEn: "This project taught me that style direction judgments must start from the client's institutional nature, not current product trends. Jinyinhu Lab is a national-level research institution — its users' need for 'authority' and 'professional credibility' far outweighs their need for 'looking good.' Applying consumer AI product design language would have actually undermined user trust. This judgment was only truly established after the in-person communication — and it was the most important design decision of the entire project.",
  },
  {
    id: "1",
    slug: "ssrouter",
    title: "SSRouter — 从0搭建面向海外市场的VPN路由器产品体系",
    titleEn: "SSRouter — Building a VPN Router Product System from Scratch for Overseas Markets",
    coverImage: ssrouterCover,
    summary: "两个市场、两套链路、两种用户心智——识别美俄双市场差异，从0到1主导出海路由器DTC品牌全链路交付，覆盖产品定义、支付链路、双市场官网及Mini App。",
    summaryEn: "Two markets, two pipelines, two user mindsets — identified US/RU market differences and led full-chain DTC router brand delivery from 0 to 1, covering product definition, payment flows, dual-market websites, and Mini App.",
    role: "产品设计师 / 项目负责人",
    roleEn: "Product Designer / Project Lead",
    duration: "2025.04 - 2026.05",
    durationEn: "Apr 2025 - May 2026",
    status: "已上线/验证与推广前期",
    statusEn: "Launched / Early validation",
    tags: ["出海品牌", "智能硬件", "C端产品"],
    tagsEn: ["Global Brand", "Smart Hardware", "Consumer Product"],
    techStack: ["Figma", "中英俄多语言", "定价系统", "FAQ体系"],
    links: { demo: "https://ssrouter.com/" },
    background: "这是一个全新出海品牌，目标市场横跨美国和俄罗斯，两个市场用户习惯和信息接受方式差异显著。我介入时没有任何现成的产品框架，需要从用户路径、商业化设计、到多语言规范全部从0建立。",
    backgroundEn: "This was a brand-new overseas brand targeting both the US and Russian markets, where user habits and information consumption differ significantly. When I joined, there was no existing product framework — everything from user paths, commercial design, to multilingual specs needed to be built from scratch.",
    decisions: [
      {
        problem: "两个市场需要两套完整的产品链路，而不只是翻译差异",
        judgment: "通过研究发现，俄罗斯用户的主要触点在 Telegram，美国用户更依赖独立官网与订阅转化路径，两套链路的信息架构、购买逻辑、内容策略均不相同",
        solution: "俄罗斯市场：Telegram Mini App（设备绑定+套餐购买）+ 独立俄语官网（商城+登录注册）；美国市场：SaaS 订阅官网 + 路由器后台管理系统，两套链路独立设计、独立维护",
      },
      {
        problem: "如何让用户在第一次购买时愿意尝试，同时建立长期付费习惯",
        judgment: "新用户需要低门槛的试用机会，但试用必须有足够价值让用户感受到产品能力",
        solution: "设计三档套餐（按流量+时间双维度分层），新用户赠送100G/3个月免费流量，降低首次购买门槛",
      },
      {
        problem: "VPN路由器的技术特性对普通用户来说很难理解",
        judgment: "用户不关心技术参数，关心的是「这个东西能帮我解决什么」",
        solution: "官网信息架构以使用场景为主线，技术参数作为辅助说明，FAQ体系覆盖用户最常见的疑虑",
      },
    ],
    decisionsEn: [
      {
        problem: "Two markets require two complete product pipelines, not just translation differences",
        judgment: "Research revealed that Russian users' primary touchpoint is Telegram, while US users rely more on standalone websites and subscription conversion paths — the IA, purchase logic, and content strategies are fundamentally different",
        solution: "Russian market: Telegram Mini App (device binding + plan purchase) + standalone Russian website (store + login/registration); US market: SaaS subscription website + router management dashboard — two pipelines designed and maintained independently",
      },
      {
        problem: "How to encourage first-time purchase while building long-term payment habits",
        judgment: "New users need a low-barrier trial, but the trial must deliver enough value for users to experience the product's capabilities",
        solution: "Designed three-tier plans (layered by data + time), with 100GB/3-month free data for new users to lower the first purchase barrier",
      },
      {
        problem: "VPN router's technical features are hard for average users to understand",
        judgment: "Users don't care about tech specs — they care about 'what can this solve for me'",
        solution: "Website IA structured around use cases with tech specs as supporting info, FAQ system covering users' most common concerns",
      },
    ],
    deliverables: [
      {
        title: "品牌基础 · Brand Identity",
        description: "从 Logo 方案推演到硬件包装设计，建立品牌从零到一的视觉锚点",
        image: "/images/ssrouter/brand-identity.png",
        caption: "品牌基础",
      },
      {
        title: "俄罗斯版 Mini App · Telegram",
        description: "覆盖设备绑定、节点切换、套餐查看与购买全流程，承载俄语市场主要用户触点；界面为俄语，面向俄罗斯终端用户",
        image: "/images/ssrouter/mini-app.png",
        caption: "俄罗斯版 Mini App",
      },
      {
        title: "俄罗斯版官网 · RU Site",
        description: "西里尔字母排版适配、卢布结算、独立于英文版的内容架构与购买流程",
        image: "/images/ssrouter/88ff610b-2c06-4aa2-aced-f9b7dd74e182.png",
        caption: "俄罗斯版官网",
      },
      {
        title: "官网 · 购买与账户体系",
        description: "购物车、下单、支付到订单追踪完整购买链路，含账户设置、地址管理、关联Telegram账户，俄美两版共用同一套账户体系",
        image: "/images/ssrouter/purchase-account.png",
        caption: "购买与账户体系",
        layout: 'single' as const,
      },
      {
        title: "美版官网 · US Site",
        description: "美版官网内容架构重建，订阅套餐三档定价结构设计，侧重隐私安全信任感建立，与俄版内容策略独立分开",
        image: "/images/ssrouter/us-site-new.png",
        caption: "美版官网",
        layout: 'single' as const,
      },
      {
        title: "美版路由后台 · Dashboard",
        description: "覆盖服务概览、运行监控、套餐中心、设备管理、自定义节点、网络诊断完整功能模块，支撑用户全生命周期管理；美版产品考虑到也面向海外华人市场，后台支持中文界面，满足多语言用户需求",
        image: "/images/ssrouter/us-dashboard.png",
        caption: "美版路由后台",
        layout: 'single' as const,
      },
    ],
    deliverablesEn: [
      {
        title: "Brand Identity",
        titleEn: "Brand Identity",
        description: "From Logo concept to hardware packaging design, establishing the brand's visual anchor from zero to one",
        image: "/images/ssrouter/brand-identity.png",
        caption: "Brand Identity",
      },
      {
        title: "Russian Mini App · Telegram",
        titleEn: "Russian Mini App · Telegram",
        description: "Covering device binding, node switching, plan viewing and purchasing — the primary user touchpoint for the Russian market",
        image: "/images/ssrouter/mini-app.png",
        caption: "Russian Mini App",
      },
      {
        title: "Russian Website · RU Site",
        titleEn: "Russian Website · RU Site",
        description: "Cyrillic typography adaptation, Ruble settlement, independent IA and purchase flow from the English version",
        image: "/images/ssrouter/88ff610b-2c06-4aa2-aced-f9b7dd74e182.png",
        caption: "Russian Website",
      },
      {
        title: "Website · Purchase & Account System",
        titleEn: "Website · Purchase & Account System",
        description: "Complete purchase flow from cart, checkout, payment to order tracking, including account settings, address management, and Telegram account linking — shared account system across both RU and US versions",
        image: "/images/ssrouter/purchase-account.png",
        caption: "Purchase & Account System",
        layout: 'single' as const,
      },
      {
        title: "US Website · US Site",
        titleEn: "US Website · US Site",
        description: "US website IA restructuring, three-tier subscription pricing design, focused on building privacy and security trust, with content strategy independent from the Russian version",
        image: "/images/ssrouter/us-site-new.png",
        caption: "US Website",
        layout: 'single' as const,
      },
      {
        title: "US Router Dashboard",
        titleEn: "US Router Dashboard",
        description: "Covering service overview, operation monitoring, plan center, device management, custom nodes, and network diagnostics — supporting full user lifecycle management",
        image: "/images/ssrouter/us-dashboard.png",
        caption: "US Router Dashboard",
        layout: 'single' as const,
      },
    ],
    results: [
      "从0到1独立完成美俄双市场完整产品体系搭建，覆盖官网、Telegram Mini App、路由器后台管理系统三套独立产品线",
      "设计并落地三档订阅定价体系，新用户 100G/3个月免费试用机制，降低首购门槛",
      "交付含交互状态共 60+ 页面，覆盖设备绑定、节点切换、套餐购买、账户管理完整闭环",
      "建立中英俄三语设计规范，西里尔字母排版与卢布结算均完成本地化适配",
      "独立推进设计到开发验收全链路，项目从启动到上线约 4 个月",
    ],
    resultsEn: [
      "Independently built complete dual-market product system for US and Russian markets from scratch, covering three independent product lines: website, Telegram Mini App, and router management dashboard",
      "Designed and implemented a three-tier subscription pricing system with 100GB/3-month free trial for new users to lower first-purchase barrier",
      "Delivered 60+ pages with interaction states, covering device binding, node switching, plan purchase, and account management in a complete closed loop",
      "Established CN/EN/RU trilingual design specifications with full localization for Cyrillic typography and Ruble settlement",
      "Independently drove full pipeline from design to development acceptance — approximately 4 months from project kickoff to launch",
    ],
    reflection: "俄版上线后因政策原因被迫转向美国市场，整个产品方向的切换是被动的而非主动规划的。如果重来，会在立项时就把政策风险纳入市场选择的评估维度，优先选择监管环境更稳定的市场作为首发，而不是在已经投入大量资源后再被迫转向。",
    reflectionEn: "After the Russian version launched, policy changes forced a pivot to the US market — the entire product direction shift was reactive, not planned. If I could redo it, I'd include policy risk as a key factor in market selection from the start, prioritizing markets with more stable regulatory environments for initial launch, rather than being forced to pivot after significant resources had already been invested.",
  },
{
    id: "3",
    slug: "wheelsline",
    title: "WheelsLine — 轮毂定制平台从0到1的产品体系与后台系统搭建",
    titleEn: "WheelsLine — Building a Custom Wheel Platform from 0 to 1: Product System & Backend",
    coverImage: wheelslineCover,
    summary: "将非标轮毂行业数据转化为可结构化管理的产品体系，主导B端订单全生命周期管理系统从0到1落地。",
    summaryEn: "Built a complete frontend showcase and backend order management system for a premium custom wheel brand targeting overseas markets",
    role: "产品设计师 / 项目负责人",
    roleEn: "Product Designer / Project Lead",
    duration: "2026.01 - 2026.05",
    durationEn: "Jan 2026 - May 2026",
    status: "已上线",
    statusEn: "Launched",
    tags: ["出海品牌", "B端/C端", "供应链系统"],
    tagsEn: ["Global Brand", "B2B/B2C", "Supply Chain System"],
    techStack: ["Figma", "XMind", "后台系统", "数据架构", "AI辅助交付"],
    links: { demo: "https://wheelsline.com/" },
    background: "WheelsLine 是一个专注高端锻造轮毂的定制品牌。品类本身的复杂性极高——车型各异、前后异径配置普遍、颜色与工艺组合多样、订单跨越多个工厂与货币体系。项目目标是从零开始，为这个品牌搭建一套完整的产品与系统基础设施，涵盖客户端展示、定制流程，以及内部运营管理，全部由一人独立完成。",
    backgroundEn: "WheelsLine is a custom brand focused on high-end forged wheels. The category itself is extremely complex — diverse vehicle models, common staggered front/rear configurations, varied color and process combinations, and orders spanning multiple factories and currency systems. The project goal was to build, from scratch, a complete product and system infrastructure for this brand — covering client-facing presentation, customization flow, and internal operations management — all delivered independently by one person.",
    decisions: [
      {
        problem: "轮毂定制涉及大量专业参数，海外客户很难快速判断是否适合自己的车型",
        judgment: "客户的决策路径是：看案例建立信任 → 了解工艺建立偏好 → 确认规格完成询盘",
        solution: "官网以应用案例为核心入口，配合工艺展示和规格参数，引导客户通过Telegram完成询盘转化",
      },
      {
        problem: "型号、色卡、订单、应用案例之间有关联关系，如何让录入人员高效管理",
        judgment: "每个型号是核心节点，色卡和案例都围绕型号关联，订单也需要和型号绑定",
        solution: "设计型号为主索引的数据架构，色卡管理按颜色系分组（99种色卡/13个分组），每个型号可直接查看关联订单和应用案例",
      },
      {
        problem: "需要在极短时间内完成系统从0到1的搭建",
        judgment: "后台页面结构相对固定，可以用提示词驱动HTML原型生成，后端直接基于原型开发",
        solution: "与后端协作建立设计→AI生成→代码转化的快速交付链路，15天内完成订单系统完整搭建",
      },
      {
        problem: "前后异径配置在移动端如何清晰展示两套规格参数",
        judgment: "两套规格完整并排展示在小屏上信息密度过高，用户无法快速判断差异点在哪里；但完全分开展示又会造成大量重复信息",
        solution: "共用参数合并展示，仅差异参数并排对比，减少重复信息的认知负担，让用户聚焦真正需要决策的部分",
      },
    ],
    decisionsEn: [
      {
        problem: "Custom wheels involve many professional parameters — overseas clients struggle to quickly determine fitment for their vehicles",
        judgment: "Client decision path: see cases to build trust → understand processes to form preferences → confirm specs to complete inquiry",
        solution: "Website uses application cases as the core entry point, paired with process showcases and spec parameters, guiding clients to complete inquiries via Telegram",
      },
      {
        problem: "Models, color cards, orders, and application cases have interrelated relationships — how to enable efficient management for data entry staff",
        judgment: "Each model is the core node — color cards and cases are linked to models, orders also need model binding",
        solution: "Designed model-indexed data architecture, color card management grouped by color families (99 color codes / 13 groups), each model can directly view linked orders and application cases",
      },
      {
        problem: "Need to complete the entire system build from 0 to 1 in extremely limited time",
        judgment: "Backend page structures are relatively fixed — can use prompt-driven HTML prototype generation, with backend developing directly from prototypes",
        solution: "Established a design → AI generation → code conversion rapid delivery pipeline with backend team, completing the full system build within 15 days",
      },
      {
        problem: "How to clearly display two sets of spec parameters for staggered front/rear configurations on mobile",
        judgment: "Showing both complete spec sets side-by-side creates excessive information density on small screens — users can't quickly identify the differences; but fully separating them creates large amounts of redundant information",
        solution: "Merged shared parameters into a single display, with only differing parameters shown side-by-side, reducing cognitive load from redundancy and letting users focus on what actually requires a decision",
      },
    ],
    deliverables: [
      { caption: "", title: "品牌与官网 · Brand & Website", image: "/e3dbfbce-ca81-4110-a25a-6f7c1e5ef787.png", description: "从Logo设计到官网完整搭建，建立品牌从零到一的视觉体系，覆盖wheelsline.com全站页面" },
      { caption: "", title: "供应链后台 · 订单与型号管理", image: "/f82b36b9-3c3b-4149-80ac-fc2eff8b47ed.png", description: "订单六阶段生命周期（确认中→设计中→生产中→待尾款→已发货→完成），型号父子结构管理，支持多货币多工厂" },
      { caption: "", title: "供应链后台 · 色卡规范系统", image: "/50ce72bf-0bfc-48ac-91fd-d8852c7871c5.png", description: "建立WheelsLine色卡体系，区分表面工艺与结构工艺两个独立维度，共99种色卡/13个分组，前台筛选与后台录入引用同一套标准" },
      { caption: "", title: "供应链后台 · 案例库管理", image: "/6e872ef5-c3fa-4cbc-acd6-a4187f803842.png", description: "买家成品案例与型号、订单数据关联展示，用户通过案例可直接查看对应轮毂的规格、型号与工艺详情，一键定制同款，降低定制门槛，推动规模化量产" },
      
      { caption: "", title: "定制绘图单 · 线下流程结构化", image: "/a8811bdd-f8af-4f69-9f5e-1adb87fbaccc.png", description: "将原本依赖线下沟通的定制流程结构化，输出为Excel定制绘图单，覆盖车辆信息、轮毂规格、工艺选择与参考图，是后续工厂与客户小程序化沟通流程的前期业务梳理基础" },
    ],
    deliverablesEn: [
      { caption: "", title: "Brand & Website", image: "/e3dbfbce-ca81-4110-a25a-6f7c1e5ef787.png", description: "From logo design to complete website build, establishing a 0-to-1 brand visual system covering all wheelsline.com pages" },
      { caption: "", title: "Supply Chain Backend · Orders & Models", image: "/f82b36b9-3c3b-4149-80ac-fc2eff8b47ed.png", description: "6-stage order lifecycle, parent-child model structure management, multi-currency and multi-factory support" },
      { caption: "", title: "Supply Chain Backend · Color Card System", image: "/50ce72bf-0bfc-48ac-91fd-d8852c7871c5.png", description: "Established the WheelsLine color code system with 99 codes in 13 groups, separating surface finish and structural process" },
      { caption: "", title: "Supply Chain Backend · Case Library", image: "/6e872ef5-c3fa-4cbc-acd6-a4187f803842.png", description: "Linked buyer cases with model and order data, allowing one-click customization and lowering barriers for mass production" },
      
      { caption: "", title: "Custom Drawing Order · Offline Process Structuring", image: "/a8811bdd-f8af-4f69-9f5e-1adb87fbaccc.png", description: "Structured the originally offline-dependent customization process into an Excel custom drawing order, covering vehicle info, wheel specs, finish selection, and reference images — laying the business groundwork for subsequent mini app-based factory-customer communication" },
    ],
    results: [
      "从零完成品牌到系统的全链路基础设施搭建，覆盖C端展示、B端运营、线下定制沟通三个核心场景",
      "将非标轮毂行业数据标准化，建立色号、工艺、规格统一分类体系，支持跨维度检索；统一前台筛选与后台录入的数据标准，消除两端不一致带来的沟通成本",
      "搭建WheelChain后台管理系统，主导订单6阶段全生命周期管理落地（询价→报价→确认→生产→发货→验收），支持多工厂多货币协作，推动业务从混沌到标准化",
      "将线下定制沟通流程结构化输出为定制绘图单，减少客户与工厂之间的信息传递损耗，为后续小程序化奠定业务基础",
      "案例库与型号、订单数据打通，用户通过案例可一键定制同款，缩短从浏览到询盘的决策路径",
    ],
    resultsEn: [
      "Built end-to-end infrastructure from brand to system from scratch, covering three core scenarios: C-end presentation, B-end operations, and offline customization communication",
      "Standardized data for the non-standard custom wheel industry by establishing unified classifications for color codes, processes, and specifications, supporting cross-dimensional search; unified frontend filtering and backend entry standards to eliminate communication costs caused by inconsistencies",
      "Built the WheelChain backend management system and led implementation of a 6-stage order lifecycle (inquiry → quotation → confirmation → production → shipping → acceptance), supporting multi-factory and multi-currency collaboration and moving operations from chaos to standardization",
      "Structured the offline customization communication process into a custom drawing order, reducing information loss between clients and factories, laying the business foundation for future mini-app integration",
      "Connected the case library with model and order data, allowing users to one-click customize from cases, shortening the decision path from browsing to inquiry",
    ],
    reflection: "项目初期把大量精力放在视觉呈现上，但轮毂定制的核心转化障碍其实是信任问题——海外买家不确定能不能拿到真实样品、工厂资质是否可靠。如果重来，会更早推动把工厂认证信息和买家案例纳入主流程，而不是作为补充内容放在边缘位置。",
    reflectionEn: "Early on, too much effort was spent on visual presentation, but the core conversion barrier for custom wheels was actually trust — overseas buyers weren't sure they could get real samples or whether the factory was credible. If I could redo it, I'd push earlier to bring factory certification and buyer cases into the main flow rather than placing them as supplementary content on the periphery.",
  },
{
    id: "7",
    slug: "pokubuy",
    title: "PokuBuy — 重构面向俄罗斯市场的跨境采购平台Telegram Mini App",
    titleEn: "PokuBuy — Rebuilding a Cross-border Purchasing Telegram Mini App for the Russian Market",
    coverImage: pokubyCover,
    summary: "跨境采购的信任问题不能靠功能堆砌解决——为俄语市场独立设计 Telegram Mini App 和采购平台，80+页面覆盖询价到物流完整闭环。",
    summaryEn: "Trust in cross-border procurement can't be solved by piling on features — independently designed Telegram Mini App and procurement platform for Russian market, 80+ pages covering the full loop from inquiry to logistics.",
    role: "产品设计师 / 团队负责人",
    roleEn: "Product Designer / Team Lead",
    duration: "2025",
    durationEn: "2025",
    status: "已交付",
    statusEn: "Delivered",
    tags: ["跨境电商", "C端产品", "Telegram生态"],
    tagsEn: ["Cross-border E-commerce", "Consumer Product", "Telegram Ecosystem"],
    techStack: ["Figma", "Telegram Mini App", "中俄双语", "信息架构"],
    links: { demo: "https://pokubuy.com/" },
    background: "PokuBuy是面向俄罗斯用户的跨境采购一站式服务平台，用户可以通过平台从中国采购、运输商品。我介入时，Web端设计混乱、H5开发滞后，用户访问路径不清晰。作为设计负责人，我需要在指导团队设计师的同时，独立完成Telegram Mini App的全部设计。",
    backgroundEn: "PokuBuy is a one-stop cross-border purchasing platform for Russian users to buy and ship goods from China. When I joined, the web design was chaotic, H5 development was delayed, and user access paths were unclear. As design lead, I needed to mentor team designers while independently completing the entire Telegram Mini App design.",
    decisions: [
      {
        problem: "H5开发滞后，俄罗斯用户需要一个可以快速访问的入口",
        judgment: "Telegram在俄罗斯市场渗透率极高，Mini App可以在用户已有的使用习惯内完成转化，不需要额外下载",
        solution: "优先完成Telegram Mini App，作为俄罗斯市场的主要访问入口，覆盖核心采购流程",
      },
      {
        problem: "既有Web端设计路径碎片化、层级混乱、关键操作不清晰",
        judgment: "用户的核心路径只有三件事：提交需求→跟踪订单→确认收货，其他功能都是支线",
        solution: "以这三个核心路径为主轴重新搭建信息架构，简化导航层级，关键操作在首屏可见",
        image: "/88bc5231-77c3-418e-93f1-89e93420255a.png",
        imageCaption: "从询价到采购到物流的完整状态流转，每个状态对应明确的操作按钮，消除用户在复杂流程中的认知负担",
        imageCaptionEn: "Complete status flow from inquiry to purchase to logistics — each status maps to a clear action button, reducing cognitive load in complex processes",
      },
      {
        problem: "平台需要支持中俄双语，两种语言字符长度差异大，容易破坏布局",
        judgment: "用组件化设计控制布局弹性，文字区域预留足够空间，避免俄文换行导致的视觉错乱",
        solution: "建立双语设计规范，关键页面在两种语言下均做验证",
      },
    ],
    decisionsEn: [
      {
        problem: "H5 development was delayed — Russian users needed a quickly accessible entry point",
        judgment: "Telegram has extremely high penetration in the Russian market; Mini App enables conversion within users' existing habits without additional downloads",
        solution: "Prioritized Telegram Mini App as the primary access point for the Russian market, covering core purchasing flows",
      },
      {
        problem: "Existing web design had fragmented paths, confusing hierarchy, and unclear key actions",
        judgment: "Users' core path is only three things: submit request → track order → confirm receipt; everything else is secondary",
        solution: "Rebuilt information architecture around these three core paths, simplified navigation layers, key actions visible on first screen",
        image: "/88bc5231-77c3-418e-93f1-89e93420255a.png",
        imageCaption: "从询价到采购到物流的完整状态流转，每个状态对应明确的操作按钮，消除用户在复杂流程中的认知负担",
        imageCaptionEn: "Complete status flow from inquiry to purchase to logistics — each status maps to a clear action button, reducing cognitive load in complex processes",
      },
      {
        problem: "Platform needs Chinese-Russian bilingual support; the two languages have significant character length differences that easily break layouts",
        judgment: "Use component-based design to control layout flexibility, reserve sufficient space for text areas, prevent visual disruption from Russian text wrapping",
        solution: "Established bilingual design specifications, validated key pages in both languages",
      },
    ],
    deliverables: [
      {
        title: "改版对比 · 首页",
        caption: "",
        description: "原版视觉风格陈旧、信息层级混乱；新版统一橙色品牌色，强化首屏核心采购入口权重",
        images: ["/a05742dc-91b1-4eff-bf8f-4facbc55c947.jpg", "/5a58ded5-b602-4d7a-9430-ed433de62185.png"],
        layout: 'grid-2x2',
        imageCaptions: ["改版前", "改版后"],
      },
      {
        title: "改版对比 · 订单列表",
        caption: "",
        description: "原版缺乏状态区分，操作路径不明确；新版每条订单直接显示状态标签，对应操作按钮出现在正确位置",
        images: ["/d8c04926-2124-49e3-b86c-098f3dfeb618.jpg", "/68626e38-8afd-4ceb-a2b1-cf49f2e25805.jpg"],
        layout: 'grid-2x2',
        imageCaptions: ["改版前", "改版后"],
      },
      {
        title: "改版对比 · 订单详情页",
        caption: "",
        description: "原版支付信息、商品状态混排；新版按线性流程重组，地址→商品→价格→提交，操作入口固定底部",
        images: ["/e821c5ba-8f0d-4a44-8260-77f0167b017c.jpg", "/59af2c4c-60bd-4547-9c50-ff73c65cc4e8.png"],
        layout: 'grid-2x2',
        imageCaptions: ["改版前", "改版后"],
      },
      {
        title: "Overview · 全量页面总览",
        caption: "",
        description: "含交互状态共80+个页面，覆盖询价、采购、支付、物流完整闭环",
        image: "/7d7017c7-46f9-40d5-86f9-74e7bce6caed.png",
        layout: 'single',
      },
      {
        title: "暗黑模式 · Dark Mode",
        caption: "",
        description: "基于设计变量系统实现明暗双主题切换，同一套组件库支撑亮色与暗色两套视觉方案",
        image: "/e2bdebd7-aa48-49d3-b793-11ab4f737520.png",
        layout: 'single',
      },
    ],
    deliverablesEn: [
      {
        title: "Redesign Comparison · Homepage",
        caption: "",
        description: "Original had outdated visuals and confusing hierarchy; new version unifies orange brand color and strengthens core purchasing entry on first screen",
        images: ["/a05742dc-91b1-4eff-bf8f-4facbc55c947.jpg", "/5a58ded5-b602-4d7a-9430-ed433de62185.png"],
        layout: 'grid-2x2',
        imageCaptions: ["Before", "After"],
      },
      {
        title: "Redesign Comparison · Order List",
        caption: "",
        description: "Original lacked status differentiation with unclear action paths; new version shows status tags directly on each order with action buttons in correct positions",
        images: ["/d8c04926-2124-49e3-b86c-098f3dfeb618.jpg", "/68626e38-8afd-4ceb-a2b1-cf49f2e25805.jpg"],
        layout: 'grid-2x2',
        imageCaptions: ["Before", "After"],
      },
      {
        title: "Redesign Comparison · Order Detail",
        caption: "",
        description: "Original mixed payment info and product status; new version reorganized with linear flow: address → products → price → submit, action entry fixed at bottom",
        images: ["/e821c5ba-8f0d-4a44-8260-77f0167b017c.jpg", "/59af2c4c-60bd-4547-9c50-ff73c65cc4e8.png"],
        layout: 'grid-2x2',
        imageCaptions: ["Before", "After"],
      },
      {
        title: "Overview · All Pages",
        caption: "",
        description: "80+ pages including interaction states, covering the complete loop of inquiry, purchase, payment, and logistics",
        image: "/7d7017c7-46f9-40d5-86f9-74e7bce6caed.png",
        layout: 'single',
      },
      {
        title: "Dark Mode",
        caption: "",
        description: "Dual light/dark theme switching built on a design token system — one component library supports both visual schemes",
        image: "/e2bdebd7-aa48-49d3-b793-11ab4f737520.png",
        layout: 'single',
      },
    ],
    results: [
      "独立完成 Telegram Mini App 从0到1完整设计，含交互状态共 80+ 页面",
      "覆盖询价、采购、支付、物流追踪完整购买闭环，支持中俄双语切换",
      "建立俄语市场本地化设计规范，西里尔字母排版、卢布结算、俄语文案均完成适配",
      "基于设计变量系统实现明暗双主题，一套组件库支撑亮色与暗色两套方案",
      "同期指导团队设计师，制定并落地跨产品设计规范，统一输出标准",
    ],
    resultsEn: [
      "Independently completed full Telegram Mini App design from 0 to 1 — 80+ pages including interaction states",
      "Covered complete purchase loop: inquiry, procurement, payment, and logistics tracking — supporting Chinese/Russian bilingual switching",
      "Established Russian market localization design specs — Cyrillic typography, Ruble settlement, and Russian copywriting fully adapted",
      "Implemented light/dark dual theme via design token system — one component library supports both visual schemes",
      "Concurrently mentored team designers, established and rolled out cross-product design standards to unify output quality",
    ],
    reflection: "接手改版时，对俄罗斯用户的实际采购决策链路缺乏足够深入的了解——俄罗斯买家在跨境采购中最大的顾虑是什么、信任是如何建立的、支付环节的摩擦点在哪里，这些问题在设计过程中更多依赖假设而非真实用户反馈。同时主要精力放在视觉层面的统一上，询价到采购的核心转化节点没有做充分的数据验证。如果重来，会在改版前先针对俄语市场用户做一轮专项调研，同步梳理用户行为漏斗，找到真实的转化断点，再决定产品结构和改版优先级，而不是从视觉问题倒推设计方向。",
    reflectionEn: "When taking over the redesign, there was a lack of deep understanding of the actual procurement decision-making process for Russian users—what are their biggest concerns in cross-border procurement, how is trust established, and where are the friction points in the payment process? These questions were addressed based on assumptions rather than real user feedback. Meanwhile, primary efforts were focused on visual consistency, without sufficient data validation for core conversion points from inquiry to purchase. If I could do it again, I would conduct a specific user study on the Russian market before the redesign, analyze the user behavior funnel to identify real conversion gaps, and then determine the product structure and redesign priorities, rather than letting visual issues drive the design direction.",
  },
{
    id: "4",
    slug: "juzhenyuan",
    title: "区块链钱包、密钥管理平台与知识管理系统的设计体系建设",
    titleEn: "Design System for Blockchain Wallet, Key Management & Knowledge Management",
    coverImage: "/juzhenyuan-cover.webp",
    summary: "深入区块链密钥管理业务逻辑，主导隐私钱包从1.0到2.0重构，识别关键产品缺陷并推动方案落地。",
    summaryEn: "As product designer at Juzhengyuan (Shenzhen), independently led the complete design of three product lines: Privacy Wallet blockchain wallet (App), MPC-KMS key management system (Web dashboard + website), and internal KMS knowledge management system (0-to-1 from brand to component library), delivering from visual specs to interaction systems.",
    role: "产品设计师",
    roleEn: "Product Designer",
    duration: "2022.03 - 2023.01",
    durationEn: "Mar 2022 - Jan 2023",
    status: "已上线",
    statusEn: "Launched",
    tags: ["Web3", "C端产品", "金融工具"],
    tagsEn: ["Web3", "Consumer Product", "Finance Tool"],
    techStack: ["Figma", "Sketch", "iOS", "Android", "Ant Design", "React"],
    links: { demo: "https://opentss.com/" },
    background: "矩阵元旗下三条业务线同步推进：Privacy Wallet需要在不割裂老用户习惯的前提下对旧版ATON进行全面重构；MPC-KMS是全新产品，需要从0建立品牌视觉、操作台和官网；KMS知识管理系统作为内部工具，需要从品牌标识到组件库完整搭建。三条线设计语言需要保持一致性，同时满足C端钱包「安全私密」、B端后台「专业高效」和内部系统「清晰易用」的不同调性需求。",
    backgroundEn: "Juzhengyuan had three business lines advancing simultaneously: Privacy Wallet needed a complete redesign of the legacy ATON app without disrupting existing user habits; MPC-KMS was a brand-new product requiring brand visuals, dashboard, and website built from scratch; KMS knowledge management system as an internal tool needed complete setup from brand identity to component library. All three lines needed design language consistency while serving different tonal needs — 'secure & private' for the C-side wallet, 'professional & efficient' for the B-side dashboard, and 'clear & usable' for the internal system.",
    decisions: [
      {
        problem: "两条产品线如何在视觉上保持统一，同时又有各自的调性区分",
        judgment: "共用一套品牌色和设计规范基础，在具体应用层面根据用户群体做差异化",
        solution: "统一确定深蓝色系（#35446D）为品牌主色，传达安全可信的品牌基调；Privacy Wallet在此基础上降低饱和度、增加留白，强调私密感；KMS后台保持简约白色为主，蓝色仅用于强调，传达专业效率感；KMS官网则以蓝黑色为底+JS粒子特效，对外传达科技高级感",
      },
      {
        problem: "Privacy Wallet旧版交互路径繁琐，用户探索成本高",
        judgment: "旧版将所有导入方式混排，信息层级混乱，用户不清楚各方式的区别与适用场景",
        solution: "运用盒子模型将导入钱包方式卡片化，每种方式单独呈现并附说明；Tab栏从纯线性icon改为选中态色块+默认态线性，明确区分当前状态；收款页以品牌色为底加大二维码展示比例，底部增加品牌logo强化品牌记忆点",
      },
      {
        problem: "KMS后台功能复杂，用户管理、密钥管理、授权、事件追踪多模块并存",
        judgment: "复杂功能靠信息层级而非颜色区分，统一视觉语言比多色块更能建立专业感",
        solution: "整体采用白色+蓝色，放弃用不同颜色区分功能模块；通过卡片布局、统一表格组件、面包屑导航建立清晰层级；KMS Logo以「K」字母为基础演变，通过局部色彩变化与公司其他业务线（Realran、Datum、Rosetta）保持品牌家族感",
      },
    ],
    decisionsEn: [
      {
        problem: "How to maintain visual unity across two product lines while giving each its own tonal identity",
        judgment: "Share a common brand color and design spec foundation, then differentiate at the application layer based on user groups",
        solution: "Established dark blue (#35446D) as the brand primary color conveying security and trust; Privacy Wallet reduced saturation and increased whitespace for a private feel; KMS dashboard kept minimal white with blue only for emphasis, conveying professional efficiency; KMS website used dark blue-black base with JS particle effects, projecting tech sophistication",
      },
      {
        problem: "Privacy Wallet's legacy interaction paths were cumbersome with high exploration costs",
        judgment: "The old version mixed all import methods together with confusing information hierarchy — users couldn't distinguish between methods or their use cases",
        solution: "Used card-based design to present each wallet import method individually with descriptions; changed tab bar from pure linear icons to selected-state color blocks + default linear state for clear status differentiation; redesigned receive page with brand color background and enlarged QR code, adding brand logo at bottom to reinforce brand identity",
      },
      {
        problem: "KMS dashboard has complex functionality — user management, key management, authorization, and event tracking coexist",
        judgment: "Complex features should be distinguished by information hierarchy rather than colors — unified visual language builds more professionalism than multi-colored blocks",
        solution: "Used white + blue throughout, abandoned color-coding for different modules; established clear hierarchy through card layouts, unified table components, and breadcrumb navigation; KMS Logo evolved from the letter 'K', maintaining brand family feel with other business lines (Realran, Datum, Rosetta) through subtle color variations",
      },
    ],
    deliverables: [
      {
        caption: '', title: 'Privacy Wallet · 品牌与视觉规范', titleEn: 'Privacy Wallet · Brand & Visual System',
        description: 'Logo方案推演（形状探索→色彩确定→定稿）、品牌关键词提炼、色彩与组件规范体系',
        descriptionEn: 'Logo exploration (shape → color → final), brand keyword extraction, color & component spec system',
        images: ['/8d2b5d6d-7aa6-4326-abc4-86c7146b8b38.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · 改版对比 · 资产总览', titleEn: 'Privacy Wallet · Redesign · Asset Overview',
        description: '旧版信息层级混乱，新版以资产数据为核心重构首屏，主次对比清晰',
        descriptionEn: 'Old version had cluttered info hierarchy; new version restructures the home screen around asset data with clear priority',
        images: ['/40f66e0f-923d-43f4-894b-830711e07f08.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · 改版对比 · 导入钱包', titleEn: 'Privacy Wallet · Redesign · Import Wallet',
        description: '将导入方式卡片化展示，助记词验证改为随机序号选择，降低小屏操作负担',
        descriptionEn: 'Card-based import methods, mnemonic verification changed to random index selection, reducing small-screen burden',
        images: ['/6e3a064f-8306-48f5-88e7-27d7f0076c79.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · 改版对比 · 收款页', titleEn: 'Privacy Wallet · Redesign · Receive Page',
        description: '以品牌色为基底强化品牌感，加大二维码展示比例，操作入口固定底部',
        descriptionEn: 'Brand color base to strengthen identity, enlarged QR code display, action buttons fixed at bottom',
        images: ['/e9ecb419-ec78-48f9-840e-74762c6b0efe.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · 改版对比 · 启动优化', titleEn: 'Privacy Wallet · Redesign · Launch Optimization',
        description: '启动页视觉升级，强化品牌第一印象，与整体新版设计语言保持一致',
        descriptionEn: 'Launch screen visual upgrade, reinforcing brand first impression, consistent with new design language',
        images: ['/4ae06990-c8e5-49b7-a467-840f6243f23c.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · 页面总览', titleEn: 'Privacy Wallet · Page Overview',
        description: '页面总览',
        descriptionEn: 'Page Overview',
        images: [
          '/2de8c78d-0a97-4f03-bcd2-b1e1a734a40f.png'
        ],
        layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · 组件规范化', titleEn: 'Privacy Wallet · Component Standardization',
        description: '统一按钮、输入框、弹窗、Toast、单元格等核心组件规范，支撑双端界面一致性输出，降低开发还原误差',
        descriptionEn: 'Unified button, input, modal, toast, cell component specs for cross-platform consistency and reduced dev deviation',
        images: ['/61dc9163-b0cf-4c92-ac2c-3d11f1abf442.png'], layout: 'single',
      },
      {
        caption: '', title: 'Staking DApp · 内嵌H5页面', titleEn: 'Staking DApp · Embedded H5 Pages',
        description: '质押跨链平台内嵌于钱包的H5页面，延续钱包设计风格，覆盖质押、取款、收益查看流程',
        descriptionEn: 'H5 pages embedded in wallet for cross-chain staking platform, continuing wallet design style, covering staking/withdrawal/earnings',
        images: ['/3495fb0d-acbc-4099-976b-26278089dacb.png'], layout: 'single',
      },
      {
        caption: '', title: 'Staking DApp · 页面总览', titleEn: 'Staking DApp · Page Overview',
        description: 'DApp完整页面overview，展示跨链平台全量界面输出',
        descriptionEn: 'Complete DApp page overview showing all cross-chain platform interfaces',
        images: ['/b8d6bd39-437f-4460-8dc7-7f74c89002ff.png'], layout: 'single',
      },
      {
        caption: '', title: 'MPC-KMS · 操作台页面设计', titleEn: 'MPC-KMS · Dashboard Page Design',
        description: '用户管理、秘钥管理、权限管理、授权审批核心页面，PC Web响应式设计',
        descriptionEn: 'User/key/permission management and authorization approval pages, responsive PC Web design',
        images: ['/4e5a8eaa-c961-4086-b0f0-3a1095c5bd63.png'], layout: 'single',
      },
      {
        caption: '', title: 'MPC-KMS · 组件化', titleEn: 'MPC-KMS · Componentization',
        description: '基于Element延伸定制KMS组件库，统一表格、权限标签、状态标记等B端高频组件，保障多页面视觉一致性',
        descriptionEn: 'Custom KMS component library extending Element, unifying tables, permission tags, status markers for B-side visual consistency',
        images: ['/56117076-8c32-450f-b3ae-74b4ede3feec.png'], layout: 'single',
      },
      {
        caption: '', title: 'MPC-KMS · 官网设计', titleEn: 'MPC-KMS · Website Design',
        description: 'opentss.com 官网完整页面设计，面向企业客户传递产品能力与品牌信任感',
        descriptionEn: 'opentss.com full website design, conveying product capabilities and brand trust to enterprise clients',
        images: ['/945f84f4-8a12-462c-910a-2c190d2c6501.png'], layout: 'single',
      },
    ],
    deliverablesEn: [
      {
        caption: '', title: 'Privacy Wallet · Brand & Visual System', titleEn: 'Privacy Wallet · Brand & Visual System',
        description: 'Logo exploration (shape → color → final), brand keyword extraction, color & component spec system',
        descriptionEn: 'Logo exploration (shape → color → final), brand keyword extraction, color & component spec system',
        images: ['/8d2b5d6d-7aa6-4326-abc4-86c7146b8b38.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · Redesign · Asset Overview', titleEn: 'Privacy Wallet · Redesign · Asset Overview',
        description: 'Old version had cluttered info hierarchy; new version restructures the home screen around asset data with clear priority',
        descriptionEn: 'Old version had cluttered info hierarchy; new version restructures the home screen around asset data with clear priority',
        images: ['/40f66e0f-923d-43f4-894b-830711e07f08.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · Redesign · Import Wallet', titleEn: 'Privacy Wallet · Redesign · Import Wallet',
        description: 'Card-based import methods, mnemonic verification changed to random index selection, reducing small-screen burden',
        descriptionEn: 'Card-based import methods, mnemonic verification changed to random index selection, reducing small-screen burden',
        images: ['/6e3a064f-8306-48f5-88e7-27d7f0076c79.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · Redesign · Receive Page', titleEn: 'Privacy Wallet · Redesign · Receive Page',
        description: 'Brand color base to strengthen identity, enlarged QR code display, action buttons fixed at bottom',
        descriptionEn: 'Brand color base to strengthen identity, enlarged QR code display, action buttons fixed at bottom',
        images: ['/e9ecb419-ec78-48f9-840e-74762c6b0efe.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · Redesign · Launch Optimization', titleEn: 'Privacy Wallet · Redesign · Launch Optimization',
        description: 'Launch screen visual upgrade, reinforcing brand first impression, consistent with new design language',
        descriptionEn: 'Launch screen visual upgrade, reinforcing brand first impression, consistent with new design language',
        images: ['/4ae06990-c8e5-49b7-a467-840f6243f23c.png'], layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · Page Overview', titleEn: 'Privacy Wallet · Page Overview',
        description: 'Page Overview',
        descriptionEn: 'Page Overview',
        images: [
          '/2de8c78d-0a97-4f03-bcd2-b1e1a734a40f.png'
        ],
        layout: 'single',
      },
      {
        caption: '', title: 'Privacy Wallet · Component Standardization', titleEn: 'Privacy Wallet · Component Standardization',
        description: 'Unified button, input, modal, toast, cell component specs for cross-platform consistency and reduced dev deviation',
        descriptionEn: 'Unified button, input, modal, toast, cell component specs for cross-platform consistency and reduced dev deviation',
        images: ['/61dc9163-b0cf-4c92-ac2c-3d11f1abf442.png'], layout: 'single',
      },
      {
        caption: '', title: 'Staking DApp · Embedded H5 Pages', titleEn: 'Staking DApp · Embedded H5 Pages',
        description: 'H5 pages embedded in wallet for cross-chain staking platform, continuing wallet design style, covering staking/withdrawal/earnings',
        descriptionEn: 'H5 pages embedded in wallet for cross-chain staking platform, continuing wallet design style, covering staking/withdrawal/earnings',
        images: ['/3495fb0d-acbc-4099-976b-26278089dacb.png'], layout: 'single',
      },
      {
        caption: '', title: 'Staking DApp · Page Overview', titleEn: 'Staking DApp · Page Overview',
        description: 'Complete DApp page overview showing all cross-chain platform interfaces',
        descriptionEn: 'Complete DApp page overview showing all cross-chain platform interfaces',
        images: ['/b8d6bd39-437f-4460-8dc7-7f74c89002ff.png'], layout: 'single',
      },
      {
        caption: '', title: 'MPC-KMS · Dashboard Page Design', titleEn: 'MPC-KMS · Dashboard Page Design',
        description: 'User/key/permission management and authorization approval pages, responsive PC Web design',
        descriptionEn: 'User/key/permission management and authorization approval pages, responsive PC Web design',
        images: ['/4e5a8eaa-c961-4086-b0f0-3a1095c5bd63.png'], layout: 'single',
      },
      {
        caption: '', title: 'MPC-KMS · Componentization', titleEn: 'MPC-KMS · Componentization',
        description: 'Custom KMS component library extending Element, unifying tables, permission tags, status markers for B-side visual consistency',
        descriptionEn: 'Custom KMS component library extending Element, unifying tables, permission tags, status markers for B-side visual consistency',
        images: ['/56117076-8c32-450f-b3ae-74b4ede3feec.png'], layout: 'single',
      },
      {
        caption: '', title: 'MPC-KMS · Website Design', titleEn: 'MPC-KMS · Website Design',
        description: 'opentss.com full website design, conveying product capabilities and brand trust to enterprise clients',
        descriptionEn: 'opentss.com full website design, conveying product capabilities and brand trust to enterprise clients',
        images: ['/945f84f4-8a12-462c-910a-2c190d2c6501.png'], layout: 'single',
      },
    ],
    results: [
      "三条产品线完整上线，建立统一的区块链产品设计语言",
      "KMS知识管理系统作为唯一设计师完成从品牌到页面的全链路交付",
      "设计规范落地后前端H5开发效率提升，组件复用率提高",
      "响应式组件库减少跨屏适配的重复工作量",
    ],
    resultsEn: [
      "All three product lines fully launched, establishing a unified blockchain product design language",
      "KMS knowledge management system delivered end-to-end as the sole designer, from brand to pages",
      "Frontend H5 development efficiency improved after design specs landed, component reuse rate increased",
      "Responsive component library reduced repetitive work for cross-screen adaptation",
    ],
    reflection: "Privacy Wallet 和 KMS 是面向完全不同用户的两个产品，但在推进过程中两条线的资源分配和优先级始终混在一起决策。如果重来，会在项目启动时明确两条线各自的商业目标和阶段里程碑，让设计决策有独立的业务依据，而不是互相等待对齐。",
    reflectionEn: "Privacy Wallet and KMS serve completely different users, but resource allocation and priority decisions for both lines were always mixed together during development. If I could redo it, I'd clarify each line's business goals and milestone phases at project kickoff, giving design decisions independent business justification rather than waiting for mutual alignment.",
  },
{
    id: "5",
    slug: "renren",
    title: "人人相册 — 社交电商货源管理工具的全链路产品设计",
    titleEn: "Renren Album — Full-chain Product Design for Social Commerce Supply Management",
    coverImage: "/renren-cover.png",
    linkTo: "/more-works/renren",
    summary: "人人相册服务于社交平台卖货的各类商家，商家需要同时管理货源、代理商、订单和客户，但市面上没有专门针对微信卖货场景的工具。我介入时产品处于重构阶段，需要在保留原有用户习惯的前提下重新梳理产品架构，并独立负责App、小程序、Web三端的完整UI设计，历时近3年持续迭代。",
    summaryEn: "Renren Album serves various merchants selling on social platforms who need to manage supply sources, agents, orders, and customers simultaneously, but there were no specialized tools for WeChat selling scenarios. When I joined, the product was in a restructuring phase — I needed to reorganize the product architecture while preserving existing user habits, independently handling complete UI design across App, Mini Program, and Web for nearly 3 years of continuous iteration.",
     role: "高级UI设计师",
     roleEn: "Senior UI Designer",
    duration: "2019.02 - 2021.02",
    durationEn: "Feb 2019 - Feb 2021",
    status: "已上线",
    statusEn: "Launched",
    tags: ["社交电商", "C端工具", "PC后台管理"],
    tagsEn: ["Social Commerce", "Consumer Tool", "PC Dashboard"],
    techStack: ["Figma", "Sketch", "微信小程序", "Ant Design"],
    links: {},
    background: "人人相册服务于社交平台卖货的各类商家，商家需要同时管理货源、代理商、订单和客户，但市面上没有专门针对微信卖货场景的工具。我介入时产品处于重构阶段，需要在保留原有用户习惯的前提下重新梳理产品架构，并独立负责App、小程序、Web三端的完整UI设计，历时近3年持续迭代。",
    backgroundEn: "Renren Album serves various merchants selling on social platforms who need to manage supply sources, agents, orders, and customers simultaneously, but there were no specialized tools for WeChat selling scenarios. When I joined, the product was in a restructuring phase — I needed to reorganize the product architecture while preserving existing user habits, independently handling complete UI design across App, Mini Program, and Web for nearly 3 years of continuous iteration.",
    decisions: [
      {
        problem: "首页信息密度过高，用户进入后目标不清晰",
        judgment: "用户核心诉求分两类——管理自己的店铺，和浏览其他人的货源动态。两者需求不同，不应混排",
        solution: "将个人内容区与feed流明确分区，头部聚焦个人主页入口引导用户主动管理店铺；四大功能模块放在个人内容区，视觉风格各有区分，方便用户在使用场景中快速识别；团队空间卡片化处理，在首屏空间有限的情况下兼顾信息露出",
      },
      {
        problem: "发布图文流程复杂，商家上新效率低",
        judgment: "人人相册本质是基于微信朋友圈卖货的工具，用户已有微信发圈的交互习惯，新设计应尽量复用已有认知",
        solution: "发布流程参照微信朋友圈样式降低学习成本；不常用设置收起做层级归纳，只露出高频功能；视频剪辑界面单独使用深色系，让用户专注于视频内容本身而非界面",
      },
      {
        problem: "会员代理体系（人人掌柜）需要传达高级感，让用户愿意付费升级",
        judgment: "掌柜体系是产品营收核心，设计需要建立用户对品牌的信任感，同时让三个等级的差异一目了然",
        solution: "整体采用黑色背景传达高级感；icon、按钮、字体颜色保持低饱和度，克制统一；付费等级用色系区分——黄金掌柜用金色，会员用明黄，商家认证用橙黄渐变，用户一眼即知等级差异",
      },
    ],
    decisionsEn: [
      {
        problem: "Homepage information density too high, users lack clear goals upon entry",
        judgment: "Users have two core needs — managing their own shop and browsing others' supply feeds. These are different needs and shouldn't be mixed",
        solution: "Clearly separated personal content area from feed; header focused on personal homepage entry to guide shop management; four functional modules placed in personal area with distinct visual styles for quick recognition; team spaces card-ified to balance information exposure within limited first-screen space",
      },
      {
        problem: "Complex publishing workflow, low efficiency for merchants adding new products",
        judgment: "Renren Album is essentially a WeChat Moments-based selling tool — users already have interaction habits from posting on Moments, new design should reuse existing cognition",
        solution: "Publishing flow references WeChat Moments style to reduce learning cost; infrequent settings collapsed into hierarchy, only exposing high-frequency functions; video editing interface uses dark theme to keep users focused on content rather than UI",
      },
      {
        problem: "Membership agent system (Renren Shopkeeper) needs to convey premium feel to encourage paid upgrades",
        judgment: "The Shopkeeper system is the product's revenue core — design needs to build brand trust while making three tier differences immediately clear",
        solution: "Overall dark background for premium feel; icons, buttons, font colors kept at low saturation for restraint and unity; tiers differentiated by color — Gold Shopkeeper in gold, Member in bright yellow, Merchant Certified in orange-yellow gradient, making tier differences instantly recognizable",
      },
    ],
    deliverables: [
      { title: '首页结构', titleEn: 'Homepage Structure', description: '个人主页四大功能分区，通过视觉层级引导用户聚焦头部内容', descriptionEn: 'Four functional zones on personal homepage, using visual hierarchy to guide user focus to the header', images: ['/6808cb24-3096-402b-b4de-774cc0a5bb59.png'], layout: 'single', caption: '首页结构' },
      { title: '动态浏览与转存', titleEn: 'Feed Browsing & Repost', description: '整体以白色为主，紫色按钮作为转化引导，信息层级归纳减少视觉干扰', descriptionEn: 'White-dominant layout with purple buttons as conversion guides, reducing visual noise through information hierarchy', images: ['/a423afd6-13ba-4ed2-880e-5e167b7f0f8b.png'], layout: 'single', caption: '动态浏览与转存' },
      { title: '发布图文流程', titleEn: 'Publish Flow', description: '参照微信朋友圈发布样式降低学习成本，非常用设置收起处理，减少操作负担', descriptionEn: 'Modeled after WeChat Moments publishing to lower learning curve, collapsing infrequent settings to reduce cognitive load', images: ['/5011d02c-a7c3-43b1-a406-e6addd6bf14d.png'], layout: 'single', caption: '发布图文流程' },
      { title: '工具页', titleEn: 'Tools Page', description: '紫色卡片聚焦核心数据，订单状态icon与线性操作入口形成明显对比', descriptionEn: 'Purple cards highlight core data, order status icons contrast clearly with linear action entries', images: ['/718e38a0-849c-4a78-9549-0aad7e254b27.png'], layout: 'single', caption: '工具页' },
      { title: '开单流程', titleEn: 'Order Creation Flow', description: '通过需求信息梳理与层级划分，让用户交互流程视觉聚焦到最关注的信息', descriptionEn: 'Through information sorting and hierarchy, user interaction visually focuses on the most important information', images: ['/d7c506d3-9dbd-4c7e-a60c-9ef6ed3041dd.png'], layout: 'single', caption: '开单流程' },
      { title: '人人掌柜 · 三档会员体系', titleEn: 'Renren Shopkeeper · Three-Tier Membership', description: '暗色背景强化品质感，三档掌柜icon与色彩保持低饱和统一，避免视觉混乱', descriptionEn: 'Dark background reinforces premium feel, three-tier icons maintain low-saturation unity to avoid visual clutter', images: ['/d6ff3886-8744-4c37-8997-7a4fea0ae064.png'], layout: 'single', caption: '人人掌柜 · 三档会员体系' },
      { title: '收益中心与会员认证', titleEn: 'Earnings Center & Membership Certification', description: '对合理信息减噪，主次信息对比突出，保持视觉一致性', descriptionEn: 'Reducing noise on relevant information, emphasizing primary vs secondary content, maintaining visual consistency', images: ['/9ba46224-7df0-455a-a44b-bce68a5f7353.png'], layout: 'single', caption: '收益中心与会员认证' },
      { title: '全量页面总览 · Web版延伸', titleEn: 'Full Page Overview · Web Extension', description: 'App完整页面总览，及PC Web版货源管理系统界面', descriptionEn: 'Complete App page overview and PC Web supply management system interface', images: ['/683f63e2-623f-4895-bd7c-6414834642fc.png'], layout: 'single', caption: '全量页面总览 · Web版延伸' },
    ],
    deliverablesEn: [
      { title: 'Homepage Structure', titleEn: 'Homepage Structure', description: 'Four functional zones on personal homepage, using visual hierarchy to guide user focus to the header', descriptionEn: 'Four functional zones on personal homepage, using visual hierarchy to guide user focus to the header', images: ['/6808cb24-3096-402b-b4de-774cc0a5bb59.png'], layout: 'single', caption: 'Homepage Structure' },
      { title: 'Feed Browsing & Repost', titleEn: 'Feed Browsing & Repost', description: 'White-dominant layout with purple buttons as conversion guides, reducing visual noise through information hierarchy', descriptionEn: 'White-dominant layout with purple buttons as conversion guides, reducing visual noise through information hierarchy', images: ['/a423afd6-13ba-4ed2-880e-5e167b7f0f8b.png'], layout: 'single', caption: 'Feed Browsing & Repost' },
      { title: 'Publish Flow', titleEn: 'Publish Flow', description: 'Modeled after WeChat Moments publishing to lower learning curve, collapsing infrequent settings to reduce cognitive load', descriptionEn: 'Modeled after WeChat Moments publishing to lower learning curve, collapsing infrequent settings to reduce cognitive load', images: ['/5011d02c-a7c3-43b1-a406-e6addd6bf14d.png'], layout: 'single', caption: 'Publish Flow' },
      { title: 'Tools Page', titleEn: 'Tools Page', description: 'Purple cards highlight core data, order status icons contrast clearly with linear action entries', descriptionEn: 'Purple cards highlight core data, order status icons contrast clearly with linear action entries', images: ['/718e38a0-849c-4a78-9549-0aad7e254b27.png'], layout: 'single', caption: 'Tools Page' },
      { title: 'Order Creation Flow', titleEn: 'Order Creation Flow', description: 'Through information sorting and hierarchy, user interaction visually focuses on the most important information', descriptionEn: 'Through information sorting and hierarchy, user interaction visually focuses on the most important information', images: ['/d7c506d3-9dbd-4c7e-a60c-9ef6ed3041dd.png'], layout: 'single', caption: 'Order Creation Flow' },
      { title: 'Renren Shopkeeper · Three-Tier Membership', titleEn: 'Renren Shopkeeper · Three-Tier Membership', description: 'Dark background reinforces premium feel, three-tier icons maintain low-saturation unity to avoid visual clutter', descriptionEn: 'Dark background reinforces premium feel, three-tier icons maintain low-saturation unity to avoid visual clutter', images: ['/d6ff3886-8744-4c37-8997-7a4fea0ae064.png'], layout: 'single', caption: 'Renren Shopkeeper · Three-Tier Membership' },
      { title: 'Earnings Center & Membership Certification', titleEn: 'Earnings Center & Membership Certification', description: 'Reducing noise on relevant information, emphasizing primary vs secondary content, maintaining visual consistency', descriptionEn: 'Reducing noise on relevant information, emphasizing primary vs secondary content, maintaining visual consistency', images: ['/9ba46224-7df0-455a-a44b-bce68a5f7353.png'], layout: 'single', caption: 'Earnings Center & Membership Certification' },
      { title: 'Full Page Overview · Web Extension', titleEn: 'Full Page Overview · Web Extension', description: 'Complete App page overview and PC Web supply management system interface', descriptionEn: 'Complete App page overview and PC Web supply management system interface', images: ['/683f63e2-623f-4895-bd7c-6414834642fc.png'], layout: 'single', caption: 'Full Page Overview · Web Extension' },
    ],
    results: [
      "App、小程序、Web三端同步上线，覆盖商家完整卖货流程，产品期间累计用户规模达27万+",
      "历时近3年持续迭代，独立负责产品全链路设计",
      "通过层级归纳和组件化设计，减少前端重复开发工作量",
    ],
    resultsEn: [
      "App, Mini Program, and Web launched simultaneously, covering merchants' complete selling workflow, with cumulative user base reaching 270,000+",
      "Nearly 3 years of continuous iteration, independently responsible for full-chain product design",
      "Reduced frontend redundant development through hierarchy organization and component-based design",
    ],
    reflection: "产品持续迭代3年，但增长路径始终依赖功能堆叠，而不是从核心用户行为出发做减法。越到后期，新功能和已有功能之间的逻辑冲突越明显。如果重来，会在每个迭代周期前先做一次功能使用率的回顾，把低频功能收起来，给核心路径腾出空间。",
    reflectionEn: "The product iterated for 3 years, but the growth path always relied on feature stacking rather than subtraction from core user behaviors. The later it got, the more obvious the logical conflicts between new and existing features became. If I could redo it, I'd review feature usage rates before each iteration cycle, collapse low-frequency features, and make room for core paths.",
  },
{
    id: "6",
    slug: "yiban",
    title: "医伴助手 — 基于企业微信的医患管理工具",
    titleEn: "Medical Companion — Enterprise WeChat-based Doctor-Patient Management Tool",
    coverImage: "/yb.png",
    linkTo: "/more-works/yiban",
    summary: "医生日常用个人微信与患者沟通，边界模糊且无法系统管理患者数据。医伴助手以企业微信为依托，希望帮助医生分离个人与工作关系，同时通过随访问卷、快捷回复等工具提升诊后管理效率。产品需要同时服务医生和患者两类截然不同的用户群体，从0设计并覆盖小程序、H5、PC三端。",
    summaryEn: "Doctors commonly use personal WeChat to communicate with patients, creating blurred boundaries and inability to systematically manage patient data. Medical Companion leverages Enterprise WeChat to help doctors separate personal and work relationships while improving post-consultation management through follow-up questionnaires and quick replies. The product serves two distinctly different user groups — doctors and patients — designed from scratch across Mini Program, H5, and PC.",
     role: "交互 + 视觉设计",
     roleEn: "Interaction & Visual Design",
    duration: "2021.03 - 2021.10",
    durationEn: "Mar 2021 - Oct 2021",
    status: "已上线",
    statusEn: "Launched",
    tags: ["医疗健康", "B端/C端", "小程序"],
    tagsEn: ["Healthcare", "B2B/B2C", "Mini Program"],
    techStack: ["Figma", "企业微信", "Zan Design", "微信小程序"],
    links: {},
    background: "",
    backgroundEn: "",
    decisions: [],
    decisionsEn: [],
    deliverables: [],
    deliverablesEn: [],
    results: [],
    resultsEn: [],
    reflection: "",
    reflectionEn: "",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter((p) => p.tags.includes(tag));
};

export const getAllTags = (language: 'zh' | 'en' = 'zh'): string[] => {
  const tagSet = new Set<string>();
  const field = language === 'zh' ? 'tags' : 'tagsEn';
  projects.forEach((p) => p[field].forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet);
};
