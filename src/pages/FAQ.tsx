import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";

const faqs = [
  { q: "What does the average deck cost in Central Oregon?", a: "Most decks range from $18,000 to $45,000 depending on size, materials, height, railing style, and site conditions." },
  { q: "Why do Sunriver decks cost more?", a: "Sunriver decks typically range from $30,000 to $55,000+ due to heavier snow load requirements, specialized framing, and HOA compliance." },
  { q: "Is composite decking worth it?", a: "For Central Oregon's climate, composite is often the better long-term investment—handles snow, moisture, UV, and requires less maintenance." },
  { q: "How long does it take to build a deck?", a: "Most projects take 2-4 weeks from start to finish. Permitting can add 2-4 weeks beforehand." },
  { q: "Do I need a permit?", a: "Most deck projects require permits. We handle all permitting as part of our service." },
  { q: "What areas do you serve?", a: "We serve Sunriver, Bend, and Redmond. Sunriver is our primary focus area." },
  { q: "How do I track my project?", a: "We use a digital project portal for real-time updates, photos, and communication." },
  { q: "Are you licensed and insured?", a: "Yes. CCB #247140. We're fully licensed, bonded, and insured." },
];

const FAQ = () => (
  <Layout>
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
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
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
