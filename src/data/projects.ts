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
  images?: string[];
  layout?: 'single' | 'row-3' | 'grid-2x2';
  caption: string;
  title?: string;
  titleEn?: string;
  description?: string;
  descriptionEn?: string;
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
    id: "1",
    slug: "ssrouter",
    title: "SSRouter — 从0搭建面向海外市场的VPN路由器产品体系",
    titleEn: "SSRouter — Building a VPN Router Product System from Scratch for Overseas Markets",
    coverImage: ssrouterCover,
    summary: "为面向美国及俄罗斯市场的VPN路由器，从0建立完整产品信息架构、订阅定价体系与多语言规范",
    summaryEn: "Built complete product IA, subscription pricing system, and multilingual specs from scratch for a VPN router targeting US and Russian markets",
    role: "产品负责人 / 设计负责人",
    roleEn: "Product Lead / Design Lead",
    duration: "2025.04 - 至今",
    durationEn: "Apr 2025 - Present",
    status: "已上线/验证与推广前期",
    statusEn: "Launched / Early validation",
    tags: ["出海品牌", "硬件配套软件", "B端/C端", "订阅制产品"],
    tagsEn: ["Global Brand", "Hardware Software", "B2B/B2C", "Subscription"],
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
        image: "/placeholder.svg",
        caption: "品牌基础",
      },
      {
        title: "俄罗斯版 Mini App · Telegram",
        description: "覆盖设备绑定、节点切换、套餐查看与购买全流程，承载俄语市场主要用户触点",
        image: "/placeholder.svg",
        caption: "俄罗斯版 Mini App",
      },
      {
        title: "俄罗斯版官网 · RU Site",
        description: "西里尔字母排版适配、卢布结算、独立于英文版的内容架构与购买流程",
        image: "/placeholder.svg",
        caption: "俄罗斯版官网",
      },
      {
        title: "美版产品体系 · US Site & Dashboard",
        description: "美版侧重隐私信任感建立，订阅套餐三档定价结构，路由后台支持设备与流量管理",
        image: "/placeholder.svg",
        caption: "美版产品体系",
      },
    ],
    deliverablesEn: [
      {
        title: "Brand Identity",
        titleEn: "Brand Identity",
        description: "From Logo concept to hardware packaging design, establishing the brand's visual anchor from zero to one",
        image: "/placeholder.svg",
        caption: "Brand Identity",
      },
      {
        title: "Russian Mini App · Telegram",
        titleEn: "Russian Mini App · Telegram",
        description: "Covering device binding, node switching, plan viewing and purchasing — the primary user touchpoint for the Russian market",
        image: "/placeholder.svg",
        caption: "Russian Mini App",
      },
      {
        title: "Russian Website · RU Site",
        titleEn: "Russian Website · RU Site",
        description: "Cyrillic typography adaptation, Ruble settlement, independent IA and purchase flow from the English version",
        image: "/placeholder.svg",
        caption: "Russian Website",
      },
      {
        title: "US Product System · US Site & Dashboard",
        titleEn: "US Product System · US Site & Dashboard",
        description: "US version focuses on privacy trust building, three-tier subscription pricing, router dashboard for device and traffic management",
        image: "/placeholder.svg",
        caption: "US Product System",
      },
    ],
    results: [
      "独立完成从品牌到产品的全链路设计，覆盖 Logo、硬件包装、Mini App、官网、后台共5个产品触点",
      "俄罗斯版 Telegram Mini App 完整上线，覆盖设备绑定、节点切换、套餐查看与购买全流程",
      "俄罗斯版独立官网上线，包含登录注册体系与路由器购买商城",
      "美版官网完成内容架构重建与订阅套餐三档定价设计，英俄双版本内容策略独立落地",
      "美版路由器后台管理系统交付，支持设备管理与流量统计",
    ],
    resultsEn: [
      "Independently completed full-chain design from brand to product, covering 5 touchpoints: Logo, hardware packaging, Mini App, website, and dashboard",
      "Russian Telegram Mini App fully launched, covering device binding, node switching, plan viewing and purchasing",
      "Russian standalone website launched with login/registration system and router purchase store",
      "US website completed IA restructuring and three-tier subscription pricing design, with EN/RU content strategies independently implemented",
      "US router management dashboard delivered, supporting device management and traffic analytics",
    ],
    reflection: "俄版上线后因政策原因被迫转向美国市场，整个产品方向的切换是被动的而非主动规划的。如果重来，会在立项时就把政策风险纳入市场选择的评估维度，优先选择监管环境更稳定的市场作为首发，而不是在已经投入大量资源后再被迫转向。",
    reflectionEn: "After the Russian version launched, policy changes forced a pivot to the US market — the entire product direction shift was reactive, not planned. If I could redo it, I'd include policy risk as a key factor in market selection from the start, prioritizing markets with more stable regulatory environments for initial launch, rather than being forced to pivot after significant resources had already been invested.",
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
    tags: ["跨境电商", "C端工具", "Telegram生态", "俄语市场"],
    tagsEn: ["Cross-border E-commerce", "Consumer Tool", "Telegram Ecosystem", "Russian Market"],
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
        image: "88bc5231-77c3-418e-93f1-89e93420255a.png",
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
        image: "88bc5231-77c3-418e-93f1-89e93420255a.png",
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
        {
          title: "Overview总览",
          titleEn: "Overview",
          leftCaption: "",
          leftCaptionEn: "",
          rightCaption: "",
          rightCaptionEn: "",
          fullWidth: true,
          fullWidthImage: "/placeholder.svg",
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
    reflection: "改版的触发点是视觉问题，但根本原因是产品定位一直不够清晰——到底是服务有采购经验的批发商，还是个人买家，两类用户的决策路径完全不同。如果重来，会在改版前先做一轮用户分层，把核心用户画像确定下来，再决定信息架构的取舍方向。",
    reflectionEn: "The redesign was triggered by visual issues, but the root cause was unclear product positioning — whether to serve experienced wholesalers or individual buyers, whose decision paths are completely different. If I could redo it, I'd conduct user segmentation before the redesign, define core user personas, then decide on information architecture trade-offs.",
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
    tags: ["出海品牌", "B2B/B2C平台", "供应链系统", "定制化产品"],
    tagsEn: ["Global Brand", "B2B/B2C Platform", "Supply Chain", "Custom Products"],
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
        solution: "与后端协作建立设计→AI生成→代码转化的快速交付链路，15天内完成订单系统完整搭建",
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
      { caption: "", title: "品牌与官网 · Brand & Website", image: "/placeholder.svg", description: "从Logo设计到官网完整搭建，建立品牌从零到一的视觉体系，覆盖wheelsline.com全站页面" },
      { caption: "", title: "供应链后台 · 订单与SKU管理", image: "/placeholder.svg", description: "订单流转、SKU规范、型号管理全链路后台系统，支撑工厂与销售团队的日常运营协作" },
      { caption: "", title: "供应链后台 · 色卡规范系统", image: "/placeholder.svg", description: "将工厂色卡数据转化为标准化产品信息架构，与工厂深度协作" },
      { caption: "", title: "供应链后台 · 案例库管理", image: "/placeholder.svg", description: "买家成品案例与型号、订单数据关联展示，用户通过案例可直接查看对应轮毂的规格、型号与工艺详情，一键定制同款，降低定制门槛，推动规模化量产" },
      { caption: "", title: "用户端 Mini App", image: "/placeholder.svg", description: "面向海外用户的轮毂选型与询盘小程序，覆盖型号浏览、色卡选择、Telegram转化入口" },
    ],
    deliverablesEn: [
      { caption: "", title: "Brand & Website", image: "/placeholder.svg", description: "From logo design to full website build, establishing the brand's visual system from zero to one, covering all pages of wheelsline.com" },
      { caption: "", title: "Supply Chain Backend · Orders & SKU Management", image: "/placeholder.svg", description: "End-to-end backend system for order flow, SKU standards, and model management, supporting daily operations between factory and sales teams" },
      { caption: "", title: "Supply Chain Backend · Color Card System", image: "/placeholder.svg", description: "Transformed factory color card data into standardized product information architecture through deep factory collaboration" },
      { caption: "", title: "Supply Chain Backend · Case Library", image: "/placeholder.svg", description: "Buyer finished-product cases linked with model and order data, enabling users to view specs, models and process details directly, one-click custom ordering to reduce barriers and drive mass production" },
      { caption: "", title: "User-facing Mini App", image: "/placeholder.svg", description: "Wheel selection and inquiry mini program for overseas users, covering model browsing, color card selection, and Telegram conversion entry" },
    ],
    results: [
      "前台官网上线，后台系统支撑日常订单管理",
      "建立SKU命名、唛头规则、素材标准、订单流程的全套产品规范体系",
      "与工厂深度协作完成轮毂专业数据库梳理，建立常见车型轮毂规格参考表，将行业经验转化为系统化产品信息标准，支撑后台SKU规范与用户端选型逻辑",
      "输出经销商完整销售手册，覆盖折扣体系、工艺说明、质保政策与物流须知，支撑海外经销商独立开展销售",
    ],
    resultsEn: [
      "Frontend website launched, backend system supporting daily order management",
      "Established complete product specification system covering SKU naming, shipping marks, asset standards, and order workflows",
      "Collaborated deeply with factories to build a professional wheel database, establishing common vehicle wheel spec reference tables, transforming industry experience into systematic product information standards supporting backend SKU specs and user-facing selection logic",
      "Delivered complete dealer sales manual covering discount structures, process descriptions, warranty policies, and logistics guidelines, enabling overseas dealers to independently conduct sales",
    ],
    reflection: "项目初期把大量精力放在视觉呈现上，但轮毂定制的核心转化障碍其实是信任问题——海外买家不确定能不能拿到真实样品、工厂资质是否可靠。如果重来，会更早推动把工厂认证信息和买家案例纳入主流程，而不是作为补充内容放在边缘位置。",
    reflectionEn: "Early on, too much effort was spent on visual presentation, but the core conversion barrier for custom wheels was actually trust — overseas buyers weren't sure they could get real samples or whether the factory was credible. If I could redo it, I'd push earlier to bring factory certification and buyer cases into the main flow rather than placing them as supplementary content on the periphery.",
  },
  {
    id: "4",
    slug: "juzhenyuan",
    title: "区块链钱包、密钥管理平台与知识管理系统的设计体系建设",
    titleEn: "Design System for Blockchain Wallet, Key Management & Knowledge Management",
    coverImage: "/juzhenyuan-cover.png",
    summary: "在矩阵元（深圳）担任产品设计师期间，独立负责三条产品线的完整设计：面向个人用户的Privacy Wallet区块链钱包（App）、面向企业用户的MPC-KMS密钥管理系统（Web后台+官网），以及内部KMS知识管理系统（从品牌到组件库的从0到1设计），从视觉规范到交互体系全面交付。",
    summaryEn: "As product designer at Juzhengyuan (Shenzhen), independently led the complete design of three product lines: Privacy Wallet blockchain wallet (App), MPC-KMS key management system (Web dashboard + website), and internal KMS knowledge management system (0-to-1 from brand to component library), delivering from visual specs to interaction systems.",
    role: "产品设计师",
    roleEn: "Product Designer",
    duration: "2022.03 - 2023.01",
    durationEn: "Mar 2022 - Jan 2023",
    status: "已上线",
    statusEn: "Launched",
    tags: ["Web3", "金融工具", "C端App", "B端系统"],
    tagsEn: ["Web3", "Finance Tool", "Consumer App", "Enterprise System"],
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
    tags: ["社交电商", "C端工具", "SaaS工具"],
    tagsEn: ["Social Commerce", "Consumer Tool", "SaaS Tool"],
    techStack: ["Figma", "Sketch", "微信小程序", "Ant Design"],
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
  {
    id: "6",
    slug: "yiban",
    title: "医伴助手 — 基于企业微信的医患管理工具",
    titleEn: "Medical Companion — Enterprise WeChat-based Doctor-Patient Management Tool",
    coverImage: "/yb.png",
    linkTo: "/more-works/yiban",
    summary: "医生日常用个人微信与患者沟通，边界模糊且无法系统管理患者数据。医伴助手以企业微信为依托，希望帮助医生分离个人与工作关系，同时通过随访问卷、快捷回复等工具提升诊后管理效率。产品需要同时服务医生和患者两类截然不同的用户群体，从0设计并覆盖小程序、H5、PC三端。",
    summaryEn: "Doctors commonly use personal WeChat to communicate with patients, creating blurred boundaries and inability to systematically manage patient data. Medical Companion leverages Enterprise WeChat to help doctors separate personal and work relationships while improving post-consultation management through follow-up questionnaires and quick replies. The product serves two distinctly different user groups — doctors and patients — designed from scratch across Mini Program, H5, and PC.",
     role: "高级UI设计师",
     roleEn: "Senior UI Designer",
    duration: "2021.03 - 2021.10",
    durationEn: "Mar 2021 - Oct 2021",
    status: "已上线",
    statusEn: "Launched",
    tags: ["医疗健康", "B端系统", "小程序", "企业微信生态"],
    tagsEn: ["Healthcare", "Enterprise System", "Mini Program", "WeCom Ecosystem"],
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
