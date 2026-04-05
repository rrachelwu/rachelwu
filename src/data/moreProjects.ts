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
  layout: 'single' | 'row-2' | 'row-3' | 'grid-2x2';
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
    summary: "人人相册服务于社交平台卖货的各类商家，商家需要同时管理货源、代理商、订单和客户，但市面上没有专门针对微信卖货场景的工具。我介入时产品处于重构阶段，需要在保留原有用户习惯的前提下重新梳理产品架构，并独立负责App、小程序、Web三端的完整UI设计，历时近3年持续迭代。",
    summaryEn: "Renren Album serves various merchants selling on social platforms who need to manage supply sources, agents, orders, and customers simultaneously, but there were no specialized tools for WeChat selling scenarios. When I joined, the product was in a restructuring phase — I needed to reorganize the product architecture while preserving existing user habits, independently handling complete UI design across App, Mini Program, and Web for nearly 3 years of continuous iteration.",
     role: "高级UI设计师",
     roleEn: "Senior UI Designer",
    company: "武汉紫荆花科技有限公司",
    companyEn: "Wuhan Bauhinia Technology Co., Ltd.",
    duration: "2019.02 - 2021.02",
    durationEn: "Feb 2019 - Feb 2021",
    status: "已上线",
    statusEn: "Launched",
    tags: ["产品设计", "C端", "社交电商", "三端"],
    techStack: ["Sketch", "微信小程序", "Ant Design"],
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
      { title: '首页结构', titleEn: 'Homepage Structure', description: '个人主页四大功能分区，通过视觉层级引导用户聚焦头部内容', descriptionEn: 'Four functional zones on personal homepage, using visual hierarchy to guide user focus to the header', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: '动态浏览与转存', titleEn: 'Feed Browsing & Repost', description: '整体以白色为主，紫色按钮作为转化引导，信息层级归纳减少视觉干扰', descriptionEn: 'White-dominant layout with purple buttons as conversion guides, reducing visual noise through information hierarchy', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: '发布图文流程', titleEn: 'Publish Flow', description: '参照微信朋友圈发布样式降低学习成本，非常用设置收起处理，减少操作负担', descriptionEn: 'Modeled after WeChat Moments publishing to lower learning curve, collapsing infrequent settings to reduce cognitive load', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: '工具页', titleEn: 'Tools Page', description: '紫色卡片聚焦核心数据，订单状态icon与线性操作入口形成明显对比', descriptionEn: 'Purple cards highlight core data, order status icons contrast clearly with linear action entries', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: '开单流程', titleEn: 'Order Creation Flow', description: '通过需求信息梳理与层级划分，让用户交互流程视觉聚焦到最关注的信息', descriptionEn: 'Through information sorting and hierarchy, user interaction visually focuses on the most important information', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: '人人掌柜 · 三档会员体系', titleEn: 'Renren Shopkeeper · Three-Tier Membership', description: '暗色背景强化品质感，三档掌柜icon与色彩保持低饱和统一，避免视觉混乱', descriptionEn: 'Dark background reinforces premium feel, three-tier icons maintain low-saturation unity to avoid visual clutter', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: '收益中心与会员认证', titleEn: 'Earnings Center & Membership Certification', description: '对合理信息减噪，主次信息对比突出，保持视觉一致性', descriptionEn: 'Reducing noise on relevant information, emphasizing primary vs secondary content, maintaining visual consistency', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: '全量页面总览 · Web版延伸', titleEn: 'Full Page Overview · Web Extension', description: 'App完整页面总览，及PC Web版货源管理系统界面', descriptionEn: 'Complete App page overview and PC Web supply management system interface', images: ['/placeholder.svg'], layout: 'single' as const },
    ],
    deliverablesEn: [
      { title: 'Homepage Structure', titleEn: 'Homepage Structure', description: 'Four functional zones on personal homepage, using visual hierarchy to guide user focus to the header', descriptionEn: 'Four functional zones on personal homepage, using visual hierarchy to guide user focus to the header', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: 'Feed Browsing & Repost', titleEn: 'Feed Browsing & Repost', description: 'White-dominant layout with purple buttons as conversion guides, reducing visual noise through information hierarchy', descriptionEn: 'White-dominant layout with purple buttons as conversion guides, reducing visual noise through information hierarchy', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: 'Publish Flow', titleEn: 'Publish Flow', description: 'Modeled after WeChat Moments publishing to lower learning curve, collapsing infrequent settings to reduce cognitive load', descriptionEn: 'Modeled after WeChat Moments publishing to lower learning curve, collapsing infrequent settings to reduce cognitive load', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: 'Tools Page', titleEn: 'Tools Page', description: 'Purple cards highlight core data, order status icons contrast clearly with linear action entries', descriptionEn: 'Purple cards highlight core data, order status icons contrast clearly with linear action entries', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: 'Order Creation Flow', titleEn: 'Order Creation Flow', description: 'Through information sorting and hierarchy, user interaction visually focuses on the most important information', descriptionEn: 'Through information sorting and hierarchy, user interaction visually focuses on the most important information', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: 'Renren Shopkeeper · Three-Tier Membership', titleEn: 'Renren Shopkeeper · Three-Tier Membership', description: 'Dark background reinforces premium feel, three-tier icons maintain low-saturation unity to avoid visual clutter', descriptionEn: 'Dark background reinforces premium feel, three-tier icons maintain low-saturation unity to avoid visual clutter', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: 'Earnings Center & Membership Certification', titleEn: 'Earnings Center & Membership Certification', description: 'Reducing noise on relevant information, emphasizing primary vs secondary content, maintaining visual consistency', descriptionEn: 'Reducing noise on relevant information, emphasizing primary vs secondary content, maintaining visual consistency', images: ['/placeholder.svg'], layout: 'single' as const },
      { title: 'Full Page Overview · Web Extension', titleEn: 'Full Page Overview · Web Extension', description: 'Complete App page overview and PC Web supply management system interface', descriptionEn: 'Complete App page overview and PC Web supply management system interface', images: ['/placeholder.svg'], layout: 'single' as const },
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
    id: "more-2",
    slug: "yiban",
    title: "医伴助手 — 基于企业微信的医患管理工具",
    titleEn: "Medical Companion — Enterprise WeChat-based Doctor-Patient Management Tool",
    summary: "医生日常用个人微信与患者沟通，边界模糊且无法系统管理患者数据。医伴助手以企业微信为依托，希望帮助医生分离个人与工作关系，同时通过随访问卷、快捷回复等工具提升诊后管理效率。产品需要同时服务医生和患者两类截然不同的用户群体，从0设计并覆盖小程序、H5、PC三端。",
    summaryEn: "Doctors commonly use personal WeChat to communicate with patients, creating blurred boundaries and inability to systematically manage patient data. Medical Companion leverages Enterprise WeChat to help doctors separate personal and work relationships while improving post-consultation management through follow-up questionnaires and quick replies. The product serves two distinctly different user groups — doctors and patients — designed from scratch across Mini Program, H5, and PC.",
     role: "高级UI设计师",
     roleEn: "Senior UI Designer",
    company: "武汉紫荆花科技有限公司",
    companyEn: "Wuhan Bauhinia Technology Co., Ltd.",
    duration: "2021.03 - 2021.10",
    durationEn: "Mar 2021 - Oct 2021",
    status: "已上线",
    statusEn: "Launched",
    tags: ["产品设计", "B端", "医疗健康", "跨端"],
    techStack: ["Sketch", "企业微信", "Zan Design", "微信小程序"],
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
        title: '双色系设计规则 · 工作台',
        titleEn: 'Dual Color System · Workbench',
        description: '蓝色企业微信风格用于医生工作台，绿色用于患者侧流程，角色边界通过颜色系统清晰区分',
        descriptionEn: 'Blue Enterprise WeChat style for doctor workbench, green for patient-side flows, role boundaries clearly differentiated through color system',
        images: ['/a1ad6e5e-265c-49dd-8b63-7c75ae6a4fa4.png'],
        layout: 'single',
      },
      {
        title: '医生入驻与形象展示',
        titleEn: 'Doctor Onboarding & Profile Display',
        description: '1 步完成入驻流程设计，物料中心支持便签条/台卡多模板选择，个人主页支持网页与图片两种分享格式',
        descriptionEn: 'One-step onboarding flow design, material center supports sticky note/desk card multi-template selection, personal page supports both web and image sharing formats',
        images: ['/37c22804-30c5-489f-a8b1-070fc3215656.png'],
        layout: 'single',
      },
      {
        title: '患者登记与病案管理',
        titleEn: 'Patient Registration & Medical Record Management',
        description: '患者添加医生后自动触发登记流程，病案中心参考微信通讯录交互样式，降低医生学习成本',
        descriptionEn: 'Registration flow auto-triggered after patient adds doctor, medical record center references WeChat contacts interaction style to reduce doctor learning cost',
        images: ['/57ea693f-72eb-4a97-b32f-87ff1e827045.png'],
        layout: 'single',
      },
      {
        title: '效率工具 · 自动化沟通',
        titleEn: 'Efficiency Tools · Automated Communication',
        description: '自动打招呼、快捷回复、患者群发、运营工具四大模块，卡片化组件设计支持功能复用',
        descriptionEn: 'Auto-greeting, quick replies, patient broadcast, operations tools — four modules with card-based component design supporting feature reuse',
        images: ['/292119d4-1f25-4251-9fd1-8d68091beb3e.png'],
        layout: 'single',
      },
      {
        title: '全量页面总览',
        titleEn: 'Complete Page Overview',
        description: '医生端（企业微信） + 患者端（小程序） 两端完整页面输出',
        descriptionEn: 'Doctor Side (Enterprise WeChat) + Patient Side (Mini Program) — complete page output across two platforms',
        images: ['/894e89eb-795c-4821-98da-3c9efc684d3c.png'],
        layout: 'single',
      },
    ],
    deliverablesEn: [
      {
        title: 'Dual Color System · Workbench',
        titleEn: 'Dual Color System · Workbench',
        description: 'Blue Enterprise WeChat style for doctor workbench, green for patient-side flows, role boundaries clearly differentiated through color system',
        descriptionEn: 'Blue Enterprise WeChat style for doctor workbench, green for patient-side flows, role boundaries clearly differentiated through color system',
        images: ['/a1ad6e5e-265c-49dd-8b63-7c75ae6a4fa4.png'],
        layout: 'single',
      },
      {
        title: 'Doctor Onboarding & Profile Display',
        titleEn: 'Doctor Onboarding & Profile Display',
        description: 'One-step onboarding flow design, material center supports sticky note/desk card multi-template selection, personal page supports both web and image sharing formats',
        descriptionEn: 'One-step onboarding flow design, material center supports sticky note/desk card multi-template selection, personal page supports both web and image sharing formats',
        images: ['/37c22804-30c5-489f-a8b1-070fc3215656.png'],
        layout: 'single',
      },
      {
        title: 'Patient Registration & Medical Record Management',
        titleEn: 'Patient Registration & Medical Record Management',
        description: 'Registration flow auto-triggered after patient adds doctor, medical record center references WeChat contacts interaction style to reduce doctor learning cost',
        descriptionEn: 'Registration flow auto-triggered after patient adds doctor, medical record center references WeChat contacts interaction style to reduce doctor learning cost',
        images: ['/57ea693f-72eb-4a97-b32f-87ff1e827045.png'],
        layout: 'single',
      },
      {
        title: 'Efficiency Tools · Automated Communication',
        titleEn: 'Efficiency Tools · Automated Communication',
        description: 'Auto-greeting, quick replies, patient broadcast, operations tools — four modules with card-based component design supporting feature reuse',
        descriptionEn: 'Auto-greeting, quick replies, patient broadcast, operations tools — four modules with card-based component design supporting feature reuse',
        images: ['/292119d4-1f25-4251-9fd1-8d68091beb3e.png'],
        layout: 'single',
      },
      {
        title: 'Complete Page Overview',
        titleEn: 'Complete Page Overview',
        description: '医生端（企业微信） + 患者端（小程序） 两端完整页面输出',
        descriptionEn: 'Doctor Side (Enterprise WeChat) + Patient Side (Mini Program) — complete page output across two platforms',
        images: ['/894e89eb-795c-4821-98da-3c9efc684d3c.png'],
        layout: 'single',
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
    reflection: "产品服务的是医生，但设计过程中获取真实医生反馈的机会很少，大多数决策依赖产品经理的二手转述。如果重来，会推动在项目中期安排至少一次直接的医生访谈，用第一手信息验证核心流程的假设是否成立。",
    reflectionEn: "The product serves doctors, but opportunities to get real doctor feedback during the design process were rare — most decisions relied on secondhand accounts from product managers. If I could redo it, I'd push to arrange at least one direct doctor interview mid-project to validate core flow assumptions with firsthand information.",
  },
];
