import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Decks", href: "/decks" },
      { label: "Remodeling", href: "/remodeling" },
      { label: "New Construction", href: "/new-construction" },
      { label: "Snow Removal", href: "/snow-removal" },
    ],
  },
  { label: "Sunriver", href: "/sunriver-deck-builder" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center h-14">
            <img
              src={logo}
              alt="Purple Rain Construction logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors ${
                      isActive(item.href) ? "text-primary-foreground" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-48 bg-background rounded-lg shadow-lg py-2 animate-slide-down">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors ${
                    isActive(item.href) ? "text-primary-foreground" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:541-408-2712"
              className="flex items-center gap-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              541-408-2712
            </a>
            <Button
              asChild
              variant="secondary"
              className="font-semibold"
            >
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/20">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-primary-foreground font-medium"
                  >
                    {item.label}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-primary-foreground/80"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-primary-foreground font-medium"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-4 space-y-3">
              <a
                href="tel:541-408-2712"
                className="flex items-center justify-center gap-2 text-primary-foreground font-semibold"
              >
                <Phone className="h-5 w-5" />
                541-408-2712
              </a>
              <Button
                asChild
                variant="secondary"
                className="w-full font-semibold"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
