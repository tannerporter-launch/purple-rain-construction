import { forwardRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ title, subtitle, centered = true, className = "", light = false }, ref) => {
    return (
      <div ref={ref} className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg max-w-2xl mx-auto ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

export default SectionHeading;
