import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "../components/constants/services";

const url = "https://rohiniinvisiblegrills.com/services";
const title = "Invisible Grill & Safety Net Services Hyderabad";
const description =
  "Explore Rohini Invisible Grills services for invisible grills, balcony safety systems, anti-bird nets, bird spikes, sports nets, cloth hangers, and turf installation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  keywords: [
    "invisible grill services Hyderabad",
    "balcony safety net services",
    "anti bird net installation",
    "bird spikes installation",
    "sports nets installation Hyderabad",
    "Rohini Invisible Grills services",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Rohini Invisible Grills",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/invisible-grill-for-balcony.webp",
        width: 1200,
        height: 630,
        alt: "Rohini Invisible Grills service list",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/invisible-grill-for-balcony.webp"],
  },
};

const serviceDescriptions: Record<string, string> = {
  "invisible-grills":
    "Stainless steel invisible grill systems for balconies, windows, apartments, and high-rise safety.",
  "balcony-safety-invisible-grills":
    "Balcony-focused invisible grill installation for families, children, pets, and open-view protection.",
  "anti-bird-invisible-grills":
    "Bird-control invisible grill solutions that protect balconies while keeping ventilation and visibility clean.",
  "sports-nets":
    "Cricket, box cricket, turf, and ground safety net installation for homes, schools, and communities.",
  "windows-invisible-grills":
    "Window invisible grill systems for safer apartments, villas, and commercial spaces.",
  "children-safety-invisible-grills":
    "Child-safe balcony and window protection designed for apartments and high-rise buildings.",
  "bird-spikes-installation":
    "Durable bird spike installation for ledges, parapets, ducts, signage areas, and common nesting spots.",
  "artificial-grass-turf":
    "Artificial grass and turf installation for balconies, terraces, play areas, and sports zones.",
  "cloth-hangers":
    "Ceiling cloth hanger systems for compact apartments, utility areas, balconies, and laundry spaces.",
  "anti-bird-net-installation":
    "Anti-bird and pigeon net installation for balconies, ducts, windows, shafts, and open areas.",
};

const servicesJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-IN",
      mainEntity: {
        "@id": `${url}#services`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#services`,
      name: "Rohini Invisible Grills services",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `https://rohiniinvisiblegrills.com/services/${service.slug}`,
      })),
    },
  ],
});

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-emerald-950 via-slate-950 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: servicesJsonLd,
        }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
            Rohini Invisible Grills Services
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Invisible grills, bird control, safety nets, and turf services in one place.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/85">
            Choose the exact service you need and reach the right service page
            quickly. Every service page includes local coverage, installation
            details, FAQs, and booking options.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-emerald-50">
          {["Free site visit", "304 grade wire options", "Balcony and window safety", "Bird protection"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2"
            >
              <CheckCircle2 size={16} />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto -mt-6 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              prefetch={false}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                Service
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">
                {service.title}
              </h2>
              <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">
                {serviceDescriptions[service.slug] ??
                  "Professional installation service by Rohini Invisible Grills."}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-emerald-700">
                View service
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
