import Link from "next/link";
import { combineBengaloreLocations, hyderabadLocations } from "../../components/constants/locations";

import {
  locationHash,
  slugify,
  locationImages,
  createGrillSeed,
  locationImagesForArtificialGrass,
  artificialGrassProductImages,
} from "../../components/seo/utils";

import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle, Plus, Minus } from "lucide-react";
import Image from "next/image";

import FAQSection from "../../balcony-safety-invisible-grills/[slug]/Faqs";

import { Handshake, Award, ShieldCheck } from "lucide-react";
import { services } from "../../components/constants/services";

import { generateArtificialGrassService } from "../../components/seo/artificialGrassTurfGenerator";

import LocationScroller from "../../components/LocationsWeServe";
import RelatedServices from "../../components/RelatedServices";

import { buildSchemaGraph } from "../../components/schema/combineSchema";
import { hyderabadOtherLocations } from "../../components/data/telangana";
import { getGeo } from "../../components/utils/getGeo";
import { generateLocationKeywords } from "../../components/seo/keywordGenerator";

import type { Metadata } from "next";
import MapSection from "../../components/maps/geoMap";
import BrandedServiceLayout from "../../components/BrandedServiceLayout";
import { getServiceLocationPageContent } from "../../components/data/serviceLocationPageContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const location = locations.find(
    (loc) => slugify(loc) === params.slug
  );

  if (!location) {
    return {
      title: "Page Not Found | Artificial Grass Turf",
      description: "The requested artificial grass turf page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const page = generateArtificialGrassService(
    location,
    locations,
    locations.indexOf(location)
  );
  const customPage = getServiceLocationPageContent(
    "artificial-grass-turf",
    slugify(location)
  );

  const geo = getGeo(params.slug);

  const url = `https://rohiniinvisiblegrills.com/artificial-grass-turf/${params.slug}`;

  const image = getLocationImage(location);

  /* SEO VARIABLES */

  const primaryKeyword = `Artificial Grass Turf in ${location}`;

  const autoKeywords = generateLocationKeywords(
    location,
    locations
  );

  const title =
    `${primaryKeyword} | Balcony Lawn Grass & Terrace Turf Installation | Rohini`;

  const description =
    `Looking for artificial grass turf in ${location}? Get premium balcony, terrace & garden turf installation. Natural look, UV resistant, long-lasting & affordable pricing. Book free site visit in ${location} today.`;

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: {
      default: customPage?.metadata?.title?.default ?? title,
      template: customPage?.metadata?.title?.template ?? "%s | Rohini",
    },

    description: customPage?.metadata?.description ?? description,

    keywords: customPage?.metadata?.keywords ?? Array.from(
      new Set([
        primaryKeyword,
        `Artificial grass ${location}`,
        `Balcony grass turf ${location}`,
        `Terrace grass installation ${location}`,
        `Garden turf ${location}`,
        `Artificial lawn near me`,
        `Synthetic grass Telangana`,
        "Rohini Artificial Grass",
      ])
    ).slice(0, 30),

    alternates: {
      canonical: customPage?.metadata?.canonical ?? url,
    },

    category: customPage?.metadata?.category ?? "Home Improvement",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: customPage?.metadata?.openGraph?.title ?? title,
      description: customPage?.metadata?.openGraph?.description ?? description,
      url: customPage?.metadata?.openGraph?.url ?? url,
      siteName: "Rohini",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: primaryKeyword,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: customPage?.metadata?.twitter?.title ?? title,
      description: customPage?.metadata?.twitter?.description ?? description,
      images: [image],
    },

    other: {
      "geo.region": geo.region,
      "geo.placename": location,
      "geo.position": `${geo.lat};${geo.lng}`,
      ICBM: `${geo.lat}, ${geo.lng}`,
    },
  };
}

const locations = [...hyderabadLocations , ...hyderabadOtherLocations,...combineBengaloreLocations]

const separator = (service: string): string => {
  const parts = service.split("/");
  if (parts.length < 2) return service;
  return `${parts[0]}in${parts[1]}`;
};

export async function generateStaticParams() {
  return services.flatMap((service) =>
    locations.map((location) => ({
      service: service?.slug,
      location: slugify(location),
      slug: slugify(location),
    }))
  );
}

