"use client";
import Image from "next/image";
import SocialProfileLinks from "./SocialProfileLinks";


const services = [
  { title: "Invisible Grills" },
  { title: "Balcony Safety Invisible Grills" },
  { title: "Anti Bird Invisible Grills" },
  { title: "Sports Nets" },
  { title: "Windows Invisible Grills" },
  { title: "Children Safety Invisible Grills" },
];

const galleryImages = [
  {
    src: "/images/children-safety-invisible-grills-for-balcony.webp",
    alt: "Children safety invisible grills for apartment balconies",
  },
  {
    src: "/cards/stainless-steel-invisible-grill.webp",
    alt: "Stainless steel invisible grill cable system",
  },
  {
    src: "/images/invisible-grill-for-balcony.webp",
    alt: "Balcony invisible grill installation with clear outside view",
  },
  {
    src: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
    alt: "Apartment balcony invisible grills in Hyderabad",
  },
  {
    src: "/images/sport-nets-installation-hyderabad.webp",
    alt: "Sports net installation for practice areas in Hyderabad",
  },
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
                    With expert installation and premium materials, we ensure
                    long-lasting durability, modern design, and complete peace of mind.
                  </p>
                </div>
        
                <div className="grid grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative w-full h-40">
                      <Image
                        src={image.src}
                        alt={image.alt}
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
                      Skilled professionals ensure neat, reliable installation.
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

              <section className="max-w-6xl mx-auto px-6 pb-12">
                <div className="rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-lg shadow-orange-100/50 md:p-8">
                  <SocialProfileLinks
                    heading="Connect With Rohini Invisible Grills"
                    description="Follow our official profiles for installation updates, balcony safety ideas, bird protection work, and service announcements."
                    showLabels
                    variant="warm"
                  />
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
