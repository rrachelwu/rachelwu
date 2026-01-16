import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  description,
  isLast = false,
}) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
      )}
      
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      
      {/* Content */}
      <div>
        <span className="text-xs font-medium text-primary">{date}</span>
        <h4 className="text-base font-semibold mt-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
