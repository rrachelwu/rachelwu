import React from 'react';
import { ArrowRight, Code, Palette, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const Index: React.FC = () => {
  const { t, language } = useLanguage();
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const logosRef = useScrollAnimation();

  const features = [
    {
      icon: Code,
      title: t('全栈开发', 'Full-Stack Dev'),
      description: t(
        '精通 React、Node.js、TypeScript，从前端到后端全链路开发能力',
        'Expert in React, Node.js, TypeScript with end-to-end development capabilities'
      ),
    },
    {
      icon: Palette,
      title: t('UI/UX 设计', 'UI/UX Design'),
      description: t(
        '用户体验优先的设计思维，将复杂需求转化为优雅解决方案',
        'User-first design thinking, transforming complex needs into elegant solutions'
      ),
    },
    {
      icon: Sparkles,
      title: t('AI 集成', 'AI Integration'),
      description: t(
        '善于将 AI 能力融入产品，提升效率与用户体验',
        'Skilled at integrating AI capabilities to enhance efficiency and UX'
      ),
    },
    {
      icon: Zap,
      title: t('快速交付', 'Fast Delivery'),
      description: t(
        '敏捷开发方法论，高质量快速迭代',
        'Agile methodology with high-quality rapid iteration'
      ),
    },
  ];

  const stats = [
    { number: '20+', label: t('独立负责项目', 'Independent Projects') },
    { number: '10', label: t('设计经验年数', 'Years of Experience') },
    { number: '6', label: t('曾带领团队人数', 'Team Size Led') },
  ];

  const logos = [
    { name: '小米电视', nameEn: 'Xiaomi TV' },
    { name: '峰米科技', nameEn: 'Formovie' },
    { name: '矩阵元', nameEn: 'Matrix Element' },
    { name: '雷神网络', nameEn: 'Thunder' },
  ];

  return (
    <main>
      {/* Hero Section - Matching PDF Cover Style */}
      <section className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
        {/* Background decoration - golden spiral inspired */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] opacity-[0.03]" viewBox="0 0 800 800" fill="none">
            <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1"/>
            <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="1"/>
            <circle cx="400" cy="400" r="180" stroke="currentColor" strokeWidth="1"/>
            <path d="M400 20 Q780 400 400 780 Q20 400 400 20" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
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
              {/* Brand badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                  R.
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block">
                    PORTFOLIO 2024
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    UI/VISUAL DESIGN
                  </span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                Rachel Wu
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4">
                {t('高级UI设计师', 'Senior UI Designer')}
              </p>
              
              <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
                {t(
                  '10年设计工作经验，曾任职于小米电视，精通互联网产品 App、小程序及网页设计，有丰富的产品和交互设计经验。',
                  '10 years of design experience, formerly at Xiaomi TV, skilled in App, Mini Program, and Web design with rich product and interaction design experience.'
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
                {/* Red oval background */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-96 bg-primary rounded-[50%] -z-10" />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=700&fit=crop&crop=face"
                  alt="Rachel Wu"
                  className="w-full max-w-sm ml-auto rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container">
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
          
          <div className="text-center">
            <Button to="/projects" variant="ghost">
              {t('查看全部作品', 'View All Projects')}
              <ArrowRight className="w-4 h-4" />
            </Button>
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
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
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