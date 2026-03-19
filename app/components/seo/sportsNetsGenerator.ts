import { createSeed, generateBreadcrumb, locationAuthorityScore, pickVariant, slugify } from "./utils";
import {
  overviewVariants,
  aboutVariants,
  installVariants,
  benefitsVariants,
  priceVariants,
  whyChooseVariants,
  safetyTipsVariants
} from "../data/sportsNetsVariants";

import { buildFullSchema } from "./schema";
import { getNearbyLocations } from "./utils";
import { ServicePage, ServiceSection } from "./types";

export const generateSportsNetsService:
(location: string, locations: string[], index: number) => ServicePage =
(location: string, locations: string[], index: number) => {

  const seed = createSeed(location);

  const overview = pickVariant(overviewVariants, seed)(location);
  const about = pickVariant(aboutVariants, seed, 1)(location);
  const install = pickVariant(installVariants, seed, 2)(location);
  const birds = pickVariant(benefitsVariants, seed, 3)(location);
  const price = pickVariant(priceVariants, seed, 4)(location);
  const whyChoose = pickVariant(whyChooseVariants, seed, 5)(location);
  const safetyTips = pickVariant(safetyTipsVariants, seed, 6)(location);

  const nearby = getNearbyLocations(locations, index);
  const slug = `sports-nets/${slugify(location)}`;

  const breadcrumbs = generateBreadcrumb(location, slug);
  const authorityScore = locationAuthorityScore(location);

  const faqs = [

{
question:`What are sports nets used for in ${location}?`,
answer:`Sports nets are protective net systems installed for cricket, badminton, and play areas to stop balls from leaving the ground. They improve safety and allow players to practice without damaging nearby property.`
},

{
question:`Do sports nets help cricket practice in ${location}?`,
answer:`Yes. Cricket practice nets installation helps players train safely by stopping balls and creating a focused practice environment for batting and bowling.`
},

{
question:`Can sports nets be installed at home in ${location}?`,
answer:`Yes. Many homeowners install sports nets near me solutions to create safe practice zones for children and adults in terraces, backyards, and open spaces.`
},

{
question:`What materials are used for sports nets installation in ${location}?`,
answer:`Sports nets are usually made using strong HDPE or nylon materials that are weather resistant, UV protected, and suitable for long outdoor use.`
},

{
question:`How long does sports nets installation take in ${location}?`,
answer:`Most sports nets installations are completed within a few hours depending on area size, height, and design requirements.`
},

{
question:`Do sports nets improve safety in ${location} play areas?`,
answer:`Yes. Sports nets prevent balls from hitting windows, vehicles, or nearby people, making play areas safer and more organized.`
}

];

  const nearbySection: ServiceSection = {
    heading: "Nearby Areas We Serve",
    content: nearby.map(
      (n: string) => `Sports nets installation available in ${n}`
    ),
    slug:nearby.map(
      (n: string) => `/sports-nets/${slugify(n)}`
    )
  };

  return {

    location: location,

    slug: `sports-nets/${slugify(location)}`,

    title: `Sports Nets Installation in ${location} | Cricket Practice & Badminton Court Nets`,

    shortDescription: `Rohini Invisible Grills provides sports nets installation in ${location} including cricket practice nets, box cricket nets, badminton court net installation, and safety net solutions for homes and academies near you.`,

    heroImage: "/service/sports-nets.webp",

    category: "sports-nets",

    sections: [

      {
        heading: "Overview",
        content: overview
      },

      {
        heading: "About Rohini Invisible Grills",
        content: about
      },

      {
        heading: `How We Install Sports Nets in ${location}`,
        content: install
      },

      {
        heading: "How Sports Nets Improve Safety and Practice",
        content: birds
      },

      {
        heading: `Sports Nets Installation Price near me in ${location}`,
        content: price
      },

      {
        heading: `Why Choose Sports Nets Installation in ${location}`,
        content: whyChoose
      },

      {
        heading: `Sports Safety Tips for ${location} Play Areas`,
        content: safetyTips
      },

      {
        heading: "Product Highlights",
        content: [
          "Sports nets designed for cricket practice and badminton courts",
          "Strong HDPE and nylon materials for long-term outdoor durability",
          "Cricket practice nets installation near me for safe training",
          "Box cricket net installation for academies and residential spaces",
          "Badminton court net installation near me with strong fixing support",
          "Prevents ball damage to nearby windows and vehicles",
          "UV-resistant and weatherproof sports net materials",
          "Supports anti bird nets installation for cleaner play areas",
          "Low maintenance sports safety solution",
          "Professional installation for homes, schools, and sports academies"
        ]
      },

      {
        heading: "Applications",
        content: [
          `Cricket practice nets installation near me in ${location}`,
          `Box cricket net installation for academies in ${location}`,
          `Badminton court net installation near me in ${location}`,
          `Terrace and backyard sports nets installation in ${location}`,
          `School and playground safety net systems`,
          `Anti bird nets installation for sports courts`,
          `Professional sports nets near me service in ${location}`
        ]
      },

      nearbySection,

      {
        heading: "Conclusion",
        content: `If you are searching for sports nets near me in ${location}, Rohini Invisible Grills provides professional cricket practice nets installation, badminton court nets, and box cricket net installation services. Our strong and durable nets create safe play areas, improve training quality, and protect surrounding spaces while delivering long-lasting performance.`
      }

    ],

    faqs: faqs,

    breadcrumbs,
    authorityScore,

    meta: {

      title: `Sports Nets Installation in ${location} | Rohini Invisible Grills`,

      description: `Get sports nets installation in ${location} for cricket practice nets, badminton court nets, and box cricket net installation. Safe and durable sports net solutions near you.`,

      keywords: `sports nets ${location}, sports nets near me ${location}, cricket practice nets installation near me ${location}, badminton court net installation near me ${location}, box cricket net installation ${location}, sports safety nets ${location}`

    },

    schema: buildFullSchema(location, slug, faqs)

  };

};