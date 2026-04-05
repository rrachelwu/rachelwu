import React from 'react';
import { Download, MapPin, Mail, Phone, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import rachelPhoto from '@/assets/rachel-photo.jpg';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const introRef = useScrollAnimation();
  const abilitiesRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  
  const educationRef = useScrollAnimation();

  const coreAbilities = [
    t('信息架构', 'Information Architecture'),
    t('交互设计', 'Interaction Design'),
    t('0-1产品搭建', '0-1 Product Building'),
    t('设计系统与规范', 'Design System & Standards'),
    t('商业化产品设计', 'Commercial Product Design'),
    t('出海产品设计', 'Overseas Product Design'),
    t('多语言国际化', 'Internationalization'),
    t('硬件交互（HMI/OTT）', 'Hardware UI (HMI/OTT)'),
    t('多端适配', 'Multi-platform Adaptation'),
    t('AI辅助原型交付', 'AI-assisted Prototyping'),
    t('跨团队推进', 'Cross-team Coordination'),
  ];

  const workExperience = [
    {
      company: t('武汉光速源科技有限公司', 'Wuhan Guangsuyuan Tech'),
      role: t('产品负责人', 'Product Lead'),
      period: '2025.03 - ' + t('至今', 'Present'),
      description: t(
        '主导路由器、轮毂、POKUBUY三条出海产品线并行设计，覆盖官网、订单管理后台、Telegram Mini App等多端产品；建立英俄双语国际化规范，针对不同市场主动调整内容策略；探索AI辅助原型交付模式，与团队协作在15天内完成系统完整搭建',
        'Led parallel design for three overseas product lines (router, wheels, PokuBuy), covering websites, order management backend, and Telegram Mini App; established EN/RU bilingual standards with market-specific content strategies; explored AI-assisted prototyping, completing full system build in 15 days'
      ),
    },
    {
      company: t('雷神（武汉）网络技术有限公司', 'Thunder Network'),
      role: t('UI设计师', 'UI Designer'),
      period: '2023.12 - 2024.06',
      description: t(
        '独立负责NN App全链路UI/UX设计，从0搭建Figma组件库与设计规范，提升团队交付效率与开发还原质量',
        'Independently led full UI/UX design for NN App, built Figma component library and design standards from scratch, improving team delivery efficiency and dev implementation quality'
      ),
    },
    {
      company: t('峰米（北京）科技有限公司', 'Formovie Technology'),
      role: t('产品UI设计师', 'Product UI Designer'),
      period: '2023.08 - 2023.11',
      description: t(
        '参与FengOS系统设计，负责启动台常用面板交互设计、AIGC屏保生成功能、影视内容首页信息架构；参与屏幕色彩标准测试，积累软硬件结合的产品感知经验',
        'Participated in FengOS system design, responsible for launcher panel interaction, AIGC screensaver generation, and media homepage IA; involved in screen color standard testing, gaining hardware-software product experience'
      ),
    },
    {
      company: t('矩阵元（武汉）技术有限公司', 'Matrix Element'),
      role: t('高级UI设计师', 'Senior UI Designer'),
      period: '2022.03 - 2023.01',
      description: t(
        '主导隐私钱包App及KMS响应式网页从0到1设计；在关键交互节点主动提出更优方案并说服产品经理采纳，按自己的设计判断落地实现',
        'Led 0-to-1 design of Privacy Wallet App and KMS responsive web; proactively proposed better solutions at key interaction points, convincing PM to adopt designs based on own design judgment'
      ),
    },
    {
      company: t('武汉紫荆花科技有限责任公司', 'Bauhinia Tech'),
      role: t('高级UI设计师', 'Senior UI Designer'),
      period: '2019.02 - 2022.01',
      description: t(
        '独立负责人人相册App全链路设计长达3年；首页改版方案被采纳，设计方向被竞品（拼多多旗下产品）参考，验证设计判断的市场有效性',
        'Independently led full design for Renren Album App for 3 years; homepage redesign adopted, design direction referenced by competitor (Pinduoduo subsidiary), validating market effectiveness of design decisions'
      ),
    },
    {
      company: t('北京榆钱投资管理有限公司', 'Yuqian Investment'),
      role: t('UI设计师', 'UI Designer'),
      period: '2017.02 - 2018.11',
      description: t(
        '负责多款金融App及PC端B端后台从0到1设计，独立把控全流程交付质量；负责品牌VI制定与logo设计',
        'Responsible for 0-to-1 design of multiple finance Apps and PC B-end backends, independently managing full delivery quality; led brand VI and logo design'
      ),
    },
    {
      company: t('北京小米电子产品有限公司', 'Xiaomi Electronics'),
      role: t('视觉设计师', 'Visual Designer'),
      period: '2013.11 - 2016.03',
      description: t(
        '负责小米电视运营设计，统筹管理多平台海报库（规模逾3万张）；从0组建并管理6人设计团队，提前完成高强度交付任务',
        'Led Xiaomi TV operational design, managing multi-platform poster library (30,000+ assets); built and managed a 6-person design team from scratch, completing high-intensity deliverables ahead of schedule'
      ),
    },
  ];

  const skillsData = {
    tools: [
      'Figma', 'Axure', 'PS / AI',
      t('飞书 / Jira / Notion', 'Feishu / Jira / Notion'),
      t('了解前端协作（React / Tailwind）', 'Frontend collaboration (React / Tailwind)'),
      t('Claude / Cursor（AI辅助设计）', 'Claude / Cursor (AI-assisted design)'),
    ],
    platforms: [
      'Web / H5', 'App', t('小程序', 'Mini Program'),
      'OTT / HMI', 'Telegram Mini App',
      t('B端后台系统', 'B-end Backend Systems'),
    ],
    design: [
      t('产品设计', 'Product Design'),
      t('交互设计', 'Interaction Design'),
      t('视觉设计', 'Visual Design'),
      t('设计系统', 'Design System'),
      t('信息架构', 'Information Architecture'),
      t('多端适配', 'Multi-platform Adaptation'),
    ],
  };


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
            introRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {t('吴倩', 'Rachel Wu')}
              <span className="text-xl md:text-2xl font-normal text-muted-foreground ml-4">
                {t('产品设计师 / 产品经理', 'Product Designer / Product Manager')}
              </span>
            </h1>
            
            <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {t(
                '10年互联网产品设计经验，曾任职小米，具备从0到1独立搭建产品体系的实战能力。擅长将复杂业务逻辑转化为清晰的用户路径与信息架构，覆盖Web、App、小程序、OTT/HMI等多端场景。\n\n有出海产品设计经验，熟悉跨文化用户需求差异，建立过多语言国际化规范体系；具备软硬件结合的产品感知，持续关注AI与产品交互的融合方向。善于在资源有限、分工模糊的环境中推动方案落地，有带团队与制定设计规范的经验。',
                '10 years of internet product design experience, formerly at Xiaomi, with proven ability to independently build product systems from 0 to 1. Skilled at transforming complex business logic into clear user paths and information architecture, covering Web, App, Mini Programs, OTT/HMI and more.\n\nExperienced in overseas product design, familiar with cross-cultural user needs, and established multilingual internationalization standards. Possesses hardware-software integrated product awareness, continuously exploring AI-product interaction. Excels at driving solutions in resource-constrained environments with experience leading teams and establishing design standards.'
              )}
            </p>

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

            <Button href="#" size="sm">
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

        {/* Core Abilities */}
        <div
          ref={abilitiesRef.ref}
          className={cn(
            'mb-20 transition-all duration-700',
            abilitiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <SectionTitle
            title={t('核心能力', 'Core Abilities')}
            titleEn="ABILITIES"
          />
          <div className="flex flex-wrap gap-3">
            {coreAbilities.map((ability, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm bg-secondary text-foreground rounded-full font-medium"
              >
                {ability}
              </span>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div
          ref={experienceRef.ref}
          className={cn(
            'mb-20 transition-all duration-700',
            experienceRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

        {/* Skills Section */}
        <div
          ref={skillsRef.ref}
          className={cn(
            'mb-20 transition-all duration-700',
            skillsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <SectionTitle
            title={t('技能栈', 'Skills')}
            titleEn="SKILLS"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('设计工具', 'Design Tools')}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('平台经验', 'Platform')}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.platforms.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('设计能力', 'Design Skills')}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.design.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Education */}
        <div
          ref={educationRef.ref}
          className={cn(
            'mb-20 transition-all duration-700',
            educationRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                {t('英语（借助 AI 工具）', 'English (AI-assisted)')}
              </span>
              <span className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium">
                {t('俄语（借助 AI 工具）', 'Russian (AI-assisted)')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
