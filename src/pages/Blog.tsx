import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, FileSearch } from "lucide-react";
import BlogSearch, { BlogPost } from "@/components/blog/BlogSearch";

// Import local blog images
import deckMaterialsImg from "@/assets/blog/deck-materials.jpg";
import sunriverMaintenanceImg from "@/assets/blog/sunriver-maintenance.jpg";
import compositeVsWoodImg from "@/assets/blog/composite-vs-wood.jpg";
import kitchenTrendsImg from "@/assets/blog/kitchen-trends.jpg";
import snowRemovalTipsImg from "@/assets/blog/snow-removal-tips.jpg";
import deckPermitsImg from "@/assets/blog/deck-permits.jpg";

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    slug: "choosing-right-deck-material-central-oregon",
    title: "Choosing the Right Deck Material for Central Oregon's Climate",
    excerpt: "Learn how to select decking materials that withstand our unique freeze-thaw cycles, heavy snow loads, and intense UV exposure.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Deck Building",
    image: deckMaterialsImg,
  },
  {
    slug: "sunriver-deck-maintenance-tips",
    title: "Sunriver Deck Maintenance: Preparing for Winter",
    excerpt: "Essential tips for protecting your Sunriver deck from snow damage and ensuring it lasts for decades.",
    date: "2025-01-08",
    readTime: "4 min read",
    category: "Maintenance",
    image: sunriverMaintenanceImg,
  },
  {
    slug: "composite-vs-wood-decking",
    title: "Composite vs. Wood Decking: Which Is Right for You?",
    excerpt: "A comprehensive comparison of Trex composite decking and natural wood options for Central Oregon homes.",
    date: "2025-01-01",
    readTime: "6 min read",
    category: "Deck Building",
    image: compositeVsWoodImg,
  },
  {
    slug: "kitchen-remodel-trends-2024",
    title: "Kitchen Remodel Trends for 2024: What Central Oregon Homeowners Want",
    excerpt: "Discover the most popular kitchen renovation features and designs our clients are requesting this year.",
    date: "2024-12-20",
    readTime: "5 min read",
    category: "Remodeling",
    image: kitchenTrendsImg,
  },
  {
    slug: "snow-removal-tips-sunriver",
    title: "Snow Removal Best Practices for Sunriver Property Owners",
    excerpt: "How to keep your driveway and walkways safe during Central Oregon's snowy winters.",
    date: "2024-12-10",
    readTime: "4 min read",
    category: "Snow Removal",
    image: snowRemovalTipsImg,
  },
  {
    slug: "deck-permit-requirements-deschutes-county",
    title: "Understanding Deck Permit Requirements in Deschutes County",
    excerpt: "Navigate the permitting process with ease. Here's what you need to know before building your deck.",
    date: "2024-12-01",
    readTime: "4 min read",
    category: "Permits & Planning",
    image: deckPermitsImg,
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Blog = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  const handleFilteredPosts = useCallback((posts: BlogPost[]) => {
    setFilteredPosts(posts);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Construction Blog | Deck Building & Remodeling Tips – Purple Rain Construction</title>
        <meta 
          name="description" 
          content="Expert advice on deck building, remodeling, and home improvement for Central Oregon homeowners. Tips for Sunriver, Bend, and Redmond projects." 
        />
        <link rel="canonical" href="https://purpleraincs.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Construction Blog | Purple Rain Construction" />
        <meta property="og:description" content="Expert advice on deck building, remodeling, and home improvement for Central Oregon homeowners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://purpleraincs.com/blog" />
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Purple Rain Construction Blog",
            "description": "Expert advice on deck building, remodeling, and home improvement for Central Oregon homeowners.",
            "url": "https://purpleraincs.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Purple Rain Construction",
              "logo": {
                "@type": "ImageObject",
                "url": "https://purpleraincs.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Construction Insights & Tips
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Expert advice on deck building, remodeling, and home improvement for Central Oregon homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 md:py-12">
        <div className="container">
          <BlogSearch posts={blogPosts} onFilteredPosts={handleFilteredPosts} />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article 
                  key={post.slug}
                  className="group bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3 w-fit">
                      {post.category}
                    </span>
                    
                    {/* Title */}
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    
                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <FileSearch className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get a free estimate on your deck, remodel, or snow removal needs.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold btn-glow">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
