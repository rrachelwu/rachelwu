import React, { useState } from 'react';
import { ArrowRight, Code, Palette, Sparkles, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import rachelPhoto from '@/assets/rachel-photo.webp';
import heroPattern from '@/assets/hero-pattern.svg';

const Index: React.FC = () => {
  const { t, language } = useLanguage();
  const [bioExpanded, setBioExpanded] = useState(false);
  const heroRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const logosRef = useScrollAnimation();

  const features = [
    {
      icon: Palette,
      title: t('产品体验', 'Product Experience'),
      description: t(
        '信息架构、交互设计、0-1产品搭建、用户路径梳理、多端适配',
        'Information architecture, interaction design, 0-1 product building, user journey mapping, multi-platform adaptation'
      ),
    },
    {
      icon: Code,
      title: t('视觉与系统', 'Visual & System'),
      description: t(
        '设计系统与规范、商业化产品设计、品牌视觉、组件库建设',
        'Design system & standards, commercial product design, brand visual, component library'
      ),
    },
    {
      icon: Zap,
      title: t('交互规范与系统', 'Interaction Design System'),
      description: t(
        '设计系统建设、组件库规范、多端适配、开发验收、交付质量管控',
        'Design system building, component library standards, multi-platform adaptation, development acceptance, delivery quality control'
      ),
    },
    {
      icon: Sparkles,
      title: t('出海与国际化', 'Overseas & i18n'),
      description: t(
        '出海产品设计、多语言国际化（中英俄）、跨文化用户需求、硬件交互（HMI/OTT）',
        'Overseas product design, multilingual i18n (CN/EN/RU), cross-cultural user needs, hardware UI (HMI/OTT)'
      ),
    },
  ];

  const stats = [
    { number: '10+', label: t('产品经验年数', 'Years of Product Experience') },
    { number: '10+', label: t('交付项目', 'Delivered Projects') },
    { number: '3+', label: t('出海市场', 'Overseas Markets') },
  ];

  const logos = [
    { name: '小米电子', nameEn: 'Xiaomi' },
    { name: '峰米科技', nameEn: 'Formovie' },
    { name: '紫荆花', nameEn: 'Bauhinia' },
    { name: '光速源', nameEn: 'Guangsuyuan' },
  ];

  return (
    <main>
      {/* Hero Section - Matching PDF Cover Style */}
      <section className="min-h-screen flex items-center pt-20 pb-32 lg:pb-16 relative overflow-hidden bg-gradient-mesh">
        {/* Framer-style floating decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Hero pattern SVG - full screen */}
          <img
            src={heroPattern}
            alt=""
            className="absolute bottom-[160px] left-0 h-[63%] w-auto opacity-50"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 100%)',
            }}
          />
          
          {/* Large red glow */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[80px]" />
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
              {/* Mobile photo - cropped to landscape, top third removed */}
              <div className="lg:hidden mb-6 w-full overflow-hidden rounded-2xl shadow-elevated" style={{ aspectRatio: '996 / 819' }}>
                <img
                  src={rachelPhoto}
                  alt="Rachel Wu"
                  width="720"
                  height="900"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                {t('吴倩', 'Rachel Wu')}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-4">
                {t('高级产品设计师', 'Senior Product Designer')}
              </p>
              
              <p
                className={cn(
                  'text-base text-muted-foreground mb-8 max-w-lg leading-relaxed cursor-pointer lg:cursor-default',
                  'transition-all duration-300',
                  bioExpanded ? 'line-clamp-none' : 'lg:line-clamp-none line-clamp-4'
                )}
                onClick={() => setBioExpanded(!bioExpanded)}
              >
                {t(
                  '10年产品设计经验，软硬件双背景。主导过DTC出海硬件品牌（美俄双市场）、智能终端HMI系统及B端订单系统的产品设计与交付，具备从需求判断、交互设计、设计规范到开发验收的完整能力。既有消费电子硬件的交互设计积累，也有跨境出海多市场的用户体验经验，能在资源有限的情况下独立推动0到1项目落地，兼具设计判断力与产品判断力。',
                  '10 years of product design experience, with both software and hardware background. Led product design and delivery for DTC overseas hardware brands (US & RU markets), smart terminal HMI systems, and B-end order management systems. Complete capabilities from requirement judgment, interaction design, design standards to development acceptance. Strong foundation in consumer electronics hardware interaction design, plus cross-border user experience across multiple markets, able to independently drive 0-to-1 projects under limited resources with both design judgment and product judgment.'
                )}
              </p>
              <button
                type="button"
                onClick={() => setBioExpanded(!bioExpanded)}
                className="lg:hidden flex items-center gap-1 text-sm text-primary mb-8 transition-colors hover:text-primary/80"
                aria-label={bioExpanded ? t('收起', 'Collapse') : t('展开', 'Expand')}
              >
                {bioExpanded ? t('收起', 'Show less') : t('展开全部', 'Show more')}
                <ChevronDown className={cn('w-4 h-4 transition-transform', bioExpanded && 'rotate-180')} />
              </button>

              {/* Stats - like in PDF */}
              <div className="flex gap-12 mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Desktop CTA - inline */}
              <div className="hidden lg:flex flex-row flex-nowrap gap-4 max-w-lg">
                <Button to="/projects" size="lg" className="px-8">
                  {t('查看作品', 'View Projects')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button to="/contact" variant="outline" size="lg" className="px-8">
                  {t('联系我', 'Contact Me')}
                </Button>
              </div>
            </div>

            {/* Right Image - with red oval background like PDF */}
            <div className="relative hidden lg:block min-h-[480px]">
              <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5]">
                <img
                  src={rachelPhoto}
                  alt="Rachel Wu"
                  width="720"
                  height="900"
                  className="w-full max-w-sm h-auto ml-auto rounded-2xl shadow-elevated"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('查看更多项目 →', 'View more projects →')}
            </Link>
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
            <h2 className="text-sm text-muted-foreground mb-10 uppercase tracking-wider">
              {t('工作经历', 'Work Experience')}
            </h2>
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

      {/* Mobile fixed CTA bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex gap-3 px-4 py-3"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        <Button to="/projects" size="md" className="flex-1 px-4">
          {t('查看作品', 'View Projects')}
        </Button>
        <Button to="/contact" variant="outline" size="md" className="flex-1 px-4 bg-white/70 backdrop-blur-md border-white/40">
          {t('联系我', 'Contact Me')}
        </Button>
      </div>
    </main>
  );
};

export default Index;