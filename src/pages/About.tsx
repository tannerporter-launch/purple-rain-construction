import { Link } from "react-router-dom";
import { CheckCircle, Shield, Users, Heart, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import teamActionShot from "@/assets/brand/team-action-saw.jpg";
import teamNicholasEd from "@/assets/brand/team-nicholas-ed.png";
const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Family-Driven Craftsmanship
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Building quality decks and remodels in Central Oregon with values passed down through three decades of construction expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Purple Rain Construction was founded on principles I learned from my father, who spent over 30 years as a general contractor. Growing up on job sites, I saw firsthand what quality craftsmanship looks like—and more importantly, what it takes to build lasting relationships with customers.
              </p>
              <p className="text-muted-foreground mb-6">
                Those values shape everything we do today: honest communication, attention to detail, and treating every project as if it were our own home. We're not trying to be the biggest contractor in Central Oregon—we want to be the one you trust, recommend to your neighbors, and call back for your next project.
              </p>
              <p className="text-muted-foreground">
                Based in Central Oregon, we specialize in custom decks, home remodeling, and seasonal snow removal for homeowners in Sunriver, Bend, and Redmond.
              </p>
            </div>
            <div>
              <img
                src={teamActionShot}
                alt="Purple Rain Construction team member using circular saw with sawdust flying – hands-on craftsmanship"
                className="rounded-2xl shadow-elegant object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What We Stand For"
            subtitle="The values that guide every project we take on."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Quality Over Quantity",
                description: "We intentionally stay small so we can give every project the attention it deserves. You won't be passed off to subcontractors or lost in a shuffle of jobs."
              },
              {
                icon: Users,
                title: "Clear Communication",
                description: "You'll always know what's happening with your project. Our digital project portal keeps you updated on progress, decisions, and timelines in real-time."
              },
              {
                icon: Shield,
                title: "Built to Last",
                description: "We use quality materials and proven techniques because we want your deck or remodel to look great and perform well for decades—not just pass inspection."
              },
            ].map((value, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl border border-border">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet the Team"
            subtitle="The people behind Purple Rain Construction."
          />
          
          {/* Team Photo - Nicholas & Ed Working Together */}
          <div className="max-w-3xl mx-auto mb-12">
            <img
              src={teamNicholasEd}
              alt="Nicholas and Ed Julian milling a beam together – Purple Rain Construction family team in Central Oregon"
              className="rounded-2xl shadow-elegant w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <p className="text-center text-sm text-muted-foreground mt-4">Nicholas and Ed working together on site – family-driven craftsmanship in action.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Nicholas Miller",
                role: "Owner & Lead Contractor",
                bio: "Nicholas founded Purple Rain Construction with values learned from his father's 30+ years in the trade. He oversees every project personally."
              },
              {
                name: "Ed Julian",
                role: "Superintendent",
                bio: "Ed brings over 30 years of construction experience to Purple Rain Construction. He started framing custom homes in Bend in 1995 and has worked across residential, commercial, and property maintenance projects. Today, he serves as Superintendent, carpenter, and trainer, guiding projects alongside his son, Nicholas.",
                philosophy: "Every project has a new challenge to learn from and better your skills."
              },
              {
                name: "Seth McCaron",
                role: "Project Supervisor",
                bio: "Seth discovered his passion for building after helping his longtime friend, Nicholas, on early Purple Rain projects. What started part-time quickly became a career built on curiosity, craftsmanship, and teamwork. With three years on the team, Seth now supervises projects and thrives on the challenge of learning something new every day.",
                philosophy: "Success is not final. Failure is not fatal. It is the courage to continue that counts."
              },
            ].map((member, index) => (
              <div key={index} className="text-center p-6 bg-muted rounded-2xl">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                {member.philosophy && (
                  <p className="text-xs text-muted-foreground italic border-t border-border pt-3 mt-3">"{member.philosophy}"</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Licensed, Bonded & Trusted"
            subtitle="Professional credentials you can count on."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "CCB #247140", desc: "Oregon Licensed Contractor" },
              { title: "TrexPro Builder", desc: "Certified Composite Deck Installer" },
              { title: "BBB Accredited", desc: "Better Business Bureau Member" },
              { title: "COBA Member", desc: "Central Oregon Builders Association" },
            ].map((credential, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold">{credential.title}</h3>
                <p className="text-sm text-muted-foreground">{credential.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              To create spaces that are beautiful, functional, and enduring—while keeping family, friends, and community at the center of everything we do.
            </p>
            <p className="text-primary-foreground/80">
              We're not just building decks and remodeling homes. We're helping families create spaces where memories are made—Sunday dinners on a new deck, holiday gatherings in a renovated kitchen, kids playing in a backyard that finally feels complete.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear about your project. Let's talk about how we can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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

export default About;
