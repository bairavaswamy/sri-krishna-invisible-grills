import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import SearchResultsClient from "../components/SearchResultsClient";
import { chennaiConfig } from "../config/chennai.config";
import {
  getBreadcrumbListSchema,
  getGraphSchema,
  getItemListSchema,
  getWebPageSchema,
  stringifySchema,
} from "../config/schema.config";
import { absoluteUrl, siteConfig } from "../config/site.config";

const title = `Search ${siteConfig.name}`;
const description =
  "Search Chennai safety net, invisible grill, bird-control, cricket net, utility service, and area pages from SRI KRISHNA INVISIBLE GRILLS.";
const searchUrl = absoluteUrl("/search");

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: searchUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: searchUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.defaultImage),
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
    images: [absoluteUrl(siteConfig.defaultImage)],
  },
};

const searchJsonLd = stringifySchema(
  getGraphSchema([
    getWebPageSchema({
      url: searchUrl,
      name: title,
      description,
      image: absoluteUrl(siteConfig.defaultImage),
      type: "SearchResultsPage",
    }),
    getItemListSchema({
      url: searchUrl,
      name: "Main searchable Chennai service pages",
      items: chennaiConfig.services.map((service) => ({
        name: service.name,
        url: absoluteUrl(`/${chennaiConfig.citySlug}/${service.slug}`),
        description: service.angle,
        type: "Service",
      })),
    }),
    getBreadcrumbListSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Search", url: searchUrl },
    ]),
  ])
);

export default function SearchPage() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8] px-4 py-14 text-slate-950 lg:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: searchJsonLd,
        }}
      />

      <section className="mx-auto max-w-4xl text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fff4d9] text-[#b98218]">
          <Search size={24} />
        </span>
        <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
          Site Search
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[#08275a] sm:text-5xl">
          Find Chennai services, areas, and local pages
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Search by service name, Chennai area, balcony, window, pigeon control,
          cricket net, bird spikes, duct safety, or cloth hanger installation.
        </p>
      </section>

      <SearchResultsClient />

      <section className="mx-auto mt-12 max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b98218]">
              Popular Searches
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Open a main Chennai service page
            </h2>
          </div>
          <Link
            href={`/${chennaiConfig.citySlug}`}
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08275a] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0b4fb3]"
          >
            Chennai Directory
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chennaiConfig.services.map((service) => (
            <Link
              key={service.slug}
              href={`/${chennaiConfig.citySlug}/${service.slug}`}
              prefetch={false}
              className="group rounded-md border border-[#dbe7f5] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d6a039] hover:shadow-md"
            >
              <h2 className="text-lg font-black text-[#08275a]">{service.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.angle}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#0b4fb3]">
                Open page
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
