import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import project1After from "@/assets/decks/project-1-after.jpg";
import project1Before1 from "@/assets/decks/project-1-before-1.jpg";
import project2After from "@/assets/decks/project-2-after.jpg";
import project2Before from "@/assets/decks/project-2-before.jpg";
import elkeFrenchDoorMain from "@/assets/remodels/elke-french-doors/main.webp";
import elkeFrenchDoorOpen from "@/assets/remodels/elke-french-doors/open-view.jpeg";

const categories = ["All", "Decks", "Remodels", "Sunriver", "Snow Removal"];

const projects = [
  {
    id: 1,
    title: "Elevated Deck Transformation",
    category: "Decks",
    location: "Central Oregon",
    image: project1After,
    beforeImage: project1Before1,
    tags: ["Decks"]
  },
  {
    id: 2,
    title: "Composite Deck & Railing Upgrade",
    category: "Decks",
    location: "Central Oregon",
    image: project2After,
    beforeImage: project2Before,
    tags: ["Decks"]
  },
  {
    id: 3,
    title: "Interior French Doors Installation",
    category: "Remodels",
    location: "Central Oregon",
    image: elkeFrenchDoorMain,
    tags: ["Remodels"],
    description: "Custom-painted French doors with duplicated trim work and hallway entry modification"
  },
  {
    id: 4,
    title: "French Doors Open View",
    category: "Remodels",
    location: "Central Oregon",
    image: elkeFrenchDoorOpen,
    tags: ["Remodels"],
    description: "Interior French doors showing adjoining room by Purple Rain Construction"
  },
  {
    id: 5,
    title: "Snow Cleared Driveway",
    category: "Snow Removal",
    location: "Sunriver, OR",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=800",
    tags: ["Snow Removal", "Sunriver"]
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
