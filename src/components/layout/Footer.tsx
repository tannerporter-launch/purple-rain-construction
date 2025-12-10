import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
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
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Family-owned construction company serving Central Oregon with quality deck building, remodeling, and seasonal snow removal.
            </p>
            <p className="text-background/60 text-sm">
              CCB #247140 | Licensed, Bonded & Insured
            </p>
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
                  href="tel:541-408-2712"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span>541-408-2712</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@purplerainconstruction.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">info@purplerainconstruction.com</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              {/* Trust Badges */}
              <div className="text-xs text-background/50">
                <p>BBB Accredited</p>
              </div>
              <div className="text-xs text-background/50">
                <p>COBA Member</p>
              </div>
              <div className="text-xs text-background/50">
                <p>TrexPro Builder</p>
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
