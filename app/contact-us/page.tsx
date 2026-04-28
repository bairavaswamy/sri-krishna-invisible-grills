import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { localBusinessSchema } from "../components/schema/localBusiness";
import { organizationSchema } from "../components/schema/organization";

const url = "https://rohiniinvisiblegrills.com/contact-us";
const title = "Contact Rohini Invisible Grills | Free Site Visit";
const description =
  "Contact Rohini Invisible Grills for invisible grill installation, bird nets, balcony safety systems, and Bachupally branch service enquiries.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  keywords: [
    "contact Rohini Invisible Grills",
    "invisible grills free site visit",
    "Bachupally invisible grills branch",
    "balcony safety grills Hyderabad contact",
    "bird net installation Hyderabad contact",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: "Rohini Invisible Grills",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/invisible-grill-for-balcony.webp",
        width: 1200,
        height: 630,
        alt: "Rohini Invisible Grills contact and Bachupally branch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/invisible-grill-for-balcony.webp"],
  },
};

const contactJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema("Bachupally", url),
    {
      "@type": "ContactPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: "en-IN",
      about: {
        "@id": "https://rohiniinvisiblegrills.com/#organization",
      },
      mainEntity: {
        "@id": `${url}#localbusiness`,
      },
    },
  ],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: contactJsonLd,
        }}
      />
      <ContactPageClient />
    </>
  );
}
