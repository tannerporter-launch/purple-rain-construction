import { Link } from "react-router-dom";
import { Phone, CheckCircle, Hammer, TreePine, Shield, Wrench, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceSchema from "@/components/seo/ServiceSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import project1After from "@/assets/decks/project-1-after.jpg";
import project2After from "@/assets/decks/project-2-after.jpg";
import deckTwinLakes from "@/assets/stock/deck-twin-lakes.jpeg";
// New deck project images
import decksHeroHeader from "@/assets/decks/decks-hero-header.jpg";
import upperBalconyRebuild from "@/assets/decks/upper-balcony-rebuild-after.jpg";
import deckSurfaceCableRailing from "@/assets/decks/deck-surface-cable-railing.jpg";
import sunriverDeckRebuild from "@/assets/decks/sunriver-deck-rebuild.jpg";
import deckAdditionHotTub from "@/assets/decks/deck-addition-hot-tub.jpg";
import timbertechEnglishWalnut from "@/assets/decks/timbertech-english-walnut.jpg";
// New downloaded images
import sunriverSectionDeck from "@/assets/decks/sunriver-section-deck.jpg";
import structuralRepairRefresh from "@/assets/decks/structural-repair-refresh.jpg";
import deckRefinishRailing from "@/assets/decks/deck-refinish-railing.jpg";
import sunriverRebuildEngineered from "@/assets/decks/sunriver-rebuild-engineered.jpg";
import deckAdditionAccessibility from "@/assets/decks/deck-addition-accessibility.jpg";

const Decks = () => {
  // Updated FAQs - removed 3 as specified, reordered
  const deckFAQs = [
    {
      question: "What does the average deck cost in Central Oregon?",
      answer: "Most decks in Central Oregon typically range from $18,000 to $45,000, depending on size, materials, height, railing style, and site conditions. Custom, elevated, or multi-level decks can exceed this range—particularly when engineering, complex stairs, specialty railings, or premium materials are involved."
    },
    {
      question: "Why do Sunriver decks cost more?",
      answer: "Sunriver decks often require SROA design approval, engineering for heavy snow loads, and premium materials. Elevated construction and longer approval timelines also contribute to higher overall costs compared to other Central Oregon locations."
    },
    {
      question: "Is composite decking worth the investment?",
      answer: "Yes for many homeowners. Composite decking offers long-term durability, low maintenance, and strong performance in Central Oregon's climate, handling snow, moisture, and seasonal temperature changes better than traditional wood."
    },
    {
      question: "How long does it take to build a deck?",
      answer: "Most decks take several weeks from start to finish, including design coordination, permitting or HOA approval, and construction. Simpler decks move faster, while larger or elevated projects take longer. Sunriver projects typically require additional review time."
    },
    {
      question: "Do I need a permit for my deck?",
      answer: "Most deck projects in Central Oregon require permits, especially for elevated or attached decks. We handle permitting and inspections as part of our service, including coordinating Sunriver's SROA / ARC approval process when required."
    },
    {
      question: "Can you rebuild on my existing deck footprint?",
      answer: "Often yes! Reusing existing footings can save money if they meet current code requirements. We'll assess your current structure during the consultation."
    },
    {
      question: "How do I get started?",
      answer: "Simply request a quote through our website or call us at (541) 408-0925. We'll schedule a consultation to discuss your project, assess your property, and provide a detailed estimate."
    }
  ];

  // Real Google Reviews for Deck Clients
  const deckTestimonials = [
    {
      quote: "With a hot tub arriving early, Purple Rain Construction completed our deck in under a week. The craftsmanship was excellent, and the finished deck turned out even better than we envisioned.",
      name: "David S.",
      source: "Google Review"
    },
    {
      quote: "Purple Rain clearly explained our options, communicated throughout the project, and delivered exactly as promised — on time and with excellent craftsmanship.",
      name: "Patrick B.",
      source: "Google Review"
    }
  ];

  return (
    <Layout>
      <ServiceSchema 
        name="Deck Building & Repairs"
        description="Custom decks built for Central Oregon's climate. New construction, replacements, repairs, and railing upgrades. TrexPro certified for composite decking."
        serviceType="Deck Construction"
        priceRange="$18,000 - $55,000+"
      />
      <FAQSchema faqs={deckFAQs.slice(0, 5)} />
      
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${decksHeroHeader})` }} />
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
              <a href="tel:541-408-0925">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (541) 408-0925
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
                src={project2After}
                alt="Finished composite deck by Purple Rain Construction"
                className="rounded-2xl shadow-elegant timber-accent"
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
                description: "Metal Railing, Cable Railing, or upgrade to glass panels for improved views and durability."
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

      {/* Materials Section - Updated */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Deck Materials: Composite vs. Wood"
            subtitle="We offer both options. Here's how they compare for Central Oregon conditions."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  Recommended
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Composite Decking</h3>
              <p className="text-sm text-muted-foreground mb-4">Recommended for durability, rentals, and low maintenance</p>
              <ul className="space-y-3 mb-6">
                {[
                  "No annual staining or sealing required",
                  "Heavy wear layers — ideal for pets and rental properties",
                  "25–50 year manufacturer warranties (varies by product line)",
                  "Easier snow removal; safe for approved ice-melt products",
                  "Handles moisture, snow, and UV exposure",
                  "Won't crack, warp, or splinter",
                  "Trex® and TimberTech® Pro–Certified install available",
                  "Select PVC decking lines offer Class A fire ratings and stay cooler in summer",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground border-t border-border pt-4">
                Higher upfront cost with significantly lower long-term maintenance
              </p>
            </div>
            <div className="bg-muted p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-2">Wood Decking</h3>
              <p className="text-sm text-muted-foreground mb-4">A traditional option with a natural appearance</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Can have a lower initial material cost depending on species and design",
                  "Cedar and redwood options available",
                  "Can be refinished to refresh or change appearance over time",
                  "Classic look that ages naturally",
                  "Stays noticeably cooler than most composite decking during hot summer months",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground border-t border-border pt-4">
                Requires regular maintenance and more frequent refinishing in Central Oregon climates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sunriver Focus - Updated */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-6 w-6" />
                <span className="font-medium">Sunriver Specialists</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Decks Designed for Sunriver Weather Conditions
              </h2>
              <p className="text-primary-foreground/90 mb-6 font-medium">
                Material choice matters — but in Sunriver, proper design and construction matter even more.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Sunriver decks face unique challenges: heavy snow loads that can exceed 60 lbs per square foot, constant moisture from snow and rain, freeze-thaw cycles that stress materials, and shaded lots that stay damp longer than other areas in Central Oregon.
              </p>
              <p className="text-primary-foreground/90 mb-8">
                We account for these factors in every Sunriver project, designing decks that meet SROA guidelines while prioritizing long-term performance and safety. To learn more about Sunriver-specific requirements, approvals, and construction considerations, visit our <Link to="/sunriver-deck-builder" className="underline hover:text-background transition-colors">Sunriver Deck Builder</Link> page. Whether your deck needs to support a hot tub, outdoor kitchen, or regular rental traffic, our team builds with durability and longevity in mind.
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
                src={sunriverSectionDeck}
                alt="Composite deck built for Sunriver conditions"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Updated for SEO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Deck Pricing Guide</h2>
            <p className="text-xl text-primary font-semibold mb-2">Average Deck Cost in Central Oregon & Sunriver</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent deck pricing to help you plan your project and understand what impacts cost.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Central Oregon Deck Cost</h3>
              <p className="text-4xl font-extrabold text-primary mb-4">$18,000 – $45,000+</p>
              <p className="text-muted-foreground mb-4">
                Typical price range for most deck builds in Bend, Redmond, and surrounding Central Oregon communities.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Typical size: 200–500 sq ft</li>
                <li>• Materials: Composite decking or premium wood options</li>
                <li>• Standard railings included</li>
                <li>• Permitting and inspections handled by our team</li>
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary">
              <h3 className="text-2xl font-bold mb-2">Sunriver Deck Cost</h3>
              <p className="text-4xl font-extrabold text-primary mb-4">$30,000 – $55,000+</p>
              <p className="text-muted-foreground mb-4">
                Higher-spec deck builds designed to meet Sunriver HOA (SROA) and Central Oregon snow-load requirements.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Engineered for heavy snow loads</li>
                <li>• SROA / ARC design review and compliance included</li>
                <li>• Premium composite decking materials</li>
                <li>• Structural support for hot tubs, spas, and outdoor kitchens</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4 max-w-3xl mx-auto">
              Final deck pricing depends on size, materials, height, railing style, engineering requirements, HOA approvals, and site conditions. Every project is custom quoted after a site evaluation.
            </p>
            <Button asChild size="lg" variant="cta">
              <Link to="/contact?service=deck">Request Your Exact Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview - Final photos only with captions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Recent Deck Projects"
            subtitle="See examples of our work across Central Oregon."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { 
                src: upperBalconyRebuild, 
                alt: "Upper balcony deck rebuild in Central Oregon",
                caption: "Upper Balcony Deck Rebuild",
                description: "County-permitted rebuild with accented handrails, integrated into a larger remodel that added an outdoor bar and patio living space below."
              },
              { 
                src: structuralRepairRefresh, 
                alt: "Structural repair and deck refresh in Central Oregon",
                caption: "Structural Repair & Deck Refresh (Price-Conscious Solution)",
                description: "Replaced deteriorated log columns, repaired framing as needed, refinished decking with select board replacement, and installed new handrails."
              },
              { 
                src: deckRefinishRailing, 
                alt: "Deck refinish and railing upgrade in Central Oregon",
                caption: "Deck Refinish & Railing Upgrade",
                description: "Refinished and stained existing deck boards with selective replacements, paired with new modern handrails for a clean, updated look."
              },
              { 
                src: sunriverRebuildEngineered, 
                alt: "Sunriver deck rebuild engineered and permitted",
                caption: "Sunriver Deck Rebuild — Engineered & Permitted",
                description: "Full demolition due to extensive dry rot, followed by an engineered, county- and SROA-approved rebuild. Planned as a phased project to help manage costs over time."
              },
              { 
                src: deckAdditionAccessibility, 
                alt: "Modern home with elevated deck, cable railings, and hot tub in Central Oregon",
                caption: "Deck Addition & Accessibility Upgrade (Budget-Conscious)",
                description: "Small deck addition connected to the existing structure to support a hot tub, with a built-in bench, hose access, and a simple privacy wall. Existing decking was sanded and repainted for a cohesive finish."
              },
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

      {/* NEW: What Our Deck Clients Say - Real Reviews */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Deck Clients Say"
            subtitle="Real feedback from homeowners who trusted us with their deck projects."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deckTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-muted p-8 rounded-2xl border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sunriver-gold text-sunriver-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JobTread Project Transparency */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Clear Deck-Building Timelines and Communication
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Deck projects involve many moving parts—design, materials, permitting, and construction. With our digital project portal, you get a live schedule and updates for every step, so you're never left guessing.
                </p>
                <ul className="space-y-3">
                  {[
                    "See your project timeline",
                    "Approve materials",
                    "Track progress in real-time",
                    "Message our team directly",
                    "View photos & updates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-semibold mb-4">What Happens After You Contact Us?</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Consultation", desc: "We visit your property and discuss your vision" },
                    { step: "2", title: "Estimate", desc: "Detailed pricing with no hidden fees" },
                    { step: "3", title: "Portal Access", desc: "Your project added to our digital portal" },
                    { step: "4", title: "Real-Time Updates", desc: "Timeline, messaging, and photos in one place" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            Ready to Build Your Deck?
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

export default Decks;
