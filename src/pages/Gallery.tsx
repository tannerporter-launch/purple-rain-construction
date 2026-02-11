import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageLightbox from "@/components/ui/ImageLightbox";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

// Before & After slider images
import gilchrestFrontAfter from "@/assets/remodels/gilchrest-a-frame/3-front-after.jpg";
import gilchrestFrontBefore from "@/assets/remodels/gilchrest-a-frame/3-front-before.jpg";
import olivieroFrontBefore from "@/assets/remodels/oliviero/1-front-before.webp";
import olivieroFrontAfter from "@/assets/remodels/oliviero/1-front-after.jpg";

// A-Frame Cabin Remodel — Exterior
import aframeFrontExterior from "@/assets/remodels/gilchrest-a-frame/front-symmetrical.png";
import aframeFrontPatio from "@/assets/remodels/gilchrest-a-frame/front-patio-angle-new.jpg";
import aframeCeiling from "@/assets/remodels/gilchrest-a-frame/ceiling-detail-fan-new.jpg";
import aframeSideExterior from "@/assets/remodels/gilchrest-a-frame/side-roof-angle-new.jpg";

// A-Frame Cabin Remodel — Living / Kitchen / Bathroom
import aframeStaircase from "@/assets/remodels/gilchrest-a-frame/staircase-new.jpg";
import aframeKitchen from "@/assets/remodels/gilchrest-a-frame/5-kitchen-after.jpg";
import aframeBathroom from "@/assets/remodels/bathroom/walk-in-shower-new.jpg";

// Full Home Remodel — Exterior
import fullHomeExterior from "@/assets/stock/remodel-exterior-new.jpg";
import fullHomeSideYard from "@/assets/remodels/oliviero/side-patio-seating.jpg";

// Full Home Remodel — Deck
import fullHomeDeck from "@/assets/decks/upper-balcony-rebuild-after.jpg";

// Full Home Remodel — Kitchen
import fullHomeKitchenCustom from "@/assets/remodels/oliviero/kitchen-full-new.jpg";
import fullHomeKitchenBacksplash from "@/assets/remodels/oliviero/kitchen-stove-backsplash.jpg";
import fullHomeFarmhouseSink from "@/assets/remodels/oliviero/kitchen-farmhouse-sink.jpg";
import fullHomeKitchenLayout from "@/assets/remodels/oliviero/kitchen-layout-new.jpg";

// Full Home Remodel — Living / Feature
import fullHomeLivingRoom from "@/assets/remodels/oliviero/living-room-farmhouse.jpg";
import fullHomeBarWindow from "@/assets/remodels/oliviero/bar-window-new.jpg";
import fullHomeFrenchDoors from "@/assets/remodels/elke-french-doors/french-doors-new.jpg";

// Full Home Remodel — Bathroom
import fullHomeFreestandingTub from "@/assets/remodels/bathroom/freestanding-tub-new.jpg";
import fullHomePatternedTile from "@/assets/remodels/bathroom/patterned-tile-new.jpg";
import fullHomeDoubleVanity from "@/assets/remodels/bathroom/double-vanity-new.jpg";
import fullHomeMasterShower from "@/assets/remodels/bathroom/master-shower-new.jpg";
import fullHomeModernVanity from "@/assets/remodels/bathroom/modern-vanity-new.jpg";
import fullHomeWaterCloset from "@/assets/remodels/bathroom/water-closet-new.jpg";

// Deck Projects
import deckStructuralRepair from "@/assets/decks/structural-repair-new.jpg";
import deckRefinishRailing from "@/assets/decks/deck-refinish-railing-new.jpg";
import deckSunriverRebuild from "@/assets/decks/sunriver-rebuild-new.jpg";
import deckAddition from "@/assets/decks/deck-addition-new.jpg";

const categories = ["All", "Decks", "A-Frame Cabin Remodel", "Full Home Remodel"];

interface GalleryProject {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  tags: string[];
  description: string;
  subgroup?: string;
}

