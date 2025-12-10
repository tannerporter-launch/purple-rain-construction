import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  image?: string;
}

const ServiceCard = ({ title, description, href, icon: Icon, image }: ServiceCardProps) => {
  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-elegant transition-all duration-300"
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`${title} services in Central Oregon`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          Learn More <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
