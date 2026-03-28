import dynamic from "next/dynamic";
import "./globals.css";
import type { Metadata } from "next";
import { HeaderSkeleton,FloatingContactSkeleton } from "./components/LoadingSkeletons";
import { Inter, Poppins } from 'next/font/google'
import { getGeo } from "./components/utils/getGeo";
import { buildHoneSchemaGraph } from "./components/schema/homeSchema";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap',
})

const FloatingContact = dynamic(() => import("./components/FloatingContact"), {
  loading: () => <FloatingContactSkeleton />,
  ssr: false,
});

const Footer = dynamic(() => import("./footer/Footer"), {
    ssr: true,
    loading: () => null,
  });

const NavBar = dynamic(() => import("./components/NavBar"), {
    loading: () => <HeaderSkeleton />,
    ssr: true,
  });

  const ContactDetailsBar = dynamic(() => import("./components/ContactDetailsBar"), {
    ssr: true,
    loading: () => null,
  });

  
  
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
  
    const url = `https://rohiniinvisiblegrills.com/`;
  
    const image = "/images/invisible-grill-for-balcony.webp";
  
    /* =========================
       ADVANCED SEO VARIABLES
    ========================== */
  
    const primaryKeyword = `Invisible Grills in ${location}`;
    //  const autokeywords = generateLocationKeywords(
    //   location,
    //   locations
    // );
  
    const title =
      `${primaryKeyword} | Bird Safety Nets & Balcony Protection | Rohini Invisible Grills`;
  
    const description =
      `Looking forbest problem resolved anti bird invisible grills in ${location}? Professional pigeon safety net & balcony protection installation near you. 16+ years experience, ISO quality materials, expert installation, affordable price & free site visit in ${location}. Call Rohini Invisible Grills today.`;
  
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

      icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-Rohini-invisible-grills.webp", sizes: "42x42", type: "image/webp" },
      { url: "/favicon-Rohini-invisible-grills.webp", sizes: "32x32", type: "image/webp" }
    ],
  },
  
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

   const location = "hyderabad"


  const faqs = [
  {
    question: `What are anti bird nets in ${location}?`,
    answer: `Anti bird nets are protective mesh systems installed on balconies, windows, and open spaces to prevent pigeons and other birds from entering and nesting.`
  },
  {
    question: `Do anti bird nets stop pigeons in ${location}?`,
    answer: `Yes. Anti bird nets are designed to completely block pigeons and other birds from accessing your balcony or building areas.`
  },
  {
    question: `Are anti bird nets safe for homes in ${location}?`,
    answer: `Yes. These nets are safe, eco-friendly, and do not harm birds while protecting your property.`
  },
  {
    question: `What material is used for bird nets in ${location}?`,
    answer: `High-quality nylon or HDPE materials are used, which are durable, weather-resistant, and long-lasting.`
  },
  {
    question: `How long does bird net installation take in ${location}?`,
    answer: `Most installations are completed within 2 to 4 hours depending on the area size.`
  },
  {
    question: `Do bird nets affect ventilation in ${location}?`,
    answer: `No. Bird nets allow proper air circulation and sunlight while preventing bird entry.`
  }
]

// export const metadata: Metadata = {
//   title: {
//     default: "Invisible Grills Hyderabad | Balcony Safety Nets | Anti Bird Nets",
//     template: "%s | Invisible Grills Hyderabad",
//   },
//   description:
//     "Best invisible grills in Hyderabad for balcony safety. We provide anti bird nets, children safety nets, sports nets and duct area safety nets installation services across Hyderabad.",
//   keywords: [
//     "Invisible grills Hyderabad",
//     "Balcony safety nets",
//     "Anti bird nets Hyderabad",
//     "Children safety nets",
//     "Pigeon safety nets",
//     "Sports nets installation",
//     "Invisible grills near me",
//   ],
//   authors: [{ name: "SJ Invisible Grills" }],
//   creator: "SJ Invisible Grills",
//   publisher: "SJ Invisible Grills",

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "Invisible Grills Hyderabad",
//     description:
//       "Balcony safety nets, anti bird nets and invisible grills installation services across Hyderabad.",
//     url: "https://yourwebsite.com",
//     siteName: "Invisible Grills Hyderabad",
//     locale: "en_IN",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Invisible Grills Hyderabad",
//     description:
//       "Best invisible grills and safety nets installation in Hyderabad.",
//   },
// };



    const url = `https://rohiniinvisiblegrills.com/`;
    const serviceName = "Invisible Grills";
    const serviceSlug = "invisible-grills";
    
    const galleryImages = [
     '/images/children-safety-invisible-grills-for-balcony.webp',
    "/cards/stainless-steel-invisible-grill.webp",
    "/images/invisible-grill-for-balcony.webp",
    "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    '/images/sport-nets-installation-hyderabad.webp'
    ];
    
    
      // Build the full schema graph
    const schemaGraph = buildHoneSchemaGraph(location, url, serviceName, serviceSlug,  galleryImages);
    
    // Convert to JSON-LD for injecting in the page
    const jsonLd = JSON.stringify(schemaGraph, null, 2);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd 
          }}
        />
       <div className={poppins.className}>
        <NavBar />
        <ContactDetailsBar />
        {children}
        <FloatingContact />
        <Footer />
        </div>
        <GoogleTagManager gtmId="GTM-57DS2TV8" />
      </body>
    </html>
  );
}