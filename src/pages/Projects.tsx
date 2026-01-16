import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects, getAllTags } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import TagFilter from '@/components/TagFilter';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const allTags = getAllTags();

  const handleTagSelect = (tag: string) => {
    if (tag === 'all') {
      setSelectedTags([]);
    } else {
      setSelectedTags((prev) =>
        prev.includes(tag)
          ? prev.filter((t) => t !== tag)
          : [...prev, tag]
      );
    }
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));

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

      return matchesTags && matchesSearch;
    });
  }, [selectedTags, searchQuery, language]);

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container">
        <SectionTitle
          title={t('作品集', 'Projects')}
          subtitle={t(
            '探索我参与的各类项目，从 Web 应用到移动端，从设计到开发',
            'Explore various projects I\'ve worked on, from web apps to mobile, from design to development'
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

          {/* Tags */}
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
          />
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
