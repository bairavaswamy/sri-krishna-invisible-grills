import Link from "next/link";
import { combineBengaloreLocations, hyderabadLocations } from "../../components/constants/locations";
import { slugify, createGrillSeed, locationImagesForSportsNets, BalconySafetySportsNets, } from "../../components/seo/utils";
import NearbyServiceSection from "../../components/NearbyAreas";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import FAQSection from "../../balcony-safety-invisible-grills/[slug]/Faqs";
import { Handshake, Award, ShieldCheck } from "lucide-react";
// import { Poppins, Inter } from "next/font/google";
import { services } from "../../components/constants/services";
import { generateAntiBirdInvisibleGrillservice } from "../../components/seo/antiBirdInvisibleGrillsGenerator";
import {generateSportsNetsService} from "../../components/seo/sportsNetsGenerator"
import LocationScroller from "../../components/LocationsWeServe";
import {buildSchemaGraph } from "../../components/schema/combineSchema";
import { hyderabadOtherLocations } from "../../components/data/telangana";
import type { Metadata } from "next";
import {getGeo} from "../../components/utils/getGeo"
import {generateLocationKeywords} from "../../components/seo/keywordGenerator"
import MapSection from "../../components/maps/geoMap";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const location = locations.find(
    (loc) => slugify(loc) === params.slug
  );

  if (!location) {
    return {
      title: "Page Not Found | Rohini Invisible Grills",
      description: "The requested service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const page =generateSportsNetsService(
    location,
    locations,
    locations.indexOf(location)
  );

  const geo = getGeo(params.slug)

  const url = `https://rohiniinvisiblegrills.com/sports-nets/${params.slug}`;

  const image = getLocationImage(location);

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */

  const primaryKeyword = `Invisible Grills in ${location}`;
   const autokeywords = generateLocationKeywords(
    location,
    locations
  );
  const title =
    `${primaryKeyword} | box cricket nets installation & Balcony Protection  | Rohini Invisible Grills`;

const description = `
Looking for sports nets installation in ${location}? 
Professional cricket practice nets, box cricket nets & safety nets for schools, apartments and playgrounds. 
Strong UV-resistant materials, expert installation & free site visit across ${location}. 
Trusted service by Rohini Invisible Grills.
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
  `Cricket nets installation ${location}`,
  `Box cricket nets ${location}`,
  `Sports safety nets near me`,
  `Playground net installation ${location}`,
  `Terrace cricket nets ${location}`,
  "Rohini Invisible Grills"
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

const locations = [...hyderabadLocations , ...hyderabadOtherLocations,...combineBengaloreLocations]

//  const headingFont = Poppins({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   variable: "--font-heading"
// });

//  const bodyFont = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500"],
//   variable: "--font-body"
// });

const separator = (service: string): string => {
  const parts = service.split("/");

  if (parts.length < 2) return service; // safety fallback

  return `${parts[0]}in${parts[1]}`;
};


export async function generateStaticParams() {
  return services.flatMap((service) =>
    locations.map((location) => ({
      service: service.slug,
      location: slugify(location),
      slug: slugify(location)
    }))
  );
}

interface Section {
  heading: string;
  content: string[]; 
}

function seededRandom(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;

    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);

    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}


 function getLocationImage(location: string) {

  const seed = createGrillSeed(location.toLowerCase());

  const rand = seededRandom(seed);

  const index = Math.floor(rand() * locationImagesForSportsNets.length);

  return locationImagesForSportsNets[index];
}


function getLocationImageInProduct(location: string) {

  const seed = createGrillSeed(location.toLowerCase());

  const rand = seededRandom(seed);

  const index = Math.floor(rand() * BalconySafetySportsNets.length);

  return BalconySafetySportsNets[index];
}



// export function getLocationImage(location: string) {

//   const hash = locationHash(location);

//   const index = hash % locationImages.length;

//   return locationImages[index];

// }


export default function Page({ params }: { params: { slug: string , sections: Section[];} }) {
  const location = locations.find(
    (loc) => slugify(loc) === params.slug
  );

  const invisibleGrillImage = getLocationImage(location || "default location");
  const inProductImage = getLocationImageInProduct(location || "default location");

  if (!location) {
    return <div>Location not found</div>;
  }


  if (!location) return null;

  const page = generateSportsNetsService(
    location,
    locations,
    locations.indexOf(location)
  );

  
  
  const url = `https://rohiniinvisiblegrills.com/sports-nets/${slugify(location)}`;
  const serviceName = "Sports Nets";
  const serviceSlug = "sports-nets";
  
  const faqs = page.faqs
  const galleryImages = [
   invisibleGrillImage,
   inProductImage
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
      __html:jsonLd  // JSON.stringify(page.schema)
    }}
  />

  {/* Breadcrumb Schema */}
  {/* <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(page.breadcrumbs)
    }}
  /> */}

  {/*Location Authority Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.title,
        areaServed: page.location,
        additionalProperty: {
          "@type": "PropertyValue",
          name: "Location Authority Score",
          value: page.authorityScore
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
      backgroundImage: `url('${getLocationImage(location || "default location")}')`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
      {page.title}
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
      {page.shortDescription}
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
      src={invisibleGrillImage + "?v=" + separator(page.slug)}
      alt={`Cricket practice sports nets installation in ${page.location}`}
      title={`Sports nets near me in ${page.location}`}
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
        <p className="text-gray-900 md:text-white text-sm md:text-[13px] font-semibold">
          15,300+ Trusted Homes & 7.5 years warranty.
        </p>
      </div>

      {/* Quality */}
      <div className="flex flex-col items-center">
        <Award className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
        <p className="text-gray-900 md:text-white text-sm md:text-[13px] font-semibold">
          ISO Certified Quality & Best quality invisible grills
        </p>
      </div>

      {/* Experience */}
      <div className="flex flex-col items-center">
        <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 drop-shadow-lg mb-2" />
        <p className="text-gray-900 md:text-white text-xs md:text-[13px] font-semibold max-w-[220px]">
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
  <Link href="/services/sports-nets" className="hover:underline">
 Sports Nets
  </Link>
  {" > "}
  {page.location}

  </div>


  {/* CONTENT SECTIONS */}

  <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

  {page.sections.map((section:any, index:number) => (

  <div key={index}>
    <div >
  <h2 className="text-2xl font-bold mb-4 text-green-900">
  {section.heading}
  </h2>
  <div className="w-[100%] h-[1px] 
  
  bg-black/10
    mb-3  rounded-full"></div>
</div>

{section.heading.includes("Sports Nets Installation Price near me in") && (
  <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">
    
    <Image
      src={`${inProductImage}?v=near-me-${separator(page.slug)}-hyderabad-telangana`}
      alt={`Box cricket practice net installation near me ${page.location}`}
      title={`All sports nets near me in ${page.location} Hyderabad`}
      fill
      className="object-cover transition-transform duration-700 hover:scale-105"
      priority
    />

  </div>
)}

  {Array.isArray(section.content) ? (

  <ul className="list-disc ml-6 space-y-2 text-gray-700">

  {section.content.map((item:string, i:number)=>(
  <li key={i}>{item}</li>
  ))}

  </ul>

  ) : (

  <p className="text-gray-700 leading-relaxed">
  {section.content}
  </p>

  )}

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

  <FAQSection faqs={page.faqs} />


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

  
  {/* MAP SECTION */}

  <MapSection area={page.location} />

  <NearbyServiceSection page={page} />


  {/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Need Sports Net Installation in {page.location}?
  </h2>

  <p className="mb-6">
  Contact Rohini Invisible Grills today for professional Sports Nets installation.
  Protect your balcony and keep birds away and be healthy playing sports by getting sports nets installation from us.
  </p>

  <a
  href="/contact-us"
  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold"
  >
  Get Free Quote
  </a>

  </div>

  </section>

  <LocationScroller service="sports-nets" />

  </main>

  )
}