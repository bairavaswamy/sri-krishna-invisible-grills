export const reviewSchema = (
  url: string,
  productSlug: string,
  location: string,
  serviceName:string,
  reviewNumber: number = 1,
  ratingValue: string = "5",
  reviewText?: string
) => ({
  "@context": "https://schema.org/",
  "@type": "Review",
  "@id": `${url}#review-${productSlug}-${location.replace(/\s+/g, "-").toLowerCase()}-${reviewNumber}`,

  itemReviewed: {
    "@id": `${url}#${productSlug}-${location.replace(/\s+/g, "-").toLowerCase()}`
  },

  reviewRating: {
    "@type": "Rating",
    ratingValue,
    bestRating: "5",
    worstRating: "1"
  },

  author: {
    "@type": "Person",
    name: "Verified Customer"
  },

  reviewBody:
    reviewText || `Excellent ${serviceName} installation service completed in ${location}. Highly recommended!`,

  datePublished: new Date().toISOString().split("T")[0]
});