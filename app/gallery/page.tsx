import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Camera, CheckCircle2, Sparkles } from "lucide-react";
import {
  getBreadcrumbListSchema,
  getGraphSchema,
  getImageObjectSchema,
  getWebPageSchema,
  stringifySchema,
} from "../config/schema.config";
import { absoluteUrl, siteConfig } from "../config/site.config";

const title = `${siteConfig.name} Gallery`;
const description =
  "Chennai safety net, invisible grill, bird-control, sports net, and utility installation visuals from SRI KRISHNA INVISIBLE GRILLS.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/gallery"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/gallery"),
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteConfig.defaultImage],
  },
};

const galleryUrl = absoluteUrl("/gallery");
const galleryJsonLd = stringifySchema(
  getGraphSchema([
    {
      ...getWebPageSchema({
        url: galleryUrl,
        name: title,
        description,
        image: absoluteUrl(siteConfig.defaultImage),
        type: "ImageGallery",
      }),
      image: siteConfig.galleryImages.map((image) =>
        getImageObjectSchema({
          url: absoluteUrl(image.src),
          name: image.title,
          caption: image.alt,
        })
      ),
    },
    getBreadcrumbListSchema([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Gallery", url: galleryUrl },
    ]),
  ])
);

export default function GalleryPage() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8fbff] to-[#fff8e8] text-[#08275a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: galleryJsonLd,
        }}
      />

      <section className="relative isolate overflow-hidden bg-[#08275a] px-6 py-16 text-white sm:py-20">
        <Image
          src="/images/site/chennai-service-directory-montage.png"
          alt="Chennai safety net and invisible grill installation montage"
          fill
          priority
          className="absolute inset-0 -z-20 object-cover opacity-28"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#08275a] via-[#08275a]/90 to-[#08275a]/55" />
        <div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#f3c35b]">
              <Camera size={16} />
              Gallery
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
              Chennai safety installation visuals for {siteConfig.name}.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
              Balcony protection, invisible grill lines, anchor details, service
              visits, and finished Chennai safety work shown in a clear project view.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {["Clean finish", "Measured fixing", "Open view"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold shadow-lg shadow-black/10 backdrop-blur"
              >
                <CheckCircle2 className="text-[#f3c35b]" size={18} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.galleryImages.map((image) => (
          <article
            key={image.src}
            className="group overflow-hidden rounded-md border border-[#dbe7f5] bg-white shadow-lg shadow-[#08275a]/8 transition duration-300 hover:-translate-y-1 hover:border-[#d6a039]"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#08275a] shadow">
                {image.category}
              </div>
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#b98218]">
                <Sparkles size={14} />
                Project View
              </p>
              <h2 className="mt-2 text-xl font-black text-[#08275a]">{image.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {image.alt}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-6 rounded-md border border-[#dbe7f5] bg-white p-6 shadow-xl shadow-[#08275a]/8 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b98218]">
              Site visit
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#08275a]">
              Need the same clean finish at your place?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Share your area, photos, and service requirement so the team can plan
              the right safety net, invisible grill, bird-control, sports, or utility setup.
            </p>
          </div>
          <Link
            href="/contact-us"
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a039] px-6 py-3 font-black text-[#08275a] shadow-md shadow-[#08275a]/10 transition hover:bg-[#f3c35b]"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
