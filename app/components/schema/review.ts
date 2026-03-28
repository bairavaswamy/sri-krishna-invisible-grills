import { getIds } from "./idGenerator";


export const reviewSchema = (
  url: string,
  productSlug: string,
  location: string,
  serviceName:string,
  reviewText?: string
) => {
  const ids = getIds(url, productSlug, location);

  return{
  "@type": "Review",
  "@id": `${ids.reviewId}-1`,

  itemReviewed: {
    "@id": ids.productId
  },

  reviewRating: {
    "@type": "Rating",
    ratingValue:"5",
    // reviewCount: "100",
    bestRating: "5",
    worstRating: "1"
  },

  author: {
    "@type": "Person",
    name: "Customer Review"
  },
  publisher: {
      "@id": "https://rohiniinvisiblegrills.com/#organization"
    },

  reviewBody:
    reviewText || `Excellent ${serviceName} installation service completed in ${location}. Highly recommended!`,

  datePublished: new Date().toISOString().split("T")[0]
}};

