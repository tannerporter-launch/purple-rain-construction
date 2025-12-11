import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageLightbox = ({ images, initialIndex, isOpen, onClose }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Update current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, currentIndex]);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [images.length, isAnimating]);

  const goToPrevious = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 300);
  }, [images.length, isAnimating]);

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 animate-fade-in" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-4 z-50 text-white/80 text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-2 md:left-4 z-50 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-2 md:right-4 z-50 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Image container with swipe support */}
      <div
        className="relative w-full h-full flex items-center justify-center px-12 md:px-20 py-16"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className={cn(
            "max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300",
            isAnimating ? "opacity-0" : "opacity-100"
          )}
        />
      </div>

      {/* Image title */}
      {currentImage.title && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 text-white text-center bg-black/60 px-4 py-2 rounded-lg max-w-md">
          <p className="text-sm md:text-base font-medium">{currentImage.title}</p>
        </div>
      )}
    </div>
  );
};

export default ImageLightbox;
