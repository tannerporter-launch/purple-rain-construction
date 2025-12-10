import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const ServiceAreas = () => (
  <Layout>
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Service Areas</h1>
        <p className="text-xl text-primary-foreground/90">Proudly serving Central Oregon.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { city: "Sunriver", desc: "Our primary focus. Specialized in snow load decks, HOA compliance, and vacation rental services.", primary: true },
            { city: "Bend", desc: "Full deck building, remodeling, and snow removal services throughout the Bend area.", primary: false },
            { city: "Redmond", desc: "Complete construction services for Redmond homeowners.", primary: false },
          ].map((area, i) => (
            <div key={i} className={`p-8 rounded-2xl text-center ${area.primary ? "bg-primary/5 border-2 border-primary" : "bg-muted border border-border"}`}>
              <MapPin className={`h-10 w-10 mx-auto mb-4 ${area.primary ? "text-primary" : "text-muted-foreground"}`} />
              <h2 className="text-2xl font-bold mb-2">{area.city}</h2>
              {area.primary && <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full mb-3">Primary Area</span>}
              <p className="text-muted-foreground">{area.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-gradient-primary"><Link to="/contact">Request a Quote</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ServiceAreas;
