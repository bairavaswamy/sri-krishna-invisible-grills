import Link from "next/link";
import { hyderabadLocations,combineBengaloreLocations } from "../../components/constants/locations";
import { locationHash, slugify, locationImages, createGrillSeed, locationImagesForBalconySafetyInvisibleGrills, BalconySafetyInvisibleGrillsProductImages, locationImagesForBirdSpikesInstallation, BalconySafetyBirdSpikesInstallation } from "../../components/seo/utils";
import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle,Plus, Minus } from "lucide-react";
import Image from "next/image";
import FAQSection from "../../balcony-safety-invisible-grills/[slug]/Faqs";
import { Handshake, Award, ShieldCheck } from "lucide-react";
// import { Poppins, Inter } from "next/font/google";
import { services } from "../../components/constants/services";
import { generateBirdSpikesService } from "../../components/seo/birdSpikesInstallationGenerator";
import LocationScroller from "../../components/LocationsWeServe";
import RelatedServices from "../../components/RelatedServices";
import {buildSchemaGraph } from "../../components/schema/combineSchema";
import { hyderabadOtherLocations } from "../../components/data/telangana";
import { getGeo } from "../../components/utils/getGeo";
import {generateLocationKeywords} from "../../components/seo/keywordGenerator"
import type { Metadata } from "next";
import MapSection from "../../components/maps/geoMap";
import BrandedServiceLayout from "../../components/BrandedServiceLayout";
import { getServiceLocationPageContent } from "../../components/data/serviceLocationPageContent";

const locations = [...hyderabadLocations , ...hyderabadOtherLocations,...combineBengaloreLocations]

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
    "bird-spikes-installation",
    slugify(location)
  );

  const geo = getGeo(params.slug)

  const url = `https://rohiniinvisiblegrills.com/bird-spikes-installation/${params.slug}`;

  const image = getLocationImage(location);

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */

  const primaryKeyword = `Bird Spikes Installation in ${location}`;
   const autokeywords = generateLocationKeywords(
    location,
    locations
  );
  const title =
    `${primaryKeyword} | Anti Bird Spikes & Balcony Protection | Rohini Invisible Grills`;

  const description =
    `Looking for Bird Spikes Installation in ${location}? Professional pigeon safety net & balcony protection installation near you. 15+ years experience, ISO quality materials, expert installation, affordable price & free site visit in ${location}. Call Rohini Invisible Grills today.`;

  /* =========================
     METADATA RETURN
  ========================== */

  const metadataTitle = customPage?.metadata?.title
    ? {
        default: customPage.metadata.title.default,
        template:
          customPage.metadata.title.template ?? "%s | Rohini Invisible Grills",
      }
    : {
        default: title,
        template: "%s | Rohini Invisible Grills",
      };

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: metadataTitle,

    description: customPage?.metadata?.description ?? description,

   keywords: customPage?.metadata?.keywords ?? [
  `Bird spikes installation ${location}`,
  `Bird spikes near me ${location}`,
  `Pigeon control spikes ${location}`,
  `Balcony bird spikes ${location}`,
  `Anti pigeon spikes ${location}`,
  `Best bird spikes service ${location}`
],

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
      title: customPage?.metadata?.openGraph?.title ?? title,
      description: customPage?.metadata?.openGraph?.description ?? description,
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

  const index = Math.floor(rand() * locationImagesForBirdSpikesInstallation.length);

  return locationImagesForBirdSpikesInstallation[index];
}


function getLocationImageInProduct(location: string) {

  const seed = createGrillSeed(location.toLowerCase());

  const rand = seededRandom(seed);

  const index = Math.floor(rand() * BalconySafetyBirdSpikesInstallation.length);

  return BalconySafetyBirdSpikesInstallation[index];
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

  const page = generateBirdSpikesService(
    location,
    locations,
    locations.indexOf(location)
  );
  const customPage = getServiceLocationPageContent(
    "bird-spikes-installation",
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
    `https://rohiniinvisiblegrills.com/bird-spikes-installation/${slugify(location)}`;
  const serviceName = "Bird Spikes Installation";
  const serviceSlug = "bird-spikes-installation";
  
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

