import { Phone, MapPin, Clock, CheckCircle, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const Contact = () => {
  return (
    <Layout>
      <LocalBusinessSchema />
      {/* Hero */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Ready to start your deck, remodel, or snow removal project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-md">
                <h2 className="text-2xl font-bold mb-6">Tell Us About Your Project</h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-muted p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:541-408-0925"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">(541) 408-0925</p>
                      <p className="text-sm text-muted-foreground">Call or text anytime</p>
                    </div>
                  </a>
                  <a
                    href="mailto:admin@purpleraincs.com"
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">admin@purpleraincs.com</p>
                      <p className="text-sm text-muted-foreground">Email us anytime</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Service Areas</p>
                      <p className="text-sm text-muted-foreground">Sunriver, Bend, Redmond</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/purplerainconstruction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61561896246653"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="text-sm font-medium">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary">
                <h3 className="text-xl font-semibold mb-4">What Happens After You Contact Us?</h3>
                <ol className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "We Review Your Request",
                      desc: "Within 24 hours, we'll review your project details and reach out."
                    },
                    {
                      step: "2",
                      title: "Schedule a Consultation",
                      desc: "We'll set up a time to discuss your project in detail."
                    },
                    {
                      step: "3",
                      title: "Receive Your Estimate",
                      desc: "You'll get a detailed, transparent estimate for your project."
                    },
                    {
                      step: "4",
                      title: "Project Portal Access",
                      desc: "Once we start, you'll have real-time updates in one place."
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Credentials */}
              <div className="bg-muted p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Our Credentials</h3>
                <ul className="space-y-3">
                  {[
                    "CCB #247140 - Licensed & Insured",
                    "TrexPro Certified Deck Builder",
                    "BBB Accredited Business",
                    "COBA Member",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="py-12 bg-muted border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">Prefer to talk? Give us a call:</p>
          <Button asChild size="lg" variant="cta">
            <a href="tel:541-408-0925">
              <Phone className="mr-2 h-5 w-5" />
              (541) 408-0925
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;