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
