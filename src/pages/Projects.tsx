import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';

interface Category {
  id: string;
  zh: string;
  en: string;
  matchTags: string[];
}

const categories: Category[] = [
  { id: 'hardware', zh: '智能硬件 & HMI', en: 'Smart Hardware & HMI', matchTags: ['智能硬件', 'HMI交互', 'TV端设计'] },
  { id: 'ai', zh: 'AI产品', en: 'AI Product', matchTags: ['AI产品'] },
  { id: 'global', zh: '出海品牌', en: 'Overseas Brand', matchTags: ['出海品牌', '硬件配套软件'] },
  { id: 'b-end', zh: 'B端系统', en: 'Enterprise System', matchTags: ['B端工具', 'B端/C端', 'B端系统'] },
  { id: 'c-end', zh: 'C端产品', en: 'Consumer Product', matchTags: ['社交电商', 'C端工具', 'C端App', '小程序'] },
  { id: 'security', zh: '网络安全', en: 'Cybersecurity', matchTags: ['网络安全', '政府科研机构'] },
  { id: 'web3', zh: 'Web3', en: 'Web3', matchTags: ['Web3'] },
];

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const cat = categories.find((c) => c.id === selectedCategory);
    return projects.filter((project) => {
      const matchesCategory =
        !cat || cat.matchTags.some((tag) => project.tags.includes(tag));

      const title = language === 'zh' ? project.title : project.titleEn;
      const summary = language === 'zh' ? project.summary : project.summaryEn;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        title.toLowerCase().includes(searchLower) ||
        summary.toLowerCase().includes(searchLower) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchLower)
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  const renderTag = (id: string, label: string) => (
    <button
      key={id}
      onClick={() => setSelectedCategory(id)}
      className={cn(
        'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0',
        selectedCategory === id
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      )}
    >
      {label}
    </button>
  );

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container">
        <SectionTitle
          title={t('作品集', 'Projects')}
          subtitle={t(
            '覆盖出海品牌、跨境电商、硬件系统等方向,从信息架构到多端交付的完整产品设计案例',
            'Comprehensive product design cases spanning overseas brands, cross-border e-commerce, and hardware systems — from information architecture to multi-platform delivery'
          )}
        />

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('搜索项目...', 'Search projects...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-secondary border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {renderTag('all', t('全部', 'All'))}
            {categories.map((c) => renderTag(c.id, language === 'zh' ? c.zh : c.en))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              {t('没有找到匹配的项目', 'No matching projects found')}
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
