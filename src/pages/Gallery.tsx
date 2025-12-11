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
// Gilchrest A-Frame imports
import gilchrestFrontAfter from "@/assets/remodels/gilchrest-a-frame/3-front-after.jpg";
import gilchrestFrontBefore from "@/assets/remodels/gilchrest-a-frame/3-front-before.jpg";
import gilchrestSideAfter from "@/assets/remodels/gilchrest-a-frame/2-side-exterior-after.jpg";
import gilchrestSideBefore from "@/assets/remodels/gilchrest-a-frame/2-side-exterior-before.jpg";
import gilchrestKitchenAfter from "@/assets/remodels/gilchrest-a-frame/5-kitchen-after.jpg";
import gilchrestKitchenBefore from "@/assets/remodels/gilchrest-a-frame/5-kitchen-before.jpg";
import gilchrestStairsAfter from "@/assets/remodels/gilchrest-a-frame/1-stairs-after.jpg";
import gilchrestStairsBefore from "@/assets/remodels/gilchrest-a-frame/1-stairs-before.jpg";
import gilchrestBackAfter from "@/assets/remodels/gilchrest-a-frame/4-back-after.jpg";
import gilchrestBackBefore from "@/assets/remodels/gilchrest-a-frame/4-back-before.jpg";
// Gilchrest A-Frame supplementary images
import gilchrestPatioFinished from "@/assets/remodels/gilchrest-a-frame/front-patio-finished.jpg";
import gilchrestDoorInstall from "@/assets/remodels/gilchrest-a-frame/process-door-install-1.jpg";
import gilchrestExteriorWork from "@/assets/remodels/gilchrest-a-frame/process-exterior-work.jpg";
import gilchrestCeilingFan from "@/assets/remodels/gilchrest-a-frame/ceiling-detail-fan.jpg";
// Oliviero Remodel imports
import olivieroFrontBefore from "@/assets/remodels/oliviero/1-front-before.webp";
import olivieroFrontAfter from "@/assets/remodels/oliviero/1-front-after.jpg";
import olivieroSideBefore from "@/assets/remodels/oliviero/2-side-before.webp";
import olivieroSideAfter from "@/assets/remodels/oliviero/2-side-after.jpg";
import olivieroKitchenBefore from "@/assets/remodels/oliviero/3-kitchen-before.webp";
import olivieroKitchenAfter from "@/assets/remodels/oliviero/3-kitchen-after.jpg";
import olivieroBarWindow1 from "@/assets/remodels/oliviero/4-bar-window-1.jpg";
import olivieroBarWindow2 from "@/assets/remodels/oliviero/4-bar-window-2.jpg";

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
  // Gilchrest A-Frame Remodel entries
  {
    id: 6,
    title: "A-Frame Front Transformation",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestFrontAfter,
    beforeImage: gilchrestFrontBefore,
    tags: ["Remodels"],
    description: "Complete A-Frame renovation with black metal roof and covered porch"
  },
  {
    id: 7,
    title: "A-Frame Side Exterior",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestSideAfter,
    beforeImage: gilchrestSideBefore,
    tags: ["Remodels"],
    description: "New cedar siding and black standing seam metal roof"
  },
  {
    id: 8,
    title: "Modern Kitchen Build-Out",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestKitchenAfter,
    beforeImage: gilchrestKitchenBefore,
    tags: ["Remodels"],
    description: "Modern kitchen with live-edge counter and exposed beams"
  },
  {
    id: 9,
    title: "Interior Stair Transformation",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestStairsAfter,
    beforeImage: gilchrestStairsBefore,
    tags: ["Remodels"],
    description: "Modern stairwell with dark beams and metal railing"
  },
  {
    id: 10,
    title: "A-Frame Rear Elevation",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestBackAfter,
    beforeImage: gilchrestBackBefore,
    tags: ["Remodels"],
    description: "Rear view showing new windows and cedar siding"
  },
  // Gilchrest A-Frame supplementary entries
  {
    id: 11,
    title: "A-Frame Front Patio Complete",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestPatioFinished,
    tags: ["Remodels"],
    description: "Cedar ceiling patio with black beam detailing"
  },
  {
    id: 12,
    title: "Window & Door Installation Process",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestDoorInstall,
    tags: ["Remodels"],
    description: "Team installing sliding glass doors at Gilchrest A-Frame"
  },
  {
    id: 13,
    title: "Exterior Finishing Work",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestExteriorWork,
    tags: ["Remodels"],
    description: "Workers finishing exterior trim on A-Frame home"
  },
  {
    id: 14,
    title: "Vaulted Ceiling & Craftsmanship",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestCeilingFan,
    tags: ["Remodels"],
    description: "Detailed view of vaulted ceiling and modern fan"
  },
  // Oliviero Remodel entries
  {
    id: 15,
    title: "Oliviero Front Exterior Transformation",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroFrontAfter,
    beforeImage: olivieroFrontBefore,
    tags: ["Remodels"],
    description: "Modern farmhouse with deep charcoal board-and-batten siding and natural wood door"
  },
  {
    id: 16,
    title: "Oliviero Side Elevation & Patio",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroSideAfter,
    beforeImage: olivieroSideBefore,
    tags: ["Remodels"],
    description: "New back deck, sunroom windows, and modern cable railing with fire pit area"
  },
  {
    id: 17,
    title: "Modern Farmhouse Kitchen Remodel",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroKitchenAfter,
    beforeImage: olivieroKitchenBefore,
    tags: ["Remodels"],
    description: "Designer kitchen with shiplap walls, patterned tile backsplash, and bold navy island"
  },
  {
    id: 18,
    title: "Outdoor Bar Pass-Through Window",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarWindow1,
    tags: ["Remodels"],
    description: "Custom pass-through window with mountain art and outdoor bar counter"
  },
  {
    id: 19,
    title: "Entertainment Bar Window",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarWindow2,
    tags: ["Remodels"],
    description: "Full bar setup with metal stools and covered patio entertainment space"
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
