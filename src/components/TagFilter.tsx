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
  '硬件配套软件': 'Hardware Software',
  'B端/C端': 'B-side/C-side',
  '订阅制产品': 'Subscription',
  '跨境电商': 'Cross-border',
  'C端工具': 'C-side Tool',
  'Telegram生态': 'Telegram Eco',
  '俄语市场': 'Russian Market',
  'B2B/B2C平台': 'B2B/B2C',
  '供应链系统': 'Supply Chain',
  '定制化产品': 'Customization',
  'Web3': 'Web3',
  '金融工具': 'Finance Tool',
  'C端App': 'C-side App',
  'B端系统': 'B-side System',
  '社交电商': 'Social Commerce',
  'SaaS工具': 'SaaS Tool',
  '医疗健康': 'Healthcare',
  '小程序': 'Mini Program',
  '企业微信生态': 'WeCom Eco',
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
