import type { Metadata } from "next";
import { Building2, Mail, MapPin, Phone } from "lucide-react";

const url = "https://rohiniinvisiblegrills.com/return-policy";
const title = "Return & Refund Policy | Rohini Invisible Grills";
const description =
  "Read Rohini Invisible Grills return, refund, cancellation, warranty, and installation service terms before booking invisible grills or safety net work.";

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

const returnPolicyJsonLd = JSON.stringify({
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

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: returnPolicyJsonLd,
        }}
      />

      <div className="bg-black px-6 py-16 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Return & Refund Policy
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl">
          Please review our policies carefully before placing an order.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="space-y-10 rounded-2xl bg-white p-8 shadow-lg">
          <section>
            <p className="leading-relaxed text-gray-600">
              This Return and Refund Policy applies to all products and services
              offered by Rohini Invisible Grills. By placing an order, you agree
              to the terms outlined below.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">No Return Policy</h2>
            <p className="leading-relaxed text-gray-600">
              All our products, including invisible grills and related
              installations, are customized based on your specific measurements
              and requirements. Due to this made-to-order nature, we do not
              accept returns once the order has been confirmed and processed.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">No Refund Policy</h2>
            <p className="leading-relaxed text-gray-600">
              All payments made are final and non-refundable. Once an order is
              confirmed, materials are procured and resources are allocated
              specifically for your project, making refunds not feasible.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Cancellation Policy</h2>
            <p className="leading-relaxed text-gray-600">
              Orders can only be cancelled within 24 hours of booking and only
              if processing has not started. After this period, cancellations are
              not permitted.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Installation & Service Terms
            </h2>
            <p className="leading-relaxed text-gray-600">
              Installation dates are scheduled based on availability and site
              readiness. Customers must ensure the site is accessible and
              prepared. Delays caused due to site conditions are not the
              responsibility of the company.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Exceptions & Support</h2>
            <p className="leading-relaxed text-gray-600">
              In rare cases involving verified defects or installation issues
              caused by us, we will provide repair or replacement services.
              Refunds will not be issued under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Warranty</h2>
            <p className="leading-relaxed text-gray-600">
              Warranty, if applicable, covers only manufacturing defects and does
              not include damages caused by misuse, external impact, or natural
              wear and tear.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Contact Information</h2>
            <p className="leading-relaxed text-gray-600">
              For any questions regarding this policy, please contact us before
              placing your order.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="tel:+918790518724"
                className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="text-blue-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">+91-8790518724</p>
                </div>
              </a>

              <a
                href="mailto:info@rohiniinvisiblegrills.com"
                className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Mail className="text-green-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">
                    info@rohiniinvisiblegrills.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad+Telangana+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <MapPin className="text-red-600" size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">
                    Hyderabad, Telangana
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  <Building2
                    className="text-purple-600"
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium text-gray-800">
                    Rohini Invisible Grills
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Governing Law</h2>
            <p className="leading-relaxed text-gray-600">
              This policy shall be governed by and interpreted in accordance with
              the laws of India. Any disputes shall be subject to the
              jurisdiction of courts in Hyderabad, Telangana.
            </p>
          </section>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Last updated: March 2026
        </div>
      </div>
    </div>
  );
}
