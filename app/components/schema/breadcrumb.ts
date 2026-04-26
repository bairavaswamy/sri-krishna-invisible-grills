export const breadcrumbSchema = (
  serviceName: string,
  serviceSlug: string,
  location: string,
  url: string
) => ({
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
});















































































































































