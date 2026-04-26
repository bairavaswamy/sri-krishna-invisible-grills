import type { Metadata } from "next";
import FAQSection from "../../invisible-grills/[slug]/Faqs";
import { buildSchemaGraph } from "../../components/schema/combineSchema";
import { generateBreadcrumb, locationAuthorityScore } from "../../components/seo/utils";
import { getGeo } from "../../components/utils/getGeo";
import MapSection from "../../components/maps/geoMap";
import BrandedServiceLayout from "../../components/BrandedServiceLayout";
import LocationScroller from "../../components/LocationsWeServe";
import RelatedServices from "../../components/RelatedServices";
import {
  getHyderabadCityServiceContent,
  type HyderabadCityServiceContent,
} from "./hyderabadCityServiceData";

type ServiceSlug = HyderabadCityServiceContent["slug"];

export async function generateHyderabadCityServiceMetadata(
  serviceSlug: ServiceSlug
): Promise<Metadata> {
  const location = "Hyderabad";
  const content = getHyderabadCityServiceContent(serviceSlug);
  const geo = getGeo("hyderabad");
  const url = `https://rohiniinvisiblegrills.com/services/${serviceSlug}`;

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),
    title: {
      default: content.metadataTitle,
      template: "%s | Rohini Invisible Grills",
    },
    description: content.metadataDescription,
    keywords: Array.from(new Set(content.keywords)).slice(0, 30),
    alternates: {
      canonical: url,
    },
    category: content.category,
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
      title: content.metadataTitle,
      description: content.metadataDescription,
      url,
      siteName: "Rohini Invisible Grills",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: content.image,
          width: 1200,
          height: 630,
          alt: content.primaryKeyword,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadataTitle,
      description: content.metadataDescription,
      images: [content.image],
    },
    other: {
      "geo.region": geo.region,
      "geo.placename": location,
      "geo.position": `${geo.lat};${geo.lng}`,
      ICBM: `${geo.lat}, ${geo.lng}`,
    },
  };
}

export function HyderabadCityServicePage({
  serviceSlug,
}: {
  serviceSlug: ServiceSlug;
}) {
  const location = "Hyderabad";
  const content = getHyderabadCityServiceContent(serviceSlug);
  const breadcrumbs = generateBreadcrumb(location, `services/${serviceSlug}`);
  const authorityScore = locationAuthorityScore(location);
  const url = `https://rohiniinvisiblegrills.com/services/${serviceSlug}`;
  const schemaGraph = buildSchemaGraph(
    location,
    url,
    content.serviceName,
    serviceSlug,
    content.faqs,
    content.galleryImages
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
              __html: JSON.stringify(breadcrumbs),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: `${content.serviceName} in ${location}`,
                areaServed: location,
                additionalProperty: {
                  "@type": "PropertyValue",
                  name: "Location Authority Score",
                  value: authorityScore,
                },
              }),
            }}
          />
        </>
      }
      title={`${content.serviceName} in ${location} | Rohini Invisible Grills`}
      description={content.sections[0]?.content}
      backgroundImage={content.galleryImages[0]}
      showcaseImage={`${content.galleryImages[0]}?v=hyderabad-city`}
      showcaseImageAlt={`${content.serviceName} installation in ${location}`}
      showcaseImageTitle={`${content.serviceName} in ${location}`}
      detailImage={
        content.galleryImages[1]
          ? `${content.galleryImages[1]}?v=detail-hyderabad-city`
          : undefined
      }
      detailImageAlt={`${content.serviceName} installation near ${location}`}
      detailImageTitle={`${content.serviceName} near me in ${location}`}
      serviceName={content.serviceName}
      location={location}
      serviceHref={`/services/${serviceSlug}`}
      serviceLabel={`${content.serviceName} in ${location}`}
      showcaseBadge={content.showcaseBadge}
      chips={content.chips}
      sections={content.sections}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: content.serviceName, href: `/services/${serviceSlug}` },
        { label: location },
      ]}
      ctaTitle={`Need ${content.serviceName} in ${location}?`}
      ctaDescription={content.ctaDescription}
      afterContent={
        <>
          <MapSection area={location} />
          <RelatedServices serviceSlug={serviceSlug} />
          <FAQSection faqs={content.faqs} />
          <LocationScroller service={serviceSlug} />
        </>
      }
    />
  );
}
