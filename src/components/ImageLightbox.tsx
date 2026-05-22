import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.25;

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
  const [zoom, setZoom] = useState(1);
  const [fitZoom, setFitZoom] = useState(1);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Recalculate fit-to-screen zoom (treated as 100% baseline shown to user)
  const recalcFit = () => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container || !img.naturalWidth) return;
    const maxW = container.clientWidth - 32;
    const maxH = container.clientHeight - 32;
    const ratio = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1);
    setFitZoom(ratio);
    setZoom(ratio);
  };

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

  // Reset zoom when image changes
  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => recalcFit());
    return () => cancelAnimationFrame(id);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => recalcFit();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50 && zoom <= fitZoom + 0.01) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP));
  const zoomOut = () => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP));
  const actualSize = () => setZoom(1);
  const fitScreen = () => setZoom(fitZoom);

  if (!isOpen) return null;

  // Percentage relative to fit (fit = 100%)
  const percent = fitZoom > 0 ? Math.round((zoom / fitZoom) * 100) : 100;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-fade-in"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-20"
        aria-label="Close"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Desktop navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-20"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Scrollable image container */}
      <div
        ref={containerRef}
        className="flex-1 w-full overflow-auto flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          ref={imgRef}
          src={images[currentIndex]}
          alt=""
          onLoad={recalcFit}
          style={{
            width: imgRef.current?.naturalWidth ? `${imgRef.current.naturalWidth * zoom}px` : 'auto',
            height: 'auto',
            maxWidth: 'none',
          }}
          className="rounded-lg select-none transition-[width] duration-150"
          draggable={false}
        />
      </div>

      {/* Bottom toolbar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
        <button
          onClick={zoomIn}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          aria-label="Zoom in"
          title="放大"
        >
          <ZoomIn className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={zoomOut}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          aria-label="Zoom out"
          title="缩小"
        >
          <ZoomOut className="w-4.5 h-4.5" />
        </button>
        <button
          onClick={actualSize}
          className="h-9 px-3 rounded-full text-xs font-medium text-white hover:bg-white/15 transition-colors"
          title="实际比例 1:1"
        >
          1:1
        </button>
        <button
          onClick={fitScreen}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          aria-label="Fit to screen"
          title="适应屏幕"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <span className="px-2 text-xs tabular-nums text-white/80 min-w-[3.5rem] text-center">
          {percent}%
        </span>
        {images.length > 1 && (
          <span className="px-2 text-xs tabular-nums text-white/60 border-l border-white/15 ml-1">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
