import { slugify } from "../seo/utils";
export const breadcrumbSchema = (
  serviceName: string,
  serviceSlug: string,
  location: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://rohiniinvisiblegrills.com"
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Safety Nets & Invisible Grill Services",
      item: `https://rohiniinvisiblegrills.com/services/${serviceSlug ? `/${serviceSlug}` : ""}`
    },

    {
      "@type": "ListItem",
      position: 3,
      name: serviceName,
      item: `https://rohiniinvisiblegrills.com/${serviceSlug}/${slugify(location)}`
    },

    {
      "@type": "ListItem",
      position: 4,
      name: `${serviceName} in ${location}`,
      item: url
    }
  ]
});















































































































































