import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

// Comprehensive markdown parser for blog content
const parseMarkdown = (content: string): string => {
  let html = content.trim();
  
  // Parse tables first (before other replacements can interfere)
  html = html.replace(/\|(.+)\|\n\|[-|\s]+\|\n((?:\|.+\|\n?)+)/g, (match, header, rows) => {
    const headerCells = header.split('|').filter((cell: string) => cell.trim()).map((cell: string) => 
      `<th class="article-table-header">${cell.trim()}</th>`
    ).join('');
    
    const bodyRows = rows.trim().split('\n').map((row: string) => {
      const cells = row.split('|').filter((cell: string) => cell.trim()).map((cell: string) => 
        `<td class="article-table-cell">${cell.trim()}</td>`
      ).join('');
      return `<tr class="article-table-row">${cells}</tr>`;
    }).join('');
    
    return `<div class="article-table-wrapper"><table class="article-table"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
  });
  
  // Split into paragraphs/sections
  const blocks = html.split(/\n\n+/);
  
  const processedBlocks = blocks.map(block => {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) return '';
    
    // Headers - process ### before ## (order matters!)
    if (trimmedBlock.startsWith('### ')) {
      const text = trimmedBlock.replace(/^### /, '');
      return `<h3 class="article-h3">${processInlineFormatting(text)}</h3>`;
    }
    
    if (trimmedBlock.startsWith('## ')) {
      const text = trimmedBlock.replace(/^## /, '');
      return `<h2 class="article-h2">${processInlineFormatting(text)}</h2>`;
    }
    
    // Blockquotes
    if (trimmedBlock.startsWith('>')) {
      const text = trimmedBlock.replace(/^>\s*/gm, '');
      return `<blockquote class="article-blockquote">${processInlineFormatting(text)}</blockquote>`;
    }
    
    // Unordered lists
    if (trimmedBlock.match(/^[-*]\s/m)) {
      const items = trimmedBlock.split('\n')
        .filter(line => line.match(/^[-*]\s/))
        .map(line => {
          const text = line.replace(/^[-*]\s+/, '');
          return `<li class="article-list-item">${processInlineFormatting(text)}</li>`;
        })
        .join('');
      return `<ul class="article-list">${items}</ul>`;
    }
    
    // Ordered lists
    if (trimmedBlock.match(/^\d+\.\s/m)) {
      const items = trimmedBlock.split('\n')
        .filter(line => line.match(/^\d+\.\s/))
        .map(line => {
          const text = line.replace(/^\d+\.\s+/, '');
          return `<li class="article-list-item">${processInlineFormatting(text)}</li>`;
        })
        .join('');
      return `<ol class="article-ordered-list">${items}</ol>`;
    }
    
    // Table already processed
    if (trimmedBlock.includes('article-table')) {
      return trimmedBlock;
    }
    
    // Bold headings that appear on their own line (like "**What to look for:**")
    if (trimmedBlock.match(/^\*\*[^*]+:\*\*$/)) {
      const text = trimmedBlock.replace(/\*\*/g, '');
      return `<p class="article-subheading">${text}</p>`;
    }
    
    // Regular paragraphs
    const lines = trimmedBlock.split('\n').map(line => processInlineFormatting(line)).join('<br/>');
    return `<p class="article-paragraph">${lines}</p>`;
  });
  
  return processedBlocks.filter(b => b).join('\n');
};

// Process inline formatting (bold, italic, etc.)
const processInlineFormatting = (text: string): string => {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="article-bold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="article-italic">$1</em>')
    .replace(/`([^`]+)`/g, '<code class="article-code">$1</code>');
};

// Import local blog images
import deckMaterialsImg from "@/assets/blog/deck-materials.jpg";
import sunriverMaintenanceImg from "@/assets/blog/sunriver-maintenance.jpg";
import compositeVsWoodImg from "@/assets/blog/composite-vs-wood.jpg";
import kitchenTrendsImg from "@/assets/blog/kitchen-trends.jpg";
import snowRemovalTipsImg from "@/assets/blog/snow-removal-tips.jpg";
import deckPermitsImg from "@/assets/blog/deck-permits.jpg";

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
    date: "2025-01-15",
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
    date: "2025-01-08",
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
    date: "2025-01-01",
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
  "kitchen-remodel-trends-2024": {
    title: "Kitchen Remodel Trends for 2024: What Central Oregon Homeowners Want",
    excerpt: "Discover the most popular kitchen renovation features and designs our clients are requesting this year.",
    date: "2024-12-20",
    readTime: "5 min read",
    category: "Remodeling",
    image: kitchenTrendsImg,
    content: `
## What Central Oregon Homeowners Are Asking For

Kitchen remodeling trends evolve each year, but certain features have proven particularly popular among our Central Oregon clients. Here's what we're seeing in 2024.

### Open Concept Living

The demand for open floor plans continues strong. Homeowners want:
- Kitchen islands that serve as gathering spaces
- Seamless transitions between cooking and living areas
- Clear sightlines to outdoor views (especially mountain vistas)
- Multi-functional spaces for cooking, dining, and entertaining

### Mountain-Modern Aesthetics

Central Oregon homeowners are embracing a distinctive style that blends:

**Natural Elements:**
- Reclaimed wood accents and beams
- Stone countertops and backsplashes
- Large windows framing outdoor views
- Earthy, warm color palettes

**Modern Touches:**
- Clean-lined cabinetry
- Integrated appliances
- Minimalist hardware
- Smart home technology

### Functional Upgrades That Matter

Beyond aesthetics, practical improvements are top priorities:

**Storage Solutions:**
- Pull-out pantry systems
- Deep drawers for pots and pans
- Appliance garages for countertop clutter
- Custom cabinet organizers

**Appliance Upgrades:**
- Professional-grade ranges
- Built-in refrigeration
- Induction cooktops
- Steam ovens and speed ovens

### Outdoor Connection

Given our beautiful Central Oregon setting, connecting indoor and outdoor spaces is essential:
- Pass-through windows to outdoor entertaining areas
- Indoor-outdoor bars and serving counters
- Views of the Cascades from kitchen workspaces
- Easy access to deck dining areas

### Sustainable Choices

Eco-conscious options are increasingly popular:
- Energy-efficient appliances
- Low-VOC finishes and paints
- Recycled or sustainably sourced materials
- LED lighting throughout

*Planning a kitchen remodel? We'd love to help you create a space that works for your lifestyle and showcases Central Oregon's beauty.*
    `,
  },
  "snow-removal-tips-sunriver": {
    title: "Snow Removal Best Practices for Sunriver Property Owners",
    excerpt: "How to keep your driveway and walkways safe during Central Oregon's snowy winters.",
    date: "2024-12-10",
    readTime: "4 min read",
    category: "Snow Removal",
    image: snowRemovalTipsImg,
    content: `
## Staying Safe and Accessible All Winter

Sunriver's snowy winters require consistent attention to keep properties safe and accessible. Whether you manage your own snow removal or hire professionals, here's what you need to know.

### Understanding Sunriver's Snow Patterns

Our area typically experiences:
- Average annual snowfall of 30-40 inches
- Multiple smaller storms rather than single large dumps
- Quick temperature swings that create ice
- Wind-driven snow that accumulates in drifts

### DIY Snow Removal Tips

**Equipment Essentials:**
- Quality snow blower (two-stage recommended)
- Plastic shovels for detail work
- Ice melt products safe for concrete
- Sand or traction grit for icy areas

**Timing Matters:**
- Clear snow before it compacts
- Remove snow before temperatures drop (prevents ice)
- Don't wait for the storm to end—work in stages
- Early morning clearing prevents daytime compaction

**Technique Tips:**
- Blow snow downwind when possible
- Create clear paths to all exits
- Clear around heat pumps and vents
- Keep storm drains accessible

### When to Hire Professionals

Consider professional snow removal if you:
- Own a vacation rental that needs consistent access
- Have a long or steep driveway
- Cannot physically manage snow removal
- Want peace of mind during storm season
- Live out of the area and need reliable service

### Our Professional Snow Removal Services

Purple Rain Construction offers reliable snow removal for Sunriver properties:

**What We Provide:**
- Priority response for contracted clients
- Driveway and walkway clearing
- Roof snow removal when needed
- Ice management and treatment
- Real-time updates via our project portal

**Service Area:**
We primarily serve Sunriver, with limited availability in Bend and Redmond for existing clients.

### Protecting Your Property

Beyond clearing snow, protect your investment:
- Ensure proper drainage away from foundation
- Check gutters before winter arrives
- Trim branches that could break under snow load
- Mark driveway edges to prevent plow damage

*Need reliable snow removal this winter? Contact us to discuss service options for your Sunriver property.*
    `,
  },
  "deck-permit-requirements-deschutes-county": {
    title: "Understanding Deck Permit Requirements in Deschutes County",
    excerpt: "Navigate the permitting process with ease. Here's what you need to know before building your deck.",
    date: "2024-12-01",
    readTime: "4 min read",
    category: "Permits & Planning",
    image: deckPermitsImg,
    content: `
## Navigating Deschutes County Deck Permits

Building a deck in Central Oregon requires proper permits. Understanding the process upfront saves time, money, and headaches. Here's what every homeowner should know.

### When Do You Need a Permit?

**Permits Required For:**
- Any attached deck (connected to your home)
- Decks over 30 inches above grade
- Decks over 200 square feet
- Any deck with a roof or cover
- Hot tub or spa installations on decks

**May Not Require Permits:**
- Freestanding decks under 30 inches and 200 sq ft
- Simple platform decks at grade level
- Replacement of existing deck boards (no structural changes)

*Always verify with Deschutes County—requirements can change.*

### The Permit Process

**Step 1: Site Plan**
You'll need a plot plan showing:
- Property boundaries and setbacks
- Existing structures
- Proposed deck location and dimensions
- Distance to property lines

**Step 2: Construction Drawings**
Plans must include:
- Framing details (joists, beams, posts)
- Foundation specifications
- Ledger board attachment details
- Railing design and heights
- Materials specifications

**Step 3: Submit Application**
- Apply online or at the Deschutes County Community Development office
- Pay applicable fees (varies by project size)
- Allow 2-4 weeks for plan review

**Step 4: Inspections**
Typical inspection points:
- Footing/foundation inspection
- Framing inspection
- Final inspection

### Sunriver-Specific Requirements

Building in Sunriver? You'll need **both**:

1. **SROA Approval** (Sunriver Owners Association)
   - Design review for aesthetics
   - Form E submission required
   - 2-3 week review process
   - Focus on community standards

2. **Deschutes County Permit**
   - Building code compliance
   - Structural requirements
   - Safety standards

*SROA approval and county permits are separate processes with different requirements.*

### Common Permit Mistakes to Avoid

**Don't:**
- Start construction before permits are approved
- Assume your contractor handles everything (verify!)
- Ignore setback requirements
- Skip required inspections
- Build different from approved plans

### How We Help

As experienced Central Oregon deck builders, we handle the permit process for our clients:
- Prepare all required documentation
- Submit applications on your behalf
- Coordinate with inspectors
- Ensure code compliance throughout

*Ready to start your deck project? We'll guide you through every step of the permit process.*
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

  const canonicalUrl = `https://purpleraincs.com/blog/${slug}`;

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Purple Rain Construction Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": "Purple Rain Construction"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Purple Rain Construction",
              "logo": {
                "@type": "ImageObject",
                "url": "https://purpleraincs.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl animate-fade-in">
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
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <article className="lg:col-span-2 animate-fade-in">
              <div className="article-content bg-card rounded-xl border border-border/50 p-6 md:p-10 shadow-sm">
                <div 
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
                />
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-primary text-primary-foreground rounded-lg p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-bold mb-3">Ready to Get Started?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Contact us today for a free estimate on your deck or remodeling project.
                </p>
                <Button asChild variant="secondary" className="w-full btn-glow">
                  <Link to="/contact">
                    Request a Quote
                  </Link>
                </Button>
                <div className="mt-4 text-center">
                  <a href="tel:541-408-0925" className="text-sm flex items-center justify-center gap-2 hover:underline">
                    <Phone className="h-4 w-4" />
                    (541) 408-0925
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-card border rounded-lg p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h3 className="font-bold mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/decks" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                      Deck Building
                    </Link>
                  </li>
                  <li>
                    <Link to="/sunriver-deck-builder" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                      Sunriver Decks
                    </Link>
                  </li>
                  <li>
                    <Link to="/remodeling" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                      Remodeling
                    </Link>
                  </li>
                  <li>
                    <Link to="/snow-removal" className="text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors">
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
            <Button asChild variant="outline" className="btn-glow">
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
