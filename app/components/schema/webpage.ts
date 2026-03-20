export const webpageSchema = (
  serviceName: string,
  serviceSlug: string,
  location: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage-${serviceSlug}-${location.replace(/\s+/g, "-").toLowerCase()}`,
  url,
  name: `${serviceName} in ${location}`,
  description: `Professional ${serviceName} in ${location}. Expert installation for balcony safety, bird & pigeon prevention, and home protection. Trusted, durable, and high-quality services to secure your property.`,

  inLanguage: "en-IN",
  isPartOf: {
    "@id": `${url}#website`
  },

  mainEntity: {
    "@id": `${url}#service-${serviceSlug}-${location.replace(/\s+/g, "-").toLowerCase()}`
  },

  publisher: {
    "@type": "Organization",
    "@id": `${url}#localbusiness`,
    name: "Rohini Invisible Grills",
    url,
    logo: "https://rohiniinvisiblegrills.com/Rohini_logo.webp"
  },

  author: {
    "@type": "Organization",
    name: "Rohini Invisible Grills"
  },

  datePublished: new Date().toISOString().split("T")[0],
  dateModified: new Date().toISOString().split("T")[0],

  breadcrumb: {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://rohiniinvisiblegrills.com/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: `${serviceName} Services`,
      item: `https://rohiniinvisiblegrills.com/${serviceSlug}`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: `${serviceName} in ${location}`,
      item: url
    }
  ]
},

  potentialAction: {
    "@type": "SearchAction",
    target: `https://rohiniinvisiblegrills.com/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});