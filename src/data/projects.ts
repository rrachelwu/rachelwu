import ssrouterCover from '@/assets/ssrouter-cover.png';
import pokubyCover from '@/assets/pokubuy-cover.png';
import wheelslineCover from '@/assets/wheelsline-cover.png';

export interface DecisionItem {
  problem: string;
  judgment: string;
  solution: string;
}

export interface DeliverableItem {
  image?: string;
  caption: string;
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
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ssrouter",
    title: "SSRouter 智能家庭路由器",
    titleEn: "SSRouter Smart Home Router",
    coverImage: ssrouterCover,
    summary: "帮助一个从零起步的硬件团队建立完整的产品官网体系，让用户能清晰理解产品价值并完成购买决策",
    summaryEn: "Helped a hardware startup build a complete product website system, enabling users to clearly understand product value and make purchase decisions",
    role: "产品负责人 / 设计负责人",
    roleEn: "Product Lead / Design Lead",
    duration: "2025.01 - 至今",
    durationEn: "Jan 2025 - Present",
    status: "已上线/验证与推广前期",
    statusEn: "Launched / Early validation",
    tags: ["产品设计", "官网", "商业化"],
    techStack: ["Figma", "中英俄多语言", "定价系统", "FAQ体系"],
    links: { demo: "https://ssrouter.com/" },
    background: "SSRouter 是一款面向海外市场的智能路由器产品，团队从零开始搭建官网。介入时面临的核心问题：产品功能复杂但缺乏清晰的信息架构，用户难以理解产品价值；同时需要支持中英俄三语，且团队没有成熟的设计-研发协作流程。",
    backgroundEn: "SSRouter is a smart router product targeting overseas markets, with the team building the website from scratch. Core challenges: complex product features lacked clear information architecture, making it hard for users to understand value; tri-lingual support (CN/EN/RU) was needed, and the team had no established design-dev workflow.",
    decisions: [
      {
        problem: "产品功能多而杂，用户进入官网后不知道这个产品能解决什么问题",
        judgment: "与其罗列所有功能，不如从用户场景出发做卖点分层——先让用户理解「这是什么」，再引导「为什么选它」",
        solution: "设计了卡片化的卖点分层结构：首屏一句话价值主张 → 核心场景卡片 → 技术参数对比 → 信任要素（FAQ/评价），形成完整的说服路径",
      },
      {
        problem: "团队没有设计-研发协作规范，之前的开发经常返工",
        judgment: "问题不在于设计稿质量，而在于缺少「可执行的交付标准」——研发需要的不只是视觉稿，而是状态规则、异常处理、边界条件",
        solution: "建立了完整的交付体系：PRD 协同要点 + 交互原型 + 高保真 UI + 状态与异常规则 + 组件规范 + 上线验收清单，将复杂功能拆为可落地的任务包",
      },
      {
        problem: "三语适配不只是翻译问题，不同语言的文字长度和阅读习惯差异很大",
        judgment: "需要在设计阶段就考虑多语言的弹性空间，而不是设计完中文再「硬翻」",
        solution: "在信息架构层面预留弹性：关键模块采用响应式卡片布局，文案区域设计了可伸缩的容器规则，确保三语切换后布局不崩溃",
      },
    ],
    decisionsEn: [
      {
        problem: "Too many features with no clear hierarchy — users couldn't understand the product's value",
        judgment: "Instead of listing all features, layer selling points from user scenarios — first help users understand 'what is this', then guide 'why choose it'",
        solution: "Designed a card-based layered structure: hero value proposition → core scenario cards → tech spec comparison → trust elements (FAQ/reviews), forming a complete persuasion path",
      },
      {
        problem: "No design-dev collaboration standards, frequent rework in development",
        judgment: "The issue wasn't design quality but lack of 'executable delivery standards' — dev needs state rules, edge cases, not just visual mockups",
        solution: "Built a complete delivery system: PRD notes + prototypes + hi-fi UI + state/exception rules + component specs + launch checklist, breaking complex features into actionable task packages",
      },
      {
        problem: "Tri-lingual adaptation is more than translation — text length and reading habits vary greatly",
        judgment: "Must account for multilingual flexibility at design stage, not 'force-translate' after Chinese design",
        solution: "Built flexibility into IA: key modules use responsive card layouts, text areas have scalable container rules ensuring layout integrity across all three languages",
      },
    ],
    deliverables: [
      { caption: "官网首页 — 卡片化卖点分层结构" },
      { caption: "产品详情页 — 功能场景化表达" },
      { caption: "定价页 — 订阅套餐对比与转化引导" },
      { caption: "交付规范 — 组件与状态规则文档" },
    ],
    deliverablesEn: [
      { caption: "Homepage — card-based layered selling points" },
      { caption: "Product detail — scenario-based feature expression" },
      { caption: "Pricing page — subscription comparison & conversion" },
      { caption: "Delivery specs — component & state rule documentation" },
    ],
    results: [
      "官网信息架构从零搭建完成，支持中英俄三语",
      "研发返工率显著降低，按期完成上线",
      "商业化转化路径清晰，用户可在 3 步内完成从了解到购买的决策",
    ],
    resultsEn: [
      "Website IA built from scratch, supporting CN/EN/RU",
      "Dev rework rate significantly reduced, launched on schedule",
      "Clear commercial conversion path — users can go from understanding to purchase in 3 steps",
    ],
    reflection: "如果重来，会在项目初期就建立设计 Token 系统，而不是在后期补全组件规范，这样能进一步减少多语言适配的工作量。",
    reflectionEn: "If I could redo it, I'd establish a design token system from the start instead of backfilling component specs later — this would further reduce multilingual adaptation effort.",
  },
  {
    id: "2",
    slug: "pokubuy",
    title: "PokuBuy / Pakupay 跨境电商平台",
    titleEn: "PokuBuy / Pakupay Cross-border E-commerce",
    coverImage: pokubyCover,
    summary: "重构一个体验混乱的跨境电商 Mini App，让用户能顺畅完成从浏览到下单的全流程",
    summaryEn: "Restructured a chaotic cross-border e-commerce Mini App so users could smoothly complete the full browse-to-order journey",
    role: "产品设计负责人 / 体验重构 / UI 新人导师",
    roleEn: "Product Design Lead / UX Restructure / UI Mentor",
    duration: "2025",
    durationEn: "2025",
    status: "验证中",
    statusEn: "In validation",
    tags: ["跨境电商", "多语言", "B2C"],
    techStack: ["Figma", "中英俄三语", "服务流程设计"],
    links: { demo: "https://pokubuy.com/" },
    background: "PokuBuy 是一个面向俄语区用户的跨境代购平台，已有一版 Mini App 但体验问题严重。介入时面临：用户路径割裂、信息层级混乱、关键购买动作不明确，导致转化率低；同时团队有一位 UI 新人需要带教。",
    backgroundEn: "PokuBuy is a cross-border purchasing platform for Russian-speaking users with an existing Mini App that had severe UX issues. Challenges: fragmented user paths, confusing information hierarchy, unclear purchase actions leading to low conversion; plus a junior UI designer needing mentorship.",
    decisions: [
      {
        problem: "原有 Mini App 路径割裂严重，用户经常在浏览和下单之间迷路",
        judgment: "问题的根源不是单个页面的设计，而是整体信息架构缺失——需要从全局重新梳理用户动线",
        solution: "重建了完整的信息架构：定义了 5 条核心用户路径（搜索/浏览/下单/支付/售后），每条路径确保关键动作在 2 次点击内可达",
      },
      {
        problem: "跨语言场景下，很多交互模式在俄语环境中不符合用户预期",
        judgment: "不能只做翻译，需要理解目标用户的使用习惯和心智模型——俄语区用户对信息密度的容忍度和操作习惯与中文用户不同",
        solution: "针对关键页面做了跨文化适配：调整了信息密度、按钮位置和操作反馈方式，确保在不同语言环境下都能自然使用",
      },
      {
        problem: "UI 新人产出质量不稳定，影响整体交付节奏",
        judgment: "与其逐稿修改，不如建立可复用的标准——让新人有清晰的参照系",
        solution: "建立了任务拆解标准和 Review 机制：每个页面先对齐信息优先级，再进入视觉设计；关键页面我把控交互逻辑，新人负责视觉执行",
      },
    ],
    decisionsEn: [
      {
        problem: "Original Mini App had severely fragmented paths — users got lost between browsing and ordering",
        judgment: "Root cause wasn't individual page design but missing overall IA — needed to restructure user flows globally",
        solution: "Rebuilt complete IA: defined 5 core user paths (search/browse/order/payment/support), ensuring key actions reachable within 2 taps",
      },
      {
        problem: "Many interaction patterns didn't match user expectations in Russian-language context",
        judgment: "Can't just translate — need to understand target users' habits and mental models. Russian users have different tolerance for information density",
        solution: "Made cross-cultural adaptations for key pages: adjusted information density, button placement and feedback patterns to feel natural across languages",
      },
      {
        problem: "Junior UI designer's output quality was inconsistent, affecting delivery pace",
        judgment: "Rather than fixing each deliverable, establish reusable standards — give the junior a clear reference framework",
        solution: "Built task breakdown standards and review process: align information priority before visual design; I controlled interaction logic while junior handled visual execution",
      },
    ],
    deliverables: [
      { caption: "重构后的信息架构与用户路径图" },
      { caption: "核心购买流程页面设计" },
      { caption: "跨语言适配方案对比" },
    ],
    deliverablesEn: [
      { caption: "Restructured IA and user flow map" },
      { caption: "Core purchase flow page designs" },
      { caption: "Cross-language adaptation comparison" },
    ],
    results: [
      "用户核心路径从 7 步缩短至 4 步",
      "关键页面的跨语言一致性达到统一标准",
      "UI 新人在 2 周内达到独立交付质量",
    ],
    resultsEn: [
      "Core user path shortened from 7 steps to 4",
      "Cross-language consistency achieved across key pages",
      "Junior UI designer reached independent delivery quality within 2 weeks",
    ],
    reflection: "如果重来，会在重构前先做一轮用户访谈（哪怕是非正式的），用真实反馈验证问题假设，而不是完全基于走查和经验判断。",
    reflectionEn: "If I could redo it, I'd conduct user interviews (even informal ones) before restructuring to validate problem assumptions with real feedback, rather than relying solely on heuristic evaluation and experience.",
  },
  {
    id: "3",
    slug: "wheelsline",
    title: "WheelsLine 轮毂定制报价网站",
    titleEn: "WheelsLine Custom Wheel Quotation",
    coverImage: wheelslineCover,
    summary: "为一个 B2B 轮毂定制业务建立从询盘到报价的完整线上链路，让客户能自主完成产品选型与询价",
    summaryEn: "Built a complete online inquiry-to-quotation journey for a B2B custom wheel business, enabling clients to self-serve product selection and pricing",
    role: "产品经理 / UX / UI / 项目推进",
    roleEn: "Product Manager / UX / UI / Project Lead",
    duration: "2025",
    durationEn: "2025",
    status: "网站已上线，Mini App 前期暂缓",
    statusEn: "Website launched, Mini App paused",
    tags: ["B2B", "报价系统", "多语言"],
    techStack: ["Figma", "中英俄三语", "报价信息结构", "用户决策路径"],
    links: { demo: "https://wheelsline.com/" },
    background: "WheelsLine 是一家面向海外市场的轮毂定制厂商，原有业务完全依赖线下沟通，效率低且信息不透明。介入时面临：产品 SKU 复杂（规格/材质/适配车型），客户难以自主选型；询盘到报价链路冗长，销售沟通成本高。",
    backgroundEn: "WheelsLine is a custom wheel manufacturer targeting overseas markets, previously relying entirely on offline communication — inefficient and opaque. Challenges: complex product SKUs (specs/materials/vehicle fitment) made self-service selection difficult; long inquiry-to-quotation path with high sales communication costs.",
    decisions: [
      {
        problem: "产品 SKU 维度多（尺寸/孔距/材质/表面处理），客户无法快速找到匹配的产品",
        judgment: "B2B 用户的核心需求是「效率」——不是浏览更多产品，而是用最少的步骤找到能用的那个",
        solution: "设计了渐进式筛选体系：先选车型 → 自动匹配适配规格 → 再选材质和表面处理，将选型步骤从「自由浏览」变为「引导式决策」",
      },
      {
        problem: "原有询盘流程需要客户描述需求后等待人工报价，响应慢且信息反复确认",
        judgment: "核心瓶颈在于信息不对称——如果能在前端展示足够的产品信息和参考价格，可以大幅减少无效沟通",
        solution: "建立了产品信息表达体系：每个 SKU 展示完整的规格参数 + 参考价格区间 + 交付周期，让客户在询盘前就完成 80% 的信息获取",
      },
      {
        problem: "从 Mini App 到网站的技术切换，需要在有限时间内完成可落地的设计交付",
        judgment: "优先保证核心流程可用，非核心功能做减法——MVP 思维，先上线验证再迭代",
        solution: "输出了组件化的交付规范：响应式规则 + 交互说明 + 验收标准，确保研发能快速实现，同时预留后续迭代的扩展空间",
      },
    ],
    decisionsEn: [
      {
        problem: "Complex product SKU dimensions (size/bolt pattern/material/finish) made it hard for clients to find matching products",
        judgment: "B2B users' core need is 'efficiency' — not browsing more products, but finding the right one in fewest steps",
        solution: "Designed progressive filtering: select vehicle → auto-match compatible specs → choose material and finish, transforming selection from 'free browsing' to 'guided decision-making'",
      },
      {
        problem: "Original inquiry process required customers to describe needs and wait for manual quotes — slow with repeated information confirmation",
        judgment: "Core bottleneck was information asymmetry — showing enough product info and reference pricing upfront could drastically reduce ineffective communication",
        solution: "Built product information system: each SKU shows complete specs + reference price range + delivery timeline, letting clients acquire 80% of info before making an inquiry",
      },
      {
        problem: "Tech switch from Mini App to website required deliverable design within limited time",
        judgment: "Prioritize core flow usability, subtract non-essential features — MVP thinking, launch to validate then iterate",
        solution: "Delivered component-based specs: responsive rules + interaction docs + acceptance criteria, enabling quick dev implementation while preserving room for future iteration",
      },
    ],
    deliverables: [
      { caption: "渐进式产品筛选与选型流程" },
      { caption: "产品详情页 — SKU 信息表达体系" },
      { caption: "询盘与报价转化页面" },
      { caption: "响应式交付规范文档" },
    ],
    deliverablesEn: [
      { caption: "Progressive product filtering and selection flow" },
      { caption: "Product detail — SKU information system" },
      { caption: "Inquiry and quotation conversion pages" },
      { caption: "Responsive delivery spec documentation" },
    ],
    results: [
      "客户自主选型完成率从 0 提升到可独立完成询盘",
      "销售沟通效率显著提升，单次询盘所需确认轮次减少约 60%",
      "网站按 MVP 范围按期上线，核心转化链路跑通",
    ],
    resultsEn: [
      "Client self-service selection rate went from 0 to independent inquiry completion",
      "Sales communication efficiency significantly improved — ~60% fewer confirmation rounds per inquiry",
      "Website launched on schedule within MVP scope with core conversion path validated",
    ],
    reflection: "如果重来，会在设计初期就拉上销售团队做联合需求梳理，而不是先做完设计再让销售验证——他们对客户真实痛点的理解比走查更直接。",
    reflectionEn: "If I could redo it, I'd involve the sales team in joint requirement sessions from the start, rather than designing first and having sales validate — their understanding of real client pain points is more direct than heuristic review.",
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
