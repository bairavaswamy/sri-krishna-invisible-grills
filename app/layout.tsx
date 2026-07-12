import "./globals.css";
import type { Metadata } from "next";
import DelayedGoogleTagManager from "./components/DelayedGoogleTagManager";
import SiteStructuredData from "./components/SiteStructuredData";
import PromoMarquee from "./components/PromoMarquee";
import { siteConfig } from "./config/site.config";
import FloatingContact from "./components/FloatingContact";
import NavBar from "./components/NavBar";
import Footer from "./footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Home Safety Solutions`,
  description: siteConfig.description,
  icons: {
    icon: [{ url: siteConfig.logos.favicon, type: "image/png" }],
    shortcut: [{ url: siteConfig.logos.favicon }],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <SiteStructuredData />
       <div>
        <NavBar />
        <PromoMarquee />
        {children}
        <FloatingContact />
        <Footer />
        </div>
        <DelayedGoogleTagManager gtmId="GTM-MQR73NTD" />
      </body>
    </html>
  );
}
