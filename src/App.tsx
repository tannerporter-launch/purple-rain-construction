import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Index from "./pages/Index";
import Decks from "./pages/Decks";
import SunriverDeckBuilder from "./pages/SunriverDeckBuilder";
import SnowRemoval from "./pages/SnowRemoval";
import Remodeling from "./pages/Remodeling";
import NewConstruction from "./pages/NewConstruction";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ServiceAreas from "./pages/ServiceAreas";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/services/decks" element={<Decks />} />
          <Route path="/sunriver-deck-builder" element={<SunriverDeckBuilder />} />
          <Route path="/snow-removal" element={<SnowRemoval />} />
          <Route path="/services/snow-removal" element={<SnowRemoval />} />
          <Route path="/remodeling" element={<Remodeling />} />
          <Route path="/services/remodeling" element={<Remodeling />} />
          <Route path="/new-construction" element={<NewConstruction />} />
          <Route path="/services/new-construction" element={<NewConstruction />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
