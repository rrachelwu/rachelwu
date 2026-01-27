export interface ProjectSection {
  title: string;
  content: string;
  images?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  coverImage: string;
  summary: string;
  summaryEn: string;
  role: string;
  roleEn: string;
  duration: string;
  durationEn: string;
  tags: string[];
  techStack: string[];
  metrics?: string[];
  metricsEn?: string[];
  status?: string;
  statusEn?: string;
  links: {
    demo?: string;
    github?: string;
  };
  sections: ProjectSection[];
  sectionsEn: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ssrouter",
    title: "SSRouter 智能家庭路由器",
    titleEn: "SSRouter Smart Home Router",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    summary: "内置 VPN/代理 + Telegram 远程控制的家庭路由器产品，从0-1完成官网、控制台、定价体系的全链路设计",
    summaryEn: "Home router with built-in VPN/proxy + Telegram remote control, completed full-chain design from 0-1",
    role: "产品负责人 / 设计负责人",
    roleEn: "Product Lead / Design Lead",
    duration: "2025.01 - 至今",
    durationEn: "Jan 2025 - Present",
    tags: ["产品设计", "官网", "商业化"],
    techStack: ["Figma", "中英俄多语言", "定价系统", "FAQ体系"],
    metrics: ["完成官网信息架构", "中英俄三语适配", "商业化转化路径设计"],
    metricsEn: ["Website IA completed", "CN/EN/RU localization", "Commercial conversion design"],
    status: "已上线/验证与推广前期",
    statusEn: "Launched / Early validation",
    links: { demo: "https://ssrouter.com/" },
    sections: [
      {
        title: "项目背景",
        content: "搭建官网信息架构与卖点表达（家庭安全、即插即用、远程控制、试用/订阅规则），让复杂技术能力面向普通用户可理解。",
        images: [],
      },
      {
        title: "我的职责",
        content: "- 设计定价与套餐结构（周期 + 多档流量）\n- 输出定价页、对比与折扣呈现，明确购买路径与决策信息\n- 负责后台控制台关键交互、FAQ/说明书内容体系\n- 建立中英俄三语统一口径与排版规则\n- 协同研发落地上线并验收",
        images: [],
      },
      {
        title: "成果产出",
        content: "输出演示脚本与物料支持销售现场展示与商务沟通，完成从概念到可售卖页面的全链路建设。",
        images: [],
      },
    ],
    sectionsEn: [
      {
        title: "Background",
        content: "Built website IA and selling points (home security, plug-and-play, remote control, trial/subscription rules) to make complex tech accessible to regular users.",
        images: [],
      },
      {
        title: "My Responsibilities",
        content: "- Designed pricing and package structure (period + multi-tier traffic)\n- Created pricing page, comparison and discount presentation\n- Handled backend console key interactions, FAQ/manual system\n- Established CN/EN/RU unified terminology and layout rules\n- Collaborated with dev for launch and acceptance",
        images: [],
      },
      {
        title: "Deliverables",
        content: "Created demo scripts and materials for sales presentations and business communication, completing full-chain from concept to sellable pages.",
        images: [],
      },
    ],
  },
  {
    id: "2",
    slug: "pokubuy",
    title: "PokuBuy / Pakupay 跨境电商平台",
    titleEn: "PokuBuy / Pakupay Cross-border E-commerce",
    coverImage: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=800&h=600&fit=crop",
    summary: "面向俄罗斯的跨境电商/服务平台，构建仓配流程产品化呈现与多语言内容体系",
    summaryEn: "Cross-border e-commerce platform for Russia, building warehouse process productization and multilingual system",
    role: "产品设计 / 多语言体系",
    roleEn: "Product Design / Multilingual System",
    duration: "2025",
    durationEn: "2025",
    tags: ["跨境电商", "多语言", "B2C"],
    techStack: ["Figma", "中英俄三语", "服务流程设计"],
    status: "验证中",
    statusEn: "In validation",
    links: {},
    sections: [
      {
        title: "项目背景",
        content: "构建面向俄语用户的服务流程表达（接收/入库/核对/质检/发货等），将仓配流程产品化呈现。",
        images: [],
      },
      {
        title: "我的职责",
        content: "- 输出中英俄三语内容体系与页面结构规范\n- 保障专业度与可信度\n- 完成关键页面与物料落地",
        images: [],
      },
      {
        title: "成果产出",
        content: "支撑业务模式验证与对外沟通，建立完整的多语言内容规范。",
        images: [],
      },
    ],
    sectionsEn: [
      {
        title: "Background",
        content: "Built service flow expression for Russian users (receiving/warehousing/checking/QC/shipping), productizing warehouse processes.",
        images: [],
      },
      {
        title: "My Responsibilities",
        content: "- Created CN/EN/RU content system and page structure specs\n- Ensured professionalism and credibility\n- Completed key pages and materials",
        images: [],
      },
      {
        title: "Deliverables",
        content: "Supported business model validation and external communication, established complete multilingual content standards.",
        images: [],
      },
    ],
  },
  {
    id: "3",
    slug: "wheelsline",
    title: "WheelsLine 轮毂定制报价网站",
    titleEn: "WheelsLine Custom Wheel Quotation",
    coverImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    summary: "主导从 0–1 的轮毂定制与报价网站建设，设计可扩展的定制流程与 B2B 合作模型，显著提升客户沟通效率与商业转化率",
    summaryEn: "Led 0-1 custom wheel quotation website, designed scalable customization flow and B2B cooperation model, significantly improving communication efficiency and conversion",
    role: "产品经理 / UX视觉设计 / 项目推进",
    roleEn: "Product Manager / UX & Visual Design / Project Lead",
    duration: "2025",
    durationEn: "2025",
    tags: ["B2B", "报价系统", "多语言"],
    techStack: ["Figma", "中英俄三语", "报价信息结构", "用户决策路径"],
    metrics: ["客户沟通效率显著提升", "商业转化率优化", "询盘转化链路完善"],
    metricsEn: ["Communication efficiency improved", "Conversion rate optimized", "Inquiry conversion path refined"],
    status: "网站已上线，Mini App 前期暂缓",
    statusEn: "Website launched, Mini App paused",
    links: { demo: "https://wheelsline.com/" },
    sections: [
      {
        title: "项目背景",
        content: "主导从 0–1 的轮毂定制与报价网站建设，设计可扩展的定制流程与 B2B 合作模型。通过梳理用户决策路径与询盘转化链路，显著提升客户沟通效率与商业转化率。",
        images: [],
      },
      {
        title: "我的职责",
        content: "- 兼任产品经理、UX/视觉设计师及项目推进角色\n- 设计报价信息结构：基础价 + 附加工艺、起订量规则、汇率结算说明\n- 输出面向 B2B 的合作说明与优势表达（经销商/批发商/车队/OEM）\n- 梳理用户决策路径，优化询盘转化链路\n- 中英俄三语适配，确保信息清晰、专业且可落地",
        images: [],
      },
      {
        title: "成果产出",
        content: "完成从概念到上线的全链路建设，大幅减少销售与客户之间的反复沟通成本，显著提升商业转化率。",
        images: [],
      },
    ],
    sectionsEn: [
      {
        title: "Background",
        content: "Led 0-1 custom wheel quotation website development, designed scalable customization flow and B2B cooperation model. Significantly improved customer communication efficiency and commercial conversion through user decision path and inquiry conversion optimization.",
        images: [],
      },
      {
        title: "My Responsibilities",
        content: "- Served as Product Manager, UX/Visual Designer, and Project Lead\n- Designed quotation structure: base price + additional processes, MOQ rules, exchange rate settlement\n- Created B2B cooperation description (dealers/wholesalers/fleets/OEM)\n- Mapped user decision paths, optimized inquiry conversion flow\n- CN/EN/RU adaptation ensuring clear, professional, actionable info",
        images: [],
      },
      {
        title: "Deliverables",
        content: "Completed full-chain development from concept to launch, significantly reduced communication costs between sales and customers, improved commercial conversion rate.",
        images: [],
      },
    ],
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
