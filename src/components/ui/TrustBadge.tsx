import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const TrustBadge = forwardRef<HTMLDivElement, TrustBadgeProps>(
  ({ icon: Icon, title, description }, ref) => {
    return (
      <div ref={ref} className="flex flex-col items-center text-center p-4">
        <div className="p-3 rounded-full bg-primary/10 mb-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h4 className="font-semibold text-foreground">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    );
  }
);

TrustBadge.displayName = "TrustBadge";

export default TrustBadge;