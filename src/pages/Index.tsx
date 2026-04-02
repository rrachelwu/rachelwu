import React from 'react';
import { ArrowRight, Code, Palette, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import rachelPhoto from '@/assets/rachel-photo.jpg';
import logo from '@/assets/logo.svg';

const Index: React.FC = () => {
  const { t, language } = useLanguage();
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const logosRef = useScrollAnimation();

  const features = [
    {
      icon: Palette,
      title: t('产品体验', 'Product Experience'),
      description: t(
        '用户路径梳理、信息架构、交互原型、可用性优化、A/B 设计支持',
        'User journey mapping, information architecture, prototyping, usability optimization, A/B design support'
      ),
    },
    {
      icon: Code,
      title: t('视觉与系统', 'Visual & System'),
      description: t(
        '设计语言/组件库、规范沉淀、跨端一致性、品牌与运营设计',
        'Design language/component library, standards documentation, cross-platform consistency, brand & operation design'
      ),
    },
    {
      icon: Zap,
      title: t('落地与协作', 'Delivery & Collaboration'),
      description: t(
        '与产品/研发/运营协作闭环、设计评审、需求澄清、灰度上线支持',
        'Cross-team collaboration, design review, requirement clarification, gradual release support'
      ),
    },
    {
      icon: Sparkles,
      title: t('多语言国际化', 'Internationalization'),
      description: t(
        '跨境/多语言产品体验（中英俄）、商业化定价表达、复杂规则梳理',
        'Cross-border/multilingual experience (CN/EN/RU), commercial pricing, complex rule structuring'
      ),
    },
  ];

  const stats = [
    { number: '10+', label: t('设计经验年数', 'Years of Experience') },
    { number: '20+', label: t('独立负责项目', 'Independent Projects') },
    { number: '3', label: t('语言能力', 'Languages') },
  ];

  const logos = [
    { name: '小米电子', nameEn: 'Xiaomi' },
    { name: '峰米科技', nameEn: 'Formovie' },
    { name: '矩阵元', nameEn: 'Matrix Element' },
    { name: '雷神网络', nameEn: 'Thunder' },
    { name: '紫荆花', nameEn: 'Bauhinia' },
    { name: '光速源', nameEn: 'Guangsuyuan' },
  ];

  return (
    <main>
      {/* Hero Section - Matching PDF Cover Style */}
      <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-gradient-mesh">
        {/* Framer-style floating decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large red glow */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[80px]" />
          
          {/* Decorative circles */}
          <svg className="absolute top-20 right-20 w-[300px] h-[300px] opacity-[0.03]" viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="1"/>
            <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="1"/>
            <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="1"/>
          </svg>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              ref={heroRef.ref}
              className={cn(
                'transition-all duration-700',
                heroRef.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              )}
            >
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                {t('吴倩', 'Rachel Wu')}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4">
                {t('产品设计师 / 产品经理（设计负责人）', 'Product Designer / Product Manager')}
              </p>
              
              <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
                {t(
                  '10 年互联网产品设计经验，覆盖 App / Web / 多端适配与运营增长支持。近一年以"产品Owner形态"主导多个 0→1 项目，擅长在资源有限与业务不确定阶段，用 MVP 思维做可行性验证与持续迭代。',
                  '10 years of product design experience covering App/Web/multi-platform and growth support. Recently led multiple 0→1 projects as Product Owner, skilled in MVP validation and iteration under resource constraints.'
                )}
              </p>

              {/* Stats - like in PDF */}
              <div className="flex gap-12 mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button to="/projects" size="lg">
                  {t('查看作品', 'View Projects')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  {t('联系我', 'Contact Me')}
                </Button>
              </div>
            </div>

            {/* Right Image - with red oval background like PDF */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 w-full max-w-md mx-auto">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-96 bg-primary rounded-[50%] -z-10" />
                <img
                  src={rachelPhoto}
                  alt="Rachel Wu"
                  className="w-full max-w-sm ml-auto rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <SectionTitle
            title={t('精选作品', 'Featured Projects')}
            titleEn="PROJECTS"
            subtitle={t(
              '近期完成的部分代表性项目',
              'Recent representative projects'
            )}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center space-y-3">
            <Button to="/projects" variant="ghost">
              {t('查看全部作品', 'View All Projects')}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <div>
              <Link
                to="/more-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('查看更多项目 →', 'View more projects →')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="container">
          <SectionTitle
            title={t('能力亮点', 'Capabilities')}
            titleEn="SKILLS"
            subtitle={t('我能为你带来的价值', 'What I can bring to the table')}
          />
          
          <div
            ref={featuresRef.ref}
            className={cn(
              'grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700',
              featuresRef.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            )}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border/50 card-lift glow-hover relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Logos */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div
            ref={logosRef.ref}
            className={cn(
              'text-center transition-all duration-700',
              logosRef.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            )}
          >
            <p className="text-sm text-muted-foreground mb-10 uppercase tracking-wider">
              {t('工作经历', 'Work Experience')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300"
                >
                  {language === 'zh' ? logo.name : logo.nameEn}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - with brand style */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('有项目想法？', 'Have a project in mind?')}
          </h2>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
            {t(
              '无论是全新产品还是现有项目优化，我都很乐意交流。',
              "Whether it's a new product or optimizing an existing project, I'd love to chat."
            )}
          </p>
          <Button to="/contact" variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            {t('开始对话', 'Start a Conversation')}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;