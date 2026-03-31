import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Lightbulb, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectBySlug } from '@/data/projects';
import Button from '@/components/Button';
import ImageLightbox from '@/components/ImageLightbox';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const decisions = language === 'zh' ? project.decisions : project.decisionsEn;
  const deliverables = language === 'zh' ? project.deliverables : project.deliverablesEn;
  const results = language === 'zh' ? project.results : project.resultsEn;

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container max-w-4xl">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('返回作品列表', 'Back to Projects')}
        </Link>

        {/* 1. 项目标题 + 一句话描述 */}
        <header className="mb-10">
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

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'zh' ? project.title : project.titleEn}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {language === 'zh' ? project.summary : project.summaryEn}
          </p>
        </header>

        {/* 2. 角色 / 时间 / 状态 */}
        <section className="mb-10 flex flex-wrap gap-x-8 gap-y-3 text-sm border-y border-border py-5">
          <div>
            <span className="text-muted-foreground">{t('角色', 'Role')}</span>
            <p className="font-medium mt-0.5">{language === 'zh' ? project.role : project.roleEn}</p>
          </div>
          <div>
            <span className="text-muted-foreground">{t('时间', 'Duration')}</span>
            <p className="font-medium mt-0.5">{language === 'zh' ? project.duration : project.durationEn}</p>
          </div>
          {project.status && (
            <div>
              <span className="text-muted-foreground">{t('状态', 'Status')}</span>
              <p className="font-medium mt-0.5">{language === 'zh' ? project.status : project.statusEn}</p>
            </div>
          )}
          {project.links.demo && (
            <div className="ml-auto flex items-end">
              <Button href={project.links.demo} size="sm">
                <ExternalLink className="w-4 h-4" />
                {t('访问网站', 'Visit Site')}
              </Button>
            </div>
          )}
        </section>

        {/* Cover Image */}
        <div className="mb-12 rounded-xl overflow-hidden bg-muted aspect-video">
          <img
            src={project.coverImage}
            alt={language === 'zh' ? project.title : project.titleEn}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. 背景与挑战 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary rounded-none" style={{ height: "20px" }}" />
            {t('背景与挑战', 'Background & Challenge')}
          </h2>
          <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
            {language === 'zh' ? project.background : project.backgroundEn}
          </p>
        </section>

        {/* 4. 决策过程 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 bg-primary rounded-none" style={{ height: "20px" }}" />
            {t('我的决策过程', 'My Decision Process')}
          </h2>
          <div className="space-y-8">
            {decisions.map((decision, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6"
              >
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

        {/* 5. 交付物展示 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 bg-primary rounded-none" style={{ height: "20px" }}" />
            {t('交付物', 'Deliverables')}
          </h2>
          <div className="grid gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="group">
                {item.image ? (
                  <button
                    onClick={() => openLightbox(
                      deliverables.filter(d => d.image).map(d => d.image!),
                      deliverables.filter(d => d.image).findIndex(d => d.image === item.image)
                    )}
                    className="w-full rounded-lg overflow-hidden bg-muted hover:opacity-90 transition-opacity cursor-zoom-in mb-2"
                  >
                    <img src={item.image} alt={item.caption} className="w-full h-auto" loading="lazy" />
                  </button>
                ) : null}
                <div className="flex items-center gap-2 py-3 px-4 rounded-lg bg-secondary/50">
                  <span className="text-xs font-medium text-primary bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 结果 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary rounded-none" style={{ height: "20px" }}" />
            {t('项目结果', 'Results')}
          </h2>
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

        {/* 7. 反思 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary rounded-none" style={{ height: "20px" }}" />
            {t('反思', 'Reflection')}
          </h2>
          <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-3">
            <MessageSquareQuote className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-muted-foreground italic leading-relaxed">
              {language === 'zh' ? project.reflection : project.reflectionEn}
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary rounded-none" style={{ height: "20px" }}" />
            {t('技术栈', 'Tech Stack')}
          </h2>
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

        {/* Navigation */}
        <div className="pt-8 border-t border-border">
          <Button to="/projects" variant="ghost">
            <ArrowLeft className="w-4 h-4" />
            {t('查看更多项目', 'View More Projects')}
          </Button>
        </div>
      </div>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === 0 ? lightboxImages.length - 1 : prev - 1
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev === lightboxImages.length - 1 ? 0 : prev + 1
          )
        }
      />
    </main>
  );
};

export default ProjectDetail;
