import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageLightbox from "@/components/ui/ImageLightbox";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
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
import gilchrestFrontSymmetrical from "@/assets/remodels/gilchrest-a-frame/front-symmetrical.png";
// Oliviero Remodel imports
import olivieroFrontBefore from "@/assets/remodels/oliviero/1-front-before.webp";
import olivieroFrontAfter from "@/assets/remodels/oliviero/1-front-after.jpg";
import olivieroSideBefore from "@/assets/remodels/oliviero/2-side-before.webp";
import olivieroSideAfter from "@/assets/remodels/oliviero/2-side-after.jpg";
import olivieroKitchenBefore from "@/assets/remodels/oliviero/3-kitchen-before.webp";
import olivieroKitchenAfter from "@/assets/remodels/oliviero/3-kitchen-after.jpg";
import olivieroBarWindow1 from "@/assets/remodels/oliviero/4-bar-window-1.jpg";
import olivieroBarWindow2 from "@/assets/remodels/oliviero/4-bar-window-2.jpg";
// Oliviero Kitchen Expanded Gallery imports
import olivieroKitchenEntry from "@/assets/remodels/oliviero/kitchen-entry-view.jpg";
import olivieroKitchenFull1 from "@/assets/remodels/oliviero/kitchen-full-view-1.jpg";
import olivieroKitchenStove from "@/assets/remodels/oliviero/kitchen-stove-backsplash.jpg";
import olivieroKitchenFarmhouseSink from "@/assets/remodels/oliviero/kitchen-farmhouse-sink.jpg";
import olivieroBarWine from "@/assets/remodels/oliviero/bar-window-wine.jpg";
import olivieroBarExteriorFull from "@/assets/remodels/oliviero/bar-window-exterior-full.jpg";
// Oliviero Living Room & Additional Details
import olivieroLivingRoom from "@/assets/remodels/oliviero/living-room-farmhouse.jpg";
import olivieroSinkWindow from "@/assets/remodels/oliviero/kitchen-sink-window-view.jpg";
import olivieroSinkDusk from "@/assets/remodels/oliviero/kitchen-sink-dusk.jpg";
// Oliviero Exterior & Before/After images
import olivieroExteriorHero from "@/assets/remodels/oliviero/exterior-hero-wide.jpg";
import olivieroBarnAfter from "@/assets/remodels/oliviero/barn-detail-after.jpg";
import olivieroWorkshopBefore from "@/assets/remodels/oliviero/workshop-before.webp";
import olivieroBarnBefore from "@/assets/remodels/oliviero/barn-before.webp";
import olivieroHayStorageBefore from "@/assets/remodels/oliviero/hay-storage-before.webp";
// Oliviero Exterior Expanded Gallery
import olivieroFrontPorch from "@/assets/remodels/oliviero/front-porch-entry.jpg";
import olivieroPropertyFence from "@/assets/remodels/oliviero/property-fence-view.jpg";
import olivieroSidePatio from "@/assets/remodels/oliviero/side-patio-seating.jpg";
import olivieroBackPatio from "@/assets/remodels/oliviero/back-patio-deck.jpg";
import olivieroBarnPortrait from "@/assets/remodels/oliviero/barn-doors-portrait.jpg";
import olivieroBarnWide from "@/assets/remodels/oliviero/barn-doors-wide.jpg";
import olivieroFrontDoor from "@/assets/remodels/oliviero/front-door-detail.jpg";
// Oliviero Interior & Property Expanded
import olivieroKitchenIsland from "@/assets/remodels/oliviero/kitchen-island-view.jpg";
import olivieroLivingStove from "@/assets/remodels/oliviero/living-room-stove-wall.jpg";
import olivieroPropertyWide from "@/assets/remodels/oliviero/property-wide-lawn.jpg";
// Oliviero Exterior - Front Lawn View
import olivieroExteriorFrontLawn from "@/assets/remodels/oliviero/exterior-front-lawn.jpg";
import teamActionSaw from "@/assets/brand/team-action-saw.jpg";

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
    title: "Snow Removal Service",
    category: "Snow Removal",
    location: "Sunriver, OR",
    image: teamActionSaw,
    tags: ["Snow Removal", "Sunriver"],
    description: "Purple Rain Construction team providing reliable snow removal services in Sunriver"
  },
  // Gilchrest A-Frame Remodel entries
  {
    id: 6,
    title: "A-Frame Front Transformation",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestFrontSymmetrical,
    beforeImage: gilchrestFrontBefore,
    tags: ["Remodels"],
    description: "Complete A-Frame renovation with black metal roof and covered porch – symmetrical front view"
  },
  {
    id: 100,
    title: "A-Frame Front – Angle View",
    category: "Remodels",
    location: "Gilchrest Area, Central Oregon",
    image: gilchrestFrontAfter,
    tags: ["Remodels"],
    description: "Complete A-Frame renovation with black metal roof and cedar siding – angled perspective"
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
  // Oliviero Kitchen Expanded Gallery entries
  {
    id: 20,
    title: "Oliviero Kitchen – Living Entry View",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroKitchenEntry,
    tags: ["Remodels"],
    description: "Open concept kitchen with shiplap walls and navy island visible from living room"
  },
  {
    id: 21,
    title: "Oliviero Kitchen – Full Overview",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroKitchenFull1,
    tags: ["Remodels"],
    description: "Designer kitchen featuring quartz island, farmhouse sink, and glass pendant lighting"
  },
  {
    id: 22,
    title: "Stove & Patterned Tile Backsplash",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroKitchenStove,
    tags: ["Remodels"],
    description: "Custom shiplap-wrapped range hood with floating wood shelves and designer tile"
  },
  {
    id: 23,
    title: "Farmhouse Sink & Counter Details",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroKitchenFarmhouseSink,
    tags: ["Remodels"],
    description: "White farmhouse sink with industrial black faucet and marble-look quartz surfaces"
  },
  {
    id: 24,
    title: "Bar Window – Interior Wine View",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarWine,
    tags: ["Remodels"],
    description: "Indoor-outdoor bar connection showcasing quartz counter and kitchen beyond"
  },
  {
    id: 25,
    title: "Bar Window – Full Exterior Frame",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarExteriorFull,
    tags: ["Remodels"],
    description: "Custom fold-out bar window with mountain-scene metal art and black exterior accents"
  },
  // Oliviero Living Room & Additional Details
  {
    id: 26,
    title: "Oliviero Living Room – Farmhouse Style",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroLivingRoom,
    tags: ["Remodels"],
    description: "Open concept living area with shiplap walls, natural wood door, and cast iron stove"
  },
  {
    id: 27,
    title: "Kitchen Sink Window Detail",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroSinkWindow,
    tags: ["Remodels"],
    description: "Counter-level perspective showcasing quartz surfaces and window garden view"
  },
  {
    id: 28,
    title: "Kitchen at Dusk – Sink Reflection",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroSinkDusk,
    tags: ["Remodels"],
    description: "Evening ambiance with string lights visible through windows and polished counters"
  },
  // Oliviero Exterior & Before/After Gallery
  {
    id: 29,
    title: "Oliviero Property – Full Exterior View",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroExteriorHero,
    tags: ["Remodels"],
    description: "Complete transformation showing main home, elevated deck, and matching barn structure"
  },
  {
    id: 30,
    title: "Renovated Barn – Rustic Door Detail",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarnAfter,
    tags: ["Remodels"],
    description: "Outbuilding transformation with reclaimed wood barn doors and modern black exterior"
  },
  {
    id: 31,
    title: "Barn Before Renovation",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarnBefore,
    tags: ["Remodels"],
    description: "Original barn structure with dated brown siding before transformation"
  },
  {
    id: 32,
    title: "Hay Storage Before Renovation",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroHayStorageBefore,
    tags: ["Remodels"],
    description: "Original hay storage lean-to structure before modern updates"
  },
  {
    id: 33,
    title: "Workshop Before Renovation",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroWorkshopBefore,
    tags: ["Remodels"],
    description: "Original workshop/shed before modern farmhouse transformation"
  },
  // Oliviero Exterior Expanded Gallery
  {
    id: 34,
    title: "Oliviero Front Porch Entry",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroFrontPorch,
    tags: ["Remodels"],
    description: "Welcoming covered porch with craftsman door, pendant lighting, and American flag"
  },
  {
    id: 35,
    title: "Property View Through Split-Rail Fence",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroPropertyFence,
    tags: ["Remodels"],
    description: "Artistic perspective of complete property transformation with main home and outbuildings"
  },
  {
    id: 36,
    title: "Side Exterior with Patio Seating",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroSidePatio,
    tags: ["Remodels"],
    description: "Functional outdoor living space with durable metal roofing and comfortable seating"
  },
  {
    id: 37,
    title: "Back Patio & Outdoor Living",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBackPatio,
    tags: ["Remodels"],
    description: "Stunning outdoor entertaining space with multi-level deck, fire pit, and spa area"
  },
  {
    id: 38,
    title: "Renovated Barn – Portrait View",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarnPortrait,
    tags: ["Remodels"],
    description: "Charming barn conversion with reclaimed wood doors and intimate outdoor seating"
  },
  {
    id: 39,
    title: "Barn with Property Context",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroBarnWide,
    tags: ["Remodels"],
    description: "Cohesive property design with matching dark siding and rustic wood accents"
  },
  {
    id: 40,
    title: "Front Door Craftsmanship Detail",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroFrontDoor,
    tags: ["Remodels"],
    description: "Handcrafted entry door with knotty alder wood, glass panes, and industrial pendant fixture"
  },
  // Oliviero Interior & Property Expanded
  {
    id: 41,
    title: "Oliviero Kitchen – Island to Dining View",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroKitchenIsland,
    tags: ["Remodels"],
    description: "Open floor plan showcasing quartz island, mint pendant lighting, and rustic dining area with panoramic property views"
  },
  {
    id: 42,
    title: "Living Room – Stove Wall & Dining Connection",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroLivingStove,
    tags: ["Remodels"],
    description: "Cozy farmhouse living space with cast iron stove, shiplap walls, and indoor-outdoor barn connection"
  },
  {
    id: 43,
    title: "Oliviero Property – Wide Lawn Perspective",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroPropertyWide,
    tags: ["Remodels"],
    description: "Comprehensive property view showing complete transformation with coordinated exterior finishes and outdoor living spaces"
  },
  {
    id: 44,
    title: "Oliviero Exterior – Front Lawn View",
    category: "Remodels",
    location: "Central Oregon",
    image: olivieroExteriorFrontLawn,
    tags: ["Remodels"],
    description: "Front approach view showing dark board and batten siding, welcoming covered porch, and integrated outdoor structures"
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory));

  // Prepare images for lightbox
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
            Browse recent decks, remodels, and Sunriver projects completed by Purple Rain Construction.
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
              <h3 className="text-lg font-semibold mb-3">Gilchrest A-Frame Front</h3>
              <BeforeAfterSlider
                beforeImage={gilchrestFrontBefore}
                afterImage={gilchrestFrontAfter}
                beforeAlt="Gilchrest A-Frame before renovation"
                afterAlt="Gilchrest A-Frame after renovation"
                className="aspect-[4/3]"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Oliviero Exterior</h3>
              <BeforeAfterSlider
                beforeImage={olivieroFrontBefore}
                afterImage={olivieroFrontAfter}
                beforeAlt="Oliviero home before renovation"
                afterAlt="Oliviero home after renovation"
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
