# Purple Rain Construction - Architecture Documentation

## Project Overview

Purple Rain Construction is a professional website for a construction company based in Central Oregon, specializing in deck building, remodeling, and snow removal services. The site targets homeowners in Bend, Sunriver, La Pine, and surrounding areas.

**Live URL**: purplerainconstruction.com

---

## Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Framework | React 18 | UI library |
| Build Tool | Vite | Fast development & bundling |
| Styling | Tailwind CSS | Utility-first CSS |
| Language | TypeScript | Type safety |
| Routing | React Router v6 | Client-side routing |
| UI Components | shadcn/ui | Accessible component library |
| Icons | Lucide React | Icon library |
| SEO | react-helmet-async | Meta tag management |
| Animations | Tailwind + CSS | Scroll animations, transitions |

---

## Directory Structure

```
src/
├── assets/                 # Static images and media
│   ├── blog/              # Blog post images
│   ├── brand/             # Logos, team photos
│   ├── decks/             # Deck project photos
│   ├── remodels/          # Remodel project photos
│   └── snow-removal/      # Snow removal service images
├── components/
│   ├── blog/              # Blog-specific components
│   │   ├── BlogSearch.tsx       # Search with category/date filters
│   │   ├── ReadingProgress.tsx   # Reading progress bar
│   │   ├── RelatedPosts.tsx      # Related articles section
│   │   ├── SocialShare.tsx       # Social sharing buttons
│   │   └── TableOfContents.tsx   # Scrollspy TOC sidebar
│   ├── forms/             # Form components
│   │   └── ContactForm.tsx
│   ├── layout/            # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   └── ScrollToTop.tsx
│   ├── seo/               # SEO schema components
│   │   ├── FAQSchema.tsx
│   │   ├── LocalBusinessSchema.tsx
│   │   └── ServiceSchema.tsx
│   └── ui/                # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ... (40+ components)
├── hooks/                 # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                   # Utilities
│   └── utils.ts          # cn() helper for classnames
├── pages/                 # Route pages
│   ├── Index.tsx         # Homepage
│   ├── About.tsx
│   ├── Blog.tsx          # Blog listing with search
│   ├── BlogPost.tsx      # Individual blog posts
│   ├── Contact.tsx
│   ├── Decks.tsx
│   ├── Gallery.tsx
│   ├── Services.tsx
│   └── ... (20+ pages)
├── App.tsx               # Root component with routes
├── index.css             # Global styles & design tokens
└── main.tsx              # Entry point
```

---

## Component Architecture

### Layout Components

**Layout.tsx** - Main wrapper providing consistent structure:
- Header with navigation
- ScrollToTop for route changes
- Main content slot
- Footer

**Header.tsx** - Navigation with:
- Logo
- Desktop nav with dropdown menus
- Mobile hamburger menu with sheet overlay
- Sticky positioning with backdrop blur

### Blog System

The blog is a static content system with markdown parsing:

```
BlogPost.tsx
├── parseMarkdown()        # Converts markdown to HTML
├── processInlineFormatting()  # Bold, italic, code
├── calculateReadingTime() # Word count / 200 wpm
├── blogPostsData{}        # Static blog post content
└── Renders:
    ├── ReadingProgress    # Top progress bar
    ├── TableOfContents    # Sidebar with scrollspy
    ├── SocialShare        # Twitter, Facebook, LinkedIn
    └── RelatedPosts       # Category-based recommendations
```

**Blog Components:**

| Component | Purpose |
|-----------|---------|
| `BlogSearch.tsx` | Search input with category dropdown, date range filter, active filter badges, results count |
| `ReadingProgress.tsx` | Fixed progress bar showing scroll position through article |
| `TableOfContents.tsx` | Extracts h2/h3 headings, highlights current section with IntersectionObserver |
| `SocialShare.tsx` | Share buttons with native Web Share API fallback |
| `RelatedPosts.tsx` | Shows 3 related posts, prioritizes same category |

