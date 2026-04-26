import Link from "next/link";
import { combineBengaloreLocations, hyderabadLocations } from "../../components/constants/locations";
import {
  locationHash,
  slugify,
  locationImages,
  createGrillSeed,
  locationImagesForClothHangers,
  balconyClothHangerImages,
} from "../../components/seo/utils";

import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle, Plus, Minus } from "lucide-react";
import Image from "next/image";
import FAQSection from "../../balcony-safety-invisible-grills/[slug]/Faqs";

import { Handshake, Award, ShieldCheck } from "lucide-react";
import { services } from "../../components/constants/services";

import { generateClothHangersService } from "../../components/seo/clothHangersGenerator";
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
      title: "Page Not Found | Rohini Cloth Hangers",
      description: "The requested cloth hanger service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const customPage = getServiceLocationPageContent(
    "cloth-hangers",
    slugify(location)
  );

  const page = generateClothHangersService(
    location,
    locations,
    locations.indexOf(location)
  );

  const geo = getGeo(params.slug);

  const url = `https://rohiniinvisiblegrills.com/cloth-hangers/${params.slug}`;

  const image = getLocationImage(location);

  /* =========================
     SEO VARIABLES
  ========================== */

  const primaryKeyword = `Cloth Hangers in ${location}`;

  const autoKeywords = generateLocationKeywords(
    location,
    locations
  );

  const title =
    `${primaryKeyword} | Balcony Drying Hangers & Ceiling Cloth Hangers | Rohini`;

  const description =
    `Looking for cloth hangers in ${location}? Get premium balcony & ceiling cloth drying hangers installed. Rust-proof materials, expert installation, affordable pricing & free site visit in ${location}. Contact Rohini today.`;

  const metadataTitle = customPage?.metadata?.title
    ? {
        default: customPage.metadata.title.default,
        template: customPage.metadata.title.template ?? "%s | Rohini",
      }
    : {
        default: title,
        template: "%s | Rohini",
      };

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: metadataTitle,

    description: customPage?.metadata?.description ?? description,

    keywords:
      customPage?.metadata?.keywords ??
      Array.from(
        new Set([
          primaryKeyword,
          `Cloth drying hangers ${location}`,
          `Balcony cloth hanger ${location}`,
          `Ceiling cloth hanger ${location}`,
          `Drying rack installation ${location}`,
          `Cloth hanger near me`,
          `Cloth hanger Telangana`,
          "Rohini Cloth Hangers",
        ])
      ).slice(0, 30),

    alternates: {
      canonical: customPage?.metadata?.canonical ?? url,
    },

    category: customPage?.metadata?.category ?? "Home Utility",

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


const locations = [...hyderabadLocations , ...hyderabadOtherLocations,...combineBengaloreLocations];

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

interface Section {
  heading: string;
  content: string[];
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

  const index = Math.floor(rand() * locationImagesForClothHangers.length);

  return locationImagesForClothHangers[index];
}


function getLocationImageInProduct(location: string) {

  const seed = createGrillSeed(location.toLowerCase());

  const rand = seededRandom(seed);

  const index = Math.floor(rand() * balconyClothHangerImages.length);

  return balconyClothHangerImages[index];
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

  const hangerImage = getLocationImage(location || "default location");
  const inProductImage = getLocationImageInProduct(
    location || "default location"
  );

  const page = generateClothHangersService(
    location,
    locations,
    locations.indexOf(location)
  );
  const customPage = getServiceLocationPageContent(
    "cloth-hangers",
    slugify(location)
  );

  const url = `https://rohiniinvisiblegrills.com/cloth-hangers/${slugify(
    location
  )}`;

  const serviceName = "Cloth Hangers";
  const serviceSlug = "cloth-hangers";

  const activeResolvedPageData = customPage?.resolvedPageData;
  const activeLayout = customPage?.layoutPropsPassedToBrandedServiceLayout;

  const activeTitle = activeResolvedPageData?.title ?? page.title;
  const activeShortDescription =
    activeResolvedPageData?.shortDescription ?? page.shortDescription;
  const activeLocation = activeResolvedPageData?.location ?? page.location;
  const activeSections = activeResolvedPageData?.sections ?? page.sections;
  const activeFaqs = activeResolvedPageData?.faqs ?? page.faqs;
  const activeSlug = customPage?.params?.locationSlug
    ? `${serviceSlug}/${customPage.params.locationSlug}`
    : page.slug;

  const galleryImages = [hangerImage, inProductImage];

  // Schema Graph
  const schemaGraph = buildSchemaGraph(
    location,
    url,
    serviceName,
    serviceSlug,
    activeFaqs,
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
                name: activeTitle,
                areaServed: activeLocation,
                additionalProperty: {
                  "@type": "PropertyValue",
                  name: "Location Authority Score",
                  value: page.authorityScore,
                },
              }),
            }}
          />
        </>
      }
      title={activeTitle}
      description={activeShortDescription}
      backgroundImage={hangerImage}
      showcaseImage={`${hangerImage}?v=${separator(activeSlug)}`}
      showcaseImageAlt={`${serviceName} installation in ${activeLocation}`}
      showcaseImageTitle={`${serviceName} in ${activeLocation}`}
      detailImage={`${inProductImage}?v=detail-${separator(activeSlug)}-hyderabad-telangana`}
      detailImageAlt={`${serviceName} installation near ${activeLocation}`}
      detailImageTitle={`${serviceName} near me in ${activeLocation}`}
      serviceName={serviceName}
      location={activeLocation}
      serviceHref={`/services/${serviceSlug}`}
      serviceLabel={activeLayout?.serviceLabel ?? `${serviceName} in ${activeLocation}`}
      showcaseBadge={activeLayout?.showcaseBadge ?? `${serviceName} Experts`}
      chips={
        activeLayout?.chips ?? [
          serviceName,
          "Modern Safety",
          "Weather Resistant",
          "Professional Installation",
        ]
      }
      sections={activeSections}
      breadcrumbs={
        activeLayout?.breadcrumbs ?? [
          { label: "Home", href: "/" },
          { label: serviceName, href: `/services/${serviceSlug}` },
          { label: activeLocation },
        ]
      }
      ctaTitle={activeLayout?.ctaTitle ?? `Need ${serviceName} in ${activeLocation}?`}
      ctaDescription={
        activeLayout?.ctaDescription ??
        `Contact Rohini Invisible Grills today for professional installation, premium materials, and a free site visit in ${activeLocation}.`
      }
      afterContent={
        <>
          <MapSection area={activeLocation} />
          <RelatedServices serviceSlug={serviceSlug} />
          <FAQSection faqs={activeFaqs} />
          <LocationScroller service={serviceSlug} />
        </>
      }
    />
  )
}

