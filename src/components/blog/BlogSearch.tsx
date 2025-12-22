import { useState, useMemo } from "react";
import { Search, X, Filter, Calendar, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

interface BlogSearchProps {
  posts: BlogPost[];
  onFilteredPosts: (posts: BlogPost[]) => void;
}

const DATE_RANGES = [
  { value: "all", label: "All Time" },
  { value: "week", label: "Last Week" },
  { value: "month", label: "Last Month" },
  { value: "3months", label: "Last 3 Months" },
  { value: "year", label: "This Year" },
];

const BlogSearch = ({ posts, onFilteredPosts }: BlogSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDateRange, setSelectedDateRange] = useState("all");

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(posts.map((post) => post.category))];
    return ["all", ...uniqueCategories.sort()];
  }, [posts]);

  // Filter posts based on all criteria
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Text search (title + excerpt)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    // Date range filter
    if (selectedDateRange !== "all") {
      const now = new Date();
      let cutoffDate = new Date();

      switch (selectedDateRange) {
        case "week":
          cutoffDate.setDate(now.getDate() - 7);
          break;
        case "month":
          cutoffDate.setMonth(now.getMonth() - 1);
          break;
        case "3months":
          cutoffDate.setMonth(now.getMonth() - 3);
          break;
        case "year":
          cutoffDate.setFullYear(now.getFullYear() - 1);
          break;
      }

      filtered = filtered.filter((post) => new Date(post.date) >= cutoffDate);
    }

    return filtered;
  }, [posts, searchQuery, selectedCategory, selectedDateRange]);

  // Notify parent of filtered posts
  useMemo(() => {
    onFilteredPosts(filteredPosts);
  }, [filteredPosts, onFilteredPosts]);

  const hasActiveFilters =
    searchQuery || selectedCategory !== "all" || selectedDateRange !== "all";

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedDateRange("all");
  };

  const activeFilterCount = [
    searchQuery ? 1 : 0,
    selectedCategory !== "all" ? 1 : 0,
    selectedDateRange !== "all" ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="bg-card border border-border/50 rounded-lg p-4 md:p-6 mb-8 animate-fade-in">
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Category Filter */}
        <div className="flex-1">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Category" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Range Filter */}
        <div className="flex-1">
          <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
            <SelectTrigger className="w-full">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Date Range" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {DATE_RANGES.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="shrink-0"
          >
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Results Count & Active Filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="h-4 w-4" />
          <span>
            {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
          </span>
        </div>

        {/* Active Filter Badges */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 ml-2">
            {searchQuery && (
              <Badge variant="secondary" className="text-xs">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-1 hover:text-destructive"
                  aria-label="Remove search filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="text-xs">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-1 hover:text-destructive"
                  aria-label="Remove category filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedDateRange !== "all" && (
              <Badge variant="secondary" className="text-xs">
                {DATE_RANGES.find((r) => r.value === selectedDateRange)?.label}
                <button
                  onClick={() => setSelectedDateRange("all")}
                  className="ml-1 hover:text-destructive"
                  aria-label="Remove date filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSearch;
