import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { moreProjects, MoreProject } from '@/data/moreProjects';

const MoreWorkDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  const project = moreProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container max-w-4xl text-center">
          <h1 className="text-2xl font-bold mb-4">{t('项目未找到', 'Project Not Found')}</h1>
          <Link to="/more-works" className="text-primary hover:underline">
            ← {t('返回更多项目', 'Back to More Projects')}
          </Link>
        </div>
      </main>
    );
  }

  const decisions = language === 'zh' ? project.decisions : project.decisionsEn;
  const results = language === 'zh' ? project.results : project.resultsEn;
  const deliverables = language === 'zh' ? project.deliverables : project.deliverablesEn;

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container max-w-4xl">
        {/* Back */}
        <Link
          to="/more-works"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('返回更多项目', 'Back to More Projects')}
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            {language === 'zh' ? project.title : project.titleEn}
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            {language === 'zh' ? project.summary : project.summaryEn}
          </p>
        </header>

        {/* Meta */}
        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 text-sm border-y border-border py-5">
          <div>
            <span className="text-muted-foreground">{t('角色', 'Role')}</span>
            <p className="font-medium mt-0.5">{language === 'zh' ? project.role : project.roleEn}</p>
          </div>
          <div>
            <span className="text-muted-foreground">{t('时间', 'Duration')}</span>
            <p className="font-medium mt-0.5">{language === 'zh' ? project.duration : project.durationEn}</p>
          </div>
          <div>
            <span className="text-muted-foreground">{t('状态', 'Status')}</span>
            <p className="font-medium mt-0.5">{language === 'zh' ? project.status : project.statusEn}</p>
          </div>
        </div>

        {/* Background */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px', borderRadius: 0 }} />
            {t('背景与挑战', 'Background & Challenge')}
          </h3>
          <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
            {language === 'zh' ? project.background : project.backgroundEn}
          </p>
        </section>

        {/* Decisions */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px', borderRadius: 0 }} />
            {t('我的决策过程', 'My Decision Process')}
          </h3>
          <div className="space-y-6">
            {decisions.map((decision, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3 mb-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {t('问题', 'Problem')}
                    </p>
                    <p className="font-medium">{decision.problem}</p>
                  </div>
                </div>
                <div className="ml-10 space-y-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {t('我的判断', 'My Judgment')}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{decision.judgment}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {t('最终方案', 'Solution')}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{decision.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px', borderRadius: 0 }} />
            {t('交付物', 'Deliverables')}
          </h3>
          <div className="space-y-10">
            {deliverables.map((item, index) => (
              <div key={index}>
                <h4 className="text-base font-semibold mb-3">
                  {language === 'zh' ? item.title : item.titleEn}
                </h4>
                <div className={`grid gap-3 ${item.layout === 'single' ? 'grid-cols-1' : item.layout === 'row-3' ? 'grid-cols-3' : item.layout === 'grid-2x2' ? 'grid-cols-2' : 'grid-cols-2'}`}>
                  {item.images.map((img, imgIdx) => (
                    <div key={imgIdx} className={`rounded-lg overflow-hidden bg-secondary ${item.layout === 'single' ? 'aspect-auto' : 'aspect-video'}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {language === 'zh' ? item.description : item.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px', borderRadius: 0 }} />
            {t('项目结果', 'Results')}
          </h3>
          <div className="rounded-xl bg-primary/5 border border-primary/10 p-6">
            <ul className="space-y-3">
              {results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px', borderRadius: 0 }} />
            {t('反思', 'Reflection')}
          </h3>
          <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-3">
            <MessageSquareQuote className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-muted-foreground italic leading-relaxed">
              {language === 'zh' ? project.reflection : project.reflectionEn}
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px', borderRadius: 0 }} />
            {t('技术栈', 'Tech Stack')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Back */}
        <div className="pt-12 border-t border-border mt-16">
          <Link
            to="/more-works"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {t('返回更多项目', 'Back to More Projects')}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MoreWorkDetail;