### Blog Search Feature

The `BlogSearch` component provides full-text search and filtering:

```tsx
interface BlogSearchProps {
  posts: BlogPost[];
  onFilteredPosts: (posts: BlogPost[]) => void;
}

// Features:
// - Text search across title and excerpt
// - Category filter dropdown (extracted from posts)
// - Date range filter (All Time, Last Week, Last Month, Last 3 Months, This Year)
// - Active filter badges with individual remove buttons
// - Results count display
// - Clear all filters button
// - Empty state for no results
```

**Filter Logic:**
1. Text search uses `toLowerCase().includes()` on title + excerpt
2. Category filter matches exact category string
3. Date range calculates cutoff date and filters by `post.date >= cutoffDate`
4. All filters are combined with AND logic

### SEO Components

**LocalBusinessSchema.tsx** - JSON-LD structured data for local business
**ServiceSchema.tsx** - Service-specific schema markup
**FAQSchema.tsx** - FAQ page structured data

---

## Routing Structure

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Index | Homepage with hero, services, testimonials |
| `/about` | About | Company story, team info |
| `/services` | Services | Service overview |
| `/decks` | Decks | Deck building service page |
| `/sunriver-deck-builder` | SunriverDeckBuilder | Location-specific deck page |
| `/remodeling` | Remodeling | Remodeling services |
| `/kitchen-remodels` | KitchenRemodels | Kitchen-specific page |
| `/bathroom-remodels` | BathroomRemodels | Bathroom-specific page |
| `/new-construction` | NewConstruction | New build services |
| `/snow-removal` | SnowRemoval | Winter services |
| `/sunriver-sroa-services` | SunriverSROAServices | SROA compliance |
| `/gallery` | Gallery | Project portfolio |
| `/blog` | Blog | Blog listing with search/filter |
| `/blog/:slug` | BlogPost | Individual articles |
| `/contact` | Contact | Contact form |
| `/faq` | FAQ | Frequently asked questions |
| `/service-areas` | ServiceAreas | Coverage area |
| `/privacy` | Privacy | Privacy policy |
| `/terms` | Terms | Terms of service |

---

## Styling System

### Design Tokens (index.css)

```css
:root {
  --primary: 270 60% 45%;           /* Purple brand color */
  --primary-foreground: 0 0% 100%;  /* White text on primary */
  --background: 0 0% 100%;          /* White background */
  --foreground: 222.2 84% 4.9%;     /* Dark text */
  --muted: 210 40% 96.1%;           /* Light gray background */
  --accent: 210 40% 96.1%;          /* Accent surfaces */
  --gradient-primary: linear-gradient(...);
}
```

### Animation Classes

```css
.animate-fade-in      /* Fade in on scroll */
.animate-slide-up     /* Slide up with fade */
.animate-scale-in     /* Scale in effect */
.btn-glow             /* Button hover glow */
.card-hover           /* Card lift effect */
```

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## Image Handling

### Local Assets
All images are imported as ES6 modules from `src/assets/`:

```tsx
import heroImage from "@/assets/brand/team-action-saw.jpg";
<img src={heroImage} alt="Team working" />
```

### Image Organization

```
assets/
├── blog/           # 800x500px blog thumbnails
├── brand/          # Logos, team photos
├── decks/          # Before/after project photos
├── remodels/       # Project galleries by client
│   ├── gilchrest-a-frame/
│   ├── oliviero/
│   └── elke-french-doors/
└── snow-removal/   # Service images
```

---

## Blog Content System

### Markdown Parsing

