import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, Hammer, Trees, Phone, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-extrabold text-gradient">
                404
              </span>
            </div>
            
            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Looks like this page has been demolished. Don't worry — we're better at building things than breaking them!
            </p>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
            
            {/* Quick Links */}
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-6">
                Or explore our services:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link 
                  to="/decks" 
                  className="flex flex-col items-center p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <Hammer className="h-8 w-8 text-primary mb-2" />
                  <span className="font-medium text-sm">Deck Building</span>
                </Link>
                <Link 
                  to="/sunriver-deck-builder" 
                  className="flex flex-col items-center p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <Trees className="h-8 w-8 text-primary mb-2" />
                  <span className="font-medium text-sm">Sunriver</span>
                </Link>
                <Link 
                  to="/remodeling" 
                  className="flex flex-col items-center p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <Home className="h-8 w-8 text-primary mb-2" />
                  <span className="font-medium text-sm">Remodeling</span>
                </Link>
                <Link 
                  to="/gallery" 
                  className="flex flex-col items-center p-4 bg-card rounded-lg border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <ArrowLeft className="h-8 w-8 text-primary mb-2" />
                  <span className="font-medium text-sm">Gallery</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
