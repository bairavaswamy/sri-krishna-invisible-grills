import Link from "next/link";
// import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle,Plus, Minus } from "lucide-react";
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
import {generateLocationKeywords} from "../../components/seo/keywordGenerator"
import MapSection from "../../components/maps/geoMap";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const location = "Hyderabad"

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

  const geo = getGeo(params.slug)

  const url = `https://rohiniinvisiblegrills.com/services/windows-invisible-grills`;

  const image ="/images/window-anti-bird-invisible-grills.webp";

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */

  const primaryKeyword = `Windows Invisible Grills in ${location}`;
  //  const autokeywords = generateLocationKeywords(
  //   location,
  //   locations
  // );
  const title =
    `${primaryKeyword} | windows Pigeon Safety & Balcony Protection & bird spikes | Rohini Invisible Grills`;

  const description = `
Looking for windows invisible grills installation in ${location}? 
Secure your windows with strong stainless steel invisible grills that prevent falls and birds while keeping ventilation and outside view clear. 
15+ years experience, expert fitting & free site inspection by Rohini Invisible Grills.
`;
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
  `Invisible grills ${location}`,
  `Anti bird invisible grills ${location}`,
  `Balcony safety grills ${location}`,
  "Pigeon protection balcony",
   `Window safety invisible grills ${location}`,
  `Invisible grills for windows ${location}`,
  `Window grill installation ${location}`,
  `Bird protection window grills ${location}`,
  "Bird spikes installation",
  "Invisible grills Telangana",
  `Bird Control grills ${location}`,
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








