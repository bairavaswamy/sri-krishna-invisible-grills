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

export const localBusinessSchema = (
  location: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",

  "@id": `${url}#localbusiness`,
  url: url,

  name: `Rohini Invisible Grills - ${location}`,

  parentOrganization: {
    "@id": "https://rohiniinvisiblegrills.com/#organization"
  },

  description: `Rohini Invisible Grills offers ${services.join(", ")} services in ${location}, delivering customized balcony safety and bird protection solutions for modern homes and high-rise buildings. Our expert team ensures safe installation, durable materials and long-lasting protection while preserving ventilation and exterior aesthetics.`,

  telephone: "+91-8790518724",
  priceRange: "₹₹",

  image: [
    "https://rohiniinvisiblegrills.com/images/invisible-grills-installation.webp",
    "https://rohiniinvisiblegrills.com/images/anti-bird-net-balcony.webp",
    "https://rohiniinvisiblegrills.com/images/Box-cricket-sports-nets-installation.webp",
    "https://rohiniinvisiblegrills.com/images/invisible-grill.webp",
    "https://rohiniinvisiblegrills.com/images/pigeon-safety-invisible-grills.webp",
    "https://rohiniinvisiblegrills.com/images/children-safety-invisible-grills-in-hyderabad.webp"
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: location,
    addressRegion: "Telangana",
    addressCountry: "IN"
  },

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

  sameAs: [
    "https://g.page/r/YOUR-GMB-ID"
  ],

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

});