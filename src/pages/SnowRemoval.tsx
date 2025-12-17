import { Link } from "react-router-dom";
import { Phone, CheckCircle, Snowflake, MapPin, Clock, Shield, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadge from "@/components/ui/TrustBadge";
import ServiceSchema from "@/components/seo/ServiceSchema";
import heroPlowDawn from "@/assets/snow-removal/hero-plow-dawn.jpg";
import sunriverDriveway from "@/assets/snow-removal/sunriver-driveway-cleared.jpg";
import plowActionShot from "@/assets/snow-removal/plow-action-shot.jpg";

const SnowRemoval = () => {
  return (
    <Layout>
      <ServiceSchema 
        name="Snow Removal"
        description="Reliable, route-based snow plowing and ice management for residential communities, HOAs, and small businesses in Sunriver, Bend, and Redmond."
        serviceType="Snow Removal Service"
      />
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroPlowDawn})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="h-6 w-6" />
              <span className="text-lg font-medium">Seasonal Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Snow Removal in Sunriver, Bend & Redmond
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-4 font-medium">
              Reliable. Local. Ready when it matters most.
            </p>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Reliable, route-based snow plowing and ice management for residential communities, HOAs, and small businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold btn-glow"
              >
                <Link to="/contact?service=snow-removal">Join the Snow Route List</Link>
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
            <TrustBadge icon={MapPin} title="Sunriver Focus" description="Primary Service Area" />
            <TrustBadge icon={Clock} title="Route-Based" description="Faster Response" />
            <TrustBadge icon={Shield} title="Licensed & Insured" description="CCB #247140" />
            <TrustBadge icon={Users} title="Local Team" description="Family-Owned" />
          </div>
        </div>
      </section>

      {/* Sunriver Focus */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Focus: Sunriver Snow Removal
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sunriver is our primary snow removal service area. By concentrating our routes in Sunriver, we can provide faster response times and more reliable service to our customers.
              </p>
              <p className="text-muted-foreground mb-6">
                When a storm hits, our team works through concentrated routes rather than driving all over Central Oregon. This means your driveway gets cleared faster and more predictably.
              </p>
              <ul className="space-y-3">
                {[
                  "Concentrated routes for faster response times",
                  "Consistent crews who know your property",
                  "Property manager coordination for rentals",
                  "Deck clearing available to protect your investment",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={sunriverDriveway}
                alt="Freshly cleared driveway in Sunriver, Oregon with snow-covered pines"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Residential & Small Commercial Services"
            subtitle="We handle snow removal for properties of all sizes."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: "Driveway Plowing",
                description: "Keep your driveway clear and accessible. We handle single-car to large circular driveways."
              },
              {
                icon: Snowflake,
                title: "Walkway Clearing",
                description: "Safe, clear pathways to your doors. Includes shoveling and ice treatment."
              },
              {
                icon: Shield,
                title: "Deck Snow Removal",
                description: "Protect your deck investment. We carefully remove heavy snow to prevent damage."
              },
              {
                icon: MapPin,
                title: "Small Parking Lots",
                description: "Light commercial plowing for small business lots, HOA common areas, and offices."
              },
              {
                icon: Clock,
                title: "Ice Management",
                description: "De-icing and sand application to keep surfaces safe after plowing."
              },
              {
                icon: Users,
                title: "Group Properties",
                description: "Multiple properties on one route? We offer coordination for HOAs and property groups."
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

      {/* Dispatch Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Flexible Dispatch Options"
            subtitle="Choose the service level that works for your property."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">1"</div>
              <h3 className="text-xl font-semibold mb-3">Auto Dispatch</h3>
              <p className="text-muted-foreground">
                We automatically clear your property when accumulation reaches 1 inch. Ideal for vacation rentals and remote owners who want maximum coverage.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-2xl border border-border text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">2"</div>
              <h3 className="text-xl font-semibold mb-3">Standard Dispatch</h3>
              <p className="text-muted-foreground">
                Automatic clearing at 2 inches of accumulation. Good balance of service and cost for most residential properties.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-2xl border border-border text-center">
              <div className="text-4xl font-extrabold text-primary mb-2">Call</div>
              <h3 className="text-xl font-semibold mb-3">On-Call Service</h3>
              <p className="text-muted-foreground">
                You call us when you need service. Best for part-time residents who are on-site during storms and can manage timing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Dispatch Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              How Our Route System Works
            </h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-lg mb-2">Storm Monitoring</h3>
                <p className="text-muted-foreground">
                  We track weather conditions and prepare routes in advance of incoming storms. Our team is ready to deploy when accumulation thresholds are met.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-lg mb-2">Route-Based Clearing</h3>
                <p className="text-muted-foreground">
                  Properties are grouped into efficient routes. During a storm, we work through each route systematically, which means faster clearing for everyone.
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="font-semibold text-lg mb-2">Communication</h3>
                <p className="text-muted-foreground">
                  We notify customers when we're heading out and can coordinate with property managers for rental properties. You'll know when to expect us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={plowActionShot}
                alt="Snow plow truck clearing a residential driveway in Central Oregon"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Purple Rain for Snow Removal?
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Local & Family-Owned",
                    desc: "We live and work in Central Oregon. This is our community."
                  },
                  {
                    title: "Hospital-Level Experience",
                    desc: "We've handled snow removal for St. Charles Hospital—we understand reliability matters."
                  },
                  {
                    title: "Licensed & Insured",
                    desc: "CCB #247140. Fully insured for your protection and ours."
                  },
                  {
                    title: "Clear Communication",
                    desc: "You'll know when we're coming and when we've finished. No surprises."
                  },
                  {
                    title: "Year-Round Relationship",
                    desc: "We also build decks and handle remodels—we're invested in your property long-term."
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{item.title}</span>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Service Areas"
            subtitle="Where we provide snow removal services."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sunriver</h3>
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-3">
                Primary Area
              </span>
              <p className="text-muted-foreground text-sm">
                Our main focus with concentrated routes and fastest response times.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl border border-border text-center">
              <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Bend</h3>
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-3">
                Limited Availability
              </span>
              <p className="text-muted-foreground text-sm">
                Select areas of Bend. Contact us to check availability.
              </p>
            </div>
            <div className="bg-background p-8 rounded-2xl border border-border text-center">
              <MapPin className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Redmond</h3>
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-3">
                Limited Availability
              </span>
              <p className="text-muted-foreground text-sm">
                Select areas of Redmond. Contact us to check availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Snowflake className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get on the Snow Route List Before Winter
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Route spots fill up fast, especially in Sunriver. Contact us now to secure your spot for the upcoming season.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold btn-glow"
            >
              <Link to="/contact?service=snow-removal">Request a Snow Removal Estimate</Link>
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

export default SnowRemoval;
