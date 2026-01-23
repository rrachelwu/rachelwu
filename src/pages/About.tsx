import React from 'react';
import { Download, MapPin, Mail, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import SkillBar from '@/components/SkillBar';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const introRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const educationRef = useScrollAnimation();

  const skills = {
    frontend: [
      { name: 'Figma / Sketch', level: 95 },
      { name: 'UI/UX Design', level: 92 },
      { name: 'Design Systems', level: 90 },
      { name: 'Prototyping', level: 88 },
    ],
    backend: [
      { name: 'App Design', level: 90 },
      { name: 'Web Design', level: 88 },
      { name: 'Mini Program', level: 85 },
      { name: 'TV Platform', level: 80 },
    ],
    design: [
      { name: 'Visual Design', level: 95 },
      { name: 'Interaction Design', level: 88 },
      { name: 'Brand Design', level: 85 },
      { name: 'Motion Design', level: 75 },
    ],
  };

  const workExperience = [
    {
      company: t('雷神(武汉)网络技术有限公司', 'Thunder Network'),
      role: t('UI设计师', 'UI Designer'),
      period: '2023.12 - 2024.06',
    },
    {
      company: t('峰米(北京)科技有限公司', 'Formovie Technology'),
      role: t('产品设计师', 'Product Designer'),
      period: '2023.08 - 2023.11',
    },
    {
      company: t('矩阵元(深圳)技术有限公司', 'Matrix Element'),
      role: t('高级UI设计师', 'Senior UI Designer'),
      period: '2022.03 - 2023.01',
    },
    {
      company: t('武汉紫荆花有限公司', 'Bauhinia'),
      role: t('高级UI设计师', 'Senior UI Designer'),
      period: '2019.02 - 2022.03',
    },
    {
      company: t('北京榆钱投资管理有限公司', 'Yuqian Investment'),
      role: t('UI设计师', 'UI Designer'),
      period: '2017.02 - 2018.11',
    },
    {
      company: t('北京小米电子产品有限公司', 'Xiaomi Electronics'),
      role: t('视觉设计师', 'Visual Designer'),
      period: '2013.11 - 2016.03',
    },
  ];

  const education = [
    {
      school: t('湖北工业大学', 'Hubei University of Technology'),
      major: t('视觉传达设计 / 艺术系', 'Visual Communication Design / Art'),
      period: '2017.09 - 2020.12',
    },
    {
      school: t('湖北青年职业学院', 'Hubei Youth Vocational College'),
      major: t('广告与会展 / 艺术系', 'Advertising & Exhibition / Art'),
      period: '2010.09 - 2013.06',
    },
  ];

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container">
        {/* Intro Section - PDF Style */}
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
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                R.
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                RACHEL PORTFOLIO
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Rachel Wu
              <span className="text-xl md:text-2xl font-normal text-muted-foreground ml-4">
                {t('高级UI设计师', 'Senior UI Designer')}
              </span>
            </h1>
            
            <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {t(
                '金牛座靠谱设计师，信奉追求极致的产品美学，10年设计工作经验，曾任职于小米电视，精通互联网产品 App、小程序及网页设计，有丰富的产品和交互设计经验，能独立负责产品设计，有硬件产品设计经验，对多端的用户体验和视觉设计有总结沉淀；有丰富的B端C端设计经验、海外项目经验，过往项目涉及网页端、移动端、小程序、电视端等平台设计；擅长视觉运营和产品交互设计，多次负责 0-1 项目，能运用自己的设计沉淀在紧急的需求中快速完成设计工作。',
                'A reliable Taurus designer who pursues ultimate product aesthetics. 10 years of design experience, formerly at Xiaomi TV. Skilled in App, Mini Program, and Web design with rich product and interaction experience. Capable of independently managing product design with hardware experience. Extensive B2B/B2C and overseas project experience across web, mobile, mini programs, and TV platforms.'
              )}
            </p>

            {/* Stats - like in PDF */}
            <div className="flex gap-16 mb-10">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground mt-2">{t('独立负责项目', 'Independent Projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground">10</div>
                <div className="text-sm text-muted-foreground mt-2">{t('设计经验年数', 'Years Experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-foreground">6</div>
                <div className="text-sm text-muted-foreground mt-2">{t('曾带领团队人数', 'Team Size Led')}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{t('武汉, 中国', 'Wuhan, China')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:rachel@example.com" className="hover:text-primary transition-colors">
                  rachel@example.com
                </a>
              </div>
            </div>
            
            <Button href="/resume.pdf" size="md">
              <Download className="w-4 h-4" />
              {t('下载简历', 'Download Resume')}
            </Button>
          </div>

          {/* Right Image - with red oval */}
          <div className="lg:col-span-2 relative hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Red oval background like PDF */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-primary rounded-[50%] -z-10" />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face"
                alt="Rachel Wu"
                className="w-64 h-80 object-cover rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>

        {/* Work Experience - PDF Grid Style */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-primary font-medium">{exp.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education - PDF Style */}
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
            subtitle={t('按领域分类的设计能力', 'Design capabilities by domain')}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('设计工具', 'Design Tools')}</h3>
              <div className="space-y-5">
                {skills.frontend.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-bold text-lg mb-6">{t('平台经验', 'Platform')}</h3>
              <div className="space-y-5">
                {skills.backend.map((skill, i) => (
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