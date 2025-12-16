import { Link } from "react-router-dom";
import { Phone, CheckCircle, Bath, Droplets, Hammer, Wrench, Accessibility } from "lucide-react";
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

const BathroomRemodels = () => {
  const bathroomFAQs = [
    {
      question: "How long does a bathroom remodel take?",
      answer: "Most bathroom remodels take 2-4 weeks depending on scope. A simple update with new fixtures and paint may take 1-2 weeks, while a full renovation with tile work and layout changes typically takes 3-5 weeks. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "What's the average cost of a bathroom remodel?",
      answer: "Bathroom remodels in Central Oregon typically range from $15,000 for basic updates to $45,000+ for full renovations. Factors include tile work, fixture quality, vanity selection, and whether you're changing the layout. We provide detailed estimates before work begins."
    },
    {
      question: "Can you make my bathroom more accessible?",
      answer: "Yes, we specialize in accessibility features including grab bars, walk-in showers, comfort-height toilets, and wider doorways. We can help you plan a bathroom that works for aging in place or current mobility needs."
    },
    {
      question: "Do you handle all the plumbing work?",
      answer: "We coordinate all plumbing through licensed professionals. Our team handles the carpentry, tile work, and finish installation while ensuring seamless coordination with plumbing and electrical trades."
    },
    {
      question: "What tile options do you recommend?",
      answer: "We commonly install ceramic, porcelain, and natural stone tile. Porcelain is our most popular choice for durability and water resistance. We'll discuss the pros and cons of each during your consultation."
    },
    {
      question: "Can I use my bathroom during the remodel?",
      answer: "For homes with multiple bathrooms, you'll typically have access to another bathroom during the project. For single-bathroom homes, we work efficiently to minimize downtime and can discuss strategies during planning."
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${gilchrestFrontAfter})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Bath className="h-6 w-6" />
              <span className="text-lg font-medium">Bathroom Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Bathroom Remodeling in Central Oregon
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Create spa-like bathrooms with updated fixtures, beautiful tile work, and quality craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=bathroom">Request a Bathroom Estimate</Link>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Purple Rain for Your Bathroom
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bathrooms require precision—waterproofing, tile work, and fixture installation all need to be done right. We bring skilled craftsmanship and attention to detail to every bathroom project.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert tile installation and waterproofing",
                  "Clear communication through our digital project portal",
                  "Coordination with plumbers and electricians",
                  "Clean, respectful jobsites—we protect your home",
                  "Quality materials and lasting results",
                  "Licensed, bonded, and insured (CCB #247140)",
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
                src={gilchrestStairsAfter}
                alt="Modern stairwell with dark beams and metal railing – Gilchrest A-Frame"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Bathroom Remodeling Services"
            subtitle="From simple updates to complete spa-like transformations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Tile Showers & Floors",
                description: "Custom tile work with proper waterproofing for showers, floors, and accent walls."
              },
              {
                icon: Bath,
                title: "Vanity Installation",
                description: "Single and double vanities with countertops, sinks, and storage solutions."
              },
              {
                icon: Wrench,
                title: "Fixture Upgrades",
                description: "Modern faucets, showerheads, toilets, and hardware installation."
              },
              {
                icon: Accessibility,
                title: "Accessibility Features",
                description: "Grab bars, walk-in showers, comfort-height toilets, and aging-in-place modifications."
              },
              {
                icon: Hammer,
                title: "Layout Changes",
                description: "Reconfigure your bathroom for better flow, more storage, or expanded shower space."
              },
              {
                icon: Droplets,
                title: "Ventilation",
                description: "Proper exhaust fans and ventilation to prevent moisture damage and mold."
              },
            ].map((service, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl border border-border">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Bathroom Remodel Process"
            subtitle="From first call to final walkthrough, here's how we work."
          />
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "We discuss your vision, assess your space, and understand your needs." },
              { step: "2", title: "Design & Estimate", desc: "Detailed design options and transparent pricing for your project." },
              { step: "3", title: "Material Selection", desc: "We help you choose tile, fixtures, vanities, and finishes." },
              { step: "4", title: "Construction", desc: "Quality work with regular updates through our project portal." },
              { step: "5", title: "Final Walkthrough", desc: "We review everything together and ensure your complete satisfaction." },
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

      {/* Bathroom Types */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Bathrooms We Remodel"
            subtitle="Every bathroom has different needs—we handle them all."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Primary Bathrooms",
                description: "Create a spa-like retreat with dual vanities, walk-in showers, and soaking tubs."
              },
              {
                title: "Guest Bathrooms",
                description: "Stylish, functional bathrooms that impress visitors and add value."
              },
              {
                title: "Powder Rooms",
                description: "Make a statement with bold design choices in your half bath."
              },
              {
                title: "Accessible Bathrooms",
                description: "Safe, comfortable bathrooms designed for aging in place or mobility needs."
              },
            ].map((type, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Bathroom Remodel FAQ"
            subtitle="Common questions about bathroom remodeling."
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your bathroom project. We'll help you create a space that's beautiful, functional, and built to last.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold"
            >
              <Link to="/contact?service=bathroom">Schedule a Consultation</Link>
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
      </section>
    </Layout>
  );
};

export default BathroomRemodels;
