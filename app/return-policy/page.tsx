import React from "react";

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Return & Refund Policy</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Please review our policies carefully before placing an order.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-10">

          {/* Intro */}
          <section>
            <p className="text-gray-600 leading-relaxed">
              This Return and Refund Policy applies to all products and services offered by Rohini Invisible Grills. By placing an order, you agree to the terms outlined below.
            </p>
          </section>

          {/* No Return Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">No Return Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              All our products, including invisible grills and related installations, are customized based on your specific measurements and requirements. Due to this made-to-order nature, we do not accept returns once the order has been confirmed and processed.
            </p>
          </section>

          {/* No Refund Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">No Refund Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              All payments made are final and non-refundable. Once an order is confirmed, materials are procured and resources are allocated specifically for your project, making refunds not feasible.
            </p>
          </section>

          {/* Cancellation Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Cancellation Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Orders can only be cancelled within 24 hours of booking and only if processing has not started. After this period, cancellations are not permitted.
            </p>
          </section>

          {/* Installation Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Installation & Service Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Installation dates are scheduled based on availability and site readiness. Customers must ensure the site is accessible and prepared. Delays caused due to site conditions are not the responsibility of the company.
            </p>
          </section>

          {/* Exceptions */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Exceptions & Support</h2>
            <p className="text-gray-600 leading-relaxed">
              In rare cases involving verified defects or installation issues caused by us, we will provide repair or replacement services. Refunds will not be issued under any circumstances.
            </p>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Warranty</h2>
            <p className="text-gray-600 leading-relaxed">
              Warranty, if applicable, covers only manufacturing defects and does not include damages caused by misuse, external impact, or natural wear and tear.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding this policy, please contact us before placing your order.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a href="tel:+918790518724" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">+91-8790518724</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@rohiniinvisiblegrills.com" className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition">
                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-800">info@rohiniinvisiblegrills.com</p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad+Telangana+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">Hyderabad, Telangana</p>
                </div>
              </a>

              {/* Company */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-full">
                  🏢
                </div>
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium text-gray-800">Rohini Invisible Grills</p>
                </div>
              </div>
            </div>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              This policy shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Hyderabad, Telangana.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="text-center mt-10 text-sm text-gray-500">
          Last updated: March 2026
        </div>
      </div>
    </div>
  );
}
