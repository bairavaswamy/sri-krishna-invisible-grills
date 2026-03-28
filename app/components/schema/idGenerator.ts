export const getIds = (url: string, slug: string, location: string) => {
  const locationSlug = location.replace(/\s+/g, "-").toLowerCase();
  const base = `${url}#${slug}-${locationSlug}`;

  return {
    productId: base,
    serviceId: `${url}#service-${slug}-${locationSlug}`,
    offerId: `${url}#offer-${slug}-${locationSlug}`,
    ratingId: `${url}#rating-${slug}-${locationSlug}`,
    reviewId: `${url}#review-${slug}-${locationSlug}`,
    webpageId: `${url}#webpage-${slug}-${locationSlug}`,
    breadcrumbId: `${url}#breadcrumb-${slug}-${locationSlug}`,
  };
};