import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Users } from 'lucide-react';
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

  const sections = language === 'zh' ? project.sections : project.sectionsEn;

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

        {/* Header */}
        <header className="mb-12">
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
          
          <p className="text-lg text-muted-foreground mb-6">
            {language === 'zh' ? project.summary : project.summaryEn}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{language === 'zh' ? project.role : project.roleEn}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{language === 'zh' ? project.duration : project.durationEn}</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links.demo && (
              <Button href={project.links.demo} size="sm">
                <ExternalLink className="w-4 h-4" />
                {t('在线演示', 'Live Demo')}
              </Button>
            )}
            {project.links.github && (
              <Button href={project.links.github} variant="secondary" size="sm">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            )}
          </div>
        </header>

        {/* Cover Image */}
        <div className="mb-12 rounded-xl overflow-hidden bg-muted aspect-video">
          <img
            src={project.coverImage}
            alt={language === 'zh' ? project.title : project.titleEn}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">{t('技术栈', 'Tech Stack')}</h2>
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

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mb-12 p-6 rounded-xl bg-primary/5 border border-primary/10">
            <h2 className="text-xl font-semibold mb-4">{t('关键成果', 'Key Results')}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {(language === 'zh' ? project.metrics : project.metricsEn)?.map((metric, index) => (
                <div key={index} className="text-center p-4">
                  <p className="text-lg font-semibold text-primary">{metric}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              {section.content.split('\n').map((line, i) => {
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="text-muted-foreground">
                      {line.substring(2)}
                    </li>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground mb-2">
                    {line}
                  </p>
                );
              })}
            </div>
            
            {section.images && section.images.length > 0 && (
              <div className="grid gap-4 mt-6">
                {section.images.map((image, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => openLightbox(section.images!, imgIndex)}
                    className="rounded-lg overflow-hidden bg-muted hover:opacity-90 transition-opacity cursor-zoom-in"
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}
          </section>
        ))}

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
