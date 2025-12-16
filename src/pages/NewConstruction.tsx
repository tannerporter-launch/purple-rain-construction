import { Link } from "react-router-dom";
import { Building, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
// Gilchrest A-Frame imports
import gilchrestFrontAfter from "@/assets/remodels/gilchrest-a-frame/3-front-after.jpg";
import gilchrestKitchenAfter from "@/assets/remodels/gilchrest-a-frame/5-kitchen-after.jpg";
import gilchrestStairsAfter from "@/assets/remodels/gilchrest-a-frame/1-stairs-after.jpg";
import gilchrestSideAfter from "@/assets/remodels/gilchrest-a-frame/2-side-exterior-after.jpg";
import gilchrestFrontSymmetrical from "@/assets/remodels/gilchrest-a-frame/front-symmetrical.png";

const NewConstruction = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${gilchrestFrontSymmetrical})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              New Construction in Central Oregon
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Custom home building and additions for homeowners in Sunriver, Bend, and Redmond. Built for Central Oregon's unique climate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=new-construction">Discuss Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
              <a href="tel:541-408-0925">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (541) 408-0925
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Building className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Custom Homes & Additions
              </h2>
              <p className="text-lg text-muted-foreground">
                While our primary focus is on decks and remodeling, we also take on select new construction projects for clients who want the Purple Rain Construction level of quality and communication.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-2xl mb-12">
              <h3 className="text-xl font-semibold mb-4">Our New Construction Services Include:</h3>
              <ul className="space-y-3">
                {[
                  "Custom home building",
                  "Home additions and expansions",
                  "A-Frame renovations and structural remodels",
                  "Accessory dwelling units (ADUs)",
                  "Garages and outbuildings",
                  "Shop and workspace buildings",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-8">
                New construction projects require detailed planning and consultation. Contact us to discuss your vision and we'll determine if we're the right fit for your project.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/contact?service=new-construction">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Gilchrest A-Frame */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Whole-Home Transformation"
            subtitle="Gilchrest A-Frame Remodel – Complete exterior and interior renovation in Central Oregon."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src={gilchrestFrontSymmetrical}
                alt="Gilchrest A-Frame front exterior with cedar siding and black metal roof – completed renovation by Purple Rain Construction"
                className="rounded-2xl shadow-elegant w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Complete A-Frame Transformation</h3>
              <p className="text-muted-foreground mb-6">
                This Gilchrest A-Frame received a full exterior and interior renovation including structural reinforcement, new roofing and siding, custom kitchen build-out, and modernized stairwell + loft redesign.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Black standing seam metal roof",
                  "New cedar siding throughout",
                  "Custom kitchen with live-edge counter",
                  "Modern stairwell with metal railing",
                  "Complete structural reinforcement",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline">
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { src: gilchrestFrontSymmetrical, alt: "Gilchrest A-Frame front exterior symmetrical view" },
              { src: gilchrestFrontAfter, alt: "Completed A-Frame front view with new roof and siding" },
              { src: gilchrestSideAfter, alt: "A-Frame side elevation with cedar siding" },
              { src: gilchrestKitchenAfter, alt: "Modern kitchen with live-edge counter and exposed beams" },
              { src: gilchrestStairsAfter, alt: "Modern stairwell with dark beams and metal railing" },
            ].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="rounded-xl aspect-square object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for Deck or Remodeling Services?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our primary services where we do the majority of our work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/decks">Deck Building</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/remodeling">Remodeling</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewConstruction;
