import Link from "next/link";
import { hyderabadLocations } from "../../components/constants/locations";
import { slugify, createGrillSeed, locationImagesForChildrenSafetyInvisibleGrills, BalconySafetyChildrenSafetyInvisibleGrills, compactServiceDescription, compactServiceTitle } from "../../components/seo/utils";
import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle,} from "lucide-react";
import Image from "next/image";
import FAQSection from "../../balcony-safety-invisible-grills/[slug]/Faqs";
import { Handshake, Award, ShieldCheck } from "lucide-react";
// import { Poppins, Inter } from "next/font/google";
import { services } from "../../components/constants/services";
import { generateChildrenSafetyInvisibleGrillService } from "../../components/seo/childrenSafetyInvisibleGrillsGenerator";
import LocationScroller from "../../components/LocationsWeServe";
import RelatedServices from "../../components/RelatedServices";
import {buildSchemaGraph } from "../../components/schema/combineSchema";
import { hyderabadOtherLocations } from "../../components/data/telangana";
import type { Metadata } from "next";
import {getGeo} from "../../components/utils/getGeo"
import {generateLocationKeywords} from "../../components/seo/keywordGenerator"
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
      title: "Page Not Found | Rohini Invisible Grills",
      description: "The requested service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const customPage = getServiceLocationPageContent(
    "children-safety-invisible-grills",
    slugify(location)
  );

  const page = generateChildrenSafetyInvisibleGrillService(
    location,
    locations,
    locations.indexOf(location)
  );

  const geo = getGeo(params.slug)

  const url = `https://rohiniinvisiblegrills.com/children-safety-invisible-grills/${params.slug}`;

  const image = getLocationImage(location);

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */

  const primaryKeyword = `Children Safety Invisible Grills in ${location}`;
   const autokeywords = generateLocationKeywords(
    location,
    locations
  );
  const title = compactServiceTitle("Children Safety Invisible Grills", location);
  const description = compactServiceDescription("Children Safety Invisible Grills", location);

  /*
Need children safety invisible grills in ${location}? 
Secure your balcony with child-proof invisible grills that prevent accidents while keeping your view open. 
Site-measured fitting, durable stainless steel cables, expert installation & free site visit across ${location}.
Rohini Invisible Grills — safety parents trust.
  */

  /* =========================
     METADATA RETURN
  ========================== */

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title,

    description,

   keywords: customPage?.metadata?.keywords ?? Array.from(new Set([
  primaryKeyword,
  `Invisible grills ${location}`,
  `Anti bird invisible grills ${location}`,
  `Balcony safety grills ${location}`,
  "Pigeon protection balcony",
  "Child safety invisible grills",
  "Invisible grills installation service",
  "Invisible grills Telangana",
  `Bird Control grills ${location}`,
  "children safety invisible grill installation",
  "Rohini Invisible Grills",
])).slice(0, 30),

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

const locations = [...hyderabadLocations , ...hyderabadOtherLocations]

//  const headingFont = Poppins({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-heading"
// });

//  const bodyFont = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body"
// });

const separator = (service: string): string => {
  const parts = service.split("/");

  if (parts.length < 2) return service; // safety fallback

  return `${parts[0]}in${parts[1]}`;
};


export async function generateStaticParams() {
  return services.flatMap((service) =>
    locations.map((location) => ({
      service: service.slug,
      location: slugify(location),
      slug: slugify(location)
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

  const index = Math.floor(rand() * locationImagesForChildrenSafetyInvisibleGrills.length);

  return locationImagesForChildrenSafetyInvisibleGrills[index];
}


function getLocationImageInProduct(location: string) {

  const seed = createGrillSeed(location.toLowerCase());

  const rand = seededRandom(seed);

  const index = Math.floor(rand() * BalconySafetyChildrenSafetyInvisibleGrills.length);

  return BalconySafetyChildrenSafetyInvisibleGrills[index];
}



// export function getLocationImage(location: string) {

//   const hash = locationHash(location);

//   const index = hash % locationImages.length;

//   return locationImages[index];

// }


export default function Page({ params }: { params: { slug: string , sections: Section[];} }) {
  const location = locations.find(
    (loc) => slugify(loc) === params.slug
  );

  const invisibleGrillImage = getLocationImage(location || "default location");
  const inProductImage = getLocationImageInProduct(location || "default location");

  if (!location) {
    return <div>Location not found</div>;
  }


  if (!location) return null;

  const page = generateChildrenSafetyInvisibleGrillService(
    location,
    locations,
    locations.indexOf(location)
  );
  const customPage = getServiceLocationPageContent(
    "children-safety-invisible-grills",
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
    `https://rohiniinvisiblegrills.com/children-safety-invisible-grills/${slugify(location)}`;
  const serviceName = "Children Safety Invisible Grills";
  const serviceSlug = "children-safety-invisible-grills";
  
  const faqs = resolvedPage.faqs
  const galleryImages = [
   invisibleGrillImage,
   inProductImage
  ];
  
  
    // Build the full schema graph
  const schemaGraph = buildSchemaGraph(location, url, serviceName, serviceSlug, faqs, galleryImages);
  
  // Convert to JSON-LD for injecting in the page
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

