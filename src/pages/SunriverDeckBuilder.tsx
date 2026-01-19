import { Link } from "react-router-dom";
import { Phone, CheckCircle, TreePine, Shield, Hammer, Wrench, Home, Snowflake, Users, Star, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadge from "@/components/ui/TrustBadge";
import project2After from "@/assets/decks/project-2-after.jpg";
import olivieroKitchenFull1 from "@/assets/remodels/oliviero/kitchen-full-view-1.jpg";
import sunriverDrivewayClear from "@/assets/snow-removal/sunriver-driveway-cleared.jpg";
import sunriverDeckRebuild from "@/assets/decks/sunriver-deck-rebuild.jpg";
import sunriverHeroHeader from "@/assets/decks/sunriver-hero-header.jpg";
import sunriverSection2 from "@/assets/decks/sunriver-section-2.jpg";
const SunriverDeckBuilder = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${sunriverHeroHeader})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="h-6 w-6" />
              <span className="text-lg font-medium">Sunriver Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Sunriver Deck Builder & Construction Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              High snow load decks, remodels, and seasonal snow removal for Sunriver homes, vacation rentals, and property managers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=deck&location=sunriver">Request a Sunriver Quote</Link>
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

      {/* Trust Indicators */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TrustBadge icon={Shield} title="Licensed & Insured" description="CCB #247140" />
            <TrustBadge icon={Hammer} title="Trex Pro Builder" description="Certified" />
            <TrustBadge icon={Star} title="TimberTech Pro" description="Certified" />
            <TrustBadge icon={TreePine} title="SROA Compliance" description="Approval Experienced" />
          </div>
        </div>
      </section>

      {/* Why Sunriver Needs Specialized Construction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 sunriver-gold-underline inline-block">
                Why Sunriver Needs Specialized Deck Construction
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Building in Sunriver isn't like building anywhere else. The unique combination of heavy snow loads, freeze-thaw cycles, and strict design guidelines requires contractors who understand the specific challenges.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Engineering to accommodate Heavy Snow loads",
                  "Constant freeze-thaw cycles that stress materials",
                  "Shaded areas that stay damp and prone to moisture damage",
                  "SROA design guidelines and approval process",
                  "Deschutes County (Structural) Permitting",
                  "High rental traffic that demands durable construction",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                We've built dozens of decks in Sunriver and understand exactly what it takes to create outdoor spaces that last.
              </p>
            </div>
            <div>
              <img
                src={sunriverSection2}
                alt="Sunriver cabin with elevated deck among tall pines"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deck Services for Sunriver */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Deck Services for Sunriver"
            subtitle="Every deck we build is engineered for Sunriver's specific conditions."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "New Deck Builds",
                description: "Custom decks designed for snow loads, SROA compliance, and year-round outdoor living. From concept to final inspection.",
                features: ["Snow load engineering", "SROA approval handling", "Composite & wood options"]
              },
              {
                icon: Wrench,
                title: "Deck Replacement",
                description: "Replace your aging deck with a modern, code-compliant structure. We often can reuse existing footings to save costs.",
                features: ["Structural assessment", "Material upgrades", "Minimal disruption"]
              },
              {
                icon: Shield,
                title: "Deck Repairs",
                description: "Fix snow damage, rotted boards, failing railings, and structural issues. We handle repairs of any size.",
                features: ["Storm damage repair", "Board replacement", "Railing upgrades"]
              },
            ].map((service, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl border border-border">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
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

      {/* Perfect for Remote Owners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 sunriver-gold-underline inline-block">
                Perfect for Sunriver Homeowners & Vacation Rentals
              </h2>
              <p className="text-lg text-muted-foreground">
                For many Sunriver clients, we manage projects while they're out of town. Our digital project portal lets you monitor the entire process remotely—timelines, approvals, photos, and messaging all in one place.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Remote Project Management", desc: "Manage your project from anywhere with online updates and approvals" },
                { title: "SROA Handling", desc: "We navigate SROA approvals so you don't have to" },
                { title: "Property Manager Coordination", desc: "We work directly with your property manager on scheduling" },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-muted rounded-xl">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-muted p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-center">Your Project Updates—One Click Away</h3>
              <p className="text-muted-foreground text-center mb-6">
                Out-of-town? Managing a vacation rental? No problem—your project updates are always accessible.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "See your project timeline",
                  "Approve materials remotely",
                  "Track progress with photos",
                  "Message our team directly",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling for Sunriver */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={olivieroKitchenFull1}
                alt="Modern kitchen remodel in Sunriver vacation home"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <Home className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Remodeling Services for Sunriver
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Updating your Sunriver home? We handle kitchen and bathroom remodels, vacation rental upgrades, and whole-home renovations with the same attention to quality and communication.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Kitchen & bathroom updates",
                  "Vacation rental refreshes",
                  "Modern finishes and fixtures",
                  "Energy-efficient upgrades",
                  "Work scheduled around rental bookings",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="cta">
                <Link to="/remodeling">
                  View Remodeling Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Snow Removal Callout */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Snowflake className="h-10 w-10 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sunriver Snow Removal Services
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Keep your Sunriver property accessible all winter. Our route-based snow removal service covers driveways, walkways, and decks with reliable, timely clearing.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Concentrated routes for faster response",
                  "Automatic dispatch at 1\" or 2\" accumulation",
                  "Deck clearing to protect your investment",
                  "Property manager coordination available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle className="h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/snow-removal">
                  Learn About Snow Removal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img
                src={sunriverDrivewayClear}
                alt="Snow removal services in Sunriver, Oregon"
                className="rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Sunriver Project Process"
            subtitle="From first call to final walkthrough, here's how we work."
          />
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Consultation", desc: "We discuss your vision, assess your property, and understand your needs." },
              { step: "2", title: "Design & Engineering", desc: "We create a detailed design tailored to your home and any Sunriver or HOA requirements. When needed, we coordinate with a trusted local engineering partner to ensure code compliance." },
              { step: "3", title: "HOA & Permits", desc: "We manage SROA approvals and submit required plans and documents to Deschutes County for permitting." },
              { step: "4", title: "Construction", desc: "Quality construction with regular updates to scheduling, change orders and daily logs through our project portal." },
              { step: "5", title: "Final Walk Through", desc: "We walk the job together to ensure all work has been completed and you are highly satisfied with the project." },
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

      {/* SROA Approval Callout */}
      <section className="py-16 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="p-4 rounded-2xl bg-primary/10">
                <FileText className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Need Help with SROA Approval?</h3>
              <p className="text-muted-foreground mb-4">
                We handle the entire SROA submission process—Form E, compliant renderings, Design Committee coordination, and final inspections. Learn about our flat-fee SROA design & approval services.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button asChild size="lg" variant="cta">
                <Link to="/sunriver-sroa-services">
                  SROA Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Sunriver Homeowners Say"
            subtitle="Real feedback from property owners in Sunriver."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "As a part-time resident, it was critical to find a contractor we could trust while we weren't in town. Purple Rain went above and beyond — delivering quality work, staying on budget, and providing outstanding communication with daily updates and photos. We highly recommend them.",
                name: "D K",
                type: "Google Review"
              },
              {
                quote: "Purple Rain Construction completed a full home remodel and exterior deck while we were living out of state. The workmanship was excellent, communication was outstanding, and the project stayed on schedule and within budget. We recommend them without reservation.",
                name: "Arthur D.",
                type: "Google Review"
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sunriver-gold text-sunriver-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Sunriver Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you need a new deck, home remodel, or reliable snow removal, we're Sunriver's trusted construction partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold"
            >
              <Link to="/contact?location=sunriver">Request a Sunriver Quote</Link>
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

export default SunriverDeckBuilder;
