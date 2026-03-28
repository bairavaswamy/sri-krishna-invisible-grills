export const organizationSchema = {
  "@type": "HomeAndConstructionBusiness",

  "@id": "https://rohiniinvisiblegrills.com/#organization",

  name: "Rohini Invisible Grills",

  alternateName: [
    "Rohini Anti Bird Nets",
    "Rohini Balcony Safety Nets",
    "Rohini Invisible Grill Installation",
    "Rohini Sports Nets & Turf for Ground",
  ],
  telephone: "+91-8790518724",
  priceRange: "15-500",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN"
  },


  url: "https://rohiniinvisiblegrills.com",

 logo: {
    "@type": "ImageObject",
    "@id": "https://rohiniinvisiblegrills.com/#logo",
    url: "https://rohiniinvisiblegrills.com/Rohini_logo.webp",
    contentUrl: "https://rohiniinvisiblegrills.com/Rohini_logo.webp",
    encodingFormat: "image/webp",
    width: 512,
    height: 512,
    caption: "Rohini Invisible Grills in Hyderabad",
    representativeOfPage: true
},

  image: [
    "https://rohiniinvisiblegrills.com/images/invisible-grills-installation.webp",
    "https://rohiniinvisiblegrills.com/images/anti-bird-net-balcony.webp",
    "https://rohiniinvisiblegrills.com/images/Box-cricket-sports-nets-installation.webp",
    "https://rohiniinvisiblegrills.com/images/invisible-grill.webp",
    "https://rohiniinvisiblegrills.com/images/pigeon-safety-invisible-grills.webp",
    "https://rohiniinvisiblegrills.com/images/children-safety-invisible-grills-in-hyderabad.webp"
  ],

  description:
    "Rohini Invisible Grills is a professional safety solutions brand specializing in invisible grills, balcony protection systems and bird control installations for residential and commercial properties. The company focuses on modern safety designs that maintain open views while improving protection, durability and long-term reliability for urban homes.",

  slogan: "Safe Balconies. Clear Views. Professional Installation.",

  foundingLocation: {
    "@type": "Place",
    name: "Hyderabad, Telangana, India"
  },

  areaServed: [
  { "@type": "City", name: "Hyderabad" },
  { "@type": "City", name: "Warangal" },
  { "@type": "City", name: "Khammam" },
  { "@type": "City", name: "Bangalore" },
  { "@type": "City", name: "Karimnagar" },
  { "@type": "City", name: "Nizamabad" },
  {"@type": "City", name: "Suryapet"}
  
],

serviceArea: [
  {
    "@type": "AdministrativeArea",
    name: "Telangana"
  },
  {
    "@type": "AdministrativeArea",
    name: "Karnataka"
  },
  {
//   "@type": "AdministrativeArea",
//   name: "Andhra Pradesh"
}
],

knowsAbout: [
  "Invisible Grill Installation",
  "Balcony Safety Invisible Grills",
  "Anti Bird Net Installation",
  "Pigeon Safety Nets",
  "Children Safety Balcony Protection",
  "Duct Area Safety Nets",
  "Stainless Steel Cable Grills",
  "Bird Control Systems",
  "Bird Spikes Installation",
  "Sports Nets Installation",
  "Box Cricket Nets",
  "Terrace Safety Nets",
  "Apartment Balcony Safety Solutions",
  "High Rise Building Safety Systems"
],


  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8790518724",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Telugu"]
  },

  sameAs: [
    "https://www.facebook.com/rohiniinvisiblegrills",
    "https://www.instagram.com/rohiniinviaiblegrills/",
    "https://www.linkedin.com/in/rohini-invisible-grills-3099423b9/",
    "https://g.page/r/your-gmb"
  ],

  hasCredential: [
  {
    "@type": "EducationalOccupationalCredential",
    name: "Certified Invisible Grill Installation",
    credentialCategory: "Technical Service Certification"
  },
  {
    "@type": "EducationalOccupationalCredential",
    name: "Safety Installation Training",
    credentialCategory: "Professional Training"
  }
],

  keywords: "invisible grills installation, anti bird net installation, balcony safety solutions, pigeon protection systems, stainless steel cable grills, sports nets installation, bird spikes installation, balcony safety services Hyderabad",

  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://rohiniinvisiblegrills.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};