import { Link } from "react-router-dom";
import { Phone, Shield, ChefHat, Wrench, Users, CheckCircle, ArrowRight } from "lucide-react";
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
import olivieroKitchenFull2 from "@/assets/remodels/oliviero/kitchen-full-view-2.jpg";
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

  const serviceCards = [
    {
      title: "Custom Kitchen Design in Bend",
      description: "Collaborate with our experts to create a kitchen that fits your style, storage needs, and workflow.",
      image: olivieroKitchenIsland,
    },
    {
      title: "Kitchen Renovation in Redmond",
      description: "Upgrade outdated spaces with modern finishes, functional layouts, and high-quality materials.",
      image: gilchrestKitchenAfter,
    },
    {
      title: "Full Remodels & Updates",
      description: "From cabinetry and countertops to lighting and flooring, we manage all aspects of your project.",
      image: olivieroKitchenStove,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25" 
          style={{ backgroundImage: `url(${olivieroKitchenFull1})` }} 
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Kitchen Remodels in Central Oregon
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
              Functional, beautiful kitchens designed for your lifestyle
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=kitchen">Start Your Kitchen Remodel Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section - Purple Background */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl leading-relaxed">
              Upgrade your kitchen with Purple Rain Construction, your trusted kitchen remodel contractor in Bend OR. 
              Whether you want a modern update, a full renovation, or a custom kitchen design, our team brings experience, 
              attention to detail, and quality craftsmanship to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Kitchen Remodeling Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Kitchen Remodeling in Bend, Redmond, and Sunriver
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a premier kitchen remodeling company in Bend OR, we specialize in turning your vision into reality. 
                From concept to completion, we handle every detail, ensuring your new kitchen is designed for beauty, 
                comfort, and lasting value. Serving Redmond, Sunriver, and Central Oregon, our team brings experience, 
                skill, and a personal touch to every project.
              </p>
            </div>
            <div>
              <img
                src={olivieroKitchenFull2}
                alt="Modern kitchen remodel in Central Oregon with white cabinets and farmhouse sink"
                className="rounded-2xl shadow-elegant w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Kitchen Remodel Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Kitchen Remodel Services"
            subtitle="Professional kitchen remodeling services across Central Oregon"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div 
                key={index} 
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link to="/contact?service=kitchen">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Purple Rain Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose Purple Rain Construction?"
            subtitle="Trusted craftsmanship for your kitchen remodel"
          />
          
          {/* Icon Row */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">Licensed & Insured</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">Kitchen Experience</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base">Quality Craftsmanship</h3>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {[
                "Licensed, bonded, and insured (CCB 247140)",
                "Experienced in kitchens across Bend, Redmond, and Sunriver",
                "Family-driven craftsmanship with a focus on quality and detail",
                "Personalized service from design to final installation",
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

      {/* Full-Width Image Break */}
      <section className="relative h-64 md:h-80 lg:h-96">
        <img
          src={olivieroKitchenAfter}
          alt="Beautiful kitchen remodel with modern island and pendant lighting"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/30" />
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kitchen Project Gallery"
            subtitle="See examples of our kitchen remodeling work in Central Oregon"
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
            subtitle="Common questions about kitchen remodeling"
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

      {/* Get Started CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Started on Your Kitchen Remodel Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
            Ready to upgrade your kitchen? Contact Purple Rain Construction, your trusted kitchen remodel contractor 
            in Bend OR, to schedule a consultation. Let us bring your dream kitchen to life with a custom kitchen 
            design tailored specifically for you and your home in Central Oregon.
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
              <Link to="/contact?service=kitchen">Start Your Kitchen Remodel Today</Link>
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

export default KitchenRemodels;
