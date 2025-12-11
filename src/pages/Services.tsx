import { Link } from "react-router-dom";
import { Hammer, Home, Building, Snowflake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import project1After from "@/assets/decks/project-1-after.jpg";
import gilchrestCeilingFan from "@/assets/remodels/gilchrest-a-frame/ceiling-detail-fan.jpg";
import olivieroKitchenAfter from "@/assets/remodels/oliviero/3-kitchen-after.jpg";

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Quality construction services for homeowners in Sunriver, Bend, and Redmond. From custom decks to complete remodels.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Deck Building & Repairs"
              description="Custom decks designed and built for Central Oregon's climate. New construction, replacements, repairs, and railing upgrades. TrexPro certified for composite decking."
              href="/decks"
              icon={Hammer}
              image={project1After}
            />
            <ServiceCard
              title="Home Remodeling"
              description="Kitchen, bathroom, and whole-home renovations. Quality craftsmanship, clear communication, and attention to detail from start to finish."
              href="/remodeling"
              icon={Home}
              image={olivieroKitchenAfter}
            />
            <ServiceCard
              title="New Construction"
              description="Custom home building and additions for Central Oregon homeowners. From ADUs to full custom homes, built to handle our unique climate."
              href="/new-construction"
              icon={Building}
              image={gilchrestCeilingFan}
            />
            <ServiceCard
              title="Snow Removal"
              description="Reliable, route-based snow plowing for Sunriver, Bend, and Redmond. Residential driveways, walkways, and small commercial properties."
              href="/snow-removal"
              icon={Snowflake}
              image="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Sunriver Callout */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sunriver Property Owners
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in construction services for Sunriver—understanding the unique snow loads, HOA requirements, and property management needs of vacation homes and rentals.
            </p>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/sunriver-deck-builder">
                View Sunriver Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Service Areas"
            subtitle="Proudly serving Central Oregon communities."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { city: "Sunriver", desc: "Our primary focus area" },
              { city: "Bend", desc: "Full service coverage" },
              { city: "Redmond", desc: "Full service coverage" },
            ].map((area, index) => (
              <div key={index} className="text-center p-6 bg-muted rounded-xl">
                <h3 className="text-xl font-semibold mb-2">{area.city}</h3>
                <p className="text-sm text-muted-foreground">{area.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/service-areas" className="text-primary hover:underline font-medium">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate on your project.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-primary hover:bg-background/90 font-semibold"
          >
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
