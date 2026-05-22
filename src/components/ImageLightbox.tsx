import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Hand } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const MIN_ZOOM = 0.05;
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
  const [panMode, setPanMode] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clamp = (v: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v));

  const recalcFit = () => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container || !img.naturalWidth) return;
    const maxW = container.clientWidth - 32;
    const maxH = container.clientHeight - 32;
    const ratio = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1);
    setFitZoom(ratio);
    setZoom(clamp(ratio));
    setOffset({ x: 0, y: 0 });
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

  useEffect(() => {
    if (!isOpen) return;
    setOffset({ x: 0, y: 0 });
    const id = requestAnimationFrame(() => recalcFit());
    return () => cancelAnimationFrame(id);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    setOffset({ x: 0, y: 0 });
  }, [zoom]);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => recalcFit();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (panMode) return;
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (panMode) return;
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (panMode) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50 && zoom <= fitZoom + 0.01) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  const zoomIn = () => setZoom((z) => clamp(z + ZOOM_STEP));
  const zoomOut = () => setZoom((z) => clamp(z - ZOOM_STEP));
  const actualSize = () => setZoom(1);
  const fitScreen = () => setZoom(clamp(fitZoom));

  // Pan handling — translate-based so user can drag even when image fits
  const onMouseDown = (e: React.MouseEvent) => {
    if (!panMode) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
    e.preventDefault();
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!panMode || !isPanning) return;
    setOffset({
      x: panStart.current.ox + (e.clientX - panStart.current.x),
      y: panStart.current.oy + (e.clientY - panStart.current.y),
    });
  };
  const stopPan = () => setIsPanning(false);

  const onPanTouchStart = (e: React.TouchEvent) => {
    if (!panMode) return;
    const t = e.touches[0];
    setIsPanning(true);
    panStart.current = { x: t.clientX, y: t.clientY, ox: offset.x, oy: offset.y };
  };
  const onPanTouchMove = (e: React.TouchEvent) => {
    if (!panMode || !isPanning) return;
    const t = e.touches[0];
    setOffset({
      x: panStart.current.ox + (t.clientX - panStart.current.x),
      y: panStart.current.oy + (t.clientY - panStart.current.y),
    });
  };

  if (!isOpen) return null;

  const percent = Math.round(zoom * 100);
  const cursor = panMode ? (isPanning ? 'grabbing' : 'grab') : 'default';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-fade-in"
      onTouchStart={(e) => { handleTouchStart(e); onPanTouchStart(e); }}
      onTouchMove={(e) => { handleTouchMove(e); onPanTouchMove(e); }}
      onTouchEnd={() => { handleTouchEnd(); stopPan(); }}
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-20"
        aria-label="Close"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

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

      <div
        ref={containerRef}
        className="flex-1 w-full overflow-hidden flex items-center justify-center p-4"
        style={{ cursor }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopPan}
        onMouseLeave={stopPan}
        onClick={(e) => {
          if (!panMode && e.target === e.currentTarget) onClose();
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
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            pointerEvents: 'none',
          }}
          className="rounded-lg select-none"
          draggable={false}
        />
      </div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
        <button
          onClick={fitScreen}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          aria-label="Fit to screen"
          title="适应屏幕"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => setPanMode((v) => !v)}
          className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors ${panMode ? 'bg-white/25' : 'hover:bg-white/15'}`}
          aria-label="Pan"
          title="抓手 / 拖动"
        >
          <Hand className="w-4 h-4" />
        </button>
        <button
          onClick={zoomIn}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors disabled:opacity-40"
          aria-label="Zoom in"
          title="放大"
          disabled={zoom >= MAX_ZOOM}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={zoomOut}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/15 transition-colors disabled:opacity-40"
          aria-label="Zoom out"
          title="缩小"
          disabled={zoom <= MIN_ZOOM}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={actualSize}
          className="h-9 px-3 rounded-full text-xs font-medium text-white hover:bg-white/15 transition-colors"
          title="实际比例 1:1"
        >
          1:1
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
