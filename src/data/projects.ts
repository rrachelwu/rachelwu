import ssrouterCover from '@/assets/ssrouter-cover.png';
import pokubyCover from '@/assets/pokubuy-cover.png';
import wheelslineCover from '@/assets/wheelsline-cover.png';

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
  caption: string;
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
    id: "1",
    slug: "ssrouter",
    title: "SSRouter — 从0搭建面向海外市场的VPN路由器产品体系",
    titleEn: "SSRouter — Building a VPN Router Product System from Scratch for Overseas Markets",
    coverImage: ssrouterCover,
    summary: "为面向美国及俄罗斯市场的VPN路由器，从0建立完整产品信息架构、订阅定价体系与多语言规范",
    summaryEn: "Built complete product IA, subscription pricing system, and multilingual specs from scratch for a VPN router targeting US and Russian markets",
    role: "产品负责人 / 设计负责人",
    roleEn: "Product Lead / Design Lead",
    duration: "2025.01 - 至今",
    durationEn: "Jan 2025 - Present",
    status: "已上线/验证与推广前期",
    statusEn: "Launched / Early validation",
    tags: ["产品设计", "官网", "商业化"],
    techStack: ["Figma", "中英俄多语言", "定价系统", "FAQ体系"],
    links: { demo: "https://ssrouter.com/" },
    background: "这是一个全新出海品牌，目标市场横跨美国和俄罗斯，两个市场用户习惯和信息接受方式差异显著。我介入时没有任何现成的产品框架，需要从用户路径、商业化设计、到多语言规范全部从0建立。",
    backgroundEn: "This was a brand-new overseas brand targeting both the US and Russian markets, where user habits and information consumption differ significantly. When I joined, there was no existing product framework — everything from user paths, commercial design, to multilingual specs needed to be built from scratch.",
    decisions: [
      {
        problem: "美国和俄罗斯用户对VPN产品的认知和信任建立方式不同，不能用同一套内容直接翻译",
        judgment: "通过研究亚马逊评论和竞品，发现美国用户更关注隐私和设备兼容性，俄罗斯用户更关注稳定性和操作简便",
        solution: "两个语言版本在信息优先级和核心卖点上做了实质性差异化处理，而非直接翻译",
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
        problem: "US and Russian users have different perceptions and trust-building patterns for VPN products — can't just translate the same content",
        judgment: "Through Amazon review research and competitor analysis, found US users focus more on privacy and device compatibility, while Russian users prioritize stability and ease of use",
        solution: "Made substantive differentiation in information priority and core selling points across language versions, rather than direct translation",
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
      { caption: "官网截图（ssrouter.com）" },
      { caption: "订阅定价页面截图" },
      { caption: "网关管理后台截图" },
      { caption: "中英俄三语规范示意" },
    ],
    deliverablesEn: [
      { caption: "Website screenshots (ssrouter.com)" },
      { caption: "Subscription pricing page" },
      { caption: "Gateway management dashboard" },
      { caption: "CN/EN/RU trilingual spec reference" },
    ],
    results: [
      "产品完整上线，建立了覆盖官网、后台、Telegram Mini App的完整产品体系",
      "英俄双语版本独立适配，各市场内容策略差异化落地",
    ],
    resultsEn: [
      "Product fully launched with a complete system covering website, dashboard, and Telegram Mini App",
      "EN/RU versions independently adapted with differentiated content strategies per market",
    ],
    reflection: "如果重来，会在项目初期更早建立设计规范文档，避免后期多端适配时反复修改基础样式",
    reflectionEn: "If I could redo it, I'd establish design spec documentation earlier in the project to avoid repeatedly modifying base styles during later multi-platform adaptation",
  },
  {
    id: "2",
    slug: "pokubuy",
    title: "PokuBuy — 重构面向俄罗斯市场的跨境采购平台Telegram Mini App",
    titleEn: "PokuBuy — Rebuilding a Cross-border Purchasing Telegram Mini App for the Russian Market",
    coverImage: pokubyCover,
    summary: "在既有产品设计混乱的情况下，独立重新梳理业务逻辑，从0完成Telegram Mini App完整交互与视觉设计",
    summaryEn: "Independently restructured business logic from a chaotic existing design, completing full interaction and visual design for a Telegram Mini App from scratch",
    role: "设计负责人 / 团队导师",
    roleEn: "Design Lead / Team Mentor",
    duration: "2025",
    durationEn: "2025",
    status: "已交付",
    statusEn: "Delivered",
    tags: ["跨境电商", "多语言", "B2C"],
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
        image: "/placeholder.svg",
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
        image: "/placeholder.svg",
        imageCaption: "从询价到采购到物流的完整状态流转，每个状态对应明确的操作按钮，消除用户在复杂流程中的认知负担",
        imageCaptionEn: "Complete status flow from inquiry to purchase to logistics — each status maps to a clear action button, reducing cognitive load in complex processes",
      },
      {
        problem: "Platform needs Chinese-Russian bilingual support; the two languages have significant character length differences that easily break layouts",
        judgment: "Use component-based design to control layout flexibility, reserve sufficient space for text areas, prevent visual disruption from Russian text wrapping",
        solution: "Established bilingual design specifications, validated key pages in both languages",
      },
    ],
    deliverables: [],
    deliverablesEn: [],
    comparisons: {
      title: "改版前后对比",
      titleEn: "Before & After Comparison",
      subtitle: "以下展示三个核心页面的改版前后对比，左为原版，右为重构版",
      subtitleEn: "Three core pages compared: original on the left, redesigned on the right",
      items: [
        {
          title: "首页",
          titleEn: "Homepage",
          leftImage: "/placeholder.svg",
          leftCaption: "原版将账户余额置于首屏，采购进度不可见",
          leftCaptionEn: "Original placed account balance on first screen, purchase progress invisible",
          rightImage: "/placeholder.svg",
          rightCaption: "重构版以采购状态为核心，关键数字首屏可见",
          rightCaptionEn: "Redesigned version centers on purchase status, key metrics visible on first screen",
        },
        {
          title: "订单详情页",
          titleEn: "Order Detail",
          leftImage: "/placeholder.svg",
          leftCaption: "原版支付信息、汇率、商品状态混排，用户无法快速找到支付入口",
          leftCaptionEn: "Original mixed payment info, exchange rates, and product status — users couldn't quickly find the payment entry",
          rightImage: "/placeholder.svg",
          rightCaption: "重构版按线性流程重组，地址→商品→价格→提交，操作入口固定底部",
          rightCaptionEn: "Redesigned with linear flow: address → products → price → submit, action entry fixed at bottom",
        },
        {
          title: "订单列表",
          titleEn: "Order List",
          leftImage: "/placeholder.svg",
          leftCaption: "原版缺乏状态区分，操作路径不明确",
          leftCaptionEn: "Original lacked status differentiation, action paths unclear",
          rightImage: "/placeholder.svg",
          rightCaption: "每条订单直接显示状态标签，对应操作按钮出现在正确位置",
          rightCaptionEn: "Each order directly shows status tags, corresponding action buttons appear in the correct position",
        },
      ],
    },
    results: [
      "Mini App完成从0到1设计交付，优化用户访问链路",
      "同期指导团队设计师，制定设计标准与规范，提升团队整体输出质量",
    ],
    resultsEn: [
      "Mini App design delivered from 0 to 1, optimizing user access paths",
      "Mentored team designers concurrently, establishing design standards and specifications to improve overall team output quality",
    ],
    reflection: "如果重来，会更早建立双语测试流程，在设计阶段就验证俄文版本的布局稳定性",
    reflectionEn: "If I could redo it, I'd establish bilingual testing processes earlier to validate Russian version layout stability during the design phase",
  },
  {
    id: "3",
    slug: "wheelsline",
    title: "WheelsLine — 轮毂定制平台从0到1的产品体系与后台系统搭建",
    titleEn: "WheelsLine — Building a Custom Wheel Platform from 0 to 1: Product System & Backend",
    coverImage: wheelslineCover,
    summary: "为面向海外市场的高端轮毂定制品牌，搭建完整的前台展示体系与后台订单管理系统",
    summaryEn: "Built a complete frontend showcase and backend order management system for a premium custom wheel brand targeting overseas markets",
    role: "产品经理 / UX / UI / 项目推进",
    roleEn: "Product Manager / UX / UI / Project Lead",
    duration: "2025",
    durationEn: "2025",
    status: "已上线",
    statusEn: "Launched",
    tags: ["B2B", "报价系统", "多语言"],
    techStack: ["Figma", "中英俄三语", "后台系统", "数据架构", "AI辅助交付"],
    links: { demo: "https://wheelsline.com/" },
    background: "品牌从0起步，没有任何数字化产品基础。轮毂定制业务涉及型号、色卡、工艺、规格等大量结构化数据，如何让海外B端客户快速理解产品能力并完成询盘，是核心挑战。同时后台需要支撑仓储和业务协同，流程规范完全空白。",
    backgroundEn: "The brand started from zero with no digital product foundation. The custom wheel business involves large amounts of structured data — models, color cards, processes, specifications. The core challenge was enabling overseas B2B clients to quickly understand product capabilities and complete inquiries. Meanwhile, the backend needed to support warehouse and business collaboration, with no existing process standards.",
    decisions: [
      {
        problem: "轮毂定制涉及大量专业参数，海外客户很难快速判断是否适合自己的车型",
        judgment: "客户的决策路径是：看案例建立信任 → 了解工艺建立偏好 → 确认规格完成询盘",
        solution: "官网以应用案例为核心入口，配合工艺展示和规格参数，引导客户通过Telegram完成询盘转化",
      },
      {
        problem: "型号、色卡、订单、应用案例之间有关联关系，如何让录入人员高效管理",
        judgment: "每个型号是核心节点，色卡和案例都围绕型号关联，订单也需要和型号绑定",
        solution: "设计型号为主索引的数据架构，色卡管理按颜色系分组（99种色号/13个分组），每个型号可直接查看关联订单和应用案例",
      },
      {
        problem: "需要在极短时间内完成系统从0到1的搭建",
        judgment: "后台页面结构相对固定，可以用提示词驱动HTML原型生成，后端直接基于原型开发",
        solution: "与后端协作建立设计→AI生成→代码转化的快速交付链路，15天内完成系统完整搭建",
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
    ],
    deliverables: [
      { caption: "官网截图（wheelsline.com）" },
      { caption: "后台型号管理页面截图" },
      { caption: "色卡管理页面截图" },
      { caption: "新建案例表单截图" },
    ],
    deliverablesEn: [
      { caption: "Website screenshots (wheelsline.com)" },
      { caption: "Backend model management page" },
      { caption: "Color card management page" },
      { caption: "New case creation form" },
    ],
    results: [
      "前台官网上线，后台系统支撑日常订单管理",
      "建立了SKU命名、唛头规则、素材标准、订单流程的全套产品规范体系",
    ],
    resultsEn: [
      "Frontend website launched, backend system supporting daily order management",
      "Established complete product specification system covering SKU naming, shipping marks, asset standards, and order workflows",
    ],
    reflection: "如果重来，会在系统设计初期就把定价计算逻辑纳入规划，避免后期需要单独开发",
    reflectionEn: "If I could redo it, I'd incorporate pricing calculation logic into the initial system design to avoid needing separate development later",
  },
  {
    id: "4",
    slug: "juzhengyuan",
    title: "矩阵元产品设计 — 区块链钱包、密钥管理平台与知识管理系统的设计体系建设",
    titleEn: "Juzhengyuan Product Design — Design System for Blockchain Wallet, Key Management & Knowledge Management",
    coverImage: "/placeholder.svg",
    summary: "在矩阵元（深圳）担任产品设计师期间，独立负责三条产品线的完整设计：面向个人用户的Privacy Wallet区块链钱包（App）、面向企业用户的MPC-KMS密钥管理系统（Web后台+官网），以及内部KMS知识管理系统（从品牌到组件库的从0到1设计），从视觉规范到交互体系全面交付。",
    summaryEn: "As product designer at Juzhengyuan (Shenzhen), independently led the complete design of three product lines: Privacy Wallet blockchain wallet (App), MPC-KMS key management system (Web dashboard + website), and internal KMS knowledge management system (0-to-1 from brand to component library), delivering from visual specs to interaction systems.",
    role: "产品设计师 / 矩阵元（深圳）技术有限公司",
    roleEn: "Product Designer / Juzhengyuan (Shenzhen) Technology Co., Ltd.",
    duration: "2022.03 - 2023.01",
    durationEn: "Mar 2022 - Jan 2023",
    status: "已上线",
    statusEn: "Launched",
    tags: ["产品设计", "区块链", "0-1改版", "设计体系", "B端后台", "设计规范"],
    techStack: ["Figma", "Sketch", "iOS", "Android", "Ant Design", "React"],
    links: {},
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
      { caption: "Privacy Wallet App完整UI（iOS/Android）" },
      { caption: "Staking DApp内嵌H5" },
      { caption: "KMS操作台（PC Web响应式）" },
      { caption: "KMS官网（opentss.com）" },
      { caption: "统一设计规范（色彩/字体/组件库）" },
      { caption: "两套Logo创作方案" },
    ],
    deliverablesEn: [
      { caption: "Privacy Wallet App complete UI (iOS/Android)" },
      { caption: "Staking DApp embedded H5" },
      { caption: "KMS Dashboard (PC Web responsive)" },
      { caption: "KMS Website (opentss.com)" },
      { caption: "Unified design specs (colors/typography/component library)" },
      { caption: "Two logo design proposals" },
    ],
    results: [
      "两条产品线完整上线，建立统一的区块链产品设计语言",
      "设计规范落地后前端H5开发效率提升，组件复用率提高",
      "响应式组件库减少跨屏适配的重复工作量",
    ],
    resultsEn: [
      "Both product lines fully launched, establishing a unified blockchain product design language",
      "Frontend H5 development efficiency improved after design specs landed, component reuse rate increased",
      "Responsive component library reduced repetitive work for cross-screen adaptation",
    ],
    reflection: "两条产品线并行推进时，前期花了较多时间在反复确认品牌关键词上。如果重来，会在项目启动时先用一次设计冲刺把两条线的品牌定位同时对齐，再分头执行，避免各自调整时产生风格偏差。",
    reflectionEn: "When advancing two product lines in parallel, too much time was spent early on repeatedly confirming brand keywords. If I could redo it, I'd run a design sprint at project kickoff to align both lines' brand positioning simultaneously, then execute separately to avoid style drift during individual adjustments.",
  },
  {
    id: "5",
    slug: "kms",
    title: "KMS 知识管理系统",
    titleEn: "KMS Knowledge Management System",
    coverImage: "/placeholder.svg",
    summary: "从品牌标识到组件库，完整主导知识管理后台系统的从 0 到 1 设计落地。",
    summaryEn: "From brand identity to component library, fully led the 0-to-1 design delivery of a knowledge management backend system.",
    role: "唯一设计师",
    roleEn: "Sole Designer",
    duration: "2023",
    durationEn: "2023",
    status: "已上线",
    statusEn: "Launched",
    tags: ["B端后台", "从0到1", "设计规范"],
    techStack: ["Figma", "组件库", "设计规范"],
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

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
};
