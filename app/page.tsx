import dynamic from "next/dynamic";
import type { Metadata } from "next";
import ButtonCards from "./components/ButtonCards";
import HomeStats from "./components/HomeStats";
import ServicesGrid from "./components/products/ServicesGrid";
import { buildHoneSchemaGraph } from "./components/schema/homeSchema";
import { getGeo } from "./components/utils/getGeo";

import {
  CarouselSkeleton,
  ServicesSkeleton,
  TestimonialsSkeleton,
  ClientsSkeleton,
} from "./components/LoadingSkeletons";


const Carousel = dynamic(() => import("./components/Carousel"), {
  loading: () => <CarouselSkeleton />,
  ssr: true,
});

const ContactForm = dynamic(() => import("./components/ContactForm"), {
  ssr: true,
  loading: () => null,
});

const Services = dynamic(() => import("./components/Services"), {
  loading: () => <ServicesSkeleton />,
  ssr: true,
});

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => <TestimonialsSkeleton />,
  ssr: true,
});

const Clients = dynamic(() => import("./components/Clients"), {
  loading: () => <ClientsSkeleton />,
  ssr: true,
});

const LocationScroller = dynamic(()=> import("./components/LocationsWeServe"),{
   ssr: true,
  loading: () => null,
})

const location = "Hyderabad";
const homeUrl = "https://rohiniinvisiblegrills.com/";
const homeImage = "/images/invisible-grill-for-balcony.webp";
const primaryKeyword = `Invisible Grills in ${location}`;
const homeTitle = `Invisible Grills ${location} | Balcony Safety | Rohini`;
const homeDescription = `Rohini Invisible Grills installs balcony safety grills, bird protection nets, and window safety systems in ${location} with free site visits.`;

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: Array.from(new Set([
    primaryKeyword,
    `Anti bird nets ${location}`,
    `Invisible grills ${location}`,
    `Bird protection balcony ${location}`,
    `Pigeon nets installation ${location}`,
    `Balcony safety grills ${location}`,
    "bird spikes installation",
    "Anti bird invisible grills near me",
    "Anti bird invisible grills Telangana",
    "Rohini Invisible Grills",
  ])).slice(0, 30),
  alternates: {
    canonical: homeUrl,
  },
  category: "Bird Control",
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: homeUrl,
    siteName: "Rohini Invisible Grills",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: homeImage,
        width: 1200,
        height: 630,
        alt: primaryKeyword,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homeImage],
  },
  other: {
    "geo.region": getGeo("hyderabad").region,
    "geo.placename": location,
    "geo.position": `${getGeo("hyderabad").lat};${getGeo("hyderabad").lng}`,
    ICBM: `${getGeo("hyderabad").lat}, ${getGeo("hyderabad").lng}`,
  },
};

const galleryImages = [
  "/images/children-safety-invisible-grills-for-balcony.webp",
  "/cards/stainless-steel-invisible-grill.webp",
  "/images/invisible-grill-for-balcony.webp",
  "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
  "/images/sport-nets-installation-hyderabad.webp",
];

const homeJsonLd = JSON.stringify(
  buildHoneSchemaGraph("hyderabad", homeUrl, "Invisible Grills", "invisible-grills", galleryImages),
  null,
  2
);

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/cards/balcony-safety-invisible-grills-installation-near-me.webp"
        media="(max-width: 767px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/balcony-invisible-safety-installation.webp"
        media="(min-width: 768px)"
        fetchPriority="high"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: homeJsonLd,
        }}
      />
      {/* <NavBar />
      <ContactDetailsBar /> */}
    <main className="px-4 bg-[#fff] pb-6 pt-[1px] md:pt-[3px] sm:p-6 overflow-hidden">
      <h1 className="sr-only">
        Invisible Grills in Hyderabad for Balcony Safety, Window Protection, and Bird Control
      </h1>
         
      <Carousel />
      
      <ButtonCards />

      <ServicesGrid />

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Our Services</h2>
        <Services />
      </section>

      <section className="mt-10">
        <Testimonials />
      </section>

      <HomeStats />

      <section className="mt-10 mt-6 mx-auto bg-[#E5E5E5] px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-900">Clients & Societies</h2>
        <Clients />
      </section>

       <section className="mt-10">
      <h2 className="text-2xl ml-auto mr-auto text-center font-semibold mb-4 text-green-900">Areas We Serve</h2>
        <LocationScroller service="anti-bird-invisible-grills" />
      </section>

      <section className="mt-8">
        <ContactForm />
      </section>
    </main>
    </>
  );
}
