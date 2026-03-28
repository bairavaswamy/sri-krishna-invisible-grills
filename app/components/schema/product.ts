
import { getIds } from "./idGenerator";

export const productSchema = (
    title:string,
    slug:string,
  location: string,
  url: string,
  img:string[]
) => {
   const ids = getIds(url, slug, location);

  return{
  "@type": "Product",
  "@id":ids.productId,
   // Dynamic name
  name: `${title} in ${location}`,
   // Multiple images for better ranking
  image: [
    `https://rohiniinvisiblegrills.com${img[0]}`,
    `https://rohiniinvisiblegrills.com${img[1]}`,
  ],

 

  // Keyword-rich description
 description: `Ensure ultimate safety and protection with our premium ${title} in ${location}. Expertly designed to prevent birds, pigeons, and other intrusions, our ${title} combines durability, UV-stabilization, and seamless installation. Perfect for balconies, rooftops, sports, and home or commercial spaces, this solution enhances security while maintaining aesthetic appeal.`,
  sku: `${slug}-${location.replace(/\s+/g, "-").toLowerCase()}`,

  brand: {
    "@type": "Brand",
    name: "Rohini Invisible Grills"
  },

   manufacturer: {
      "@id": "https://rohiniinvisiblegrills.com/#organization"
    },

  // Include all relevant keywords in category
  category: `${title}, anti bird net, balcony safety, home protection, anti-bird solutions, sports nets, invisible grills, balcony invisible grills`,


  // Optional: reference separate offer & ratings
  offer: { "@id":ids.offerId },
  aggregateRating: { "@id": ids.ratingId},

  // Optional: add potential URLs to competitors for semantic trust comparison
  mainEntityOfPage: url
}
};