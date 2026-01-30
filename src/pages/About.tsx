import React from 'react';
import { Download, MapPin, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import SkillBar from '@/components/SkillBar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import rachelPhoto from '@/assets/rachel-photo.jpg';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const introRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const educationRef = useScrollAnimation();

  const coreAbilities = [
    t('信息架构', 'Information Architecture'),
    t('交互&视觉', 'Interaction & Visual'),
    t('设计系统', 'Design System'),
    t('商业化定价表达', 'Commercial Pricing'),
    t('多语言国际化', 'Internationalization'),
    t('复杂规则梳理', 'Complex Rule Sorting'),
    t('跨团队推进', 'Cross-team Coordination'),
    t('上线验收与质量闭环', 'Launch & QA Loop'),
  ];

  const skills = {
    tools: [
      { name: 'Figma', level: 95 },
      { name: 'Axure / PS / AI', level: 85 },
      { name: t('飞书/Jira/Notion', 'Feishu/Jira/Notion'), level: 90 },
      { name: t('前端协作 (Tailwind/React)', 'Frontend (Tailwind/React)'), level: 70 },
    ],
    platforms: [
      { name: 'Web / H5', level: 95 },
      { name: 'App', level: 90 },
      { name: t('小程序', 'Mini Program'), level: 88 },
      { name: t('硬件交互', 'Hardware UI'), level: 80 },
    ],
    design: [
      { name: t('产品设计', 'Product Design'), level: 95 },
      { name: t('交互设计', 'Interaction Design'), level: 92 },
      { name: t('视觉设计', 'Visual Design'), level: 90 },
      { name: t('设计系统', 'Design System'), level: 88 },
    ],
  };

  const workExperience = [
    {
      company: t('武汉光速源科技有限公司', 'Wuhan Guangsuyuan Tech'),
      role: t('产品经理 / 设计负责人', 'Product Manager / Design Lead'),
      period: '2025.01 - 至今',
      description: t(
        '0-1 产品与官网体系搭建，商业化表达与转化路径设计，多语言国际化落地（中/英/俄），设计系统与交付标准沉淀。',
        '0-1 product and website system building, commercial expression and conversion design, multilingual localization (CN/EN/RU), design system and delivery standards.'
      ),
    },
    {
      company: t('雷神(武汉)网络技术有限公司', 'Thunder Network'),
      role: t('UI 设计师', 'UI Designer'),
      period: '2023.12 - 2024.06',
      description: t(
        '负责产品与运营场景的 UI/UX 设计交付，在多项目并行下保障高质量输出。',
        'Responsible for UI/UX design delivery for product and operation scenarios, ensuring high-quality output across multiple projects.'
      ),
    },
    {
      company: t('峰米(北京)科技有限公司', 'Formovie Technology'),
      role: t('产品 UI 设计师', 'Product UI Designer'),
      period: '2023.08 - 2023.11',
      description: t(
        '负责产品模块的交互与视觉方案，输出可复用组件与规范。',
        'Responsible for interaction and visual solutions, outputting reusable components and specifications.'
      ),
    },
    {
      company: t('矩阵元(深圳)技术有限公司', 'Matrix Element'),
      role: t('高级 UI 设计师', 'Senior UI Designer'),
      period: '2022.03 - 2023.01',
      description: t(
        '负责核心业务链路的体验设计与迭代，擅长复杂规则/状态梳理。',
        'Responsible for core business experience design and iteration, skilled in complex rule/state sorting.'
      ),
    },
    {
      company: t('武汉紫荆花科技有限责任公司', 'Bauhinia Tech'),
      role: t('高级 UI 设计师', 'Senior UI Designer'),
      period: '2019.02 - 2022.01',
      description: t(
        '多项目并行交付，沉淀组件与模板资产，推动团队交付标准化。',
        'Delivered multiple projects in parallel, built component and template assets, drove team delivery standardization.'
      ),
    },
    {
      company: t('北京榆钱投资管理有限公司', 'Yuqian Investment'),
      role: t('UI 设计师', 'UI Designer'),
      period: '2017.02 - 2018.11',
      description: t(
        '负责产品页面与运营活动设计，从需求理解到上线交付闭环。',
        'Responsible for product pages and campaign design, from requirement to launch delivery loop.'
      ),
    },
    {
      company: t('北京小米电子产品有限公司', 'Xiaomi Electronics'),
      role: t('视觉设计师', 'Visual Designer'),
      period: '2013.11 - 2016.03',
      description: t(
        '参与互联网产品/业务设计协作，遵循设计规范输出多端资源与活动物料。',
        'Participated in internet product design collaboration, outputting multi-platform resources following design specs.'
      ),
    },
  ];

  const education = [
    {
      school: t('湖北工业大学', 'Hubei University of Technology'),
      major: t('视觉传达设计（本科/非全日制）', 'Visual Communication Design (Bachelor/Part-time)'),
      period: '2017.09 - 2020.12',
    },
    {
      school: t('湖北青年职业学院', 'Hubei Youth Vocational College'),
      major: t('广告与会展（大专）', 'Advertising & Exhibition (Associate)'),
      period: '2010.09 - 2013.07',
    },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container">
        {/* Intro Section */}
        <div
          ref={introRef.ref}
          className={cn(
            'grid lg:grid-cols-5 gap-16 mb-24 transition-all duration-700',
            introRef.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          {/* Left Content */}
          <div className="lg:col-span-3">

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {t('吴倩', 'Rachel Wu')}
              <span className="text-xl md:text-2xl font-normal text-muted-foreground ml-4">
                {t('产品设计师 / 产品经理', 'Product Designer / Product Manager')}
              </span>
            </h1>
            
            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {t(
                '10+ 年互联网产品设计经验，长期在小团队/创业团队场景承担"产品+设计"双角色，覆盖 0-1 搭建、商业化转化页面、跨端体验（Web/H5/多语言）、硬件相关交互与说明体系。擅长把复杂功能与规则拆解为清晰的信息架构与可执行的交付标准，能与研发/销售/运营高效协同，推动方案快速落地上线并持续迭代。',
                '10+ years of internet product design experience. Long-term "product + design" dual role in small/startup teams, covering 0-1 building, commercial conversion pages, cross-platform experience (Web/H5/multilingual), hardware-related interaction and documentation. Skilled at breaking complex functions into clear IA and executable delivery standards, efficiently collaborating with dev/sales/ops to drive rapid implementation and iteration.'
              )}
            </p>

            {/* Core Abilities Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {coreAbilities.map((ability, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-full"
                >
                  {ability}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-16 mb-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground mt-2">{t('设计经验年数', 'Years Experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground mt-2">{t('独立负责项目', 'Independent Projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground">3</div>
                <div className="text-sm text-muted-foreground mt-2">{t('语言能力', 'Languages')}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t('武汉 / 可出差', 'Wuhan / Travel OK')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>180-8603-6200</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:rachelwuqian@icloud.com" className="hover:text-primary transition-colors">
                  rachelwuqian@icloud.com
                </a>
              </div>
            </div>
            
            <Button href="/resume.pdf" size="md">
              <Download className="w-4 h-4" />
              {t('下载简历', 'Download Resume')}
            </Button>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-2 relative hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-primary rounded-[50%] -z-10" />
              <img
                src={rachelPhoto}
                alt="Rachel Wu"
                className="w-64 h-80 object-cover rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div
          ref={experienceRef.ref}
          className={cn(
            'mb-20 transition-all duration-700',
            experienceRef.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <SectionTitle
            title={t('工作经历', 'Work Experience')}
            titleEn="EXPERIENCE"
          />
          
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{exp.company}</h3>
                      <p className="text-sm text-primary font-medium">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground md:text-right">{exp.period}</p>
                </div>
                <p className="text-sm text-muted-foreground ml-13 md:ml-13">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          ref={educationRef.ref}
          className={cn(
            'mb-20 transition-all duration-700',
            educationRef.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <SectionTitle
            title={t('教育经历', 'Education')}
            titleEn="EDUCATION"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{edu.school}</h3>
                    <p className="text-sm text-muted-foreground">{edu.major}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-8 p-6 rounded-xl bg-card border border-border">
            <h3 className="font-bold text-lg mb-4">{t('语言能力', 'Languages')}</h3>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                {t('中文（母语）', 'Chinese (Native)')}
              </span>
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium">
                {t('英语（工作沟通/文案）', 'English (Working/Copy)')}
              </span>
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium">
                {t('俄语（产品内容协作）', 'Russian (Product Content)')}
              </span>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={skillsRef.ref}
          className={cn(
            'transition-all duration-700',
            skillsRef.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          <SectionTitle
            title={t('技能栈', 'Skills')}
            titleEn="SKILLS"
            subtitle={t('按领域分类的能力', 'Capabilities by domain')}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('设计工具', 'Design Tools')}</h3>
              <div className="space-y-5">
                {skills.tools.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('平台经验', 'Platform')}</h3>
              <div className="space-y-5">
                {skills.platforms.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('设计能力', 'Design Skills')}</h3>
              <div className="space-y-5">
                {skills.design.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
