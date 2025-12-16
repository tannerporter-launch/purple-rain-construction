import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Link to="/contact">
        <Button 
          size="lg" 
          className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-lg"
        >
          <FileText className="mr-2 h-5 w-5" />
          Request a Quote
        </Button>
      </Link>
    </div>
  );
};

export default MobileStickyCTA;