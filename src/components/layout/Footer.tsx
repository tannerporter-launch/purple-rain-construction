import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block h-12">
              <img
                src={logo}
                alt="Purple Rain Construction logo"
                className="h-full w-auto object-contain"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Family-owned construction company serving Central Oregon with quality deck building, remodeling, and seasonal snow removal.
            </p>
            <p className="text-background/60 text-sm">
              CCB #247140 | Licensed, Bonded & Insured
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/purplerainconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-background" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561896246653"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background/10 hover:bg-primary transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Decks", href: "/decks" },
                { label: "Remodeling", href: "/remodeling" },
                { label: "Snow Removal", href: "/snow-removal" },
                { label: "Sunriver Services", href: "/sunriver-deck-builder" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Service Areas</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Sunriver, Oregon
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Bend, Oregon
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Redmond, Oregon
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/service-areas"
                className="text-primary hover:text-primary-glow transition-colors text-sm font-medium"
              >
                View All Service Areas →
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:541-408-0925"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(541) 408-0925</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@purpleraincs.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">admin@purpleraincs.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {/* Trust Badges - Styled as badge elements */}
              <div className="px-3 py-1.5 rounded-md border border-primary/40 bg-primary/10 text-xs text-background/80 font-medium">
                BBB Accredited
              </div>
              <div className="px-3 py-1.5 rounded-md border border-primary/40 bg-primary/10 text-xs text-background/80 font-medium">
                COBA Member
              </div>
              <div className="px-3 py-1.5 rounded-md border border-primary/40 bg-primary/10 text-xs text-background/80 font-medium">
                TrexPro® Builder
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Purple Rain Construction. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-background/50 hover:text-background text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/50 hover:text-background text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/faq"
                className="text-background/50 hover:text-background text-sm transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;