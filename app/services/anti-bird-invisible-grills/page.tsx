import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import FAQSection from "../../invisible-grills/[slug]/Faqs";
import { Handshake, Award, ShieldCheck } from "lucide-react";
// import { Poppins, Inter } from "next/font/google";
import { buildFullSchema } from "../../components/seo/schema";
import { generateBreadcrumb, locationAuthorityScore } from "../../components/seo/utils";
import LocationScroller from "../../components/LocationsWeServe";
import {buildSchemaGraph } from "../../components/schema/combineSchema";


import type { Metadata } from "next";
import {getGeo} from "../../components/utils/getGeo"
import MapSection from "../../components/maps/geoMap";
// import {generateLocationKeywords} from "../../components/seo/keywordGenerator"

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const location = "Hyderabad";

  if (!location) {
    return {
      title: "Page Not Found | Rohini Invisible Grills",
      description: "The requested service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  // const page = generateWindowInvisibleGrillService(
  //   location,
  //   locations,
  //   locations.indexOf(location)
  // );

  const geo = getGeo("hyderabad")

  const url = `https://rohiniinvisiblegrills.com/services/anti-bird-invisible-grills`;

  const image = "/images/anti-bird-invisible-grills.webp";

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */

  const primaryKeyword = `Anti Bird Invisible Grills in ${location}`;
  //  const autokeywords = generateLocationKeywords(
  //   location,
  //   locations
  // );

  const title =
    `${primaryKeyword} | Pigeon Safety Nets & Balcony Protection | Rohini Invisible Grills`;

  const description =
    `Looking for anti bird invisible grills in ${location}? Professional pigeon safety net & balcony protection installation near you. 15+ years experience, ISO quality materials, expert installation, affordable price & free site visit in ${location}. Call Rohini Invisible Grills today.`;

  /* =========================
     METADATA RETURN
  ========================== */

  return {
    metadataBase: new URL("https://rohiniinvisiblegrills.com"),

    title: {
      default: title,
      template: "%s | Rohini Invisible Grills",
    },

    description,

   keywords: Array.from(new Set([
  // ...autokeywords,
  primaryKeyword,
  `Anti bird nets ${location}`,
  `Invisible grills ${location}`,
  `Bird protection balcony ${location}`,
  `Pigeon nets installation ${location}`,
  `Balcony safety grills ${location}`,
  "bird spikes instllation",
  `Anti bird invisible grills near me`,
  `Anti bird invisible grills Telangana`,
  "Rohini Invisible Grills",
])).slice(0, 30),

    alternates: {
      canonical: url,
    },

    category: "Bird Control",

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
      title,
      description,
      url,
      siteName: "Rohini Invisible Grills",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: primaryKeyword,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    other: {
  "geo.region": geo.region,
  "geo.placename": location,
  "geo.position": `${geo.lat};${geo.lng}`,
  ICBM: `${geo.lat}, ${geo.lng}`,
},
  };
}

// const headingFont = Poppins({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-heading"
// });

// const bodyFont = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body"
// });

export default function Page({ params }: any) {

  const location = "Hyderabad";

  const breadcrumbs = generateBreadcrumb(location, "services/anti-bird-invisible-grills")

  const authorityScore = locationAuthorityScore(location)

  const faqs = [

    {
      question: `What are anti bird invisible grills in ${location}?`,
      answer: `Anti bird invisible grills are stainless steel wire systems installed on balconies and windows to stop pigeons and other birds from entering the space. They protect homes while keeping the outside view open.`
    },

    {
      question: `Do invisible grills stop pigeons in ${location}?`,
      answer: `Yes. Invisible grills create a strong barrier that prevents pigeons from entering balconies and nesting inside apartments.`
    },

    {
      question: `Are anti bird invisible grills safe for families in ${location}?`,
      answer: `Yes. These grills not only stop birds but also help protect children and pets from balcony accidents.`
    },

    {
      question: `What material is used for invisible grills in ${location}?`,
      answer: `Most invisible grills are made using 304 grade stainless steel wires with protective coating to prevent rust and weather damage.`
    },

    {
      question: `How long does installation take in ${location}?`,
      answer: `Most anti bird invisible grill installations are completed within a few hours depending on balcony size and height.`
    },

    {
      question: `Do invisible grills block the balcony view in ${location}?`,
      answer: `No. The stainless steel wires are very thin and almost invisible, so the outside view remains clear and open.`
    }

  ]

  const invisibleGrillsSections = [
    {
      header: `Anti Bird Invisible Grills Installation in ${location}`,
      content: `Bird problems are common in apartments across ${location}. Our anti bird invisible grills and anti bird nets stop pigeons from entering balconies and windows. This solution keeps spaces clean while allowing air and sunlight. Many people searching for balcony safety nets, pigeon safety nets, or mosquito nets near me choose invisible grills for a safe, modern, and long-lasting protection system.`
    },

    {
      header: `How Anti Bird Invisible Grills Protect Your Balcony`,
      content: `Pigeons often create nests and dirt in balcony areas. Anti bird invisible grills and pigeon safety nets block bird entry without closing the view. Installed with strong stainless steel wires, they protect homes while keeping airflow open. Residents in ${location} looking for balcony safety nets or children safety nets prefer this solution for hygiene, comfort, and daily safety.`
    },

    {
      header: `High Quality Stainless Steel Invisible Grill Material`,
      content: `Our invisible grills in ${location} use strong 304 grade stainless steel cables with protective coating for long life. These materials resist rust, rain, and heat, making them ideal for anti bird nets and balcony safety nets. Homeowners searching mosquito nets near me or pigeon safety nets choose durable systems that provide reliable safety and modern appearance.`
    },

    {
      header: `Professional Invisible Grill Installation Process`,
      content: `Professional installation ensures proper protection. Our team installs aluminium channels and tight stainless steel wires carefully for balconies and windows in ${location}. This creates a secure barrier similar to anti bird nets and children safety nets while maintaining open views. Customers searching balcony safety nets or pigeon safety nets near me trust expert installation for lasting safety.`
    },

    {
      header: `Near me Anti Bird Invisible Grill Cost in ${location}`,
      content: `The cost of invisible grills in ${location} depends on balcony size and installation area. Compared to regular anti bird nets or pigeon safety nets, invisible grills offer long-term value with minimal maintenance. People searching balcony safety nets, children safety nets, or mosquito nets near me prefer this durable and modern protection solution for homes.`
    },

    {
      header: `Why Homeowners in ${location} Choose Invisible Grills`,
      content: `Homeowners in ${location} choose invisible grills because they solve bird problems without blocking views. Unlike traditional grills, anti bird nets and balcony safety nets using invisible systems keep homes safe and stylish. Families searching pigeon safety nets, children safety nets, or mosquito nets near me prefer this clean and secure option for balconies and windows.`
    },

    {
      header: `Maintenance Tips for Anti Bird Invisible Grills`,
      content: `Invisible grills require very little maintenance. Simple cleaning keeps wires neat and effective. Avoid hanging heavy items as the system is designed for safety protection. Residents in ${location} using anti bird nets, balcony safety nets, or pigeon safety nets benefit from long-lasting performance while keeping balconies hygienic and safe for children and families.`
    }
  ]

  
    
    const url = `https://rohiniinvisiblegrills.com/services/anti-bird-invisible-grills`;
    const serviceName = "Anti Bird Invisible Grills";
    const serviceSlug = "anti-bird-invisible-grills";
    
    const galleryImages = [
    "/images/anti-bird-invisible-grills.webp",
    "/images/Balcony-Invisible-Grills-1.webp"
    ];
    
    
      // Build the full schema graph
    const schemaGraph = buildSchemaGraph(location, url, serviceName, serviceSlug, faqs, galleryImages);
    
    // Convert to JSON-LD for injecting in the page
    const jsonLd = JSON.stringify(schemaGraph, null, 2);

  return (

    <main className="bg-gray-50 min-h-screen">

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd  // JSON.stringify(buildFullSchema(location, "services/anti-bird-invisible-grills", faqs))
        }}
      />

      {/* Breadcrumb */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs)
        }}
      /> */}

      {/* Authority Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Anti Bird Invisible Grills in Hyderabad - Pigeon Protection Installation",
            areaServed: "Hyderabad",
            additionalProperty: {
              "@type": "PropertyValue",
              name: "Location Authority Score",
              value: authorityScore
            }
          })
        }}
      />

      {/* HERO */}

      <section className="relative md:h-[400px] py-10 text-white">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/images/anti-bird-invisible-grills.webp")`
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

          <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
            Anti Bird Invisible Grills in Hyderabad – Balcony Pigeon Protection
          </h1>

          <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
            Anti bird invisible grills in Hyderabad designed to stop pigeons and protect balconies using strong stainless steel cables that keep homes safe while maintaining open outside views.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">

            <a
              href="tel:+918790518724"
              className="relative group overflow-hidden flex items-center justify-center gap-3 px-5 py-2 rounded-2xl font-semibold text-white backdrop-blur-xl border border-white/20 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(255,170,0,0.45)]"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="https://wa.me/919491008380"
              className="relative group overflow-hidden flex items-center justify-center gap-3 px-5 py-2 rounded-2xl font-semibold text-white backdrop-blur-xl border border-white/20 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(34,197,94,0.45)]"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* IMAGE SECTION */}

      <div className="relative bg-white md:bg-[#f1f5f9] md:w-[75%] -mt-[15px] md:-mt-[65px] p-4 md:p-6 rounded-2xl md:rounded-none shadow-xl mx-auto">

        <div className="relative w-full md:w-[100%] h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl mx-auto">

          {/* Image */}
          <Image
            src={"/images/anti-bird-invisible-grills.webp"}
            alt={`Anti bird invisible grill installation in Hyderabad`}
            title={`Anti bird invisible grills Hyderabad`}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />

        </div>

        {/* Icons Section */}
        <div
          className="
    relative md:absolute
    md:bottom-6 md:left-1/2 md:-translate-x-1/2
    mt-4 md:mt-0
    w-full md:w-auto
    px-4 py-4 md:px-8
    text-center

    md:bg-black/20 
    md:rounded-full
    md:shadow-xl
  "
        >
          <div
            className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      gap-6 md:gap-10
      items-center
      "
          >

            {/* Trusted Homes */}
            <div className="flex flex-col items-center">
              <Handshake className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
              <p className="text-gray-900 md:text-white text-xs md:text-sm  font-semibold">
                15,000+ Trusted Homes & 18 Years Warranty
              </p>
            </div>

            {/* Quality */}
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
              <p className="text-gray-900 md:text-white text-xs md:text-sm font-semibold">
                ISO Certified Quality
              </p>
            </div>

            {/* Experience */}
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
              <p className="text-gray-900 md:text-white text-xs md:text-sm font-semibold max-w-[220px]">
                18+ Years Experience & Expert Installation
              </p>
            </div>

          </div>
        </div>

      </div>

      
  {/* BREADCRUMBS */}

  <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600">

  <Link href="/" className="hover:underline">Home</Link>
  {" > "}
  <Link href="/services/anti-bird-invisible-grills" className="hover:underline">
  Anti Bird invisible grills
  </Link>
  {" > "}
  {"Hyderabad"}

  </div>



      {/* CONTENT */}

      <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

        {invisibleGrillsSections.map((section: any, index: number) => (
          <div key={index}>

            <h2 className="text-2xl font-bold mb-4 text-green-900">
              {section.header}
            </h2>

            <div className="w-full h-[1px] bg-black/10 mb-3 rounded-full"></div>
            {section.header.includes("High Quality Stainless Steel Invisible Grill Material") && (
              <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">

                <Image
                  src={"/images/Balcony-Invisible-Grills-1.webp?v=near-me-hyderabad-telangana"}
                  alt="Anti bird Invisible grill installation near me Hyderabad"
                  title="anti bird Invisible grills near me in Hyderabad"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />

              </div>
            )}

            <p className="text-gray-700 leading-relaxed">
              {section.content}
            </p>

          </div>
        ))}

      </section>

      <FAQSection faqs={faqs} />

      
  {/* MAP SECTION */}

  <MapSection area={location} />

      {/* locations we serve */}
      <LocationScroller service="anti-bird-invisible-grills" />

      {/* CTA */}

      <section className="bg-[#344A6C] text-white py-14">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Need Anti Bird Invisible Grills in {location}?
          </h2>

          <p className="mb-6">
            Contact Rohini Invisible Grills today for professional installation.
            Protect your balcony and keep birds away and Get 10% discount on all anti bird invisible grills.
          </p>

          <a
            href="/contact-us"
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
          >
            Get Free Quote
          </a>

        </div>

      </section>

    </main>

  )
}