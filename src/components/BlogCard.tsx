import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Post } from '@/data/posts';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: Post;
  className?: string;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, className, index = 0 }) => {
  const { language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'zh') {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={cn(
        'group block bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400',
        'opacity-0 animate-fade-in-up',
        className
      )}
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      <div className="aspect-[2/1] overflow-hidden bg-muted">
        <img
          src={post.coverImage}
          alt={language === 'zh' ? post.title : post.titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-start gap-2">
          <span className="flex-1">{language === 'zh' ? post.title : post.titleEn}</span>
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-1" />
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {language === 'zh' ? post.excerpt : post.excerptEn}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
