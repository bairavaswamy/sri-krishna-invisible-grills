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

  const url = `https://rohiniinvisiblegrills.com/services/bird-spikes-installation`;

  const image = "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp";

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */
const primaryKeyword = `Bird Spikes Installation in ${location}`;

const title =
  `${primaryKeyword} | Pigeon Control & Balcony Bird Protection Near Me | Rohini Invisible Grills`;

const description =
  `Looking for bird spikes installation in ${location}? Stop pigeons with top rated bird control solutions near you. Durable stainless steel spikes for balcony, windows, and ledges. Affordable price, expert installation, and free site visit in ${location}.`;
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
  primaryKeyword,
  `Bird spikes near me ${location}`,
  `Pigeon control spikes ${location}`,
  `Balcony bird spikes ${location}`,
  `Bird control services ${location}`,
  `Best bird spikes installation ${location}`,
  `Affordable bird spikes near me`,
  `Anti pigeon spikes ${location}`,
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

 const breadcrumbs = generateBreadcrumb(location,"services/balcony-safety-invisible-grills")
   const authorityScore = locationAuthorityScore(location)
const faqs = [

  {
    question: `What is the price of bird spikes installation near me in ${location}?`,
    answer: `The price of bird spikes in ${location} depends on area size and type of spikes used. We provide affordable and top rated bird spikes installation near me with strong materials and expert fitting.`
  },

  {
    question: `Do bird spikes stop pigeons completely in ${location}?`,
    answer: `Yes. Bird spikes prevent pigeons and birds from sitting on ledges, balconies, and windows. They are one of the best solutions for long-term bird control.`
  },

  {
    question: `Are bird spikes safe for birds and humans?`,
    answer: `Yes. Bird spikes do not harm birds. They only stop birds from landing. They are safe for humans, children, and pets.`
  },

  {
    question: `Where can bird spikes be installed in ${location}?`,
    answer: `Bird spikes can be installed on balconies, windows, AC units, railings, ledges, and building edges to stop bird sitting and nesting.`
  },

  {
    question: `How long does bird spikes installation take near me in ${location}?`,
    answer: `Most bird spikes installations are completed within a few hours depending on area size. Our team provides fast and clean installation.`
  },

  {
    question: `Which is better bird spikes or bird nets for pigeon control?`,
    answer: `Bird spikes are best for stopping birds from sitting, while nets block entry. For full protection, many customers combine both solutions.`
  },

  {
    question: `Do you provide bird spikes installation near me in ${location}?`,
    answer: `Yes. We provide bird spikes installation across ${location} with expert team, high quality materials, and long-lasting results.`
  }

];

  const invisibleGrillsSections = [

{
header:`Bird Spikes Installation in ${location}`,
content:`Bird spikes installation in ${location} is one of the best ways to stop pigeons and birds from sitting on balconies, windows, and ledges. People searching near me choose bird spikes for clean homes, less mess, and strong bird control in apartments and buildings.`
},

{
header:`High Quality Stainless Steel Bird Spikes Used`,
content:`We use premium stainless steel bird spikes that are strong, rust proof, and long lasting. These spikes work better than temporary solutions and give top rated bird protection for all types of buildings in ${location}.`
},

{
header:`How Bird Spikes Are Installed`,
content:`Bird spikes installation starts with proper inspection of the area. Spikes are fixed using strong adhesive or screws on ledges, railings, and AC units. This creates a barrier that stops birds from sitting or nesting.`
},

{
header:`Why Bird Control Is Important for Apartments`,
content:`Pigeons and birds create dirt, smell, and health problems. In ${location}, many homes face this issue. Bird spikes help keep your balcony clean, prevent nesting, and improve hygiene.`
},

{
header:`Bird Spikes Installation Cost in ${location}`,
content:`The cost of bird spikes in ${location} depends on area size and type of spikes. Customers searching best price near me prefer bird spikes because they are affordable and long-lasting.`
},

{
header:`Why Choose Our Bird Spikes Installation`,
content:`We provide top rated bird spikes installation in ${location} with expert team and high quality materials. Customers trust us for best service, fast work, and long-term bird control solutions.`
},

{
header:`Simple Maintenance for Bird Spikes`,
content:`Bird spikes require very little maintenance. Just clean occasionally to remove dust. With proper care, they last for many years and keep your balcony bird-free.`
}

];


    
    const url = `https://rohiniinvisiblegrills.com/services/bird-spikes-installation`;
    const serviceName = "Bird Spikes Installation";
    const serviceSlug = "bird-spikes-installation";
    
    const galleryImages = [
   "/spikes/anti-bird-spikes-installation-near-me.webp",
    "/spikes/bird-control-spikes.webp",
    "/spikes/metalic-bird-spikes-installation-near-me.webp",
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
      __html: jsonLd  // JSON.stringify( buildFullSchema(location, "/services/balcony-safety-invisible-grills", faqs))
    }}
  />

  {/* Breadcrumb Schema */}
  {/* <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(breadcrumbs)
    }}
  /> */}

  {/*Location Authority Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Bird Spikes Installation in Hyderabad - Professional Installation for Bird Protection",
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
      backgroundImage: `url("/spikes/anti-bird-spikes-installation-near-me.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
      Bird Spikes Installation in Hyderabad – Stop Pigeons & Protect Your Balcony
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
      Get top rated bird spikes installation near you in Hyderabad. Strong stainless steel spikes stop pigeons from sitting and nesting, keeping your balcony clean, safe, and hygienic.
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
    <span className="relative z-10 tracking-wide">+91 87905 18724</span>
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
      src={"/spikes/metalic-bird-spikes-installation-near-me.webp" + "?v=hyderabad-telangana"}
      alt={`Bird spikes installation in near me hyderabad`}
      title={`Bird Spikes Installation in Hyderabad`}
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
  <Link href="/services/bird-spikes-installation" className="hover:underline">
  Bird Spikes Installation
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

{section.header.includes("Why Bird Control Is Important for Apartments") && (
  <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">
    
    <Image
      src={"/spikes/bird-control-spikes.webp?v=near-me-hyderabad-telangana"}
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
<LocationScroller service="bird-spikes-installation" />

  {/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Need Bird Spikes in {location}?
  </h2>

  <p className="mb-6">
   Contact Rohini Invisible Grills today for professional bird spikes installation. Stop pigeons, keep your balcony clean, and get affordable pricing with expert service.
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