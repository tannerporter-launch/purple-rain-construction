import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Phone, ArrowRight } from "lucide-react";

// Import local blog images
import deckMaterialsImg from "@/assets/blog/deck-materials.jpg";
import sunriverMaintenanceImg from "@/assets/blog/sunriver-maintenance.jpg";
import compositeVsWoodImg from "@/assets/blog/composite-vs-wood.jpg";

// Sample blog posts data - in production, this would come from a CMS
const blogPostsData: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}> = {
  "choosing-right-deck-material-central-oregon": {
    title: "Choosing the Right Deck Material for Central Oregon's Climate",
    excerpt: "Learn how to select decking materials that withstand our unique freeze-thaw cycles, heavy snow loads, and intense UV exposure.",
    date: "2024-12-01",
    readTime: "5 min read",
    category: "Deck Building",
    image: deckMaterialsImg,
    content: `
## Why Material Selection Matters in Central Oregon

Central Oregon's climate presents unique challenges for outdoor structures. With temperature swings from -10°F to 90°F, heavy snow loads in winter, and intense high-altitude UV exposure, choosing the right deck material is crucial for longevity and performance.

### The Freeze-Thaw Challenge

Our region experiences over 200 freeze-thaw cycles per year. This constant expansion and contraction can wreak havoc on poorly chosen materials. Water seeps into cracks, freezes, expands, and slowly destroys the decking from within.

**What to look for:**
- Materials with low moisture absorption
- Products rated for freeze-thaw cycling
- Proper drainage and ventilation design

### Composite vs. Traditional Wood

**Trex Composite Decking:**
- Excellent freeze-thaw resistance
- Low maintenance requirements
- 25-year warranty protection
- Consistent color throughout
- Ideal for vacation rentals and second homes

**Natural Wood Options:**
- Cedar: Good natural resistance but requires annual maintenance
- Redwood: Beautiful but expensive and high-maintenance
- Pressure-treated pine: Budget-friendly but shorter lifespan

### Snow Load Considerations

In Sunriver and higher elevations, decks must support significant snow loads. This affects not just the decking surface, but the entire structural design including:

- Joist sizing and spacing
- Post and beam dimensions
- Foundation requirements
- Railing attachment methods

### Our Recommendation

For most Central Oregon homeowners, we recommend **Trex composite decking** for its superior performance in our climate. As TrexPro® certified builders, we've seen firsthand how composite materials outperform wood in our challenging conditions.

*Ready to discuss your deck project? Contact us for a free consultation.*
    `,
  },
  "sunriver-deck-maintenance-tips": {
    title: "Sunriver Deck Maintenance: Preparing for Winter",
    excerpt: "Essential tips for protecting your Sunriver deck from snow damage and ensuring it lasts for decades.",
    date: "2024-11-15",
    readTime: "4 min read",
    category: "Maintenance",
    image: sunriverMaintenanceImg,
    content: `
## Protecting Your Sunriver Investment

Your deck is one of the most valuable outdoor features of your Sunriver home. Proper winter preparation ensures it stays beautiful and functional for years to come.

### Pre-Winter Checklist

**1. Thorough Cleaning**
Before snow arrives, give your deck a complete cleaning:
- Remove all furniture and planters
- Sweep away debris and leaves
- Clean between deck boards
- Check for any trapped moisture

**2. Inspect for Damage**
Look carefully for:
- Loose or popped fasteners
- Cracked or split boards
- Soft spots indicating rot
- Railing stability issues

**3. Apply Protective Treatment**
For wood decks:
- Apply water-repellent sealant
- Touch up any worn stain areas
- Treat any bare wood exposed by damage

### Snow Removal Best Practices

**DO:**
- Use a plastic shovel or snow blower
- Shovel with the grain of the wood
- Remove snow before it becomes ice
- Clear snow away from the house

**DON'T:**
- Use metal shovels on the deck surface
- Apply rock salt (damages wood and composite)
- Let snow pile higher than railings
- Use ice picks or sharp tools

### When to Call a Professional

Contact us if you notice:
- Structural movement or settling
- Multiple damaged boards
- Water damage to support posts
- Railing instability

*Need help preparing your deck for winter? Our maintenance services ensure your deck is ready for whatever Central Oregon weather brings.*
    `,
  },
  "composite-vs-wood-decking": {
    title: "Composite vs. Wood Decking: Which Is Right for You?",
    excerpt: "A comprehensive comparison of Trex composite decking and natural wood options for Central Oregon homes.",
    date: "2024-11-01",
    readTime: "6 min read",
    category: "Deck Building",
    image: compositeVsWoodImg,
    content: `
## Making the Right Choice for Your Home

When planning a new deck, one of the biggest decisions is material selection. Here's an honest comparison of your options.

### Composite Decking (Trex)

**Advantages:**
- Minimal maintenance required
- Won't rot, warp, or splinter
- Consistent color and appearance
- 25-year fade and stain warranty
- Eco-friendly (made from recycled materials)

**Considerations:**
- Higher upfront cost
- Can get hot in direct sun
- Requires specific installation techniques

**Best for:** Second homes, vacation rentals, busy families, anyone wanting low maintenance.

### Natural Wood

**Advantages:**
- Lower initial cost
- Natural beauty and warmth
- Easy to repair individual boards
- Can be refinished to change color

**Considerations:**
- Annual sealing/staining required
- Will eventually gray and weather
- Can splinter, crack, and warp
- Shorter lifespan in harsh climates

**Best for:** Those who enjoy deck maintenance, budget-conscious projects, traditional aesthetic preferences.

### Cost Comparison Over Time

| Factor | Composite | Wood |
|--------|-----------|------|
| Initial Cost | Higher | Lower |
| Annual Maintenance | ~$0 | $200-500 |
| 10-Year Total Cost | Lower | Higher |
| Lifespan | 25-50 years | 10-20 years |

### Our Professional Opinion

For Central Oregon's climate, we typically recommend composite decking. The extreme temperature swings, UV exposure, and moisture cycles are particularly hard on natural wood.

*Want to see samples of both options? Contact us to schedule a consultation.*
    `,
  },
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary text-primary-foreground rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <div 
                className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-muted-foreground [&>ul>li]:mb-2 [&>strong]:text-foreground [&>em]:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/##\s(.+)/g, '<h2>$1</h2>').replace(/###\s(.+)/g, '<h3>$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>') }}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Contact us today for a free estimate on your deck or remodeling project.
                </p>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/contact">
                    Request a Quote
                  </Link>
                </Button>
                <div className="mt-4 text-center">
                  <a href="tel:541-408-2712" className="text-sm flex items-center justify-center gap-2 hover:underline">
                    <Phone className="h-4 w-4" />
                    (541) 408-2712
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-bold mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/decks" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Deck Building
                    </Link>
                  </li>
                  <li>
                    <Link to="/sunriver-deck-builder" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Sunriver Decks
                    </Link>
                  </li>
                  <li>
                    <Link to="/remodeling" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Remodeling
                    </Link>
                  </li>
                  <li>
                    <Link to="/snow-removal" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Snow Removal
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">More From Our Blog</h2>
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Posts
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;