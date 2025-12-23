import { Twitter, Facebook, Linkedin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  url: string;
  title: string;
  excerpt: string;
  variant?: "default" | "hero";
}

const SocialShare = ({ url, title, excerpt, variant = "default" }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, "_blank", "width=600,height=400,noopener,noreferrer");
  };

  const isHero = variant === "hero";

  const buttonBaseClass = cn(
    "h-9 w-9 rounded-full transition-colors",
    isHero 
      ? "bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/40 backdrop-blur-sm" 
      : "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30"
  );

  return (
    <div className={cn("flex", isHero ? "flex-row gap-2" : "flex-col gap-3")}>
      {!isHero && (
        <span className="text-sm font-medium text-muted-foreground">Share this article</span>
      )}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => openShareWindow(shareLinks.twitter)}
          className={cn(buttonBaseClass, !isHero && "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30")}
          title="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => openShareWindow(shareLinks.facebook)}
          className={cn(buttonBaseClass, !isHero && "hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/30")}
          title="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => openShareWindow(shareLinks.linkedin)}
          className={cn(buttonBaseClass, !isHero && "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30")}
          title="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        {typeof navigator !== "undefined" && navigator.share && (
          <Button
            variant="outline"
            size="icon"
            onClick={handleNativeShare}
            className={cn(buttonBaseClass, !isHero && "hover:bg-primary/10 hover:text-primary hover:border-primary/30")}
            title="Share"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SocialShare;
