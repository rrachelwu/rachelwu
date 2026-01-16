import React from 'react';
import { ArrowRight, Sparkles, Code, Palette, Zap } from 'lucide-react';
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
      title: t('产品设计', 'Product Design'),
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

  const logos = [
    { name: 'Google', logo: 'G' },
    { name: 'ByteDance', logo: 'BD' },
    { name: 'Alibaba', logo: 'Ali' },
    { name: 'Tencent', logo: 'TX' },
    { name: 'Microsoft', logo: 'MS' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-24 pb-16">
        <div className="container">
          <div
            ref={heroRef.ref}
            className={cn(
              'max-w-3xl transition-all duration-700',
              heroRef.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('开放新机会', 'Open to opportunities')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              {t('你好，我是', "Hi, I'm ")}
              <span className="text-gradient">{t('张三', 'Zhang San')}</span>
              <br />
              <span className="text-muted-foreground">
                {t('全栈开发者 & 产品设计师', 'Full-Stack Developer & Product Designer')}
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              {t(
                '5年+互联网产品经验，专注于构建高质量的 Web 应用与用户体验。曾服务于多家知名科技公司，擅长从 0 到 1 打造产品。',
                '5+ years of experience in building high-quality web applications and user experiences. Worked with leading tech companies, skilled at building products from 0 to 1.'
              )}
            </p>
            
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
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container">
          <SectionTitle
            title={t('精选作品', 'Featured Projects')}
            subtitle={t(
              '近期完成的部分代表性项目',
              'Recent representative projects'
            )}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title={t('能力亮点', 'Capabilities')}
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
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-card-hover transition-all duration-400"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Logos */}
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
            <p className="text-sm text-muted-foreground mb-8">
              {t('曾合作过的公司与团队', 'Companies & Teams I\'ve Worked With')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="text-2xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('有项目想法？', 'Have a project in mind?')}
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            {t(
              '无论是全新产品还是现有项目优化，我都很乐意交流。',
              "Whether it's a new product or optimizing an existing project, I'd love to chat."
            )}
          </p>
          <Button to="/contact" variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
            {t('开始对话', 'Start a Conversation')}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
