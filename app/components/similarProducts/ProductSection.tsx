"use client";

import ProductCard from "./ProductCard";
import { ProductItem } from "../seo/types";
const products: ProductItem[] = [
  {
    id: 1,
    title: "Balcony Invisible Grills Installation",
    location: "Hyderabad",
    image: "/cards/invisible-grill.webp",
    price: "₹140 / sq.ft",
    description:
      "Premium balcony invisible grills installation in Hyderabad for safety and modern look. Protect children and pets without blocking your view with high-quality SS 304 wires.",
    tags: ["Balcony Safety", "Child Protection"],
    color: "orange",
  },
  {
    id: 2,
    title: "Anti Bird Net Installation",
    location: "Kokapet",
    image: "/cards/anti-bird-invisible-grills.webp",
    price: "₹25 / sq.ft",
    description:
      "Professional anti bird net installation in Kokapet to stop pigeons and birds from entering balconies. Durable, weather-resistant nets for long-lasting protection.",
    tags: ["Pigeon Control", "Bird Protection"],
    color: "blue",
  },
  {
    id: 3,
    title: "Children Safety Invisible Grills",
    location: "Gachibowli",
    image: "/cards/children-safety-invisible-grills-for-balcony.webp",
    price: "₹160 / sq.ft",
    description:
      "Ensure complete child safety with invisible grills in Gachibowli apartments. Strong, rust-proof wires designed for high-rise balcony protection.",
    tags: ["Kids Safety", "Apartment Safety"],
    color: "orange",
  },
  {
    id: 4,
    title: "Window Invisible Grills Installation",
    location: "Madhapur",
    image: "/cards/window-anti-bird-invisible-grills-installation-near-me.webp",
    price: "₹150 / sq.ft",
    description:
      "Invisible grills for windows in Madhapur to enhance safety and ventilation. Ideal for apartments and homes with sleek and secure design.",
    tags: ["Window Safety", "Modern Design"],
    color: "blue",
  },
//   {
//     id: 5,
//     title: "Stainless Steel Invisible Grills",
//     location: "Hitech City",
//     image: "/cards/stainless-steel-invisible-grill.webp",
//     price: "₹165 / sq.ft",
//     description:
//       "High-quality stainless steel invisible grills installation in Hitech City with SS 316 material for extra strength, durability, and corrosion resistance.",
//     tags: ["SS 316 Quality", "High Durability"],
//     color: "orange",
//   },
//   {
//     id: 6,
//     title: "Pigeon Safety Nets for Balcony",
//     location: "Manikonda",
//     image: "/images/pigeon-safety-invisible-grills.webp",
//     price: "₹22 / sq.ft",
//     description:
//       "Affordable pigeon safety nets installation in Manikonda to keep balconies clean and hygienic. Best solution for bird control in apartments.",
//     tags: ["Bird Control", "Low Cost"],
//     color: "blue",
//   },
//   {
//     id: 7,
//     title: "Dry Balcony Invisible Grills",
//     location: "Narsingi",
//     image: "/cards/dry-balcony-invisible-grills-installation-and-nets.webp",
//     price: "₹155 / sq.ft",
//     description:
//       "Secure your utility and dry balcony area with invisible grills in Narsingi. Prevent accidents and bird entry with minimal visual obstruction.",
//     tags: ["Utility Area", "Safety"],
//     color: "orange",
//   },
//   {
//     id: 8,
//     title: "Apartment Balcony Safety Nets",
//     location: "Financial District",
//     image: "/images/apartment-balcony-invisible-grills-near-me-in-hyderabad.webp",
//     price: "₹28 / sq.ft",
//     description:
//       "Apartment balcony safety nets in Financial District for complete protection from birds and falls. Strong nylon nets with expert installation.",
//     tags: ["Apartment Safety", "Bird Nets"],
//     color: "blue",
//   },
//   {
//     id: 9,
//     title: "Sports Nets Installation",
//     location: "Hyderabad",
//     image: "/images/Box-cricket-practice-net-installation-near-me.webp",
//     price: "₹20 / sq.ft",
//     description:
//       "Professional sports nets installation in Hyderabad for cricket practice nets, turf enclosures, and playground safety solutions.",
//     tags: ["Cricket Nets", "Outdoor Safety"],
//     color: "orange",
//   },
];

export default function ProductsSection({ title }: { title: string }) {
  return (
    <section className="py-14 px-4 md:px-10 bg-[#f4f4f4]">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 m-5 md:m-0 gap-10 ml-auto mr-auto">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}