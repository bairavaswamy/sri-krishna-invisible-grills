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

 const breadcrumbs = generateBreadcrumb(location,"services/balcony-safety-invisible-grills")
   const authorityScore = locationAuthorityScore(location)
const faqs = [

  {
    question: `What is the price of invisible grills near me in ${location}?`,
    answer: `Invisible grill price in ${location} depends on balcony or window size, material grade, and installation requirements. We provide affordable invisible grills, balcony safety invisible grills near me, and anti bird net solutions with free inspection and transparent pricing.`
  },

  {
    question: `Are balcony safety invisible grills near me safe for children and pets in ${location}?`,
    answer: `Yes. Balcony safety invisible grills installed in ${location} are designed using high-tensile stainless steel cables that prevent accidental falls. They provide strong protection for children and pets while keeping airflow and visibility open.`
  },

  {
    question: `Do invisible grills or safety nets near me block the outside view?`,
    answer: `No. Invisible grills use thin stainless steel wires that remain almost invisible from a distance. Unlike traditional grills or heavy nets, they maintain clear outside views while working like balcony safety nets and bird protection systems.`
  },

  {
    question: `Can invisible grills work like anti bird nets or pigeon safety nets in ${location}?`,
    answer: `Yes. Invisible grills act as effective anti bird nets and pigeon safety nets by creating a protective barrier that prevents birds from entering balconies or windows without harming them.`
  },

  {
    question: `How long does invisible grill installation near me take in ${location}?`,
    answer: `Most invisible grill installations in ${location} are completed within a few hours depending on area size. Our technicians provide quick and clean installation with minimal disturbance to residents.`
  },

  {
    question: `Which is better — invisible grills or bird nets near me for balcony protection?`,
    answer: `Invisible grills are a long-term solution compared to basic bird nets. They provide balcony safety, anti bird protection, durability, and modern appearance while requiring very low maintenance.`
  },

  {
    question: `Do you provide invisible grills, balcony safety nets, and anti bird net installation near me in ${location}?`,
    answer: `Yes. We offer invisible grill installation, balcony safety nets, pigeon safety nets, and anti bird net services across ${location}. Our team provides site inspection, professional fitting, and long-lasting safety solutions for homes and apartments.`
  }

];

  const invisibleGrillsSections = [

{
header:`Balcony Safety Invisible Grills Installation in ${location}`,
content:`Balcony safety invisible grills in ${location} protect homes without blocking views. These modern systems work like balcony safety nets, children safety nets, and bird safety nets near me solutions. Families searching anti bird net or children invisible grills in Hyderabad choose this option for strong protection, airflow, and elegant balcony design suitable for apartments and high-rise living.`
},

{
header:`Premium 304 Grade Stainless Steel Material Used in Our Grills`,
content:`Our invisible grills use premium 304 grade stainless steel cables designed for long durability in Hyderabad weather. These materials resist rust and work better than regular balcony safety nets or pigeon safety nets near me solutions. Strong nylon coating improves safety, making them ideal for children safety nets, anti bird net protection, and modern balcony security systems.`
},

{
header:`How Balcony Invisible Grills Are Installed`,
content:`Invisible grill installation in ${location} starts with site inspection and accurate measurement. Aluminium channels are fixed securely, followed by tensioned stainless steel wires. This professional method creates strong balcony safety nets, bird safety nets near me protection, and anti bird net barriers. Proper installation ensures long-lasting safety for children, pets, and apartment balconies.`
},

{
header:`Why Balcony Safety Is Important for Apartments`,
content:`Open balconies in Hyderabad apartments need reliable protection. Invisible grills act as children safety nets, pigeon safety nets near me, and balcony safety nets while keeping views open. Homeowners searching best balcony safety nets in Hyderabad prefer invisible grills because they prevent accidents, reduce bird problems, and maintain modern architectural appearance.`
},

{
header:`Balcony Safety Invisible Grill Cost in ${location}`,
content:`The cost of invisible grills in ${location} depends on balcony size, height, and installation area. Compared to basic bird nets or anti bird net systems, invisible grills provide long-term value with minimal maintenance. Customers searching balcony safety nets price, pigeon safety nets near me in Hyderabad, or safety nets near me get customized and transparent pricing solutions.`
},

{
header:`Why Homeowners Choose Our Balcony Safety Invisible Grills`,
content:`Homeowners choose our services for best balcony safety nets in Hyderabad, children invisible grills in Hyderabad, and anti bird net installation. We provide durable stainless steel systems that combine safety, neat finishing, and professional installation. Our grills also support bird protection and sports nets in Hyderabad requirements for residential and utility spaces.`
},

{
header:`Simple Maintenance for Balcony Invisible Grills`,
content:`Invisible grills require minimal maintenance compared to traditional safety nets. Regular cleaning keeps wires strong and visually clear. Avoid hanging heavy weight on cables for long life. With simple care, these systems work as long-term balcony safety nets, bird safety nets near me solutions, pigeon safety nets, and children safety protection for modern Hyderabad homes.`
}

];


    
    const url = `https://rohiniinvisiblegrills.com/services/balcony-safety-invisible-grills`;
    const serviceName = "Balcony Safety Invisible Grills";
    const serviceSlug = "balcony-safety-invisible-grills";
    
    const galleryImages = [
    "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    "/images/drybalcony-invisible-grills-near-me.webp"
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
      backgroundImage: `url("/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp")`
    }}
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r  from-black/70 via-black/60 to-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-6 text-center md:text-left">

    <h1 className={`text-2xl md:text-3xl font-bold leading-tight mb-6 drop-shadow-lg `}>
      Balcony Safety Invisible Grills in Hyderabad - Professional Installation for Bird Protection
    </h1>

    <p className={`text-md md:text-lg max-w-3xl text-gray-200 `}>
      Hyderabad invisible grill specialists installing high tensile stainless steel balcony safety systems that secure homes against accidents birds and falls while preserving open skyline views
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
      src={"/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp" + "?v=hyderabad-telangana"}
      alt={`Balcony safety invisible grill installation in near me hyderabad`}
      title={`Balcony Safety Invisible Grills in Hyderabad`}
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
  <Link href="/services/balcony-safety-invisible-grills" className="hover:underline">
  Balcony Safety Invisible Grills
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

{section.header.includes("Why Balcony Safety Is Important for Apartments") && (
  <div className="relative w-full h-[260px] md:h-[320px] my-6 rounded-xl overflow-hidden">
    
    <Image
      src={"/images/drybalcony-invisible-grills-near-me.webp?v=near-me-hyderabad-telangana"}
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

  {/* <NearbyServiceSection page={page} /> */}
<LocationScroller service="balcony-safety-invisible-grills" />

  {/* CTA */}

  <section className="bg-[#344A6C] text-white py-14">

  <div className="max-w-5xl mx-auto px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
  Need Invisible Grills in {location}?
  </h2>

  <p className="mb-6">
  Contact Rohini Invisible Grills today for professional installation.
  Protect your balcony and keep birds away and Get 10% discount on all balcony safetyinvisible grills.
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