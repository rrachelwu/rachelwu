import ssrouterCover from '@/assets/ssrouter-cover.png';
import pokubyCover from '@/assets/pokubuy-cover.png';
import wheelslineCover from '@/assets/wheelsline-cover.png';

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
    coverImage: ssrouterCover,
    summary: "从 0 规划产品结构，搭建信息架构与页面流，输出全套交付物并与研发对齐实现方案",
    summaryEn: "Built product structure from 0, designed IA and page flows, delivered complete documentation and aligned with dev",
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
        title: "产品规划",
        content: "从 0 规划产品结构：定义核心用户路径（购买/订阅/管理/售后等），搭建信息架构与页面流",
        images: [],
      },
      {
        title: "交付输出",
        content: "- PRD 协同要点、交互原型、高保真 UI\n- 状态与异常规则、组件与视觉规范\n- 上线验收清单",
        images: [],
      },
      {
        title: "研发协同",
        content: "与研发对齐实现方案：将复杂功能拆为可落地任务包，减少返工，保障按期上线",
        images: [],
      },
      {
        title: "增长与内容",
        content: "官网卖点分层、卡片化结构、信任要素与FAQ体系，提升可理解性与转化效率",
        images: [],
      },
    ],
    sectionsEn: [
      {
        title: "Product Planning",
        content: "Built product structure from 0: defined core user paths (purchase/subscription/management/support), established IA and page flows",
        images: [],
      },
      {
        title: "Deliverables",
        content: "- PRD collaboration points, interactive prototypes, high-fidelity UI\n- State and exception rules, component and visual specs\n- Launch acceptance checklist",
        images: [],
      },
      {
        title: "Dev Collaboration",
        content: "Aligned implementation with dev: broke complex features into actionable task packages, reduced rework, ensured on-time launch",
        images: [],
      },
      {
        title: "Growth & Content",
        content: "Layered website selling points, card-based structure, trust elements and FAQ system to improve comprehension and conversion",
        images: [],
      },
    ],
  },
  {
    id: "2",
    slug: "pokubuy",
    title: "PokuBuy / Pakupay 跨境电商平台",
    titleEn: "PokuBuy / Pakupay Cross-border E-commerce",
    coverImage: pokubyCover,
    summary: "主导 Mini App 重构，梳理原有问题并重建信息架构与核心流程，指导 UI 新人提升交付质量",
    summaryEn: "Led Mini App restructure, rebuilt IA and core flows, mentored UI junior to improve delivery quality",
    role: "产品设计负责人 / 体验重构 / 指导 UI 新人",
    roleEn: "Product Design Lead / UX Restructure / UI Mentorship",
    duration: "2025",
    durationEn: "2025",
    tags: ["跨境电商", "多语言", "B2C"],
    techStack: ["Figma", "中英俄三语", "服务流程设计"],
    status: "验证中",
    statusEn: "In validation",
    links: { demo: "https://pokubuy.com/" },
    sections: [
      {
        title: "Mini App 重构",
        content: "主导 Mini App 重构：梳理原有问题（路径割裂/信息层级混乱/关键动作不明确），重建信息架构与核心流程",
        images: [],
      },
      {
        title: "体验设计",
        content: "负责关键页面与组件的体验方案，保证跨语言与跨文化场景下的可理解性与一致性",
        images: [],
      },
      {
        title: "团队指导",
        content: "- 指导 UI 新人：拆解任务与标准\n- 重点页面把控、review 关键交互与状态\n- 提升交付质量与效率",
        images: [],
      },
    ],
    sectionsEn: [
      {
        title: "Mini App Restructure",
        content: "Led Mini App restructure: identified existing issues (fragmented paths/confusing hierarchy/unclear key actions), rebuilt IA and core flows",
        images: [],
      },
      {
        title: "Experience Design",
        content: "Responsible for key page and component experience solutions, ensuring comprehension and consistency across languages and cultures",
        images: [],
      },
      {
        title: "Team Mentorship",
        content: "- Mentored UI junior: broke down tasks and standards\n- Controlled key pages, reviewed critical interactions and states\n- Improved delivery quality and efficiency",
        images: [],
      },
    ],
  },
  {
    id: "3",
    slug: "wheelsline",
    title: "WheelsLine 轮毂定制报价网站",
    titleEn: "WheelsLine Custom Wheel Quotation",
    coverImage: wheelslineCover,
    summary: "从 Mini App 到网站完整 0→1，定义业务流程并输出完整用户链路与可落地交付规范",
    summaryEn: "Complete 0→1 from Mini App to website, defined business flows and delivered full user journey with actionable specs",
    role: "产品经理 / UX / UI / 项目推进",
    roleEn: "Product Manager / UX / UI / Project Lead",
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
        title: "产品规划",
        content: "从前期 Mini App 到后期网站完整 0→1：定义业务流程（选型/定制/询价/下单/售后等），输出完整用户链路",
        images: [],
      },
      {
        title: "信息表达",
        content: "建立产品信息表达与筛选体系：帮助用户更快完成对比与决策（规格/适配/材质/价格/交付等）",
        images: [],
      },
      {
        title: "交付规范",
        content: "- 输出可落地交付规范\n- 组件化设计、响应式规则、交互说明、验收标准\n- 降低开发沟通成本",
        images: [],
      },
    ],
    sectionsEn: [
      {
        title: "Product Planning",
        content: "Complete 0→1 from early Mini App to later website: defined business flows (selection/customization/quotation/ordering/support), delivered full user journey",
        images: [],
      },
      {
        title: "Information Expression",
        content: "Established product information expression and filtering system: helped users complete comparison and decision-making faster (specs/fitment/material/price/delivery)",
        images: [],
      },
      {
        title: "Delivery Specs",
        content: "- Delivered actionable specs\n- Component-based design, responsive rules, interaction docs, acceptance criteria\n- Reduced dev communication costs",
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
