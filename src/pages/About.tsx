import { Link } from "react-router-dom";
import { CheckCircle, Shield, Users, Heart, Phone, Instagram, Facebook, Award, Building, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import teamActionShot from "@/assets/brand/team-action-saw.jpg";
import teamNicholasEd from "@/assets/brand/team-nicholas-ed.png";

const About = () => {
  const credentials = [
    { title: "CCB #247140", desc: "Oregon Licensed Contractor", icon: Shield },
    { title: "TimberTech Pro Builder", desc: "Certified Installer", icon: Award },
    { title: "TrexPro Builder", desc: "Certified Installer", icon: Award },
    { title: "BBB Accredited", desc: "Better Business Bureau Member", icon: Star },
    { title: "COBA Member", desc: "Central Oregon Builders Association", icon: Building },
    { title: "Angi Certified", desc: "Verified Professional", icon: CheckCircle },
    { title: "Bend Chamber of Commerce", desc: "Chamber Member", icon: Users },
  ];

  const teamMembers = [
    {
      name: "Nicholas Miller",
      role: "Owner & Operator",
      bio: "Nicholas founded Purple Rain Construction, a Central Oregon–based construction company built on trust, craftsmanship, and strong relationships. Raised on job sites and shaped by decades of hands-on exposure to the trade, Nicholas brings a steady, detail-driven approach to every project. He is known for clear communication, high standards, and a practical problem-solving mindset that keeps projects moving smoothly. At the core of his work is a commitment to building homes the right way and leading a tight-knit team that clients feel confident inviting into their space.",
      philosophy: "Positivity is contagious. Kindness is essential. When the unexpected happens, how we show up for people is what matters most."
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
    {
      name: "Kole Stout",
      role: "Builder",
      bio: "Kole brings 11 years of construction experience and a lifelong connection to the trades. He grew up working on job sites with his dad and developed a passion for building at an early age. At Purple Rain Construction, Kole enjoys all aspects of construction, with a special interest in deck building. He takes pride in honest work, strong teamwork, and turning ideas into something beautiful.",
      philosophy: "When in doubt, build it stout."
    },
  ];

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

      {/* Our Story - Updated */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Purple Rain Construction was founded on principles I learned from my father, who spent over 30 years as a general contractor. Growing up on job sites, I saw firsthand what quality craftsmanship looks like — and more importantly, what it takes to build lasting relationships with customers.
              </p>
              <p className="text-muted-foreground mb-6">
                Those values shape everything we do today: honest communication, attention to detail, and treating every project as if it were our own home. We're not trying to be the biggest contractor in Central Oregon — we want to be the one you trust, recommend to your neighbors, and call back for your next project.
              </p>
              <p className="text-muted-foreground mb-6">
                Behind that work is a tight-knit team of builders who share the same standards and take real pride in what we create together. We've worked side-by-side for years, developing a rhythm built on trust, accountability, and mutual respect. That familiarity shows up on the job site — in how smoothly projects run, how details are handled, and how consistently our clients are taken care of.
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

      {/* Values - Updated */}
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
                description: "We intentionally stay small so we can give every project the attention it deserves."
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

      {/* Team - Updated with Kole */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-6 bg-muted rounded-2xl">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{member.bio}</p>
                {member.philosophy && (
                  <p className="text-xs text-muted-foreground italic border-t border-border pt-3 mt-3">"{member.philosophy}"</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials - Redesigned with icons */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Licensed, Bonded & Trusted"
            subtitle="Professional credentials you can count on."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-background p-4 md:p-6 rounded-xl border border-border text-center hover:border-primary/30 transition-colors">
                <credential.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm md:text-base">{credential.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{credential.desc}</p>
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
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
          
          {/* Social Media Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/purplerainconstruction"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61561896246653"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
