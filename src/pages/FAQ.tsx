import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";
import FAQSchema from "@/components/seo/FAQSchema";

const faqs = [
  { 
    q: "What does the average deck cost in Central Oregon?", 
    a: "Most decks range from $18,000 to $45,000+, depending on size, materials, height, railing style, and site conditions.",
    link: { text: "explore average deck costs in Central Oregon", url: "/decks#pricing" }
  },
  { 
    q: "Why do Sunriver decks cost more?", 
    a: "Sunriver deck projects often involve additional design review, engineering, and HOA approval requirements compared to other Central Oregon locations. For a detailed breakdown of Sunriver-specific costs, approvals, and construction requirements, see our",
    link: { text: "Sunriver deck services overview", url: "/sunriver-deck-builder" }
  },
  { 
    q: "Is composite decking worth the investment?", 
    a: "Yes, composite decking offers superior durability, lower maintenance, and longer lifespan than traditional wood. See why many homeowners choose",
    link: { text: "composite decking for Central Oregon homes", url: "/decks#materials" }
  },
  { 
    q: "How long does it take to build a deck?", 
    a: "Most decks take several weeks from start to finish, including planning, approvals, and construction. Simpler builds move faster, while larger or elevated decks take longer. For details,",
    link: { text: "view our typical deck construction timeline", url: "/decks#process" }
  },
  { 
    q: "Do I need a permit?", 
    a: "In Central Oregon, many projects do require permits—especially deck builds, elevated structures, additions, or work involving structural, electrical, or plumbing changes. Requirements vary by city, county, and HOA. As part of our process, we help determine whether permits are required, review local regulations, and coordinate permitting when needed—so you don't have to navigate it on your own.",
    link: null
  },
  { 
    q: "What areas do you serve?", 
    a: "We serve Sunriver, Bend, and Redmond. Sunriver is our primary focus area.",
    link: null
  },
  { 
    q: "How do I track my project?", 
    a: "We use a digital project portal for real-time updates, photos, and communication.",
    link: null
  },
  { 
    q: "Are you licensed and insured?", 
    a: "Yes. CCB #247140. We're fully licensed, bonded, and insured.",
    link: null
  },
];

const FAQ = () => (
  <Layout>
    <FAQSchema faqs={faqs.slice(0, 5).map(f => ({ question: f.q, answer: f.a }))} />
    <section className="py-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-primary-foreground/90">Common questions about our services.</p>
      </div>
    </section>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
                {faq.link && (
                  <>
                    {" "}
                    <Link to={faq.link.url} className="text-primary hover:underline font-medium">
                      {faq.link.text}
                    </Link>
                    .
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button asChild className="bg-gradient-primary"><Link to="/contact">Contact Us</Link></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
