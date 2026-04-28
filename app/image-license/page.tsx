import type { Metadata } from "next";

const url = "https://rohiniinvisiblegrills.com/image-license";
const title = "Image License & Usage Policy | Rohini Invisible Grills";
const description =
  "Review Rohini Invisible Grills image ownership, copyright, licensing permission, and contact details for commercial image usage requests.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Rohini Invisible Grills",
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const imageLicenseJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  url,
  name: title,
  description,
  inLanguage: "en-IN",
  isPartOf: {
    "@id": "https://rohiniinvisiblegrills.com/#website",
  },
  about: {
    "@id": "https://rohiniinvisiblegrills.com/#organization",
  },
});

export default function ImageLicensePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: imageLicenseJsonLd,
        }}
      />
      <h1 className="text-3xl font-bold mb-6">
        Image License & Usage Policy
      </h1>

      <p className="mb-6">
        Welcome to the official Image License and Usage Policy page of{" "}
        <strong>Rohini Invisible Grills</strong>. This page outlines the
        ownership, usage rights, and licensing terms for all images displayed
        across our website.
      </p>

      {/* Ownership */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Image Ownership</h2>
        <p>
          All images, photographs, graphics, and visual media published on this
          website are the exclusive property of{" "}
          <strong>Rohini Invisible Grills</strong>, unless otherwise stated.
          These images are protected under applicable copyright laws and
          intellectual property regulations.
        </p>
      </section>

      {/* Unauthorized Use */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Unauthorized Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Copying, downloading, or reproducing images for commercial use</li>
          <li>
            Republishing images on websites, social media, or marketing materials
          </li>
          <li>
            Modifying, editing, or creating derivative works from our images
          </li>
          <li>
            Using images for advertisements, promotions, or resale
          </li>
        </ul>
        <p className="mt-3">
          Any unauthorized usage may result in legal action.
        </p>
      </section>

      {/* Permitted Use */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Permitted Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal, non-commercial viewing</li>
          <li>
            Sharing via direct website links (without downloading or altering
            images)
          </li>
        </ul>
      </section>

      {/* Licensing */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Image Licensing</h2>
        <p>
          If you wish to use any image for commercial purposes, media
          publications, marketing campaigns, or third-party platforms, you must
          obtain a valid license from Rohini Invisible Grills.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          How to Request a License
        </h2>
        <p className="mb-3">
          To request permission or licensing, please share the following details:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>Your name and organization</li>
          <li>Intended use of the image</li>
          <li>Platform or medium of usage</li>
          <li>Duration of use</li>
        </ul>
        <p>
          <strong>Phone:</strong> +91 8790518724 <br />
          <strong>Contact Page:</strong>{" "}
          <a
            href="https://rohiniinvisiblegrills.com/contact-us"
            className="text-blue-600 underline"
          >
            rohiniinvisiblegrills.com/contact-us
          </a>
        </p>
      </section>

      {/* Copyright */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Copyright Notice</h2>
        <p>
          Copyright {new Date().getFullYear()} Rohini Invisible Grills. All rights
          reserved.
        </p>
      </section>

      {/* Updates */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Policy Updates</h2>
        <p>
          Rohini Invisible Grills reserves the right to update or modify this
          policy at any time without prior notice. Please review this page
          periodically for changes.
        </p>
      </section>

      <p className="mt-10 font-medium text-center">
        Safe Balconies. Clear Views. Professional Installation.
      </p>
    </main>
  );
}
