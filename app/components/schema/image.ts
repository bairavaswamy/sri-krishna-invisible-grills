export const imageSchema = (
  images: string[],
  service: string,
  location: string,
  url: string
) =>
  images.map((img, index) => ({
    "@type": "ImageObject",

    "@id": `${url}#image-${index + 1}`,

    contentUrl: `https://rohiniinvisiblegrills.com${img}`,
    url: `https://rohiniinvisiblegrills.com${img}`,

    caption: `${service} installation in ${location} by Rohini Invisible Grills`,

    inLanguage: "en-IN",

    /* Creator must have @type for image SEO. */
    creator: {
      "@type": "Organization",
      "@id": "https://rohiniinvisiblegrills.com/#organization",
      name: "Rohini Invisible Grills"
    },

    /* Copyright holder must be explicit for image SEO. */
    copyrightHolder: {
      "@type": "Organization",
      "@id": "https://rohiniinvisiblegrills.com/#organization",
      name: "Rohini Invisible Grills"
    },

    /* Required for Google image SEO. */
    creditText: "Rohini Invisible Grills",

    copyrightNotice:
      "Copyright Rohini Invisible Grills. All rights reserved.",

    /* Image usage policy page. */
    license: "https://rohiniinvisiblegrills.com/image-license",

    /* Page where users can request image licensing. */
    acquireLicensePage:
      "https://rohiniinvisiblegrills.com/contact-us",

    representativeOfPage: index === 0
  }));
