import dynamic from "next/dynamic";
import "./globals.css";
import type { Metadata } from "next";
import { HeaderSkeleton,FloatingContactSkeleton } from "./components/LoadingSkeletons";
import { Poppins } from 'next/font/google'
import DelayedGoogleTagManager from "./components/DelayedGoogleTagManager";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600','700'],
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

export const metadata: Metadata = {
  metadataBase: new URL("https://rohiniinvisiblegrills.com"),
  title: "Rohini Invisible Grills | Balcony Safety & Bird Control",
  description:
    "Rohini Invisible Grills installs invisible grills, balcony safety systems, bird nets, and window protection solutions across Hyderabad.",
  icons: {
    icon: [
      { url: "/favicon-Rohini-invisible-grills.webp", sizes: "42x42", type: "image/webp" },
      { url: "/favicon-Rohini-invisible-grills.webp", sizes: "32x32", type: "image/webp" }
    ],
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
       <div className={poppins.className}>
        <NavBar />
        <ContactDetailsBar />
        {children}
        <FloatingContact />
        <Footer />
        </div>
        <DelayedGoogleTagManager gtmId="GTM-57DS2TV8" />
      </body>
    </html>
  );
}
