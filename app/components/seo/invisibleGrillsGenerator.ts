import { createSeed, generateBreadcrumb, locationAuthorityScore, pickVariant, slugify } from "./utils";
import {
  overviewVariants,
  aboutVariants,
  installVariants,
  birdVariants,
  priceVariants,
  whyChooseVariants,
  safetyTipsVariants
} from "../data/invisibleGrillsVariants";

import { buildFullSchema } from "./schema";
import { getNearbyLocations } from "./utils";
import { ServicePage, ServiceSection } from "./types";
import { enhanceFallbackServicePage } from "./fallbackContentEnhancer";



export const  generateService : (location: string, locations: string[], index: number) => ServicePage = ( location: string,
  locations: string[],
  index: number) => {

  const seed = createSeed(location);

  const overview = pickVariant(overviewVariants, seed)(location);
  const about = pickVariant(aboutVariants, seed, 1)(location);
  const install = pickVariant(installVariants, seed, 2)(location);
  const birds = pickVariant(birdVariants, seed, 3)(location);
  const price = pickVariant(priceVariants, seed, 4)(location);
  const whyChoose = pickVariant(whyChooseVariants, seed, 5)(location);
  const safetyTips = pickVariant(safetyTipsVariants, seed, 6)(location);

  const nearby = getNearbyLocations(locations, index);
  const slug = `invisible-grills/${slugify(location)}`;

  const breadcrumbs = generateBreadcrumb(location,slug)
  const authorityScore = locationAuthorityScore(location)

 const faqs = [

    {
      question:`What is the price of invisible grills in ${location}?`,
      answer:`The price depends on balcony size and installation design. Rohini Invisible Grills provides affordable installation services in ${location}.`
    },
    {
      question: `Are invisible grills safe for children in ${location}?`,
      answer: `Yes. Invisible grills installed in ${location} provide strong balcony protection and help prevent accidental falls.`
    },
    {
      question: `Do invisible grills block the outside view in ${location}?`,
      answer: `No. The stainless steel wires are thin and almost invisible, so they keep the outside view clear.`
    },
    {
      question: `Can invisible grills stop pigeons in ${location}?`,
      answer: `Yes. Invisible grills create a barrier that prevents birds from entering balconies or nesting.`
    },
    {
      question: `How long does invisible grill installation take in ${location}?`,
      answer: `Most installations are completed within a few hours depending on balcony size.`
    },
    {
      question: `Can you install invisible grills for windows and utility areas in ${location}?`,
      answer: `Yes. Rohini Invisible Grills installs invisible grills for balconies, windows, utility openings, and duct-side safety requirements in ${location}.`
    },
    {
      question: `Do you provide a site visit for invisible grills in ${location}?`,
      answer: `Yes. A site visit helps us measure the opening, check fixing points, and suggest the right invisible grill layout for your home in ${location}.`
    }
  ];

  const nearbySection: ServiceSection = {
    heading: "Nearby Areas We Serve",
    slug:nearby.map(
      (n: string) => `/invisible-grills/${slugify(n)}`
    ),
    // Returns an array of strings
    content: nearby.map((n: string) => `Invisible grill installation available in ${n}`)
  };

  return enhanceFallbackServicePage({

    location: location,

    slug: `invisible-grills/${slugify(location)}`,

    title: `Invisible Grills in ${location} | Balcony Safety Invisible Grill Installation`,

    shortDescription: `Rohini Invisible Grills provides professional invisible grill installation in ${location}. Our balcony safety grills protect children, stop pigeons, and keep your home safe while maintaining a modern open view.`,

    heroImage: "/images/invisible-grill-for-balcony.webp",

    category: "invisible-grills",

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
        heading: "How to Install Invisible Grills",
        content: install
      },

      {
        heading: "How Invisible Grills Help Keep Birds Away",
        content: birds
      },

    {
        heading: `Invisible Grill Price near me in ${location}`,
        content: price
    },

    {
        heading: `Why Choose Invisible Grills in ${location}`,
        content: whyChoose
    },

    {
        heading: `Balcony Safety Tips for ${location} Apartments`,
        content: safetyTips
    },

      {
        heading: "Product Highlights",
        content: [
  "High tensile stainless steel cables for strong balcony safety",
  "Premium SS Invisible Grills made with 304 Grade and 316 Grade stainless steel",
  "Weather resistant, corrosion-proof and rust-proof materials",
  "Child safety balcony protection for homes and apartments",
  "Modern minimal design with clear outside view and airflow",
  "Suitable for balcony safety, anti bird protection, and pigeon safety planning",
  "Low-maintenance system designed for long-term apartment and home use",
  "Site-measured fitting with neat hardware alignment",
  "Professional support for balconies, windows, utility openings, and duct-side safety"
]
      },

      {
        heading: "Applications",
        content: [
          `Apartment balconies in ${location}`,
          `High rise buildings in ${location}`,
          `Office buildings in ${location}`,
          `Residential homes in ${location}`,
          `Office buildings in ${location}`,
          `Windows and duct areas in ${location}`,
          `Near me invisible grills installation in ${location}`
        ]
      },
      nearbySection,

    //   {
    //     heading: "Nearby Areas We Serve",
    //     content: nearby.map(
    //       n => `Invisible grill installation available in ${n}`
    //     )
    //   },

      {
        heading: "Conclusion",
        content: `If you are searching for invisible grills in ${location}, Rohini Invisible Grills provides reliable installation services that improve balcony safety while keeping your home modern and secure.`
      }

    ],

    faqs: faqs,

    breadcrumbs,
    authorityScore,
    meta: {

      title: `Invisible Grills in ${location} | Rohini Invisible Grills`,

      description: `Professional balcony invisible grill installation in ${location}. Improve safety, stop pigeons, and keep your balcony secure with Rohini Invisible Grills.`,

      keywords: `invisible grills in ${location}, balcony invisible grills ${location}, anti bird invisible grills, child safety balcony grills, Rohini Invisible Grills`

    },

    schema: buildFullSchema(location, slug, faqs)

  }, "invisible-grills");

}
