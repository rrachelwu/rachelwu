import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  titleEn?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  showNumber?: boolean;
  number?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  titleEn,
  subtitle,
  align = 'left',
  className,
  showNumber = false,
  number,
}) => {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <div className="flex items-center gap-4 mb-3">
        {showNumber && number && (
          <span className="section-number">{number}</span>
        )}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          {titleEn && (
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {titleEn}
            </span>
          )}
        </div>
      </div>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;