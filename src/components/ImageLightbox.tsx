import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, Hand } from 'lucide-react';
import { toast } from 'sonner';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const MIN_ZOOM = 0.05;
const MAX_ZOOM = 1;
const ZOOM_STEP = 0.1;

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
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const [zoom, setZoom] = useState(1);
  const [fitZoom, setFitZoom] = useState(1);
  const [panMode, setPanMode] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const panStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // pinch state
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartZoom = useRef(1);
  const activeTouches = useRef(0);

  // 图片加载进度与缓存
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [displaySrc, setDisplaySrc] = useState<string>('');
  const blobCache = useRef<Map<string, string>>(new Map());

  const clamp = (v: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v));

  const recalcFit = () => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container || !img.naturalWidth) return;
    const maxW = container.clientWidth - 16;
    const maxH = container.clientHeight - 16;
    const imgRatio = img.naturalHeight / img.naturalWidth;
    const containerRatio = maxH / maxW;
    // 长图（明显比容器更"高瘦"）：按宽度适配，允许垂直滚动，避免被高度挤压导致模糊
    const isLong = imgRatio > containerRatio * 1.5;
    const ratio = isLong
      ? Math.min(maxW / img.naturalWidth, 1)
      : Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1);
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

  // 带进度的图片加载（XHR）+ 缓存
  useEffect(() => {
    if (!isOpen) return;
    const url = images[currentIndex];
    if (!url) return;
    const cached = blobCache.current.get(url);
    if (cached) {
      setDisplaySrc(cached);
      setLoading(false);
      setProgress(100);
      return;
    }
    setLoading(true);
    setProgress(0);
    setDisplaySrc('');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onprogress = (e) => {
      if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const blobUrl = URL.createObjectURL(xhr.response);
        blobCache.current.set(url, blobUrl);
        setDisplaySrc(blobUrl);
        setProgress(100);
      } else {
        setDisplaySrc(url);
      }
    };
    xhr.onerror = () => setDisplaySrc(url);
    xhr.send();
    return () => xhr.abort();
  }, [currentIndex, isOpen, images]);

  useEffect(() => {
    return () => {
      blobCache.current.forEach((u) => URL.revokeObjectURL(u));
      blobCache.current.clear();
    };
  }, []);

  // ----- Touch gestures: swipe / pinch (pan uses native scroll) -----
  const isZoomed = () => zoom > fitZoom + 0.01;
  const pinchCenter = useRef<{ x: number; y: number } | null>(null);
  const pinchScrollStart = useRef<{ left: number; top: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    activeTouches.current = e.touches.length;
    if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dx = t1.clientX - t2.clientX;
      const dy = t1.clientY - t2.clientY;
      pinchStartDist.current = Math.hypot(dx, dy);
      pinchStartZoom.current = zoom;
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const cx = (t1.clientX + t2.clientX) / 2;
        const cy = (t1.clientY + t2.clientY) / 2;
        pinchCenter.current = { x: cx - rect.left, y: cy - rect.top };
        pinchScrollStart.current = {
          left: container.scrollLeft,
          top: container.scrollTop,
        };
      }
      return;
    }
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchEndX.current = t.clientX;
    touchStartY.current = t.clientY;
    touchEndY.current = t.clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStartDist.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const next = clamp(pinchStartZoom.current * (dist / pinchStartDist.current));
      const container = containerRef.current;
      const start = pinchScrollStart.current;
      const center = pinchCenter.current;
      if (container && start && center) {
        const scale = next / pinchStartZoom.current;
        const newScrollLeft = (start.left + center.x) * scale - center.x;
        const newScrollTop = (start.top + center.y) * scale - center.y;
        setZoom(next);
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.scrollLeft = newScrollLeft;
            containerRef.current.scrollTop = newScrollTop;
          }
        });
      } else {
        setZoom(next);
      }
      e.preventDefault();
      return;
    }
    const t = e.touches[0];
    touchEndX.current = t.clientX;
    touchEndY.current = t.clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (activeTouches.current >= 2) {
      pinchStartDist.current = null;
      pinchCenter.current = null;
      pinchScrollStart.current = null;
      activeTouches.current = e.touches.length;
      return;
    }
    activeTouches.current = e.touches.length;
    if (!isZoomed() && !panMode && images.length > 1) {
      const dx = touchEndX.current - touchStartX.current;
      const dy = touchEndY.current - touchStartY.current;
      // 仅当横向位移明显大于纵向时判定为左右滑动，避免与上下滚动冲突
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
        if (dx < 0) {
          onNext();
          toast(`${currentIndex + 2 > images.length ? 1 : currentIndex + 2} / ${images.length}`, { duration: 1200 });
        } else {
          onPrev();
          toast(`${currentIndex === 0 ? images.length : currentIndex} / ${images.length}`, { duration: 1200 });
        }
      }
    }
  };

  const zoomIn = () => setZoom((z) => clamp(z + ZOOM_STEP));
  const zoomOut = () => setZoom((z) => clamp(z - ZOOM_STEP));
  const actualSize = () => setZoom(1);
  const fitScreen = () => setZoom(clamp(fitZoom));

  // Mouse pan (desktop)
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

  if (!isOpen) return null;

  const percent = Math.round(zoom * 100);
  const cursor = panMode ? (isPanning ? 'grabbing' : 'grab') : 'default';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col animate-fade-in"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        onClick={onClose}
        className="fixed top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-neutral-200/90 hover:bg-neutral-300 active:bg-neutral-400 flex items-center justify-center text-black transition-colors z-20"
        style={{ top: 'max(0.75rem, env(safe-area-inset-top))' }}
        aria-label="Close"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-neutral-200/90 hover:bg-neutral-300 active:bg-neutral-400 flex items-center justify-center text-black transition-colors z-20 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={onNext}
            className="fixed right-2 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-neutral-200/90 hover:bg-neutral-300 active:bg-neutral-400 flex items-center justify-center text-black transition-colors z-20 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </>
      )}

      <div
        ref={containerRef}
        className="flex-1 w-full overflow-auto flex items-start justify-center p-2 md:p-4"
        style={{ cursor, touchAction: 'pan-x pan-y' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopPan}
        onMouseLeave={stopPan}
        onClick={(e) => {
          // 仅当点击发生在容器本身（即图片外的留白区域）且非交互状态时关闭
          if (panMode || isPanning) return;
          if (e.target !== e.currentTarget) return;
          onClose();
        }}
      >
        <img
          ref={imgRef}
          src={images[currentIndex]}
          alt=""
          onLoad={recalcFit}
          loading="eager"
          decoding="sync"
          onClick={(e) => e.stopPropagation()}
          style={{
            width: imgRef.current?.naturalWidth ? `${imgRef.current.naturalWidth * zoom}px` : 'auto',
            height: 'auto',
            maxWidth: 'none',
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            imageRendering: 'auto',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
          }}
          className="rounded-lg select-none flex-shrink-0"
          draggable={false}
        />
      </div>

      {/* Toolbar */}
      <div
        className="fixed left-1/2 -translate-x-1/2 z-20 flex items-center gap-0.5 md:gap-1 px-1.5 py-1 md:px-2 md:py-1.5 rounded-full bg-neutral-200/90 backdrop-blur-md border border-black/10 shadow-lg max-w-[calc(100vw-1rem)]"
        style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        <button
          onClick={fitScreen}
          className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black hover:bg-black/10 active:bg-black/20 transition-colors"
          aria-label="Fit to screen"
          title="适应屏幕"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => setPanMode((v) => !v)}
          className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black transition-colors ${panMode ? 'bg-black/20' : 'hover:bg-black/10 active:bg-black/20'}`}
          aria-label="Pan"
          title="抓手 / 拖动"
        >
          <Hand className="w-4 h-4" />
        </button>
        <button
          onClick={zoomIn}
          className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black hover:bg-black/10 active:bg-black/20 transition-colors disabled:opacity-40"
          aria-label="Zoom in"
          title="放大"
          disabled={zoom >= MAX_ZOOM}
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={zoomOut}
          className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-black hover:bg-black/10 active:bg-black/20 transition-colors disabled:opacity-40"
          aria-label="Zoom out"
          title="缩小"
          disabled={zoom <= MIN_ZOOM}
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={actualSize}
          className="h-8 md:h-9 px-2 md:px-3 rounded-full text-xs font-medium text-black hover:bg-black/10 active:bg-black/20 transition-colors"
          title="实际比例 1:1"
        >
          1:1
        </button>
        <span className="px-1.5 md:px-2 text-[11px] md:text-xs tabular-nums text-black/80 min-w-[3rem] md:min-w-[3.5rem] text-center">
          {percent}%
        </span>
        {images.length > 1 && (
          <span className="px-1.5 md:px-2 text-[11px] md:text-xs tabular-nums text-black/60 border-l border-black/15 ml-0.5 md:ml-1">
            {currentIndex + 1}/{images.length}
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
