import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Decks", "Remodels", "Sunriver", "Snow Removal"];

const projects = [
  {
    id: 1,
    title: "Composite Deck with Cable Railing",
    category: "Decks",
    location: "Sunriver, OR",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=800",
    tags: ["Decks", "Sunriver"]
  },
  {
    id: 2,
    title: "Modern Kitchen Remodel",
    category: "Remodels",
    location: "Bend, OR",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800",
    tags: ["Remodels"]
  },
  {
    id: 3,
    title: "Multi-Level Deck System",
    category: "Decks",
    location: "Bend, OR",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    tags: ["Decks"]
  },
  {
    id: 4,
    title: "Bathroom Renovation",
    category: "Remodels",
    location: "Redmond, OR",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800",
    tags: ["Remodels"]
  },
  {
    id: 5,
    title: "Vacation Rental Deck",
    category: "Decks",
    location: "Sunriver, OR",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
    tags: ["Decks", "Sunriver"]
  },
  {
    id: 6,
    title: "Whole Home Renovation",
    category: "Remodels",
    location: "Sunriver, OR",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800",
    tags: ["Remodels", "Sunriver"]
  },
  {
    id: 7,
    title: "Snow Cleared Driveway",
    category: "Snow Removal",
    location: "Sunriver, OR",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800",
    tags: ["Snow Removal", "Sunriver"]
  },
  {
    id: 8,
    title: "Ground-Level Deck",
    category: "Decks",
    location: "Bend, OR",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    tags: ["Decks"]
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory));

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Browse recent decks, remodels, and Sunriver projects completed by Purple Rain Construction.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-gradient-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-elegant transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} by Purple Rain Construction in ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Like What You See?"
            subtitle="Let's discuss your project and create something you'll love."
          />
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
