import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const MobileStickyCTA = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Link to="/contact">
        <Button 
          size="lg" 
          variant="cta"
          className="w-full btn-glow"
        >
          <FileText className="mr-2 h-5 w-5" />
          Request a Quote
        </Button>
      </Link>
    </div>
  );
});

MobileStickyCTA.displayName = "MobileStickyCTA";

export default MobileStickyCTA;