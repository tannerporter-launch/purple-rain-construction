import { Link } from "react-router-dom";
import { Phone, Shield, Users, Hammer, Snowflake, TreePine, CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TrustBadge from "@/components/ui/TrustBadge";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2070')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              Trusted Deck Builders & Remodeling Experts in Central Oregon
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Building high-quality decks and remodels in Sunriver, Bend, and Redmond—backed by craftsmanship, clear communication, and dependable service.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold text-lg px-8"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-lg px-8"
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

      {/* Trust Indicators */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TrustBadge
              icon={Shield}
              title="Licensed & Insured"
              description="CCB #247140"
            />
            <TrustBadge
              icon={Users}
              title="Family-Owned"
              description="Local & Trusted"
            />
            <TrustBadge
              icon={Hammer}
              title="TrexPro Builder"
              description="Certified Quality"
            />
            <TrustBadge
              icon={Star}
              title="5-Star Reviews"
              description="Customer Satisfaction"
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Services"
            subtitle="Quality craftsmanship for every project, from custom decks to complete home remodels."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Deck Building"
              description="High-performance decks built for Central Oregon weather. Custom designs, composite and wood options, and expert installation."
              href="/decks"
              icon={Hammer}
              image="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=800"
            />
            <ServiceCard
              title="Remodeling"
              description="Kitchen, bath, and whole-home renovations with clear timelines, quality materials, and respectful crews."
              href="/remodeling"
              icon={Users}
              image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800"
            />
            <ServiceCard
              title="Snow Removal"
              description="Fast, reliable residential and commercial snow removal in Sunriver, Bend, and Redmond. Get on our route list."
              href="/snow-removal"
              icon={Snowflake}
              image="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Purple Rain Construction?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Purple Rain Construction was built on a foundation of family values and over 30 years of construction experience. Owner Nicholas Miller grew up learning the trade from his father, a general contractor who instilled the importance of quality work and honest communication.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Quality craftsmanship from a small, dedicated crew",
                  "Clear, honest communication from estimate to final walkthrough",
                  "Local experience with Central Oregon weather and Sunriver HOA requirements",
                  "Digital project portal for real-time updates on your project",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
                alt="Purple Rain Construction team at work in Central Oregon"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sunriver Highlight */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=800"
                alt="Custom deck in Sunriver, Oregon with mountain views"
                className="rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-6 w-6" />
                <span className="text-lg font-medium">Sunriver Specialists</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Decks Built for Sunriver Living
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Sunriver's unique climate demands specialized construction. We understand the heavy snow loads, freeze-thaw cycles, and HOA design guidelines that make building here different from anywhere else.
              </p>
              <p className="text-primary-foreground/90 mb-8">
                Whether you're a full-time resident, vacation homeowner, or property manager, we handle everything—from SROA approval to final inspection—so you can enjoy your outdoor space year-round.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/sunriver-deck-builder">
                  Explore Sunriver Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Transparency */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Project Transparency You Can Count On
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We use a digital project portal to give our customers real-time updates, timelines, material selections, and communication in one place. You always know what's happening with your project—no surprises.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: "Real-Time Updates", desc: "See progress photos and status changes as they happen" },
                { title: "Clear Timelines", desc: "Know exactly when each phase of your project will complete" },
                { title: "Direct Communication", desc: "Message our team and get quick responses in one place" },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-muted">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Don't just take our word for it—hear from homeowners across Central Oregon."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Purple Rain Construction built our deck in Sunriver and it exceeded all expectations. They handled the HOA process seamlessly and kept us updated every step of the way.",
                name: "Sarah M.",
                location: "Sunriver",
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
                className="bg-background p-8 rounded-2xl shadow-md border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-sunriver-gold text-sunriver-gold" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether it's a new deck, home remodel, or snow removal service, we're here to help. Request a quote today and let's build something great together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold text-lg px-8"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-lg px-8"
            >
              <a href="tel:541-408-2712">
                <Phone className="mr-2 h-5 w-5" />
                541-408-2712
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
