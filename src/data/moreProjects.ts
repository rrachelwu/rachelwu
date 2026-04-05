export interface MoreProjectDecision {
  problem: string;
  judgment: string;
  solution: string;
}

export interface MoreDeliverableItem {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  images: string[];
  layout: 'row-2' | 'row-3' | 'grid-2x2';
}

export interface MoreProject {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  summaryEn: string;
  role: string;
  roleEn: string;
  company: string;
  companyEn: string;
  duration: string;
  durationEn: string;
  status: string;
  statusEn: string;
  tags: string[];
  techStack: string[];
  background: string;
  backgroundEn: string;
  decisions: MoreProjectDecision[];
  decisionsEn: MoreProjectDecision[];
  deliverables: MoreDeliverableItem[];
  deliverablesEn: MoreDeliverableItem[];
  results: string[];
  resultsEn: string[];
  reflection: string;
  reflectionEn: string;
}

export const moreProjects: MoreProject[] = [
  {
    id: "more-1",
    slug: "renren",
    title: "人人相册 — 社交电商货源管理工具的全链路产品设计",
    titleEn: "Renren Album — Full-chain Product Design for Social Commerce Supply Management",
    summary: "为微信卖货商家设计的货源图文管理工具，覆盖App、小程序、Web三端，帮助商家搭建代理体系、管理货源、提升卖货效率",
    summaryEn: "A supply management tool designed for WeChat merchants, covering App, Mini Program, and Web, helping merchants build agent systems, manage supply sources, and improve selling efficiency",
    role: "高级UI设计师 / 产品部",
    roleEn: "Senior UI Designer / Product Dept.",
    company: "武汉紫荆花科技有限公司",
    companyEn: "Wuhan Bauhinia Technology Co., Ltd.",
    duration: "2019.02 - 2021.02",
    durationEn: "Feb 2019 - Feb 2021",
    status: "已上线",
    statusEn: "Launched",
    tags: ["产品设计", "C端", "社交电商", "三端"],
    techStack: ["Figma", "Sketch", "微信小程序", "Ant Design"],
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
      {
        title: '核心功能流程 · 首页 / 动态 / 发布',
        titleEn: 'Core Flows · Home / Feed / Publish',
        description: '首页个人主页结构、动态浏览与转存路径、发布图文完整流程',
        descriptionEn: 'Homepage structure, feed browsing & repost paths, full publishing flow',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        layout: 'row-3',
      },
      {
        title: '工具与订单管理 · 商家效率',
        titleEn: 'Tools & Orders · Merchant Efficiency',
        description: '工具页信息架构、开单流程6步拆解、订单状态卡片化处理',
        descriptionEn: 'Tools page IA, 6-step order creation breakdown, order status cards',
        images: ['/placeholder.svg', '/placeholder.svg'],
        layout: 'row-2',
      },
      {
        title: '人人掌柜 · 会员与代理体系',
        titleEn: 'Renren Shopkeeper · Membership & Agent System',
        description: '三档掌柜视觉方案（暗色品质感）、收益中心、会员认证与商家认证页面',
        descriptionEn: 'Three-tier shopkeeper visuals (dark premium), earnings center, membership & merchant certification',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        layout: 'row-3',
      },
      {
        title: '全量页面览 · Web版延伸',
        titleEn: 'Full Page Overview · Web Extension',
        description: 'App完整页面总览，及PC Web版货源管理系统界面',
        descriptionEn: 'Complete App page overview and PC Web supply management system interface',
        images: ['/placeholder.svg', '/placeholder.svg'],
        layout: 'row-2',
      },
    ],
    deliverablesEn: [
      {
        title: 'Core Flows · Home / Feed / Publish',
        titleEn: 'Core Flows · Home / Feed / Publish',
        description: 'Homepage structure, feed browsing & repost paths, full publishing flow',
        descriptionEn: 'Homepage structure, feed browsing & repost paths, full publishing flow',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        layout: 'row-3',
      },
      {
        title: 'Tools & Orders · Merchant Efficiency',
        titleEn: 'Tools & Orders · Merchant Efficiency',
        description: 'Tools page IA, 6-step order creation breakdown, order status cards',
        descriptionEn: 'Tools page IA, 6-step order creation breakdown, order status cards',
        images: ['/placeholder.svg', '/placeholder.svg'],
        layout: 'row-2',
      },
      {
        title: 'Renren Shopkeeper · Membership & Agent System',
        titleEn: 'Renren Shopkeeper · Membership & Agent System',
        description: 'Three-tier shopkeeper visuals (dark premium), earnings center, membership & merchant certification',
        descriptionEn: 'Three-tier shopkeeper visuals (dark premium), earnings center, membership & merchant certification',
        images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
        layout: 'row-3',
      },
      {
        title: 'Full Page Overview · Web Extension',
        titleEn: 'Full Page Overview · Web Extension',
        description: 'Complete App page overview and PC Web supply management system interface',
        descriptionEn: 'Complete App page overview and PC Web supply management system interface',
        images: ['/placeholder.svg', '/placeholder.svg'],
        layout: 'row-2',
      },
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
    reflection: "持续迭代3年的产品，早期的设计决策会深刻影响后续所有功能的扩展方式。如果重来，会在更早期建立完整的组件规范，避免功能增多后视觉风格逐渐漂移。",
    reflectionEn: "For a product iterated over 3 years, early design decisions profoundly impact how all subsequent features expand. If I could redo it, I'd establish complete component specifications earlier to prevent visual style drift as features grew.",
  },
  {
    id: "more-2",
    slug: "yiban",
    title: "医伴助手 — 基于企业微信的医患管理工具",
    titleEn: "Medical Companion — Enterprise WeChat-based Doctor-Patient Management Tool",
    summary: "帮助医生在企业微信生态内管理患者、发送随访问卷、建立私域流量，同时为患者提供就诊信息登记入口",
    summaryEn: "Helps doctors manage patients within the Enterprise WeChat ecosystem, send follow-up questionnaires, build private traffic, while providing patients with consultation registration entry",
    role: "高级UI设计师 / 产品部",
    roleEn: "Senior UI Designer / Product Dept.",
    company: "武汉紫荆花科技有限公司",
    companyEn: "Wuhan Bauhinia Technology Co., Ltd.",
    duration: "2021.03 - 2021.10",
    durationEn: "Mar 2021 - Oct 2021",
    status: "已上线",
    statusEn: "Launched",
    tags: ["产品设计", "B端", "医疗健康", "跨端"],
    techStack: ["Figma", "企业微信", "Zan Design", "微信小程序"],
    background: "医生日常用个人微信与患者沟通，边界模糊且无法系统管理患者数据。医伴助手以企业微信为依托，希望帮助医生分离个人与工作关系，同时通过随访问卷、快捷回复等工具提升诊后管理效率。产品需要同时服务医生和患者两类截然不同的用户群体，从0设计并覆盖小程序、H5、PC三端。",
    backgroundEn: "Doctors commonly use personal WeChat to communicate with patients, creating blurred boundaries and inability to systematically manage patient data. Medical Companion leverages Enterprise WeChat to help doctors separate personal and work relationships while improving post-consultation management through follow-up questionnaires and quick replies. The product serves two distinctly different user groups — doctors and patients — designed from scratch across Mini Program, H5, and PC.",
    decisions: [
      {
        problem: "产品同时服务医生和患者两类用户，界面容易混淆",
        judgment: "两类用户的使用场景和操作权限完全不同，需要从视觉上建立清晰的角色区隔",
        solution: "制定双色系规范——对内医生使用界面沿用企业微信蓝，传达专业可信；对外患者使用界面统一用绿色，体现健康关怀。色系即角色，用户打开即知道自己在哪个身份下操作，不需要额外的文字说明",
      },
      {
        problem: "医生群体学习新工具的意愿低，担心上手成本高",
        judgment: "医生已高度熟悉微信和企业微信的交互习惯，新工具应尽量复用已有认知，而不是引入新的交互模式",
        solution: "患者列表和病案中心参照微信通讯录UI样式，交互几乎一致；入驻流程只需填写个人信息一步完成；随访问卷大量复用Zan Design组件，保持与企业微信视觉系统一致，降低医生的认知负担",
      },
      {
        problem: "便签条、台卡等线下物料需要动态生成，字段长度不可控",
        judgment: "后端动态生成意味着医生姓名、职称、医院名称的字符数量无法预测，版式必须具备足够的容错性",
        solution: "版式以居中排布为主，避免左右对齐在字段过长时出现错位；只展示最关键的信息（姓名、科室、二维码），减少动态字段数量；提供4种模板覆盖不同场景需求，医生可自行选择保存或申请领取",
      },
    ],
    decisionsEn: [
      {
        problem: "Product serves both doctors and patients — interfaces easily confused",
        judgment: "The two user types have completely different usage scenarios and permissions, requiring clear visual role differentiation",
        solution: "Established dual color system — internal doctor interface uses Enterprise WeChat blue conveying professionalism and trust; external patient interface uses green throughout, reflecting health and care. Color equals role — users immediately know which identity they're operating under without additional text explanation",
      },
      {
        problem: "Doctors have low willingness to learn new tools, concerned about learning costs",
        judgment: "Doctors are highly familiar with WeChat and Enterprise WeChat interaction habits — new tools should reuse existing cognition rather than introducing new interaction patterns",
        solution: "Patient list and medical record center reference WeChat contacts UI style with nearly identical interactions; onboarding requires only one step of personal info; follow-up questionnaires extensively reuse Zan Design components, maintaining consistency with Enterprise WeChat visual system to reduce cognitive burden",
      },
      {
        problem: "Sticky notes, desk cards and other offline materials need dynamic generation with unpredictable field lengths",
        judgment: "Backend dynamic generation means doctor names, titles, hospital names have unpredictable character counts — layout must have sufficient fault tolerance",
        solution: "Layout primarily center-aligned to avoid misalignment from overly long fields; only displays critical info (name, department, QR code) to reduce dynamic fields; provides 4 templates covering different scenario needs, doctors can choose to save or request physical copies",
      },
    ],
    deliverables: [
      {
        title: '企业微信小程序（医生端）',
        titleEn: 'Enterprise WeChat Mini Program (Doctor Side)',
        description: '企业微信小程序（医生端）完整界面',
        descriptionEn: 'Enterprise WeChat Mini Program (doctor side) full interface',
        images: ['/placeholder.svg'],
        layout: 'row-2',
      },
      {
        title: '患者端与PC管理端',
        titleEn: 'Patient Side & PC Dashboard',
        description: '患者端公众号H5与PC管理端界面',
        descriptionEn: 'Patient-side H5 and PC management dashboard',
        images: ['/placeholder.svg'],
        layout: 'row-2',
      },
      {
        title: '线下物料 · 便签条与台卡',
        titleEn: 'Offline Materials · Sticky Notes & Desk Cards',
        description: '线下物料（便签条4款 / 台卡4款）',
        descriptionEn: 'Offline materials (4 sticky note designs / 4 desk card designs)',
        images: ['/placeholder.svg'],
        layout: 'row-2',
      },
    ],
    deliverablesEn: [
      {
        title: 'Enterprise WeChat Mini Program (Doctor Side)',
        titleEn: 'Enterprise WeChat Mini Program (Doctor Side)',
        description: 'Enterprise WeChat Mini Program (doctor side) full interface',
        descriptionEn: 'Enterprise WeChat Mini Program (doctor side) full interface',
        images: ['/placeholder.svg'],
        layout: 'row-2',
      },
      {
        title: 'Patient Side & PC Dashboard',
        titleEn: 'Patient Side & PC Dashboard',
        description: 'Patient-side H5 and PC management dashboard',
        descriptionEn: 'Patient-side H5 and PC management dashboard',
        images: ['/placeholder.svg'],
        layout: 'row-2',
      },
      {
        title: 'Offline Materials · Sticky Notes & Desk Cards',
        titleEn: 'Offline Materials · Sticky Notes & Desk Cards',
        description: 'Offline materials (4 sticky note designs / 4 desk card designs)',
        descriptionEn: 'Offline materials (4 sticky note designs / 4 desk card designs)',
        images: ['/placeholder.svg'],
        layout: 'row-2',
      },
    ],
    results: [
      "产品完整上线，医生端和患者端均已投入使用",
      "双色系规范有效区分两类用户界面，降低误操作风险",
      "线下物料模板系统落地，支持后端动态生成并适配多种字段长度",
    ],
    resultsEn: [
      "Product fully launched, both doctor and patient sides in active use",
      "Dual color system effectively differentiates two user interfaces, reducing misoperation risk",
      "Offline material template system implemented, supporting backend dynamic generation with multi-length field adaptation",
    ],
    reflection: "医伴助手涉及三端，组件复用率本可以更高。前期规范文档建立得不够完整，导致后期各端对齐时花了额外的沟通成本。如果重来，会在设计启动时先完成一版轻量的设计规范，再分端执行。",
    reflectionEn: "Medical Companion involved three platforms where component reuse could have been higher. Insufficient early specification documentation led to extra communication costs when aligning platforms later. If I could redo it, I'd complete a lightweight design specification before executing per platform.",
  },
];
