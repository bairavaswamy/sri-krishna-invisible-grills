import { socialProfileUrls } from "../constants/socialProfiles";

export const services = [
  "Invisible Grill Installation",
  "Anti Bird Net Installation",
  "Balcony Safety Nets",
  "Pigeon Safety Net Installation",
  "Bird Spikes Installation",
  "Sports Nets Installation"
];

export const servicesCat = [
  "Invisible Grill Installation",
  "Balcony Safety Invisible Grills",
  "Stainless Steel Cable Grill Systems",
  "Anti Bird Net Installation",
  "Pigeon Protection Systems",
  "Children Safety Invisible Grills",
  "Bird Control Solutions",
  "Bird Spikes Installation",
  "Balcony Safety Nets",
  "Children Safety Balcony Protection",
  "Pet Safety Balcony Nets",
  "Window Safety Nets",
  "Duct Area Safety Nets",
  "Terrace Safety Nets",
  "Apartment Balcony Safety Solutions",
  "High Rise Building Safety Installations",
  "Residential Safety Net Solutions",
  "Commercial Safety Net Installations",
  "Sports Nets Installation",
  "Cricket Practice Nets",
  "Box Cricket Nets",
  "Ground Safety Nets",
  "Turf Installation Services",
  "Customized Safety Net Engineering",
  "Urban Bird Prevention Systems",
  "Balcony Protection Engineering",
  "Modern Architectural Safety Installations"
];

const getAddressRegion = (location: string) => {
  const normalizedLocation = location.toLowerCase();

  if (
    normalizedLocation.includes("kadapa") ||
    normalizedLocation.includes("tirupati") ||
    normalizedLocation.includes("kurnool")
  ) {
    return "Andhra Pradesh";
  }

  if (
    normalizedLocation.includes("bangalore") ||
    normalizedLocation.includes("bengaluru") ||
    normalizedLocation.includes("whitefield") ||
    normalizedLocation.includes("sarjapur") ||
    normalizedLocation.includes("electronic city")
  ) {
    return "Karnataka";
  }

  return "Telangana";
};

const getLocalBusinessLocationData = (location: string) => {
  if (location.toLowerCase() === "bachupally") {
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
      branchCode: "bachupally",
    };
  }

  return {
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressRegion: getAddressRegion(location),
      addressCountry: "IN",
    },
  };
};

export const localBusinessSchema = (
  location: string,
  url: string
) => {
  const locationData = getLocalBusinessLocationData(location);

  return {
  "@type": "HomeAndConstructionBusiness",

  name: `Rohini Invisible Grills - ${location}`,

  "@id": `${url}#localbusiness`,
  url: url,

  

  parentOrganization: {
    "@id": "https://rohiniinvisiblegrills.com/#organization"
  },

  description: `Rohini Invisible Grills offers ${services.join(", ")} services in ${location}, delivering customized balcony safety and bird protection solutions for modern homes and high-rise buildings. Our expert team ensures safe installation, durable materials and long-lasting protection while preserving ventilation and exterior aesthetics.`,

  telephone: "+91-8790518724",
  priceRange: "Rs. 15 - Rs. 500",

  image: [
    "https://rohiniinvisiblegrills.com/images/invisible-grills-installation.webp",
    "https://rohiniinvisiblegrills.com/images/anti-bird-net-balcony.webp",
    "https://rohiniinvisiblegrills.com/images/Box-cricket-sports-nets-installation.webp",
    "https://rohiniinvisiblegrills.com/images/invisible-grill.webp",
    "https://rohiniinvisiblegrills.com/images/pigeon-safety-invisible-grills.webp",
    "https://rohiniinvisiblegrills.com/images/children-safety-invisible-grills-in-hyderabad.webp"
  ],

  ...locationData,

  areaServed: {
    "@type": "City",
    name: location
  },

  serviceArea: {
    "@type": "Place",
    name: location
  },

  knowsAbout: [
  "Invisible Grill Installation",
  "Balcony Safety Invisible Grills",
  "Stainless Steel Cable Grill Systems",
  "Anti Bird Net Installation",
  "Pigeon Protection Systems",
  "Children Safety Invisible Grills",
  "Bird Control Solutions",
  "Bird Spikes Installation",
  "Balcony Safety Nets",
  "Children Safety Balcony Protection",
  "Pet Safety Balcony Nets",
  "Window Safety Nets",
  "Duct Area Safety Nets",
  "Terrace Safety Nets",
  "Apartment Balcony Safety Solutions",
  "High Rise Building Safety Installations",
  "Residential Safety Net Solutions",
  "Commercial Safety Net Installations",
  "Sports Nets Installation",
  "Cricket Practice Nets",
  "Box Cricket Nets",
  "Ground Safety Nets",
  "Turf Installation Services",
  "Customized Safety Net Engineering",
  "Urban Bird Prevention Systems",
  "Balcony Protection Engineering",
  "Modern Architectural Safety Installations"
],

contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8790518724",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Telugu"]
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "09:00",
      closes: "20:00"
    }
  ],

  sameAs: socialProfileUrls,

  makesOffer: [
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `Invisible Grill Installation in ${location}`
    }
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `Anti Bird Net Installation in ${location}`
    }
  },
  {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `Balcony Safety Nets Installation in ${location}`
    }
  }
],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Safety Net and Invisible Grill Services in ${location}`,
    itemListElement: servicesCat.map(service => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        areaServed: location
      }
    }))
  },

  potentialAction: {
    "@type": "ReserveAction",
    target: `${url}#contact`,
    name: "Book Installation Service"
  }

};
};
