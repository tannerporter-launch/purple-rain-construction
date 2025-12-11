import { Helmet } from "react-helmet-async";

interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  priceRange?: string;
}

const ServiceSchema = ({ 
  name, 
  description, 
  serviceType,
  areaServed = ["Sunriver", "Bend", "Redmond"],
  priceRange
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Purple Rain Construction",
      "telephone": "+1-541-408-2712",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bend",
        "addressRegion": "OR",
        "addressCountry": "US"
      }
    },
    "areaServed": areaServed.map(city => ({
      "@type": "City",
      "name": city
    })),
    ...(priceRange && { "priceRange": priceRange })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema;
