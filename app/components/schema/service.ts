import {servicesCat} from './localBusiness';
export const serviceSchema = (
   title:string,
    slug:string,
  location: string,
  url: string
) => ({
  "@context": "https://schema.org/",
  "@type": "Service",
  "@id": `${url}#service-${slug}-${location.replace(/\s+/g, "-").toLowerCase()}`,

  name: `${title} in ${location}`,

  provider: {
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: "Rohini Invisible Grills",
    telephone: "+91-8790518724",
    url,
    address: {
      "@type": "PostalAddress",
      streetAddress: "862, Lahari Green Park Rd, opp. Vignana Jyothi Engineering College, Near Gothic Pangea",
      addressLocality: "Bachupally",
      addressRegion: "Telangana",
      postalCode: "500118",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.5467340,
      longitude: 78.3858506
    },
    hasMap: "https://www.google.com/maps/place/G9WP+M8X+Hyderabad,+Telangana"
  },

  serviceOutput: {
    "@id": `${url}#${slug}-${location.replace(/\s+/g, "-").toLowerCase()}`
  },

  serviceType: title,
  category: `${title}, anti bird nets,invisible grills,chilren safety,pigeon nets,sports nets, home safety, balcony safety, bird prevention`,

  areaServed: {
    "@type": "City",
    name: location
  },

  aggregateRating: { "@id": `${url}#rating-${slug}-${location.replace(/\s+/g, "-").toLowerCase()}`},
  mainEntityOfPage: url,
  keywords: `${title}, ${servicesCat.join(", ").toLocaleLowerCase()}, ${location}, home safety, balcony protection, bird control`
});