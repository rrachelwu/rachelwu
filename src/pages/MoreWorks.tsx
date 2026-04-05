import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const MoreWorks: React.FC = () => {
  const { t, language } = useLanguage();

  // Filter projects that link to /more-works/
  const moreWorkProjects = projects.filter(p => p.linkTo?.startsWith('/more-works/'));

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container max-w-4xl">
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {t('更多项目', 'More Projects')}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t(
              '以下项目来自国内产品设计经历，涵盖社交电商、医疗健康等领域。',
              'The following projects are from domestic product design experience, covering social commerce, healthcare, and other fields.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {moreWorkProjects.map((project, index) => (
            <Link
              key={project.id}
              to={project.linkTo!}
              className={cn(
                'group block bg-card rounded-2xl overflow-hidden card-lift glow-hover relative',
                'opacity-0 animate-fade-in-up border border-border/50'
              )}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                {project.coverImage ? (
                  <img
                    src={project.coverImage}
                    alt={language === 'zh' ? project.title : project.titleEn}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full" style={{ backgroundColor: '#F0F0F0' }} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-elevated">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {language === 'zh' ? project.title : project.titleEn}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {language === 'zh' ? project.summary : project.summaryEn}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <span className="font-medium">{language === 'zh' ? project.role : project.roleEn}</span>
                  <span>{language === 'zh' ? project.duration : project.durationEn}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-12 border-t border-border mt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {t('返回主页', 'Back to Home')}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MoreWorks;
