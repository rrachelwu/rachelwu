import React from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
}

const tagEnMap: Record<string, string> = {
  '出海品牌': 'Overseas Brand',
  '跨境电商': 'Cross-border',
  '区块链': 'Blockchain',
  'C端产品': 'C-side',
  'B端系统': 'B-side',
  '医疗健康': 'Healthcare',
};

const TagFilter: React.FC<TagFilterProps> = ({
  tags,
  selectedTags,
  onTagSelect,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onTagSelect('all')}
        className={cn(
          'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0',
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
            'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0',
            selectedTags.includes(tag)
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          )}
        >
          {language === 'zh' ? tag : (tagEnMap[tag] || tag)}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