const projects: GalleryProject[] = [
  // ── A-Frame Cabin Remodel — Exterior ──
  {
    id: 1,
    title: "A-Frame Cabin Remodel — Front Exterior",
    category: "A-Frame Cabin Remodel",
    location: "Gilchrest Area, Central Oregon",
    image: aframeFrontExterior,
    tags: ["A-Frame Cabin Remodel"],
    description: "Complete A-Frame renovation with black metal roof, cedar siding, and covered porch.",
    subgroup: "Exterior",
  },
  {
    id: 2,
    title: "A-Frame Front Patio & Covered Entry",
    category: "A-Frame Cabin Remodel",
    location: "Gilchrest Area, Central Oregon",
    image: aframeFrontPatio,
    tags: ["A-Frame Cabin Remodel"],
    description: "Cedar ceiling patio with black beam detailing and welcoming covered entry.",
    subgroup: "Exterior",
  },
  {
    id: 3,
    title: "Vaulted Wood Ceiling & Timber Craftsmanship",
    category: "A-Frame Cabin Remodel",
    location: "Gilchrest Area, Central Oregon",
    image: aframeCeiling,
    tags: ["A-Frame Cabin Remodel"],
    description: "Detailed view of vaulted tongue-and-groove ceiling with exposed timber beams.",
    subgroup: "Exterior",
  },
  {
    id: 4,
    title: "A-Frame Cabin — Side Exterior",
    category: "A-Frame Cabin Remodel",
    location: "Gilchrest Area, Central Oregon",
    image: aframeSideExterior,
    tags: ["A-Frame Cabin Remodel"],
    description: "New cedar siding and black standing seam metal roof from the side angle.",
    subgroup: "Exterior",
  },
  // ── A-Frame Cabin Remodel — Living/Feature ──
  {
    id: 5,
    title: "Interior Staircase Remodel",
    category: "A-Frame Cabin Remodel",
    location: "Gilchrest Area, Central Oregon",
    image: aframeStaircase,
    tags: ["A-Frame Cabin Remodel"],
    description: "Modern stairwell with dark beams, metal railing, and refinished treads.",
    subgroup: "Living/Feature",
  },
  // ── A-Frame Cabin Remodel — Kitchen ──
  {
    id: 6,
    title: "Full Kitchen Remodel",
    category: "A-Frame Cabin Remodel",
    location: "Gilchrest Area, Central Oregon",
    image: aframeKitchen,
    tags: ["A-Frame Cabin Remodel"],
    description: "Modern kitchen with live-edge counter and exposed beams in A-Frame cabin.",
    subgroup: "Kitchen",
  },
  // ── A-Frame Cabin Remodel — Bathroom ──
  {
    id: 7,
    title: "Walk-In Shower Remodel",
    category: "A-Frame Cabin Remodel",
    location: "Gilchrest Area, Central Oregon",
    image: aframeBathroom,
    tags: ["A-Frame Cabin Remodel"],
    description: "Custom walk-in shower with built-in storage and modern tile work.",
    subgroup: "Bathroom",
  },

  // ── Full Home Remodel — Exterior ──
  {
    id: 10,
    title: "Full Home Remodel — Front Exterior",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeExterior,
    tags: ["Full Home Remodel"],
    description: "Modern farmhouse with deep charcoal board-and-batten siding and natural wood door.",
    subgroup: "Exterior",
  },
  {
    id: 11,
    title: "Side Yard, Barn & Patio",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeSideYard,
    tags: ["Full Home Remodel"],
    description: "Functional outdoor living space with durable metal roofing and comfortable seating.",
    subgroup: "Exterior",
  },
  // ── Full Home Remodel — Living/Feature ──
  {
    id: 12,
    title: "Living Room Remodel",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeLivingRoom,
    tags: ["Full Home Remodel"],
    description: "Open concept living area with shiplap walls, natural wood door, and cast iron stove.",
    subgroup: "Living/Feature",
  },
  {
    id: 13,
    title: "Indoor-Outdoor Window Bar",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeBarWindow,
    tags: ["Full Home Remodel"],
    description: "Custom fold-out bar window connecting kitchen to covered patio entertainment space.",
    subgroup: "Living/Feature",
  },
  {
    id: 14,
    title: "Custom French Doors",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeFrenchDoors,
    tags: ["Full Home Remodel"],
    description: "Custom-painted French doors with duplicated trim work and hallway entry modification.",
    subgroup: "Living/Feature",
  },
  // ── Full Home Remodel — Kitchen ──
  {
    id: 15,
    title: "Custom Kitchen Remodel",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeKitchenCustom,
    tags: ["Full Home Remodel"],
    description: "Designer kitchen featuring quartz island, farmhouse sink, and glass pendant lighting.",
    subgroup: "Kitchen",
  },
  {
    id: 16,
    title: "Statement Tile Backsplash",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeKitchenBacksplash,
    tags: ["Full Home Remodel"],
    description: "Custom shiplap-wrapped range hood with floating wood shelves and designer tile.",
    subgroup: "Kitchen",
  },
  {
    id: 17,
    title: "Farmhouse Sink & Quartz Countertop Details",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeFarmhouseSink,
    tags: ["Full Home Remodel"],
    description: "White farmhouse sink with industrial black faucet and marble-look quartz surfaces.",
    subgroup: "Kitchen",
  },
  {
    id: 18,
    title: "Functional Kitchen Layout Upgrade",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeKitchenLayout,
    tags: ["Full Home Remodel"],
    description: "Open floor plan showcasing quartz island, mint pendant lighting, and panoramic views.",
    subgroup: "Kitchen",
  },
  // ── Full Home Remodel — Bathroom ──
  {
    id: 20,
    title: "Freestanding Tub Bathroom",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeFreestandingTub,
    tags: ["Full Home Remodel"],
    description: "Elegant freestanding tub installation with modern fixtures and updated finishes.",
    subgroup: "Bathroom",
  },
  {
    id: 21,
    title: "Patterned Tile Shower",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomePatternedTile,
    tags: ["Full Home Remodel"],
    description: "Custom patterned tile shower surround with coordinated floor and accent tiles.",
    subgroup: "Bathroom",
  },
  {
    id: 22,
    title: "Double Vanity Bathroom Remodel",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeDoubleVanity,
    tags: ["Full Home Remodel"],
    description: "His-and-hers vanity with quartz countertops and modern lighting fixtures.",
    subgroup: "Bathroom",
  },
  {
    id: 23,
    title: "Custom Walk-In Shower & Built-In Storage",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeMasterShower,
    tags: ["Full Home Remodel"],
    description: "Full master bathroom remodel with custom walk-in shower and built-in storage niches.",
    subgroup: "Bathroom",
  },
  {
    id: 24,
    title: "Modern Vanity & Lighting",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeModernVanity,
    tags: ["Full Home Remodel"],
    description: "Updated vanity with contemporary lighting, framed mirror, and clean design.",
    subgroup: "Bathroom",
  },
  {
    id: 25,
    title: "Updated Water Closet",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeWaterCloset,
    tags: ["Full Home Remodel"],
    description: "Refreshed water closet with modern fixtures and updated finishes throughout.",
    subgroup: "Bathroom",
  },
  // ── Full Home Remodel — Deck ──
  {
    id: 26,
    title: "Upper Balcony Deck Rebuild",
    category: "Full Home Remodel",
    location: "Central Oregon",
    image: fullHomeDeck,
    tags: ["Full Home Remodel"],
    description: "County-permitted rebuild with accented handrails, integrated into a larger remodel.",
    subgroup: "Deck",
  },

  // ── Deck Projects ──
  {
    id: 30,
    title: "Structural Repair & Deck Refresh",
    category: "Decks",
    location: "Central Oregon",
    image: deckStructuralRepair,
    tags: ["Decks"],
    description: "Structural repairs and surface refinishing to restore safety and extend deck life.",
  },
  {
    id: 31,
    title: "Deck Refinish & Railing Upgrade",
    category: "Decks",
    location: "Central Oregon",
    image: deckRefinishRailing,
    tags: ["Decks"],
    description: "Refinished and stained existing deck boards with selective replacements and modern handrails.",
  },
  {
    id: 32,
    title: "Sunriver Deck Rebuild",
    category: "Decks",
    location: "Sunriver, Oregon",
    image: deckSunriverRebuild,
    tags: ["Decks"],
    description: "Full demolition due to extensive dry rot, followed by an engineered, SROA-approved rebuild.",
  },
  {
    id: 33,
    title: "Deck Addition & Accessibility Upgrade",
    category: "Decks",
    location: "Central Oregon",
    image: deckAddition,
    tags: ["Decks"],
    description: "Small deck addition for hot tub support with built-in bench, hose access, and privacy wall.",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory));

  const lightboxImages = useMemo(() =>
    filteredProjects.map((project) => ({
      src: project.image,
      alt: `${project.title} by Purple Rain Construction in ${project.location}`,
      title: project.title,
    })),
    [filteredProjects]
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
            Browse recent decks, remodels, and custom projects completed by Purple Rain Construction across Central Oregon.
          </p>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Before & After Transformations"
            subtitle="Drag the slider to see our project transformations."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">A-Frame Cabin — Front Exterior</h3>
              <BeforeAfterSlider
                beforeImage={gilchrestFrontBefore}
                afterImage={gilchrestFrontAfter}
                beforeAlt="A-Frame cabin before renovation"
                afterAlt="A-Frame cabin after renovation"
                className="aspect-[4/3]"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Full Home Remodel — Front Exterior</h3>
              <BeforeAfterSlider
                beforeImage={olivieroFrontBefore}
                afterImage={olivieroFrontAfter}
                beforeAlt="Full home remodel before renovation"
                afterAlt="Full home remodel after renovation"
                className="aspect-[4/3]"
              />
            </div>
          </div>
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
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-md hover:shadow-elegant transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
                aria-label={`View ${project.title} in fullscreen`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} by Purple Rain Construction in ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70">{project.location}</p>
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

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </Layout>
  );
};

export default Gallery;
