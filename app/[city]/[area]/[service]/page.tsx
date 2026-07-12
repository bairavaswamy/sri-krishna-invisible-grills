import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ManualServiceArticle from "../../../components/ManualServiceArticle";
import ManualEntryServicePage from "../../../components/ManualEntryServicePage";
import { getManualServicePage } from "../../../content/manualPageRegistry";
import {
  getAllServiceAreaPaths,
  getAreaBySlug,
  getServiceAreaEntry,
  getServiceBySlug,
} from "../../../content/serviceAreaCatalog";
import { getServiceDetail, type ServiceSlug } from "../../../content/serviceDetails";
import { getServiceHeroImage } from "../../../content/serviceVisuals";
import {
  getBreadcrumbListSchema,
  getFAQPageSchema,
  getGraphSchema,
  getServiceSchema,
  getWebPageSchema,
  stringifySchema,
} from "../../../config/schema.config";
import { siteConfig } from "../../../config/site.config";
import { areaPath, serviceAreaPath, servicePath } from "../../../config/routes.config";

type ManualRouteParams = {
  city: string;
  area: string;
  service: string;
};

type ManualRouteProps = {
  params: Promise<ManualRouteParams>;
};

export const dynamicParams = false;

export async function generateStaticParams(): Promise<ManualRouteParams[]> {
  return getAllServiceAreaPaths().map((path) => ({
    city: path.city,
    area: path.service,
    service: path.area,
  }));
}

function normalizePublicRouteParams(params: ManualRouteParams): ManualRouteParams {
  return {
    city: params.city,
    area: params.service,
    service: params.area,
  };
}

function isLegacyAreaFirstRoute(params: ManualRouteParams) {
  return Boolean(getAreaBySlug(params.area) && getServiceBySlug(params.service));
}

function getCatalogParams(params: ManualRouteParams) {
  return isLegacyAreaFirstRoute(params) ? params : normalizePublicRouteParams(params);
}