export default function Page({ params }:any) {
 const location = "Hyderabad";

 const breadcrumbs = generateBreadcrumb(location,"services/windows-invisible-grills")
   const authorityScore = locationAuthorityScore(location)
const faqs = [

{
question:`What is the price of invisible grills for windows in ${location}?`,
answer:`The price depends on window size and installation type. We provide affordable invisible grill and window safety net installation in ${location} with durable materials and professional fitting.`
},

{
question:`Are invisible window grills safe for children and pets in ${location}?`,
answer:`Yes. Invisible grills for windows provide strong protection and act like window safety nets, preventing accidental falls while keeping airflow and visibility open.`
},

{
question:`Do invisible grills for windows stop pigeons and birds in ${location}?`,
answer:`Yes. Invisible grills work as anti bird nets and pigeon safety nets that prevent birds from entering windows or nesting areas.`
},

{
question:`Will invisible window grills block sunlight or ventilation?`,
answer:`No. The stainless steel cables are thin and nearly invisible, allowing fresh air, sunlight, and outside views without obstruction.`
},

{
question:`How long does window invisible grill installation take in ${location}?`,
answer:`Most window installations are completed within a few hours depending on the number and size of windows.`
},

{
question:`Are invisible grills better than traditional window grills?`,
answer:`Yes. Invisible grills provide modern safety, bird protection, and clear views compared to heavy iron grills or basic safety nets.`
}

];

  const invisibleGrillsSections = [

{
header:`Invisible Grills for Windows Installation in ${location}`,
content:`Invisible grills for windows in ${location} provide modern safety without blocking outside views. Designed using high-tensile stainless steel cables, they protect children, pets, and homes while maintaining ventilation. These systems also work as window safety nets and anti bird nets. If you are searching invisible grills for windows near me or safety nets installation in ${location}, our expert service offers secure and durable solutions.`
},

{
header:`Why Invisible Window Grills Are Popular in ${location}`,
content:`Modern apartments in ${location} prefer invisible grills for windows because they provide safety while keeping homes bright and open. Unlike traditional grills, they allow airflow and natural light. They function as balcony safety nets, pigeon safety nets, and bird control nets for windows. Homeowners searching window safety nets near me or bird nets installation choose invisible grills for style and protection.`
},

{
header:`Professional Window Invisible Grill Installation Process in ${location}`,
content:`Our invisible grill installation for windows in ${location} begins with inspection and accurate measurement. High-strength stainless steel cables are fixed using secure anchoring systems and proper tension control. This ensures reliable safety similar to premium window safety nets and anti bird net systems. Customers searching invisible grill installation near me trust our clean and professional process.`
},

{
header:`Bird Protection Using Invisible Window Grills in ${location}`,
content:`Bird nesting near windows is common in ${location}. Invisible grills act as pigeon safety nets and bird control nets that prevent entry without harming birds. The transparent design keeps views clear while maintaining hygiene and safety. People searching anti bird nets near me, window bird nets, or pigeon protection solutions prefer invisible grills for long-term protection.`
},

{
header:`Cost of Invisible Grills for Windows in ${location}`,
content:`The cost of invisible grills for windows in ${location} depends on window size, materials, and installation requirements. Compared to traditional grills or basic safety nets, invisible grills offer long-term durability with minimal maintenance. If you search invisible grills price, window safety nets cost, or bird net installation near me, we provide transparent pricing and customized solutions.`
},

{
header:`Why Choose Our Invisible Window Grill Services in ${location}`,
content:`Homeowners in ${location} trust our invisible grills for windows because we use premium stainless steel cables and expert installation techniques. Our solutions work as window safety nets, anti bird nets, and pigeon safety systems. Customers searching invisible grills near me or bird net installation services choose us for reliable workmanship, neat finishing, and long-lasting safety.`
},

{
header:`Maintenance Tips for Invisible Window Grills in ${location}`,
content:`Invisible grills for windows in ${location} require simple maintenance such as periodic cleaning and inspection of cable tension. Avoid placing heavy weight on wires and schedule professional checks when needed. Proper care ensures performance similar to high-quality safety nets and bird control systems, keeping your windows safe, clean, and secure for years.`
}

];


    
    const url = `https://rohiniinvisiblegrills.com/services/windows-invisible-grills`;
    const serviceName = "Windows Invisible Grills";
    const serviceSlug = "windows-invisible-grills";
    
    const galleryImages = [
    "/images/window-anti-bird-invisible-grills.webp",
    "/images/window-invisible-grills-Hyderabad.webp"
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
      __html: JSON.stringify( buildFullSchema(location, "services/invisible-grills", faqs))
    }}
  />

  {/* Breadcrumb Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(breadcrumbs)
    }}
  />

  {/*Location Authority Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Invisible grills in Hyderabad - Professional Installation for Bird Protection",
        areaServed: "Hyderabad",
        additionalProperty: {
          "@type": "PropertyValue",
          name: "Location Authority Score",
          value: authorityScore
        }
      })
    }}
  />

  {/* HERO SECTION */}

  <section className="relative md:h-[400px] py-10 text-white">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url("/images/window-anti-bird-invisible-grills.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
      Invisible grills for windows in Hyderabad - Professional Installation for Bird Protection
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200`}>
      Window invisible grills in Hyderabad designed for modern homes that need safety without losing open views strong stainless steel cables protect balconies windows and high rise spaces while keeping the design elegant and minimal
    </p>

<div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">

  {/* CALL BUTTON */}
  <a
    href="tel:+918790518724"
    className="relative group overflow-hidden
    flex items-center justify-center gap-3
    px-5 py-2 rounded-2xl
    font-semibold text-white
    backdrop-blur-xl
    border border-white/20
    bg-white/10
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
    transition-all duration-500
    hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(255,170,0,0.45)]"
  >

    {/* Glow layer */}
    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/40 to-amber-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></span>

    <Phone size={20} className="relative z-10" />
    <span className="relative z-10 tracking-wide">Call Now</span>
  </a>

  {/* WHATSAPP BUTTON */}
  <a
    href="https://wa.me/919491008380"
    className="relative group overflow-hidden
    flex items-center justify-center gap-3
    px-5 py-2 rounded-2xl
    font-semibold text-white
    backdrop-blur-xl
    border border-white/20
    bg-white/10
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
    transition-all duration-500
    hover:-translate-y-1 hover:shadow-[0_15px_60px_rgba(34,197,94,0.45)]"
  >

    {/* Glow layer */}
    <span className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/40 to-green-400/0 opacity-0 group-hover:opacity-100 transition duration-500"></span>

    <MessageCircle size={20} className="relative z-10" />
    <span className="relative z-10 tracking-wide">WhatsApp</span>
  </a>

</div>

  </div>

</section>
<div className="relative bg-white md:bg-[#f1f5f9] md:w-[75%] -mt-[15px] md:-mt-[65px] p-4 md:p-6 rounded-2xl md:rounded-none shadow-xl mx-auto">

  <div className="relative w-full md:w-[100%] h-[300px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl mx-auto">

    {/* Image */}
    <Image
      src={"/images/window-anti-bird-invisible-grills.webp" + "?v=hyderabad-telangana"}
      alt={`window Invisible grill installation in near me hyderabad`}
      title={`window Invisible grills in Hyderabad`}
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
  <Link href="/services/windows-invisible-grills" className="hover:underline">
  Windows Invisible Grills
  </Link>
  {" > "}
  {location}

  </div>


  {/* CONTENT SECTIONS */}

  <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

  {invisibleGrillsSections.map((section:any, index:number) => (

  <div key={index}>
    <div >
  <h2 className="text-2xl font-bold mb-4 text-green-900">
  {section.header}
  </h2>
  <div className="w-[100%] h-[1px] 
  
  bg-black/10
    mb-3  rounded-full"></div>
</div>


 {section.header.includes("Bird Protection Using Invisible Window Grills in") && (
  <div className="relative w-full  h-[260px] md:h-[360px] my-6 rounded-xl overflow-hidden">
    
    <Image
      src={"/images/window-invisible-grills-Hyderabad.webp?v=near-me-hyderabad-telangana"}
      alt="Invisible grill installation near me Hyderabad"
      title="Invisible grills near me in Hyderabad"
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


  {/* FAQ SECTION */}

  {/* <section className="bg-white py-12">

  <div className="max-w-5xl mx-auto px-6">

  <h2 className="text-3xl font-bold mb-8 text-center">
  Frequently Asked Questions
  </h2>

  <div className="space-y-4">

  {page.faqs.map((faq:any, i:number)=>(
  
  <details
  key={i}
  className="border rounded-lg p-4 group cursor-pointer"
  >

  <summary className="font-semibold text-gray-900">
  {faq.question}
  </summary>

  <p className="mt-3 text-gray-700">
  {faq.answer}
  </p>

  </details>

  ))}

  </div>

  </div>

  </section> */}

  <FAQSection faqs={faqs} />


  {/* NEARBY LOCATIONS */}

  {/* <section className="py-12 bg-gray-100">

  <div className="max-w-6xl mx-auto px-6">

  <h2 className="text-2xl font-bold mb-6">
  Invisible Grill Installation Near {page.location}
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

  {page.sections
  .find((s:any)=>s.heading==="Nearby Areas We Serve")
  ?.content.map((loc:string,i:number)=>{

  const slug = loc
  .replace("Invisible grill installation available in ","")
  .toLowerCase()
  .replace(/\s/g,"-")

  return (

  <Link
  key={i}
  href={`/invisible-grills/${slug}`}
  className="bg-white p-4 rounded-lg shadow hover:shadow-lg text-center text-blue-600 font-medium"
  >
  {loc.replace("Invisible grill installation available in ","")}
  </Link>

  )

  })}

  </div>

  </div>

  </section> */}

  <MapSection area={location} />

  {/* <NearbyServiceSection page={page} /> */}
<LocationScroller service="windows-invisible-grills" />

  {/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Need Invisible Grills in {location}?
  </h2>

  <p className="mb-6">
  Contact Rohini Invisible Grills today for professional installation.
  Protect your balcony and keep birds away and lock 10% discount on all invisible grills.
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