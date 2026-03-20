export const productSchema = (
    title:string,
    slug:string,
  location: string,
  url: string,
  img:string[]
) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  "@id": `${url}#${slug}-${location.replace(/\s+/g, "-").toLowerCase()}`,

  // Dynamic name
  name: `${title} in ${location}`,

  // Keyword-rich description
 description: `Ensure ultimate safety and protection with our premium ${title} in ${location}. Expertly designed to prevent birds, pigeons, and other intrusions, our ${title} combines durability, UV-stabilization, and seamless installation. Perfect for balconies, rooftops, sports, and home or commercial spaces, this solution enhances security while maintaining aesthetic appeal.`,

  brand: {
    "@type": "Brand",
    name: "Rohini Invisible Grills"
  },

  manufacturer: {
    "@id": `${url}#organization`
  },

  // Include all relevant keywords in category
  category: `${title}, anti bird net, balcony safety, home protection, anti-bird solutions, sports nets, invisible grills, balcony invisible grills`,

  // Multiple images for better ranking
  image: [
    `https://rohiniinvisiblegrills.com${img[0]}`,
    `https://rohiniinvisiblegrills.com${img[1]}`,
  ],

  // Optional: reference separate offer & ratings
  offers: { "@id": `${url}#offer-${slug.toLowerCase().replace(/\s+/g, "-")}` },
  aggregateRating: { "@id": `${url}#rating-${slug.toLowerCase().replace(/\s+/g, "-")}` },

  // Optional: add potential URLs to competitors for semantic trust comparison
  mainEntityOfPage: url
});