function absoluteUrl(path: string) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${cleanPath}`;
}

function getManualPageUrl(page: {
  citySlug: string;
  areaSlug: string;
  serviceSlug: string;
}) {
  return absoluteUrl(serviceAreaPath(page.serviceSlug, page.areaSlug));
}

function getAbsoluteImageUrl(image?: string) {
  const defaultImage = siteConfig.defaultImage;

  const resolvedImage = image || defaultImage;

  if (
    resolvedImage.startsWith("http://") ||
    resolvedImage.startsWith("https://")
  ) {
    return resolvedImage;
  }

  return absoluteUrl(
    resolvedImage.startsWith("/") ? resolvedImage : `/${resolvedImage}`
  );
}

export async function generateMetadata({
  params,
}: ManualRouteProps): Promise<Metadata> {
  const resolvedParams = await params;
  const catalogParams = getCatalogParams(resolvedParams);

  // Prefer the long-form service page when one exists.
  const manualPage = getManualServicePage(catalogParams);

  if (manualPage) {
    // Return long-form page metadata.
    const url = absoluteUrl(serviceAreaPath(manualPage.serviceSlug, manualPage.areaSlug));
    const imageUrl = getAbsoluteImageUrl(
      getServiceHeroImage(manualPage.serviceSlug as ServiceSlug)
    );

    return {
      title: manualPage.metadata.title,
      description: manualPage.metadata.description,
      keywords: manualPage.metadata.keywords,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title: manualPage.metadata.openGraphTitle || manualPage.metadata.title,
        description:
          manualPage.metadata.openGraphDescription || manualPage.metadata.description,
        url,
        siteName: siteConfig.name,
        locale: "en_IN",
        type: "article",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: manualPage.hero.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: manualPage.metadata.twitterTitle || manualPage.metadata.title,
        description:
          manualPage.metadata.twitterDescription || manualPage.metadata.description,
        images: [imageUrl],
      },
    };
  }

  const entry = getServiceAreaEntry(catalogParams);
  const area = getAreaBySlug(catalogParams.area);
  const service = getServiceBySlug(catalogParams.service);

  if (!entry || !area || !service) {
    return {
      title: "Service Not Found | SRI KRISHNA INVISIBLE GRILLS",
      description: "The requested service page could not be found.",
    };
  }

  const detail = getServiceDetail(service.slug);
  const title = `${service.name} in ${area.name} Chennai | SRI KRISHNA INVISIBLE GRILLS`;
  const description = `${detail.shortBenefit} ${entry.localAngle} Contact SRI KRISHNA INVISIBLE GRILLS for ${area.name}, Chennai service.`;
  const url = absoluteUrl(serviceAreaPath(service.slug, area.slug));
  const imageUrl = getAbsoluteImageUrl(getServiceHeroImage(service.slug));

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} in ${area.name}`,
      `${service.name.toLowerCase()} Chennai`,
      `${area.name} ${service.name.toLowerCase()}`,
      `SRI KRISHNA INVISIBLE GRILLS Chennai`,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ManualServiceRoute({
  params,
}: ManualRouteProps) {
  const resolvedParams = await params;
  if (isLegacyAreaFirstRoute(resolvedParams)) {
    redirect(serviceAreaPath(resolvedParams.service, resolvedParams.area));
  }

  const catalogParams = normalizePublicRouteParams(resolvedParams);

  // Prefer the long-form service page when one exists.
  const manualPage = getManualServicePage(catalogParams);

  if (manualPage) {
    // Render the long-form page with existing logic.
    const url = getManualPageUrl(manualPage);
    const imageUrl = getAbsoluteImageUrl(
      getServiceHeroImage(manualPage.serviceSlug as ServiceSlug)
    );

    const jsonLd = getGraphSchema([
      getWebPageSchema({
        url,
        name: manualPage.metadata.title,
        description: manualPage.metadata.description,
        image: imageUrl,
      }),
      getServiceSchema({
        url,
        name: manualPage.metadata.title,
        description: manualPage.metadata.description,
        image: imageUrl,
        areaName: `${manualPage.areaSlug}, Chennai`,
      }),
      getFAQPageSchema(url, manualPage.faq),
      getBreadcrumbListSchema([
        { name: "Home", url: absoluteUrl("/") },
        { name: "Chennai", url: absoluteUrl(`/${manualPage.citySlug}/`) },
        {
          name: manualPage.serviceSlug,
          url: absoluteUrl(servicePath(manualPage.serviceSlug)),
        },
        {
          name: manualPage.areaSlug,
          url: absoluteUrl(areaPath(manualPage.areaSlug)),
        },
        { name: manualPage.hero.title, url },
      ]),
    ]);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifySchema(jsonLd),
          }}
        />
        <ManualServiceArticle page={manualPage} />
      </>
    );
  }

  const entry = getServiceAreaEntry(catalogParams);
  const area = getAreaBySlug(catalogParams.area);
  const service = getServiceBySlug(catalogParams.service);

  if (!entry || !area || !service) {
    notFound();
  }

  const detail = getServiceDetail(service.slug);
  const url = absoluteUrl(serviceAreaPath(service.slug, area.slug));
  const imageUrl = getAbsoluteImageUrl(getServiceHeroImage(service.slug));
  const pageTitle = `${service.name} in ${area.name} Chennai`;
  const jsonLd = getGraphSchema([
    getWebPageSchema({
      url,
      name: pageTitle,
      description: entry.localAngle,
      image: imageUrl,
    }),
    getServiceSchema({
      url,
      name: pageTitle,
      description: entry.localAngle,
      image: imageUrl,
      areaName: `${area.name}, Chennai`,
    }),
    getBreadcrumbListSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Chennai", url: absoluteUrl(`/${resolvedParams.city}/`) },
      { name: service.name, url: absoluteUrl(servicePath(service.slug)) },
      { name: area.name, url: absoluteUrl(areaPath(area.slug)) },
      { name: service.name, url },
    ]),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema(jsonLd),
        }}
      />
      <ManualEntryServicePage area={area} service={service} entry={entry} />
    </>
  );
}