function seededRandom(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;

    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}


function getLocationImage(location: string) {

  const seed = createGrillSeed(location.toLowerCase());

  const rand = seededRandom(seed);

  const index = Math.floor(rand() * locationImagesForArtificialGrass.length);

  return locationImagesForArtificialGrass[index];
}


function getLocationImageInProduct(location: string) {

  const seed = createGrillSeed(location.toLowerCase());

  const rand = seededRandom(seed);

  const index = Math.floor(rand() * artificialGrassProductImages.length);

  return artificialGrassProductImages[index];
}

interface Section {
  heading: string;
  content: string[];
}

export default function Page({
  params,
}: {
  params: { slug: string; sections: Section[] };
}) {

  const location = locations.find(
    (loc) => slugify(loc) === params.slug
  );

  if (!location) {
    return <div>Location not found</div>;
  }

  if (!location) return null;

  const grassImage = getLocationImage(location || "default location");
  const inProductImage = getLocationImageInProduct(location || "default location");

  const page = generateArtificialGrassService(
    location,
    locations,
    locations.indexOf(location)
  );
  const customPage = getServiceLocationPageContent(
    "artificial-grass-turf",
    slugify(location)
  );
  const resolvedPage = customPage?.resolvedPageData ?? page;

  const url = `https://rohiniinvisiblegrills.com/artificial-grass-turf/${slugify(location)}`;

  const serviceName = "Artificial Grass Turf";
  const serviceSlug = "artificial-grass-turf";

  const faqs = resolvedPage.faqs;

  const galleryImages = [
    grassImage,
    inProductImage
  ];

  // Schema Graph
  const schemaGraph = buildSchemaGraph(
    location,
    url,
    serviceName,
    serviceSlug,
    faqs,
    galleryImages
  );

  const jsonLd = JSON.stringify(schemaGraph, null, 2);

  return (
    <BrandedServiceLayout
      scripts={
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: jsonLd,
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: resolvedPage.title,
                areaServed: resolvedPage.location,
                additionalProperty: {
                  "@type": "PropertyValue",
                  name: "Location Authority Score",
                  value: page.authorityScore ?? 95,
                },
              }),
            }}
          />
        </>
      }
      title={resolvedPage.title}
      description={resolvedPage.shortDescription}
      backgroundImage={grassImage}
      showcaseImage={`${grassImage}?v=${separator(page.slug)}`}
      showcaseImageAlt={`${serviceName} installation in ${resolvedPage.location}`}
      showcaseImageTitle={`${serviceName} in ${resolvedPage.location}`}
      detailImage={`${inProductImage}?v=detail-${separator(page.slug)}-hyderabad-telangana`}
      detailImageAlt={`${serviceName} installation near ${resolvedPage.location}`}
      detailImageTitle={`${serviceName} near me in ${resolvedPage.location}`}
      serviceName={serviceName}
      location={resolvedPage.location}
      serviceHref={`/services/${serviceSlug}`}
      serviceLabel={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.serviceLabel ??
        `${serviceName} in ${resolvedPage.location}`
      }
      showcaseBadge={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.showcaseBadge ??
        `${serviceName} Experts`
      }
      chips={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.chips ?? [
          serviceName,
          "Modern Safety",
          "Weather Resistant",
          "Professional Installation",
        ]
      }
      sections={resolvedPage.sections}
      breadcrumbs={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.breadcrumbs ?? [
          { label: "Home", href: "/" },
          { label: serviceName, href: `/services/${serviceSlug}` },
          { label: resolvedPage.location },
        ]
      }
      ctaTitle={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.ctaTitle ??
        `Need ${serviceName} in ${resolvedPage.location}?`
      }
      ctaDescription={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.ctaDescription ??
        `Contact Rohini Invisible Grills today for professional installation, premium materials, and a free site visit in ${resolvedPage.location}.`
      }
      afterContent={
        <>
          <MapSection area={resolvedPage.location} />
          <RelatedServices serviceSlug={serviceSlug} />
          <FAQSection faqs={resolvedPage.faqs} />
          <LocationScroller service={serviceSlug} />
        </>
      }
    />
  )
}

