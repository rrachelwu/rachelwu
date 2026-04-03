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
      to={project.linkTo || `/projects/${project.slug}`}
      className={cn(
        'group block bg-card rounded-2xl overflow-hidden card-lift glow-hover relative',
        'opacity-0 animate-fade-in-up border border-border/50',
        className
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted relative">
        <img
          src={project.coverImage}
          alt={language === 'zh' ? project.title : project.titleEn}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Arrow icon with enhanced animation */}
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-elevated">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
        
        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
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
  );
};

export default ProjectCard;