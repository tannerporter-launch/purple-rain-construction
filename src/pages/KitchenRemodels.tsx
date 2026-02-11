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
import olivieroKitchenFull1 from "@/assets/remodels/oliviero/kitchen-full-view-1.jpg";
import olivieroKitchenFull2 from "@/assets/remodels/oliviero/kitchen-full-view-2.jpg";
import olivieroKitchenStove from "@/assets/remodels/oliviero/kitchen-stove-backsplash.jpg";
import olivieroKitchenAfter from "@/assets/remodels/oliviero/3-kitchen-after.jpg";
import gilchrestKitchenAfter from "@/assets/remodels/gilchrest-a-frame/5-kitchen-after.jpg";
import olivieroBarExteriorFull from "@/assets/remodels/oliviero/bar-window-exterior-full.jpg";
import olivieroKitchenPendant from "@/assets/remodels/oliviero/kitchen-pendant-sink.jpg";

const KitchenRemodels = () => {
  const kitchenFAQs = [
    {
      question: "How long does a kitchen remodel take?",
      answer: "Most kitchen remodels take 4–10 weeks, depending on scope. Simple updates (like countertops and paint) may take 2–3 weeks. Full renovations with layout changes typically take 6–10 weeks. We'll include a clear timeline with your proposal."
    },
    {
      question: "What affects the cost of a kitchen remodel in Central Oregon?",
      answer: "Most kitchen remodels range from $25,000 for smaller updates to $75,000+ for full renovations. Cost depends on cabinetry, countertops, appliances, and whether the layout or utilities change. We provide a detailed estimate before work begins."
    },
    {
      question: "Can I stay in my home during a kitchen remodel?",
      answer: "In many cases, yes. Some homeowners stay in their home during the remodel. We use temporary walls to contain the work area and air scrubbers to reduce dust and odors. For larger projects, we'll help you plan for noise and disruption."
    },
    {
      question: "Do you help with kitchen design?",
      answer: "Yes. We help with layout planning, finish selections, and overall function and flow. For more complex projects, we can coordinate with trusted design partners."
    },
    {
      question: "What countertop materials do you recommend?",
      answer: "We commonly install quartz, granite, butcher block, and solid-surface countertops. Quartz is popular for durability and low maintenance. We'll review options during your consultation."
    },
  ];

  const serviceCards = [
    {
      title: "Custom Kitchen Design",
      description: "Work with our team to design a kitchen that fits your style, storage needs, and everyday workflow.",
      cta: "Start Your Kitchen Design",
    },
    {
      title: "Kitchen Renovations",
      description: "Upgrade outdated spaces with modern finishes, functional layouts, and high-quality materials.",
      cta: "Request a Renovation Quote",
    },
    {
      title: "Full Remodels & Updates",
      description: "From cabinetry and countertops to lighting and flooring, we manage all aspects of your project.",
      cta: "Get a Kitchen Remodel Estimate",
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Left-aligned like Decks page */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${olivieroKitchenPendant})` }} 
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-foreground">
              Central Oregon Kitchen Remodelers You Can Trust
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
              Custom kitchen remodels designed for function, flow, and everyday living in Bend, Redmond, and Sunriver
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Purple Rain Construction is a trusted kitchen remodel contractor serving Bend, Redmond, and Sunriver. From modern updates to full renovations and custom kitchen designs, our team delivers quality craftsmanship, attention to detail, and personalized service on every project.
            </p>
            <div className="flex flex-wrap gap-4">
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
                  Call (541) 408-0925
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Kitchen Remodeling Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Kitchen Remodeling Across Central Oregon
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to completion, we handle every aspect of your kitchen remodel. Our team manages design coordination, material selection, and construction to ensure your kitchen is built for everyday use, long-term durability, and lasting value. Serving Bend, Redmond, and Sunriver, we bring hands-on experience and personalized service to every project.
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

      {/* Kitchen Remodeling Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Kitchen Remodeling Services Across Central Oregon"
            subtitle="Custom design, renovations, and full kitchen remodels tailored to your home"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div 
                key={index} 
                className="bg-background rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact?service=kitchen">
                    {service.cta}
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
            subtitle="Trusted craftsmanship for your kitchen remodel"
          />
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {[
                "Licensed, bonded, and insured (CCB 247140)",
                "Experienced in kitchen remodels across Bend, Redmond, and Sunriver",
                "Family-driven craftsmanship with a focus on quality and detail",
                "Personalized service from design through final installation",
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

      {/* Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-4">
            See the quality and craftsmanship we bring to every kitchen project.
          </p>
          <SectionHeading
            title="Kitchen Project Gallery"
            subtitle="Examples of our kitchen remodeling work in Central Oregon"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: olivieroKitchenFull1, alt: "Full kitchen remodel with modern farmhouse styling", caption: "Full Kitchen Remodel (Mid-Range Custom Build)", description: "Complete kitchen renovation featuring custom cabinetry, patterned backsplash, and modern farmhouse finishes." },
              { src: olivieroBarExteriorFull, alt: "Custom indoor-outdoor bar window feature", caption: "Custom Indoor-Outdoor Feature", description: "Custom fold-out bar window with mountain-scene metal art and black exterior accents — a unique indoor-outdoor connection." },
              { src: olivieroKitchenStove, alt: "Professional range with patterned tile backsplash", caption: "Material & Finish Details", description: "Professional range with patterned tile backsplash and wood-wrapped hood — thoughtful material and finish selections." },
              { src: olivieroKitchenAfter, alt: "Functional kitchen layout with island", caption: "Functional Kitchen Layout Upgrade", description: "Modern kitchen with black island, white cabinets, and patterned backsplash — designed for function and flow." },
            ].map((img, index) => (
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

      {/* Cost & Timeline Section */}
      <section className="py-16 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Kitchen Remodel Cost & Timeline in Central Oregon
            </h2>
            <p className="text-lg text-muted-foreground">
              Kitchen remodels in Central Oregon vary based on scope, finishes, and layout changes. Timelines depend on whether the project is a refresh or a full renovation, as well as permitting and material availability. During your consultation, we'll review budget considerations and provide a clear project timeline tailored to your home.
            </p>
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