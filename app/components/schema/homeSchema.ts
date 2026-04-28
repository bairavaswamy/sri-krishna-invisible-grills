import { organizationSchema } from "./organization";
import { websiteSchema } from "./website";
import { localBusinessSchema } from "./localBusiness";
// Product rich snippet schema is intentionally disabled.
// import { productSchema } from "./product";
import { serviceSchema } from "./service";
import { offerSchema } from "./offer";
import { webpageSchema } from "./webpage";
import { breadcrumbSchema } from "./breadcrumb";
import { imageSchema } from "./image";
// Review and rating rich snippet schema are intentionally disabled.
// import { ratingSchema } from "./rating";
// import { reviewSchema } from "./review";

// type FAQ = {
//   question: string;
//   answer: string;
// };

export const buildHoneSchemaGraph = (
  location: string,
  url: string,
//   lat: string,
//   lng: string
serviceName: string,
  serviceSlug:string,
  galleryImages:string[],
) => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    localBusinessSchema(location, url),
    // Product rich snippet schema disabled to avoid product-snippet policy issues.
    // productSchema(serviceName,serviceSlug,location, url,galleryImages),
    serviceSchema(serviceName,serviceSlug,location, url),
    offerSchema(location,serviceName,url),
    webpageSchema(serviceName,serviceSlug,location, url),
    breadcrumbSchema(serviceName,serviceSlug,location,url),
    // Review/rating rich snippet schema disabled until verified first-party reviews are available.
    // ratingSchema(url,serviceSlug,location),
    // reviewSchema(url,serviceSlug, location,serviceName),
    ...imageSchema(galleryImages,serviceName,location,url),
  
  ]
});
