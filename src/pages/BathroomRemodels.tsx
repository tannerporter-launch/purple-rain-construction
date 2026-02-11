import { Link } from "react-router-dom";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import gilchrestStairsAfter from "@/assets/remodels/gilchrest-a-frame/1-stairs-after.jpg";
import gilchrestFrontAfter from "@/assets/remodels/gilchrest-a-frame/3-front-after.jpg";
import gilchrestKitchenAfter from "@/assets/remodels/gilchrest-a-frame/5-kitchen-after.jpg";
import olivieroKitchenFull1 from "@/assets/remodels/oliviero/kitchen-full-view-1.jpg";
import olivieroKitchenSink from "@/assets/remodels/oliviero/kitchen-farmhouse-sink.jpg";
import olivieroLivingRoom from "@/assets/remodels/oliviero/living-room-farmhouse.jpg";
// New bathroom images
import walkInShower from "@/assets/remodels/bathroom/walk-in-shower.jpg";
import patternedTileShower from "@/assets/remodels/bathroom/patterned-tile-shower.jpg";
import doubleVanity from "@/assets/remodels/bathroom/double-vanity.jpg";
import freestandingTub from "@/assets/remodels/bathroom/freestanding-tub.jpg";

const BathroomRemodels = () => {
  const bathroomFAQs = [
    {
      question: "How long does a bathroom remodel take?",
      answer: "Most bathroom remodels take 2–4 weeks once construction begins, depending on scope. A simple update with new fixtures and paint may take 1–2 weeks, while a full renovation with tile work or layout changes typically takes 3–5 weeks. We provide a detailed project timeline during your consultation, including inspections and material scheduling."
    },
    {
      question: "What's the average cost of a bathroom remodel?",
      answer: "Bathroom remodels in Central Oregon typically range from $15,000 for basic updates to $45,000+ for full renovations. Costs vary based on tile selection, fixture quality, vanity choices, waterproofing requirements, and whether layout changes are involved. We provide detailed, transparent estimates before work begins."
    },
    {
      question: "Can you make my bathroom more accessible?",
      answer: "Yes. We specialize in accessibility upgrades such as grab bars, walk-in or curbless showers, comfort-height toilets, and wider clearances. We'll help you plan a bathroom that supports aging in place, mobility needs, and long-term comfort."
    },
    {
      question: "Do you handle all the plumbing work?",
      answer: "We coordinate all plumbing through licensed professionals. As a general contractor, we oversee and coordinate all trades—including plumbing, electrical, tile, and finish work—to ensure quality, scheduling, and code compliance throughout the project."
    },
    {
      question: "What tile options do you recommend?",
      answer: "We commonly work with ceramic, porcelain, and natural stone tile. Porcelain is our most popular option due to its durability and water resistance. We'll review material options, maintenance considerations, and waterproofing requirements during your consultation."
    },
    {
      question: "Can I use my bathroom during the remodel?",
      answer: "If your home has multiple bathrooms, you'll typically have access to another bathroom during the project. For single-bathroom homes, there will be periods when the space is unavailable. We plan the work carefully to minimize downtime and discuss logistics during the planning phase."
    },
  ];

  const serviceCards = [
    {
      title: "Full Bathroom Remodels",
      description: "Complete remodels including layout changes, vanities, lighting, fixtures, and finishes—managed from demolition through final inspection.",
      features: ["Layout changes & reconfiguration", "Fixture, lighting, and finish upgrades", "Primary and guest bathrooms"],
    },
    {
      title: "Walk-In Showers & Tub-to-Shower Conversions",
      description: "Walk-in showers and tub-to-shower conversions designed for improved accessibility, comfort, and everyday usability.",
      features: ["Curbless & low-threshold showers", "Tub removal & shower conversions", "Waterproofing & ventilation upgrades"],
    },
    {
      title: "Vanities, Storage & Bathroom Upgrades",
      description: "Custom vanities, storage solutions, and targeted bathroom upgrades that improve function, efficiency, and long-term comfort.",
      features: ["Custom vanities & storage", "Water-saving fixtures & eco-friendly upgrades", "Accessibility modifications"],
    },
  ];

  // Gallery images with captions - actual bathroom photos
  const galleryImages = [
    { src: walkInShower, alt: "Full bathroom remodel with custom walk-in shower", caption: "Full Bathroom Remodel - Walk-In Shower", description: "Complete bathroom demolition and remodel featuring a custom walk-in shower, full-height tile installation, and modern fixtures." },
    { src: patternedTileShower, alt: "Custom tile shower with patterned accent tile", caption: "Patterned Tile Shower", description: "Custom tile shower featuring patterned accent tile and professional waterproofing systems." },
    { src: doubleVanity, alt: "Double vanity bathroom remodel with quartz countertop", caption: "Double Vanity Bathroom Remodel", description: "Double vanity bathroom remodel with custom storage, quartz countertop, and modern plumbing fixtures." },
    { src: freestandingTub, alt: "Full bathroom remodel with freestanding tub", caption: "Full Bathroom Remodel", description: "Full bathroom remodel featuring a freestanding tub with wall-mounted shower, custom vanity, patterned tile flooring, and modern fixtures." },
  ];

  return (
    <Layout>
      {/* Hero Section - Left-aligned like Decks page */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${walkInShower})` }} 
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-foreground">
              Bathroom Remodels in Central Oregon
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
              Spa-like bathroom remodels built for everyday comfort and lasting performance
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=bathroom">Request a Bathroom Remodel Quote</Link>
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

      {/* Expert Bathroom Remodeling Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Bathroom Remodeling in Bend, Redmond, and Sunriver
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a premier bathroom remodeling company in Bend OR, we specialize in turning your vision into reality. 
                From concept to completion, we handle every detail, ensuring your new bathroom is designed for beauty, 
                comfort, and lasting value. Serving Redmond, Sunriver, and Central Oregon, our team brings experience, 
                skill, and a personal touch to every project.
              </p>
            </div>
            <div>
              <img
                src={doubleVanity}
                alt="Double vanity bathroom remodel showcasing quality craftsmanship in Central Oregon"
                className="rounded-2xl shadow-elegant w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Remodel Services - Text-based cards without images */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Bathroom Remodel Services"
            subtitle="Professional bathroom remodeling services across Central Oregon"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div 
                key={index} 
                className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact?service=bathroom">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Purple Rain Construction - Checkmarks Only */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Purple Rain Construction?"
            subtitle="Trusted craftsmanship for your bathroom remodel"
          />
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {[
                "Licensed, bonded, and insured (CCB 247140)",
                "Proven waterproofing standards and quality oversight",
                "Family-driven craftsmanship with a focus on quality and detail",
                "Coordination with trusted plumbing and electrical trade partners",
                "Clean, respectful jobsites—we protect your home",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery with Captions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Bathroom Remodel Gallery"
            subtitle="Quality craftsmanship in Central Oregon"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden border border-border">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{img.caption}</h3>
                  <p className="text-sm text-muted-foreground">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Bathroom Remodel FAQ"
            subtitle="Common questions about bathroom remodeling"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {bathroomFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started on Your Bathroom Remodel Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
            Ready to transform your bathroom? Contact Purple Rain Construction, your trusted bathroom remodel contractor 
            in Bend OR, to schedule a consultation. Let us bring your dream bathroom to life with quality craftsmanship 
            tailored specifically for you and your home in Central Oregon.
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Call us at <a href="tel:541-408-0925" className="underline font-semibold">(541) 408-0925</a> or 
            email <a href="mailto:admin@purpleraincs.com" className="underline font-semibold">admin@purpleraincs.com</a> to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold"
            >
              <Link to="/contact?service=bathroom">Request a Bathroom Remodel Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              <a href="tel:541-408-0925">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BathroomRemodels;