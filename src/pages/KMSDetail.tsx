import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from '@/components/Button';

const placeholder = (id: string) => (
  <div className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
    <span className="text-sm text-muted-foreground font-mono">{id}</span>
  </div>
);

const KMSDetail: React.FC = () => {
  const { t } = useLanguage();

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

        {/* 项目概述 */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {['B端后台', '从0到1', '设计规范'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('KMS 知识管理系统', 'KMS Knowledge Management System')}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t(
              '从品牌标识到组件库，完整主导知识管理后台系统的从 0 到 1 设计落地。',
              'From brand identity to component library, fully led the 0-to-1 design delivery of a knowledge management backend system.'
            )}
          </p>
        </header>

        {/* 角色 / 时间 / 状态 */}
        <section className="mb-10 flex flex-wrap gap-x-8 gap-y-3 text-sm border-y border-border py-5">
          <div>
            <span className="text-muted-foreground">{t('角色', 'Role')}</span>
            <p className="font-medium mt-0.5">{t('唯一设计师', 'Sole Designer')}</p>
          </div>
          <div>
            <span className="text-muted-foreground">{t('时间', 'Duration')}</span>
            <p className="font-medium mt-0.5">2023</p>
          </div>
          <div>
            <span className="text-muted-foreground">{t('状态', 'Status')}</span>
            <p className="font-medium mt-0.5">{t('已上线', 'Launched')}</p>
          </div>
        </section>

        {/* Logo 设计过程 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px' }} />
            {t('Logo 设计过程', 'Logo Design Process')}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {t(
              '从概念草图到最终定稿，记录品牌视觉的完整推演过程。',
              'From concept sketches to final design, documenting the complete brand visual development process.'
            )}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {placeholder('#KMS-LOGO-SKETCH')}
            {placeholder('#KMS-LOGO-FINAL')}
          </div>
        </section>

        {/* 设计规范 & 组件库 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px' }} />
            {t('设计规范 & 组件库', 'Design System & Component Library')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                {t('颜色、字体、间距规范', 'Colors, Typography & Spacing')}
              </p>
              {placeholder('#KMS-SPEC')}
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                {t('核心组件示例', 'Core Component Examples')}
              </p>
              {placeholder('#KMS-COMPONENTS')}
            </div>
          </div>
        </section>

        {/* 核心页面设计 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px' }} />
            {t('核心页面设计', 'Core Page Designs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {placeholder('#KMS-PAGE-1')}
            {placeholder('#KMS-PAGE-2')}
            {placeholder('#KMS-PAGE-3')}
          </div>
        </section>

        {/* 项目亮点 */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 bg-primary" style={{ height: '18px' }} />
            {t('项目亮点', 'Project Highlights')}
          </h2>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-muted-foreground leading-relaxed">
              {t(
                '作为唯一设计师，完整交付从品牌设计、设计规范到页面落地的全链路工作，并与开发团队协作确保还原度。',
                'As the sole designer, delivered the complete design pipeline from brand identity, design system to page implementation, collaborating with the development team to ensure design fidelity.'
              )}
            </p>
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
    </main>
  );
};

export default KMSDetail;
