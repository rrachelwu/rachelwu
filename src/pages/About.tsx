import React from 'react';
import { Download, MapPin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import SkillBar from '@/components/SkillBar';
import TimelineItem from '@/components/TimelineItem';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const introRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const timelineRef = useScrollAnimation();

  const skills = {
    frontend: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
    design: [
      { name: 'Figma', level: 88 },
      { name: 'UI/UX Design', level: 85 },
      { name: 'Design Systems', level: 90 },
      { name: 'Prototyping', level: 82 },
    ],
  };

  const timeline = [
    {
      date: '2024',
      title: t('高级前端工程师', 'Senior Frontend Engineer'),
      subtitle: t('某知名科技公司', 'Leading Tech Company'),
      description: t(
        '负责设计系统建设，带领团队完成多个核心项目',
        'Led design system development and multiple core projects'
      ),
    },
    {
      date: '2022 - 2024',
      title: t('全栈开发工程师', 'Full-Stack Developer'),
      subtitle: t('创业公司', 'Startup'),
      description: t(
        '从 0 到 1 构建多个产品，涵盖 Web、App 及后端服务',
        'Built multiple products from scratch, including web, mobile, and backend'
      ),
    },
    {
      date: '2020 - 2022',
      title: t('前端开发工程师', 'Frontend Developer'),
      subtitle: t('互联网大厂', 'Big Tech'),
      description: t(
        '参与电商平台核心功能开发，优化性能与用户体验',
        'Developed core e-commerce features, optimized performance and UX'
      ),
    },
    {
      date: '2016 - 2020',
      title: t('计算机科学学士', 'B.S. Computer Science'),
      subtitle: t('重点大学', 'Top University'),
      description: t(
        '主修计算机科学，辅修设计',
        'Major in Computer Science, Minor in Design'
      ),
    },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container">
        {/* Intro Section */}
        <div
          ref={introRef.ref}
          className={cn(
            'grid lg:grid-cols-3 gap-12 mb-20 transition-all duration-700',
            introRef.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          {/* Avatar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-muted mb-6 mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt={t('张三', 'Zhang San')}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold mb-2">{t('张三', 'Zhang San')}</h1>
                <p className="text-muted-foreground mb-4">
                  {t('全栈开发者 & 产品设计师', 'Full-Stack Developer & Product Designer')}
                </p>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{t('北京, 中国', 'Beijing, China')}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <Button href="/resume.pdf" size="sm" className="mx-auto lg:mx-0">
                  <Download className="w-4 h-4" />
                  {t('下载简历', 'Download Resume')}
                </Button>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2">
            <SectionTitle title={t('关于我', 'About Me')} />
            
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                {t(
                  '你好！我是一名拥有 5 年+经验的全栈开发者与产品设计师。我热爱将复杂的问题转化为简洁、优雅的解决方案，始终追求用户体验与技术实现的完美平衡。',
                  "Hi! I'm a full-stack developer and product designer with 5+ years of experience. I love transforming complex problems into clean, elegant solutions, always pursuing the perfect balance between user experience and technical implementation."
                )}
              </p>
              <p className="text-muted-foreground mb-6">
                {t(
                  '在过去的工作中，我参与并主导了多个从 0 到 1 的产品建设，涵盖企业级 SaaS、移动应用、数据可视化平台等多个领域。我擅长与设计师、产品经理紧密协作，确保产品在技术可行性与用户需求之间找到最佳平衡点。',
                  "In my past work, I've led multiple products from 0 to 1, covering enterprise SaaS, mobile applications, and data visualization platforms. I excel at collaborating closely with designers and product managers to find the optimal balance between technical feasibility and user needs."
                )}
              </p>
              <p className="text-muted-foreground">
                {t(
                  '目前我对 AI 与前端的结合特别感兴趣，正在探索如何用 AI 提升开发效率与用户体验。如果你有有趣的项目或机会，欢迎联系我！',
                  "Currently, I'm particularly interested in the intersection of AI and frontend development, exploring how AI can enhance development efficiency and user experience. Feel free to reach out if you have interesting projects or opportunities!"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={skillsRef.ref}
          className={cn(
            'mb-20 transition-all duration-700',
            skillsRef.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <SectionTitle
            title={t('技能栈', 'Skills')}
            subtitle={t('按领域分类的技术能力', 'Technical capabilities by domain')}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-6">{t('前端开发', 'Frontend')}</h3>
              <div className="space-y-4">
                {skills.frontend.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-6">{t('后端开发', 'Backend')}</h3>
              <div className="space-y-4">
                {skills.backend.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-6">{t('设计', 'Design')}</h3>
              <div className="space-y-4">
                {skills.design.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div
          ref={timelineRef.ref}
          className={cn(
            'transition-all duration-700',
            timelineRef.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <SectionTitle
            title={t('经历', 'Experience')}
            subtitle={t('教育与工作经历时间线', 'Education and work experience timeline')}
          />
          
          <div className="max-w-2xl">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
