import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Project } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className, index = 0 }) => {
  const { language } = useLanguage();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        'group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400',
        'opacity-0 animate-fade-in-up',
        className
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.coverImage}
          alt={language === 'zh' ? project.title : project.titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
          {language === 'zh' ? project.title : project.titleEn}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {language === 'zh' ? project.summary : project.summaryEn}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{language === 'zh' ? project.role : project.roleEn}</span>
          <span>{language === 'zh' ? project.duration : project.durationEn}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
