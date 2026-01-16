export interface Post {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  excerpt: string;
  excerptEn: string;
  tags: string[];
  coverImage: string;
  content: string;
  contentEn: string;
}

export const posts: Post[] = [
  {
    slug: "design-system-best-practices",
    title: "构建企业级设计系统的 10 个最佳实践",
    titleEn: "10 Best Practices for Building Enterprise Design Systems",
    date: "2024-01-15",
    excerpt: "分享在大型企业中构建设计系统的经验，涵盖组织架构、技术选型、团队协作等关键话题。",
    excerptEn: "Sharing experiences building design systems in large enterprises, covering organization, tech selection, and team collaboration.",
    tags: ["设计系统", "前端开发", "团队协作"],
    coverImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
    content: `# 构建企业级设计系统的 10 个最佳实践

## 前言

设计系统不仅是组件库，更是一套完整的设计语言与协作机制。在过去两年中，我主导了多个企业级设计系统的构建，积累了一些实践经验。

## 1. 从 Token 开始，而非组件

很多团队直接从组件开始，这是一个常见的错误。设计 Token（颜色、字体、间距等）是整个系统的基础。

\`\`\`typescript
// design-tokens.ts
export const tokens = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
  },
};
\`\`\`

## 2. 文档即产品

好的文档能让设计系统被真正使用。我们使用 Storybook 构建交互式文档，每个组件都有使用示例、API 说明和设计指南。

## 3. 建立清晰的贡献流程

设计系统是活的产品，需要持续迭代。建立 RFC（Request for Comments）流程，让团队成员都能参与改进。

## 4. 关注可访问性

从一开始就考虑可访问性，而不是事后修补。使用语义化 HTML，确保键盘可导航，颜色对比度达标。

## 5. 版本管理与向后兼容

使用语义化版本控制，主版本升级时提供迁移指南。考虑使用 code-mod 帮助团队自动迁移。

## 总结

构建设计系统是一个持续的过程，需要技术能力、设计思维和组织协调能力的结合。希望这些经验对你有所帮助。`,
    contentEn: `# 10 Best Practices for Building Enterprise Design Systems

## Introduction

A design system is more than a component library—it's a complete design language and collaboration framework. Over the past two years, I've led multiple enterprise design system initiatives.

## 1. Start with Tokens, Not Components

Many teams start directly with components, which is a common mistake. Design tokens (colors, fonts, spacing) are the foundation of the entire system.

\`\`\`typescript
// design-tokens.ts
export const tokens = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
  },
};
\`\`\`

## 2. Documentation as Product

Good documentation makes design systems actually get used. We use Storybook for interactive docs with usage examples, API docs, and design guidelines.

## 3. Establish Clear Contribution Process

Design systems are living products requiring continuous iteration. Establish an RFC process so team members can participate in improvements.

## 4. Focus on Accessibility

Consider accessibility from the start, not as an afterthought. Use semantic HTML, ensure keyboard navigation, and meet color contrast standards.

## 5. Version Management & Backward Compatibility

Use semantic versioning and provide migration guides for major updates. Consider using code-mods for automatic migration.

## Conclusion

Building a design system is a continuous process requiring technical skills, design thinking, and organizational coordination.`,
  },
  {
    slug: "frontend-performance-optimization",
    title: "前端性能优化：从理论到实践",
    titleEn: "Frontend Performance Optimization: From Theory to Practice",
    date: "2023-11-20",
    excerpt: "深入探讨前端性能优化的核心指标、优化策略与实战案例，帮助你打造更快的 Web 应用。",
    excerptEn: "Deep dive into frontend performance metrics, optimization strategies, and real-world cases for faster web applications.",
    tags: ["性能优化", "前端开发", "Web"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    content: `# 前端性能优化：从理论到实践

## 为什么性能很重要

研究表明，页面加载时间每增加 1 秒，转化率下降 7%。性能不仅影响用户体验，还直接影响业务指标。

## 核心指标 (Core Web Vitals)

### LCP (Largest Contentful Paint)
最大内容绘制，衡量主要内容加载速度。目标：< 2.5s

### FID (First Input Delay)  
首次输入延迟，衡量交互响应速度。目标：< 100ms

### CLS (Cumulative Layout Shift)
累积布局偏移，衡量视觉稳定性。目标：< 0.1

## 优化策略

### 1. 资源优化

\`\`\`typescript
// 使用动态导入实现代码分割
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// 图片懒加载
<img loading="lazy" src="image.jpg" alt="description" />
\`\`\`

### 2. 渲染优化

- 使用 React.memo 避免不必要的重渲染
- 使用 useMemo 和 useCallback 缓存计算结果
- 虚拟列表处理长列表

### 3. 网络优化

- 使用 CDN 分发静态资源
- 开启 HTTP/2 和 Brotli 压缩
- 预加载关键资源

## 实战案例

在一个电商项目中，通过以上优化，LCP 从 4.2s 降到 1.8s，转化率提升了 15%。

## 总结

性能优化是一个持续的过程，需要建立监控体系，持续关注指标变化。`,
    contentEn: `# Frontend Performance Optimization: From Theory to Practice

## Why Performance Matters

Studies show that every 1-second increase in page load time reduces conversion by 7%. Performance affects both user experience and business metrics.

## Core Web Vitals

### LCP (Largest Contentful Paint)
Measures main content loading speed. Target: < 2.5s

### FID (First Input Delay)
Measures interaction responsiveness. Target: < 100ms

### CLS (Cumulative Layout Shift)
Measures visual stability. Target: < 0.1

## Optimization Strategies

### 1. Resource Optimization

\`\`\`typescript
// Code splitting with dynamic imports
const HeavyComponent = lazy(() => import('./HeavyComponent'));

// Lazy loading images
<img loading="lazy" src="image.jpg" alt="description" />
\`\`\`

### 2. Rendering Optimization

- Use React.memo to avoid unnecessary re-renders
- Use useMemo and useCallback for computation caching
- Virtual lists for long lists

### 3. Network Optimization

- Use CDN for static assets
- Enable HTTP/2 and Brotli compression
- Preload critical resources

## Real Case

In an e-commerce project, these optimizations reduced LCP from 4.2s to 1.8s, improving conversion by 15%.

## Conclusion

Performance optimization is a continuous process requiring monitoring systems and constant attention to metrics.`,
  },
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find((p) => p.slug === slug);
};

export const getAllPostTags = (): string[] => {
  const tags = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
};
