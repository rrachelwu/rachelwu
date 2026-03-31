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
