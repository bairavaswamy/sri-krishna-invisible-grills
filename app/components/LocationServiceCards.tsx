"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { services as productServices } from "./data/productServices";
import { getRelatedServices } from "./constants/internalLinking";
import { slugify } from "./seo/utils";

type Props = {
  serviceSlug: string;
  location: string;
};

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-green-600",
  "Most Visited": "bg-blue-600",
  "Top Rated": "bg-purple-600",
  "Hot Deal": "bg-red-600",
  "Best Deal": "bg-orange-500",
  Popular: "bg-indigo-600",
  Recommended: "bg-teal-600",
  "Pet Safe": "bg-pink-600",
  "Budget Friendly": "bg-yellow-500 text-black",
  "Space Saver": "bg-gray-700",
  "Top Choice": "bg-emerald-600",
};

export default function LocationServiceCards({ serviceSlug, location }: Props) {
  const relatedLocationServices = getRelatedServices(serviceSlug)
    .map((service) => {
      const serviceMeta = productServices.find((item) => item.slug === service.slug);

      return {
        ...service,
        image: serviceMeta?.image ?? "/images/invisible-grill.webp",
        description:
          serviceMeta?.description ??
          `Explore ${service.title.toLowerCase()} installation services in ${location} with premium materials and expert fitting.`,
        rating: serviceMeta?.rating ?? 4.8,
        badge: serviceMeta?.badge ?? "Recommended",
        href: `/${service.slug}/${slugify(location)}`,
      };
    })
    .slice(0, 6);

  if (relatedLocationServices.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="overflow-hidden rounded-[28px] border border-orange-100 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] shadow-[0_20px_60px_rgba(251,146,60,0.12)] md:rounded-[34px]">
        <div className="border-b border-orange-100 px-5 py-6 md:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 sm:text-sm">
            <MapPin size={15} />
            Service Location Pages
          </div>

          <h2 className="mt-4 text-[1.7rem] font-bold leading-[1.15] text-slate-900 sm:text-3xl">
            Explore related services in {location}
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Browse other Rohini Invisible Grills services available in {location}
            through elegant location-based service pages.
          </p>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-2 md:gap-5 md:p-8 xl:grid-cols-3">
          {relatedLocationServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              prefetch={false}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]"
            >
              <div className="relative h-48 overflow-hidden sm:h-56">
                <Image
                  src={service.image}
                  alt={`${service.title} in ${location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                      {service.rating.toFixed(1)}
                    </span>
                  </span>

                  {service.badge && (
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm ${badgeColors[service.badge] ?? "bg-slate-800"}`}
                    >
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="absolute inset-x-4 bottom-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                    {location}
                  </p>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="line-clamp-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 transition group-hover:border-orange-400 group-hover:bg-orange-100">
                  View {location} page
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
