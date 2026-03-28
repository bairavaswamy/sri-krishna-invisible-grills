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

    /* ✅ FIX: creator must have @type */
    creator: {
      "@type": "Organization",
      "@id": "https://rohiniinvisiblegrills.com/#organization",
      name: "Rohini Invisible Grills"
    },

    /* ✅ FIX: copyright holder */
    copyrightHolder: {
      "@type": "Organization",
      "@id": "https://rohiniinvisiblegrills.com/#organization",
      name: "Rohini Invisible Grills"
    },

    /* ✅ NEW: REQUIRED FOR GOOGLE IMAGE SEO */
    creditText: "Rohini Invisible Grills",

    copyrightNotice:
      "© Rohini Invisible Grills. All rights reserved.",

    /* ✅ LICENSE (create this page if not exists) */
    license: "https://rohiniinvisiblegrills.com/image-license",

    /* ✅ WHERE USERS CAN REQUEST LICENSE */
    acquireLicensePage:
      "https://rohiniinvisiblegrills.com/contact",

    representativeOfPage: index === 0
  }));