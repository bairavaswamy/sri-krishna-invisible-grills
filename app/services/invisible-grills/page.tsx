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

 const breadcrumbs = generateBreadcrumb(location,"services/invisible-grills")
   const authorityScore = locationAuthorityScore(location)
const faqs = [

    {
      question:`What is the price of invisible grills in ${location}?`,
      answer:`The price depends on balcony size and installation design. Rohini Invisible Grills provides affordable installation services in ${location}.`
    },
    {
      question: `Are invisible grills safe for children in ${location}?`,
      answer: `Yes. Invisible grills installed in ${location} provide strong balcony protection and help prevent accidental falls.`
    },
    {
      question: `Do invisible grills block the outside view in ${location}?`,
      answer: `No. The stainless steel wires are thin and almost invisible, so they keep the outside view clear.`
    },
    {
      question: `Can invisible grills stop pigeons in ${location}?`,
      answer: `Yes. Invisible grills create a barrier that prevents birds from entering balconies or nesting.`
    },
    {
      question: `How long does invisible grill installation take in ${location}?`,
      answer: `Most installations are completed within a few hours depending on balcony size.`
    },
    {
      question:`Do invisible grills stop pigeons in ${location}?`,
      answer:`Yes. The stainless steel cables act as a barrier that prevents birds from entering balconies.`
    },
    {
        question:`Do invisible grills block balcony view in ${location}?`,
        answer:`No. The wires are very thin and almost invisible, so the outside view remains clear.`
    }
  ];

  const invisibleGrillsSections = [
  {
    header: `Invisible Grills Installation in ${location}`,
    content: `Invisible grills in ${location} are a modern safety solution for apartments and balconies. Our installation protects children and pets while keeping views open and stylish. Made with high-tensile stainless steel cables, they also work as balcony safety nets and bird protection systems. If you are searching invisible grills, safety nets near me, or anti bird nets in ${location}, our expert service provides durable and secure installation.`
  },

  {
    header: `What Are Invisible Grills and Why Are They Popular in ${location}?`,
    content: `Invisible grills are strong stainless steel safety systems designed for balconies, windows, and utility areas in ${location}. They provide protection similar to balcony safety nets and pigeon safety nets while maintaining airflow and visibility. Homeowners searching bird nets near me, anti bird nets, or invisible grill installation choose this solution for safety, modern appearance, and long-lasting performance.`
  },

  {
    header: `Professional Invisible Grill Installation Process in ${location}`,
    content: `Our invisible grill installation in ${location} begins with inspection, accurate measurement, and secure fixing using premium materials. Stainless steel cables are tensioned precisely for safety and durability. This process ensures reliable balcony safety nets and bird control protection. People searching net installation near me or invisible grills near me trust our professional and clean installation service.`
  },

  {
    header: `Invisible Grills for Bird Protection in ${location}`,
    content: `Bird problems like pigeons nesting are common in ${location}. Invisible grills act as anti bird nets and pigeon safety nets by creating a safe barrier without blocking views. They prevent bird entry while maintaining airflow and light. Homeowners searching bird control nets, balcony nets, or bird nets near me prefer invisible grills for clean, hygienic, and long-term balcony protection.`
  },

  {
    header: `Cost of Invisible Grills in ${location} – Pricing and Factors`,
    content: `The cost of invisible grills in ${location} depends on balcony size, materials, and installation requirements. Compared to traditional grills or basic safety nets, invisible grills provide long-term value with low maintenance. If you search invisible grills price, balcony safety nets cost, or anti bird nets near me, we offer transparent pricing and customized solutions for every home.`
  },

  {
    header: `Why Homeowners in ${location} Choose Our Invisible Grill Services`,
    content: `Homeowners in ${location} choose our services for reliable invisible grills, balcony safety nets, and pigeon safety net installation. We use high-grade stainless steel cables installed by trained experts for maximum safety. Customers searching invisible grills near me, bird nets installation, or anti bird net services trust us for quality materials, neat finishing, and long-lasting protection.`
  },

  {
    header: `Safety and Maintenance Tips for Invisible Grills in ${location}`,
    content: `Invisible grills in ${location} require simple maintenance like periodic cleaning and inspection to maintain strength and appearance. Avoid hanging heavy items on cables and schedule professional checks when needed. Proper care ensures long-lasting performance similar to premium balcony safety nets and bird control nets, keeping your home safe and secure for years.`
  }
];


    
    const url = `https://rohiniinvisiblegrills.com/services/invisible-grills`;
    const serviceName = "Invisible Grills";
    const serviceSlug = "invisible-grills";
    
    const galleryImages = [
    "/images/invisible-grills-bird-netting-in-hyderabad.webp",
    "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp"
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
      backgroundImage: `url("/images/invisible-grills-bird-netting-in-hyderabad.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
      Invisible grills in Hyderabad - Professional Installation for Bird Protection
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
      Invisible grills in Hyderabad designed for modern homes that need safety without losing open views strong stainless steel cables protect balconies windows and high rise spaces while keeping the design elegant and minimal
    </p>

<div className="mt-6 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">

  {/* CALL BUTTON */}
  <a
    href="tel:+919999999999"
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
    href="https://wa.me/919999999999"
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
      src={"/images/invisible-grills-bird-netting-in-hyderabad.webp" + "?v=hyderabad-telangana"}
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
  <Link href="/services/invisible-grills" className="hover:underline">
  Invisible Grills
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
 
 {section.header.includes("Invisible Grills for Bird Protection") && (
  <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">
    
    <Image
      src={"/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp?v=near-me-hyderabad-telangana"}
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

  {/* <NearbyServiceSection page={page} /> */}
<LocationScroller service="invisible-grills" />

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