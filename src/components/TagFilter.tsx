import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onTagSelect,
}) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagSelect('all')}
        className={cn(
          'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
          selectedTags.length === 0
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        )}
      >
        {t('全部', 'All')}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
            selectedTags.includes(tag)
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
