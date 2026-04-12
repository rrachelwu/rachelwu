import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Lightbulb, CheckCircle2, MessageSquareQuote } from 'lucide-react';
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

  // Collect all comparison images for lightbox
  const comparisonImages = project.comparisons
    ? project.comparisons.items.flatMap(item => [item.leftImage, item.rightImage].filter(Boolean) as string[])
    : [];

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
            {(language === 'zh' ? project.tags : project.tagsEn).map((tag) => (
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
        <section className="mb-10 border-y border-border py-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm items-end">
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
            <div className="hidden md:flex ml-auto gap-3">
              {project.slug === 'pokubuy' && (
                <Button href="https://t.me/pokubuy_bot?profile" size="sm" variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <ExternalLink className="w-4 h-4" />
                  {t('体验Mini App', 'Try Mini App')}
                </Button>
              )}
              {project.links.demo && (
                <Button href={project.links.demo} size="sm">
                  <ExternalLink className="w-4 h-4" />
                  {t('访问网站', 'Visit Site')}
                </Button>
              )}
            </div>
          </div>
          <div className="mt-4 md:hidden flex flex-row gap-2">
            {project.slug === 'pokubuy' && (
              <Button href="https://t.me/pokubuy_bot?profile" size="sm" variant="outline" className="w-full justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ExternalLink className="w-4 h-4" />
                {t('体验Mini App', 'Try Mini App')}
              </Button>
            )}
            {project.links.demo && (
              <Button href={project.links.demo} size="sm" className="w-full justify-center">
                <ExternalLink className="w-4 h-4" />
                {t('访问网站', 'Visit Site')}
              </Button>
            )}
          </div>
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
            <span className="w-1 bg-primary" style={{ height: "18px" }} />
            {t('背景与挑战', 'Background & Challenge')}
          </h2>
          <p className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
            {language === 'zh' ? project.background : project.backgroundEn}
          </p>
        </section>

        {/* 4. 决策过程 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: "18px" }} />
            {t('我的决策过程', 'My Decision Process')}
          </h2>
          <div className="space-y-8">
            {decisions.map((decision, index) => (
              <div key={index}>
                <div className="rounded-xl border border-border bg-card p-6">
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

                {/* Decision image (e.g. flow diagram) */}
                {decision.image && (
                  <div className="mt-4">
                    <button
                      onClick={() => openLightbox([decision.image!], 0)}
                      className="w-full rounded-lg overflow-hidden bg-muted hover:opacity-90 transition-opacity cursor-zoom-in"
                    >
                      <img
                        src={decision.image}
                        alt={language === 'zh' ? (decision.imageCaption || '') : (decision.imageCaptionEn || decision.imageCaption || '')}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </button>
                    {(decision.imageCaption || decision.imageCaptionEn) && (
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        {language === 'zh' ? decision.imageCaption : (decision.imageCaptionEn || decision.imageCaption)}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 5a. Comparison section (if present, replaces deliverables) */}
        {project.comparisons && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <span className="w-1 bg-primary" style={{ height: "18px" }} />
              {language === 'zh' ? project.comparisons.title : project.comparisons.titleEn}
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              {language === 'zh' ? project.comparisons.subtitle : project.comparisons.subtitleEn}
            </p>
            <div className="space-y-0">
              {project.comparisons.items.map((comp, index) => (
                <div key={index}>
                  {index > 0 && <hr className="border-border my-8" />}
                  <h3 className="text-base font-semibold mb-4">
                    {language === 'zh' ? comp.title : comp.titleEn}
                  </h3>
                  {comp.fullWidth && comp.fullWidthImage ? (
                    <button
                      onClick={() => openLightbox([comp.fullWidthImage!], 0)}
                      className="w-full rounded-lg overflow-hidden bg-muted hover:opacity-90 transition-opacity cursor-zoom-in"
                    >
                      <img
                        src={comp.fullWidthImage}
                        alt={language === 'zh' ? comp.title : comp.titleEn}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </button>
                  ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {/* Left: before */}
                    <div>
                      <button
                        onClick={() => openLightbox(comparisonImages, comparisonImages.indexOf(comp.leftImage || ''))}
                        className="w-full rounded-lg overflow-hidden bg-muted hover:opacity-90 transition-opacity cursor-zoom-in aspect-[9/16]"
                      >
                        <img
                          src={comp.leftImage || '/placeholder.svg'}
                          alt={language === 'zh' ? comp.leftCaption : comp.leftCaptionEn}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </button>
                      <p className="text-xs text-muted-foreground mt-2">
                        {language === 'zh' ? comp.leftCaption : comp.leftCaptionEn}
                      </p>
                    </div>
                    {/* Right: after */}
                    <div>
                      <button
                        onClick={() => openLightbox(comparisonImages, comparisonImages.indexOf(comp.rightImage || ''))}
                        className="w-full rounded-lg overflow-hidden bg-muted hover:opacity-90 transition-opacity cursor-zoom-in aspect-[9/16]"
                      >
                        <img
                          src={comp.rightImage || '/placeholder.svg'}
                          alt={language === 'zh' ? comp.rightCaption : comp.rightCaptionEn}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </button>
                      <p className="text-xs text-muted-foreground mt-2">
                        {language === 'zh' ? comp.rightCaption : comp.rightCaptionEn}
                      </p>
                    </div>
                  </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5b. 交付物展示 (only if no comparisons and has deliverables) */}
        {!project.comparisons && deliverables.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-1 bg-primary" style={{ height: '18px', borderRadius: 0 }} />
              {t('交付物', 'Deliverables')}
            </h2>
            <div className="space-y-10">
            {deliverables.map((item, index) => {
              const title = language === 'zh' ? (item.title || item.caption) : (item.titleEn || item.title || item.caption);
              const desc = language === 'zh' ? item.description : (item.descriptionEn || item.description);
              const allImages = deliverables.flatMap(d => d.images || (d.image ? [d.image] : []));
              return (
                <div key={index}>
                  <h4 className="text-base font-semibold mb-3">{title}</h4>
                  {/* Multiple images with layout */}
                  {item.images && item.images.length > 0 && (
                    <div className={`grid gap-3 ${item.layout === 'single' ? 'grid-cols-1' : item.layout === 'row-3' ? 'grid-cols-3' : item.layout === 'grid-2x2' ? 'grid-cols-2' : 'grid-cols-2'}`}>
                      {item.images.map((img, imgIdx) => (
                        <div key={imgIdx}>
                          <button
                            onClick={() => openLightbox(allImages, allImages.indexOf(img))}
                            className={`w-full rounded-lg overflow-hidden bg-secondary hover:opacity-90 transition-opacity cursor-zoom-in ${item.layout === 'single' ? 'aspect-auto' : 'aspect-[9/16]'}`}
                          >
                            <img src={img} alt={`${title} ${imgIdx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                          </button>
                          {item.imageCaptions && item.imageCaptions[imgIdx] && (
                            <p className="text-xs text-muted-foreground mt-2">{item.imageCaptions[imgIdx]}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Single image fallback */}
                  {!item.images && item.image && (
                    <button
                      onClick={() => openLightbox(allImages, allImages.indexOf(item.image!))}
                      className="w-full rounded-lg overflow-hidden bg-secondary hover:opacity-90 transition-opacity cursor-zoom-in"
                    >
                      <img src={item.image} alt={title} className="w-full h-auto" loading="lazy" />
                    </button>
                  )}
                  {desc && (
                    <p className="text-sm text-muted-foreground mt-3">{desc}</p>
                  )}
                </div>
              );
            })}
            </div>
          </section>
        )}

        {/* 6. 结果 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: "18px" }} />
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
            <span className="w-1 bg-primary" style={{ height: "18px" }} />
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
            <span className="w-1 bg-primary" style={{ height: "18px" }} />
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
