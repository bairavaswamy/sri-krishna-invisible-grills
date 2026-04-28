import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Handshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { hyderabadLocations } from "../../components/constants/locations";
import {
  BalconySafetyAntiBirdInvisibleGrills,
  compactServiceDescription,
  compactServiceTitle,
  createGrillSeed,
  locationImagesForAntiBirdInvisibleGrills,
  slugify,
} from "../../components/seo/utils";
import FAQSection from "../../balcony-safety-invisible-grills/[slug]/Faqs";
import { services } from "../../components/constants/services";
import { generateAntiBirdInvisibleGrillservice } from "../../components/seo/antiBirdInvisibleGrillsGenerator";
import LocationScroller from "../../components/LocationsWeServe";
import { buildSchemaGraph } from "../../components/schema/combineSchema";
import { hyderabadOtherLocations } from "../../components/data/telangana";
import { getGeo } from "../../components/utils/getGeo";
import MapSection from "../../components/maps/geoMap";
import BrandedServiceLayout from "../../components/BrandedServiceLayout";
import RelatedServices from "../../components/RelatedServices";
import { getServiceLocationPageContent } from "../../components/data/serviceLocationPageContent";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const location = locations.find((loc) => slugify(loc) === params.slug);

  if (!location) {
    return {
      title: "Page Not Found | Rohini Invisible Grills",
      description: "The requested service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const customPage = getServiceLocationPageContent(
    "anti-bird-invisible-grills",
    slugify(location)
  );

  const page = generateAntiBirdInvisibleGrillservice(
    location,
    locations,
    locations.indexOf(location)
  );

  const geo = getGeo(params.slug);
  const url = `https://rohiniinvisiblegrills.com/anti-bird-invisible-grills/${params.slug}`;
  const image = getLocationImage(location);
  const primaryKeyword = `Anti Bird Invisible Grills in ${location}`;
  const title = compactServiceTitle("Anti Bird Invisible Grills", location);
  const description = compactServiceDescription("Anti Bird Invisible Grills", location);

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),
    title,
    description,
    keywords: customPage?.metadata?.keywords ?? Array.from(
      new Set([
        primaryKeyword,
        `Anti bird nets ${location}`,
        `Invisible grills ${location}`,
        `Bird protection balcony ${location}`,
        `Pigeon nets installation ${location}`,
        `Balcony safety grills ${location}`,
        `Anti bird invisible grills near me`,
        `Anti bird invisible grills Telangana`,
        "Rohini Invisible Grills",
      ])
    ).slice(0, 30),
    alternates: {
      canonical: customPage?.metadata?.canonical ?? url,
    },
    category: customPage?.metadata?.category ?? "Bird Control",
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
      title,
      description,
      url: customPage?.metadata?.openGraph?.url ?? url,
      siteName: "Rohini Invisible Grills",
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
      title,
      description,
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

const locations = [...hyderabadLocations, ...hyderabadOtherLocations];

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
    seed = (seed + 0x6d2b79f5) | 0;

    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getLocationImage(location: string) {
  const seed = createGrillSeed(location.toLowerCase());
  const rand = seededRandom(seed);
  const index = Math.floor(rand() * locationImagesForAntiBirdInvisibleGrills.length);

  return locationImagesForAntiBirdInvisibleGrills[index];
}

function getLocationImageInProduct(location: string) {
  const seed = createGrillSeed(location.toLowerCase());
  const rand = seededRandom(seed);
  const index = Math.floor(rand() * BalconySafetyAntiBirdInvisibleGrills.length);

  return BalconySafetyAntiBirdInvisibleGrills[index];
}

function asList(content?: string | string[]) {
  if (!content) return [];
  return Array.isArray(content) ? content : [content];
}

function asText(content?: string | string[]) {
  if (!content) return "";
  return Array.isArray(content) ? content.join(" ") : content;
}

export default function Page({
  params,
}: {
  params: { slug: string; sections: Section[] };
}) {
  const location = locations.find((loc) => slugify(loc) === params.slug);

  if (!location) {
    return <div>Location not found</div>;
  }

  const invisibleGrillImage = getLocationImage(location);
  const inProductImage = getLocationImageInProduct(location);

  const page = generateAntiBirdInvisibleGrillservice(
    location,
    locations,
    locations.indexOf(location)
  );
  const customPage = getServiceLocationPageContent(
    "anti-bird-invisible-grills",
    slugify(location)
  );
  const resolvedPage = customPage
    ? {
        ...page,
        location: customPage.resolvedPageData.location,
        title: customPage.resolvedPageData.title,
        shortDescription: customPage.resolvedPageData.shortDescription,
        heroImage: customPage.resolvedPageData.heroImage ?? page.heroImage,
        category: customPage.resolvedPageData.category,
        sections: customPage.resolvedPageData.sections,
        faqs: customPage.resolvedPageData.faqs,
        breadcrumbs: customPage.resolvedPageData.breadcrumbs,
        meta: {
          title: customPage.metadata?.title?.default ?? page.meta.title,
          description: customPage.metadata?.description ?? page.meta.description,
          keywords:
            customPage.metadata?.keywords?.join(", ") ?? page.meta.keywords,
        },
      }
    : page;

  const url =
    customPage?.resolvedPageData.url ??
    `https://rohiniinvisiblegrills.com/anti-bird-invisible-grills/${slugify(location)}`;
  const serviceName = "Anti Bird Invisible Grills";
  const serviceSlug = "anti-bird-invisible-grills";
  const faqs = resolvedPage.faqs;
  const galleryImages = [invisibleGrillImage, inProductImage];
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
                  value: resolvedPage.authorityScore,
                },
              }),
            }}
          />
        </>
      }
      title={resolvedPage.title}
      description={resolvedPage.shortDescription}
      backgroundImage={invisibleGrillImage}
      showcaseImage={`${invisibleGrillImage}?v=${separator(resolvedPage.slug)}`}
      showcaseImageAlt={`${serviceName} installation in ${resolvedPage.location}`}
      showcaseImageTitle={`${serviceName} in ${resolvedPage.location}`}
      detailImage={`${inProductImage}?v=detail-${separator(resolvedPage.slug)}-hyderabad-telangana`}
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
        customPage?.resolvedPageData.showcaseBadge ??
        `${serviceName} Experts`
      }
      chips={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.chips ??
        customPage?.resolvedPageData.chips ?? [
          serviceName,
          "Modern Safety",
          "Weather Resistant",
          "Professional Installation",
        ]
      }
      sections={resolvedPage.sections}
      breadcrumbs={[
        ...(customPage?.layoutPropsPassedToBrandedServiceLayout?.breadcrumbs ??
          customPage?.resolvedPageData.breadcrumbs ?? [
            { label: "Home", href: "/" },
            { label: serviceName, href: `/services/${serviceSlug}` },
            { label: resolvedPage.location },
          ]),
      ]}
      ctaTitle={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.ctaTitle ??
        customPage?.resolvedPageData.cta?.title ??
        `Need ${serviceName} in ${resolvedPage.location}?`
      }
      ctaDescription={
        customPage?.layoutPropsPassedToBrandedServiceLayout?.ctaDescription ??
        customPage?.resolvedPageData.cta?.description ??
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
