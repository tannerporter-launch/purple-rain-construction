import { Link } from "react-router-dom";
import { Phone, Shield, Bath, Wrench, CheckCircle, ArrowRight } from "lucide-react";
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

  const serviceCards = [
    {
      title: "Custom Tile Work in Bend",
      description: "Expert tile installation for showers, floors, and accent walls with proper waterproofing for lasting results.",
      image: gilchrestStairsAfter,
    },
    {
      title: "Bathroom Renovation in Redmond",
      description: "Transform outdated bathrooms into spa-like retreats with modern fixtures, vanities, and finishes.",
      image: olivieroLivingRoom,
    },
    {
      title: "Full Remodels & Updates",
      description: "From accessibility upgrades to complete gut renovations, we manage all aspects of your bathroom project.",
      image: gilchrestKitchenAfter,
    },
  ];

  return (
    <Layout>
      {/* Hero Section - More visible background image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${gilchrestFrontAfter})` }} 
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-foreground">
              Bathroom Remodels in Central Oregon
            </h1>
            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
              Spa-like bathrooms designed for comfort and lasting value
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=bathroom">Start Your Bathroom Remodel Today</Link>
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
              Transform your bathroom with Purple Rain Construction, your trusted bathroom remodel contractor in Bend OR. 
              Whether you want a modern update, a full renovation, or accessibility improvements, our team brings experience, 
              attention to detail, and quality craftsmanship to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Width Image Break - After Intro */}
      <section className="relative h-64 md:h-80 lg:h-96">
        <img
          src={olivieroKitchenFull1}
          alt="Modern home remodel with quality craftsmanship"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>

      {/* Expert Bathroom Remodeling Section - Purple Background */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Bathroom Remodeling in Bend, Redmond, and Sunriver
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                As a premier bathroom remodeling company in Bend OR, we specialize in turning your vision into reality. 
                From concept to completion, we handle every detail, ensuring your new bathroom is designed for beauty, 
                comfort, and lasting value. Serving Redmond, Sunriver, and Central Oregon, our team brings experience, 
                skill, and a personal touch to every project.
              </p>
            </div>
            <div>
              <img
                src={gilchrestStairsAfter}
                alt="Modern stairwell remodel showcasing quality craftsmanship in Central Oregon"
                className="rounded-2xl shadow-elegant w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Bathroom Remodel Services - Purple Background with Image */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${olivieroLivingRoom})` }} 
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title="Our Bathroom Remodel Services"
            subtitle="Professional bathroom remodeling services across Central Oregon"
            light
          />
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div 
                key={index} 
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Title ABOVE image */}
                <div className="p-6 pb-4">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                {/* Image in middle */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                {/* Description and CTA at bottom */}
                <div className="p-6 pt-4">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="link" className="p-0 text-primary">
                    <Link to="/contact?service=bathroom">
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
            subtitle="Trusted craftsmanship for your bathroom remodel"
          />
          
          {/* Large Outline Icons Row */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <Shield className="h-16 w-16 md:h-20 md:w-20 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm md:text-base">Licensed & Insured</h3>
            </div>
            <div className="text-center">
              <Bath className="h-16 w-16 md:h-20 md:w-20 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm md:text-base">Bathroom Experts</h3>
            </div>
            <div className="text-center">
              <Wrench className="h-16 w-16 md:h-20 md:w-20 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm md:text-base">Quality Craftsmanship</h3>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {[
                "Licensed, bonded, and insured (CCB 247140)",
                "Expert tile installation and waterproofing",
                "Family-driven craftsmanship with a focus on quality and detail",
                "Coordination with plumbers and electricians",
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

      {/* Full-Width Image Break */}
      <section className="relative h-64 md:h-80 lg:h-96">
        <img
          src={olivieroKitchenSink}
          alt="Beautiful remodel with farmhouse sink and window view"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/30" />
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Bathroom & Remodel Gallery"
            subtitle="See examples of our remodeling work in Central Oregon"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: gilchrestStairsAfter, alt: "Modern stairwell with dark beams and metal railing – Gilchrest A-Frame Remodel" },
              { src: gilchrestFrontAfter, alt: "A-Frame home exterior after complete renovation" },
              { src: gilchrestKitchenAfter, alt: "Modern kitchen with live-edge counter and exposed beams – Gilchrest A-Frame Remodel" },
              { src: olivieroKitchenFull1, alt: "Modern farmhouse kitchen with shiplap walls, white cabinetry, and patterned backsplash" },
              { src: olivieroLivingRoom, alt: "Farmhouse living room with wood stove and rustic charm" },
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
              <Link to="/contact?service=bathroom">Start Your Bathroom Remodel Today</Link>
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