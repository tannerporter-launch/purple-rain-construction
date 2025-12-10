import { Link } from "react-router-dom";
import { Building, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NewConstruction = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              New Construction in Central Oregon
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Custom home building and additions for homeowners in Sunriver, Bend, and Redmond. Built for Central Oregon's unique climate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=new-construction">Discuss Your Project</Link>
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

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Building className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Custom Homes & Additions
              </h2>
              <p className="text-lg text-muted-foreground">
                While our primary focus is on decks and remodeling, we also take on select new construction projects for clients who want the Purple Rain Construction level of quality and communication.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-2xl mb-12">
              <h3 className="text-xl font-semibold mb-4">Our New Construction Services Include:</h3>
              <ul className="space-y-3">
                {[
                  "Custom home building",
                  "Home additions and expansions",
                  "Accessory dwelling units (ADUs)",
                  "Garages and outbuildings",
                  "Shop and workspace buildings",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-8">
                New construction projects require detailed planning and consultation. Contact us to discuss your vision and we'll determine if we're the right fit for your project.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/contact?service=new-construction">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Looking for Deck or Remodeling Services?</h2>
          <p className="text-muted-foreground mb-8">
            Check out our primary services where we do the majority of our work.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/decks">Deck Building</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/remodeling">Remodeling</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewConstruction;
