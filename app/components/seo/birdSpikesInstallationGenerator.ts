import { createSeed, generateBreadcrumb, locationAuthorityScore, pickVariant, slugify } from "./utils";
import {
  overviewVariants,
  aboutVariants,
  installVariants,
  birdVariants,
  priceVariants,
  whyChooseVariants,
  safetyTipsVariants
} from "../data/birdSpikesInstallation"; // ✅ changed file

import { buildFullSchema } from "./schema";
import { getNearbyLocations } from "./utils";
import { ServicePage, ServiceSection } from "./types";
import { enhanceFallbackServicePage } from "./fallbackContentEnhancer";

export const generateBirdSpikesService: (
  location: string,
  locations: string[],
  index: number
) => ServicePage = (location, locations, index) => {

  const seed = createSeed(location);

  const overview = pickVariant(overviewVariants, seed)(location);
  const about = pickVariant(aboutVariants, seed, 1)(location);
  const install = pickVariant(installVariants, seed, 2)(location);
  const birds = pickVariant(birdVariants, seed, 3)(location);
  const price = pickVariant(priceVariants, seed, 4)(location);
  const whyChoose = pickVariant(whyChooseVariants, seed, 5)(location);
  const safetyTips = pickVariant(safetyTipsVariants, seed, 6)(location);

  const nearby = getNearbyLocations(locations, index);
  const slug = `bird-spikes-installation/${slugify(location)}`;

  const breadcrumbs = generateBreadcrumb(location, slug);
  const authorityScore = locationAuthorityScore(location);

  const faqs = [

    {
      question: `What is the price of bird spikes installation near me in ${location}?`,
      answer: `Bird spikes price in ${location} depends on area size, spike material, and installation work. We provide affordable bird spikes, pigeon control spikes, and anti bird solutions with free inspection and clear pricing.`
    },

    {
      question: `Are bird spikes safe for homes in ${location}?`,
      answer: `Yes. Bird spikes installed in ${location} are safe and designed to stop pigeons without harming them. They act as a barrier to prevent birds from sitting on balconies, windows, and ledges.`
    },

    {
      question: `Do bird spikes block airflow or sunlight?`,
      answer: `No. Bird spikes do not block airflow or sunlight. They only stop pigeons from landing, keeping your space open, clean, and comfortable.`
    },

    {
      question: `Can bird spikes work with bird nets in ${location}?`,
      answer: `Yes. Bird spikes work well with bird nets and pigeon nets to give full protection. Spikes stop birds from sitting, while nets block entry into open areas.`
    },

    {
      question: `How long does bird spikes installation take in ${location}?`,
      answer: `Most bird spikes installation in ${location} is completed within a few hours depending on the area size. Our team ensures quick and clean service.`
    },

    {
      question: `Which is better — bird spikes or bird nets near me?`,
      answer: `Bird spikes are best for stopping pigeons from sitting on ledges, while bird nets are better for covering open spaces. Using both gives complete bird control.`
    },

    {
      question: `Do you provide bird spikes installation near me in ${location}?`,
      answer: `Yes. We provide bird spikes installation, pigeon control spikes, and bird net services across ${location} with professional fitting and long-lasting results.`
    }

  ];

  const nearbySection: ServiceSection = {
    heading: "Nearby Areas We Serve",
    slug: nearby.map((n: string) => `/bird-spikes-installation/${slugify(n)}`),
    content: nearby.map((n: string) => `Bird spikes installation available in ${n}`)
  };

  return enhanceFallbackServicePage({

    location,

    slug: `bird-spikes-installation/${slugify(location)}`,

    title: `Bird Spikes Installation in ${location} | Pigeon & Bird Control Solutions`,

    shortDescription: `Rohini Invisible Grills provides bird spikes installation in ${location}. Stop pigeons, reduce mess, and improve hygiene with strong and affordable bird control solutions near you.`,

    heroImage: "/images/bird-spikes-installation.webp",

    category: "bird-spikes",

    sections: [

      {
        heading: "Overview",
        content: overview
      },

      {
        heading: "About Bird Spikes Installation",
        content: about
      },

      {
        heading: `How We Install Bird Spikes in ${location}`,
        content: install
      },

      {
        heading: "How Bird Spikes Help Keep Birds Away",
        content: birds
      },

      {
        heading: `Bird Spikes Price near me in ${location}`,
        content: price
      },

      {
        heading: `Why Choose Bird Spikes Installation in ${location}`,
        content: whyChoose
      },

      {
        heading: `Best Bird Control Tips for ${location} Homes`,
        content: safetyTips
      },

      {
        heading: "Product Highlights",
        content: [
          "Strong stainless steel bird spikes for long-lasting use",
          "Effective pigeon control spikes to stop bird sitting",
          "Works with bird nets and pigeon nets for full protection",
          "Safe, eco-friendly bird control solution",
          "Does not block airflow or sunlight",
          "Suitable for balconies, windows, ledges, and AC units",
          "Rust-proof and weather-resistant materials",
          "Low maintenance bird control system",
          "Quick and clean installation service",
          "Affordable and long-term solution for bird problems"
        ]
      },

      {
        heading: "Applications",
        content: [
          `Bird spikes installation for balconies in ${location}`,
          `Pigeon control spikes for windows and ledges in ${location}`,
          `Bird control solutions for apartments in ${location}`,
          `AC unit and outdoor bird protection in ${location}`,
          `Bird net and spike combination solutions`,
          `Near me bird spikes installation service in ${location}`
        ]
      },

      nearbySection,

      {
        heading: "Conclusion",
        content: `If you are searching for bird spikes installation near me in ${location}, Rohini Invisible Grills provides strong and reliable bird control solutions. Our bird spikes stop pigeons, reduce dirt, and improve hygiene while keeping your space clean, safe, and comfortable.`
      }

    ],

    faqs,

    breadcrumbs,
    authorityScore,

    meta: {

      title: `Bird Spikes Installation in ${location} | Rohini Invisible Grills`,

      description: `Install bird spikes in ${location} with Rohini Invisible Grills. Stop pigeons, reduce mess, and get affordable bird control solutions near you.`,

      keywords: `bird spikes installation ${location}, pigeon spikes ${location}, bird control near me ${location}, anti bird spikes ${location}, bird nets ${location}, pigeon control ${location}`

    },

    schema: buildFullSchema(location, slug, faqs)

  }, "bird-spikes-installation");

};
