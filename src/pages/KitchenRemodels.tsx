import { Link } from "react-router-dom";
import { Phone, CheckCircle, ChefHat, Lightbulb, Hammer, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import olivieroKitchenFull1 from "@/assets/remodels/oliviero/kitchen-full-view-1.jpg";
import olivieroKitchenStove from "@/assets/remodels/oliviero/kitchen-stove-backsplash.jpg";
import olivieroKitchenAfter from "@/assets/remodels/oliviero/3-kitchen-after.jpg";
import gilchrestKitchenAfter from "@/assets/remodels/gilchrest-a-frame/5-kitchen-after.jpg";
import olivieroKitchenIsland from "@/assets/remodels/oliviero/kitchen-island-view.jpg";
import olivieroKitchenSink from "@/assets/remodels/oliviero/kitchen-farmhouse-sink.jpg";

const KitchenRemodels = () => {
  const kitchenFAQs = [
    {
      question: "How long does a kitchen remodel take?",
      answer: "Most kitchen remodels take 4-8 weeks depending on scope. A simple refresh with new counters and paint may take 2-3 weeks, while a full gut renovation with layout changes typically takes 6-10 weeks. We'll provide a detailed timeline during your consultation."
    },
    {
      question: "What's the average cost of a kitchen remodel in Central Oregon?",
      answer: "Kitchen remodels typically range from $25,000 for minor updates to $75,000+ for full renovations. Factors include cabinet quality, countertop materials, appliance upgrades, and whether you're changing the layout. We provide detailed estimates before work begins."
    },
    {
      question: "Can I stay in my home during a kitchen remodel?",
      answer: "Yes, most homeowners stay in their home during kitchen remodels. We'll set up a temporary kitchen area and work to minimize disruption. For major renovations, we can discuss strategies to keep your daily routine as normal as possible."
    },
    {
      question: "Do you help with kitchen design?",
      answer: "Absolutely. We help you plan your layout, select materials, choose finishes, and coordinate colors. For complex projects, we can recommend design partners who specialize in kitchen planning."
    },
    {
      question: "What countertop materials do you recommend?",
      answer: "We commonly install quartz, granite, butcher block, and solid surface countertops. Quartz is our most popular choice for durability and low maintenance. We'll discuss the pros and cons of each during your consultation."
    },
    {
      question: "Can you work around my rental schedule in Sunriver?",
      answer: "Yes. For vacation rental properties, we coordinate work schedules around your bookings to minimize lost rental income. Our project portal keeps you updated even when you're not on-site."
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${olivieroKitchenFull1})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-6 w-6" />
              <span className="text-lg font-medium">Kitchen Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Kitchen Remodeling in Central Oregon
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Transform your kitchen into a beautiful, functional space with quality craftsmanship and attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=kitchen">Request a Kitchen Estimate</Link>
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

      {/* Why Choose Us for Kitchen Remodels */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Purple Rain for Your Kitchen
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your kitchen is the heart of your home. We bring the same attention to detail and quality craftsmanship to kitchen remodels that we're known for in our deck building.
              </p>
              <ul className="space-y-4">
                {[
                  "Skilled carpenters with cabinet and finish expertise",
                  "Clear communication through our digital project portal",
                  "Coordination with plumbers, electricians, and suppliers",
                  "Clean, respectful jobsites—we treat your home like our own",
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
                src={olivieroKitchenStove}
                alt="Professional range with patterned tile backsplash and wood-wrapped hood"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kitchen Remodeling Services"
            subtitle="From minor updates to complete transformations."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Custom Cabinetry",
                description: "New cabinets, refacing, or modifications to maximize your storage and style."
              },
              {
                icon: Wrench,
                title: "Countertops",
                description: "Quartz, granite, butcher block, and solid surface installation with precise fitting."
              },
              {
                icon: Lightbulb,
                title: "Lighting & Electrical",
                description: "Under-cabinet lighting, pendant fixtures, and updated electrical for modern appliances."
              },
              {
                icon: ChefHat,
                title: "Appliance Installation",
                description: "Coordination and installation of ranges, refrigerators, dishwashers, and built-ins."
              },
              {
                icon: Hammer,
                title: "Layout Changes",
                description: "Open up walls, add islands, or reconfigure your kitchen for better flow."
              },
              {
                icon: Wrench,
                title: "Flooring & Backsplash",
                description: "Tile, hardwood, and LVP flooring plus custom tile backsplash installation."
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
            title="Our Kitchen Remodel Process"
            subtitle="From first call to final walkthrough, here's how we work."
          />
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "We discuss your vision, assess your space, and understand your needs." },
              { step: "2", title: "Design & Estimate", desc: "Detailed design options and transparent pricing for your project." },
              { step: "3", title: "Material Selection", desc: "We help you choose cabinets, counters, fixtures, and finishes." },
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

      {/* Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kitchen Project Gallery"
            subtitle="See examples of our kitchen remodeling work."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: olivieroKitchenFull1, alt: "Modern farmhouse kitchen with shiplap walls, white cabinetry, and patterned backsplash" },
              { src: olivieroKitchenAfter, alt: "Modern kitchen remodel with black island, white cabinets, and patterned backsplash" },
              { src: gilchrestKitchenAfter, alt: "Modern kitchen with live-edge counter and exposed beams – Gilchrest A-Frame Remodel" },
              { src: olivieroKitchenStove, alt: "Professional range with patterned tile backsplash and wood-wrapped hood" },
              { src: olivieroKitchenIsland, alt: "Kitchen island view with modern farmhouse styling" },
              { src: olivieroKitchenSink, alt: "Farmhouse sink with window view in modern kitchen" },
            ].map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className="rounded-xl aspect-video object-cover hover:scale-105 transition-transform duration-300"
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

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kitchen Remodel FAQ"
            subtitle="Common questions about kitchen remodeling."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {kitchenFAQs.map((faq, index) => (
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
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your kitchen project. We'll help you create a space that's beautiful, functional, and built to last.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold"
            >
              <Link to="/contact?service=kitchen">Schedule a Consultation</Link>
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
      </section>
    </Layout>
  );
};

export default KitchenRemodels;
