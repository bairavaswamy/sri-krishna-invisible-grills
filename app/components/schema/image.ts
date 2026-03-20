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

    creator: {
      "@id": "https://rohiniinvisiblegrills.com/#organization"
    },

    copyrightHolder: {
      "@id": "https://rohiniinvisiblegrills.com/#organization"
    },

    representativeOfPage: index === 0
  }));