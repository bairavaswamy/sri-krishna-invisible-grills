import type { Metadata } from "next";
import AboutClient from "../components/aboutClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Rohini Invisible Grills | Best Invisible Grills Near Me | Balcony Safety Grills Installation",
    description:
      "Looking for invisible grills near you? Rohini Invisible Grills provides balcony safety grills, anti bird grills, children safety grills & sports nets installation with best price, expert service & fast installation. Call 8790518724.",
    keywords: [
      "invisible grills near me",
      "best invisible grills",
      "balcony safety grills",
      "anti bird grills",
      "children safety grills",
      "sports nets installation",
      "window invisible grills",
      "invisible grills price",
    ],
    alternates: {
      canonical: "https://rohiniinvisiblegrills.com/about",
    },
    openGraph: {
      title:
        "Best Invisible Grills Near Me | Rohini Invisible Grills",
      description:
        "Premium invisible grill installation with best price & fast service. Call now.",
      url: "https://rohiniinvisiblegrills.com/about",
      siteName: "Rohini Invisible Grills",
      images: [
        {
          url: "/images/invisible-grill-for-balcony.webp",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}


export default function AboutPage() {
  return (<>
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Rohini Invisible Grills",
      "image": "https://yourdomain.com/images/invisible-grill-for-balcony.webp",
      "telephone": "+91-8790518724",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "areaServed": "India",
      "url": "https://yourdomain.com",
      "description":
        "Rohini Invisible Grills provides best invisible grill installation, balcony safety grills, anti bird grills, and sports nets services.",
      "priceRange": "₹₹",
      "openingHours": "Mo-Su 08:00-20:00"
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Invisible Grill Installation",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Rohini Invisible Grills"
      },
      "areaServed": {
        "@type": "Place",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Invisible Grill Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balcony Safety Invisible Grills" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Anti Bird Invisible Grills" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Children Safety Invisible Grills" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows Invisible Grills" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sports Nets Installation" } }
        ]
      }
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are invisible grills?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Invisible grills are stainless steel wire systems used for safety without blocking the view."
          }
        },
        {
          "@type": "Question",
          "name": "Do invisible grills stop pigeons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, invisible grills act as a strong barrier to prevent pigeons and birds."
          }
        }
      ]
    }),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "GeoCoordinates",
      "latitude": "17.3850",
      "longitude": "78.4867"
    }),
  }}
/>
 
 <AboutClient />
      </>
  );
}
