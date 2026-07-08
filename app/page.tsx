import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ButtonCards from "./components/ButtonCards";
import HomeEnquiryStrip from "./components/HomeEnquiryStrip";
import HomeHeroHighlights from "./components/HomeHeroHighlights";
import HomeSocialBand from "./components/HomeSocialBand";
import HomeStats from "./components/HomeStats";
import { chennaiConfig } from "./config/chennai.config";
import {
  getBreadcrumbListSchema,
  getGraphSchema,
  getWebPageSchema,
  stringifySchema,
} from "./config/schema.config";
import { absoluteUrl, siteConfig } from "./config/site.config";
import {
  CarouselSkeleton,
  TestimonialsSkeleton,
} from "./components/LoadingSkeletons";

const Carousel = dynamic(() => import("./components/Carousel"), {
  loading: () => <CarouselSkeleton />,
  ssr: true,
});

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  ssr: true,
  loading: () => null,
});

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <TestimonialsSkeleton />,
  ssr: true,
});

const homeTitle = `${siteConfig.name} | Chennai Safety Nets and Window Invisible Grills`;
const homeDescription = siteConfig.description;

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "SRI KRISHNA INVISIBLE GRILLS",
    "srikrishnainvisiblegrills.com",
    "balcony safety",
    "window invisible grills",
    "window safety",
    "bird control",
    "home safety solutions",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [siteConfig.defaultImage],
  },
};

const homeJsonLd = stringifySchema(
  getGraphSchema([
    getWebPageSchema({
      url: absoluteUrl("/"),
      name: homeTitle,
      description: homeDescription,
      image: absoluteUrl(siteConfig.defaultImage),
    }),
    getBreadcrumbListSchema([{ name: "Home", url: absoluteUrl("/") }]),
  ])
);

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/site/chennai-home-hero-safety-nets.png"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/site/chennai-home-hero-safety-nets.png"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: homeJsonLd,
        }}
      />
      <main className="overflow-hidden bg-white px-4 pb-6 pt-[1px] md:pt-[3px] sm:p-6">
        <h1 className="sr-only">{siteConfig.name}</h1>

        <Carousel />

        <HomeHeroHighlights />

        <HomeEnquiryStrip />

        <ButtonCards />

        <section className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-md border border-blue-100 bg-white shadow-md shadow-blue-100/50">
          <div className="flex flex-col gap-4 bg-gradient-to-br from-blue-50 via-white to-[#fff7e6] px-5 py-7 sm:flex-row sm:items-end sm:justify-between lg:px-7">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0b4fb3]">
                Our Gallery
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#08275a]">
                Recent safety finishes and installation details
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                A quick look at balcony nets, invisible grills, bird-control work, and
                site measurement details handled for Chennai homes and communities.
              </p>
            </div>
            <Link
              href="/gallery"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-full bg-[#08275a] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-[#0b4fb3]"
            >
              View Gallery
            </Link>
          </div>

          <div className="grid gap-px bg-blue-100 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.galleryImages.slice(0, 8).map((image) => (
              <Link
                href="/gallery"
                prefetch={false}
                key={image.src}
                className="group overflow-hidden bg-white transition hover:bg-blue-50"
              >
                <div className="relative h-56">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08275a]/45 via-transparent to-transparent opacity-70 transition group-hover:opacity-40" />
                </div>
                <div className="border-t-4 border-[#d6a039] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b4fb3]">
                    {image.category}
                  </p>
                  <h3 className="mt-1 text-sm font-black text-[#08275a]">{image.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <HomeStats />

        <section className="mt-10">
          <Testimonials />
        </section>

        <HomeSocialBand />

        <section className="mx-auto mt-10 grid max-w-7xl overflow-hidden rounded-md border border-blue-100 bg-white shadow-md shadow-blue-100/50 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50 p-6 lg:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#0b4fb3]">
              Chennai Service Network
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#08275a]">
              Chennai service pages are ready for quick enquiry.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              SRI KRISHNA INVISIBLE GRILLS connects Chennai customers to safety net,
              invisible grill, bird control, sports net, and utility installation
              pages with clear service choices before the area-specific visit.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Chennai service pages",
                "Area-specific planning",
                "Phone and WhatsApp actions",
                "Clean installation focus",
              ].map((point) => (
                <span
                  key={point}
                  className="rounded-sm border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700"
                >
                  {point}
                </span>
              ))}
            </div>
            <Link
              href={`/${chennaiConfig.citySlug}`}
              prefetch={false}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0b4fb3] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-sm transition hover:bg-[#08275a]"
            >
              Open Chennai Directory
            </Link>
          </div>

          <div className="grid gap-px bg-blue-100 sm:grid-cols-3">
            {siteConfig.galleryImages.slice(0, 3).map((image) => (
              <Link
                href="/gallery"
                prefetch={false}
                key={image.src}
                className="group overflow-hidden bg-white transition hover:bg-blue-50"
              >
                <div className="relative h-52">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08275a]/35 via-transparent to-transparent opacity-70 transition group-hover:opacity-40" />
                </div>
                <div className="border-t-4 border-[#d6a039] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0b4fb3]">
                    {image.category}
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-[#08275a]">{image.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <ContactForm />
        </section>
      </main>
    </>
  );
}
