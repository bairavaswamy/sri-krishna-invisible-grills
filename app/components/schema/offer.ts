export const offerSchema = (
  location: string,
  service: string,
  url: string
) => ({
  "@type": "Offer",
  "@id": `${url}#offer-${service.toLowerCase().replace(/\s+/g, "-")}`,

  name: `${service} Service Offer in ${location}`,

  url,

  priceCurrency: "INR",

  // ✅ Instead of fake fixed pricing
  priceSpecification: {
    "@type": "PriceSpecification",
    priceCurrency: "INR",
    minPrice: "16",
    maxPrice: "200",
    unitText: "per sq ft"
  },

  availability: "https://schema.org/InStock",

  eligibleRegion: {
    "@type": "Place",
    name: location
  },

  areaServed: {
    "@type": "City",
    name: location
  },

  itemOffered: {
    "@type": "Service",
    "@id": `${url}#service-${service.toLowerCase().replace(/\s+/g, "-")}`,
    name: `${service} in ${location}`,
    serviceType: service,

    provider: {
      "@id": `${url}#localbusiness`
    }
  },

  seller: {
    "@id": `${url}#localbusiness`
  },

  businessFunction: "https://schema.org/Sell",

  category: "Home Safety Installation Services",

  validFrom: "2026-03-20",

  offeredBy: {
    "@id": `${url}#localbusiness`
  }
});