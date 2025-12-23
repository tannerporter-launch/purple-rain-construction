import { useMemo } from "react";
import { List, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface MobileTableOfContentsProps {
  content: string;
}

const MobileTableOfContents = ({ content }: MobileTableOfContentsProps) => {
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
    <div className="lg:hidden mb-8">
      <Accordion type="single" collapsible className="bg-card border border-border/50 rounded-lg">
        <AccordionItem value="toc" className="border-none">
          <AccordionTrigger className="px-5 py-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <List className="h-4 w-4 text-primary" />
              <span className="font-semibold text-sm">In This Article</span>
              <span className="text-xs text-muted-foreground">({headings.length} sections)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-4">
            <ul className="space-y-2.5">
              {headings.map(({ id, text, level }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToHeading(id)}
                    className={cn(
                      "text-left text-sm transition-colors w-full truncate hover:text-primary text-muted-foreground",
                      level === 3 && "pl-3 border-l border-border/50"
                    )}
                    title={text}
                  >
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileTableOfContents;