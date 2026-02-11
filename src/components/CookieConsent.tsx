import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

type ConsentState = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const CONSENT_KEY = "prc_cookie_consent";

const getStoredConsent = (): ConsentState | null => {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

// Track whether GA4 has already been injected this session
let ga4Injected = false;

const injectGA4 = () => {
  if (typeof window === "undefined" || ga4Injected) return;
  ga4Injected = true;

  const script1 = document.createElement("script");
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-P6MM594ZGJ";
  script1.async = true;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-P6MM594ZGJ');
  `;
  document.head.appendChild(script2);
};

export { CONSENT_KEY, getStoredConsent, injectGA4 };

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else if (consent.analytics) {
      injectGA4();
    }
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const consent: ConsentState = {
      functional: true,
      analytics,
      marketing,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

    if (analytics) {
      injectGA4();
    }

    setVisible(false);
  };

  const acceptAll = () => saveConsent(true, true);
  const acceptNecessary = () => saveConsent(false, false);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-background border border-border rounded-2xl shadow-elegant p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">We Value Your Privacy</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. 
              By clicking "Accept All", you consent to our use of cookies.{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
          <button
            onClick={acceptNecessary}
            className="text-muted-foreground hover:text-foreground flex-shrink-0"
            aria-label="Close cookie consent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={acceptAll} className="bg-gradient-primary hover:opacity-90 font-semibold">
            Accept All
          </Button>
          <Button onClick={acceptNecessary} variant="outline">
            Necessary Only
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
