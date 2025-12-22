import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

interface RelatedPostsProps {
  currentSlug: string;
  currentCategory: string;
  allPosts: Record<string, {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
  }>;
}

const RelatedPosts = ({ currentSlug, currentCategory, allPosts }: RelatedPostsProps) => {
  // Convert to array and filter out current post
  const postsArray: BlogPost[] = Object.entries(allPosts)
    .filter(([slug]) => slug !== currentSlug)
    .map(([slug, post]) => ({
      ...post,
      slug,
    }));

  // Find posts in the same category first
  const sameCategoryPosts = postsArray.filter(post => post.category === currentCategory);
  
  // Get other posts as fallback
  const otherPosts = postsArray.filter(post => post.category !== currentCategory);
  
  // Combine: category matches first, then others, limit to 3
  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3);

  if (relatedPosts.length === 0) return null;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-12 md:py-16 bg-muted">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
