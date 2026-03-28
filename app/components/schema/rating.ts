
import { getIds } from "./idGenerator";

export const ratingSchema = (
  url: string,
  productSlug: string,
  location: string,
) => {
  
  const ids = getIds(url, productSlug, location);

  return {
  "@context": "https://schema.org/",
  "@type": "AggregateRating",
  "@id": ids.ratingId,

  itemReviewed: {
    "@id": ids.productId,
  },

 ratingValue :"4.9",
  reviewCount: "131",
  bestRating: "10",
  worstRating:"1"
}};