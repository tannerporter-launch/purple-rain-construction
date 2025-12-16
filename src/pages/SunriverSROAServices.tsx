import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Phone, 
  CheckCircle, 
  TreePine, 
  Shield, 
  FileText, 
  Clock, 
  DollarSign, 
  Award,
  ArrowRight,
  ExternalLink,
  ClipboardList,
  Building2,
  Calendar,
  Eye,
  Wrench,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import TrustBadge from "@/components/ui/TrustBadge";
import project1After from "@/assets/decks/project-1-after.jpg";
import project2After from "@/assets/decks/project-2-after.jpg";

const SunriverSROAServices = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sunriver SROA Approval Contractor | Design, Form E & Compliance – Purple Rain Construction</title>
        <meta 
          name="description" 
          content="Purple Rain Construction handles SROA-compliant design, Form E submissions, renderings, engineering coordination, and Deschutes County permitting for Sunriver decks, remodels, and exterior upgrades. Smooth approvals from start to finish." 
        />
        <meta property="og:title" content="Sunriver SROA Approval Contractor | Design, Form E & Compliance – Purple Rain Construction" />
        <meta property="og:description" content="Purple Rain Construction handles SROA-compliant design, Form E submissions, renderings, engineering coordination, and Deschutes County permitting for Sunriver decks, remodels, and exterior upgrades." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://purplerainconstruction.com/sunriver-sroa-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${project1After})` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-6 w-6" />
              <span className="text-lg font-medium">SROA Approval Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Sunriver SROA Approval Experts – Design, Submittals, and Compliance Made Simple
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              As a trusted Sunriver contractor, Purple Rain Construction specializes in SROA-compliant design, documentation, and approval support for homeowners in Sunriver, Oregon. Whether you're planning a deck replacement, exterior upgrade, or full remodel, we handle the full SROA submission process — including SROA Form E submission, compliant renderings, design documentation, and coordination with the SROA Design Committee. As your experienced Sunriver deck contractor and Sunriver remodel contractor, we understand the rules, standards, and expectations needed for smooth approval through the SROA approval process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90 font-semibold"
              >
                <Link to="/contact?service=sroa&location=sunriver">Request SROA Project Quote</Link>
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
            <TrustBadge icon={TreePine} title="SROA Registered" description="Community Development" />
            <TrustBadge icon={Shield} title="Licensed & Insured" description="CCB #247140" />
            <TrustBadge icon={Award} title="Local Experts" description="Years in Sunriver" />
            <TrustBadge icon={Building2} title="Engineering Partners" description="Stamped Plans" />
          </div>
        </div>
      </section>

      {/* Complete SROA Design & Approval Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Complete SROA Design & Approval Services"
            subtitle="As your Sunriver exterior remodel contractor, we handle every step of the SROA design review and project approval for your Sunriver project, meeting all Sunriver HOA requirements."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "On-Site Consultations",
                description: "We visit your Sunriver property to assess the project scope, discuss your vision, and understand site-specific requirements."
              },
              {
                icon: ClipboardList,
                title: "SROA-Compliant Design Concepts",
                description: "Design concepts for decks, remodels, additions, and exterior upgrades that meet SROA design standards and community guidelines."
              },
              {
                icon: Eye,
                title: "2D/3D Renderings",
                description: "Professional renderings meeting SROA design standards, showing exactly how your project will look upon completion."
              },
              {
                icon: FileText,
                title: "Form E Preparation & Submission",
                description: "We prepare and submit your complete Form E application package to the SROA Design Committee."
              },
              {
                icon: Users,
                title: "Design Committee Coordination",
                description: "We coordinate directly with the SROA Design Committee during the review process, answering questions and providing additional information as needed."
              },
              {
                icon: Wrench,
                title: "Revision Handling",
                description: "If the SROA requests revisions, we handle all modifications and resubmissions until your project is approved."
              },
              {
                icon: CheckCircle,
                title: "Final SROA Inspections",
                description: "We coordinate and schedule final SROA inspections once construction is complete, ensuring your project is fully closed out and compliant."
              },
            ].map((service, index) => (
              <div key={index} className="bg-muted p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SROA vs. Deschutes County Permits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                SROA Approval vs. Deschutes County Permits
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Many Sunriver homeowners are confused about the difference between SROA approval vs building permit requirements. Understanding Sunriver engineering requirements and the Sunriver remodel permit process is essential. Here's what you need to know:
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-background p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <TreePine className="h-5 w-5 text-primary" />
                    SROA Design Review
                  </h3>
                  <p className="text-muted-foreground">
                    SROA focuses on design aesthetics, materials, exterior appearance, and community compliance. This ensures your project fits within Sunriver's architectural standards and HOA requirements.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-xl border border-border">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Deschutes County Building Permit
                  </h3>
                  <p className="text-muted-foreground">

                    Deschutes County handles building code, structural requirements, and legal permitting. This ensures your project meets safety standards and structural integrity requirements.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <h3 className="font-semibold mb-3">We Manage Both Processes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Purple Rain Construction manages engineering needs when required for decks, additions, and remodels. We coordinate with our local structural engineer to produce stamped plans that Deschutes County accepts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">After SROA approval, we guide homeowners through the Deschutes County permit process from engineering to final permit issuance.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={project2After}
                alt="SROA-approved deck project in Sunriver Oregon"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Typical SROA Project Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Typical SROA Project Timeline"
            subtitle="Here's what to expect during the SROA approval timeline and Sunriver project design process. We guide you through each Sunriver HOA approval step."
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Site Visit",
                  timeline: "3–5 business days",
                  description: "We schedule an on-site consultation at your Sunriver property to assess the project scope, take measurements, and discuss your vision."
                },
                {
                  step: "2",
                  title: "Design, Renderings, & Form E Packet",
                  timeline: "5–7 business days",
                  description: "We create SROA-compliant design concepts, professional 2D/3D renderings, and prepare your complete Form E submission packet. Timeline varies depending on project size and complexity."
                },
                {
                  step: "3",
                  title: "SROA Design Committee Review",
                  timeline: "2–3 weeks (variable)",
                  description: "We submit your application to the SROA Design Committee. Review time depends on the committee schedule. We monitor progress and handle any revisions if requested."
                },
                {
                  step: "4",
                  title: "After SROA Approval",
                  timeline: "Permit windows",
                  description: "Once approved, the homeowner (or PRC on their behalf) has 12 months to pull the Deschutes County building permit. Once issued, the building permit is valid for 6 months of inactivity. We can request 3-month permit extensions as needed, depending on project timeline."
                },
                {
                  step: "5",
                  title: "Final Inspection",
                  timeline: "Upon completion",
                  description: "We coordinate and schedule the final SROA inspections once construction is complete, ensuring your project is fully closed out and compliant."
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-muted p-6 rounded-xl border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="inline-flex items-center gap-1 text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                        <Clock className="h-4 w-4" />
                        {item.timeline}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flat-Fee SROA Design & Submission Package */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Flat-Fee SROA Design & Submission Package
              </h2>
              <p className="text-lg text-muted-foreground">
                Our Sunriver SROA design package offers clear pricing with no surprises—know exactly what to expect before we start with our flat fee SROA submission service.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-2xl border border-border">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Although every Sunriver project is unique, we offer a flat-fee SROA design & submittal service. Our SROA Form E design service covers the initial site visit, SROA-compliant renderings, Form E preparation, and all communication with the SROA through final approval.
              </p>
              <p className="text-muted-foreground mb-8">
                Larger remodels or highly detailed projects may require additional design hours, but we provide a clear, upfront flat fee based on project scope so homeowners know exactly what to expect.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Initial site visit included",
                  "SROA-compliant renderings",
                  "Form E preparation & submission",
                  "Design Committee communication",
                  "Revision handling included",
                  "Clear upfront pricing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                  <Link to="/contact?service=sroa&location=sunriver">
                    Get Your SROA Project Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted, Experienced Sunriver Contractor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={project1After}
                alt="Purple Rain Construction SROA-approved deck in Sunriver"
                className="rounded-2xl shadow-elegant"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <Award className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Trusted, Experienced Sunriver Contractor
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team has worked in Sunriver for years and is registered with SROA Community Development. As a trusted Sunriver construction company, we've completed multiple SROA-approved projects across decks, remodels, and exterior upgrades.
              </p>
              <p className="text-muted-foreground mb-8">
                We ensure your design meets SROA standards and that the permitting and engineering process with Deschutes County is handled efficiently and correctly. When you need an experienced Sunriver contractor, Purple Rain Construction delivers.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Registered with SROA Community Development",
                  "Multiple SROA-approved projects completed",
                  "Deep understanding of Sunriver design standards",
                  "Local structural engineering partners",
                  "Licensed and insured (CCB #247140)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">
                  Learn About Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SROA Resource Links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Official SROA Resources
            </h2>
            <p className="text-muted-foreground mb-8">
              For more information about SROA design guidelines and requirements, visit the official Sunriver Owners Association resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://www.sunriverowners.org/departments/community-development/design-manual-forms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  SROA Design Manual & Forms
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://www.sunriverowners.org/home/showpublisheddocument/2550/638814389518370000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  SROA Rules & Regulations
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your SROA Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us handle the SROA approval process so you can focus on enjoying your Sunriver home. From design to final inspection, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 font-semibold"
            >
              <Link to="/contact?service=sroa&location=sunriver">Request SROA Project Quote</Link>
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

export default SunriverSROAServices;
