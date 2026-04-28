import { getIds } from "./idGenerator";
export const webpageSchema = (
  serviceName: string,
  serviceSlug: string,
  location: string,
  url: string
) => {
  const ids = getIds(url, serviceSlug, location);

  return {
  "@type": "WebPage",
  "@id": ids.webpageId,
  
  url,
  name: `${serviceName} in ${location}`,
  description: `Professional ${serviceName} in ${location}. Expert installation for balcony safety, bird & pigeon prevention, and home protection. Trusted, durable, and high-quality services to secure your property.`,

  inLanguage: "en-IN",
  isPartOf: {
    "@id": "https://rohiniinvisiblegrills.com/#website"
  },

  mainEntity: {
    "@id": ids.serviceId,
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
      name: "Services",
      item: "https://rohiniinvisiblegrills.com/services"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: serviceName,
      item: `https://rohiniinvisiblegrills.com/services/${serviceSlug}`
    },
    {
      "@type": "ListItem",
      position: 4,
      name: `${serviceName} in ${location}`,
      item: url
    }
  ]
  }
}};
