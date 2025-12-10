import { Link } from "react-router-dom";
import { Phone, CheckCircle, Hammer, TreePine, Shield, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const Decks = () => {
  const deckFAQs = [
    {
      question: "What does the average deck cost in Central Oregon?",
      answer: "Most decks in Central Oregon range from $18,000 to $45,000 depending on size, materials, height, railing style, and site conditions. The final price depends on your specific design and property requirements."
    },
    {
      question: "Why do Sunriver decks cost more?",
      answer: "Sunriver decks typically range from $30,000 to $55,000 or more due to heavier snow load requirements, specialized framing, premium materials suited for the climate, and HOA/SROA design guidelines that must be followed."
    },
    {
      question: "Is composite decking worth the investment?",
      answer: "For Central Oregon's climate, composite decking is often the better long-term investment. It handles snow, moisture, UV exposure, and freeze-thaw cycles better than wood, requires less maintenance, and is ideal for rental properties where durability matters."
    },
    {
      question: "Can you build decks year-round in Central Oregon?",
      answer: "Yes, we build decks year-round. While spring through fall is ideal, we can work through winter months depending on weather conditions. We'll discuss timing during your consultation."
    },
    {
      question: "How long does it take to build a deck?",
      answer: "Most deck projects take 2-4 weeks from start to finish, depending on size and complexity. Permitting can add 2-4 weeks beforehand. We'll provide a detailed timeline during your estimate."
    },
    {
      question: "Do I need a permit for my deck?",
      answer: "Most deck projects in Central Oregon require permits. We handle all permitting as part of our service, including Sunriver's specific SROA/ARC approval process."
    },
    {
      question: "Can you rebuild on my existing deck footprint?",
      answer: "Often yes! Reusing existing footings can save money if they meet current code requirements. We'll assess your current structure during the consultation."
    },
    {
      question: "Do you offer design help?",
      answer: "Absolutely. We work with you to design a deck that fits your lifestyle, matches your home's style, and meets all local requirements. We can provide 3D renderings for larger projects."
    },
    {
      question: "Are your decks good for rental properties?",
      answer: "Yes, we specialize in decks for vacation rentals in Sunriver. We use durable, low-maintenance materials that can handle high traffic and require minimal upkeep between guests."
    },
    {
      question: "How do I get started?",
      answer: "Simply request a quote through our website or call us at 541-408-2712. We'll schedule a consultation to discuss your project, assess your property, and provide a detailed estimate."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2070')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Central Oregon Deck Builders You Can Trust
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Custom decks built for long winters, snow load, and year-round outdoor living in Sunriver, Bend, and Redmond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=deck">Request a Deck Quote</Link>
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

      {/* Why Our Decks Perform Better */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Our Decks Perform Better
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Central Oregon's climate is tough on outdoor structures. We build decks specifically engineered to handle what this region throws at them.
              </p>
              <ul className="space-y-4">
                {[
                  "Built to handle Central Oregon's freeze-thaw cycles",
                  "High-strength framing and fasteners for heavy snow loads",
                  "Composite decking options as a certified TrexPro builder",
                  "Code-compliant and weather-tested designs",
                  "Premium flashing and waterproofing techniques",
                  "Proper ventilation to prevent moisture damage",
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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
                alt="High-quality composite deck built in Bend, Oregon"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deck Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Deck Services"
            subtitle="From new construction to repairs, we handle every aspect of deck building."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "New Deck Construction",
                description: "Custom-designed decks built to your specifications, from ground-level patios to multi-story structures."
              },
              {
                icon: Wrench,
                title: "Deck Replacement",
                description: "Replace your aging deck with a new, code-compliant structure. We can often reuse existing footings."
              },
              {
                icon: Shield,
                title: "Deck Repairs",
                description: "Fix snow damage, replace rotted boards, repair railings, and address structural issues."
              },
              {
                icon: TreePine,
                title: "Railing Upgrades",
                description: "Add cable railings, glass panels, or upgrade to composite systems for improved views and durability."
              },
              {
                icon: Hammer,
                title: "Second-Story Decks",
                description: "Elevated decks with proper engineering for snow loads and safe access from upper floors."
              },
              {
                icon: Wrench,
                title: "Wrap-Around Decks",
                description: "Maximize your outdoor living space with decks that extend around multiple sides of your home."
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

      {/* Materials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Deck Materials: Composite vs. Wood"
            subtitle="We offer both options, but here's why we often recommend composite for Central Oregon."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Composite Decking</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Handles snow, moisture, and UV exposure",
                  "No annual staining or sealing required",
                  "Won't crack, warp, or splinter",
                  "25+ year manufacturer warranties",
                  "Ideal for rental properties",
                  "TrexPro certified installation",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Higher upfront cost, lower long-term maintenance
              </p>
            </div>
            <div className="bg-muted p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-4">Wood Decking</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Natural aesthetic many homeowners prefer",
                  "Lower initial material cost",
                  "Cedar and redwood options available",
                  "Can be refinished to change appearance",
                  "Traditional look that ages naturally",
                  "Good option for covered areas",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Requires annual maintenance and more frequent repairs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sunriver Focus */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-6 w-6" />
                <span className="font-medium">Sunriver Specialists</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Decks Designed for Sunriver Weather Conditions
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Sunriver decks face unique challenges: heavy snow loads that can exceed 60 lbs per square foot, constant moisture from snow and rain, freeze-thaw cycles that stress materials, and shaded lots that stay damp.
              </p>
              <p className="text-primary-foreground/90 mb-8">
                We design specifically for these conditions, following SROA guidelines while creating beautiful outdoor spaces that last. Whether your deck supports a hot tub, outdoor kitchen, or just needs to handle rental traffic—we build it right.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=deck&location=sunriver">
                  Get a Sunriver Deck Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=800"
                alt="Custom deck with cable railing in Sunriver, Oregon"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Deck Pricing Guide"
            subtitle="Transparent pricing to help you plan your project."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Central Oregon Decks</h3>
              <p className="text-4xl font-extrabold text-primary mb-4">$18,000 – $45,000</p>
              <p className="text-muted-foreground mb-4">
                Typical range for most deck projects in Bend and Redmond.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Size: 200–500 sq ft</li>
                <li>• Materials: Composite or premium wood</li>
                <li>• Standard railings included</li>
                <li>• Permitting handled by us</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary">
              <h3 className="text-2xl font-bold mb-2">Sunriver Decks</h3>
              <p className="text-4xl font-extrabold text-primary mb-4">$30,000 – $55,000+</p>
              <p className="text-muted-foreground mb-4">
                Higher-spec builds for Sunriver's unique requirements.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Heavy snow load engineering</li>
                <li>• SROA/ARC compliance included</li>
                <li>• Premium composite materials</li>
                <li>• Hot tub and outdoor kitchen ready</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Final pricing depends on size, materials, height, railing style, and site conditions.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/contact?service=deck">Request Your Exact Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Recent Deck Projects"
            subtitle="See examples of our work across Central Oregon."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=400",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Deck project ${index + 1} by Purple Rain Construction`}
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

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Deck FAQ"
            subtitle="Common questions about deck building in Central Oregon."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {deckFAQs.map((faq, index) => (
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
            Ready to Talk About Your Deck?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get a detailed estimate for your deck project. We'll discuss design, materials, timeline, and answer all your questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold"
            >
              <Link to="/contact?service=deck">Request a Deck Quote</Link>
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

export default Decks;
