import { forwardRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ title, subtitle, centered = true, className = "" }, ref) => {
    return (
      <div ref={ref} className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
