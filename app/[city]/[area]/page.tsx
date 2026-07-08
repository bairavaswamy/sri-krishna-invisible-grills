import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import CityServicePage from "../../components/CityServicePage";
import { chennaiConfig } from "../../config/chennai.config";
import {
  getBreadcrumbListSchema,
  getGraphSchema,
  getWebPageSchema,
  stringifySchema,
} from "../../config/schema.config";
import { absoluteUrl, siteConfig } from "../../config/site.config";
import { serviceAreaPath } from "../../config/routes.config";
import {
  getAreaBySlug,
  getServiceBySlug,
} from "../../content/serviceAreaCatalog";
import { getChennaiServiceManualPage } from "../../content/chennaiServiceManualPages";
import { getServiceDetail } from "../../content/serviceDetails";
import { getServiceHeroImage } from "../../content/serviceVisuals";

type AreaPageProps = {
  params: {
    city: string;
    area: string;
  };
};

export function generateStaticParams() {
  return [
    ...chennaiConfig.areas.map((area) => ({
      city: chennaiConfig.citySlug,
      area: area.slug,
    })),
    ...chennaiConfig.services.map((service) => ({
      city: chennaiConfig.citySlug,
      area: service.slug,
    })),
  ];
}

export function generateMetadata({ params }: AreaPageProps): Metadata {
  const area = getAreaBySlug(params.area);
  const service = getServiceBySlug(params.area);

  if (params.city !== chennaiConfig.citySlug || (!area && !service)) {
    return {
      title: "Page Not Found | SRI KRISHNA INVISIBLE GRILLS",
      description: "The requested Chennai service page could not be found.",
    };
  }

  if (service) {
    const manual = getChennaiServiceManualPage(service.slug);
    const title = `${manual.title} | SRI KRISHNA INVISIBLE GRILLS`;
    const description = manual.lead;

    return {
      title,
      description,
      alternates: {
        canonical: absoluteUrl(`/${chennaiConfig.citySlug}/${service.slug}/`),
      },
      openGraph: {
        title,
        description,
        url: absoluteUrl(`/${chennaiConfig.citySlug}/${service.slug}/`),
        siteName: siteConfig.name,
        locale: "en_IN",
        type: "website",
        images: [
          {
            url: absoluteUrl(getServiceHeroImage(service.slug)),
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
    };
  }

  if (!area) {
    return {
      title: "Area Not Found | SRI KRISHNA INVISIBLE GRILLS",
      description: "The requested Chennai area page could not be found.",
    };
  }

  const title = `${area.name} Safety Nets & Invisible Grills Chennai | SRI KRISHNA`;
  const description = `Find measured safety nets, invisible grills, bird-control work, cricket nets, and cloth hanger installation in ${area.name}, Chennai with SRI KRISHNA INVISIBLE GRILLS.`;

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/${chennaiConfig.citySlug}/${area.slug}/`),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/${chennaiConfig.citySlug}/${area.slug}/`),
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl(chennaiConfig.areaImage),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}

const getNearbyAreas = (areaSlug: string) => {
  const index = chennaiConfig.areas.findIndex((item) => item.slug === areaSlug);
  const start = Math.max(0, index - 4);

  return chennaiConfig.areas
    .slice(start, start + 9)
    .filter((area) => area.slug !== areaSlug)
    .slice(0, 8);
};

export default function AreaPage({ params }: AreaPageProps) {
  const area = getAreaBySlug(params.area);
  const service = getServiceBySlug(params.area);

  if (params.city !== chennaiConfig.citySlug || (!area && !service)) {
    notFound();
  }

  if (service) {
    return <CityServicePage service={service} />;
  }

  if (!area) {
    notFound();
  }

  const nearbyAreas = getNearbyAreas(area.slug);
  const firstService = chennaiConfig.services[0];
  const pageUrl = absoluteUrl(`/${chennaiConfig.citySlug}/${area.slug}/`);
  const pageTitle = `${area.name} Safety Nets & Invisible Grills Chennai | SRI KRISHNA`;
  const pageDescription = `Find measured safety nets, invisible grills, bird-control work, cricket nets, and cloth hanger installation in ${area.name}, Chennai with SRI KRISHNA INVISIBLE GRILLS.`;
  const heroStats = [
    {
      value: `${chennaiConfig.services.length}`,
      label: "Local services",
      text: "Direct pages for nets, grills, bird control, sport nets, and utility work.",
    },
    {
      value: "Measured",
      label: "Before quote",
      text: "Openings, access, fixing line, and finish are checked before pricing.",
    },
    {
      value: "Chennai",
      label: "Area route",
      text: `${area.name} pages connect to nearby service hubs without spammy area lists.`,
    },
  ];
  const planningPoints = [
    "Photo review before the visit",
    "Material matched to the opening",
    "Clean drilling and edge finish",
    "Price explained by scope",
  ];
  const serviceGroups = [
    "Safety nets",
    "Invisible grills",
    "Bird control",
    "Utility work",
  ];
  const jsonLd = getGraphSchema([
    getWebPageSchema({
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      image: absoluteUrl(chennaiConfig.areaImage),
      type: "CollectionPage",
    }),
    getBreadcrumbListSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Chennai", url: absoluteUrl(`/${chennaiConfig.citySlug}/`) },
      { name: area.name, url: pageUrl },
    ]),
  ]);

  return (
    <main className="bg-[#f8fbff] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema(jsonLd),
        }}
      />
      <section className="relative overflow-hidden bg-[#061a3d]">
        <div className="absolute inset-0">
          <Image
            src={chennaiConfig.areaImage}
            alt={`${area.name} safety services`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a3d] via-[#08275a]/90 to-[#08275a]/35" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f8fbff] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-[1fr_0.62fr] lg:px-6">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2c66d] sm:text-sm">
              {area.name} Chennai service hub
            </p>
            <h1 className="mt-5 max-w-4xl text-[2rem] font-black leading-[1.12] text-white sm:text-5xl lg:text-6xl">
              Safety nets and invisible grills in {area.name}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-blue-50 sm:text-lg">
              Choose the exact {area.name} page for balcony safety, window
              protection, bird-control work, cricket netting, and utility
              installation. Each service opens with local planning, price
              clarity, and a direct contact path.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.contact.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0b4fb3] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/25 transition hover:bg-[#083f91] sm:w-auto sm:text-base"
              >
                <Phone size={18} />
                Call for {area.name}
              </a>
              <Link
                href={serviceAreaPath(firstService.slug, area.slug)}
                prefetch={false}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-[#f2c66d]/70 hover:bg-white/20 sm:w-auto sm:text-base"
              >
                Start with {firstService.name}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {serviceGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-50 backdrop-blur"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/25 bg-white/95 p-6 text-slate-950 shadow-2xl shadow-blue-950/25 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#fff4d9] text-[#b47a14]">
                <MapPin size={23} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4fb3]">
                  Local page
                </p>
                <h2 className="text-2xl font-black">{area.name}</h2>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Pick a service below and move straight to the {area.name} page
              with service-specific checks, FAQs, and contact actions.
            </p>
            <div className="mt-6 grid gap-3">
              {planningPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#0b4fb3]" size={18} />
                  <span className="text-sm font-semibold text-slate-700">{point}</span>
                </div>
              ))}
            </div>
            <Link
              href={`/${chennaiConfig.citySlug}`}
              prefetch={false}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#c9a24a]/40 bg-[#fff8e8] px-5 py-3 text-sm font-bold text-[#08275a] transition hover:border-[#c9a24a] hover:bg-[#fff1c9]"
            >
              View Chennai areas
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 lg:px-6">
        <div className="mx-auto -mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
          {heroStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-[0_18px_55px_rgba(8,39,90,0.10)]"
            >
              <p className="text-2xl font-black text-[#08275a]">{item.value}</p>
              <h2 className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-[#0b4fb3]">
                {item.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 lg:grid-cols-[0.34fr_1fr] lg:px-6">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[28px] border border-blue-100 bg-white p-6 shadow-sm">
            <Sparkles size={24} className="text-[#c8932d]" />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[#0b4fb3]">
              Services in {area.name}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#08275a]">
              Open the right local page.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Every card leads to a dedicated {area.name} service page. Use it
              to compare scope, understand the fixing method, and request a
              measured visit.
            </p>
            <div className="mt-6 space-y-3">
              {planningPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c8932d]" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b4fb3]">
                Choose service
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                {area.name} service pages
              </h2>
            </div>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08275a] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#0b4fb3]"
            >
              <Phone size={17} />
              Quick call
            </a>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {chennaiConfig.services.map((service) => {
              const detail = getServiceDetail(service.slug);

              return (
                <article
                  key={service.slug}
                  className="group overflow-hidden rounded-[26px] border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c8932d]/55 hover:shadow-[0_24px_70px_rgba(8,39,90,0.14)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={detail.cardImage}
                      alt={`${service.name} in ${area.name}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061a3d]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#08275a]">
                        {detail.category}
                      </span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f2c66d] text-[#08275a]">
                        <ShieldCheck size={18} />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black leading-snug text-slate-950">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {detail.shortBenefit}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {detail.checks.slice(0, 2).map((check) => (
                        <span
                          key={check}
                          className="rounded-full border border-blue-100 bg-[#f8fbff] px-3 py-1 text-xs font-semibold text-[#0b4fb3]"
                        >
                          {check}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={serviceAreaPath(service.slug, area.slug)}
                      prefetch={false}
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#08275a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0b4fb3]"
                    >
                      Open {area.name} page
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white px-4 py-14 lg:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c8932d]">
              Local planning
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#08275a]">
              Built for a real site visit, not a generic listing.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {planningPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-[18px] border border-blue-100 bg-[#f8fbff] px-4 py-4 text-sm font-bold text-slate-800"
              >
                <CheckCircle2 className="shrink-0 text-[#0b4fb3]" size={18} />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8e8] px-4 py-14 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b4fb3]">
                Nearby Areas
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Move to nearby Chennai service hubs
              </h2>
            </div>
            <Link
              href={`/${chennaiConfig.citySlug}`}
              prefetch={false}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c8932d]/45 bg-white px-5 py-3 text-sm font-bold text-[#08275a] transition hover:border-[#c8932d] hover:bg-[#fff4d9]"
            >
              View all areas
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyAreas.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/${chennaiConfig.citySlug}/${nearby.slug}`}
                prefetch={false}
                className="flex items-center justify-between rounded-[18px] border border-[#ead8a8] bg-white px-4 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-[#c8932d] hover:text-[#0b4fb3]"
              >
                {nearby.name}
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
