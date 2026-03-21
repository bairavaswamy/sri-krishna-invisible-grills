import { servicesCat } from "./localBusiness";

/* ---------------- LOCATION DATA ---------------- */

const getAddressForLocation = (location: string) => {
  if (location === "Bachupally") {
    return {
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "862, Lahari Green Park Rd, opp. Vignana Jyothi Engineering College, Near Gothic Pangea",
        addressLocality: "Bachupally",
        addressRegion: "Telangana",
        postalCode: "500118",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.546734,
        longitude: 78.3858506,
      },
      hasMap:
        "https://www.google.com/maps/place/G9WP+M8X+Hyderabad,+Telangana",
    };
  }

  /* fallback */
  return {
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };
};

/* ---------------- SERVICE SCHEMA ---------------- */

export const serviceSchema = (
  title: string,
  slug: string,
  location: string,
  url: string
) => {
  const locationData = getAddressForLocation(location);
  const locationSlug = location.replace(/\s+/g, "-").toLowerCase();

  return {
    "@type": "Service",
    "@id": `${url}#service-${slug}-${locationSlug}`,

    name: `${title} in ${location}`,

    description: `Professional ${title.toLowerCase()} installation service in ${location}. Designed for balcony safety, home protection, and effective bird and pigeon prevention using durable materials.`,

    provider: {
      "@type": "LocalBusiness",
      "@id": `${url}#localbusiness`,
      name: "Rohini Invisible Grills",
      telephone: "+91-8790518724",
      url,
      ...locationData, // ✅ dynamic address + geo injected
    },

    serviceOutput: {
      "@id": `${url}#product-${slug}-${locationSlug}`,
    },

    serviceType: title,

    category:
      "Home Safety Installation Services",

    areaServed: {
      "@type": "City",
      name: location,
    },

    aggregateRating: {
      "@id": `${url}#rating-${slug}-${locationSlug}`,
    },

    mainEntityOfPage: {
      "@id": `${url}#webpage-${slug}-${locationSlug}`,
    },

    keywords: [
      title,
      ...servicesCat,
      location,
      "home safety",
      "balcony protection",
      "bird control",
    ].join(", ").toLowerCase(),
  };
};