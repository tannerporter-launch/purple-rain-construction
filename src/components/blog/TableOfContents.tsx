import { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  contentRef: React.RefObject<HTMLElement>;
}

const TableOfContents = ({ content, contentRef }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from markdown content
  const headings = useMemo(() => {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const matches: Heading[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*/g, "").replace(/\*/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .substring(0, 50);
      
      matches.push({ id, text, level });
    }

    return matches;
  }, [content]);

  // Observe headings for intersection
  useEffect(() => {
    if (!contentRef.current || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is visible
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by position on page and take the topmost
          const sortedEntries = visibleEntries.sort((a, b) => {
            const rectA = a.boundingClientRect;
            const rectB = b.boundingClientRect;
            return rectA.top - rectB.top;
          });
          
          const topEntry = sortedEntries[0];
          if (topEntry.target.id) {
            setActiveId(topEntry.target.id);
          }
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    // Wait for DOM to update with IDs, then observe
    const timer = setTimeout(() => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [headings, contentRef]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="bg-card border border-border/50 rounded-lg p-5 sticky top-24 animate-fade-in" style={{ animationDelay: "150ms" }}>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
        <List className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-sm">In This Article</h3>
      </div>
      <ul className="space-y-2.5">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <button
              onClick={() => scrollToHeading(id)}
              className={cn(
                "text-left text-sm transition-all duration-200 w-full truncate hover:text-primary",
                level === 3 && "pl-3 border-l border-border/50",
                activeId === id
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
              title={text}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
