import { Helmet } from "react-helmet-async";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Purple Rain Construction",
    "description": "Trusted deck builders and remodeling experts in Central Oregon. Building high-quality decks and remodels in Sunriver, Bend, and Redmond.",
    "url": "https://purplerainconstruction.com",
    "telephone": "+1-541-408-0925",
    "priceRange": "$$-$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bend",
      "addressRegion": "OR",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Sunriver",
        "sameAs": "https://en.wikipedia.org/wiki/Sunriver,_Oregon"
      },
      {
        "@type": "City",
        "name": "Bend",
        "sameAs": "https://en.wikipedia.org/wiki/Bend,_Oregon"
      },
      {
        "@type": "City",
        "name": "Redmond",
        "sameAs": "https://en.wikipedia.org/wiki/Redmond,_Oregon"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Oregon CCB License #247140"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "TrexPro Certified Deck Builder"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "6"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
