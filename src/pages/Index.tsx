import { Link } from "react-router-dom";
import { Phone, Shield, Users, Hammer, Snowflake, TreePine, CheckCircle, Star, ArrowRight, FileText, Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TrustBadge from "@/components/ui/TrustBadge";
import Layout from "@/components/layout/Layout";
import project1After from "@/assets/decks/project-1-after.jpg";
import elkeFrenchDoorMain from "@/assets/remodels/elke-french-doors/main.webp";
import gilchrestFrontAfter from "@/assets/remodels/gilchrest-a-frame/3-front-after.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Above the Fold */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${project1After})` }} />
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              Trusted Deck Builders & Remodeling Experts in Central Oregon
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Building high-quality decks and remodels in Sunriver, Bend, and Redmond — backed by craftsmanship, clear communication, and dependable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
              >
                <Link to="/contact">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Request a Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
              >
                <a href="tel:541-408-2712">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Trust Indicators (Row of 3-4 Icons) */}
      <section className="py-8 md:py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <TrustBadge
              icon={Shield}
              title="Licensed • Bonded • Insured"
              description="CCB #247140"
            />
            <TrustBadge
              icon={Users}
              title="Family-Owned & Local"
              description="Central Oregon Based"
            />
            <TrustBadge
              icon={Hammer}
              title="Decks, Remodels & Snow Removal"
              description="Full Service"
            />
            <TrustBadge
              icon={FileText}
              title="Transparent Estimates"
              description="Clear Communication"
            />
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Services"
            subtitle="Quality craftsmanship for every project, from custom decks to complete home remodels."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              title="Deck Building & Repairs"
              description="High-performance decks built for Central Oregon weather."
              href="/decks"
              icon={Hammer}
              image={project1After}
              ctaText="Learn More → Decks"
            />
            <ServiceCard
              title="Remodeling Services"
              description="Kitchen, bath, whole-home, and small commercial renovations."
              href="/remodeling"
              icon={HomeIcon}
              image={elkeFrenchDoorMain}
              ctaText="View Remodeling Services"
            />
            <ServiceCard
              title="Snow Removal (Seasonal)"
              description="Fast, reliable residential + small commercial snow removal."
              href="/snow-removal"
              icon={Snowflake}
              image="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800"
              ctaText="Get On the Schedule"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Purple Rain Construction */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Why Choose Purple Rain Construction?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Purple Rain Construction is built on family, friends, and hands-on experience. Founded by Nicholas and inspired by his father's 30 years as a general contractor, our team brings skill, dedication, and a personal touch to every project.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Quality craftsmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Clear, honest communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Local experience with Sunriver + Central Oregon weather</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={gilchrestFrontAfter}
                alt="Completed A-Frame renovation with black metal roof and cedar siding – Purple Rain Construction"
                className="rounded-2xl shadow-elegant w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Transparency (JobTread) - Positioned right after Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Project Transparency You Can Count On
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              We use a digital project portal to give our customers real-time updates, timelines, material selections, and communication in one place. You always know what's happening with your project—no surprises.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Real-Time Updates", desc: "See progress photos and status changes as they happen" },
                { title: "Clear Timelines", desc: "Know exactly when each phase of your project will complete" },
                { title: "Direct Communication", desc: "Message our team and get quick responses in one place" },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 md:p-6 rounded-xl bg-muted">
                  <h3 className="font-semibold text-base md:text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sunriver Deck Building Highlight Section */}
      <section className="py-16 md:py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={project1After}
                alt="Finished composite deck by Purple Rain Construction"
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-6 w-6" />
                <span className="text-lg font-medium">Sunriver Specialists</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Decks Built for Sunriver Living
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/90 mb-8">
                For homeowners and rental properties in Sunriver, decks are one of the best upgrades you can invest in. We understand the heavy snow loads, freeze-thaw cycles, and HOA design guidelines that make building here different from anywhere else.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold w-full sm:w-auto"
              >
                <Link to="/sunriver-deck-builder">
                  Explore Sunriver Deck Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Don't just take our word for it—see what homeowners say on Google."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                quote: "Purple Rain Construction built our deck in Sunriver and it exceeded all expectations. They handled the HOA process seamlessly and kept us updated every step of the way.",
                name: "Sarah M.",
                location: "Sunriver",
              },
              {
                quote: "Nicholas and his construction crew are first-rate contractors whom I found to be conscientious, reliable, and responsive during the remodeling process of installing an interior French door, duplicating existing trim work, and narrowing a hallway entryway. I highly recommend Purple Rain Construction to anyone who wants to work with diligent and competent folks.",
                name: "Elke H.",
                location: "Central Oregon",
              },
              {
                quote: "Nicholas and his team were professional, punctual, and did exceptional work on our kitchen remodel. The communication through their project portal was a game-changer.",
                name: "David & Linda R.",
                location: "Bend",
              },
              {
                quote: "Best snow removal service we've had in 10 years of owning our Sunriver property. Reliable, thorough, and always on time after a storm.",
                name: "Michael T.",
                location: "Sunriver",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 md:p-8 rounded-2xl shadow-md border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-sunriver-gold text-sunriver-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Google Review</span>
                </div>
                <p className="text-foreground mb-6 italic text-sm md:text-base">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified Contact Strip */}
      <section className="py-16 md:py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether it's a new deck, home remodel, or snow removal service, we're here to help. Request a quote today and let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              <a href="tel:541-408-2712">
                <Phone className="mr-2 h-5 w-5" />
                (541) 408-2712
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