The `parseMarkdown()` function supports:
- Headers (## H2, ### H3) with auto-generated IDs
- Bold (**text**) and italic (*text*)
- Unordered lists (- item)
- Ordered lists (1. item)
- Blockquotes (> quote)
- Tables (| col | col |)
- Inline code (`code`)

### Reading Time Calculation

```tsx
const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').filter(w => w.length > 0).length;
  return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
};
```

### Table of Contents

Uses IntersectionObserver to track visible headings:
```tsx
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveId(entry.target.id);
    }
  });
}, { rootMargin: '-20% 0px -80% 0px' });
```

---

## SEO Implementation

### Meta Tags (react-helmet-async)

Each page includes:
- Title tag with keywords
- Meta description
- Canonical URL
- Open Graph tags
- Twitter Card tags

### Structured Data

```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Purple Rain Construction",
  "address": { ... },
  "telephone": "(541) 408-0925",
  "areaServed": ["Bend", "Sunriver", "La Pine"]
}
</script>
```

---

## Performance Optimizations

1. **Lazy Loading** - Images use `loading="lazy"`
2. **Code Splitting** - React Router handles route-based splitting
3. **Tree Shaking** - ES6 imports for Lucide icons
4. **Passive Scroll Listeners** - `{ passive: true }` for scroll handlers
5. **Debounced Scroll** - Throttled scroll calculations

---

## Troubleshooting Guide

### Common Issues

| Issue | Solution |
|-------|----------|
| Images not loading | Check import path, ensure file exists in assets |
| TOC not highlighting | Verify heading IDs match, check IntersectionObserver |
| Reading progress stuck | Ensure articleRef is attached to article element |
| Build fails | Clear node_modules, reinstall dependencies |
| Styles not applying | Check Tailwind class names, verify index.css loaded |
| Blog search not filtering | Verify BlogSearch receives posts array, check console |

### Debug Checklist

1. Check browser console for errors
2. Verify network requests complete
3. Inspect element classes in DevTools
4. Test on multiple viewport sizes
5. Clear browser cache

---

## Learnings & Best Practices for Future Builds

### Include from Start

1. **Design System First**
   - Define all color tokens in index.css before building components
   - Create button, card, and input variants upfront
   - Establish typography scale with semantic classes

2. **Blog Architecture**
   - Use a CMS or headless CMS from day one for content
   - Build markdown parser before writing content
   - Include TOC, reading time, social sharing, and **search** from start

3. **SEO Foundation**
   - Create reusable schema components early
   - Template all meta tags per page type
   - Set up canonical URLs and sitemap generation

4. **Image Pipeline**
   - Establish naming conventions (kebab-case, descriptive)
   - Define size standards per use case (hero, thumbnail, card)
   - Consider WebP conversion for production

5. **Component Patterns**
   - Create Section wrapper with consistent padding
   - Build SectionHeading for uniform styling
   - Use composition over configuration

6. **Search & Filter Early**
   - Implement blog search from the start
   - Export blogPosts data as typed array for reuse
   - Use useCallback for filter handlers to prevent re-renders

### Code Organization

```tsx
// Good: Focused, single-purpose components
<BlogSearch posts={posts} onFilteredPosts={setFiltered} />
<SocialShare url={url} title={title} />
<RelatedPosts currentSlug={slug} allPosts={posts} />

// Avoid: Monolithic components doing everything
<BlogPost> // 700+ lines doing parsing, rendering, SEO, etc.
```

### Performance from Day One

- Add `loading="lazy"` to all images below the fold
- Use `{ passive: true }` for all scroll listeners
- Implement scroll-based animations with IntersectionObserver
- Avoid `window.addEventListener` in render cycle
- Use useMemo for filtered arrays, useCallback for handlers

---

## Future Enhancements

### Planned Features
- [x] Blog search functionality ✅ (Implemented Jan 2025)
- [x] Related posts section ✅
- [x] Social sharing buttons ✅
- [x] Reading progress bar ✅
- [x] Table of contents with scrollspy ✅
- [ ] CMS integration (Sanity, Contentful, or Strapi)
- [ ] Contact form backend (Supabase or Netlify Forms)
- [ ] Newsletter signup integration
- [ ] Google Analytics / Plausible
- [ ] Sitemap.xml generation
- [ ] RSS feed for blog

### Technical Debt
- [ ] Extract blog posts to separate JSON/CMS
- [ ] Create reusable PageHero component
- [ ] Consolidate animation classes
- [ ] Add unit tests for markdown parser
- [ ] Implement error boundaries

---

## Site Status (January 2025)

### ✅ Fully Complete & Functional

| Feature | Status |
|---------|--------|
| Homepage | ✅ Complete |
| All Service Pages | ✅ Complete |
| Blog with Search/Filter | ✅ Complete |
| Blog Posts with TOC, Social Share, Related | ✅ Complete |
| Gallery with Before/After | ✅ Complete |
| Contact Form (frontend) | ✅ Complete |
| Responsive Design | ✅ Complete |
| SEO & Structured Data | ✅ Complete |

### ⚠️ Optional Enhancements (Not Blocking Launch)

| Feature | Status |
|---------|--------|
| Contact Form Backend | Console.log only |
| Google Analytics | Not configured |
| Sitemap.xml | Not generated |
| Newsletter Signup | Not built |

---

## UI Design System & Visual Architecture

### Design Tokens (index.css)

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | 280 100% 32% | Brand purple, CTAs, links |
| `--primary-foreground` | 0 0% 100% | Text on primary surfaces |
| `--background` | 0 0% 100% | Page backgrounds |
| `--foreground` | 222.2 84% 4.9% | Body text |
| `--muted` | 210 40% 96.1% | Secondary backgrounds |
| `--card` | 0 0% 100% | Card surfaces |
| `--border` | 214.3 31.8% 91.4% | Borders |

### Typography Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 3rem-3.75rem | 800 | 1.1 |
| H2 | 1.875rem-2.25rem | 700 | 1.2 |
| H3 | 1.25rem | 600 | 1.3 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 | 1.5 |

### Spacing System

| Context | Mobile | Desktop |
|---------|--------|---------|
| Section padding | py-16 | py-20 |
| Container | px-4 | container mx-auto |
| Card padding | p-6 | p-8 |
| Component gap | gap-4 | gap-6/gap-8 |

### Image Handling Rules

| Context | Aspect Ratio | Object Fit | Treatment |
|---------|--------------|------------|-----------|
| Hero | 16:9 | cover | Overlay gradient |
| Card | 16:9 | cover | rounded-lg/xl |
| Gallery | 4:3 | cover | rounded-xl, shadow |
| Avatar | 1:1 | cover | rounded-full |

### Accessibility Visual Standards

- **Contrast**: 4.5:1 minimum for body text, 3:1 for large text
- **Focus rings**: 2px offset, primary color
- **Tap targets**: 44x44px minimum on mobile
- **Reduced motion**: Respects `prefers-reduced-motion`

---

## Next Build Defaults

### Visual QA Gates (Non-Negotiable)

1. Screenshot every page at 360px, 768px, 1280px, 1920px before launch
2. Test all interactive states: hover, focus, active, disabled
3. Validate image loading and cropping at all breakpoints
4. Check contrast with browser dev tools

### Day One Standards

- Define all color tokens in index.css before first component
- Create button variants (primary, secondary, outline, ghost) immediately
- Set typography scale with semantic classes
- Establish image aspect ratio rules per context
- Build mobile-first, then enhance for desktop

### Common Pitfalls to Avoid

- Don't use hardcoded colors (text-white, bg-purple-600) - use tokens
- Don't forget mobile TOC for long-form content
- Don't rely on default button contrast in hero sections
- Always test social share icons on gradient backgrounds
- Verify all image imports resolve before deployment

---

## Contact & Support

**Company**: Purple Rain Construction  
**Phone**: (541) 408-0925  
**Service Areas**: Bend, Sunriver, La Pine, Redmond, Sisters, Central Oregon

---

*Last Updated: January 2025*
