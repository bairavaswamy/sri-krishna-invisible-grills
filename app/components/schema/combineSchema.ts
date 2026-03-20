import { organizationSchema } from "./organization";
import { localBusinessSchema } from "./localBusiness";
import { productSchema } from "./product";
import { serviceSchema } from "./service";
import { offerSchema } from "./offer";
import { webpageSchema } from "./webpage";
import { faqSchema } from "./faq";
import { breadcrumbSchema } from "./breadcrumb";
import { imageSchema } from "./image";
import { ratingSchema } from "./rating";
import { reviewSchema } from "./review";

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
    localBusinessSchema(location, url),
    productSchema(serviceName,serviceSlug,location, url,galleryImages),
    serviceSchema(serviceName,serviceSlug,location, url),
    offerSchema(location,serviceName,url),
    webpageSchema(serviceName,serviceSlug,location, url),
    faqSchema(faqs, url),
    breadcrumbSchema(serviceName,serviceSlug,location,url),
    imageSchema(galleryImages,serviceName,location,url),
    ratingSchema(url,serviceSlug,location),
    reviewSchema(url,serviceSlug, location,serviceName)
  ]
});