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
    slug: "ai-design-system",
    title: "AI 驱动设计系统",
    titleEn: "AI-Powered Design System",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    summary: "为大型企业构建的智能设计系统，包含 200+ 组件，支持 AI 自动生成界面",
    summaryEn: "An intelligent design system for enterprises with 200+ components and AI-powered interface generation",
    role: "全栈开发 & 产品设计",
    roleEn: "Full-Stack Developer & Product Designer",
    duration: "2024.01 - 2024.06",
    durationEn: "Jan 2024 - Jun 2024",
    tags: ["设计系统", "AI", "React"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "OpenAI", "Figma API"],
    metrics: ["组件库使用率提升 340%", "设计到开发效率提升 60%", "覆盖 5 个产品线"],
    metricsEn: ["340% increase in component usage", "60% improvement in design-to-dev efficiency", "Covers 5 product lines"],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example/design-system",
    },
    sections: [
      {
        title: "背景与目标",
        content: "公司多个产品线使用不同的设计语言，导致用户体验不一致且开发成本高昂。目标是建立统一的设计系统，并借助 AI 能力加速设计与开发流程。",
        images: [],
      },
      {
        title: "我的职责",
        content: "- 主导设计系统架构设计与技术选型\n- 开发核心组件库与文档站\n- 集成 AI 功能，实现自然语言生成组件\n- 与设计团队协作建立设计规范",
        images: [],
      },
      {
        title: "设计与实现",
        content: "采用原子设计方法论，从基础 Token 到复杂业务组件逐层构建。结合 GPT-4 实现智能组件推荐与代码生成，大幅提升开发者体验。",
        images: [
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
        ],
      },
    ],
    sectionsEn: [
      {
        title: "Background & Goals",
        content: "Multiple product lines used different design languages, causing inconsistent UX and high development costs. The goal was to establish a unified design system enhanced by AI capabilities.",
        images: [],
      },
      {
        title: "My Responsibilities",
        content: "- Led design system architecture and tech selection\n- Developed core component library and documentation\n- Integrated AI for natural language component generation\n- Collaborated with design team on specifications",
        images: [],
      },
      {
        title: "Design & Implementation",
        content: "Applied atomic design methodology, building from tokens to complex components. Integrated GPT-4 for intelligent component suggestions and code generation.",
        images: [
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "fintech-dashboard",
    title: "金融数据分析平台",
    titleEn: "FinTech Analytics Platform",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    summary: "面向投资机构的实时数据分析平台，支持多维度数据可视化与智能预警",
    summaryEn: "Real-time analytics platform for investment firms with multi-dimensional visualization",
    role: "前端负责人",
    roleEn: "Frontend Lead",
    duration: "2023.06 - 2023.12",
    durationEn: "Jun 2023 - Dec 2023",
    tags: ["数据可视化", "金融", "Dashboard"],
    techStack: ["Next.js", "D3.js", "WebSocket", "PostgreSQL", "Redis"],
    metrics: ["日活用户 2000+", "数据延迟 < 100ms", "客户满意度 4.8/5"],
    metricsEn: ["2000+ daily active users", "Data latency < 100ms", "Customer satisfaction 4.8/5"],
    links: {
      demo: "https://demo.example.com/fintech",
    },
    sections: [
      {
        title: "背景与目标",
        content: "投资机构需要实时监控多个市场的数据变化，现有工具无法满足定制化需求。目标是打造一个高性能、可定制的数据分析平台。",
        images: [],
      },
      {
        title: "我的职责",
        content: "- 负责前端团队管理与技术决策\n- 设计并实现复杂图表组件\n- 优化 WebSocket 连接与数据缓存策略\n- 建立前端性能监控体系",
        images: [],
      },
      {
        title: "技术亮点",
        content: "使用 WebSocket 实现毫秒级数据推送，结合 Web Worker 处理大量数据计算，确保 UI 流畅。自研图表组件支持百万级数据点渲染。",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        ],
      },
    ],
    sectionsEn: [
      {
        title: "Background & Goals",
        content: "Investment firms needed real-time monitoring across multiple markets. Existing tools couldn't meet customization needs. Goal was to build a high-performance, customizable platform.",
        images: [],
      },
      {
        title: "My Responsibilities",
        content: "- Led frontend team and technical decisions\n- Designed and implemented complex chart components\n- Optimized WebSocket connections and caching\n- Established frontend performance monitoring",
        images: [],
      },
      {
        title: "Technical Highlights",
        content: "Used WebSocket for millisecond-level data push, combined with Web Workers for heavy computations. Custom chart components support million-level data points.",
        images: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        ],
      },
    ],
  },
  {
    id: "3",
    slug: "health-app",
    title: "智能健康管理 App",
    titleEn: "Smart Health Management App",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    summary: "结合 AI 的个人健康管理应用，提供运动规划、饮食建议与睡眠分析",
    summaryEn: "AI-powered personal health app with exercise planning, diet suggestions, and sleep analysis",
    role: "产品设计 & 前端开发",
    roleEn: "Product Designer & Frontend Developer",
    duration: "2023.01 - 2023.05",
    durationEn: "Jan 2023 - May 2023",
    tags: ["App", "健康", "AI"],
    techStack: ["React Native", "TensorFlow Lite", "Node.js", "MongoDB"],
    metrics: ["下载量 50万+", "用户留存率 45%", "App Store 4.7分"],
    metricsEn: ["500K+ downloads", "45% user retention", "App Store 4.7 rating"],
    links: {
      demo: "https://demo.example.com/health",
      github: "https://github.com/example/health-app",
    },
    sections: [
      {
        title: "背景与目标",
        content: "市场上健康应用大多功能单一，用户需要在多个应用间切换。目标是打造一站式健康管理平台，通过 AI 提供个性化建议。",
        images: [],
      },
      {
        title: "我的职责",
        content: "- 完成产品需求分析与用户调研\n- 设计完整的用户体验流程\n- 开发 React Native 跨平台应用\n- 集成 AI 模型实现智能推荐",
        images: [],
      },
      {
        title: "用户体验设计",
        content: "以用户目标为导向设计信息架构，通过 A/B 测试优化关键流程。建立完善的设计系统确保体验一致性。",
        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=500&fit=crop",
        ],
      },
    ],
    sectionsEn: [
      {
        title: "Background & Goals",
        content: "Most health apps on the market have single functions. Users need to switch between multiple apps. Goal was to create a one-stop health platform with AI-powered personalization.",
        images: [],
      },
      {
        title: "My Responsibilities",
        content: "- Completed product requirements and user research\n- Designed complete UX flow\n- Developed cross-platform React Native app\n- Integrated AI models for smart recommendations",
        images: [],
      },
      {
        title: "UX Design",
        content: "Designed information architecture based on user goals. Optimized key flows through A/B testing. Established design system for consistent experience.",
        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=500&fit=crop",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "ecommerce-platform",
    title: "电商 SaaS 平台",
    titleEn: "E-commerce SaaS Platform",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    summary: "为中小商家提供的一站式电商解决方案，涵盖店铺搭建、订单管理与数据分析",
    summaryEn: "One-stop e-commerce solution for SMBs covering store building, order management, and analytics",
    role: "全栈开发",
    roleEn: "Full-Stack Developer",
    duration: "2022.06 - 2023.01",
    durationEn: "Jun 2022 - Jan 2023",
    tags: ["SaaS", "电商", "Web"],
    techStack: ["Vue 3", "Node.js", "MySQL", "Redis", "Docker"],
    metrics: ["服务商家 1000+", "GMV 超过 5000万", "系统可用性 99.9%"],
    metricsEn: ["1000+ merchants served", "GMV over 50M RMB", "99.9% system availability"],
    links: {
      demo: "https://demo.example.com/ecommerce",
    },
    sections: [
      {
        title: "背景与目标",
        content: "中小商家缺乏技术能力自建电商系统，现有 SaaS 平台费用高昂且定制能力不足。目标是提供性价比高、易于使用的电商解决方案。",
        images: [],
      },
      {
        title: "我的职责",
        content: "- 参与系统架构设计与数据库建模\n- 开发商家后台管理系统\n- 实现订单处理与库存管理模块\n- 搭建自动化部署与监控体系",
        images: [],
      },
      {
        title: "系统架构",
        content: "采用微服务架构，核心服务独立部署。使用 Redis 缓存热点数据，MySQL 分库分表应对高并发。Docker + K8s 实现弹性扩容。",
        images: [
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
        ],
      },
    ],
    sectionsEn: [
      {
        title: "Background & Goals",
        content: "SMBs lack technical capabilities for e-commerce systems. Existing SaaS platforms are expensive with limited customization. Goal was to provide cost-effective, easy-to-use solutions.",
        images: [],
      },
      {
        title: "My Responsibilities",
        content: "- Participated in system architecture and database design\n- Developed merchant admin system\n- Implemented order processing and inventory modules\n- Built automated deployment and monitoring",
        images: [],
      },
      {
        title: "System Architecture",
        content: "Adopted microservices architecture. Used Redis for caching, MySQL sharding for high concurrency. Docker + K8s for elastic scaling.",
        images: [
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
        ],
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
