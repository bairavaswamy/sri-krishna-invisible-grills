export const ratingSchema = (
  url: string,
  productSlug: string,
  location: string,
  ratingValue: string = "4.9",
  reviewCount: string = "120",
  bestRating: string = "10",
  worstRating: string = "1"
) => ({
  "@context": "https://schema.org/",
  "@type": "AggregateRating",
  "@id": `${url}#rating-${productSlug}-${location.replace(/\s+/g, "-").toLowerCase()}`,

  itemReviewed: {
    "@id": `${url}#${productSlug}-${location.replace(/\s+/g, "-").toLowerCase()}`
  },

  ratingValue,
  reviewCount,
  bestRating,
  worstRating
});