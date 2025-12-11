import { Link } from "react-router-dom";
import { Phone, CheckCircle, Home, Bath, ChefHat, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import elkeMain from "@/assets/remodels/elke-french-doors/main.webp";
// Gilchrest A-Frame imports
import gilchrestFrontAfter from "@/assets/remodels/gilchrest-a-frame/3-front-after.jpg";
import gilchrestKitchenAfter from "@/assets/remodels/gilchrest-a-frame/5-kitchen-after.jpg";
import gilchrestStairsAfter from "@/assets/remodels/gilchrest-a-frame/1-stairs-after.jpg";
import gilchrestSideAfter from "@/assets/remodels/gilchrest-a-frame/2-side-exterior-after.jpg";
import gilchrestPatioFinished from "@/assets/remodels/gilchrest-a-frame/front-patio-finished.jpg";
import gilchrestCeilingFan from "@/assets/remodels/gilchrest-a-frame/ceiling-detail-fan.jpg";
import gilchrestDoorInstall from "@/assets/remodels/gilchrest-a-frame/process-door-install-1.jpg";
// Oliviero Remodel imports
import olivieroKitchenAfter from "@/assets/remodels/oliviero/3-kitchen-after.jpg";
import olivieroSideAfter from "@/assets/remodels/oliviero/2-side-after.jpg";
// Oliviero Kitchen Expanded imports
import olivieroKitchenFull1 from "@/assets/remodels/oliviero/kitchen-full-view-1.jpg";
import olivieroBarExteriorFull from "@/assets/remodels/oliviero/bar-window-exterior-full.jpg";
import olivieroKitchenStove from "@/assets/remodels/oliviero/kitchen-stove-backsplash.jpg";

const Remodeling = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${gilchrestFrontAfter})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Home Remodeling in Central Oregon
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Kitchen, bathroom, and whole-home remodels with quality craftsmanship and clear communication for homeowners in Sunriver, Bend, and Redmond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=remodel">Request a Remodeling Estimate</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              >
                <a href="tel:541-408-2712">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 541-408-2712
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Remodeling Services"
            subtitle="From single-room updates to complete home transformations."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ChefHat,
                title: "Kitchen Remodels",
                description: "Transform your kitchen with modern cabinets, countertops, appliances, and layouts. We handle everything from minor updates to complete gut renovations.",
                features: ["Custom cabinetry", "Countertop installation", "Appliance upgrades", "Lighting & electrical", "Flooring"]
              },
              {
                icon: Bath,
                title: "Bathroom Remodels",
                description: "Create spa-like bathrooms with updated fixtures, tile work, vanities, and layouts. We specialize in both primary baths and guest bathroom updates.",
                features: ["Tile showers & floors", "Vanity installation", "Fixture upgrades", "Accessibility features", "Ventilation"]
              },
              {
                icon: Home,
                title: "Whole-Home Renovations",
                description: "Comprehensive remodels that update multiple rooms and systems. Ideal for older homes or vacation properties that need modernization.",
                features: ["Open floor plans", "Multi-room updates", "System upgrades", "Energy efficiency", "Modern finishes"]
              },
              {
                icon: Wrench,
                title: "Small Commercial",
                description: "Light commercial remodeling for offices, retail spaces, and small businesses in Central Oregon. Professional spaces that work for your needs.",
                features: ["Office buildouts", "Retail updates", "ADA compliance", "Commercial flooring", "Space planning"]
              },
            ].map((service, index) => (
              <div key={index} className="bg-muted p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Remodeling Approach
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Remodeling your home is a big decision. We make the process as smooth as possible with clear communication, respectful crews, and attention to detail at every step.
              </p>
              <ul className="space-y-4">
                {[
                  "Detailed scope and timeline before we start",
                  "Real-time updates through our project portal",
                  "Clean, respectful jobsites—we treat your home like our own",
                  "Quality materials and skilled craftsmanship",
                  "Final walkthrough to ensure your complete satisfaction",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={gilchrestKitchenAfter}
                alt="Modern kitchen with live-edge counter and exposed beams – Gilchrest A-Frame Remodel"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Remodeling Process"
            subtitle="From first call to final walkthrough, here's how we work."
          />
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "We visit your home, discuss your vision, and understand your needs and budget." },
              { step: "2", title: "Design & Estimate", desc: "Detailed design options and transparent pricing so you know exactly what to expect." },
              { step: "3", title: "Material Selection", desc: "We help you choose materials, finishes, and fixtures that fit your style." },
              { step: "4", title: "Construction", desc: "Quality construction with regular updates and a clean, respectful jobsite." },
              { step: "5", title: "Final Walkthrough", desc: "We review everything together and address any details before project close." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Recent Remodeling Projects"
            subtitle="See examples of our remodeling work across Central Oregon."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: gilchrestFrontAfter, alt: "Completed A-Frame renovation with black metal roof and cedar siding – Purple Rain Construction" },
              { src: olivieroKitchenFull1, alt: "Modern farmhouse kitchen with shiplap walls, white cabinetry, and patterned backsplash" },
              { src: olivieroBarExteriorFull, alt: "Custom fold-out bar window with mountain-scene metal art and black exterior accents" },
              { src: gilchrestPatioFinished, alt: "Gilchrest A-Frame front view with cedar siding and black metal roof" },
              { src: olivieroKitchenAfter, alt: "Modern kitchen remodel with black island, white cabinets, and patterned backsplash" },
              { src: olivieroSideAfter, alt: "Side exterior view with new back deck and modern cable railing" },
              { src: olivieroKitchenStove, alt: "Professional range with patterned tile backsplash and wood-wrapped hood" },
              { src: gilchrestKitchenAfter, alt: "Modern kitchen with live-edge counter and exposed beams – Gilchrest A-Frame Remodel" },
              { src: gilchrestCeilingFan, alt: "Detailed view of vaulted ceiling and modern fan in completed A-Frame" },
              { src: gilchrestStairsAfter, alt: "Modern stairwell with dark beams and metal railing – Gilchrest A-Frame" },
              { src: gilchrestSideAfter, alt: "A-Frame side exterior with new cedar siding and black standing seam metal roof" },
              { src: elkeMain, alt: "Custom-trimmed blue French doors with clear glass panels and wood casing" },
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
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sunriver Callout */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Remodeling for Sunriver Properties
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Updating a Sunriver vacation home or rental? We understand the unique needs of Sunriver properties and can coordinate work around your rental schedule.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold"
            >
              <Link to="/sunriver-deck-builder">
                View Sunriver Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your remodeling project. We'll help you create a space you'll love for years to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/contact?service=remodel">Schedule a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="tel:541-408-2712">
                <Phone className="mr-2 h-5 w-5" />
                Call 541-408-2712
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Remodeling;
