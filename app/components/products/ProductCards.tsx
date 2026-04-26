"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { Service } from "../data/productServices";

interface ProductCardProps {
  service: Service;
}

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-green-600",
  "Most Visited": "bg-blue-600",
  "Top Rated": "bg-purple-600",
  "Hot Deal": "bg-red-600",
  "Best Deal": "bg-orange-500",
  "Popular": "bg-indigo-600",
  "Recommended": "bg-teal-600",
  "Pet Safe": "bg-pink-600",
  "Budget Friendly": "bg-yellow-500 text-black",
  "Space Saver": "bg-gray-700",
  "Top Choice": "bg-emerald-600",
};

export const ProductCard: React.FC<ProductCardProps> = ({ service }) => {
  return (
    <div className="group relative max-w-sm bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* ✅ SAME Offer Badge (unchanged) */}
  <div className="absolute top-4 left-4 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center font-semibold text-xs shadow-lg">
    {service.offerPrice}
  </div>

  {/* ⭐ Rating (Clean Premium Style) */}
  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow border border-white/40">
    <span className="text-yellow-500">★</span>
    <span className="text-gray-800">{service.rating}</span>
  </div>

  {/* 🔥 Bottom Badge (Elegant Minimal Tag) */}
  {service.badge && (
    <div className="absolute bottom-4 right-4">
      <span className="bg-black text-white text-[11px] px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
        {service.badge}
      </span>
    </div>
  )}

  {/* Optional subtle gradient for depth */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
</div>

      {/* Content */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold mb-3">
          {service.title}
        </h2>

        <p className="text-sm text-gray-600 mb-5 ">
          {service.description}
        </p>

        <Link
          href={`/services/${service.slug}`}
          className="inline-block bg-black text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-gray-800 transition"
        >
          Explore Product
        </Link>
      </div>
    </div>
  );
};