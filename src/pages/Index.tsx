import { Link } from "react-router-dom";
import { Phone, Shield, Users, Hammer, Snowflake, TreePine, CheckCircle, Star, ArrowRight, FileText, Home as HomeIcon, MessageSquare, Calendar, Camera, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TrustBadge from "@/components/ui/TrustBadge";
import Layout from "@/components/layout/Layout";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import homepageHero from "@/assets/homepage-hero-old-mill.jpeg";
import iconMonogramGradient from "@/assets/brand/icons/icon-monogram-gradient.png";
import teamNicholasEd from "@/assets/brand/team-nicholas-ed.png";
import heroPlowDawn from "@/assets/snow-removal/hero-plow-dawn.jpg";
import deckStockPhoto from "@/assets/stock/deck-new-hero.jpg";
import remodelExterior from "@/assets/stock/remodel-exterior-new.jpg";
import sunriverSection5 from "@/assets/decks/sunriver-section-5.jpg";
// JobTread portal images
import jobtreadCommunications from "@/assets/jobtread/communications-new.png";
import jobtreadDailyLogs from "@/assets/jobtread/daily-logs-new.png";
import jobtreadScheduling from "@/assets/jobtread/scheduling-new.png";
import jobtreadProgressPhotos from "@/assets/jobtread/progress-photos-new.png";

const Index = () => {
  // Real Google Reviews only
  const testimonials = [
    {
      quote: "The quality of the work, on time performance, meeting the budget, and communication skills were outstanding.",
      name: "Arthur Diamond",
      location: "Google Review",
    },
    {
      quote: "Their communication during the project was outstanding. We received daily recaps and pictures.",
      name: "D K",
      location: "Google Review",
    },
    {
      quote: "Projects always came in within budget, were completed on time, and the worksite was spotless.",
      name: "Cindy Kunz",
      location: "Google Review",
    },
  ];

  return (
    <Layout>
      <LocalBusinessSchema />
      {/* Hero Section - Above the Fold */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${homepageHero})` }} />
        <div className="absolute inset-0 bg-black/30" />
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
                className="bg-background text-primary hover:bg-background/90 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto btn-glow"
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
                <a href="tel:541-408-0925">
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
              description="Central Oregon Based · Bend Chamber Member"
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
              image={deckStockPhoto}
              ctaText="Learn More → Decks"
            />
            <ServiceCard
              title="Remodeling Services"
              description="Bathroom and kitchen remodels, full home renovations, and select commercial projects."
              href="/remodeling"
              icon={HomeIcon}
              image={remodelExterior}
              ctaText="View Remodeling Services"
            />
            <ServiceCard
              title="Snow Removal (Seasonal)"
              description="Fast, reliable residential + small commercial snow removal."
              href="/snow-removal"
              icon={Snowflake}
              image={heroPlowDawn}
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
                  <span className="text-foreground font-medium">Clear, transparent communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">Proudly local—serving Central Oregon with care and integrity</span>
                </li>
              </ul>
              <Button asChild size="lg" variant="cta" className="w-full sm:w-auto">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={teamNicholasEd}
                alt="Nicholas and Ed Julian milling a beam together – Purple Rain Construction family team in Central Oregon"
                className="rounded-2xl shadow-elegant w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Transparency (JobTread) - Redesigned with Portal Screenshots */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Project Transparency You Can Count On
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
                We use a secure digital project portal to give our clients real-time updates, clear timelines, and direct communication—all in one place. From day one through completion, you'll always know what's happening with your project. No surprises, no guessing.
              </p>
            </div>
            
            {/* JobTread Portal Screenshots Grid */}
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <img 
                  src={jobtreadCommunications} 
                  alt="JobTread project portal communications view" 
                  className="w-full h-48 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Direct Communication</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Message our team directly and get quick responses—all conversations in one place.</p>
                </div>
              </div>

              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <img 
                  src={jobtreadDailyLogs} 
                  alt="JobTread project portal daily logs view" 
                  className="w-full h-48 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <ClipboardList className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Daily Logs</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">See detailed daily updates on what was completed, materials used, and next steps.</p>
                </div>
              </div>

              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <img 
                  src={jobtreadScheduling} 
                  alt="JobTread project portal scheduling view" 
                  className="w-full h-48 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Clear Timelines</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Know exactly when each phase of your project will complete with live scheduling.</p>
                </div>
              </div>

              <div className="bg-muted rounded-2xl overflow-hidden border border-border">
                <img 
                  src={jobtreadProgressPhotos} 
                  alt="JobTread project portal progress photos view" 
                  className="w-full h-48 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-lg">Progress Photos</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">See progress photos and status changes as they happen—perfect for remote owners.</p>
                </div>
              </div>
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
                src={sunriverSection5}
                alt="Modern elevated deck with composite decking, mountain forest views, and glass railing - custom-built for Sunriver living"
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
                For homeowners and rental properties in Sunriver, decks are one of the best upgrades you can invest in. We understand the heavy snow loads, freeze-thaw cycles, and SROA design guidelines that make building here different from anywhere else.
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

      {/* Testimonials - Real Google Reviews Only */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Don't just take our word for it—see what homeowners say on Google."
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 md:p-8 rounded-2xl shadow-md border border-border relative overflow-hidden"
              >
                {/* Subtle brand accent */}
                <img 
                  src={iconMonogramGradient} 
                  alt="" 
                  aria-hidden="true"
                  className="absolute -bottom-4 -right-4 w-20 h-20 opacity-[0.07] pointer-events-none"
                />
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-sunriver-gold text-sunriver-gold" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">Google Review</span>
                </div>
                <p className="text-foreground mb-6 italic text-sm md:text-base relative z-10">"{testimonial.quote}"</p>
                <div className="relative z-10">
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
              className="bg-background text-primary hover:bg-background/90 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto btn-glow"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              <a href="tel:541-408-0925">
                <Phone className="mr-2 h-5 w-5" />
                (541) 408-0925
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
