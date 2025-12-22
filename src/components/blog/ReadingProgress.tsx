import { useEffect, useState } from "react";

interface ReadingProgressProps {
  targetRef?: React.RefObject<HTMLElement>;
}

const ReadingProgress = ({ targetRef }: ReadingProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (targetRef?.current) {
        // Calculate progress based on the article element
        const element = targetRef.current;
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementHeight = element.offsetHeight;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Progress starts when article comes into view and ends when we've scrolled past it
        const start = elementTop - windowHeight;
        const end = elementTop + elementHeight;
        const current = scrollTop;
        
        if (current <= start) {
          setProgress(0);
        } else if (current >= end) {
          setProgress(100);
        } else {
          const progressPercent = ((current - start) / (end - start)) * 100;
          setProgress(Math.min(100, Math.max(0, progressPercent)));
        }
      } else {
        // Fallback to full document progress
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setProgress(scrollPercent);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, [targetRef]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-muted/30">
      <div
        className="h-full bg-gradient-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
