import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex flex-col animate-fade-in overflow-y-auto overscroll-contain"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors z-20"
        aria-label="Close"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Desktop navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary items-center justify-center text-foreground hover:bg-secondary/80 transition-colors z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary items-center justify-center text-foreground hover:bg-secondary/80 transition-colors z-20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image — scrollable for long screenshots, shown at full natural width up to 90vw */}
      <div
        className="min-h-full w-full flex items-start justify-center py-16 md:py-20 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt=""
          className="w-auto max-w-[92vw] md:max-w-[85vw] h-auto rounded-lg"
        />
      </div>

      {/* Mobile navigation arrows + indicators */}
      {images.length > 1 && (
        <div
          className="flex md:hidden items-center gap-4 mt-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onPrev}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onNext}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Desktop indicators */}
      {images.length > 1 && (
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={cn(
                'w-2 h-2 rounded-full transition-colors',
                index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
