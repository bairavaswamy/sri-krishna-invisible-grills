import { organizationSchema } from "./organization";
import { websiteSchema } from "./website";
import { localBusinessSchema } from "./localBusiness";
// Product rich snippet schema is intentionally disabled.
// import { productSchema } from "./product";
import { serviceSchema } from "./service";
import { offerSchema } from "./offer";
import { webpageSchema } from "./webpage";
import { faqSchema } from "./faq";
import { breadcrumbSchema } from "./breadcrumb";
import { imageSchema } from "./image";
// Review and rating rich snippet schema are intentionally disabled.
// import { ratingSchema } from "./rating";
// import { reviewSchema } from "./review";

type FAQ = {
  question: string;
  answer: string;
};

export const buildSchemaGraph = (
  location: string,
  url: string,
//   lat: string,
//   lng: string
serviceName: string,
  serviceSlug:string,
  faqs:FAQ[],
  galleryImages:string[],
) => ({
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    localBusinessSchema(location, url),
    // productSchema(serviceName,serviceSlug,location, url,galleryImages),
    serviceSchema(serviceName,serviceSlug,location, url),
    offerSchema(location,serviceName,url),
    webpageSchema(serviceName,serviceSlug,location, url),
    faqSchema(faqs, url),
    breadcrumbSchema(serviceName,serviceSlug,location,url),
    // ratingSchema(url,serviceSlug,location),
    // reviewSchema(url,serviceSlug, location,serviceName),
    ...imageSchema(galleryImages,serviceName,location,url),
  
  ]
});
