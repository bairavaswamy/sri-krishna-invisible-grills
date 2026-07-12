import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import ChennaiServiceFinder from "../components/ChennaiServiceFinder";
import { chennaiConfig } from "../config/chennai.config";
import {
  getBreadcrumbListSchema,
  getGraphSchema,
  getItemListSchema,
  getWebPageSchema,
  stringifySchema,
} from "../config/schema.config";
import { absoluteUrl, siteConfig } from "../config/site.config";
import { serviceAreaPath } from "../config/routes.config";
import { getServiceDetail } from "../content/serviceDetails";

type CityPageProps = {
  params: {
    city: string;
  };
};

const cityPageTitle = "Chennai Safety Services and Areas | SRI KRISHNA INVISIBLE GRILLS";
const cityPageDescription =
  "Browse SRI KRISHNA INVISIBLE GRILLS services across Chennai, including balcony safety nets, invisible grills, bird control, sports nets, and utility services.";

export async function generateStaticParams() {
  return [{ city: chennaiConfig.citySlug }];
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  if (params.city !== chennaiConfig.citySlug) {
    return {
      title: "City Not Found | SRI KRISHNA INVISIBLE GRILLS",
      description: "The requested city service page could not be found.",
    };
  }

  return {
    title: cityPageTitle,
    description: cityPageDescription,
    alternates: {
      canonical: absoluteUrl(`/${chennaiConfig.citySlug}/`),
    },
    openGraph: {
      title: cityPageTitle,
      description: cityPageDescription,
      url: absoluteUrl(`/${chennaiConfig.citySlug}/`),
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl(chennaiConfig.heroImage),
          width: 1200,
          height: 630,
          alt: cityPageTitle,
        },
      ],
    },
  };
}

export default function ChennaiPage({ params }: CityPageProps) {
  if (params.city !== chennaiConfig.citySlug) {
    notFound();
  }

  const defaultArea = chennaiConfig.areas[0];
  const featuredAreas = chennaiConfig.areas.slice(0, 12);
  const pageUrl = absoluteUrl(`/${chennaiConfig.citySlug}/`);
  const jsonLd = getGraphSchema([
    getWebPageSchema({
      url: pageUrl,
      name: cityPageTitle,
      description: cityPageDescription,
      image: absoluteUrl(chennaiConfig.heroImage),
      type: "CollectionPage",
    }),
    getItemListSchema({
      id: `${pageUrl}#services`,
      url: pageUrl,
      name: "Chennai safety services",
      items: chennaiConfig.services.map((service) => {
        const detail = getServiceDetail(service.slug);

        return {
          name: service.name,
          url: absoluteUrl(`/${chennaiConfig.citySlug}/${service.slug}`),
          description: service.angle,
          image: absoluteUrl(detail.cardImage),
          type: "Service",
        };
      }),
    }),
    getItemListSchema({
      id: `${pageUrl}#areas`,
      url: pageUrl,
      name: "Chennai service areas",
      items: chennaiConfig.areas.map((area) => ({
        name: area.name,
        url: absoluteUrl(`/${chennaiConfig.citySlug}/${area.slug}`),
        description: `${area.name} safety net and invisible grill service pages in Chennai.`,
        image: absoluteUrl(chennaiConfig.areaImage),
        type: "Place",
      })),
    }),
    getBreadcrumbListSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Chennai", url: pageUrl },
    ]),
  ]);

  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifySchema(jsonLd),
        }}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={chennaiConfig.heroImage}
            alt="Chennai safety services"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08275a] via-[#08275a]/88 to-[#08275a]/42" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/95 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[660px] max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
              Chennai Service Directory
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              SRI KRISHNA INVISIBLE GRILLS across Chennai
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
              Pick a safety service, choose your Chennai area, and open a page built
              around the real site condition, access, fixing, and contact action.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Safety nets", "Invisible grills", "Bird control"].map((item) => (
                <div key={item} className="rounded-md border border-white/15 bg-white/10 p-4 text-white shadow-lg shadow-black/10 backdrop-blur">
                  <p className="text-base font-black">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Planned for Chennai apartments, homes, and shared spaces.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ChennaiServiceFinder
            citySlug={chennaiConfig.citySlug}
            areas={chennaiConfig.areas}
            services={chennaiConfig.services}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Choose a Chennai service landing page
            </h2>
          </div>
          <Link
            href={`/${chennaiConfig.citySlug}/${defaultArea.slug}`}
            prefetch={false}
            className="inline-flex items-center gap-2 rounded-full border border-[#d6a039]/45 bg-white px-5 py-3 text-sm font-black text-[#08275a] shadow-sm transition hover:border-[#d6a039] hover:bg-[#fff4d9]"
          >
            Open {defaultArea.name}
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chennaiConfig.services.map((service) => {
            const detail = getServiceDetail(service.slug);

            return (
              <article key={service.slug} className="group overflow-hidden rounded-md border border-[#dbe7f5] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d6a039] hover:shadow-xl hover:shadow-[#08275a]/10">
                <div className="relative h-44 overflow-hidden">
                  <Image src={detail.cardImage} alt={service.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08275a]/62 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b98218]">
                    {detail.category}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-[#08275a]">{service.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.angle}</p>
                  <Link
                    href={`/${chennaiConfig.citySlug}/${service.slug}`}
                    prefetch={false}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#08275a] px-4 py-2.5 text-sm font-black text-white transition hover:bg-[#0b4fb3]"
                  >
                    Open Chennai page
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#dbe7f5] bg-white px-4 py-14 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
                Areas
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">
                Main Chennai service areas
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              These are common enquiry locations. For any other Chennai area, call
              or send site photos and the team can confirm the visit.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredAreas.map((area) => (
              <article key={area.slug} className="rounded-md border border-[#dbe7f5] bg-[#f8fbff] p-5 shadow-sm transition hover:border-[#d6a039] hover:bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Chennai
                    </p>
                    <h3 className="mt-2 text-lg font-black text-slate-950">{area.name}</h3>
                  </div>
                  <MapPin className="shrink-0 text-[#b98218]" size={21} />
                </div>
                <Link
                  href={`/${chennaiConfig.citySlug}/${area.slug}`}
                  prefetch={false}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#0b4fb3]"
                >
                  View all services
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href={serviceAreaPath(chennaiConfig.services[0].slug, area.slug)}
                  prefetch={false}
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#d6a039] px-4 py-2 text-sm font-black text-[#08275a] transition hover:bg-[#f3c35b]"
                >
                  Start with {chennaiConfig.services[0].name}
                  <ArrowRight size={15} />
                </Link>
                <div className="mt-4 grid gap-2">
                  {chennaiConfig.services.slice(0, 3).map((service) => (
                    <Link
                      key={service.slug}
                      href={serviceAreaPath(service.slug, area.slug)}
                      prefetch={false}
                      className="flex items-center justify-between rounded-md border border-[#dbe7f5] bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#d6a039] hover:text-[#08275a]"
                    >
                      {service.name}
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Service pages explain the Chennai work clearly before asking for a site visit.",
            "Quotes are based on photos, measurements, access, and the real opening.",
            "Phone and WhatsApp stay available for areas not shown on the page.",
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-md border border-[#dbe7f5] bg-white p-5 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#b98218]" size={18} />
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
