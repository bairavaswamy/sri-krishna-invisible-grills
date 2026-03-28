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

  // const page =generateSportsNetsService(
  //   location,
  //   locations,
  //   locations.indexOf(location)
  // );

  const geo = getGeo(params.slug)

  const url = `https://rohiniinvisiblegrills.com/services/sports-nets`;

  const image = "/images/Box-cricket-sports-nets-installation.webp";

  /* =========================
     ADVANCED SEO VARIABLES
  ========================== */

  const primaryKeyword = `Invisible Grills in ${location}`;
  //  const autokeywords = generateLocationKeywords(
  //   location,
  //   locations
  // );
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

 const breadcrumbs = generateBreadcrumb(location,"services/sports-nets")
   const authorityScore = locationAuthorityScore(location)
const faqs = [

{
question:`What is the price of sports nets installation in ${location}?`,
answer:`The cost of sports nets in ${location} depends on net size, material quality, and installation area. Whether you need cricket practice nets near me, football ground nets, or terrace sports nets, we provide affordable pricing with durable materials suitable for schools, apartments, and sports facilities.`
},

{
question:`Which types of sports nets do you install in ${location}?`,
answer:`We install all types of sports nets in ${location} including cricket practice nets, football nets, badminton court nets, volleyball nets, terrace sports nets, turf safety nets, and multi-sports protection nets. Our solutions are suitable for homes, schools, academies, and commercial sports grounds.`
},

{
question:`Are sports nets safe for residential and school use in ${location}?`,
answer:`Yes. Our sports nets installation in ${location} is designed for safety and durability. These nets prevent balls from leaving play areas, protect windows and surroundings, and are ideal for children play zones, school playgrounds, and apartment sports areas.`
},

{
question:`Do you provide cricket practice nets near me in ${location}?`,
answer:`Yes. We specialize in cricket practice nets near me searches across ${location}. Our strong nylon and HDPE nets are perfect for personal training areas, academies, terrace cricket setups, and professional practice zones with long-lasting performance.`
},

{
question:`How long does sports net installation take in ${location}?`,
answer:`Most sports nets installations in ${location} are completed within a few hours depending on project size. Small terrace or practice nets are installed quickly, while larger football or turf sports nets may require additional setup time for secure fixing.`
},

{
question:`Can sports nets be installed on terraces or apartment play areas in ${location}?`,
answer:`Yes. Terrace sports nets in ${location} are very popular for cricket and multi-sport activities. Our installation creates a safe playing environment by preventing balls from falling outside while maintaining open airflow and visibility.`
},

{
question:`Why choose your sports nets installation service in ${location}?`,
answer:`Customers searching best sports nets near me in ${location} choose us for strong materials, professional installation, and long-lasting safety solutions. We provide customized sports net systems for cricket, football, badminton, and multi-sports areas with reliable support and expert workmanship.`
}

];

  const sportsNetsSections = [
  {
    header: `Sports Nets Installation in ${location}`,
    content: `Sports nets installation in ${location} provides safe and professional net solutions for cricket nets, football nets, badminton nets, terrace sports nets, and society playgrounds. If you are searching sports nets near me or sports net installation in ${location}, we offer durable, affordable, and customized net fitting for homes, schools, and sports areas.`
  },

  {
    header: `What Are Sports Nets and Why They Are Needed in ${location}?`,
    content: `Sports nets in ${location} are protective net systems used for cricket practice nets, football ground nets, balcony sports safety nets, and indoor play areas. They prevent ball damage and improve safety. Users searching sports nets near me or playground net installation choose these nets for secure and organized sports environments.`
  },

  {
    header: `Professional Sports Net Installation Process in ${location}`,
    content: `Our sports net installation in ${location} includes site inspection, measurement, strong pole fixing, and high-quality net tensioning. We install cricket nets, football nets, terrace nets, and multi-sports nets with precision. People searching sports net installation near me trust our clean, fast, and reliable service.`
  },

  {
    header: `Types of Sports Nets Available in ${location}`,
    content: `We provide cricket practice nets, football goal nets, badminton court nets, volleyball nets, terrace sports nets, and safety nets in ${location}. Designed for durability and weather resistance, our solutions suit apartments, schools, academies, and playgrounds. Ideal for users searching best sports nets near me in ${location}.`
  },

  {
    header: `Sports Nets Cost in ${location} – Affordable Pricing`,
    content: `The cost of sports nets in ${location} depends on area size, net material, and installation type. We provide cheap and best sports net installation in Hyderabad with transparent pricing. If you search sports nets price near me or affordable sports net installation in ${location}, we deliver value-focused solutions.`
  },

  {
    header: `Why Choose Our Sports Nets Services in ${location}?`,
    content: `Customers in ${location} choose our sports nets for strong materials, expert installation, and long-lasting performance. From cricket nets to terrace safety sports nets, we ensure secure fixing and neat finishing. People searching best sports nets installation near me rely on our experienced team and quality service.`
  },

  {
    header: `Maintenance and Safety Tips for Sports Nets in ${location}`,
    content: `Sports nets in ${location} require periodic inspection and proper tension maintenance for long life. Avoid sharp impacts and schedule checks when needed. Regular care keeps cricket nets, football nets, and playground nets safe and durable, ensuring uninterrupted play and maximum protection.`
  }
];


    
    const url = `https://rohiniinvisiblegrills.com/services/sports-nets`;
    const serviceName = "Sports Netss";
    const serviceSlug = "sports-nets";
    
    const galleryImages = [
    "/images/Box-cricket-sports-nets-installation.webp",
    "/images/sports-nets-installation-for-cricket-and-football-practice.webp"
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
      __html: JSON.stringify( buildFullSchema(location, "services/sports-nets", faqs))
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
      backgroundImage: `url("/images/Box-cricket-sports-nets-installation.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
 <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

  <h1 className={`text-1xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
    Sports Nets Installation in Hyderabad – Cricket, Football & Multi-Sports Nets Near You
  </h1>

  <p className={`text-md md:text-[16px] max-w-3xl text-gray-200 `}>
    Professional sports nets installation in Hyderabad for cricket practice nets, football ground nets, badminton courts, terrace sports safety nets, and playground protection. Our durable and affordable sports nets provide safety, ball control, and long-lasting performance for homes, schools, and sports academies searching sports nets near me.
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
      src={"/images/Box-cricket-sports-nets-installation.webp" + "?v=hyderabad-telangana"}
      alt={`Invisible grill installation in near me hyderabad`}
      title={`Invisible grills in Hyderabad`}
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
          15,000+ Trusted Homes & 7 Years Warranty
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
  <Link href="/services/sports-nets" className="hover:underline">
  sports nets installation in Hyderabad
  </Link>
  {" > "}
  {location}

  </div>


  {/* CONTENT SECTIONS */}

  <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">

  {sportsNetsSections.map((section:any, index:number) => (

  <div key={index}>
    <div >
  <h2 className="text-2xl font-bold mb-4 text-green-900">
  {section.header}
  </h2>
  <div className="w-[100%] h-[1px] 
  
  bg-black/10
    mb-3  rounded-full"></div>
</div>
 
 {section.header.includes("Professional Sports Net Installation Process in") && (
  <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">
    
    <Image
      src={"/images/sports-nets-installation-for-cricket-and-football-practice.webp?v=near-me-hyderabad-telangana"}
      alt="Box cricket and all sports nets installation near me Hyderabad"
      title="Sports nets near me in Hyderabad"
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
<LocationScroller service="sports-nets" />

  {/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Looking for Sports Nets Installation in {location}?
</h2>

<p className="mb-6">
  Professional sports nets installation in {location} for cricket, football, terrace, and playground safety. Searching sports nets near me in Hyderabad? Contact us today and get 10% discount.
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