"use client";
import Image from "next/image";


const services = [
  { title: "Invisible Grills" },
  { title: "Balcony Safety Invisible Grills" },
  { title: "Anti Bird Invisible Grills" },
  { title: "Sports Nets" },
  { title: "Windows Invisible Grills" },
  { title: "Children Safety Invisible Grills" },
];

const galleryImages = [
  "/images/children-safety-invisible-grills-for-balcony.webp",
  "/cards/stainless-steel-invisible-grill.webp",
  "/images/invisible-grill-for-balcony.webp",
  "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
  "/images/sport-nets-installation-hyderabad.webp",
];




export default function AboutClient(){

    return(
        <div className="bg-white text-gray-800">
              {/* Hero Section */}
              <section className="text-center py-16 px-6 bg-gradient-to-r from-orange-100 to-orange-50">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Rohini Invisible Grills
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  We provide premium invisible grill installations designed to enhance
                  safety, style, and protection for modern homes and apartments.
                </p>
              </section>
        
              {/* About Content */}
              <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Rohini Invisible Grills is a trusted name in providing high-quality
                    safety solutions for residential and commercial spaces. We
                    specialize in invisible grills that protect your loved ones without
                    compromising your view.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    With expert installation and premium materials, we ensure long-
                    lasting durability, modern design, and complete peace of mind.
                  </p>
                </div>
        
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.map((img, index) => (
                    <div key={index} className="relative w-full h-40">
                      <Image
                        src={img}
                        alt="gallery"
                        fill
                        className="object-cover rounded-xl shadow-md"
                      />
                    </div>
                  ))}
                </div>
              </section>
        
              {/* Services Section */}
              <section className="bg-gray-50 py-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">
                  Our Services
                </h2>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                    >
                      <h3 className="font-semibold text-lg text-center">
                        {service.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </section>
        
              {/* Why Choose Us */}
              <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-semibold text-center mb-8">
                  Why Choose Us
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">
                      We use high-grade stainless steel for maximum durability and
                      safety.
                    </p>
                  </div>
                  <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">Expert Installation</h3>
                    <p className="text-gray-600 text-sm">
                      Skilled professionals ensure quick and perfect installation.
                    </p>
                  </div>
                  <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600 text-sm">
                      High-quality service at competitive and transparent pricing.
                    </p>
                  </div>
                </div>
              </section>
        
              {/* CTA Section */}
              <section className="bg-[#344A6C] text-white text-center py-12 px-6">
                <h2 className="text-3xl font-bold mb-4">
                  Get Your Free Installation Quote Today
                </h2>
                <p className="mb-6">
                  Contact us now for safe, stylish, and durable invisible grill
                  solutions.
                </p>
                <a
                  href="tel:8790518724"
                  className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100"
                >
                  Call 8790518724
                </a>
              </section>
            </div>
    )
}